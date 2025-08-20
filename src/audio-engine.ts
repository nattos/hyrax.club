import { action, makeObservable, observable, runInAction } from 'mobx';
import { wrapInt } from './layout-utils';
import { AudioEnvironment, Samples, SampleType } from './audio-environment';

export interface NoteInstance {
  key: string;
  sample: SampleType;
  node: AudioBufferSourceNode;
  outNode: AudioNode;
  isEnded: boolean;
}

export interface Note {
  key: string;
  sample: SampleType;
  gain?: number;
}

export type NoteOr = Note | undefined;

export interface Track {
  playing?: NoteInstance;
  queued?: NoteInstance;
  pattern?: NoteOr[];
  options: TrackOptions;
}

export interface TrackOptions {
  seqStepSize: number;
}

const LAUNCH_FUDGE = 10 / 1000.0; // A few millis.
const BEAT_GRANULARITY = 16; // 1 / 64th notes.

export class AudioEngine {
  @observable observables = observable({
    isPlaying: false,
    timeBeats: 0.0,
    channelNotes: new Map<string, string>(),
  });

  private _transportMomentaryPlaying = false;
  private _transportPlaying = false;
  private transportBeatNumber = 0;
  private seqPrevBeatNumber = -1;
  private transportInterval?: ReturnType<typeof setInterval>;
  private tracks = new Map<string, Track>();
  private samples!: Samples;
  readonly audioContext: AudioContext;
  private ready;

  options = {
    bpm: 120,
  };

  get destination() {
    return AudioEnvironment.instance.destination;
  }

  get isTransportMomentaryPlaying() { return this._transportMomentaryPlaying; }
  set isTransportMomentaryPlaying(value: boolean) {
    if (value === this._transportMomentaryPlaying) {
      return;
    }
    this._transportMomentaryPlaying = value;
    this.updateTransportPlaying();
  }

  get isTransportPlaying() { return this._transportPlaying; }
  set isTransportPlaying(value: boolean) {
    if (value === this._transportPlaying) {
      return;
    }
    this._transportPlaying = value;
    this.updateTransportPlaying();
  }

  constructor() {
    this.audioContext = AudioEnvironment.instance.audioContext;
    const samplesFuture = AudioEnvironment.instance.samplesFuture;
    this.ready = (async () => {
      this.samples = await samplesFuture;
    })();

    makeObservable(this);
  }

  onInteraction() {
    this.audioContext.resume();
  }

  private updateTransportPlaying() {
    if (this._transportPlaying || this._transportMomentaryPlaying) {
      this.transportStart();
    } else {
      this.transportStop();
    }
  }

  @action
  private transportStart() {
    if (this.transportInterval !== undefined) {
      return;
    }
    this.observables.isPlaying = true;
    this.transportBeatNumber = -LAUNCH_FUDGE * (60.0 / this.options.bpm);
    this.observables.timeBeats = this.transportBeatNumber / BEAT_GRANULARITY;
    this.seqPrevBeatNumber = -1;

    let ready = false;
    this.ready.then(() => {
      runInAction(() => {
        this.updateSeq();
        ready = true;
      });
    });

    let prevTime = this.audioContext.currentTime;
    this.transportInterval = setInterval(() => {
      const nowTime = this.audioContext.currentTime;
      const elapsedTime = nowTime - prevTime;
      prevTime = nowTime;

      if (!ready) {
        return;
      }

      const beatDuration = 60.0 / this.options.bpm / BEAT_GRANULARITY;
      this.transportBeatNumber += elapsedTime / beatDuration;
      runInAction(() => {
        this.observables.timeBeats = this.transportBeatNumber / BEAT_GRANULARITY;
        this.updateSeq();
      });
    });
  }

  @action
  private transportStop() {
    if (this.transportInterval === undefined) {
      return;
    }
    clearInterval(this.transportInterval);
    this.transportInterval = undefined;
    this.observables.isPlaying = false;
  }

  private updateSeq() {
    let didNotesChange = false;
    const contextTime = this.audioContext.currentTime;
    const beatDuration = 60.0 / this.options.bpm / BEAT_GRANULARITY;

    const coarsePrevBeatNumber = Math.floor(this.seqPrevBeatNumber) | 0;
    const coarseThisBeatNumber = Math.floor(this.transportBeatNumber) | 0;
    const fineThisBeatNumber = this.transportBeatNumber - Math.floor(this.transportBeatNumber);
    this.seqPrevBeatNumber = this.transportBeatNumber;
    if (coarsePrevBeatNumber !== coarseThisBeatNumber) {
      for (const track of this.tracks.values()) {
        if (track.queued || track.playing?.isEnded) {
          const oldKey = track.playing?.key;
          const newKey = track.queued?.key;
          track.playing?.node.disconnect();
          track.playing?.outNode.disconnect();
          track.playing = track.queued;
          track.queued = undefined;
          if (oldKey !== newKey) {
            didNotesChange = true;
          }
        }
      }
    }

    const nextBeatContextTime = contextTime + beatDuration * (1.0 - fineThisBeatNumber);
    for (const track of this.tracks.values()) {
      const pattern = track.pattern;
      const stepRatio = Math.round(track.options.seqStepSize * BEAT_GRANULARITY * 4) | 0;
      const stepSubIndex = wrapInt((coarseThisBeatNumber + 1), stepRatio);
      const stepIndex = Math.round((coarseThisBeatNumber + 1) / stepRatio) | 0;
      if (stepSubIndex !== 0) {
        continue;
      }
      const patternStepIndex = wrapInt(stepIndex, Math.max(1, pattern?.length ?? 0));
      const nextNote = pattern?.[patternStepIndex];
      if (track.queued?.key === nextNote?.key &&
          track.queued?.sample === nextNote?.sample) {
        continue;
      }
      // console.log(patternStepIndex, nextNote);
      didNotesChange = true;
      track.queued?.node.disconnect();
      track.queued = undefined;

      if (!nextNote) {
        continue;
      }
      const bufferNode = this.audioContext.createBufferSource();
      bufferNode.buffer = this.samples[nextNote.sample].audioBuffer;
      const outNode = this.audioContext.createGain();
      outNode.gain.value = nextNote.gain ?? 1.0;
      const toQueue: NoteInstance = {
        key: nextNote.key,
        sample: nextNote.sample,
        node: bufferNode,
        outNode: outNode,
        isEnded: false,
      };
      toQueue.node.onended = () => {
        toQueue.isEnded = true;
      };
      track.queued = toQueue;

      bufferNode.connect(outNode);
      outNode.connect(this.destination);
      bufferNode.start(nextBeatContextTime);
    }

    if (didNotesChange) {
      for (const [key, track] of this.tracks) {
        this.observables.channelNotes.set(key, track.playing?.key ?? '');
      }
    }
  }

  setSeqPattern(track: string, pattern: NoteOr[] | undefined) {
    let trackData = this.getTrack(track);
    trackData.pattern = pattern;
  }

  setTrackOptions(track: string, options: TrackOptions) {
    let trackData = this.getTrack(track);
    trackData.options = options;
  }

  private getTrack(track: string) {
    let trackData = this.tracks.get(track);
    if (!trackData) {
      trackData = {
        options: {
          seqStepSize: 1 / 4,
        },
      };
      this.tracks.set(track, trackData);
    }
    return trackData;
  }

  triggerSample(sampleType: SampleType) {
    this.ready.then(() => {
      const bufferSourceNode = this.audioContext.createBufferSource();
      bufferSourceNode.buffer = this.samples[sampleType].audioBuffer;
      bufferSourceNode.connect(this.destination);
      bufferSourceNode.start(this.audioContext.currentTime);
    });
  }
}

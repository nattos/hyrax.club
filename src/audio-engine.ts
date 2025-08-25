import { action, makeObservable, observable, runInAction } from 'mobx';
import { wrapInt } from './layout-utils';
import { AudioEnvironment, Samples, SampleType, Sound } from './audio-environment';
import { isMobile, sleep } from './utils';

export interface NoteInstance {
  key: string;
  sound: Sound;
  node: AudioBufferSourceNode;
  outNode: AudioNode;
  isEnded: boolean;
}

export interface Note {
  key: string;
  sound: Sound;
  gain?: number;
}

export type NoteOr = Note | undefined;

export interface Track {
  inNode: AudioNode;
  gainNode: GainNode;
  muteNode: GainNode;
  outNode: AudioNode;
  playing?: NoteInstance;
  queued: Array<NoteInstance | undefined>;
  pattern?: NoteOr[];
  options: TrackOptions;
}

export interface TrackOptions {
  seqStepSize: number;
  muted: boolean;
}

const LAUNCH_FUDGE = 10 / 1000.0; // A few millis.
const BEAT_GRANULARITY = 16; // 1 / 64th notes.
const QUEUE_AHEAD_LENGTH = 16;
const SEQUENCER_UPDATE_DELAY = 10;

export class AudioEngine {
  private static activeEngine?: AudioEngine;

  @observable observables = observable({
    isTransportSolidPlaying: false,
    isPlaying: false,
    timeBeats: 0.0,
    channelNotes: observable(new Map<string, string>()),
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
    runInAction(() => {
      this.observables.isTransportSolidPlaying = value;
    });
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
      if (AudioEnvironment.instance.isFirstStart) {
        AudioEnvironment.instance.isFirstStart = false;
        if (isMobile()) {
          (async () => {
            await sleep(100);
            await sleep(100);
            await sleep(100);
            this.transportStart();
          })();
          return;
        }
      }
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
    if (AudioEngine.activeEngine !== this) {
      const oldEngine = AudioEngine.activeEngine;
      AudioEngine.activeEngine = this;
      if (oldEngine) {
        oldEngine.isTransportPlaying = false;
        oldEngine.transportStop();
      }
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
    }, SEQUENCER_UPDATE_DELAY);
  }

  @action
  private transportStop() {
    if (this.transportInterval === undefined) {
      return;
    }
    clearInterval(this.transportInterval);
    this.transportInterval = undefined;
    this.observables.isPlaying = false;

    for (const track of this.tracks.values()) {
      track.playing?.node.disconnect();
      track.playing?.outNode.disconnect();
      track.playing = undefined;
      for (let i = 0; i < QUEUE_AHEAD_LENGTH; ++i) {
        track.queued[i]?.node.disconnect();
        track.queued[i]?.outNode.disconnect();
        track.queued[i] = undefined;
      }
    }
    for (const key of this.observables.channelNotes.keys()) {
      this.observables.channelNotes.set(key, '');
    }
  }

  private updateSeq() {
    let didNotesChange = false;
    const contextTime = this.audioContext.currentTime;
    const beatDuration = 60.0 / this.options.bpm / BEAT_GRANULARITY;

    const coarsePrevBeatNumber = Math.floor(this.seqPrevBeatNumber) | 0;
    const coarseThisBeatNumber = Math.floor(this.transportBeatNumber) | 0;
    const fineThisBeatNumber = this.transportBeatNumber - Math.floor(this.transportBeatNumber);
    this.seqPrevBeatNumber = this.transportBeatNumber;
    const advancedByBeatsCount = Math.max(0, coarseThisBeatNumber - coarsePrevBeatNumber) | 0;
    for (let i = 0; i < advancedByBeatsCount; ++i) {
      for (const track of this.tracks.values()) {
        if (track.queued[0] || track.playing?.isEnded) {
          const oldKey = track.playing?.key;
          const newKey = track.queued[0]?.key;
          track.playing?.node.disconnect();
          track.playing?.outNode.disconnect();
          track.playing = track.queued[0];
          if (oldKey !== newKey) {
            didNotesChange = true;
          }
        }
        for (let i = 0; i < QUEUE_AHEAD_LENGTH - 1; ++i) {
          track.queued[i] = track.queued[i + 1];
        }
        track.queued[QUEUE_AHEAD_LENGTH - 1] = undefined;
      }
    }

    for (const track of this.tracks.values()) {
      track.muteNode.gain.value = track.options.muted ? 0.0 : 1.0;

      const pattern = track.pattern;
      for (let i = 0; i < QUEUE_AHEAD_LENGTH; ++i) {
        const stepRatio = Math.round(track.options.seqStepSize * BEAT_GRANULARITY * 4) | 0;
        const stepSubIndex = wrapInt((coarseThisBeatNumber + i + 1), stepRatio);
        const stepIndex = Math.round((coarseThisBeatNumber + i + 1) / stepRatio) | 0;
        if (stepSubIndex !== 0) {
          continue;
        }
        const patternStepIndex = wrapInt(stepIndex, Math.max(1, pattern?.length ?? 0));
        const nextNote = pattern?.[patternStepIndex];
        const oldQueued = track.queued[i];
        if (oldQueued?.key === nextNote?.key &&
            oldQueued?.sound === nextNote?.sound) {
          continue;
        }
        didNotesChange = true;
        oldQueued?.node.disconnect();
        oldQueued?.outNode.disconnect();
        track.queued[i] = undefined;

        if (!nextNote) {
          continue;
        }
        const bufferNode = this.audioContext.createBufferSource();
        const sample = AudioEnvironment.instance.locateSoundDirty(nextNote.sound);
        bufferNode.buffer = sample.audioBuffer;
        const outNode = this.audioContext.createGain();
        outNode.gain.value = nextNote.gain ?? 1.0;
        const toQueue: NoteInstance = {
          key: nextNote.key,
          sound: nextNote.sound,
          node: bufferNode,
          outNode: outNode,
          isEnded: false,
        };
        toQueue.node.onended = () => {
          toQueue.isEnded = true;
        };
        track.queued[i] = toQueue;

        bufferNode.connect(outNode);
        outNode.connect(track.inNode);

        const nextBeatContextTime = contextTime + beatDuration * (1.0 - fineThisBeatNumber + i);
        const sampleOffset = sample.offset;
        const sampleDuration = sample.duration;
        let alignedToBeatNumber: number | undefined = undefined;
        if (sampleDuration) {
          const rawDurationBeats = sampleDuration / beatDuration;
          const coarseDurationBeats = Math.round(rawDurationBeats) | 0;
          const fineDurationBeats = rawDurationBeats - coarseDurationBeats;
          const isAligned = Math.abs(fineDurationBeats) < LAUNCH_FUDGE;
          if (isAligned) {
            alignedToBeatNumber = coarseDurationBeats;
          }
        }
        if (alignedToBeatNumber !== undefined) {
          const nextNextBeatContextTime = contextTime + beatDuration * (1.0 - fineThisBeatNumber + i + alignedToBeatNumber);
          bufferNode.start(nextBeatContextTime, sampleOffset);
          bufferNode.stop(nextNextBeatContextTime);
        } else {
          bufferNode.start(nextBeatContextTime, sampleOffset, sampleDuration);
        }
      }
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

  private getTrack(track: string): Track {
    let trackData: Track | undefined = this.tracks.get(track);
    if (!trackData) {
      const gainNode = this.audioContext.createGain();
      const muteNode = this.audioContext.createGain();
      gainNode.connect(muteNode);
      muteNode.connect(this.destination);
      trackData = {
        inNode: gainNode,
        gainNode: gainNode,
        muteNode: muteNode,
        outNode: gainNode,
        options: {
          seqStepSize: 1 / 4,
          muted: false,
        },
        queued: new Array<NoteInstance | undefined>(QUEUE_AHEAD_LENGTH),
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

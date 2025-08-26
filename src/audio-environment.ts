import * as utils from './utils';

const SVG_BAR_COUNT = 10;
const SVG_MOBILE_BAR_COUNT = 7;
const SVG_BAR_MARGIN = 0.2;

const SVG_BAR_COLORS = {
  'kick': '#ff4500',
  'snare': '#4169E1',
  'clap': '#4169E1',
  'hat': '#FFDA63',
  'tom': '#FF8C00',
};
const SVG_BAR_DEFAULT_COLOR = SVG_BAR_COLORS.kick;

export type Samples = Parameters<NonNullable<Parameters<ReturnType<typeof loadSamples>['then']>[0]>>[0];
export type SampleType = keyof Samples;
export interface SampleEntry {
  audioBuffer: AudioBuffer;
  offset?: number;
  duration?: number;
  svgUrl: string;
  denseSvgUrl?: string;
}

export type Sound = SampleType|SoundRef;
export interface SoundRef {
  audio: {
    key: string;
    underlyingKey: string;
  }
}

export class AudioEnvironment {
  static readonly instance = new AudioEnvironment();

  isFirstStart = true;

  readonly audioContext = new AudioContext({});
  readonly samplesFuture;
  readonly destination;
  readonly emptySampleEntry = createEmptySampleEntry(this.audioContext);

  private samples?: Samples;
  private readonly dynamicSamples = new Map<string, SoundRef[]>();
  private readonly audioFuturesSamples = new Map<string, Promise<SampleEntry>>();
  private readonly audioSamples = new Map<string, SampleEntry>();

  private readonly loadDynamicQueue = new utils.OperationQueue();

  constructor() {
    this.samplesFuture = loadSamples(this.audioContext);
    this.samplesFuture.then(samples => { this.samples = samples; });
    this.destination = this.audioContext.createGain();
    this.destination.connect(this.audioContext.destination);
    this.destination.gain.value = 1.0;
  }

  loadDynamicSampleSlices(url: string, sliceSteps: number): SoundRef[] {
    const oldTask = this.dynamicSamples.get(url);
    if (oldTask) {
      return oldTask;
    }
    const underlyingKey = AudioEnvironment.newNoteKey();
    const entries = Array.from(utils.range(sliceSteps)).map(() => {
      const ref: SoundRef = { audio: { key: AudioEnvironment.newNoteKey(), underlyingKey: underlyingKey } };
      const future = new utils.Resolvable<SampleEntry>();
      return { ref, future };
    });
    const slices = entries.map(s => s.ref);
    this.dynamicSamples.set(url, slices);
    for (const entry of entries) {
      this.audioFuturesSamples.set(entry.ref.audio.key, entry.future.promise);
    }
    this.loadDynamicQueue.push(async () => await this.loadDynamicSampleSlicesImpl(url, entries));
    return slices;
  }

  private async loadDynamicSampleSlicesImpl(url: string, slices: Array<{ ref: SoundRef; future: utils.Resolvable<SampleEntry> }>) {
    try {
      const sliceSteps = slices.length;
      const audioFileBytes = await (await fetch(url)).arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(audioFileBytes);
      const duration = audioBuffer.duration;
      for (let i = 0; i < sliceSteps; ++i) {
        const slice = slices[i];
        const sliceOffset = duration * i / sliceSteps;
        const sliceDuration = duration / sliceSteps;
        const svgUrl = drawSvg(audioBuffer, { offset: sliceOffset, duration: sliceDuration });
        const sample: SampleEntry = {
          audioBuffer: audioBuffer,
          offset: sliceOffset,
          duration: sliceDuration,
          svgUrl: svgUrl,
        };
        slice.future.resolve(sample);
        this.audioSamples.set(slice.ref.audio.key, sample);
        if ((i % 16) === 0) {
          await utils.sleep(0);
        }
      }
      return slices;
    } catch (e) {
      console.error(`Failed to load slices ${url}`, e);
      for (const slice of slices) {
        slice.future.resolve(this.emptySampleEntry);
      }
    }
  }

  locateSoundDirty(sound: Sound): SampleEntry {
    if (typeof sound === 'string') {
      return this.samples?.[sound] ?? this.emptySampleEntry;
    }
    const sampleEntry = this.audioSamples.get(sound.audio.key);
    return sampleEntry ?? this.emptySampleEntry;
  }

  async locateSoundAsync(sound: Sound): Promise<SampleEntry> {
    if (typeof sound === 'string') {
      return (await this.samplesFuture)[sound] ?? this.emptySampleEntry;
    }
    const sampleEntry = await this.audioFuturesSamples.get(sound.audio.key);
    return sampleEntry ?? this.emptySampleEntry;
  }

  static nextKey = 0;
  static newNoteKey() {
    return (this.nextKey++).toFixed(0);
  }
}

export function isSameSound(a: Sound | undefined, b: Sound | undefined) {
  if (a === b) {
    return true;
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return false;
  }
  return a?.audio.key === b?.audio.key;
}

export function isSameUnderlyingSound(a: Sound | undefined, b: Sound | undefined) {
  if (a === b) {
    return true;
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return false;
  }
  return a?.audio.underlyingKey === b?.audio.underlyingKey;
}

async function loadSamples(audioContext: AudioContext) {
  const sampleTasks = {
    kick: loadSample('assets/kick.wav', 'kick', audioContext),
    snare: loadSample('assets/snare.wav', 'snare', audioContext),
    hat: loadSample('assets/hat.wav', 'hat', audioContext),
    clap: loadSample('assets/clap.wav', 'clap', audioContext),
    tom: loadSample('assets/tom.wav', 'tom', audioContext),
  };
  const samples = await Promise.all(Object.entries(sampleTasks).map(async ([k, v]) => [k, await v]));
  return Object.fromEntries(samples) as Record<keyof typeof sampleTasks, SampleEntry>;
}

async function loadSample(path: string, hint: string, audioContext: AudioContext): Promise<SampleEntry> {
  try {
    const audioFileBytes = await (await fetch(path)).arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(audioFileBytes);
    const svgUrls = drawSvgs(audioBuffer, { hint: hint, forceIncludeDense: true });
    return { audioBuffer, ...svgUrls };
  } catch (e) {
    console.error(`Failed to load sample ${path}`, e);
    return createEmptySampleEntry(audioContext);
  }
}

function createEmptySampleEntry(audioContext: AudioContext) {
  const audioBuffer = audioContext.createBuffer(audioContext.destination.numberOfInputs, 1, audioContext.sampleRate);
  const svgUrl = drawSvg(audioBuffer);
  return { audioBuffer, svgUrl };
}

function drawSvgs(audioBuffer: AudioBuffer,
  options?: {
    hint?: string;
    offset?: number;
    duration?: number;
    forceIncludeDense?: boolean;
  }
) {
  const svgUrl = drawSvg(audioBuffer, options);
  let denseSvgUrl: string | undefined = undefined;
  if (!utils.isMobile()) {
    denseSvgUrl = svgUrl;
  } else if (options?.forceIncludeDense) {
    // denseSvgUrl = drawSvg(audioBuffer, { ...options, dense: true });
  }
  return { svgUrl, denseSvgUrl };
}

function drawSvg(
  audioBuffer: AudioBuffer,
  options?: {
    hint?: string;
    offset?: number;
    duration?: number;
    dense?: boolean;
  }
): string {
  const offset = options?.offset;
  const duration = options?.duration;
  const hint = options?.hint;

  const channelDatas: Float32Array[] = [];
  for (let i = 0; i < audioBuffer.numberOfChannels; ++i) {
    channelDatas.push(audioBuffer.getChannelData(i));
  }
  let sampleCount = Math.min(...channelDatas.map(c => c.length));
  let sampleOffset = 0;
  const bufferDuration = audioBuffer.duration;
  if (offset !== undefined && bufferDuration > 0) {
    sampleOffset = (sampleCount * offset / bufferDuration) | 0;
  }
  sampleOffset -= 8;
  if (duration !== undefined && bufferDuration > 0) {
    sampleCount = (sampleCount * duration / bufferDuration) | 0;
  }
  const barCount = (utils.isMobile() && !options?.dense) ? SVG_MOBILE_BAR_COUNT : SVG_BAR_COUNT;

  let svgString = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">';
  const color = (hint ? SVG_BAR_COLORS[hint as (keyof typeof SVG_BAR_COLORS)] : undefined) ?? SVG_BAR_DEFAULT_COLOR;

  for (let i = 0; i < barCount; ++i) {
    const tStart = i / barCount;
    const tEnd = (i + 1) / barCount;
    const tWidth = tEnd - tStart;
    const sampleStartIndex = (tStart * sampleCount + sampleOffset) | 0;
    const sampleEndIndex = (tEnd * sampleCount + sampleOffset) | 0;

    const reduceLength = sampleEndIndex - sampleStartIndex;
    const sampleStep = Math.max(1, Math.floor(reduceLength / 128)) | 0;

    let sample = 0;
    for (let sampleIndex = sampleStartIndex; sampleIndex < sampleEndIndex + 1; sampleIndex += sampleStep) {
      for (const channelData of channelDatas) {
        sample = Math.max(sample, Math.abs(channelData[sampleIndex] ?? 0.0));
      }
    }
    // let sampleCountAcc = 0;
    // for (let sampleIndex = sampleStartIndex; sampleIndex < sampleEndIndex + 1; ++sampleIndex) {
    //   for (const channelData of channelDatas) {
    //     const s = channelData[sampleIndex] ?? 0.0;
    //     sample += s * s;
    //     sampleCountAcc++;
    //   }
    // }
    // sample = Math.sqrt(sample) / sampleCountAcc;
    // sample *= 80;
    const yHeight = Math.max(0.01, sample);
    const yStart = 0.5 - yHeight * 0.5;
    const yEnd = 0.5 + yHeight * 0.5;
    const xStart = tStart + tWidth * SVG_BAR_MARGIN;
    const xEnd = tEnd - tWidth * SVG_BAR_MARGIN;
    svgString += `<rect x="${(xStart * 100).toFixed(1)}" y="${(yStart * 100).toFixed(1)}" width="${((xEnd - xStart) * 100).toFixed(1)}" height="${((yEnd - yStart) * 100).toFixed(1)}" fill="${color}"/>`;
  }

  svgString += '</svg>';
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  return URL.createObjectURL(blob);
}

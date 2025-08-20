
export type Samples = Parameters<NonNullable<Parameters<ReturnType<typeof loadSamples>['then']>[0]>>[0];
export type SampleType = keyof Samples;
export interface SampleEntry {
  audioBuffer: AudioBuffer;
  svgUrl: string;
}

export class AudioEnvironment {
  static readonly instance = new AudioEnvironment();

  readonly audioContext = new AudioContext({});
  readonly samplesFuture;
  readonly destination;

  constructor() {
    this.samplesFuture = loadSamples(this.audioContext);
    this.destination = this.audioContext.createGain();
    this.destination.connect(this.audioContext.destination);
    this.destination.gain.value = 0.5;
  }
}

async function loadSamples(audioContext: AudioContext) {
  const sampleTasks = {
    kick: loadSample('assets/kick.wav', audioContext),
    snare: loadSample('assets/snare.wav', audioContext),
    hat: loadSample('assets/hat.wav', audioContext),
  };
  const samples = await Promise.all(Object.entries(sampleTasks).map(async ([k, v]) => [k, await v]));
  return Object.fromEntries(samples) as Record<keyof typeof sampleTasks, SampleEntry>;
}

async function loadSample(path: string, audioContext: AudioContext): Promise<SampleEntry> {
  try {
    const audioFileBytes = await (await fetch(path)).arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(audioFileBytes);
    const svgUrl = drawSvg(audioBuffer);
    return { audioBuffer, svgUrl };
  } catch (e) {
    console.error(`Failed to load sample ${path}`, e);
    const audioBuffer = audioContext.createBuffer(audioContext.destination.numberOfInputs, 1, audioContext.sampleRate);
    const svgUrl = drawSvg(audioBuffer);
    return { audioBuffer, svgUrl };
  }
}

function drawSvg(audioBuffer: AudioBuffer): string {
  const channelDatas: Float32Array[] = [];
  for (let i = 0; i < audioBuffer.numberOfChannels; ++i) {
    channelDatas.push(audioBuffer.getChannelData(i));
  }
  const sampleCount = Math.min(...channelDatas.map(c => c.length));
  const barCount = 20;

  let svgString = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">';

  for (let i = 0; i < barCount; ++i) {
    const tStart = i / barCount;
    const tEnd = (i + 1) / barCount;
    const tWidth = tEnd - tStart;
    const sampleStartIndex = (tStart * sampleCount) | 0;
    const sampleEndIndex = (tEnd * sampleCount) | 0;
    let sample = 0;
    for (let sampleIndex = sampleStartIndex; sampleIndex < sampleEndIndex + 1; ++sampleIndex) {
      for (const channelData of channelDatas) {
        sample = Math.max(sample, Math.abs(channelData[sampleIndex] ?? 0.0));
      }
    }
    const yHeight = Math.max(0.01, sample);
    const yStart = 0.5 - yHeight * 0.5;
    const yEnd = 0.5 + yHeight * 0.5;
    const xStart = tStart + tWidth * 0.1;
    const xEnd = tEnd - tWidth * 0.1;
    svgString += `<rect x="${(xStart * 100).toFixed(1)}" y="${(yStart * 100).toFixed(1)}" width="${((xEnd - xStart) * 100).toFixed(1)}" height="${((yEnd - yStart) * 100).toFixed(1)}" fill="red"/>`;
  }

  svgString += '</svg>';
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  return URL.createObjectURL(blob);
}


export type Samples = Parameters<NonNullable<Parameters<ReturnType<typeof loadSamples>['then']>[0]>>[0];
export type SampleType = keyof Samples;

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
  return Object.fromEntries(samples) as Record<keyof typeof sampleTasks, AudioBuffer>;
}

async function loadSample(path: string, audioContext: AudioContext): Promise<AudioBuffer> {
  try {
    const audioFileBytes = await (await fetch(path)).arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(audioFileBytes);
    return audioBuffer;
  } catch (e) {
    console.error(`Failed to load sample ${path}`, e);
    return audioContext.createBuffer(audioContext.destination.numberOfInputs, 1, audioContext.sampleRate);
  }
}

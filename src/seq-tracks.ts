import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { action, makeObservable, toJS } from 'mobx';
import { AudioEngine, Note } from './audio-engine';
import { SeqStep, SeqTrack } from './seq-track';
import { COMMON_STYLES } from './drum-patterns-styles';
import { Point, wrapClick } from './layout-utils';
import { PointerDragOp } from './pointer-drag-op';
import { SampleType } from './audio-environment';

export const DRAG_PADDING_FRACTION = 0.5;
const NOTE_POOL_SAMPLES: SampleType[] = ['kick', 'hat', 'snare'];

@customElement('hyrax-seq-tracks')
export class SeqTracks extends MobxLitElement {
  static styles = [
    COMMON_STYLES,
    css`
.outer {
  display: flex;
  flex-direction: column;
}

.play-button {
  min-width: 4em;
}

.tracks-area {
  display: flex;
  flex-direction: column;
}

.note-pool-area {
  height: var(--track-height);
  display: flex;
  flex-direction: row;
  gap: calc(var(--note-width) / 2);
}

.note-pool-area hyrax-seq-note {
  position: relative;
  width: var(--note-width);
}
`];

  @queryAssignedElements() slotElements!: Array<HTMLElement>;

  @property({ type: Number }) bpm = 120;
  @property({ type: Boolean }) allowDelete = false;

  readonly engine = new AudioEngine();
  private readonly cachedTracks: SeqTrack[] = [];

  constructor() {
    super();
    makeObservable(this);

    this.addEventListener('slotchange', () => {
      this.reindexSlots();
    });
  }

  render() {
    return html`
<div class="outer">
  <div class="head-controls">
    <div
        class="debug-button play-button"
        @click=${wrapClick(() => { this.engine.isTransportPlaying = !this.engine.isTransportPlaying; })}
        >
      ${this.engine.observables.isPlaying ? 'pause' : 'play'}
    </div>
  </div>
  <div class="tracks-area">
    <slot></slot>
  </div>
  <div class="note-pool-area">
    ${NOTE_POOL_SAMPLES.map(sample => html`
    <hyrax-seq-note
        .step=${({ note: { key: '', sample: sample }, isPinned: false } satisfies SeqStep)}
        @pointerdown=${(e: PointerEvent) => {
          const engine = this.engine;
          engine.isTransportMomentaryPlaying = true;

          const newNote: Note = {
            key: crypto.randomUUID(),
            sample: sample,
          };

          const oldPatterns = this.cachedTracks.map((t, i) => ({ track: t, trackIndex: i, oldPattern: toJS(t.currentPattern) }));
          // const oldPattern = toJS(this.currentPattern);
          // const noteKey = note.key;
          new PointerDragOp(e, this, {
            move: action((e: PointerEvent) => {
              const mouseX = e.clientX;
              const mouseY = e.clientY;
              for (const { track, trackIndex, oldPattern } of oldPatterns) {
                track.currentPattern = oldPattern;
              }
              for (const { track, trackIndex, oldPattern } of oldPatterns) {
                const isFirstTrack = trackIndex === 0;
                const isLastTrack = trackIndex === oldPatterns.length - 1;
                const clientRect = track.getBoundingClientRect();
                const mouseLocalX = mouseX - clientRect.x;
                const mouseLocalY = mouseY - clientRect.y;
                const dragPaddingY = clientRect.height * DRAG_PADDING_FRACTION;
                const isBeyondStart = mouseLocalY < -(isFirstTrack ? dragPaddingY : 0);
                const isBeyondEnd = mouseLocalY > (clientRect.height + (isLastTrack ? dragPaddingY : 0));
                if (isBeyondStart || isBeyondEnd) {
                  continue;
                }
                track.insertNote(newNote, mouseLocalX / clientRect.width * oldPattern.length, oldPattern);
                break;
              }
            }),
            complete: () => {
              engine.isTransportMomentaryPlaying = false;
            },
          });
        }}
        >
    </hyrax-seq-note>
    `)}
  </div>
</div>
`;
  }

  updated() {
    this.reindexSlots();
    this.engine.options.bpm = this.bpm;
  }

  @action
  private reindexSlots() {
    let trackIndex = 0;
    this.cachedTracks.splice(0);
    for (const element of this.slotElements) {
      if (!(element instanceof SeqTrack)) {
        continue;
      }

      const trackId = trackIndex.toString();
      trackIndex++;

      let dirty = element.parent !== this || element.track !== trackId;
      if (dirty) {
        element.parent = this;
        element.track = trackId;
        element.syncData();
      }
      this.cachedTracks.push(element);
    }
  }
}

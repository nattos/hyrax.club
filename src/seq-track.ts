import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { action, autorun, makeObservable, observable, runInAction, toJS } from 'mobx';
import { Point, wrapClick, wrapFloat01 } from './layout-utils';
import { COMMON_STYLES } from './drum-patterns-styles';
import { SeqTracks } from './seq-tracks';
import { Note, NoteOr } from './audio-engine';
import { SampleType } from './audio-environment';
import { PointerDragOp } from './pointer-drag-op';

interface SeqStep {
  note?: Note;
  ghostNote?: Note;
}

@customElement('hyrax-seq-track')
export class SeqTrack extends MobxLitElement {
  static styles = [
    COMMON_STYLES,
    css`
:host {
  display: block;
  position: relative;
  width: 800px;
  height: 300px;
  background-color: slateblue;
}

.transport-position-indicator {
  position: absolute;
  width: calc(var(--pixel) * 5);
  top: 0;
  bottom: 0;
  background-color: crimson;
  z-index: 1;
}
`];

  @query('#transport-position-indicator') transportPositionIndicator?: HTMLElement;

  @property({ type: Number }) seqStepNum = 1;
  @property({ type: Number }) seqStepDenom = 16;
  @property() pattern = '';

  @observable.ref parent?: SeqTracks = undefined;
  @observable.ref track?: string = undefined;

  @observable currentPattern: SeqStep[] = observable([]);
  private cachedPatternStr = '';
  private readonly ghostNotes: Note[] = [];

  private disposer?: () => void;

  constructor() {
    super();
    makeObservable(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.disposer = autorun(() => {
      const engine = this.parent?.engine;
      if (!engine) {
        return;
      }
      this.updateTransportStatus(engine.observables.isPlaying, engine.observables.timeBeats);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.disposer?.();
      console.log('this.disposer?.();');
  }

  @action
  moveNote(noteKey: string, delta: number, oldPattern: SeqStep[]) {
    const newPattern = structuredClone(toJS(oldPattern));
    const oldIndex = newPattern.findIndex(n => n.note?.key === noteKey);
    if (oldIndex < 0) {
      this.currentPattern = oldPattern;
      return;
    }
    const newIndex = Math.max(0, Math.min(newPattern.length - 1, oldIndex + delta));
    if (oldIndex === newIndex) {
      this.currentPattern = oldPattern;
      return;
    }
    const oldNote = newPattern[oldIndex].note!;
    const displacedNote = newPattern[newIndex].note;
    newPattern[oldIndex].note = undefined;
    newPattern[newIndex].note = oldNote;
    if (displacedNote) {
      if (tryMakeSpaceRight(1, newIndex, newPattern)) {
        newPattern[newIndex + 1].note = displacedNote;
      } else if (tryMakeSpaceLeft(1, newIndex, newPattern)) {
        newPattern[newIndex - 1].note = displacedNote;
      }
    }
    this.applyGhostNotes(newPattern);
    this.currentPattern = newPattern;
  }

  syncData() {
    if (!this.parent || !this.track) {
      return;
    }
    this.parent.engine.setTrackOptions(this.track, {
      seqStepSize: this.seqStepNum / this.seqStepDenom,
    });
    this.parent.engine.setSeqPattern(this.track, toJS(this.currentPattern).map(s => s.note ?? s.ghostNote));
  }

  override update(changedProperties: PropertyValues) {
    if (this.cachedPatternStr !== this.pattern) {
      this.cachedPatternStr = this.pattern;
      runInAction(() => {
        const newPattern = Array.from(this.pattern.split(';').map<SeqStep>(s => {
          s = s.trim();
          let note: NoteOr;
          if (s) {
            note = { key: crypto.randomUUID(), sample: s.trim() as SampleType };
          }
          return {
            note: note,
          } satisfies SeqStep;
        }));
        this.applyGhostNotes(newPattern);
        this.currentPattern = newPattern;
      });
    }
    super.update(changedProperties);
  }

  render() {
    return html`
<div id="transport-position-indicator" class="transport-position-indicator"></div>
<div
    style="width: 30px; height: 30px; background-color: crimson;"
    @click=${wrapClick(() => {
      const engine = this.parent?.engine;
      if (!engine) {
        return;
      }
      engine.onInteraction();
      engine.isTransportPlaying = true;
      // this.parent?.engine.triggerSample('kick');
    })}
    >
  HI
</div>
<div
    style="width: 30px; height: 30px; background-color: crimson;"
    @click=${wrapClick(() => {
      this.currentPattern[0].note = { key: crypto.randomUUID(), sample: 'snare' };
      this.applyGhostNotes(this.currentPattern);
    })}
    >
  HI2
</div>
${this.currentPattern.map(n => n.note?.sample ?? '').join(';')}
<div>
${this.currentPattern.map((n, i) => { const note = n.note ?? n.ghostNote; if (!note) { return; } return html`
  <hyrax-seq-note
      .parent=${this}
      seqpos=${i}
      seqlen=${this.currentPattern.length}
      @pointerdown=${(e: PointerEvent) => {
        const engine = this.parent?.engine;
        if (!engine) {
          return;
        }
        engine.isTransportMomentaryPlaying = true;

        const oldPattern = toJS(this.currentPattern);
        const noteKey = note.key;
        new PointerDragOp(e, this, {
          move: (e: PointerEvent, [deltaX, deltaY]: Point) => {
            const trackWidth = this.clientWidth;
            this.moveNote(noteKey, Math.round(deltaX / trackWidth * this.currentPattern.length) | 0, oldPattern);
          },
          complete: () => {
            engine.isTransportMomentaryPlaying = false;
          },
        });
      }}
      >
  </hyrax-seq-note>
`;})}
</div>
`;
  }

  override updated() {
    this.syncData();
    const engine = this.parent?.engine;
    if (!engine) {
      return;
    }
    this.updateTransportStatus(engine.observables.isPlaying, engine.observables.timeBeats);
  }

  private updateTransportStatus(isPlaying: boolean, timeBeats: number) {
    if (!this.transportPositionIndicator) {
      return;
    }
    this.transportPositionIndicator.classList.toggle('hidden', !isPlaying);
    const loopLength = (Math.max(1, this.currentPattern.length) | 0) * 4 * this.seqStepNum / this.seqStepDenom;
    const loopT = wrapFloat01(timeBeats / loopLength);
    this.transportPositionIndicator.style.left = CSS.percent(loopT * 100).toString();
  }

  private applyGhostNotes(pattern: SeqStep[]) {
    const ghostNoteQueue = Array.from(this.ghostNotes);
    for (const step of pattern) {
      const isGhost = !step.note;
      if (isGhost) {
        let ghostNote: NoteOr = ghostNoteQueue.shift();
        if (!ghostNote) {
          ghostNote = {
            key: crypto.randomUUID(),
            sample: 'hat',
          };
          this.ghostNotes.push(ghostNote);
        }
        step.ghostNote = ghostNote;
      }
    }
  }
}

function tryMakeSpaceRight(length: number, start: number, pattern: SeqStep[]): boolean {
  const startIndex = start + 1;
  let foundSpace = 0;
  let searchIndex = startIndex;
  for (; searchIndex < pattern.length; ++searchIndex) {
    if (!pattern[searchIndex].note) {
      foundSpace++;
      if (foundSpace >= length) {
        break;
      }
    }
  }
  if (foundSpace < length) {
    return false;
  }
  const endIndex = searchIndex;
  let foundNotes = [];
  for (let i = startIndex; i <= endIndex; ++i) {
    if (pattern[i].note) {
      foundNotes.push(pattern[i].note);
      pattern[i].note = undefined;
    }
  }
  for (let i = 0; i < foundNotes.length; ++i) {
    pattern[endIndex - i].note = foundNotes.at(-(i + 1));
  }
  console.log('startIndex', startIndex, 'endIndex', endIndex, 'foundSpace', foundSpace, foundNotes);
  return true;
}
function tryMakeSpaceLeft(length: number, start: number, pattern: SeqStep[]): boolean {
  const startIndex = start - 1;
  let foundSpace = 0;
  let searchIndex = startIndex;
  for (; searchIndex >= 0; --searchIndex) {
    if (!pattern[searchIndex].note) {
      foundSpace++;
      if (foundSpace >= length) {
        break;
      }
    }
  }
  if (foundSpace < length) {
    return false;
  }
  const endIndex = searchIndex;
  let foundNotes = [];
  for (let i = startIndex; i >= endIndex; --i) {
    if (pattern[i].note) {
      foundNotes.push(pattern[i].note);
      pattern[i].note = undefined;
    }
  }
  for (let i = 0; i < foundNotes.length; ++i) {
    pattern[endIndex + i].note = foundNotes.at(-(i + 1));
  }
  return true;
}


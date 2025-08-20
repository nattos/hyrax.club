import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { action, autorun, makeObservable, observable, runInAction, toJS } from 'mobx';
import { Point, wrapClick, wrapFloat01 } from './layout-utils';
import { COMMON_STYLES } from './drum-patterns-styles';
import { DRAG_PADDING_FRACTION, SeqTracks } from './seq-tracks';
import { Note, NoteOr } from './audio-engine';
import { SampleType } from './audio-environment';
import { PointerDragOp } from './pointer-drag-op';

export interface SeqStep {
  note?: Note;
  ghostNote?: Note;
  isPinned: boolean;
}

@customElement('hyrax-seq-track')
export class SeqTrack extends MobxLitElement {
  static styles = [
    COMMON_STYLES,
    css`
:host {
  display: block;
  position: relative;
  width: calc(var(--note-width) * 16);
  height: var(--track-height);
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
  @property({ type: Boolean }) fillHats = false;
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
  moveNote(noteKey: string, fineDelta: number, oldPattern: SeqStep[]) {
    const delta = Math.round(fineDelta) | 0;
    const subDelta = fineDelta - delta;
    const newPattern = structuredClone(toJS(oldPattern));
    const oldIndex = newPattern.findIndex(n => n.note?.key === noteKey);
    if (oldIndex < 0) {
      this.currentPattern = oldPattern;
      return;
    }
    let newIndex = Math.max(0, Math.min(newPattern.length - 1, oldIndex + delta));
    let searchStep = subDelta < 0 ? -1 : 1;
    for (let searchIndex = 0; searchIndex < newPattern.length && newPattern[newIndex].isPinned; ++searchIndex) {
      newIndex += searchStep;
      if (newIndex < 0 || newIndex >= newPattern.length) {
        newIndex = Math.max(0, Math.min(newPattern.length - 1, newIndex));
        searchStep = -searchStep;
      }
    }

    if (oldIndex === newIndex) {
      this.currentPattern = oldPattern;
      return;
    }
    const oldStep = newPattern[oldIndex];
    const oldNote = oldStep.note!;
    if (oldStep.isPinned) {
      return;
    }
    const displacedNote = newPattern[newIndex].note;
    newPattern[oldIndex].note = undefined;
    newPattern[newIndex].note = oldNote;

    if (displacedNote) {
      const insertIndex = tryMakeSpaceRight(1, newIndex, newPattern) ?? tryMakeSpaceLeft(1, newIndex, newPattern);
      if (insertIndex !== undefined) {
        newPattern[insertIndex].note = displacedNote;
      }
    }
    this.applyGhostNotes(newPattern);
    this.currentPattern = newPattern;
  }

  @action
  insertNote(note: Note, finePos: number, oldPattern: SeqStep[]) {
    const pos = Math.round(finePos) | 0;
    const subPos = finePos - pos;
    const newPattern = structuredClone(toJS(oldPattern));
    let newIndex = Math.max(0, Math.min(newPattern.length - 1, pos));
    let searchStep = subPos < 0 ? -1 : 1;
    for (let searchIndex = 0; searchIndex < newPattern.length && newPattern[newIndex].isPinned; ++searchIndex) {
      newIndex += searchStep;
      if (newIndex < 0 || newIndex >= newPattern.length) {
        newIndex = Math.max(0, Math.min(newPattern.length - 1, newIndex));
        searchStep = -searchStep;
      }
    }

    const displacedNote = newPattern[newIndex].note;
    newPattern[newIndex].note = note;

    if (displacedNote) {
      const insertIndex = tryMakeSpaceRight(1, newIndex, newPattern) ?? tryMakeSpaceLeft(1, newIndex, newPattern);
      if (insertIndex !== undefined) {
        newPattern[insertIndex].note = displacedNote;
      }
    }
    this.applyGhostNotes(newPattern);
    this.currentPattern = newPattern;
  }

  @action
  removeNote(noteKey: string, oldPattern: SeqStep[]) {
    const newPattern = structuredClone(toJS(oldPattern));
    const oldIndex = newPattern.findIndex(n => n.note?.key === noteKey);
    if (oldIndex < 0) {
      this.currentPattern = oldPattern;
      return;
    }
    const oldStep = newPattern[oldIndex];
    const oldNote = oldStep.note!;
    if (oldStep.isPinned) {
      return;
    }
    newPattern[oldIndex].note = undefined;
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

          let isPinned = false;
          if (s.startsWith('!')) {
            isPinned = true;
            s = s.slice(1).trim();
          }

          let note: NoteOr;
          if (s) {
            note = { key: crypto.randomUUID(), sample: s.trim() as SampleType };
          }
          return {
            note: note,
            isPinned: isPinned,
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
<div>
${this.currentPattern.map((n, i) => { const note = n.note ?? n.ghostNote; if (!note) { return; } return html`
  <hyrax-seq-note
      .parent=${this}
      .step=${n}
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
            const canDelete = !!this.parent?.allowDelete;
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const clientRect = this.getBoundingClientRect();
            const mouseLocalX = mouseX - clientRect.x;
            const mouseLocalY = mouseY - clientRect.y;
            const dragPaddingY = clientRect.height * DRAG_PADDING_FRACTION;
            const isBeyondStart = mouseLocalY < -dragPaddingY;
            const isBeyondEnd = mouseLocalY > (clientRect.height + dragPaddingY);
            if (canDelete && (isBeyondStart || isBeyondEnd)) {
              this.removeNote(noteKey, oldPattern);
            } else {
              this.moveNote(noteKey, deltaX / clientRect.width * this.currentPattern.length, oldPattern);
            }
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
        let ghostNote: NoteOr;
        if (this.fillHats) {
          ghostNote = ghostNoteQueue.shift();
          if (!ghostNote) {
            ghostNote = {
              key: crypto.randomUUID(),
              sample: 'hat',
              gain: 0.5,
            };
            this.ghostNotes.push(ghostNote);
          }
        }
        step.ghostNote = ghostNote;
      }
    }
  }
}

function tryMakeSpaceRight(length: number, start: number, pattern: SeqStep[]): number | undefined {
  let startIndex = start + 1;
  while (pattern[startIndex] && pattern[startIndex].isPinned) {
    startIndex++;
  }
  let foundSpace = 0;
  let searchIndex = startIndex;
  for (; searchIndex < pattern.length; ++searchIndex) {
    if (!pattern[searchIndex].note && !pattern[searchIndex].isPinned) {
      foundSpace++;
      if (foundSpace >= length) {
        break;
      }
    }
  }
  if (foundSpace < length) {
    return;
  }
  const endIndex = searchIndex;
  let foundNotes = [];
  for (let i = startIndex; i <= endIndex; ++i) {
    if (pattern[i].note && !pattern[i].isPinned) {
      foundNotes.push(pattern[i].note);
      pattern[i].note = undefined;
    }
  }
  let insertOffset = 0;
  for (let i = 0; i < foundNotes.length; ++i) {
    while (pattern[endIndex - insertOffset].isPinned) {
      insertOffset++;
    }
    pattern[endIndex - insertOffset].note = foundNotes.at(-(i + 1));
    insertOffset++;
  }
  return startIndex;
}
function tryMakeSpaceLeft(length: number, start: number, pattern: SeqStep[]): number | undefined {
  let startIndex = start - 1;
  while (pattern[startIndex] && pattern[startIndex].isPinned) {
    startIndex--;
  }
  let foundSpace = 0;
  let searchIndex = startIndex;
  for (; searchIndex >= 0; --searchIndex) {
    if (!pattern[searchIndex].note && !pattern[searchIndex].isPinned) {
      foundSpace++;
      if (foundSpace >= length) {
        break;
      }
    }
  }
  if (foundSpace < length) {
    return;
  }
  const endIndex = searchIndex;
  let foundNotes = [];
  for (let i = startIndex; i >= endIndex; --i) {
    if (pattern[i].note && !pattern[i].isPinned) {
      foundNotes.push(pattern[i].note);
      pattern[i].note = undefined;
    }
  }
  let insertOffset = 0;
  for (let i = 0; i < foundNotes.length; ++i) {
    while (pattern[endIndex + insertOffset].isPinned) {
      insertOffset++;
    }
    pattern[endIndex + insertOffset].note = foundNotes.at(-(i + 1));
  }
  return start - 1;
}


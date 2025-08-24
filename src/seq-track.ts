import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { action, autorun, makeObservable, observable, runInAction, toJS } from 'mobx';
import { clamp01, Point, wrapClick, wrapFloat01 } from './layout-utils';
import { COMMON_STYLES } from './drum-patterns-styles';
import { DRAG_PADDING_FRACTION, SeqTracks } from './seq-tracks';
import { Note, NoteOr } from './audio-engine';
import { AudioEnvironment, SampleType } from './audio-environment';
import { PointerDragOp } from './pointer-drag-op';

export interface SeqStep {
  note?: Note;
  ghostNote?: Note;
  isPinned: boolean;
  isGood: boolean;
  isMoving: boolean;
}

@customElement('hyrax-seq-track')
export class SeqTrack extends MobxLitElement {
  static styles = [
    COMMON_STYLES,
    css`
:host {
  --_tracks-grid-color: var(--tracks-grid-color, --app-track-grid-color);
  display: block;
  position: relative;
  height: var(--track-height);
  border-right: 1px solid var(--_tracks-grid-color);
  touch-action: none;
}
:host(.short) {
  --track-height: var(--short-track-height);
  margin-bottom: 2em;
}
:host(.muted) {
  filter: saturate(0);
}

hyrax-seq-note, hyrax-seq-note-underlay {
  --track-grid-color: var(--_tracks-grid-color);
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
  @property({ type: Number }) fillHatsStep = 1;
  @property({ type: Number }) fillHatsOffset = 0;
  @property({ type: Boolean }) fillHatsRetrigger = false;
  @property({ type: Boolean }) pinned = false;
  @property({ type: Boolean }) muted = false;
  @property() pattern = '';
  @property() slicesSrc = '';
  @property({ type: Number }) slicesBars = 4;
  @property({ type: Number }) slicesPageByBars = 1;

  @observable.ref parent?: SeqTracks = undefined;
  @observable.ref track?: string = undefined;

  @observable currentPattern: SeqStep[] = observable([]);
  private cachedPatternStr = '';
  private cachedSlicesSrc = '';
  private lastGoodPageIndex = 0;
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
  }

  @action
  moveNote(noteKey: string, fineDelta: number, oldPattern: SeqStep[], options: { markAsMoving: boolean; }) {
    const delta = Math.round(fineDelta) | 0;
    const subDelta = fineDelta - delta;
    const newPattern = structuredClone(toJS(oldPattern));
    const oldIndex = newPattern.findIndex(n => n.note?.key === noteKey);
    if (oldIndex < 0 || this.pinned) {
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
    newPattern[newIndex].isMoving = options.markAsMoving;

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
  insertNote(note: Note, finePos: number, oldPattern: SeqStep[], options: { markAsMoving: boolean; }) {
    if (this.pinned) {
      this.currentPattern = oldPattern;
      return;
    }
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
    newPattern[newIndex].isMoving = options.markAsMoving;

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
    if (this.pinned) {
      this.currentPattern = oldPattern;
      return;
    }
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

  @action
  endMoveNote() {
    for (const step of this.currentPattern) {
      step.isMoving = false;
    }
  }

  syncData() {
    if (!this.parent || !this.track) {
      return;
    }
    this.parent.engine.setTrackOptions(this.track, {
      seqStepSize: this.seqStepNum / this.seqStepDenom,
      muted: this.muted,
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
          let isGood = false;
          while (true) {
            if (s.startsWith('!')) {
              isPinned = true;
              s = s.slice(1).trim();
            } else if (s.startsWith('@')) {
              isGood = true;
              s = s.slice(1).trim();
            } else {
              break;
            }
          }

          let note: NoteOr;
          if (s) {
            note = { key: AudioEnvironment.newNoteKey(), sound: s.trim() as SampleType };
          }
          return {
            note: note,
            isPinned: isPinned,
            isGood: isGood,
            isMoving: false,
          } satisfies SeqStep;
        }));
        this.applyGhostNotes(newPattern);
        this.currentPattern = newPattern;
      });
    }
    if (this.cachedSlicesSrc !== this.slicesSrc) {
      this.cachedSlicesSrc = this.slicesSrc;
      runInAction(() => {
        const slices = AudioEnvironment.instance.loadDynamicSampleSlices(this.slicesSrc, this.slicesBars * this.seqStepDenom / this.seqStepNum);
        const newPattern = slices.map<SeqStep>(s => {
          let note: NoteOr = { key: AudioEnvironment.newNoteKey(), sound: s };
          return {
            note: note,
            isPinned: false,
            isGood: false,
            isMoving: false,
          } satisfies SeqStep;
        });
        this.applyGhostNotes(newPattern);
        this.currentPattern = newPattern;
      });
    }
    super.update(changedProperties);
  }

  render() {
    const engine = this.parent?.engine;
    const track = this.track;
    const playingNote = engine?.observables.channelNotes.get(track ?? '');
    const isPreviewTrack = !!this.slicesSrc;
    let currentPatternPage = this.currentPattern;
    if (isPreviewTrack) {
      const pageLength = this.slicesPageByBars * this.seqStepDenom / this.seqStepNum;
      const noteIndex = currentPatternPage.findIndex(s => s.note?.key === playingNote);
      const pageIndex = noteIndex < 0 ? this.lastGoodPageIndex : (Math.floor(noteIndex / pageLength) | 0);
      if (noteIndex >= 0) {
        this.lastGoodPageIndex = pageIndex;
      }
      const pageOffset = (pageIndex * pageLength) | 0;
      currentPatternPage = currentPatternPage.slice(pageOffset, pageOffset + pageLength);
    }

    const renderSeqStep = (n: SeqStep, i: number) => {
      const note = n.note ?? n.ghostNote;
      if (!note) {
        return;
      }
      return html`
<hyrax-seq-note
    .parent=${this}
    .step=${n}
    seqpos=${i}
    seqlen=${currentPatternPage.length}
    @pointerdown=${wrapClick((e: PointerEvent) => {
      const parent = this.parent;
      const engine = parent?.engine;
      if (!parent || !engine) {
        return;
      }
      engine.onInteraction();

      const isPreviewTrack = !!this.slicesSrc;
      parent.soloPreview = isPreviewTrack;
      parent.updateTransport();
      engine.isTransportMomentaryPlaying = true;

      this.parent?.doMoveNote(e, note, {
        complete: () => {
          engine.isTransportMomentaryPlaying = false;
          parent.soloPreview = false;
        },
      });
    })}
    >
</hyrax-seq-note>
`;
    };
    const renderSeqStepUnderlay = (n: SeqStep, i: number) => {
      return html`
<hyrax-seq-note-underlay
    .parent=${this}
    .step=${n}
    ?less=${isPreviewTrack}
    seqpos=${i}
    seqlen=${currentPatternPage.length}
    >
</hyrax-seq-note-underlay>
`;
    }

    return html`
<div id="transport-position-indicator" class="transport-position-indicator"></div>
<div>
  ${currentPatternPage.map(renderSeqStepUnderlay)}
  ${currentPatternPage.map(renderSeqStep)}
</div>
`;
  }

  override updated() {
    this.syncData();
    const engine = this.parent?.engine;
    if (!engine) {
      return;
    }
    this.classList.toggle('muted', this.muted);
    this.updateTransportStatus(engine.observables.isPlaying, engine.observables.timeBeats);
  }

  private updateTransportStatus(isPlaying: boolean, timeBeats: number) {
    if (!this.transportPositionIndicator) {
      return;
    }

    const patternLength = this.currentPattern.length;
    const loopLength = (Math.max(1, patternLength) | 0) * 4 * this.seqStepNum / this.seqStepDenom;
    const loopBeat = wrapFloat01(Math.max(0, timeBeats) / loopLength) * loopLength;

    let pageT = loopBeat / loopLength;
    let isCurrentPage = true;
    if (this.slicesSrc) {
      const pageLength = this.slicesPageByBars / 4 * this.seqStepDenom / this.seqStepNum;
      const pageIndex = this.lastGoodPageIndex;
      const pageOffset = (pageIndex * pageLength) | 0;

      const pageBeat = loopBeat - pageOffset;
      isCurrentPage = pageBeat >= 0 && pageBeat <= pageLength;
      pageT = clamp01(pageBeat / pageLength);
    }


    this.transportPositionIndicator.style.left = CSS.percent(pageT * 100).toString();
    this.transportPositionIndicator.classList.toggle('hidden', !isPlaying || !isCurrentPage);
  }

  private applyGhostNotes(pattern: SeqStep[]) {
    const ghostNoteQueue = Array.from(this.ghostNotes);
    let ghostStep = this.fillHatsOffset;
    for (const step of pattern) {
      const isGhost = !step.note;
      if (isGhost) {
        let isActive = (ghostStep % this.fillHatsStep) === 0;
        let ghostNote: NoteOr;
        if (this.fillHats && isActive) {
          ghostNote = ghostNoteQueue.shift();
          if (!ghostNote) {
            ghostNote = {
              key: AudioEnvironment.newNoteKey(),
              sound: 'hat',
              gain: 0.5,
            };
            this.ghostNotes.push(ghostNote);
          }
        }
        step.ghostNote = ghostNote;
      } else {
        step.ghostNote = undefined;
        if (this.fillHatsRetrigger) {
          ghostStep = this.fillHatsOffset;
        }
      }
      ghostStep++;
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


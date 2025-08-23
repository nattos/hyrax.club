import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { action, makeObservable, toJS } from 'mobx';
import { AudioEngine, Note } from './audio-engine';
import { SeqStep, SeqTrack } from './seq-track';
import { COMMON_STYLES } from './drum-patterns-styles';
import { Point, wrapClick } from './layout-utils';
import { PointerDragOp } from './pointer-drag-op';
import { AudioEnvironment, SampleType } from './audio-environment';

export const DRAG_PADDING_FRACTION = 2.0;
const DEFAULT_NOTE_POOL_SAMPLES: SampleType[] = ['kick', 'snare', 'hat'];

@customElement('hyrax-seq-tracks')
export class SeqTracks extends MobxLitElement {
  static styles = [
    COMMON_STYLES,
    css`
:host {
  margin-left: calc(max(2em, min(var(--multi-column) * 8em, 12vw - 8em)));
  margin-right: calc(var(--multi-column) * 1em);
  padding: 1em 2em;
  height: fit-content;
}
.outer {
  display: flex;
  flex-direction: column;
  user-select: none;
}

.tracks-with-extras {
  display: grid;
  grid-template-columns: auto auto;
  width: fit-content;
  margin: 1em;
}

.header-area {
  grid-area: 1 / 1;
}

.head-controls {
  grid-area: 2 / 2;
  display: flex;
  flex-direction: column;
  margin-left: 2em;
}

.notes-slot-area {
  grid-area: 4 / 1;
}

.play-button {
  min-width: 4em;
}

.tracks-area {
  grid-area: 2 / 1;
  display: flex;
  flex-direction: column;
}

.note-pool-area {
  grid-area: 3 / 1;
  height: var(--short-track-height);
  display: flex;
  flex-direction: row;
  gap: calc(var(--note-width) / 2);
  place-self: center;
  touch-action: none;
  user-select: none;
}
.note-pool-area:not(:empty) {
  margin-top: 1em;
}

.note-pool-area hyrax-seq-note {
  position: relative;
  width: var(--note-width);
}

.head-controls-preview {
  height: var(--short-track-height);
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.head-controls-edit {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 1.5em;
}

.bpm-label {
  display: inline-flex;
  margin-left: 0.5em;
}

.hide-chrome .chrome {
  display: none;
}
`];

  @queryAssignedElements() slotElements!: Array<HTMLElement>;

  @property({ type: Number }) bpm = 120;
  @property({ type: Number }) beatScale = 1;
  @property({ type: Boolean }) allowDelete = false;
  @property({ type: Boolean }) hideChrome = false;
  @property() samples = '';
  @property({ type: Boolean }) soloPreview = false;

  readonly engine = new AudioEngine();
  private cachedSoloPreview = false;
  private readonly cachedTracks: SeqTrack[] = [];

  private isSoloingPreview = false;

  constructor() {
    super();
    makeObservable(this);

    this.addEventListener('slotchange', () => {
      this.reindexSlots();
    });
  }

  render() {
    let notePoolSamples = this.allowDelete ? DEFAULT_NOTE_POOL_SAMPLES : [];
    if (this.samples) {
      const parts = this.samples.toLowerCase().split(';');
      notePoolSamples = parts.map(p => p.trim() as SampleType);
    }
    let notePoolContents;
    if (notePoolSamples.length > 0) {
      notePoolContents = html`
<div class="note-pool-area">
  ${notePoolSamples.map(sample => html`
  <hyrax-seq-note
      .step=${({ note: { key: '', sound: sample }, isPinned: false, isGood: false, isMoving: false } satisfies SeqStep)}
      @pointerdown=${wrapClick((e: PointerEvent) => this.doDragNotePoolNote(e, sample))}
      >
  </hyrax-seq-note>
  `)}
</div>
`;
    }

    return html`
<div class="outer ${this.hideChrome ? 'hide-chrome' : ''}">
  <div class="tracks-with-extras">
    <div class="header-area chrome">
      <slot name="header"></slot>
      <div class="bpm-label subnote">${this.bpm.toFixed(0)} bpm</div>
    </div>
    <div class="tracks-area">
      <slot></slot>
    </div>
    ${notePoolContents}
    <div class="notes-slot-area">
      <slot name="notes"></slot>
    </div>
    <div class="head-controls chrome">
      <div class="head-controls-preview">
        <div
            class="debug-button play-button"
            @pointerdown=${wrapClick(this.doSoloPreview.bind(this))}
            >
          listen
        </div>
      </div>
      <div class="head-controls-edit">
        <div
            class="debug-button play-button"
            @pointerdown=${wrapClick(this.doPlayPause.bind(this))}
            >
          ${this.engine.observables.isTransportSolidPlaying ? 'pause' : 'play'}
        </div>
      </div>
    </div>
  </div>
</div>
`;
  }

  private doPlayPause() {
    this.engine.onInteraction();
    this.engine.isTransportPlaying = !this.engine.isTransportPlaying;
  }

  private doSoloPreview(e: PointerEvent) {
    const engine = this.engine;
    engine.onInteraction();

    this.isSoloingPreview = true;
    this.updateTrackMixer();
    engine.isTransportMomentaryPlaying = true;
    new PointerDragOp(e, this, {
      complete: () => {
        this.isSoloingPreview = false;
        this.updateTrackMixer();
        engine.isTransportMomentaryPlaying = false;
      },
    });
  }

  private doDragNotePoolNote(e: PointerEvent, sample: SampleType) {
    const engine = this.engine;
    engine.onInteraction();
    let shouldTriggerSamplePreview = true;
    if (!engine.observables.isPlaying) {
      if (this.cachedTracks.some(t => t.currentPattern.at(0)?.note?.sound === sample)) {
        shouldTriggerSamplePreview = false;
      }
    }
    engine.isTransportMomentaryPlaying = true;

    const newNote: Note = {
      key: AudioEnvironment.newNoteKey(),
      sound: sample,
    };
    if (shouldTriggerSamplePreview) {
      engine.triggerSample(sample);
    }
    this.doMoveNote(e, newNote, {
      complete: () => {
        engine.isTransportMomentaryPlaying = false;
      },
    });
  }

  doMoveNote(e: PointerEvent, newNote: Note, options: {
    complete?: () => void;
  }) {
    const engine = this.engine;
    const oldPatterns = this.cachedTracks.map((t, i) => ({ track: t, seqTrack: t, trackIndex: i, oldPattern: toJS(t.currentPattern) }));
    const oldNoteTrack = oldPatterns.find(t => t.oldPattern.find(s => s.note?.key === newNote.key || s.ghostNote?.key === newNote.key));
    const oldNoteIndex = oldNoteTrack?.oldPattern.findIndex(s => s.note?.key === newNote.key || s.ghostNote?.key === newNote.key) ?? -1;
    const oldNote = oldNoteTrack?.oldPattern[oldNoteIndex];
    const isOldNote = !!oldNoteTrack;

    new PointerDragOp(e, this, {
      move: action((e: PointerEvent) => {
        const canMove = !oldNote?.isPinned && !oldNote?.ghostNote && !oldNoteTrack?.track.pinned;
        const canDelete = !!this.allowDelete && canMove;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        for (const { track, trackIndex, oldPattern } of oldPatterns) {
          track.currentPattern = oldPattern;
          track.endMoveNote();
        }
        if (!canMove) {
          return;
        }
        let foundTrack: typeof oldNoteTrack;
        for (const candidate of oldPatterns) {
          const { track, trackIndex, oldPattern } = candidate;
          const isFirstTrack = trackIndex === 0;
          const isLastTrack = trackIndex === oldPatterns.length - 1;
          const clientRect = track.getBoundingClientRect();
          const mouseLocalX = mouseX - clientRect.x;
          const mouseLocalY = mouseY - clientRect.y;
          const dragPaddingY = clientRect.height * DRAG_PADDING_FRACTION;
          const isBeyondStart = mouseLocalY < -(isFirstTrack ? dragPaddingY : 0);
          const isBeyondEnd = mouseLocalY > (clientRect.height + (isLastTrack ? dragPaddingY : 0));
          if (track.pinned) {
            continue;
          }
          if (isBeyondStart || isBeyondEnd) {
            if (oldNoteTrack) {
              const oldNoteTrackTrack = oldNoteTrack.track;
              oldNoteTrackTrack.removeNote(newNote.key, oldNoteTrack.oldPattern);
            }
            continue;
          }
          foundTrack = candidate;
          break;
        }
        if (!foundTrack && !this.allowDelete) {
          foundTrack = oldNoteTrack;
        }
        if (foundTrack) {
          const { track, trackIndex, oldPattern } = foundTrack;
          const isFirstTrack = trackIndex === 0;
          const isLastTrack = trackIndex === oldPatterns.length - 1;
          const clientRect = track.getBoundingClientRect();
          const mouseLocalX = mouseX - clientRect.x;
          const mouseLocalY = mouseY - clientRect.y;
          const dragPaddingY = clientRect.height * DRAG_PADDING_FRACTION;
          const isBeyondStart = mouseLocalY < -(isFirstTrack ? dragPaddingY : 0);
          const isBeyondEnd = mouseLocalY > (clientRect.height + (isLastTrack ? dragPaddingY : 0));
          if (isOldNote && oldNoteTrack.track === track) {
            const oldNoteTrackTrack = oldNoteTrack.track;
            if (canDelete && (isBeyondStart || isBeyondEnd)) {
              oldNoteTrackTrack.removeNote(newNote.key, oldPattern);
            } else {
              const newPos = mouseLocalX / clientRect.width * oldPattern.length;
              oldNoteTrackTrack.moveNote(newNote.key, newPos - oldNoteIndex, oldPattern, { markAsMoving: true });
            }
          } else if (canDelete) {
            if (oldNoteTrack) {
              const oldNoteTrackTrack = oldNoteTrack.track;
              oldNoteTrackTrack.removeNote(newNote.key, oldNoteTrack.oldPattern);
            }
            track.insertNote(newNote, mouseLocalX / clientRect.width * oldPattern.length, oldPattern, { markAsMoving: true });
          }
        }
      }),
      complete: () => {
        options.complete?.();
        for (const { track, trackIndex, oldPattern } of oldPatterns) {
          track.endMoveNote();
        }
      },
    });
  }

  updated() {
    this.reindexSlots();
    this.engine.options.bpm = this.bpm;
    this.updateTransport();
  }

  updateTransport() {
    if (this.cachedSoloPreview !== this.soloPreview) {
      this.cachedSoloPreview = this.soloPreview;
      this.isSoloingPreview = this.soloPreview;
      this.updateTrackMixer();
    }
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
    this.updateTrackMixer();
  }

  private updateTrackMixer() {
    const isSoloingPreview = this.isSoloingPreview;
    for (const track of this.cachedTracks) {
      const isPreviewTrack = !!track.slicesSrc;
      track.muted = isSoloingPreview ? !isPreviewTrack : isPreviewTrack;
    }
  }
}

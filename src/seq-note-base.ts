import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SeqStep, SeqTrack } from './seq-track';
import { AudioEnvironment, isSameSound, Sound } from './audio-environment';
import { autorun, makeObservable, observable, runInAction } from 'mobx';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { COMMON_STYLES } from './drum-patterns-styles';

export abstract class SeqNoteBase extends MobxLitElement {
  static get styles() { return [
    COMMON_STYLES,
    css`
:host {
  --seqpos: 0;
  --seqlen: 1;
  --notelen: 1;
  --notegain: 1.0;
  --xmin: calc(round(100% * var(--seqpos) / var(--seqlen), var(--pixel)));
  --xmax: calc(round(100% * (var(--seqpos) + var(--notelen)) / var(--seqlen), var(--pixel)) - var(--pixel));
  display: block;
  position: absolute;
  box-sizing: border-box;
  left: var(--xmin);
  width: calc(var(--xmax) - var(--xmin));
  top: 0;
  bottom: 0;
}

.bg {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
}
`];};

  @property({ attribute: false }) parent?: SeqTrack;
  @property({ type: Number }) seqpos = 0;
  @property({ type: Number }) seqlen = 0;
  @property({ type: Number }) notelen = 1;
  @property({ type: Boolean }) moving = false;
  @property({ attribute: false }) step: SeqStep | undefined = undefined;
  private cachedSound?: Sound;

  get currentSound(): Sound | undefined {
    return this.cachedSound;
  }

  private disposer?: () => void;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.reconnect();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.disposer?.();
  }

  protected onSoundChanged() {}

  private reconnect() {
    this.disposer?.();
    const disposers: Array<() => void> = [];
    disposers.push(autorun(() => {
      const sample = (this.step?.note ?? this.step?.ghostNote)?.sound;
      const isGhosted = !this.step?.note && !!this.step?.ghostNote;
      const isPinned = this.step?.isPinned;
      const isTrackEditable = !this.parent?.pinned;
      this.classList.toggle('editable', !isGhosted && !isPinned && isTrackEditable);
      this.classList.toggle('ghosted', isGhosted);
      this.classList.toggle('pinned', isPinned);
      this.classList.toggle('good', this.step?.isGood);
      this.classList.toggle('good-ok', this.step?.goodSound === sample);
      this.moving = !!this.step?.isMoving;

      if (!isSameSound(sample, this.cachedSound)) {
        this.cachedSound = sample;
        this.onSoundChanged();
      }
    }));
    disposers.push(autorun(() => {
      const engine = this.parent?.parent?.engine;
      const track = this.parent?.track;
      const noteKey = (this.step?.note ?? this.step?.ghostNote)?.key;
      if (!engine || !track || !noteKey) {
        return;
      }
      const isPlaying = engine.observables.channelNotes.get(track) === noteKey;
      this.classList.toggle('playing', isPlaying);
    }));
    this.disposer = () => {
      for (const disposer of disposers) {
        disposer();
      }
    };
  }

  protected override update(changedProperties: PropertyValues) {
    if (changedProperties.has('step')) {
      this.reconnect();
    }
    super.update(changedProperties);
  }

  updated() {
    const note = (this.step?.note ?? this.step?.ghostNote);
    this.attributeStyleMap.set('--seqpos', this.seqpos.toString());
    this.attributeStyleMap.set('--seqlen', Math.max(1, this.seqlen).toString());
    this.attributeStyleMap.set('--notelen', this.notelen.toString());
    this.attributeStyleMap.set('--notegain', (note?.gain ?? 1.0).toFixed(2));
  }
}

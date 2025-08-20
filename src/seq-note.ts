import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SeqStep, SeqTrack } from './seq-track';
import { AudioEnvironment } from './audio-environment';
import { autorun, makeObservable, observable, runInAction } from 'mobx';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('hyrax-seq-note')
export class SeqNote extends MobxLitElement {
  static styles = [
    css`
:host {
  --seqpos: 0;
  --seqlen: 1;
  --notelen: 1;
  --notegain: 1.0;
  --xmin: calc(round(100% * var(--seqpos) / var(--seqlen), var(--pixel)));
  --xmax: calc(round(100% * (var(--seqpos) + var(--notelen)) / var(--seqlen), var(--pixel)) - var(--pixel));
  --sample-image: '';
  display: block;
  position: absolute;
  box-sizing: border-box;
  left: var(--xmin);
  width: calc(var(--xmax) - var(--xmin));
  top: 0;
  bottom: 0;
  border: var(--pixel) solid gold;
}

.bg {
  background-color: blue;
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  background-image: var(--sample-image);
  background-position: center;
  background-size: 100% calc(100% * var(--notegain));
  background-repeat: no-repeat;
  cursor: pointer;
}
:host(.ghosted) .bg {
  opacity: 0.5;
  cursor: unset;
}
:host(.pinned) .bg {
  opacity: 0.15;
  cursor: unset;
}
:host(.playing) .bg {
  background-color: coral;
}
`];

  @property({ attribute: false }) parent?: SeqTrack;
  @property({ type: Number }) seqpos = 0;
  @property({ type: Number }) seqlen = 0;
  @property({ type: Number }) notelen = 1;
  @property({ attribute: false }) step?: SeqStep = undefined;
  private cachedSample?: string;
  private svgUrl?: string;

  private disposer?: () => void;

  constructor() {
    super();
    makeObservable(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.reconnect();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.disposer?.();
  }

  private reconnect() {
    this.disposer?.();
    const disposers: Array<() => void> = [];
    disposers.push(autorun(() => {
      const sample = (this.step?.note ?? this.step?.ghostNote)?.sample;
      this.classList.toggle('ghosted', !this.step?.note && !!this.step?.ghostNote);
      this.classList.toggle('pinned', this.step?.isPinned);

      if (sample !== this.cachedSample) {
        this.cachedSample = sample;
        if (sample) {
          runInAction(() => {
            AudioEnvironment.instance.samplesFuture.then(samples => {
              this.svgUrl = samples[sample].svgUrl;
              this.attributeStyleMap.set('--sample-image', `url('${this.svgUrl}')`);
            });
          });
        }
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

  render() {
    return html`
<div class="bg">
</div>
`;
  }

  updated() {
    const note = (this.step?.note ?? this.step?.ghostNote);
    this.attributeStyleMap.set('--seqpos', this.seqpos.toString());
    this.attributeStyleMap.set('--seqlen', Math.max(1, this.seqlen).toString());
    this.attributeStyleMap.set('--notelen', this.notelen.toString());
    this.attributeStyleMap.set('--notegain', (note?.gain ?? 1.0).toFixed(2));
    if (this.svgUrl) {
      this.attributeStyleMap.set('--sample-image', `url('${this.svgUrl}')`);
    }
  }
}

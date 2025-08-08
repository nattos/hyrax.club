import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { action, makeObservable } from 'mobx';
import { AudioEngine } from './audio-engine';
import { SeqTrack } from './seq-track';

@customElement('hyrax-seq-tracks')
export class SeqTracks extends MobxLitElement {
  static styles = [
    css`
:host {
  display: block;
  width: 800px;
  height: 300px;
}
`];

  @queryAssignedElements() slotElements!: Array<HTMLElement>;

  @property({ type: Number }) bpm = 120;

  readonly engine = new AudioEngine();

  constructor() {
    super();
    makeObservable(this);

    this.addEventListener('slotchange', () => {
      this.reindexSlots();
    });
  }

  render() {
    return html`
<slot></slot>
`;
  }

  updated() {
    this.reindexSlots();
  }

  @action
  private reindexSlots() {
    let trackIndex = 0;
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
    }
  }
}

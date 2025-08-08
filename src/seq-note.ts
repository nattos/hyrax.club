import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SeqTrack } from './seq-track';
import { PointerDragOp } from './pointer-drag-op';
import { Point } from './layout-utils';

@customElement('hyrax-seq-note')
export class SeqNote extends MobxLitElement {
  static styles = [
    css`
:host {
  --seqpos: 0;
  --seqlen: 1;
  --notelen: 1;
  --xmin: calc(round(100% * var(--seqpos) / var(--seqlen), var(--pixel)));
  --xmax: calc(round(100% * (var(--seqpos) + var(--notelen)) / var(--seqlen), var(--pixel)) - var(--pixel));
  display: block;
  position: absolute;
  box-sizing: border-box;
  left: var(--xmin);
  width: calc(var(--xmax) - var(--xmin));
  top: 0;
  bottom: 0;
  border: var(--pixel) solid gold;
  background-color: blue;
}
`];

  @property({ attribute: false }) parent?: SeqTrack;
  @property({ type: Number }) seqpos = 0;
  @property({ type: Number }) seqlen = 0;
  @property({ type: Number }) notelen = 1;

  updated() {
    this.attributeStyleMap.set('--seqpos', this.seqpos.toString());
    this.attributeStyleMap.set('--seqlen', Math.max(1, this.seqlen).toString());
    this.attributeStyleMap.set('--notelen', this.notelen.toString());
  }
}

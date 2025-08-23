import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SeqStep, SeqTrack } from './seq-track';
import { AudioEnvironment, Sound } from './audio-environment';
import { autorun, makeObservable, observable, runInAction } from 'mobx';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SeqNoteBase } from './seq-note-base';
import { wrapFloat01 } from './layout-utils';

@customElement('hyrax-seq-note-underlay')
export class SeqNoteUnderlay extends SeqNoteBase {
  static override get styles() { return [
    ...super.styles,
    css`
:host {
  pointer-events: none;
}

.bg {
  border-left: 1px solid var(--track-grid-color);
}

.good-indicator {
  display: none;
  position: absolute;
  bottom: calc(-3px + 0.25em);
  height: 0.25em;
  left: 1.5px;
  right: 0;
  margin: 0 40%;
  background-color: var(--app-hi-color2);
}
:host(.good) .good-indicator {
  display: block;
}
:host(.pinned) .good-indicator {
  background-color: var(--app-bg-color2);
}

.step-label {
  position: absolute;
  right: 0;
  bottom: -0.1em;
  text-align: center;
  font-size: 70%;
  color: var(--track-grid-color);
}
.step-label.quarter-note {
  color: var(--track-grid-color);
}
`];};

  constructor() {
    super();
    makeObservable(this);
  }

  render() {
    const beatScale = Math.max(1, this.parent?.parent?.beatScale ?? 1);
    const seqStepNum = Math.max(1, this.parent?.seqStepNum ?? 1);
    const seqStepDenom = Math.max(1, this.parent?.seqStepDenom ?? 1);
    const stepHalfBeat = wrapFloat01(this.seqpos * seqStepNum / seqStepDenom / beatScale) * 8;
    const beatAlignment = Math.abs(wrapFloat01(stepHalfBeat));
    const quantizedHalfBeat = Math.round(stepHalfBeat) | 0;
    let stepLabelContent;
    if (beatAlignment < 1e-3) {
      const fullBeat = Math.floor(quantizedHalfBeat / 2) | 0;
      const isHalfBeat = (quantizedHalfBeat % 2) === 1;
      const stepLabel = isHalfBeat ? '&' : (fullBeat + 1).toFixed(0);
      stepLabelContent = html`
<div class="step-label ${isHalfBeat ? 'quarter-note' : ''}">
  ${stepLabel}
</div>
`;
    }
    return html`
<div class="bg"></div>
<div class="good-indicator"></div>
${stepLabelContent}
`;
  }
}

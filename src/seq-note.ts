import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SeqStep, SeqTrack } from './seq-track';
import { AudioEnvironment, Sound } from './audio-environment';
import { autorun, makeObservable, observable, runInAction } from 'mobx';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SeqNoteBase } from './seq-note-base';
import { isMobile } from './utils';

@customElement('hyrax-seq-note')
export class SeqNote extends SeqNoteBase {
  static override get styles() { return [
    ...super.styles,
    css`
:host {
  --sample-image: '';
}

.bg {
  left: 1px;
  right: -1px;
  background-image: var(--sample-image);
  background-position: center;
  background-size: 100% calc(70% * var(--notegain));
  background-repeat: no-repeat;
  cursor: pointer;
}
:host(.editable) .bg:hover:not(:active) {
  filter: brightness(0.6) saturate(1.25);
}
:host(.ghosted) .bg {
  opacity: 0.2;
  cursor: unset;
}
:host(.pinned) .bg {
  opacity: 0.5;
  cursor: unset;
}
:host(.playing) .bg {
  background-color: var(--app-text-color2);
}

.moving-indicator {
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 10px;
  height: 100px;
  transform: translate(-50%, 0);
  background-color: var(--app-color2);
  pointer-events: none;
  z-index: 1;
}
`];};

  private svgUrl?: string;

  constructor() {
    super();
    makeObservable(this);
  }

  protected override onSoundChanged() {
    const sample = this.currentSound;
    if (sample) {
      runInAction(async () => {
        await AudioEnvironment.instance.samplesFuture;
        const sampleEntry = await AudioEnvironment.instance.locateSoundAsync(sample);
        this.svgUrl = sampleEntry.svgUrl;
        this.attributeStyleMap.set('--sample-image', `url('${this.svgUrl}')`);
      });
    }
  }

  render() {
    let movingIndicatorContent;
    if (this.moving && isMobile()) {
      movingIndicatorContent = html`<div class="moving-indicator"></div>`;
    }
    return html`
<div class="bg">
</div>
${movingIndicatorContent}
`;
  }

  updated() {
    super.updated();
    if (this.svgUrl) {
      this.attributeStyleMap.set('--sample-image', `url('${this.svgUrl}')`);
    }
  }
}

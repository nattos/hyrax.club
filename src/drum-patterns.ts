import { MobxLitElement } from '@adobe/lit-mobx/lit-mobx';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './seq-tracks';
import './seq-track';
import './seq-note';

















@customElement('hyrax-app')
export class App extends MobxLitElement {
  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
<hyrax-seq-tracks>
  <hyrax-seq-track pattern=";hat;;;hat;;hat;hat"></hyrax-seq-track>
  <hyrax-seq-track pattern="kick;;;kick;;;kick;"></hyrax-seq-track>
</hyrax-seq-tracks>
`;
  }

  static styles = [
    css`
body, :host {
  background: black;
  color: #c0c0c0;
  margin: 0;
  font-family: Questrial, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(max(10px, min(32px, min(2.0vw, 2.0vh))));;
}
@media only screen and (hover: none) {
  :host {
    font-size: calc(max(10px, min(32px, min(4vw, 4vh))));;
  }
}

:host {
  --language-flip: 0.0;
}

h1 {
  font-size: 120%;
  margin: 0;
}

p {
  font-size: 100%;
  margin: 0;
  color: #adadad;
}

.app-outer {
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 100vh;
  width: 100%;
  align-items: center;
  place-self: center;
}

`];
}

import { css } from 'lit';

export const COMMON_STYLES = css`
:host {
  --pixel: 1px;
}
@media (min-resolution: 2dppx) {
  :host {
    --pixel: 0.5px;
  }
}

:host {
  --multi-column: 1;
  --app-color1: #FFFACD;
  --app-color2: #D87093;
  --app-color3: #444444;
  --app-hi-color1: #ff4500;
  --app-hi-color2: #4169E1;
  --app-text-color1: #DDDDDD;
  --app-text-color2: #AAAAAA;
  --app-bg-color1: #222222;
  --app-bg-color2: #313131;

  --note-width: 2.8em;
  --track-height: 5em;
  --short-track-height: 3em;

  --app-track-grid-color: var(--app-color3);

  color: var(--app-text-color2);
  font-family: Questrial, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(max(10px, min(32px, min(1.6vw, 1.6vh))));
}
@media (max-width: 1400px) {
  :host {
    --multi-column: 0;
  }
}

.hidden {
  visibility: hidden;
}

.h1 {
  color: var(--app-text-color1);
  font-size: 150%;
  letter-spacing: 0.0125em;
}

em {
  font-style: unset;
  font-size: 90%;
  color: var(--app-color1);
  letter-spacing: 0.05em;
}

.subnote {
  font-size: 65%;
  color: var(--app-text-color2);
}

.block-quote {
  background-color: var(--app-bg-color2);
  padding: 1em;
  margin-left: calc(-1em - 5px);
  margin-right: -1em;
  border-left: 5px solid var(--app-hi-color2);
  font-style: italic;
}

.debug-button {
  padding: 0.5em 1em;
  color: var(--app-text-color1);
  background-color: var(--app-hi-color1);
  cursor: pointer;
  user-select: none;
  text-align: center;
  touch-action: none;
}
.debug-button:hover {
  background-color: var(--app-hi-color2)
}
`;

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
  --note-width: 2.8em;
  --track-height: 5em;
}


.hidden {
  visibility: hidden;
}

.debug-button {
  padding: 0.5em 1em;
  background-color: crimson;
  cursor: pointer;
  user-select: none;
  text-align: center;
}
.debug-button:hover {
  background-color: cornflowerblue
}
`;

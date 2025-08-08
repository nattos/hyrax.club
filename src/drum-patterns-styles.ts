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


.hidden {
  visibility: hidden;
}
`;

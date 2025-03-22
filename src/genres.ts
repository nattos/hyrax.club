import * as utils from './utils';
import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';


enum Genre {
  Classical = 'European Classical',
  Industrial = 'Industrial (Early)',
  Psychedelia = 'Psychedelia (60s/70s)',
  NewAge = 'New Age/Ambient',
  Goa = 'Goa/Indian Classical',
  EBM = 'EBM',
  Electro = 'Electro',
  Disco = 'Disco (70s)',
  SynthPop = 'Synth-Pop (80s)',
  Funk = 'Funk (70s)',
  Soul = 'Soul/R&B',
  Gospel = 'Gospel',
  Jazz = 'Latin/Jazz',
}



interface Attribute {
  value: number;
  desc: string;
}

type CompareGenreData = Record<Genre, Attribute>;

const DATA_HOUSE: CompareGenreData = {
  [Genre.Psychedelia]: { value: 1, desc: 'Very little direct influence.' },
  [Genre.NewAge]: { value: 1, desc: 'Very little direct influence.' },
  [Genre.Industrial]: { value: 1, desc: 'Almost no direct influence.' },
  [Genre.Classical]: { value: 1, desc: 'Very little direct influence.' },
  [Genre.Disco]: { value: 5, desc: 'The primary foundation of house music. The 4/4 beat, tempo, basslines, and overall structure are directly derived from disco.' },
  [Genre.SynthPop]: { value: 3, desc: 'The use of synthesizers and drum machines became increasingly common in house music as technology evolved.' },
  [Genre.Funk]: { value: 4, desc: 'The emphasis on groove and soulful vocals is a strong connection.' },
  [Genre.Soul]: { value: 4, desc: 'The use of soulful vocals, often sampled from older records, is a defining characteristic of many house subgenres.' },
  [Genre.Gospel]: { value: 3, desc: 'Many classic house tracks feature gospel-inspired vocals and chord progressions, adding to the uplifting and spiritual feel.' },
  [Genre.Jazz]: { value: 3, desc: 'Percussion influence. Latin house is a whole subgenre, and jazz chords and improvisation can also be found in certain styles of house.' },
  [Genre.Electro]: { value: 3, desc: 'Some overlap with early electro sounds, but not as direct a parent as with techno.' },
  [Genre.Goa]: { value: 1, desc: 'Little direct influence.' },
  [Genre.EBM]: { value: 1, desc: 'Little direct influence.' },
};

const DATA_TECHNO: CompareGenreData = {
  [Genre.Psychedelia]: { value: 2, desc: 'A more distant influence, mainly in the spirit of experimentation and pushing sonic boundaries.' },
  [Genre.NewAge]: { value: 1, desc: 'Minimal direct influence, although some ambient techno subgenres exist.' },
  [Genre.Industrial]: { value: 4, desc: 'A major influence, particularly the repetitive, mechanical sounds and often dystopian themes.' },
  [Genre.Classical]: { value: 1, desc: 'Very little direct influence; techno is largely focused on rhythm and texture over traditional melody and harmony.' },
  [Genre.Disco]: { value: 3, desc: 'The 4/4 beat is a connection, but techno often emphasizes rawness and minimalism over disco\'s lush production.' },
  [Genre.SynthPop]: { value: 4, desc: 'The use of synthesizers and drum machines is a core connection, but techno often uses these tools in a more experimental and aggressive way.' },
  [Genre.Funk]: { value: 3, desc: 'The emphasis on a strong, syncopated groove is a clear connection, particularly in Detroit Techno.' },
  [Genre.Electro]: { value: 5, desc: 'A direct parent genre. Techno borrowed the futuristic sounds, robotic vocals (sometimes), and emphasis on rhythmic complexity.' },
  [Genre.EBM]: { value: 4, desc: 'Electronic Body Music, along with industrial, was very important to Techno\'s development in Europe.' },
  [Genre.Goa]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Soul]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Gospel]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Jazz]: { value: 1, desc: 'Little direct influence.' }
};

const DATA_TRANCE: CompareGenreData = {
  [Genre.Psychedelia]: { value: 4, desc: 'Early trance drew heavily from psychedelic rock and the "space rock" sounds of bands like Tangerine Dream and Klaus Schulze. Long, evolving soundscapes.' },
  [Genre.NewAge]: { value: 4, desc: 'The emphasis on atmosphere, texture, and meditative repetition has clear roots in New Age and Ambient music.' },
  [Genre.Industrial]: { value: 2, desc: 'Some early trance incorporated harder, industrial sounds, though this became less prominent over time.' },
  [Genre.Classical]: { value: 3, desc: 'Melodic structures and harmonic progressions sometimes borrow from classical music, particularly in uplifting trance.' },
  [Genre.Disco]: { value: 2, desc: 'The 4/4 beat is indirectly linked, but trance\'s rhythmic complexity is generally higher.' },
  [Genre.SynthPop]: { value: 3, desc: 'The heavy reliance on synthesizers and electronic sounds is a direct connection. Melodic synth lines are key.' },
  [Genre.Goa]: { value: 4, desc: 'The use of Indian instruments (or synthesized samples) along with raga-inspired scales. Especially prominent in Goa Trance.' },
  [Genre.EBM]: { value: 3, desc: 'Electronic Body Music was a key influence on early trance, particuarly in Europe. The repetitive, driving energy.' },
  [Genre.Funk]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Soul]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Gospel]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Jazz]: { value: 1, desc: 'Little direct influence.' },
  [Genre.Electro]: { value: 1, desc: 'Little direct influence.' }
};

enum CompareGenre {
  House = 'House',
  Techno = 'Techno',
  Trance = 'Trance',
}

const COMPARE_GENRES: Record<CompareGenre, CompareGenreData> = {
  [CompareGenre.House]: DATA_HOUSE,
  [CompareGenre.Techno]: DATA_TECHNO,
  [CompareGenre.Trance]: DATA_TRANCE,
};



function collectValues(data?: CompareGenreData): number[] {
  if (data === undefined) {
    return Object.values(Genre).map(_ => 0);
  }
  return Object.values(Genre).map(genre => data[genre].value - 1);
}



@customElement('hyrax-app')
export class App extends LitElement {
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

.genre-labels {
  display: flex;
  flex-direction: row;
  text-align: center;
  max-width: 30em;
  width: 100%;
}

.hidden {
  visibility: hidden;
}

.genre-label {
  font-size: 200%;
  text-transform: uppercase;
  flex-basis: 0;
  flex-grow: 1;
  width: 0;
  white-space: nowrap;
}
.genre-label.selected {
  text-decoration: underline;
}

.spider-outer {
  position: relative;
  width: 100%;
}

.spider-canvas {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.spider-label {
  --angle: 0deg;
  padding: 1em 2em;
  position: absolute;
  left: calc((sin(var(--angle)) * 0.35 + 0.5) * 100%);
  top: calc((-1.0 * cos(var(--angle)) * 0.35 + 0.5) * 100%);
  transform: translate(-50%, -50%);
}
.spider-label.selected {
  text-decoration: underline;
}

.spider-desc {
  position: absolute;
  width: fit-content;
  height: fit-content;
  max-width: 50%;
  top: 50%;
  background-color: #000000E0;
  font-size: 130%;
  padding: 1em;
  justify-self: anchor-center;
  transform: translate(0, -50%);
  pointer-events: none;
}

.info-tag::after {
  content: 'ℹ︎';
}
.info-tag {
  position: relative;
  display: inline-block;
  bottom: 1.0em;
  left: 0.25em;
  font-size: 50%;
  width: 1em;
  height: 1em;
  opacity: 0.8;
}
.selected .info-tag {
  opacity: 1.0;
}

.note {
  text-transform: lowercase;
  font-style: italic;
  max-width: 50%;
  opacity: 0.5;
}

`];

  @query('canvas') canvas?: HTMLCanvasElement;
  get selectedCompareGenre() { return this.hoverCompareGenre ?? this.pinnedCompareGenre; }
  @property({ attribute: false }) hoverCompareGenre?: CompareGenre;
  @property({ attribute: false }) pinnedCompareGenre?: CompareGenre;
  @property({ attribute: false }) selectedGenre?: Genre;

  private currentCompareGenre?: CompareGenre;

  protected firstUpdated() {
    this.animateToValues({ values: collectValues(COMPARE_GENRES[this.selectedCompareGenre!]) });
  }

  render() {
    if (this.currentCompareGenre !== this.selectedCompareGenre) {
      this.currentCompareGenre = this.selectedCompareGenre;
      this.animateToValues({ values: collectValues(COMPARE_GENRES[this.selectedCompareGenre!]) });
    } else {
      this.refreshGraph();
    }
    const allGenres = Object.values(Genre);
    return html`
<div class="app-outer">
  <div class="genre-labels">
    ${Object.values(CompareGenre).map(genre => html`
    <div
        class="genre-label ${this.selectedCompareGenre === genre ? 'selected' : ''}"
        @mouseenter=${wrapClick(() => this.hoverCompareGenre = genre)}
        @mouseleave=${wrapClick(() => { if (this.pinnedCompareGenre) { this.hoverCompareGenre = undefined; } })}
        @click=${wrapClick(() => { this.pinnedCompareGenre = genre; this.hoverCompareGenre = undefined; })}
    >${genre}<span class="info-tag"></span></div>
    `)}
  </div>
  <div
      class="spider-outer"
      @click=${wrapClick(() => this.selectedGenre = undefined)}
  >
    <canvas class="spider-canvas"></canvas>
    ${Object.values(Genre).map((genre, i) => html`
    <div
        class="spider-label ${!this.selectedCompareGenre ? 'hidden': ''} ${this.selectedGenre === genre ? 'selected' : ''}"
        style=${styleMap({ '--angle': `${360 * i / allGenres.length}deg` })}
        @click=${wrapClick(() => this.selectedGenre = genre)}
        @mouseenter=${wrapClick(() => this.selectedGenre = genre)}
        @mouseleave=${wrapClick(() => this.selectedGenre = undefined)}
    >
      ${genre}<span class="info-tag"></span>
    </div>
    `)}
    <div class="spider-desc ${!this.selectedCompareGenre || !this.selectedGenre ? 'hidden' : ''}">
      ${COMPARE_GENRES[this.selectedCompareGenre!]?.[this.selectedGenre!]?.desc}
    </div>
  </div>
  <div class="note">
    Select text marked with <span class="info-tag"></span> to view more information and compare how influences are shared and differ.
  </div>
</div>
`;
  }

  private drawCanvas({values, maxValue}: {values: number[], maxValue: number}) {
    const canvas = this.canvas;
    if (!canvas) {
      return;
    }
    const pixelRatio = window.devicePixelRatio;
    canvas.width = canvas.clientWidth * pixelRatio;
    canvas.height = canvas.clientHeight * pixelRatio;
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }
    const clientWidth = canvas.width;
    const clientHeight = canvas.height;
    context.clearRect(0, 0, clientWidth, clientHeight);
    const polarDir = (t: number): [dirX: number, dirY: number] => {
      return [Math.sin(t * Math.PI * 2), -Math.cos(t * Math.PI * 2)];
    };
    const posFromCenter = (dirX: number, dirY: number, dist: number): [x: number, y: number] => {
      return [ clientWidth * (dirX * dist * Math.SQRT1_2 * 0.45 + 0.5), clientHeight * (dirY * dist * Math.SQRT1_2 * 0.45 + 0.5) ];
    };
    const normalized = ([x, y]: [x: number, y: number]): [dirX: number, dirY: number] => {
      const norm = Math.sqrt(x * x + y * y);
      if (norm > 1e-5) {
        return [x / norm, y / norm];
      }
      return [0, 1];
    };

    const valueCount = values.length;
    const markWidth = clientWidth * 0.015;

    context.lineWidth = 2;
    const allGenres = Object.values(Genre);
    for (let i = 0; i < valueCount; ++i) {
      context.beginPath();
      const selected = allGenres[i] === this.selectedGenre;
      context.strokeStyle = selected ? '#b10909' : '#505050';
      const [dirX, dirY] = polarDir(i / valueCount);

      for (let j = 1; j < maxValue; ++j) {
        const markDist = j / maxValue;
        const [x, y] = posFromCenter(dirX, dirY, markDist);

        const [normalX, normalY] = normalized([-dirY, dirX]);
        context.moveTo(x - normalX * markWidth * 0.5, y - normalY * markWidth * 0.5);
        context.lineTo(x + normalX * markWidth * 0.5, y + normalY * markWidth * 0.5);
      }
      {
        context.moveTo(...posFromCenter(0, 0, 0.0));
        context.lineTo(...posFromCenter(dirX, dirY, 1.0));
      }
      context.stroke();
    }

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = '#808080';
    context.moveTo(...posFromCenter(...polarDir(-1 / valueCount), 1.0));
    for (let i = 0; i < valueCount; ++i) {
      const [dirX, dirY] = polarDir(i / valueCount);
      context.lineTo(...posFromCenter(dirX, dirY, 1.0));
    }
    context.stroke();

    context.beginPath();
    context.strokeStyle = '#b10909';
    context.fillStyle = `#b1090980`;
    context.moveTo(...posFromCenter(...polarDir(-1 / valueCount), values[valueCount - 1] / maxValue));
    for (let i = 0; i < valueCount; ++i) {
      const [dirX, dirY] = polarDir(i / valueCount);
      context.lineTo(...posFromCenter(dirX, dirY, values[i] / maxValue));
    }
    context.stroke();
    context.fill();
  }

  private tweenTime = 0.0;
  private tweenDuration = 1.0;
  private tweenStartValues: number[] = [];
  private tweenEndValues: number[] = [];
  private isTweening = false;
  private currentValues: number[] = [];

  private refreshGraph() {
    this.drawCanvas({ values: this.currentValues, maxValue: 4 });
  }

  private animateToValues({ values, duration }: { values: number[], duration?: number }) {
    if (this.currentValues.length > values.length) {
      this.currentValues = this.currentValues.slice(0, values.length);
    } else if (values.length > this.currentValues.length) {
      while (values.length > this.currentValues.length) {
        this.currentValues.push(0);
      }
    }
    this.tweenStartValues = Array.from(this.currentValues);
    this.tweenEndValues = Array.from(values);
    this.tweenTime = 0.0;
    this.tweenDuration = duration ?? 300.0;

    if (this.isTweening) {
      return;
    }
    this.isTweening = true;

    let prevTime = Date.now();
    const updateTween = () => {
      const nowTime = Date.now();
      const elapsedTime = nowTime - prevTime;
      prevTime = nowTime;
      this.tweenTime += elapsedTime / Math.max(1e-5, this.tweenDuration);

      if (this.tweenTime > 1.0) {
        this.currentValues = Array.from(this.tweenEndValues);
        this.isTweening = false;
      } else {
        for (let i = 0; i < this.currentValues.length; ++i) {
          this.currentValues[i] = lerp(this.tweenStartValues[i], this.tweenEndValues[i], easeOut(this.tweenTime));
        }
        requestAnimationFrame(() => updateTween());
      }
      this.drawCanvas({ values: this.currentValues, maxValue: 4 });
    };
    requestAnimationFrame(() => updateTween());
  }
}

function lerp(a: number, b: number, t: number) {
  return a * (1.0 - t) + b * t;
}

function easeOut(x: number) {
  return Math.sqrt(x);
}

function wrapClick(callback: () => unknown) {
  return (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    callback();
  };
}


document.body.appendChild(new App());

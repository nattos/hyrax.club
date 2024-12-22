import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import { css, html, LitElement } from 'lit';
import {} from 'lit/html';
import { customElement, query, queryAll } from 'lit/decorators.js';

function getLineAwesomeStylesheet() {
  const styleElements = Array.from(document.head.querySelectorAll('style').values()) as HTMLStyleElement[];
  return toStyleSheet(styleElements[0]);
}

function toStyleSheet(styleElement: HTMLStyleElement): CSSStyleSheet {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(styleElement.innerText);
  return styleSheet;
}

@customElement('hyrax-app')
export class App extends LitElement {
  static styles = [
    getLineAwesomeStylesheet(),
    css`
body, :host {
  background: black;
  color: white;
  margin: 0;
  font-family: Questrial, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(max(10px, min(18px, 1.5vw)));
}

:host {
  --gap: calc(max(0px, 100vh - 100vw * 9 / 16));
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

.outer-scroll-container {
  position: fixed;
  inset: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: calc(var(--gap) * 0.5) 0;
}

.foreground {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  z-index: 1;
}

.foreground-content {
  position: absolute;
  inset: 0;
  margin: calc(var(--gap) * 0.5) 0;
}

.text-block {
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 30em;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1em;
  gap: 0.5em;

  position: absolute;
  bottom: 10%;
}

.background {
  position: relative;
  opacity: 0;
}

.back-video {
  width: 100vw;
}

@keyframes fade-in {
  to {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.faded-in {
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
}

.background .fullscreen-button {
  visibility: hidden;
}
@media only screen and (hover: none) {
  .background .fullscreen-button {
    visibility: visible;
  }
}

.background:hover .fullscreen-button {
  visibility: visible;
}

.fullscreen-button {
  position: absolute;
  right: 0.5em;
  bottom: 0.5em;
  padding: 0.45em;
  font-size: 150%;
  cursor: pointer;
  user-select: none;
}
.fullscreen-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
`];

  @query('.outer-scroll-container') scrollContainer!: HTMLElement;
  @queryAll('.content-panel') allContentPanels!: NodeListOf<HTMLElement>;
  private currentContentPanel?: HTMLElement;
  private currentContentPanelIndex = -1;
  private currentLockedPanel?: HTMLElement;

  private scrollLockTimeout?: number;

  private onScroll() {
    const viewportCenter = getCenterY(this.scrollContainer.getBoundingClientRect());

    if (this.currentContentPanel !== this.allContentPanels.item(this.currentContentPanelIndex)) {
      this.currentContentPanel = undefined;
      this.currentContentPanelIndex = -1;
    }
    if (this.currentContentPanel !== undefined) {
      const thisDelta = getPanelDelta(this.currentContentPanel, viewportCenter);
      const prevPanelDelta = getPanelDelta(this.allContentPanels.item(this.currentContentPanelIndex - 1), viewportCenter);
      const nextPanelDelta = getPanelDelta(this.allContentPanels.item(this.currentContentPanelIndex + 1), viewportCenter);
      const otherPanelDelta = Math.min(Math.abs(prevPanelDelta), Math.abs(nextPanelDelta));
      if (Math.abs(thisDelta) > otherPanelDelta) {
        this.currentContentPanel = undefined;
        this.currentContentPanelIndex = -1;
      }
    }
    if (this.currentContentPanel === undefined) {
      const sortedPanels = Array.from(this.allContentPanels).map((p, i) => ({ dist: Math.abs(getPanelDelta(p, viewportCenter)), panel: p, index: i }));
      sortedPanels.sort((a, b) => a.dist - b.dist);
      this.currentContentPanel = sortedPanels.at(0)?.panel;
      this.currentContentPanelIndex = sortedPanels.at(0)?.index ?? -1;
    }
    if (this.currentContentPanel === undefined) {
      return;
    }

    clearTimeout(this.scrollLockTimeout);
    this.scrollLockTimeout = setTimeout(() => {
      const viewportRect = this.scrollContainer.getBoundingClientRect();
      const viewportHeight = viewportRect.height;
      const viewportCenter = getCenterY(viewportRect);
      const delta = getPanelDelta(this.currentContentPanel, viewportCenter);
      // const dist = Math.abs(delta);
      // if (dist > viewportHeight * 0.2) {
      //   return;
      // }

      this.scrollContainer.scrollBy({ top: -delta, behavior: 'smooth' });
      this.lockPanel(this.currentContentPanel);
    }, 100, undefined);

    requestAnimationFrame(() => this.updateScroll());
  }

  private updateScroll() {
    if (!this.currentContentPanel) {
      this.unlockPanel();
      return;
    }
    const viewportRect = this.scrollContainer.getBoundingClientRect();
    const viewportHeight = viewportRect.height;
    const viewportCenter = getCenterY(viewportRect);
    const delta = getPanelDelta(this.currentContentPanel, viewportCenter);
    const dist = Math.abs(delta);
    const alpha = Math.max(0, Math.min(1, (1 - (dist / (viewportHeight * 0.3)) + 0.7)));
    // const alphaTight = Math.max(0, Math.min(1, (1 - (dist / (viewportHeight * 0.1)) + 0.2)));

    // const foregroundElement = this.currentContentPanel.querySelector('.foreground');
    const backgroundElement = this.currentContentPanel.querySelector('.background');
    // if (foregroundElement) {
    //   (foregroundElement as HTMLElement).style.opacity = `${alphaTight.toFixed(4)}`;
    // }
    if (backgroundElement) {
      (backgroundElement as HTMLElement).style.opacity = `${alpha.toFixed(4)}`;
    }
    if (dist < 5) {
      this.lockPanel(this.currentContentPanel);
    } else {
      this.unlockPanel();
    }
  }

  private lockPanel(panel: HTMLElement|null|undefined) {
    if (this.currentLockedPanel === panel) {
      return;
    }
    this.unlockPanel();
    this.currentLockedPanel = panel ?? undefined;
    if (!this.currentLockedPanel) {
      return;
    }
    const foreground = this.currentLockedPanel.querySelector('.foreground');
    if (foreground) {
      foreground.classList.add('faded-in');
      for (const anim of foreground.getAnimations() as CSSAnimation[]) {
        if (anim.animationName === 'fade-in') {
          anim.playbackRate = 1;
        }
      }
    }
  }

  private unlockPanel() {
    if (!this.currentLockedPanel) {
      return;
    }
    const foreground = this.currentLockedPanel.querySelector('.foreground');
    this.currentLockedPanel = undefined;
    if (foreground) {
      for (const anim of foreground.getAnimations() as CSSAnimation[]) {
        if (anim.animationName === 'fade-in') {
          anim.playbackRate = -1;
        }
      }
    }
  }

  private doFullscreenContent(element: HTMLElement) {
    let searchNode: HTMLElement|null = element;
    while (searchNode) {
      if (searchNode.classList.contains('content-panel')) {
          break;
      }
      searchNode = searchNode.parentElement;
    }
    if (!searchNode) {
      return;
    }
    const videoElement = searchNode.querySelector('video');
    if (videoElement) {
      (screen.orientation as any).lock?.('landscape');
      videoElement.requestFullscreen();
    }
  }

  protected firstUpdated() {
    this.onScroll();
  }

  render() {
    return html`
<div class="outer-scroll-container" @scroll=${() => this.onScroll()}>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>hyrax.club</h1>
          <p>
            we do events
            <br>
            we teach people
            <br>
            we combine music, visuals, and technology
          </p>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" autoplay loop muted src="hyrax.club.mp4"></video>
      <div class="fullscreen-button las la-expand" @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></div>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a music community</h1>
          <p>Hyrax covers a broad range of music styles, from underground electronic music to not traditionally club-styles like orchestral and acoustic music</p>
          <p>We seek to build deeper connections with the music by interacting with it through DJ techniques and live performances</p>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" autoplay loop muted src="a music community.mp4"></video>
      <div class="fullscreen-button las la-expand" @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></div>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a live visual community</h1>
          <p>Hyrax sees visuals as just as important as music</p>
          <p>We combine code and technology to create live visuals that capture the essence of the moment - rhythm and mood</p>
          <p>Audio reactivity, custom built software, and live control surfaces like midi controllers are key ingredients</p>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" autoplay loop muted src="a live visuals community.mp4"></video>
      <div class="fullscreen-button las la-expand" @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></div>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a community for learning</h1>
          <p>Hyrax is a place where adventurous people can learn new skills, and also share their insights with others</p>
          <p>Most of our members have learned their music and visuals skills from scratch through our group</p>
          <p>Many members eventually end up trying new skills - DJs might try VJing, or the other way around</p>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" autoplay loop muted src="a community for learning.mp4"></video>
      <div class="fullscreen-button las la-expand" @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></div>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>an event group</h1>
          <p>Key to making hyrax work is our events</p>
          <p>Hyrax organizes regular events at real clubs - performers use this opportunity to try new skills, but also as a call-to-action, with everyone rallying around this common objective</p>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" autoplay loop muted src="an event group.mp4"></video>
      <div class="fullscreen-button las la-expand" @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></div>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a safe place to try new things</h1>
          <p>Hyrax more than anything believes in creating a space where new and old members can try new skills</p>
          <p>Most of our members never thought they would perform at real events - for many, Hyrax is their first event ever</p>
          <p>We strive to keep our community vibrant and inviting, even as we grow and become more diverse</p>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" autoplay loop muted src="a safe place to try new things.mp4"></video>
      <div class="fullscreen-button las la-expand" @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></div>
    </div>
  </div>
</div>
`;
  }
}

function getPanelDelta(panel: HTMLElement|null|undefined, viewportCenter: number) {
  if (!panel) {
    return Number.POSITIVE_INFINITY;
  }
  return viewportCenter - getCenterY(panel.getBoundingClientRect());
}

function getCenterY(rect: DOMRect): number {
  return rect.y + rect.height * 0.5;
}

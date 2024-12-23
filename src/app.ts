import { css, html, LitElement } from 'lit';
import {} from 'lit/html';
import { customElement, property, query, queryAll } from 'lit/decorators.js';

@customElement('hyrax-app')
export class App extends LitElement {
  static styles = [
    css`
body, :host {
  background: black;
  color: white;
  margin: 0;
  font-family: Questrial, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(max(10px, min(18px, min(1.5vw, 1.5vh))));
}

:host {
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
  display: flex;
  flex-direction: column;
  --width: calc(min(100vw, 100vh * 16 / 9));
  --height: calc(max(100vh, var(--width) * 9 / 16));
  --vertical-padding: calc((100vh - var(--width) * 9 / 16) / 2);
  --horizontal-padding: calc((100vw - var(--width)) / 4);
  --page-padding: 20vh;
  padding-top: var(--page-padding);
}

.content-panel {
  position: relative;
  height: calc(80vh);
  pointer-events: none;
}
.focused.content-panel {
  pointer-events: unset;
}
.content-panel::before, .content-panel::after {
  display: block;
  position: absolute;
  top: calc(var(--height) - var(--vertical-padding) - var(--page-padding));
  transform: translate(0, calc(var(--height) * -0.025));
  left: 0;
  height: 2px;
  width: 0.8em;
  background-color: white;
  content: ' ';
  z-index: 1;
}
.content-panel::after {
  transform: translate(0, calc(var(--height) * -0.105));
  width: 0.6em;
}

.foreground {
  position: fixed;
  inset: var(--vertical-padding) 0;
  pointer-events: none;
  opacity: 0;
  z-index: 2;
}

.foreground-content {
  position: absolute;
  inset: 0;
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
  bottom: 5%;
}

.background {
  position: fixed;
  inset: var(--vertical-padding) var(--horizontal-padding);
  z-index: 0;
  opacity: 0;
  pointer-events: none;
}
.focused .background {
  pointer-events: all;
}

.back-video {
  width: var(--width);
  padding-left: var(--horizontal-padding);
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
  animation-delay: 0.4s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
}

.background fullscreen-button {
  visibility: hidden;
}
@media only screen and (hover: none) {
  .background fullscreen-button {
    visibility: visible;
  }
}

.background:hover fullscreen-button {
  visibility: visible;
}

fullscreen-button {
  position: absolute;
  right: calc(0.5em + var(--horizontal-padding));
  bottom: 0.5em;
}
fullscreen-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

.scroll-indicator {
  position: absolute;
  left: 50%;
  top: 100vh;
  transform: translate(-50%, -300%);
  color: rgba(255, 255, 255, 0.35);
  filter: blur(0.3px);
  z-index: 1;
  user-select: none;
  pointer-events: none;

  opacity: 0;
  animation-name: fade-in;
  animation-duration: 8s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  animation-delay: 5s;
}
`];

  @property({ attribute: false }) didScroll = false;

  private scrollElement: HTMLElement = document.scrollingElement as HTMLElement;
  @queryAll('.content-panel') allContentPanels!: NodeListOf<HTMLElement>;
  private currentContentPanel?: HTMLElement;
  private previousContentPanel?: HTMLElement;
  private currentContentPanelIndex = -1;
  private currentLockedPanel?: HTMLElement;

  private scrollLockTimeout?: number;

  private lastNonFullscreenScrollY = 0;
  private wasFullscreen = false;
  private isFullscreenCooldown = false;
  private fullscreenCooldownStart = 0;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('scroll', () => this.onScroll());
  }

  private onScroll() {
    if (this.wasFullscreen) {
      if (document.fullscreenElement) {
        return;
      }
      this.wasFullscreen = false;
      this.isFullscreenCooldown = true;
      this.fullscreenCooldownStart = Date.now();
    }
    if (this.isFullscreenCooldown) {
      const nowTime = Date.now();
      const elapsed = nowTime - this.fullscreenCooldownStart;
      if (elapsed > 500) {
        this.isFullscreenCooldown = false;
      } else {
        this.scrollElement.scrollTop = this.lastNonFullscreenScrollY;
        return;
      }
    }
    this.lastNonFullscreenScrollY = this.scrollElement.scrollTop;
    const { viewportHeight, viewportCenter } = getViewportLayout();
    if (this.scrollElement.scrollTop > viewportCenter) {
      this.didScroll = true;
    }

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
    requestAnimationFrame(() => this.updateScroll());
  }

  private updateScroll() {
    if (this.currentContentPanel !== this.previousContentPanel) {
      if (this.previousContentPanel) {
        const foregroundElement = this.previousContentPanel.querySelector('.foreground');
        // const backgroundElement = this.previousContentPanel.querySelector('.background');
        if (foregroundElement) {
          (foregroundElement as HTMLElement).style.opacity = '0';
        }
        this.previousContentPanel.classList.remove('focused');
      }
      this.previousContentPanel = this.currentContentPanel;
    }
    if (!this.currentContentPanel) {
      this.unlockPanel();
      return;
    }
    this.currentContentPanel.classList.add('focused');

    const { viewportHeight, viewportCenter } = getViewportLayout();
    const delta = getPanelDelta(this.currentContentPanel, viewportCenter);
    const dist = Math.abs(delta);
    // const alpha = Math.max(0, Math.min(1, (1 - (dist / (viewportHeight * 0.2)) + 0.3)));
    const alphaTight = Math.max(0, Math.min(1, (1 - (dist / (viewportHeight * 0.1)) + 2.7)));

    const foregroundElement = this.currentContentPanel.querySelector('.foreground');
    if (foregroundElement) {
      (foregroundElement as HTMLElement).style.transform = `translate(0, ${CSS.px(delta * -0.1)})`;
      // (foregroundElement as HTMLElement).style.opacity = `${alphaTight.toFixed(4)}`;
    }
    const backgroundElement = this.currentContentPanel.querySelector('.background');
    // if (foregroundElement) {
    // }
    // if (backgroundElement) {
    //   (backgroundElement as HTMLElement).style.opacity = `${alpha.toFixed(4)}`;
    // }
    this.lockPanel(this.currentContentPanel);
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
    setFadedIn(this.currentLockedPanel.querySelector('.foreground'), true);
    setFadedIn(this.currentLockedPanel.querySelector('.background'), true);
  }

  private unlockPanel() {
    if (!this.currentLockedPanel) {
      return;
    }
    setFadedIn(this.currentLockedPanel.querySelector('.foreground'), false);
    setFadedIn(this.currentLockedPanel.querySelector('.background'), false);
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
      videoElement.requestFullscreen().then(() => {
        this.wasFullscreen = true;
      });
    }
  }

  protected firstUpdated() {
    this.onScroll();
  }

  render() {
    return html`
<div class="outer-scroll-container">
  <div class="scroll-indicator" ?hidden=${this.didScroll}>scroll-for-more</div>
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
      <video class="back-video" autoplay loop muted src="assets/hyrax.club.mp4"></video>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)} />
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
      <video class="back-video" autoplay loop muted src="assets/a music community.mp4"></video>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)} />
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
      <video class="back-video" autoplay loop muted src="assets/a live visuals community.mp4"></video>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)} />
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
      <video class="back-video" autoplay loop muted src="assets/a community for learning.mp4"></video>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)} />
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
      <video class="back-video" autoplay loop muted src="assets/an event group.mp4"></video>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)} />
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
      <video class="back-video" autoplay loop muted src="assets/a safe place to try new things.mp4"></video>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)} />
    </div>
  </div>
</div>
`;
  }
}

@customElement('fullscreen-button')
export class FullscreenButton extends LitElement {
  static styles = css`
:host {
  --icon-padding: 0.45em;
  padding: 0.45em;
  width: 1em;
  height: 1em;
  font-size: 150%;
  cursor: pointer;
  user-select: none;
}

.corner00, .corner01, .corner10, .corner11 {
  position: absolute;
  width: calc(60% - var(--icon-padding) * 2);
  height: calc(60% - var(--icon-padding) * 2);
}
.corner00 {
  border-top: 1.5px solid white;
  border-left: 1.5px solid white;
  left: var(--icon-padding);
  top: var(--icon-padding);
}
.corner01 {
  border-top: 1.5px solid white;
  border-right: 1.5px solid white;
  right: var(--icon-padding);
  top: var(--icon-padding);
}
.corner10 {
  border-bottom: 1.5px solid white;
  border-left: 1.5px solid white;
  left: var(--icon-padding);
  bottom: var(--icon-padding);
}
.corner11 {
  border-bottom: 1.5px solid white;
  border-right: 1.5px solid white;
  right: var(--icon-padding);
  bottom: var(--icon-padding);
}
.touch {
  position: absolute;
  inset: -1em;
  background-color: transparent;
}
`;

  protected render() {
    return html`
<div class="touch"></div>
<div class="corner00"></div>
<div class="corner01"></div>
<div class="corner10"></div>
<div class="corner11"></div>
`;
  }
}

function getViewportLayout(): { viewportHeight: number; viewportCenter: number; } {
  if (!window.visualViewport) {
    return { viewportCenter: 0, viewportHeight: 0 };
  }
  return { viewportCenter: window.visualViewport.height / 2 + window.visualViewport.offsetTop, viewportHeight: window.visualViewport.height };
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

function setFadedIn(foreground: Element|null|undefined, fadedIn: boolean) {
  if (!foreground) {
    return;
  }
  if (fadedIn) {
    foreground.classList.add('faded-in');
  }
  for (const anim of foreground.getAnimations() as CSSAnimation[]) {
    if (anim.animationName === 'fade-in') {
      anim.playbackRate = fadedIn ? 1 : -1;
    }
  }
}

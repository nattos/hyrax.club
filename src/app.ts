import * as utils from './utils';
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
  background-color: #adadad;
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
@media only screen and (hover: none) {
  .foreground {
    bottom: 5em;
  }
}

.foreground-content {
  position: absolute;
  inset: 0;
}

.text-block {
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: calc(min(100vw, 30em));
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1em;
  gap: 0.5em;

  position: absolute;
  bottom: 5%;
}

.hanging-buttons {
  position: fixed;
  left: 0.5em;
  bottom: 0.5em;
  display: flex;
  gap: 0.5em;
  z-index: 5;
}
@media only screen and (hover: none) {
  .hanging-buttons {
    bottom: 2em;
  }
}
.hanging-button {
  color: #adadad;
}
.is-flipped .hanging-button.unflipped {
  color: #707070;
}
.is-unflipped .hanging-button.flipped {
  color: #707070;
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
  from {
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
@media only screen and (hover: none) {
  fullscreen-button {
    position: relative;
    right: calc(-100vw + 2.5em + var(--horizontal-padding) * 3);
    bottom: 2.5em;
    display: block;
  }
}
fullscreen-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

.background loading-indicator {
  position: absolute;
  left: 50%;
  top: 97%;
  width: 20vw;
  transform: translate(-50%, -50%);
}

simple-button {
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.6);
}
simple-button:hover {
  opacity: 0.6;
}
@media only screen and (hover: none) {
  simple-button:hover {
    opacity: unset;
  }
}

.scroll-indicator {
  position: absolute;
  left: 50%;
  top: 100vh;
  transform: translate(-50%, calc(-200% - 2em));
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
@media only screen and (hover: none) {
  .scroll-indicator {
    transform: translate(-50%, calc(-200% - 4em));
  }
}

.scrolly-bar {
  position: fixed;
  left: 0;
  width: 2px;
  height: 2px;
  bottom: 0;
  background-color: #adadad;
  z-index: 1;
}
@media only screen and (hover: none) {
  .scrolly-bar {
    bottom: 10px;
  }
}

.fade-shade-container {
  position: relative;
  width: fit-content;
  height: fit-content;
}
.fade-shade {
  --t: calc(1 - var(--language-flip));
  mask-image: linear-gradient(to bottom, white 0%, white calc(100% * var(--t)), transparent calc(100% * var(--t)), transparent 100%);
  mask-size: 1px 1lh;
  mask-repeat: repeat;
  mask-position: top;
}
.fade-shade.flipped {
  position: absolute;
  inset: 0;
  mask-image: linear-gradient(to bottom, transparent 0%, transparent calc(100% * var(--t)), white calc(100% * var(--t)), white 100%);
}
.is-flipped .fade-shade {
  position: absolute;
  inset: 0;
}
.is-flipped .fade-shade.flipped {
  position: unset;
}
`];

  @property({ attribute: false }) didScroll = false;

  private scrollElement: HTMLElement = document.scrollingElement as HTMLElement;
  @query('.outer-scroll-container') outerContainer!: HTMLElement;
  @queryAll('video') videoElements!: NodeListOf<HTMLVideoElement>;
  @queryAll('.content-panel') allContentPanels!: NodeListOf<HTMLElement>;
  @queryAll('.scrolly-bar') allScrollyBars!: NodeListOf<HTMLElement>;
  private currentContentPanel?: HTMLElement;
  private previousContentPanel?: HTMLElement;
  private currentContentPanelIndex = -1;
  private currentLockedPanel?: HTMLElement;

  private lastNonFullscreenScrollY = 0;
  private wasFullscreen = false;
  private isFullscreenCooldown = false;
  private fullscreenCooldownStart = 0;

  private isFlipped = false;
  private flipIsRunning = false;
  private flipTarget = false;

  private readonly preloadVideoQueue: HTMLVideoElement[] = [];

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('scroll', () => this.onScroll());
  }

  private doSelectEn() {
    this.flipTarget = false;
    this.runFlip();
  }

  private doSelectJp() {
    this.flipTarget = true;
    this.runFlip();
  }

  private runFlip() {
    if (this.flipIsRunning) {
      return;
    }
    this.flipIsRunning = true;

    const duration = 350.0;
    let t = this.isFlipped ? 1.0 : 0.0;
    let prevTime = Date.now();
    const doAnimate = () => {
      const nowTime = Date.now();
      const deltaTime = nowTime - prevTime;
      prevTime = nowTime;
      let ended = false;
      if (this.flipTarget) {
        t += deltaTime / duration;
        if (t > 1.0) {
          t = 1.0;
          ended = true;
        }
      } else {
        t -= deltaTime / duration;
        if (t < 0.0) {
          t = 0.0;
          ended = true;
        }
      }

      const tSigned = t * 2.0 - 1.0;
      const tSquashSigned = Math.sign(tSigned) * Math.pow(Math.abs(tSigned), 2);
      const tSquash = Math.max(0.0, Math.min(1.0, tSquashSigned * 0.5 + 0.5));
      this.outerContainer.attributeStyleMap.set('--language-flip', tSquash.toFixed(4));
      if (ended) {
        this.flipIsRunning = false;
        this.isFlipped = this.flipTarget;
        const newClass = this.flipTarget ? 'is-flipped' : 'is-unflipped';
        const oldClass = this.flipTarget ? 'is-unflipped' : 'is-flipped';
        this.outerContainer.classList.add(newClass);
        this.outerContainer.classList.remove(oldClass);
      } else {
        requestAnimationFrame(doAnimate);
      }
    };
    doAnimate();
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
    this.updateScrollyBars();
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

  private updateScrollyBars() {
    if (!window.visualViewport) {
      return;
    }
    const scrollTop = window.visualViewport.pageTop;
    const viewportHeight = window.visualViewport.height;
    const pageHeight = this.outerContainer.clientHeight;
    const scrollHeight = pageHeight - viewportHeight;
    if (scrollHeight <= 0) {
      return;
    }
    const t = scrollTop / scrollHeight;
    const count = this.allScrollyBars.length;
    const spans = generateChaosSpans(t, count);
    let index = 0;
    for (const { start, end } of spans) {
      const el = this.allScrollyBars.item(index);
      el.style.left = CSS.vw(start * 82).toString();
      el.style.width = CSS.vw((end - start) * 82).toString();
      index++;
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
    setFadedIn(this.currentLockedPanel.querySelector('.foreground'), true);
    setFadedIn(this.currentLockedPanel.querySelector('.background'), true);

    const videoElement = this.currentLockedPanel.querySelector('video');
    if (videoElement) {
      videoElement.play();
    }
    const loadingIndicator = this.currentLockedPanel.querySelector('loading-indicator') as LoadingIndicator;
    if (loadingIndicator) {
      loadingIndicator.retrigger();
    }
  }

  private unlockPanel() {
    if (!this.currentLockedPanel) {
      return;
    }
    setFadedIn(this.currentLockedPanel.querySelector('.foreground'), false);
    setFadedIn(this.currentLockedPanel.querySelector('.background'), false);
  }

  private async startPreloadVideo() {
    for (const videoElement of this.preloadVideoQueue) {
      const findLoadingIndicator = () => videoElement.parentElement?.querySelector('loading-indicator') as LoadingIndicator|null;
      videoElement.addEventListener('waiting', () => {
        const loadingIndicator = findLoadingIndicator();
        if (loadingIndicator) {
          loadingIndicator.show();
          loadingIndicator.retrigger();
        }
      });
      videoElement.addEventListener('canplay', () => {
        const loadingIndicator = findLoadingIndicator();
        if (loadingIndicator) {
          loadingIndicator.hide();
        }
      });
    }

    while (this.preloadVideoQueue.length > 0) {
      const videoElement = this.preloadVideoQueue.shift()!;
      videoElement.preload = 'auto';
      videoElement.autoplay = true;
      if (videoElement.currentTime > 0) {
        continue;
      }

      while (true) {
        await utils.sleep(100);
        const bufferedRanges = videoElement.buffered;
        let maxBufferedPos = 0;
        for (let i = 0; i < bufferedRanges.length; ++i) {
          maxBufferedPos = Math.max(maxBufferedPos, bufferedRanges.end(i));
        }
        if (maxBufferedPos >= videoElement.duration - 0.1) {
          break;
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
      videoElement.requestFullscreen().then(async () => {
        this.wasFullscreen = true;
        try {
          await (screen.orientation as any).lock?.('landscape-primary');
        } catch (e) {
          console.error(e);
        }
      });
    }
  }

  protected firstUpdated() {
    this.onScroll();
    this.preloadVideoQueue.push(...Array.from(this.videoElements));
    this.startPreloadVideo();
  }

  render() {
    return html`
<div class="outer-scroll-container is-unflipped">
  <div class="scroll-indicator" ?hidden=${this.didScroll}>scroll-for-more</div>
  <div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
    <div class="scrolly-bar"></div>
  </div>
  <div class="hanging-buttons">
    <simple-button class="hanging-button unflipped" @click=${() => this.doSelectEn()}>en</simple-button>
    <simple-button class="hanging-button flipped" @click=${() => this.doSelectJp()}>jp</simple-button>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>hyrax.club</h1>
          <div class="fade-shade-container">
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
    </div>
    <div class="background">
      <video class="back-video" loop muted preload="none" src="assets/hyrax.club.mp4"></video>
      <loading-indicator></loading-indicator>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></fullscreen-button>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a music community</h1>
          <div class="fade-shade-container">
            <p class="fade-shade">Hyrax covers a broad range of music styles, from underground electronic music to not traditionally club-styles like orchestral and acoustic music</p>
            <p class="fade-shade flipped">Hyraxはアンダーグラウンドな電子音楽から、クラブスタイルではないオーケストラ、アコースティック音楽まで、幅広い音楽スタイルをカバー。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">We seek to build deeper connections with the music by interacting with it through DJ techniques and live performances</p>
            <p class="fade-shade flipped">DJテクニックやライブパフォーマンスを通じて、音楽とのより深い繋がりを探求している。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" loop muted preload="none" src="assets/a music community.mp4"></video>
      <loading-indicator></loading-indicator>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></fullscreen-button>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a live visual community</h1>
          <div class="fade-shade-container">
            <p class="fade-shade">Hyrax sees visuals as just as important as music</p>
            <p class="fade-shade flipped">Hyraxではヴィジュアルは音楽と同等に重要と考えている。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">We combine code and technology to create live visuals that capture the essence of the moment - rhythm and mood</p>
            <p class="fade-shade flipped">コードとテクノロジーを駆使して、リズムとムードのエッセンスになるライブヴィジュアルを創造する。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">Audio reactivity, custom built software, and live control surfaces like midi controllers are key ingredients</p>
            <p class="fade-shade flipped">音とのシンクロ、カスタムされたソフトウェア、MIDIコントローラーなどのライブコントロールサーフェスが重要な要素となる。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" loop muted preload="none" src="assets/a live visuals community.mp4"></video>
      <loading-indicator></loading-indicator>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></fullscreen-button>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a community for learning</h1>
          <div class="fade-shade-container">
            <p class="fade-shade">Hyrax is a place where adventurous people can learn new skills, and also share their insights with others</p>
            <p class="fade-shade flipped">Hyrax は、冒険好きな人々が新しいスキルを学び、他の人と考察を共有できる場所だ。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">Most of our members have learned their music and visuals skills from scratch through our group</p>
            <p class="fade-shade flipped">メンバーのほとんどは、グループでの活動を通じて音楽とビジュアルのスキルをゼロから学んでいる。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">Many members eventually end up trying new skills - DJs might try VJing, or the other way around</p>
            <p class="fade-shade flipped">多くのメンバーは最終的に新しいスキルに挑戦する。DJはVJに挑戦したり、その逆もあるかもしれない。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" loop muted preload="none" src="assets/a community for learning.mp4"></video>
      <loading-indicator></loading-indicator>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></fullscreen-button>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>an event group</h1>
          <div class="fade-shade-container">
            <p class="fade-shade">Key to making hyrax work is our events</p>
            <p class="fade-shade flipped">Hyraxを機能させるための鍵となるのはイベントだ。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">Hyrax organizes regular events at real clubs - performers use this opportunity to try new skills, but also as a call-to-action, with everyone rallying around this common objective</p>
            <p class="fade-shade flipped">Hyraxは実際のクラブで定期的にイベントを開催している。パフォーマーはこの機会を利用して新しいスキルを試すだけでなく、全員が共通の目的に結集するための行動喚起をする場としても利用する。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" loop muted preload="none" src="assets/an event group.mp4"></video>
      <loading-indicator></loading-indicator>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></fullscreen-button>
    </div>
  </div>
  <div class="content-panel">
    <div class="foreground">
      <div class="foreground-content">
        <div class="text-block">
          <h1>a safe place to try new things</h1>
          <div class="fade-shade-container">
            <p class="fade-shade">Hyrax more than anything believes in creating a space where new and old members can try new skills</p>
            <p class="fade-shade flipped">Hyrax は、新旧メンバーが新しいスキルに挑戦できるスペースを作り上げることを信条としている。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">Most of our members never thought they would perform at real events - for many, Hyrax is their first event ever</p>
            <p class="fade-shade flipped">メンバーのほとんどは、実際のイベントでパフォーマンスをすることになるとは思っていなかったが、その多くがHyraxが初めてのイベント出演となった。</p>
          </div>
          <div class="fade-shade-container">
            <p class="fade-shade">We strive to keep our community vibrant and inviting, even as we grow and become more diverse</p>
            <p class="fade-shade flipped">私たちは、成長し多様性が増しても、コミュニティを活気に満ちた魅力的なものに保つよう励んでいる。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="background">
      <video class="back-video" loop muted preload="none" src="assets/a safe place to try new things.mp4"></video>
      <loading-indicator></loading-indicator>
      <fullscreen-button @click=${(e: Event) => this.doFullscreenContent(e.target as HTMLElement)}></fullscreen-button>
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

@customElement('simple-button')
export class SimpleButton extends LitElement {
  static styles = css`
:host {
  padding: 0.45em;
  width: 1em;
  height: 1em;
  font-size: 150%;
  cursor: pointer;
  user-select: none;
  position: relative;
}
.touch {
  position: absolute;
  inset: -0.25em;
  background-color: transparent;
}
`;

  protected render() {
    return html`
<div class="touch"></div>
<slot></slot>
`;
  }
}

@customElement('loading-indicator')
export class LoadingIndicator extends LitElement {
  static styles = css`
:host {
  visibility: hidden;
}

@keyframes flash-in {
  0% {
    filter: blur(5px) blur(24px) contrast(8);
    background-color: white;
    opacity: var(--flash-strength);
  }
  8% {
    filter: blur(0px) blur(0px) contrast(8);
    background-color: white;
    opacity: var(--flash-strength);
  }
  9.9% {
    filter: blur(0px) blur(0px) contrast(8);
    opacity: 0;
  }
  10% {
    filter: blur(5px) blur(8px) contrast(8);
    background-color: white;
    opacity: var(--flash-strength);
  }
  18% {
    filter: blur(0px) blur(0px) contrast(8);
    background-color: white;
    opacity: var(--flash-strength);
  }
  20% {
    filter: unset;
    background-color: transparent;
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.flash-in {
  animation-name: flash-in;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-delay: 0.8s;
}

.bar-container {
  --flash-strength: 0;
  width: 100%;
  height: 2px;
  overflow: hidden;
}
.bar-container.first-trigger {
  --flash-strength: 1;
}
.bar {
  position: absolute;
  left: 0;
  width: 2px;
  height: 2px;
  bottom: 0;
  background-color: #adadad;
  z-index: 1;
}
`;

  @query('.bar-container') barContainer?: HTMLElement;
  @queryAll('.bar') allBars!: NodeListOf<HTMLElement>;
  private shown = false;
  private wasTriggered = false;
  private retriggerStartAtTime = 0;
  private disposer?: () => void;

  connectedCallback() {
    super.connectedCallback();
  }

  show() {
    if (this.shown) {
      return;
    }
    this.shown = true;
    this.style.visibility = 'visible';
    this.doRunAnimation();
  }

  hide() {
    this.shown = false;
    this.style.visibility = 'hidden';
  }

  private doRunAnimation() {
    this.disposer?.();

    const randomPhase = Math.random() * 0.5;

    const speed = 0.1;
    const speedX = 0.1;
    let t = 0.0;
    let prevTime = Date.now();
    let terminated = false;
    this.disposer = () => { terminated = true; };
    const stepAnimation = () => {
      if (terminated || !this.shown) {
        return;
      }
      const nowTime = Date.now();
      const deltaTime = nowTime - prevTime;
      prevTime = nowTime;

      t += deltaTime * speed / 1000;
      let initX = t * speedX + randomPhase;
      initX = initX * 0.5;
      initX -= Math.floor(initX);
      initX = 0.5 - initX;
      initX = Math.abs(initX);
      initX = 0.5 - initX;
      initX = Math.max(0, Math.min(initX));

      const count = this.allBars.length;
      const spans = generateChaosSpans(t, count, { initX: initX, squash: 4.5 });
      let index = 0;
      for (const { start, end } of spans) {
        const el = this.allBars.item(index);
        el.style.left = CSS.percent(start * 100).toString();
        el.style.width = CSS.percent((end - start) * 100).toString();
        index++;
      }
      requestAnimationFrame(stepAnimation);
    };
    requestAnimationFrame(stepAnimation);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.disposer?.();
  }

  retrigger() {
    if (!this.barContainer) {
      return;
    }
    const nowTime = Date.now();
    if (!this.shown || !this.wasTriggered) {
      this.barContainer.classList.add('first-trigger');
      this.retriggerStartAtTime = nowTime;
      this.wasTriggered = this.shown;
    } else {
      const elapsedTime = nowTime - this.retriggerStartAtTime;
      if (elapsedTime > 1000) {
        this.barContainer.classList.remove('first-trigger');
      }
    }
    for (const anim of this.barContainer.getAnimations() as CSSAnimation[]) {
      if (anim.animationName === 'flash-in') {
        anim.currentTime = 0.0;
      }
    }
    this.doRunAnimation();
  }

  render() {
    return html`
<div class="bar-container flash-in">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
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

function generateChaosSpans(t: number, count: number, options?: { initX?: number; squash?: number; }): Array<{ start: number; end: number; }> {
  const squashPower = options?.squash ?? 2.0;
  const tSquash = Math.tanh(t * squashPower);
  const a = 4 * tSquash;

  const ys = new Array<number>(count * 2);
  let x = options?.initX ?? 0.2;
  for (let i = 0; i < count * 2; ++i) {
    ys[i] = i === 0 ? 0 : Math.pow(x, 0.8);
    x = a * x * (1 - x);
  }
  ys.sort();
  const results = [];
  for (let i = 0; i < count; ++i) {
    const start = ys[i * 2 + 0];
    const end = ys[i * 2 + 1];
    results.push({ start: start, end: end });
  }
  return results;
}

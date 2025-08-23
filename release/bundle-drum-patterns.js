/*! For license information please see bundle.js.LICENSE.txt */
var hyraxclub;(()=>{"use strict";var t={859:function(t,e,i){var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i);var s=Object.getOwnPropertyDescriptor(e,i);s&&!("get"in s?!e.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,n,s)}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__decorate||function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&n(e,t,i);return s(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.LoadingIndicator=e.SimpleButton=e.FullscreenButton=e.App=void 0;const a=r(i(185)),l=i(624),c=i(924);let d=class extends l.LitElement{constructor(){super(...arguments),this.didScroll=!1,this.scrollElement=document.scrollingElement,this.currentContentPanelIndex=-1,this.lastNonFullscreenScrollY=0,this.wasFullscreen=!1,this.isFullscreenCooldown=!1,this.fullscreenCooldownStart=0,this.isFlipped=!1,this.flipIsRunning=!1,this.flipTarget=!1,this.preloadVideoQueue=[]}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",(()=>this.onScroll()))}doSelectEn(){this.flipTarget=!1,this.runFlip()}doSelectJp(){this.flipTarget=!0,this.runFlip()}runFlip(){if(this.flipIsRunning)return;this.flipIsRunning=!0;let t=this.isFlipped?1:0,e=Date.now();const i=()=>{const n=Date.now(),s=n-e;e=n;let o=!1;this.flipTarget?(t+=s/350,t>1&&(t=1,o=!0)):(t-=s/350,t<0&&(t=0,o=!0));const r=2*t-1,a=Math.sign(r)*Math.pow(Math.abs(r),2),l=Math.max(0,Math.min(1,.5*a+.5));if(this.outerContainer.attributeStyleMap.set("--language-flip",l.toFixed(4)),o){this.flipIsRunning=!1,this.isFlipped=this.flipTarget;const t=this.flipTarget?"is-flipped":"is-unflipped",e=this.flipTarget?"is-unflipped":"is-flipped";this.outerContainer.classList.add(t),this.outerContainer.classList.remove(e)}else requestAnimationFrame(i)};i()}onScroll(){if(this.wasFullscreen){if(document.fullscreenElement)return;this.wasFullscreen=!1,this.isFullscreenCooldown=!0,this.fullscreenCooldownStart=Date.now()}if(this.isFullscreenCooldown){if(!(Date.now()-this.fullscreenCooldownStart>500))return void(this.scrollElement.scrollTop=this.lastNonFullscreenScrollY);this.isFullscreenCooldown=!1}this.lastNonFullscreenScrollY=this.scrollElement.scrollTop;const{viewportHeight:t,viewportCenter:e}=f();if(this.scrollElement.scrollTop>e&&(this.didScroll=!0),this.currentContentPanel!==this.allContentPanels.item(this.currentContentPanelIndex)&&(this.currentContentPanel=void 0,this.currentContentPanelIndex=-1),void 0!==this.currentContentPanel){const t=v(this.currentContentPanel,e),i=v(this.allContentPanels.item(this.currentContentPanelIndex-1),e),n=v(this.allContentPanels.item(this.currentContentPanelIndex+1),e),s=Math.min(Math.abs(i),Math.abs(n));Math.abs(t)>s&&(this.currentContentPanel=void 0,this.currentContentPanelIndex=-1)}if(void 0===this.currentContentPanel){const t=Array.from(this.allContentPanels).map(((t,i)=>({dist:Math.abs(v(t,e)),panel:t,index:i})));t.sort(((t,e)=>t.dist-e.dist)),this.currentContentPanel=t.at(0)?.panel,this.currentContentPanelIndex=t.at(0)?.index??-1}void 0!==this.currentContentPanel&&requestAnimationFrame((()=>this.updateScroll()))}updateScroll(){if(this.updateScrollyBars(),this.currentContentPanel!==this.previousContentPanel){if(this.previousContentPanel){const t=this.previousContentPanel.querySelector(".foreground");t&&(t.style.opacity="0"),this.previousContentPanel.classList.remove("focused")}this.previousContentPanel=this.currentContentPanel}if(!this.currentContentPanel)return void this.unlockPanel();this.currentContentPanel.classList.add("focused");const{viewportHeight:t,viewportCenter:e}=f(),i=v(this.currentContentPanel,e),n=Math.abs(i),s=(Math.max(0,Math.min(1,1-n/(.1*t)+2.7)),this.currentContentPanel.querySelector(".foreground"));s&&(s.style.transform=`translate(0, ${CSS.px(-.1*i)})`),this.currentContentPanel.querySelector(".background"),this.lockPanel(this.currentContentPanel)}updateScrollyBars(){if(!window.visualViewport)return;const t=window.visualViewport.pageTop,e=window.visualViewport.height,i=this.outerContainer.clientHeight-e;if(i<=0)return;const n=g(t/i,this.allScrollyBars.length);let s=0;for(const{start:t,end:e}of n){const i=this.allScrollyBars.item(s);i.style.left=CSS.vw(82*t).toString(),i.style.width=CSS.vw(82*(e-t)).toString(),s++}}lockPanel(t){if(this.currentLockedPanel===t)return;if(this.unlockPanel(),this.currentLockedPanel=t??void 0,!this.currentLockedPanel)return;m(this.currentLockedPanel.querySelector(".foreground"),!0),m(this.currentLockedPanel.querySelector(".background"),!0);const e=this.currentLockedPanel.querySelector("video");e&&e.play();const i=this.currentLockedPanel.querySelector("loading-indicator");i&&i.retrigger()}unlockPanel(){this.currentLockedPanel&&(m(this.currentLockedPanel.querySelector(".foreground"),!1),m(this.currentLockedPanel.querySelector(".background"),!1))}async startPreloadVideo(){for(const t of this.preloadVideoQueue){const e=()=>t.parentElement?.querySelector("loading-indicator");t.addEventListener("waiting",(()=>{const t=e();t&&(t.show(),t.retrigger())})),t.addEventListener("canplay",(()=>{const t=e();t&&t.hide()}))}for(;this.preloadVideoQueue.length>0;){const t=this.preloadVideoQueue.shift();if(t.preload="auto",t.autoplay=!0,!(t.currentTime>0))for(;;){await a.sleep(100);const e=t.buffered;let i=0;for(let t=0;t<e.length;++t)i=Math.max(i,e.end(t));if(i>=t.duration-.1)break}}}doFullscreenContent(t){let e=t;for(;e&&!e.classList.contains("content-panel");)e=e.parentElement;if(!e)return;const i=e.querySelector("video");i&&i.requestFullscreen().then((async()=>{this.wasFullscreen=!0;try{await(screen.orientation.lock?.("landscape-primary"))}catch(t){console.error(t)}}))}firstUpdated(){this.onScroll(),this.preloadVideoQueue.push(...Array.from(this.videoElements)),this.startPreloadVideo()}render(){return l.html`
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
    <simple-button class="hanging-button unflipped" @click=${()=>this.doSelectEn()}>en</simple-button>
    <simple-button class="hanging-button flipped" @click=${()=>this.doSelectJp()}>jp</simple-button>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)}></fullscreen-button>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)}></fullscreen-button>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)}></fullscreen-button>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)}></fullscreen-button>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)}></fullscreen-button>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)}></fullscreen-button>
    </div>
  </div>
</div>
`}};e.App=d,d.styles=[l.css`
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
`],o([(0,c.property)({attribute:!1})],d.prototype,"didScroll",void 0),o([(0,c.query)(".outer-scroll-container")],d.prototype,"outerContainer",void 0),o([(0,c.queryAll)("video")],d.prototype,"videoElements",void 0),o([(0,c.queryAll)(".content-panel")],d.prototype,"allContentPanels",void 0),o([(0,c.queryAll)(".scrolly-bar")],d.prototype,"allScrollyBars",void 0),e.App=d=o([(0,c.customElement)("hyrax-app")],d);let h=class extends l.LitElement{render(){return l.html`
<div class="touch"></div>
<div class="corner00"></div>
<div class="corner01"></div>
<div class="corner10"></div>
<div class="corner11"></div>
`}};e.FullscreenButton=h,h.styles=l.css`
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
`,e.FullscreenButton=h=o([(0,c.customElement)("fullscreen-button")],h);let u=class extends l.LitElement{render(){return l.html`
<div class="touch"></div>
<slot></slot>
`}};e.SimpleButton=u,u.styles=l.css`
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
`,e.SimpleButton=u=o([(0,c.customElement)("simple-button")],u);let p=class extends l.LitElement{constructor(){super(...arguments),this.shown=!1,this.wasTriggered=!1,this.retriggerStartAtTime=0}connectedCallback(){super.connectedCallback()}show(){this.shown||(this.shown=!0,this.style.visibility="visible",this.doRunAnimation())}hide(){this.shown=!1,this.style.visibility="hidden"}doRunAnimation(){this.disposer?.();const t=.5*Math.random();let e=0,i=Date.now(),n=!1;this.disposer=()=>{n=!0};const s=()=>{if(n||!this.shown)return;const o=Date.now(),r=o-i;i=o,e+=.1*r/1e3;let a=.1*e+t;a*=.5,a-=Math.floor(a),a=.5-a,a=Math.abs(a),a=.5-a,a=Math.max(0,Math.min(a));const l=this.allBars.length,c=g(e,l,{initX:a,squash:4.5});let d=0;for(const{start:t,end:e}of c){const i=this.allBars.item(d);i.style.left=CSS.percent(100*t).toString(),i.style.width=CSS.percent(100*(e-t)).toString(),d++}requestAnimationFrame(s)};requestAnimationFrame(s)}disconnectedCallback(){super.disconnectedCallback(),this.disposer?.()}retrigger(){if(!this.barContainer)return;const t=Date.now();this.shown&&this.wasTriggered?t-this.retriggerStartAtTime>1e3&&this.barContainer.classList.remove("first-trigger"):(this.barContainer.classList.add("first-trigger"),this.retriggerStartAtTime=t,this.wasTriggered=this.shown);for(const t of this.barContainer.getAnimations())"flash-in"===t.animationName&&(t.currentTime=0);this.doRunAnimation()}render(){return l.html`
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
`}};function f(){return window.visualViewport?{viewportCenter:window.visualViewport.height/2+window.visualViewport.offsetTop,viewportHeight:window.visualViewport.height}:{viewportCenter:0,viewportHeight:0}}function v(t,e){return t?e-((i=t.getBoundingClientRect()).y+.5*i.height):Number.POSITIVE_INFINITY;var i}function m(t,e){if(t){e&&t.classList.add("faded-in");for(const i of t.getAnimations())"fade-in"===i.animationName&&(i.playbackRate=e?1:-1)}}function g(t,e,i){const n=i?.squash??2,s=4*Math.tanh(t*n),o=new Array(2*e);let r=i?.initX??.2;for(let t=0;t<2*e;++t)o[t]=0===t?0:Math.pow(r,.8),r=s*r*(1-r);o.sort();const a=[];for(let t=0;t<e;++t){const e=o[2*t+0],i=o[2*t+1];a.push({start:e,end:i})}return a}e.LoadingIndicator=p,p.styles=l.css`
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
`,o([(0,c.query)(".bar-container")],p.prototype,"barContainer",void 0),o([(0,c.queryAll)(".bar")],p.prototype,"allBars",void 0),e.LoadingIndicator=p=o([(0,c.customElement)("loading-indicator")],p)},185:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isMobile=e.isDeepStrictEqual=e.mergeRec=e.merge=e.visitRec=e.putKeyValues=e.getEnumValues=e.findEnumName=e.nonvoid=e.upcast=e.lazy=e.lazyOr=e.arrayFromAsync=e.setAddRange=e.appendIfMissing=e.range=e.deleteWhere=e.filterNulllike=e.filterUnique=e.mapAll=e.indexOf=e.rectContains=e.filePathCombine=e.filePathResolveAbsPath=e.filePathExtension=e.filePathChangeExt=e.filePathFileNameWithoutExtension=e.filePathFileName=e.filePathDirectory=e.stringEmptyToNull=e.formatIntPadded=e.formatDuration=e.parseFloatOr=e.parseIntOr=e.sleep=e.multicast=e.Queue=e.LruCache=e.AsyncProducerConsumerQueue=e.BatchedProducerConsumerFlow=e.OperationQueue=e.WaitableFlag=e.Resolvable=void 0;class i{constructor(){this.resolveFunc=t=>{},this.rejectFunc=t=>{},this.completedField=!1,this.promiseField=new Promise(((t,e)=>{this.resolveFunc=t,this.rejectFunc=e})),this.promiseField.finally((()=>{this.completedField=!0}))}get completed(){return this.completedField}resolve(t){this.resolveFunc(t)}reject(t){this.rejectFunc(t)}get promise(){return this.promiseField}get callable(){return this.resolveFunc}}e.Resolvable=i;class n{constructor(){this.flag=new i}async wait(){await this.flag.promise,this.flag=new i}set(){this.flag.resolve()}}e.WaitableFlag=n,e.OperationQueue=class{constructor(){this.head=Promise.resolve()}async push(t){const e=new i;return this.head=this.head.then((async()=>{e.resolve(await t())})).catch((t=>{e.reject(t)})),e.promise}},e.BatchedProducerConsumerFlow=class{constructor(t){this.batchSize=t,this.consumer=r(),this.batchInProduction=[],this.consumerOp=a(0)}consume(t){this.consumer.add(t)}produce(t){this.batchInProduction.push(t),this.batchInProduction.length>=this.batchSize&&this.flushProduced()}flushProduced(){if(this.batchInProduction.length<=0)return;const t=this.batchInProduction;this.batchInProduction=[],this.consumerThen((async()=>{await this.consumer(t)}))}consumerThen(t){const e=this.consumerOp;this.consumerOp=e.then(t)}async join(t=!1){t||this.flushProduced(),await this.consumer}};class s{}e.AsyncProducerConsumerQueue=class{constructor(){this.queued=[],this.flag=new n,this.endOfQueue=new n,this.terminated=!1}add(t){this.queued.push(t),this.flag.set()}addRange(t){this.queued.push(...t),this.flag.set()}async join(){for(;this.queued.length>0;)await this.endOfQueue.wait()}terminate(){this.terminated=!0,this.flag.set()}async pop(){const t=await this.popOrTerminateInternal();if(t===s)throw new Error("Queue was terminated.");return t}async popOrTerminate(){const t=await this.popOrTerminateInternal();if(t!==s)return t}async popOrTerminateInternal(){for(;this.queued.length<=0;){if(this.terminated)return s;if(await this.flag.wait(),this.terminated)return s}const t=this.queued.splice(0,1)[0];return 0===this.queued.length&&this.endOfQueue.set(),t}},e.LruCache=class{constructor(t,e){this.maxEntries=t,this.evictCallback=e,this.values=new Map}get size(){return this.values.size}entries(){return this.values.entries()}get(t){const e=this.values.get(t);if(void 0!==e)return this.values.delete(t),this.values.set(t,e),e}put(t,e){if(this.values.size>=this.maxEntries){const t=this.values.keys().next().value;if(void 0!==t){const e=this.values.get(t);this.values.delete(t),void 0!==e&&this.evictCallback?.(e)}}this.values.set(t,e)}clear(){if(this.evictCallback){const t=Array.from(this.values.values());this.values.clear();for(const e of t)this.evictCallback(e)}else this.values.clear()}};class o{constructor(t){this.value=t}}function r(...t){return t=Array.from(t),p(((...e)=>{let i;return t.forEach((t=>i=t.apply(null,e))),i}),{add(e){t.push(e)},remove(e){t=t.filter((t=>t!==e))}})}function a(t){return new Promise((e=>{setTimeout(e,t)}))}function l(t,e){let i=(Math.abs(t)||0).toString();for(;i.length<e;)i="0"+i;return i}function c(t){const e=t.lastIndexOf("/");return e<0?"":t.slice(0,e)}function d(t){const e=t.lastIndexOf("/");return e<0?t:t.slice(e+1)}function h(t){const e=d(t),i=e.lastIndexOf(".");return i<0?e:e.slice(0,i)}function u(...t){return t.filter((t=>t.length>0)).join("/")}function p(t,e){if("object"!=typeof e||e instanceof Array)throw new Error("merge: 'from' must be an ordinary object");return Object.keys(e).forEach((i=>t[i]=e[i])),t}function f(t){return null!=t&&"object"==typeof t}e.Queue=class{enqueue(t){if(this.tail){const e=this.tail;this.tail=new o(t),e.next=this.tail}else this.head=new o(t),this.tail=this.head}enqueueRange(t){for(const e of t)this.enqueue(e)}dequeue(){if(!this.head)return;const t=this.head;return this.head=t.next,this.head||(this.tail=void 0),t.next=void 0,t.value}empty(){return!!this.head}*values(){let t=this.head;for(;t;)yield t.value,t=t.next}},e.multicast=r,e.sleep=a,e.parseIntOr=function(t,e){if(void 0===t)return e;const i=parseInt(t);return Number.isNaN(i)?e:i},e.parseFloatOr=function(t,e){if(void 0===t)return e;const i=parseFloat(t);return Number.isNaN(i)?e:i},e.formatDuration=function(t){if(void 0===t)return"";const e=t<0?"-":"",i=Math.trunc(Math.abs(t))||0,n=Math.trunc(i%60)||0,s=Math.trunc(i/60)||0,o=Math.trunc(s%60)||0,r=Math.trunc(s/60)||0;return r>0?`${e}${r}:${l(o,2)}:${l(n,2)}`:`${e}${o}:${l(n,2)}`},e.formatIntPadded=l,e.stringEmptyToNull=function(t){if(t)return t},e.filePathDirectory=c,e.filePathFileName=d,e.filePathFileNameWithoutExtension=h,e.filePathChangeExt=function(t,e){return e&&!e.startsWith(".")&&(e="."+e),u(c(t),h(t)+e)},e.filePathExtension=function(t){const e=d(t),i=e.lastIndexOf(".");return i<0?"":e.slice(i+1)},e.filePathResolveAbsPath=function(t,e){let i;i=t.startsWith("/")?t:e+"/"+t;const n=i.split("/"),s=[];for(const t of n)""!==t&&"."!==t&&(".."===t&&s.length>0?s.pop():s.push(t));return"/"+s.join("/")},e.filePathCombine=u,e.rectContains=function(t,e){return e.x>=t.left&&e.x<=t.right&&e.y>=t.top&&e.y<=t.bottom},e.indexOf=function(t,e){let i=0;for(const n of t){if(e(n))return i;i++}return-1},e.mapAll=function*(t,e){for(const i of t){const t=e(i);if(void 0!==t)for(const e of t)yield e}},e.filterUnique=function*(t,e){const i=new Set;for(const n of t){const t=e?e(n):n;i.has(t)||(i.add(t),yield n)}},e.filterNulllike=function*(t){for(const e of t)null!=e&&(yield e)},e.deleteWhere=function(t,e){for(let i=t.length-1;i>=0;--i)e(t[i])&&t.splice(i,1)},e.range=function*(t,e){let i=0,n=t;void 0!==e&&(i=t,n=i+e);for(let t=i;t<n;++t)yield t},e.appendIfMissing=function*(t,e){let i=!1;for(const n of t)yield n,n===e&&(i=!0);i||(yield e)},e.setAddRange=function(t,e){for(const i of e)t.add(i)},e.arrayFromAsync=async function(t){const e=[];for await(const i of t)e.push(i);return e},e.lazyOr=function(t){let e;return()=>(e||(e=t().catch((t=>{console.error(t)}))),e)},e.lazy=function(t){let e;return()=>(e||(e=t()),e)},e.upcast=function(t){return t},e.nonvoid=function(t){if(void 0!==t)return t},e.findEnumName=function(t,e){return Object.entries(t).find((([t,i])=>i===e))?.at(0)},e.getEnumValues=function(t){return Object.values(t)},e.putKeyValues=function(t,...e){for(const[i,n]of e)t[i]=n;return t},e.visitRec=function(t,e,i){const n=new Set,s=t=>{if(!n.has(t)){n.add(t),i(t);for(const i of e(t))s(i)}};t.forEach(s)},e.merge=p,e.mergeRec=function t(e,i){if("object"!=typeof i||i instanceof Array)throw new Error('merge: "from" must be an ordinary object');return Object.keys(i).forEach((n=>{const s=e[n],o=i[n];null===s||null===o?e[n]=o:"object"==typeof s&&"object"==typeof o?t(s,o):e[n]=o})),e},e.isDeepStrictEqual=function t(e,i){const n=Object.keys(e),s=Object.keys(i);if(n.length!==s.length)return!1;for(const s of n){const n=e[s],o=i[s];if(f(n)&&f(o)){if(!t(n,o))return!1}else if(n!==o)return!1}return!0},e.isMobile=function(){const t=window.matchMedia;return t?.("(hover: none)").matches??!1}},924:(t,e,i)=>{i.r(e),i.d(e,{customElement:()=>n,eventOptions:()=>c,property:()=>r,query:()=>d,queryAll:()=>h,queryAssignedElements:()=>v,queryAssignedNodes:()=>m,queryAsync:()=>u,state:()=>a});const n=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),s=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},o=(t,e,i)=>{e.constructor.createProperty(i,t)};function r(t){return(e,i)=>void 0!==i?o(t,e,i):s(t,e)}function a(t){return r({...t,state:!0})}const l=({finisher:t,descriptor:e})=>(i,n)=>{var s;if(void 0===n){const n=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(o.finisher=function(e){t(e,n)}),o}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(s,n)}};function c(t){return l({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function d(t,e){return l({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}function h(t){return l({descriptor:e=>({get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function u(t){return l({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var p;const f=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function v(t){const{slot:e,selector:i}=null!=t?t:{};return l({descriptor:n=>({get(){var n;const s="slot"+(e?`[name=${e}]`:":not([name])"),o=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(s),r=null!=o?f(o,t):[];return i?r.filter((t=>t.matches(i))):r},enumerable:!0,configurable:!0})})}function m(t,e,i){let n,s=t;return"object"==typeof t?(s=t.slot,n=t):n={flatten:e},i?v({slot:s,flatten:e,selector:i}):l({descriptor:t=>({get(){var t,e;const i="slot"+(s?`[name=${s}]`:":not([name])"),o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(i);return null!==(e=null==o?void 0:o.assignedNodes(n))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},624:(t,e,i)=>{i.r(e),i.d(e,{CSSResult:()=>a,LitElement:()=>ft,ReactiveElement:()=>$,UpdatingElement:()=>pt,_$LE:()=>mt,_$LH:()=>lt,adoptStyles:()=>d,css:()=>c,defaultConverter:()=>g,getCompatibleStyle:()=>h,html:()=>V,isServer:()=>gt,noChange:()=>W,notEqual:()=>y,nothing:()=>Q,render:()=>dt,supportsAdoptingStyleSheets:()=>s,svg:()=>B,unsafeCSS:()=>l});const n=window,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new a("string"==typeof t?t:t+"",void 0,o),c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new a(i,t,o)},d=(t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=n.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var u;const p=window,f=p.trustedTypes,v=f?f.emptyScript:"",m=p.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y},w="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty(w))return!1;this[w]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=b){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:g).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:g;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var _;$[w]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:$}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");const A=window,S=A.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,k="?"+E,P=`<${k}>`,O=document,M=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,F=t=>N(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,q=/>/g,I=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,U=/"/g,z=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=D(1),B=D(2),W=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),J=new WeakMap,K=O.createTreeWalker(O,129,null,!1);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===H?"!--"===l[1]?r=j:void 0!==l[1]?r=q:void 0!==l[2]?(z.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=null!=s?s:H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?I:'"'===l[3]?U:L):r===U||r===L?r=I:r===j||r===q?r=H:(r=I,s=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";o+=r===H?i+P:c>=0?(n.push(a),i.slice(0,c)+C+i.slice(c)+E+h):i+E+(-2===c?(n.push(void 0),e):h)}return[Y(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class Z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=X(t,e);if(this.el=Z.createElement(l,i),K.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=K.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(C)||e.startsWith(E)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+C).split(E),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?nt:"?"===e[1]?ot:"@"===e[1]?rt:it})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(z.test(n.tagName)){const t=n.textContent.split(E),e=t.length-1;if(e>0){n.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],M()),K.nextNode(),a.push({type:2,index:++s});n.append(t[e],M())}}}else if(8===n.nodeType)if(n.data===k)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)a.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,n){var s,o,r,a;if(e===W)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,n)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:O).importNode(i,!0);K.currentNode=s;let o=K.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new et(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new at(o,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=K.nextNode(),r++)}return K.currentNode=O,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{constructor(t,e,i,n){var s;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),T(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):F(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=Z.createElement(Y(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new tt(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Z(t)),e}T(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new et(this.k(M()),this.k(M()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class it{constructor(t,e,i,n,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=G(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=G(this,n[i+r],e,r),a===W&&(a=this._$AH[r]),o||(o=!T(a)||a!==this._$AH[r]),a===Q?t=Q:t!==Q&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class nt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}const st=S?S.emptyScript:"";class ot extends it{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Q?this.element.setAttribute(this.name,st):this.element.removeAttribute(this.name)}}class rt extends it{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=G(this,t,e,0))&&void 0!==i?i:Q)===W)return;const n=this._$AH,s=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Q&&(n===Q||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const lt={O:C,P:E,A:k,C:1,M:X,L:tt,R:F,D:G,I:et,V:it,H:ot,N:rt,U:nt,F:at},ct=A.litHtmlPolyfillSupport;null==ct||ct(Z,et),(null!==(_=A.litHtmlVersions)&&void 0!==_?_:A.litHtmlVersions=[]).push("2.8.0");const dt=(t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new et(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r};var ht,ut;const pt=$;class ft extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return W}}ft.finalized=!0,ft._$litElement$=!0,null===(ht=globalThis.litElementHydrateSupport)||void 0===ht||ht.call(globalThis,{LitElement:ft});const vt=globalThis.litElementPolyfillSupport;null==vt||vt({LitElement:ft});const mt={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(ut=globalThis.litElementVersions)&&void 0!==ut?ut:globalThis.litElementVersions=[]).push("3.3.3");const gt=!1}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0});const e=i(859);document.body.appendChild(new e.App)})(),hyraxclub=n})();
//# sourceMappingURL=bundle.js.map
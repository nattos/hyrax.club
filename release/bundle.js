/*! For license information please see bundle.js.LICENSE.txt */
var hyraxclub;(()=>{"use strict";var e={859:function(e,t,i){var n=this&&this.__decorate||function(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleButton=t.FullscreenButton=t.App=void 0;const s=i(624),o=i(924);let r=class extends s.LitElement{constructor(){super(...arguments),this.didScroll=!1,this.scrollElement=document.scrollingElement,this.currentContentPanelIndex=-1,this.lastNonFullscreenScrollY=0,this.wasFullscreen=!1,this.isFullscreenCooldown=!1,this.fullscreenCooldownStart=0,this.isFlipped=!1,this.flipIsRunning=!1,this.flipT=0,this.flipTarget=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("scroll",(()=>this.onScroll()))}doSelectEn(){this.flipTarget=!1,this.runFlip()}doSelectJp(){this.flipTarget=!0,this.runFlip()}runFlip(){if(this.flipIsRunning)return;this.flipIsRunning=!0;let e=this.isFlipped?1:0,t=Date.now();const i=()=>{const n=Date.now(),s=n-t;t=n;let o=!1;if(this.flipTarget?(e+=s/180,e>1&&(e=1,o=!0)):(e-=s/180,e<0&&(e=0,o=!0)),this.outerContainer.attributeStyleMap.set("--language-flip",e.toFixed(4)),o){this.flipIsRunning=!1,this.isFlipped=this.flipTarget;const e=this.flipTarget?"is-flipped":"is-unflipped",t=this.flipTarget?"is-unflipped":"is-flipped";this.outerContainer.classList.add(e),this.outerContainer.classList.remove(t)}else requestAnimationFrame(i)};i()}onScroll(){if(this.wasFullscreen){if(document.fullscreenElement)return;this.wasFullscreen=!1,this.isFullscreenCooldown=!0,this.fullscreenCooldownStart=Date.now()}if(this.isFullscreenCooldown){if(!(Date.now()-this.fullscreenCooldownStart>500))return void(this.scrollElement.scrollTop=this.lastNonFullscreenScrollY);this.isFullscreenCooldown=!1}this.lastNonFullscreenScrollY=this.scrollElement.scrollTop;const{viewportHeight:e,viewportCenter:t}=d();if(this.scrollElement.scrollTop>t&&(this.didScroll=!0),this.currentContentPanel!==this.allContentPanels.item(this.currentContentPanelIndex)&&(this.currentContentPanel=void 0,this.currentContentPanelIndex=-1),void 0!==this.currentContentPanel){const e=c(this.currentContentPanel,t),i=c(this.allContentPanels.item(this.currentContentPanelIndex-1),t),n=c(this.allContentPanels.item(this.currentContentPanelIndex+1),t),s=Math.min(Math.abs(i),Math.abs(n));Math.abs(e)>s&&(this.currentContentPanel=void 0,this.currentContentPanelIndex=-1)}if(void 0===this.currentContentPanel){const e=Array.from(this.allContentPanels).map(((e,i)=>({dist:Math.abs(c(e,t)),panel:e,index:i})));e.sort(((e,t)=>e.dist-t.dist)),this.currentContentPanel=e.at(0)?.panel,this.currentContentPanelIndex=e.at(0)?.index??-1}void 0!==this.currentContentPanel&&requestAnimationFrame((()=>this.updateScroll()))}updateScroll(){if(this.currentContentPanel!==this.previousContentPanel){if(this.previousContentPanel){const e=this.previousContentPanel.querySelector(".foreground");e&&(e.style.opacity="0"),this.previousContentPanel.classList.remove("focused")}this.previousContentPanel=this.currentContentPanel}if(!this.currentContentPanel)return void this.unlockPanel();this.currentContentPanel.classList.add("focused");const{viewportHeight:e,viewportCenter:t}=d(),i=c(this.currentContentPanel,t),n=Math.abs(i),s=(Math.max(0,Math.min(1,1-n/(.1*e)+2.7)),this.currentContentPanel.querySelector(".foreground"));s&&(s.style.transform=`translate(0, ${CSS.px(-.1*i)})`),this.currentContentPanel.querySelector(".background"),this.lockPanel(this.currentContentPanel)}lockPanel(e){this.currentLockedPanel!==e&&(this.unlockPanel(),this.currentLockedPanel=e??void 0,this.currentLockedPanel&&(h(this.currentLockedPanel.querySelector(".foreground"),!0),h(this.currentLockedPanel.querySelector(".background"),!0)))}unlockPanel(){this.currentLockedPanel&&(h(this.currentLockedPanel.querySelector(".foreground"),!1),h(this.currentLockedPanel.querySelector(".background"),!1))}doFullscreenContent(e){let t=e;for(;t&&!t.classList.contains("content-panel");)t=t.parentElement;if(!t)return;const i=t.querySelector("video");i&&i.requestFullscreen().then((async()=>{this.wasFullscreen=!0;try{await(screen.orientation.lock?.("landscape-primary"))}catch(e){console.error(e)}}))}firstUpdated(){this.onScroll()}render(){return s.html`
<div class="outer-scroll-container is-unflipped">
  <div class="scroll-indicator" ?hidden=${this.didScroll}>scroll-for-more</div>
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
      <video class="back-video" autoplay loop muted src="assets/hyrax.club.mp4"></video>
      <fullscreen-button @click=${e=>this.doFullscreenContent(e.target)} />
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
      <video class="back-video" autoplay loop muted src="assets/a music community.mp4"></video>
      <fullscreen-button @click=${e=>this.doFullscreenContent(e.target)} />
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
      <video class="back-video" autoplay loop muted src="assets/a live visuals community.mp4"></video>
      <fullscreen-button @click=${e=>this.doFullscreenContent(e.target)} />
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
      <video class="back-video" autoplay loop muted src="assets/a community for learning.mp4"></video>
      <fullscreen-button @click=${e=>this.doFullscreenContent(e.target)} />
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
      <video class="back-video" autoplay loop muted src="assets/an event group.mp4"></video>
      <fullscreen-button @click=${e=>this.doFullscreenContent(e.target)} />
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
      <video class="back-video" autoplay loop muted src="assets/a safe place to try new things.mp4"></video>
      <fullscreen-button @click=${e=>this.doFullscreenContent(e.target)} />
    </div>
  </div>
</div>
`}};t.App=r,r.styles=[s.css`
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
  bottom: -0.5em;
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
`],n([(0,o.property)({attribute:!1})],r.prototype,"didScroll",void 0),n([(0,o.query)(".outer-scroll-container")],r.prototype,"outerContainer",void 0),n([(0,o.queryAll)(".content-panel")],r.prototype,"allContentPanels",void 0),t.App=r=n([(0,o.customElement)("hyrax-app")],r);let l=class extends s.LitElement{render(){return s.html`
<div class="touch"></div>
<div class="corner00"></div>
<div class="corner01"></div>
<div class="corner10"></div>
<div class="corner11"></div>
`}};t.FullscreenButton=l,l.styles=s.css`
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
`,t.FullscreenButton=l=n([(0,o.customElement)("fullscreen-button")],l);let a=class extends s.LitElement{render(){return s.html`
<div class="touch"></div>
<slot></slot>
`}};function d(){return window.visualViewport?{viewportCenter:window.visualViewport.height/2+window.visualViewport.offsetTop,viewportHeight:window.visualViewport.height}:{viewportCenter:0,viewportHeight:0}}function c(e,t){return e?t-((i=e.getBoundingClientRect()).y+.5*i.height):Number.POSITIVE_INFINITY;var i}function h(e,t){if(e){t&&e.classList.add("faded-in");for(const i of e.getAnimations())"fade-in"===i.animationName&&(i.playbackRate=t?1:-1)}}t.SimpleButton=a,a.styles=s.css`
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
`,t.SimpleButton=a=n([(0,o.customElement)("simple-button")],a)},924:(e,t,i)=>{i.r(t),i.d(t,{customElement:()=>n,eventOptions:()=>d,property:()=>r,query:()=>c,queryAll:()=>h,queryAssignedElements:()=>f,queryAssignedNodes:()=>m,queryAsync:()=>u,state:()=>l});const n=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),s=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},o=(e,t,i)=>{t.constructor.createProperty(i,e)};function r(e){return(t,i)=>void 0!==i?o(e,t,i):s(e,t)}function l(e){return r({...e,state:!0})}const a=({finisher:e,descriptor:t})=>(i,n)=>{var s;if(void 0===n){const n=null!==(s=i.originalKey)&&void 0!==s?s:i.key,o=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(i.key)}:{...i,key:n};return null!=e&&(o.finisher=function(t){e(t,n)}),o}{const s=i.constructor;void 0!==t&&Object.defineProperty(i,n,t(n)),null==e||e(s,n)}};function d(e){return a({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}function c(e,t){return a({descriptor:i=>{const n={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[t]&&(this[t]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}function h(e){return a({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}function u(e){return a({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}var p;const v=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function f(e){const{slot:t,selector:i}=null!=e?e:{};return a({descriptor:n=>({get(){var n;const s="slot"+(t?`[name=${t}]`:":not([name])"),o=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(s),r=null!=o?v(o,e):[];return i?r.filter((e=>e.matches(i))):r},enumerable:!0,configurable:!0})})}function m(e,t,i){let n,s=e;return"object"==typeof e?(s=e.slot,n=e):n={flatten:t},i?f({slot:s,flatten:t,selector:i}):a({descriptor:e=>({get(){var e,t;const i="slot"+(s?`[name=${s}]`:":not([name])"),o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i);return null!==(t=null==o?void 0:o.assignedNodes(n))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}},624:(e,t,i)=>{i.r(t),i.d(t,{CSSResult:()=>l,LitElement:()=>ve,ReactiveElement:()=>_,UpdatingElement:()=>pe,_$LE:()=>me,_$LH:()=>ae,adoptStyles:()=>c,css:()=>d,defaultConverter:()=>g,getCompatibleStyle:()=>h,html:()=>B,isServer:()=>ge,noChange:()=>J,notEqual:()=>y,nothing:()=>W,render:()=>ce,supportsAdoptingStyleSheets:()=>s,svg:()=>V,unsafeCSS:()=>a});const n=window,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class l{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const a=e=>new l("string"==typeof e?e:e+"",void 0,o),d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new l(i,e,o)},c=(e,t)=>{s?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),s=n.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))},h=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return a(t)})(e):e;var u;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",m=p.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y},$="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||b}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=b){var n;const s=this.constructor._$Ep(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:g).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,s=n._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=n.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:g;this._$El=s,this[s]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||y)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var A;_[$]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:_}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");const w=window,S=w.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,k="?"+E,P=`<${k}>`,H=document,T=()=>H.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,R=e=>O(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),M="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,z=/>/g,F=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,q=/^(?:script|style|textarea|title)$/i,D=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),B=D(1),V=D(2),J=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,Y=H.createTreeWalker(H,129,null,!1);function Z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const Q=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":"",r=U;for(let t=0;t<i;t++){const i=e[t];let l,a,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===U?"!--"===a[1]?r=L:void 0!==a[1]?r=z:void 0!==a[2]?(q.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=F):void 0!==a[3]&&(r=F):r===F?">"===a[0]?(r=null!=s?s:U,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?F:'"'===a[3]?j:I):r===j||r===I?r=F:r===L||r===z?r=U:(r=F,s=void 0);const h=r===F&&e[t+1].startsWith("/>")?" ":"";o+=r===U?i+P:d>=0?(n.push(l),i.slice(0,d)+x+i.slice(d)+E+h):i+E+(-2===d?(n.push(void 0),t):h)}return[Z(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class G{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,l=this.parts,[a,d]=Q(e,t);if(this.el=G.createElement(a,i),Y.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=Y.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(x)||t.startsWith(E)){const i=d[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+x).split(E),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?ne:"?"===t[1]?oe:"@"===t[1]?re:ie})}else l.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(q.test(n.tagName)){const e=n.textContent.split(E),t=e.length-1;if(t>0){n.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],T()),Y.nextNode(),l.push({type:2,index:++s});n.append(e[t],T())}}}else if(8===n.nodeType)if(n.data===k)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(E,e+1));)l.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,n){var s,o,r,l;if(t===J)return t;let a=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const d=N(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(e),a._$AT(e,i,n)),void 0!==n?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[n]=a:i._$Cl=a),void 0!==a&&(t=X(e,a._$AS(e,t.values),a,n)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:H).importNode(i,!0);Y.currentNode=s;let o=Y.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new te(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new le(o,this,e)),this._$AV.push(t),a=n[++l]}r!==(null==a?void 0:a.index)&&(o=Y.nextNode(),r++)}return Y.currentNode=H,s}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{constructor(e,t,i,n){var s;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),N(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):R(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(H.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=G.createElement(Z(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(i);else{const e=new ee(s,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new G(e)),t}T(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new te(this.k(T()),this.k(T()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class ie{constructor(e,t,i,n,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=X(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==J,o&&(this._$AH=e);else{const n=e;let r,l;for(e=s[0],r=0;r<s.length-1;r++)l=X(this,n[i+r],t,r),l===J&&(l=this._$AH[r]),o||(o=!N(l)||l!==this._$AH[r]),l===W?e=W:e!==W&&(e+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}o&&!n&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ne extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}const se=S?S.emptyScript:"";class oe extends ie{constructor(){super(...arguments),this.type=4}j(e){e&&e!==W?this.element.setAttribute(this.name,se):this.element.removeAttribute(this.name)}}class re extends ie{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=X(this,e,t,0))&&void 0!==i?i:W)===J)return;const n=this._$AH,s=e===W&&n!==W||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==W&&(n===W||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ae={O:x,P:E,A:k,C:1,M:Q,L:ee,R,D:X,I:te,V:ie,H:oe,N:re,U:ne,F:le},de=w.litHtmlPolyfillSupport;null==de||de(G,te),(null!==(A=w.litHtmlVersions)&&void 0!==A?A:w.litHtmlVersions=[]).push("2.8.0");const ce=(e,t,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=o._$litPart$;if(void 0===r){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new te(t.insertBefore(T(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r};var he,ue;const pe=_;class ve extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return J}}ve.finalized=!0,ve._$litElement$=!0,null===(he=globalThis.litElementHydrateSupport)||void 0===he||he.call(globalThis,{LitElement:ve});const fe=globalThis.litElementPolyfillSupport;null==fe||fe({LitElement:ve});const me={_$AK:(e,t,i)=>{e._$AK(t,i)},_$AL:e=>e._$AL};(null!==(ue=globalThis.litElementVersions)&&void 0!==ue?ue:globalThis.litElementVersions=[]).push("3.3.3");const ge=!1}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0});const t=i(859);document.body.appendChild(new t.App)})(),hyraxclub=n})();
//# sourceMappingURL=bundle.js.map
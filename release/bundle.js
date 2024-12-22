/*! For license information please see bundle.js.LICENSE.txt */
var hyraxclub;(()=>{"use strict";var t={752:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(e,"__esModule",{value:!0}),e.FullscreenButton=e.App=void 0;const o=n(62),s=n(595);let r=class extends o.LitElement{constructor(){super(...arguments),this.currentContentPanelIndex=-1,this.lastNonFullscreenScrollY=0,this.wasFullscreen=!1,this.isFullscreenCooldown=!1,this.fullscreenCooldownStart=0}onScroll(){if(this.wasFullscreen){if(document.fullscreenElement)return;this.wasFullscreen=!1,this.isFullscreenCooldown=!0,this.fullscreenCooldownStart=Date.now()}if(this.isFullscreenCooldown){if(!(Date.now()-this.fullscreenCooldownStart>500))return void(this.scrollContainer.scrollTop=this.lastNonFullscreenScrollY);this.isFullscreenCooldown=!1}this.lastNonFullscreenScrollY=this.scrollContainer.scrollTop;const t=c(this.scrollContainer.getBoundingClientRect());if(this.currentContentPanel!==this.allContentPanels.item(this.currentContentPanelIndex)&&(this.currentContentPanel=void 0,this.currentContentPanelIndex=-1),void 0!==this.currentContentPanel){const e=a(this.currentContentPanel,t),n=a(this.allContentPanels.item(this.currentContentPanelIndex-1),t),i=a(this.allContentPanels.item(this.currentContentPanelIndex+1),t),o=Math.min(Math.abs(n),Math.abs(i));Math.abs(e)>o&&(this.currentContentPanel=void 0,this.currentContentPanelIndex=-1)}if(void 0===this.currentContentPanel){const e=Array.from(this.allContentPanels).map(((e,n)=>({dist:Math.abs(a(e,t)),panel:e,index:n})));e.sort(((t,e)=>t.dist-e.dist)),this.currentContentPanel=e.at(0)?.panel,this.currentContentPanelIndex=e.at(0)?.index??-1}void 0!==this.currentContentPanel&&(clearTimeout(this.scrollLockTimeout),this.scrollLockTimeout=setTimeout((()=>{const t=this.scrollContainer.getBoundingClientRect(),e=(t.height,c(t)),n=a(this.currentContentPanel,e);this.scrollContainer.scrollBy({top:-n,behavior:"smooth"}),this.lockPanel(this.currentContentPanel)}),100,void 0),requestAnimationFrame((()=>this.updateScroll())))}updateScroll(){if(!this.currentContentPanel)return void this.unlockPanel();const t=this.scrollContainer.getBoundingClientRect(),e=t.height,n=c(t),i=a(this.currentContentPanel,n),o=Math.abs(i),s=Math.max(0,Math.min(1,1-o/(.3*e)+.7)),r=this.currentContentPanel.querySelector(".background");r&&(r.style.opacity=`${s.toFixed(4)}`),o<5?this.lockPanel(this.currentContentPanel):this.unlockPanel()}lockPanel(t){if(this.currentLockedPanel===t)return;if(this.unlockPanel(),this.currentLockedPanel=t??void 0,!this.currentLockedPanel)return;const e=this.currentLockedPanel.querySelector(".foreground");if(e){e.classList.add("faded-in");for(const t of e.getAnimations())"fade-in"===t.animationName&&(t.playbackRate=1)}}unlockPanel(){if(!this.currentLockedPanel)return;const t=this.currentLockedPanel.querySelector(".foreground");if(this.currentLockedPanel=void 0,t)for(const e of t.getAnimations())"fade-in"===e.animationName&&(e.playbackRate=-1)}doFullscreenContent(t){let e=t;for(;e&&!e.classList.contains("content-panel");)e=e.parentElement;if(!e)return;const n=e.querySelector("video");n&&(screen.orientation.lock?.("landscape"),n.requestFullscreen().then((()=>{this.wasFullscreen=!0})))}firstUpdated(){this.onScroll()}render(){return o.html`
<div class="outer-scroll-container" @scroll=${()=>this.onScroll()}>
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)} />
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)} />
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)} />
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)} />
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)} />
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
      <fullscreen-button @click=${t=>this.doFullscreenContent(t.target)} />
    </div>
  </div>
</div>
`}};e.App=r,r.styles=[o.css`
body, :host {
  background: black;
  color: white;
  margin: 0;
  font-family: Questrial, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(max(10px, min(18px, 1.5vw)));
}

:host {
  --gap: calc(max(80px, 100vh - 100vw * 9 / 16));
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
  --width: calc(min(100vw, 100vh * 16 / 9));
  --horizontal-padding: calc((100vw - var(--width)) / 2);
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
  animation-fill-mode: both;
  animation-timing-function: ease-out;
}

.background fullscreen-button {
  // visibility: hidden;
}
@media only screen and (hover: none) {
  .background fullscreen-button {
    visibility: visible;
  }
}

.background:hover .fullscreen-button {
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
`],i([(0,s.query)(".outer-scroll-container")],r.prototype,"scrollContainer",void 0),i([(0,s.queryAll)(".content-panel")],r.prototype,"allContentPanels",void 0),e.App=r=i([(0,s.customElement)("hyrax-app")],r);let l=class extends o.LitElement{render(){return o.html`
<div class="corner00"></div>
<div class="corner01"></div>
<div class="corner10"></div>
<div class="corner11"></div>
`}};function a(t,e){return t?e-c(t.getBoundingClientRect()):Number.POSITIVE_INFINITY}function c(t){return t.y+.5*t.height}e.FullscreenButton=l,l.styles=o.css`
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
`,e.FullscreenButton=l=i([(0,s.customElement)("fullscreen-button")],l)},595:(t,e,n)=>{n.r(e),n.d(e,{customElement:()=>i,eventOptions:()=>c,property:()=>r,query:()=>d,queryAll:()=>h,queryAssignedElements:()=>f,queryAssignedNodes:()=>m,queryAsync:()=>u,state:()=>l});const i=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){customElements.define(t,e)}}})(t,e),o=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},s=(t,e,n)=>{e.constructor.createProperty(n,t)};function r(t){return(e,n)=>void 0!==n?s(t,e,n):o(t,e)}function l(t){return r({...t,state:!0})}const a=({finisher:t,descriptor:e})=>(n,i)=>{var o;if(void 0===i){const i=null!==(o=n.originalKey)&&void 0!==o?o:n.key,s=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(n.key)}:{...n,key:i};return null!=t&&(s.finisher=function(e){t(e,i)}),s}{const o=n.constructor;void 0!==e&&Object.defineProperty(n,i,e(i)),null==t||t(o,i)}};function c(t){return a({finisher:(e,n)=>{Object.assign(e.prototype[n],t)}})}function d(t,e){return a({descriptor:n=>{const i={get(){var e,n;return null!==(n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof n?Symbol():"__"+n;i.get=function(){var n,i;return void 0===this[e]&&(this[e]=null!==(i=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}function h(t){return a({descriptor:e=>({get(){var e,n;return null!==(n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==n?n:[]},enumerable:!0,configurable:!0})})}function u(t){return a({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}var p;const v=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function f(t){const{slot:e,selector:n}=null!=t?t:{};return a({descriptor:i=>({get(){var i;const o="slot"+(e?`[name=${e}]`:":not([name])"),s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(o),r=null!=s?v(s,t):[];return n?r.filter((t=>t.matches(n))):r},enumerable:!0,configurable:!0})})}function m(t,e,n){let i,o=t;return"object"==typeof t?(o=t.slot,i=t):i={flatten:e},n?f({slot:o,flatten:e,selector:n}):a({descriptor:t=>({get(){var t,e;const n="slot"+(o?`[name=${o}]`:":not([name])"),s=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(n);return null!==(e=null==s?void 0:s.assignedNodes(i))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},62:(t,e,n)=>{n.r(e),n.d(e,{CSSResult:()=>l,LitElement:()=>vt,ReactiveElement:()=>_,UpdatingElement:()=>pt,_$LE:()=>mt,_$LH:()=>at,adoptStyles:()=>d,css:()=>c,defaultConverter:()=>g,getCompatibleStyle:()=>h,html:()=>D,isServer:()=>gt,noChange:()=>W,notEqual:()=>y,nothing:()=>K,render:()=>dt,supportsAdoptingStyleSheets:()=>o,svg:()=>V,unsafeCSS:()=>a});const i=window,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class l{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&r.set(e,t))}return t}toString(){return this.cssText}}const a=t=>new l("string"==typeof t?t:t+"",void 0,s),c=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new l(n,t,s)},d=(t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),o=i.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,t.appendChild(n)}))},h=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return a(e)})(t):t;var u;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",m=p.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},y=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y},b="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Ep(n,e);void 0!==i&&(this._$Ev.set(i,n),t.push(i))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=$){var i;const o=this.constructor._$Ep(t,n);if(void 0!==o&&!0===n.reflect){const s=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:g).toAttribute(e,n.type);this._$El=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:g;this._$El=o,this[o]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var A;_[b]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:_}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.6.3");const w=window,C=w.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,x="?"+k,P=`<${x}>`,N=document,H=()=>N.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,U=t=>R(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),M="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,j=/>/g,F=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,q=/"/g,z=/^(?:script|style|textarea|title)$/i,B=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),D=B(1),V=B(2),W=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,Y=N.createTreeWalker(N,129,null,!1);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Q=(t,e)=>{const n=t.length-1,i=[];let o,s=2===e?"<svg>":"",r=T;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,d=0;for(;d<n.length&&(r.lastIndex=d,a=r.exec(n),null!==a);)d=r.lastIndex,r===T?"!--"===a[1]?r=L:void 0!==a[1]?r=j:void 0!==a[2]?(z.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=F):void 0!==a[3]&&(r=F):r===F?">"===a[0]?(r=null!=o?o:T,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?F:'"'===a[3]?q:I):r===q||r===I?r=F:r===L||r===j?r=T:(r=F,o=void 0);const h=r===F&&t[e+1].startsWith("/>")?" ":"";s+=r===T?n+P:c>=0?(i.push(l),n.slice(0,c)+E+n.slice(c)+k+h):n+k+(-2===c?(i.push(void 0),e):h)}return[Z(t,s+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class G{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0;const r=t.length-1,l=this.parts,[a,c]=Q(t,e);if(this.el=G.createElement(a,n),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=Y.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(E)||e.startsWith(k)){const n=c[s++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+E).split(k),e=/([.?@])?(.*)/.exec(n);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?it:"?"===e[1]?st:"@"===e[1]?rt:nt})}else l.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(z.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],H()),Y.nextNode(),l.push({type:2,index:++o});i.append(t[e],H())}}}else if(8===i.nodeType)if(i.data===x)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)l.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const n=N.createElement("template");return n.innerHTML=t,n}}function X(t,e,n=t,i){var o,s,r,l;if(e===W)return e;let a=void 0!==i?null===(o=n._$Co)||void 0===o?void 0:o[i]:n._$Cl;const c=O(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,n,i)),void 0!==i?(null!==(r=(l=n)._$Co)&&void 0!==r?r:l._$Co=[])[i]=a:n._$Cl=a),void 0!==a&&(e=X(t,a._$AS(t,e.values),a,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(n,!0);Y.currentNode=o;let s=Y.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new lt(s,this,t)),this._$AV.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(s=Y.nextNode(),r++)}return Y.currentNode=N,o}v(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class et{constructor(t,e,n,i){var o;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):U(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(n);else{const t=new tt(o,this),e=t.u(this.options);t.v(n),this.$(e),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new et(this.k(H()),this.k(H()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class nt{constructor(t,e,n,i,o){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const o=this.strings;let s=!1;if(void 0===o)t=X(this,t,e,0),s=!O(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const i=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=X(this,i[n+r],e,r),l===W&&(l=this._$AH[r]),s||(s=!O(l)||l!==this._$AH[r]),l===K?t=K:t!==K&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}s&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class it extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}const ot=C?C.emptyScript:"";class st extends nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==K?this.element.setAttribute(this.name,ot):this.element.removeAttribute(this.name)}}class rt extends nt{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=X(this,t,e,0))&&void 0!==n?n:K)===W)return;const i=this._$AH,o=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==K&&(i===K||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at={O:E,P:k,A:x,C:1,M:Q,L:tt,R:U,D:X,I:et,V:nt,H:st,N:rt,U:it,F:lt},ct=w.litHtmlPolyfillSupport;null==ct||ct(G,et),(null!==(A=w.litHtmlVersions)&&void 0!==A?A:w.litHtmlVersions=[]).push("2.8.0");const dt=(t,e,n)=>{var i,o;const s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new et(e.insertBefore(H(),t),t,void 0,null!=n?n:{})}return r._$AI(t),r};var ht,ut;const pt=_;class vt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return W}}vt.finalized=!0,vt._$litElement$=!0,null===(ht=globalThis.litElementHydrateSupport)||void 0===ht||ht.call(globalThis,{LitElement:vt});const ft=globalThis.litElementPolyfillSupport;null==ft||ft({LitElement:vt});const mt={_$AK:(t,e,n)=>{t._$AK(e,n)},_$AL:t=>t._$AL};(null!==(ut=globalThis.litElementVersions)&&void 0!==ut?ut:globalThis.litElementVersions=[]).push("3.3.3");const gt=!1}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{var t=i;Object.defineProperty(t,"__esModule",{value:!0});const e=n(752);document.body.appendChild(new e.App)})(),hyraxclub=i})();
//# sourceMappingURL=bundle.js.map
/*! For license information please see bundle.js.LICENSE.txt */
var hyraxclub;(()=>{"use strict";var e={813:(e,t,n)=>{function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("number"==typeof e?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}n.r(t),n.d(t,{$mobx:()=>G,FlowCancellationError:()=>yn,ObservableMap:()=>kr,ObservableSet:()=>Or,Reaction:()=>Mt,_allowStateChanges:()=>Ye,_allowStateChangesInsideComputed:()=>Wt,_allowStateReadsEnd:()=>ft,_allowStateReadsStart:()=>pt,_autoAction:()=>Kt,_endAction:()=>We,_getAdministration:()=>Wr,_getGlobalState:()=>kt,_interceptReads:()=>Sn,_isComputingDerivation:()=>at,_resetGlobalState:()=>wt,_startAction:()=>Ke,action:()=>Gt,autorun:()=>Xt,comparer:()=>X,computed:()=>Le,configure:()=>cn,createAtom:()=>Y,defineProperty:()=>In,entries:()=>$n,extendObservable:()=>un,flow:()=>bn,flowResult:()=>wn,get:()=>Bn,getAtom:()=>Kr,getDebugName:()=>Yr,getDependencyTree:()=>hn,getObserverTree:()=>pn,has:()=>Dn,intercept:()=>On,isAction:()=>Yt,isBoxedObservable:()=>Ze,isComputed:()=>Pn,isComputedProp:()=>En,isFlow:()=>xn,isFlowCancellationError:()=>gn,isObservable:()=>Mn,isObservableArray:()=>gr,isObservableMap:()=>wr,isObservableObject:()=>$r,isObservableProp:()=>Nn,isObservableSet:()=>Ar,keys:()=>Cn,makeAutoObservable:()=>sr,makeObservable:()=>rr,observable:()=>Re,observe:()=>Un,onBecomeObserved:()=>nn,onBecomeUnobserved:()=>rn,onReactionError:()=>Nt,override:()=>ee,ownKeys:()=>Ln,reaction:()=>Zt,remove:()=>Rn,runInAction:()=>Wt,set:()=>jn,spy:()=>Dt,toJS:()=>Fn,trace:()=>zn,transaction:()=>Gn,untracked:()=>ut,values:()=>Tn,when:()=>Kn});var i={};function s(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:i}var o=Object.assign,a=Object.getOwnPropertyDescriptor,l=Object.defineProperty,c=Object.prototype,u=[];Object.freeze(u);var h={};Object.freeze(h);var d="undefined"!=typeof Proxy,p=Object.toString();function f(){d||r("Proxy not available")}function v(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var y=function(){};function g(e){return"function"==typeof e}function m(e){switch(typeof e){case"string":case"symbol":case"number":return!0}return!1}function _(e){return null!==e&&"object"==typeof e}function b(e){if(!_(e))return!1;var t=Object.getPrototypeOf(e);if(null==t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n.toString()===p}function k(e){var t=null==e?void 0:e.constructor;return!!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName)}function w(e,t,n){l(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function x(e,t,n){l(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function S(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return _(e)&&!0===e[n]}}function O(e){return null!=e&&"[object Map]"===Object.prototype.toString.call(e)}function A(e){return null!=e&&"[object Set]"===Object.prototype.toString.call(e)}var P=void 0!==Object.getOwnPropertySymbols,E="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:P?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function q(e){return null===e?null:"object"==typeof e?""+e:e}function M(e,t){return c.hasOwnProperty.call(e,t)}var N=Object.getOwnPropertyDescriptors||function(e){var t={};return E(e).forEach((function(n){t[n]=a(e,n)})),t};function C(e,t){return!!(e&t)}function T(e,t,n){return n?e|=t:e&=~t,e}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,U(r.key),r)}}function R(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function D(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return $(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(null,arguments)}function I(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,L(e,t)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function U(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}var V=Symbol("mobx-stored-annotations");function H(e){return Object.assign((function(t,n){if(z(n))return e.decorate_20223_(t,n);F(t,n,e)}),e)}function F(e,t,n){M(e,V)||w(e,V,B({},e[V])),function(e){return e.annotationType_===Z}(n)||(e[V][t]=n)}function z(e){return"object"==typeof e&&"string"==typeof e.kind}var G=Symbol("mobx administration"),K=function(){function e(e){void 0===e&&(e="Atom"),this.name_=void 0,this.flags_=0,this.observers_=new Set,this.lastAccessedBy_=0,this.lowestObserverState_=tt.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=e}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach((function(e){return e()}))},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(e){return e()}))},t.reportObserved=function(){return Et(this)},t.reportChanged=function(){At(),qt(this),Pt()},t.toString=function(){return this.name_},R(e,[{key:"isBeingObserved",get:function(){return C(this.flags_,e.isBeingObservedMask_)},set:function(t){this.flags_=T(this.flags_,e.isBeingObservedMask_,t)}},{key:"isPendingUnobservation",get:function(){return C(this.flags_,e.isPendingUnobservationMask_)},set:function(t){this.flags_=T(this.flags_,e.isPendingUnobservationMask_,t)}},{key:"diffValue",get:function(){return C(this.flags_,e.diffValueMask_)?1:0},set:function(t){this.flags_=T(this.flags_,e.diffValueMask_,1===t)}}])}();K.isBeingObservedMask_=1,K.isPendingUnobservationMask_=2,K.diffValueMask_=4;var W=S("Atom",K);function Y(e,t,n){void 0===t&&(t=y),void 0===n&&(n=y);var r=new K(e);return t!==y&&nn(r,t),n!==y&&rn(r,n),r}var X={identity:function(e,t){return e===t},structural:function(e,t){return Zr(e,t)},default:function(e,t){return Object.is?Object.is(e,t):e===t?0!==e||1/e==1/t:e!=e&&t!=t},shallow:function(e,t){return Zr(e,t,1)}};function Q(e,t,n){return Mn(e)?e:Array.isArray(e)?Re.array(e,{name:n}):b(e)?Re.object(e,void 0,{name:n}):O(e)?Re.map(e,{name:n}):A(e)?Re.set(e,{name:n}):"function"!=typeof e||Yt(e)||xn(e)?e:k(e)?bn(e):Kt(n,e)}function J(e){return e}var Z="override",ee=H({annotationType_:Z,make_:function(e,t){return 0},extend_:function(e,t,n,i){r("'"+this.annotationType_+"' can only be used with 'makeObservable'")},decorate_20223_:function(e,t){console.warn("'"+this.annotationType_+"' cannot be used with decorators - this is a no-op")}});function te(e,t){return{annotationType_:e,options_:t,make_:ne,extend_:re,decorate_20223_:ie}}function ne(e,t,n,r){var i;if(null!=(i=this.options_)&&i.bound)return null===this.extend_(e,t,n,!1)?0:1;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(Yt(n.value))return 1;var s=se(e,this,t,n,!1);return l(r,t,s),2}function re(e,t,n,r){var i=se(e,this,t,n);return e.defineProperty_(t,i,r)}function ie(e,t){var n,i=t.kind,s=t.name,o=t.addInitializer,a=this,l=function(e){var t,n,r,i;return ze(null!=(t=null==(n=a.options_)?void 0:n.name)?t:s.toString(),e,null!=(r=null==(i=a.options_)?void 0:i.autoAction)&&r)};return"field"==i?function(e){var t,n=e;return Yt(n)||(n=l(n)),null!=(t=a.options_)&&t.bound&&((n=n.bind(this)).isMobxAction=!0),n}:"method"==i?(Yt(e)||(e=l(e)),null!=(n=this.options_)&&n.bound&&o((function(){var e=this,t=e[s].bind(e);t.isMobxAction=!0,e[s]=t})),e):void r("Cannot apply '"+a.annotationType_+"' to '"+String(s)+"' (kind: "+i+"):\n'"+a.annotationType_+"' can only be used on properties with a function value.")}function se(e,t,n,r,i){var s,o,a,l,c,u,h,d;void 0===i&&(i=bt.safeDescriptors),d=r,t.annotationType_,d.value;var p,f=r.value;return null!=(s=t.options_)&&s.bound&&(f=f.bind(null!=(p=e.proxy_)?p:e.target_)),{value:ze(null!=(o=null==(a=t.options_)?void 0:a.name)?o:n.toString(),f,null!=(l=null==(c=t.options_)?void 0:c.autoAction)&&l,null!=(u=t.options_)&&u.bound?null!=(h=e.proxy_)?h:e.target_:void 0),configurable:!i||e.isPlainObject_,enumerable:!1,writable:!i}}function oe(e,t){return{annotationType_:e,options_:t,make_:ae,extend_:le,decorate_20223_:ce}}function ae(e,t,n,r){var i;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(null!=(i=this.options_)&&i.bound&&(!M(e.target_,t)||!xn(e.target_[t]))&&null===this.extend_(e,t,n,!1))return 0;if(xn(n.value))return 1;var s=ue(e,this,0,n,!1,!1);return l(r,t,s),2}function le(e,t,n,r){var i,s=ue(e,this,0,n,null==(i=this.options_)?void 0:i.bound);return e.defineProperty_(t,s,r)}function ce(e,t){var n,r=t.name,i=t.addInitializer;return xn(e)||(e=bn(e)),null!=(n=this.options_)&&n.bound&&i((function(){var e=this,t=e[r].bind(e);t.isMobXFlow=!0,e[r]=t})),e}function ue(e,t,n,r,i,s){var o;void 0===s&&(s=bt.safeDescriptors),o=r,t.annotationType_,o.value;var a,l=r.value;return xn(l)||(l=bn(l)),i&&((l=l.bind(null!=(a=e.proxy_)?a:e.target_)).isMobXFlow=!0),{value:l,configurable:!s||e.isPlainObject_,enumerable:!1,writable:!s}}function he(e,t){return{annotationType_:e,options_:t,make_:de,extend_:pe,decorate_20223_:fe}}function de(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function pe(e,t,n,r){return i=n,this.annotationType_,i.get,e.defineComputedProperty_(t,B({},this.options_,{get:n.get,set:n.set}),r);var i}function fe(e,t){var n=this,r=t.name;return(0,t.addInitializer)((function(){var t=Nr(this)[G],i=B({},n.options_,{get:e,context:this});i.name||(i.name="ObservableObject."+r.toString()),t.values_.set(r,new et(i))})),function(){return this[G].getObservablePropValue_(r)}}function ve(e,t){return{annotationType_:e,options_:t,make_:ye,extend_:ge,decorate_20223_:me}}function ye(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function ge(e,t,n,r){var i,s;return this.annotationType_,e.defineObservableProperty_(t,n.value,null!=(i=null==(s=this.options_)?void 0:s.enhancer)?i:Q,r)}function me(e,t){var n=this,r=t.kind,i=t.name,s=new WeakSet;function o(e,t){var r,o,a=Nr(e)[G],l=new Je(t,null!=(r=null==(o=n.options_)?void 0:o.enhancer)?r:Q,"ObservableObject."+i.toString(),!1);a.values_.set(i,l),s.add(e)}if("accessor"==r)return{get:function(){return s.has(this)||o(this,e.get.call(this)),this[G].getObservablePropValue_(i)},set:function(e){return s.has(this)||o(this,e),this[G].setObservablePropValue_(i,e)},init:function(e){return s.has(this)||o(this,e),e}}}var _e="true",be=ke();function ke(e){return{annotationType_:_e,options_:e,make_:we,extend_:xe,decorate_20223_:Se}}function we(e,t,n,r){var i,s,o,a;if(n.get)return Le.make_(e,t,n,r);if(n.set){var c=ze(t.toString(),n.set);return r===e.target_?null===e.defineProperty_(t,{configurable:!bt.safeDescriptors||e.isPlainObject_,set:c})?0:2:(l(r,t,{configurable:!0,set:c}),2)}if(r!==e.target_&&"function"==typeof n.value)return k(n.value)?(null!=(a=this.options_)&&a.autoBind?bn.bound:bn).make_(e,t,n,r):(null!=(o=this.options_)&&o.autoBind?Kt.bound:Kt).make_(e,t,n,r);var u,h=!1===(null==(i=this.options_)?void 0:i.deep)?Re.ref:Re;return"function"==typeof n.value&&null!=(s=this.options_)&&s.autoBind&&(n.value=n.value.bind(null!=(u=e.proxy_)?u:e.target_)),h.make_(e,t,n,r)}function xe(e,t,n,r){var i,s,o;return n.get?Le.extend_(e,t,n,r):n.set?e.defineProperty_(t,{configurable:!bt.safeDescriptors||e.isPlainObject_,set:ze(t.toString(),n.set)},r):("function"==typeof n.value&&null!=(i=this.options_)&&i.autoBind&&(n.value=n.value.bind(null!=(o=e.proxy_)?o:e.target_)),(!1===(null==(s=this.options_)?void 0:s.deep)?Re.ref:Re).extend_(e,t,n,r))}function Se(e,t){r("'"+this.annotationType_+"' cannot be used as a decorator")}var Oe={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};function Ae(e){return e||Oe}Object.freeze(Oe);var Pe=ve("observable"),Ee=ve("observable.ref",{enhancer:J}),qe=ve("observable.shallow",{enhancer:function(e,t,n){return null==e||$r(e)||gr(e)||wr(e)||Ar(e)?e:Array.isArray(e)?Re.array(e,{name:n,deep:!1}):b(e)?Re.object(e,void 0,{name:n,deep:!1}):O(e)?Re.map(e,{name:n,deep:!1}):A(e)?Re.set(e,{name:n,deep:!1}):void 0}}),Me=ve("observable.struct",{enhancer:function(e,t){return Zr(e,t)?t:e}}),Ne=H(Pe);function Ce(e){return!0===e.deep?Q:!1===e.deep?J:(t=e.defaultDecorator)&&null!=(n=null==(r=t.options_)?void 0:r.enhancer)?n:Q;var t,n,r}function Te(e,t,n){return z(t)?Pe.decorate_20223_(e,t):m(t)?void F(e,t,Pe):Mn(e)?e:b(e)?Re.object(e,t,n):Array.isArray(e)?Re.array(e,t):O(e)?Re.map(e,t):A(e)?Re.set(e,t):"object"==typeof e&&null!==e?e:Re.box(e,t)}o(Te,Ne);var $e,je,Re=o(Te,{box:function(e,t){var n=Ae(t);return new Je(e,Ce(n),n.name,!0,n.equals)},array:function(e,t){var n=Ae(t);return(!1===bt.useProxies||!1===n.proxy?Gr:ur)(e,Ce(n),n.name)},map:function(e,t){var n=Ae(t);return new kr(e,Ce(n),n.name)},set:function(e,t){var n=Ae(t);return new Or(e,Ce(n),n.name)},object:function(e,t,n){return Xr((function(){return un(!1===bt.useProxies||!1===(null==n?void 0:n.proxy)?Nr({},n):function(e,t){var n,r;return f(),null!=(r=(n=(e=Nr(e,t))[G]).proxy_)?r:n.proxy_=new Proxy(e,Xn)}({},n),e,t)}))},ref:H(Ee),shallow:H(qe),deep:Ne,struct:H(Me)}),De="computed",Be=he(De),Ie=he("computed.struct",{equals:X.structural}),Le=function(e,t){if(z(t))return Be.decorate_20223_(e,t);if(m(t))return F(e,t,Be);if(b(e))return H(he(De,e));var n=b(t)?t:{};return n.get=e,n.name||(n.name=e.name||""),new et(n)};Object.assign(Le,Be),Le.struct=H(Ie);var Ue=0,Ve=1,He=null!=($e=null==(je=a((function(){}),"name"))?void 0:je.configurable)&&$e,Fe={value:"action",configurable:!0,writable:!1,enumerable:!1};function ze(e,t,n,r){function i(){return Ge(e,n,t,r||this,arguments)}return void 0===n&&(n=!1),i.isMobxAction=!0,i.toString=function(){return t.toString()},He&&(Fe.value=e,l(i,"name",Fe)),i}function Ge(e,t,n,r,i){var s=Ke(0,t);try{return n.apply(r,i)}catch(e){throw s.error_=e,e}finally{We(s)}}function Ke(e,t,n,r){var i=bt.trackingDerivation,s=!t||!i;At();var o=bt.allowStateChanges;s&&(ht(),o=Xe(!0));var a={runAsAction_:s,prevDerivation_:i,prevAllowStateChanges_:o,prevAllowStateReads_:pt(!0),notifySpy_:!1,startTime_:0,actionId_:Ve++,parentActionId_:Ue};return Ue=a.actionId_,a}function We(e){Ue!==e.actionId_&&r(30),Ue=e.parentActionId_,void 0!==e.error_&&(bt.suppressReactionErrors=!0),Qe(e.prevAllowStateChanges_),ft(e.prevAllowStateReads_),Pt(),e.runAsAction_&&dt(e.prevDerivation_),bt.suppressReactionErrors=!1}function Ye(e,t){var n=Xe(e);try{return t()}finally{Qe(n)}}function Xe(e){var t=bt.allowStateChanges;return bt.allowStateChanges=e,t}function Qe(e){bt.allowStateChanges=e}var Je=function(e){function t(t,n,r,i,s){var o;return void 0===r&&(r="ObservableValue"),void 0===i&&(i=!0),void 0===s&&(s=X.default),(o=e.call(this,r)||this).enhancer=void 0,o.name_=void 0,o.equals=void 0,o.hasUnreportedChange_=!1,o.interceptors_=void 0,o.changeListeners_=void 0,o.value_=void 0,o.dehancer=void 0,o.enhancer=n,o.name_=r,o.equals=s,o.value_=n(t,void 0,r),o}I(t,e);var n=t.prototype;return n.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},n.set=function(e){this.value_,(e=this.prepareNewValue_(e))!==bt.UNCHANGED&&this.setNewValue_(e)},n.prepareNewValue_=function(e){if(Qn(this)){var t=Zn(this,{object:this,type:ar,newValue:e});if(!t)return bt.UNCHANGED;e=t.newValue}return e=this.enhancer(e,this.value_,this.name_),this.equals(this.value_,e)?bt.UNCHANGED:e},n.setNewValue_=function(e){var t=this.value_;this.value_=e,this.reportChanged(),er(this)&&nr(this,{type:ar,object:this,newValue:e,oldValue:t})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(e){return Jn(this,e)},n.observe_=function(e,t){return t&&e({observableKind:"value",debugObjectName:this.name_,object:this,type:ar,newValue:this.value_,oldValue:void 0}),tr(this,e)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return q(this.get())},n[Symbol.toPrimitive]=function(){return this.valueOf()},t}(K),Ze=S("ObservableValue",Je),et=function(){function e(e){this.dependenciesState_=tt.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.observers_=new Set,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=tt.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new it(null),this.name_=void 0,this.triggeredBy_=void 0,this.flags_=0,this.derivation=void 0,this.setter_=void 0,this.isTracing_=nt.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,e.get||r(31),this.derivation=e.get,this.name_=e.name||"ComputedValue",e.set&&(this.setter_=ze("ComputedValue-setter",e.set)),this.equals_=e.equals||(e.compareStructural||e.struct?X.structural:X.default),this.scope_=e.context,this.requiresReaction_=e.requiresReaction,this.keepAlive_=!!e.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){!function(e){e.lowestObserverState_===tt.UP_TO_DATE_&&(e.lowestObserverState_=tt.POSSIBLY_STALE_,e.observers_.forEach((function(e){e.dependenciesState_===tt.UP_TO_DATE_&&(e.dependenciesState_=tt.POSSIBLY_STALE_,e.onBecomeStale_())})))}(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach((function(e){return e()}))},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(e){return e()}))},t.get=function(){if(this.isComputing&&r(32,this.name_,this.derivation),0!==bt.inBatch||0!==this.observers_.size||this.keepAlive_){if(Et(this),ot(this)){var e=bt.trackingContext;this.keepAlive_&&!e&&(bt.trackingContext=this),this.trackAndCompute()&&function(e){e.lowestObserverState_!==tt.STALE_&&(e.lowestObserverState_=tt.STALE_,e.observers_.forEach((function(t){t.dependenciesState_===tt.POSSIBLY_STALE_?t.dependenciesState_=tt.STALE_:t.dependenciesState_===tt.UP_TO_DATE_&&(e.lowestObserverState_=tt.UP_TO_DATE_)})))}(this),bt.trackingContext=e}}else ot(this)&&(this.warnAboutUntrackedRead_(),At(),this.value_=this.computeValue_(!1),Pt());var t=this.value_;if(st(t))throw t.cause;return t},t.set=function(e){if(this.setter_){this.isRunningSetter&&r(33,this.name_),this.isRunningSetter=!0;try{this.setter_.call(this.scope_,e)}finally{this.isRunningSetter=!1}}else r(34,this.name_)},t.trackAndCompute=function(){var e=this.value_,t=this.dependenciesState_===tt.NOT_TRACKING_,n=this.computeValue_(!0),r=t||st(e)||st(n)||!this.equals_(e,n);return r&&(this.value_=n),r},t.computeValue_=function(e){this.isComputing=!0;var t,n=Xe(!1);if(e)t=lt(this,this.derivation,this.scope_);else if(!0===bt.disableErrorBoundaries)t=this.derivation.call(this.scope_);else try{t=this.derivation.call(this.scope_)}catch(e){t=new it(e)}return Qe(n),this.isComputing=!1,t},t.suspend_=function(){this.keepAlive_||(ct(this),this.value_=void 0)},t.observe_=function(e,t){var n=this,r=!0,i=void 0;return Xt((function(){var s=n.get();if(!r||t){var o=ht();e({observableKind:"computed",debugObjectName:n.name_,type:ar,object:n,newValue:s,oldValue:i}),dt(o)}r=!1,i=s}))},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return q(this.get())},t[Symbol.toPrimitive]=function(){return this.valueOf()},R(e,[{key:"isComputing",get:function(){return C(this.flags_,e.isComputingMask_)},set:function(t){this.flags_=T(this.flags_,e.isComputingMask_,t)}},{key:"isRunningSetter",get:function(){return C(this.flags_,e.isRunningSetterMask_)},set:function(t){this.flags_=T(this.flags_,e.isRunningSetterMask_,t)}},{key:"isBeingObserved",get:function(){return C(this.flags_,e.isBeingObservedMask_)},set:function(t){this.flags_=T(this.flags_,e.isBeingObservedMask_,t)}},{key:"isPendingUnobservation",get:function(){return C(this.flags_,e.isPendingUnobservationMask_)},set:function(t){this.flags_=T(this.flags_,e.isPendingUnobservationMask_,t)}},{key:"diffValue",get:function(){return C(this.flags_,e.diffValueMask_)?1:0},set:function(t){this.flags_=T(this.flags_,e.diffValueMask_,1===t)}}])}();et.isComputingMask_=1,et.isRunningSetterMask_=2,et.isBeingObservedMask_=4,et.isPendingUnobservationMask_=8,et.diffValueMask_=16;var tt,nt,rt=S("ComputedValue",et);!function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"}(tt||(tt={})),function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"}(nt||(nt={}));var it=function(e){this.cause=void 0,this.cause=e};function st(e){return e instanceof it}function ot(e){switch(e.dependenciesState_){case tt.UP_TO_DATE_:return!1;case tt.NOT_TRACKING_:case tt.STALE_:return!0;case tt.POSSIBLY_STALE_:for(var t=pt(!0),n=ht(),r=e.observing_,i=r.length,s=0;s<i;s++){var o=r[s];if(rt(o)){if(bt.disableErrorBoundaries)o.get();else try{o.get()}catch(e){return dt(n),ft(t),!0}if(e.dependenciesState_===tt.STALE_)return dt(n),ft(t),!0}}return vt(e),dt(n),ft(t),!1}}function at(){return null!==bt.trackingDerivation}function lt(e,t,n){var r=pt(!0);vt(e),e.newObserving_=new Array(0===e.runId_?100:e.observing_.length),e.unboundDepsCount_=0,e.runId_=++bt.runId;var i,s=bt.trackingDerivation;if(bt.trackingDerivation=e,bt.inBatch++,!0===bt.disableErrorBoundaries)i=t.call(n);else try{i=t.call(n)}catch(e){i=new it(e)}return bt.inBatch--,bt.trackingDerivation=s,function(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=tt.UP_TO_DATE_,i=0,s=e.unboundDepsCount_,o=0;o<s;o++){var a=n[o];0===a.diffValue&&(a.diffValue=1,i!==o&&(n[i]=a),i++),a.dependenciesState_>r&&(r=a.dependenciesState_)}for(n.length=i,e.newObserving_=null,s=t.length;s--;){var l=t[s];0===l.diffValue&&St(l,e),l.diffValue=0}for(;i--;){var c=n[i];1===c.diffValue&&(c.diffValue=0,xt(c,e))}r!==tt.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}(e),ft(r),i}function ct(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)St(t[n],e);e.dependenciesState_=tt.NOT_TRACKING_}function ut(e){var t=ht();try{return e()}finally{dt(t)}}function ht(){var e=bt.trackingDerivation;return bt.trackingDerivation=null,e}function dt(e){bt.trackingDerivation=e}function pt(e){var t=bt.allowStateReads;return bt.allowStateReads=e,t}function ft(e){bt.allowStateReads=e}function vt(e){if(e.dependenciesState_!==tt.UP_TO_DATE_){e.dependenciesState_=tt.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=tt.UP_TO_DATE_}}var yt=["mobxGuid","spyListeners","enforceActions","computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","allowStateReads","disableErrorBoundaries","runId","UNCHANGED","useProxies"],gt=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},mt=!0,_t=!1,bt=function(){var e=s();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(mt=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==(new gt).version&&(mt=!1),mt?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new gt):(setTimeout((function(){_t||r(35)}),1),new gt)}();function kt(){return bt}function wt(){var e=new gt;for(var t in e)-1===yt.indexOf(t)&&(bt[t]=e[t]);bt.allowStateChanges=!bt.enforceActions}function xt(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function St(e,t){e.observers_.delete(t),0===e.observers_.size&&Ot(e)}function Ot(e){!1===e.isPendingUnobservation&&(e.isPendingUnobservation=!0,bt.pendingUnobservations.push(e))}function At(){bt.inBatch++}function Pt(){if(0==--bt.inBatch){$t();for(var e=bt.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation=!1,0===n.observers_.size&&(n.isBeingObserved&&(n.isBeingObserved=!1,n.onBUO()),n instanceof et&&n.suspend_())}bt.pendingUnobservations=[]}}function Et(e){var t=bt.trackingDerivation;return null!==t?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved&&bt.trackingContext&&(e.isBeingObserved=!0,e.onBO())),e.isBeingObserved):(0===e.observers_.size&&bt.inBatch>0&&Ot(e),!1)}function qt(e){e.lowestObserverState_!==tt.STALE_&&(e.lowestObserverState_=tt.STALE_,e.observers_.forEach((function(e){e.dependenciesState_===tt.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=tt.STALE_})))}var Mt=function(){function e(e,t,n,r){void 0===e&&(e="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=tt.NOT_TRACKING_,this.runId_=0,this.unboundDepsCount_=0,this.flags_=0,this.isTracing_=nt.NONE,this.name_=e,this.onInvalidate_=t,this.errorHandler_=n,this.requiresObservable_=r}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled||(this.isScheduled=!0,bt.pendingReactions.push(this),$t())},t.runReaction_=function(){if(!this.isDisposed){At(),this.isScheduled=!1;var e=bt.trackingContext;if(bt.trackingContext=this,ot(this)){this.isTrackPending=!0;try{this.onInvalidate_()}catch(e){this.reportExceptionInDerivation_(e)}}bt.trackingContext=e,Pt()}},t.track=function(e){if(!this.isDisposed){At(),this.isRunning=!0;var t=bt.trackingContext;bt.trackingContext=this;var n=lt(this,e,void 0);bt.trackingContext=t,this.isRunning=!1,this.isTrackPending=!1,this.isDisposed&&ct(this),st(n)&&this.reportExceptionInDerivation_(n.cause),Pt()}},t.reportExceptionInDerivation_=function(e){var t=this;if(this.errorHandler_)this.errorHandler_(e,this);else{if(bt.disableErrorBoundaries)throw e;var n="[mobx] uncaught error in '"+this+"'";bt.suppressReactionErrors||console.error(n,e),bt.globalReactionErrorHandlers.forEach((function(n){return n(e,t)}))}},t.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.isRunning||(At(),ct(this),Pt()))},t.getDisposer_=function(e){var t=this,n=function n(){t.dispose(),null==e||null==e.removeEventListener||e.removeEventListener("abort",n)};return null==e||null==e.addEventListener||e.addEventListener("abort",n),n[G]=this,n},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(e){void 0===e&&(e=!1)},R(e,[{key:"isDisposed",get:function(){return C(this.flags_,e.isDisposedMask_)},set:function(t){this.flags_=T(this.flags_,e.isDisposedMask_,t)}},{key:"isScheduled",get:function(){return C(this.flags_,e.isScheduledMask_)},set:function(t){this.flags_=T(this.flags_,e.isScheduledMask_,t)}},{key:"isTrackPending",get:function(){return C(this.flags_,e.isTrackPendingMask_)},set:function(t){this.flags_=T(this.flags_,e.isTrackPendingMask_,t)}},{key:"isRunning",get:function(){return C(this.flags_,e.isRunningMask_)},set:function(t){this.flags_=T(this.flags_,e.isRunningMask_,t)}},{key:"diffValue",get:function(){return C(this.flags_,e.diffValueMask_)?1:0},set:function(t){this.flags_=T(this.flags_,e.diffValueMask_,1===t)}}])}();function Nt(e){return bt.globalReactionErrorHandlers.push(e),function(){var t=bt.globalReactionErrorHandlers.indexOf(e);t>=0&&bt.globalReactionErrorHandlers.splice(t,1)}}Mt.isDisposedMask_=1,Mt.isScheduledMask_=2,Mt.isTrackPendingMask_=4,Mt.isRunningMask_=8,Mt.diffValueMask_=16;var Ct=100,Tt=function(e){return e()};function $t(){bt.inBatch>0||bt.isRunningReactions||Tt(jt)}function jt(){bt.isRunningReactions=!0;for(var e=bt.pendingReactions,t=0;e.length>0;){++t===Ct&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}bt.isRunningReactions=!1}var Rt=S("Reaction",Mt);function Dt(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Bt="action",It="autoAction",Lt="<unnamed action>",Ut=te(Bt),Vt=te("action.bound",{bound:!0}),Ht=te(It,{autoAction:!0}),Ft=te("autoAction.bound",{autoAction:!0,bound:!0});function zt(e){return function(t,n){return g(t)?ze(t.name||Lt,t,e):g(n)?ze(t,n,e):z(n)?(e?Ht:Ut).decorate_20223_(t,n):m(n)?F(t,n,e?Ht:Ut):m(t)?H(te(e?It:Bt,{name:t,autoAction:e})):void 0}}var Gt=zt(!1);Object.assign(Gt,Ut);var Kt=zt(!0);function Wt(e){return Ge(e.name,!1,e,this,void 0)}function Yt(e){return g(e)&&!0===e.isMobxAction}function Xt(e,t){var n,r,i,s;void 0===t&&(t=h);var o,a=null!=(n=null==(r=t)?void 0:r.name)?n:"Autorun";if(t.scheduler||t.delay){var l=Jt(t),c=!1;o=new Mt(a,(function(){c||(c=!0,l((function(){c=!1,o.isDisposed||o.track(u)})))}),t.onError,t.requiresObservable)}else o=new Mt(a,(function(){this.track(u)}),t.onError,t.requiresObservable);function u(){e(o)}return null!=(i=t)&&null!=(i=i.signal)&&i.aborted||o.schedule_(),o.getDisposer_(null==(s=t)?void 0:s.signal)}Object.assign(Kt,Ht),Gt.bound=H(Vt),Kt.bound=H(Ft);var Qt=function(e){return e()};function Jt(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:Qt}function Zt(e,t,n){var r,i,s;void 0===n&&(n=h);var o,a,l,c=null!=(r=n.name)?r:"Reaction",u=Gt(c,n.onError?(o=n.onError,a=t,function(){try{return a.apply(this,arguments)}catch(e){o.call(this,e)}}):t),d=!n.scheduler&&!n.delay,p=Jt(n),f=!0,v=!1,y=n.compareStructural?X.structural:n.equals||X.default,g=new Mt(c,(function(){f||d?m():v||(v=!0,p(m))}),n.onError,n.requiresObservable);function m(){if(v=!1,!g.isDisposed){var t=!1,r=l;g.track((function(){var n=Ye(!1,(function(){return e(g)}));t=f||!y(l,n),l=n})),(f&&n.fireImmediately||!f&&t)&&u(l,r,g),f=!1}}return null!=(i=n)&&null!=(i=i.signal)&&i.aborted||g.schedule_(),g.getDisposer_(null==(s=n)?void 0:s.signal)}var en="onBO",tn="onBUO";function nn(e,t,n){return sn(en,e,t,n)}function rn(e,t,n){return sn(tn,e,t,n)}function sn(e,t,n,r){var i="function"==typeof r?Kr(t,n):Kr(t),s=g(r)?r:n,o=e+"L";return i[o]?i[o].add(s):i[o]=new Set([s]),function(){var e=i[o];e&&(e.delete(s),0===e.size&&delete i[o])}}var on="never",an="always",ln="observed";function cn(e){!0===e.isolateGlobalState&&function(){if((bt.pendingReactions.length||bt.inBatch||bt.isRunningReactions)&&r(36),_t=!0,mt){var e=s();0==--e.__mobxInstanceCount&&(e.__mobxGlobals=void 0),bt=new gt}}();var t,n,i=e.useProxies,o=e.enforceActions;if(void 0!==i&&(bt.useProxies=i===an||i!==on&&"undefined"!=typeof Proxy),"ifavailable"===i&&(bt.verifyProxies=!0),void 0!==o){var a=o===an?an:o===ln;bt.enforceActions=a,bt.allowStateChanges=!0!==a&&a!==an}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach((function(t){t in e&&(bt[t]=!!e[t])})),bt.allowStateReads=!bt.observableRequiresReaction,e.reactionScheduler&&(t=e.reactionScheduler,n=Tt,Tt=function(e){return t((function(){return n(e)}))})}function un(e,t,n,r){var i=N(t);return Xr((function(){var t=Nr(e,r)[G];E(i).forEach((function(e){t.extend_(e,i[e],!n||!(e in n)||n[e])}))})),e}function hn(e,t){return dn(Kr(e,t))}function dn(e){var t,n={name:e.name_};return e.observing_&&e.observing_.length>0&&(n.dependencies=(t=e.observing_,Array.from(new Set(t))).map(dn)),n}function pn(e,t){return fn(Kr(e,t))}function fn(e){var t={name:e.name_};return function(e){return e.observers_&&e.observers_.size>0}(e)&&(t.observers=Array.from(function(e){return e.observers_}(e)).map(fn)),t}var vn=0;function yn(){this.message="FLOW_CANCELLED"}function gn(e){return e instanceof yn}yn.prototype=Object.create(Error.prototype);var mn=oe("flow"),_n=oe("flow.bound",{bound:!0}),bn=Object.assign((function(e,t){if(z(t))return mn.decorate_20223_(e,t);if(m(t))return F(e,t,mn);var n=e,r=n.name||"<unnamed flow>",i=function(){var e,t=arguments,i=++vn,s=Gt(r+" - runid: "+i+" - init",n).apply(this,t),o=void 0,a=new Promise((function(t,n){var a=0;function l(e){var t;o=void 0;try{t=Gt(r+" - runid: "+i+" - yield "+a++,s.next).call(s,e)}catch(e){return n(e)}u(t)}function c(e){var t;o=void 0;try{t=Gt(r+" - runid: "+i+" - yield "+a++,s.throw).call(s,e)}catch(e){return n(e)}u(t)}function u(e){if(!g(null==e?void 0:e.then))return e.done?t(e.value):(o=Promise.resolve(e.value)).then(l,c);e.then(u,n)}e=n,l(void 0)}));return a.cancel=Gt(r+" - runid: "+i+" - cancel",(function(){try{o&&kn(o);var t=s.return(void 0),n=Promise.resolve(t.value);n.then(y,y),kn(n),e(new yn)}catch(t){e(t)}})),a};return i.isMobXFlow=!0,i}),mn);function kn(e){g(e.cancel)&&e.cancel()}function wn(e){return e}function xn(e){return!0===(null==e?void 0:e.isMobXFlow)}function Sn(e,t,n){var r;return wr(e)||gr(e)||Ze(e)?r=Wr(e):$r(e)&&(r=Wr(e,t)),r.dehancer="function"==typeof t?t:n,function(){r.dehancer=void 0}}function On(e,t,n){return g(n)?function(e,t,n){return Wr(e,t).intercept_(n)}(e,t,n):function(e,t){return Wr(e).intercept_(t)}(e,t)}function An(e,t){if(void 0===t)return rt(e);if(!1===$r(e))return!1;if(!e[G].values_.has(t))return!1;var n=Kr(e,t);return rt(n)}function Pn(e){return An(e)}function En(e,t){return An(e,t)}function qn(e,t){return!!e&&(void 0!==t?!!$r(e)&&e[G].values_.has(t):$r(e)||!!e[G]||W(e)||Rt(e)||rt(e))}function Mn(e){return qn(e)}function Nn(e,t){return qn(e,t)}function Cn(e){return $r(e)?e[G].keys_():wr(e)||Ar(e)?Array.from(e.keys()):gr(e)?e.map((function(e,t){return t})):void r(5)}function Tn(e){return $r(e)?Cn(e).map((function(t){return e[t]})):wr(e)?Cn(e).map((function(t){return e.get(t)})):Ar(e)?Array.from(e.values()):gr(e)?e.slice():void r(6)}function $n(e){return $r(e)?Cn(e).map((function(t){return[t,e[t]]})):wr(e)?Cn(e).map((function(t){return[t,e.get(t)]})):Ar(e)?Array.from(e.entries()):gr(e)?e.map((function(e,t){return[t,e]})):void r(7)}function jn(e,t,n){if(2!==arguments.length||Ar(e))$r(e)?e[G].set_(t,n):wr(e)?e.set(t,n):Ar(e)?e.add(t):gr(e)?("number"!=typeof t&&(t=parseInt(t,10)),t<0&&r("Invalid index: '"+t+"'"),At(),t>=e.length&&(e.length=t+1),e[t]=n,Pt()):r(8);else{At();var i=t;try{for(var s in i)jn(e,s,i[s])}finally{Pt()}}}function Rn(e,t){$r(e)?e[G].delete_(t):wr(e)||Ar(e)?e.delete(t):gr(e)?("number"!=typeof t&&(t=parseInt(t,10)),e.splice(t,1)):r(9)}function Dn(e,t){return $r(e)?e[G].has_(t):wr(e)||Ar(e)?e.has(t):gr(e)?t>=0&&t<e.length:void r(10)}function Bn(e,t){if(Dn(e,t))return $r(e)?e[G].get_(t):wr(e)?e.get(t):gr(e)?e[t]:void r(11)}function In(e,t,n){if($r(e))return e[G].defineProperty_(t,n);r(39)}function Ln(e){if($r(e))return e[G].ownKeys_();r(38)}function Un(e,t,n,r){return g(n)?function(e,t,n,r){return Wr(e,t).observe_(n,r)}(e,t,n,r):function(e,t,n){return Wr(e).observe_(t,n)}(e,t,n)}function Vn(e,t,n){return e.set(t,n),n}function Hn(e,t){if(null==e||"object"!=typeof e||e instanceof Date||!Mn(e))return e;if(Ze(e)||rt(e))return Hn(e.get(),t);if(t.has(e))return t.get(e);if(gr(e)){var n=Vn(t,e,new Array(e.length));return e.forEach((function(e,r){n[r]=Hn(e,t)})),n}if(Ar(e)){var r=Vn(t,e,new Set);return e.forEach((function(e){r.add(Hn(e,t))})),r}if(wr(e)){var i=Vn(t,e,new Map);return e.forEach((function(e,n){i.set(n,Hn(e,t))})),i}var s=Vn(t,e,{});return Ln(e).forEach((function(n){c.propertyIsEnumerable.call(e,n)&&(s[n]=Hn(e[n],t))})),s}function Fn(e,t){return Hn(e,new Map)}function zn(){}function Gn(e,t){void 0===t&&(t=void 0),At();try{return e.apply(t)}finally{Pt()}}function Kn(e,t,n){return 1===arguments.length||t&&"object"==typeof t?function(e,t){var n,r,i;if(null!=t&&null!=(n=t.signal)&&n.aborted)return Object.assign(Promise.reject(new Error("WHEN_ABORTED")),{cancel:function(){return null}});var s=new Promise((function(n,s){var o,a=Wn(e,n,B({},t,{onError:s}));r=function(){a(),s(new Error("WHEN_CANCELLED"))},i=function(){a(),s(new Error("WHEN_ABORTED"))},null==t||null==(o=t.signal)||null==o.addEventListener||o.addEventListener("abort",i)})).finally((function(){var e;return null==t||null==(e=t.signal)||null==e.removeEventListener?void 0:e.removeEventListener("abort",i)}));return s.cancel=r,s}(e,t):Wn(e,t,n||{})}function Wn(e,t,n){var r;if("number"==typeof n.timeout){var i=new Error("WHEN_TIMEOUT");r=setTimeout((function(){if(!o[G].isDisposed){if(o(),!n.onError)throw i;n.onError(i)}}),n.timeout)}n.name="When";var s=ze("When-effect",t),o=Xt((function(t){Ye(!1,e)&&(t.dispose(),r&&clearTimeout(r),s())}),n);return o}function Yn(e){return e[G]}bn.bound=H(_n);var Xn={has:function(e,t){return Yn(e).has_(t)},get:function(e,t){return Yn(e).get_(t)},set:function(e,t,n){var r;return!!m(t)&&(null==(r=Yn(e).set_(t,n,!0))||r)},deleteProperty:function(e,t){var n;return!!m(t)&&(null==(n=Yn(e).delete_(t,!0))||n)},defineProperty:function(e,t,n){var r;return null==(r=Yn(e).defineProperty_(t,n))||r},ownKeys:function(e){return Yn(e).ownKeys_()},preventExtensions:function(e){r(13)}};function Qn(e){return void 0!==e.interceptors_&&e.interceptors_.length>0}function Jn(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),v((function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}))}function Zn(e,t){var n=ht();try{for(var i=[].concat(e.interceptors_||[]),s=0,o=i.length;s<o&&((t=i[s](t))&&!t.type&&r(14),t);s++);return t}finally{dt(n)}}function er(e){return void 0!==e.changeListeners_&&e.changeListeners_.length>0}function tr(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),v((function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}))}function nr(e,t){var n=ht(),r=e.changeListeners_;if(r){for(var i=0,s=(r=r.slice()).length;i<s;i++)r[i](t);dt(n)}}function rr(e,t,n){return Xr((function(){var r=Nr(e,n)[G];null!=t||(t=function(e){return M(e,V)||w(e,V,B({},e[V])),e[V]}(e)),E(t).forEach((function(e){return r.make_(e,t[e])}))})),e}var ir=Symbol("mobx-keys");function sr(e,t,n){return b(e)?un(e,e,t,n):(Xr((function(){var r=Nr(e,n)[G];if(!e[ir]){var i=Object.getPrototypeOf(e),s=new Set([].concat(E(e),E(i)));s.delete("constructor"),s.delete(G),w(i,ir,s)}e[ir].forEach((function(e){return r.make_(e,!t||!(e in t)||t[e])}))})),e)}var or="splice",ar="update",lr={get:function(e,t){var n=e[G];return t===G?n:"length"===t?n.getArrayLength_():"string"!=typeof t||isNaN(t)?M(hr,t)?hr[t]:e[t]:n.get_(parseInt(t))},set:function(e,t,n){var r=e[G];return"length"===t&&r.setArrayLength_(n),"symbol"==typeof t||isNaN(t)?e[t]=n:r.set_(parseInt(t),n),!0},preventExtensions:function(){r(15)}},cr=function(){function e(e,t,n,r){void 0===e&&(e="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=n,this.legacyMode_=r,this.atom_=new K(e),this.enhancer_=function(e,n){return t(e,n,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.dehanceValues_=function(e){return void 0!==this.dehancer&&e.length>0?e.map(this.dehancer):e},t.intercept_=function(e){return Jn(this,e)},t.observe_=function(e,t){return void 0===t&&(t=!1),t&&e({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),tr(this,e)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(e){("number"!=typeof e||isNaN(e)||e<0)&&r("Out of range: "+e);var t=this.values_.length;if(e!==t)if(e>t){for(var n=new Array(e-t),i=0;i<e-t;i++)n[i]=void 0;this.spliceWithArray_(t,0,n)}else this.spliceWithArray_(e,t-e)},t.updateArrayLength_=function(e,t){e!==this.lastKnownLength_&&r(16),this.lastKnownLength_+=t,this.legacyMode_&&t>0&&zr(e+t+1)},t.spliceWithArray_=function(e,t,n){var r=this;this.atom_;var i=this.values_.length;if(void 0===e?e=0:e>i?e=i:e<0&&(e=Math.max(0,i+e)),t=1===arguments.length?i-e:null==t?0:Math.max(0,Math.min(t,i-e)),void 0===n&&(n=u),Qn(this)){var s=Zn(this,{object:this.proxy_,type:or,index:e,removedCount:t,added:n});if(!s)return u;t=s.removedCount,n=s.added}if(n=0===n.length?n:n.map((function(e){return r.enhancer_(e,void 0)})),this.legacyMode_){var o=n.length-t;this.updateArrayLength_(i,o)}var a=this.spliceItemsIntoValues_(e,t,n);return 0===t&&0===n.length||this.notifyArraySplice_(e,n,a),this.dehanceValues_(a)},t.spliceItemsIntoValues_=function(e,t,n){var r;if(n.length<1e4)return(r=this.values_).splice.apply(r,[e,t].concat(n));var i=this.values_.slice(e,e+t),s=this.values_.slice(e+t);this.values_.length+=n.length-t;for(var o=0;o<n.length;o++)this.values_[e+o]=n[o];for(var a=0;a<s.length;a++)this.values_[e+n.length+a]=s[a];return i},t.notifyArrayChildUpdate_=function(e,t,n){var r=!this.owned_&&!1,i=er(this),s=i||r?{observableKind:"array",object:this.proxy_,type:ar,debugObjectName:this.atom_.name_,index:e,newValue:t,oldValue:n}:null;this.atom_.reportChanged(),i&&nr(this,s)},t.notifyArraySplice_=function(e,t,n){var r=!this.owned_&&!1,i=er(this),s=i||r?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:or,index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;this.atom_.reportChanged(),i&&nr(this,s)},t.get_=function(e){if(!(this.legacyMode_&&e>=this.values_.length))return this.atom_.reportObserved(),this.dehanceValue_(this.values_[e]);console.warn("[mobx] Out of bounds read: "+e)},t.set_=function(e,t){var n=this.values_;if(this.legacyMode_&&e>n.length&&r(17,e,n.length),e<n.length){this.atom_;var i=n[e];if(Qn(this)){var s=Zn(this,{type:ar,object:this.proxy_,index:e,newValue:t});if(!s)return;t=s.newValue}(t=this.enhancer_(t,i))!==i&&(n[e]=t,this.notifyArrayChildUpdate_(e,t,i))}else{for(var o=new Array(e+1-n.length),a=0;a<o.length-1;a++)o[a]=void 0;o[o.length-1]=t,this.spliceWithArray_(n.length,0,o)}},e}();function ur(e,t,n,r){return void 0===n&&(n="ObservableArray"),void 0===r&&(r=!1),f(),Xr((function(){var i=new cr(n,t,r,!1);x(i.values_,G,i);var s=new Proxy(i.values_,lr);return i.proxy_=s,e&&e.length&&i.spliceWithArray_(0,0,e),s}))}var hr={clear:function(){return this.splice(0)},replace:function(e){var t=this[G];return t.spliceWithArray_(0,t.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=this[G];switch(arguments.length){case 0:return[];case 1:return s.spliceWithArray_(e);case 2:return s.spliceWithArray_(e,t)}return s.spliceWithArray_(e,t,r)},spliceWithArray:function(e,t,n){return this[G].spliceWithArray_(e,t,n)},push:function(){for(var e=this[G],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[G].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[G],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return bt.trackingDerivation&&r(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){bt.trackingDerivation&&r(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var t=this[G],n=t.dehanceValues_(t.values_).indexOf(e);return n>-1&&(this.splice(n,1),!0)}};function dr(e,t){"function"==typeof Array.prototype[e]&&(hr[e]=t(e))}function pr(e){return function(){var t=this[G];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function fr(e){return function(t,n){var r=this,i=this[G];return i.atom_.reportObserved(),i.dehanceValues_(i.values_)[e]((function(e,i){return t.call(n,e,i,r)}))}}function vr(e){return function(){var t=this,n=this[G];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(e,n,r){return i(e,n,r,t)},r[e].apply(r,arguments)}}dr("at",pr),dr("concat",pr),dr("flat",pr),dr("includes",pr),dr("indexOf",pr),dr("join",pr),dr("lastIndexOf",pr),dr("slice",pr),dr("toString",pr),dr("toLocaleString",pr),dr("toSorted",pr),dr("toSpliced",pr),dr("with",pr),dr("every",fr),dr("filter",fr),dr("find",fr),dr("findIndex",fr),dr("findLast",fr),dr("findLastIndex",fr),dr("flatMap",fr),dr("forEach",fr),dr("map",fr),dr("some",fr),dr("toReversed",fr),dr("reduce",vr),dr("reduceRight",vr);var yr=S("ObservableArrayAdministration",cr);function gr(e){return _(e)&&yr(e[G])}var mr={},_r="add",br="delete",kr=function(){function e(e,t,n){var i=this;void 0===t&&(t=Q),void 0===n&&(n="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[G]=mr,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=t,this.name_=n,g(Map)||r(18),Xr((function(){i.keysAtom_=Y("ObservableMap.keys()"),i.data_=new Map,i.hasMap_=new Map,e&&i.merge(e)}))}var t=e.prototype;return t.has_=function(e){return this.data_.has(e)},t.has=function(e){var t=this;if(!bt.trackingDerivation)return this.has_(e);var n=this.hasMap_.get(e);if(!n){var r=n=new Je(this.has_(e),J,"ObservableMap.key?",!1);this.hasMap_.set(e,r),rn(r,(function(){return t.hasMap_.delete(e)}))}return n.get()},t.set=function(e,t){var n=this.has_(e);if(Qn(this)){var r=Zn(this,{type:n?ar:_r,object:this,newValue:t,name:e});if(!r)return this;t=r.newValue}return n?this.updateValue_(e,t):this.addValue_(e,t),this},t.delete=function(e){var t=this;if(this.keysAtom_,Qn(this)&&!Zn(this,{type:br,object:this,name:e}))return!1;if(this.has_(e)){var n=er(this),r=n?{observableKind:"map",debugObjectName:this.name_,type:br,object:this,oldValue:this.data_.get(e).value_,name:e}:null;return Gn((function(){var n;t.keysAtom_.reportChanged(),null==(n=t.hasMap_.get(e))||n.setNewValue_(!1),t.data_.get(e).setNewValue_(void 0),t.data_.delete(e)})),n&&nr(this,r),!0}return!1},t.updateValue_=function(e,t){var n=this.data_.get(e);if((t=n.prepareNewValue_(t))!==bt.UNCHANGED){var r=er(this),i=r?{observableKind:"map",debugObjectName:this.name_,type:ar,object:this,oldValue:n.value_,name:e,newValue:t}:null;n.setNewValue_(t),r&&nr(this,i)}},t.addValue_=function(e,t){var n=this;this.keysAtom_,Gn((function(){var r,i=new Je(t,n.enhancer_,"ObservableMap.key",!1);n.data_.set(e,i),t=i.value_,null==(r=n.hasMap_.get(e))||r.setNewValue_(!0),n.keysAtom_.reportChanged()}));var r=er(this),i=r?{observableKind:"map",debugObjectName:this.name_,type:_r,object:this,name:e,newValue:t}:null;r&&nr(this,i)},t.get=function(e){return this.has(e)?this.dehanceValue_(this.data_.get(e).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var e=this,t=this.keys();return xr({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:e.get(i)}}})},t.entries=function(){var e=this,t=this.keys();return xr({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:[i,e.get(i)]}}})},t[Symbol.iterator]=function(){return this.entries()},t.forEach=function(e,t){for(var n,r=D(this);!(n=r()).done;){var i=n.value,s=i[0],o=i[1];e.call(t,o,s,this)}},t.merge=function(e){var t=this;return wr(e)&&(e=new Map(e)),Gn((function(){var n,i,s;b(e)?function(e){var t=Object.keys(e);if(!P)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter((function(t){return c.propertyIsEnumerable.call(e,t)}))):t}(e).forEach((function(n){return t.set(n,e[n])})):Array.isArray(e)?e.forEach((function(e){var n=e[0],r=e[1];return t.set(n,r)})):O(e)?(n=e,i=Object.getPrototypeOf(n),s=Object.getPrototypeOf(i),null!==Object.getPrototypeOf(s)&&r(19,e),e.forEach((function(e,n){return t.set(n,e)}))):null!=e&&r(20,e)})),this},t.clear=function(){var e=this;Gn((function(){ut((function(){for(var t,n=D(e.keys());!(t=n()).done;){var r=t.value;e.delete(r)}}))}))},t.replace=function(e){var t=this;return Gn((function(){for(var n,i=function(e){if(O(e)||wr(e))return e;if(Array.isArray(e))return new Map(e);if(b(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}return r(21,e)}(e),s=new Map,o=!1,a=D(t.data_.keys());!(n=a()).done;){var l=n.value;if(!i.has(l))if(t.delete(l))o=!0;else{var c=t.data_.get(l);s.set(l,c)}}for(var u,h=D(i.entries());!(u=h()).done;){var d=u.value,p=d[0],f=d[1],v=t.data_.has(p);if(t.set(p,f),t.data_.has(p)){var y=t.data_.get(p);s.set(p,y),v||(o=!0)}}if(!o)if(t.data_.size!==s.size)t.keysAtom_.reportChanged();else for(var g=t.data_.keys(),m=s.keys(),_=g.next(),k=m.next();!_.done;){if(_.value!==k.value){t.keysAtom_.reportChanged();break}_=g.next(),k=m.next()}t.data_=s})),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(e,t){return tr(this,e)},t.intercept_=function(e){return Jn(this,e)},R(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Map"}}])}(),wr=S("ObservableMap",kr);function xr(e){return e[Symbol.toStringTag]="MapIterator",ri(e)}var Sr={},Or=function(){function e(e,t,n){var i=this;void 0===t&&(t=Q),void 0===n&&(n="ObservableSet"),this.name_=void 0,this[G]=Sr,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=n,g(Set)||r(22),this.enhancer_=function(e,r){return t(e,r,n)},Xr((function(){i.atom_=Y(i.name_),e&&i.replace(e)}))}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.clear=function(){var e=this;Gn((function(){ut((function(){for(var t,n=D(e.data_.values());!(t=n()).done;){var r=t.value;e.delete(r)}}))}))},t.forEach=function(e,t){for(var n,r=D(this);!(n=r()).done;){var i=n.value;e.call(t,i,i,this)}},t.add=function(e){var t=this;if(this.atom_,Qn(this)){var n=Zn(this,{type:_r,object:this,newValue:e});if(!n)return this;e=n.newValue}if(!this.has(e)){Gn((function(){t.data_.add(t.enhancer_(e,void 0)),t.atom_.reportChanged()}));var r=er(this),i=r?{observableKind:"set",debugObjectName:this.name_,type:_r,object:this,newValue:e}:null;r&&nr(this,i)}return this},t.delete=function(e){var t=this;if(Qn(this)&&!Zn(this,{type:br,object:this,oldValue:e}))return!1;if(this.has(e)){var n=er(this),r=n?{observableKind:"set",debugObjectName:this.name_,type:br,object:this,oldValue:e}:null;return Gn((function(){t.atom_.reportChanged(),t.data_.delete(e)})),n&&nr(this,r),!0}return!1},t.has=function(e){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(e))},t.entries=function(){var e=this.values();return Pr({next:function(){var t=e.next(),n=t.value,r=t.done;return r?{value:void 0,done:r}:{value:[n,n],done:r}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var e=this,t=this.data_.values();return Pr({next:function(){var n=t.next(),r=n.value,i=n.done;return i?{value:void 0,done:i}:{value:e.dehanceValue_(r),done:i}}})},t.intersection=function(e){return A(e)&&!Ar(e)?e.intersection(this):new Set(this).intersection(e)},t.union=function(e){return A(e)&&!Ar(e)?e.union(this):new Set(this).union(e)},t.difference=function(e){return new Set(this).difference(e)},t.symmetricDifference=function(e){return A(e)&&!Ar(e)?e.symmetricDifference(this):new Set(this).symmetricDifference(e)},t.isSubsetOf=function(e){return new Set(this).isSubsetOf(e)},t.isSupersetOf=function(e){return new Set(this).isSupersetOf(e)},t.isDisjointFrom=function(e){return A(e)&&!Ar(e)?e.isDisjointFrom(this):new Set(this).isDisjointFrom(e)},t.replace=function(e){var t=this;return Ar(e)&&(e=new Set(e)),Gn((function(){Array.isArray(e)||A(e)?(t.clear(),e.forEach((function(e){return t.add(e)}))):null!=e&&r("Cannot initialize set from "+e)})),this},t.observe_=function(e,t){return tr(this,e)},t.intercept_=function(e){return Jn(this,e)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[Symbol.iterator]=function(){return this.values()},R(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Set"}}])}(),Ar=S("ObservableSet",Or);function Pr(e){return e[Symbol.toStringTag]="SetIterator",ri(e)}var Er=Object.create(null),qr="remove",Mr=function(){function e(e,t,n,r){void 0===t&&(t=new Map),void 0===r&&(r=be),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=e,this.values_=t,this.name_=n,this.defaultAnnotation_=r,this.keysAtom_=new K("ObservableObject.keys"),this.isPlainObject_=b(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(e){return this.values_.get(e).get()},t.setObservablePropValue_=function(e,t){var n=this.values_.get(e);if(n instanceof et)return n.set(t),!0;if(Qn(this)){var r=Zn(this,{type:ar,object:this.proxy_||this.target_,name:e,newValue:t});if(!r)return null;t=r.newValue}if((t=n.prepareNewValue_(t))!==bt.UNCHANGED){var i=er(this),s=i?{type:ar,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:n.value_,name:e,newValue:t}:null;n.setNewValue_(t),i&&nr(this,s)}return!0},t.get_=function(e){return bt.trackingDerivation&&!M(this.target_,e)&&this.has_(e),this.target_[e]},t.set_=function(e,t,n){return void 0===n&&(n=!1),M(this.target_,e)?this.values_.has(e)?this.setObservablePropValue_(e,t):n?Reflect.set(this.target_,e,t):(this.target_[e]=t,!0):this.extend_(e,{value:t,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,n)},t.has_=function(e){if(!bt.trackingDerivation)return e in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var t=this.pendingKeys_.get(e);return t||(t=new Je(e in this.target_,J,"ObservableObject.key?",!1),this.pendingKeys_.set(e,t)),t.get()},t.make_=function(e,t){if(!0===t&&(t=this.defaultAnnotation_),!1!==t){if(!(e in this.target_)){var n;if(null!=(n=this.target_[V])&&n[e])return;r(1,t.annotationType_,this.name_+"."+e.toString())}for(var i=this.target_;i&&i!==c;){var s=a(i,e);if(s){var o=t.make_(this,e,s,i);if(0===o)return;if(1===o)break}i=Object.getPrototypeOf(i)}jr(this,0,e)}},t.extend_=function(e,t,n,r){if(void 0===r&&(r=!1),!0===n&&(n=this.defaultAnnotation_),!1===n)return this.defineProperty_(e,t,r);var i=n.extend_(this,e,t,r);return i&&jr(this,0,e),i},t.defineProperty_=function(e,t,n){void 0===n&&(n=!1),this.keysAtom_;try{At();var r=this.delete_(e);if(!r)return r;if(Qn(this)){var i=Zn(this,{object:this.proxy_||this.target_,name:e,type:_r,newValue:t.value});if(!i)return null;var s=i.newValue;t.value!==s&&(t=B({},t,{value:s}))}if(n){if(!Reflect.defineProperty(this.target_,e,t))return!1}else l(this.target_,e,t);this.notifyPropertyAddition_(e,t.value)}finally{Pt()}return!0},t.defineObservableProperty_=function(e,t,n,r){void 0===r&&(r=!1),this.keysAtom_;try{At();var i=this.delete_(e);if(!i)return i;if(Qn(this)){var s=Zn(this,{object:this.proxy_||this.target_,name:e,type:_r,newValue:t});if(!s)return null;t=s.newValue}var o=Tr(e),a={configurable:!bt.safeDescriptors||this.isPlainObject_,enumerable:!0,get:o.get,set:o.set};if(r){if(!Reflect.defineProperty(this.target_,e,a))return!1}else l(this.target_,e,a);var c=new Je(t,n,"ObservableObject.key",!1);this.values_.set(e,c),this.notifyPropertyAddition_(e,c.value_)}finally{Pt()}return!0},t.defineComputedProperty_=function(e,t,n){void 0===n&&(n=!1),this.keysAtom_;try{At();var r=this.delete_(e);if(!r)return r;if(Qn(this)&&!Zn(this,{object:this.proxy_||this.target_,name:e,type:_r,newValue:void 0}))return null;t.name||(t.name="ObservableObject.key"),t.context=this.proxy_||this.target_;var i=Tr(e),s={configurable:!bt.safeDescriptors||this.isPlainObject_,enumerable:!1,get:i.get,set:i.set};if(n){if(!Reflect.defineProperty(this.target_,e,s))return!1}else l(this.target_,e,s);this.values_.set(e,new et(t)),this.notifyPropertyAddition_(e,void 0)}finally{Pt()}return!0},t.delete_=function(e,t){if(void 0===t&&(t=!1),this.keysAtom_,!M(this.target_,e))return!0;if(Qn(this)&&!Zn(this,{object:this.proxy_||this.target_,name:e,type:qr}))return null;try{var n;At();var r,i=er(this),s=this.values_.get(e),o=void 0;if(!s&&i&&(o=null==(r=a(this.target_,e))?void 0:r.value),t){if(!Reflect.deleteProperty(this.target_,e))return!1}else delete this.target_[e];if(s&&(this.values_.delete(e),s instanceof Je&&(o=s.value_),qt(s)),this.keysAtom_.reportChanged(),null==(n=this.pendingKeys_)||null==(n=n.get(e))||n.set(e in this.target_),i){var l={type:qr,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:o,name:e};i&&nr(this,l)}}finally{Pt()}return!0},t.observe_=function(e,t){return tr(this,e)},t.intercept_=function(e){return Jn(this,e)},t.notifyPropertyAddition_=function(e,t){var n,r=er(this);if(r){var i=r?{type:_r,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:e,newValue:t}:null;r&&nr(this,i)}null==(n=this.pendingKeys_)||null==(n=n.get(e))||n.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),E(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function Nr(e,t){var n;if(M(e,G))return e;var r=null!=(n=null==t?void 0:t.name)?n:"ObservableObject",i=new Mr(e,new Map,String(r),function(e){var t;return e?null!=(t=e.defaultDecorator)?t:ke(e):void 0}(t));return w(e,G,i),e}var Cr=S("ObservableObjectAdministration",Mr);function Tr(e){return Er[e]||(Er[e]={get:function(){return this[G].getObservablePropValue_(e)},set:function(t){return this[G].setObservablePropValue_(e,t)}})}function $r(e){return!!_(e)&&Cr(e[G])}function jr(e,t,n){var r;null==(r=e.target_[V])||delete r[n]}var Rr,Dr,Br=Hr(0),Ir=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,!1===e}(),Lr=0,Ur=function(){};Rr=Ur,Dr=Array.prototype,Object.setPrototypeOf?Object.setPrototypeOf(Rr.prototype,Dr):void 0!==Rr.prototype.__proto__?Rr.prototype.__proto__=Dr:Rr.prototype=Dr;var Vr=function(e){function t(t,n,r,i){var s;return void 0===r&&(r="ObservableArray"),void 0===i&&(i=!1),s=e.call(this)||this,Xr((function(){var e=new cr(r,n,i,!0);e.proxy_=s,x(s,G,e),t&&t.length&&s.spliceWithArray(0,0,t),Ir&&Object.defineProperty(s,"0",Br)})),s}I(t,e);var n=t.prototype;return n.concat=function(){this[G].atom_.reportObserved();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.prototype.concat.apply(this.slice(),t.map((function(e){return gr(e)?e.slice():e})))},n[Symbol.iterator]=function(){var e=this,t=0;return ri({next:function(){return t<e.length?{value:e[t++],done:!1}:{done:!0,value:void 0}}})},R(t,[{key:"length",get:function(){return this[G].getArrayLength_()},set:function(e){this[G].setArrayLength_(e)}},{key:Symbol.toStringTag,get:function(){return"Array"}}])}(Ur);function Hr(e){return{enumerable:!1,configurable:!0,get:function(){return this[G].get_(e)},set:function(t){this[G].set_(e,t)}}}function Fr(e){l(Vr.prototype,""+e,Hr(e))}function zr(e){if(e>Lr){for(var t=Lr;t<e+100;t++)Fr(t);Lr=e}}function Gr(e,t,n){return new Vr(e,t,n)}function Kr(e,t){if("object"==typeof e&&null!==e){if(gr(e))return void 0!==t&&r(23),e[G].atom_;if(Ar(e))return e.atom_;if(wr(e)){if(void 0===t)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||r(25,t,Yr(e)),n}if($r(e)){if(!t)return r(26);var i=e[G].values_.get(t);return i||r(27,t,Yr(e)),i}if(W(e)||rt(e)||Rt(e))return e}else if(g(e)&&Rt(e[G]))return e[G];r(28)}function Wr(e,t){return e||r(29),void 0!==t?Wr(Kr(e,t)):W(e)||rt(e)||Rt(e)||wr(e)||Ar(e)?e:e[G]?e[G]:void r(24,e)}function Yr(e,t){var n;if(void 0!==t)n=Kr(e,t);else{if(Yt(e))return e.name;n=$r(e)||wr(e)||Ar(e)?Wr(e):Kr(e)}return n.name_}function Xr(e){var t=ht(),n=Xe(!0);At();try{return e()}finally{Pt(),Qe(n),dt(t)}}Object.entries(hr).forEach((function(e){var t=e[0],n=e[1];"concat"!==t&&w(Vr.prototype,t,n)})),zr(1e3);var Qr,Jr=c.toString;function Zr(e,t,n){return void 0===n&&(n=-1),ei(e,t,n)}function ei(e,t,n,r,i){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!=e)return t!=t;var s=typeof e;if("function"!==s&&"object"!==s&&"object"!=typeof t)return!1;var o=Jr.call(e);if(o!==Jr.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return"undefined"!=typeof Symbol&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++}e=ti(e),t=ti(t);var a="[object Array]"===o;if(!a){if("object"!=typeof e||"object"!=typeof t)return!1;var l=e.constructor,c=t.constructor;if(l!==c&&!(g(l)&&l instanceof l&&g(c)&&c instanceof c)&&"constructor"in e&&"constructor"in t)return!1}if(0===n)return!1;n<0&&(n=-1),i=i||[];for(var u=(r=r||[]).length;u--;)if(r[u]===e)return i[u]===t;if(r.push(e),i.push(t),a){if((u=e.length)!==t.length)return!1;for(;u--;)if(!ei(e[u],t[u],n-1,r,i))return!1}else{var h=Object.keys(e),d=h.length;if(Object.keys(t).length!==d)return!1;for(var p=0;p<d;p++){var f=h[p];if(!M(t,f)||!ei(e[f],t[f],n-1,r,i))return!1}}return r.pop(),i.pop(),!0}function ti(e){return gr(e)?e.slice():O(e)||wr(e)||A(e)||Ar(e)?Array.from(e.entries()):e}var ni=(null==(Qr=s().Iterator)?void 0:Qr.prototype)||{};function ri(e){return e[Symbol.iterator]=ii,Object.assign(Object.create(ni),e)}function ii(){return this}["Symbol","Map","Set"].forEach((function(e){void 0===s()[e]&&r("MobX requires global '"+e+"' to be available or polyfilled")})),"object"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:Dt,extras:{getDebugName:Yr},$mobx:G})},769:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.AudioEngine=void 0;const i=n(813),s=n(324),o=n(830),a=n(185);class l{get destination(){return o.AudioEnvironment.instance.destination}get isTransportMomentaryPlaying(){return this._transportMomentaryPlaying}set isTransportMomentaryPlaying(e){e!==this._transportMomentaryPlaying&&(this._transportMomentaryPlaying=e,this.updateTransportPlaying())}get isTransportPlaying(){return this._transportPlaying}set isTransportPlaying(e){e!==this._transportPlaying&&(this._transportPlaying=e,(0,i.runInAction)((()=>{this.observables.isTransportSolidPlaying=e})),this.updateTransportPlaying())}constructor(){this.observables=(0,i.observable)({isTransportSolidPlaying:!1,isPlaying:!1,timeBeats:0,channelNotes:(0,i.observable)(new Map)}),this._transportMomentaryPlaying=!1,this._transportPlaying=!1,this.transportBeatNumber=0,this.seqPrevBeatNumber=-1,this.tracks=new Map,this.options={bpm:120},this.audioContext=o.AudioEnvironment.instance.audioContext;const e=o.AudioEnvironment.instance.samplesFuture;this.ready=(async()=>{this.samples=await e})(),(0,i.makeObservable)(this)}onInteraction(){this.audioContext.resume()}updateTransportPlaying(){if(this._transportPlaying||this._transportMomentaryPlaying){if(o.AudioEnvironment.instance.isFirstStart&&(o.AudioEnvironment.instance.isFirstStart=!1,(0,a.isMobile)()))return void(async()=>{await(0,a.sleep)(100),await(0,a.sleep)(100),await(0,a.sleep)(100),this.transportStart()})();this.transportStart()}else this.transportStop()}transportStart(){if(void 0!==this.transportInterval)return;if(l.activeEngine!==this){const e=l.activeEngine;l.activeEngine=this,e&&(e.isTransportPlaying=!1,e.transportStop())}this.observables.isPlaying=!0,this.transportBeatNumber=60/this.options.bpm*-.01,this.observables.timeBeats=this.transportBeatNumber/16,this.seqPrevBeatNumber=-1;let e=!1;this.ready.then((()=>{(0,i.runInAction)((()=>{this.updateSeq(),e=!0}))}));let t=this.audioContext.currentTime;this.transportInterval=setInterval((()=>{const n=this.audioContext.currentTime,r=n-t;if(t=n,!e)return;const s=60/this.options.bpm/16;this.transportBeatNumber+=r/s,(0,i.runInAction)((()=>{this.observables.timeBeats=this.transportBeatNumber/16,this.updateSeq()}))}),10)}transportStop(){if(void 0!==this.transportInterval){clearInterval(this.transportInterval),this.transportInterval=void 0,this.observables.isPlaying=!1;for(const e of this.tracks.values()){e.playing?.node.disconnect(),e.playing?.outNode.disconnect(),e.playing=void 0;for(let t=0;t<16;++t)e.queued[t]?.node.disconnect(),e.queued[t]?.outNode.disconnect(),e.queued[t]=void 0}for(const e of this.observables.channelNotes.keys())this.observables.channelNotes.set(e,"")}}updateSeq(){let e=!1;const t=this.audioContext.currentTime,n=60/this.options.bpm/16,r=0|Math.floor(this.seqPrevBeatNumber),i=0|Math.floor(this.transportBeatNumber),a=this.transportBeatNumber-Math.floor(this.transportBeatNumber);this.seqPrevBeatNumber=this.transportBeatNumber;const l=0|Math.max(0,i-r);for(let t=0;t<l;++t)for(const t of this.tracks.values()){if(t.queued[0]||t.playing?.isEnded){const n=t.playing?.key,r=t.queued[0]?.key;t.playing?.node.disconnect(),t.playing?.outNode.disconnect(),t.playing=t.queued[0],n!==r&&(e=!0)}for(let e=0;e<15;++e)t.queued[e]=t.queued[e+1];t.queued[15]=void 0}for(const r of this.tracks.values()){r.muteNode.gain.value=r.options.muted?0:1;const l=r.pattern;for(let c=0;c<16;++c){const u=0|Math.round(16*r.options.seqStepSize*4),h=(0,s.wrapInt)(i+c+1,u),d=0|Math.round((i+c+1)/u);if(0!==h)continue;const p=(0,s.wrapInt)(d,Math.max(1,l?.length??0)),f=l?.[p],v=r.queued[c];if(v?.key===f?.key&&v?.sound===f?.sound)continue;if(e=!0,v?.node.disconnect(),v?.outNode.disconnect(),r.queued[c]=void 0,!f)continue;const y=this.audioContext.createBufferSource(),g=o.AudioEnvironment.instance.locateSoundDirty(f.sound);y.buffer=g.audioBuffer;const m=this.audioContext.createGain();m.gain.value=f.gain??1;const _={key:f.key,sound:f.sound,node:y,outNode:m,isEnded:!1};_.node.onended=()=>{_.isEnded=!0},r.queued[c]=_,y.connect(m),m.connect(r.inNode);const b=t+n*(1-a+c);y.start(b,g.offset,g.duration)}}if(e)for(const[e,t]of this.tracks)this.observables.channelNotes.set(e,t.playing?.key??"")}setSeqPattern(e,t){this.getTrack(e).pattern=t}setTrackOptions(e,t){this.getTrack(e).options=t}getTrack(e){let t=this.tracks.get(e);if(!t){const n=this.audioContext.createGain(),r=this.audioContext.createGain();n.connect(r),r.connect(this.destination),t={inNode:n,gainNode:n,muteNode:r,outNode:n,options:{seqStepSize:1/4,muted:!1},queued:new Array(16)},this.tracks.set(e,t)}return t}triggerSample(e){this.ready.then((()=>{const t=this.audioContext.createBufferSource();t.buffer=this.samples[e].audioBuffer,t.connect(this.destination),t.start(this.audioContext.currentTime)}))}}t.AudioEngine=l,r([i.observable],l.prototype,"observables",void 0),r([i.action],l.prototype,"transportStart",null),r([i.action],l.prototype,"transportStop",null)},830:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.isSameSound=t.AudioEnvironment=void 0;const o=s(n(185)),a={kick:"#ff4500",snare:"#4169E1",clap:"#4169E1",hat:"#FFFACD"},l=a.kick;class c{constructor(){this.isFirstStart=!0,this.audioContext=new AudioContext({}),this.emptySampleEntry=h(this.audioContext),this.dynamicSamples=new Map,this.audioFuturesSamples=new Map,this.audioSamples=new Map,this.loadDynamicQueue=new o.OperationQueue,this.samplesFuture=async function(e){const t={kick:u("assets/kick.wav","kick",e),snare:u("assets/snare.wav","snare",e),hat:u("assets/hat.wav","hat",e),clap:u("assets/clap.wav","clap",e)},n=await Promise.all(Object.entries(t).map((async([e,t])=>[e,await t])));return Object.fromEntries(n)}(this.audioContext),this.samplesFuture.then((e=>{this.samples=e})),this.destination=this.audioContext.createGain(),this.destination.connect(this.audioContext.destination),this.destination.gain.value=1}loadDynamicSampleSlices(e,t){const n=this.dynamicSamples.get(e);if(n)return n;const r=Array.from(o.range(t)).map((()=>({ref:{audio:{key:c.newNoteKey()}},future:new o.Resolvable}))),i=r.map((e=>e.ref));this.dynamicSamples.set(e,i);for(const e of r)this.audioFuturesSamples.set(e.ref.audio.key,e.future.promise);return this.loadDynamicQueue.push((async()=>await this.loadDynamicSampleSlicesImpl(e,r))),i}async loadDynamicSampleSlicesImpl(e,t){try{const n=t.length,r=await(await fetch(e)).arrayBuffer(),i=await this.audioContext.decodeAudioData(r),s=i.duration;for(let e=0;e<n;++e){const r=t[e],a=s*e/n,l=s/n,c={audioBuffer:i,offset:a,duration:l,svgUrl:d(i,{offset:a,duration:l})};r.future.resolve(c),this.audioSamples.set(r.ref.audio.key,c),e%16==0&&await o.sleep(0)}return t}catch(n){console.error(`Failed to load slices ${e}`,n);for(const e of t)e.future.resolve(this.emptySampleEntry)}}locateSoundDirty(e){return"string"==typeof e?this.samples?.[e]??this.emptySampleEntry:this.audioSamples.get(e.audio.key)??this.emptySampleEntry}async locateSoundAsync(e){return"string"==typeof e?(await this.samplesFuture)[e]??this.emptySampleEntry:await this.audioFuturesSamples.get(e.audio.key)??this.emptySampleEntry}static newNoteKey(){return(this.nextKey++).toFixed(0)}}async function u(e,t,n){try{const r=await(await fetch(e)).arrayBuffer(),i=await n.decodeAudioData(r);return{audioBuffer:i,svgUrl:d(i,{hint:t})}}catch(t){return console.error(`Failed to load sample ${e}`,t),h(n)}}function h(e){const t=e.createBuffer(e.destination.numberOfInputs,1,e.sampleRate);return{audioBuffer:t,svgUrl:d(t)}}function d(e,t){const n=t?.offset,r=t?.duration,i=t?.hint,s=[];for(let t=0;t<e.numberOfChannels;++t)s.push(e.getChannelData(t));let o=Math.min(...s.map((e=>e.length))),c=0;const u=e.duration;void 0!==n&&u>0&&(c=o*n/u|0),void 0!==r&&u>0&&(o=o*r/u|0);let h='<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">';const d=(i?a[i]:void 0)??l;for(let e=0;e<10;++e){const t=e/10,n=(e+1)/10,r=n-t,i=t*o+c|0,a=n*o+c|0,l=a-i,u=0|Math.max(1,Math.floor(l/128));let p=0;for(let e=i;e<a+1;e+=u)for(const t of s)p=Math.max(p,Math.abs(t[e]??0));const f=Math.max(.01,p),v=.5-.5*f,y=.5+.5*f,g=t+.2*r,m=n-.2*r;h+=`<rect x="${(100*g).toFixed(1)}" y="${(100*v).toFixed(1)}" width="${(100*(m-g)).toFixed(1)}" height="${(100*(y-v)).toFixed(1)}" fill="${d}"/>`}h+="</svg>";const p=new Blob([h],{type:"image/svg+xml"});return URL.createObjectURL(p)}t.AudioEnvironment=c,c.instance=new c,c.nextKey=0,t.isSameSound=function(e,t){return e===t||"string"!=typeof e&&"string"!=typeof t&&e?.audio.key===t?.audio.key}},439:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.COMMON_STYLES=void 0;const r=n(624);t.COMMON_STYLES=r.css`
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
`},720:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=n(616),s=n(624),o=n(924);n(816),n(617),n(24),n(849);const a=n(439);let l=class extends i.MobxLitElement{connectedCallback(){super.connectedCallback()}render(){return s.html`
<div class="info-grid">
  <div class="section-break">
  </div>
  <div class="data centered">
    <div class="h0">
      Easy drum patterns
    </div>
    <div class="block-quote">
      "Remembering sequences is hard. Remembering edits is easier!"
    </div>
    <div>
      Presenting a paradigm to constructing all sorts of drum patterns. Focus on remembering the two extremely basic fundamental patterns (boom-slap and 4-to-the-floor), and their rules-of-thumb for making edits on top.
    </div>
    <div class="data centered">
      This tutorial is interactive! Warning: it may be loud.
    </div>
  </div>

  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="kick"></hyrax-seq-tracks>
  <div class="section-break"></div>


  <div class="data">
    <div class="h1">
      boom-slap - the money beat
    </div>
    <div>
      This is a very simple to construct beat is a great starting point to form various other beats. The alternating kick and snare 1-2 creates the "rocking" rhythm of rock music, also called the money beat. A kick for a boom, followed by a snare for a slap sound creates variation in frequency content.
    </div>
    <div>
      Note how the kick and the snare do not overlap, they do not "hit together", so the whole thing can be sequenced with just one layer.
    </div>
    <div>
      You can play them together with a sample from a real song.
    </div>
    <div>
      Try editing the sequence, moving around the kick and snare to see how the rhythm changes.
    </div>
    <div class="subnote">
      <p>Tips:</p><p>Press and hold <em>listen</em> to hear the example. Let go to stop. You can also tap on the waveform itself.</p>
      <p>Tap <em>play</em> to start continuous play mode.</p>
      <p>Pressing <em>listen</em> while in continous play mode lets you hear the example momentarily. Let go to go back to hearing your pattern.</p>
    </div>
  </div>
  <hyrax-seq-tracks bpm=110 class="highlighted">
    <div slot="header" class="header">kick-snare</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_110.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;@kick;;;;@snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      drag samples around to edit
    </div>
  </hyrax-seq-tracks>
  <div class="data">
    <div class="block-quote">
      Note how the kick and the snare do not overlap, they do not "hit together", so the whole thing can be sequenced with just one layer
    </div>
  </div>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      the snare as a timekeeper
    </div>
    <div>
      An important feature of this beat is the snare that hits on the "backbeat". The backbeats are the "weaker" beats 2 and 4, that sit in-between the strong kicks on 1 and 3. This snare has a lot of presence due to its stronger midtones than the kick.
    </div>
    <div class="block-quote">
      We can treat this snare as our "timekeeper", the clock that keeps things ticking regularly
    </div>
    <div>
      While this isn't the only way to think of things, keeping the snare fixed to the backbeat gives us an almost cheat way to form other beats.
    </div>
    <div>
      Take the following basic rhythm and try moving the kicks around to form the example beat.
    </div>
  </div>
  <hyrax-seq-tracks bpm=96>
    <div slot="header" class="header">a shift</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_hats_96.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;kick;;@;;@snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      shift the kick to match the example - small hints in blue mark correct locations
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    You can also try shifting around the snares to see how the rhythm tends to fall apart. In contrast, we can basically move the kicks as much as we want and get a steady, understandable rhythm.
  </div>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      adding minimal elements
    </div>
    <div>
      We can also add elements to this basic pattern.
    </div>
    <div>
      Hats add accents to our pattern, creating a rolling sensation and more density.
    </div>
  </div>
  <hyrax-seq-tracks bpm=131 allowDelete samples="hat">
    <div slot="header" class="header">hats</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_hats_131.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;@;;@snare;;@;;@kick;;@;;@snare;;@;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      drag this sample onto the track - drag away to delete
    </div>
  </hyrax-seq-tracks>

  <div class="section-break"></div>


  <div class="data">
    <div class="h1">
      many patterns
    </div>
    <div>
      With this strategy of shifting the kick drums, and minimal adding of new elements, we can produce all sorts of rhythms.
    </div>
    <div class="block-quote">
      We can create tons patterns by just editing a basic pattern slightly
    </div>
  </div>
  <hyrax-seq-tracks bpm=85 allowDelete>
    <div slot="header" class="header">rnb</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/rnb_85.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;@;;;@snare;;;;kick;;@;;@snare;;;" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>



  <hyrax-seq-tracks bpm=133 allowDelete>
    <div slot="header" class="header">garage</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/garage_133.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;@;kick;;@;;@snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>
  <hyrax-seq-tracks bpm=130 allowDelete>
    <div slot="header" class="header">breaks</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/breaks_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;@;;kick;@;;;@snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>
  <div class="data">
    <div>
      This pattern is a bit harder to replicate. The pattern is two bars long, while ours is only one. For now, focus on replicating the first bar.
    </div>
  </div>
  <hyrax-seq-tracks bpm=100 allowDelete>
    <div slot="header" class="header">hip-hop</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/hiphop_100.wav" slicesBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;@;;kick;;@;;@snare;;;@" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>




  <div class="data">
    <div>
      The dubstep rhythm is considered a half-time rhythm. The pattern is two bars, and the snares hit in the middle of each bar. The same is true for the trap beat.
    </div>
  </div>
  <hyrax-seq-tracks bpm=140 allowDelete>
    <div slot="header" class="header">dubstep</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/dubstep_140.wav" slicesBars=8 slicesPageByBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;;;;;@snare;;;;;;;;kick;;;@;;;@;;@snare;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>



  <hyrax-seq-tracks bpm=142 allowDelete beatScale=2>
    <div slot="header" class="header">trap</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/trap_142.wav" slicesBars=4 slicesPageByBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;;;@;;@snare;;;;@;;;;kick;;;;@;;;;@snare;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>
  <div class="data">
    <div>
      Drum 'n' bass is fast, making it harder to reason about the rhythm, but it follows the same simple rules. DnB rhythms can be easily constructed using the same shifting paradigm.
    </div>
  </div>
  <hyrax-seq-tracks bpm=174 allowDelete>
    <div slot="header" class="header">dnb</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/dnb_174.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@snare;;;;kick;;@;;@snare;;;" fillHats fillHatsStep=2></hyrax-seq-track>
  </hyrax-seq-tracks>


  <div class="data">
    <div>
      For all the previous examples, we have only constructed single bar patterns. Listening to the examples, this clearly has limits. Many of the examples have a different rhythm every other bar, usually a slight perturbation of the first bar.
    </div>
    <div>
      We can construct these by sequencing two bars.
    </div>
    <div>
      This doubles the complexity, but we can still use the power of "shifting" to keep what we need to remember to a minimum.
    </div>
  </div>
  <div class="data">
    <div class="h1">
      more than one bar
    </div>
    <div>
      Here's a two bar sequence.
    </div>
    <div>
      For simplicity, the timekeeper snares have been frozen - as we know by now, these snares don't need to move.
    </div>
  </div>
  <hyrax-seq-tracks bpm=118>
    <div slot="header" class="header">two bar seq</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/boom_slap_edit_118.wav" slicesBars=4 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;;@;kick;;;;@!snare;;;;kick;;@;;@!snare;;;@;kick;;;;@!snare;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      shift the kicks
    </div>
  </hyrax-seq-tracks>
  <div class="data">
    <div>
      Now we can more satisfactorily construct some of the examples we saw earlier.
    </div>
  </div>
  <hyrax-seq-tracks bpm=100 allowDelete>
    <div slot="header" class="header">hip-hop two bar</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/hiphop_100.wav" slicesBars=2 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;@;;kick;;@;;@!snare;;;@;@kick;;;;@!snare;@;@;;kick;;@;;@!snare;;;" fillHats></hyrax-seq-track>
  </hyrax-seq-tracks>
  <hyrax-seq-tracks bpm=133 allowDelete>
    <div slot="header" class="header">garage two bar</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/garage_133.wav" slicesBars=4 pinned slicesPageByBars=2></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@!snare;;;@;kick;;;;@!snare;;;;@kick;;;;@!snare;;;@;kick;;@;;@!snare;;;" fillHats fillHatsStep=2 fillHatsRetrigger></hyrax-seq-track>
  </hyrax-seq-tracks>


  <div class="section-break"></div>
  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="snare"></hyrax-seq-tracks>
  <div class="section-break"></div>
  <div class="section-break"></div>


  <div class="data">
    <div class="h1">
      4-to-the-floor
    </div>
    <div>
      This pattern's distinct feature is its constant, unyeilding kick drums spaced extremely regularly, hitting every single beat. It serves as the basis for all "4-to-the-floor" style music like house and techno, and all descendent genres.
    </div>
    <div>
      Frequently said to sound like "marching ants".
    </div>
  </div>
  <hyrax-seq-tracks bpm=130 class="highlighted">
    <div slot="header" class="header">house</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;"></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      the backbeat
    </div>
    <div>
      These rhythms tend to focus on gradual construction through layering. The house beat can be constructed by layering a snare backbeat.
    </div>
  </div>
  <hyrax-seq-tracks bpm=130 allowDelete>
    <div slot="header" class="header">house backbeat</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_beat_130.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@;;;;;;;;@;;;"></hyrax-seq-track>
    <div slot="notes" class="notes">
      add snares - the kicks are frozen for simplicity
    </div>
  </hyrax-seq-tracks>

  <div class="data">
    <div>
      Note how in this rhythm, we now have drums hitting at the same time, necessitating care that they do not conflict too much. But, multiple drums hitting at the same time creates a sense of power.
    </div>
    <div>
      Just like in our single-track boom-slap rhythm from before, the snares hit on the weaker beats 2 and 4.
    </div>
  </div>


  <div class="data">
    <div class="h1">
      decoration
    </div>
    <div>
      "Tops" or hats tend to hit between the beats, creating a "unce-unce" rhythm, filling in the "ce" part with high frequency sparkle.
    </div>
  </div>
  <hyrax-seq-tracks bpm=128 allowDelete>
    <div slot="header" class="header">house beat with hats</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/house_hats_128.wav" slicesBars=4 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@snare;;;;;;;;@snare;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@;;;;@;;;;@;;;;@;"></hyrax-seq-track>
  </hyrax-seq-tracks>



  <div class="data">
    <div>
      The hats pattern can also be inverted. Instead of hitting on the weaker beats, we can have it hit directly on the 1-2-3-4 beats. This creates an extremely regular, aggressive feel.
    </div>
  </div>
  <hyrax-seq-tracks bpm=128 allowDelete>
    <div slot="header" class="header">bigroom</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/bigroom_128.wav" slicesBars=8 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;snare;;;;;;;;snare;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@;;hat;;@;;hat;;@;;hat;;@;;hat;"></hyrax-seq-track>
  </hyrax-seq-tracks>



  <div class="data">
    <div class="h1">
      shaka-shaka
    </div>
    <div>
      For trance, the hats tend to be double time, and the snare is either changed out for a clap, or skipped altogether. This gives the so-called "boots-n-cats" sound.
    </div>
  </div>
  <hyrax-seq-tracks bpm=138 allowDelete samples="kick;snare;clap;hat">
    <div slot="header" class="header">trance</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/trance_138.wav" slicesBars=8 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;;@kick;;;;@kick;;;;@kick;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;@clap;;;;;;;;@clap;;;" pinned></hyrax-seq-track>
    <hyrax-seq-track pattern=";;@;;;;@;;;;@;;;;@;" fillHats fillHatsStep=2 fillHatsOffset=1></hyrax-seq-track>
  </hyrax-seq-tracks>

  <div class="section-break"></div>

  <div class="data">
    <div class="h1">
      back to break beats
    </div>
    <div>
      If we add in some inspirations from the first paradigm, and start shifting stuff around, we can get some interesting "breakbeat" like patterns.
    </div>
  </div>
  <hyrax-seq-tracks bpm=135 allowDelete>
    <div slot="header" class="header">techno breaks</div>
    <hyrax-seq-track class="short" slicesSrc="assets/loop_samples/techno_breaks_135.wav" slicesBars=2 pinned></hyrax-seq-track>
    <hyrax-seq-track pattern="@kick;;;@;kick;;@;;@kick;;;@;kick;;@;"></hyrax-seq-track>
    <hyrax-seq-track pattern=";;;;;;;;;;;;;;;" fillHats fillHatsStep=2></hyrax-seq-track>
    <div slot="notes" class="notes">
      break up the regularity by shifting those kicks
    </div>
  </hyrax-seq-tracks>

  <div class="section-break"></div>
  <div class="section-break"></div>
  <hyrax-seq-tracks class="sampler-divider" allowDelete hideChrome samples="hat"></hyrax-seq-tracks>
  <div class="section-break"></div>
  <div class="section-break"></div>
</div>
`}};t.App=l,l.styles=[a.COMMON_STYLES,s.css`
body, :host {
  display: block;
  background-color: var(--app-bg-color1);
  margin: 0;
}

.info-grid {
  display: grid;
  grid-auto-rows: auto;
  width: fit-content;
  margin: auto;
}
.info-grid .data {
  grid-column: 1;
}
.info-grid hyrax-seq-tracks {
  grid-column: calc(max(1, var(--multi-column) * 2));
}
.info-grid .centered {
  grid-column: 1 / calc(max(2, var(--multi-column) * 3));
}
.h0 {
  color: var(--app-text-color1);
  font-size: 300%;
  letter-spacing: 0.0125em;
  margin-bottom: 2em;
}
.h1 {
  margin-top: calc((1 - var(--multi-column)) * 3em);
}

.data {
  display: flex;
  flex-direction: column;
  min-width: calc(max(80%, (1 - var(--multi-column)) * 20em));
  max-width: 30em;
  gap: 1em;
  place-self: center;
  padding-left: calc(var(--multi-column) * 2em);
  margin-top: 1em;
  margin-bottom: 4em;
  font-size: 100%;
}
@media (hover: none) {
  .data {
    font-size: 30px;
  }
}
.data.centered {
  margin-left: 0;
  text-align: center;
  min-width: 0;
  padding-left: 0;
}
.data.block-quote {
  min-width: 0;
}
.data .subnote {
  color: var(--app-text-color2);
  font-size: 80%;
  max-width: calc(max(50%, 30em));
  p {
    margin: 0.5em 1em;
  }
}
@media (hover: none) {
  .data .subnote {
    font-size: 100%;
  }
}

hyrax-seq-tracks {
  --tracks-grid-color: var(--app-track-grid-color);
}
hyrax-seq-tracks.highlighted {
  background-color: var(--app-bg-color2);
  border-left: 5px solid var(--app-hi-color1);
  position: relative;
  left: -5px;
  --tracks-grid-color: var(--app-text-color2);
}
hyrax-seq-tracks .header {
  color: var(--app-text-color1);
}
hyrax-seq-tracks .notes {
  text-align: center;
  margin-top: 1em;
  max-width: 50%;
  place-self: center;
  font-size: 80%;
  font-style: italic;
  color: var(--app-text-color2);
  padding-top: 1em;
}
.section-break {
  grid-column: 1;
  padding: 5em 0;
}

.info-grid .sampler-divider {
  place-self: center;
  grid-column: 1 / calc(max(2, var(--multi-column) * 3));
  margin: 0;
  padding: 0;
}

`],t.App=l=r([(0,o.customElement)("hyrax-app")],l),document.body.appendChild(new l)},324:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cssColorFromHash=t.DEFAULT_COLOR_FROM_HASH=t.wrapClick=t.wrapFloat01=t.wrapInt=t.easeOut=t.clamp01=t.lerp=void 0;const r=n(813);function i(e,t,n){return e*(1-n)+t*n}function s(e){return Math.max(0,Math.min(1,e))}t.lerp=i,t.clamp01=s,t.easeOut=function(e){return Math.sqrt(e)},t.wrapInt=function(e,t){return e<0?(t-e)%t|0:e%t|0},t.wrapFloat01=function(e){return e-Math.floor(e)},t.wrapClick=function(e){return(0,r.action)((t=>{t.stopPropagation(),t.preventDefault(),e(t)}))},t.DEFAULT_COLOR_FROM_HASH={lcenter:.4,lrange:.1,scenter:.8,srange:.1},t.cssColorFromHash=function(e,n){const r=n?.lcenter??t.DEFAULT_COLOR_FROM_HASH.lcenter,o=n?.lrange??t.DEFAULT_COLOR_FROM_HASH.lrange,a=n?.lrange??t.DEFAULT_COLOR_FROM_HASH.scenter,l=n?.lrange??t.DEFAULT_COLOR_FROM_HASH.srange,c=22695477*function(e){let t=0;for(let n=0,r=e.length;n<r;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}(e)+1|0,u=(255&c)/255,h=(c>>8&255)/255,d=(c>>16&255)/255,p=s(1-4*Math.abs(u-1/6)),f=s(1-8*Math.abs(u-2/3));let v=u,y=s(i(a-l,a+l,h)),g=s(i(r-o,r+o,d));return g=i(g,g*g,.25*p),g=i(g,Math.sqrt(g),.25*f),y=i(y,Math.sqrt(y),p),`hsl(${(360*v).toFixed(0)} ${(100*y).toFixed(0)} ${(100*g).toFixed(0)})`}},882:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.PointerDragOp=t.CancelReason=void 0,function(e){e.NoChange="NoChange",e.UserAction="UserAction",e.Programmatic="Programmatic"}(n||(t.CancelReason=n={})),t.PointerDragOp=class{constructor(e,t,n){this.element=t,this.callbacks=n,this.isDisposed=!1,this.initialThresholdReached=!1,this.pointerId=e.pointerId,e.preventDefault(),this.moveFunc=this.onPointerMove.bind(this),this.upFunc=this.onPointerUp.bind(this),this.cancelFunc=this.onPointerCancel.bind(this),window.addEventListener("pointermove",this.moveFunc),window.addEventListener("pointerup",this.upFunc),window.addEventListener("pointercancel",this.cancelFunc),this.startX=e.clientX,this.startY=e.clientY,this.callbacks.callMoveImmediately&&(this.element.setPointerCapture(this.pointerId),this.initialThresholdReached=!0,this.moveFunc(e))}onPointerMove(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.initialThresholdReached||Math.abs(t[0])+Math.abs(t[1])>5&&(this.element.setPointerCapture(this.pointerId),this.initialThresholdReached=!0),this.initialThresholdReached&&this.callbacks?.move?.(e,t)}onPointerUp(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.callbacks.callMoveBeforeDone&&this.callbacks?.move?.(e,t),this.initialThresholdReached?this.callbacks?.accept?.(e,t):this.callbacks?.cancel?.(n.NoChange),this.callbacks?.complete?.(),this.finishDispose()}onPointerCancel(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.callbacks.callMoveBeforeDone&&this.callbacks?.move?.(e,t),this.callbacks?.cancel?.(n.UserAction),this.callbacks?.complete?.(),this.finishDispose()}dispose(){this.isDisposed||(this.callbacks?.cancel?.(n.Programmatic),this.callbacks?.complete?.(),this.finishDispose())}finishDispose(){this.isDisposed||(this.isDisposed=!0,this.element.releasePointerCapture(this.pointerId),window.removeEventListener("pointermove",this.moveFunc),window.removeEventListener("pointerup",this.upFunc),window.removeEventListener("pointercancel",this.cancelFunc))}}},296:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.SeqNoteBase=void 0;const i=n(616),s=n(624),o=n(924),a=n(830),l=n(813),c=n(439);class u extends i.MobxLitElement{static get styles(){return[c.COMMON_STYLES,s.css`
:host {
  --seqpos: 0;
  --seqlen: 1;
  --notelen: 1;
  --notegain: 1.0;
  --xmin: calc(round(100% * var(--seqpos) / var(--seqlen), var(--pixel)));
  --xmax: calc(round(100% * (var(--seqpos) + var(--notelen)) / var(--seqlen), var(--pixel)) - var(--pixel));
  display: block;
  position: absolute;
  box-sizing: border-box;
  left: var(--xmin);
  width: calc(var(--xmax) - var(--xmin));
  top: 0;
  bottom: 0;
}

.bg {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
}
`]}get currentSound(){return this.cachedSound}constructor(){super(),this.seqpos=0,this.seqlen=0,this.notelen=1,this.moving=!1,this.step=void 0}connectedCallback(){super.connectedCallback(),this.reconnect()}disconnectedCallback(){super.disconnectedCallback(),this.disposer?.()}onSoundChanged(){}reconnect(){this.disposer?.();const e=[];e.push((0,l.autorun)((()=>{const e=(this.step?.note??this.step?.ghostNote)?.sound,t=!this.step?.note&&!!this.step?.ghostNote,n=this.step?.isPinned,r=!this.parent?.pinned;this.classList.toggle("editable",!t&&!n&&r),this.classList.toggle("ghosted",t),this.classList.toggle("pinned",n),this.classList.toggle("good",this.step?.isGood),this.moving=!!this.step?.isMoving,(0,a.isSameSound)(e,this.cachedSound)||(this.cachedSound=e,this.onSoundChanged())}))),e.push((0,l.autorun)((()=>{const e=this.parent?.parent?.engine,t=this.parent?.track,n=(this.step?.note??this.step?.ghostNote)?.key;if(!e||!t||!n)return;const r=e.observables.channelNotes.get(t)===n;this.classList.toggle("playing",r)}))),this.disposer=()=>{for(const t of e)t()}}update(e){e.has("step")&&this.reconnect(),super.update(e)}updated(){const e=this.step?.note??this.step?.ghostNote;this.attributeStyleMap.set("--seqpos",this.seqpos.toString()),this.attributeStyleMap.set("--seqlen",Math.max(1,this.seqlen).toString()),this.attributeStyleMap.set("--notelen",this.notelen.toString()),this.attributeStyleMap.set("--notegain",(e?.gain??1).toFixed(2))}}t.SeqNoteBase=u,r([(0,o.property)({attribute:!1})],u.prototype,"parent",void 0),r([(0,o.property)({type:Number})],u.prototype,"seqpos",void 0),r([(0,o.property)({type:Number})],u.prototype,"seqlen",void 0),r([(0,o.property)({type:Number})],u.prototype,"notelen",void 0),r([(0,o.property)({type:Boolean})],u.prototype,"moving",void 0),r([(0,o.property)({attribute:!1})],u.prototype,"step",void 0)},849:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.SeqNoteUnderlay=void 0;const i=n(624),s=n(924),o=n(813),a=n(296),l=n(324);let c=class extends a.SeqNoteBase{static get styles(){return[...super.styles,i.css`
:host {
  pointer-events: none;
}

.bg {
  border-left: 1px solid var(--track-grid-color);
}

.good-indicator {
  display: none;
  position: absolute;
  bottom: calc(-3px + 0.25em);
  height: 0.25em;
  left: 1.5px;
  right: 0;
  margin: 0 40%;
  background-color: var(--app-hi-color2);
}
:host(.good) .good-indicator {
  display: block;
}
:host(.pinned) .good-indicator {
  background-color: var(--app-bg-color2);
}

.step-label {
  position: absolute;
  right: 0;
  bottom: -0.1em;
  text-align: center;
  font-size: 70%;
  color: var(--track-grid-color);
}
.step-label.quarter-note {
  color: var(--track-grid-color);
}
`]}constructor(){super(),(0,o.makeObservable)(this)}render(){const e=Math.max(1,this.parent?.parent?.beatScale??1),t=Math.max(1,this.parent?.seqStepNum??1),n=Math.max(1,this.parent?.seqStepDenom??1),r=8*(0,l.wrapFloat01)(this.seqpos*t/n/e),s=Math.abs((0,l.wrapFloat01)(r)),o=0|Math.round(r);let a;if(s<.001){const e=0|Math.floor(o/2),t=o%2==1,n=t?"&":(e+1).toFixed(0);a=i.html`
<div class="step-label ${t?"quarter-note":""}">
  ${n}
</div>
`}return i.html`
<div class="bg"></div>
<div class="good-indicator"></div>
${a}
`}};t.SeqNoteUnderlay=c,t.SeqNoteUnderlay=c=r([(0,s.customElement)("hyrax-seq-note-underlay")],c)},24:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.SeqNote=void 0;const i=n(624),s=n(924),o=n(830),a=n(813),l=n(296),c=n(185);let u=class extends l.SeqNoteBase{static get styles(){return[...super.styles,i.css`
:host {
  --sample-image: '';
}

.bg {
  left: 1px;
  right: -1px;
  background-image: var(--sample-image);
  background-position: center;
  background-size: 100% calc(70% * var(--notegain));
  background-repeat: no-repeat;
  cursor: pointer;
}
:host(.editable) .bg:hover:not(:active) {
  filter: brightness(0.6) saturate(1.25);
}
:host(.ghosted) .bg {
  opacity: 0.2;
  cursor: unset;
}
:host(.pinned) .bg {
  opacity: 0.5;
  cursor: unset;
}
:host(.playing) .bg {
  background-color: var(--app-text-color2);
}

.moving-indicator {
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 10px;
  height: 100px;
  transform: translate(-50%, 0);
  background-color: var(--app-color2);
  pointer-events: none;
  z-index: 1;
}
`]}constructor(){super(),(0,a.makeObservable)(this)}onSoundChanged(){const e=this.currentSound;e&&(0,a.runInAction)((async()=>{await o.AudioEnvironment.instance.samplesFuture;const t=await o.AudioEnvironment.instance.locateSoundAsync(e);this.svgUrl=t.svgUrl,this.attributeStyleMap.set("--sample-image",`url('${this.svgUrl}')`)}))}render(){let e;return this.moving&&(0,c.isMobile)()&&(e=i.html`<div class="moving-indicator"></div>`),i.html`
<div class="bg">
</div>
${e}
`}updated(){super.updated(),this.svgUrl&&this.attributeStyleMap.set("--sample-image",`url('${this.svgUrl}')`)}};t.SeqNote=u,t.SeqNote=u=r([(0,s.customElement)("hyrax-seq-note")],u)},617:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.SeqTrack=void 0;const i=n(616),s=n(624),o=n(924),a=n(813),l=n(324),c=n(439),u=n(830);let h=class extends i.MobxLitElement{constructor(){super(),this.seqStepNum=1,this.seqStepDenom=16,this.fillHats=!1,this.fillHatsStep=1,this.fillHatsOffset=0,this.fillHatsRetrigger=!1,this.pinned=!1,this.muted=!1,this.pattern="",this.slicesSrc="",this.slicesBars=4,this.slicesPageByBars=1,this.parent=void 0,this.track=void 0,this.currentPattern=(0,a.observable)([]),this.cachedPatternStr="",this.cachedSlicesSrc="",this.lastGoodPageIndex=0,this.ghostNotes=[],(0,a.makeObservable)(this)}connectedCallback(){super.connectedCallback(),this.disposer=(0,a.autorun)((()=>{const e=this.parent?.engine;e&&this.updateTransportStatus(e.observables.isPlaying,e.observables.timeBeats)}))}disconnectedCallback(){super.disconnectedCallback(),this.disposer?.()}moveNote(e,t,n,r){const i=0|Math.round(t),s=t-i,o=structuredClone((0,a.toJS)(n)),l=o.findIndex((t=>t.note?.key===e));if(l<0||this.pinned)return void(this.currentPattern=n);let c=Math.max(0,Math.min(o.length-1,l+i)),u=s<0?-1:1;for(let e=0;e<o.length&&o[c].isPinned;++e)c+=u,(c<0||c>=o.length)&&(c=Math.max(0,Math.min(o.length-1,c)),u=-u);if(l===c)return void(this.currentPattern=n);const h=o[l],f=h.note;if(h.isPinned)return;const v=o[c].note;if(o[l].note=void 0,o[c].note=f,o[c].isMoving=r.markAsMoving,v){const e=d(1,c,o)??p(1,c,o);void 0!==e&&(o[e].note=v)}this.applyGhostNotes(o),this.currentPattern=o}insertNote(e,t,n,r){if(this.pinned)return void(this.currentPattern=n);const i=0|Math.round(t),s=t-i,o=structuredClone((0,a.toJS)(n));let l=Math.max(0,Math.min(o.length-1,i)),c=s<0?-1:1;for(let e=0;e<o.length&&o[l].isPinned;++e)l+=c,(l<0||l>=o.length)&&(l=Math.max(0,Math.min(o.length-1,l)),c=-c);const u=o[l].note;if(o[l].note=e,o[l].isMoving=r.markAsMoving,u){const e=d(1,l,o)??p(1,l,o);void 0!==e&&(o[e].note=u)}this.applyGhostNotes(o),this.currentPattern=o}removeNote(e,t){if(this.pinned)return void(this.currentPattern=t);const n=structuredClone((0,a.toJS)(t)),r=n.findIndex((t=>t.note?.key===e));if(r<0)return void(this.currentPattern=t);const i=n[r];i.note,i.isPinned||(n[r].note=void 0,this.applyGhostNotes(n),this.currentPattern=n)}endMoveNote(){for(const e of this.currentPattern)e.isMoving=!1}syncData(){this.parent&&this.track&&(this.parent.engine.setTrackOptions(this.track,{seqStepSize:this.seqStepNum/this.seqStepDenom,muted:this.muted}),this.parent.engine.setSeqPattern(this.track,(0,a.toJS)(this.currentPattern).map((e=>e.note??e.ghostNote))))}update(e){this.cachedPatternStr!==this.pattern&&(this.cachedPatternStr=this.pattern,(0,a.runInAction)((()=>{const e=Array.from(this.pattern.split(";").map((e=>{e=e.trim();let t,n=!1,r=!1;for(;;)if(e.startsWith("!"))n=!0,e=e.slice(1).trim();else{if(!e.startsWith("@"))break;r=!0,e=e.slice(1).trim()}return e&&(t={key:u.AudioEnvironment.newNoteKey(),sound:e.trim()}),{note:t,isPinned:n,isGood:r,isMoving:!1}})));this.applyGhostNotes(e),this.currentPattern=e}))),this.cachedSlicesSrc!==this.slicesSrc&&(this.cachedSlicesSrc=this.slicesSrc,(0,a.runInAction)((()=>{const e=u.AudioEnvironment.instance.loadDynamicSampleSlices(this.slicesSrc,this.slicesBars*this.seqStepDenom/this.seqStepNum).map((e=>({note:{key:u.AudioEnvironment.newNoteKey(),sound:e},isPinned:!1,isGood:!1,isMoving:!1})));this.applyGhostNotes(e),this.currentPattern=e}))),super.update(e)}render(){const e=this.parent?.engine,t=this.track,n=e?.observables.channelNotes.get(t??"");let r=this.currentPattern;if(this.slicesSrc){const e=this.slicesPageByBars*this.seqStepDenom/this.seqStepNum,t=r.findIndex((e=>e.note?.key===n)),i=t<0?this.lastGoodPageIndex:0|Math.floor(t/e);t>=0&&(this.lastGoodPageIndex=i);const s=i*e|0;r=r.slice(s,s+e)}return s.html`
<div id="transport-position-indicator" class="transport-position-indicator"></div>
<div>
  ${r.map(((e,t)=>s.html`
<hyrax-seq-note-underlay
    .parent=${this}
    .step=${e}
    seqpos=${t}
    seqlen=${r.length}
    >
</hyrax-seq-note-underlay>
`))}
  ${r.map(((e,t)=>{const n=e.note??e.ghostNote;if(n)return s.html`
<hyrax-seq-note
    .parent=${this}
    .step=${e}
    seqpos=${t}
    seqlen=${r.length}
    @pointerdown=${(0,l.wrapClick)((e=>{const t=this.parent,r=t?.engine;if(!t||!r)return;r.onInteraction();const i=!!this.slicesSrc;t.soloPreview=i,t.updateTransport(),r.isTransportMomentaryPlaying=!0,this.parent?.doMoveNote(e,n,{complete:()=>{r.isTransportMomentaryPlaying=!1,t.soloPreview=!1}})}))}
    >
</hyrax-seq-note>
`}))}
</div>
`}updated(){this.syncData();const e=this.parent?.engine;e&&(this.classList.toggle("muted",this.muted),this.updateTransportStatus(e.observables.isPlaying,e.observables.timeBeats))}updateTransportStatus(e,t){if(!this.transportPositionIndicator)return;const n=this.currentPattern.length,r=4*(0|Math.max(1,n))*this.seqStepNum/this.seqStepDenom,i=(0,l.wrapFloat01)(t/r)*r;let s=i/r,o=!0;if(this.slicesSrc){const e=this.slicesPageByBars/4*this.seqStepDenom/this.seqStepNum,t=i-(this.lastGoodPageIndex*e|0);o=t>=0&&t<=e,s=(0,l.clamp01)(t/e)}this.transportPositionIndicator.style.left=CSS.percent(100*s).toString(),this.transportPositionIndicator.classList.toggle("hidden",!e||!o)}applyGhostNotes(e){const t=Array.from(this.ghostNotes);let n=this.fillHatsOffset;for(const r of e){if(r.note)this.fillHatsRetrigger&&(n=this.fillHatsOffset);else{let e,i=n%this.fillHatsStep==0;this.fillHats&&i&&(e=t.shift(),e||(e={key:u.AudioEnvironment.newNoteKey(),sound:"hat",gain:.5},this.ghostNotes.push(e))),r.ghostNote=e}n++}}};function d(e,t,n){let r=t+1;for(;n[r]&&n[r].isPinned;)r++;let i=0,s=r;for(;s<n.length&&(n[s].note||n[s].isPinned||(i++,!(i>=e)));++s);if(i<e)return;const o=s;let a=[];for(let e=r;e<=o;++e)n[e].note&&!n[e].isPinned&&(a.push(n[e].note),n[e].note=void 0);let l=0;for(let e=0;e<a.length;++e){for(;n[o-l].isPinned;)l++;n[o-l].note=a.at(-(e+1)),l++}return r}function p(e,t,n){let r=t-1;for(;n[r]&&n[r].isPinned;)r--;let i=0,s=r;for(;s>=0&&(n[s].note||n[s].isPinned||(i++,!(i>=e)));--s);if(i<e)return;const o=s;let a=[];for(let e=r;e>=o;--e)n[e].note&&!n[e].isPinned&&(a.push(n[e].note),n[e].note=void 0);let l=0;for(let e=0;e<a.length;++e){for(;n[o+l].isPinned;)l++;n[o+l].note=a.at(-(e+1))}return t-1}t.SeqTrack=h,h.styles=[c.COMMON_STYLES,s.css`
:host {
  --_tracks-grid-color: var(--tracks-grid-color, --app-track-grid-color);
  display: block;
  position: relative;
  width: calc(var(--note-width) * 16);
  height: var(--track-height);
  border-right: 1px solid var(--_tracks-grid-color);
  touch-action: none;
}
:host(.short) {
  --track-height: var(--short-track-height);
  margin-bottom: 2em;
}
:host(.muted) {
  filter: saturate(0);
}

hyrax-seq-note, hyrax-seq-note-underlay {
  --track-grid-color: var(--_tracks-grid-color);
}

.transport-position-indicator {
  position: absolute;
  width: calc(var(--pixel) * 5);
  top: 0;
  bottom: 0;
  background-color: crimson;
  z-index: 1;
}
`],r([(0,o.query)("#transport-position-indicator")],h.prototype,"transportPositionIndicator",void 0),r([(0,o.property)({type:Number})],h.prototype,"seqStepNum",void 0),r([(0,o.property)({type:Number})],h.prototype,"seqStepDenom",void 0),r([(0,o.property)({type:Boolean})],h.prototype,"fillHats",void 0),r([(0,o.property)({type:Number})],h.prototype,"fillHatsStep",void 0),r([(0,o.property)({type:Number})],h.prototype,"fillHatsOffset",void 0),r([(0,o.property)({type:Boolean})],h.prototype,"fillHatsRetrigger",void 0),r([(0,o.property)({type:Boolean})],h.prototype,"pinned",void 0),r([(0,o.property)({type:Boolean})],h.prototype,"muted",void 0),r([(0,o.property)()],h.prototype,"pattern",void 0),r([(0,o.property)()],h.prototype,"slicesSrc",void 0),r([(0,o.property)({type:Number})],h.prototype,"slicesBars",void 0),r([(0,o.property)({type:Number})],h.prototype,"slicesPageByBars",void 0),r([a.observable.ref],h.prototype,"parent",void 0),r([a.observable.ref],h.prototype,"track",void 0),r([a.observable],h.prototype,"currentPattern",void 0),r([a.action],h.prototype,"moveNote",null),r([a.action],h.prototype,"insertNote",null),r([a.action],h.prototype,"removeNote",null),r([a.action],h.prototype,"endMoveNote",null),t.SeqTrack=h=r([(0,o.customElement)("hyrax-seq-track")],h)},816:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0}),t.SeqTracks=t.DRAG_PADDING_FRACTION=void 0;const i=n(616),s=n(624),o=n(924),a=n(813),l=n(769),c=n(617),u=n(439),h=n(324),d=n(882),p=n(830);t.DRAG_PADDING_FRACTION=2;const f=["kick","snare","hat"];let v=class extends i.MobxLitElement{constructor(){super(),this.bpm=120,this.beatScale=1,this.allowDelete=!1,this.hideChrome=!1,this.samples="",this.soloPreview=!1,this.engine=new l.AudioEngine,this.cachedSoloPreview=!1,this.cachedTracks=[],this.isSoloingPreview=!1,(0,a.makeObservable)(this),this.addEventListener("slotchange",(()=>{this.reindexSlots()}))}render(){let e,t=this.allowDelete?f:[];return this.samples&&(t=this.samples.toLowerCase().split(";").map((e=>e.trim()))),t.length>0&&(e=s.html`
<div class="note-pool-area">
  ${t.map((e=>s.html`
  <hyrax-seq-note
      .step=${{note:{key:"",sound:e},isPinned:!1,isGood:!1,isMoving:!1}}
      @pointerdown=${(0,h.wrapClick)((t=>this.doDragNotePoolNote(t,e)))}
      >
  </hyrax-seq-note>
  `))}
</div>
`),s.html`
<div class="outer ${this.hideChrome?"hide-chrome":""}">
  <div class="tracks-with-extras">
    <div class="header-area chrome">
      <slot name="header"></slot>
      <div class="bpm-label subnote">${this.bpm.toFixed(0)} bpm</div>
    </div>
    <div class="tracks-area">
      <slot></slot>
    </div>
    ${e}
    <div class="notes-slot-area">
      <slot name="notes"></slot>
    </div>
    <div class="head-controls chrome">
      <div class="head-controls-preview">
        <div
            class="debug-button play-button"
            @pointerdown=${(0,h.wrapClick)(this.doSoloPreview.bind(this))}
            >
          listen
        </div>
      </div>
      <div class="head-controls-edit">
        <div
            class="debug-button play-button"
            @pointerdown=${(0,h.wrapClick)(this.doPlayPause.bind(this))}
            >
          ${this.engine.observables.isTransportSolidPlaying?"pause":"play"}
        </div>
      </div>
    </div>
  </div>
</div>
`}doPlayPause(){this.engine.onInteraction(),this.engine.isTransportPlaying=!this.engine.isTransportPlaying}doSoloPreview(e){const t=this.engine;t.onInteraction(),this.isSoloingPreview=!0,this.updateTrackMixer(),t.isTransportMomentaryPlaying=!0,new d.PointerDragOp(e,this,{complete:()=>{this.isSoloingPreview=!1,this.updateTrackMixer(),t.isTransportMomentaryPlaying=!1}})}doDragNotePoolNote(e,t){const n=this.engine;n.onInteraction();let r=!0;n.observables.isPlaying||this.cachedTracks.some((e=>e.currentPattern.at(0)?.note?.sound===t))&&(r=!1),n.isTransportMomentaryPlaying=!0;const i={key:p.AudioEnvironment.newNoteKey(),sound:t};r&&n.triggerSample(t),this.doMoveNote(e,i,{complete:()=>{n.isTransportMomentaryPlaying=!1}})}doMoveNote(e,n,r){this.engine;const i=this.cachedTracks.map(((e,t)=>({track:e,seqTrack:e,trackIndex:t,oldPattern:(0,a.toJS)(e.currentPattern)}))),s=i.find((e=>e.oldPattern.find((e=>e.note?.key===n.key||e.ghostNote?.key===n.key)))),o=s?.oldPattern.findIndex((e=>e.note?.key===n.key||e.ghostNote?.key===n.key))??-1,l=s?.oldPattern[o],c=!!s;new d.PointerDragOp(e,this,{move:(0,a.action)((e=>{const r=!l?.isPinned&&!l?.ghostNote&&!s?.track.pinned,a=!!this.allowDelete&&r,u=e.clientX,h=e.clientY;for(const{track:e,trackIndex:t,oldPattern:n}of i)e.currentPattern=n,e.endMoveNote();if(!r)return;let d;for(const e of i){const{track:r,trackIndex:o,oldPattern:a}=e,l=0===o,c=o===i.length-1,u=r.getBoundingClientRect(),p=(u.x,h-u.y),f=u.height*t.DRAG_PADDING_FRACTION,v=p<-(l?f:0),y=p>u.height+(c?f:0);if(!r.pinned){if(!v&&!y){d=e;break}s&&s.track.removeNote(n.key,s.oldPattern)}}if(d||this.allowDelete||(d=s),d){const{track:e,trackIndex:r,oldPattern:l}=d,p=0===r,f=r===i.length-1,v=e.getBoundingClientRect(),y=u-v.x,g=h-v.y,m=v.height*t.DRAG_PADDING_FRACTION,_=g<-(p?m:0),b=g>v.height+(f?m:0);if(c&&s.track===e){const e=s.track;if(a&&(_||b))e.removeNote(n.key,l);else{const t=y/v.width*l.length;e.moveNote(n.key,t-o,l,{markAsMoving:!0})}}else a&&(s&&s.track.removeNote(n.key,s.oldPattern),e.insertNote(n,y/v.width*l.length,l,{markAsMoving:!0}))}})),complete:()=>{r.complete?.();for(const{track:e,trackIndex:t,oldPattern:n}of i)e.endMoveNote()}})}updated(){this.reindexSlots(),this.engine.options.bpm=this.bpm,this.updateTransport()}updateTransport(){this.cachedSoloPreview!==this.soloPreview&&(this.cachedSoloPreview=this.soloPreview,this.isSoloingPreview=this.soloPreview,this.updateTrackMixer())}reindexSlots(){let e=0;this.cachedTracks.splice(0);for(const t of this.slotElements){if(!(t instanceof c.SeqTrack))continue;const n=e.toString();e++,(t.parent!==this||t.track!==n)&&(t.parent=this,t.track=n,t.syncData()),this.cachedTracks.push(t)}this.updateTrackMixer()}updateTrackMixer(){const e=this.isSoloingPreview;for(const t of this.cachedTracks){const n=!!t.slicesSrc;t.muted=e?!n:n}}};t.SeqTracks=v,v.styles=[u.COMMON_STYLES,s.css`
:host {
  margin-left: calc(max(2em, min(var(--multi-column) * 8em, 12vw - 8em)));
  margin-right: calc(var(--multi-column) * 1em);
  padding: 1em 2em;
  height: fit-content;
}
.outer {
  display: flex;
  flex-direction: column;
  user-select: none;
}

.tracks-with-extras {
  display: grid;
  grid-template-columns: auto auto;
  width: fit-content;
  margin: 1em;
}

.header-area {
  grid-area: 1 / 1;
}

.head-controls {
  grid-area: 2 / 2;
  display: flex;
  flex-direction: column;
  margin-left: 2em;
}

.notes-slot-area {
  grid-area: 4 / 1;
}

.play-button {
  min-width: 4em;
}

.tracks-area {
  grid-area: 2 / 1;
  display: flex;
  flex-direction: column;
}

.note-pool-area {
  grid-area: 3 / 1;
  height: var(--short-track-height);
  display: flex;
  flex-direction: row;
  gap: calc(var(--note-width) / 2);
  place-self: center;
  touch-action: none;
  user-select: none;
}
.note-pool-area:not(:empty) {
  margin-top: 1em;
}

.note-pool-area hyrax-seq-note {
  position: relative;
  width: var(--note-width);
}

.head-controls-preview {
  height: var(--short-track-height);
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.head-controls-edit {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 1.5em;
}

.bpm-label {
  display: inline-flex;
  margin-left: 0.5em;
}

.hide-chrome .chrome {
  display: none;
}
`],r([(0,o.queryAssignedElements)()],v.prototype,"slotElements",void 0),r([(0,o.property)({type:Number})],v.prototype,"bpm",void 0),r([(0,o.property)({type:Number})],v.prototype,"beatScale",void 0),r([(0,o.property)({type:Boolean})],v.prototype,"allowDelete",void 0),r([(0,o.property)({type:Boolean})],v.prototype,"hideChrome",void 0),r([(0,o.property)()],v.prototype,"samples",void 0),r([(0,o.property)({type:Boolean})],v.prototype,"soloPreview",void 0),r([a.action],v.prototype,"reindexSlots",null),t.SeqTracks=v=r([(0,o.customElement)("hyrax-seq-tracks")],v)},185:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isMobile=t.isDeepStrictEqual=t.mergeRec=t.merge=t.visitRec=t.putKeyValues=t.getEnumValues=t.findEnumName=t.nonvoid=t.upcast=t.lazy=t.lazyOr=t.arrayFromAsync=t.setAddRange=t.appendIfMissing=t.range=t.deleteWhere=t.filterNulllike=t.filterUnique=t.mapAll=t.indexOf=t.rectContains=t.filePathCombine=t.filePathResolveAbsPath=t.filePathExtension=t.filePathChangeExt=t.filePathFileNameWithoutExtension=t.filePathFileName=t.filePathDirectory=t.stringEmptyToNull=t.formatIntPadded=t.formatDuration=t.parseFloatOr=t.parseIntOr=t.sleep=t.multicast=t.Queue=t.LruCache=t.AsyncProducerConsumerQueue=t.BatchedProducerConsumerFlow=t.OperationQueue=t.WaitableFlag=t.Resolvable=void 0;class n{constructor(){this.resolveFunc=e=>{},this.rejectFunc=e=>{},this.completedField=!1,this.promiseField=new Promise(((e,t)=>{this.resolveFunc=e,this.rejectFunc=t})),this.promiseField.finally((()=>{this.completedField=!0}))}get completed(){return this.completedField}resolve(e){this.resolveFunc(e)}reject(e){this.rejectFunc(e)}get promise(){return this.promiseField}get callable(){return this.resolveFunc}}t.Resolvable=n;class r{constructor(){this.flag=new n}async wait(){await this.flag.promise,this.flag=new n}set(){this.flag.resolve()}}t.WaitableFlag=r,t.OperationQueue=class{constructor(){this.head=Promise.resolve()}async push(e){const t=new n;return this.head=this.head.then((async()=>{t.resolve(await e())})).catch((e=>{t.reject(e)})),t.promise}},t.BatchedProducerConsumerFlow=class{constructor(e){this.batchSize=e,this.consumer=o(),this.batchInProduction=[],this.consumerOp=a(0)}consume(e){this.consumer.add(e)}produce(e){this.batchInProduction.push(e),this.batchInProduction.length>=this.batchSize&&this.flushProduced()}flushProduced(){if(this.batchInProduction.length<=0)return;const e=this.batchInProduction;this.batchInProduction=[],this.consumerThen((async()=>{await this.consumer(e)}))}consumerThen(e){const t=this.consumerOp;this.consumerOp=t.then(e)}async join(e=!1){e||this.flushProduced(),await this.consumer}};class i{}t.AsyncProducerConsumerQueue=class{constructor(){this.queued=[],this.flag=new r,this.endOfQueue=new r,this.terminated=!1}add(e){this.queued.push(e),this.flag.set()}addRange(e){this.queued.push(...e),this.flag.set()}async join(){for(;this.queued.length>0;)await this.endOfQueue.wait()}terminate(){this.terminated=!0,this.flag.set()}async pop(){const e=await this.popOrTerminateInternal();if(e===i)throw new Error("Queue was terminated.");return e}async popOrTerminate(){const e=await this.popOrTerminateInternal();if(e!==i)return e}async popOrTerminateInternal(){for(;this.queued.length<=0;){if(this.terminated)return i;if(await this.flag.wait(),this.terminated)return i}const e=this.queued.splice(0,1)[0];return 0===this.queued.length&&this.endOfQueue.set(),e}},t.LruCache=class{constructor(e,t){this.maxEntries=e,this.evictCallback=t,this.values=new Map}get size(){return this.values.size}entries(){return this.values.entries()}get(e){const t=this.values.get(e);if(void 0!==t)return this.values.delete(e),this.values.set(e,t),t}put(e,t){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;if(void 0!==e){const t=this.values.get(e);this.values.delete(e),void 0!==t&&this.evictCallback?.(t)}}this.values.set(e,t)}clear(){if(this.evictCallback){const e=Array.from(this.values.values());this.values.clear();for(const t of e)this.evictCallback(t)}else this.values.clear()}};class s{constructor(e){this.value=e}}function o(...e){return e=Array.from(e),p(((...t)=>{let n;return e.forEach((e=>n=e.apply(null,t))),n}),{add(t){e.push(t)},remove(t){e=e.filter((e=>e!==t))}})}function a(e){return new Promise((t=>{setTimeout(t,e)}))}function l(e,t){let n=(Math.abs(e)||0).toString();for(;n.length<t;)n="0"+n;return n}function c(e){const t=e.lastIndexOf("/");return t<0?"":e.slice(0,t)}function u(e){const t=e.lastIndexOf("/");return t<0?e:e.slice(t+1)}function h(e){const t=u(e),n=t.lastIndexOf(".");return n<0?t:t.slice(0,n)}function d(...e){return e.filter((e=>e.length>0)).join("/")}function p(e,t){if("object"!=typeof t||t instanceof Array)throw new Error("merge: 'from' must be an ordinary object");return Object.keys(t).forEach((n=>e[n]=t[n])),e}function f(e){return null!=e&&"object"==typeof e}t.Queue=class{enqueue(e){if(this.tail){const t=this.tail;this.tail=new s(e),t.next=this.tail}else this.head=new s(e),this.tail=this.head}enqueueRange(e){for(const t of e)this.enqueue(t)}dequeue(){if(!this.head)return;const e=this.head;return this.head=e.next,this.head||(this.tail=void 0),e.next=void 0,e.value}empty(){return!!this.head}*values(){let e=this.head;for(;e;)yield e.value,e=e.next}},t.multicast=o,t.sleep=a,t.parseIntOr=function(e,t){if(void 0===e)return t;const n=parseInt(e);return Number.isNaN(n)?t:n},t.parseFloatOr=function(e,t){if(void 0===e)return t;const n=parseFloat(e);return Number.isNaN(n)?t:n},t.formatDuration=function(e){if(void 0===e)return"";const t=e<0?"-":"",n=Math.trunc(Math.abs(e))||0,r=Math.trunc(n%60)||0,i=Math.trunc(n/60)||0,s=Math.trunc(i%60)||0,o=Math.trunc(i/60)||0;return o>0?`${t}${o}:${l(s,2)}:${l(r,2)}`:`${t}${s}:${l(r,2)}`},t.formatIntPadded=l,t.stringEmptyToNull=function(e){if(e)return e},t.filePathDirectory=c,t.filePathFileName=u,t.filePathFileNameWithoutExtension=h,t.filePathChangeExt=function(e,t){return t&&!t.startsWith(".")&&(t="."+t),d(c(e),h(e)+t)},t.filePathExtension=function(e){const t=u(e),n=t.lastIndexOf(".");return n<0?"":t.slice(n+1)},t.filePathResolveAbsPath=function(e,t){let n;n=e.startsWith("/")?e:t+"/"+e;const r=n.split("/"),i=[];for(const e of r)""!==e&&"."!==e&&(".."===e&&i.length>0?i.pop():i.push(e));return"/"+i.join("/")},t.filePathCombine=d,t.rectContains=function(e,t){return t.x>=e.left&&t.x<=e.right&&t.y>=e.top&&t.y<=e.bottom},t.indexOf=function(e,t){let n=0;for(const r of e){if(t(r))return n;n++}return-1},t.mapAll=function*(e,t){for(const n of e){const e=t(n);if(void 0!==e)for(const t of e)yield t}},t.filterUnique=function*(e,t){const n=new Set;for(const r of e){const e=t?t(r):r;n.has(e)||(n.add(e),yield r)}},t.filterNulllike=function*(e){for(const t of e)null!=t&&(yield t)},t.deleteWhere=function(e,t){for(let n=e.length-1;n>=0;--n)t(e[n])&&e.splice(n,1)},t.range=function*(e,t){let n=0,r=e;void 0!==t&&(n=e,r=n+t);for(let e=n;e<r;++e)yield e},t.appendIfMissing=function*(e,t){let n=!1;for(const r of e)yield r,r===t&&(n=!0);n||(yield t)},t.setAddRange=function(e,t){for(const n of t)e.add(n)},t.arrayFromAsync=async function(e){const t=[];for await(const n of e)t.push(n);return t},t.lazyOr=function(e){let t;return()=>(t||(t=e().catch((e=>{console.error(e)}))),t)},t.lazy=function(e){let t;return()=>(t||(t=e()),t)},t.upcast=function(e){return e},t.nonvoid=function(e){if(void 0!==e)return e},t.findEnumName=function(e,t){return Object.entries(e).find((([e,n])=>n===t))?.at(0)},t.getEnumValues=function(e){return Object.values(e)},t.putKeyValues=function(e,...t){for(const[n,r]of t)e[n]=r;return e},t.visitRec=function(e,t,n){const r=new Set,i=e=>{if(!r.has(e)){r.add(e),n(e);for(const n of t(e))i(n)}};e.forEach(i)},t.merge=p,t.mergeRec=function e(t,n){if("object"!=typeof n||n instanceof Array)throw new Error('merge: "from" must be an ordinary object');return Object.keys(n).forEach((r=>{const i=t[r],s=n[r];null===i||null===s?t[r]=s:"object"==typeof i&&"object"==typeof s?e(i,s):t[r]=s})),t},t.isDeepStrictEqual=function e(t,n){const r=Object.keys(t),i=Object.keys(n);if(r.length!==i.length)return!1;for(const i of r){const r=t[i],s=n[i];if(f(r)&&f(s)){if(!e(r,s))return!1}else if(r!==s)return!1}return!0},t.isMobile=function(){const e=window.matchMedia;return e?.("(hover: none)").matches??!1}},616:(e,t,n)=>{n.r(t),n.d(t,{MobxLitElement:()=>l,MobxReactionUpdate:()=>o});const r=Symbol("LitMobxRenderReaction"),i=Symbol("LitMobxRequestUpdate");var s=n(813);function o(e){return function(e,t){var n,s;return s=class extends e{constructor(){super(...arguments),this[n]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const e=this.constructor.name||this.nodeName;this[r]=new t(`${e}.update()`,this[i]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[r]&&(this[r].dispose(),this[r]=void 0)}update(e){this[r]?this[r].track(super.update.bind(this,e)):super.update(e)}},n=i,s}(e,s.Reaction)}var a=n(624);class l extends(o(a.LitElement)){}},924:(e,t,n)=>{n.r(t),n.d(t,{customElement:()=>r,eventOptions:()=>c,property:()=>o,query:()=>u,queryAll:()=>h,queryAssignedElements:()=>v,queryAssignedNodes:()=>y,queryAsync:()=>d,state:()=>a});const r=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.define(e,t)}}})(e,t),i=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},s=(e,t,n)=>{t.constructor.createProperty(n,e)};function o(e){return(t,n)=>void 0!==n?s(e,t,n):i(e,t)}function a(e){return o({...e,state:!0})}const l=({finisher:e,descriptor:t})=>(n,r)=>{var i;if(void 0===r){const r=null!==(i=n.originalKey)&&void 0!==i?i:n.key,s=null!=t?{kind:"method",placement:"prototype",key:r,descriptor:t(n.key)}:{...n,key:r};return null!=e&&(s.finisher=function(t){e(t,r)}),s}{const i=n.constructor;void 0!==t&&Object.defineProperty(n,r,t(r)),null==e||e(i,r)}};function c(e){return l({finisher:(t,n)=>{Object.assign(t.prototype[n],e)}})}function u(e,t){return l({descriptor:n=>{const r={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;r.get=function(){var n,r;return void 0===this[t]&&(this[t]=null!==(r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==r?r:null),this[t]}}return r}})}function h(e){return l({descriptor:t=>({get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==n?n:[]},enumerable:!0,configurable:!0})})}function d(e){return l({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}var p;const f=null!=(null===(p=window.HTMLSlotElement)||void 0===p?void 0:p.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function v(e){const{slot:t,selector:n}=null!=e?e:{};return l({descriptor:r=>({get(){var r;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(i),o=null!=s?f(s,e):[];return n?o.filter((e=>e.matches(n))):o},enumerable:!0,configurable:!0})})}function y(e,t,n){let r,i=e;return"object"==typeof e?(i=e.slot,r=e):r={flatten:t},n?v({slot:i,flatten:t,selector:n}):l({descriptor:e=>({get(){var e,t;const n="slot"+(i?`[name=${i}]`:":not([name])"),s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(n);return null!==(t=null==s?void 0:s.assignedNodes(r))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}},624:(e,t,n)=>{n.r(t),n.d(t,{CSSResult:()=>a,LitElement:()=>fe,ReactiveElement:()=>k,UpdatingElement:()=>pe,_$LE:()=>ye,_$LH:()=>le,adoptStyles:()=>u,css:()=>c,defaultConverter:()=>g,getCompatibleStyle:()=>h,html:()=>F,isServer:()=>ge,noChange:()=>G,notEqual:()=>m,nothing:()=>K,render:()=>ue,supportsAdoptingStyleSheets:()=>i,svg:()=>z,unsafeCSS:()=>l});const r=window,i=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class a{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new a("string"==typeof e?e:e+"",void 0,s),c=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new a(n,e,s)},u=(e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const n=document.createElement("style"),i=r.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,e.appendChild(n)}))},h=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return l(t)})(e):e;var d;const p=window,f=p.trustedTypes,v=f?f.emptyScript:"",y=p.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},m=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:m},b="finalized";class k extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const r=this._$Ep(n,t);void 0!==r&&(this._$Ev.set(r,n),e.push(r))})),e}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return u(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=_){var r;const i=this.constructor._$Ep(e,n);if(void 0!==i&&!0===n.reflect){const s=(void 0!==(null===(r=n.converter)||void 0===r?void 0:r.toAttribute)?n.converter:g).toAttribute(t,n.type);this._$El=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,i=r._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=r.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:g;this._$El=i,this[i]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var w;k[b]=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},null==y||y({ReactiveElement:k}),(null!==(d=p.reactiveElementVersions)&&void 0!==d?d:p.reactiveElementVersions=[]).push("1.6.3");const x=window,S=x.trustedTypes,O=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,E="?"+P,q=`<${E}>`,M=document,N=()=>M.createComment(""),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,$=e=>T(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),j="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,B=/>/g,I=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,U=/"/g,V=/^(?:script|style|textarea|title)$/i,H=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),F=H(1),z=H(2),G=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),W=new WeakMap,Y=M.createTreeWalker(M,129,null,!1);function X(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(t):t}const Q=(e,t)=>{const n=e.length-1,r=[];let i,s=2===t?"<svg>":"",o=R;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,u=0;for(;u<n.length&&(o.lastIndex=u,l=o.exec(n),null!==l);)u=o.lastIndex,o===R?"!--"===l[1]?o=D:void 0!==l[1]?o=B:void 0!==l[2]?(V.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=I):void 0!==l[3]&&(o=I):o===I?">"===l[0]?(o=null!=i?i:R,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?I:'"'===l[3]?U:L):o===U||o===L?o=I:o===D||o===B?o=R:(o=I,i=void 0);const h=o===I&&e[t+1].startsWith("/>")?" ":"";s+=o===R?n+q:c>=0?(r.push(a),n.slice(0,c)+A+n.slice(c)+P+h):n+P+(-2===c?(r.push(void 0),t):h)}return[X(e,s+(e[n]||"<?>")+(2===t?"</svg>":"")),r]};class J{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0;const o=e.length-1,a=this.parts,[l,c]=Q(e,t);if(this.el=J.createElement(l,n),Y.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=Y.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith(A)||t.startsWith(P)){const n=c[s++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+A).split(P),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?re:"?"===t[1]?se:"@"===t[1]?oe:ne})}else a.push({type:6,index:i})}for(const t of e)r.removeAttribute(t)}if(V.test(r.tagName)){const e=r.textContent.split(P),t=e.length-1;if(t>0){r.textContent=S?S.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],N()),Y.nextNode(),a.push({type:2,index:++i});r.append(e[t],N())}}}else if(8===r.nodeType)if(r.data===E)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(P,e+1));)a.push({type:7,index:i}),e+=P.length-1}i++}}static createElement(e,t){const n=M.createElement("template");return n.innerHTML=e,n}}function Z(e,t,n=e,r){var i,s,o,a;if(t===G)return t;let l=void 0!==r?null===(i=n._$Co)||void 0===i?void 0:i[r]:n._$Cl;const c=C(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,r)),void 0!==r?(null!==(o=(a=n)._$Co)&&void 0!==o?o:a._$Co=[])[r]=l:n._$Cl=l),void 0!==l&&(t=Z(e,l._$AS(e,t.values),l,r)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:M).importNode(n,!0);Y.currentNode=i;let s=Y.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new te(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new ae(s,this,e)),this._$AV.push(t),l=r[++a]}o!==(null==l?void 0:l.index)&&(s=Y.nextNode(),o++)}return Y.currentNode=M,i}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class te{constructor(e,t,n,r){var i;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),C(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):$(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==K&&C(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=J.createElement(X(r.h,r.h[0]),this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(n);else{const e=new ee(i,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new J(e)),t}T(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new te(this.k(N()),this.k(N()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class ne{constructor(e,t,n,r,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const i=this.strings;let s=!1;if(void 0===i)e=Z(this,e,t,0),s=!C(e)||e!==this._$AH&&e!==G,s&&(this._$AH=e);else{const r=e;let o,a;for(e=i[0],o=0;o<i.length-1;o++)a=Z(this,r[n+o],t,o),a===G&&(a=this._$AH[o]),s||(s=!C(a)||a!==this._$AH[o]),a===K?e=K:e!==K&&(e+=(null!=a?a:"")+i[o+1]),this._$AH[o]=a}s&&!r&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class re extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}const ie=S?S.emptyScript:"";class se extends ne{constructor(){super(...arguments),this.type=4}j(e){e&&e!==K?this.element.setAttribute(this.name,ie):this.element.removeAttribute(this.name)}}class oe extends ne{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Z(this,e,t,0))&&void 0!==n?n:K)===G)return;const r=this._$AH,i=e===K&&r!==K||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==K&&(r===K||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const le={O:A,P,A:E,C:1,M:Q,L:ee,R:$,D:Z,I:te,V:ne,H:se,N:oe,U:re,F:ae},ce=x.litHtmlPolyfillSupport;null==ce||ce(J,te),(null!==(w=x.litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.8.0");const ue=(e,t,n)=>{var r,i;const s=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let o=s._$litPart$;if(void 0===o){const e=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;s._$litPart$=o=new te(t.insertBefore(N(),e),e,void 0,null!=n?n:{})}return o._$AI(e),o};var he,de;const pe=k;class fe extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return G}}fe.finalized=!0,fe._$litElement$=!0,null===(he=globalThis.litElementHydrateSupport)||void 0===he||he.call(globalThis,{LitElement:fe});const ve=globalThis.litElementPolyfillSupport;null==ve||ve({LitElement:fe});const ye={_$AK:(e,t,n)=>{e._$AK(t,n)},_$AL:e=>e._$AL};(null!==(de=globalThis.litElementVersions)&&void 0!==de?de:globalThis.litElementVersions=[]).push("3.3.3");const ge=!1}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r=n(720);hyraxclub=r})();
//# sourceMappingURL=bundle.js.map
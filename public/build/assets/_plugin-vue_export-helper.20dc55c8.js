var oa=Object.defineProperty;var sa=(t,e,o)=>e in t?oa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var R=(t,e,o)=>(sa(t,typeof e!="symbol"?e+"":e,o),o);import{d as tt,m as $t,o as pe,a as ur,w as aa,i as Re,k as ca,T as ua,b as Pe,A as la,B as ha,n as lr,J as xn,C as fa,t as Rn,D as da,F as pa,r as ga,E as va,G as ya,g as ma,x as ba}from"./app.e447a39f.js";const _a={key:0,class:"loader"},wa=Pe("div",{class:"elemento"},null,-1),Sa=[wa],Rh=tt({__name:"Loader",setup(t){const e=$t(!1);function o(){e.value=!0}function a(){e.value=!1}return window.loader={show:o,hide:a,active:e},(c,h)=>(pe(),ur(ua,{name:"loader",duration:"300"},{default:aa(()=>[e.value?(pe(),Re("div",_a,Sa)):ca("",!0)]),_:1}))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=function(t){const e=[];let o=0;for(let a=0;a<t.length;a++){let c=t.charCodeAt(a);c<128?e[o++]=c:c<2048?(e[o++]=c>>6|192,e[o++]=c&63|128):(c&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(t.charCodeAt(++a)&1023),e[o++]=c>>18|240,e[o++]=c>>12&63|128,e[o++]=c>>6&63|128,e[o++]=c&63|128):(e[o++]=c>>12|224,e[o++]=c>>6&63|128,e[o++]=c&63|128)}return e},ka=function(t){const e=[];let o=0,a=0;for(;o<t.length;){const c=t[o++];if(c<128)e[a++]=String.fromCharCode(c);else if(c>191&&c<224){const h=t[o++];e[a++]=String.fromCharCode((c&31)<<6|h&63)}else if(c>239&&c<365){const h=t[o++],f=t[o++],p=t[o++],g=((c&7)<<18|(h&63)<<12|(f&63)<<6|p&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const h=t[o++],f=t[o++];e[a++]=String.fromCharCode((c&15)<<12|(h&63)<<6|f&63)}}return e.join("")},fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<t.length;c+=3){const h=t[c],f=c+1<t.length,p=f?t[c+1]:0,g=c+2<t.length,w=g?t[c+2]:0,_=h>>2,E=(h&3)<<4|p>>4;let T=(p&15)<<2|w>>6,k=w&63;g||(k=64,f||(T=64)),a.push(o[_],o[E],o[T],o[k])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ka(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const o=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<t.length;){const h=o[t.charAt(c++)],p=c<t.length?o[t.charAt(c)]:0;++c;const w=c<t.length?o[t.charAt(c)]:64;++c;const E=c<t.length?o[t.charAt(c)]:64;if(++c,h==null||p==null||w==null||E==null)throw new Ta;const T=h<<2|p>>4;if(a.push(T),w!==64){const k=p<<4&240|w>>2;if(a.push(k),E!==64){const O=w<<6&192|E;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ta extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ca=function(t){const e=hr(t);return fr.encodeByteArray(e,!0)},dr=function(t){return Ca(t).replace(/\./g,"")},Ia=function(t){try{return fr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=()=>Ea().__FIREBASE_DEFAULTS__,Pa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Oa=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ia(t[1]);return e&&JSON.parse(e)},Da=()=>{try{return Aa()||Pa()||Oa()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xa=()=>{var t;return(t=Da())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,o)=>{this.resolve=e,this.reject=o})}wrapCallback(e){return(o,a)=>{o?this.reject(o):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(o):e(o,a))}}}function Na(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ut(){try{return typeof indexedDB=="object"}catch{return!1}}function qt(){return new Promise((t,e)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),o||self.indexedDB.deleteDatabase(a),t(!0)},c.onupgradeneeded=()=>{o=!1},c.onerror=()=>{var h;e(((h=c.error)===null||h===void 0?void 0:h.message)||"")}}catch(o){e(o)}})}function pr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="FirebaseError";class be extends Error{constructor(e,o,a){super(o),this.code=e,this.customData=a,this.name=La,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Me.prototype.create)}}class Me{constructor(e,o,a){this.service=e,this.serviceName=o,this.errors=a}create(e,...o){const a=o[0]||{},c=`${this.service}/${e}`,h=this.errors[e],f=h?ja(h,a):"Error",p=`${this.serviceName}: ${f} (${c}).`;return new be(c,p,a)}}function ja(t,e){return t.replace(Ma,(o,a)=>{const c=e[a];return c!=null?String(c):`<${a}?>`})}const Ma=/\{\$([^}]+)}/g;function Ge(t,e){if(t===e)return!0;const o=Object.keys(t),a=Object.keys(e);for(const c of o){if(!a.includes(c))return!1;const h=t[c],f=e[c];if(Nn(h)&&Nn(f)){if(!Ge(h,f))return!1}else if(h!==f)return!1}for(const c of a)if(!o.includes(c))return!1;return!0}function Nn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=1e3,Fa=2,Ha=4*60*60*1e3,$a=.5;function Ln(t,e=Ba,o=Fa){const a=e*Math.pow(o,t),c=Math.round($a*a*(Math.random()-.5)*2);return Math.min(Ha,a+c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Z{constructor(e,o,a){this.name=e,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,o){this.name=e,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const o=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(o)){const a=new Ra;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:o});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(e){var o;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),c=(o=e==null?void 0:e.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(c)return null;throw h}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(za(e))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);try{const h=this.getOrInitializeService({instanceIdentifier:c});a.resolve(h)}catch{}}}}clearInstance(e=fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...e.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fe){return this.instances.has(e)}getOptions(e=fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:o={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[h,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&f.resolve(c)}return c}onInit(e,o){var a;const c=this.normalizeInstanceIdentifier(o),h=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;h.add(e),this.onInitCallbacks.set(c,h);const f=this.instances.get(c);return f&&e(f,c),()=>{h.delete(e)}}invokeOnInitCallbacks(e,o){const a=this.onInitCallbacks.get(o);if(!!a)for(const c of a)try{c(e,o)}catch{}}getOrInitializeService({instanceIdentifier:e,options:o={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:qa(e),options:o}),this.instances.set(e,a),this.instancesOptions.set(e,o),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=fe){return this.component?this.component.multipleInstances?e:fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qa(t){return t===fe?void 0:t}function za(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const o=this.getProvider(e.name);if(o.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);o.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const o=new Ua(e,this);return this.providers.set(e,o),o}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));const Wa={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Ka=D.INFO,Ga={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ja=(t,e,...o)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),c=Ga[e];if(c)console[c](`[${a}]  ${t.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=Ka,this._logHandler=Ja,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Xa=(t,e)=>e.some(o=>t instanceof o);let jn,Mn;function Ya(){return jn||(jn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qa(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vr=new WeakMap,xt=new WeakMap,yr=new WeakMap,_t=new WeakMap,zt=new WeakMap;function Za(t){const e=new Promise((o,a)=>{const c=()=>{t.removeEventListener("success",h),t.removeEventListener("error",f)},h=()=>{o(oe(t.result)),c()},f=()=>{a(t.error),c()};t.addEventListener("success",h),t.addEventListener("error",f)});return e.then(o=>{o instanceof IDBCursor&&vr.set(o,t)}).catch(()=>{}),zt.set(e,t),e}function ec(t){if(xt.has(t))return;const e=new Promise((o,a)=>{const c=()=>{t.removeEventListener("complete",h),t.removeEventListener("error",f),t.removeEventListener("abort",f)},h=()=>{o(),c()},f=()=>{a(t.error||new DOMException("AbortError","AbortError")),c()};t.addEventListener("complete",h),t.addEventListener("error",f),t.addEventListener("abort",f)});xt.set(t,e)}let Rt={get(t,e,o){if(t instanceof IDBTransaction){if(e==="done")return xt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yr.get(t);if(e==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return oe(t[e])},set(t,e,o){return t[e]=o,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tc(t){Rt=t(Rt)}function nc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...o){const a=t.call(wt(this),e,...o);return yr.set(a,e.sort?e.sort():[e]),oe(a)}:Qa().includes(t)?function(...e){return t.apply(wt(this),e),oe(vr.get(this))}:function(...e){return oe(t.apply(wt(this),e))}}function rc(t){return typeof t=="function"?nc(t):(t instanceof IDBTransaction&&ec(t),Xa(t,Ya())?new Proxy(t,Rt):t)}function oe(t){if(t instanceof IDBRequest)return Za(t);if(_t.has(t))return _t.get(t);const e=rc(t);return e!==t&&(_t.set(t,e),zt.set(e,t)),e}const wt=t=>zt.get(t);function rt(t,e,{blocked:o,upgrade:a,blocking:c,terminated:h}={}){const f=indexedDB.open(t,e),p=oe(f);return a&&f.addEventListener("upgradeneeded",g=>{a(oe(f.result),g.oldVersion,g.newVersion,oe(f.transaction))}),o&&f.addEventListener("blocked",()=>o()),p.then(g=>{h&&g.addEventListener("close",()=>h()),c&&g.addEventListener("versionchange",()=>c())}).catch(()=>{}),p}function St(t,{blocked:e}={}){const o=indexedDB.deleteDatabase(t);return e&&o.addEventListener("blocked",()=>e()),oe(o).then(()=>{})}const ic=["get","getKey","getAll","getAllKeys","count"],oc=["put","add","delete","clear"],kt=new Map;function Bn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kt.get(e))return kt.get(e);const o=e.replace(/FromIndex$/,""),a=e!==o,c=oc.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(c||ic.includes(o)))return;const h=async function(f,...p){const g=this.transaction(f,c?"readwrite":"readonly");let w=g.store;return a&&(w=w.index(p.shift())),(await Promise.all([w[o](...p),c&&g.done]))[0]};return kt.set(e,h),h}tc(t=>({...t,get:(e,o,a)=>Bn(e,o)||t.get(e,o,a),has:(e,o)=>!!Bn(e,o)||t.has(e,o)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(ac(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function ac(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nt="@firebase/app",Fn="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new gr("@firebase/app"),cc="@firebase/app-compat",uc="@firebase/analytics-compat",lc="@firebase/analytics",hc="@firebase/app-check-compat",fc="@firebase/app-check",dc="@firebase/auth",pc="@firebase/auth-compat",gc="@firebase/database",vc="@firebase/database-compat",yc="@firebase/functions",mc="@firebase/functions-compat",bc="@firebase/installations",_c="@firebase/installations-compat",wc="@firebase/messaging",Sc="@firebase/messaging-compat",kc="@firebase/performance",Tc="@firebase/performance-compat",Cc="@firebase/remote-config",Ic="@firebase/remote-config-compat",Ec="@firebase/storage",Ac="@firebase/storage-compat",Pc="@firebase/firestore",Oc="@firebase/firestore-compat",Dc="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]",xc={[Nt]:"fire-core",[cc]:"fire-core-compat",[lc]:"fire-analytics",[uc]:"fire-analytics-compat",[fc]:"fire-app-check",[hc]:"fire-app-check-compat",[dc]:"fire-auth",[pc]:"fire-auth-compat",[gc]:"fire-rtdb",[vc]:"fire-rtdb-compat",[yc]:"fire-fn",[mc]:"fire-fn-compat",[bc]:"fire-iid",[_c]:"fire-iid-compat",[wc]:"fire-fcm",[Sc]:"fire-fcm-compat",[kc]:"fire-perf",[Tc]:"fire-perf-compat",[Cc]:"fire-rc",[Ic]:"fire-rc-compat",[Ec]:"fire-gcs",[Ac]:"fire-gcs-compat",[Pc]:"fire-fst",[Oc]:"fire-fst-compat","fire-js":"fire-js",[Dc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Map,jt=new Map;function Rc(t,e){try{t.container.addComponent(e)}catch(o){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,o)}}function se(t){const e=t.name;if(jt.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;jt.set(e,t);for(const o of Je.values())Rc(o,t);return!0}function Be(t,e){const o=t.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ae=new Me("app","Firebase",Nc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,o,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}function mr(t,e={}){let o=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Lt,automaticDataCollectionEnabled:!1},e),c=a.name;if(typeof c!="string"||!c)throw ae.create("bad-app-name",{appName:String(c)});if(o||(o=xa()),!o)throw ae.create("no-options");const h=Je.get(c);if(h){if(Ge(o,h.options)&&Ge(a,h.config))return h;throw ae.create("duplicate-app",{appName:c})}const f=new Va(c);for(const g of jt.values())f.addComponent(g);const p=new Lc(o,a,f);return Je.set(c,p),p}function br(t=Lt){const e=Je.get(t);if(!e&&t===Lt)return mr();if(!e)throw ae.create("no-app",{appName:t});return e}function Q(t,e,o){var a;let c=(a=xc[t])!==null&&a!==void 0?a:t;o&&(c+=`-${o}`);const h=c.match(/\s|\//),f=e.match(/\s|\//);if(h||f){const p=[`Unable to register library "${c}" with version "${e}":`];h&&p.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&f&&p.push("and"),f&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(p.join(" "));return}se(new Z(`${c}-version`,()=>({library:c,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="firebase-heartbeat-database",Mc=1,Ne="firebase-heartbeat-store";let Tt=null;function _r(){return Tt||(Tt=rt(jc,Mc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ne)}}}).catch(t=>{throw ae.create("idb-open",{originalErrorMessage:t.message})})),Tt}async function Bc(t){try{return(await _r()).transaction(Ne).objectStore(Ne).get(wr(t))}catch(e){if(e instanceof be)ge.warn(e.message);else{const o=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(o.message)}}}async function Hn(t,e){try{const a=(await _r()).transaction(Ne,"readwrite");return await a.objectStore(Ne).put(e,wr(t)),a.done}catch(o){if(o instanceof be)ge.warn(o.message);else{const a=ae.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});ge.warn(a.message)}}}function wr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=1024,Hc=30*24*60*60*1e3;class $c{constructor(e){this.container=e,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new qc(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=$n();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=Hc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$n(),{heartbeatsToSend:o,unsentEntries:a}=Uc(this._heartbeatsCache.heartbeats),c=dr(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function $n(){return new Date().toISOString().substring(0,10)}function Uc(t,e=Fc){const o=[];let a=t.slice();for(const c of t){const h=o.find(f=>f.agent===c.agent);if(h){if(h.dates.push(c.date),Un(o)>e){h.dates.pop();break}}else if(o.push({agent:c.agent,dates:[c.date]}),Un(o)>e){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class qc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ut()?qt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(o=e.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(o=e.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...e.heartbeats]})}else return}}function Un(t){return dr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){se(new Z("platform-logger",e=>new sc(e),"PRIVATE")),se(new Z("heartbeat",e=>new $c(e),"PRIVATE")),Q(Nt,Fn,t),Q(Nt,Fn,"esm2017"),Q("fire-js","")}zc("");var Vc="firebase",Wc="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Q(Vc,Wc,"app");const Sr="@firebase/installations",Vt="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=1e4,Tr=`w:${Vt}`,Cr="FIS_v2",Kc="https://firebaseinstallations.googleapis.com/v1",Gc=60*60*1e3,Jc="installations",Xc="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ve=new Me(Jc,Xc,Yc);function Ir(t){return t instanceof be&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er({projectId:t}){return`${Kc}/projects/${t}/installations`}function Ar(t){return{token:t.token,requestStatus:2,expiresIn:Zc(t.expiresIn),creationTime:Date.now()}}async function Pr(t,e){const a=(await e.json()).error;return ve.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Or({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Qc(t,{refreshToken:e}){const o=Or(t);return o.append("Authorization",eu(e)),o}async function Dr(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Zc(t){return Number(t.replace("s","000"))}function eu(t){return`${Cr} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu({appConfig:t,heartbeatServiceProvider:e},{fid:o}){const a=Er(t),c=Or(t),h=e.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={fid:o,authVersion:Cr,appId:t.appId,sdkVersion:Tr},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Dr(()=>fetch(a,p));if(g.ok){const w=await g.json();return{fid:w.fid||o,registrationStatus:2,refreshToken:w.refreshToken,authToken:Ar(w.authToken)}}else throw await Pr("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=/^[cdef][\w-]{21}$/,Mt="";function iu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const o=ou(t);return ru.test(o)?o:Mt}catch{return Mt}}function ou(t){return nu(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Map;function Nr(t,e){const o=it(t);Lr(o,e),su(o,e)}function Lr(t,e){const o=Rr.get(t);if(!!o)for(const a of o)a(e)}function su(t,e){const o=au();o&&o.postMessage({key:t,fid:e}),cu()}let de=null;function au(){return!de&&"BroadcastChannel"in self&&(de=new BroadcastChannel("[Firebase] FID Change"),de.onmessage=t=>{Lr(t.data.key,t.data.fid)}),de}function cu(){Rr.size===0&&de&&(de.close(),de=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="firebase-installations-database",lu=1,ye="firebase-installations-store";let Ct=null;function Wt(){return Ct||(Ct=rt(uu,lu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ye)}}})),Ct}async function Xe(t,e){const o=it(t),c=(await Wt()).transaction(ye,"readwrite"),h=c.objectStore(ye),f=await h.get(o);return await h.put(e,o),await c.done,(!f||f.fid!==e.fid)&&Nr(t,e.fid),e}async function jr(t){const e=it(t),a=(await Wt()).transaction(ye,"readwrite");await a.objectStore(ye).delete(e),await a.done}async function ot(t,e){const o=it(t),c=(await Wt()).transaction(ye,"readwrite"),h=c.objectStore(ye),f=await h.get(o),p=e(f);return p===void 0?await h.delete(o):await h.put(p,o),await c.done,p&&(!f||f.fid!==p.fid)&&Nr(t,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t){let e;const o=await ot(t.appConfig,a=>{const c=hu(a),h=fu(t,c);return e=h.registrationPromise,h.installationEntry});return o.fid===Mt?{installationEntry:await e}:{installationEntry:o,registrationPromise:e}}function hu(t){const e=t||{fid:iu(),registrationStatus:0};return Mr(e)}function fu(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ve.create("app-offline"));return{installationEntry:e,registrationPromise:c}}const o={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=du(t,o);return{installationEntry:o,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pu(t)}:{installationEntry:e}}async function du(t,e){try{const o=await tu(t,e);return Xe(t.appConfig,o)}catch(o){throw Ir(o)&&o.customData.serverCode===409?await jr(t.appConfig):await Xe(t.appConfig,{fid:e.fid,registrationStatus:0}),o}}async function pu(t){let e=await qn(t.appConfig);for(;e.registrationStatus===1;)await xr(100),e=await qn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:o,registrationPromise:a}=await Kt(t);return a||o}return e}function qn(t){return ot(t,e=>{if(!e)throw ve.create("installation-not-found");return Mr(e)})}function Mr(t){return gu(t)?{fid:t.fid,registrationStatus:0}:t}function gu(t){return t.registrationStatus===1&&t.registrationTime+kr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu({appConfig:t,heartbeatServiceProvider:e},o){const a=yu(t,o),c=Qc(t,o),h=e.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={installation:{sdkVersion:Tr,appId:t.appId}},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Dr(()=>fetch(a,p));if(g.ok){const w=await g.json();return Ar(w)}else throw await Pr("Generate Auth Token",g)}function yu(t,{fid:e}){return`${Er(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e=!1){let o;const a=await ot(t.appConfig,h=>{if(!Br(h))throw ve.create("not-registered");const f=h.authToken;if(!e&&_u(f))return h;if(f.requestStatus===1)return o=mu(t,e),h;{if(!navigator.onLine)throw ve.create("app-offline");const p=Su(h);return o=bu(t,p),p}});return o?await o:a.authToken}async function mu(t,e){let o=await zn(t.appConfig);for(;o.authToken.requestStatus===1;)await xr(100),o=await zn(t.appConfig);const a=o.authToken;return a.requestStatus===0?Gt(t,e):a}function zn(t){return ot(t,e=>{if(!Br(e))throw ve.create("not-registered");const o=e.authToken;return ku(o)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bu(t,e){try{const o=await vu(t,e),a=Object.assign(Object.assign({},e),{authToken:o});return await Xe(t.appConfig,a),o}catch(o){if(Ir(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await jr(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xe(t.appConfig,a)}throw o}}function Br(t){return t!==void 0&&t.registrationStatus===2}function _u(t){return t.requestStatus===2&&!wu(t)}function wu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gc}function Su(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ku(t){return t.requestStatus===1&&t.requestTime+kr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(t){const e=t,{installationEntry:o,registrationPromise:a}=await Kt(e);return a?a.catch(console.error):Gt(e).catch(console.error),o.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(t,e=!1){const o=t;return await Iu(o),(await Gt(o,e)).token}async function Iu(t){const{registrationPromise:e}=await Kt(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){if(!t||!t.options)throw It("App Configuration");if(!t.name)throw It("App Name");const e=["projectId","apiKey","appId"];for(const o of e)if(!t.options[o])throw It(o);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function It(t){return ve.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="installations",Au="installations-internal",Pu=t=>{const e=t.getProvider("app").getImmediate(),o=Eu(e),a=Be(e,"heartbeat");return{app:e,appConfig:o,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Ou=t=>{const e=t.getProvider("app").getImmediate(),o=Be(e,Fr).getImmediate();return{getId:()=>Tu(o),getToken:c=>Cu(o,c)}};function Du(){se(new Z(Fr,Pu,"PUBLIC")),se(new Z(Au,Ou,"PRIVATE"))}Du();Q(Sr,Vt);Q(Sr,Vt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="analytics",xu="firebase_id",Ru="origin",Nu=60*1e3,Lu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=new gr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){return Promise.all(t.map(e=>e.catch(o=>o)))}function ju(t,e){const o=document.createElement("script");o.src=`${Hr}?l=${t}&id=${e}`,o.async=!0,document.head.appendChild(o)}function Mu(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Bu(t,e,o,a,c,h){const f=a[c];try{if(f)await e[f];else{const g=(await $r(o)).find(w=>w.measurementId===c);g&&await e[g.appId]}}catch(p){q.error(p)}t("config",c,h)}async function Fu(t,e,o,a,c){try{let h=[];if(c&&c.send_to){let f=c.send_to;Array.isArray(f)||(f=[f]);const p=await $r(o);for(const g of f){const w=p.find(E=>E.measurementId===g),_=w&&e[w.appId];if(_)h.push(_);else{h=[];break}}}h.length===0&&(h=Object.values(e)),await Promise.all(h),t("event",a,c||{})}catch(h){q.error(h)}}function Hu(t,e,o,a){async function c(h,f,p){try{h==="event"?await Fu(t,e,o,f,p):h==="config"?await Bu(t,e,o,a,f,p):h==="consent"?t("consent","update",p):t("set",f)}catch(g){q.error(g)}}return c}function $u(t,e,o,a,c){let h=function(...f){window[a].push(arguments)};return window[c]&&typeof window[c]=="function"&&(h=window[c]),window[c]=Hu(h,t,e,o),{gtagCore:h,wrappedGtag:window[c]}}function Uu(t){const e=window.document.getElementsByTagName("script");for(const o of Object.values(e))if(o.src&&o.src.includes(Hr)&&o.src.includes(t))return o;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},W=new Me("analytics","Analytics",qu);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=30,Vu=1e3;class Wu{constructor(e={},o=Vu){this.throttleMetadata=e,this.intervalMillis=o}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,o){this.throttleMetadata[e]=o}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ur=new Wu;function Ku(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gu(t){var e;const{appId:o,apiKey:a}=t,c={method:"GET",headers:Ku(a)},h=Lu.replace("{app-id}",o),f=await fetch(h,c);if(f.status!==200&&f.status!==304){let p="";try{const g=await f.json();!((e=g.error)===null||e===void 0)&&e.message&&(p=g.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function Ju(t,e=Ur,o){const{appId:a,apiKey:c,measurementId:h}=t.options;if(!a)throw W.create("no-app-id");if(!c){if(h)return{measurementId:h,appId:a};throw W.create("no-api-key")}const f=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Qu;return setTimeout(async()=>{p.abort()},o!==void 0?o:Nu),qr({appId:a,apiKey:c,measurementId:h},f,p,e)}async function qr(t,{throttleEndTimeMillis:e,backoffCount:o},a,c=Ur){var h;const{appId:f,measurementId:p}=t;try{await Xu(a,e)}catch(g){if(p)return q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:p};throw g}try{const g=await Gu(t);return c.deleteThrottleMetadata(f),g}catch(g){const w=g;if(!Yu(w)){if(c.deleteThrottleMetadata(f),p)return q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:f,measurementId:p};throw g}const _=Number((h=w==null?void 0:w.customData)===null||h===void 0?void 0:h.httpStatus)===503?Ln(o,c.intervalMillis,zu):Ln(o,c.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:o+1};return c.setThrottleMetadata(f,E),q.debug(`Calling attemptFetch again in ${_} millis`),qr(t,E,a,c)}}function Xu(t,e){return new Promise((o,a)=>{const c=Math.max(e-Date.now(),0),h=setTimeout(o,c);t.addEventListener(()=>{clearTimeout(h),a(W.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Yu(t){if(!(t instanceof be)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qu{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zu(t,e,o,a,c){if(c&&c.global){t("event",o,a);return}else{const h=await e,f=Object.assign(Object.assign({},a),{send_to:h});t("event",o,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(){if(Ut())try{await qt()}catch(t){return q.warn(W.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return q.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tl(t,e,o,a,c,h,f){var p;const g=Ju(t);g.then(k=>{o[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&q.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>q.error(k)),e.push(g);const w=el().then(k=>{if(k)return a.getId()}),[_,E]=await Promise.all([g,w]);Uu(h)||ju(h,_.measurementId),c("js",new Date);const T=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return T[Ru]="firebase",T.update=!0,E!=null&&(T[xu]=E),c("config",_.measurementId,T),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.app=e}_delete(){return delete Oe[this.app.options.appId],Promise.resolve()}}let Oe={},Vn=[];const Wn={};let Et="dataLayer",rl="gtag",Kn,zr,Gn=!1;function il(){const t=[];if(Na()&&t.push("This is a browser extension environment."),pr()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,c)=>`(${c+1}) ${a}`).join(" "),o=W.create("invalid-analytics-context",{errorInfo:e});q.warn(o.message)}}function ol(t,e,o){il();const a=t.options.appId;if(!a)throw W.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Oe[a]!=null)throw W.create("already-exists",{id:a});if(!Gn){Mu(Et);const{wrappedGtag:h,gtagCore:f}=$u(Oe,Vn,Wn,Et,rl);zr=h,Kn=f,Gn=!0}return Oe[a]=tl(t,Vn,Wn,e,Kn,Et,o),new nl(t)}function sl(t=br()){t=nt(t);const e=Be(t,Ye);return e.isInitialized()?e.getImmediate():al(t)}function al(t,e={}){const o=Be(t,Ye);if(o.isInitialized()){const c=o.getImmediate();if(Ge(e,o.getOptions()))return c;throw W.create("already-initialized")}return o.initialize({options:e})}function cl(t,e,o,a){t=nt(t),Zu(zr,Oe[t.app.options.appId],e,o,a).catch(c=>q.error(c))}const Jn="@firebase/analytics",Xn="0.9.4";function ul(){se(new Z(Ye,(e,{options:o})=>{const a=e.getProvider("app").getImmediate(),c=e.getProvider("installations-internal").getImmediate();return ol(a,c,o)},"PUBLIC")),se(new Z("analytics-internal",t,"PRIVATE")),Q(Jn,Xn),Q(Jn,Xn,"esm2017");function t(e){try{const o=e.getProvider(Ye).getImmediate();return{logEvent:(a,c,h)=>cl(o,a,c,h)}}catch(o){throw W.create("interop-component-reg-failed",{reason:o})}}}ul();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="/firebase-messaging-sw.js",hl="/firebase-cloud-messaging-push-scope",Vr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",fl="https://fcmregistrations.googleapis.com/v1",Wr="google.c.a.c_id",dl="google.c.a.c_l",pl="google.c.a.ts",gl="google.c.a.e";var Yn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Yn||(Yn={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Le;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Le||(Le={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function vl(t){const e="=".repeat((4-t.length%4)%4),o=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(o),c=new Uint8Array(a.length);for(let h=0;h<a.length;++h)c[h]=a.charCodeAt(h);return c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="fcm_token_details_db",yl=5,Qn="fcm_token_object_Store";async function ml(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(At))return null;let e=null;return(await rt(At,yl,{upgrade:async(a,c,h,f)=>{var p;if(c<2||!a.objectStoreNames.contains(Qn))return;const g=f.objectStore(Qn),w=await g.index("fcmSenderId").get(t);if(await g.clear(),!!w){if(c===2){const _=w;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(p=_.createTime)!==null&&p!==void 0?p:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:ie(_.vapidKey)}}}else if(c===3){const _=w;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}else if(c===4){const _=w;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}}}})).close(),await St(At),await St("fcm_vapid_details_db"),await St("undefined"),bl(e)?e:null}function bl(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebase-messaging-database",wl=1,me="firebase-messaging-store";let Pt=null;function Jt(){return Pt||(Pt=rt(_l,wl,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(me)}}})),Pt}async function Kr(t){const e=Yt(t),a=await(await Jt()).transaction(me).objectStore(me).get(e);if(a)return a;{const c=await ml(t.appConfig.senderId);if(c)return await Xt(t,c),c}}async function Xt(t,e){const o=Yt(t),c=(await Jt()).transaction(me,"readwrite");return await c.objectStore(me).put(e,o),await c.done,e}async function Sl(t){const e=Yt(t),a=(await Jt()).transaction(me,"readwrite");await a.objectStore(me).delete(e),await a.done}function Yt({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$=new Me("messaging","Messaging",kl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t,e){const o=await Zt(t),a=Jr(e),c={method:"POST",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(Qt(t.appConfig),c)).json()}catch(f){throw $.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw $.create("token-subscribe-failed",{errorInfo:f})}if(!h.token)throw $.create("token-subscribe-no-token");return h.token}async function Cl(t,e){const o=await Zt(t),a=Jr(e.subscriptionOptions),c={method:"PATCH",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(`${Qt(t.appConfig)}/${e.token}`,c)).json()}catch(f){throw $.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw $.create("token-update-failed",{errorInfo:f})}if(!h.token)throw $.create("token-update-no-token");return h.token}async function Gr(t,e){const a={method:"DELETE",headers:await Zt(t)};try{const h=await(await fetch(`${Qt(t.appConfig)}/${e}`,a)).json();if(h.error){const f=h.error.message;throw $.create("token-unsubscribe-failed",{errorInfo:f})}}catch(c){throw $.create("token-unsubscribe-failed",{errorInfo:c==null?void 0:c.toString()})}}function Qt({projectId:t}){return`${fl}/projects/${t}/registrations`}async function Zt({appConfig:t,installations:e}){const o=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${o}`})}function Jr({p256dh:t,auth:e,endpoint:o,vapidKey:a}){const c={web:{endpoint:o,auth:e,p256dh:t}};return a!==Vr&&(c.web.applicationPubKey=a),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=7*24*60*60*1e3;async function El(t){const e=await Ol(t.swRegistration,t.vapidKey),o={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ie(e.getKey("auth")),p256dh:ie(e.getKey("p256dh"))},a=await Kr(t.firebaseDependencies);if(a){if(Dl(a.subscriptionOptions,o))return Date.now()>=a.createTime+Il?Pl(t,{token:a.token,createTime:Date.now(),subscriptionOptions:o}):a.token;try{await Gr(t.firebaseDependencies,a.token)}catch(c){console.warn(c)}return Zn(t.firebaseDependencies,o)}else return Zn(t.firebaseDependencies,o)}async function Al(t){const e=await Kr(t.firebaseDependencies);e&&(await Gr(t.firebaseDependencies,e.token),await Sl(t.firebaseDependencies));const o=await t.swRegistration.pushManager.getSubscription();return o?o.unsubscribe():!0}async function Pl(t,e){try{const o=await Cl(t.firebaseDependencies,e),a=Object.assign(Object.assign({},e),{token:o,createTime:Date.now()});return await Xt(t.firebaseDependencies,a),o}catch(o){throw await Al(t),o}}async function Zn(t,e){const a={token:await Tl(t,e),createTime:Date.now(),subscriptionOptions:e};return await Xt(t,a),a.token}async function Ol(t,e){const o=await t.pushManager.getSubscription();return o||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:vl(e)})}function Dl(t,e){const o=e.vapidKey===t.vapidKey,a=e.endpoint===t.endpoint,c=e.auth===t.auth,h=e.p256dh===t.p256dh;return o&&a&&c&&h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return xl(e,t),Rl(e,t),Nl(e,t),e}function xl(t,e){if(!e.notification)return;t.notification={};const o=e.notification.title;o&&(t.notification.title=o);const a=e.notification.body;a&&(t.notification.body=a);const c=e.notification.image;c&&(t.notification.image=c);const h=e.notification.icon;h&&(t.notification.icon=h)}function Rl(t,e){!e.data||(t.data=e.data)}function Nl(t,e){var o,a,c,h,f;if(!e.fcmOptions&&!(!((o=e.notification)===null||o===void 0)&&o.click_action))return;t.fcmOptions={};const p=(c=(a=e.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&c!==void 0?c:(h=e.notification)===null||h===void 0?void 0:h.click_action;p&&(t.fcmOptions.link=p);const g=(f=e.fcmOptions)===null||f===void 0?void 0:f.analytics_label;g&&(t.fcmOptions.analyticsLabel=g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){return typeof t=="object"&&!!t&&Wr in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Xr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Xr(t,e){const o=[];for(let a=0;a<t.length;a++)o.push(t.charAt(a)),a<e.length&&o.push(e.charAt(a));return o.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){if(!t||!t.options)throw Ot("App Configuration Object");if(!t.name)throw Ot("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:o}=t;for(const a of e)if(!o[a])throw Ot(a);return{appName:t.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function Ot(t){return $.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,o,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const c=jl(e);this.firebaseDependencies={app:e,appConfig:c,installations:o,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){try{t.swRegistration=await navigator.serviceWorker.register(ll,{scope:hl}),t.swRegistration.update().catch(()=>{})}catch(e){throw $.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t,e){if(!e&&!t.swRegistration&&await Bl(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Vr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){if(!navigator)throw $.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $.create("permission-blocked");return await Hl(t,e==null?void 0:e.vapidKey),await Fl(t,e==null?void 0:e.serviceWorkerRegistration),El(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e,o){const a=Ul(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:o[Wr],message_name:o[dl],message_time:o[pl],message_device_time:Math.floor(Date.now()/1e3)})}function Ul(t){switch(t){case Le.NOTIFICATION_CLICKED:return"notification_open";case Le.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t,e){const o=e.data;if(!o.isFirebaseMessaging)return;t.onMessageHandler&&o.messageType===Le.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(er(o)):t.onMessageHandler.next(er(o)));const a=o.data;Ll(a)&&a[gl]==="1"&&await $l(t,o.messageType,a)}const tr="@firebase/messaging",nr="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=t=>{const e=new Ml(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",o=>ql(e,o)),e},Vl=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:a=>Yr(e,a)}};function Wl(){se(new Z("messaging",zl,"PUBLIC")),se(new Z("messaging-internal",Vl,"PRIVATE")),Q(tr,nr),Q(tr,nr,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(){try{await qt()}catch{return!1}return typeof window<"u"&&Ut()&&pr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t=br()){return Kl().then(e=>{if(!e)throw $.create("unsupported-browser")},e=>{throw $.create("indexed-db-unsupported")}),Be(nt(t),"messaging").getImmediate()}async function Jl(t,e){return t=nt(t),Yr(t,e)}Wl();function Xl(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Fe(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Ve(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ve=function(o){return typeof o}:Ve=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ve(t)}function je(t){Fe(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Ve(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function rr(t,e){Fe(2,arguments);var o=je(t),a=Xl(e);return isNaN(a)?new Date(NaN):(a&&o.setDate(o.getDate()+a),o)}function We(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?We=function(o){return typeof o}:We=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},We(t)}function ir(t){return Fe(1,arguments),t instanceof Date||We(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Yl(t,e){Fe(2,arguments);var o=je(t),a=je(e);return o.getTime()>a.getTime()}function Ql(t,e){Fe(2,arguments);var o=je(t),a=je(e);return o.getTime()<a.getTime()}const Zl={apiKey:"AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",authDomain:"agroarca-equipamentos.firebaseapp.com",projectId:"agroarca-equipamentos",messagingSenderId:"260002359203",appId:"1:260002359203:web:8c19a187bf2fe28079dc16",measurementId:"G-DHSLGFC76R"},eh="BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU",or=14;let Se;class th{constructor(){R(this,"app");R(this,"messaging");R(this,"analytics");this.app=mr(Zl),this.messaging=Gl(this.app),this.analytics=sl(this.app)}solicitarPermissao(){return this.solicitarPermissaoNotificacoes().then(this.criarToken)}solicitarPermissaoNotificacoes(){return new Promise((e,o)=>{if(Notification.permission==="denied"){o();return}if(Notification.permission==="granted"){e();return}localStorage.dataSolicitouPermNotificacao=new Date,console.log("salvar data"),Notification.requestPermission().then(a=>{if(Notification.permission==="granted"){e();return}o()})})}iniciarNotificacoes(){Notification.permission==="granted"&&this.precisaRenovarToken()&&this.criarToken()}criarToken(){Jl(Se.messaging,{vapidKey:eh}).then(e=>{e&&Se.salvarToken(e)})}salvarToken(e){la.post("/notificacao/token",{token:e}).then(()=>{localStorage.ultimaRenovacaoToken=new Date})}precisaRenovarToken(){let e=Date.parse(localStorage.ultimaRenovacaoToken);return ir(e)?Yl(new Date,rr(new Date(e),or)):!1}temPermissao(){return Notification.permission==="granted"}jaSolicitouPermissao(){let e=new Date(Date.parse(localStorage.dataSolicitouPermNotificacao));return ir(e)?Ql(new Date,rr(new Date(e),or)):!1}}function nh(){return Se||(Se=new th,Se)}function Bt(t){return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bt(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sr(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function M(t,e,o){return e&&sr(t.prototype,e),o&&sr(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ft(){return Ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Ft.apply(this,arguments)}function z(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ht(t,e)}function Qe(t){return Qe=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},Qe(t)}function Ht(t,e){return Ht=Object.setPrototypeOf||function(a,c){return a.__proto__=c,a},Ht(t,e)}function rh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ih(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function oh(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ih(t)}function V(t){var e=rh();return function(){var a=Qe(t),c;if(e){var h=Qe(this).constructor;c=Reflect.construct(a,arguments,h)}else c=a.apply(this,arguments);return oh(this,c)}}var en=function(){function t(){j(this,t)}return M(t,[{key:"listenForWhisper",value:function(o,a){return this.listen(".client-"+o,a)}},{key:"notification",value:function(o){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",o)}},{key:"stopListeningForWhisper",value:function(o,a){return this.stopListening(".client-"+o,a)}}]),t}(),Qr=function(){function t(e){j(this,t),this.setNamespace(e)}return M(t,[{key:"format",value:function(o){return o.charAt(0)==="."||o.charAt(0)==="\\"?o.substr(1):(this.namespace&&(o=this.namespace+"."+o),o.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(o){this.namespace=o}}]),t}(),st=function(t){z(o,t);var e=V(o);function o(a,c,h){var f;return j(this,o),f=e.call(this),f.name=c,f.pusher=a,f.options=h,f.eventFormatter=new Qr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"listenToAll",value:function(c){var h=this;return this.subscription.bind_global(function(f,p){if(!f.startsWith("pusher:")){var g=h.options.namespace.replace(/\./g,"\\"),w=f.startsWith(g)?f.substring(g.length+1):"."+f;c(w,p)}}),this}},{key:"stopListening",value:function(c,h){return h?this.subscription.unbind(this.eventFormatter.format(c),h):this.subscription.unbind(this.eventFormatter.format(c)),this}},{key:"stopListeningToAll",value:function(c){return c?this.subscription.unbind_global(c):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(c){return this.on("pusher:subscription_succeeded",function(){c()}),this}},{key:"error",value:function(c){return this.on("pusher:subscription_error",function(h){c(h)}),this}},{key:"on",value:function(c,h){return this.subscription.bind(c,h),this}}]),o}(en),sh=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(st),ah=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(st),ch=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("pusher:subscription_succeeded",function(h){c(Object.keys(h.members).map(function(f){return h.members[f]}))}),this}},{key:"joining",value:function(c){return this.on("pusher:member_added",function(h){c(h.info)}),this}},{key:"leaving",value:function(c){return this.on("pusher:member_removed",function(h){c(h.info)}),this}},{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(st),Zr=function(t){z(o,t);var e=V(o);function o(a,c,h){var f;return j(this,o),f=e.call(this),f.events={},f.listeners={},f.name=c,f.socket=a,f.options=h,f.eventFormatter=new Qr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"stopListening",value:function(c,h){return this.unbindEvent(this.eventFormatter.format(c),h),this}},{key:"subscribed",value:function(c){return this.on("connect",function(h){c(h)}),this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){var f=this;return this.listeners[c]=this.listeners[c]||[],this.events[c]||(this.events[c]=function(p,g){f.name===p&&f.listeners[c]&&f.listeners[c].forEach(function(w){return w(g)})},this.socket.on(c,this.events[c])),this.listeners[c].push(h),this}},{key:"unbind",value:function(){var c=this;Object.keys(this.events).forEach(function(h){c.unbindEvent(h)})}},{key:"unbindEvent",value:function(c,h){this.listeners[c]=this.listeners[c]||[],h&&(this.listeners[c]=this.listeners[c].filter(function(f){return f!==h})),(!h||this.listeners[c].length===0)&&(this.events[c]&&(this.socket.removeListener(c,this.events[c]),delete this.events[c]),delete this.listeners[c])}}]),o}(en),ei=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(c),data:h}),this}}]),o}(Zr),uh=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("presence:subscribed",function(h){c(h.map(function(f){return f.user_info}))}),this}},{key:"joining",value:function(c){return this.on("presence:joining",function(h){return c(h.user_info)}),this}},{key:"leaving",value:function(c){return this.on("presence:leaving",function(h){return c(h.user_info)}),this}}]),o}(ei),Ze=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(c,h){return this}},{key:"listenToAll",value:function(c){return this}},{key:"stopListening",value:function(c,h){return this}},{key:"subscribed",value:function(c){return this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){return this}}]),o}(en),ar=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this}}]),o}(Ze),lh=function(t){z(o,t);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this}},{key:"joining",value:function(c){return this}},{key:"leaving",value:function(c){return this}},{key:"whisper",value:function(c,h){return this}}]),o}(Ze),tn=function(){function t(e){j(this,t),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(e),this.connect()}return M(t,[{key:"setOptions",value:function(o){this.options=Ft(this._defaultOptions,o);var a=this.csrfToken();return a&&(this.options.auth.headers["X-CSRF-TOKEN"]=a,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=a),a=this.options.bearerToken,a&&(this.options.auth.headers.Authorization="Bearer "+a,this.options.userAuthentication.headers.Authorization="Bearer "+a),o}},{key:"csrfToken",value:function(){var o;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(o=document.querySelector('meta[name="csrf-token"]'))?o.getAttribute("content"):null}}]),t}(),hh=function(t){z(o,t);var e=V(o);function o(){var a;return j(this,o),a=e.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new st(this.pusher,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new sh(this.pusher,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"encryptedPrivateChannel",value:function(c){return this.channels["private-encrypted-"+c]||(this.channels["private-encrypted-"+c]=new ah(this.pusher,"private-encrypted-"+c,this.options)),this.channels["private-encrypted-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ch(this.pusher,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"private-encrypted-"+c,"presence-"+c];f.forEach(function(p,g){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),o}(tn),fh=function(t){z(o,t);var e=V(o);function o(){var a;return j(this,o),a=e.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){var c=this,h=this.getSocketIO();return this.socket=h(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(c.channels).forEach(function(f){f.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new Zr(this.socket,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new ei(this.socket,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new uh(this.socket,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"presence-"+c];f.forEach(function(p){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),o}(tn),dh=function(t){z(o,t);var e=V(o);function o(){var a;return j(this,o),a=e.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){}},{key:"listen",value:function(c,h,f){return new Ze}},{key:"channel",value:function(c){return new Ze}},{key:"privateChannel",value:function(c){return new ar}},{key:"encryptedPrivateChannel",value:function(c){return new ar}},{key:"presenceChannel",value:function(c){return new lh}},{key:"leave",value:function(c){}},{key:"leaveChannel",value:function(c){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),o}(tn),ph=function(){function t(e){j(this,t),this.options=e,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return M(t,[{key:"channel",value:function(o){return this.connector.channel(o)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new hh(this.options):this.options.broadcaster=="socket.io"?this.connector=new fh(this.options):this.options.broadcaster=="null"?this.connector=new dh(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(o){return this.connector.presenceChannel(o)}},{key:"leave",value:function(o){this.connector.leave(o)}},{key:"leaveChannel",value:function(o){this.connector.leaveChannel(o)}},{key:"leaveAllChannels",value:function(){for(var o in this.connector.channels)this.leaveChannel(o)}},{key:"listen",value:function(o,a,c){return this.connector.listen(o,a,c)}},{key:"private",value:function(o){return this.connector.privateChannel(o)}},{key:"encryptedPrivate",value:function(o){return this.connector.encryptedPrivateChannel(o)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":Bt(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var o=this;Vue.http.interceptors.push(function(a,c){o.socketId()&&a.headers.set("X-Socket-ID",o.socketId()),c()})}},{key:"registerAxiosRequestInterceptor",value:function(){var o=this;axios.interceptors.request.use(function(a){return o.socketId()&&(a.headers["X-Socket-Id"]=o.socketId()),a})}},{key:"registerjQueryAjaxSetup",value:function(){var o=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(a,c,h){o.socketId()&&h.setRequestHeader("X-Socket-Id",o.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var o=this;document.addEventListener("turbo:before-fetch-request",function(a){a.detail.fetchOptions.headers["X-Socket-Id"]=o.socketId()})}}]),t}(),ti={exports:{}};/*!
 * Pusher JavaScript Library v8.0.1
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */(function(t,e){(function(a,c){t.exports=c()})(window,function(){return function(o){var a={};function c(h){if(a[h])return a[h].exports;var f=a[h]={i:h,l:!1,exports:{}};return o[h].call(f.exports,f,f.exports,c),f.l=!0,f.exports}return c.m=o,c.c=a,c.d=function(h,f,p){c.o(h,f)||Object.defineProperty(h,f,{enumerable:!0,get:p})},c.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},c.t=function(h,f){if(f&1&&(h=c(h)),f&8||f&4&&typeof h=="object"&&h&&h.__esModule)return h;var p=Object.create(null);if(c.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:h}),f&2&&typeof h!="string")for(var g in h)c.d(p,g,function(w){return h[w]}.bind(null,g));return p},c.n=function(h){var f=h&&h.__esModule?function(){return h.default}:function(){return h};return c.d(f,"a",f),f},c.o=function(h,f){return Object.prototype.hasOwnProperty.call(h,f)},c.p="",c(c.s=2)}([function(o,a,c){var h=this&&this.__extends||function(){var C=function(y,m){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,x){A.__proto__=x}||function(A,x){for(var B in x)x.hasOwnProperty(B)&&(A[B]=x[B])},C(y,m)};return function(y,m){C(y,m);function A(){this.constructor=y}y.prototype=m===null?Object.create(m):(A.prototype=m.prototype,new A)}}();Object.defineProperty(a,"__esModule",{value:!0});var f=256,p=function(){function C(y){y===void 0&&(y="="),this._paddingCharacter=y}return C.prototype.encodedLength=function(y){return this._paddingCharacter?(y+2)/3*4|0:(y*8+5)/6|0},C.prototype.encode=function(y){for(var m="",A=0;A<y.length-2;A+=3){var x=y[A]<<16|y[A+1]<<8|y[A+2];m+=this._encodeByte(x>>>3*6&63),m+=this._encodeByte(x>>>2*6&63),m+=this._encodeByte(x>>>1*6&63),m+=this._encodeByte(x>>>0*6&63)}var B=y.length-A;if(B>0){var x=y[A]<<16|(B===2?y[A+1]<<8:0);m+=this._encodeByte(x>>>3*6&63),m+=this._encodeByte(x>>>2*6&63),B===2?m+=this._encodeByte(x>>>1*6&63):m+=this._paddingCharacter||"",m+=this._paddingCharacter||""}return m},C.prototype.maxDecodedLength=function(y){return this._paddingCharacter?y/4*3|0:(y*6+7)/8|0},C.prototype.decodedLength=function(y){return this.maxDecodedLength(y.length-this._getPaddingLength(y))},C.prototype.decode=function(y){if(y.length===0)return new Uint8Array(0);for(var m=this._getPaddingLength(y),A=y.length-m,x=new Uint8Array(this.maxDecodedLength(A)),B=0,H=0,K=0,ee=0,J=0,G=0,X=0;H<A-4;H+=4)ee=this._decodeChar(y.charCodeAt(H+0)),J=this._decodeChar(y.charCodeAt(H+1)),G=this._decodeChar(y.charCodeAt(H+2)),X=this._decodeChar(y.charCodeAt(H+3)),x[B++]=ee<<2|J>>>4,x[B++]=J<<4|G>>>2,x[B++]=G<<6|X,K|=ee&f,K|=J&f,K|=G&f,K|=X&f;if(H<A-1&&(ee=this._decodeChar(y.charCodeAt(H)),J=this._decodeChar(y.charCodeAt(H+1)),x[B++]=ee<<2|J>>>4,K|=ee&f,K|=J&f),H<A-2&&(G=this._decodeChar(y.charCodeAt(H+2)),x[B++]=J<<4|G>>>2,K|=G&f),H<A-3&&(X=this._decodeChar(y.charCodeAt(H+3)),x[B++]=G<<6|X,K|=X&f),K!==0)throw new Error("Base64Coder: incorrect characters for decoding");return x},C.prototype._encodeByte=function(y){var m=y;return m+=65,m+=25-y>>>8&0-65-26+97,m+=51-y>>>8&26-97-52+48,m+=61-y>>>8&52-48-62+43,m+=62-y>>>8&62-43-63+47,String.fromCharCode(m)},C.prototype._decodeChar=function(y){var m=f;return m+=(42-y&y-44)>>>8&-f+y-43+62,m+=(46-y&y-48)>>>8&-f+y-47+63,m+=(47-y&y-58)>>>8&-f+y-48+52,m+=(64-y&y-91)>>>8&-f+y-65+0,m+=(96-y&y-123)>>>8&-f+y-97+26,m},C.prototype._getPaddingLength=function(y){var m=0;if(this._paddingCharacter){for(var A=y.length-1;A>=0&&y[A]===this._paddingCharacter;A--)m++;if(y.length<4||m>2)throw new Error("Base64Coder: incorrect padding")}return m},C}();a.Coder=p;var g=new p;function w(C){return g.encode(C)}a.encode=w;function _(C){return g.decode(C)}a.decode=_;var E=function(C){h(y,C);function y(){return C!==null&&C.apply(this,arguments)||this}return y.prototype._encodeByte=function(m){var A=m;return A+=65,A+=25-m>>>8&0-65-26+97,A+=51-m>>>8&26-97-52+48,A+=61-m>>>8&52-48-62+45,A+=62-m>>>8&62-45-63+95,String.fromCharCode(A)},y.prototype._decodeChar=function(m){var A=f;return A+=(44-m&m-46)>>>8&-f+m-45+62,A+=(94-m&m-96)>>>8&-f+m-95+63,A+=(47-m&m-58)>>>8&-f+m-48+52,A+=(64-m&m-91)>>>8&-f+m-65+0,A+=(96-m&m-123)>>>8&-f+m-97+26,A},y}(p);a.URLSafeCoder=E;var T=new E;function k(C){return T.encode(C)}a.encodeURLSafe=k;function O(C){return T.decode(C)}a.decodeURLSafe=O,a.encodedLength=function(C){return g.encodedLength(C)},a.maxDecodedLength=function(C){return g.maxDecodedLength(C)},a.decodedLength=function(C){return g.decodedLength(C)}},function(o,a,c){Object.defineProperty(a,"__esModule",{value:!0});var h="utf8: invalid string",f="utf8: invalid source encoding";function p(_){for(var E=new Uint8Array(g(_)),T=0,k=0;k<_.length;k++){var O=_.charCodeAt(k);O<128?E[T++]=O:O<2048?(E[T++]=192|O>>6,E[T++]=128|O&63):O<55296?(E[T++]=224|O>>12,E[T++]=128|O>>6&63,E[T++]=128|O&63):(k++,O=(O&1023)<<10,O|=_.charCodeAt(k)&1023,O+=65536,E[T++]=240|O>>18,E[T++]=128|O>>12&63,E[T++]=128|O>>6&63,E[T++]=128|O&63)}return E}a.encode=p;function g(_){for(var E=0,T=0;T<_.length;T++){var k=_.charCodeAt(T);if(k<128)E+=1;else if(k<2048)E+=2;else if(k<55296)E+=3;else if(k<=57343){if(T>=_.length-1)throw new Error(h);T++,E+=4}else throw new Error(h)}return E}a.encodedLength=g;function w(_){for(var E=[],T=0;T<_.length;T++){var k=_[T];if(k&128){var O=void 0;if(k<224){if(T>=_.length)throw new Error(f);var C=_[++T];if((C&192)!==128)throw new Error(f);k=(k&31)<<6|C&63,O=128}else if(k<240){if(T>=_.length-1)throw new Error(f);var C=_[++T],y=_[++T];if((C&192)!==128||(y&192)!==128)throw new Error(f);k=(k&15)<<12|(C&63)<<6|y&63,O=2048}else if(k<248){if(T>=_.length-2)throw new Error(f);var C=_[++T],y=_[++T],m=_[++T];if((C&192)!==128||(y&192)!==128||(m&192)!==128)throw new Error(f);k=(k&15)<<18|(C&63)<<12|(y&63)<<6|m&63,O=65536}else throw new Error(f);if(k<O||k>=55296&&k<=57343)throw new Error(f);if(k>=65536){if(k>1114111)throw new Error(f);k-=65536,E.push(String.fromCharCode(55296|k>>10)),k=56320|k&1023}}E.push(String.fromCharCode(k))}return E.join("")}a.decode=w},function(o,a,c){o.exports=c(3).default},function(o,a,c){c.r(a);var h=function(){function r(n,i){this.lastId=0,this.prefix=n,this.name=i}return r.prototype.create=function(n){this.lastId++;var i=this.lastId,s=this.prefix+i,u=this.name+"["+i+"]",l=!1,d=function(){l||(n.apply(null,arguments),l=!0)};return this[i]=d,{number:i,id:s,name:u,callback:d}},r.prototype.remove=function(n){delete this[n.number]},r}(),f=new h("_pusher_script_","Pusher.ScriptReceivers"),p={VERSION:"8.0.1",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},g=p,w=function(){function r(n){this.options=n,this.receivers=n.receivers||f,this.loading={}}return r.prototype.load=function(n,i,s){var u=this;if(u.loading[n]&&u.loading[n].length>0)u.loading[n].push(s);else{u.loading[n]=[s];var l=I.createScriptRequest(u.getPath(n,i)),d=u.receivers.create(function(v){if(u.receivers.remove(d),u.loading[n]){var S=u.loading[n];delete u.loading[n];for(var b=function(L){L||l.cleanup()},P=0;P<S.length;P++)S[P](v,b)}});l.send(d)}},r.prototype.getRoot=function(n){var i,s=I.getDocument().location.protocol;return n&&n.useTLS||s==="https:"?i=this.options.cdn_https:i=this.options.cdn_http,i.replace(/\/*$/,"")+"/"+this.options.version},r.prototype.getPath=function(n,i){return this.getRoot(i)+"/"+n+this.options.suffix+".js"},r}(),_=w,E=new h("_pusher_dependencies","Pusher.DependenciesReceivers"),T=new _({cdn_http:g.cdn_http,cdn_https:g.cdn_https,version:g.VERSION,suffix:g.dependency_suffix,receivers:E}),k={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}},O=function(r){var n="See:",i=k.urls[r];if(!i)return"";var s;return i.fullUrl?s=i.fullUrl:i.path&&(s=k.baseUrl+i.path),s?n+" "+s:""},C={buildLogSuffix:O},y;(function(r){r.UserAuthentication="user-authentication",r.ChannelAuthorization="channel-authorization"})(y||(y={}));var m=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),A=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),x=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),B=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),H=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),K=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),ee=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),J=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),G=function(r){m(n,r);function n(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return n}(Error),X=function(r){m(n,r);function n(i,s){var u=this.constructor,l=r.call(this,s)||this;return l.status=i,Object.setPrototypeOf(l,u.prototype),l}return n}(Error),ni=function(r,n,i,s,u){var l=I.createXHR();l.open("POST",i.endpoint,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var d in i.headers)l.setRequestHeader(d,i.headers[d]);if(i.headersProvider!=null){var v=i.headersProvider();for(var d in v)l.setRequestHeader(d,v[d])}return l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){var S=void 0,b=!1;try{S=JSON.parse(l.responseText),b=!0}catch{u(new X(200,"JSON returned from "+s.toString()+" endpoint was invalid, yet status code was 200. Data was: "+l.responseText),null)}b&&u(null,S)}else{var P="";switch(s){case y.UserAuthentication:P=C.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:P="Clients must be authorized to join private or presence channels. "+C.buildLogSuffix("authorizationEndpoint");break}u(new X(l.status,"Unable to retrieve auth string from "+s.toString()+" endpoint - "+("received status: "+l.status+" from "+i.endpoint+". "+P)),null)}},l.send(n),l},ri=ni;function ii(r){return ci(si(r))}var Te=String.fromCharCode,He="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oi=function(r){var n=r.charCodeAt(0);return n<128?r:n<2048?Te(192|n>>>6)+Te(128|n&63):Te(224|n>>>12&15)+Te(128|n>>>6&63)+Te(128|n&63)},si=function(r){return r.replace(/[^\x00-\x7F]/g,oi)},ai=function(r){var n=[0,2,1][r.length%3],i=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),s=[He.charAt(i>>>18),He.charAt(i>>>12&63),n>=2?"=":He.charAt(i>>>6&63),n>=1?"=":He.charAt(i&63)];return s.join("")},ci=window.btoa||function(r){return r.replace(/[\s\S]{1,3}/g,ai)},ui=function(){function r(n,i,s,u){var l=this;this.clear=i,this.timer=n(function(){l.timer&&(l.timer=u(l.timer))},s)}return r.prototype.isRunning=function(){return this.timer!==null},r.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},r}(),nn=ui,rn=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}();function li(r){window.clearTimeout(r)}function hi(r){window.clearInterval(r)}var ce=function(r){rn(n,r);function n(i,s){return r.call(this,setTimeout,li,i,function(u){return s(),null})||this}return n}(nn),fi=function(r){rn(n,r);function n(i,s){return r.call(this,setInterval,hi,i,function(u){return s(),u})||this}return n}(nn),di={now:function(){return Date.now?Date.now():new Date().valueOf()},defer:function(r){return new ce(0,r)},method:function(r){var n=Array.prototype.slice.call(arguments,1);return function(i){return i[r].apply(i,n.concat(arguments))}}},F=di;function U(r){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];for(var s=0;s<n.length;s++){var u=n[s];for(var l in u)u[l]&&u[l].constructor&&u[l].constructor===Object?r[l]=U(r[l]||{},u[l]):r[l]=u[l]}return r}function pi(){for(var r=["Pusher"],n=0;n<arguments.length;n++)typeof arguments[n]=="string"?r.push(arguments[n]):r.push($e(arguments[n]));return r.join(" : ")}function on(r,n){var i=Array.prototype.indexOf;if(r===null)return-1;if(i&&r.indexOf===i)return r.indexOf(n);for(var s=0,u=r.length;s<u;s++)if(r[s]===n)return s;return-1}function te(r,n){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&n(r[i],i,r)}function sn(r){var n=[];return te(r,function(i,s){n.push(s)}),n}function gi(r){var n=[];return te(r,function(i){n.push(i)}),n}function Ce(r,n,i){for(var s=0;s<r.length;s++)n.call(i||window,r[s],s,r)}function an(r,n){for(var i=[],s=0;s<r.length;s++)i.push(n(r[s],s,r,i));return i}function vi(r,n){var i={};return te(r,function(s,u){i[u]=n(s)}),i}function cn(r,n){n=n||function(u){return!!u};for(var i=[],s=0;s<r.length;s++)n(r[s],s,r,i)&&i.push(r[s]);return i}function un(r,n){var i={};return te(r,function(s,u){(n&&n(s,u,r,i)||Boolean(s))&&(i[u]=s)}),i}function yi(r){var n=[];return te(r,function(i,s){n.push([s,i])}),n}function ln(r,n){for(var i=0;i<r.length;i++)if(n(r[i],i,r))return!0;return!1}function mi(r,n){for(var i=0;i<r.length;i++)if(!n(r[i],i,r))return!1;return!0}function bi(r){return vi(r,function(n){return typeof n=="object"&&(n=$e(n)),encodeURIComponent(ii(n.toString()))})}function _i(r){var n=un(r,function(s){return s!==void 0}),i=an(yi(bi(n)),F.method("join","=")).join("&");return i}function wi(r){var n=[],i=[];return function s(u,l){var d,v,S;switch(typeof u){case"object":if(!u)return null;for(d=0;d<n.length;d+=1)if(n[d]===u)return{$ref:i[d]};if(n.push(u),i.push(l),Object.prototype.toString.apply(u)==="[object Array]")for(S=[],d=0;d<u.length;d+=1)S[d]=s(u[d],l+"["+d+"]");else{S={};for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&(S[v]=s(u[v],l+"["+JSON.stringify(v)+"]"))}return S;case"number":case"string":case"boolean":return u}}(r,"$")}function $e(r){try{return JSON.stringify(r)}catch{return JSON.stringify(wi(r))}}var Si=function(){function r(){this.globalLog=function(n){window.console&&window.console.log&&window.console.log(n)}}return r.prototype.debug=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];this.log(this.globalLog,n)},r.prototype.warn=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];this.log(this.globalLogWarn,n)},r.prototype.error=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];this.log(this.globalLogError,n)},r.prototype.globalLogWarn=function(n){window.console&&window.console.warn?window.console.warn(n):this.globalLog(n)},r.prototype.globalLogError=function(n){window.console&&window.console.error?window.console.error(n):this.globalLogWarn(n)},r.prototype.log=function(n){var i=pi.apply(this,arguments);if(yt.log)yt.log(i);else if(yt.logToConsole){var s=n.bind(this);s(i)}},r}(),N=new Si,ki=function(r,n,i,s,u){(i.headers!==void 0||i.headersProvider!=null)&&N.warn("To send headers with the "+s.toString()+" request, you must use AJAX, rather than JSONP.");var l=r.nextAuthCallbackID.toString();r.nextAuthCallbackID++;var d=r.getDocument(),v=d.createElement("script");r.auth_callbacks[l]=function(P){u(null,P)};var S="Pusher.auth_callbacks['"+l+"']";v.src=i.endpoint+"?callback="+encodeURIComponent(S)+"&"+n;var b=d.getElementsByTagName("head")[0]||d.documentElement;b.insertBefore(v,b.firstChild)},Ti=ki,Ci=function(){function r(n){this.src=n}return r.prototype.send=function(n){var i=this,s="Error loading "+i.src;i.script=document.createElement("script"),i.script.id=n.id,i.script.src=i.src,i.script.type="text/javascript",i.script.charset="UTF-8",i.script.addEventListener?(i.script.onerror=function(){n.callback(s)},i.script.onload=function(){n.callback(null)}):i.script.onreadystatechange=function(){(i.script.readyState==="loaded"||i.script.readyState==="complete")&&n.callback(null)},i.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(i.errorScript=document.createElement("script"),i.errorScript.id=n.id+"_error",i.errorScript.text=n.name+"('"+s+"');",i.script.async=i.errorScript.async=!1):i.script.async=!0;var u=document.getElementsByTagName("head")[0];u.insertBefore(i.script,u.firstChild),i.errorScript&&u.insertBefore(i.errorScript,i.script.nextSibling)},r.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},r}(),Ii=Ci,Ei=function(){function r(n,i){this.url=n,this.data=i}return r.prototype.send=function(n){if(!this.request){var i=_i(this.data),s=this.url+"/"+n.number+"?"+i;this.request=I.createScriptRequest(s),this.request.send(n)}},r.prototype.cleanup=function(){this.request&&this.request.cleanup()},r}(),Ai=Ei,Pi=function(r,n){return function(i,s){var u="http"+(n?"s":"")+"://",l=u+(r.host||r.options.host)+r.options.path,d=I.createJSONPRequest(l,i),v=I.ScriptReceivers.create(function(S,b){f.remove(v),d.cleanup(),b&&b.host&&(r.host=b.host),s&&s(S,b)});d.send(v)}},Oi={name:"jsonp",getAgent:Pi},Di=Oi;function at(r,n,i){var s=r+(n.useTLS?"s":""),u=n.useTLS?n.hostTLS:n.hostNonTLS;return s+"://"+u+i}function ct(r,n){var i="/app/"+r,s="?protocol="+g.PROTOCOL+"&client=js&version="+g.VERSION+(n?"&"+n:"");return i+s}var xi={getInitial:function(r,n){var i=(n.httpPath||"")+ct(r,"flash=false");return at("ws",n,i)}},Ri={getInitial:function(r,n){var i=(n.httpPath||"/pusher")+ct(r);return at("http",n,i)}},Ni={getInitial:function(r,n){return at("http",n,n.httpPath||"/pusher")},getPath:function(r,n){return ct(r)}},Li=function(){function r(){this._callbacks={}}return r.prototype.get=function(n){return this._callbacks[ut(n)]},r.prototype.add=function(n,i,s){var u=ut(n);this._callbacks[u]=this._callbacks[u]||[],this._callbacks[u].push({fn:i,context:s})},r.prototype.remove=function(n,i,s){if(!n&&!i&&!s){this._callbacks={};return}var u=n?[ut(n)]:sn(this._callbacks);i||s?this.removeCallback(u,i,s):this.removeAllCallbacks(u)},r.prototype.removeCallback=function(n,i,s){Ce(n,function(u){this._callbacks[u]=cn(this._callbacks[u]||[],function(l){return i&&i!==l.fn||s&&s!==l.context}),this._callbacks[u].length===0&&delete this._callbacks[u]},this)},r.prototype.removeAllCallbacks=function(n){Ce(n,function(i){delete this._callbacks[i]},this)},r}(),ji=Li;function ut(r){return"_"+r}var Mi=function(){function r(n){this.callbacks=new ji,this.global_callbacks=[],this.failThrough=n}return r.prototype.bind=function(n,i,s){return this.callbacks.add(n,i,s),this},r.prototype.bind_global=function(n){return this.global_callbacks.push(n),this},r.prototype.unbind=function(n,i,s){return this.callbacks.remove(n,i,s),this},r.prototype.unbind_global=function(n){return n?(this.global_callbacks=cn(this.global_callbacks||[],function(i){return i!==n}),this):(this.global_callbacks=[],this)},r.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},r.prototype.emit=function(n,i,s){for(var u=0;u<this.global_callbacks.length;u++)this.global_callbacks[u](n,i);var l=this.callbacks.get(n),d=[];if(s?d.push(i,s):i&&d.push(i),l&&l.length>0)for(var u=0;u<l.length;u++)l[u].fn.apply(l[u].context||window,d);else this.failThrough&&this.failThrough(n,i);return this},r}(),ne=Mi,Bi=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Fi=function(r){Bi(n,r);function n(i,s,u,l,d){var v=r.call(this)||this;return v.initialize=I.transportConnectionInitializer,v.hooks=i,v.name=s,v.priority=u,v.key=l,v.options=d,v.state="new",v.timeline=d.timeline,v.activityTimeout=d.activityTimeout,v.id=v.timeline.generateUniqueID(),v}return n.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},n.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},n.prototype.connect=function(){var i=this;if(this.socket||this.state!=="initialized")return!1;var s=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(s,this.options)}catch(u){return F.defer(function(){i.onError(u),i.changeState("closed")}),!1}return this.bindListeners(),N.debug("Connecting",{transport:this.name,url:s}),this.changeState("connecting"),!0},n.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},n.prototype.send=function(i){var s=this;return this.state==="open"?(F.defer(function(){s.socket&&s.socket.send(i)}),!0):!1},n.prototype.ping=function(){this.state==="open"&&this.supportsPing()&&this.socket.ping()},n.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},n.prototype.onError=function(i){this.emit("error",{type:"WebSocketError",error:i}),this.timeline.error(this.buildTimelineMessage({error:i.toString()}))},n.prototype.onClose=function(i){i?this.changeState("closed",{code:i.code,reason:i.reason,wasClean:i.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},n.prototype.onMessage=function(i){this.emit("message",i)},n.prototype.onActivity=function(){this.emit("activity")},n.prototype.bindListeners=function(){var i=this;this.socket.onopen=function(){i.onOpen()},this.socket.onerror=function(s){i.onError(s)},this.socket.onclose=function(s){i.onClose(s)},this.socket.onmessage=function(s){i.onMessage(s)},this.supportsPing()&&(this.socket.onactivity=function(){i.onActivity()})},n.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},n.prototype.changeState=function(i,s){this.state=i,this.timeline.info(this.buildTimelineMessage({state:i,params:s})),this.emit(i,s)},n.prototype.buildTimelineMessage=function(i){return U({cid:this.id},i)},n}(ne),Hi=Fi,$i=function(){function r(n){this.hooks=n}return r.prototype.isSupported=function(n){return this.hooks.isSupported(n)},r.prototype.createConnection=function(n,i,s,u){return new Hi(this.hooks,n,i,s,u)},r}(),_e=$i,Ui=new _e({urls:xi,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(I.getWebSocketAPI())},isSupported:function(){return Boolean(I.getWebSocketAPI())},getSocket:function(r){return I.createWebSocket(r)}}),hn={urls:Ri,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},fn=U({getSocket:function(r){return I.HTTPFactory.createStreamingSocket(r)}},hn),dn=U({getSocket:function(r){return I.HTTPFactory.createPollingSocket(r)}},hn),pn={isSupported:function(){return I.isXHRSupported()}},qi=new _e(U({},fn,pn)),zi=new _e(U({},dn,pn)),Vi={ws:Ui,xhr_streaming:qi,xhr_polling:zi},Ue=Vi,Wi=new _e({file:"sockjs",urls:Ni,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(r,n){return new window.SockJS(r,null,{js_path:T.getPath("sockjs",{useTLS:n.useTLS}),ignore_null_origin:n.ignoreNullOrigin})},beforeOpen:function(r,n){r.send(JSON.stringify({path:n}))}}),gn={isSupported:function(r){var n=I.isXDRSupported(r.useTLS);return n}},Ki=new _e(U({},fn,gn)),Gi=new _e(U({},dn,gn));Ue.xdr_streaming=Ki,Ue.xdr_polling=Gi,Ue.sockjs=Wi;var Ji=Ue,Xi=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Yi=function(r){Xi(n,r);function n(){var i=r.call(this)||this,s=i;return window.addEventListener!==void 0&&(window.addEventListener("online",function(){s.emit("online")},!1),window.addEventListener("offline",function(){s.emit("offline")},!1)),i}return n.prototype.isOnline=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine},n}(ne),Qi=new Yi,Zi=function(){function r(n,i,s){this.manager=n,this.transport=i,this.minPingDelay=s.minPingDelay,this.maxPingDelay=s.maxPingDelay,this.pingDelay=void 0}return r.prototype.createConnection=function(n,i,s,u){var l=this;u=U({},u,{activityTimeout:this.pingDelay});var d=this.transport.createConnection(n,i,s,u),v=null,S=function(){d.unbind("open",S),d.bind("closed",b),v=F.now()},b=function(P){if(d.unbind("closed",b),P.code===1002||P.code===1003)l.manager.reportDeath();else if(!P.wasClean&&v){var L=F.now()-v;L<2*l.maxPingDelay&&(l.manager.reportDeath(),l.pingDelay=Math.max(L/2,l.minPingDelay))}};return d.bind("open",S),d},r.prototype.isSupported=function(n){return this.manager.isAlive()&&this.transport.isSupported(n)},r}(),eo=Zi,vn={decodeMessage:function(r){try{var n=JSON.parse(r.data),i=n.data;if(typeof i=="string")try{i=JSON.parse(n.data)}catch{}var s={event:n.event,channel:n.channel,data:i};return n.user_id&&(s.user_id=n.user_id),s}catch(u){throw{type:"MessageParseError",error:u,data:r.data}}},encodeMessage:function(r){return JSON.stringify(r)},processHandshake:function(r){var n=vn.decodeMessage(r);if(n.event==="pusher:connection_established"){if(!n.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:n.data.socket_id,activityTimeout:n.data.activity_timeout*1e3}}else{if(n.event==="pusher:error")return{action:this.getCloseAction(n.data),error:this.getCloseError(n.data)};throw"Invalid handshake"}},getCloseAction:function(r){return r.code<4e3?r.code>=1002&&r.code<=1004?"backoff":null:r.code===4e3?"tls_only":r.code<4100?"refused":r.code<4200?"backoff":r.code<4300?"retry":"refused"},getCloseError:function(r){return r.code!==1e3&&r.code!==1001?{type:"PusherError",data:{code:r.code,message:r.reason||r.message}}:null}},ue=vn,to=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),no=function(r){to(n,r);function n(i,s){var u=r.call(this)||this;return u.id=i,u.transport=s,u.activityTimeout=s.activityTimeout,u.bindListeners(),u}return n.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},n.prototype.send=function(i){return this.transport.send(i)},n.prototype.send_event=function(i,s,u){var l={event:i,data:s};return u&&(l.channel=u),N.debug("Event sent",l),this.send(ue.encodeMessage(l))},n.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},n.prototype.close=function(){this.transport.close()},n.prototype.bindListeners=function(){var i=this,s={message:function(l){var d;try{d=ue.decodeMessage(l)}catch(v){i.emit("error",{type:"MessageParseError",error:v,data:l.data})}if(d!==void 0){switch(N.debug("Event recd",d),d.event){case"pusher:error":i.emit("error",{type:"PusherError",data:d.data});break;case"pusher:ping":i.emit("ping");break;case"pusher:pong":i.emit("pong");break}i.emit("message",d)}},activity:function(){i.emit("activity")},error:function(l){i.emit("error",l)},closed:function(l){u(),l&&l.code&&i.handleCloseEvent(l),i.transport=null,i.emit("closed")}},u=function(){te(s,function(l,d){i.transport.unbind(d,l)})};te(s,function(l,d){i.transport.bind(d,l)})},n.prototype.handleCloseEvent=function(i){var s=ue.getCloseAction(i),u=ue.getCloseError(i);u&&this.emit("error",u),s&&this.emit(s,{action:s,error:u})},n}(ne),ro=no,oo=function(){function r(n,i){this.transport=n,this.callback=i,this.bindListeners()}return r.prototype.close=function(){this.unbindListeners(),this.transport.close()},r.prototype.bindListeners=function(){var n=this;this.onMessage=function(i){n.unbindListeners();var s;try{s=ue.processHandshake(i)}catch(u){n.finish("error",{error:u}),n.transport.close();return}s.action==="connected"?n.finish("connected",{connection:new ro(s.id,n.transport),activityTimeout:s.activityTimeout}):(n.finish(s.action,{error:s.error}),n.transport.close())},this.onClosed=function(i){n.unbindListeners();var s=ue.getCloseAction(i)||"backoff",u=ue.getCloseError(i);n.finish(s,{error:u})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},r.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},r.prototype.finish=function(n,i){this.callback(U({transport:this.transport,action:n},i))},r}(),so=oo,ao=function(){function r(n,i){this.timeline=n,this.options=i||{}}return r.prototype.send=function(n,i){this.timeline.isEmpty()||this.timeline.send(I.TimelineTransport.getAgent(this,n),i)},r}(),co=ao,uo=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),lo=function(r){uo(n,r);function n(i,s){var u=r.call(this,function(l,d){N.debug("No callbacks on "+i+" for "+l)})||this;return u.name=i,u.pusher=s,u.subscribed=!1,u.subscriptionPending=!1,u.subscriptionCancelled=!1,u}return n.prototype.authorize=function(i,s){return s(null,{auth:""})},n.prototype.trigger=function(i,s){if(i.indexOf("client-")!==0)throw new A("Event '"+i+"' does not start with 'client-'");if(!this.subscribed){var u=C.buildLogSuffix("triggeringClientEvents");N.warn("Client event triggered before channel 'subscription_succeeded' event . "+u)}return this.pusher.send_event(i,s,this.name)},n.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},n.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(i);else if(s==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(i);else if(s.indexOf("pusher_internal:")!==0){var l={};this.emit(s,u,l)}},n.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",i.data)},n.prototype.handleSubscriptionCountEvent=function(i){i.data.subscription_count&&(this.subscriptionCount=i.data.subscription_count),this.emit("pusher:subscription_count",i.data)},n.prototype.subscribe=function(){var i=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(s,u){s?(i.subscriptionPending=!1,N.error(s.toString()),i.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:s.message},s instanceof X?{status:s.status}:{}))):i.pusher.send_event("pusher:subscribe",{auth:u.auth,channel_data:u.channel_data,channel:i.name})}))},n.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},n.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},n.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},n}(ne),lt=lo,ho=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),fo=function(r){ho(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.authorize=function(i,s){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:i},s)},n}(lt),ht=fo,po=function(){function r(){this.reset()}return r.prototype.get=function(n){return Object.prototype.hasOwnProperty.call(this.members,n)?{id:n,info:this.members[n]}:null},r.prototype.each=function(n){var i=this;te(this.members,function(s,u){n(i.get(u))})},r.prototype.setMyID=function(n){this.myID=n},r.prototype.onSubscription=function(n){this.members=n.presence.hash,this.count=n.presence.count,this.me=this.get(this.myID)},r.prototype.addMember=function(n){return this.get(n.user_id)===null&&this.count++,this.members[n.user_id]=n.user_info,this.get(n.user_id)},r.prototype.removeMember=function(n){var i=this.get(n.user_id);return i&&(delete this.members[n.user_id],this.count--),i},r.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},r}(),go=po,vo=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),yo=function(r,n,i,s){function u(l){return l instanceof i?l:new i(function(d){d(l)})}return new(i||(i=Promise))(function(l,d){function v(P){try{b(s.next(P))}catch(L){d(L)}}function S(P){try{b(s.throw(P))}catch(L){d(L)}}function b(P){P.done?l(P.value):u(P.value).then(v,S)}b((s=s.apply(r,n||[])).next())})},mo=function(r,n){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,u,l,d;return d={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function v(b){return function(P){return S([b,P])}}function S(b){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,u&&(l=b[0]&2?u.return:b[0]?u.throw||((l=u.return)&&l.call(u),0):u.next)&&!(l=l.call(u,b[1])).done)return l;switch(u=0,l&&(b=[b[0]&2,l.value]),b[0]){case 0:case 1:l=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,u=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!l||b[1]>l[0]&&b[1]<l[3])){i.label=b[1];break}if(b[0]===6&&i.label<l[1]){i.label=l[1],l=b;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(b);break}l[2]&&i.ops.pop(),i.trys.pop();continue}b=n.call(r,i)}catch(P){b=[6,P],u=0}finally{s=l=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},bo=function(r){vo(n,r);function n(i,s){var u=r.call(this,i,s)||this;return u.members=new go,u}return n.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){return yo(u,void 0,void 0,function(){var v,S;return mo(this,function(b){switch(b.label){case 0:return l?[3,3]:(d=d,d.channel_data==null?[3,1]:(v=JSON.parse(d.channel_data),this.members.setMyID(v.user_id),[3,3]));case 1:return[4,this.pusher.user.signinDonePromise];case 2:if(b.sent(),this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else return S=C.buildLogSuffix("authorizationEndpoint"),N.error("Invalid auth response for channel '"+this.name+"', "+("expected 'channel_data' field. "+S+", ")+"or the user should be signed in."),s("Invalid auth response"),[2];b.label=3;case 3:return s(l,d),[2]}})})})},n.prototype.handleEvent=function(i){var s=i.event;if(s.indexOf("pusher_internal:")===0)this.handleInternalEvent(i);else{var u=i.data,l={};i.user_id&&(l.user_id=i.user_id),this.emit(s,u,l)}},n.prototype.handleInternalEvent=function(i){var s=i.event,u=i.data;switch(s){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(i);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(i);break;case"pusher_internal:member_added":var l=this.members.addMember(u);this.emit("pusher:member_added",l);break;case"pusher_internal:member_removed":var d=this.members.removeMember(u);d&&this.emit("pusher:member_removed",d);break}},n.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(i.data),this.emit("pusher:subscription_succeeded",this.members))},n.prototype.disconnect=function(){this.members.reset(),r.prototype.disconnect.call(this)},n}(ht),_o=bo,wo=c(1),ft=c(0),So=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),ko=function(r){So(n,r);function n(i,s,u){var l=r.call(this,i,s)||this;return l.key=null,l.nacl=u,l}return n.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){if(l){s(l,d);return}var v=d.shared_secret;if(!v){s(new Error("No shared_secret key in auth payload for encrypted channel: "+u.name),null);return}u.key=Object(ft.decode)(v),delete d.shared_secret,s(null,d)})},n.prototype.trigger=function(i,s){throw new ee("Client events are not currently supported for encrypted channels")},n.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s.indexOf("pusher_internal:")===0||s.indexOf("pusher:")===0){r.prototype.handleEvent.call(this,i);return}this.handleEncryptedEvent(s,u)},n.prototype.handleEncryptedEvent=function(i,s){var u=this;if(!this.key){N.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!s.ciphertext||!s.nonce){N.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+s);return}var l=Object(ft.decode)(s.ciphertext);if(l.length<this.nacl.secretbox.overheadLength){N.error("Expected encrypted event ciphertext length to be "+this.nacl.secretbox.overheadLength+", got: "+l.length);return}var d=Object(ft.decode)(s.nonce);if(d.length<this.nacl.secretbox.nonceLength){N.error("Expected encrypted event nonce length to be "+this.nacl.secretbox.nonceLength+", got: "+d.length);return}var v=this.nacl.secretbox.open(l,d,this.key);if(v===null){N.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,function(S,b){if(S){N.error("Failed to make a request to the authEndpoint: "+b+". Unable to fetch new key, so dropping encrypted event");return}if(v=u.nacl.secretbox.open(l,d,u.key),v===null){N.error("Failed to decrypt event with new key. Dropping encrypted event");return}u.emit(i,u.getDataToEmit(v))});return}this.emit(i,this.getDataToEmit(v))},n.prototype.getDataToEmit=function(i){var s=Object(wo.decode)(i);try{return JSON.parse(s)}catch{return s}},n}(ht),To=ko,Co=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Io=function(r){Co(n,r);function n(i,s){var u=r.call(this)||this;u.state="initialized",u.connection=null,u.key=i,u.options=s,u.timeline=u.options.timeline,u.usingTLS=u.options.useTLS,u.errorCallbacks=u.buildErrorCallbacks(),u.connectionCallbacks=u.buildConnectionCallbacks(u.errorCallbacks),u.handshakeCallbacks=u.buildHandshakeCallbacks(u.errorCallbacks);var l=I.getNetwork();return l.bind("online",function(){u.timeline.info({netinfo:"online"}),(u.state==="connecting"||u.state==="unavailable")&&u.retryIn(0)}),l.bind("offline",function(){u.timeline.info({netinfo:"offline"}),u.connection&&u.sendActivityCheck()}),u.updateStrategy(),u}return n.prototype.connect=function(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},n.prototype.send=function(i){return this.connection?this.connection.send(i):!1},n.prototype.send_event=function(i,s,u){return this.connection?this.connection.send_event(i,s,u):!1},n.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},n.prototype.isUsingTLS=function(){return this.usingTLS},n.prototype.startConnecting=function(){var i=this,s=function(u,l){u?i.runner=i.strategy.connect(0,s):l.action==="error"?(i.emit("error",{type:"HandshakeError",error:l.error}),i.timeline.error({handshakeError:l.error})):(i.abortConnecting(),i.handshakeCallbacks[l.action](l))};this.runner=this.strategy.connect(0,s)},n.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},n.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var i=this.abandonConnection();i.close()}},n.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},n.prototype.retryIn=function(i){var s=this;this.timeline.info({action:"retry",delay:i}),i>0&&this.emit("connecting_in",Math.round(i/1e3)),this.retryTimer=new ce(i||0,function(){s.disconnectInternally(),s.connect()})},n.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},n.prototype.setUnavailableTimer=function(){var i=this;this.unavailableTimer=new ce(this.options.unavailableTimeout,function(){i.updateState("unavailable")})},n.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},n.prototype.sendActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new ce(this.options.pongTimeout,function(){i.timeline.error({pong_timed_out:i.options.pongTimeout}),i.retryIn(0)})},n.prototype.resetActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new ce(this.activityTimeout,function(){i.sendActivityCheck()}))},n.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},n.prototype.buildConnectionCallbacks=function(i){var s=this;return U({},i,{message:function(u){s.resetActivityCheck(),s.emit("message",u)},ping:function(){s.send_event("pusher:pong",{})},activity:function(){s.resetActivityCheck()},error:function(u){s.emit("error",u)},closed:function(){s.abandonConnection(),s.shouldRetry()&&s.retryIn(1e3)}})},n.prototype.buildHandshakeCallbacks=function(i){var s=this;return U({},i,{connected:function(u){s.activityTimeout=Math.min(s.options.activityTimeout,u.activityTimeout,u.connection.activityTimeout||1/0),s.clearUnavailableTimer(),s.setConnection(u.connection),s.socket_id=s.connection.id,s.updateState("connected",{socket_id:s.socket_id})}})},n.prototype.buildErrorCallbacks=function(){var i=this,s=function(u){return function(l){l.error&&i.emit("error",{type:"WebSocketError",error:l.error}),u(l)}};return{tls_only:s(function(){i.usingTLS=!0,i.updateStrategy(),i.retryIn(0)}),refused:s(function(){i.disconnect()}),backoff:s(function(){i.retryIn(1e3)}),retry:s(function(){i.retryIn(0)})}},n.prototype.setConnection=function(i){this.connection=i;for(var s in this.connectionCallbacks)this.connection.bind(s,this.connectionCallbacks[s]);this.resetActivityCheck()},n.prototype.abandonConnection=function(){if(!!this.connection){this.stopActivityCheck();for(var i in this.connectionCallbacks)this.connection.unbind(i,this.connectionCallbacks[i]);var s=this.connection;return this.connection=null,s}},n.prototype.updateState=function(i,s){var u=this.state;if(this.state=i,u!==i){var l=i;l==="connected"&&(l+=" with new socket ID "+s.socket_id),N.debug("State changed",u+" -> "+l),this.timeline.info({state:i,params:s}),this.emit("state_change",{previous:u,current:i}),this.emit(i,s)}},n.prototype.shouldRetry=function(){return this.state==="connecting"||this.state==="connected"},n}(ne),Eo=Io,Ao=function(){function r(){this.channels={}}return r.prototype.add=function(n,i){return this.channels[n]||(this.channels[n]=Oo(n,i)),this.channels[n]},r.prototype.all=function(){return gi(this.channels)},r.prototype.find=function(n){return this.channels[n]},r.prototype.remove=function(n){var i=this.channels[n];return delete this.channels[n],i},r.prototype.disconnect=function(){te(this.channels,function(n){n.disconnect()})},r}(),Po=Ao;function Oo(r,n){if(r.indexOf("private-encrypted-")===0){if(n.config.nacl)return re.createEncryptedChannel(r,n,n.config.nacl);var i="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",s=C.buildLogSuffix("encryptedChannelSupport");throw new ee(i+". "+s)}else{if(r.indexOf("private-")===0)return re.createPrivateChannel(r,n);if(r.indexOf("presence-")===0)return re.createPresenceChannel(r,n);if(r.indexOf("#")===0)throw new x('Cannot create a channel with name "'+r+'".');return re.createChannel(r,n)}}var Do={createChannels:function(){return new Po},createConnectionManager:function(r,n){return new Eo(r,n)},createChannel:function(r,n){return new lt(r,n)},createPrivateChannel:function(r,n){return new ht(r,n)},createPresenceChannel:function(r,n){return new _o(r,n)},createEncryptedChannel:function(r,n,i){return new To(r,n,i)},createTimelineSender:function(r,n){return new co(r,n)},createHandshake:function(r,n){return new so(r,n)},createAssistantToTheTransportManager:function(r,n,i){return new eo(r,n,i)}},re=Do,xo=function(){function r(n){this.options=n||{},this.livesLeft=this.options.lives||1/0}return r.prototype.getAssistant=function(n){return re.createAssistantToTheTransportManager(this,n,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},r.prototype.isAlive=function(){return this.livesLeft>0},r.prototype.reportDeath=function(){this.livesLeft-=1},r}(),yn=xo,Ro=function(){function r(n,i){this.strategies=n,this.loop=Boolean(i.loop),this.failFast=Boolean(i.failFast),this.timeout=i.timeout,this.timeoutLimit=i.timeoutLimit}return r.prototype.isSupported=function(){return ln(this.strategies,F.method("isSupported"))},r.prototype.connect=function(n,i){var s=this,u=this.strategies,l=0,d=this.timeout,v=null,S=function(b,P){P?i(null,P):(l=l+1,s.loop&&(l=l%u.length),l<u.length?(d&&(d=d*2,s.timeoutLimit&&(d=Math.min(d,s.timeoutLimit))),v=s.tryStrategy(u[l],n,{timeout:d,failFast:s.failFast},S)):i(!0))};return v=this.tryStrategy(u[l],n,{timeout:d,failFast:this.failFast},S),{abort:function(){v.abort()},forceMinPriority:function(b){n=b,v&&v.forceMinPriority(b)}}},r.prototype.tryStrategy=function(n,i,s,u){var l=null,d=null;return s.timeout>0&&(l=new ce(s.timeout,function(){d.abort(),u(!0)})),d=n.connect(i,function(v,S){v&&l&&l.isRunning()&&!s.failFast||(l&&l.ensureAborted(),u(v,S))}),{abort:function(){l&&l.ensureAborted(),d.abort()},forceMinPriority:function(v){d.forceMinPriority(v)}}},r}(),le=Ro,No=function(){function r(n){this.strategies=n}return r.prototype.isSupported=function(){return ln(this.strategies,F.method("isSupported"))},r.prototype.connect=function(n,i){return Lo(this.strategies,n,function(s,u){return function(l,d){if(u[s].error=l,l){jo(u)&&i(!0);return}Ce(u,function(v){v.forceMinPriority(d.transport.priority)}),i(null,d)}})},r}(),dt=No;function Lo(r,n,i){var s=an(r,function(u,l,d,v){return u.connect(n,i(l,v))});return{abort:function(){Ce(s,Mo)},forceMinPriority:function(u){Ce(s,function(l){l.forceMinPriority(u)})}}}function jo(r){return mi(r,function(n){return Boolean(n.error)})}function Mo(r){!r.error&&!r.aborted&&(r.abort(),r.aborted=!0)}var Bo=function(){function r(n,i,s){this.strategy=n,this.transports=i,this.ttl=s.ttl||1800*1e3,this.usingTLS=s.useTLS,this.timeline=s.timeline}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(n,i){var s=this.usingTLS,u=Ho(s),l=[this.strategy];if(u&&u.timestamp+this.ttl>=F.now()){var d=this.transports[u.transport];d&&(this.timeline.info({cached:!0,transport:u.transport,latency:u.latency}),l.push(new le([d],{timeout:u.latency*2+1e3,failFast:!0})))}var v=F.now(),S=l.pop().connect(n,function b(P,L){P?(mn(s),l.length>0?(v=F.now(),S=l.pop().connect(n,b)):i(P)):($o(s,L.transport.name,F.now()-v),i(null,L))});return{abort:function(){S.abort()},forceMinPriority:function(b){n=b,S&&S.forceMinPriority(b)}}},r}(),Fo=Bo;function pt(r){return"pusherTransport"+(r?"TLS":"NonTLS")}function Ho(r){var n=I.getLocalStorage();if(n)try{var i=n[pt(r)];if(i)return JSON.parse(i)}catch{mn(r)}return null}function $o(r,n,i){var s=I.getLocalStorage();if(s)try{s[pt(r)]=$e({timestamp:F.now(),transport:n,latency:i})}catch{}}function mn(r){var n=I.getLocalStorage();if(n)try{delete n[pt(r)]}catch{}}var Uo=function(){function r(n,i){var s=i.delay;this.strategy=n,this.options={delay:s}}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(n,i){var s=this.strategy,u,l=new ce(this.options.delay,function(){u=s.connect(n,i)});return{abort:function(){l.ensureAborted(),u&&u.abort()},forceMinPriority:function(d){n=d,u&&u.forceMinPriority(d)}}},r}(),qe=Uo,qo=function(){function r(n,i,s){this.test=n,this.trueBranch=i,this.falseBranch=s}return r.prototype.isSupported=function(){var n=this.test()?this.trueBranch:this.falseBranch;return n.isSupported()},r.prototype.connect=function(n,i){var s=this.test()?this.trueBranch:this.falseBranch;return s.connect(n,i)},r}(),Ie=qo,zo=function(){function r(n){this.strategy=n}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(n,i){var s=this.strategy.connect(n,function(u,l){l&&s.abort(),i(u,l)});return s},r}(),Vo=zo;function Ee(r){return function(){return r.isSupported()}}var Wo=function(r,n,i){var s={};function u(On,ta,na,ra,ia){var Dn=i(r,On,ta,na,ra,ia);return s[On]=Dn,Dn}var l=Object.assign({},n,{hostNonTLS:r.wsHost+":"+r.wsPort,hostTLS:r.wsHost+":"+r.wssPort,httpPath:r.wsPath}),d=Object.assign({},l,{useTLS:!0}),v=Object.assign({},n,{hostNonTLS:r.httpHost+":"+r.httpPort,hostTLS:r.httpHost+":"+r.httpsPort,httpPath:r.httpPath}),S={loop:!0,timeout:15e3,timeoutLimit:6e4},b=new yn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),P=new yn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),L=u("ws","ws",3,l,b),Y=u("wss","ws",3,d,b),Xs=u("sockjs","sockjs",1,v),Tn=u("xhr_streaming","xhr_streaming",1,v,P),Ys=u("xdr_streaming","xdr_streaming",1,v,P),Cn=u("xhr_polling","xhr_polling",1,v),Qs=u("xdr_polling","xdr_polling",1,v),In=new le([L],S),Zs=new le([Y],S),ea=new le([Xs],S),En=new le([new Ie(Ee(Tn),Tn,Ys)],S),An=new le([new Ie(Ee(Cn),Cn,Qs)],S),Pn=new le([new Ie(Ee(En),new dt([En,new qe(An,{delay:4e3})]),An)],S),mt=new Ie(Ee(Pn),Pn,ea),bt;return n.useTLS?bt=new dt([In,new qe(mt,{delay:2e3})]):bt=new dt([In,new qe(Zs,{delay:2e3}),new qe(mt,{delay:5e3})]),new Fo(new Vo(new Ie(Ee(L),bt,mt)),s,{ttl:18e5,timeline:n.timeline,useTLS:n.useTLS})},Ko=Wo,Go=function(){var r=this;r.timeline.info(r.buildTimelineMessage({transport:r.name+(r.options.useTLS?"s":"")})),r.hooks.isInitialized()?r.changeState("initialized"):r.hooks.file?(r.changeState("initializing"),T.load(r.hooks.file,{useTLS:r.options.useTLS},function(n,i){r.hooks.isInitialized()?(r.changeState("initialized"),i(!0)):(n&&r.onError(n),r.onClose(),i(!1))})):r.onClose()},Jo={getRequest:function(r){var n=new window.XDomainRequest;return n.ontimeout=function(){r.emit("error",new B),r.close()},n.onerror=function(i){r.emit("error",i),r.close()},n.onprogress=function(){n.responseText&&n.responseText.length>0&&r.onChunk(200,n.responseText)},n.onload=function(){n.responseText&&n.responseText.length>0&&r.onChunk(200,n.responseText),r.emit("finished",200),r.close()},n},abortRequest:function(r){r.ontimeout=r.onerror=r.onprogress=r.onload=null,r.abort()}},Xo=Jo,Yo=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Qo=256*1024,Zo=function(r){Yo(n,r);function n(i,s,u){var l=r.call(this)||this;return l.hooks=i,l.method=s,l.url=u,l}return n.prototype.start=function(i){var s=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){s.close()},I.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(i)},n.prototype.close=function(){this.unloader&&(I.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},n.prototype.onChunk=function(i,s){for(;;){var u=this.advanceBuffer(s);if(u)this.emit("chunk",{status:i,data:u});else break}this.isBufferTooLong(s)&&this.emit("buffer_too_long")},n.prototype.advanceBuffer=function(i){var s=i.slice(this.position),u=s.indexOf(`
`);return u!==-1?(this.position+=u+1,s.slice(0,u)):null},n.prototype.isBufferTooLong=function(i){return this.position===i.length&&i.length>Qo},n}(ne),es=Zo,gt;(function(r){r[r.CONNECTING=0]="CONNECTING",r[r.OPEN=1]="OPEN",r[r.CLOSED=3]="CLOSED"})(gt||(gt={}));var he=gt,ts=1,ns=function(){function r(n,i){this.hooks=n,this.session=_n(1e3)+"/"+ss(8),this.location=rs(i),this.readyState=he.CONNECTING,this.openStream()}return r.prototype.send=function(n){return this.sendRaw(JSON.stringify([n]))},r.prototype.ping=function(){this.hooks.sendHeartbeat(this)},r.prototype.close=function(n,i){this.onClose(n,i,!0)},r.prototype.sendRaw=function(n){if(this.readyState===he.OPEN)try{return I.createSocketRequest("POST",bn(is(this.location,this.session))).start(n),!0}catch{return!1}else return!1},r.prototype.reconnect=function(){this.closeStream(),this.openStream()},r.prototype.onClose=function(n,i,s){this.closeStream(),this.readyState=he.CLOSED,this.onclose&&this.onclose({code:n,reason:i,wasClean:s})},r.prototype.onChunk=function(n){if(n.status===200){this.readyState===he.OPEN&&this.onActivity();var i,s=n.data.slice(0,1);switch(s){case"o":i=JSON.parse(n.data.slice(1)||"{}"),this.onOpen(i);break;case"a":i=JSON.parse(n.data.slice(1)||"[]");for(var u=0;u<i.length;u++)this.onEvent(i[u]);break;case"m":i=JSON.parse(n.data.slice(1)||"null"),this.onEvent(i);break;case"h":this.hooks.onHeartbeat(this);break;case"c":i=JSON.parse(n.data.slice(1)||"[]"),this.onClose(i[0],i[1],!0);break}}},r.prototype.onOpen=function(n){this.readyState===he.CONNECTING?(n&&n.hostname&&(this.location.base=os(this.location.base,n.hostname)),this.readyState=he.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},r.prototype.onEvent=function(n){this.readyState===he.OPEN&&this.onmessage&&this.onmessage({data:n})},r.prototype.onActivity=function(){this.onactivity&&this.onactivity()},r.prototype.onError=function(n){this.onerror&&this.onerror(n)},r.prototype.openStream=function(){var n=this;this.stream=I.createSocketRequest("POST",bn(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(i){n.onChunk(i)}),this.stream.bind("finished",function(i){n.hooks.onFinished(n,i)}),this.stream.bind("buffer_too_long",function(){n.reconnect()});try{this.stream.start()}catch(i){F.defer(function(){n.onError(i),n.onClose(1006,"Could not start streaming",!1)})}},r.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},r}();function rs(r){var n=/([^\?]*)\/*(\??.*)/.exec(r);return{base:n[1],queryString:n[2]}}function is(r,n){return r.base+"/"+n+"/xhr_send"}function bn(r){var n=r.indexOf("?")===-1?"?":"&";return r+n+"t="+ +new Date+"&n="+ts++}function os(r,n){var i=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(r);return i[1]+n+i[3]}function _n(r){return I.randomInt(r)}function ss(r){for(var n=[],i=0;i<r;i++)n.push(_n(32).toString(32));return n.join("")}var as=ns,cs={getReceiveURL:function(r,n){return r.base+"/"+n+"/xhr_streaming"+r.queryString},onHeartbeat:function(r){r.sendRaw("[]")},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,n){r.onClose(1006,"Connection interrupted ("+n+")",!1)}},us=cs,ls={getReceiveURL:function(r,n){return r.base+"/"+n+"/xhr"+r.queryString},onHeartbeat:function(){},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,n){n===200?r.reconnect():r.onClose(1006,"Connection interrupted ("+n+")",!1)}},hs=ls,fs={getRequest:function(r){var n=I.getXHRAPI(),i=new n;return i.onreadystatechange=i.onprogress=function(){switch(i.readyState){case 3:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText);break;case 4:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText),r.emit("finished",i.status),r.close();break}},i},abortRequest:function(r){r.onreadystatechange=null,r.abort()}},ds=fs,ps={createStreamingSocket:function(r){return this.createSocket(us,r)},createPollingSocket:function(r){return this.createSocket(hs,r)},createSocket:function(r,n){return new as(r,n)},createXHR:function(r,n){return this.createRequest(ds,r,n)},createRequest:function(r,n,i){return new es(r,n,i)}},wn=ps;wn.createXDR=function(r,n){return this.createRequest(Xo,r,n)};var gs=wn,vs={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:f,DependenciesReceivers:E,getDefaultStrategy:Ko,Transports:Ji,transportConnectionInitializer:Go,HTTPFactory:gs,TimelineTransport:Di,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(r){var n=this;window.Pusher=r;var i=function(){n.onDocumentBody(r.ready)};window.JSON?i():T.load("json2",{},i)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:ri,jsonp:Ti}},onDocumentBody:function(r){var n=this;document.body?r():setTimeout(function(){n.onDocumentBody(r)},0)},createJSONPRequest:function(r,n){return new Ai(r,n)},createScriptRequest:function(r){return new Ii(r)},getLocalStorage:function(){try{return window.localStorage}catch{return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var r=this.getXHRAPI();return new r},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return Qi},createWebSocket:function(r){var n=this.getWebSocketAPI();return new n(r)},createSocketRequest:function(r,n){if(this.isXHRSupported())return this.HTTPFactory.createXHR(r,n);if(this.isXDRSupported(n.indexOf("https:")===0))return this.HTTPFactory.createXDR(r,n);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var r=this.getXHRAPI();return Boolean(r)&&new r().withCredentials!==void 0},isXDRSupported:function(r){var n=r?"https:":"http:",i=this.getProtocol();return Boolean(window.XDomainRequest)&&i===n},addUnloadListener:function(r){window.addEventListener!==void 0?window.addEventListener("unload",r,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",r)},removeUnloadListener:function(r){window.addEventListener!==void 0?window.removeEventListener("unload",r,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",r)},randomInt:function(r){var n=function(){var i=window.crypto||window.msCrypto,s=i.getRandomValues(new Uint32Array(1))[0];return s/Math.pow(2,32)};return Math.floor(n()*r)}},I=vs,vt;(function(r){r[r.ERROR=3]="ERROR",r[r.INFO=6]="INFO",r[r.DEBUG=7]="DEBUG"})(vt||(vt={}));var ze=vt,ys=function(){function r(n,i,s){this.key=n,this.session=i,this.events=[],this.options=s||{},this.sent=0,this.uniqueID=0}return r.prototype.log=function(n,i){n<=this.options.level&&(this.events.push(U({},i,{timestamp:F.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},r.prototype.error=function(n){this.log(ze.ERROR,n)},r.prototype.info=function(n){this.log(ze.INFO,n)},r.prototype.debug=function(n){this.log(ze.DEBUG,n)},r.prototype.isEmpty=function(){return this.events.length===0},r.prototype.send=function(n,i){var s=this,u=U({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],n(u,function(l,d){l||s.sent++,i&&i(l,d)}),!0},r.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},r}(),ms=ys,bs=function(){function r(n,i,s,u){this.name=n,this.priority=i,this.transport=s,this.options=u||{}}return r.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},r.prototype.connect=function(n,i){var s=this;if(this.isSupported()){if(this.priority<n)return Sn(new H,i)}else return Sn(new G,i);var u=!1,l=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),d=null,v=function(){l.unbind("initialized",v),l.connect()},S=function(){d=re.createHandshake(l,function(Y){u=!0,L(),i(null,Y)})},b=function(Y){L(),i(Y)},P=function(){L();var Y;Y=$e(l),i(new K(Y))},L=function(){l.unbind("initialized",v),l.unbind("open",S),l.unbind("error",b),l.unbind("closed",P)};return l.bind("initialized",v),l.bind("open",S),l.bind("error",b),l.bind("closed",P),l.initialize(),{abort:function(){u||(L(),d?d.close():l.close())},forceMinPriority:function(Y){u||s.priority<Y&&(d?d.close():l.close())}}},r}(),_s=bs;function Sn(r,n){return F.defer(function(){n(r)}),{abort:function(){},forceMinPriority:function(){}}}var ws=I.Transports,Ss=function(r,n,i,s,u,l){var d=ws[i];if(!d)throw new J(i);var v=(!r.enabledTransports||on(r.enabledTransports,n)!==-1)&&(!r.disabledTransports||on(r.disabledTransports,n)===-1),S;return v?(u=Object.assign({ignoreNullOrigin:r.ignoreNullOrigin},u),S=new _s(n,s,l?l.getAssistant(d):d,u)):S=ks,S},ks={isSupported:function(){return!1},connect:function(r,n){var i=F.defer(function(){n(new G)});return{abort:function(){i.ensureAborted()},forceMinPriority:function(){}}}};function Ts(r){if(r==null)throw"You must pass an options object";if(r.cluster==null)throw"Options object must provide a cluster";"disableStats"in r&&N.warn("The disableStats option is deprecated in favor of enableStats")}var Cs=function(r,n){var i="socket_id="+encodeURIComponent(r.socketId);for(var s in n.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(n.params[s]);if(n.paramsProvider!=null){var u=n.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Is=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(n,i){var s=Cs(n,r);I.getAuthorizers()[r.transport](I,s,r,y.UserAuthentication,i)}},Es=Is,As=function(r,n){var i="socket_id="+encodeURIComponent(r.socketId);i+="&channel_name="+encodeURIComponent(r.channelName);for(var s in n.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(n.params[s]);if(n.paramsProvider!=null){var u=n.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Ps=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(n,i){var s=As(n,r);I.getAuthorizers()[r.transport](I,s,r,y.ChannelAuthorization,i)}},Os=Ps,Ds=function(r,n,i){var s={authTransport:n.transport,authEndpoint:n.endpoint,auth:{params:n.params,headers:n.headers}};return function(u,l){var d=r.channel(u.channelName),v=i(d,s);v.authorize(u.socketId,l)}},we=function(){return we=Object.assign||function(r){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])}return r},we.apply(this,arguments)};function xs(r,n){var i={activityTimeout:r.activityTimeout||g.activityTimeout,cluster:r.cluster,httpPath:r.httpPath||g.httpPath,httpPort:r.httpPort||g.httpPort,httpsPort:r.httpsPort||g.httpsPort,pongTimeout:r.pongTimeout||g.pongTimeout,statsHost:r.statsHost||g.stats_host,unavailableTimeout:r.unavailableTimeout||g.unavailableTimeout,wsPath:r.wsPath||g.wsPath,wsPort:r.wsPort||g.wsPort,wssPort:r.wssPort||g.wssPort,enableStats:Ms(r),httpHost:Rs(r),useTLS:js(r),wsHost:Ns(r),userAuthenticator:Bs(r),channelAuthorizer:Hs(r,n)};return"disabledTransports"in r&&(i.disabledTransports=r.disabledTransports),"enabledTransports"in r&&(i.enabledTransports=r.enabledTransports),"ignoreNullOrigin"in r&&(i.ignoreNullOrigin=r.ignoreNullOrigin),"timelineParams"in r&&(i.timelineParams=r.timelineParams),"nacl"in r&&(i.nacl=r.nacl),i}function Rs(r){return r.httpHost?r.httpHost:r.cluster?"sockjs-"+r.cluster+".pusher.com":g.httpHost}function Ns(r){return r.wsHost?r.wsHost:Ls(r.cluster)}function Ls(r){return"ws-"+r+".pusher.com"}function js(r){return I.getProtocol()==="https:"?!0:r.forceTLS!==!1}function Ms(r){return"enableStats"in r?r.enableStats:"disableStats"in r?!r.disableStats:!1}function Bs(r){var n=we(we({},g.userAuthentication),r.userAuthentication);return"customHandler"in n&&n.customHandler!=null?n.customHandler:Es(n)}function Fs(r,n){var i;return"channelAuthorization"in r?i=we(we({},g.channelAuthorization),r.channelAuthorization):(i={transport:r.authTransport||g.authTransport,endpoint:r.authEndpoint||g.authEndpoint},"auth"in r&&("params"in r.auth&&(i.params=r.auth.params),"headers"in r.auth&&(i.headers=r.auth.headers)),"authorizer"in r&&(i.customHandler=Ds(n,i,r.authorizer))),i}function Hs(r,n){var i=Fs(r,n);return"customHandler"in i&&i.customHandler!=null?i.customHandler:Os(i)}var $s=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Us=function(r){$s(n,r);function n(i){var s=r.call(this,function(u,l){N.debug("No callbacks on watchlist events for "+u)})||this;return s.pusher=i,s.bindWatchlistInternalEvent(),s}return n.prototype.handleEvent=function(i){var s=this;i.data.events.forEach(function(u){s.emit(u.name,u)})},n.prototype.bindWatchlistInternalEvent=function(){var i=this;this.pusher.connection.bind("message",function(s){var u=s.event;u==="pusher_internal:watchlist_events"&&i.handleEvent(s)})},n}(ne),qs=Us;function zs(){var r,n,i=new Promise(function(s,u){r=s,n=u});return{promise:i,resolve:r,reject:n}}var Vs=zs,Ws=function(){var r=function(n,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(n,i)};return function(n,i){r(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ks=function(r){Ws(n,r);function n(i){var s=r.call(this,function(u,l){N.debug("No callbacks on user for "+u)})||this;return s.signin_requested=!1,s.user_data=null,s.serverToUserChannel=null,s.signinDonePromise=null,s._signinDoneResolve=null,s._onAuthorize=function(u,l){if(u){N.warn("Error during signin: "+u),s._cleanup();return}s.pusher.send_event("pusher:signin",{auth:l.auth,user_data:l.user_data})},s.pusher=i,s.pusher.connection.bind("state_change",function(u){var l=u.previous,d=u.current;l!=="connected"&&d==="connected"&&s._signin(),l==="connected"&&d!=="connected"&&(s._cleanup(),s._newSigninPromiseIfNeeded())}),s.watchlist=new qs(i),s.pusher.connection.bind("message",function(u){var l=u.event;l==="pusher:signin_success"&&s._onSigninSuccess(u.data),s.serverToUserChannel&&s.serverToUserChannel.name===u.channel&&s.serverToUserChannel.handleEvent(u)}),s}return n.prototype.signin=function(){this.signin_requested||(this.signin_requested=!0,this._signin())},n.prototype._signin=function(){!this.signin_requested||(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))},n.prototype._onSigninSuccess=function(i){try{this.user_data=JSON.parse(i.user_data)}catch{N.error("Failed parsing user data after signin: "+i.user_data),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){N.error("user_data doesn't contain an id. user_data: "+this.user_data),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()},n.prototype._subscribeChannels=function(){var i=this,s=function(u){u.subscriptionPending&&u.subscriptionCancelled?u.reinstateSubscription():!u.subscriptionPending&&i.pusher.connection.state==="connected"&&u.subscribe()};this.serverToUserChannel=new lt("#server-to-user-"+this.user_data.id,this.pusher),this.serverToUserChannel.bind_global(function(u,l){u.indexOf("pusher_internal:")===0||u.indexOf("pusher:")===0||i.emit(u,l)}),s(this.serverToUserChannel)},n.prototype._cleanup=function(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()},n.prototype._newSigninPromiseIfNeeded=function(){if(!!this.signin_requested&&!(this.signinDonePromise&&!this.signinDonePromise.done)){var i=Vs(),s=i.promise,u=i.resolve;s.done=!1;var l=function(){s.done=!0};s.then(l).catch(l),this.signinDonePromise=s,this._signinDoneResolve=u}},n}(ne),Gs=Ks,kn=function(){function r(n,i){var s=this;Js(n),Ts(i),this.key=n,this.config=xs(i,this),this.channels=re.createChannels(),this.global_emitter=new ne,this.sessionID=I.randomInt(1e9),this.timeline=new ms(this.key,this.sessionID,{cluster:this.config.cluster,features:r.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:ze.INFO,version:g.VERSION}),this.config.enableStats&&(this.timelineSender=re.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+I.TimelineTransport.name}));var u=function(l){return I.getDefaultStrategy(s.config,l,Ss)};this.connection=re.createConnectionManager(this.key,{getStrategy:u,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:Boolean(this.config.useTLS)}),this.connection.bind("connected",function(){s.subscribeAll(),s.timelineSender&&s.timelineSender.send(s.connection.isUsingTLS())}),this.connection.bind("message",function(l){var d=l.event,v=d.indexOf("pusher_internal:")===0;if(l.channel){var S=s.channel(l.channel);S&&S.handleEvent(l)}v||s.global_emitter.emit(l.event,l.data)}),this.connection.bind("connecting",function(){s.channels.disconnect()}),this.connection.bind("disconnected",function(){s.channels.disconnect()}),this.connection.bind("error",function(l){N.warn(l)}),r.instances.push(this),this.timeline.info({instances:r.instances.length}),this.user=new Gs(this),r.isReady&&this.connect()}return r.ready=function(){r.isReady=!0;for(var n=0,i=r.instances.length;n<i;n++)r.instances[n].connect()},r.getClientFeatures=function(){return sn(un({ws:I.Transports.ws},function(n){return n.isSupported({})}))},r.prototype.channel=function(n){return this.channels.find(n)},r.prototype.allChannels=function(){return this.channels.all()},r.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var n=this.connection.isUsingTLS(),i=this.timelineSender;this.timelineSenderTimer=new fi(6e4,function(){i.send(n)})}},r.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},r.prototype.bind=function(n,i,s){return this.global_emitter.bind(n,i,s),this},r.prototype.unbind=function(n,i,s){return this.global_emitter.unbind(n,i,s),this},r.prototype.bind_global=function(n){return this.global_emitter.bind_global(n),this},r.prototype.unbind_global=function(n){return this.global_emitter.unbind_global(n),this},r.prototype.unbind_all=function(n){return this.global_emitter.unbind_all(),this},r.prototype.subscribeAll=function(){var n;for(n in this.channels.channels)this.channels.channels.hasOwnProperty(n)&&this.subscribe(n)},r.prototype.subscribe=function(n){var i=this.channels.add(n,this);return i.subscriptionPending&&i.subscriptionCancelled?i.reinstateSubscription():!i.subscriptionPending&&this.connection.state==="connected"&&i.subscribe(),i},r.prototype.unsubscribe=function(n){var i=this.channels.find(n);i&&i.subscriptionPending?i.cancelSubscription():(i=this.channels.remove(n),i&&i.subscribed&&i.unsubscribe())},r.prototype.send_event=function(n,i,s){return this.connection.send_event(n,i,s)},r.prototype.shouldUseTLS=function(){return this.config.useTLS},r.prototype.signin=function(){this.user.signin()},r.instances=[],r.isReady=!1,r.logToConsole=!1,r.Runtime=I,r.ScriptReceivers=I.ScriptReceivers,r.DependenciesReceivers=I.DependenciesReceivers,r.auth_callbacks=I.auth_callbacks,r}(),yt=a.default=kn;function Js(r){if(r==null)throw"You must pass your app key when you instantiate Pusher."}I.setup(kn)}])})})(ti);const cr=ha(ti.exports),De=class{constructor(){R(this,"cancelled",!1);R(this,"equipamento_conversa_id");R(this,"usuario_id");R(this,"mensagem");R(this,"mensagem_id");R(this,"notify",()=>{De.listeners.forEach(e=>{this.cancelled||e.callback(this)})})}};let Ae=De;R(Ae,"listeners",[]),R(Ae,"addListener",function(o){De.listeners.push(o),De.listeners.sort((a,c)=>a.priority-c.priority)});const xe=class{constructor(){R(this,"cancelled",!1);R(this,"notificacao");R(this,"notify",()=>{xe.listeners.forEach(e=>{this.cancelled||e.callback(this)})})}};let ke=xe;R(ke,"listeners",[]),R(ke,"addListener",function(e){xe.listeners.push(e),xe.listeners.sort((o,a)=>o.priority-a.priority)});class gh{constructor(){R(this,"id");R(this,"visualizado");R(this,"usuario_id");R(this,"titulo");R(this,"texto")}}const Dt={broadcaster:"pusher",key:{}.VITE_PUSHER_APP_KEY,cluster:{}.VITE_PUSHER_APP_CLUSTER,forceTLS:!1,wsHost:{}.VITE_PUSHER_HOST,wsPort:{}.VITE_PUSHER_PORT,wssPort:{}.VITE_PUSHER_PORT,authEndpoint:"/broadcasting/auth"};let Ke=null,et=null;function vh(){lr(()=>{yh()})}function yh(){var t,e,o,a,c,h,f,p;Ke!==((a=(o=(e=(t=xn())==null?void 0:t.props)==null?void 0:e.auth)==null?void 0:o.user)==null?void 0:a.id)&&(et&&window.Echo.leave(et),Ke=(p=(f=(h=(c=xn())==null?void 0:c.props)==null?void 0:h.auth)==null?void 0:f.user)==null?void 0:p.id,Ke&&mh())}function mh(){window.Echo=new ph({...Dt,client:new cr(Dt.key,Dt)}),et=`notificacoes.${Ke}`,window.Echo.private(et).listen(".ConversaWebSocket",t=>bh(t)).listen(".NotificacaoWebSocket",t=>_h(t)).listenToAll((t,e)=>console.log([t,e])),window.Pusher=cr}function bh(t){const e=new Ae;e.mensagem_id=t.notification.mensagem.id,e.mensagem=t.notification.mensagem.mensagem,e.usuario_id=t.notification.mensagem.usuario_id,e.equipamento_conversa_id=t.notification.mensagem.equipamento_conversa_id,e.notify()}function _h(t){const e=new ke;e.notificacao=new gh,e.notificacao.id=t.notification.notificacao.id,e.notificacao.visualizado=t.notification.notificacao.visualizado,e.notificacao.usuario_id=t.notification.notificacao.usuario_id,e.notificacao.titulo=t.notification.notificacao.titulo,e.notificacao.texto=t.notification.notificacao.texto,e.notify()}function wh(){vh(),nh().iniciarNotificacoes()}const Sh={class:"toast-header"},kh={class:"me-auto"},Th=Pe("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Ch={class:"toast-body"},Ih=tt({__name:"Notificacao",props:{id:Number,titulo:String,texto:String},setup(t){const e=t,o=$t(null);let a;lr(()=>{a=new fa(o.value),a.show({autohide:!1})});function c(){da.visit(`/notificacao/${e.id}`)}return(h,f)=>(pe(),Re("div",{ref_key:"toast",ref:o,class:"toast notificacao",role:"alert",onClick:c},[Pe("div",Sh,[Pe("span",kh,Rn(t.titulo),1),Th]),Pe("div",Ch,Rn(t.texto),1)],512))}});class Eh{constructor(e,o=10){R(this,"priority");R(this,"callback");this.priority=o,this.callback=e}}const Ah={class:"toast-container position-fixed top-0 end-0 p-3"},Ph=tt({__name:"Notificacoes",setup(t){wh();const e=$t([]);ke.addListener(new Eh(o));function o(a){e.value.push(a.notificacao),setTimeout(()=>{const c=e.value.indexOf(a.notificacao);e.value.splice(c,1)},1e5)}return(a,c)=>(pe(),Re("div",Ah,[(pe(!0),Re(pa,null,ga(e.value,h=>(pe(),ur(Ih,va(ya({key:h.id},h)),null,16))),128))]))}}),Oh={class:"base-layout"},Nh=tt({__name:"BaseLayout",setup(t){return(e,o)=>(pe(),Re("div",Oh,[ma(Ph),ba(e.$slots,"default")]))}}),Lh=(t,e)=>{const o=t.__vccOpts||t;for(const[a,c]of e)o[a]=c;return o};export{Ae as E,Eh as L,Nh as _,Rh as a,Lh as b,nh as g};

var oa=Object.defineProperty;var sa=(n,e,o)=>e in n?oa(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var R=(n,e,o)=>(sa(n,typeof e!="symbol"?e+"":e,o),o);import{d as tt,m as $t,o as pe,a as ur,w as aa,i as Re,k as ca,T as ua,b as Pe,A as la,B as ha,n as lr,J as xn,C as fa,t as Rn,D as da,F as pa,r as ga,E as va,G as ya,g as ma,x as ba}from"./app.7f8c5bb8.js";const _a={key:0,class:"loader"},wa=Pe("div",{class:"elemento"},null,-1),Sa=[wa],xh=tt({__name:"Loader",setup(n){const e=$t(!1);function o(){e.value=!0}function a(){e.value=!1}return window.loader={show:o,hide:a,active:e},(c,h)=>(pe(),ur(ua,{name:"loader",duration:"300"},{default:aa(()=>[e.value?(pe(),Re("div",_a,Sa)):ca("",!0)]),_:1}))}});/**
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
 */const hr=function(n){const e=[];let o=0;for(let a=0;a<n.length;a++){let c=n.charCodeAt(a);c<128?e[o++]=c:c<2048?(e[o++]=c>>6|192,e[o++]=c&63|128):(c&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(n.charCodeAt(++a)&1023),e[o++]=c>>18|240,e[o++]=c>>12&63|128,e[o++]=c>>6&63|128,e[o++]=c&63|128):(e[o++]=c>>12|224,e[o++]=c>>6&63|128,e[o++]=c&63|128)}return e},ka=function(n){const e=[];let o=0,a=0;for(;o<n.length;){const c=n[o++];if(c<128)e[a++]=String.fromCharCode(c);else if(c>191&&c<224){const h=n[o++];e[a++]=String.fromCharCode((c&31)<<6|h&63)}else if(c>239&&c<365){const h=n[o++],f=n[o++],p=n[o++],g=((c&7)<<18|(h&63)<<12|(f&63)<<6|p&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const h=n[o++],f=n[o++];e[a++]=String.fromCharCode((c&15)<<12|(h&63)<<6|f&63)}}return e.join("")},fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<n.length;c+=3){const h=n[c],f=c+1<n.length,p=f?n[c+1]:0,g=c+2<n.length,w=g?n[c+2]:0,_=h>>2,E=(h&3)<<4|p>>4;let T=(p&15)<<2|w>>6,k=w&63;g||(k=64,f||(T=64)),a.push(o[_],o[E],o[T],o[k])}return a.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ka(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const o=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<n.length;){const h=o[n.charAt(c++)],p=c<n.length?o[n.charAt(c)]:0;++c;const w=c<n.length?o[n.charAt(c)]:64;++c;const E=c<n.length?o[n.charAt(c)]:64;if(++c,h==null||p==null||w==null||E==null)throw Error();const T=h<<2|p>>4;if(a.push(T),w!==64){const k=p<<4&240|w>>2;if(a.push(k),E!==64){const O=w<<6&192|E;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ta=function(n){const e=hr(n);return fr.encodeByteArray(e,!0)},dr=function(n){return Ta(n).replace(/\./g,"")},Ca=function(n){try{return fr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ia(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ea=()=>Ia().__FIREBASE_DEFAULTS__,Aa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ca(n[1]);return e&&JSON.parse(e)},Oa=()=>{try{return Ea()||Aa()||Pa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Da=()=>{var n;return(n=Oa())===null||n===void 0?void 0:n.config};/**
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
 */class xa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,o)=>{this.resolve=e,this.reject=o})}wrapCallback(e){return(o,a)=>{o?this.reject(o):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(o):e(o,a))}}}function Ra(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ut(){try{return typeof indexedDB=="object"}catch{return!1}}function qt(){return new Promise((n,e)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),o||self.indexedDB.deleteDatabase(a),n(!0)},c.onupgradeneeded=()=>{o=!1},c.onerror=()=>{var h;e(((h=c.error)===null||h===void 0?void 0:h.message)||"")}}catch(o){e(o)}})}function pr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Na="FirebaseError";class be extends Error{constructor(e,o,a){super(o),this.code=e,this.customData=a,this.name=Na,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Me.prototype.create)}}class Me{constructor(e,o,a){this.service=e,this.serviceName=o,this.errors=a}create(e,...o){const a=o[0]||{},c=`${this.service}/${e}`,h=this.errors[e],f=h?La(h,a):"Error",p=`${this.serviceName}: ${f} (${c}).`;return new be(c,p,a)}}function La(n,e){return n.replace(ja,(o,a)=>{const c=e[a];return c!=null?String(c):`<${a}?>`})}const ja=/\{\$([^}]+)}/g;function Ge(n,e){if(n===e)return!0;const o=Object.keys(n),a=Object.keys(e);for(const c of o){if(!a.includes(c))return!1;const h=n[c],f=e[c];if(Nn(h)&&Nn(f)){if(!Ge(h,f))return!1}else if(h!==f)return!1}for(const c of a)if(!o.includes(c))return!1;return!0}function Nn(n){return n!==null&&typeof n=="object"}/**
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
 */const Ma=1e3,Ba=2,Fa=4*60*60*1e3,Ha=.5;function Ln(n,e=Ma,o=Ba){const a=e*Math.pow(o,n),c=Math.round(Ha*a*(Math.random()-.5)*2);return Math.min(Fa,a+c)}/**
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
 */function nt(n){return n&&n._delegate?n._delegate:n}class Z{constructor(e,o,a){this.name=e,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class $a{constructor(e,o){this.name=e,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const o=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(o)){const a=new xa;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:o});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(e){var o;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),c=(o=e==null?void 0:e.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(c)return null;throw h}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qa(e))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);try{const h=this.getOrInitializeService({instanceIdentifier:c});a.resolve(h)}catch{}}}}clearInstance(e=fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...e.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fe){return this.instances.has(e)}getOptions(e=fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:o={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[h,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&f.resolve(c)}return c}onInit(e,o){var a;const c=this.normalizeInstanceIdentifier(o),h=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;h.add(e),this.onInitCallbacks.set(c,h);const f=this.instances.get(c);return f&&e(f,c),()=>{h.delete(e)}}invokeOnInitCallbacks(e,o){const a=this.onInitCallbacks.get(o);if(!!a)for(const c of a)try{c(e,o)}catch{}}getOrInitializeService({instanceIdentifier:e,options:o={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ua(e),options:o}),this.instances.set(e,a),this.instancesOptions.set(e,o),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=fe){return this.component?this.component.multipleInstances?e:fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ua(n){return n===fe?void 0:n}function qa(n){return n.instantiationMode==="EAGER"}/**
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
 */class za{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const o=this.getProvider(e.name);if(o.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);o.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const o=new $a(e,this);return this.providers.set(e,o),o}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Va={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Wa=D.INFO,Ka={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ga=(n,e,...o)=>{if(e<n.logLevel)return;const a=new Date().toISOString(),c=Ka[e];if(c)console[c](`[${a}]  ${n.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=Wa,this._logHandler=Ga,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Va[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Ja=(n,e)=>e.some(o=>n instanceof o);let jn,Mn;function Xa(){return jn||(jn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ya(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vr=new WeakMap,xt=new WeakMap,yr=new WeakMap,_t=new WeakMap,zt=new WeakMap;function Qa(n){const e=new Promise((o,a)=>{const c=()=>{n.removeEventListener("success",h),n.removeEventListener("error",f)},h=()=>{o(oe(n.result)),c()},f=()=>{a(n.error),c()};n.addEventListener("success",h),n.addEventListener("error",f)});return e.then(o=>{o instanceof IDBCursor&&vr.set(o,n)}).catch(()=>{}),zt.set(e,n),e}function Za(n){if(xt.has(n))return;const e=new Promise((o,a)=>{const c=()=>{n.removeEventListener("complete",h),n.removeEventListener("error",f),n.removeEventListener("abort",f)},h=()=>{o(),c()},f=()=>{a(n.error||new DOMException("AbortError","AbortError")),c()};n.addEventListener("complete",h),n.addEventListener("error",f),n.addEventListener("abort",f)});xt.set(n,e)}let Rt={get(n,e,o){if(n instanceof IDBTransaction){if(e==="done")return xt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yr.get(n);if(e==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return oe(n[e])},set(n,e,o){return n[e]=o,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ec(n){Rt=n(Rt)}function tc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...o){const a=n.call(wt(this),e,...o);return yr.set(a,e.sort?e.sort():[e]),oe(a)}:Ya().includes(n)?function(...e){return n.apply(wt(this),e),oe(vr.get(this))}:function(...e){return oe(n.apply(wt(this),e))}}function nc(n){return typeof n=="function"?tc(n):(n instanceof IDBTransaction&&Za(n),Ja(n,Xa())?new Proxy(n,Rt):n)}function oe(n){if(n instanceof IDBRequest)return Qa(n);if(_t.has(n))return _t.get(n);const e=nc(n);return e!==n&&(_t.set(n,e),zt.set(e,n)),e}const wt=n=>zt.get(n);function rt(n,e,{blocked:o,upgrade:a,blocking:c,terminated:h}={}){const f=indexedDB.open(n,e),p=oe(f);return a&&f.addEventListener("upgradeneeded",g=>{a(oe(f.result),g.oldVersion,g.newVersion,oe(f.transaction))}),o&&f.addEventListener("blocked",()=>o()),p.then(g=>{h&&g.addEventListener("close",()=>h()),c&&g.addEventListener("versionchange",()=>c())}).catch(()=>{}),p}function St(n,{blocked:e}={}){const o=indexedDB.deleteDatabase(n);return e&&o.addEventListener("blocked",()=>e()),oe(o).then(()=>{})}const rc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],kt=new Map;function Bn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kt.get(e))return kt.get(e);const o=e.replace(/FromIndex$/,""),a=e!==o,c=ic.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(c||rc.includes(o)))return;const h=async function(f,...p){const g=this.transaction(f,c?"readwrite":"readonly");let w=g.store;return a&&(w=w.index(p.shift())),(await Promise.all([w[o](...p),c&&g.done]))[0]};return kt.set(e,h),h}ec(n=>({...n,get:(e,o,a)=>Bn(e,o)||n.get(e,o,a),has:(e,o)=>!!Bn(e,o)||n.has(e,o)}));/**
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
 */class oc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(sc(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function sc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nt="@firebase/app",Fn="0.9.3";/**
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
 */const ge=new gr("@firebase/app"),ac="@firebase/app-compat",cc="@firebase/analytics-compat",uc="@firebase/analytics",lc="@firebase/app-check-compat",hc="@firebase/app-check",fc="@firebase/auth",dc="@firebase/auth-compat",pc="@firebase/database",gc="@firebase/database-compat",vc="@firebase/functions",yc="@firebase/functions-compat",mc="@firebase/installations",bc="@firebase/installations-compat",_c="@firebase/messaging",wc="@firebase/messaging-compat",Sc="@firebase/performance",kc="@firebase/performance-compat",Tc="@firebase/remote-config",Cc="@firebase/remote-config-compat",Ic="@firebase/storage",Ec="@firebase/storage-compat",Ac="@firebase/firestore",Pc="@firebase/firestore-compat",Oc="firebase";/**
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
 */const Lt="[DEFAULT]",Dc={[Nt]:"fire-core",[ac]:"fire-core-compat",[uc]:"fire-analytics",[cc]:"fire-analytics-compat",[hc]:"fire-app-check",[lc]:"fire-app-check-compat",[fc]:"fire-auth",[dc]:"fire-auth-compat",[pc]:"fire-rtdb",[gc]:"fire-rtdb-compat",[vc]:"fire-fn",[yc]:"fire-fn-compat",[mc]:"fire-iid",[bc]:"fire-iid-compat",[_c]:"fire-fcm",[wc]:"fire-fcm-compat",[Sc]:"fire-perf",[kc]:"fire-perf-compat",[Tc]:"fire-rc",[Cc]:"fire-rc-compat",[Ic]:"fire-gcs",[Ec]:"fire-gcs-compat",[Ac]:"fire-fst",[Pc]:"fire-fst-compat","fire-js":"fire-js",[Oc]:"fire-js-all"};/**
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
 */const Je=new Map,jt=new Map;function xc(n,e){try{n.container.addComponent(e)}catch(o){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,o)}}function se(n){const e=n.name;if(jt.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;jt.set(e,n);for(const o of Je.values())xc(o,n);return!0}function Be(n,e){const o=n.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Rc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ae=new Me("app","Firebase",Rc);/**
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
 */class Nc{constructor(e,o,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}function mr(n,e={}){let o=n;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Lt,automaticDataCollectionEnabled:!1},e),c=a.name;if(typeof c!="string"||!c)throw ae.create("bad-app-name",{appName:String(c)});if(o||(o=Da()),!o)throw ae.create("no-options");const h=Je.get(c);if(h){if(Ge(o,h.options)&&Ge(a,h.config))return h;throw ae.create("duplicate-app",{appName:c})}const f=new za(c);for(const g of jt.values())f.addComponent(g);const p=new Nc(o,a,f);return Je.set(c,p),p}function br(n=Lt){const e=Je.get(n);if(!e&&n===Lt)return mr();if(!e)throw ae.create("no-app",{appName:n});return e}function Q(n,e,o){var a;let c=(a=Dc[n])!==null&&a!==void 0?a:n;o&&(c+=`-${o}`);const h=c.match(/\s|\//),f=e.match(/\s|\//);if(h||f){const p=[`Unable to register library "${c}" with version "${e}":`];h&&p.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&f&&p.push("and"),f&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(p.join(" "));return}se(new Z(`${c}-version`,()=>({library:c,version:e}),"VERSION"))}/**
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
 */const Lc="firebase-heartbeat-database",jc=1,Ne="firebase-heartbeat-store";let Tt=null;function _r(){return Tt||(Tt=rt(Lc,jc,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ne)}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),Tt}async function Mc(n){try{return(await _r()).transaction(Ne).objectStore(Ne).get(wr(n))}catch(e){if(e instanceof be)ge.warn(e.message);else{const o=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(o.message)}}}async function Hn(n,e){try{const a=(await _r()).transaction(Ne,"readwrite");return await a.objectStore(Ne).put(e,wr(n)),a.done}catch(o){if(o instanceof be)ge.warn(o.message);else{const a=ae.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});ge.warn(a.message)}}}function wr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bc=1024,Fc=30*24*60*60*1e3;class Hc{constructor(e){this.container=e,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new Uc(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=$n();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=Fc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$n(),{heartbeatsToSend:o,unsentEntries:a}=$c(this._heartbeatsCache.heartbeats),c=dr(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function $n(){return new Date().toISOString().substring(0,10)}function $c(n,e=Bc){const o=[];let a=n.slice();for(const c of n){const h=o.find(f=>f.agent===c.agent);if(h){if(h.dates.push(c.date),Un(o)>e){h.dates.pop();break}}else if(o.push({agent:c.agent,dates:[c.date]}),Un(o)>e){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class Uc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ut()?qt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(o=e.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Hn(this.app,{lastSentHeartbeatDate:(o=e.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...e.heartbeats]})}else return}}function Un(n){return dr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qc(n){se(new Z("platform-logger",e=>new oc(e),"PRIVATE")),se(new Z("heartbeat",e=>new Hc(e),"PRIVATE")),Q(Nt,Fn,n),Q(Nt,Fn,"esm2017"),Q("fire-js","")}qc("");var zc="firebase",Vc="9.17.1";/**
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
 */Q(zc,Vc,"app");const Sr="@firebase/installations",Vt="0.6.3";/**
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
 */const kr=1e4,Tr=`w:${Vt}`,Cr="FIS_v2",Wc="https://firebaseinstallations.googleapis.com/v1",Kc=60*60*1e3,Gc="installations",Jc="Installations";/**
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
 */const Xc={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ve=new Me(Gc,Jc,Xc);function Ir(n){return n instanceof be&&n.code.includes("request-failed")}/**
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
 */function Er({projectId:n}){return`${Wc}/projects/${n}/installations`}function Ar(n){return{token:n.token,requestStatus:2,expiresIn:Qc(n.expiresIn),creationTime:Date.now()}}async function Pr(n,e){const a=(await e.json()).error;return ve.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Or({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Yc(n,{refreshToken:e}){const o=Or(n);return o.append("Authorization",Zc(e)),o}async function Dr(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Qc(n){return Number(n.replace("s","000"))}function Zc(n){return`${Cr} ${n}`}/**
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
 */async function eu({appConfig:n,heartbeatServiceProvider:e},{fid:o}){const a=Er(n),c=Or(n),h=e.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={fid:o,authVersion:Cr,appId:n.appId,sdkVersion:Tr},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Dr(()=>fetch(a,p));if(g.ok){const w=await g.json();return{fid:w.fid||o,registrationStatus:2,refreshToken:w.refreshToken,authToken:Ar(w.authToken)}}else throw await Pr("Create Installation",g)}/**
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
 */function xr(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function tu(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nu=/^[cdef][\w-]{21}$/,Mt="";function ru(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const o=iu(n);return nu.test(o)?o:Mt}catch{return Mt}}function iu(n){return tu(n).substr(0,22)}/**
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
 */function it(n){return`${n.appName}!${n.appId}`}/**
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
 */const Rr=new Map;function Nr(n,e){const o=it(n);Lr(o,e),ou(o,e)}function Lr(n,e){const o=Rr.get(n);if(!!o)for(const a of o)a(e)}function ou(n,e){const o=su();o&&o.postMessage({key:n,fid:e}),au()}let de=null;function su(){return!de&&"BroadcastChannel"in self&&(de=new BroadcastChannel("[Firebase] FID Change"),de.onmessage=n=>{Lr(n.data.key,n.data.fid)}),de}function au(){Rr.size===0&&de&&(de.close(),de=null)}/**
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
 */const cu="firebase-installations-database",uu=1,ye="firebase-installations-store";let Ct=null;function Wt(){return Ct||(Ct=rt(cu,uu,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ye)}}})),Ct}async function Xe(n,e){const o=it(n),c=(await Wt()).transaction(ye,"readwrite"),h=c.objectStore(ye),f=await h.get(o);return await h.put(e,o),await c.done,(!f||f.fid!==e.fid)&&Nr(n,e.fid),e}async function jr(n){const e=it(n),a=(await Wt()).transaction(ye,"readwrite");await a.objectStore(ye).delete(e),await a.done}async function ot(n,e){const o=it(n),c=(await Wt()).transaction(ye,"readwrite"),h=c.objectStore(ye),f=await h.get(o),p=e(f);return p===void 0?await h.delete(o):await h.put(p,o),await c.done,p&&(!f||f.fid!==p.fid)&&Nr(n,p.fid),p}/**
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
 */async function Kt(n){let e;const o=await ot(n.appConfig,a=>{const c=lu(a),h=hu(n,c);return e=h.registrationPromise,h.installationEntry});return o.fid===Mt?{installationEntry:await e}:{installationEntry:o,registrationPromise:e}}function lu(n){const e=n||{fid:ru(),registrationStatus:0};return Mr(e)}function hu(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ve.create("app-offline"));return{installationEntry:e,registrationPromise:c}}const o={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=fu(n,o);return{installationEntry:o,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:du(n)}:{installationEntry:e}}async function fu(n,e){try{const o=await eu(n,e);return Xe(n.appConfig,o)}catch(o){throw Ir(o)&&o.customData.serverCode===409?await jr(n.appConfig):await Xe(n.appConfig,{fid:e.fid,registrationStatus:0}),o}}async function du(n){let e=await qn(n.appConfig);for(;e.registrationStatus===1;)await xr(100),e=await qn(n.appConfig);if(e.registrationStatus===0){const{installationEntry:o,registrationPromise:a}=await Kt(n);return a||o}return e}function qn(n){return ot(n,e=>{if(!e)throw ve.create("installation-not-found");return Mr(e)})}function Mr(n){return pu(n)?{fid:n.fid,registrationStatus:0}:n}function pu(n){return n.registrationStatus===1&&n.registrationTime+kr<Date.now()}/**
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
 */async function gu({appConfig:n,heartbeatServiceProvider:e},o){const a=vu(n,o),c=Yc(n,o),h=e.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={installation:{sdkVersion:Tr,appId:n.appId}},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Dr(()=>fetch(a,p));if(g.ok){const w=await g.json();return Ar(w)}else throw await Pr("Generate Auth Token",g)}function vu(n,{fid:e}){return`${Er(n)}/${e}/authTokens:generate`}/**
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
 */async function Gt(n,e=!1){let o;const a=await ot(n.appConfig,h=>{if(!Br(h))throw ve.create("not-registered");const f=h.authToken;if(!e&&bu(f))return h;if(f.requestStatus===1)return o=yu(n,e),h;{if(!navigator.onLine)throw ve.create("app-offline");const p=wu(h);return o=mu(n,p),p}});return o?await o:a.authToken}async function yu(n,e){let o=await zn(n.appConfig);for(;o.authToken.requestStatus===1;)await xr(100),o=await zn(n.appConfig);const a=o.authToken;return a.requestStatus===0?Gt(n,e):a}function zn(n){return ot(n,e=>{if(!Br(e))throw ve.create("not-registered");const o=e.authToken;return Su(o)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mu(n,e){try{const o=await gu(n,e),a=Object.assign(Object.assign({},e),{authToken:o});return await Xe(n.appConfig,a),o}catch(o){if(Ir(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await jr(n.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xe(n.appConfig,a)}throw o}}function Br(n){return n!==void 0&&n.registrationStatus===2}function bu(n){return n.requestStatus===2&&!_u(n)}function _u(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Kc}function wu(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Su(n){return n.requestStatus===1&&n.requestTime+kr<Date.now()}/**
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
 */async function ku(n){const e=n,{installationEntry:o,registrationPromise:a}=await Kt(e);return a?a.catch(console.error):Gt(e).catch(console.error),o.fid}/**
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
 */async function Tu(n,e=!1){const o=n;return await Cu(o),(await Gt(o,e)).token}async function Cu(n){const{registrationPromise:e}=await Kt(n);e&&await e}/**
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
 */function Iu(n){if(!n||!n.options)throw It("App Configuration");if(!n.name)throw It("App Name");const e=["projectId","apiKey","appId"];for(const o of e)if(!n.options[o])throw It(o);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function It(n){return ve.create("missing-app-config-values",{valueName:n})}/**
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
 */const Fr="installations",Eu="installations-internal",Au=n=>{const e=n.getProvider("app").getImmediate(),o=Iu(e),a=Be(e,"heartbeat");return{app:e,appConfig:o,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Pu=n=>{const e=n.getProvider("app").getImmediate(),o=Be(e,Fr).getImmediate();return{getId:()=>ku(o),getToken:c=>Tu(o,c)}};function Ou(){se(new Z(Fr,Au,"PUBLIC")),se(new Z(Eu,Pu,"PRIVATE"))}Ou();Q(Sr,Vt);Q(Sr,Vt,"esm2017");/**
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
 */const Ye="analytics",Du="firebase_id",xu="origin",Ru=60*1e3,Nu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hr="https://www.googletagmanager.com/gtag/js";/**
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
 */function $r(n){return Promise.all(n.map(e=>e.catch(o=>o)))}function Lu(n,e){const o=document.createElement("script");o.src=`${Hr}?l=${n}&id=${e}`,o.async=!0,document.head.appendChild(o)}function ju(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Mu(n,e,o,a,c,h){const f=a[c];try{if(f)await e[f];else{const g=(await $r(o)).find(w=>w.measurementId===c);g&&await e[g.appId]}}catch(p){q.error(p)}n("config",c,h)}async function Bu(n,e,o,a,c){try{let h=[];if(c&&c.send_to){let f=c.send_to;Array.isArray(f)||(f=[f]);const p=await $r(o);for(const g of f){const w=p.find(E=>E.measurementId===g),_=w&&e[w.appId];if(_)h.push(_);else{h=[];break}}}h.length===0&&(h=Object.values(e)),await Promise.all(h),n("event",a,c||{})}catch(h){q.error(h)}}function Fu(n,e,o,a){async function c(h,f,p){try{h==="event"?await Bu(n,e,o,f,p):h==="config"?await Mu(n,e,o,a,f,p):h==="consent"?n("consent","update",p):n("set",f)}catch(g){q.error(g)}}return c}function Hu(n,e,o,a,c){let h=function(...f){window[a].push(arguments)};return window[c]&&typeof window[c]=="function"&&(h=window[c]),window[c]=Fu(h,n,e,o),{gtagCore:h,wrappedGtag:window[c]}}function $u(n){const e=window.document.getElementsByTagName("script");for(const o of Object.values(e))if(o.src&&o.src.includes(Hr)&&o.src.includes(n))return o;return null}/**
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
 */const Uu={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},W=new Me("analytics","Analytics",Uu);/**
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
 */const qu=30,zu=1e3;class Vu{constructor(e={},o=zu){this.throttleMetadata=e,this.intervalMillis=o}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,o){this.throttleMetadata[e]=o}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ur=new Vu;function Wu(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ku(n){var e;const{appId:o,apiKey:a}=n,c={method:"GET",headers:Wu(a)},h=Nu.replace("{app-id}",o),f=await fetch(h,c);if(f.status!==200&&f.status!==304){let p="";try{const g=await f.json();!((e=g.error)===null||e===void 0)&&e.message&&(p=g.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function Gu(n,e=Ur,o){const{appId:a,apiKey:c,measurementId:h}=n.options;if(!a)throw W.create("no-app-id");if(!c){if(h)return{measurementId:h,appId:a};throw W.create("no-api-key")}const f=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Yu;return setTimeout(async()=>{p.abort()},o!==void 0?o:Ru),qr({appId:a,apiKey:c,measurementId:h},f,p,e)}async function qr(n,{throttleEndTimeMillis:e,backoffCount:o},a,c=Ur){var h;const{appId:f,measurementId:p}=n;try{await Ju(a,e)}catch(g){if(p)return q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:p};throw g}try{const g=await Ku(n);return c.deleteThrottleMetadata(f),g}catch(g){const w=g;if(!Xu(w)){if(c.deleteThrottleMetadata(f),p)return q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:f,measurementId:p};throw g}const _=Number((h=w==null?void 0:w.customData)===null||h===void 0?void 0:h.httpStatus)===503?Ln(o,c.intervalMillis,qu):Ln(o,c.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:o+1};return c.setThrottleMetadata(f,E),q.debug(`Calling attemptFetch again in ${_} millis`),qr(n,E,a,c)}}function Ju(n,e){return new Promise((o,a)=>{const c=Math.max(e-Date.now(),0),h=setTimeout(o,c);n.addEventListener(()=>{clearTimeout(h),a(W.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xu(n){if(!(n instanceof be)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Yu{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qu(n,e,o,a,c){if(c&&c.global){n("event",o,a);return}else{const h=await e,f=Object.assign(Object.assign({},a),{send_to:h});n("event",o,f)}}/**
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
 */async function Zu(){if(Ut())try{await qt()}catch(n){return q.warn(W.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return q.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function el(n,e,o,a,c,h,f){var p;const g=Gu(n);g.then(k=>{o[k.measurementId]=k.appId,n.options.measurementId&&k.measurementId!==n.options.measurementId&&q.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>q.error(k)),e.push(g);const w=Zu().then(k=>{if(k)return a.getId()}),[_,E]=await Promise.all([g,w]);$u(h)||Lu(h,_.measurementId),c("js",new Date);const T=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return T[xu]="firebase",T.update=!0,E!=null&&(T[Du]=E),c("config",_.measurementId,T),_.measurementId}/**
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
 */class tl{constructor(e){this.app=e}_delete(){return delete Oe[this.app.options.appId],Promise.resolve()}}let Oe={},Vn=[];const Wn={};let Et="dataLayer",nl="gtag",Kn,zr,Gn=!1;function rl(){const n=[];if(Ra()&&n.push("This is a browser extension environment."),pr()||n.push("Cookies are not available."),n.length>0){const e=n.map((a,c)=>`(${c+1}) ${a}`).join(" "),o=W.create("invalid-analytics-context",{errorInfo:e});q.warn(o.message)}}function il(n,e,o){rl();const a=n.options.appId;if(!a)throw W.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Oe[a]!=null)throw W.create("already-exists",{id:a});if(!Gn){ju(Et);const{wrappedGtag:h,gtagCore:f}=Hu(Oe,Vn,Wn,Et,nl);zr=h,Kn=f,Gn=!0}return Oe[a]=el(n,Vn,Wn,e,Kn,Et,o),new tl(n)}function ol(n=br()){n=nt(n);const e=Be(n,Ye);return e.isInitialized()?e.getImmediate():sl(n)}function sl(n,e={}){const o=Be(n,Ye);if(o.isInitialized()){const c=o.getImmediate();if(Ge(e,o.getOptions()))return c;throw W.create("already-initialized")}return o.initialize({options:e})}function al(n,e,o,a){n=nt(n),Qu(zr,Oe[n.app.options.appId],e,o,a).catch(c=>q.error(c))}const Jn="@firebase/analytics",Xn="0.9.3";function cl(){se(new Z(Ye,(e,{options:o})=>{const a=e.getProvider("app").getImmediate(),c=e.getProvider("installations-internal").getImmediate();return il(a,c,o)},"PUBLIC")),se(new Z("analytics-internal",n,"PRIVATE")),Q(Jn,Xn),Q(Jn,Xn,"esm2017");function n(e){try{const o=e.getProvider(Ye).getImmediate();return{logEvent:(a,c,h)=>al(o,a,c,h)}}catch(o){throw W.create("interop-component-reg-failed",{reason:o})}}}cl();/**
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
 */const ul="/firebase-messaging-sw.js",ll="/firebase-cloud-messaging-push-scope",Vr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",hl="https://fcmregistrations.googleapis.com/v1",Wr="google.c.a.c_id",fl="google.c.a.c_l",dl="google.c.a.ts",pl="google.c.a.e";var Yn;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Yn||(Yn={}));/**
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
 */var Le;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Le||(Le={}));/**
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
 */function ie(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function gl(n){const e="=".repeat((4-n.length%4)%4),o=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(o),c=new Uint8Array(a.length);for(let h=0;h<a.length;++h)c[h]=a.charCodeAt(h);return c}/**
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
 */const At="fcm_token_details_db",vl=5,Qn="fcm_token_object_Store";async function yl(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(At))return null;let e=null;return(await rt(At,vl,{upgrade:async(a,c,h,f)=>{var p;if(c<2||!a.objectStoreNames.contains(Qn))return;const g=f.objectStore(Qn),w=await g.index("fcmSenderId").get(n);if(await g.clear(),!!w){if(c===2){const _=w;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(p=_.createTime)!==null&&p!==void 0?p:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:ie(_.vapidKey)}}}else if(c===3){const _=w;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}else if(c===4){const _=w;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}}}})).close(),await St(At),await St("fcm_vapid_details_db"),await St("undefined"),ml(e)?e:null}function ml(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const bl="firebase-messaging-database",_l=1,me="firebase-messaging-store";let Pt=null;function Jt(){return Pt||(Pt=rt(bl,_l,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(me)}}})),Pt}async function Kr(n){const e=Yt(n),a=await(await Jt()).transaction(me).objectStore(me).get(e);if(a)return a;{const c=await yl(n.appConfig.senderId);if(c)return await Xt(n,c),c}}async function Xt(n,e){const o=Yt(n),c=(await Jt()).transaction(me,"readwrite");return await c.objectStore(me).put(e,o),await c.done,e}async function wl(n){const e=Yt(n),a=(await Jt()).transaction(me,"readwrite");await a.objectStore(me).delete(e),await a.done}function Yt({appConfig:n}){return n.appId}/**
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
 */const Sl={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$=new Me("messaging","Messaging",Sl);/**
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
 */async function kl(n,e){const o=await Zt(n),a=Jr(e),c={method:"POST",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(Qt(n.appConfig),c)).json()}catch(f){throw $.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw $.create("token-subscribe-failed",{errorInfo:f})}if(!h.token)throw $.create("token-subscribe-no-token");return h.token}async function Tl(n,e){const o=await Zt(n),a=Jr(e.subscriptionOptions),c={method:"PATCH",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(`${Qt(n.appConfig)}/${e.token}`,c)).json()}catch(f){throw $.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw $.create("token-update-failed",{errorInfo:f})}if(!h.token)throw $.create("token-update-no-token");return h.token}async function Gr(n,e){const a={method:"DELETE",headers:await Zt(n)};try{const h=await(await fetch(`${Qt(n.appConfig)}/${e}`,a)).json();if(h.error){const f=h.error.message;throw $.create("token-unsubscribe-failed",{errorInfo:f})}}catch(c){throw $.create("token-unsubscribe-failed",{errorInfo:c==null?void 0:c.toString()})}}function Qt({projectId:n}){return`${hl}/projects/${n}/registrations`}async function Zt({appConfig:n,installations:e}){const o=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${o}`})}function Jr({p256dh:n,auth:e,endpoint:o,vapidKey:a}){const c={web:{endpoint:o,auth:e,p256dh:n}};return a!==Vr&&(c.web.applicationPubKey=a),c}/**
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
 */const Cl=7*24*60*60*1e3;async function Il(n){const e=await Pl(n.swRegistration,n.vapidKey),o={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ie(e.getKey("auth")),p256dh:ie(e.getKey("p256dh"))},a=await Kr(n.firebaseDependencies);if(a){if(Ol(a.subscriptionOptions,o))return Date.now()>=a.createTime+Cl?Al(n,{token:a.token,createTime:Date.now(),subscriptionOptions:o}):a.token;try{await Gr(n.firebaseDependencies,a.token)}catch(c){console.warn(c)}return Zn(n.firebaseDependencies,o)}else return Zn(n.firebaseDependencies,o)}async function El(n){const e=await Kr(n.firebaseDependencies);e&&(await Gr(n.firebaseDependencies,e.token),await wl(n.firebaseDependencies));const o=await n.swRegistration.pushManager.getSubscription();return o?o.unsubscribe():!0}async function Al(n,e){try{const o=await Tl(n.firebaseDependencies,e),a=Object.assign(Object.assign({},e),{token:o,createTime:Date.now()});return await Xt(n.firebaseDependencies,a),o}catch(o){throw await El(n),o}}async function Zn(n,e){const a={token:await kl(n,e),createTime:Date.now(),subscriptionOptions:e};return await Xt(n,a),a.token}async function Pl(n,e){const o=await n.pushManager.getSubscription();return o||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gl(e)})}function Ol(n,e){const o=e.vapidKey===n.vapidKey,a=e.endpoint===n.endpoint,c=e.auth===n.auth,h=e.p256dh===n.p256dh;return o&&a&&c&&h}/**
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
 */function er(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Dl(e,n),xl(e,n),Rl(e,n),e}function Dl(n,e){if(!e.notification)return;n.notification={};const o=e.notification.title;o&&(n.notification.title=o);const a=e.notification.body;a&&(n.notification.body=a);const c=e.notification.image;c&&(n.notification.image=c);const h=e.notification.icon;h&&(n.notification.icon=h)}function xl(n,e){!e.data||(n.data=e.data)}function Rl(n,e){var o,a,c,h,f;if(!e.fcmOptions&&!(!((o=e.notification)===null||o===void 0)&&o.click_action))return;n.fcmOptions={};const p=(c=(a=e.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&c!==void 0?c:(h=e.notification)===null||h===void 0?void 0:h.click_action;p&&(n.fcmOptions.link=p);const g=(f=e.fcmOptions)===null||f===void 0?void 0:f.analytics_label;g&&(n.fcmOptions.analyticsLabel=g)}/**
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
 */function Nl(n){return typeof n=="object"&&!!n&&Wr in n}/**
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
 */Xr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Xr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Xr(n,e){const o=[];for(let a=0;a<n.length;a++)o.push(n.charAt(a)),a<e.length&&o.push(e.charAt(a));return o.join("")}/**
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
 */function Ll(n){if(!n||!n.options)throw Ot("App Configuration Object");if(!n.name)throw Ot("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:o}=n;for(const a of e)if(!o[a])throw Ot(a);return{appName:n.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function Ot(n){return $.create("missing-app-config-values",{valueName:n})}/**
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
 */class jl{constructor(e,o,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const c=Ll(e);this.firebaseDependencies={app:e,appConfig:c,installations:o,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
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
 */async function Ml(n){try{n.swRegistration=await navigator.serviceWorker.register(ul,{scope:ll}),n.swRegistration.update().catch(()=>{})}catch(e){throw $.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Bl(n,e){if(!e&&!n.swRegistration&&await Ml(n),!(!e&&!!n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function Fl(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Vr)}/**
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
 */async function Yr(n,e){if(!navigator)throw $.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $.create("permission-blocked");return await Fl(n,e==null?void 0:e.vapidKey),await Bl(n,e==null?void 0:e.serviceWorkerRegistration),Il(n)}/**
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
 */async function Hl(n,e,o){const a=$l(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:o[Wr],message_name:o[fl],message_time:o[dl],message_device_time:Math.floor(Date.now()/1e3)})}function $l(n){switch(n){case Le.NOTIFICATION_CLICKED:return"notification_open";case Le.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Ul(n,e){const o=e.data;if(!o.isFirebaseMessaging)return;n.onMessageHandler&&o.messageType===Le.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(er(o)):n.onMessageHandler.next(er(o)));const a=o.data;Nl(a)&&a[pl]==="1"&&await Hl(n,o.messageType,a)}const tr="@firebase/messaging",nr="0.12.3";/**
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
 */const ql=n=>{const e=new jl(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",o=>Ul(e,o)),e},zl=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:a=>Yr(e,a)}};function Vl(){se(new Z("messaging",ql,"PUBLIC")),se(new Z("messaging-internal",zl,"PRIVATE")),Q(tr,nr),Q(tr,nr,"esm2017")}/**
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
 */async function Wl(){try{await qt()}catch{return!1}return typeof window<"u"&&Ut()&&pr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Kl(n=br()){return Wl().then(e=>{if(!e)throw $.create("unsupported-browser")},e=>{throw $.create("indexed-db-unsupported")}),Be(nt(n),"messaging").getImmediate()}async function Gl(n,e){return n=nt(n),Yr(n,e)}Vl();function Jl(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Fe(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function Ve(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ve=function(o){return typeof o}:Ve=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ve(n)}function je(n){Fe(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||Ve(n)==="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function rr(n,e){Fe(2,arguments);var o=je(n),a=Jl(e);return isNaN(a)?new Date(NaN):(a&&o.setDate(o.getDate()+a),o)}function We(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?We=function(o){return typeof o}:We=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},We(n)}function ir(n){return Fe(1,arguments),n instanceof Date||We(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Xl(n,e){Fe(2,arguments);var o=je(n),a=je(e);return o.getTime()>a.getTime()}function Yl(n,e){Fe(2,arguments);var o=je(n),a=je(e);return o.getTime()<a.getTime()}const Ql={apiKey:"AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",authDomain:"agroarca-equipamentos.firebaseapp.com",projectId:"agroarca-equipamentos",messagingSenderId:"260002359203",appId:"1:260002359203:web:8c19a187bf2fe28079dc16",measurementId:"G-DHSLGFC76R"},Zl="BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU",or=14;let Se;class eh{constructor(){R(this,"app");R(this,"messaging");R(this,"analytics");this.app=mr(Ql),this.messaging=Kl(this.app),this.analytics=ol(this.app)}solicitarPermissao(){return this.solicitarPermissaoNotificacoes().then(this.criarToken)}solicitarPermissaoNotificacoes(){return new Promise((e,o)=>{if(Notification.permission==="denied"){o();return}if(Notification.permission==="granted"){e();return}localStorage.dataSolicitouPermNotificacao=new Date,console.log("salvar data"),Notification.requestPermission().then(a=>{if(Notification.permission==="granted"){e();return}o()})})}iniciarNotificacoes(){Notification.permission==="granted"&&this.precisaRenovarToken()&&this.criarToken()}criarToken(){Gl(Se.messaging,{vapidKey:Zl}).then(e=>{e&&Se.salvarToken(e)})}salvarToken(e){la.post("/notificacao/token",{token:e}).then(()=>{localStorage.ultimaRenovacaoToken=new Date})}precisaRenovarToken(){let e=Date.parse(localStorage.ultimaRenovacaoToken);return ir(e)?Xl(new Date,rr(new Date(e),or)):!1}temPermissao(){return Notification.permission==="granted"}jaSolicitouPermissao(){let e=new Date(Date.parse(localStorage.dataSolicitouPermNotificacao));return ir(e)?Yl(new Date,rr(new Date(e),or)):!1}}function th(){return Se||(Se=new eh,Se)}function Bt(n){return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bt(n)}function j(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function sr(n,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function M(n,e,o){return e&&sr(n.prototype,e),o&&sr(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ft(){return Ft=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},Ft.apply(this,arguments)}function z(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ht(n,e)}function Qe(n){return Qe=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},Qe(n)}function Ht(n,e){return Ht=Object.setPrototypeOf||function(a,c){return a.__proto__=c,a},Ht(n,e)}function nh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rh(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ih(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rh(n)}function V(n){var e=nh();return function(){var a=Qe(n),c;if(e){var h=Qe(this).constructor;c=Reflect.construct(a,arguments,h)}else c=a.apply(this,arguments);return ih(this,c)}}var en=function(){function n(){j(this,n)}return M(n,[{key:"listenForWhisper",value:function(o,a){return this.listen(".client-"+o,a)}},{key:"notification",value:function(o){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",o)}},{key:"stopListeningForWhisper",value:function(o,a){return this.stopListening(".client-"+o,a)}}]),n}(),Qr=function(){function n(e){j(this,n),this.setNamespace(e)}return M(n,[{key:"format",value:function(o){return o.charAt(0)==="."||o.charAt(0)==="\\"?o.substr(1):(this.namespace&&(o=this.namespace+"."+o),o.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(o){this.namespace=o}}]),n}(),st=function(n){z(o,n);var e=V(o);function o(a,c,h){var f;return j(this,o),f=e.call(this),f.name=c,f.pusher=a,f.options=h,f.eventFormatter=new Qr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"listenToAll",value:function(c){var h=this;return this.subscription.bind_global(function(f,p){if(!f.startsWith("pusher:")){var g=h.options.namespace.replace(/\./g,"\\"),w=f.startsWith(g)?f.substring(g.length+1):"."+f;c(w,p)}}),this}},{key:"stopListening",value:function(c,h){return h?this.subscription.unbind(this.eventFormatter.format(c),h):this.subscription.unbind(this.eventFormatter.format(c)),this}},{key:"stopListeningToAll",value:function(c){return c?this.subscription.unbind_global(c):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(c){return this.on("pusher:subscription_succeeded",function(){c()}),this}},{key:"error",value:function(c){return this.on("pusher:subscription_error",function(h){c(h)}),this}},{key:"on",value:function(c,h){return this.subscription.bind(c,h),this}}]),o}(en),oh=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(st),sh=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(st),ah=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("pusher:subscription_succeeded",function(h){c(Object.keys(h.members).map(function(f){return h.members[f]}))}),this}},{key:"joining",value:function(c){return this.on("pusher:member_added",function(h){c(h.info)}),this}},{key:"leaving",value:function(c){return this.on("pusher:member_removed",function(h){c(h.info)}),this}},{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(st),Zr=function(n){z(o,n);var e=V(o);function o(a,c,h){var f;return j(this,o),f=e.call(this),f.events={},f.listeners={},f.name=c,f.socket=a,f.options=h,f.eventFormatter=new Qr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"stopListening",value:function(c,h){return this.unbindEvent(this.eventFormatter.format(c),h),this}},{key:"subscribed",value:function(c){return this.on("connect",function(h){c(h)}),this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){var f=this;return this.listeners[c]=this.listeners[c]||[],this.events[c]||(this.events[c]=function(p,g){f.name===p&&f.listeners[c]&&f.listeners[c].forEach(function(w){return w(g)})},this.socket.on(c,this.events[c])),this.listeners[c].push(h),this}},{key:"unbind",value:function(){var c=this;Object.keys(this.events).forEach(function(h){c.unbindEvent(h)})}},{key:"unbindEvent",value:function(c,h){this.listeners[c]=this.listeners[c]||[],h&&(this.listeners[c]=this.listeners[c].filter(function(f){return f!==h})),(!h||this.listeners[c].length===0)&&(this.events[c]&&(this.socket.removeListener(c,this.events[c]),delete this.events[c]),delete this.listeners[c])}}]),o}(en),ei=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(c),data:h}),this}}]),o}(Zr),ch=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("presence:subscribed",function(h){c(h.map(function(f){return f.user_info}))}),this}},{key:"joining",value:function(c){return this.on("presence:joining",function(h){return c(h.user_info)}),this}},{key:"leaving",value:function(c){return this.on("presence:leaving",function(h){return c(h.user_info)}),this}}]),o}(ei),Ze=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(c,h){return this}},{key:"listenToAll",value:function(c){return this}},{key:"stopListening",value:function(c,h){return this}},{key:"subscribed",value:function(c){return this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){return this}}]),o}(en),ar=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this}}]),o}(Ze),uh=function(n){z(o,n);var e=V(o);function o(){return j(this,o),e.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this}},{key:"joining",value:function(c){return this}},{key:"leaving",value:function(c){return this}},{key:"whisper",value:function(c,h){return this}}]),o}(Ze),tn=function(){function n(e){j(this,n),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(e),this.connect()}return M(n,[{key:"setOptions",value:function(o){this.options=Ft(this._defaultOptions,o);var a=this.csrfToken();return a&&(this.options.auth.headers["X-CSRF-TOKEN"]=a,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=a),a=this.options.bearerToken,a&&(this.options.auth.headers.Authorization="Bearer "+a,this.options.userAuthentication.headers.Authorization="Bearer "+a),o}},{key:"csrfToken",value:function(){var o;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(o=document.querySelector('meta[name="csrf-token"]'))?o.getAttribute("content"):null}}]),n}(),lh=function(n){z(o,n);var e=V(o);function o(){var a;return j(this,o),a=e.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new st(this.pusher,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new oh(this.pusher,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"encryptedPrivateChannel",value:function(c){return this.channels["private-encrypted-"+c]||(this.channels["private-encrypted-"+c]=new sh(this.pusher,"private-encrypted-"+c,this.options)),this.channels["private-encrypted-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ah(this.pusher,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"private-encrypted-"+c,"presence-"+c];f.forEach(function(p,g){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),o}(tn),hh=function(n){z(o,n);var e=V(o);function o(){var a;return j(this,o),a=e.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){var c=this,h=this.getSocketIO();return this.socket=h(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(c.channels).forEach(function(f){f.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new Zr(this.socket,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new ei(this.socket,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ch(this.socket,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"presence-"+c];f.forEach(function(p){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),o}(tn),fh=function(n){z(o,n);var e=V(o);function o(){var a;return j(this,o),a=e.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){}},{key:"listen",value:function(c,h,f){return new Ze}},{key:"channel",value:function(c){return new Ze}},{key:"privateChannel",value:function(c){return new ar}},{key:"encryptedPrivateChannel",value:function(c){return new ar}},{key:"presenceChannel",value:function(c){return new uh}},{key:"leave",value:function(c){}},{key:"leaveChannel",value:function(c){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),o}(tn),dh=function(){function n(e){j(this,n),this.options=e,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return M(n,[{key:"channel",value:function(o){return this.connector.channel(o)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new lh(this.options):this.options.broadcaster=="socket.io"?this.connector=new hh(this.options):this.options.broadcaster=="null"?this.connector=new fh(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(o){return this.connector.presenceChannel(o)}},{key:"leave",value:function(o){this.connector.leave(o)}},{key:"leaveChannel",value:function(o){this.connector.leaveChannel(o)}},{key:"leaveAllChannels",value:function(){for(var o in this.connector.channels)this.leaveChannel(o)}},{key:"listen",value:function(o,a,c){return this.connector.listen(o,a,c)}},{key:"private",value:function(o){return this.connector.privateChannel(o)}},{key:"encryptedPrivate",value:function(o){return this.connector.encryptedPrivateChannel(o)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":Bt(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var o=this;Vue.http.interceptors.push(function(a,c){o.socketId()&&a.headers.set("X-Socket-ID",o.socketId()),c()})}},{key:"registerAxiosRequestInterceptor",value:function(){var o=this;axios.interceptors.request.use(function(a){return o.socketId()&&(a.headers["X-Socket-Id"]=o.socketId()),a})}},{key:"registerjQueryAjaxSetup",value:function(){var o=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(a,c,h){o.socketId()&&h.setRequestHeader("X-Socket-Id",o.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var o=this;document.addEventListener("turbo:before-fetch-request",function(a){a.detail.fetchOptions.headers["X-Socket-Id"]=o.socketId()})}}]),n}(),ti={exports:{}};/*!
 * Pusher JavaScript Library v8.0.1
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */(function(n,e){(function(a,c){n.exports=c()})(window,function(){return function(o){var a={};function c(h){if(a[h])return a[h].exports;var f=a[h]={i:h,l:!1,exports:{}};return o[h].call(f.exports,f,f.exports,c),f.l=!0,f.exports}return c.m=o,c.c=a,c.d=function(h,f,p){c.o(h,f)||Object.defineProperty(h,f,{enumerable:!0,get:p})},c.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},c.t=function(h,f){if(f&1&&(h=c(h)),f&8||f&4&&typeof h=="object"&&h&&h.__esModule)return h;var p=Object.create(null);if(c.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:h}),f&2&&typeof h!="string")for(var g in h)c.d(p,g,function(w){return h[w]}.bind(null,g));return p},c.n=function(h){var f=h&&h.__esModule?function(){return h.default}:function(){return h};return c.d(f,"a",f),f},c.o=function(h,f){return Object.prototype.hasOwnProperty.call(h,f)},c.p="",c(c.s=2)}([function(o,a,c){var h=this&&this.__extends||function(){var C=function(y,m){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,x){A.__proto__=x}||function(A,x){for(var B in x)x.hasOwnProperty(B)&&(A[B]=x[B])},C(y,m)};return function(y,m){C(y,m);function A(){this.constructor=y}y.prototype=m===null?Object.create(m):(A.prototype=m.prototype,new A)}}();Object.defineProperty(a,"__esModule",{value:!0});var f=256,p=function(){function C(y){y===void 0&&(y="="),this._paddingCharacter=y}return C.prototype.encodedLength=function(y){return this._paddingCharacter?(y+2)/3*4|0:(y*8+5)/6|0},C.prototype.encode=function(y){for(var m="",A=0;A<y.length-2;A+=3){var x=y[A]<<16|y[A+1]<<8|y[A+2];m+=this._encodeByte(x>>>3*6&63),m+=this._encodeByte(x>>>2*6&63),m+=this._encodeByte(x>>>1*6&63),m+=this._encodeByte(x>>>0*6&63)}var B=y.length-A;if(B>0){var x=y[A]<<16|(B===2?y[A+1]<<8:0);m+=this._encodeByte(x>>>3*6&63),m+=this._encodeByte(x>>>2*6&63),B===2?m+=this._encodeByte(x>>>1*6&63):m+=this._paddingCharacter||"",m+=this._paddingCharacter||""}return m},C.prototype.maxDecodedLength=function(y){return this._paddingCharacter?y/4*3|0:(y*6+7)/8|0},C.prototype.decodedLength=function(y){return this.maxDecodedLength(y.length-this._getPaddingLength(y))},C.prototype.decode=function(y){if(y.length===0)return new Uint8Array(0);for(var m=this._getPaddingLength(y),A=y.length-m,x=new Uint8Array(this.maxDecodedLength(A)),B=0,H=0,K=0,ee=0,J=0,G=0,X=0;H<A-4;H+=4)ee=this._decodeChar(y.charCodeAt(H+0)),J=this._decodeChar(y.charCodeAt(H+1)),G=this._decodeChar(y.charCodeAt(H+2)),X=this._decodeChar(y.charCodeAt(H+3)),x[B++]=ee<<2|J>>>4,x[B++]=J<<4|G>>>2,x[B++]=G<<6|X,K|=ee&f,K|=J&f,K|=G&f,K|=X&f;if(H<A-1&&(ee=this._decodeChar(y.charCodeAt(H)),J=this._decodeChar(y.charCodeAt(H+1)),x[B++]=ee<<2|J>>>4,K|=ee&f,K|=J&f),H<A-2&&(G=this._decodeChar(y.charCodeAt(H+2)),x[B++]=J<<4|G>>>2,K|=G&f),H<A-3&&(X=this._decodeChar(y.charCodeAt(H+3)),x[B++]=G<<6|X,K|=X&f),K!==0)throw new Error("Base64Coder: incorrect characters for decoding");return x},C.prototype._encodeByte=function(y){var m=y;return m+=65,m+=25-y>>>8&0-65-26+97,m+=51-y>>>8&26-97-52+48,m+=61-y>>>8&52-48-62+43,m+=62-y>>>8&62-43-63+47,String.fromCharCode(m)},C.prototype._decodeChar=function(y){var m=f;return m+=(42-y&y-44)>>>8&-f+y-43+62,m+=(46-y&y-48)>>>8&-f+y-47+63,m+=(47-y&y-58)>>>8&-f+y-48+52,m+=(64-y&y-91)>>>8&-f+y-65+0,m+=(96-y&y-123)>>>8&-f+y-97+26,m},C.prototype._getPaddingLength=function(y){var m=0;if(this._paddingCharacter){for(var A=y.length-1;A>=0&&y[A]===this._paddingCharacter;A--)m++;if(y.length<4||m>2)throw new Error("Base64Coder: incorrect padding")}return m},C}();a.Coder=p;var g=new p;function w(C){return g.encode(C)}a.encode=w;function _(C){return g.decode(C)}a.decode=_;var E=function(C){h(y,C);function y(){return C!==null&&C.apply(this,arguments)||this}return y.prototype._encodeByte=function(m){var A=m;return A+=65,A+=25-m>>>8&0-65-26+97,A+=51-m>>>8&26-97-52+48,A+=61-m>>>8&52-48-62+45,A+=62-m>>>8&62-45-63+95,String.fromCharCode(A)},y.prototype._decodeChar=function(m){var A=f;return A+=(44-m&m-46)>>>8&-f+m-45+62,A+=(94-m&m-96)>>>8&-f+m-95+63,A+=(47-m&m-58)>>>8&-f+m-48+52,A+=(64-m&m-91)>>>8&-f+m-65+0,A+=(96-m&m-123)>>>8&-f+m-97+26,A},y}(p);a.URLSafeCoder=E;var T=new E;function k(C){return T.encode(C)}a.encodeURLSafe=k;function O(C){return T.decode(C)}a.decodeURLSafe=O,a.encodedLength=function(C){return g.encodedLength(C)},a.maxDecodedLength=function(C){return g.maxDecodedLength(C)},a.decodedLength=function(C){return g.decodedLength(C)}},function(o,a,c){Object.defineProperty(a,"__esModule",{value:!0});var h="utf8: invalid string",f="utf8: invalid source encoding";function p(_){for(var E=new Uint8Array(g(_)),T=0,k=0;k<_.length;k++){var O=_.charCodeAt(k);O<128?E[T++]=O:O<2048?(E[T++]=192|O>>6,E[T++]=128|O&63):O<55296?(E[T++]=224|O>>12,E[T++]=128|O>>6&63,E[T++]=128|O&63):(k++,O=(O&1023)<<10,O|=_.charCodeAt(k)&1023,O+=65536,E[T++]=240|O>>18,E[T++]=128|O>>12&63,E[T++]=128|O>>6&63,E[T++]=128|O&63)}return E}a.encode=p;function g(_){for(var E=0,T=0;T<_.length;T++){var k=_.charCodeAt(T);if(k<128)E+=1;else if(k<2048)E+=2;else if(k<55296)E+=3;else if(k<=57343){if(T>=_.length-1)throw new Error(h);T++,E+=4}else throw new Error(h)}return E}a.encodedLength=g;function w(_){for(var E=[],T=0;T<_.length;T++){var k=_[T];if(k&128){var O=void 0;if(k<224){if(T>=_.length)throw new Error(f);var C=_[++T];if((C&192)!==128)throw new Error(f);k=(k&31)<<6|C&63,O=128}else if(k<240){if(T>=_.length-1)throw new Error(f);var C=_[++T],y=_[++T];if((C&192)!==128||(y&192)!==128)throw new Error(f);k=(k&15)<<12|(C&63)<<6|y&63,O=2048}else if(k<248){if(T>=_.length-2)throw new Error(f);var C=_[++T],y=_[++T],m=_[++T];if((C&192)!==128||(y&192)!==128||(m&192)!==128)throw new Error(f);k=(k&15)<<18|(C&63)<<12|(y&63)<<6|m&63,O=65536}else throw new Error(f);if(k<O||k>=55296&&k<=57343)throw new Error(f);if(k>=65536){if(k>1114111)throw new Error(f);k-=65536,E.push(String.fromCharCode(55296|k>>10)),k=56320|k&1023}}E.push(String.fromCharCode(k))}return E.join("")}a.decode=w},function(o,a,c){o.exports=c(3).default},function(o,a,c){c.r(a);var h=function(){function r(t,i){this.lastId=0,this.prefix=t,this.name=i}return r.prototype.create=function(t){this.lastId++;var i=this.lastId,s=this.prefix+i,u=this.name+"["+i+"]",l=!1,d=function(){l||(t.apply(null,arguments),l=!0)};return this[i]=d,{number:i,id:s,name:u,callback:d}},r.prototype.remove=function(t){delete this[t.number]},r}(),f=new h("_pusher_script_","Pusher.ScriptReceivers"),p={VERSION:"8.0.1",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},g=p,w=function(){function r(t){this.options=t,this.receivers=t.receivers||f,this.loading={}}return r.prototype.load=function(t,i,s){var u=this;if(u.loading[t]&&u.loading[t].length>0)u.loading[t].push(s);else{u.loading[t]=[s];var l=I.createScriptRequest(u.getPath(t,i)),d=u.receivers.create(function(v){if(u.receivers.remove(d),u.loading[t]){var S=u.loading[t];delete u.loading[t];for(var b=function(L){L||l.cleanup()},P=0;P<S.length;P++)S[P](v,b)}});l.send(d)}},r.prototype.getRoot=function(t){var i,s=I.getDocument().location.protocol;return t&&t.useTLS||s==="https:"?i=this.options.cdn_https:i=this.options.cdn_http,i.replace(/\/*$/,"")+"/"+this.options.version},r.prototype.getPath=function(t,i){return this.getRoot(i)+"/"+t+this.options.suffix+".js"},r}(),_=w,E=new h("_pusher_dependencies","Pusher.DependenciesReceivers"),T=new _({cdn_http:g.cdn_http,cdn_https:g.cdn_https,version:g.VERSION,suffix:g.dependency_suffix,receivers:E}),k={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}},O=function(r){var t="See:",i=k.urls[r];if(!i)return"";var s;return i.fullUrl?s=i.fullUrl:i.path&&(s=k.baseUrl+i.path),s?t+" "+s:""},C={buildLogSuffix:O},y;(function(r){r.UserAuthentication="user-authentication",r.ChannelAuthorization="channel-authorization"})(y||(y={}));var m=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),A=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),x=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),B=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),H=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),K=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),ee=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),J=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),G=function(r){m(t,r);function t(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return t}(Error),X=function(r){m(t,r);function t(i,s){var u=this.constructor,l=r.call(this,s)||this;return l.status=i,Object.setPrototypeOf(l,u.prototype),l}return t}(Error),ni=function(r,t,i,s,u){var l=I.createXHR();l.open("POST",i.endpoint,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var d in i.headers)l.setRequestHeader(d,i.headers[d]);if(i.headersProvider!=null){var v=i.headersProvider();for(var d in v)l.setRequestHeader(d,v[d])}return l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){var S=void 0,b=!1;try{S=JSON.parse(l.responseText),b=!0}catch{u(new X(200,"JSON returned from "+s.toString()+" endpoint was invalid, yet status code was 200. Data was: "+l.responseText),null)}b&&u(null,S)}else{var P="";switch(s){case y.UserAuthentication:P=C.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:P="Clients must be authorized to join private or presence channels. "+C.buildLogSuffix("authorizationEndpoint");break}u(new X(l.status,"Unable to retrieve auth string from "+s.toString()+" endpoint - "+("received status: "+l.status+" from "+i.endpoint+". "+P)),null)}},l.send(t),l},ri=ni;function ii(r){return ci(si(r))}var Te=String.fromCharCode,He="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oi=function(r){var t=r.charCodeAt(0);return t<128?r:t<2048?Te(192|t>>>6)+Te(128|t&63):Te(224|t>>>12&15)+Te(128|t>>>6&63)+Te(128|t&63)},si=function(r){return r.replace(/[^\x00-\x7F]/g,oi)},ai=function(r){var t=[0,2,1][r.length%3],i=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),s=[He.charAt(i>>>18),He.charAt(i>>>12&63),t>=2?"=":He.charAt(i>>>6&63),t>=1?"=":He.charAt(i&63)];return s.join("")},ci=window.btoa||function(r){return r.replace(/[\s\S]{1,3}/g,ai)},ui=function(){function r(t,i,s,u){var l=this;this.clear=i,this.timer=t(function(){l.timer&&(l.timer=u(l.timer))},s)}return r.prototype.isRunning=function(){return this.timer!==null},r.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},r}(),nn=ui,rn=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}();function li(r){window.clearTimeout(r)}function hi(r){window.clearInterval(r)}var ce=function(r){rn(t,r);function t(i,s){return r.call(this,setTimeout,li,i,function(u){return s(),null})||this}return t}(nn),fi=function(r){rn(t,r);function t(i,s){return r.call(this,setInterval,hi,i,function(u){return s(),u})||this}return t}(nn),di={now:function(){return Date.now?Date.now():new Date().valueOf()},defer:function(r){return new ce(0,r)},method:function(r){var t=Array.prototype.slice.call(arguments,1);return function(i){return i[r].apply(i,t.concat(arguments))}}},F=di;function U(r){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0;s<t.length;s++){var u=t[s];for(var l in u)u[l]&&u[l].constructor&&u[l].constructor===Object?r[l]=U(r[l]||{},u[l]):r[l]=u[l]}return r}function pi(){for(var r=["Pusher"],t=0;t<arguments.length;t++)typeof arguments[t]=="string"?r.push(arguments[t]):r.push($e(arguments[t]));return r.join(" : ")}function on(r,t){var i=Array.prototype.indexOf;if(r===null)return-1;if(i&&r.indexOf===i)return r.indexOf(t);for(var s=0,u=r.length;s<u;s++)if(r[s]===t)return s;return-1}function te(r,t){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(r[i],i,r)}function sn(r){var t=[];return te(r,function(i,s){t.push(s)}),t}function gi(r){var t=[];return te(r,function(i){t.push(i)}),t}function Ce(r,t,i){for(var s=0;s<r.length;s++)t.call(i||window,r[s],s,r)}function an(r,t){for(var i=[],s=0;s<r.length;s++)i.push(t(r[s],s,r,i));return i}function vi(r,t){var i={};return te(r,function(s,u){i[u]=t(s)}),i}function cn(r,t){t=t||function(u){return!!u};for(var i=[],s=0;s<r.length;s++)t(r[s],s,r,i)&&i.push(r[s]);return i}function un(r,t){var i={};return te(r,function(s,u){(t&&t(s,u,r,i)||Boolean(s))&&(i[u]=s)}),i}function yi(r){var t=[];return te(r,function(i,s){t.push([s,i])}),t}function ln(r,t){for(var i=0;i<r.length;i++)if(t(r[i],i,r))return!0;return!1}function mi(r,t){for(var i=0;i<r.length;i++)if(!t(r[i],i,r))return!1;return!0}function bi(r){return vi(r,function(t){return typeof t=="object"&&(t=$e(t)),encodeURIComponent(ii(t.toString()))})}function _i(r){var t=un(r,function(s){return s!==void 0}),i=an(yi(bi(t)),F.method("join","=")).join("&");return i}function wi(r){var t=[],i=[];return function s(u,l){var d,v,S;switch(typeof u){case"object":if(!u)return null;for(d=0;d<t.length;d+=1)if(t[d]===u)return{$ref:i[d]};if(t.push(u),i.push(l),Object.prototype.toString.apply(u)==="[object Array]")for(S=[],d=0;d<u.length;d+=1)S[d]=s(u[d],l+"["+d+"]");else{S={};for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&(S[v]=s(u[v],l+"["+JSON.stringify(v)+"]"))}return S;case"number":case"string":case"boolean":return u}}(r,"$")}function $e(r){try{return JSON.stringify(r)}catch{return JSON.stringify(wi(r))}}var Si=function(){function r(){this.globalLog=function(t){window.console&&window.console.log&&window.console.log(t)}}return r.prototype.debug=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];this.log(this.globalLog,t)},r.prototype.warn=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];this.log(this.globalLogWarn,t)},r.prototype.error=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];this.log(this.globalLogError,t)},r.prototype.globalLogWarn=function(t){window.console&&window.console.warn?window.console.warn(t):this.globalLog(t)},r.prototype.globalLogError=function(t){window.console&&window.console.error?window.console.error(t):this.globalLogWarn(t)},r.prototype.log=function(t){var i=pi.apply(this,arguments);if(yt.log)yt.log(i);else if(yt.logToConsole){var s=t.bind(this);s(i)}},r}(),N=new Si,ki=function(r,t,i,s,u){(i.headers!==void 0||i.headersProvider!=null)&&N.warn("To send headers with the "+s.toString()+" request, you must use AJAX, rather than JSONP.");var l=r.nextAuthCallbackID.toString();r.nextAuthCallbackID++;var d=r.getDocument(),v=d.createElement("script");r.auth_callbacks[l]=function(P){u(null,P)};var S="Pusher.auth_callbacks['"+l+"']";v.src=i.endpoint+"?callback="+encodeURIComponent(S)+"&"+t;var b=d.getElementsByTagName("head")[0]||d.documentElement;b.insertBefore(v,b.firstChild)},Ti=ki,Ci=function(){function r(t){this.src=t}return r.prototype.send=function(t){var i=this,s="Error loading "+i.src;i.script=document.createElement("script"),i.script.id=t.id,i.script.src=i.src,i.script.type="text/javascript",i.script.charset="UTF-8",i.script.addEventListener?(i.script.onerror=function(){t.callback(s)},i.script.onload=function(){t.callback(null)}):i.script.onreadystatechange=function(){(i.script.readyState==="loaded"||i.script.readyState==="complete")&&t.callback(null)},i.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(i.errorScript=document.createElement("script"),i.errorScript.id=t.id+"_error",i.errorScript.text=t.name+"('"+s+"');",i.script.async=i.errorScript.async=!1):i.script.async=!0;var u=document.getElementsByTagName("head")[0];u.insertBefore(i.script,u.firstChild),i.errorScript&&u.insertBefore(i.errorScript,i.script.nextSibling)},r.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},r}(),Ii=Ci,Ei=function(){function r(t,i){this.url=t,this.data=i}return r.prototype.send=function(t){if(!this.request){var i=_i(this.data),s=this.url+"/"+t.number+"?"+i;this.request=I.createScriptRequest(s),this.request.send(t)}},r.prototype.cleanup=function(){this.request&&this.request.cleanup()},r}(),Ai=Ei,Pi=function(r,t){return function(i,s){var u="http"+(t?"s":"")+"://",l=u+(r.host||r.options.host)+r.options.path,d=I.createJSONPRequest(l,i),v=I.ScriptReceivers.create(function(S,b){f.remove(v),d.cleanup(),b&&b.host&&(r.host=b.host),s&&s(S,b)});d.send(v)}},Oi={name:"jsonp",getAgent:Pi},Di=Oi;function at(r,t,i){var s=r+(t.useTLS?"s":""),u=t.useTLS?t.hostTLS:t.hostNonTLS;return s+"://"+u+i}function ct(r,t){var i="/app/"+r,s="?protocol="+g.PROTOCOL+"&client=js&version="+g.VERSION+(t?"&"+t:"");return i+s}var xi={getInitial:function(r,t){var i=(t.httpPath||"")+ct(r,"flash=false");return at("ws",t,i)}},Ri={getInitial:function(r,t){var i=(t.httpPath||"/pusher")+ct(r);return at("http",t,i)}},Ni={getInitial:function(r,t){return at("http",t,t.httpPath||"/pusher")},getPath:function(r,t){return ct(r)}},Li=function(){function r(){this._callbacks={}}return r.prototype.get=function(t){return this._callbacks[ut(t)]},r.prototype.add=function(t,i,s){var u=ut(t);this._callbacks[u]=this._callbacks[u]||[],this._callbacks[u].push({fn:i,context:s})},r.prototype.remove=function(t,i,s){if(!t&&!i&&!s){this._callbacks={};return}var u=t?[ut(t)]:sn(this._callbacks);i||s?this.removeCallback(u,i,s):this.removeAllCallbacks(u)},r.prototype.removeCallback=function(t,i,s){Ce(t,function(u){this._callbacks[u]=cn(this._callbacks[u]||[],function(l){return i&&i!==l.fn||s&&s!==l.context}),this._callbacks[u].length===0&&delete this._callbacks[u]},this)},r.prototype.removeAllCallbacks=function(t){Ce(t,function(i){delete this._callbacks[i]},this)},r}(),ji=Li;function ut(r){return"_"+r}var Mi=function(){function r(t){this.callbacks=new ji,this.global_callbacks=[],this.failThrough=t}return r.prototype.bind=function(t,i,s){return this.callbacks.add(t,i,s),this},r.prototype.bind_global=function(t){return this.global_callbacks.push(t),this},r.prototype.unbind=function(t,i,s){return this.callbacks.remove(t,i,s),this},r.prototype.unbind_global=function(t){return t?(this.global_callbacks=cn(this.global_callbacks||[],function(i){return i!==t}),this):(this.global_callbacks=[],this)},r.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},r.prototype.emit=function(t,i,s){for(var u=0;u<this.global_callbacks.length;u++)this.global_callbacks[u](t,i);var l=this.callbacks.get(t),d=[];if(s?d.push(i,s):i&&d.push(i),l&&l.length>0)for(var u=0;u<l.length;u++)l[u].fn.apply(l[u].context||window,d);else this.failThrough&&this.failThrough(t,i);return this},r}(),ne=Mi,Bi=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Fi=function(r){Bi(t,r);function t(i,s,u,l,d){var v=r.call(this)||this;return v.initialize=I.transportConnectionInitializer,v.hooks=i,v.name=s,v.priority=u,v.key=l,v.options=d,v.state="new",v.timeline=d.timeline,v.activityTimeout=d.activityTimeout,v.id=v.timeline.generateUniqueID(),v}return t.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},t.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},t.prototype.connect=function(){var i=this;if(this.socket||this.state!=="initialized")return!1;var s=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(s,this.options)}catch(u){return F.defer(function(){i.onError(u),i.changeState("closed")}),!1}return this.bindListeners(),N.debug("Connecting",{transport:this.name,url:s}),this.changeState("connecting"),!0},t.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},t.prototype.send=function(i){var s=this;return this.state==="open"?(F.defer(function(){s.socket&&s.socket.send(i)}),!0):!1},t.prototype.ping=function(){this.state==="open"&&this.supportsPing()&&this.socket.ping()},t.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},t.prototype.onError=function(i){this.emit("error",{type:"WebSocketError",error:i}),this.timeline.error(this.buildTimelineMessage({error:i.toString()}))},t.prototype.onClose=function(i){i?this.changeState("closed",{code:i.code,reason:i.reason,wasClean:i.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},t.prototype.onMessage=function(i){this.emit("message",i)},t.prototype.onActivity=function(){this.emit("activity")},t.prototype.bindListeners=function(){var i=this;this.socket.onopen=function(){i.onOpen()},this.socket.onerror=function(s){i.onError(s)},this.socket.onclose=function(s){i.onClose(s)},this.socket.onmessage=function(s){i.onMessage(s)},this.supportsPing()&&(this.socket.onactivity=function(){i.onActivity()})},t.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},t.prototype.changeState=function(i,s){this.state=i,this.timeline.info(this.buildTimelineMessage({state:i,params:s})),this.emit(i,s)},t.prototype.buildTimelineMessage=function(i){return U({cid:this.id},i)},t}(ne),Hi=Fi,$i=function(){function r(t){this.hooks=t}return r.prototype.isSupported=function(t){return this.hooks.isSupported(t)},r.prototype.createConnection=function(t,i,s,u){return new Hi(this.hooks,t,i,s,u)},r}(),_e=$i,Ui=new _e({urls:xi,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(I.getWebSocketAPI())},isSupported:function(){return Boolean(I.getWebSocketAPI())},getSocket:function(r){return I.createWebSocket(r)}}),hn={urls:Ri,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},fn=U({getSocket:function(r){return I.HTTPFactory.createStreamingSocket(r)}},hn),dn=U({getSocket:function(r){return I.HTTPFactory.createPollingSocket(r)}},hn),pn={isSupported:function(){return I.isXHRSupported()}},qi=new _e(U({},fn,pn)),zi=new _e(U({},dn,pn)),Vi={ws:Ui,xhr_streaming:qi,xhr_polling:zi},Ue=Vi,Wi=new _e({file:"sockjs",urls:Ni,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(r,t){return new window.SockJS(r,null,{js_path:T.getPath("sockjs",{useTLS:t.useTLS}),ignore_null_origin:t.ignoreNullOrigin})},beforeOpen:function(r,t){r.send(JSON.stringify({path:t}))}}),gn={isSupported:function(r){var t=I.isXDRSupported(r.useTLS);return t}},Ki=new _e(U({},fn,gn)),Gi=new _e(U({},dn,gn));Ue.xdr_streaming=Ki,Ue.xdr_polling=Gi,Ue.sockjs=Wi;var Ji=Ue,Xi=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Yi=function(r){Xi(t,r);function t(){var i=r.call(this)||this,s=i;return window.addEventListener!==void 0&&(window.addEventListener("online",function(){s.emit("online")},!1),window.addEventListener("offline",function(){s.emit("offline")},!1)),i}return t.prototype.isOnline=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine},t}(ne),Qi=new Yi,Zi=function(){function r(t,i,s){this.manager=t,this.transport=i,this.minPingDelay=s.minPingDelay,this.maxPingDelay=s.maxPingDelay,this.pingDelay=void 0}return r.prototype.createConnection=function(t,i,s,u){var l=this;u=U({},u,{activityTimeout:this.pingDelay});var d=this.transport.createConnection(t,i,s,u),v=null,S=function(){d.unbind("open",S),d.bind("closed",b),v=F.now()},b=function(P){if(d.unbind("closed",b),P.code===1002||P.code===1003)l.manager.reportDeath();else if(!P.wasClean&&v){var L=F.now()-v;L<2*l.maxPingDelay&&(l.manager.reportDeath(),l.pingDelay=Math.max(L/2,l.minPingDelay))}};return d.bind("open",S),d},r.prototype.isSupported=function(t){return this.manager.isAlive()&&this.transport.isSupported(t)},r}(),eo=Zi,vn={decodeMessage:function(r){try{var t=JSON.parse(r.data),i=t.data;if(typeof i=="string")try{i=JSON.parse(t.data)}catch{}var s={event:t.event,channel:t.channel,data:i};return t.user_id&&(s.user_id=t.user_id),s}catch(u){throw{type:"MessageParseError",error:u,data:r.data}}},encodeMessage:function(r){return JSON.stringify(r)},processHandshake:function(r){var t=vn.decodeMessage(r);if(t.event==="pusher:connection_established"){if(!t.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:t.data.socket_id,activityTimeout:t.data.activity_timeout*1e3}}else{if(t.event==="pusher:error")return{action:this.getCloseAction(t.data),error:this.getCloseError(t.data)};throw"Invalid handshake"}},getCloseAction:function(r){return r.code<4e3?r.code>=1002&&r.code<=1004?"backoff":null:r.code===4e3?"tls_only":r.code<4100?"refused":r.code<4200?"backoff":r.code<4300?"retry":"refused"},getCloseError:function(r){return r.code!==1e3&&r.code!==1001?{type:"PusherError",data:{code:r.code,message:r.reason||r.message}}:null}},ue=vn,to=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),no=function(r){to(t,r);function t(i,s){var u=r.call(this)||this;return u.id=i,u.transport=s,u.activityTimeout=s.activityTimeout,u.bindListeners(),u}return t.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},t.prototype.send=function(i){return this.transport.send(i)},t.prototype.send_event=function(i,s,u){var l={event:i,data:s};return u&&(l.channel=u),N.debug("Event sent",l),this.send(ue.encodeMessage(l))},t.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},t.prototype.close=function(){this.transport.close()},t.prototype.bindListeners=function(){var i=this,s={message:function(l){var d;try{d=ue.decodeMessage(l)}catch(v){i.emit("error",{type:"MessageParseError",error:v,data:l.data})}if(d!==void 0){switch(N.debug("Event recd",d),d.event){case"pusher:error":i.emit("error",{type:"PusherError",data:d.data});break;case"pusher:ping":i.emit("ping");break;case"pusher:pong":i.emit("pong");break}i.emit("message",d)}},activity:function(){i.emit("activity")},error:function(l){i.emit("error",l)},closed:function(l){u(),l&&l.code&&i.handleCloseEvent(l),i.transport=null,i.emit("closed")}},u=function(){te(s,function(l,d){i.transport.unbind(d,l)})};te(s,function(l,d){i.transport.bind(d,l)})},t.prototype.handleCloseEvent=function(i){var s=ue.getCloseAction(i),u=ue.getCloseError(i);u&&this.emit("error",u),s&&this.emit(s,{action:s,error:u})},t}(ne),ro=no,oo=function(){function r(t,i){this.transport=t,this.callback=i,this.bindListeners()}return r.prototype.close=function(){this.unbindListeners(),this.transport.close()},r.prototype.bindListeners=function(){var t=this;this.onMessage=function(i){t.unbindListeners();var s;try{s=ue.processHandshake(i)}catch(u){t.finish("error",{error:u}),t.transport.close();return}s.action==="connected"?t.finish("connected",{connection:new ro(s.id,t.transport),activityTimeout:s.activityTimeout}):(t.finish(s.action,{error:s.error}),t.transport.close())},this.onClosed=function(i){t.unbindListeners();var s=ue.getCloseAction(i)||"backoff",u=ue.getCloseError(i);t.finish(s,{error:u})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},r.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},r.prototype.finish=function(t,i){this.callback(U({transport:this.transport,action:t},i))},r}(),so=oo,ao=function(){function r(t,i){this.timeline=t,this.options=i||{}}return r.prototype.send=function(t,i){this.timeline.isEmpty()||this.timeline.send(I.TimelineTransport.getAgent(this,t),i)},r}(),co=ao,uo=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),lo=function(r){uo(t,r);function t(i,s){var u=r.call(this,function(l,d){N.debug("No callbacks on "+i+" for "+l)})||this;return u.name=i,u.pusher=s,u.subscribed=!1,u.subscriptionPending=!1,u.subscriptionCancelled=!1,u}return t.prototype.authorize=function(i,s){return s(null,{auth:""})},t.prototype.trigger=function(i,s){if(i.indexOf("client-")!==0)throw new A("Event '"+i+"' does not start with 'client-'");if(!this.subscribed){var u=C.buildLogSuffix("triggeringClientEvents");N.warn("Client event triggered before channel 'subscription_succeeded' event . "+u)}return this.pusher.send_event(i,s,this.name)},t.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},t.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(i);else if(s==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(i);else if(s.indexOf("pusher_internal:")!==0){var l={};this.emit(s,u,l)}},t.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",i.data)},t.prototype.handleSubscriptionCountEvent=function(i){i.data.subscription_count&&(this.subscriptionCount=i.data.subscription_count),this.emit("pusher:subscription_count",i.data)},t.prototype.subscribe=function(){var i=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(s,u){s?(i.subscriptionPending=!1,N.error(s.toString()),i.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:s.message},s instanceof X?{status:s.status}:{}))):i.pusher.send_event("pusher:subscribe",{auth:u.auth,channel_data:u.channel_data,channel:i.name})}))},t.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},t.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},t.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},t}(ne),lt=lo,ho=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),fo=function(r){ho(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.authorize=function(i,s){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:i},s)},t}(lt),ht=fo,po=function(){function r(){this.reset()}return r.prototype.get=function(t){return Object.prototype.hasOwnProperty.call(this.members,t)?{id:t,info:this.members[t]}:null},r.prototype.each=function(t){var i=this;te(this.members,function(s,u){t(i.get(u))})},r.prototype.setMyID=function(t){this.myID=t},r.prototype.onSubscription=function(t){this.members=t.presence.hash,this.count=t.presence.count,this.me=this.get(this.myID)},r.prototype.addMember=function(t){return this.get(t.user_id)===null&&this.count++,this.members[t.user_id]=t.user_info,this.get(t.user_id)},r.prototype.removeMember=function(t){var i=this.get(t.user_id);return i&&(delete this.members[t.user_id],this.count--),i},r.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},r}(),go=po,vo=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),yo=function(r,t,i,s){function u(l){return l instanceof i?l:new i(function(d){d(l)})}return new(i||(i=Promise))(function(l,d){function v(P){try{b(s.next(P))}catch(L){d(L)}}function S(P){try{b(s.throw(P))}catch(L){d(L)}}function b(P){P.done?l(P.value):u(P.value).then(v,S)}b((s=s.apply(r,t||[])).next())})},mo=function(r,t){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,u,l,d;return d={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function v(b){return function(P){return S([b,P])}}function S(b){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,u&&(l=b[0]&2?u.return:b[0]?u.throw||((l=u.return)&&l.call(u),0):u.next)&&!(l=l.call(u,b[1])).done)return l;switch(u=0,l&&(b=[b[0]&2,l.value]),b[0]){case 0:case 1:l=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,u=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!l||b[1]>l[0]&&b[1]<l[3])){i.label=b[1];break}if(b[0]===6&&i.label<l[1]){i.label=l[1],l=b;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(b);break}l[2]&&i.ops.pop(),i.trys.pop();continue}b=t.call(r,i)}catch(P){b=[6,P],u=0}finally{s=l=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},bo=function(r){vo(t,r);function t(i,s){var u=r.call(this,i,s)||this;return u.members=new go,u}return t.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){return yo(u,void 0,void 0,function(){var v,S;return mo(this,function(b){switch(b.label){case 0:return l?[3,3]:(d=d,d.channel_data==null?[3,1]:(v=JSON.parse(d.channel_data),this.members.setMyID(v.user_id),[3,3]));case 1:return[4,this.pusher.user.signinDonePromise];case 2:if(b.sent(),this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else return S=C.buildLogSuffix("authorizationEndpoint"),N.error("Invalid auth response for channel '"+this.name+"', "+("expected 'channel_data' field. "+S+", ")+"or the user should be signed in."),s("Invalid auth response"),[2];b.label=3;case 3:return s(l,d),[2]}})})})},t.prototype.handleEvent=function(i){var s=i.event;if(s.indexOf("pusher_internal:")===0)this.handleInternalEvent(i);else{var u=i.data,l={};i.user_id&&(l.user_id=i.user_id),this.emit(s,u,l)}},t.prototype.handleInternalEvent=function(i){var s=i.event,u=i.data;switch(s){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(i);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(i);break;case"pusher_internal:member_added":var l=this.members.addMember(u);this.emit("pusher:member_added",l);break;case"pusher_internal:member_removed":var d=this.members.removeMember(u);d&&this.emit("pusher:member_removed",d);break}},t.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(i.data),this.emit("pusher:subscription_succeeded",this.members))},t.prototype.disconnect=function(){this.members.reset(),r.prototype.disconnect.call(this)},t}(ht),_o=bo,wo=c(1),ft=c(0),So=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),ko=function(r){So(t,r);function t(i,s,u){var l=r.call(this,i,s)||this;return l.key=null,l.nacl=u,l}return t.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){if(l){s(l,d);return}var v=d.shared_secret;if(!v){s(new Error("No shared_secret key in auth payload for encrypted channel: "+u.name),null);return}u.key=Object(ft.decode)(v),delete d.shared_secret,s(null,d)})},t.prototype.trigger=function(i,s){throw new ee("Client events are not currently supported for encrypted channels")},t.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s.indexOf("pusher_internal:")===0||s.indexOf("pusher:")===0){r.prototype.handleEvent.call(this,i);return}this.handleEncryptedEvent(s,u)},t.prototype.handleEncryptedEvent=function(i,s){var u=this;if(!this.key){N.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!s.ciphertext||!s.nonce){N.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+s);return}var l=Object(ft.decode)(s.ciphertext);if(l.length<this.nacl.secretbox.overheadLength){N.error("Expected encrypted event ciphertext length to be "+this.nacl.secretbox.overheadLength+", got: "+l.length);return}var d=Object(ft.decode)(s.nonce);if(d.length<this.nacl.secretbox.nonceLength){N.error("Expected encrypted event nonce length to be "+this.nacl.secretbox.nonceLength+", got: "+d.length);return}var v=this.nacl.secretbox.open(l,d,this.key);if(v===null){N.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,function(S,b){if(S){N.error("Failed to make a request to the authEndpoint: "+b+". Unable to fetch new key, so dropping encrypted event");return}if(v=u.nacl.secretbox.open(l,d,u.key),v===null){N.error("Failed to decrypt event with new key. Dropping encrypted event");return}u.emit(i,u.getDataToEmit(v))});return}this.emit(i,this.getDataToEmit(v))},t.prototype.getDataToEmit=function(i){var s=Object(wo.decode)(i);try{return JSON.parse(s)}catch{return s}},t}(ht),To=ko,Co=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Io=function(r){Co(t,r);function t(i,s){var u=r.call(this)||this;u.state="initialized",u.connection=null,u.key=i,u.options=s,u.timeline=u.options.timeline,u.usingTLS=u.options.useTLS,u.errorCallbacks=u.buildErrorCallbacks(),u.connectionCallbacks=u.buildConnectionCallbacks(u.errorCallbacks),u.handshakeCallbacks=u.buildHandshakeCallbacks(u.errorCallbacks);var l=I.getNetwork();return l.bind("online",function(){u.timeline.info({netinfo:"online"}),(u.state==="connecting"||u.state==="unavailable")&&u.retryIn(0)}),l.bind("offline",function(){u.timeline.info({netinfo:"offline"}),u.connection&&u.sendActivityCheck()}),u.updateStrategy(),u}return t.prototype.connect=function(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},t.prototype.send=function(i){return this.connection?this.connection.send(i):!1},t.prototype.send_event=function(i,s,u){return this.connection?this.connection.send_event(i,s,u):!1},t.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},t.prototype.isUsingTLS=function(){return this.usingTLS},t.prototype.startConnecting=function(){var i=this,s=function(u,l){u?i.runner=i.strategy.connect(0,s):l.action==="error"?(i.emit("error",{type:"HandshakeError",error:l.error}),i.timeline.error({handshakeError:l.error})):(i.abortConnecting(),i.handshakeCallbacks[l.action](l))};this.runner=this.strategy.connect(0,s)},t.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},t.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var i=this.abandonConnection();i.close()}},t.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},t.prototype.retryIn=function(i){var s=this;this.timeline.info({action:"retry",delay:i}),i>0&&this.emit("connecting_in",Math.round(i/1e3)),this.retryTimer=new ce(i||0,function(){s.disconnectInternally(),s.connect()})},t.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},t.prototype.setUnavailableTimer=function(){var i=this;this.unavailableTimer=new ce(this.options.unavailableTimeout,function(){i.updateState("unavailable")})},t.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},t.prototype.sendActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new ce(this.options.pongTimeout,function(){i.timeline.error({pong_timed_out:i.options.pongTimeout}),i.retryIn(0)})},t.prototype.resetActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new ce(this.activityTimeout,function(){i.sendActivityCheck()}))},t.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},t.prototype.buildConnectionCallbacks=function(i){var s=this;return U({},i,{message:function(u){s.resetActivityCheck(),s.emit("message",u)},ping:function(){s.send_event("pusher:pong",{})},activity:function(){s.resetActivityCheck()},error:function(u){s.emit("error",u)},closed:function(){s.abandonConnection(),s.shouldRetry()&&s.retryIn(1e3)}})},t.prototype.buildHandshakeCallbacks=function(i){var s=this;return U({},i,{connected:function(u){s.activityTimeout=Math.min(s.options.activityTimeout,u.activityTimeout,u.connection.activityTimeout||1/0),s.clearUnavailableTimer(),s.setConnection(u.connection),s.socket_id=s.connection.id,s.updateState("connected",{socket_id:s.socket_id})}})},t.prototype.buildErrorCallbacks=function(){var i=this,s=function(u){return function(l){l.error&&i.emit("error",{type:"WebSocketError",error:l.error}),u(l)}};return{tls_only:s(function(){i.usingTLS=!0,i.updateStrategy(),i.retryIn(0)}),refused:s(function(){i.disconnect()}),backoff:s(function(){i.retryIn(1e3)}),retry:s(function(){i.retryIn(0)})}},t.prototype.setConnection=function(i){this.connection=i;for(var s in this.connectionCallbacks)this.connection.bind(s,this.connectionCallbacks[s]);this.resetActivityCheck()},t.prototype.abandonConnection=function(){if(!!this.connection){this.stopActivityCheck();for(var i in this.connectionCallbacks)this.connection.unbind(i,this.connectionCallbacks[i]);var s=this.connection;return this.connection=null,s}},t.prototype.updateState=function(i,s){var u=this.state;if(this.state=i,u!==i){var l=i;l==="connected"&&(l+=" with new socket ID "+s.socket_id),N.debug("State changed",u+" -> "+l),this.timeline.info({state:i,params:s}),this.emit("state_change",{previous:u,current:i}),this.emit(i,s)}},t.prototype.shouldRetry=function(){return this.state==="connecting"||this.state==="connected"},t}(ne),Eo=Io,Ao=function(){function r(){this.channels={}}return r.prototype.add=function(t,i){return this.channels[t]||(this.channels[t]=Oo(t,i)),this.channels[t]},r.prototype.all=function(){return gi(this.channels)},r.prototype.find=function(t){return this.channels[t]},r.prototype.remove=function(t){var i=this.channels[t];return delete this.channels[t],i},r.prototype.disconnect=function(){te(this.channels,function(t){t.disconnect()})},r}(),Po=Ao;function Oo(r,t){if(r.indexOf("private-encrypted-")===0){if(t.config.nacl)return re.createEncryptedChannel(r,t,t.config.nacl);var i="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",s=C.buildLogSuffix("encryptedChannelSupport");throw new ee(i+". "+s)}else{if(r.indexOf("private-")===0)return re.createPrivateChannel(r,t);if(r.indexOf("presence-")===0)return re.createPresenceChannel(r,t);if(r.indexOf("#")===0)throw new x('Cannot create a channel with name "'+r+'".');return re.createChannel(r,t)}}var Do={createChannels:function(){return new Po},createConnectionManager:function(r,t){return new Eo(r,t)},createChannel:function(r,t){return new lt(r,t)},createPrivateChannel:function(r,t){return new ht(r,t)},createPresenceChannel:function(r,t){return new _o(r,t)},createEncryptedChannel:function(r,t,i){return new To(r,t,i)},createTimelineSender:function(r,t){return new co(r,t)},createHandshake:function(r,t){return new so(r,t)},createAssistantToTheTransportManager:function(r,t,i){return new eo(r,t,i)}},re=Do,xo=function(){function r(t){this.options=t||{},this.livesLeft=this.options.lives||1/0}return r.prototype.getAssistant=function(t){return re.createAssistantToTheTransportManager(this,t,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},r.prototype.isAlive=function(){return this.livesLeft>0},r.prototype.reportDeath=function(){this.livesLeft-=1},r}(),yn=xo,Ro=function(){function r(t,i){this.strategies=t,this.loop=Boolean(i.loop),this.failFast=Boolean(i.failFast),this.timeout=i.timeout,this.timeoutLimit=i.timeoutLimit}return r.prototype.isSupported=function(){return ln(this.strategies,F.method("isSupported"))},r.prototype.connect=function(t,i){var s=this,u=this.strategies,l=0,d=this.timeout,v=null,S=function(b,P){P?i(null,P):(l=l+1,s.loop&&(l=l%u.length),l<u.length?(d&&(d=d*2,s.timeoutLimit&&(d=Math.min(d,s.timeoutLimit))),v=s.tryStrategy(u[l],t,{timeout:d,failFast:s.failFast},S)):i(!0))};return v=this.tryStrategy(u[l],t,{timeout:d,failFast:this.failFast},S),{abort:function(){v.abort()},forceMinPriority:function(b){t=b,v&&v.forceMinPriority(b)}}},r.prototype.tryStrategy=function(t,i,s,u){var l=null,d=null;return s.timeout>0&&(l=new ce(s.timeout,function(){d.abort(),u(!0)})),d=t.connect(i,function(v,S){v&&l&&l.isRunning()&&!s.failFast||(l&&l.ensureAborted(),u(v,S))}),{abort:function(){l&&l.ensureAborted(),d.abort()},forceMinPriority:function(v){d.forceMinPriority(v)}}},r}(),le=Ro,No=function(){function r(t){this.strategies=t}return r.prototype.isSupported=function(){return ln(this.strategies,F.method("isSupported"))},r.prototype.connect=function(t,i){return Lo(this.strategies,t,function(s,u){return function(l,d){if(u[s].error=l,l){jo(u)&&i(!0);return}Ce(u,function(v){v.forceMinPriority(d.transport.priority)}),i(null,d)}})},r}(),dt=No;function Lo(r,t,i){var s=an(r,function(u,l,d,v){return u.connect(t,i(l,v))});return{abort:function(){Ce(s,Mo)},forceMinPriority:function(u){Ce(s,function(l){l.forceMinPriority(u)})}}}function jo(r){return mi(r,function(t){return Boolean(t.error)})}function Mo(r){!r.error&&!r.aborted&&(r.abort(),r.aborted=!0)}var Bo=function(){function r(t,i,s){this.strategy=t,this.transports=i,this.ttl=s.ttl||1800*1e3,this.usingTLS=s.useTLS,this.timeline=s.timeline}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(t,i){var s=this.usingTLS,u=Ho(s),l=[this.strategy];if(u&&u.timestamp+this.ttl>=F.now()){var d=this.transports[u.transport];d&&(this.timeline.info({cached:!0,transport:u.transport,latency:u.latency}),l.push(new le([d],{timeout:u.latency*2+1e3,failFast:!0})))}var v=F.now(),S=l.pop().connect(t,function b(P,L){P?(mn(s),l.length>0?(v=F.now(),S=l.pop().connect(t,b)):i(P)):($o(s,L.transport.name,F.now()-v),i(null,L))});return{abort:function(){S.abort()},forceMinPriority:function(b){t=b,S&&S.forceMinPriority(b)}}},r}(),Fo=Bo;function pt(r){return"pusherTransport"+(r?"TLS":"NonTLS")}function Ho(r){var t=I.getLocalStorage();if(t)try{var i=t[pt(r)];if(i)return JSON.parse(i)}catch{mn(r)}return null}function $o(r,t,i){var s=I.getLocalStorage();if(s)try{s[pt(r)]=$e({timestamp:F.now(),transport:t,latency:i})}catch{}}function mn(r){var t=I.getLocalStorage();if(t)try{delete t[pt(r)]}catch{}}var Uo=function(){function r(t,i){var s=i.delay;this.strategy=t,this.options={delay:s}}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(t,i){var s=this.strategy,u,l=new ce(this.options.delay,function(){u=s.connect(t,i)});return{abort:function(){l.ensureAborted(),u&&u.abort()},forceMinPriority:function(d){t=d,u&&u.forceMinPriority(d)}}},r}(),qe=Uo,qo=function(){function r(t,i,s){this.test=t,this.trueBranch=i,this.falseBranch=s}return r.prototype.isSupported=function(){var t=this.test()?this.trueBranch:this.falseBranch;return t.isSupported()},r.prototype.connect=function(t,i){var s=this.test()?this.trueBranch:this.falseBranch;return s.connect(t,i)},r}(),Ie=qo,zo=function(){function r(t){this.strategy=t}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(t,i){var s=this.strategy.connect(t,function(u,l){l&&s.abort(),i(u,l)});return s},r}(),Vo=zo;function Ee(r){return function(){return r.isSupported()}}var Wo=function(r,t,i){var s={};function u(On,ta,na,ra,ia){var Dn=i(r,On,ta,na,ra,ia);return s[On]=Dn,Dn}var l=Object.assign({},t,{hostNonTLS:r.wsHost+":"+r.wsPort,hostTLS:r.wsHost+":"+r.wssPort,httpPath:r.wsPath}),d=Object.assign({},l,{useTLS:!0}),v=Object.assign({},t,{hostNonTLS:r.httpHost+":"+r.httpPort,hostTLS:r.httpHost+":"+r.httpsPort,httpPath:r.httpPath}),S={loop:!0,timeout:15e3,timeoutLimit:6e4},b=new yn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),P=new yn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),L=u("ws","ws",3,l,b),Y=u("wss","ws",3,d,b),Xs=u("sockjs","sockjs",1,v),Tn=u("xhr_streaming","xhr_streaming",1,v,P),Ys=u("xdr_streaming","xdr_streaming",1,v,P),Cn=u("xhr_polling","xhr_polling",1,v),Qs=u("xdr_polling","xdr_polling",1,v),In=new le([L],S),Zs=new le([Y],S),ea=new le([Xs],S),En=new le([new Ie(Ee(Tn),Tn,Ys)],S),An=new le([new Ie(Ee(Cn),Cn,Qs)],S),Pn=new le([new Ie(Ee(En),new dt([En,new qe(An,{delay:4e3})]),An)],S),mt=new Ie(Ee(Pn),Pn,ea),bt;return t.useTLS?bt=new dt([In,new qe(mt,{delay:2e3})]):bt=new dt([In,new qe(Zs,{delay:2e3}),new qe(mt,{delay:5e3})]),new Fo(new Vo(new Ie(Ee(L),bt,mt)),s,{ttl:18e5,timeline:t.timeline,useTLS:t.useTLS})},Ko=Wo,Go=function(){var r=this;r.timeline.info(r.buildTimelineMessage({transport:r.name+(r.options.useTLS?"s":"")})),r.hooks.isInitialized()?r.changeState("initialized"):r.hooks.file?(r.changeState("initializing"),T.load(r.hooks.file,{useTLS:r.options.useTLS},function(t,i){r.hooks.isInitialized()?(r.changeState("initialized"),i(!0)):(t&&r.onError(t),r.onClose(),i(!1))})):r.onClose()},Jo={getRequest:function(r){var t=new window.XDomainRequest;return t.ontimeout=function(){r.emit("error",new B),r.close()},t.onerror=function(i){r.emit("error",i),r.close()},t.onprogress=function(){t.responseText&&t.responseText.length>0&&r.onChunk(200,t.responseText)},t.onload=function(){t.responseText&&t.responseText.length>0&&r.onChunk(200,t.responseText),r.emit("finished",200),r.close()},t},abortRequest:function(r){r.ontimeout=r.onerror=r.onprogress=r.onload=null,r.abort()}},Xo=Jo,Yo=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Qo=256*1024,Zo=function(r){Yo(t,r);function t(i,s,u){var l=r.call(this)||this;return l.hooks=i,l.method=s,l.url=u,l}return t.prototype.start=function(i){var s=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){s.close()},I.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(i)},t.prototype.close=function(){this.unloader&&(I.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},t.prototype.onChunk=function(i,s){for(;;){var u=this.advanceBuffer(s);if(u)this.emit("chunk",{status:i,data:u});else break}this.isBufferTooLong(s)&&this.emit("buffer_too_long")},t.prototype.advanceBuffer=function(i){var s=i.slice(this.position),u=s.indexOf(`
`);return u!==-1?(this.position+=u+1,s.slice(0,u)):null},t.prototype.isBufferTooLong=function(i){return this.position===i.length&&i.length>Qo},t}(ne),es=Zo,gt;(function(r){r[r.CONNECTING=0]="CONNECTING",r[r.OPEN=1]="OPEN",r[r.CLOSED=3]="CLOSED"})(gt||(gt={}));var he=gt,ts=1,ns=function(){function r(t,i){this.hooks=t,this.session=_n(1e3)+"/"+ss(8),this.location=rs(i),this.readyState=he.CONNECTING,this.openStream()}return r.prototype.send=function(t){return this.sendRaw(JSON.stringify([t]))},r.prototype.ping=function(){this.hooks.sendHeartbeat(this)},r.prototype.close=function(t,i){this.onClose(t,i,!0)},r.prototype.sendRaw=function(t){if(this.readyState===he.OPEN)try{return I.createSocketRequest("POST",bn(is(this.location,this.session))).start(t),!0}catch{return!1}else return!1},r.prototype.reconnect=function(){this.closeStream(),this.openStream()},r.prototype.onClose=function(t,i,s){this.closeStream(),this.readyState=he.CLOSED,this.onclose&&this.onclose({code:t,reason:i,wasClean:s})},r.prototype.onChunk=function(t){if(t.status===200){this.readyState===he.OPEN&&this.onActivity();var i,s=t.data.slice(0,1);switch(s){case"o":i=JSON.parse(t.data.slice(1)||"{}"),this.onOpen(i);break;case"a":i=JSON.parse(t.data.slice(1)||"[]");for(var u=0;u<i.length;u++)this.onEvent(i[u]);break;case"m":i=JSON.parse(t.data.slice(1)||"null"),this.onEvent(i);break;case"h":this.hooks.onHeartbeat(this);break;case"c":i=JSON.parse(t.data.slice(1)||"[]"),this.onClose(i[0],i[1],!0);break}}},r.prototype.onOpen=function(t){this.readyState===he.CONNECTING?(t&&t.hostname&&(this.location.base=os(this.location.base,t.hostname)),this.readyState=he.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},r.prototype.onEvent=function(t){this.readyState===he.OPEN&&this.onmessage&&this.onmessage({data:t})},r.prototype.onActivity=function(){this.onactivity&&this.onactivity()},r.prototype.onError=function(t){this.onerror&&this.onerror(t)},r.prototype.openStream=function(){var t=this;this.stream=I.createSocketRequest("POST",bn(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(i){t.onChunk(i)}),this.stream.bind("finished",function(i){t.hooks.onFinished(t,i)}),this.stream.bind("buffer_too_long",function(){t.reconnect()});try{this.stream.start()}catch(i){F.defer(function(){t.onError(i),t.onClose(1006,"Could not start streaming",!1)})}},r.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},r}();function rs(r){var t=/([^\?]*)\/*(\??.*)/.exec(r);return{base:t[1],queryString:t[2]}}function is(r,t){return r.base+"/"+t+"/xhr_send"}function bn(r){var t=r.indexOf("?")===-1?"?":"&";return r+t+"t="+ +new Date+"&n="+ts++}function os(r,t){var i=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(r);return i[1]+t+i[3]}function _n(r){return I.randomInt(r)}function ss(r){for(var t=[],i=0;i<r;i++)t.push(_n(32).toString(32));return t.join("")}var as=ns,cs={getReceiveURL:function(r,t){return r.base+"/"+t+"/xhr_streaming"+r.queryString},onHeartbeat:function(r){r.sendRaw("[]")},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,t){r.onClose(1006,"Connection interrupted ("+t+")",!1)}},us=cs,ls={getReceiveURL:function(r,t){return r.base+"/"+t+"/xhr"+r.queryString},onHeartbeat:function(){},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,t){t===200?r.reconnect():r.onClose(1006,"Connection interrupted ("+t+")",!1)}},hs=ls,fs={getRequest:function(r){var t=I.getXHRAPI(),i=new t;return i.onreadystatechange=i.onprogress=function(){switch(i.readyState){case 3:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText);break;case 4:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText),r.emit("finished",i.status),r.close();break}},i},abortRequest:function(r){r.onreadystatechange=null,r.abort()}},ds=fs,ps={createStreamingSocket:function(r){return this.createSocket(us,r)},createPollingSocket:function(r){return this.createSocket(hs,r)},createSocket:function(r,t){return new as(r,t)},createXHR:function(r,t){return this.createRequest(ds,r,t)},createRequest:function(r,t,i){return new es(r,t,i)}},wn=ps;wn.createXDR=function(r,t){return this.createRequest(Xo,r,t)};var gs=wn,vs={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:f,DependenciesReceivers:E,getDefaultStrategy:Ko,Transports:Ji,transportConnectionInitializer:Go,HTTPFactory:gs,TimelineTransport:Di,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(r){var t=this;window.Pusher=r;var i=function(){t.onDocumentBody(r.ready)};window.JSON?i():T.load("json2",{},i)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:ri,jsonp:Ti}},onDocumentBody:function(r){var t=this;document.body?r():setTimeout(function(){t.onDocumentBody(r)},0)},createJSONPRequest:function(r,t){return new Ai(r,t)},createScriptRequest:function(r){return new Ii(r)},getLocalStorage:function(){try{return window.localStorage}catch{return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var r=this.getXHRAPI();return new r},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return Qi},createWebSocket:function(r){var t=this.getWebSocketAPI();return new t(r)},createSocketRequest:function(r,t){if(this.isXHRSupported())return this.HTTPFactory.createXHR(r,t);if(this.isXDRSupported(t.indexOf("https:")===0))return this.HTTPFactory.createXDR(r,t);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var r=this.getXHRAPI();return Boolean(r)&&new r().withCredentials!==void 0},isXDRSupported:function(r){var t=r?"https:":"http:",i=this.getProtocol();return Boolean(window.XDomainRequest)&&i===t},addUnloadListener:function(r){window.addEventListener!==void 0?window.addEventListener("unload",r,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",r)},removeUnloadListener:function(r){window.addEventListener!==void 0?window.removeEventListener("unload",r,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",r)},randomInt:function(r){var t=function(){var i=window.crypto||window.msCrypto,s=i.getRandomValues(new Uint32Array(1))[0];return s/Math.pow(2,32)};return Math.floor(t()*r)}},I=vs,vt;(function(r){r[r.ERROR=3]="ERROR",r[r.INFO=6]="INFO",r[r.DEBUG=7]="DEBUG"})(vt||(vt={}));var ze=vt,ys=function(){function r(t,i,s){this.key=t,this.session=i,this.events=[],this.options=s||{},this.sent=0,this.uniqueID=0}return r.prototype.log=function(t,i){t<=this.options.level&&(this.events.push(U({},i,{timestamp:F.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},r.prototype.error=function(t){this.log(ze.ERROR,t)},r.prototype.info=function(t){this.log(ze.INFO,t)},r.prototype.debug=function(t){this.log(ze.DEBUG,t)},r.prototype.isEmpty=function(){return this.events.length===0},r.prototype.send=function(t,i){var s=this,u=U({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],t(u,function(l,d){l||s.sent++,i&&i(l,d)}),!0},r.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},r}(),ms=ys,bs=function(){function r(t,i,s,u){this.name=t,this.priority=i,this.transport=s,this.options=u||{}}return r.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},r.prototype.connect=function(t,i){var s=this;if(this.isSupported()){if(this.priority<t)return Sn(new H,i)}else return Sn(new G,i);var u=!1,l=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),d=null,v=function(){l.unbind("initialized",v),l.connect()},S=function(){d=re.createHandshake(l,function(Y){u=!0,L(),i(null,Y)})},b=function(Y){L(),i(Y)},P=function(){L();var Y;Y=$e(l),i(new K(Y))},L=function(){l.unbind("initialized",v),l.unbind("open",S),l.unbind("error",b),l.unbind("closed",P)};return l.bind("initialized",v),l.bind("open",S),l.bind("error",b),l.bind("closed",P),l.initialize(),{abort:function(){u||(L(),d?d.close():l.close())},forceMinPriority:function(Y){u||s.priority<Y&&(d?d.close():l.close())}}},r}(),_s=bs;function Sn(r,t){return F.defer(function(){t(r)}),{abort:function(){},forceMinPriority:function(){}}}var ws=I.Transports,Ss=function(r,t,i,s,u,l){var d=ws[i];if(!d)throw new J(i);var v=(!r.enabledTransports||on(r.enabledTransports,t)!==-1)&&(!r.disabledTransports||on(r.disabledTransports,t)===-1),S;return v?(u=Object.assign({ignoreNullOrigin:r.ignoreNullOrigin},u),S=new _s(t,s,l?l.getAssistant(d):d,u)):S=ks,S},ks={isSupported:function(){return!1},connect:function(r,t){var i=F.defer(function(){t(new G)});return{abort:function(){i.ensureAborted()},forceMinPriority:function(){}}}};function Ts(r){if(r==null)throw"You must pass an options object";if(r.cluster==null)throw"Options object must provide a cluster";"disableStats"in r&&N.warn("The disableStats option is deprecated in favor of enableStats")}var Cs=function(r,t){var i="socket_id="+encodeURIComponent(r.socketId);for(var s in t.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(t.params[s]);if(t.paramsProvider!=null){var u=t.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Is=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(t,i){var s=Cs(t,r);I.getAuthorizers()[r.transport](I,s,r,y.UserAuthentication,i)}},Es=Is,As=function(r,t){var i="socket_id="+encodeURIComponent(r.socketId);i+="&channel_name="+encodeURIComponent(r.channelName);for(var s in t.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(t.params[s]);if(t.paramsProvider!=null){var u=t.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Ps=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(t,i){var s=As(t,r);I.getAuthorizers()[r.transport](I,s,r,y.ChannelAuthorization,i)}},Os=Ps,Ds=function(r,t,i){var s={authTransport:t.transport,authEndpoint:t.endpoint,auth:{params:t.params,headers:t.headers}};return function(u,l){var d=r.channel(u.channelName),v=i(d,s);v.authorize(u.socketId,l)}},we=function(){return we=Object.assign||function(r){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(r[u]=t[u])}return r},we.apply(this,arguments)};function xs(r,t){var i={activityTimeout:r.activityTimeout||g.activityTimeout,cluster:r.cluster,httpPath:r.httpPath||g.httpPath,httpPort:r.httpPort||g.httpPort,httpsPort:r.httpsPort||g.httpsPort,pongTimeout:r.pongTimeout||g.pongTimeout,statsHost:r.statsHost||g.stats_host,unavailableTimeout:r.unavailableTimeout||g.unavailableTimeout,wsPath:r.wsPath||g.wsPath,wsPort:r.wsPort||g.wsPort,wssPort:r.wssPort||g.wssPort,enableStats:Ms(r),httpHost:Rs(r),useTLS:js(r),wsHost:Ns(r),userAuthenticator:Bs(r),channelAuthorizer:Hs(r,t)};return"disabledTransports"in r&&(i.disabledTransports=r.disabledTransports),"enabledTransports"in r&&(i.enabledTransports=r.enabledTransports),"ignoreNullOrigin"in r&&(i.ignoreNullOrigin=r.ignoreNullOrigin),"timelineParams"in r&&(i.timelineParams=r.timelineParams),"nacl"in r&&(i.nacl=r.nacl),i}function Rs(r){return r.httpHost?r.httpHost:r.cluster?"sockjs-"+r.cluster+".pusher.com":g.httpHost}function Ns(r){return r.wsHost?r.wsHost:Ls(r.cluster)}function Ls(r){return"ws-"+r+".pusher.com"}function js(r){return I.getProtocol()==="https:"?!0:r.forceTLS!==!1}function Ms(r){return"enableStats"in r?r.enableStats:"disableStats"in r?!r.disableStats:!1}function Bs(r){var t=we(we({},g.userAuthentication),r.userAuthentication);return"customHandler"in t&&t.customHandler!=null?t.customHandler:Es(t)}function Fs(r,t){var i;return"channelAuthorization"in r?i=we(we({},g.channelAuthorization),r.channelAuthorization):(i={transport:r.authTransport||g.authTransport,endpoint:r.authEndpoint||g.authEndpoint},"auth"in r&&("params"in r.auth&&(i.params=r.auth.params),"headers"in r.auth&&(i.headers=r.auth.headers)),"authorizer"in r&&(i.customHandler=Ds(t,i,r.authorizer))),i}function Hs(r,t){var i=Fs(r,t);return"customHandler"in i&&i.customHandler!=null?i.customHandler:Os(i)}var $s=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Us=function(r){$s(t,r);function t(i){var s=r.call(this,function(u,l){N.debug("No callbacks on watchlist events for "+u)})||this;return s.pusher=i,s.bindWatchlistInternalEvent(),s}return t.prototype.handleEvent=function(i){var s=this;i.data.events.forEach(function(u){s.emit(u.name,u)})},t.prototype.bindWatchlistInternalEvent=function(){var i=this;this.pusher.connection.bind("message",function(s){var u=s.event;u==="pusher_internal:watchlist_events"&&i.handleEvent(s)})},t}(ne),qs=Us;function zs(){var r,t,i=new Promise(function(s,u){r=s,t=u});return{promise:i,resolve:r,reject:t}}var Vs=zs,Ws=function(){var r=function(t,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(t,i)};return function(t,i){r(t,i);function s(){this.constructor=t}t.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ks=function(r){Ws(t,r);function t(i){var s=r.call(this,function(u,l){N.debug("No callbacks on user for "+u)})||this;return s.signin_requested=!1,s.user_data=null,s.serverToUserChannel=null,s.signinDonePromise=null,s._signinDoneResolve=null,s._onAuthorize=function(u,l){if(u){N.warn("Error during signin: "+u),s._cleanup();return}s.pusher.send_event("pusher:signin",{auth:l.auth,user_data:l.user_data})},s.pusher=i,s.pusher.connection.bind("state_change",function(u){var l=u.previous,d=u.current;l!=="connected"&&d==="connected"&&s._signin(),l==="connected"&&d!=="connected"&&(s._cleanup(),s._newSigninPromiseIfNeeded())}),s.watchlist=new qs(i),s.pusher.connection.bind("message",function(u){var l=u.event;l==="pusher:signin_success"&&s._onSigninSuccess(u.data),s.serverToUserChannel&&s.serverToUserChannel.name===u.channel&&s.serverToUserChannel.handleEvent(u)}),s}return t.prototype.signin=function(){this.signin_requested||(this.signin_requested=!0,this._signin())},t.prototype._signin=function(){!this.signin_requested||(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))},t.prototype._onSigninSuccess=function(i){try{this.user_data=JSON.parse(i.user_data)}catch{N.error("Failed parsing user data after signin: "+i.user_data),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){N.error("user_data doesn't contain an id. user_data: "+this.user_data),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()},t.prototype._subscribeChannels=function(){var i=this,s=function(u){u.subscriptionPending&&u.subscriptionCancelled?u.reinstateSubscription():!u.subscriptionPending&&i.pusher.connection.state==="connected"&&u.subscribe()};this.serverToUserChannel=new lt("#server-to-user-"+this.user_data.id,this.pusher),this.serverToUserChannel.bind_global(function(u,l){u.indexOf("pusher_internal:")===0||u.indexOf("pusher:")===0||i.emit(u,l)}),s(this.serverToUserChannel)},t.prototype._cleanup=function(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()},t.prototype._newSigninPromiseIfNeeded=function(){if(!!this.signin_requested&&!(this.signinDonePromise&&!this.signinDonePromise.done)){var i=Vs(),s=i.promise,u=i.resolve;s.done=!1;var l=function(){s.done=!0};s.then(l).catch(l),this.signinDonePromise=s,this._signinDoneResolve=u}},t}(ne),Gs=Ks,kn=function(){function r(t,i){var s=this;Js(t),Ts(i),this.key=t,this.config=xs(i,this),this.channels=re.createChannels(),this.global_emitter=new ne,this.sessionID=I.randomInt(1e9),this.timeline=new ms(this.key,this.sessionID,{cluster:this.config.cluster,features:r.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:ze.INFO,version:g.VERSION}),this.config.enableStats&&(this.timelineSender=re.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+I.TimelineTransport.name}));var u=function(l){return I.getDefaultStrategy(s.config,l,Ss)};this.connection=re.createConnectionManager(this.key,{getStrategy:u,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:Boolean(this.config.useTLS)}),this.connection.bind("connected",function(){s.subscribeAll(),s.timelineSender&&s.timelineSender.send(s.connection.isUsingTLS())}),this.connection.bind("message",function(l){var d=l.event,v=d.indexOf("pusher_internal:")===0;if(l.channel){var S=s.channel(l.channel);S&&S.handleEvent(l)}v||s.global_emitter.emit(l.event,l.data)}),this.connection.bind("connecting",function(){s.channels.disconnect()}),this.connection.bind("disconnected",function(){s.channels.disconnect()}),this.connection.bind("error",function(l){N.warn(l)}),r.instances.push(this),this.timeline.info({instances:r.instances.length}),this.user=new Gs(this),r.isReady&&this.connect()}return r.ready=function(){r.isReady=!0;for(var t=0,i=r.instances.length;t<i;t++)r.instances[t].connect()},r.getClientFeatures=function(){return sn(un({ws:I.Transports.ws},function(t){return t.isSupported({})}))},r.prototype.channel=function(t){return this.channels.find(t)},r.prototype.allChannels=function(){return this.channels.all()},r.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var t=this.connection.isUsingTLS(),i=this.timelineSender;this.timelineSenderTimer=new fi(6e4,function(){i.send(t)})}},r.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},r.prototype.bind=function(t,i,s){return this.global_emitter.bind(t,i,s),this},r.prototype.unbind=function(t,i,s){return this.global_emitter.unbind(t,i,s),this},r.prototype.bind_global=function(t){return this.global_emitter.bind_global(t),this},r.prototype.unbind_global=function(t){return this.global_emitter.unbind_global(t),this},r.prototype.unbind_all=function(t){return this.global_emitter.unbind_all(),this},r.prototype.subscribeAll=function(){var t;for(t in this.channels.channels)this.channels.channels.hasOwnProperty(t)&&this.subscribe(t)},r.prototype.subscribe=function(t){var i=this.channels.add(t,this);return i.subscriptionPending&&i.subscriptionCancelled?i.reinstateSubscription():!i.subscriptionPending&&this.connection.state==="connected"&&i.subscribe(),i},r.prototype.unsubscribe=function(t){var i=this.channels.find(t);i&&i.subscriptionPending?i.cancelSubscription():(i=this.channels.remove(t),i&&i.subscribed&&i.unsubscribe())},r.prototype.send_event=function(t,i,s){return this.connection.send_event(t,i,s)},r.prototype.shouldUseTLS=function(){return this.config.useTLS},r.prototype.signin=function(){this.user.signin()},r.instances=[],r.isReady=!1,r.logToConsole=!1,r.Runtime=I,r.ScriptReceivers=I.ScriptReceivers,r.DependenciesReceivers=I.DependenciesReceivers,r.auth_callbacks=I.auth_callbacks,r}(),yt=a.default=kn;function Js(r){if(r==null)throw"You must pass your app key when you instantiate Pusher."}I.setup(kn)}])})})(ti);const cr=ha(ti.exports),De=class{constructor(){R(this,"cancelled",!1);R(this,"equipamento_conversa_id");R(this,"usuario_id");R(this,"mensagem");R(this,"mensagem_id");R(this,"notify",()=>{De.listeners.forEach(e=>{this.cancelled||e.callback(this)})})}};let Ae=De;R(Ae,"listeners",[]),R(Ae,"addListener",function(o){De.listeners.push(o),De.listeners.sort((a,c)=>a.priority-c.priority)});const xe=class{constructor(){R(this,"cancelled",!1);R(this,"notificacao");R(this,"notify",()=>{xe.listeners.forEach(e=>{this.cancelled||e.callback(this)})})}};let ke=xe;R(ke,"listeners",[]),R(ke,"addListener",function(e){xe.listeners.push(e),xe.listeners.sort((o,a)=>o.priority-a.priority)});class ph{constructor(){R(this,"id");R(this,"visualizado");R(this,"usuario_id");R(this,"titulo");R(this,"texto")}}const Dt={broadcaster:"pusher",key:"app-key",cluster:"mt1",forceTLS:!1,wsHost:"localhost",wsPort:"10010",wssPort:"10010",authEndpoint:"/broadcasting/auth"};let Ke=null,et=null;function gh(){lr(()=>{vh()})}function vh(){var n,e,o,a,c,h,f,p;Ke!==((a=(o=(e=(n=xn())==null?void 0:n.props)==null?void 0:e.auth)==null?void 0:o.user)==null?void 0:a.id)&&(et&&window.Echo.leave(et),Ke=(p=(f=(h=(c=xn())==null?void 0:c.props)==null?void 0:h.auth)==null?void 0:f.user)==null?void 0:p.id,Ke&&yh())}function yh(){window.Echo=new dh({...Dt,client:new cr(Dt.key,Dt)}),et=`notificacoes.${Ke}`,window.Echo.private(et).listen(".ConversaWebSocket",n=>mh(n)).listen(".NotificacaoWebSocket",n=>bh(n)).listenToAll((n,e)=>console.log([n,e])),window.Pusher=cr}function mh(n){const e=new Ae;e.mensagem_id=n.notification.mensagem.id,e.mensagem=n.notification.mensagem.mensagem,e.usuario_id=n.notification.mensagem.usuario_id,e.equipamento_conversa_id=n.notification.mensagem.equipamento_conversa_id,e.notify()}function bh(n){const e=new ke;e.notificacao=new ph,e.notificacao.id=n.notification.notificacao.id,e.notificacao.visualizado=n.notification.notificacao.visualizado,e.notificacao.usuario_id=n.notification.notificacao.usuario_id,e.notificacao.titulo=n.notification.notificacao.titulo,e.notificacao.texto=n.notification.notificacao.texto,e.notify()}function _h(){gh(),th().iniciarNotificacoes()}const wh={class:"toast-header"},Sh={class:"me-auto"},kh=Pe("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Th={class:"toast-body"},Ch=tt({__name:"Notificacao",props:{id:Number,titulo:String,texto:String},setup(n){const e=n,o=$t(null);let a;lr(()=>{a=new fa(o.value),a.show({autohide:!1})});function c(){da.visit(`/notificacao/${e.id}`)}return(h,f)=>(pe(),Re("div",{ref_key:"toast",ref:o,class:"toast notificacao",role:"alert",onClick:c},[Pe("div",wh,[Pe("span",Sh,Rn(n.titulo),1),kh]),Pe("div",Th,Rn(n.texto),1)],512))}});class Ih{constructor(e,o=10){R(this,"priority");R(this,"callback");this.priority=o,this.callback=e}}const Eh={class:"toast-container position-fixed top-0 end-0 p-3"},Ah=tt({__name:"Notificacoes",setup(n){_h();const e=$t([]);ke.addListener(new Ih(o));function o(a){e.value.push(a.notificacao),setTimeout(()=>{const c=e.value.indexOf(a.notificacao);e.value.splice(c,1)},1e5)}return(a,c)=>(pe(),Re("div",Eh,[(pe(!0),Re(pa,null,ga(e.value,h=>(pe(),ur(Ch,va(ya({key:h.id},h)),null,16))),128))]))}}),Ph={class:"base-layout"},Rh=tt({__name:"BaseLayout",setup(n){return(e,o)=>(pe(),Re("div",Ph,[ma(Ah),ba(e.$slots,"default")]))}}),Nh=(n,e)=>{const o=n.__vccOpts||n;for(const[a,c]of e)o[a]=c;return o};export{Ae as E,Ih as L,Rh as _,xh as a,Nh as b,th as g};

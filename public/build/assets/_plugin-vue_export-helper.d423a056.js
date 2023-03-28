var ia=Object.defineProperty;var oa=(n,t,o)=>t in n?ia(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var R=(n,t,o)=>(oa(n,typeof t!="symbol"?t+"":t,o),o);import{d as Ze,m as Ht,o as pe,a as cr,w as sa,i as Re,k as aa,T as ca,b as Pe,A as ua,B as la,n as ur,J as xn,C as ha,t as Dn,D as fa,F as da,r as pa,E as ga,G as va,g as ya,x as ma}from"./app.e871230a.js";import{r as et,t as Ne}from"./index.c57ba517.js";const ba={key:0,class:"loader"},_a=Pe("div",{class:"elemento"},null,-1),wa=[_a],Rh=Ze({__name:"Loader",setup(n){const t=Ht(!1);function o(){t.value=!0}function a(){t.value=!1}return window.loader={show:o,hide:a,active:t},(c,h)=>(pe(),cr(ca,{name:"loader",duration:"300"},{default:sa(()=>[t.value?(pe(),Re("div",ba,wa)):aa("",!0)]),_:1}))}});/**
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
 */const lr=function(n){const t=[];let o=0;for(let a=0;a<n.length;a++){let c=n.charCodeAt(a);c<128?t[o++]=c:c<2048?(t[o++]=c>>6|192,t[o++]=c&63|128):(c&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(n.charCodeAt(++a)&1023),t[o++]=c>>18|240,t[o++]=c>>12&63|128,t[o++]=c>>6&63|128,t[o++]=c&63|128):(t[o++]=c>>12|224,t[o++]=c>>6&63|128,t[o++]=c&63|128)}return t},Sa=function(n){const t=[];let o=0,a=0;for(;o<n.length;){const c=n[o++];if(c<128)t[a++]=String.fromCharCode(c);else if(c>191&&c<224){const h=n[o++];t[a++]=String.fromCharCode((c&31)<<6|h&63)}else if(c>239&&c<365){const h=n[o++],f=n[o++],p=n[o++],g=((c&7)<<18|(h&63)<<12|(f&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(g>>10)),t[a++]=String.fromCharCode(56320+(g&1023))}else{const h=n[o++],f=n[o++];t[a++]=String.fromCharCode((c&15)<<12|(h&63)<<6|f&63)}}return t.join("")},hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<n.length;c+=3){const h=n[c],f=c+1<n.length,p=f?n[c+1]:0,g=c+2<n.length,w=g?n[c+2]:0,_=h>>2,E=(h&3)<<4|p>>4;let T=(p&15)<<2|w>>6,k=w&63;g||(k=64,f||(T=64)),a.push(o[_],o[E],o[T],o[k])}return a.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(lr(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sa(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const o=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<n.length;){const h=o[n.charAt(c++)],p=c<n.length?o[n.charAt(c)]:0;++c;const w=c<n.length?o[n.charAt(c)]:64;++c;const E=c<n.length?o[n.charAt(c)]:64;if(++c,h==null||p==null||w==null||E==null)throw new ka;const T=h<<2|p>>4;if(a.push(T),w!==64){const k=p<<4&240|w>>2;if(a.push(k),E!==64){const O=w<<6&192|E;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ka extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ta=function(n){const t=lr(n);return hr.encodeByteArray(t,!0)},fr=function(n){return Ta(n).replace(/\./g,"")},Ca=function(n){try{return hr.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Ea=()=>Ia().__FIREBASE_DEFAULTS__,Aa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ca(n[1]);return t&&JSON.parse(t)},Oa=()=>{try{return Ea()||Aa()||Pa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xa=()=>{var n;return(n=Oa())===null||n===void 0?void 0:n.config};/**
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
 */class Da{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,o)=>{this.resolve=t,this.reject=o})}wrapCallback(t){return(o,a)=>{o?this.reject(o):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(o):t(o,a))}}}function Ra(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $t(){try{return typeof indexedDB=="object"}catch{return!1}}function Ut(){return new Promise((n,t)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),o||self.indexedDB.deleteDatabase(a),n(!0)},c.onupgradeneeded=()=>{o=!1},c.onerror=()=>{var h;t(((h=c.error)===null||h===void 0?void 0:h.message)||"")}}catch(o){t(o)}})}function dr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Na="FirebaseError";class be extends Error{constructor(t,o,a){super(o),this.code=t,this.customData=a,this.name=Na,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Me.prototype.create)}}class Me{constructor(t,o,a){this.service=t,this.serviceName=o,this.errors=a}create(t,...o){const a=o[0]||{},c=`${this.service}/${t}`,h=this.errors[t],f=h?La(h,a):"Error",p=`${this.serviceName}: ${f} (${c}).`;return new be(c,p,a)}}function La(n,t){return n.replace(ja,(o,a)=>{const c=t[a];return c!=null?String(c):`<${a}?>`})}const ja=/\{\$([^}]+)}/g;function We(n,t){if(n===t)return!0;const o=Object.keys(n),a=Object.keys(t);for(const c of o){if(!a.includes(c))return!1;const h=n[c],f=t[c];if(Rn(h)&&Rn(f)){if(!We(h,f))return!1}else if(h!==f)return!1}for(const c of a)if(!o.includes(c))return!1;return!0}function Rn(n){return n!==null&&typeof n=="object"}/**
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
 */const Ma=1e3,Ba=2,Fa=4*60*60*1e3,Ha=.5;function Nn(n,t=Ma,o=Ba){const a=t*Math.pow(o,n),c=Math.round(Ha*a*(Math.random()-.5)*2);return Math.min(Fa,a+c)}/**
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
 */function tt(n){return n&&n._delegate?n._delegate:n}class Z{constructor(t,o,a){this.name=t,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class $a{constructor(t,o){this.name=t,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const o=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(o)){const a=new Da;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:o});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(t){var o;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),c=(o=t==null?void 0:t.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(c)return null;throw h}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qa(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);try{const h=this.getOrInitializeService({instanceIdentifier:c});a.resolve(h)}catch{}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...t.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:o={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[h,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&f.resolve(c)}return c}onInit(t,o){var a;const c=this.normalizeInstanceIdentifier(o),h=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;h.add(t),this.onInitCallbacks.set(c,h);const f=this.instances.get(c);return f&&t(f,c),()=>{h.delete(t)}}invokeOnInitCallbacks(t,o){const a=this.onInitCallbacks.get(o);if(!!a)for(const c of a)try{c(t,o)}catch{}}getOrInitializeService({instanceIdentifier:t,options:o={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ua(t),options:o}),this.instances.set(t,a),this.instancesOptions.set(t,o),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ua(n){return n===fe?void 0:n}function qa(n){return n.instantiationMode==="EAGER"}/**
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
 */class za{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const o=this.getProvider(t.name);if(o.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);o.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const o=new $a(t,this);return this.providers.set(t,o),o}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Va={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Wa=x.INFO,Ka={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Ga=(n,t,...o)=>{if(t<n.logLevel)return;const a=new Date().toISOString(),c=Ka[t];if(c)console[c](`[${a}]  ${n.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pr{constructor(t){this.name=t,this._logLevel=Wa,this._logHandler=Ga,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Va[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const Ja=(n,t)=>t.some(o=>n instanceof o);let Ln,jn;function Xa(){return Ln||(Ln=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ya(){return jn||(jn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gr=new WeakMap,xt=new WeakMap,vr=new WeakMap,bt=new WeakMap,qt=new WeakMap;function Qa(n){const t=new Promise((o,a)=>{const c=()=>{n.removeEventListener("success",h),n.removeEventListener("error",f)},h=()=>{o(oe(n.result)),c()},f=()=>{a(n.error),c()};n.addEventListener("success",h),n.addEventListener("error",f)});return t.then(o=>{o instanceof IDBCursor&&gr.set(o,n)}).catch(()=>{}),qt.set(t,n),t}function Za(n){if(xt.has(n))return;const t=new Promise((o,a)=>{const c=()=>{n.removeEventListener("complete",h),n.removeEventListener("error",f),n.removeEventListener("abort",f)},h=()=>{o(),c()},f=()=>{a(n.error||new DOMException("AbortError","AbortError")),c()};n.addEventListener("complete",h),n.addEventListener("error",f),n.addEventListener("abort",f)});xt.set(n,t)}let Dt={get(n,t,o){if(n instanceof IDBTransaction){if(t==="done")return xt.get(n);if(t==="objectStoreNames")return n.objectStoreNames||vr.get(n);if(t==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return oe(n[t])},set(n,t,o){return n[t]=o,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ec(n){Dt=n(Dt)}function tc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...o){const a=n.call(_t(this),t,...o);return vr.set(a,t.sort?t.sort():[t]),oe(a)}:Ya().includes(n)?function(...t){return n.apply(_t(this),t),oe(gr.get(this))}:function(...t){return oe(n.apply(_t(this),t))}}function nc(n){return typeof n=="function"?tc(n):(n instanceof IDBTransaction&&Za(n),Ja(n,Xa())?new Proxy(n,Dt):n)}function oe(n){if(n instanceof IDBRequest)return Qa(n);if(bt.has(n))return bt.get(n);const t=nc(n);return t!==n&&(bt.set(n,t),qt.set(t,n)),t}const _t=n=>qt.get(n);function nt(n,t,{blocked:o,upgrade:a,blocking:c,terminated:h}={}){const f=indexedDB.open(n,t),p=oe(f);return a&&f.addEventListener("upgradeneeded",g=>{a(oe(f.result),g.oldVersion,g.newVersion,oe(f.transaction))}),o&&f.addEventListener("blocked",()=>o()),p.then(g=>{h&&g.addEventListener("close",()=>h()),c&&g.addEventListener("versionchange",()=>c())}).catch(()=>{}),p}function wt(n,{blocked:t}={}){const o=indexedDB.deleteDatabase(n);return t&&o.addEventListener("blocked",()=>t()),oe(o).then(()=>{})}const rc=["get","getKey","getAll","getAllKeys","count"],ic=["put","add","delete","clear"],St=new Map;function Mn(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(St.get(t))return St.get(t);const o=t.replace(/FromIndex$/,""),a=t!==o,c=ic.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(c||rc.includes(o)))return;const h=async function(f,...p){const g=this.transaction(f,c?"readwrite":"readonly");let w=g.store;return a&&(w=w.index(p.shift())),(await Promise.all([w[o](...p),c&&g.done]))[0]};return St.set(t,h),h}ec(n=>({...n,get:(t,o,a)=>Mn(t,o)||n.get(t,o,a),has:(t,o)=>!!Mn(t,o)||n.has(t,o)}));/**
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
 */class oc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(sc(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function sc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rt="@firebase/app",Bn="0.9.5";/**
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
 */const ge=new pr("@firebase/app"),ac="@firebase/app-compat",cc="@firebase/analytics-compat",uc="@firebase/analytics",lc="@firebase/app-check-compat",hc="@firebase/app-check",fc="@firebase/auth",dc="@firebase/auth-compat",pc="@firebase/database",gc="@firebase/database-compat",vc="@firebase/functions",yc="@firebase/functions-compat",mc="@firebase/installations",bc="@firebase/installations-compat",_c="@firebase/messaging",wc="@firebase/messaging-compat",Sc="@firebase/performance",kc="@firebase/performance-compat",Tc="@firebase/remote-config",Cc="@firebase/remote-config-compat",Ic="@firebase/storage",Ec="@firebase/storage-compat",Ac="@firebase/firestore",Pc="@firebase/firestore-compat",Oc="firebase";/**
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
 */const Nt="[DEFAULT]",xc={[Rt]:"fire-core",[ac]:"fire-core-compat",[uc]:"fire-analytics",[cc]:"fire-analytics-compat",[hc]:"fire-app-check",[lc]:"fire-app-check-compat",[fc]:"fire-auth",[dc]:"fire-auth-compat",[pc]:"fire-rtdb",[gc]:"fire-rtdb-compat",[vc]:"fire-fn",[yc]:"fire-fn-compat",[mc]:"fire-iid",[bc]:"fire-iid-compat",[_c]:"fire-fcm",[wc]:"fire-fcm-compat",[Sc]:"fire-perf",[kc]:"fire-perf-compat",[Tc]:"fire-rc",[Cc]:"fire-rc-compat",[Ic]:"fire-gcs",[Ec]:"fire-gcs-compat",[Ac]:"fire-fst",[Pc]:"fire-fst-compat","fire-js":"fire-js",[Oc]:"fire-js-all"};/**
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
 */const Ke=new Map,Lt=new Map;function Dc(n,t){try{n.container.addComponent(t)}catch(o){ge.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,o)}}function se(n){const t=n.name;if(Lt.has(t))return ge.debug(`There were multiple attempts to register component ${t}.`),!1;Lt.set(t,n);for(const o of Ke.values())Dc(o,n);return!0}function Be(n,t){const o=n.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */class Nc{constructor(t,o,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}function yr(n,t={}){let o=n;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},t),c=a.name;if(typeof c!="string"||!c)throw ae.create("bad-app-name",{appName:String(c)});if(o||(o=xa()),!o)throw ae.create("no-options");const h=Ke.get(c);if(h){if(We(o,h.options)&&We(a,h.config))return h;throw ae.create("duplicate-app",{appName:c})}const f=new za(c);for(const g of Lt.values())f.addComponent(g);const p=new Nc(o,a,f);return Ke.set(c,p),p}function mr(n=Nt){const t=Ke.get(n);if(!t&&n===Nt)return yr();if(!t)throw ae.create("no-app",{appName:n});return t}function Q(n,t,o){var a;let c=(a=xc[n])!==null&&a!==void 0?a:n;o&&(c+=`-${o}`);const h=c.match(/\s|\//),f=t.match(/\s|\//);if(h||f){const p=[`Unable to register library "${c}" with version "${t}":`];h&&p.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ge.warn(p.join(" "));return}se(new Z(`${c}-version`,()=>({library:c,version:t}),"VERSION"))}/**
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
 */const Lc="firebase-heartbeat-database",jc=1,Le="firebase-heartbeat-store";let kt=null;function br(){return kt||(kt=nt(Lc,jc,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Le)}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),kt}async function Mc(n){try{return(await br()).transaction(Le).objectStore(Le).get(_r(n))}catch(t){if(t instanceof be)ge.warn(t.message);else{const o=ae.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ge.warn(o.message)}}}async function Fn(n,t){try{const a=(await br()).transaction(Le,"readwrite");return await a.objectStore(Le).put(t,_r(n)),a.done}catch(o){if(o instanceof be)ge.warn(o.message);else{const a=ae.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});ge.warn(a.message)}}}function _r(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bc=1024,Fc=30*24*60*60*1e3;class Hc{constructor(t){this.container=t,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new Uc(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Hn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=Fc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hn(),{heartbeatsToSend:o,unsentEntries:a}=$c(this._heartbeatsCache.heartbeats),c=fr(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function Hn(){return new Date().toISOString().substring(0,10)}function $c(n,t=Bc){const o=[];let a=n.slice();for(const c of n){const h=o.find(f=>f.agent===c.agent);if(h){if(h.dates.push(c.date),$n(o)>t){h.dates.pop();break}}else if(o.push({agent:c.agent,dates:[c.date]}),$n(o)>t){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class Uc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $t()?Ut().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Fn(this.app,{lastSentHeartbeatDate:(o=t.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Fn(this.app,{lastSentHeartbeatDate:(o=t.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...t.heartbeats]})}else return}}function $n(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function qc(n){se(new Z("platform-logger",t=>new oc(t),"PRIVATE")),se(new Z("heartbeat",t=>new Hc(t),"PRIVATE")),Q(Rt,Bn,n),Q(Rt,Bn,"esm2017"),Q("fire-js","")}qc("");var zc="firebase",Vc="9.18.0";/**
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
 */Q(zc,Vc,"app");const wr="@firebase/installations",zt="0.6.4";/**
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
 */const Sr=1e4,kr=`w:${zt}`,Tr="FIS_v2",Wc="https://firebaseinstallations.googleapis.com/v1",Kc=60*60*1e3,Gc="installations",Jc="Installations";/**
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
 */const Xc={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ve=new Me(Gc,Jc,Xc);function Cr(n){return n instanceof be&&n.code.includes("request-failed")}/**
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
 */function Ir({projectId:n}){return`${Wc}/projects/${n}/installations`}function Er(n){return{token:n.token,requestStatus:2,expiresIn:Qc(n.expiresIn),creationTime:Date.now()}}async function Ar(n,t){const a=(await t.json()).error;return ve.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Pr({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Yc(n,{refreshToken:t}){const o=Pr(n);return o.append("Authorization",Zc(t)),o}async function Or(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Qc(n){return Number(n.replace("s","000"))}function Zc(n){return`${Tr} ${n}`}/**
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
 */async function eu({appConfig:n,heartbeatServiceProvider:t},{fid:o}){const a=Ir(n),c=Pr(n),h=t.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={fid:o,authVersion:Tr,appId:n.appId,sdkVersion:kr},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Or(()=>fetch(a,p));if(g.ok){const w=await g.json();return{fid:w.fid||o,registrationStatus:2,refreshToken:w.refreshToken,authToken:Er(w.authToken)}}else throw await Ar("Create Installation",g)}/**
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
 */function xr(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */const nu=/^[cdef][\w-]{21}$/,jt="";function ru(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const o=iu(n);return nu.test(o)?o:jt}catch{return jt}}function iu(n){return tu(n).substr(0,22)}/**
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
 */function rt(n){return`${n.appName}!${n.appId}`}/**
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
 */const Dr=new Map;function Rr(n,t){const o=rt(n);Nr(o,t),ou(o,t)}function Nr(n,t){const o=Dr.get(n);if(!!o)for(const a of o)a(t)}function ou(n,t){const o=su();o&&o.postMessage({key:n,fid:t}),au()}let de=null;function su(){return!de&&"BroadcastChannel"in self&&(de=new BroadcastChannel("[Firebase] FID Change"),de.onmessage=n=>{Nr(n.data.key,n.data.fid)}),de}function au(){Dr.size===0&&de&&(de.close(),de=null)}/**
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
 */const cu="firebase-installations-database",uu=1,ye="firebase-installations-store";let Tt=null;function Vt(){return Tt||(Tt=nt(cu,uu,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ye)}}})),Tt}async function Ge(n,t){const o=rt(n),c=(await Vt()).transaction(ye,"readwrite"),h=c.objectStore(ye),f=await h.get(o);return await h.put(t,o),await c.done,(!f||f.fid!==t.fid)&&Rr(n,t.fid),t}async function Lr(n){const t=rt(n),a=(await Vt()).transaction(ye,"readwrite");await a.objectStore(ye).delete(t),await a.done}async function it(n,t){const o=rt(n),c=(await Vt()).transaction(ye,"readwrite"),h=c.objectStore(ye),f=await h.get(o),p=t(f);return p===void 0?await h.delete(o):await h.put(p,o),await c.done,p&&(!f||f.fid!==p.fid)&&Rr(n,p.fid),p}/**
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
 */async function Wt(n){let t;const o=await it(n.appConfig,a=>{const c=lu(a),h=hu(n,c);return t=h.registrationPromise,h.installationEntry});return o.fid===jt?{installationEntry:await t}:{installationEntry:o,registrationPromise:t}}function lu(n){const t=n||{fid:ru(),registrationStatus:0};return jr(t)}function hu(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ve.create("app-offline"));return{installationEntry:t,registrationPromise:c}}const o={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=fu(n,o);return{installationEntry:o,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:du(n)}:{installationEntry:t}}async function fu(n,t){try{const o=await eu(n,t);return Ge(n.appConfig,o)}catch(o){throw Cr(o)&&o.customData.serverCode===409?await Lr(n.appConfig):await Ge(n.appConfig,{fid:t.fid,registrationStatus:0}),o}}async function du(n){let t=await Un(n.appConfig);for(;t.registrationStatus===1;)await xr(100),t=await Un(n.appConfig);if(t.registrationStatus===0){const{installationEntry:o,registrationPromise:a}=await Wt(n);return a||o}return t}function Un(n){return it(n,t=>{if(!t)throw ve.create("installation-not-found");return jr(t)})}function jr(n){return pu(n)?{fid:n.fid,registrationStatus:0}:n}function pu(n){return n.registrationStatus===1&&n.registrationTime+Sr<Date.now()}/**
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
 */async function gu({appConfig:n,heartbeatServiceProvider:t},o){const a=vu(n,o),c=Yc(n,o),h=t.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={installation:{sdkVersion:kr,appId:n.appId}},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Or(()=>fetch(a,p));if(g.ok){const w=await g.json();return Er(w)}else throw await Ar("Generate Auth Token",g)}function vu(n,{fid:t}){return`${Ir(n)}/${t}/authTokens:generate`}/**
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
 */async function Kt(n,t=!1){let o;const a=await it(n.appConfig,h=>{if(!Mr(h))throw ve.create("not-registered");const f=h.authToken;if(!t&&bu(f))return h;if(f.requestStatus===1)return o=yu(n,t),h;{if(!navigator.onLine)throw ve.create("app-offline");const p=wu(h);return o=mu(n,p),p}});return o?await o:a.authToken}async function yu(n,t){let o=await qn(n.appConfig);for(;o.authToken.requestStatus===1;)await xr(100),o=await qn(n.appConfig);const a=o.authToken;return a.requestStatus===0?Kt(n,t):a}function qn(n){return it(n,t=>{if(!Mr(t))throw ve.create("not-registered");const o=t.authToken;return Su(o)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function mu(n,t){try{const o=await gu(n,t),a=Object.assign(Object.assign({},t),{authToken:o});return await Ge(n.appConfig,a),o}catch(o){if(Cr(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await Lr(n.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ge(n.appConfig,a)}throw o}}function Mr(n){return n!==void 0&&n.registrationStatus===2}function bu(n){return n.requestStatus===2&&!_u(n)}function _u(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Kc}function wu(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Su(n){return n.requestStatus===1&&n.requestTime+Sr<Date.now()}/**
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
 */async function ku(n){const t=n,{installationEntry:o,registrationPromise:a}=await Wt(t);return a?a.catch(console.error):Kt(t).catch(console.error),o.fid}/**
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
 */async function Tu(n,t=!1){const o=n;return await Cu(o),(await Kt(o,t)).token}async function Cu(n){const{registrationPromise:t}=await Wt(n);t&&await t}/**
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
 */function Iu(n){if(!n||!n.options)throw Ct("App Configuration");if(!n.name)throw Ct("App Name");const t=["projectId","apiKey","appId"];for(const o of t)if(!n.options[o])throw Ct(o);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ct(n){return ve.create("missing-app-config-values",{valueName:n})}/**
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
 */const Br="installations",Eu="installations-internal",Au=n=>{const t=n.getProvider("app").getImmediate(),o=Iu(t),a=Be(t,"heartbeat");return{app:t,appConfig:o,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Pu=n=>{const t=n.getProvider("app").getImmediate(),o=Be(t,Br).getImmediate();return{getId:()=>ku(o),getToken:c=>Tu(o,c)}};function Ou(){se(new Z(Br,Au,"PUBLIC")),se(new Z(Eu,Pu,"PRIVATE"))}Ou();Q(wr,zt);Q(wr,zt,"esm2017");/**
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
 */const Je="analytics",xu="firebase_id",Du="origin",Ru=60*1e3,Nu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fr="https://www.googletagmanager.com/gtag/js";/**
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
 */const q=new pr("@firebase/analytics");/**
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
 */function Hr(n){return Promise.all(n.map(t=>t.catch(o=>o)))}function Lu(n,t){const o=document.createElement("script");o.src=`${Fr}?l=${n}&id=${t}`,o.async=!0,document.head.appendChild(o)}function ju(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Mu(n,t,o,a,c,h){const f=a[c];try{if(f)await t[f];else{const g=(await Hr(o)).find(w=>w.measurementId===c);g&&await t[g.appId]}}catch(p){q.error(p)}n("config",c,h)}async function Bu(n,t,o,a,c){try{let h=[];if(c&&c.send_to){let f=c.send_to;Array.isArray(f)||(f=[f]);const p=await Hr(o);for(const g of f){const w=p.find(E=>E.measurementId===g),_=w&&t[w.appId];if(_)h.push(_);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),n("event",a,c||{})}catch(h){q.error(h)}}function Fu(n,t,o,a){async function c(h,f,p){try{h==="event"?await Bu(n,t,o,f,p):h==="config"?await Mu(n,t,o,a,f,p):h==="consent"?n("consent","update",p):n("set",f)}catch(g){q.error(g)}}return c}function Hu(n,t,o,a,c){let h=function(...f){window[a].push(arguments)};return window[c]&&typeof window[c]=="function"&&(h=window[c]),window[c]=Fu(h,n,t,o),{gtagCore:h,wrappedGtag:window[c]}}function $u(n){const t=window.document.getElementsByTagName("script");for(const o of Object.values(t))if(o.src&&o.src.includes(Fr)&&o.src.includes(n))return o;return null}/**
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
 */const qu=30,zu=1e3;class Vu{constructor(t={},o=zu){this.throttleMetadata=t,this.intervalMillis=o}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,o){this.throttleMetadata[t]=o}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const $r=new Vu;function Wu(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ku(n){var t;const{appId:o,apiKey:a}=n,c={method:"GET",headers:Wu(a)},h=Nu.replace("{app-id}",o),f=await fetch(h,c);if(f.status!==200&&f.status!==304){let p="";try{const g=await f.json();!((t=g.error)===null||t===void 0)&&t.message&&(p=g.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function Gu(n,t=$r,o){const{appId:a,apiKey:c,measurementId:h}=n.options;if(!a)throw W.create("no-app-id");if(!c){if(h)return{measurementId:h,appId:a};throw W.create("no-api-key")}const f=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Yu;return setTimeout(async()=>{p.abort()},o!==void 0?o:Ru),Ur({appId:a,apiKey:c,measurementId:h},f,p,t)}async function Ur(n,{throttleEndTimeMillis:t,backoffCount:o},a,c=$r){var h;const{appId:f,measurementId:p}=n;try{await Ju(a,t)}catch(g){if(p)return q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:p};throw g}try{const g=await Ku(n);return c.deleteThrottleMetadata(f),g}catch(g){const w=g;if(!Xu(w)){if(c.deleteThrottleMetadata(f),p)return q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:f,measurementId:p};throw g}const _=Number((h=w==null?void 0:w.customData)===null||h===void 0?void 0:h.httpStatus)===503?Nn(o,c.intervalMillis,qu):Nn(o,c.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:o+1};return c.setThrottleMetadata(f,E),q.debug(`Calling attemptFetch again in ${_} millis`),Ur(n,E,a,c)}}function Ju(n,t){return new Promise((o,a)=>{const c=Math.max(t-Date.now(),0),h=setTimeout(o,c);n.addEventListener(()=>{clearTimeout(h),a(W.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Xu(n){if(!(n instanceof be)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Yu{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Qu(n,t,o,a,c){if(c&&c.global){n("event",o,a);return}else{const h=await t,f=Object.assign(Object.assign({},a),{send_to:h});n("event",o,f)}}/**
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
 */async function Zu(){if($t())try{await Ut()}catch(n){return q.warn(W.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return q.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function el(n,t,o,a,c,h,f){var p;const g=Gu(n);g.then(k=>{o[k.measurementId]=k.appId,n.options.measurementId&&k.measurementId!==n.options.measurementId&&q.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>q.error(k)),t.push(g);const w=Zu().then(k=>{if(k)return a.getId()}),[_,E]=await Promise.all([g,w]);$u(h)||Lu(h,_.measurementId),c("js",new Date);const T=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return T[Du]="firebase",T.update=!0,E!=null&&(T[xu]=E),c("config",_.measurementId,T),_.measurementId}/**
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
 */class tl{constructor(t){this.app=t}_delete(){return delete Oe[this.app.options.appId],Promise.resolve()}}let Oe={},zn=[];const Vn={};let It="dataLayer",nl="gtag",Wn,qr,Kn=!1;function rl(){const n=[];if(Ra()&&n.push("This is a browser extension environment."),dr()||n.push("Cookies are not available."),n.length>0){const t=n.map((a,c)=>`(${c+1}) ${a}`).join(" "),o=W.create("invalid-analytics-context",{errorInfo:t});q.warn(o.message)}}function il(n,t,o){rl();const a=n.options.appId;if(!a)throw W.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Oe[a]!=null)throw W.create("already-exists",{id:a});if(!Kn){ju(It);const{wrappedGtag:h,gtagCore:f}=Hu(Oe,zn,Vn,It,nl);qr=h,Wn=f,Kn=!0}return Oe[a]=el(n,zn,Vn,t,Wn,It,o),new tl(n)}function ol(n=mr()){n=tt(n);const t=Be(n,Je);return t.isInitialized()?t.getImmediate():sl(n)}function sl(n,t={}){const o=Be(n,Je);if(o.isInitialized()){const c=o.getImmediate();if(We(t,o.getOptions()))return c;throw W.create("already-initialized")}return o.initialize({options:t})}function al(n,t,o,a){n=tt(n),Qu(qr,Oe[n.app.options.appId],t,o,a).catch(c=>q.error(c))}const Gn="@firebase/analytics",Jn="0.9.4";function cl(){se(new Z(Je,(t,{options:o})=>{const a=t.getProvider("app").getImmediate(),c=t.getProvider("installations-internal").getImmediate();return il(a,c,o)},"PUBLIC")),se(new Z("analytics-internal",n,"PRIVATE")),Q(Gn,Jn),Q(Gn,Jn,"esm2017");function n(t){try{const o=t.getProvider(Je).getImmediate();return{logEvent:(a,c,h)=>al(o,a,c,h)}}catch(o){throw W.create("interop-component-reg-failed",{reason:o})}}}cl();/**
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
 */const ul="/firebase-messaging-sw.js",ll="/firebase-cloud-messaging-push-scope",zr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",hl="https://fcmregistrations.googleapis.com/v1",Vr="google.c.a.c_id",fl="google.c.a.c_l",dl="google.c.a.ts",pl="google.c.a.e";var Xn;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xn||(Xn={}));/**
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
 */var je;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(je||(je={}));/**
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
 */function ie(n){const t=new Uint8Array(n);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function gl(n){const t="=".repeat((4-n.length%4)%4),o=(n+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(o),c=new Uint8Array(a.length);for(let h=0;h<a.length;++h)c[h]=a.charCodeAt(h);return c}/**
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
 */const Et="fcm_token_details_db",vl=5,Yn="fcm_token_object_Store";async function yl(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(Et))return null;let t=null;return(await nt(Et,vl,{upgrade:async(a,c,h,f)=>{var p;if(c<2||!a.objectStoreNames.contains(Yn))return;const g=f.objectStore(Yn),w=await g.index("fcmSenderId").get(n);if(await g.clear(),!!w){if(c===2){const _=w;if(!_.auth||!_.p256dh||!_.endpoint)return;t={token:_.fcmToken,createTime:(p=_.createTime)!==null&&p!==void 0?p:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:ie(_.vapidKey)}}}else if(c===3){const _=w;t={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}else if(c===4){const _=w;t={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}}}})).close(),await wt(Et),await wt("fcm_vapid_details_db"),await wt("undefined"),ml(t)?t:null}function ml(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:t}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const bl="firebase-messaging-database",_l=1,me="firebase-messaging-store";let At=null;function Gt(){return At||(At=nt(bl,_l,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(me)}}})),At}async function Wr(n){const t=Xt(n),a=await(await Gt()).transaction(me).objectStore(me).get(t);if(a)return a;{const c=await yl(n.appConfig.senderId);if(c)return await Jt(n,c),c}}async function Jt(n,t){const o=Xt(n),c=(await Gt()).transaction(me,"readwrite");return await c.objectStore(me).put(t,o),await c.done,t}async function wl(n){const t=Xt(n),a=(await Gt()).transaction(me,"readwrite");await a.objectStore(me).delete(t),await a.done}function Xt({appConfig:n}){return n.appId}/**
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
 */async function kl(n,t){const o=await Qt(n),a=Gr(t),c={method:"POST",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(Yt(n.appConfig),c)).json()}catch(f){throw $.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw $.create("token-subscribe-failed",{errorInfo:f})}if(!h.token)throw $.create("token-subscribe-no-token");return h.token}async function Tl(n,t){const o=await Qt(n),a=Gr(t.subscriptionOptions),c={method:"PATCH",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(`${Yt(n.appConfig)}/${t.token}`,c)).json()}catch(f){throw $.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw $.create("token-update-failed",{errorInfo:f})}if(!h.token)throw $.create("token-update-no-token");return h.token}async function Kr(n,t){const a={method:"DELETE",headers:await Qt(n)};try{const h=await(await fetch(`${Yt(n.appConfig)}/${t}`,a)).json();if(h.error){const f=h.error.message;throw $.create("token-unsubscribe-failed",{errorInfo:f})}}catch(c){throw $.create("token-unsubscribe-failed",{errorInfo:c==null?void 0:c.toString()})}}function Yt({projectId:n}){return`${hl}/projects/${n}/registrations`}async function Qt({appConfig:n,installations:t}){const o=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${o}`})}function Gr({p256dh:n,auth:t,endpoint:o,vapidKey:a}){const c={web:{endpoint:o,auth:t,p256dh:n}};return a!==zr&&(c.web.applicationPubKey=a),c}/**
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
 */const Cl=7*24*60*60*1e3;async function Il(n){const t=await Pl(n.swRegistration,n.vapidKey),o={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:t.endpoint,auth:ie(t.getKey("auth")),p256dh:ie(t.getKey("p256dh"))},a=await Wr(n.firebaseDependencies);if(a){if(Ol(a.subscriptionOptions,o))return Date.now()>=a.createTime+Cl?Al(n,{token:a.token,createTime:Date.now(),subscriptionOptions:o}):a.token;try{await Kr(n.firebaseDependencies,a.token)}catch(c){console.warn(c)}return Qn(n.firebaseDependencies,o)}else return Qn(n.firebaseDependencies,o)}async function El(n){const t=await Wr(n.firebaseDependencies);t&&(await Kr(n.firebaseDependencies,t.token),await wl(n.firebaseDependencies));const o=await n.swRegistration.pushManager.getSubscription();return o?o.unsubscribe():!0}async function Al(n,t){try{const o=await Tl(n.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:o,createTime:Date.now()});return await Jt(n.firebaseDependencies,a),o}catch(o){throw await El(n),o}}async function Qn(n,t){const a={token:await kl(n,t),createTime:Date.now(),subscriptionOptions:t};return await Jt(n,a),a.token}async function Pl(n,t){const o=await n.pushManager.getSubscription();return o||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gl(t)})}function Ol(n,t){const o=t.vapidKey===n.vapidKey,a=t.endpoint===n.endpoint,c=t.auth===n.auth,h=t.p256dh===n.p256dh;return o&&a&&c&&h}/**
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
 */function Zn(n){const t={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return xl(t,n),Dl(t,n),Rl(t,n),t}function xl(n,t){if(!t.notification)return;n.notification={};const o=t.notification.title;o&&(n.notification.title=o);const a=t.notification.body;a&&(n.notification.body=a);const c=t.notification.image;c&&(n.notification.image=c);const h=t.notification.icon;h&&(n.notification.icon=h)}function Dl(n,t){!t.data||(n.data=t.data)}function Rl(n,t){var o,a,c,h,f;if(!t.fcmOptions&&!(!((o=t.notification)===null||o===void 0)&&o.click_action))return;n.fcmOptions={};const p=(c=(a=t.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&c!==void 0?c:(h=t.notification)===null||h===void 0?void 0:h.click_action;p&&(n.fcmOptions.link=p);const g=(f=t.fcmOptions)===null||f===void 0?void 0:f.analytics_label;g&&(n.fcmOptions.analyticsLabel=g)}/**
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
 */function Nl(n){return typeof n=="object"&&!!n&&Vr in n}/**
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
 */Jr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Jr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Jr(n,t){const o=[];for(let a=0;a<n.length;a++)o.push(n.charAt(a)),a<t.length&&o.push(t.charAt(a));return o.join("")}/**
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
 */function Ll(n){if(!n||!n.options)throw Pt("App Configuration Object");if(!n.name)throw Pt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:o}=n;for(const a of t)if(!o[a])throw Pt(a);return{appName:n.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function Pt(n){return $.create("missing-app-config-values",{valueName:n})}/**
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
 */class jl{constructor(t,o,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const c=Ll(t);this.firebaseDependencies={app:t,appConfig:c,installations:o,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
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
 */async function Ml(n){try{n.swRegistration=await navigator.serviceWorker.register(ul,{scope:ll}),n.swRegistration.update().catch(()=>{})}catch(t){throw $.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Bl(n,t){if(!t&&!n.swRegistration&&await Ml(n),!(!t&&!!n.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw $.create("invalid-sw-registration");n.swRegistration=t}}/**
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
 */async function Fl(n,t){t?n.vapidKey=t:n.vapidKey||(n.vapidKey=zr)}/**
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
 */async function Xr(n,t){if(!navigator)throw $.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $.create("permission-blocked");return await Fl(n,t==null?void 0:t.vapidKey),await Bl(n,t==null?void 0:t.serviceWorkerRegistration),Il(n)}/**
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
 */async function Hl(n,t,o){const a=$l(t);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:o[Vr],message_name:o[fl],message_time:o[dl],message_device_time:Math.floor(Date.now()/1e3)})}function $l(n){switch(n){case je.NOTIFICATION_CLICKED:return"notification_open";case je.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Ul(n,t){const o=t.data;if(!o.isFirebaseMessaging)return;n.onMessageHandler&&o.messageType===je.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Zn(o)):n.onMessageHandler.next(Zn(o)));const a=o.data;Nl(a)&&a[pl]==="1"&&await Hl(n,o.messageType,a)}const er="@firebase/messaging",tr="0.12.4";/**
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
 */const ql=n=>{const t=new jl(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",o=>Ul(t,o)),t},zl=n=>{const t=n.getProvider("messaging").getImmediate();return{getToken:a=>Xr(t,a)}};function Vl(){se(new Z("messaging",ql,"PUBLIC")),se(new Z("messaging-internal",zl,"PRIVATE")),Q(er,tr),Q(er,tr,"esm2017")}/**
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
 */async function Wl(){try{await Ut()}catch{return!1}return typeof window<"u"&&$t()&&dr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Kl(n=mr()){return Wl().then(t=>{if(!t)throw $.create("unsupported-browser")},t=>{throw $.create("indexed-db-unsupported")}),Be(tt(n),"messaging").getImmediate()}async function Gl(n,t){return n=tt(n),Xr(n,t)}Vl();function Jl(n){if(n===null||n===!0||n===!1)return NaN;var t=Number(n);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function nr(n,t){et(2,arguments);var o=Ne(n),a=Jl(t);return isNaN(a)?new Date(NaN):(a&&o.setDate(o.getDate()+a),o)}function ze(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ze=function(o){return typeof o}:ze=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ze(n)}function rr(n){return et(1,arguments),n instanceof Date||ze(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Xl(n,t){et(2,arguments);var o=Ne(n),a=Ne(t);return o.getTime()>a.getTime()}function Yl(n,t){et(2,arguments);var o=Ne(n),a=Ne(t);return o.getTime()<a.getTime()}const Ql={apiKey:"AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",authDomain:"agroarca-equipamentos.firebaseapp.com",projectId:"agroarca-equipamentos",messagingSenderId:"260002359203",appId:"1:260002359203:web:8c19a187bf2fe28079dc16",measurementId:"G-DHSLGFC76R"},Zl="BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU",ir=14;let Se;class eh{constructor(){R(this,"app");R(this,"messaging");R(this,"analytics");this.app=yr(Ql),this.messaging=Kl(this.app),this.analytics=ol(this.app)}solicitarPermissao(){return this.solicitarPermissaoNotificacoes().then(this.criarToken)}solicitarPermissaoNotificacoes(){return new Promise((t,o)=>{if(Notification.permission==="denied"){o();return}if(Notification.permission==="granted"){t();return}localStorage.dataSolicitouPermNotificacao=new Date,Notification.requestPermission().then(a=>{if(Notification.permission==="granted"){t();return}o()})})}iniciarNotificacoes(){Notification.permission==="granted"&&this.precisaRenovarToken()&&this.criarToken()}criarToken(){Gl(Se.messaging,{vapidKey:Zl}).then(t=>{t&&Se.salvarToken(t)})}salvarToken(t){ua.post("/notificacao/token",{token:t}).then(()=>{localStorage.ultimaRenovacaoToken=new Date})}precisaRenovarToken(){let t=Date.parse(localStorage.ultimaRenovacaoToken);return rr(t)?Xl(new Date,nr(new Date(t),ir)):!1}temPermissao(){return Notification.permission==="granted"}jaSolicitouPermissao(){let t=new Date(Date.parse(localStorage.dataSolicitouPermNotificacao));return rr(t)?Yl(new Date,nr(new Date(t),ir)):!1}}function th(){return Se||(Se=new eh,Se)}function Mt(n){return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mt(n)}function j(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function or(n,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function M(n,t,o){return t&&or(n.prototype,t),o&&or(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function Bt(){return Bt=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},Bt.apply(this,arguments)}function z(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&Ft(n,t)}function Xe(n){return Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},Xe(n)}function Ft(n,t){return Ft=Object.setPrototypeOf||function(a,c){return a.__proto__=c,a},Ft(n,t)}function nh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rh(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ih(n,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rh(n)}function V(n){var t=nh();return function(){var a=Xe(n),c;if(t){var h=Xe(this).constructor;c=Reflect.construct(a,arguments,h)}else c=a.apply(this,arguments);return ih(this,c)}}var Zt=function(){function n(){j(this,n)}return M(n,[{key:"listenForWhisper",value:function(o,a){return this.listen(".client-"+o,a)}},{key:"notification",value:function(o){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",o)}},{key:"stopListeningForWhisper",value:function(o,a){return this.stopListening(".client-"+o,a)}}]),n}(),Yr=function(){function n(t){j(this,n),this.setNamespace(t)}return M(n,[{key:"format",value:function(o){return o.charAt(0)==="."||o.charAt(0)==="\\"?o.substr(1):(this.namespace&&(o=this.namespace+"."+o),o.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(o){this.namespace=o}}]),n}(),ot=function(n){z(o,n);var t=V(o);function o(a,c,h){var f;return j(this,o),f=t.call(this),f.name=c,f.pusher=a,f.options=h,f.eventFormatter=new Yr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"listenToAll",value:function(c){var h=this;return this.subscription.bind_global(function(f,p){if(!f.startsWith("pusher:")){var g=h.options.namespace.replace(/\./g,"\\"),w=f.startsWith(g)?f.substring(g.length+1):"."+f;c(w,p)}}),this}},{key:"stopListening",value:function(c,h){return h?this.subscription.unbind(this.eventFormatter.format(c),h):this.subscription.unbind(this.eventFormatter.format(c)),this}},{key:"stopListeningToAll",value:function(c){return c?this.subscription.unbind_global(c):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(c){return this.on("pusher:subscription_succeeded",function(){c()}),this}},{key:"error",value:function(c){return this.on("pusher:subscription_error",function(h){c(h)}),this}},{key:"on",value:function(c,h){return this.subscription.bind(c,h),this}}]),o}(Zt),oh=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(ot),sh=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(ot),ah=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("pusher:subscription_succeeded",function(h){c(Object.keys(h.members).map(function(f){return h.members[f]}))}),this}},{key:"joining",value:function(c){return this.on("pusher:member_added",function(h){c(h.info)}),this}},{key:"leaving",value:function(c){return this.on("pusher:member_removed",function(h){c(h.info)}),this}},{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(ot),Qr=function(n){z(o,n);var t=V(o);function o(a,c,h){var f;return j(this,o),f=t.call(this),f.events={},f.listeners={},f.name=c,f.socket=a,f.options=h,f.eventFormatter=new Yr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"stopListening",value:function(c,h){return this.unbindEvent(this.eventFormatter.format(c),h),this}},{key:"subscribed",value:function(c){return this.on("connect",function(h){c(h)}),this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){var f=this;return this.listeners[c]=this.listeners[c]||[],this.events[c]||(this.events[c]=function(p,g){f.name===p&&f.listeners[c]&&f.listeners[c].forEach(function(w){return w(g)})},this.socket.on(c,this.events[c])),this.listeners[c].push(h),this}},{key:"unbind",value:function(){var c=this;Object.keys(this.events).forEach(function(h){c.unbindEvent(h)})}},{key:"unbindEvent",value:function(c,h){this.listeners[c]=this.listeners[c]||[],h&&(this.listeners[c]=this.listeners[c].filter(function(f){return f!==h})),(!h||this.listeners[c].length===0)&&(this.events[c]&&(this.socket.removeListener(c,this.events[c]),delete this.events[c]),delete this.listeners[c])}}]),o}(Zt),Zr=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(c),data:h}),this}}]),o}(Qr),ch=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("presence:subscribed",function(h){c(h.map(function(f){return f.user_info}))}),this}},{key:"joining",value:function(c){return this.on("presence:joining",function(h){return c(h.user_info)}),this}},{key:"leaving",value:function(c){return this.on("presence:leaving",function(h){return c(h.user_info)}),this}}]),o}(Zr),Ye=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(c,h){return this}},{key:"listenToAll",value:function(c){return this}},{key:"stopListening",value:function(c,h){return this}},{key:"subscribed",value:function(c){return this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){return this}}]),o}(Zt),sr=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this}}]),o}(Ye),uh=function(n){z(o,n);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this}},{key:"joining",value:function(c){return this}},{key:"leaving",value:function(c){return this}},{key:"whisper",value:function(c,h){return this}}]),o}(Ye),en=function(){function n(t){j(this,n),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(t),this.connect()}return M(n,[{key:"setOptions",value:function(o){this.options=Bt(this._defaultOptions,o);var a=this.csrfToken();return a&&(this.options.auth.headers["X-CSRF-TOKEN"]=a,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=a),a=this.options.bearerToken,a&&(this.options.auth.headers.Authorization="Bearer "+a,this.options.userAuthentication.headers.Authorization="Bearer "+a),o}},{key:"csrfToken",value:function(){var o;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(o=document.querySelector('meta[name="csrf-token"]'))?o.getAttribute("content"):null}}]),n}(),lh=function(n){z(o,n);var t=V(o);function o(){var a;return j(this,o),a=t.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new ot(this.pusher,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new oh(this.pusher,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"encryptedPrivateChannel",value:function(c){return this.channels["private-encrypted-"+c]||(this.channels["private-encrypted-"+c]=new sh(this.pusher,"private-encrypted-"+c,this.options)),this.channels["private-encrypted-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ah(this.pusher,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"private-encrypted-"+c,"presence-"+c];f.forEach(function(p,g){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),o}(en),hh=function(n){z(o,n);var t=V(o);function o(){var a;return j(this,o),a=t.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){var c=this,h=this.getSocketIO();return this.socket=h(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(c.channels).forEach(function(f){f.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new Qr(this.socket,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new Zr(this.socket,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ch(this.socket,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"presence-"+c];f.forEach(function(p){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),o}(en),fh=function(n){z(o,n);var t=V(o);function o(){var a;return j(this,o),a=t.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){}},{key:"listen",value:function(c,h,f){return new Ye}},{key:"channel",value:function(c){return new Ye}},{key:"privateChannel",value:function(c){return new sr}},{key:"encryptedPrivateChannel",value:function(c){return new sr}},{key:"presenceChannel",value:function(c){return new uh}},{key:"leave",value:function(c){}},{key:"leaveChannel",value:function(c){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),o}(en),dh=function(){function n(t){j(this,n),this.options=t,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return M(n,[{key:"channel",value:function(o){return this.connector.channel(o)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new lh(this.options):this.options.broadcaster=="socket.io"?this.connector=new hh(this.options):this.options.broadcaster=="null"?this.connector=new fh(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(o){return this.connector.presenceChannel(o)}},{key:"leave",value:function(o){this.connector.leave(o)}},{key:"leaveChannel",value:function(o){this.connector.leaveChannel(o)}},{key:"leaveAllChannels",value:function(){for(var o in this.connector.channels)this.leaveChannel(o)}},{key:"listen",value:function(o,a,c){return this.connector.listen(o,a,c)}},{key:"private",value:function(o){return this.connector.privateChannel(o)}},{key:"encryptedPrivate",value:function(o){return this.connector.encryptedPrivateChannel(o)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":Mt(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var o=this;Vue.http.interceptors.push(function(a,c){o.socketId()&&a.headers.set("X-Socket-ID",o.socketId()),c()})}},{key:"registerAxiosRequestInterceptor",value:function(){var o=this;axios.interceptors.request.use(function(a){return o.socketId()&&(a.headers["X-Socket-Id"]=o.socketId()),a})}},{key:"registerjQueryAjaxSetup",value:function(){var o=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(a,c,h){o.socketId()&&h.setRequestHeader("X-Socket-Id",o.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var o=this;document.addEventListener("turbo:before-fetch-request",function(a){a.detail.fetchOptions.headers["X-Socket-Id"]=o.socketId()})}}]),n}(),ei={exports:{}};/*!
 * Pusher JavaScript Library v8.0.1
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */(function(n,t){(function(a,c){n.exports=c()})(window,function(){return function(o){var a={};function c(h){if(a[h])return a[h].exports;var f=a[h]={i:h,l:!1,exports:{}};return o[h].call(f.exports,f,f.exports,c),f.l=!0,f.exports}return c.m=o,c.c=a,c.d=function(h,f,p){c.o(h,f)||Object.defineProperty(h,f,{enumerable:!0,get:p})},c.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},c.t=function(h,f){if(f&1&&(h=c(h)),f&8||f&4&&typeof h=="object"&&h&&h.__esModule)return h;var p=Object.create(null);if(c.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:h}),f&2&&typeof h!="string")for(var g in h)c.d(p,g,function(w){return h[w]}.bind(null,g));return p},c.n=function(h){var f=h&&h.__esModule?function(){return h.default}:function(){return h};return c.d(f,"a",f),f},c.o=function(h,f){return Object.prototype.hasOwnProperty.call(h,f)},c.p="",c(c.s=2)}([function(o,a,c){var h=this&&this.__extends||function(){var C=function(y,m){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,D){A.__proto__=D}||function(A,D){for(var B in D)D.hasOwnProperty(B)&&(A[B]=D[B])},C(y,m)};return function(y,m){C(y,m);function A(){this.constructor=y}y.prototype=m===null?Object.create(m):(A.prototype=m.prototype,new A)}}();Object.defineProperty(a,"__esModule",{value:!0});var f=256,p=function(){function C(y){y===void 0&&(y="="),this._paddingCharacter=y}return C.prototype.encodedLength=function(y){return this._paddingCharacter?(y+2)/3*4|0:(y*8+5)/6|0},C.prototype.encode=function(y){for(var m="",A=0;A<y.length-2;A+=3){var D=y[A]<<16|y[A+1]<<8|y[A+2];m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),m+=this._encodeByte(D>>>1*6&63),m+=this._encodeByte(D>>>0*6&63)}var B=y.length-A;if(B>0){var D=y[A]<<16|(B===2?y[A+1]<<8:0);m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),B===2?m+=this._encodeByte(D>>>1*6&63):m+=this._paddingCharacter||"",m+=this._paddingCharacter||""}return m},C.prototype.maxDecodedLength=function(y){return this._paddingCharacter?y/4*3|0:(y*6+7)/8|0},C.prototype.decodedLength=function(y){return this.maxDecodedLength(y.length-this._getPaddingLength(y))},C.prototype.decode=function(y){if(y.length===0)return new Uint8Array(0);for(var m=this._getPaddingLength(y),A=y.length-m,D=new Uint8Array(this.maxDecodedLength(A)),B=0,H=0,K=0,ee=0,J=0,G=0,X=0;H<A-4;H+=4)ee=this._decodeChar(y.charCodeAt(H+0)),J=this._decodeChar(y.charCodeAt(H+1)),G=this._decodeChar(y.charCodeAt(H+2)),X=this._decodeChar(y.charCodeAt(H+3)),D[B++]=ee<<2|J>>>4,D[B++]=J<<4|G>>>2,D[B++]=G<<6|X,K|=ee&f,K|=J&f,K|=G&f,K|=X&f;if(H<A-1&&(ee=this._decodeChar(y.charCodeAt(H)),J=this._decodeChar(y.charCodeAt(H+1)),D[B++]=ee<<2|J>>>4,K|=ee&f,K|=J&f),H<A-2&&(G=this._decodeChar(y.charCodeAt(H+2)),D[B++]=J<<4|G>>>2,K|=G&f),H<A-3&&(X=this._decodeChar(y.charCodeAt(H+3)),D[B++]=G<<6|X,K|=X&f),K!==0)throw new Error("Base64Coder: incorrect characters for decoding");return D},C.prototype._encodeByte=function(y){var m=y;return m+=65,m+=25-y>>>8&0-65-26+97,m+=51-y>>>8&26-97-52+48,m+=61-y>>>8&52-48-62+43,m+=62-y>>>8&62-43-63+47,String.fromCharCode(m)},C.prototype._decodeChar=function(y){var m=f;return m+=(42-y&y-44)>>>8&-f+y-43+62,m+=(46-y&y-48)>>>8&-f+y-47+63,m+=(47-y&y-58)>>>8&-f+y-48+52,m+=(64-y&y-91)>>>8&-f+y-65+0,m+=(96-y&y-123)>>>8&-f+y-97+26,m},C.prototype._getPaddingLength=function(y){var m=0;if(this._paddingCharacter){for(var A=y.length-1;A>=0&&y[A]===this._paddingCharacter;A--)m++;if(y.length<4||m>2)throw new Error("Base64Coder: incorrect padding")}return m},C}();a.Coder=p;var g=new p;function w(C){return g.encode(C)}a.encode=w;function _(C){return g.decode(C)}a.decode=_;var E=function(C){h(y,C);function y(){return C!==null&&C.apply(this,arguments)||this}return y.prototype._encodeByte=function(m){var A=m;return A+=65,A+=25-m>>>8&0-65-26+97,A+=51-m>>>8&26-97-52+48,A+=61-m>>>8&52-48-62+45,A+=62-m>>>8&62-45-63+95,String.fromCharCode(A)},y.prototype._decodeChar=function(m){var A=f;return A+=(44-m&m-46)>>>8&-f+m-45+62,A+=(94-m&m-96)>>>8&-f+m-95+63,A+=(47-m&m-58)>>>8&-f+m-48+52,A+=(64-m&m-91)>>>8&-f+m-65+0,A+=(96-m&m-123)>>>8&-f+m-97+26,A},y}(p);a.URLSafeCoder=E;var T=new E;function k(C){return T.encode(C)}a.encodeURLSafe=k;function O(C){return T.decode(C)}a.decodeURLSafe=O,a.encodedLength=function(C){return g.encodedLength(C)},a.maxDecodedLength=function(C){return g.maxDecodedLength(C)},a.decodedLength=function(C){return g.decodedLength(C)}},function(o,a,c){Object.defineProperty(a,"__esModule",{value:!0});var h="utf8: invalid string",f="utf8: invalid source encoding";function p(_){for(var E=new Uint8Array(g(_)),T=0,k=0;k<_.length;k++){var O=_.charCodeAt(k);O<128?E[T++]=O:O<2048?(E[T++]=192|O>>6,E[T++]=128|O&63):O<55296?(E[T++]=224|O>>12,E[T++]=128|O>>6&63,E[T++]=128|O&63):(k++,O=(O&1023)<<10,O|=_.charCodeAt(k)&1023,O+=65536,E[T++]=240|O>>18,E[T++]=128|O>>12&63,E[T++]=128|O>>6&63,E[T++]=128|O&63)}return E}a.encode=p;function g(_){for(var E=0,T=0;T<_.length;T++){var k=_.charCodeAt(T);if(k<128)E+=1;else if(k<2048)E+=2;else if(k<55296)E+=3;else if(k<=57343){if(T>=_.length-1)throw new Error(h);T++,E+=4}else throw new Error(h)}return E}a.encodedLength=g;function w(_){for(var E=[],T=0;T<_.length;T++){var k=_[T];if(k&128){var O=void 0;if(k<224){if(T>=_.length)throw new Error(f);var C=_[++T];if((C&192)!==128)throw new Error(f);k=(k&31)<<6|C&63,O=128}else if(k<240){if(T>=_.length-1)throw new Error(f);var C=_[++T],y=_[++T];if((C&192)!==128||(y&192)!==128)throw new Error(f);k=(k&15)<<12|(C&63)<<6|y&63,O=2048}else if(k<248){if(T>=_.length-2)throw new Error(f);var C=_[++T],y=_[++T],m=_[++T];if((C&192)!==128||(y&192)!==128||(m&192)!==128)throw new Error(f);k=(k&15)<<18|(C&63)<<12|(y&63)<<6|m&63,O=65536}else throw new Error(f);if(k<O||k>=55296&&k<=57343)throw new Error(f);if(k>=65536){if(k>1114111)throw new Error(f);k-=65536,E.push(String.fromCharCode(55296|k>>10)),k=56320|k&1023}}E.push(String.fromCharCode(k))}return E.join("")}a.decode=w},function(o,a,c){o.exports=c(3).default},function(o,a,c){c.r(a);var h=function(){function r(e,i){this.lastId=0,this.prefix=e,this.name=i}return r.prototype.create=function(e){this.lastId++;var i=this.lastId,s=this.prefix+i,u=this.name+"["+i+"]",l=!1,d=function(){l||(e.apply(null,arguments),l=!0)};return this[i]=d,{number:i,id:s,name:u,callback:d}},r.prototype.remove=function(e){delete this[e.number]},r}(),f=new h("_pusher_script_","Pusher.ScriptReceivers"),p={VERSION:"8.0.1",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},g=p,w=function(){function r(e){this.options=e,this.receivers=e.receivers||f,this.loading={}}return r.prototype.load=function(e,i,s){var u=this;if(u.loading[e]&&u.loading[e].length>0)u.loading[e].push(s);else{u.loading[e]=[s];var l=I.createScriptRequest(u.getPath(e,i)),d=u.receivers.create(function(v){if(u.receivers.remove(d),u.loading[e]){var S=u.loading[e];delete u.loading[e];for(var b=function(L){L||l.cleanup()},P=0;P<S.length;P++)S[P](v,b)}});l.send(d)}},r.prototype.getRoot=function(e){var i,s=I.getDocument().location.protocol;return e&&e.useTLS||s==="https:"?i=this.options.cdn_https:i=this.options.cdn_http,i.replace(/\/*$/,"")+"/"+this.options.version},r.prototype.getPath=function(e,i){return this.getRoot(i)+"/"+e+this.options.suffix+".js"},r}(),_=w,E=new h("_pusher_dependencies","Pusher.DependenciesReceivers"),T=new _({cdn_http:g.cdn_http,cdn_https:g.cdn_https,version:g.VERSION,suffix:g.dependency_suffix,receivers:E}),k={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}},O=function(r){var e="See:",i=k.urls[r];if(!i)return"";var s;return i.fullUrl?s=i.fullUrl:i.path&&(s=k.baseUrl+i.path),s?e+" "+s:""},C={buildLogSuffix:O},y;(function(r){r.UserAuthentication="user-authentication",r.ChannelAuthorization="channel-authorization"})(y||(y={}));var m=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),A=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),D=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),B=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),H=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),K=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),ee=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),J=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),G=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),X=function(r){m(e,r);function e(i,s){var u=this.constructor,l=r.call(this,s)||this;return l.status=i,Object.setPrototypeOf(l,u.prototype),l}return e}(Error),ti=function(r,e,i,s,u){var l=I.createXHR();l.open("POST",i.endpoint,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var d in i.headers)l.setRequestHeader(d,i.headers[d]);if(i.headersProvider!=null){var v=i.headersProvider();for(var d in v)l.setRequestHeader(d,v[d])}return l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){var S=void 0,b=!1;try{S=JSON.parse(l.responseText),b=!0}catch{u(new X(200,"JSON returned from "+s.toString()+" endpoint was invalid, yet status code was 200. Data was: "+l.responseText),null)}b&&u(null,S)}else{var P="";switch(s){case y.UserAuthentication:P=C.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:P="Clients must be authorized to join private or presence channels. "+C.buildLogSuffix("authorizationEndpoint");break}u(new X(l.status,"Unable to retrieve auth string from "+s.toString()+" endpoint - "+("received status: "+l.status+" from "+i.endpoint+". "+P)),null)}},l.send(e),l},ni=ti;function ri(r){return ai(oi(r))}var Te=String.fromCharCode,Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ii=function(r){var e=r.charCodeAt(0);return e<128?r:e<2048?Te(192|e>>>6)+Te(128|e&63):Te(224|e>>>12&15)+Te(128|e>>>6&63)+Te(128|e&63)},oi=function(r){return r.replace(/[^\x00-\x7F]/g,ii)},si=function(r){var e=[0,2,1][r.length%3],i=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),s=[Fe.charAt(i>>>18),Fe.charAt(i>>>12&63),e>=2?"=":Fe.charAt(i>>>6&63),e>=1?"=":Fe.charAt(i&63)];return s.join("")},ai=window.btoa||function(r){return r.replace(/[\s\S]{1,3}/g,si)},ci=function(){function r(e,i,s,u){var l=this;this.clear=i,this.timer=e(function(){l.timer&&(l.timer=u(l.timer))},s)}return r.prototype.isRunning=function(){return this.timer!==null},r.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},r}(),tn=ci,nn=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}();function ui(r){window.clearTimeout(r)}function li(r){window.clearInterval(r)}var ce=function(r){nn(e,r);function e(i,s){return r.call(this,setTimeout,ui,i,function(u){return s(),null})||this}return e}(tn),hi=function(r){nn(e,r);function e(i,s){return r.call(this,setInterval,li,i,function(u){return s(),u})||this}return e}(tn),fi={now:function(){return Date.now?Date.now():new Date().valueOf()},defer:function(r){return new ce(0,r)},method:function(r){var e=Array.prototype.slice.call(arguments,1);return function(i){return i[r].apply(i,e.concat(arguments))}}},F=fi;function U(r){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0;s<e.length;s++){var u=e[s];for(var l in u)u[l]&&u[l].constructor&&u[l].constructor===Object?r[l]=U(r[l]||{},u[l]):r[l]=u[l]}return r}function di(){for(var r=["Pusher"],e=0;e<arguments.length;e++)typeof arguments[e]=="string"?r.push(arguments[e]):r.push(He(arguments[e]));return r.join(" : ")}function rn(r,e){var i=Array.prototype.indexOf;if(r===null)return-1;if(i&&r.indexOf===i)return r.indexOf(e);for(var s=0,u=r.length;s<u;s++)if(r[s]===e)return s;return-1}function te(r,e){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e(r[i],i,r)}function on(r){var e=[];return te(r,function(i,s){e.push(s)}),e}function pi(r){var e=[];return te(r,function(i){e.push(i)}),e}function Ce(r,e,i){for(var s=0;s<r.length;s++)e.call(i||window,r[s],s,r)}function sn(r,e){for(var i=[],s=0;s<r.length;s++)i.push(e(r[s],s,r,i));return i}function gi(r,e){var i={};return te(r,function(s,u){i[u]=e(s)}),i}function an(r,e){e=e||function(u){return!!u};for(var i=[],s=0;s<r.length;s++)e(r[s],s,r,i)&&i.push(r[s]);return i}function cn(r,e){var i={};return te(r,function(s,u){(e&&e(s,u,r,i)||Boolean(s))&&(i[u]=s)}),i}function vi(r){var e=[];return te(r,function(i,s){e.push([s,i])}),e}function un(r,e){for(var i=0;i<r.length;i++)if(e(r[i],i,r))return!0;return!1}function yi(r,e){for(var i=0;i<r.length;i++)if(!e(r[i],i,r))return!1;return!0}function mi(r){return gi(r,function(e){return typeof e=="object"&&(e=He(e)),encodeURIComponent(ri(e.toString()))})}function bi(r){var e=cn(r,function(s){return s!==void 0}),i=sn(vi(mi(e)),F.method("join","=")).join("&");return i}function _i(r){var e=[],i=[];return function s(u,l){var d,v,S;switch(typeof u){case"object":if(!u)return null;for(d=0;d<e.length;d+=1)if(e[d]===u)return{$ref:i[d]};if(e.push(u),i.push(l),Object.prototype.toString.apply(u)==="[object Array]")for(S=[],d=0;d<u.length;d+=1)S[d]=s(u[d],l+"["+d+"]");else{S={};for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&(S[v]=s(u[v],l+"["+JSON.stringify(v)+"]"))}return S;case"number":case"string":case"boolean":return u}}(r,"$")}function He(r){try{return JSON.stringify(r)}catch{return JSON.stringify(_i(r))}}var wi=function(){function r(){this.globalLog=function(e){window.console&&window.console.log&&window.console.log(e)}}return r.prototype.debug=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLog,e)},r.prototype.warn=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogWarn,e)},r.prototype.error=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogError,e)},r.prototype.globalLogWarn=function(e){window.console&&window.console.warn?window.console.warn(e):this.globalLog(e)},r.prototype.globalLogError=function(e){window.console&&window.console.error?window.console.error(e):this.globalLogWarn(e)},r.prototype.log=function(e){var i=di.apply(this,arguments);if(vt.log)vt.log(i);else if(vt.logToConsole){var s=e.bind(this);s(i)}},r}(),N=new wi,Si=function(r,e,i,s,u){(i.headers!==void 0||i.headersProvider!=null)&&N.warn("To send headers with the "+s.toString()+" request, you must use AJAX, rather than JSONP.");var l=r.nextAuthCallbackID.toString();r.nextAuthCallbackID++;var d=r.getDocument(),v=d.createElement("script");r.auth_callbacks[l]=function(P){u(null,P)};var S="Pusher.auth_callbacks['"+l+"']";v.src=i.endpoint+"?callback="+encodeURIComponent(S)+"&"+e;var b=d.getElementsByTagName("head")[0]||d.documentElement;b.insertBefore(v,b.firstChild)},ki=Si,Ti=function(){function r(e){this.src=e}return r.prototype.send=function(e){var i=this,s="Error loading "+i.src;i.script=document.createElement("script"),i.script.id=e.id,i.script.src=i.src,i.script.type="text/javascript",i.script.charset="UTF-8",i.script.addEventListener?(i.script.onerror=function(){e.callback(s)},i.script.onload=function(){e.callback(null)}):i.script.onreadystatechange=function(){(i.script.readyState==="loaded"||i.script.readyState==="complete")&&e.callback(null)},i.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(i.errorScript=document.createElement("script"),i.errorScript.id=e.id+"_error",i.errorScript.text=e.name+"('"+s+"');",i.script.async=i.errorScript.async=!1):i.script.async=!0;var u=document.getElementsByTagName("head")[0];u.insertBefore(i.script,u.firstChild),i.errorScript&&u.insertBefore(i.errorScript,i.script.nextSibling)},r.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},r}(),Ci=Ti,Ii=function(){function r(e,i){this.url=e,this.data=i}return r.prototype.send=function(e){if(!this.request){var i=bi(this.data),s=this.url+"/"+e.number+"?"+i;this.request=I.createScriptRequest(s),this.request.send(e)}},r.prototype.cleanup=function(){this.request&&this.request.cleanup()},r}(),Ei=Ii,Ai=function(r,e){return function(i,s){var u="http"+(e?"s":"")+"://",l=u+(r.host||r.options.host)+r.options.path,d=I.createJSONPRequest(l,i),v=I.ScriptReceivers.create(function(S,b){f.remove(v),d.cleanup(),b&&b.host&&(r.host=b.host),s&&s(S,b)});d.send(v)}},Pi={name:"jsonp",getAgent:Ai},Oi=Pi;function st(r,e,i){var s=r+(e.useTLS?"s":""),u=e.useTLS?e.hostTLS:e.hostNonTLS;return s+"://"+u+i}function at(r,e){var i="/app/"+r,s="?protocol="+g.PROTOCOL+"&client=js&version="+g.VERSION+(e?"&"+e:"");return i+s}var xi={getInitial:function(r,e){var i=(e.httpPath||"")+at(r,"flash=false");return st("ws",e,i)}},Di={getInitial:function(r,e){var i=(e.httpPath||"/pusher")+at(r);return st("http",e,i)}},Ri={getInitial:function(r,e){return st("http",e,e.httpPath||"/pusher")},getPath:function(r,e){return at(r)}},Ni=function(){function r(){this._callbacks={}}return r.prototype.get=function(e){return this._callbacks[ct(e)]},r.prototype.add=function(e,i,s){var u=ct(e);this._callbacks[u]=this._callbacks[u]||[],this._callbacks[u].push({fn:i,context:s})},r.prototype.remove=function(e,i,s){if(!e&&!i&&!s){this._callbacks={};return}var u=e?[ct(e)]:on(this._callbacks);i||s?this.removeCallback(u,i,s):this.removeAllCallbacks(u)},r.prototype.removeCallback=function(e,i,s){Ce(e,function(u){this._callbacks[u]=an(this._callbacks[u]||[],function(l){return i&&i!==l.fn||s&&s!==l.context}),this._callbacks[u].length===0&&delete this._callbacks[u]},this)},r.prototype.removeAllCallbacks=function(e){Ce(e,function(i){delete this._callbacks[i]},this)},r}(),Li=Ni;function ct(r){return"_"+r}var ji=function(){function r(e){this.callbacks=new Li,this.global_callbacks=[],this.failThrough=e}return r.prototype.bind=function(e,i,s){return this.callbacks.add(e,i,s),this},r.prototype.bind_global=function(e){return this.global_callbacks.push(e),this},r.prototype.unbind=function(e,i,s){return this.callbacks.remove(e,i,s),this},r.prototype.unbind_global=function(e){return e?(this.global_callbacks=an(this.global_callbacks||[],function(i){return i!==e}),this):(this.global_callbacks=[],this)},r.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},r.prototype.emit=function(e,i,s){for(var u=0;u<this.global_callbacks.length;u++)this.global_callbacks[u](e,i);var l=this.callbacks.get(e),d=[];if(s?d.push(i,s):i&&d.push(i),l&&l.length>0)for(var u=0;u<l.length;u++)l[u].fn.apply(l[u].context||window,d);else this.failThrough&&this.failThrough(e,i);return this},r}(),ne=ji,Mi=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Bi=function(r){Mi(e,r);function e(i,s,u,l,d){var v=r.call(this)||this;return v.initialize=I.transportConnectionInitializer,v.hooks=i,v.name=s,v.priority=u,v.key=l,v.options=d,v.state="new",v.timeline=d.timeline,v.activityTimeout=d.activityTimeout,v.id=v.timeline.generateUniqueID(),v}return e.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var i=this;if(this.socket||this.state!=="initialized")return!1;var s=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(s,this.options)}catch(u){return F.defer(function(){i.onError(u),i.changeState("closed")}),!1}return this.bindListeners(),N.debug("Connecting",{transport:this.name,url:s}),this.changeState("connecting"),!0},e.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},e.prototype.send=function(i){var s=this;return this.state==="open"?(F.defer(function(){s.socket&&s.socket.send(i)}),!0):!1},e.prototype.ping=function(){this.state==="open"&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(i){this.emit("error",{type:"WebSocketError",error:i}),this.timeline.error(this.buildTimelineMessage({error:i.toString()}))},e.prototype.onClose=function(i){i?this.changeState("closed",{code:i.code,reason:i.reason,wasClean:i.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(i){this.emit("message",i)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var i=this;this.socket.onopen=function(){i.onOpen()},this.socket.onerror=function(s){i.onError(s)},this.socket.onclose=function(s){i.onClose(s)},this.socket.onmessage=function(s){i.onMessage(s)},this.supportsPing()&&(this.socket.onactivity=function(){i.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(i,s){this.state=i,this.timeline.info(this.buildTimelineMessage({state:i,params:s})),this.emit(i,s)},e.prototype.buildTimelineMessage=function(i){return U({cid:this.id},i)},e}(ne),Fi=Bi,Hi=function(){function r(e){this.hooks=e}return r.prototype.isSupported=function(e){return this.hooks.isSupported(e)},r.prototype.createConnection=function(e,i,s,u){return new Fi(this.hooks,e,i,s,u)},r}(),_e=Hi,$i=new _e({urls:xi,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(I.getWebSocketAPI())},isSupported:function(){return Boolean(I.getWebSocketAPI())},getSocket:function(r){return I.createWebSocket(r)}}),ln={urls:Di,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},hn=U({getSocket:function(r){return I.HTTPFactory.createStreamingSocket(r)}},ln),fn=U({getSocket:function(r){return I.HTTPFactory.createPollingSocket(r)}},ln),dn={isSupported:function(){return I.isXHRSupported()}},Ui=new _e(U({},hn,dn)),qi=new _e(U({},fn,dn)),zi={ws:$i,xhr_streaming:Ui,xhr_polling:qi},$e=zi,Vi=new _e({file:"sockjs",urls:Ri,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(r,e){return new window.SockJS(r,null,{js_path:T.getPath("sockjs",{useTLS:e.useTLS}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(r,e){r.send(JSON.stringify({path:e}))}}),pn={isSupported:function(r){var e=I.isXDRSupported(r.useTLS);return e}},Wi=new _e(U({},hn,pn)),Ki=new _e(U({},fn,pn));$e.xdr_streaming=Wi,$e.xdr_polling=Ki,$e.sockjs=Vi;var Gi=$e,Ji=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Xi=function(r){Ji(e,r);function e(){var i=r.call(this)||this,s=i;return window.addEventListener!==void 0&&(window.addEventListener("online",function(){s.emit("online")},!1),window.addEventListener("offline",function(){s.emit("offline")},!1)),i}return e.prototype.isOnline=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine},e}(ne),Yi=new Xi,Qi=function(){function r(e,i,s){this.manager=e,this.transport=i,this.minPingDelay=s.minPingDelay,this.maxPingDelay=s.maxPingDelay,this.pingDelay=void 0}return r.prototype.createConnection=function(e,i,s,u){var l=this;u=U({},u,{activityTimeout:this.pingDelay});var d=this.transport.createConnection(e,i,s,u),v=null,S=function(){d.unbind("open",S),d.bind("closed",b),v=F.now()},b=function(P){if(d.unbind("closed",b),P.code===1002||P.code===1003)l.manager.reportDeath();else if(!P.wasClean&&v){var L=F.now()-v;L<2*l.maxPingDelay&&(l.manager.reportDeath(),l.pingDelay=Math.max(L/2,l.minPingDelay))}};return d.bind("open",S),d},r.prototype.isSupported=function(e){return this.manager.isAlive()&&this.transport.isSupported(e)},r}(),Zi=Qi,gn={decodeMessage:function(r){try{var e=JSON.parse(r.data),i=e.data;if(typeof i=="string")try{i=JSON.parse(e.data)}catch{}var s={event:e.event,channel:e.channel,data:i};return e.user_id&&(s.user_id=e.user_id),s}catch(u){throw{type:"MessageParseError",error:u,data:r.data}}},encodeMessage:function(r){return JSON.stringify(r)},processHandshake:function(r){var e=gn.decodeMessage(r);if(e.event==="pusher:connection_established"){if(!e.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:e.data.socket_id,activityTimeout:e.data.activity_timeout*1e3}}else{if(e.event==="pusher:error")return{action:this.getCloseAction(e.data),error:this.getCloseError(e.data)};throw"Invalid handshake"}},getCloseAction:function(r){return r.code<4e3?r.code>=1002&&r.code<=1004?"backoff":null:r.code===4e3?"tls_only":r.code<4100?"refused":r.code<4200?"backoff":r.code<4300?"retry":"refused"},getCloseError:function(r){return r.code!==1e3&&r.code!==1001?{type:"PusherError",data:{code:r.code,message:r.reason||r.message}}:null}},ue=gn,eo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),to=function(r){eo(e,r);function e(i,s){var u=r.call(this)||this;return u.id=i,u.transport=s,u.activityTimeout=s.activityTimeout,u.bindListeners(),u}return e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(i){return this.transport.send(i)},e.prototype.send_event=function(i,s,u){var l={event:i,data:s};return u&&(l.channel=u),N.debug("Event sent",l),this.send(ue.encodeMessage(l))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var i=this,s={message:function(l){var d;try{d=ue.decodeMessage(l)}catch(v){i.emit("error",{type:"MessageParseError",error:v,data:l.data})}if(d!==void 0){switch(N.debug("Event recd",d),d.event){case"pusher:error":i.emit("error",{type:"PusherError",data:d.data});break;case"pusher:ping":i.emit("ping");break;case"pusher:pong":i.emit("pong");break}i.emit("message",d)}},activity:function(){i.emit("activity")},error:function(l){i.emit("error",l)},closed:function(l){u(),l&&l.code&&i.handleCloseEvent(l),i.transport=null,i.emit("closed")}},u=function(){te(s,function(l,d){i.transport.unbind(d,l)})};te(s,function(l,d){i.transport.bind(d,l)})},e.prototype.handleCloseEvent=function(i){var s=ue.getCloseAction(i),u=ue.getCloseError(i);u&&this.emit("error",u),s&&this.emit(s,{action:s,error:u})},e}(ne),no=to,ro=function(){function r(e,i){this.transport=e,this.callback=i,this.bindListeners()}return r.prototype.close=function(){this.unbindListeners(),this.transport.close()},r.prototype.bindListeners=function(){var e=this;this.onMessage=function(i){e.unbindListeners();var s;try{s=ue.processHandshake(i)}catch(u){e.finish("error",{error:u}),e.transport.close();return}s.action==="connected"?e.finish("connected",{connection:new no(s.id,e.transport),activityTimeout:s.activityTimeout}):(e.finish(s.action,{error:s.error}),e.transport.close())},this.onClosed=function(i){e.unbindListeners();var s=ue.getCloseAction(i)||"backoff",u=ue.getCloseError(i);e.finish(s,{error:u})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},r.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},r.prototype.finish=function(e,i){this.callback(U({transport:this.transport,action:e},i))},r}(),oo=ro,so=function(){function r(e,i){this.timeline=e,this.options=i||{}}return r.prototype.send=function(e,i){this.timeline.isEmpty()||this.timeline.send(I.TimelineTransport.getAgent(this,e),i)},r}(),ao=so,co=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),uo=function(r){co(e,r);function e(i,s){var u=r.call(this,function(l,d){N.debug("No callbacks on "+i+" for "+l)})||this;return u.name=i,u.pusher=s,u.subscribed=!1,u.subscriptionPending=!1,u.subscriptionCancelled=!1,u}return e.prototype.authorize=function(i,s){return s(null,{auth:""})},e.prototype.trigger=function(i,s){if(i.indexOf("client-")!==0)throw new A("Event '"+i+"' does not start with 'client-'");if(!this.subscribed){var u=C.buildLogSuffix("triggeringClientEvents");N.warn("Client event triggered before channel 'subscription_succeeded' event . "+u)}return this.pusher.send_event(i,s,this.name)},e.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(i);else if(s==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(i);else if(s.indexOf("pusher_internal:")!==0){var l={};this.emit(s,u,l)}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",i.data)},e.prototype.handleSubscriptionCountEvent=function(i){i.data.subscription_count&&(this.subscriptionCount=i.data.subscription_count),this.emit("pusher:subscription_count",i.data)},e.prototype.subscribe=function(){var i=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(s,u){s?(i.subscriptionPending=!1,N.error(s.toString()),i.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:s.message},s instanceof X?{status:s.status}:{}))):i.pusher.send_event("pusher:subscribe",{auth:u.auth,channel_data:u.channel_data,channel:i.name})}))},e.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},e.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},e}(ne),ut=uo,lo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),ho=function(r){lo(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.authorize=function(i,s){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:i},s)},e}(ut),lt=ho,fo=function(){function r(){this.reset()}return r.prototype.get=function(e){return Object.prototype.hasOwnProperty.call(this.members,e)?{id:e,info:this.members[e]}:null},r.prototype.each=function(e){var i=this;te(this.members,function(s,u){e(i.get(u))})},r.prototype.setMyID=function(e){this.myID=e},r.prototype.onSubscription=function(e){this.members=e.presence.hash,this.count=e.presence.count,this.me=this.get(this.myID)},r.prototype.addMember=function(e){return this.get(e.user_id)===null&&this.count++,this.members[e.user_id]=e.user_info,this.get(e.user_id)},r.prototype.removeMember=function(e){var i=this.get(e.user_id);return i&&(delete this.members[e.user_id],this.count--),i},r.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},r}(),po=fo,go=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),vo=function(r,e,i,s){function u(l){return l instanceof i?l:new i(function(d){d(l)})}return new(i||(i=Promise))(function(l,d){function v(P){try{b(s.next(P))}catch(L){d(L)}}function S(P){try{b(s.throw(P))}catch(L){d(L)}}function b(P){P.done?l(P.value):u(P.value).then(v,S)}b((s=s.apply(r,e||[])).next())})},yo=function(r,e){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,u,l,d;return d={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function v(b){return function(P){return S([b,P])}}function S(b){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,u&&(l=b[0]&2?u.return:b[0]?u.throw||((l=u.return)&&l.call(u),0):u.next)&&!(l=l.call(u,b[1])).done)return l;switch(u=0,l&&(b=[b[0]&2,l.value]),b[0]){case 0:case 1:l=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,u=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!l||b[1]>l[0]&&b[1]<l[3])){i.label=b[1];break}if(b[0]===6&&i.label<l[1]){i.label=l[1],l=b;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(b);break}l[2]&&i.ops.pop(),i.trys.pop();continue}b=e.call(r,i)}catch(P){b=[6,P],u=0}finally{s=l=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},mo=function(r){go(e,r);function e(i,s){var u=r.call(this,i,s)||this;return u.members=new po,u}return e.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){return vo(u,void 0,void 0,function(){var v,S;return yo(this,function(b){switch(b.label){case 0:return l?[3,3]:(d=d,d.channel_data==null?[3,1]:(v=JSON.parse(d.channel_data),this.members.setMyID(v.user_id),[3,3]));case 1:return[4,this.pusher.user.signinDonePromise];case 2:if(b.sent(),this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else return S=C.buildLogSuffix("authorizationEndpoint"),N.error("Invalid auth response for channel '"+this.name+"', "+("expected 'channel_data' field. "+S+", ")+"or the user should be signed in."),s("Invalid auth response"),[2];b.label=3;case 3:return s(l,d),[2]}})})})},e.prototype.handleEvent=function(i){var s=i.event;if(s.indexOf("pusher_internal:")===0)this.handleInternalEvent(i);else{var u=i.data,l={};i.user_id&&(l.user_id=i.user_id),this.emit(s,u,l)}},e.prototype.handleInternalEvent=function(i){var s=i.event,u=i.data;switch(s){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(i);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(i);break;case"pusher_internal:member_added":var l=this.members.addMember(u);this.emit("pusher:member_added",l);break;case"pusher_internal:member_removed":var d=this.members.removeMember(u);d&&this.emit("pusher:member_removed",d);break}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(i.data),this.emit("pusher:subscription_succeeded",this.members))},e.prototype.disconnect=function(){this.members.reset(),r.prototype.disconnect.call(this)},e}(lt),bo=mo,_o=c(1),ht=c(0),wo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),So=function(r){wo(e,r);function e(i,s,u){var l=r.call(this,i,s)||this;return l.key=null,l.nacl=u,l}return e.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){if(l){s(l,d);return}var v=d.shared_secret;if(!v){s(new Error("No shared_secret key in auth payload for encrypted channel: "+u.name),null);return}u.key=Object(ht.decode)(v),delete d.shared_secret,s(null,d)})},e.prototype.trigger=function(i,s){throw new ee("Client events are not currently supported for encrypted channels")},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s.indexOf("pusher_internal:")===0||s.indexOf("pusher:")===0){r.prototype.handleEvent.call(this,i);return}this.handleEncryptedEvent(s,u)},e.prototype.handleEncryptedEvent=function(i,s){var u=this;if(!this.key){N.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!s.ciphertext||!s.nonce){N.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+s);return}var l=Object(ht.decode)(s.ciphertext);if(l.length<this.nacl.secretbox.overheadLength){N.error("Expected encrypted event ciphertext length to be "+this.nacl.secretbox.overheadLength+", got: "+l.length);return}var d=Object(ht.decode)(s.nonce);if(d.length<this.nacl.secretbox.nonceLength){N.error("Expected encrypted event nonce length to be "+this.nacl.secretbox.nonceLength+", got: "+d.length);return}var v=this.nacl.secretbox.open(l,d,this.key);if(v===null){N.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,function(S,b){if(S){N.error("Failed to make a request to the authEndpoint: "+b+". Unable to fetch new key, so dropping encrypted event");return}if(v=u.nacl.secretbox.open(l,d,u.key),v===null){N.error("Failed to decrypt event with new key. Dropping encrypted event");return}u.emit(i,u.getDataToEmit(v))});return}this.emit(i,this.getDataToEmit(v))},e.prototype.getDataToEmit=function(i){var s=Object(_o.decode)(i);try{return JSON.parse(s)}catch{return s}},e}(lt),ko=So,To=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Co=function(r){To(e,r);function e(i,s){var u=r.call(this)||this;u.state="initialized",u.connection=null,u.key=i,u.options=s,u.timeline=u.options.timeline,u.usingTLS=u.options.useTLS,u.errorCallbacks=u.buildErrorCallbacks(),u.connectionCallbacks=u.buildConnectionCallbacks(u.errorCallbacks),u.handshakeCallbacks=u.buildHandshakeCallbacks(u.errorCallbacks);var l=I.getNetwork();return l.bind("online",function(){u.timeline.info({netinfo:"online"}),(u.state==="connecting"||u.state==="unavailable")&&u.retryIn(0)}),l.bind("offline",function(){u.timeline.info({netinfo:"offline"}),u.connection&&u.sendActivityCheck()}),u.updateStrategy(),u}return e.prototype.connect=function(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(i){return this.connection?this.connection.send(i):!1},e.prototype.send_event=function(i,s,u){return this.connection?this.connection.send_event(i,s,u):!1},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isUsingTLS=function(){return this.usingTLS},e.prototype.startConnecting=function(){var i=this,s=function(u,l){u?i.runner=i.strategy.connect(0,s):l.action==="error"?(i.emit("error",{type:"HandshakeError",error:l.error}),i.timeline.error({handshakeError:l.error})):(i.abortConnecting(),i.handshakeCallbacks[l.action](l))};this.runner=this.strategy.connect(0,s)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var i=this.abandonConnection();i.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},e.prototype.retryIn=function(i){var s=this;this.timeline.info({action:"retry",delay:i}),i>0&&this.emit("connecting_in",Math.round(i/1e3)),this.retryTimer=new ce(i||0,function(){s.disconnectInternally(),s.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var i=this;this.unavailableTimer=new ce(this.options.unavailableTimeout,function(){i.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new ce(this.options.pongTimeout,function(){i.timeline.error({pong_timed_out:i.options.pongTimeout}),i.retryIn(0)})},e.prototype.resetActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new ce(this.activityTimeout,function(){i.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(i){var s=this;return U({},i,{message:function(u){s.resetActivityCheck(),s.emit("message",u)},ping:function(){s.send_event("pusher:pong",{})},activity:function(){s.resetActivityCheck()},error:function(u){s.emit("error",u)},closed:function(){s.abandonConnection(),s.shouldRetry()&&s.retryIn(1e3)}})},e.prototype.buildHandshakeCallbacks=function(i){var s=this;return U({},i,{connected:function(u){s.activityTimeout=Math.min(s.options.activityTimeout,u.activityTimeout,u.connection.activityTimeout||1/0),s.clearUnavailableTimer(),s.setConnection(u.connection),s.socket_id=s.connection.id,s.updateState("connected",{socket_id:s.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var i=this,s=function(u){return function(l){l.error&&i.emit("error",{type:"WebSocketError",error:l.error}),u(l)}};return{tls_only:s(function(){i.usingTLS=!0,i.updateStrategy(),i.retryIn(0)}),refused:s(function(){i.disconnect()}),backoff:s(function(){i.retryIn(1e3)}),retry:s(function(){i.retryIn(0)})}},e.prototype.setConnection=function(i){this.connection=i;for(var s in this.connectionCallbacks)this.connection.bind(s,this.connectionCallbacks[s]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(!!this.connection){this.stopActivityCheck();for(var i in this.connectionCallbacks)this.connection.unbind(i,this.connectionCallbacks[i]);var s=this.connection;return this.connection=null,s}},e.prototype.updateState=function(i,s){var u=this.state;if(this.state=i,u!==i){var l=i;l==="connected"&&(l+=" with new socket ID "+s.socket_id),N.debug("State changed",u+" -> "+l),this.timeline.info({state:i,params:s}),this.emit("state_change",{previous:u,current:i}),this.emit(i,s)}},e.prototype.shouldRetry=function(){return this.state==="connecting"||this.state==="connected"},e}(ne),Io=Co,Eo=function(){function r(){this.channels={}}return r.prototype.add=function(e,i){return this.channels[e]||(this.channels[e]=Po(e,i)),this.channels[e]},r.prototype.all=function(){return pi(this.channels)},r.prototype.find=function(e){return this.channels[e]},r.prototype.remove=function(e){var i=this.channels[e];return delete this.channels[e],i},r.prototype.disconnect=function(){te(this.channels,function(e){e.disconnect()})},r}(),Ao=Eo;function Po(r,e){if(r.indexOf("private-encrypted-")===0){if(e.config.nacl)return re.createEncryptedChannel(r,e,e.config.nacl);var i="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",s=C.buildLogSuffix("encryptedChannelSupport");throw new ee(i+". "+s)}else{if(r.indexOf("private-")===0)return re.createPrivateChannel(r,e);if(r.indexOf("presence-")===0)return re.createPresenceChannel(r,e);if(r.indexOf("#")===0)throw new D('Cannot create a channel with name "'+r+'".');return re.createChannel(r,e)}}var Oo={createChannels:function(){return new Ao},createConnectionManager:function(r,e){return new Io(r,e)},createChannel:function(r,e){return new ut(r,e)},createPrivateChannel:function(r,e){return new lt(r,e)},createPresenceChannel:function(r,e){return new bo(r,e)},createEncryptedChannel:function(r,e,i){return new ko(r,e,i)},createTimelineSender:function(r,e){return new ao(r,e)},createHandshake:function(r,e){return new oo(r,e)},createAssistantToTheTransportManager:function(r,e,i){return new Zi(r,e,i)}},re=Oo,xo=function(){function r(e){this.options=e||{},this.livesLeft=this.options.lives||1/0}return r.prototype.getAssistant=function(e){return re.createAssistantToTheTransportManager(this,e,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},r.prototype.isAlive=function(){return this.livesLeft>0},r.prototype.reportDeath=function(){this.livesLeft-=1},r}(),vn=xo,Do=function(){function r(e,i){this.strategies=e,this.loop=Boolean(i.loop),this.failFast=Boolean(i.failFast),this.timeout=i.timeout,this.timeoutLimit=i.timeoutLimit}return r.prototype.isSupported=function(){return un(this.strategies,F.method("isSupported"))},r.prototype.connect=function(e,i){var s=this,u=this.strategies,l=0,d=this.timeout,v=null,S=function(b,P){P?i(null,P):(l=l+1,s.loop&&(l=l%u.length),l<u.length?(d&&(d=d*2,s.timeoutLimit&&(d=Math.min(d,s.timeoutLimit))),v=s.tryStrategy(u[l],e,{timeout:d,failFast:s.failFast},S)):i(!0))};return v=this.tryStrategy(u[l],e,{timeout:d,failFast:this.failFast},S),{abort:function(){v.abort()},forceMinPriority:function(b){e=b,v&&v.forceMinPriority(b)}}},r.prototype.tryStrategy=function(e,i,s,u){var l=null,d=null;return s.timeout>0&&(l=new ce(s.timeout,function(){d.abort(),u(!0)})),d=e.connect(i,function(v,S){v&&l&&l.isRunning()&&!s.failFast||(l&&l.ensureAborted(),u(v,S))}),{abort:function(){l&&l.ensureAborted(),d.abort()},forceMinPriority:function(v){d.forceMinPriority(v)}}},r}(),le=Do,Ro=function(){function r(e){this.strategies=e}return r.prototype.isSupported=function(){return un(this.strategies,F.method("isSupported"))},r.prototype.connect=function(e,i){return No(this.strategies,e,function(s,u){return function(l,d){if(u[s].error=l,l){Lo(u)&&i(!0);return}Ce(u,function(v){v.forceMinPriority(d.transport.priority)}),i(null,d)}})},r}(),ft=Ro;function No(r,e,i){var s=sn(r,function(u,l,d,v){return u.connect(e,i(l,v))});return{abort:function(){Ce(s,jo)},forceMinPriority:function(u){Ce(s,function(l){l.forceMinPriority(u)})}}}function Lo(r){return yi(r,function(e){return Boolean(e.error)})}function jo(r){!r.error&&!r.aborted&&(r.abort(),r.aborted=!0)}var Mo=function(){function r(e,i,s){this.strategy=e,this.transports=i,this.ttl=s.ttl||1800*1e3,this.usingTLS=s.useTLS,this.timeline=s.timeline}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(e,i){var s=this.usingTLS,u=Fo(s),l=[this.strategy];if(u&&u.timestamp+this.ttl>=F.now()){var d=this.transports[u.transport];d&&(this.timeline.info({cached:!0,transport:u.transport,latency:u.latency}),l.push(new le([d],{timeout:u.latency*2+1e3,failFast:!0})))}var v=F.now(),S=l.pop().connect(e,function b(P,L){P?(yn(s),l.length>0?(v=F.now(),S=l.pop().connect(e,b)):i(P)):(Ho(s,L.transport.name,F.now()-v),i(null,L))});return{abort:function(){S.abort()},forceMinPriority:function(b){e=b,S&&S.forceMinPriority(b)}}},r}(),Bo=Mo;function dt(r){return"pusherTransport"+(r?"TLS":"NonTLS")}function Fo(r){var e=I.getLocalStorage();if(e)try{var i=e[dt(r)];if(i)return JSON.parse(i)}catch{yn(r)}return null}function Ho(r,e,i){var s=I.getLocalStorage();if(s)try{s[dt(r)]=He({timestamp:F.now(),transport:e,latency:i})}catch{}}function yn(r){var e=I.getLocalStorage();if(e)try{delete e[dt(r)]}catch{}}var $o=function(){function r(e,i){var s=i.delay;this.strategy=e,this.options={delay:s}}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(e,i){var s=this.strategy,u,l=new ce(this.options.delay,function(){u=s.connect(e,i)});return{abort:function(){l.ensureAborted(),u&&u.abort()},forceMinPriority:function(d){e=d,u&&u.forceMinPriority(d)}}},r}(),Ue=$o,Uo=function(){function r(e,i,s){this.test=e,this.trueBranch=i,this.falseBranch=s}return r.prototype.isSupported=function(){var e=this.test()?this.trueBranch:this.falseBranch;return e.isSupported()},r.prototype.connect=function(e,i){var s=this.test()?this.trueBranch:this.falseBranch;return s.connect(e,i)},r}(),Ie=Uo,qo=function(){function r(e){this.strategy=e}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(e,i){var s=this.strategy.connect(e,function(u,l){l&&s.abort(),i(u,l)});return s},r}(),zo=qo;function Ee(r){return function(){return r.isSupported()}}var Vo=function(r,e,i){var s={};function u(Pn,ea,ta,na,ra){var On=i(r,Pn,ea,ta,na,ra);return s[Pn]=On,On}var l=Object.assign({},e,{hostNonTLS:r.wsHost+":"+r.wsPort,hostTLS:r.wsHost+":"+r.wssPort,httpPath:r.wsPath}),d=Object.assign({},l,{useTLS:!0}),v=Object.assign({},e,{hostNonTLS:r.httpHost+":"+r.httpPort,hostTLS:r.httpHost+":"+r.httpsPort,httpPath:r.httpPath}),S={loop:!0,timeout:15e3,timeoutLimit:6e4},b=new vn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),P=new vn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),L=u("ws","ws",3,l,b),Y=u("wss","ws",3,d,b),Js=u("sockjs","sockjs",1,v),kn=u("xhr_streaming","xhr_streaming",1,v,P),Xs=u("xdr_streaming","xdr_streaming",1,v,P),Tn=u("xhr_polling","xhr_polling",1,v),Ys=u("xdr_polling","xdr_polling",1,v),Cn=new le([L],S),Qs=new le([Y],S),Zs=new le([Js],S),In=new le([new Ie(Ee(kn),kn,Xs)],S),En=new le([new Ie(Ee(Tn),Tn,Ys)],S),An=new le([new Ie(Ee(In),new ft([In,new Ue(En,{delay:4e3})]),En)],S),yt=new Ie(Ee(An),An,Zs),mt;return e.useTLS?mt=new ft([Cn,new Ue(yt,{delay:2e3})]):mt=new ft([Cn,new Ue(Qs,{delay:2e3}),new Ue(yt,{delay:5e3})]),new Bo(new zo(new Ie(Ee(L),mt,yt)),s,{ttl:18e5,timeline:e.timeline,useTLS:e.useTLS})},Wo=Vo,Ko=function(){var r=this;r.timeline.info(r.buildTimelineMessage({transport:r.name+(r.options.useTLS?"s":"")})),r.hooks.isInitialized()?r.changeState("initialized"):r.hooks.file?(r.changeState("initializing"),T.load(r.hooks.file,{useTLS:r.options.useTLS},function(e,i){r.hooks.isInitialized()?(r.changeState("initialized"),i(!0)):(e&&r.onError(e),r.onClose(),i(!1))})):r.onClose()},Go={getRequest:function(r){var e=new window.XDomainRequest;return e.ontimeout=function(){r.emit("error",new B),r.close()},e.onerror=function(i){r.emit("error",i),r.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&r.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&r.onChunk(200,e.responseText),r.emit("finished",200),r.close()},e},abortRequest:function(r){r.ontimeout=r.onerror=r.onprogress=r.onload=null,r.abort()}},Jo=Go,Xo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Yo=256*1024,Qo=function(r){Xo(e,r);function e(i,s,u){var l=r.call(this)||this;return l.hooks=i,l.method=s,l.url=u,l}return e.prototype.start=function(i){var s=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){s.close()},I.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(i)},e.prototype.close=function(){this.unloader&&(I.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(i,s){for(;;){var u=this.advanceBuffer(s);if(u)this.emit("chunk",{status:i,data:u});else break}this.isBufferTooLong(s)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(i){var s=i.slice(this.position),u=s.indexOf(`
`);return u!==-1?(this.position+=u+1,s.slice(0,u)):null},e.prototype.isBufferTooLong=function(i){return this.position===i.length&&i.length>Yo},e}(ne),Zo=Qo,pt;(function(r){r[r.CONNECTING=0]="CONNECTING",r[r.OPEN=1]="OPEN",r[r.CLOSED=3]="CLOSED"})(pt||(pt={}));var he=pt,es=1,ts=function(){function r(e,i){this.hooks=e,this.session=bn(1e3)+"/"+os(8),this.location=ns(i),this.readyState=he.CONNECTING,this.openStream()}return r.prototype.send=function(e){return this.sendRaw(JSON.stringify([e]))},r.prototype.ping=function(){this.hooks.sendHeartbeat(this)},r.prototype.close=function(e,i){this.onClose(e,i,!0)},r.prototype.sendRaw=function(e){if(this.readyState===he.OPEN)try{return I.createSocketRequest("POST",mn(rs(this.location,this.session))).start(e),!0}catch{return!1}else return!1},r.prototype.reconnect=function(){this.closeStream(),this.openStream()},r.prototype.onClose=function(e,i,s){this.closeStream(),this.readyState=he.CLOSED,this.onclose&&this.onclose({code:e,reason:i,wasClean:s})},r.prototype.onChunk=function(e){if(e.status===200){this.readyState===he.OPEN&&this.onActivity();var i,s=e.data.slice(0,1);switch(s){case"o":i=JSON.parse(e.data.slice(1)||"{}"),this.onOpen(i);break;case"a":i=JSON.parse(e.data.slice(1)||"[]");for(var u=0;u<i.length;u++)this.onEvent(i[u]);break;case"m":i=JSON.parse(e.data.slice(1)||"null"),this.onEvent(i);break;case"h":this.hooks.onHeartbeat(this);break;case"c":i=JSON.parse(e.data.slice(1)||"[]"),this.onClose(i[0],i[1],!0);break}}},r.prototype.onOpen=function(e){this.readyState===he.CONNECTING?(e&&e.hostname&&(this.location.base=is(this.location.base,e.hostname)),this.readyState=he.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},r.prototype.onEvent=function(e){this.readyState===he.OPEN&&this.onmessage&&this.onmessage({data:e})},r.prototype.onActivity=function(){this.onactivity&&this.onactivity()},r.prototype.onError=function(e){this.onerror&&this.onerror(e)},r.prototype.openStream=function(){var e=this;this.stream=I.createSocketRequest("POST",mn(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(i){e.onChunk(i)}),this.stream.bind("finished",function(i){e.hooks.onFinished(e,i)}),this.stream.bind("buffer_too_long",function(){e.reconnect()});try{this.stream.start()}catch(i){F.defer(function(){e.onError(i),e.onClose(1006,"Could not start streaming",!1)})}},r.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},r}();function ns(r){var e=/([^\?]*)\/*(\??.*)/.exec(r);return{base:e[1],queryString:e[2]}}function rs(r,e){return r.base+"/"+e+"/xhr_send"}function mn(r){var e=r.indexOf("?")===-1?"?":"&";return r+e+"t="+ +new Date+"&n="+es++}function is(r,e){var i=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(r);return i[1]+e+i[3]}function bn(r){return I.randomInt(r)}function os(r){for(var e=[],i=0;i<r;i++)e.push(bn(32).toString(32));return e.join("")}var ss=ts,as={getReceiveURL:function(r,e){return r.base+"/"+e+"/xhr_streaming"+r.queryString},onHeartbeat:function(r){r.sendRaw("[]")},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,e){r.onClose(1006,"Connection interrupted ("+e+")",!1)}},cs=as,us={getReceiveURL:function(r,e){return r.base+"/"+e+"/xhr"+r.queryString},onHeartbeat:function(){},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,e){e===200?r.reconnect():r.onClose(1006,"Connection interrupted ("+e+")",!1)}},ls=us,hs={getRequest:function(r){var e=I.getXHRAPI(),i=new e;return i.onreadystatechange=i.onprogress=function(){switch(i.readyState){case 3:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText);break;case 4:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText),r.emit("finished",i.status),r.close();break}},i},abortRequest:function(r){r.onreadystatechange=null,r.abort()}},fs=hs,ds={createStreamingSocket:function(r){return this.createSocket(cs,r)},createPollingSocket:function(r){return this.createSocket(ls,r)},createSocket:function(r,e){return new ss(r,e)},createXHR:function(r,e){return this.createRequest(fs,r,e)},createRequest:function(r,e,i){return new Zo(r,e,i)}},_n=ds;_n.createXDR=function(r,e){return this.createRequest(Jo,r,e)};var ps=_n,gs={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:f,DependenciesReceivers:E,getDefaultStrategy:Wo,Transports:Gi,transportConnectionInitializer:Ko,HTTPFactory:ps,TimelineTransport:Oi,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(r){var e=this;window.Pusher=r;var i=function(){e.onDocumentBody(r.ready)};window.JSON?i():T.load("json2",{},i)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:ni,jsonp:ki}},onDocumentBody:function(r){var e=this;document.body?r():setTimeout(function(){e.onDocumentBody(r)},0)},createJSONPRequest:function(r,e){return new Ei(r,e)},createScriptRequest:function(r){return new Ci(r)},getLocalStorage:function(){try{return window.localStorage}catch{return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var r=this.getXHRAPI();return new r},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return Yi},createWebSocket:function(r){var e=this.getWebSocketAPI();return new e(r)},createSocketRequest:function(r,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(r,e);if(this.isXDRSupported(e.indexOf("https:")===0))return this.HTTPFactory.createXDR(r,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var r=this.getXHRAPI();return Boolean(r)&&new r().withCredentials!==void 0},isXDRSupported:function(r){var e=r?"https:":"http:",i=this.getProtocol();return Boolean(window.XDomainRequest)&&i===e},addUnloadListener:function(r){window.addEventListener!==void 0?window.addEventListener("unload",r,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",r)},removeUnloadListener:function(r){window.addEventListener!==void 0?window.removeEventListener("unload",r,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",r)},randomInt:function(r){var e=function(){var i=window.crypto||window.msCrypto,s=i.getRandomValues(new Uint32Array(1))[0];return s/Math.pow(2,32)};return Math.floor(e()*r)}},I=gs,gt;(function(r){r[r.ERROR=3]="ERROR",r[r.INFO=6]="INFO",r[r.DEBUG=7]="DEBUG"})(gt||(gt={}));var qe=gt,vs=function(){function r(e,i,s){this.key=e,this.session=i,this.events=[],this.options=s||{},this.sent=0,this.uniqueID=0}return r.prototype.log=function(e,i){e<=this.options.level&&(this.events.push(U({},i,{timestamp:F.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},r.prototype.error=function(e){this.log(qe.ERROR,e)},r.prototype.info=function(e){this.log(qe.INFO,e)},r.prototype.debug=function(e){this.log(qe.DEBUG,e)},r.prototype.isEmpty=function(){return this.events.length===0},r.prototype.send=function(e,i){var s=this,u=U({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],e(u,function(l,d){l||s.sent++,i&&i(l,d)}),!0},r.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},r}(),ys=vs,ms=function(){function r(e,i,s,u){this.name=e,this.priority=i,this.transport=s,this.options=u||{}}return r.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},r.prototype.connect=function(e,i){var s=this;if(this.isSupported()){if(this.priority<e)return wn(new H,i)}else return wn(new G,i);var u=!1,l=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),d=null,v=function(){l.unbind("initialized",v),l.connect()},S=function(){d=re.createHandshake(l,function(Y){u=!0,L(),i(null,Y)})},b=function(Y){L(),i(Y)},P=function(){L();var Y;Y=He(l),i(new K(Y))},L=function(){l.unbind("initialized",v),l.unbind("open",S),l.unbind("error",b),l.unbind("closed",P)};return l.bind("initialized",v),l.bind("open",S),l.bind("error",b),l.bind("closed",P),l.initialize(),{abort:function(){u||(L(),d?d.close():l.close())},forceMinPriority:function(Y){u||s.priority<Y&&(d?d.close():l.close())}}},r}(),bs=ms;function wn(r,e){return F.defer(function(){e(r)}),{abort:function(){},forceMinPriority:function(){}}}var _s=I.Transports,ws=function(r,e,i,s,u,l){var d=_s[i];if(!d)throw new J(i);var v=(!r.enabledTransports||rn(r.enabledTransports,e)!==-1)&&(!r.disabledTransports||rn(r.disabledTransports,e)===-1),S;return v?(u=Object.assign({ignoreNullOrigin:r.ignoreNullOrigin},u),S=new bs(e,s,l?l.getAssistant(d):d,u)):S=Ss,S},Ss={isSupported:function(){return!1},connect:function(r,e){var i=F.defer(function(){e(new G)});return{abort:function(){i.ensureAborted()},forceMinPriority:function(){}}}};function ks(r){if(r==null)throw"You must pass an options object";if(r.cluster==null)throw"Options object must provide a cluster";"disableStats"in r&&N.warn("The disableStats option is deprecated in favor of enableStats")}var Ts=function(r,e){var i="socket_id="+encodeURIComponent(r.socketId);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Cs=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(e,i){var s=Ts(e,r);I.getAuthorizers()[r.transport](I,s,r,y.UserAuthentication,i)}},Is=Cs,Es=function(r,e){var i="socket_id="+encodeURIComponent(r.socketId);i+="&channel_name="+encodeURIComponent(r.channelName);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},As=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(e,i){var s=Es(e,r);I.getAuthorizers()[r.transport](I,s,r,y.ChannelAuthorization,i)}},Ps=As,Os=function(r,e,i){var s={authTransport:e.transport,authEndpoint:e.endpoint,auth:{params:e.params,headers:e.headers}};return function(u,l){var d=r.channel(u.channelName),v=i(d,s);v.authorize(u.socketId,l)}},we=function(){return we=Object.assign||function(r){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u])}return r},we.apply(this,arguments)};function xs(r,e){var i={activityTimeout:r.activityTimeout||g.activityTimeout,cluster:r.cluster,httpPath:r.httpPath||g.httpPath,httpPort:r.httpPort||g.httpPort,httpsPort:r.httpsPort||g.httpsPort,pongTimeout:r.pongTimeout||g.pongTimeout,statsHost:r.statsHost||g.stats_host,unavailableTimeout:r.unavailableTimeout||g.unavailableTimeout,wsPath:r.wsPath||g.wsPath,wsPort:r.wsPort||g.wsPort,wssPort:r.wssPort||g.wssPort,enableStats:js(r),httpHost:Ds(r),useTLS:Ls(r),wsHost:Rs(r),userAuthenticator:Ms(r),channelAuthorizer:Fs(r,e)};return"disabledTransports"in r&&(i.disabledTransports=r.disabledTransports),"enabledTransports"in r&&(i.enabledTransports=r.enabledTransports),"ignoreNullOrigin"in r&&(i.ignoreNullOrigin=r.ignoreNullOrigin),"timelineParams"in r&&(i.timelineParams=r.timelineParams),"nacl"in r&&(i.nacl=r.nacl),i}function Ds(r){return r.httpHost?r.httpHost:r.cluster?"sockjs-"+r.cluster+".pusher.com":g.httpHost}function Rs(r){return r.wsHost?r.wsHost:Ns(r.cluster)}function Ns(r){return"ws-"+r+".pusher.com"}function Ls(r){return I.getProtocol()==="https:"?!0:r.forceTLS!==!1}function js(r){return"enableStats"in r?r.enableStats:"disableStats"in r?!r.disableStats:!1}function Ms(r){var e=we(we({},g.userAuthentication),r.userAuthentication);return"customHandler"in e&&e.customHandler!=null?e.customHandler:Is(e)}function Bs(r,e){var i;return"channelAuthorization"in r?i=we(we({},g.channelAuthorization),r.channelAuthorization):(i={transport:r.authTransport||g.authTransport,endpoint:r.authEndpoint||g.authEndpoint},"auth"in r&&("params"in r.auth&&(i.params=r.auth.params),"headers"in r.auth&&(i.headers=r.auth.headers)),"authorizer"in r&&(i.customHandler=Os(e,i,r.authorizer))),i}function Fs(r,e){var i=Bs(r,e);return"customHandler"in i&&i.customHandler!=null?i.customHandler:Ps(i)}var Hs=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),$s=function(r){Hs(e,r);function e(i){var s=r.call(this,function(u,l){N.debug("No callbacks on watchlist events for "+u)})||this;return s.pusher=i,s.bindWatchlistInternalEvent(),s}return e.prototype.handleEvent=function(i){var s=this;i.data.events.forEach(function(u){s.emit(u.name,u)})},e.prototype.bindWatchlistInternalEvent=function(){var i=this;this.pusher.connection.bind("message",function(s){var u=s.event;u==="pusher_internal:watchlist_events"&&i.handleEvent(s)})},e}(ne),Us=$s;function qs(){var r,e,i=new Promise(function(s,u){r=s,e=u});return{promise:i,resolve:r,reject:e}}var zs=qs,Vs=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ws=function(r){Vs(e,r);function e(i){var s=r.call(this,function(u,l){N.debug("No callbacks on user for "+u)})||this;return s.signin_requested=!1,s.user_data=null,s.serverToUserChannel=null,s.signinDonePromise=null,s._signinDoneResolve=null,s._onAuthorize=function(u,l){if(u){N.warn("Error during signin: "+u),s._cleanup();return}s.pusher.send_event("pusher:signin",{auth:l.auth,user_data:l.user_data})},s.pusher=i,s.pusher.connection.bind("state_change",function(u){var l=u.previous,d=u.current;l!=="connected"&&d==="connected"&&s._signin(),l==="connected"&&d!=="connected"&&(s._cleanup(),s._newSigninPromiseIfNeeded())}),s.watchlist=new Us(i),s.pusher.connection.bind("message",function(u){var l=u.event;l==="pusher:signin_success"&&s._onSigninSuccess(u.data),s.serverToUserChannel&&s.serverToUserChannel.name===u.channel&&s.serverToUserChannel.handleEvent(u)}),s}return e.prototype.signin=function(){this.signin_requested||(this.signin_requested=!0,this._signin())},e.prototype._signin=function(){!this.signin_requested||(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))},e.prototype._onSigninSuccess=function(i){try{this.user_data=JSON.parse(i.user_data)}catch{N.error("Failed parsing user data after signin: "+i.user_data),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){N.error("user_data doesn't contain an id. user_data: "+this.user_data),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()},e.prototype._subscribeChannels=function(){var i=this,s=function(u){u.subscriptionPending&&u.subscriptionCancelled?u.reinstateSubscription():!u.subscriptionPending&&i.pusher.connection.state==="connected"&&u.subscribe()};this.serverToUserChannel=new ut("#server-to-user-"+this.user_data.id,this.pusher),this.serverToUserChannel.bind_global(function(u,l){u.indexOf("pusher_internal:")===0||u.indexOf("pusher:")===0||i.emit(u,l)}),s(this.serverToUserChannel)},e.prototype._cleanup=function(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()},e.prototype._newSigninPromiseIfNeeded=function(){if(!!this.signin_requested&&!(this.signinDonePromise&&!this.signinDonePromise.done)){var i=zs(),s=i.promise,u=i.resolve;s.done=!1;var l=function(){s.done=!0};s.then(l).catch(l),this.signinDonePromise=s,this._signinDoneResolve=u}},e}(ne),Ks=Ws,Sn=function(){function r(e,i){var s=this;Gs(e),ks(i),this.key=e,this.config=xs(i,this),this.channels=re.createChannels(),this.global_emitter=new ne,this.sessionID=I.randomInt(1e9),this.timeline=new ys(this.key,this.sessionID,{cluster:this.config.cluster,features:r.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:qe.INFO,version:g.VERSION}),this.config.enableStats&&(this.timelineSender=re.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+I.TimelineTransport.name}));var u=function(l){return I.getDefaultStrategy(s.config,l,ws)};this.connection=re.createConnectionManager(this.key,{getStrategy:u,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:Boolean(this.config.useTLS)}),this.connection.bind("connected",function(){s.subscribeAll(),s.timelineSender&&s.timelineSender.send(s.connection.isUsingTLS())}),this.connection.bind("message",function(l){var d=l.event,v=d.indexOf("pusher_internal:")===0;if(l.channel){var S=s.channel(l.channel);S&&S.handleEvent(l)}v||s.global_emitter.emit(l.event,l.data)}),this.connection.bind("connecting",function(){s.channels.disconnect()}),this.connection.bind("disconnected",function(){s.channels.disconnect()}),this.connection.bind("error",function(l){N.warn(l)}),r.instances.push(this),this.timeline.info({instances:r.instances.length}),this.user=new Ks(this),r.isReady&&this.connect()}return r.ready=function(){r.isReady=!0;for(var e=0,i=r.instances.length;e<i;e++)r.instances[e].connect()},r.getClientFeatures=function(){return on(cn({ws:I.Transports.ws},function(e){return e.isSupported({})}))},r.prototype.channel=function(e){return this.channels.find(e)},r.prototype.allChannels=function(){return this.channels.all()},r.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var e=this.connection.isUsingTLS(),i=this.timelineSender;this.timelineSenderTimer=new hi(6e4,function(){i.send(e)})}},r.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},r.prototype.bind=function(e,i,s){return this.global_emitter.bind(e,i,s),this},r.prototype.unbind=function(e,i,s){return this.global_emitter.unbind(e,i,s),this},r.prototype.bind_global=function(e){return this.global_emitter.bind_global(e),this},r.prototype.unbind_global=function(e){return this.global_emitter.unbind_global(e),this},r.prototype.unbind_all=function(e){return this.global_emitter.unbind_all(),this},r.prototype.subscribeAll=function(){var e;for(e in this.channels.channels)this.channels.channels.hasOwnProperty(e)&&this.subscribe(e)},r.prototype.subscribe=function(e){var i=this.channels.add(e,this);return i.subscriptionPending&&i.subscriptionCancelled?i.reinstateSubscription():!i.subscriptionPending&&this.connection.state==="connected"&&i.subscribe(),i},r.prototype.unsubscribe=function(e){var i=this.channels.find(e);i&&i.subscriptionPending?i.cancelSubscription():(i=this.channels.remove(e),i&&i.subscribed&&i.unsubscribe())},r.prototype.send_event=function(e,i,s){return this.connection.send_event(e,i,s)},r.prototype.shouldUseTLS=function(){return this.config.useTLS},r.prototype.signin=function(){this.user.signin()},r.instances=[],r.isReady=!1,r.logToConsole=!1,r.Runtime=I,r.ScriptReceivers=I.ScriptReceivers,r.DependenciesReceivers=I.DependenciesReceivers,r.auth_callbacks=I.auth_callbacks,r}(),vt=a.default=Sn;function Gs(r){if(r==null)throw"You must pass your app key when you instantiate Pusher."}I.setup(Sn)}])})})(ei);const ar=la(ei.exports),xe=class{constructor(){R(this,"cancelled",!1);R(this,"equipamento_conversa_id");R(this,"usuario_id");R(this,"mensagem");R(this,"mensagem_id");R(this,"notify",()=>{xe.listeners.forEach(t=>{this.cancelled||t.callback(this)})})}};let Ae=xe;R(Ae,"listeners",[]),R(Ae,"addListener",function(o){xe.listeners.push(o),xe.listeners.sort((a,c)=>a.priority-c.priority)});const De=class{constructor(){R(this,"cancelled",!1);R(this,"notificacao");R(this,"notify",()=>{De.listeners.forEach(t=>{this.cancelled||t.callback(this)})})}};let ke=De;R(ke,"listeners",[]),R(ke,"addListener",function(t){De.listeners.push(t),De.listeners.sort((o,a)=>o.priority-a.priority)});class ph{constructor(){R(this,"id");R(this,"visualizado");R(this,"usuario_id");R(this,"titulo");R(this,"texto")}}const Ot={broadcaster:"pusher",key:{}.VITE_PUSHER_APP_KEY,cluster:{}.VITE_PUSHER_APP_CLUSTER,forceTLS:!1,wsHost:{}.VITE_PUSHER_HOST,wsPort:{}.VITE_PUSHER_PORT,wssPort:{}.VITE_PUSHER_PORT,authEndpoint:"/broadcasting/auth"};let Ve=null,Qe=null;function gh(){ur(()=>{vh()})}function vh(){var n,t,o,a,c,h,f,p;Ve!==((a=(o=(t=(n=xn())==null?void 0:n.props)==null?void 0:t.auth)==null?void 0:o.user)==null?void 0:a.id)&&(Qe&&window.Echo.leave(Qe),Ve=(p=(f=(h=(c=xn())==null?void 0:c.props)==null?void 0:h.auth)==null?void 0:f.user)==null?void 0:p.id,Ve&&yh())}function yh(){window.Echo=new dh({...Ot,client:new ar(Ot.key,Ot)}),Qe=`notificacoes.${Ve}`,window.Echo.private(Qe).listen(".ConversaWebSocket",n=>mh(n)).listen(".NotificacaoWebSocket",n=>bh(n)),window.Pusher=ar}function mh(n){const t=new Ae;t.mensagem_id=n.notification.mensagem.id,t.mensagem=n.notification.mensagem.mensagem,t.usuario_id=n.notification.mensagem.usuario_id,t.equipamento_conversa_id=n.notification.mensagem.equipamento_conversa_id,t.notify()}function bh(n){const t=new ke;t.notificacao=new ph,t.notificacao.id=n.notification.notificacao.id,t.notificacao.visualizado=n.notification.notificacao.visualizado,t.notificacao.usuario_id=n.notification.notificacao.usuario_id,t.notificacao.titulo=n.notification.notificacao.titulo,t.notificacao.texto=n.notification.notificacao.texto,t.notify()}function _h(){gh(),th().iniciarNotificacoes()}const wh={class:"toast-header"},Sh={class:"me-auto"},kh=Pe("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Th={class:"toast-body"},Ch=Ze({__name:"Notificacao",props:{id:Number,titulo:String,texto:String},setup(n){const t=n,o=Ht(null);let a;ur(()=>{a=new ha(o.value),a.show({autohide:!1})});function c(){fa.visit(`/notificacao/${t.id}`)}return(h,f)=>(pe(),Re("div",{ref_key:"toast",ref:o,class:"toast notificacao",role:"alert",onClick:c},[Pe("div",wh,[Pe("span",Sh,Dn(n.titulo),1),kh]),Pe("div",Th,Dn(n.texto),1)],512))}});class Ih{constructor(t,o=10){R(this,"priority");R(this,"callback");this.priority=o,this.callback=t}}const Eh={class:"toast-container position-fixed top-0 end-0 p-3"},Ah=Ze({__name:"Notificacoes",setup(n){_h();const t=Ht([]);ke.addListener(new Ih(o));function o(a){t.value.push(a.notificacao),setTimeout(()=>{const c=t.value.indexOf(a.notificacao);t.value.splice(c,1)},1e5)}return(a,c)=>(pe(),Re("div",Eh,[(pe(!0),Re(da,null,pa(t.value,h=>(pe(),cr(Ch,ga(va({key:h.id},h)),null,16))),128))]))}}),Ph={class:"base-layout"},Nh=Ze({__name:"BaseLayout",setup(n){return(t,o)=>(pe(),Re("div",Ph,[ya(Ah),ma(t.$slots,"default")]))}}),Lh=(n,t)=>{const o=n.__vccOpts||n;for(const[a,c]of t)o[a]=c;return o};export{Ae as E,Ih as L,Nh as _,Rh as a,Lh as b,th as g};

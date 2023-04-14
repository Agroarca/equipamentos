import{d as Ye,r as Ht,o as de,c as lr,w as oa,k as Ae,l as sa,T as aa,a as Ie,j as ca,G as ua,x as hr,J as Rn,H as la,t as Nn,I as ha,F as fa,m as da,K as pa,L as ga,f as va,C as ya}from"./app-08945f31.js";import{r as Qe,t as Pe}from"./index-ac617c56.js";const ma={key:0,class:"loader"},ba=Ie("div",{class:"elemento"},null,-1),_a=[ba],Nh=Ye({__name:"Loader",setup(t){const n=Ht(!1);function o(){n.value=!0}function a(){n.value=!1}return window.loader={show:o,hide:a,active:n},(c,h)=>(de(),lr(aa,{name:"loader",duration:"300"},{default:oa(()=>[n.value?(de(),Ae("div",ma,_a)):sa("",!0)]),_:1}))}});/**
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
 */const fr=function(t){const n=[];let o=0;for(let a=0;a<t.length;a++){let c=t.charCodeAt(a);c<128?n[o++]=c:c<2048?(n[o++]=c>>6|192,n[o++]=c&63|128):(c&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(t.charCodeAt(++a)&1023),n[o++]=c>>18|240,n[o++]=c>>12&63|128,n[o++]=c>>6&63|128,n[o++]=c&63|128):(n[o++]=c>>12|224,n[o++]=c>>6&63|128,n[o++]=c&63|128)}return n},wa=function(t){const n=[];let o=0,a=0;for(;o<t.length;){const c=t[o++];if(c<128)n[a++]=String.fromCharCode(c);else if(c>191&&c<224){const h=t[o++];n[a++]=String.fromCharCode((c&31)<<6|h&63)}else if(c>239&&c<365){const h=t[o++],f=t[o++],p=t[o++],g=((c&7)<<18|(h&63)<<12|(f&63)<<6|p&63)-65536;n[a++]=String.fromCharCode(55296+(g>>10)),n[a++]=String.fromCharCode(56320+(g&1023))}else{const h=t[o++],f=t[o++];n[a++]=String.fromCharCode((c&15)<<12|(h&63)<<6|f&63)}}return n.join("")},dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,n){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<t.length;c+=3){const h=t[c],f=c+1<t.length,p=f?t[c+1]:0,g=c+2<t.length,w=g?t[c+2]:0,_=h>>2,E=(h&3)<<4|p>>4;let T=(p&15)<<2|w>>6,k=w&63;g||(k=64,f||(T=64)),a.push(o[_],o[E],o[T],o[k])}return a.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(fr(t),n)},decodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(t):wa(this.decodeStringToByteArray(t,n))},decodeStringToByteArray(t,n){this.init_();const o=n?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<t.length;){const h=o[t.charAt(c++)],p=c<t.length?o[t.charAt(c)]:0;++c;const w=c<t.length?o[t.charAt(c)]:64;++c;const E=c<t.length?o[t.charAt(c)]:64;if(++c,h==null||p==null||w==null||E==null)throw new Sa;const T=h<<2|p>>4;if(a.push(T),w!==64){const k=p<<4&240|w>>2;if(a.push(k),E!==64){const O=w<<6&192|E;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ka=function(t){const n=fr(t);return dr.encodeByteArray(n,!0)},pr=function(t){return ka(t).replace(/\./g,"")},Ta=function(t){try{return dr.decodeString(t,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */function Ca(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ia=()=>Ca().__FIREBASE_DEFAULTS__,Ea=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Aa=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=t&&Ta(t[1]);return n&&JSON.parse(n)},Pa=()=>{try{return Ia()||Ea()||Aa()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oa=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config};/**
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
 */class xa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,o)=>{this.resolve=n,this.reject=o})}wrapCallback(n){return(o,a)=>{o?this.reject(o):this.resolve(a),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(o):n(o,a))}}}function Da(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $t(){try{return typeof indexedDB=="object"}catch{return!1}}function Ut(){return new Promise((t,n)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),o||self.indexedDB.deleteDatabase(a),t(!0)},c.onupgradeneeded=()=>{o=!1},c.onerror=()=>{var h;n(((h=c.error)===null||h===void 0?void 0:h.message)||"")}}catch(o){n(o)}})}function gr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ra="FirebaseError";class me extends Error{constructor(n,o,a){super(o),this.code=n,this.customData=a,this.name=Ra,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{constructor(n,o,a){this.service=n,this.serviceName=o,this.errors=a}create(n,...o){const a=o[0]||{},c=`${this.service}/${n}`,h=this.errors[n],f=h?Na(h,a):"Error",p=`${this.serviceName}: ${f} (${c}).`;return new me(c,p,a)}}function Na(t,n){return t.replace(La,(o,a)=>{const c=n[a];return c!=null?String(c):`<${a}?>`})}const La=/\{\$([^}]+)}/g;function $e(t,n){if(t===n)return!0;const o=Object.keys(t),a=Object.keys(n);for(const c of o){if(!a.includes(c))return!1;const h=t[c],f=n[c];if(Ln(h)&&Ln(f)){if(!$e(h,f))return!1}else if(h!==f)return!1}for(const c of a)if(!o.includes(c))return!1;return!0}function Ln(t){return t!==null&&typeof t=="object"}/**
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
 */const ja=1e3,Ma=2,Ba=4*60*60*1e3,Fa=.5;function jn(t,n=ja,o=Ma){const a=n*Math.pow(o,t),c=Math.round(Fa*a*(Math.random()-.5)*2);return Math.min(Ba,a+c)}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Q{constructor(n,o,a){this.name=n,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */const he="[DEFAULT]";/**
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
 */class Ha{constructor(n,o){this.name=n,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const o=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(o)){const a=new xa;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:o});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(n){var o;const a=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),c=(o=n==null?void 0:n.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(c)return null;throw h}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(Ua(n))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);try{const h=this.getOrInitializeService({instanceIdentifier:c});a.resolve(h)}catch{}}}}clearInstance(n=he){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...n.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=he){return this.instances.has(n)}getOptions(n=he){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:o={}}=n,a=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[h,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&f.resolve(c)}return c}onInit(n,o){var a;const c=this.normalizeInstanceIdentifier(o),h=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;h.add(n),this.onInitCallbacks.set(c,h);const f=this.instances.get(c);return f&&n(f,c),()=>{h.delete(n)}}invokeOnInitCallbacks(n,o){const a=this.onInitCallbacks.get(o);if(a)for(const c of a)try{c(n,o)}catch{}}getOrInitializeService({instanceIdentifier:n,options:o={}}){let a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:$a(n),options:o}),this.instances.set(n,a),this.instancesOptions.set(n,o),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch{}return a||null}normalizeInstanceIdentifier(n=he){return this.component?this.component.multipleInstances?n:he:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $a(t){return t===he?void 0:t}function Ua(t){return t.instantiationMode==="EAGER"}/**
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
 */class qa{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const o=this.getProvider(n.name);if(o.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);o.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const o=new Ha(n,this);return this.providers.set(n,o),o}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const za={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Wa=x.INFO,Va={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Ka=(t,n,...o)=>{if(n<t.logLevel)return;const a=new Date().toISOString(),c=Va[n];if(c)console[c](`[${a}]  ${t.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class vr{constructor(n){this.name=n,this._logLevel=Wa,this._logHandler=Ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in x))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?za[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...n),this._logHandler(this,x.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...n),this._logHandler(this,x.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,x.INFO,...n),this._logHandler(this,x.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,x.WARN,...n),this._logHandler(this,x.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...n),this._logHandler(this,x.ERROR,...n)}}const Ga=(t,n)=>n.some(o=>t instanceof o);let Mn,Bn;function Ja(){return Mn||(Mn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xa(){return Bn||(Bn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yr=new WeakMap,Ot=new WeakMap,mr=new WeakMap,mt=new WeakMap,qt=new WeakMap;function Ya(t){const n=new Promise((o,a)=>{const c=()=>{t.removeEventListener("success",h),t.removeEventListener("error",f)},h=()=>{o(ie(t.result)),c()},f=()=>{a(t.error),c()};t.addEventListener("success",h),t.addEventListener("error",f)});return n.then(o=>{o instanceof IDBCursor&&yr.set(o,t)}).catch(()=>{}),qt.set(n,t),n}function Qa(t){if(Ot.has(t))return;const n=new Promise((o,a)=>{const c=()=>{t.removeEventListener("complete",h),t.removeEventListener("error",f),t.removeEventListener("abort",f)},h=()=>{o(),c()},f=()=>{a(t.error||new DOMException("AbortError","AbortError")),c()};t.addEventListener("complete",h),t.addEventListener("error",f),t.addEventListener("abort",f)});Ot.set(t,n)}let xt={get(t,n,o){if(t instanceof IDBTransaction){if(n==="done")return Ot.get(t);if(n==="objectStoreNames")return t.objectStoreNames||mr.get(t);if(n==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return ie(t[n])},set(t,n,o){return t[n]=o,!0},has(t,n){return t instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in t}};function Za(t){xt=t(xt)}function ec(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...o){const a=t.call(bt(this),n,...o);return mr.set(a,n.sort?n.sort():[n]),ie(a)}:Xa().includes(t)?function(...n){return t.apply(bt(this),n),ie(yr.get(this))}:function(...n){return ie(t.apply(bt(this),n))}}function tc(t){return typeof t=="function"?ec(t):(t instanceof IDBTransaction&&Qa(t),Ga(t,Ja())?new Proxy(t,xt):t)}function ie(t){if(t instanceof IDBRequest)return Ya(t);if(mt.has(t))return mt.get(t);const n=tc(t);return n!==t&&(mt.set(t,n),qt.set(n,t)),n}const bt=t=>qt.get(t);function et(t,n,{blocked:o,upgrade:a,blocking:c,terminated:h}={}){const f=indexedDB.open(t,n),p=ie(f);return a&&f.addEventListener("upgradeneeded",g=>{a(ie(f.result),g.oldVersion,g.newVersion,ie(f.transaction))}),o&&f.addEventListener("blocked",()=>o()),p.then(g=>{h&&g.addEventListener("close",()=>h()),c&&g.addEventListener("versionchange",()=>c())}).catch(()=>{}),p}function _t(t,{blocked:n}={}){const o=indexedDB.deleteDatabase(t);return n&&o.addEventListener("blocked",()=>n()),ie(o).then(()=>{})}const nc=["get","getKey","getAll","getAllKeys","count"],rc=["put","add","delete","clear"],wt=new Map;function Fn(t,n){if(!(t instanceof IDBDatabase&&!(n in t)&&typeof n=="string"))return;if(wt.get(n))return wt.get(n);const o=n.replace(/FromIndex$/,""),a=n!==o,c=rc.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(c||nc.includes(o)))return;const h=async function(f,...p){const g=this.transaction(f,c?"readwrite":"readonly");let w=g.store;return a&&(w=w.index(p.shift())),(await Promise.all([w[o](...p),c&&g.done]))[0]};return wt.set(n,h),h}Za(t=>({...t,get:(n,o,a)=>Fn(n,o)||t.get(n,o,a),has:(n,o)=>!!Fn(n,o)||t.has(n,o)}));/**
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
 */class ic{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(oc(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function oc(t){const n=t.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Dt="@firebase/app",Hn="0.9.5";/**
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
 */const pe=new vr("@firebase/app"),sc="@firebase/app-compat",ac="@firebase/analytics-compat",cc="@firebase/analytics",uc="@firebase/app-check-compat",lc="@firebase/app-check",hc="@firebase/auth",fc="@firebase/auth-compat",dc="@firebase/database",pc="@firebase/database-compat",gc="@firebase/functions",vc="@firebase/functions-compat",yc="@firebase/installations",mc="@firebase/installations-compat",bc="@firebase/messaging",_c="@firebase/messaging-compat",wc="@firebase/performance",Sc="@firebase/performance-compat",kc="@firebase/remote-config",Tc="@firebase/remote-config-compat",Cc="@firebase/storage",Ic="@firebase/storage-compat",Ec="@firebase/firestore",Ac="@firebase/firestore-compat",Pc="firebase";/**
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
 */const Rt="[DEFAULT]",Oc={[Dt]:"fire-core",[sc]:"fire-core-compat",[cc]:"fire-analytics",[ac]:"fire-analytics-compat",[lc]:"fire-app-check",[uc]:"fire-app-check-compat",[hc]:"fire-auth",[fc]:"fire-auth-compat",[dc]:"fire-rtdb",[pc]:"fire-rtdb-compat",[gc]:"fire-fn",[vc]:"fire-fn-compat",[yc]:"fire-iid",[mc]:"fire-iid-compat",[bc]:"fire-fcm",[_c]:"fire-fcm-compat",[wc]:"fire-perf",[Sc]:"fire-perf-compat",[kc]:"fire-rc",[Tc]:"fire-rc-compat",[Cc]:"fire-gcs",[Ic]:"fire-gcs-compat",[Ec]:"fire-fst",[Ac]:"fire-fst-compat","fire-js":"fire-js",[Pc]:"fire-js-all"};/**
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
 */const Ue=new Map,Nt=new Map;function xc(t,n){try{t.container.addComponent(n)}catch(o){pe.debug(`Component ${n.name} failed to register with FirebaseApp ${t.name}`,o)}}function oe(t){const n=t.name;if(Nt.has(n))return pe.debug(`There were multiple attempts to register component ${n}.`),!1;Nt.set(n,t);for(const o of Ue.values())xc(o,t);return!0}function Re(t,n){const o=t.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),t.container.getProvider(n)}/**
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
 */const Dc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},se=new De("app","Firebase",Dc);/**
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
 */class Rc{constructor(n,o,a){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}function br(t,n={}){let o=t;typeof n!="object"&&(n={name:n});const a=Object.assign({name:Rt,automaticDataCollectionEnabled:!1},n),c=a.name;if(typeof c!="string"||!c)throw se.create("bad-app-name",{appName:String(c)});if(o||(o=Oa()),!o)throw se.create("no-options");const h=Ue.get(c);if(h){if($e(o,h.options)&&$e(a,h.config))return h;throw se.create("duplicate-app",{appName:c})}const f=new qa(c);for(const g of Nt.values())f.addComponent(g);const p=new Rc(o,a,f);return Ue.set(c,p),p}function _r(t=Rt){const n=Ue.get(t);if(!n&&t===Rt)return br();if(!n)throw se.create("no-app",{appName:t});return n}function Y(t,n,o){var a;let c=(a=Oc[t])!==null&&a!==void 0?a:t;o&&(c+=`-${o}`);const h=c.match(/\s|\//),f=n.match(/\s|\//);if(h||f){const p=[`Unable to register library "${c}" with version "${n}":`];h&&p.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&f&&p.push("and"),f&&p.push(`version name "${n}" contains illegal characters (whitespace or "/")`),pe.warn(p.join(" "));return}oe(new Q(`${c}-version`,()=>({library:c,version:n}),"VERSION"))}/**
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
 */const Nc="firebase-heartbeat-database",Lc=1,Oe="firebase-heartbeat-store";let St=null;function wr(){return St||(St=et(Nc,Lc,{upgrade:(t,n)=>{switch(n){case 0:t.createObjectStore(Oe)}}}).catch(t=>{throw se.create("idb-open",{originalErrorMessage:t.message})})),St}async function jc(t){try{return(await wr()).transaction(Oe).objectStore(Oe).get(Sr(t))}catch(n){if(n instanceof me)pe.warn(n.message);else{const o=se.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});pe.warn(o.message)}}}async function $n(t,n){try{const a=(await wr()).transaction(Oe,"readwrite");return await a.objectStore(Oe).put(n,Sr(t)),a.done}catch(o){if(o instanceof me)pe.warn(o.message);else{const a=se.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});pe.warn(a.message)}}}function Sr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mc=1024,Bc=30*24*60*60*1e3;class Fc{constructor(n){this.container=n,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new $c(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Un();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=Bc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Un(),{heartbeatsToSend:o,unsentEntries:a}=Hc(this._heartbeatsCache.heartbeats),c=pr(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function Un(){return new Date().toISOString().substring(0,10)}function Hc(t,n=Mc){const o=[];let a=t.slice();for(const c of t){const h=o.find(f=>f.agent===c.agent);if(h){if(h.dates.push(c.date),qn(o)>n){h.dates.pop();break}}else if(o.push({agent:c.agent,dates:[c.date]}),qn(o)>n){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class $c{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $t()?Ut().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(n){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return $n(this.app,{lastSentHeartbeatDate:(o=n.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return $n(this.app,{lastSentHeartbeatDate:(o=n.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...n.heartbeats]})}else return}}function qn(t){return pr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Uc(t){oe(new Q("platform-logger",n=>new ic(n),"PRIVATE")),oe(new Q("heartbeat",n=>new Fc(n),"PRIVATE")),Y(Dt,Hn,t),Y(Dt,Hn,"esm2017"),Y("fire-js","")}Uc("");var qc="firebase",zc="9.18.0";/**
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
 */Y(qc,zc,"app");const kr="@firebase/installations",zt="0.6.4";/**
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
 */const Tr=1e4,Cr=`w:${zt}`,Ir="FIS_v2",Wc="https://firebaseinstallations.googleapis.com/v1",Vc=60*60*1e3,Kc="installations",Gc="Installations";/**
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
 */const Jc={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ge=new De(Kc,Gc,Jc);function Er(t){return t instanceof me&&t.code.includes("request-failed")}/**
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
 */function Ar({projectId:t}){return`${Wc}/projects/${t}/installations`}function Pr(t){return{token:t.token,requestStatus:2,expiresIn:Yc(t.expiresIn),creationTime:Date.now()}}async function Or(t,n){const a=(await n.json()).error;return ge.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function xr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xc(t,{refreshToken:n}){const o=xr(t);return o.append("Authorization",Qc(n)),o}async function Dr(t){const n=await t();return n.status>=500&&n.status<600?t():n}function Yc(t){return Number(t.replace("s","000"))}function Qc(t){return`${Ir} ${t}`}/**
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
 */async function Zc({appConfig:t,heartbeatServiceProvider:n},{fid:o}){const a=Ar(t),c=xr(t),h=n.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={fid:o,authVersion:Ir,appId:t.appId,sdkVersion:Cr},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Dr(()=>fetch(a,p));if(g.ok){const w=await g.json();return{fid:w.fid||o,registrationStatus:2,refreshToken:w.refreshToken,authToken:Pr(w.authToken)}}else throw await Or("Create Installation",g)}/**
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
 */function Rr(t){return new Promise(n=>{setTimeout(n,t)})}/**
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
 */function eu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tu=/^[cdef][\w-]{21}$/,Lt="";function nu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const o=ru(t);return tu.test(o)?o:Lt}catch{return Lt}}function ru(t){return eu(t).substr(0,22)}/**
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
 */function tt(t){return`${t.appName}!${t.appId}`}/**
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
 */const Nr=new Map;function Lr(t,n){const o=tt(t);jr(o,n),iu(o,n)}function jr(t,n){const o=Nr.get(t);if(o)for(const a of o)a(n)}function iu(t,n){const o=ou();o&&o.postMessage({key:t,fid:n}),su()}let fe=null;function ou(){return!fe&&"BroadcastChannel"in self&&(fe=new BroadcastChannel("[Firebase] FID Change"),fe.onmessage=t=>{jr(t.data.key,t.data.fid)}),fe}function su(){Nr.size===0&&fe&&(fe.close(),fe=null)}/**
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
 */const au="firebase-installations-database",cu=1,ve="firebase-installations-store";let kt=null;function Wt(){return kt||(kt=et(au,cu,{upgrade:(t,n)=>{switch(n){case 0:t.createObjectStore(ve)}}})),kt}async function qe(t,n){const o=tt(t),c=(await Wt()).transaction(ve,"readwrite"),h=c.objectStore(ve),f=await h.get(o);return await h.put(n,o),await c.done,(!f||f.fid!==n.fid)&&Lr(t,n.fid),n}async function Mr(t){const n=tt(t),a=(await Wt()).transaction(ve,"readwrite");await a.objectStore(ve).delete(n),await a.done}async function nt(t,n){const o=tt(t),c=(await Wt()).transaction(ve,"readwrite"),h=c.objectStore(ve),f=await h.get(o),p=n(f);return p===void 0?await h.delete(o):await h.put(p,o),await c.done,p&&(!f||f.fid!==p.fid)&&Lr(t,p.fid),p}/**
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
 */async function Vt(t){let n;const o=await nt(t.appConfig,a=>{const c=uu(a),h=lu(t,c);return n=h.registrationPromise,h.installationEntry});return o.fid===Lt?{installationEntry:await n}:{installationEntry:o,registrationPromise:n}}function uu(t){const n=t||{fid:nu(),registrationStatus:0};return Br(n)}function lu(t,n){if(n.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ge.create("app-offline"));return{installationEntry:n,registrationPromise:c}}const o={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},a=hu(t,o);return{installationEntry:o,registrationPromise:a}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:fu(t)}:{installationEntry:n}}async function hu(t,n){try{const o=await Zc(t,n);return qe(t.appConfig,o)}catch(o){throw Er(o)&&o.customData.serverCode===409?await Mr(t.appConfig):await qe(t.appConfig,{fid:n.fid,registrationStatus:0}),o}}async function fu(t){let n=await zn(t.appConfig);for(;n.registrationStatus===1;)await Rr(100),n=await zn(t.appConfig);if(n.registrationStatus===0){const{installationEntry:o,registrationPromise:a}=await Vt(t);return a||o}return n}function zn(t){return nt(t,n=>{if(!n)throw ge.create("installation-not-found");return Br(n)})}function Br(t){return du(t)?{fid:t.fid,registrationStatus:0}:t}function du(t){return t.registrationStatus===1&&t.registrationTime+Tr<Date.now()}/**
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
 */async function pu({appConfig:t,heartbeatServiceProvider:n},o){const a=gu(t,o),c=Xc(t,o),h=n.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={installation:{sdkVersion:Cr,appId:t.appId}},p={method:"POST",headers:c,body:JSON.stringify(f)},g=await Dr(()=>fetch(a,p));if(g.ok){const w=await g.json();return Pr(w)}else throw await Or("Generate Auth Token",g)}function gu(t,{fid:n}){return`${Ar(t)}/${n}/authTokens:generate`}/**
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
 */async function Kt(t,n=!1){let o;const a=await nt(t.appConfig,h=>{if(!Fr(h))throw ge.create("not-registered");const f=h.authToken;if(!n&&mu(f))return h;if(f.requestStatus===1)return o=vu(t,n),h;{if(!navigator.onLine)throw ge.create("app-offline");const p=_u(h);return o=yu(t,p),p}});return o?await o:a.authToken}async function vu(t,n){let o=await Wn(t.appConfig);for(;o.authToken.requestStatus===1;)await Rr(100),o=await Wn(t.appConfig);const a=o.authToken;return a.requestStatus===0?Kt(t,n):a}function Wn(t){return nt(t,n=>{if(!Fr(n))throw ge.create("not-registered");const o=n.authToken;return wu(o)?Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}):n})}async function yu(t,n){try{const o=await pu(t,n),a=Object.assign(Object.assign({},n),{authToken:o});return await qe(t.appConfig,a),o}catch(o){if(Er(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await Mr(t.appConfig);else{const a=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}});await qe(t.appConfig,a)}throw o}}function Fr(t){return t!==void 0&&t.registrationStatus===2}function mu(t){return t.requestStatus===2&&!bu(t)}function bu(t){const n=Date.now();return n<t.creationTime||t.creationTime+t.expiresIn<n+Vc}function _u(t){const n={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:n})}function wu(t){return t.requestStatus===1&&t.requestTime+Tr<Date.now()}/**
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
 */async function Su(t){const n=t,{installationEntry:o,registrationPromise:a}=await Vt(n);return a?a.catch(console.error):Kt(n).catch(console.error),o.fid}/**
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
 */async function ku(t,n=!1){const o=t;return await Tu(o),(await Kt(o,n)).token}async function Tu(t){const{registrationPromise:n}=await Vt(t);n&&await n}/**
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
 */function Cu(t){if(!t||!t.options)throw Tt("App Configuration");if(!t.name)throw Tt("App Name");const n=["projectId","apiKey","appId"];for(const o of n)if(!t.options[o])throw Tt(o);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tt(t){return ge.create("missing-app-config-values",{valueName:t})}/**
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
 */const Hr="installations",Iu="installations-internal",Eu=t=>{const n=t.getProvider("app").getImmediate(),o=Cu(n),a=Re(n,"heartbeat");return{app:n,appConfig:o,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Au=t=>{const n=t.getProvider("app").getImmediate(),o=Re(n,Hr).getImmediate();return{getId:()=>Su(o),getToken:c=>ku(o,c)}};function Pu(){oe(new Q(Hr,Eu,"PUBLIC")),oe(new Q(Iu,Au,"PRIVATE"))}Pu();Y(kr,zt);Y(kr,zt,"esm2017");/**
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
 */const ze="analytics",Ou="firebase_id",xu="origin",Du=60*1e3,Ru="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$r="https://www.googletagmanager.com/gtag/js";/**
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
 */const U=new vr("@firebase/analytics");/**
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
 */function Ur(t){return Promise.all(t.map(n=>n.catch(o=>o)))}function Nu(t,n){const o=document.createElement("script");o.src=`${$r}?l=${t}&id=${n}`,o.async=!0,document.head.appendChild(o)}function Lu(t){let n=[];return Array.isArray(window[t])?n=window[t]:window[t]=n,n}async function ju(t,n,o,a,c,h){const f=a[c];try{if(f)await n[f];else{const g=(await Ur(o)).find(w=>w.measurementId===c);g&&await n[g.appId]}}catch(p){U.error(p)}t("config",c,h)}async function Mu(t,n,o,a,c){try{let h=[];if(c&&c.send_to){let f=c.send_to;Array.isArray(f)||(f=[f]);const p=await Ur(o);for(const g of f){const w=p.find(E=>E.measurementId===g),_=w&&n[w.appId];if(_)h.push(_);else{h=[];break}}}h.length===0&&(h=Object.values(n)),await Promise.all(h),t("event",a,c||{})}catch(h){U.error(h)}}function Bu(t,n,o,a){async function c(h,f,p){try{h==="event"?await Mu(t,n,o,f,p):h==="config"?await ju(t,n,o,a,f,p):h==="consent"?t("consent","update",p):t("set",f)}catch(g){U.error(g)}}return c}function Fu(t,n,o,a,c){let h=function(...f){window[a].push(arguments)};return window[c]&&typeof window[c]=="function"&&(h=window[c]),window[c]=Bu(h,t,n,o),{gtagCore:h,wrappedGtag:window[c]}}function Hu(t){const n=window.document.getElementsByTagName("script");for(const o of Object.values(n))if(o.src&&o.src.includes($r)&&o.src.includes(t))return o;return null}/**
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
 */const $u={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},W=new De("analytics","Analytics",$u);/**
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
 */const Uu=30,qu=1e3;class zu{constructor(n={},o=qu){this.throttleMetadata=n,this.intervalMillis=o}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,o){this.throttleMetadata[n]=o}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const qr=new zu;function Wu(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Vu(t){var n;const{appId:o,apiKey:a}=t,c={method:"GET",headers:Wu(a)},h=Ru.replace("{app-id}",o),f=await fetch(h,c);if(f.status!==200&&f.status!==304){let p="";try{const g=await f.json();!((n=g.error)===null||n===void 0)&&n.message&&(p=g.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function Ku(t,n=qr,o){const{appId:a,apiKey:c,measurementId:h}=t.options;if(!a)throw W.create("no-app-id");if(!c){if(h)return{measurementId:h,appId:a};throw W.create("no-api-key")}const f=n.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Xu;return setTimeout(async()=>{p.abort()},o!==void 0?o:Du),zr({appId:a,apiKey:c,measurementId:h},f,p,n)}async function zr(t,{throttleEndTimeMillis:n,backoffCount:o},a,c=qr){var h;const{appId:f,measurementId:p}=t;try{await Gu(a,n)}catch(g){if(p)return U.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:p};throw g}try{const g=await Vu(t);return c.deleteThrottleMetadata(f),g}catch(g){const w=g;if(!Ju(w)){if(c.deleteThrottleMetadata(f),p)return U.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:f,measurementId:p};throw g}const _=Number((h=w==null?void 0:w.customData)===null||h===void 0?void 0:h.httpStatus)===503?jn(o,c.intervalMillis,Uu):jn(o,c.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:o+1};return c.setThrottleMetadata(f,E),U.debug(`Calling attemptFetch again in ${_} millis`),zr(t,E,a,c)}}function Gu(t,n){return new Promise((o,a)=>{const c=Math.max(n-Date.now(),0),h=setTimeout(o,c);t.addEventListener(()=>{clearTimeout(h),a(W.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function Ju(t){if(!(t instanceof me)||!t.customData)return!1;const n=Number(t.customData.httpStatus);return n===429||n===500||n===503||n===504}class Xu{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function Yu(t,n,o,a,c){if(c&&c.global){t("event",o,a);return}else{const h=await n,f=Object.assign(Object.assign({},a),{send_to:h});t("event",o,f)}}/**
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
 */async function Qu(){if($t())try{await Ut()}catch(t){return U.warn(W.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return U.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zu(t,n,o,a,c,h,f){var p;const g=Ku(t);g.then(k=>{o[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&U.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>U.error(k)),n.push(g);const w=Qu().then(k=>{if(k)return a.getId()}),[_,E]=await Promise.all([g,w]);Hu(h)||Nu(h,_.measurementId),c("js",new Date);const T=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return T[xu]="firebase",T.update=!0,E!=null&&(T[Ou]=E),c("config",_.measurementId,T),_.measurementId}/**
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
 */class el{constructor(n){this.app=n}_delete(){return delete Ee[this.app.options.appId],Promise.resolve()}}let Ee={},Vn=[];const Kn={};let Ct="dataLayer",tl="gtag",Gn,Wr,Jn=!1;function nl(){const t=[];if(Da()&&t.push("This is a browser extension environment."),gr()||t.push("Cookies are not available."),t.length>0){const n=t.map((a,c)=>`(${c+1}) ${a}`).join(" "),o=W.create("invalid-analytics-context",{errorInfo:n});U.warn(o.message)}}function rl(t,n,o){nl();const a=t.options.appId;if(!a)throw W.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)U.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Ee[a]!=null)throw W.create("already-exists",{id:a});if(!Jn){Lu(Ct);const{wrappedGtag:h,gtagCore:f}=Fu(Ee,Vn,Kn,Ct,tl);Wr=h,Gn=f,Jn=!0}return Ee[a]=Zu(t,Vn,Kn,n,Gn,Ct,o),new el(t)}function il(t=_r()){t=Ze(t);const n=Re(t,ze);return n.isInitialized()?n.getImmediate():ol(t)}function ol(t,n={}){const o=Re(t,ze);if(o.isInitialized()){const c=o.getImmediate();if($e(n,o.getOptions()))return c;throw W.create("already-initialized")}return o.initialize({options:n})}function sl(t,n,o,a){t=Ze(t),Yu(Wr,Ee[t.app.options.appId],n,o,a).catch(c=>U.error(c))}const Xn="@firebase/analytics",Yn="0.9.4";function al(){oe(new Q(ze,(n,{options:o})=>{const a=n.getProvider("app").getImmediate(),c=n.getProvider("installations-internal").getImmediate();return rl(a,c,o)},"PUBLIC")),oe(new Q("analytics-internal",t,"PRIVATE")),Y(Xn,Yn),Y(Xn,Yn,"esm2017");function t(n){try{const o=n.getProvider(ze).getImmediate();return{logEvent:(a,c,h)=>sl(o,a,c,h)}}catch(o){throw W.create("interop-component-reg-failed",{reason:o})}}}al();/**
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
 */const cl="/firebase-messaging-sw.js",ul="/firebase-cloud-messaging-push-scope",Vr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ll="https://fcmregistrations.googleapis.com/v1",Kr="google.c.a.c_id",hl="google.c.a.c_l",fl="google.c.a.ts",dl="google.c.a.e";var Qn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Qn||(Qn={}));/**
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
 */var xe;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(xe||(xe={}));/**
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
 */function re(t){const n=new Uint8Array(t);return btoa(String.fromCharCode(...n)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function pl(t){const n="=".repeat((4-t.length%4)%4),o=(t+n).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(o),c=new Uint8Array(a.length);for(let h=0;h<a.length;++h)c[h]=a.charCodeAt(h);return c}/**
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
 */const It="fcm_token_details_db",gl=5,Zn="fcm_token_object_Store";async function vl(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(It))return null;let n=null;return(await et(It,gl,{upgrade:async(a,c,h,f)=>{var p;if(c<2||!a.objectStoreNames.contains(Zn))return;const g=f.objectStore(Zn),w=await g.index("fcmSenderId").get(t);if(await g.clear(),!!w){if(c===2){const _=w;if(!_.auth||!_.p256dh||!_.endpoint)return;n={token:_.fcmToken,createTime:(p=_.createTime)!==null&&p!==void 0?p:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:re(_.vapidKey)}}}else if(c===3){const _=w;n={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:re(_.auth),p256dh:re(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:re(_.vapidKey)}}}else if(c===4){const _=w;n={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:re(_.auth),p256dh:re(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:re(_.vapidKey)}}}}}})).close(),await _t(It),await _t("fcm_vapid_details_db"),await _t("undefined"),yl(n)?n:null}function yl(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:n}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof n.auth=="string"&&n.auth.length>0&&typeof n.p256dh=="string"&&n.p256dh.length>0&&typeof n.endpoint=="string"&&n.endpoint.length>0&&typeof n.swScope=="string"&&n.swScope.length>0&&typeof n.vapidKey=="string"&&n.vapidKey.length>0}/**
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
 */const ml="firebase-messaging-database",bl=1,ye="firebase-messaging-store";let Et=null;function Gt(){return Et||(Et=et(ml,bl,{upgrade:(t,n)=>{switch(n){case 0:t.createObjectStore(ye)}}})),Et}async function Gr(t){const n=Xt(t),a=await(await Gt()).transaction(ye).objectStore(ye).get(n);if(a)return a;{const c=await vl(t.appConfig.senderId);if(c)return await Jt(t,c),c}}async function Jt(t,n){const o=Xt(t),c=(await Gt()).transaction(ye,"readwrite");return await c.objectStore(ye).put(n,o),await c.done,n}async function _l(t){const n=Xt(t),a=(await Gt()).transaction(ye,"readwrite");await a.objectStore(ye).delete(n),await a.done}function Xt({appConfig:t}){return t.appId}/**
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
 */const wl={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},H=new De("messaging","Messaging",wl);/**
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
 */async function Sl(t,n){const o=await Qt(t),a=Xr(n),c={method:"POST",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(Yt(t.appConfig),c)).json()}catch(f){throw H.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw H.create("token-subscribe-failed",{errorInfo:f})}if(!h.token)throw H.create("token-subscribe-no-token");return h.token}async function kl(t,n){const o=await Qt(t),a=Xr(n.subscriptionOptions),c={method:"PATCH",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(`${Yt(t.appConfig)}/${n.token}`,c)).json()}catch(f){throw H.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw H.create("token-update-failed",{errorInfo:f})}if(!h.token)throw H.create("token-update-no-token");return h.token}async function Jr(t,n){const a={method:"DELETE",headers:await Qt(t)};try{const h=await(await fetch(`${Yt(t.appConfig)}/${n}`,a)).json();if(h.error){const f=h.error.message;throw H.create("token-unsubscribe-failed",{errorInfo:f})}}catch(c){throw H.create("token-unsubscribe-failed",{errorInfo:c==null?void 0:c.toString()})}}function Yt({projectId:t}){return`${ll}/projects/${t}/registrations`}async function Qt({appConfig:t,installations:n}){const o=await n.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${o}`})}function Xr({p256dh:t,auth:n,endpoint:o,vapidKey:a}){const c={web:{endpoint:o,auth:n,p256dh:t}};return a!==Vr&&(c.web.applicationPubKey=a),c}/**
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
 */const Tl=7*24*60*60*1e3;async function Cl(t){const n=await Al(t.swRegistration,t.vapidKey),o={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:n.endpoint,auth:re(n.getKey("auth")),p256dh:re(n.getKey("p256dh"))},a=await Gr(t.firebaseDependencies);if(a){if(Pl(a.subscriptionOptions,o))return Date.now()>=a.createTime+Tl?El(t,{token:a.token,createTime:Date.now(),subscriptionOptions:o}):a.token;try{await Jr(t.firebaseDependencies,a.token)}catch(c){console.warn(c)}return er(t.firebaseDependencies,o)}else return er(t.firebaseDependencies,o)}async function Il(t){const n=await Gr(t.firebaseDependencies);n&&(await Jr(t.firebaseDependencies,n.token),await _l(t.firebaseDependencies));const o=await t.swRegistration.pushManager.getSubscription();return o?o.unsubscribe():!0}async function El(t,n){try{const o=await kl(t.firebaseDependencies,n),a=Object.assign(Object.assign({},n),{token:o,createTime:Date.now()});return await Jt(t.firebaseDependencies,a),o}catch(o){throw await Il(t),o}}async function er(t,n){const a={token:await Sl(t,n),createTime:Date.now(),subscriptionOptions:n};return await Jt(t,a),a.token}async function Al(t,n){const o=await t.pushManager.getSubscription();return o||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pl(n)})}function Pl(t,n){const o=n.vapidKey===t.vapidKey,a=n.endpoint===t.endpoint,c=n.auth===t.auth,h=n.p256dh===t.p256dh;return o&&a&&c&&h}/**
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
 */function tr(t){const n={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Ol(n,t),xl(n,t),Dl(n,t),n}function Ol(t,n){if(!n.notification)return;t.notification={};const o=n.notification.title;o&&(t.notification.title=o);const a=n.notification.body;a&&(t.notification.body=a);const c=n.notification.image;c&&(t.notification.image=c);const h=n.notification.icon;h&&(t.notification.icon=h)}function xl(t,n){n.data&&(t.data=n.data)}function Dl(t,n){var o,a,c,h,f;if(!n.fcmOptions&&!(!((o=n.notification)===null||o===void 0)&&o.click_action))return;t.fcmOptions={};const p=(c=(a=n.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&c!==void 0?c:(h=n.notification)===null||h===void 0?void 0:h.click_action;p&&(t.fcmOptions.link=p);const g=(f=n.fcmOptions)===null||f===void 0?void 0:f.analytics_label;g&&(t.fcmOptions.analyticsLabel=g)}/**
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
 */function Rl(t){return typeof t=="object"&&!!t&&Kr in t}/**
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
 */Yr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Yr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Yr(t,n){const o=[];for(let a=0;a<t.length;a++)o.push(t.charAt(a)),a<n.length&&o.push(n.charAt(a));return o.join("")}/**
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
 */function Nl(t){if(!t||!t.options)throw At("App Configuration Object");if(!t.name)throw At("App Name");const n=["projectId","apiKey","appId","messagingSenderId"],{options:o}=t;for(const a of n)if(!o[a])throw At(a);return{appName:t.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function At(t){return H.create("missing-app-config-values",{valueName:t})}/**
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
 */class Ll{constructor(n,o,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const c=Nl(n);this.firebaseDependencies={app:n,appConfig:c,installations:o,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
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
 */async function jl(t){try{t.swRegistration=await navigator.serviceWorker.register(cl,{scope:ul}),t.swRegistration.update().catch(()=>{})}catch(n){throw H.create("failed-service-worker-registration",{browserErrorMessage:n==null?void 0:n.message})}}/**
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
 */async function Ml(t,n){if(!n&&!t.swRegistration&&await jl(t),!(!n&&t.swRegistration)){if(!(n instanceof ServiceWorkerRegistration))throw H.create("invalid-sw-registration");t.swRegistration=n}}/**
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
 */async function Bl(t,n){n?t.vapidKey=n:t.vapidKey||(t.vapidKey=Vr)}/**
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
 */async function Qr(t,n){if(!navigator)throw H.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw H.create("permission-blocked");return await Bl(t,n==null?void 0:n.vapidKey),await Ml(t,n==null?void 0:n.serviceWorkerRegistration),Cl(t)}/**
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
 */async function Fl(t,n,o){const a=Hl(n);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:o[Kr],message_name:o[hl],message_time:o[fl],message_device_time:Math.floor(Date.now()/1e3)})}function Hl(t){switch(t){case xe.NOTIFICATION_CLICKED:return"notification_open";case xe.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function $l(t,n){const o=n.data;if(!o.isFirebaseMessaging)return;t.onMessageHandler&&o.messageType===xe.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(tr(o)):t.onMessageHandler.next(tr(o)));const a=o.data;Rl(a)&&a[dl]==="1"&&await Fl(t,o.messageType,a)}const nr="@firebase/messaging",rr="0.12.4";/**
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
 */const Ul=t=>{const n=new Ll(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",o=>$l(n,o)),n},ql=t=>{const n=t.getProvider("messaging").getImmediate();return{getToken:a=>Qr(n,a)}};function zl(){oe(new Q("messaging",Ul,"PUBLIC")),oe(new Q("messaging-internal",ql,"PRIVATE")),Y(nr,rr),Y(nr,rr,"esm2017")}/**
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
 */async function Wl(){try{await Ut()}catch{return!1}return typeof window<"u"&&$t()&&gr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Vl(t=_r()){return Wl().then(n=>{if(!n)throw H.create("unsupported-browser")},n=>{throw H.create("indexed-db-unsupported")}),Re(Ze(t),"messaging").getImmediate()}async function Kl(t,n){return t=Ze(t),Qr(t,n)}zl();function Gl(t){if(t===null||t===!0||t===!1)return NaN;var n=Number(t);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function ir(t,n){Qe(2,arguments);var o=Pe(t),a=Gl(n);return isNaN(a)?new Date(NaN):(a&&o.setDate(o.getDate()+a),o)}function Fe(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fe=function(o){return typeof o}:Fe=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Fe(t)}function or(t){return Qe(1,arguments),t instanceof Date||Fe(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Jl(t,n){Qe(2,arguments);var o=Pe(t),a=Pe(n);return o.getTime()>a.getTime()}function Xl(t,n){Qe(2,arguments);var o=Pe(t),a=Pe(n);return o.getTime()<a.getTime()}const Yl={apiKey:"AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",authDomain:"agroarca-equipamentos.firebaseapp.com",projectId:"agroarca-equipamentos",messagingSenderId:"260002359203",appId:"1:260002359203:web:8c19a187bf2fe28079dc16",measurementId:"G-DHSLGFC76R"},Ql="BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU",sr=14;let we;class Zl{constructor(){this.app=br(Yl),this.messaging=Vl(this.app),this.analytics=il(this.app)}solicitarPermissao(){return this.solicitarPermissaoNotificacoes().then(this.criarToken)}solicitarPermissaoNotificacoes(){return new Promise((n,o)=>{if(Notification.permission==="denied"){o();return}if(Notification.permission==="granted"){n();return}localStorage.dataSolicitouPermNotificacao=new Date,Notification.requestPermission().then(()=>{if(Notification.permission==="granted"){n();return}o()})})}iniciarNotificacoes(){Notification.permission==="granted"&&this.precisaRenovarToken()&&this.criarToken()}criarToken(){Kl(we.messaging,{vapidKey:Ql}).then(n=>{n&&we.salvarToken(n)})}salvarToken(n){ca.post("/notificacao/token",{token:n}).then(()=>{localStorage.ultimaRenovacaoToken=new Date})}precisaRenovarToken(){let n=Date.parse(localStorage.ultimaRenovacaoToken);return or(n)?Jl(new Date,ir(new Date(n),sr)):!1}temPermissao(){return Notification.permission==="granted"}jaSolicitouPermissao(){let n=new Date(Date.parse(localStorage.dataSolicitouPermNotificacao));return or(n)?Xl(new Date,ir(new Date(n),sr)):!1}}function eh(){return we||(we=new Zl,we)}function jt(t){return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jt(t)}function L(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ar(t,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function j(t,n,o){return n&&ar(t.prototype,n),o&&ar(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mt(){return Mt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Mt.apply(this,arguments)}function q(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Bt(t,n)}function We(t){return We=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},We(t)}function Bt(t,n){return Bt=Object.setPrototypeOf||function(a,c){return a.__proto__=c,a},Bt(t,n)}function th(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rh(t,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nh(t)}function z(t){var n=th();return function(){var a=We(t),c;if(n){var h=We(this).constructor;c=Reflect.construct(a,arguments,h)}else c=a.apply(this,arguments);return rh(this,c)}}var Zt=function(){function t(){L(this,t)}return j(t,[{key:"listenForWhisper",value:function(o,a){return this.listen(".client-"+o,a)}},{key:"notification",value:function(o){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",o)}},{key:"stopListeningForWhisper",value:function(o,a){return this.stopListening(".client-"+o,a)}}]),t}(),Zr=function(){function t(n){L(this,t),this.setNamespace(n)}return j(t,[{key:"format",value:function(o){return o.charAt(0)==="."||o.charAt(0)==="\\"?o.substr(1):(this.namespace&&(o=this.namespace+"."+o),o.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(o){this.namespace=o}}]),t}(),rt=function(t){q(o,t);var n=z(o);function o(a,c,h){var f;return L(this,o),f=n.call(this),f.name=c,f.pusher=a,f.options=h,f.eventFormatter=new Zr(f.options.namespace),f.subscribe(),f}return j(o,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"listenToAll",value:function(c){var h=this;return this.subscription.bind_global(function(f,p){if(!f.startsWith("pusher:")){var g=h.options.namespace.replace(/\./g,"\\"),w=f.startsWith(g)?f.substring(g.length+1):"."+f;c(w,p)}}),this}},{key:"stopListening",value:function(c,h){return h?this.subscription.unbind(this.eventFormatter.format(c),h):this.subscription.unbind(this.eventFormatter.format(c)),this}},{key:"stopListeningToAll",value:function(c){return c?this.subscription.unbind_global(c):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(c){return this.on("pusher:subscription_succeeded",function(){c()}),this}},{key:"error",value:function(c){return this.on("pusher:subscription_error",function(h){c(h)}),this}},{key:"on",value:function(c,h){return this.subscription.bind(c,h),this}}]),o}(Zt),ih=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(rt),oh=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(rt),sh=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"here",value:function(c){return this.on("pusher:subscription_succeeded",function(h){c(Object.keys(h.members).map(function(f){return h.members[f]}))}),this}},{key:"joining",value:function(c){return this.on("pusher:member_added",function(h){c(h.info)}),this}},{key:"leaving",value:function(c){return this.on("pusher:member_removed",function(h){c(h.info)}),this}},{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(rt),ei=function(t){q(o,t);var n=z(o);function o(a,c,h){var f;return L(this,o),f=n.call(this),f.events={},f.listeners={},f.name=c,f.socket=a,f.options=h,f.eventFormatter=new Zr(f.options.namespace),f.subscribe(),f}return j(o,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"stopListening",value:function(c,h){return this.unbindEvent(this.eventFormatter.format(c),h),this}},{key:"subscribed",value:function(c){return this.on("connect",function(h){c(h)}),this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){var f=this;return this.listeners[c]=this.listeners[c]||[],this.events[c]||(this.events[c]=function(p,g){f.name===p&&f.listeners[c]&&f.listeners[c].forEach(function(w){return w(g)})},this.socket.on(c,this.events[c])),this.listeners[c].push(h),this}},{key:"unbind",value:function(){var c=this;Object.keys(this.events).forEach(function(h){c.unbindEvent(h)})}},{key:"unbindEvent",value:function(c,h){this.listeners[c]=this.listeners[c]||[],h&&(this.listeners[c]=this.listeners[c].filter(function(f){return f!==h})),(!h||this.listeners[c].length===0)&&(this.events[c]&&(this.socket.removeListener(c,this.events[c]),delete this.events[c]),delete this.listeners[c])}}]),o}(Zt),ti=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"whisper",value:function(c,h){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(c),data:h}),this}}]),o}(ei),ah=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"here",value:function(c){return this.on("presence:subscribed",function(h){c(h.map(function(f){return f.user_info}))}),this}},{key:"joining",value:function(c){return this.on("presence:joining",function(h){return c(h.user_info)}),this}},{key:"leaving",value:function(c){return this.on("presence:leaving",function(h){return c(h.user_info)}),this}}]),o}(ti),Ve=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(c,h){return this}},{key:"listenToAll",value:function(c){return this}},{key:"stopListening",value:function(c,h){return this}},{key:"subscribed",value:function(c){return this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){return this}}]),o}(Zt),cr=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"whisper",value:function(c,h){return this}}]),o}(Ve),ch=function(t){q(o,t);var n=z(o);function o(){return L(this,o),n.apply(this,arguments)}return j(o,[{key:"here",value:function(c){return this}},{key:"joining",value:function(c){return this}},{key:"leaving",value:function(c){return this}},{key:"whisper",value:function(c,h){return this}}]),o}(Ve),en=function(){function t(n){L(this,t),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(n),this.connect()}return j(t,[{key:"setOptions",value:function(o){this.options=Mt(this._defaultOptions,o);var a=this.csrfToken();return a&&(this.options.auth.headers["X-CSRF-TOKEN"]=a,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=a),a=this.options.bearerToken,a&&(this.options.auth.headers.Authorization="Bearer "+a,this.options.userAuthentication.headers.Authorization="Bearer "+a),o}},{key:"csrfToken",value:function(){var o;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(o=document.querySelector('meta[name="csrf-token"]'))?o.getAttribute("content"):null}}]),t}(),uh=function(t){q(o,t);var n=z(o);function o(){var a;return L(this,o),a=n.apply(this,arguments),a.channels={},a}return j(o,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new rt(this.pusher,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new ih(this.pusher,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"encryptedPrivateChannel",value:function(c){return this.channels["private-encrypted-"+c]||(this.channels["private-encrypted-"+c]=new oh(this.pusher,"private-encrypted-"+c,this.options)),this.channels["private-encrypted-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new sh(this.pusher,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"private-encrypted-"+c,"presence-"+c];f.forEach(function(p,g){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),o}(en),lh=function(t){q(o,t);var n=z(o);function o(){var a;return L(this,o),a=n.apply(this,arguments),a.channels={},a}return j(o,[{key:"connect",value:function(){var c=this,h=this.getSocketIO();return this.socket=h(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(c.channels).forEach(function(f){f.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new ei(this.socket,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new ti(this.socket,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ah(this.socket,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"presence-"+c];f.forEach(function(p){h.leaveChannel(p)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),o}(en),hh=function(t){q(o,t);var n=z(o);function o(){var a;return L(this,o),a=n.apply(this,arguments),a.channels={},a}return j(o,[{key:"connect",value:function(){}},{key:"listen",value:function(c,h,f){return new Ve}},{key:"channel",value:function(c){return new Ve}},{key:"privateChannel",value:function(c){return new cr}},{key:"encryptedPrivateChannel",value:function(c){return new cr}},{key:"presenceChannel",value:function(c){return new ch}},{key:"leave",value:function(c){}},{key:"leaveChannel",value:function(c){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),o}(en),fh=function(){function t(n){L(this,t),this.options=n,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return j(t,[{key:"channel",value:function(o){return this.connector.channel(o)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new uh(this.options):this.options.broadcaster=="socket.io"?this.connector=new lh(this.options):this.options.broadcaster=="null"?this.connector=new hh(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(o){return this.connector.presenceChannel(o)}},{key:"leave",value:function(o){this.connector.leave(o)}},{key:"leaveChannel",value:function(o){this.connector.leaveChannel(o)}},{key:"leaveAllChannels",value:function(){for(var o in this.connector.channels)this.leaveChannel(o)}},{key:"listen",value:function(o,a,c){return this.connector.listen(o,a,c)}},{key:"private",value:function(o){return this.connector.privateChannel(o)}},{key:"encryptedPrivate",value:function(o){return this.connector.encryptedPrivateChannel(o)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":jt(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var o=this;Vue.http.interceptors.push(function(a,c){o.socketId()&&a.headers.set("X-Socket-ID",o.socketId()),c()})}},{key:"registerAxiosRequestInterceptor",value:function(){var o=this;axios.interceptors.request.use(function(a){return o.socketId()&&(a.headers["X-Socket-Id"]=o.socketId()),a})}},{key:"registerjQueryAjaxSetup",value:function(){var o=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(a,c,h){o.socketId()&&h.setRequestHeader("X-Socket-Id",o.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var o=this;document.addEventListener("turbo:before-fetch-request",function(a){a.detail.fetchOptions.headers["X-Socket-Id"]=o.socketId()})}}]),t}(),Ft={},dh={get exports(){return Ft},set exports(t){Ft=t}};/*!
 * Pusher JavaScript Library v8.0.2
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */(function(t,n){(function(a,c){t.exports=c()})(window,function(){return function(o){var a={};function c(h){if(a[h])return a[h].exports;var f=a[h]={i:h,l:!1,exports:{}};return o[h].call(f.exports,f,f.exports,c),f.l=!0,f.exports}return c.m=o,c.c=a,c.d=function(h,f,p){c.o(h,f)||Object.defineProperty(h,f,{enumerable:!0,get:p})},c.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},c.t=function(h,f){if(f&1&&(h=c(h)),f&8||f&4&&typeof h=="object"&&h&&h.__esModule)return h;var p=Object.create(null);if(c.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:h}),f&2&&typeof h!="string")for(var g in h)c.d(p,g,function(w){return h[w]}.bind(null,g));return p},c.n=function(h){var f=h&&h.__esModule?function(){return h.default}:function(){return h};return c.d(f,"a",f),f},c.o=function(h,f){return Object.prototype.hasOwnProperty.call(h,f)},c.p="",c(c.s=2)}([function(o,a,c){var h=this&&this.__extends||function(){var C=function(y,m){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,D){A.__proto__=D}||function(A,D){for(var M in D)D.hasOwnProperty(M)&&(A[M]=D[M])},C(y,m)};return function(y,m){C(y,m);function A(){this.constructor=y}y.prototype=m===null?Object.create(m):(A.prototype=m.prototype,new A)}}();Object.defineProperty(a,"__esModule",{value:!0});var f=256,p=function(){function C(y){y===void 0&&(y="="),this._paddingCharacter=y}return C.prototype.encodedLength=function(y){return this._paddingCharacter?(y+2)/3*4|0:(y*8+5)/6|0},C.prototype.encode=function(y){for(var m="",A=0;A<y.length-2;A+=3){var D=y[A]<<16|y[A+1]<<8|y[A+2];m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),m+=this._encodeByte(D>>>1*6&63),m+=this._encodeByte(D>>>0*6&63)}var M=y.length-A;if(M>0){var D=y[A]<<16|(M===2?y[A+1]<<8:0);m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),M===2?m+=this._encodeByte(D>>>1*6&63):m+=this._paddingCharacter||"",m+=this._paddingCharacter||""}return m},C.prototype.maxDecodedLength=function(y){return this._paddingCharacter?y/4*3|0:(y*6+7)/8|0},C.prototype.decodedLength=function(y){return this.maxDecodedLength(y.length-this._getPaddingLength(y))},C.prototype.decode=function(y){if(y.length===0)return new Uint8Array(0);for(var m=this._getPaddingLength(y),A=y.length-m,D=new Uint8Array(this.maxDecodedLength(A)),M=0,F=0,V=0,Z=0,G=0,K=0,J=0;F<A-4;F+=4)Z=this._decodeChar(y.charCodeAt(F+0)),G=this._decodeChar(y.charCodeAt(F+1)),K=this._decodeChar(y.charCodeAt(F+2)),J=this._decodeChar(y.charCodeAt(F+3)),D[M++]=Z<<2|G>>>4,D[M++]=G<<4|K>>>2,D[M++]=K<<6|J,V|=Z&f,V|=G&f,V|=K&f,V|=J&f;if(F<A-1&&(Z=this._decodeChar(y.charCodeAt(F)),G=this._decodeChar(y.charCodeAt(F+1)),D[M++]=Z<<2|G>>>4,V|=Z&f,V|=G&f),F<A-2&&(K=this._decodeChar(y.charCodeAt(F+2)),D[M++]=G<<4|K>>>2,V|=K&f),F<A-3&&(J=this._decodeChar(y.charCodeAt(F+3)),D[M++]=K<<6|J,V|=J&f),V!==0)throw new Error("Base64Coder: incorrect characters for decoding");return D},C.prototype._encodeByte=function(y){var m=y;return m+=65,m+=25-y>>>8&0-65-26+97,m+=51-y>>>8&26-97-52+48,m+=61-y>>>8&52-48-62+43,m+=62-y>>>8&62-43-63+47,String.fromCharCode(m)},C.prototype._decodeChar=function(y){var m=f;return m+=(42-y&y-44)>>>8&-f+y-43+62,m+=(46-y&y-48)>>>8&-f+y-47+63,m+=(47-y&y-58)>>>8&-f+y-48+52,m+=(64-y&y-91)>>>8&-f+y-65+0,m+=(96-y&y-123)>>>8&-f+y-97+26,m},C.prototype._getPaddingLength=function(y){var m=0;if(this._paddingCharacter){for(var A=y.length-1;A>=0&&y[A]===this._paddingCharacter;A--)m++;if(y.length<4||m>2)throw new Error("Base64Coder: incorrect padding")}return m},C}();a.Coder=p;var g=new p;function w(C){return g.encode(C)}a.encode=w;function _(C){return g.decode(C)}a.decode=_;var E=function(C){h(y,C);function y(){return C!==null&&C.apply(this,arguments)||this}return y.prototype._encodeByte=function(m){var A=m;return A+=65,A+=25-m>>>8&0-65-26+97,A+=51-m>>>8&26-97-52+48,A+=61-m>>>8&52-48-62+45,A+=62-m>>>8&62-45-63+95,String.fromCharCode(A)},y.prototype._decodeChar=function(m){var A=f;return A+=(44-m&m-46)>>>8&-f+m-45+62,A+=(94-m&m-96)>>>8&-f+m-95+63,A+=(47-m&m-58)>>>8&-f+m-48+52,A+=(64-m&m-91)>>>8&-f+m-65+0,A+=(96-m&m-123)>>>8&-f+m-97+26,A},y}(p);a.URLSafeCoder=E;var T=new E;function k(C){return T.encode(C)}a.encodeURLSafe=k;function O(C){return T.decode(C)}a.decodeURLSafe=O,a.encodedLength=function(C){return g.encodedLength(C)},a.maxDecodedLength=function(C){return g.maxDecodedLength(C)},a.decodedLength=function(C){return g.decodedLength(C)}},function(o,a,c){Object.defineProperty(a,"__esModule",{value:!0});var h="utf8: invalid string",f="utf8: invalid source encoding";function p(_){for(var E=new Uint8Array(g(_)),T=0,k=0;k<_.length;k++){var O=_.charCodeAt(k);O<128?E[T++]=O:O<2048?(E[T++]=192|O>>6,E[T++]=128|O&63):O<55296?(E[T++]=224|O>>12,E[T++]=128|O>>6&63,E[T++]=128|O&63):(k++,O=(O&1023)<<10,O|=_.charCodeAt(k)&1023,O+=65536,E[T++]=240|O>>18,E[T++]=128|O>>12&63,E[T++]=128|O>>6&63,E[T++]=128|O&63)}return E}a.encode=p;function g(_){for(var E=0,T=0;T<_.length;T++){var k=_.charCodeAt(T);if(k<128)E+=1;else if(k<2048)E+=2;else if(k<55296)E+=3;else if(k<=57343){if(T>=_.length-1)throw new Error(h);T++,E+=4}else throw new Error(h)}return E}a.encodedLength=g;function w(_){for(var E=[],T=0;T<_.length;T++){var k=_[T];if(k&128){var O=void 0;if(k<224){if(T>=_.length)throw new Error(f);var C=_[++T];if((C&192)!==128)throw new Error(f);k=(k&31)<<6|C&63,O=128}else if(k<240){if(T>=_.length-1)throw new Error(f);var C=_[++T],y=_[++T];if((C&192)!==128||(y&192)!==128)throw new Error(f);k=(k&15)<<12|(C&63)<<6|y&63,O=2048}else if(k<248){if(T>=_.length-2)throw new Error(f);var C=_[++T],y=_[++T],m=_[++T];if((C&192)!==128||(y&192)!==128||(m&192)!==128)throw new Error(f);k=(k&15)<<18|(C&63)<<12|(y&63)<<6|m&63,O=65536}else throw new Error(f);if(k<O||k>=55296&&k<=57343)throw new Error(f);if(k>=65536){if(k>1114111)throw new Error(f);k-=65536,E.push(String.fromCharCode(55296|k>>10)),k=56320|k&1023}}E.push(String.fromCharCode(k))}return E.join("")}a.decode=w},function(o,a,c){o.exports=c(3).default},function(o,a,c){c.r(a);var h=function(){function r(e,i){this.lastId=0,this.prefix=e,this.name=i}return r.prototype.create=function(e){this.lastId++;var i=this.lastId,s=this.prefix+i,u=this.name+"["+i+"]",l=!1,d=function(){l||(e.apply(null,arguments),l=!0)};return this[i]=d,{number:i,id:s,name:u,callback:d}},r.prototype.remove=function(e){delete this[e.number]},r}(),f=new h("_pusher_script_","Pusher.ScriptReceivers"),p={VERSION:"8.0.2",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},g=p,w=function(){function r(e){this.options=e,this.receivers=e.receivers||f,this.loading={}}return r.prototype.load=function(e,i,s){var u=this;if(u.loading[e]&&u.loading[e].length>0)u.loading[e].push(s);else{u.loading[e]=[s];var l=I.createScriptRequest(u.getPath(e,i)),d=u.receivers.create(function(v){if(u.receivers.remove(d),u.loading[e]){var S=u.loading[e];delete u.loading[e];for(var b=function(N){N||l.cleanup()},P=0;P<S.length;P++)S[P](v,b)}});l.send(d)}},r.prototype.getRoot=function(e){var i,s=I.getDocument().location.protocol;return e&&e.useTLS||s==="https:"?i=this.options.cdn_https:i=this.options.cdn_http,i.replace(/\/*$/,"")+"/"+this.options.version},r.prototype.getPath=function(e,i){return this.getRoot(i)+"/"+e+this.options.suffix+".js"},r}(),_=w,E=new h("_pusher_dependencies","Pusher.DependenciesReceivers"),T=new _({cdn_http:g.cdn_http,cdn_https:g.cdn_https,version:g.VERSION,suffix:g.dependency_suffix,receivers:E}),k={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}},O=function(r){var e="See:",i=k.urls[r];if(!i)return"";var s;return i.fullUrl?s=i.fullUrl:i.path&&(s=k.baseUrl+i.path),s?e+" "+s:""},C={buildLogSuffix:O},y;(function(r){r.UserAuthentication="user-authentication",r.ChannelAuthorization="channel-authorization"})(y||(y={}));var m=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),A=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),D=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),M=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),F=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),V=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),Z=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),G=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),K=function(r){m(e,r);function e(i){var s=this.constructor,u=r.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),J=function(r){m(e,r);function e(i,s){var u=this.constructor,l=r.call(this,s)||this;return l.status=i,Object.setPrototypeOf(l,u.prototype),l}return e}(Error),ni=function(r,e,i,s,u){var l=I.createXHR();l.open("POST",i.endpoint,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var d in i.headers)l.setRequestHeader(d,i.headers[d]);if(i.headersProvider!=null){var v=i.headersProvider();for(var d in v)l.setRequestHeader(d,v[d])}return l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){var S=void 0,b=!1;try{S=JSON.parse(l.responseText),b=!0}catch{u(new J(200,"JSON returned from "+s.toString()+" endpoint was invalid, yet status code was 200. Data was: "+l.responseText),null)}b&&u(null,S)}else{var P="";switch(s){case y.UserAuthentication:P=C.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:P="Clients must be authorized to join private or presence channels. "+C.buildLogSuffix("authorizationEndpoint");break}u(new J(l.status,"Unable to retrieve auth string from "+s.toString()+" endpoint - "+("received status: "+l.status+" from "+i.endpoint+". "+P)),null)}},l.send(e),l},ri=ni;function ii(r){return ci(si(r))}var Se=String.fromCharCode,Ne="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oi=function(r){var e=r.charCodeAt(0);return e<128?r:e<2048?Se(192|e>>>6)+Se(128|e&63):Se(224|e>>>12&15)+Se(128|e>>>6&63)+Se(128|e&63)},si=function(r){return r.replace(/[^\x00-\x7F]/g,oi)},ai=function(r){var e=[0,2,1][r.length%3],i=r.charCodeAt(0)<<16|(r.length>1?r.charCodeAt(1):0)<<8|(r.length>2?r.charCodeAt(2):0),s=[Ne.charAt(i>>>18),Ne.charAt(i>>>12&63),e>=2?"=":Ne.charAt(i>>>6&63),e>=1?"=":Ne.charAt(i&63)];return s.join("")},ci=window.btoa||function(r){return r.replace(/[\s\S]{1,3}/g,ai)},ui=function(){function r(e,i,s,u){var l=this;this.clear=i,this.timer=e(function(){l.timer&&(l.timer=u(l.timer))},s)}return r.prototype.isRunning=function(){return this.timer!==null},r.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},r}(),rn=ui,on=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}();function li(r){window.clearTimeout(r)}function hi(r){window.clearInterval(r)}var ae=function(r){on(e,r);function e(i,s){return r.call(this,setTimeout,li,i,function(u){return s(),null})||this}return e}(rn),fi=function(r){on(e,r);function e(i,s){return r.call(this,setInterval,hi,i,function(u){return s(),u})||this}return e}(rn),di={now:function(){return Date.now?Date.now():new Date().valueOf()},defer:function(r){return new ae(0,r)},method:function(r){var e=Array.prototype.slice.call(arguments,1);return function(i){return i[r].apply(i,e.concat(arguments))}}},B=di;function $(r){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0;s<e.length;s++){var u=e[s];for(var l in u)u[l]&&u[l].constructor&&u[l].constructor===Object?r[l]=$(r[l]||{},u[l]):r[l]=u[l]}return r}function pi(){for(var r=["Pusher"],e=0;e<arguments.length;e++)typeof arguments[e]=="string"?r.push(arguments[e]):r.push(Le(arguments[e]));return r.join(" : ")}function sn(r,e){var i=Array.prototype.indexOf;if(r===null)return-1;if(i&&r.indexOf===i)return r.indexOf(e);for(var s=0,u=r.length;s<u;s++)if(r[s]===e)return s;return-1}function ee(r,e){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e(r[i],i,r)}function an(r){var e=[];return ee(r,function(i,s){e.push(s)}),e}function gi(r){var e=[];return ee(r,function(i){e.push(i)}),e}function ke(r,e,i){for(var s=0;s<r.length;s++)e.call(i||window,r[s],s,r)}function cn(r,e){for(var i=[],s=0;s<r.length;s++)i.push(e(r[s],s,r,i));return i}function vi(r,e){var i={};return ee(r,function(s,u){i[u]=e(s)}),i}function un(r,e){e=e||function(u){return!!u};for(var i=[],s=0;s<r.length;s++)e(r[s],s,r,i)&&i.push(r[s]);return i}function ln(r,e){var i={};return ee(r,function(s,u){(e&&e(s,u,r,i)||s)&&(i[u]=s)}),i}function yi(r){var e=[];return ee(r,function(i,s){e.push([s,i])}),e}function hn(r,e){for(var i=0;i<r.length;i++)if(e(r[i],i,r))return!0;return!1}function mi(r,e){for(var i=0;i<r.length;i++)if(!e(r[i],i,r))return!1;return!0}function bi(r){return vi(r,function(e){return typeof e=="object"&&(e=Le(e)),encodeURIComponent(ii(e.toString()))})}function _i(r){var e=ln(r,function(s){return s!==void 0}),i=cn(yi(bi(e)),B.method("join","=")).join("&");return i}function wi(r){var e=[],i=[];return function s(u,l){var d,v,S;switch(typeof u){case"object":if(!u)return null;for(d=0;d<e.length;d+=1)if(e[d]===u)return{$ref:i[d]};if(e.push(u),i.push(l),Object.prototype.toString.apply(u)==="[object Array]")for(S=[],d=0;d<u.length;d+=1)S[d]=s(u[d],l+"["+d+"]");else{S={};for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&(S[v]=s(u[v],l+"["+JSON.stringify(v)+"]"))}return S;case"number":case"string":case"boolean":return u}}(r,"$")}function Le(r){try{return JSON.stringify(r)}catch{return JSON.stringify(wi(r))}}var Si=function(){function r(){this.globalLog=function(e){window.console&&window.console.log&&window.console.log(e)}}return r.prototype.debug=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLog,e)},r.prototype.warn=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogWarn,e)},r.prototype.error=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogError,e)},r.prototype.globalLogWarn=function(e){window.console&&window.console.warn?window.console.warn(e):this.globalLog(e)},r.prototype.globalLogError=function(e){window.console&&window.console.error?window.console.error(e):this.globalLogWarn(e)},r.prototype.log=function(e){var i=pi.apply(this,arguments);if(gt.log)gt.log(i);else if(gt.logToConsole){var s=e.bind(this);s(i)}},r}(),R=new Si,ki=function(r,e,i,s,u){(i.headers!==void 0||i.headersProvider!=null)&&R.warn("To send headers with the "+s.toString()+" request, you must use AJAX, rather than JSONP.");var l=r.nextAuthCallbackID.toString();r.nextAuthCallbackID++;var d=r.getDocument(),v=d.createElement("script");r.auth_callbacks[l]=function(P){u(null,P)};var S="Pusher.auth_callbacks['"+l+"']";v.src=i.endpoint+"?callback="+encodeURIComponent(S)+"&"+e;var b=d.getElementsByTagName("head")[0]||d.documentElement;b.insertBefore(v,b.firstChild)},Ti=ki,Ci=function(){function r(e){this.src=e}return r.prototype.send=function(e){var i=this,s="Error loading "+i.src;i.script=document.createElement("script"),i.script.id=e.id,i.script.src=i.src,i.script.type="text/javascript",i.script.charset="UTF-8",i.script.addEventListener?(i.script.onerror=function(){e.callback(s)},i.script.onload=function(){e.callback(null)}):i.script.onreadystatechange=function(){(i.script.readyState==="loaded"||i.script.readyState==="complete")&&e.callback(null)},i.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(i.errorScript=document.createElement("script"),i.errorScript.id=e.id+"_error",i.errorScript.text=e.name+"('"+s+"');",i.script.async=i.errorScript.async=!1):i.script.async=!0;var u=document.getElementsByTagName("head")[0];u.insertBefore(i.script,u.firstChild),i.errorScript&&u.insertBefore(i.errorScript,i.script.nextSibling)},r.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},r}(),Ii=Ci,Ei=function(){function r(e,i){this.url=e,this.data=i}return r.prototype.send=function(e){if(!this.request){var i=_i(this.data),s=this.url+"/"+e.number+"?"+i;this.request=I.createScriptRequest(s),this.request.send(e)}},r.prototype.cleanup=function(){this.request&&this.request.cleanup()},r}(),Ai=Ei,Pi=function(r,e){return function(i,s){var u="http"+(e?"s":"")+"://",l=u+(r.host||r.options.host)+r.options.path,d=I.createJSONPRequest(l,i),v=I.ScriptReceivers.create(function(S,b){f.remove(v),d.cleanup(),b&&b.host&&(r.host=b.host),s&&s(S,b)});d.send(v)}},Oi={name:"jsonp",getAgent:Pi},xi=Oi;function ot(r,e,i){var s=r+(e.useTLS?"s":""),u=e.useTLS?e.hostTLS:e.hostNonTLS;return s+"://"+u+i}function st(r,e){var i="/app/"+r,s="?protocol="+g.PROTOCOL+"&client=js&version="+g.VERSION+(e?"&"+e:"");return i+s}var Di={getInitial:function(r,e){var i=(e.httpPath||"")+st(r,"flash=false");return ot("ws",e,i)}},Ri={getInitial:function(r,e){var i=(e.httpPath||"/pusher")+st(r);return ot("http",e,i)}},Ni={getInitial:function(r,e){return ot("http",e,e.httpPath||"/pusher")},getPath:function(r,e){return st(r)}},Li=function(){function r(){this._callbacks={}}return r.prototype.get=function(e){return this._callbacks[at(e)]},r.prototype.add=function(e,i,s){var u=at(e);this._callbacks[u]=this._callbacks[u]||[],this._callbacks[u].push({fn:i,context:s})},r.prototype.remove=function(e,i,s){if(!e&&!i&&!s){this._callbacks={};return}var u=e?[at(e)]:an(this._callbacks);i||s?this.removeCallback(u,i,s):this.removeAllCallbacks(u)},r.prototype.removeCallback=function(e,i,s){ke(e,function(u){this._callbacks[u]=un(this._callbacks[u]||[],function(l){return i&&i!==l.fn||s&&s!==l.context}),this._callbacks[u].length===0&&delete this._callbacks[u]},this)},r.prototype.removeAllCallbacks=function(e){ke(e,function(i){delete this._callbacks[i]},this)},r}(),ji=Li;function at(r){return"_"+r}var Mi=function(){function r(e){this.callbacks=new ji,this.global_callbacks=[],this.failThrough=e}return r.prototype.bind=function(e,i,s){return this.callbacks.add(e,i,s),this},r.prototype.bind_global=function(e){return this.global_callbacks.push(e),this},r.prototype.unbind=function(e,i,s){return this.callbacks.remove(e,i,s),this},r.prototype.unbind_global=function(e){return e?(this.global_callbacks=un(this.global_callbacks||[],function(i){return i!==e}),this):(this.global_callbacks=[],this)},r.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},r.prototype.emit=function(e,i,s){for(var u=0;u<this.global_callbacks.length;u++)this.global_callbacks[u](e,i);var l=this.callbacks.get(e),d=[];if(s?d.push(i,s):i&&d.push(i),l&&l.length>0)for(var u=0;u<l.length;u++)l[u].fn.apply(l[u].context||window,d);else this.failThrough&&this.failThrough(e,i);return this},r}(),te=Mi,Bi=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Fi=function(r){Bi(e,r);function e(i,s,u,l,d){var v=r.call(this)||this;return v.initialize=I.transportConnectionInitializer,v.hooks=i,v.name=s,v.priority=u,v.key=l,v.options=d,v.state="new",v.timeline=d.timeline,v.activityTimeout=d.activityTimeout,v.id=v.timeline.generateUniqueID(),v}return e.prototype.handlesActivityChecks=function(){return!!this.hooks.handlesActivityChecks},e.prototype.supportsPing=function(){return!!this.hooks.supportsPing},e.prototype.connect=function(){var i=this;if(this.socket||this.state!=="initialized")return!1;var s=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(s,this.options)}catch(u){return B.defer(function(){i.onError(u),i.changeState("closed")}),!1}return this.bindListeners(),R.debug("Connecting",{transport:this.name,url:s}),this.changeState("connecting"),!0},e.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},e.prototype.send=function(i){var s=this;return this.state==="open"?(B.defer(function(){s.socket&&s.socket.send(i)}),!0):!1},e.prototype.ping=function(){this.state==="open"&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(i){this.emit("error",{type:"WebSocketError",error:i}),this.timeline.error(this.buildTimelineMessage({error:i.toString()}))},e.prototype.onClose=function(i){i?this.changeState("closed",{code:i.code,reason:i.reason,wasClean:i.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(i){this.emit("message",i)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var i=this;this.socket.onopen=function(){i.onOpen()},this.socket.onerror=function(s){i.onError(s)},this.socket.onclose=function(s){i.onClose(s)},this.socket.onmessage=function(s){i.onMessage(s)},this.supportsPing()&&(this.socket.onactivity=function(){i.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(i,s){this.state=i,this.timeline.info(this.buildTimelineMessage({state:i,params:s})),this.emit(i,s)},e.prototype.buildTimelineMessage=function(i){return $({cid:this.id},i)},e}(te),Hi=Fi,$i=function(){function r(e){this.hooks=e}return r.prototype.isSupported=function(e){return this.hooks.isSupported(e)},r.prototype.createConnection=function(e,i,s,u){return new Hi(this.hooks,e,i,s,u)},r}(),be=$i,Ui=new be({urls:Di,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return!!I.getWebSocketAPI()},isSupported:function(){return!!I.getWebSocketAPI()},getSocket:function(r){return I.createWebSocket(r)}}),fn={urls:Ri,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},dn=$({getSocket:function(r){return I.HTTPFactory.createStreamingSocket(r)}},fn),pn=$({getSocket:function(r){return I.HTTPFactory.createPollingSocket(r)}},fn),gn={isSupported:function(){return I.isXHRSupported()}},qi=new be($({},dn,gn)),zi=new be($({},pn,gn)),Wi={ws:Ui,xhr_streaming:qi,xhr_polling:zi},je=Wi,Vi=new be({file:"sockjs",urls:Ni,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(r,e){return new window.SockJS(r,null,{js_path:T.getPath("sockjs",{useTLS:e.useTLS}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(r,e){r.send(JSON.stringify({path:e}))}}),vn={isSupported:function(r){var e=I.isXDRSupported(r.useTLS);return e}},Ki=new be($({},dn,vn)),Gi=new be($({},pn,vn));je.xdr_streaming=Ki,je.xdr_polling=Gi,je.sockjs=Vi;var Ji=je,Xi=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Yi=function(r){Xi(e,r);function e(){var i=r.call(this)||this,s=i;return window.addEventListener!==void 0&&(window.addEventListener("online",function(){s.emit("online")},!1),window.addEventListener("offline",function(){s.emit("offline")},!1)),i}return e.prototype.isOnline=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine},e}(te),Qi=new Yi,Zi=function(){function r(e,i,s){this.manager=e,this.transport=i,this.minPingDelay=s.minPingDelay,this.maxPingDelay=s.maxPingDelay,this.pingDelay=void 0}return r.prototype.createConnection=function(e,i,s,u){var l=this;u=$({},u,{activityTimeout:this.pingDelay});var d=this.transport.createConnection(e,i,s,u),v=null,S=function(){d.unbind("open",S),d.bind("closed",b),v=B.now()},b=function(P){if(d.unbind("closed",b),P.code===1002||P.code===1003)l.manager.reportDeath();else if(!P.wasClean&&v){var N=B.now()-v;N<2*l.maxPingDelay&&(l.manager.reportDeath(),l.pingDelay=Math.max(N/2,l.minPingDelay))}};return d.bind("open",S),d},r.prototype.isSupported=function(e){return this.manager.isAlive()&&this.transport.isSupported(e)},r}(),eo=Zi,yn={decodeMessage:function(r){try{var e=JSON.parse(r.data),i=e.data;if(typeof i=="string")try{i=JSON.parse(e.data)}catch{}var s={event:e.event,channel:e.channel,data:i};return e.user_id&&(s.user_id=e.user_id),s}catch(u){throw{type:"MessageParseError",error:u,data:r.data}}},encodeMessage:function(r){return JSON.stringify(r)},processHandshake:function(r){var e=yn.decodeMessage(r);if(e.event==="pusher:connection_established"){if(!e.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:e.data.socket_id,activityTimeout:e.data.activity_timeout*1e3}}else{if(e.event==="pusher:error")return{action:this.getCloseAction(e.data),error:this.getCloseError(e.data)};throw"Invalid handshake"}},getCloseAction:function(r){return r.code<4e3?r.code>=1002&&r.code<=1004?"backoff":null:r.code===4e3?"tls_only":r.code<4100?"refused":r.code<4200?"backoff":r.code<4300?"retry":"refused"},getCloseError:function(r){return r.code!==1e3&&r.code!==1001?{type:"PusherError",data:{code:r.code,message:r.reason||r.message}}:null}},ce=yn,to=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),no=function(r){to(e,r);function e(i,s){var u=r.call(this)||this;return u.id=i,u.transport=s,u.activityTimeout=s.activityTimeout,u.bindListeners(),u}return e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(i){return this.transport.send(i)},e.prototype.send_event=function(i,s,u){var l={event:i,data:s};return u&&(l.channel=u),R.debug("Event sent",l),this.send(ce.encodeMessage(l))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var i=this,s={message:function(l){var d;try{d=ce.decodeMessage(l)}catch(v){i.emit("error",{type:"MessageParseError",error:v,data:l.data})}if(d!==void 0){switch(R.debug("Event recd",d),d.event){case"pusher:error":i.emit("error",{type:"PusherError",data:d.data});break;case"pusher:ping":i.emit("ping");break;case"pusher:pong":i.emit("pong");break}i.emit("message",d)}},activity:function(){i.emit("activity")},error:function(l){i.emit("error",l)},closed:function(l){u(),l&&l.code&&i.handleCloseEvent(l),i.transport=null,i.emit("closed")}},u=function(){ee(s,function(l,d){i.transport.unbind(d,l)})};ee(s,function(l,d){i.transport.bind(d,l)})},e.prototype.handleCloseEvent=function(i){var s=ce.getCloseAction(i),u=ce.getCloseError(i);u&&this.emit("error",u),s&&this.emit(s,{action:s,error:u})},e}(te),ro=no,oo=function(){function r(e,i){this.transport=e,this.callback=i,this.bindListeners()}return r.prototype.close=function(){this.unbindListeners(),this.transport.close()},r.prototype.bindListeners=function(){var e=this;this.onMessage=function(i){e.unbindListeners();var s;try{s=ce.processHandshake(i)}catch(u){e.finish("error",{error:u}),e.transport.close();return}s.action==="connected"?e.finish("connected",{connection:new ro(s.id,e.transport),activityTimeout:s.activityTimeout}):(e.finish(s.action,{error:s.error}),e.transport.close())},this.onClosed=function(i){e.unbindListeners();var s=ce.getCloseAction(i)||"backoff",u=ce.getCloseError(i);e.finish(s,{error:u})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},r.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},r.prototype.finish=function(e,i){this.callback($({transport:this.transport,action:e},i))},r}(),so=oo,ao=function(){function r(e,i){this.timeline=e,this.options=i||{}}return r.prototype.send=function(e,i){this.timeline.isEmpty()||this.timeline.send(I.TimelineTransport.getAgent(this,e),i)},r}(),co=ao,uo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),lo=function(r){uo(e,r);function e(i,s){var u=r.call(this,function(l,d){R.debug("No callbacks on "+i+" for "+l)})||this;return u.name=i,u.pusher=s,u.subscribed=!1,u.subscriptionPending=!1,u.subscriptionCancelled=!1,u}return e.prototype.authorize=function(i,s){return s(null,{auth:""})},e.prototype.trigger=function(i,s){if(i.indexOf("client-")!==0)throw new A("Event '"+i+"' does not start with 'client-'");if(!this.subscribed){var u=C.buildLogSuffix("triggeringClientEvents");R.warn("Client event triggered before channel 'subscription_succeeded' event . "+u)}return this.pusher.send_event(i,s,this.name)},e.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(i);else if(s==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(i);else if(s.indexOf("pusher_internal:")!==0){var l={};this.emit(s,u,l)}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",i.data)},e.prototype.handleSubscriptionCountEvent=function(i){i.data.subscription_count&&(this.subscriptionCount=i.data.subscription_count),this.emit("pusher:subscription_count",i.data)},e.prototype.subscribe=function(){var i=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(s,u){s?(i.subscriptionPending=!1,R.error(s.toString()),i.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:s.message},s instanceof J?{status:s.status}:{}))):i.pusher.send_event("pusher:subscribe",{auth:u.auth,channel_data:u.channel_data,channel:i.name})}))},e.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},e.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},e}(te),ct=lo,ho=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),fo=function(r){ho(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.authorize=function(i,s){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:i},s)},e}(ct),ut=fo,po=function(){function r(){this.reset()}return r.prototype.get=function(e){return Object.prototype.hasOwnProperty.call(this.members,e)?{id:e,info:this.members[e]}:null},r.prototype.each=function(e){var i=this;ee(this.members,function(s,u){e(i.get(u))})},r.prototype.setMyID=function(e){this.myID=e},r.prototype.onSubscription=function(e){this.members=e.presence.hash,this.count=e.presence.count,this.me=this.get(this.myID)},r.prototype.addMember=function(e){return this.get(e.user_id)===null&&this.count++,this.members[e.user_id]=e.user_info,this.get(e.user_id)},r.prototype.removeMember=function(e){var i=this.get(e.user_id);return i&&(delete this.members[e.user_id],this.count--),i},r.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},r}(),go=po,vo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),yo=function(r,e,i,s){function u(l){return l instanceof i?l:new i(function(d){d(l)})}return new(i||(i=Promise))(function(l,d){function v(P){try{b(s.next(P))}catch(N){d(N)}}function S(P){try{b(s.throw(P))}catch(N){d(N)}}function b(P){P.done?l(P.value):u(P.value).then(v,S)}b((s=s.apply(r,e||[])).next())})},mo=function(r,e){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,u,l,d;return d={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function v(b){return function(P){return S([b,P])}}function S(b){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,u&&(l=b[0]&2?u.return:b[0]?u.throw||((l=u.return)&&l.call(u),0):u.next)&&!(l=l.call(u,b[1])).done)return l;switch(u=0,l&&(b=[b[0]&2,l.value]),b[0]){case 0:case 1:l=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,u=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!l||b[1]>l[0]&&b[1]<l[3])){i.label=b[1];break}if(b[0]===6&&i.label<l[1]){i.label=l[1],l=b;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(b);break}l[2]&&i.ops.pop(),i.trys.pop();continue}b=e.call(r,i)}catch(P){b=[6,P],u=0}finally{s=l=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},bo=function(r){vo(e,r);function e(i,s){var u=r.call(this,i,s)||this;return u.members=new go,u}return e.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){return yo(u,void 0,void 0,function(){var v,S;return mo(this,function(b){switch(b.label){case 0:return l?[3,3]:(d=d,d.channel_data==null?[3,1]:(v=JSON.parse(d.channel_data),this.members.setMyID(v.user_id),[3,3]));case 1:return[4,this.pusher.user.signinDonePromise];case 2:if(b.sent(),this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else return S=C.buildLogSuffix("authorizationEndpoint"),R.error("Invalid auth response for channel '"+this.name+"', "+("expected 'channel_data' field. "+S+", ")+"or the user should be signed in."),s("Invalid auth response"),[2];b.label=3;case 3:return s(l,d),[2]}})})})},e.prototype.handleEvent=function(i){var s=i.event;if(s.indexOf("pusher_internal:")===0)this.handleInternalEvent(i);else{var u=i.data,l={};i.user_id&&(l.user_id=i.user_id),this.emit(s,u,l)}},e.prototype.handleInternalEvent=function(i){var s=i.event,u=i.data;switch(s){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(i);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(i);break;case"pusher_internal:member_added":var l=this.members.addMember(u);this.emit("pusher:member_added",l);break;case"pusher_internal:member_removed":var d=this.members.removeMember(u);d&&this.emit("pusher:member_removed",d);break}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(i.data),this.emit("pusher:subscription_succeeded",this.members))},e.prototype.disconnect=function(){this.members.reset(),r.prototype.disconnect.call(this)},e}(ut),_o=bo,wo=c(1),lt=c(0),So=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),ko=function(r){So(e,r);function e(i,s,u){var l=r.call(this,i,s)||this;return l.key=null,l.nacl=u,l}return e.prototype.authorize=function(i,s){var u=this;r.prototype.authorize.call(this,i,function(l,d){if(l){s(l,d);return}var v=d.shared_secret;if(!v){s(new Error("No shared_secret key in auth payload for encrypted channel: "+u.name),null);return}u.key=Object(lt.decode)(v),delete d.shared_secret,s(null,d)})},e.prototype.trigger=function(i,s){throw new Z("Client events are not currently supported for encrypted channels")},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s.indexOf("pusher_internal:")===0||s.indexOf("pusher:")===0){r.prototype.handleEvent.call(this,i);return}this.handleEncryptedEvent(s,u)},e.prototype.handleEncryptedEvent=function(i,s){var u=this;if(!this.key){R.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!s.ciphertext||!s.nonce){R.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+s);return}var l=Object(lt.decode)(s.ciphertext);if(l.length<this.nacl.secretbox.overheadLength){R.error("Expected encrypted event ciphertext length to be "+this.nacl.secretbox.overheadLength+", got: "+l.length);return}var d=Object(lt.decode)(s.nonce);if(d.length<this.nacl.secretbox.nonceLength){R.error("Expected encrypted event nonce length to be "+this.nacl.secretbox.nonceLength+", got: "+d.length);return}var v=this.nacl.secretbox.open(l,d,this.key);if(v===null){R.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,function(S,b){if(S){R.error("Failed to make a request to the authEndpoint: "+b+". Unable to fetch new key, so dropping encrypted event");return}if(v=u.nacl.secretbox.open(l,d,u.key),v===null){R.error("Failed to decrypt event with new key. Dropping encrypted event");return}u.emit(i,u.getDataToEmit(v))});return}this.emit(i,this.getDataToEmit(v))},e.prototype.getDataToEmit=function(i){var s=Object(wo.decode)(i);try{return JSON.parse(s)}catch{return s}},e}(ut),To=ko,Co=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Io=function(r){Co(e,r);function e(i,s){var u=r.call(this)||this;u.state="initialized",u.connection=null,u.key=i,u.options=s,u.timeline=u.options.timeline,u.usingTLS=u.options.useTLS,u.errorCallbacks=u.buildErrorCallbacks(),u.connectionCallbacks=u.buildConnectionCallbacks(u.errorCallbacks),u.handshakeCallbacks=u.buildHandshakeCallbacks(u.errorCallbacks);var l=I.getNetwork();return l.bind("online",function(){u.timeline.info({netinfo:"online"}),(u.state==="connecting"||u.state==="unavailable")&&u.retryIn(0)}),l.bind("offline",function(){u.timeline.info({netinfo:"offline"}),u.connection&&u.sendActivityCheck()}),u.updateStrategy(),u}return e.prototype.connect=function(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(i){return this.connection?this.connection.send(i):!1},e.prototype.send_event=function(i,s,u){return this.connection?this.connection.send_event(i,s,u):!1},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isUsingTLS=function(){return this.usingTLS},e.prototype.startConnecting=function(){var i=this,s=function(u,l){u?i.runner=i.strategy.connect(0,s):l.action==="error"?(i.emit("error",{type:"HandshakeError",error:l.error}),i.timeline.error({handshakeError:l.error})):(i.abortConnecting(),i.handshakeCallbacks[l.action](l))};this.runner=this.strategy.connect(0,s)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var i=this.abandonConnection();i.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},e.prototype.retryIn=function(i){var s=this;this.timeline.info({action:"retry",delay:i}),i>0&&this.emit("connecting_in",Math.round(i/1e3)),this.retryTimer=new ae(i||0,function(){s.disconnectInternally(),s.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var i=this;this.unavailableTimer=new ae(this.options.unavailableTimeout,function(){i.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new ae(this.options.pongTimeout,function(){i.timeline.error({pong_timed_out:i.options.pongTimeout}),i.retryIn(0)})},e.prototype.resetActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new ae(this.activityTimeout,function(){i.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(i){var s=this;return $({},i,{message:function(u){s.resetActivityCheck(),s.emit("message",u)},ping:function(){s.send_event("pusher:pong",{})},activity:function(){s.resetActivityCheck()},error:function(u){s.emit("error",u)},closed:function(){s.abandonConnection(),s.shouldRetry()&&s.retryIn(1e3)}})},e.prototype.buildHandshakeCallbacks=function(i){var s=this;return $({},i,{connected:function(u){s.activityTimeout=Math.min(s.options.activityTimeout,u.activityTimeout,u.connection.activityTimeout||1/0),s.clearUnavailableTimer(),s.setConnection(u.connection),s.socket_id=s.connection.id,s.updateState("connected",{socket_id:s.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var i=this,s=function(u){return function(l){l.error&&i.emit("error",{type:"WebSocketError",error:l.error}),u(l)}};return{tls_only:s(function(){i.usingTLS=!0,i.updateStrategy(),i.retryIn(0)}),refused:s(function(){i.disconnect()}),backoff:s(function(){i.retryIn(1e3)}),retry:s(function(){i.retryIn(0)})}},e.prototype.setConnection=function(i){this.connection=i;for(var s in this.connectionCallbacks)this.connection.bind(s,this.connectionCallbacks[s]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(this.connection){this.stopActivityCheck();for(var i in this.connectionCallbacks)this.connection.unbind(i,this.connectionCallbacks[i]);var s=this.connection;return this.connection=null,s}},e.prototype.updateState=function(i,s){var u=this.state;if(this.state=i,u!==i){var l=i;l==="connected"&&(l+=" with new socket ID "+s.socket_id),R.debug("State changed",u+" -> "+l),this.timeline.info({state:i,params:s}),this.emit("state_change",{previous:u,current:i}),this.emit(i,s)}},e.prototype.shouldRetry=function(){return this.state==="connecting"||this.state==="connected"},e}(te),Eo=Io,Ao=function(){function r(){this.channels={}}return r.prototype.add=function(e,i){return this.channels[e]||(this.channels[e]=Oo(e,i)),this.channels[e]},r.prototype.all=function(){return gi(this.channels)},r.prototype.find=function(e){return this.channels[e]},r.prototype.remove=function(e){var i=this.channels[e];return delete this.channels[e],i},r.prototype.disconnect=function(){ee(this.channels,function(e){e.disconnect()})},r}(),Po=Ao;function Oo(r,e){if(r.indexOf("private-encrypted-")===0){if(e.config.nacl)return ne.createEncryptedChannel(r,e,e.config.nacl);var i="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",s=C.buildLogSuffix("encryptedChannelSupport");throw new Z(i+". "+s)}else{if(r.indexOf("private-")===0)return ne.createPrivateChannel(r,e);if(r.indexOf("presence-")===0)return ne.createPresenceChannel(r,e);if(r.indexOf("#")===0)throw new D('Cannot create a channel with name "'+r+'".');return ne.createChannel(r,e)}}var xo={createChannels:function(){return new Po},createConnectionManager:function(r,e){return new Eo(r,e)},createChannel:function(r,e){return new ct(r,e)},createPrivateChannel:function(r,e){return new ut(r,e)},createPresenceChannel:function(r,e){return new _o(r,e)},createEncryptedChannel:function(r,e,i){return new To(r,e,i)},createTimelineSender:function(r,e){return new co(r,e)},createHandshake:function(r,e){return new so(r,e)},createAssistantToTheTransportManager:function(r,e,i){return new eo(r,e,i)}},ne=xo,Do=function(){function r(e){this.options=e||{},this.livesLeft=this.options.lives||1/0}return r.prototype.getAssistant=function(e){return ne.createAssistantToTheTransportManager(this,e,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},r.prototype.isAlive=function(){return this.livesLeft>0},r.prototype.reportDeath=function(){this.livesLeft-=1},r}(),mn=Do,Ro=function(){function r(e,i){this.strategies=e,this.loop=!!i.loop,this.failFast=!!i.failFast,this.timeout=i.timeout,this.timeoutLimit=i.timeoutLimit}return r.prototype.isSupported=function(){return hn(this.strategies,B.method("isSupported"))},r.prototype.connect=function(e,i){var s=this,u=this.strategies,l=0,d=this.timeout,v=null,S=function(b,P){P?i(null,P):(l=l+1,s.loop&&(l=l%u.length),l<u.length?(d&&(d=d*2,s.timeoutLimit&&(d=Math.min(d,s.timeoutLimit))),v=s.tryStrategy(u[l],e,{timeout:d,failFast:s.failFast},S)):i(!0))};return v=this.tryStrategy(u[l],e,{timeout:d,failFast:this.failFast},S),{abort:function(){v.abort()},forceMinPriority:function(b){e=b,v&&v.forceMinPriority(b)}}},r.prototype.tryStrategy=function(e,i,s,u){var l=null,d=null;return s.timeout>0&&(l=new ae(s.timeout,function(){d.abort(),u(!0)})),d=e.connect(i,function(v,S){v&&l&&l.isRunning()&&!s.failFast||(l&&l.ensureAborted(),u(v,S))}),{abort:function(){l&&l.ensureAborted(),d.abort()},forceMinPriority:function(v){d.forceMinPriority(v)}}},r}(),ue=Ro,No=function(){function r(e){this.strategies=e}return r.prototype.isSupported=function(){return hn(this.strategies,B.method("isSupported"))},r.prototype.connect=function(e,i){return Lo(this.strategies,e,function(s,u){return function(l,d){if(u[s].error=l,l){jo(u)&&i(!0);return}ke(u,function(v){v.forceMinPriority(d.transport.priority)}),i(null,d)}})},r}(),ht=No;function Lo(r,e,i){var s=cn(r,function(u,l,d,v){return u.connect(e,i(l,v))});return{abort:function(){ke(s,Mo)},forceMinPriority:function(u){ke(s,function(l){l.forceMinPriority(u)})}}}function jo(r){return mi(r,function(e){return!!e.error})}function Mo(r){!r.error&&!r.aborted&&(r.abort(),r.aborted=!0)}var Bo=function(){function r(e,i,s){this.strategy=e,this.transports=i,this.ttl=s.ttl||1800*1e3,this.usingTLS=s.useTLS,this.timeline=s.timeline}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(e,i){var s=this.usingTLS,u=Ho(s),l=[this.strategy];if(u&&u.timestamp+this.ttl>=B.now()){var d=this.transports[u.transport];d&&(this.timeline.info({cached:!0,transport:u.transport,latency:u.latency}),l.push(new ue([d],{timeout:u.latency*2+1e3,failFast:!0})))}var v=B.now(),S=l.pop().connect(e,function b(P,N){P?(bn(s),l.length>0?(v=B.now(),S=l.pop().connect(e,b)):i(P)):($o(s,N.transport.name,B.now()-v),i(null,N))});return{abort:function(){S.abort()},forceMinPriority:function(b){e=b,S&&S.forceMinPriority(b)}}},r}(),Fo=Bo;function ft(r){return"pusherTransport"+(r?"TLS":"NonTLS")}function Ho(r){var e=I.getLocalStorage();if(e)try{var i=e[ft(r)];if(i)return JSON.parse(i)}catch{bn(r)}return null}function $o(r,e,i){var s=I.getLocalStorage();if(s)try{s[ft(r)]=Le({timestamp:B.now(),transport:e,latency:i})}catch{}}function bn(r){var e=I.getLocalStorage();if(e)try{delete e[ft(r)]}catch{}}var Uo=function(){function r(e,i){var s=i.delay;this.strategy=e,this.options={delay:s}}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(e,i){var s=this.strategy,u,l=new ae(this.options.delay,function(){u=s.connect(e,i)});return{abort:function(){l.ensureAborted(),u&&u.abort()},forceMinPriority:function(d){e=d,u&&u.forceMinPriority(d)}}},r}(),Me=Uo,qo=function(){function r(e,i,s){this.test=e,this.trueBranch=i,this.falseBranch=s}return r.prototype.isSupported=function(){var e=this.test()?this.trueBranch:this.falseBranch;return e.isSupported()},r.prototype.connect=function(e,i){var s=this.test()?this.trueBranch:this.falseBranch;return s.connect(e,i)},r}(),Te=qo,zo=function(){function r(e){this.strategy=e}return r.prototype.isSupported=function(){return this.strategy.isSupported()},r.prototype.connect=function(e,i){var s=this.strategy.connect(e,function(u,l){l&&s.abort(),i(u,l)});return s},r}(),Wo=zo;function Ce(r){return function(){return r.isSupported()}}var Vo=function(r,e,i){var s={};function u(xn,ta,na,ra,ia){var Dn=i(r,xn,ta,na,ra,ia);return s[xn]=Dn,Dn}var l=Object.assign({},e,{hostNonTLS:r.wsHost+":"+r.wsPort,hostTLS:r.wsHost+":"+r.wssPort,httpPath:r.wsPath}),d=Object.assign({},l,{useTLS:!0}),v=Object.assign({},e,{hostNonTLS:r.httpHost+":"+r.httpPort,hostTLS:r.httpHost+":"+r.httpsPort,httpPath:r.httpPath}),S={loop:!0,timeout:15e3,timeoutLimit:6e4},b=new mn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),P=new mn({lives:2,minPingDelay:1e4,maxPingDelay:r.activityTimeout}),N=u("ws","ws",3,l,b),X=u("wss","ws",3,d,b),Xs=u("sockjs","sockjs",1,v),Cn=u("xhr_streaming","xhr_streaming",1,v,P),Ys=u("xdr_streaming","xdr_streaming",1,v,P),In=u("xhr_polling","xhr_polling",1,v),Qs=u("xdr_polling","xdr_polling",1,v),En=new ue([N],S),Zs=new ue([X],S),ea=new ue([Xs],S),An=new ue([new Te(Ce(Cn),Cn,Ys)],S),Pn=new ue([new Te(Ce(In),In,Qs)],S),On=new ue([new Te(Ce(An),new ht([An,new Me(Pn,{delay:4e3})]),Pn)],S),vt=new Te(Ce(On),On,ea),yt;return e.useTLS?yt=new ht([En,new Me(vt,{delay:2e3})]):yt=new ht([En,new Me(Zs,{delay:2e3}),new Me(vt,{delay:5e3})]),new Fo(new Wo(new Te(Ce(N),yt,vt)),s,{ttl:18e5,timeline:e.timeline,useTLS:e.useTLS})},Ko=Vo,Go=function(){var r=this;r.timeline.info(r.buildTimelineMessage({transport:r.name+(r.options.useTLS?"s":"")})),r.hooks.isInitialized()?r.changeState("initialized"):r.hooks.file?(r.changeState("initializing"),T.load(r.hooks.file,{useTLS:r.options.useTLS},function(e,i){r.hooks.isInitialized()?(r.changeState("initialized"),i(!0)):(e&&r.onError(e),r.onClose(),i(!1))})):r.onClose()},Jo={getRequest:function(r){var e=new window.XDomainRequest;return e.ontimeout=function(){r.emit("error",new M),r.close()},e.onerror=function(i){r.emit("error",i),r.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&r.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&r.onChunk(200,e.responseText),r.emit("finished",200),r.close()},e},abortRequest:function(r){r.ontimeout=r.onerror=r.onprogress=r.onload=null,r.abort()}},Xo=Jo,Yo=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Qo=256*1024,Zo=function(r){Yo(e,r);function e(i,s,u){var l=r.call(this)||this;return l.hooks=i,l.method=s,l.url=u,l}return e.prototype.start=function(i){var s=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){s.close()},I.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(i)},e.prototype.close=function(){this.unloader&&(I.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(i,s){for(;;){var u=this.advanceBuffer(s);if(u)this.emit("chunk",{status:i,data:u});else break}this.isBufferTooLong(s)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(i){var s=i.slice(this.position),u=s.indexOf(`
`);return u!==-1?(this.position+=u+1,s.slice(0,u)):null},e.prototype.isBufferTooLong=function(i){return this.position===i.length&&i.length>Qo},e}(te),es=Zo,dt;(function(r){r[r.CONNECTING=0]="CONNECTING",r[r.OPEN=1]="OPEN",r[r.CLOSED=3]="CLOSED"})(dt||(dt={}));var le=dt,ts=1,ns=function(){function r(e,i){this.hooks=e,this.session=wn(1e3)+"/"+ss(8),this.location=rs(i),this.readyState=le.CONNECTING,this.openStream()}return r.prototype.send=function(e){return this.sendRaw(JSON.stringify([e]))},r.prototype.ping=function(){this.hooks.sendHeartbeat(this)},r.prototype.close=function(e,i){this.onClose(e,i,!0)},r.prototype.sendRaw=function(e){if(this.readyState===le.OPEN)try{return I.createSocketRequest("POST",_n(is(this.location,this.session))).start(e),!0}catch{return!1}else return!1},r.prototype.reconnect=function(){this.closeStream(),this.openStream()},r.prototype.onClose=function(e,i,s){this.closeStream(),this.readyState=le.CLOSED,this.onclose&&this.onclose({code:e,reason:i,wasClean:s})},r.prototype.onChunk=function(e){if(e.status===200){this.readyState===le.OPEN&&this.onActivity();var i,s=e.data.slice(0,1);switch(s){case"o":i=JSON.parse(e.data.slice(1)||"{}"),this.onOpen(i);break;case"a":i=JSON.parse(e.data.slice(1)||"[]");for(var u=0;u<i.length;u++)this.onEvent(i[u]);break;case"m":i=JSON.parse(e.data.slice(1)||"null"),this.onEvent(i);break;case"h":this.hooks.onHeartbeat(this);break;case"c":i=JSON.parse(e.data.slice(1)||"[]"),this.onClose(i[0],i[1],!0);break}}},r.prototype.onOpen=function(e){this.readyState===le.CONNECTING?(e&&e.hostname&&(this.location.base=os(this.location.base,e.hostname)),this.readyState=le.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},r.prototype.onEvent=function(e){this.readyState===le.OPEN&&this.onmessage&&this.onmessage({data:e})},r.prototype.onActivity=function(){this.onactivity&&this.onactivity()},r.prototype.onError=function(e){this.onerror&&this.onerror(e)},r.prototype.openStream=function(){var e=this;this.stream=I.createSocketRequest("POST",_n(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(i){e.onChunk(i)}),this.stream.bind("finished",function(i){e.hooks.onFinished(e,i)}),this.stream.bind("buffer_too_long",function(){e.reconnect()});try{this.stream.start()}catch(i){B.defer(function(){e.onError(i),e.onClose(1006,"Could not start streaming",!1)})}},r.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},r}();function rs(r){var e=/([^\?]*)\/*(\??.*)/.exec(r);return{base:e[1],queryString:e[2]}}function is(r,e){return r.base+"/"+e+"/xhr_send"}function _n(r){var e=r.indexOf("?")===-1?"?":"&";return r+e+"t="+ +new Date+"&n="+ts++}function os(r,e){var i=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(r);return i[1]+e+i[3]}function wn(r){return I.randomInt(r)}function ss(r){for(var e=[],i=0;i<r;i++)e.push(wn(32).toString(32));return e.join("")}var as=ns,cs={getReceiveURL:function(r,e){return r.base+"/"+e+"/xhr_streaming"+r.queryString},onHeartbeat:function(r){r.sendRaw("[]")},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,e){r.onClose(1006,"Connection interrupted ("+e+")",!1)}},us=cs,ls={getReceiveURL:function(r,e){return r.base+"/"+e+"/xhr"+r.queryString},onHeartbeat:function(){},sendHeartbeat:function(r){r.sendRaw("[]")},onFinished:function(r,e){e===200?r.reconnect():r.onClose(1006,"Connection interrupted ("+e+")",!1)}},hs=ls,fs={getRequest:function(r){var e=I.getXHRAPI(),i=new e;return i.onreadystatechange=i.onprogress=function(){switch(i.readyState){case 3:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText);break;case 4:i.responseText&&i.responseText.length>0&&r.onChunk(i.status,i.responseText),r.emit("finished",i.status),r.close();break}},i},abortRequest:function(r){r.onreadystatechange=null,r.abort()}},ds=fs,ps={createStreamingSocket:function(r){return this.createSocket(us,r)},createPollingSocket:function(r){return this.createSocket(hs,r)},createSocket:function(r,e){return new as(r,e)},createXHR:function(r,e){return this.createRequest(ds,r,e)},createRequest:function(r,e,i){return new es(r,e,i)}},Sn=ps;Sn.createXDR=function(r,e){return this.createRequest(Xo,r,e)};var gs=Sn,vs={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:f,DependenciesReceivers:E,getDefaultStrategy:Ko,Transports:Ji,transportConnectionInitializer:Go,HTTPFactory:gs,TimelineTransport:xi,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(r){var e=this;window.Pusher=r;var i=function(){e.onDocumentBody(r.ready)};window.JSON?i():T.load("json2",{},i)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:ri,jsonp:Ti}},onDocumentBody:function(r){var e=this;document.body?r():setTimeout(function(){e.onDocumentBody(r)},0)},createJSONPRequest:function(r,e){return new Ai(r,e)},createScriptRequest:function(r){return new Ii(r)},getLocalStorage:function(){try{return window.localStorage}catch{return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var r=this.getXHRAPI();return new r},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return Qi},createWebSocket:function(r){var e=this.getWebSocketAPI();return new e(r)},createSocketRequest:function(r,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(r,e);if(this.isXDRSupported(e.indexOf("https:")===0))return this.HTTPFactory.createXDR(r,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var r=this.getXHRAPI();return!!r&&new r().withCredentials!==void 0},isXDRSupported:function(r){var e=r?"https:":"http:",i=this.getProtocol();return!!window.XDomainRequest&&i===e},addUnloadListener:function(r){window.addEventListener!==void 0?window.addEventListener("unload",r,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",r)},removeUnloadListener:function(r){window.addEventListener!==void 0?window.removeEventListener("unload",r,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",r)},randomInt:function(r){var e=function(){var i=window.crypto||window.msCrypto,s=i.getRandomValues(new Uint32Array(1))[0];return s/Math.pow(2,32)};return Math.floor(e()*r)}},I=vs,pt;(function(r){r[r.ERROR=3]="ERROR",r[r.INFO=6]="INFO",r[r.DEBUG=7]="DEBUG"})(pt||(pt={}));var Be=pt,ys=function(){function r(e,i,s){this.key=e,this.session=i,this.events=[],this.options=s||{},this.sent=0,this.uniqueID=0}return r.prototype.log=function(e,i){e<=this.options.level&&(this.events.push($({},i,{timestamp:B.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},r.prototype.error=function(e){this.log(Be.ERROR,e)},r.prototype.info=function(e){this.log(Be.INFO,e)},r.prototype.debug=function(e){this.log(Be.DEBUG,e)},r.prototype.isEmpty=function(){return this.events.length===0},r.prototype.send=function(e,i){var s=this,u=$({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],e(u,function(l,d){l||s.sent++,i&&i(l,d)}),!0},r.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},r}(),ms=ys,bs=function(){function r(e,i,s,u){this.name=e,this.priority=i,this.transport=s,this.options=u||{}}return r.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},r.prototype.connect=function(e,i){var s=this;if(this.isSupported()){if(this.priority<e)return kn(new F,i)}else return kn(new K,i);var u=!1,l=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),d=null,v=function(){l.unbind("initialized",v),l.connect()},S=function(){d=ne.createHandshake(l,function(X){u=!0,N(),i(null,X)})},b=function(X){N(),i(X)},P=function(){N();var X;X=Le(l),i(new V(X))},N=function(){l.unbind("initialized",v),l.unbind("open",S),l.unbind("error",b),l.unbind("closed",P)};return l.bind("initialized",v),l.bind("open",S),l.bind("error",b),l.bind("closed",P),l.initialize(),{abort:function(){u||(N(),d?d.close():l.close())},forceMinPriority:function(X){u||s.priority<X&&(d?d.close():l.close())}}},r}(),_s=bs;function kn(r,e){return B.defer(function(){e(r)}),{abort:function(){},forceMinPriority:function(){}}}var ws=I.Transports,Ss=function(r,e,i,s,u,l){var d=ws[i];if(!d)throw new G(i);var v=(!r.enabledTransports||sn(r.enabledTransports,e)!==-1)&&(!r.disabledTransports||sn(r.disabledTransports,e)===-1),S;return v?(u=Object.assign({ignoreNullOrigin:r.ignoreNullOrigin},u),S=new _s(e,s,l?l.getAssistant(d):d,u)):S=ks,S},ks={isSupported:function(){return!1},connect:function(r,e){var i=B.defer(function(){e(new K)});return{abort:function(){i.ensureAborted()},forceMinPriority:function(){}}}};function Ts(r){if(r==null)throw"You must pass an options object";if(r.cluster==null)throw"Options object must provide a cluster";"disableStats"in r&&R.warn("The disableStats option is deprecated in favor of enableStats")}var Cs=function(r,e){var i="socket_id="+encodeURIComponent(r.socketId);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Is=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(e,i){var s=Cs(e,r);I.getAuthorizers()[r.transport](I,s,r,y.UserAuthentication,i)}},Es=Is,As=function(r,e){var i="socket_id="+encodeURIComponent(r.socketId);i+="&channel_name="+encodeURIComponent(r.channelName);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Ps=function(r){if(typeof I.getAuthorizers()[r.transport]>"u")throw"'"+r.transport+"' is not a recognized auth transport";return function(e,i){var s=As(e,r);I.getAuthorizers()[r.transport](I,s,r,y.ChannelAuthorization,i)}},Os=Ps,xs=function(r,e,i){var s={authTransport:e.transport,authEndpoint:e.endpoint,auth:{params:e.params,headers:e.headers}};return function(u,l){var d=r.channel(u.channelName),v=i(d,s);v.authorize(u.socketId,l)}},_e=function(){return _e=Object.assign||function(r){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(r[u]=e[u])}return r},_e.apply(this,arguments)};function Ds(r,e){var i={activityTimeout:r.activityTimeout||g.activityTimeout,cluster:r.cluster,httpPath:r.httpPath||g.httpPath,httpPort:r.httpPort||g.httpPort,httpsPort:r.httpsPort||g.httpsPort,pongTimeout:r.pongTimeout||g.pongTimeout,statsHost:r.statsHost||g.stats_host,unavailableTimeout:r.unavailableTimeout||g.unavailableTimeout,wsPath:r.wsPath||g.wsPath,wsPort:r.wsPort||g.wsPort,wssPort:r.wssPort||g.wssPort,enableStats:Ms(r),httpHost:Rs(r),useTLS:js(r),wsHost:Ns(r),userAuthenticator:Bs(r),channelAuthorizer:Hs(r,e)};return"disabledTransports"in r&&(i.disabledTransports=r.disabledTransports),"enabledTransports"in r&&(i.enabledTransports=r.enabledTransports),"ignoreNullOrigin"in r&&(i.ignoreNullOrigin=r.ignoreNullOrigin),"timelineParams"in r&&(i.timelineParams=r.timelineParams),"nacl"in r&&(i.nacl=r.nacl),i}function Rs(r){return r.httpHost?r.httpHost:r.cluster?"sockjs-"+r.cluster+".pusher.com":g.httpHost}function Ns(r){return r.wsHost?r.wsHost:Ls(r.cluster)}function Ls(r){return"ws-"+r+".pusher.com"}function js(r){return I.getProtocol()==="https:"?!0:r.forceTLS!==!1}function Ms(r){return"enableStats"in r?r.enableStats:"disableStats"in r?!r.disableStats:!1}function Bs(r){var e=_e(_e({},g.userAuthentication),r.userAuthentication);return"customHandler"in e&&e.customHandler!=null?e.customHandler:Es(e)}function Fs(r,e){var i;return"channelAuthorization"in r?i=_e(_e({},g.channelAuthorization),r.channelAuthorization):(i={transport:r.authTransport||g.authTransport,endpoint:r.authEndpoint||g.authEndpoint},"auth"in r&&("params"in r.auth&&(i.params=r.auth.params),"headers"in r.auth&&(i.headers=r.auth.headers)),"authorizer"in r&&(i.customHandler=xs(e,i,r.authorizer))),i}function Hs(r,e){var i=Fs(r,e);return"customHandler"in i&&i.customHandler!=null?i.customHandler:Os(i)}var $s=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Us=function(r){$s(e,r);function e(i){var s=r.call(this,function(u,l){R.debug("No callbacks on watchlist events for "+u)})||this;return s.pusher=i,s.bindWatchlistInternalEvent(),s}return e.prototype.handleEvent=function(i){var s=this;i.data.events.forEach(function(u){s.emit(u.name,u)})},e.prototype.bindWatchlistInternalEvent=function(){var i=this;this.pusher.connection.bind("message",function(s){var u=s.event;u==="pusher_internal:watchlist_events"&&i.handleEvent(s)})},e}(te),qs=Us;function zs(){var r,e,i=new Promise(function(s,u){r=s,e=u});return{promise:i,resolve:r,reject:e}}var Ws=zs,Vs=function(){var r=function(e,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},r(e,i)};return function(e,i){r(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ks=function(r){Vs(e,r);function e(i){var s=r.call(this,function(u,l){R.debug("No callbacks on user for "+u)})||this;return s.signin_requested=!1,s.user_data=null,s.serverToUserChannel=null,s.signinDonePromise=null,s._signinDoneResolve=null,s._onAuthorize=function(u,l){if(u){R.warn("Error during signin: "+u),s._cleanup();return}s.pusher.send_event("pusher:signin",{auth:l.auth,user_data:l.user_data})},s.pusher=i,s.pusher.connection.bind("state_change",function(u){var l=u.previous,d=u.current;l!=="connected"&&d==="connected"&&s._signin(),l==="connected"&&d!=="connected"&&(s._cleanup(),s._newSigninPromiseIfNeeded())}),s.watchlist=new qs(i),s.pusher.connection.bind("message",function(u){var l=u.event;l==="pusher:signin_success"&&s._onSigninSuccess(u.data),s.serverToUserChannel&&s.serverToUserChannel.name===u.channel&&s.serverToUserChannel.handleEvent(u)}),s}return e.prototype.signin=function(){this.signin_requested||(this.signin_requested=!0,this._signin())},e.prototype._signin=function(){this.signin_requested&&(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))},e.prototype._onSigninSuccess=function(i){try{this.user_data=JSON.parse(i.user_data)}catch{R.error("Failed parsing user data after signin: "+i.user_data),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){R.error("user_data doesn't contain an id. user_data: "+this.user_data),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()},e.prototype._subscribeChannels=function(){var i=this,s=function(u){u.subscriptionPending&&u.subscriptionCancelled?u.reinstateSubscription():!u.subscriptionPending&&i.pusher.connection.state==="connected"&&u.subscribe()};this.serverToUserChannel=new ct("#server-to-user-"+this.user_data.id,this.pusher),this.serverToUserChannel.bind_global(function(u,l){u.indexOf("pusher_internal:")===0||u.indexOf("pusher:")===0||i.emit(u,l)}),s(this.serverToUserChannel)},e.prototype._cleanup=function(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()},e.prototype._newSigninPromiseIfNeeded=function(){if(this.signin_requested&&!(this.signinDonePromise&&!this.signinDonePromise.done)){var i=Ws(),s=i.promise,u=i.resolve;s.done=!1;var l=function(){s.done=!0};s.then(l).catch(l),this.signinDonePromise=s,this._signinDoneResolve=u}},e}(te),Gs=Ks,Tn=function(){function r(e,i){var s=this;Js(e),Ts(i),this.key=e,this.config=Ds(i,this),this.channels=ne.createChannels(),this.global_emitter=new te,this.sessionID=I.randomInt(1e9),this.timeline=new ms(this.key,this.sessionID,{cluster:this.config.cluster,features:r.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:Be.INFO,version:g.VERSION}),this.config.enableStats&&(this.timelineSender=ne.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+I.TimelineTransport.name}));var u=function(l){return I.getDefaultStrategy(s.config,l,Ss)};this.connection=ne.createConnectionManager(this.key,{getStrategy:u,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:!!this.config.useTLS}),this.connection.bind("connected",function(){s.subscribeAll(),s.timelineSender&&s.timelineSender.send(s.connection.isUsingTLS())}),this.connection.bind("message",function(l){var d=l.event,v=d.indexOf("pusher_internal:")===0;if(l.channel){var S=s.channel(l.channel);S&&S.handleEvent(l)}v||s.global_emitter.emit(l.event,l.data)}),this.connection.bind("connecting",function(){s.channels.disconnect()}),this.connection.bind("disconnected",function(){s.channels.disconnect()}),this.connection.bind("error",function(l){R.warn(l)}),r.instances.push(this),this.timeline.info({instances:r.instances.length}),this.user=new Gs(this),r.isReady&&this.connect()}return r.ready=function(){r.isReady=!0;for(var e=0,i=r.instances.length;e<i;e++)r.instances[e].connect()},r.getClientFeatures=function(){return an(ln({ws:I.Transports.ws},function(e){return e.isSupported({})}))},r.prototype.channel=function(e){return this.channels.find(e)},r.prototype.allChannels=function(){return this.channels.all()},r.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var e=this.connection.isUsingTLS(),i=this.timelineSender;this.timelineSenderTimer=new fi(6e4,function(){i.send(e)})}},r.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},r.prototype.bind=function(e,i,s){return this.global_emitter.bind(e,i,s),this},r.prototype.unbind=function(e,i,s){return this.global_emitter.unbind(e,i,s),this},r.prototype.bind_global=function(e){return this.global_emitter.bind_global(e),this},r.prototype.unbind_global=function(e){return this.global_emitter.unbind_global(e),this},r.prototype.unbind_all=function(e){return this.global_emitter.unbind_all(),this},r.prototype.subscribeAll=function(){var e;for(e in this.channels.channels)this.channels.channels.hasOwnProperty(e)&&this.subscribe(e)},r.prototype.subscribe=function(e){var i=this.channels.add(e,this);return i.subscriptionPending&&i.subscriptionCancelled?i.reinstateSubscription():!i.subscriptionPending&&this.connection.state==="connected"&&i.subscribe(),i},r.prototype.unsubscribe=function(e){var i=this.channels.find(e);i&&i.subscriptionPending?i.cancelSubscription():(i=this.channels.remove(e),i&&i.subscribed&&i.unsubscribe())},r.prototype.send_event=function(e,i,s){return this.connection.send_event(e,i,s)},r.prototype.shouldUseTLS=function(){return this.config.useTLS},r.prototype.signin=function(){this.user.signin()},r.instances=[],r.isReady=!1,r.logToConsole=!1,r.Runtime=I,r.ScriptReceivers=I.ScriptReceivers,r.DependenciesReceivers=I.DependenciesReceivers,r.auth_callbacks=I.auth_callbacks,r}(),gt=a.default=Tn;function Js(r){if(r==null)throw"You must pass your app key when you instantiate Pusher."}I.setup(Tn)}])})})(dh);const ur=ua(Ft),Ke=class{constructor(){this.cancelled=!1,this.notify=()=>{Ke.listeners.forEach(t=>{this.cancelled||t.callback(this)})}}};let it=Ke;it.listeners=[];it.addListener=function(t){Ke.listeners.push(t),Ke.listeners.sort((n,o)=>n.priority-o.priority)};class ph{}const Ge=class{constructor(){this.cancelled=!1,this.notify=()=>{Ge.listeners.forEach(t=>{this.cancelled||t.callback(this)})}}};let tn=Ge;tn.listeners=[];tn.addListener=function(n){Ge.listeners.push(n),Ge.listeners.sort((o,a)=>o.priority-a.priority)};const Je=class{constructor(){this.cancelled=!1,this.notify=()=>{Je.listeners.forEach(t=>{this.cancelled||t.callback(this)})}}};let nn=Je;nn.listeners=[];nn.addListener=function(n){Je.listeners.push(n),Je.listeners.sort((o,a)=>o.priority-a.priority)};const Pt={broadcaster:"pusher",key:"app-key",cluster:"mt1",forceTLS:!1,wsHost:"localhost",wsPort:"10010",wssPort:"10010",authEndpoint:"/broadcasting/auth"};let He=null,Xe=null;function gh(){hr(()=>{vh()})}function vh(){var t,n,o,a,c,h,f,p;He!==((a=(o=(n=(t=Rn())==null?void 0:t.props)==null?void 0:n.auth)==null?void 0:o.user)==null?void 0:a.id)&&(Xe&&window.Echo.leave(Xe),He=(p=(f=(h=(c=Rn())==null?void 0:c.props)==null?void 0:h.auth)==null?void 0:f.user)==null?void 0:p.id,He&&yh())}function yh(){window.Echo=new fh({...Pt,client:new ur(Pt.key,Pt)}),Xe=`notificacoes.${He}`,window.Echo.private(Xe).listen(".ConversaWebSocket",t=>mh(t)).listen(".NotificacaoWebSocket",t=>bh(t)),window.Pusher=ur}function mh(t){switch(t.notification.tipo){case"nova-mensagem":wh(t);break;case"mensagem-excluida":_h(t);break}}function bh(t){const n=new it;n.notificacao=new ph,n.notificacao.id=t.notification.notificacao.id,n.notificacao.status=t.notification.notificacao.status,n.notificacao.usuario_id=t.notification.notificacao.usuario_id,n.notificacao.titulo=t.notification.notificacao.titulo,n.notificacao.texto=t.notification.notificacao.texto,n.notify()}function _h(t){const n=new tn;n.mensagem_id=t.notification.mensagem.id,n.equipamento_conversa_id=t.notification.mensagem.equipamento_conversa_id,n.notify()}function wh(t){const n=new nn;n.mensagem_id=t.notification.mensagem.id,n.mensagem=t.notification.mensagem.mensagem,n.usuario_id=t.notification.mensagem.usuario_id,n.equipamento_conversa_id=t.notification.mensagem.equipamento_conversa_id,n.notify()}function Sh(){gh(),eh().iniciarNotificacoes()}const kh={class:"toast-header"},Th={class:"me-auto"},Ch=Ie("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Ih={class:"toast-body"},Eh=Ye({__name:"Notificacao",props:{id:Number,titulo:String,texto:String},setup(t){const n=t,o=Ht(null);let a;hr(()=>{a=new la(o.value),a.show({autohide:!1})});function c(){ha.visit(`/notificacao/${n.id}`)}return(h,f)=>(de(),Ae("div",{ref_key:"toast",ref:o,class:"toast notificacao",role:"alert",onClick:c},[Ie("div",kh,[Ie("span",Th,Nn(t.titulo),1),Ch]),Ie("div",Ih,Nn(t.texto),1)],512))}});class Ah{constructor(n,o=10){this.priority=o,this.callback=n}}const Ph={class:"toast-container position-fixed top-0 end-0 p-3"},Oh=Ye({__name:"Notificacoes",setup(t){Sh();const n=Ht([]);it.addListener(new Ah(o));function o(a){n.value.push(a.notificacao),setTimeout(()=>{const c=n.value.indexOf(a.notificacao);n.value.splice(c,1)},1e5)}return(a,c)=>(de(),Ae("div",Ph,[(de(!0),Ae(fa,null,da(n.value,h=>(de(),lr(Eh,pa(ga({key:h.id},h)),null,16))),128))]))}}),xh={class:"base-layout"},Lh=Ye({__name:"BaseLayout",setup(t){return(n,o)=>(de(),Ae("div",xh,[va(Oh),ya(n.$slots,"default")]))}}),jh=(t,n)=>{const o=t.__vccOpts||t;for(const[a,c]of n)o[a]=c;return o};export{Ah as L,tn as M,nn as N,Lh as _,Nh as a,jh as b,eh as g};

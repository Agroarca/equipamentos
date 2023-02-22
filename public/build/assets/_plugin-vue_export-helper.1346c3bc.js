var Ys=Object.defineProperty;var Qs=(r,t,o)=>t in r?Ys(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var R=(r,t,o)=>(Qs(r,typeof t!="symbol"?t+"":t,o),o);import{l as Lt,o as ge,a as er,w as Zs,h as Re,j as ea,T as ta,b as Pe,z as na,m as Nt,J as In,A as ra,B as ia,t as En,C as tr,D as oa,F as nr,r as sa,E as aa,G as ca,f as ua,s as la}from"./app.d53ed1f4.js";const ha={key:0,class:"loader"},fa=Pe("div",{class:"elemento"},null,-1),da=[fa],bh={__name:"Loader",setup(r){const t=Lt(!1);function o(){t.value=!0}function c(){t.value=!1}return window.loader={show:o,hide:c,active:t},(a,h)=>(ge(),er(ta,{name:"loader",duration:"300"},{default:Zs(()=>[t.value?(ge(),Re("div",ha,da)):ea("",!0)]),_:1}))}};function Ct(r){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(r)}function j(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function An(r,t){for(var o=0;o<t.length;o++){var c=t[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function M(r,t,o){return t&&An(r.prototype,t),o&&An(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function It(){return It=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},It.apply(this,arguments)}function z(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&Et(r,t)}function ze(r){return ze=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},ze(r)}function Et(r,t){return Et=Object.setPrototypeOf||function(c,a){return c.__proto__=a,c},Et(r,t)}function pa(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ga(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function va(r,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ga(r)}function V(r){var t=pa();return function(){var c=ze(r),a;if(t){var h=ze(this).constructor;a=Reflect.construct(c,arguments,h)}else a=c.apply(this,arguments);return va(this,a)}}var jt=function(){function r(){j(this,r)}return M(r,[{key:"listenForWhisper",value:function(o,c){return this.listen(".client-"+o,c)}},{key:"notification",value:function(o){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",o)}},{key:"stopListeningForWhisper",value:function(o,c){return this.stopListening(".client-"+o,c)}}]),r}(),rr=function(){function r(t){j(this,r),this.setNamespace(t)}return M(r,[{key:"format",value:function(o){return o.charAt(0)==="."||o.charAt(0)==="\\"?o.substr(1):(this.namespace&&(o=this.namespace+"."+o),o.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(o){this.namespace=o}}]),r}(),Xe=function(r){z(o,r);var t=V(o);function o(c,a,h){var f;return j(this,o),f=t.call(this),f.name=a,f.pusher=c,f.options=h,f.eventFormatter=new rr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(a,h){return this.on(this.eventFormatter.format(a),h),this}},{key:"listenToAll",value:function(a){var h=this;return this.subscription.bind_global(function(f,g){if(!f.startsWith("pusher:")){var p=h.options.namespace.replace(/\./g,"\\"),w=f.startsWith(p)?f.substring(p.length+1):"."+f;a(w,g)}}),this}},{key:"stopListening",value:function(a,h){return h?this.subscription.unbind(this.eventFormatter.format(a),h):this.subscription.unbind(this.eventFormatter.format(a)),this}},{key:"stopListeningToAll",value:function(a){return a?this.subscription.unbind_global(a):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(a){return this.on("pusher:subscription_succeeded",function(){a()}),this}},{key:"error",value:function(a){return this.on("pusher:subscription_error",function(h){a(h)}),this}},{key:"on",value:function(a,h){return this.subscription.bind(a,h),this}}]),o}(jt),ya=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(a,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(a),h),this}}]),o}(Xe),ma=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(a,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(a),h),this}}]),o}(Xe),ba=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(a){return this.on("pusher:subscription_succeeded",function(h){a(Object.keys(h.members).map(function(f){return h.members[f]}))}),this}},{key:"joining",value:function(a){return this.on("pusher:member_added",function(h){a(h.info)}),this}},{key:"leaving",value:function(a){return this.on("pusher:member_removed",function(h){a(h.info)}),this}},{key:"whisper",value:function(a,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(a),h),this}}]),o}(Xe),ir=function(r){z(o,r);var t=V(o);function o(c,a,h){var f;return j(this,o),f=t.call(this),f.events={},f.listeners={},f.name=a,f.socket=c,f.options=h,f.eventFormatter=new rr(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(a,h){return this.on(this.eventFormatter.format(a),h),this}},{key:"stopListening",value:function(a,h){return this.unbindEvent(this.eventFormatter.format(a),h),this}},{key:"subscribed",value:function(a){return this.on("connect",function(h){a(h)}),this}},{key:"error",value:function(a){return this}},{key:"on",value:function(a,h){var f=this;return this.listeners[a]=this.listeners[a]||[],this.events[a]||(this.events[a]=function(g,p){f.name===g&&f.listeners[a]&&f.listeners[a].forEach(function(w){return w(p)})},this.socket.on(a,this.events[a])),this.listeners[a].push(h),this}},{key:"unbind",value:function(){var a=this;Object.keys(this.events).forEach(function(h){a.unbindEvent(h)})}},{key:"unbindEvent",value:function(a,h){this.listeners[a]=this.listeners[a]||[],h&&(this.listeners[a]=this.listeners[a].filter(function(f){return f!==h})),(!h||this.listeners[a].length===0)&&(this.events[a]&&(this.socket.removeListener(a,this.events[a]),delete this.events[a]),delete this.listeners[a])}}]),o}(jt),or=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(a,h){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(a),data:h}),this}}]),o}(ir),_a=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(a){return this.on("presence:subscribed",function(h){a(h.map(function(f){return f.user_info}))}),this}},{key:"joining",value:function(a){return this.on("presence:joining",function(h){return a(h.user_info)}),this}},{key:"leaving",value:function(a){return this.on("presence:leaving",function(h){return a(h.user_info)}),this}}]),o}(or),Ve=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(a,h){return this}},{key:"listenToAll",value:function(a){return this}},{key:"stopListening",value:function(a,h){return this}},{key:"subscribed",value:function(a){return this}},{key:"error",value:function(a){return this}},{key:"on",value:function(a,h){return this}}]),o}(jt),Pn=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(a,h){return this}}]),o}(Ve),wa=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(a){return this}},{key:"joining",value:function(a){return this}},{key:"leaving",value:function(a){return this}},{key:"whisper",value:function(a,h){return this}}]),o}(Ve),Mt=function(){function r(t){j(this,r),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(t),this.connect()}return M(r,[{key:"setOptions",value:function(o){this.options=It(this._defaultOptions,o);var c=this.csrfToken();return c&&(this.options.auth.headers["X-CSRF-TOKEN"]=c,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=c),c=this.options.bearerToken,c&&(this.options.auth.headers.Authorization="Bearer "+c,this.options.userAuthentication.headers.Authorization="Bearer "+c),o}},{key:"csrfToken",value:function(){var o;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(o=document.querySelector('meta[name="csrf-token"]'))?o.getAttribute("content"):null}}]),r}(),Sa=function(r){z(o,r);var t=V(o);function o(){var c;return j(this,o),c=t.apply(this,arguments),c.channels={},c}return M(o,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(a,h,f){return this.channel(a).listen(h,f)}},{key:"channel",value:function(a){return this.channels[a]||(this.channels[a]=new Xe(this.pusher,a,this.options)),this.channels[a]}},{key:"privateChannel",value:function(a){return this.channels["private-"+a]||(this.channels["private-"+a]=new ya(this.pusher,"private-"+a,this.options)),this.channels["private-"+a]}},{key:"encryptedPrivateChannel",value:function(a){return this.channels["private-encrypted-"+a]||(this.channels["private-encrypted-"+a]=new ma(this.pusher,"private-encrypted-"+a,this.options)),this.channels["private-encrypted-"+a]}},{key:"presenceChannel",value:function(a){return this.channels["presence-"+a]||(this.channels["presence-"+a]=new ba(this.pusher,"presence-"+a,this.options)),this.channels["presence-"+a]}},{key:"leave",value:function(a){var h=this,f=[a,"private-"+a,"private-encrypted-"+a,"presence-"+a];f.forEach(function(g,p){h.leaveChannel(g)})}},{key:"leaveChannel",value:function(a){this.channels[a]&&(this.channels[a].unsubscribe(),delete this.channels[a])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),o}(Mt),ka=function(r){z(o,r);var t=V(o);function o(){var c;return j(this,o),c=t.apply(this,arguments),c.channels={},c}return M(o,[{key:"connect",value:function(){var a=this,h=this.getSocketIO();return this.socket=h(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(a.channels).forEach(function(f){f.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(a,h,f){return this.channel(a).listen(h,f)}},{key:"channel",value:function(a){return this.channels[a]||(this.channels[a]=new ir(this.socket,a,this.options)),this.channels[a]}},{key:"privateChannel",value:function(a){return this.channels["private-"+a]||(this.channels["private-"+a]=new or(this.socket,"private-"+a,this.options)),this.channels["private-"+a]}},{key:"presenceChannel",value:function(a){return this.channels["presence-"+a]||(this.channels["presence-"+a]=new _a(this.socket,"presence-"+a,this.options)),this.channels["presence-"+a]}},{key:"leave",value:function(a){var h=this,f=[a,"private-"+a,"presence-"+a];f.forEach(function(g){h.leaveChannel(g)})}},{key:"leaveChannel",value:function(a){this.channels[a]&&(this.channels[a].unsubscribe(),delete this.channels[a])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),o}(Mt),Ta=function(r){z(o,r);var t=V(o);function o(){var c;return j(this,o),c=t.apply(this,arguments),c.channels={},c}return M(o,[{key:"connect",value:function(){}},{key:"listen",value:function(a,h,f){return new Ve}},{key:"channel",value:function(a){return new Ve}},{key:"privateChannel",value:function(a){return new Pn}},{key:"encryptedPrivateChannel",value:function(a){return new Pn}},{key:"presenceChannel",value:function(a){return new wa}},{key:"leave",value:function(a){}},{key:"leaveChannel",value:function(a){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),o}(Mt),Ca=function(){function r(t){j(this,r),this.options=t,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return M(r,[{key:"channel",value:function(o){return this.connector.channel(o)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new Sa(this.options):this.options.broadcaster=="socket.io"?this.connector=new ka(this.options):this.options.broadcaster=="null"?this.connector=new Ta(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(o){return this.connector.presenceChannel(o)}},{key:"leave",value:function(o){this.connector.leave(o)}},{key:"leaveChannel",value:function(o){this.connector.leaveChannel(o)}},{key:"leaveAllChannels",value:function(){for(var o in this.connector.channels)this.leaveChannel(o)}},{key:"listen",value:function(o,c,a){return this.connector.listen(o,c,a)}},{key:"private",value:function(o){return this.connector.privateChannel(o)}},{key:"encryptedPrivate",value:function(o){return this.connector.encryptedPrivateChannel(o)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":Ct(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var o=this;Vue.http.interceptors.push(function(c,a){o.socketId()&&c.headers.set("X-Socket-ID",o.socketId()),a()})}},{key:"registerAxiosRequestInterceptor",value:function(){var o=this;axios.interceptors.request.use(function(c){return o.socketId()&&(c.headers["X-Socket-Id"]=o.socketId()),c})}},{key:"registerjQueryAjaxSetup",value:function(){var o=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(c,a,h){o.socketId()&&h.setRequestHeader("X-Socket-Id",o.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var o=this;document.addEventListener("turbo:before-fetch-request",function(c){c.detail.fetchOptions.headers["X-Socket-Id"]=o.socketId()})}}]),r}(),sr={exports:{}};/*!
 * Pusher JavaScript Library v8.0.1
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */(function(r,t){(function(c,a){r.exports=a()})(window,function(){return function(o){var c={};function a(h){if(c[h])return c[h].exports;var f=c[h]={i:h,l:!1,exports:{}};return o[h].call(f.exports,f,f.exports,a),f.l=!0,f.exports}return a.m=o,a.c=c,a.d=function(h,f,g){a.o(h,f)||Object.defineProperty(h,f,{enumerable:!0,get:g})},a.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},a.t=function(h,f){if(f&1&&(h=a(h)),f&8||f&4&&typeof h=="object"&&h&&h.__esModule)return h;var g=Object.create(null);if(a.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:h}),f&2&&typeof h!="string")for(var p in h)a.d(g,p,function(w){return h[w]}.bind(null,p));return g},a.n=function(h){var f=h&&h.__esModule?function(){return h.default}:function(){return h};return a.d(f,"a",f),f},a.o=function(h,f){return Object.prototype.hasOwnProperty.call(h,f)},a.p="",a(a.s=2)}([function(o,c,a){var h=this&&this.__extends||function(){var C=function(y,m){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,D){A.__proto__=D}||function(A,D){for(var B in D)D.hasOwnProperty(B)&&(A[B]=D[B])},C(y,m)};return function(y,m){C(y,m);function A(){this.constructor=y}y.prototype=m===null?Object.create(m):(A.prototype=m.prototype,new A)}}();Object.defineProperty(c,"__esModule",{value:!0});var f=256,g=function(){function C(y){y===void 0&&(y="="),this._paddingCharacter=y}return C.prototype.encodedLength=function(y){return this._paddingCharacter?(y+2)/3*4|0:(y*8+5)/6|0},C.prototype.encode=function(y){for(var m="",A=0;A<y.length-2;A+=3){var D=y[A]<<16|y[A+1]<<8|y[A+2];m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),m+=this._encodeByte(D>>>1*6&63),m+=this._encodeByte(D>>>0*6&63)}var B=y.length-A;if(B>0){var D=y[A]<<16|(B===2?y[A+1]<<8:0);m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),B===2?m+=this._encodeByte(D>>>1*6&63):m+=this._paddingCharacter||"",m+=this._paddingCharacter||""}return m},C.prototype.maxDecodedLength=function(y){return this._paddingCharacter?y/4*3|0:(y*6+7)/8|0},C.prototype.decodedLength=function(y){return this.maxDecodedLength(y.length-this._getPaddingLength(y))},C.prototype.decode=function(y){if(y.length===0)return new Uint8Array(0);for(var m=this._getPaddingLength(y),A=y.length-m,D=new Uint8Array(this.maxDecodedLength(A)),B=0,$=0,K=0,ee=0,J=0,G=0,X=0;$<A-4;$+=4)ee=this._decodeChar(y.charCodeAt($+0)),J=this._decodeChar(y.charCodeAt($+1)),G=this._decodeChar(y.charCodeAt($+2)),X=this._decodeChar(y.charCodeAt($+3)),D[B++]=ee<<2|J>>>4,D[B++]=J<<4|G>>>2,D[B++]=G<<6|X,K|=ee&f,K|=J&f,K|=G&f,K|=X&f;if($<A-1&&(ee=this._decodeChar(y.charCodeAt($)),J=this._decodeChar(y.charCodeAt($+1)),D[B++]=ee<<2|J>>>4,K|=ee&f,K|=J&f),$<A-2&&(G=this._decodeChar(y.charCodeAt($+2)),D[B++]=J<<4|G>>>2,K|=G&f),$<A-3&&(X=this._decodeChar(y.charCodeAt($+3)),D[B++]=G<<6|X,K|=X&f),K!==0)throw new Error("Base64Coder: incorrect characters for decoding");return D},C.prototype._encodeByte=function(y){var m=y;return m+=65,m+=25-y>>>8&0-65-26+97,m+=51-y>>>8&26-97-52+48,m+=61-y>>>8&52-48-62+43,m+=62-y>>>8&62-43-63+47,String.fromCharCode(m)},C.prototype._decodeChar=function(y){var m=f;return m+=(42-y&y-44)>>>8&-f+y-43+62,m+=(46-y&y-48)>>>8&-f+y-47+63,m+=(47-y&y-58)>>>8&-f+y-48+52,m+=(64-y&y-91)>>>8&-f+y-65+0,m+=(96-y&y-123)>>>8&-f+y-97+26,m},C.prototype._getPaddingLength=function(y){var m=0;if(this._paddingCharacter){for(var A=y.length-1;A>=0&&y[A]===this._paddingCharacter;A--)m++;if(y.length<4||m>2)throw new Error("Base64Coder: incorrect padding")}return m},C}();c.Coder=g;var p=new g;function w(C){return p.encode(C)}c.encode=w;function _(C){return p.decode(C)}c.decode=_;var E=function(C){h(y,C);function y(){return C!==null&&C.apply(this,arguments)||this}return y.prototype._encodeByte=function(m){var A=m;return A+=65,A+=25-m>>>8&0-65-26+97,A+=51-m>>>8&26-97-52+48,A+=61-m>>>8&52-48-62+45,A+=62-m>>>8&62-45-63+95,String.fromCharCode(A)},y.prototype._decodeChar=function(m){var A=f;return A+=(44-m&m-46)>>>8&-f+m-45+62,A+=(94-m&m-96)>>>8&-f+m-95+63,A+=(47-m&m-58)>>>8&-f+m-48+52,A+=(64-m&m-91)>>>8&-f+m-65+0,A+=(96-m&m-123)>>>8&-f+m-97+26,A},y}(g);c.URLSafeCoder=E;var T=new E;function k(C){return T.encode(C)}c.encodeURLSafe=k;function O(C){return T.decode(C)}c.decodeURLSafe=O,c.encodedLength=function(C){return p.encodedLength(C)},c.maxDecodedLength=function(C){return p.maxDecodedLength(C)},c.decodedLength=function(C){return p.decodedLength(C)}},function(o,c,a){Object.defineProperty(c,"__esModule",{value:!0});var h="utf8: invalid string",f="utf8: invalid source encoding";function g(_){for(var E=new Uint8Array(p(_)),T=0,k=0;k<_.length;k++){var O=_.charCodeAt(k);O<128?E[T++]=O:O<2048?(E[T++]=192|O>>6,E[T++]=128|O&63):O<55296?(E[T++]=224|O>>12,E[T++]=128|O>>6&63,E[T++]=128|O&63):(k++,O=(O&1023)<<10,O|=_.charCodeAt(k)&1023,O+=65536,E[T++]=240|O>>18,E[T++]=128|O>>12&63,E[T++]=128|O>>6&63,E[T++]=128|O&63)}return E}c.encode=g;function p(_){for(var E=0,T=0;T<_.length;T++){var k=_.charCodeAt(T);if(k<128)E+=1;else if(k<2048)E+=2;else if(k<55296)E+=3;else if(k<=57343){if(T>=_.length-1)throw new Error(h);T++,E+=4}else throw new Error(h)}return E}c.encodedLength=p;function w(_){for(var E=[],T=0;T<_.length;T++){var k=_[T];if(k&128){var O=void 0;if(k<224){if(T>=_.length)throw new Error(f);var C=_[++T];if((C&192)!==128)throw new Error(f);k=(k&31)<<6|C&63,O=128}else if(k<240){if(T>=_.length-1)throw new Error(f);var C=_[++T],y=_[++T];if((C&192)!==128||(y&192)!==128)throw new Error(f);k=(k&15)<<12|(C&63)<<6|y&63,O=2048}else if(k<248){if(T>=_.length-2)throw new Error(f);var C=_[++T],y=_[++T],m=_[++T];if((C&192)!==128||(y&192)!==128||(m&192)!==128)throw new Error(f);k=(k&15)<<18|(C&63)<<12|(y&63)<<6|m&63,O=65536}else throw new Error(f);if(k<O||k>=55296&&k<=57343)throw new Error(f);if(k>=65536){if(k>1114111)throw new Error(f);k-=65536,E.push(String.fromCharCode(55296|k>>10)),k=56320|k&1023}}E.push(String.fromCharCode(k))}return E.join("")}c.decode=w},function(o,c,a){o.exports=a(3).default},function(o,c,a){a.r(c);var h=function(){function n(e,i){this.lastId=0,this.prefix=e,this.name=i}return n.prototype.create=function(e){this.lastId++;var i=this.lastId,s=this.prefix+i,u=this.name+"["+i+"]",l=!1,d=function(){l||(e.apply(null,arguments),l=!0)};return this[i]=d,{number:i,id:s,name:u,callback:d}},n.prototype.remove=function(e){delete this[e.number]},n}(),f=new h("_pusher_script_","Pusher.ScriptReceivers"),g={VERSION:"8.0.1",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},p=g,w=function(){function n(e){this.options=e,this.receivers=e.receivers||f,this.loading={}}return n.prototype.load=function(e,i,s){var u=this;if(u.loading[e]&&u.loading[e].length>0)u.loading[e].push(s);else{u.loading[e]=[s];var l=I.createScriptRequest(u.getPath(e,i)),d=u.receivers.create(function(v){if(u.receivers.remove(d),u.loading[e]){var S=u.loading[e];delete u.loading[e];for(var b=function(N){N||l.cleanup()},P=0;P<S.length;P++)S[P](v,b)}});l.send(d)}},n.prototype.getRoot=function(e){var i,s=I.getDocument().location.protocol;return e&&e.useTLS||s==="https:"?i=this.options.cdn_https:i=this.options.cdn_http,i.replace(/\/*$/,"")+"/"+this.options.version},n.prototype.getPath=function(e,i){return this.getRoot(i)+"/"+e+this.options.suffix+".js"},n}(),_=w,E=new h("_pusher_dependencies","Pusher.DependenciesReceivers"),T=new _({cdn_http:p.cdn_http,cdn_https:p.cdn_https,version:p.VERSION,suffix:p.dependency_suffix,receivers:E}),k={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}},O=function(n){var e="See:",i=k.urls[n];if(!i)return"";var s;return i.fullUrl?s=i.fullUrl:i.path&&(s=k.baseUrl+i.path),s?e+" "+s:""},C={buildLogSuffix:O},y;(function(n){n.UserAuthentication="user-authentication",n.ChannelAuthorization="channel-authorization"})(y||(y={}));var m=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),A=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),D=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),B=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),$=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),K=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),ee=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),J=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),G=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),X=function(n){m(e,n);function e(i,s){var u=this.constructor,l=n.call(this,s)||this;return l.status=i,Object.setPrototypeOf(l,u.prototype),l}return e}(Error),Gr=function(n,e,i,s,u){var l=I.createXHR();l.open("POST",i.endpoint,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var d in i.headers)l.setRequestHeader(d,i.headers[d]);if(i.headersProvider!=null){var v=i.headersProvider();for(var d in v)l.setRequestHeader(d,v[d])}return l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){var S=void 0,b=!1;try{S=JSON.parse(l.responseText),b=!0}catch{u(new X(200,"JSON returned from "+s.toString()+" endpoint was invalid, yet status code was 200. Data was: "+l.responseText),null)}b&&u(null,S)}else{var P="";switch(s){case y.UserAuthentication:P=C.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:P="Clients must be authorized to join private or presence channels. "+C.buildLogSuffix("authorizationEndpoint");break}u(new X(l.status,"Unable to retrieve auth string from "+s.toString()+" endpoint - "+("received status: "+l.status+" from "+i.endpoint+". "+P)),null)}},l.send(e),l},Jr=Gr;function Xr(n){return ei(Qr(n))}var Te=String.fromCharCode,Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Yr=function(n){var e=n.charCodeAt(0);return e<128?n:e<2048?Te(192|e>>>6)+Te(128|e&63):Te(224|e>>>12&15)+Te(128|e>>>6&63)+Te(128|e&63)},Qr=function(n){return n.replace(/[^\x00-\x7F]/g,Yr)},Zr=function(n){var e=[0,2,1][n.length%3],i=n.charCodeAt(0)<<16|(n.length>1?n.charCodeAt(1):0)<<8|(n.length>2?n.charCodeAt(2):0),s=[Fe.charAt(i>>>18),Fe.charAt(i>>>12&63),e>=2?"=":Fe.charAt(i>>>6&63),e>=1?"=":Fe.charAt(i&63)];return s.join("")},ei=window.btoa||function(n){return n.replace(/[\s\S]{1,3}/g,Zr)},ti=function(){function n(e,i,s,u){var l=this;this.clear=i,this.timer=e(function(){l.timer&&(l.timer=u(l.timer))},s)}return n.prototype.isRunning=function(){return this.timer!==null},n.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},n}(),Xt=ti,Yt=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}();function ni(n){window.clearTimeout(n)}function ri(n){window.clearInterval(n)}var ue=function(n){Yt(e,n);function e(i,s){return n.call(this,setTimeout,ni,i,function(u){return s(),null})||this}return e}(Xt),ii=function(n){Yt(e,n);function e(i,s){return n.call(this,setInterval,ri,i,function(u){return s(),u})||this}return e}(Xt),oi={now:function(){return Date.now?Date.now():new Date().valueOf()},defer:function(n){return new ue(0,n)},method:function(n){var e=Array.prototype.slice.call(arguments,1);return function(i){return i[n].apply(i,e.concat(arguments))}}},F=oi;function U(n){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0;s<e.length;s++){var u=e[s];for(var l in u)u[l]&&u[l].constructor&&u[l].constructor===Object?n[l]=U(n[l]||{},u[l]):n[l]=u[l]}return n}function si(){for(var n=["Pusher"],e=0;e<arguments.length;e++)typeof arguments[e]=="string"?n.push(arguments[e]):n.push(He(arguments[e]));return n.join(" : ")}function Qt(n,e){var i=Array.prototype.indexOf;if(n===null)return-1;if(i&&n.indexOf===i)return n.indexOf(e);for(var s=0,u=n.length;s<u;s++)if(n[s]===e)return s;return-1}function te(n,e){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e(n[i],i,n)}function Zt(n){var e=[];return te(n,function(i,s){e.push(s)}),e}function ai(n){var e=[];return te(n,function(i){e.push(i)}),e}function Ce(n,e,i){for(var s=0;s<n.length;s++)e.call(i||window,n[s],s,n)}function en(n,e){for(var i=[],s=0;s<n.length;s++)i.push(e(n[s],s,n,i));return i}function ci(n,e){var i={};return te(n,function(s,u){i[u]=e(s)}),i}function tn(n,e){e=e||function(u){return!!u};for(var i=[],s=0;s<n.length;s++)e(n[s],s,n,i)&&i.push(n[s]);return i}function nn(n,e){var i={};return te(n,function(s,u){(e&&e(s,u,n,i)||Boolean(s))&&(i[u]=s)}),i}function ui(n){var e=[];return te(n,function(i,s){e.push([s,i])}),e}function rn(n,e){for(var i=0;i<n.length;i++)if(e(n[i],i,n))return!0;return!1}function li(n,e){for(var i=0;i<n.length;i++)if(!e(n[i],i,n))return!1;return!0}function hi(n){return ci(n,function(e){return typeof e=="object"&&(e=He(e)),encodeURIComponent(Xr(e.toString()))})}function fi(n){var e=nn(n,function(s){return s!==void 0}),i=en(ui(hi(e)),F.method("join","=")).join("&");return i}function di(n){var e=[],i=[];return function s(u,l){var d,v,S;switch(typeof u){case"object":if(!u)return null;for(d=0;d<e.length;d+=1)if(e[d]===u)return{$ref:i[d]};if(e.push(u),i.push(l),Object.prototype.toString.apply(u)==="[object Array]")for(S=[],d=0;d<u.length;d+=1)S[d]=s(u[d],l+"["+d+"]");else{S={};for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&(S[v]=s(u[v],l+"["+JSON.stringify(v)+"]"))}return S;case"number":case"string":case"boolean":return u}}(n,"$")}function He(n){try{return JSON.stringify(n)}catch{return JSON.stringify(di(n))}}var pi=function(){function n(){this.globalLog=function(e){window.console&&window.console.log&&window.console.log(e)}}return n.prototype.debug=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLog,e)},n.prototype.warn=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogWarn,e)},n.prototype.error=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogError,e)},n.prototype.globalLogWarn=function(e){window.console&&window.console.warn?window.console.warn(e):this.globalLog(e)},n.prototype.globalLogError=function(e){window.console&&window.console.error?window.console.error(e):this.globalLogWarn(e)},n.prototype.log=function(e){var i=si.apply(this,arguments);if(lt.log)lt.log(i);else if(lt.logToConsole){var s=e.bind(this);s(i)}},n}(),L=new pi,gi=function(n,e,i,s,u){(i.headers!==void 0||i.headersProvider!=null)&&L.warn("To send headers with the "+s.toString()+" request, you must use AJAX, rather than JSONP.");var l=n.nextAuthCallbackID.toString();n.nextAuthCallbackID++;var d=n.getDocument(),v=d.createElement("script");n.auth_callbacks[l]=function(P){u(null,P)};var S="Pusher.auth_callbacks['"+l+"']";v.src=i.endpoint+"?callback="+encodeURIComponent(S)+"&"+e;var b=d.getElementsByTagName("head")[0]||d.documentElement;b.insertBefore(v,b.firstChild)},vi=gi,yi=function(){function n(e){this.src=e}return n.prototype.send=function(e){var i=this,s="Error loading "+i.src;i.script=document.createElement("script"),i.script.id=e.id,i.script.src=i.src,i.script.type="text/javascript",i.script.charset="UTF-8",i.script.addEventListener?(i.script.onerror=function(){e.callback(s)},i.script.onload=function(){e.callback(null)}):i.script.onreadystatechange=function(){(i.script.readyState==="loaded"||i.script.readyState==="complete")&&e.callback(null)},i.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(i.errorScript=document.createElement("script"),i.errorScript.id=e.id+"_error",i.errorScript.text=e.name+"('"+s+"');",i.script.async=i.errorScript.async=!1):i.script.async=!0;var u=document.getElementsByTagName("head")[0];u.insertBefore(i.script,u.firstChild),i.errorScript&&u.insertBefore(i.errorScript,i.script.nextSibling)},n.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},n}(),mi=yi,bi=function(){function n(e,i){this.url=e,this.data=i}return n.prototype.send=function(e){if(!this.request){var i=fi(this.data),s=this.url+"/"+e.number+"?"+i;this.request=I.createScriptRequest(s),this.request.send(e)}},n.prototype.cleanup=function(){this.request&&this.request.cleanup()},n}(),_i=bi,wi=function(n,e){return function(i,s){var u="http"+(e?"s":"")+"://",l=u+(n.host||n.options.host)+n.options.path,d=I.createJSONPRequest(l,i),v=I.ScriptReceivers.create(function(S,b){f.remove(v),d.cleanup(),b&&b.host&&(n.host=b.host),s&&s(S,b)});d.send(v)}},Si={name:"jsonp",getAgent:wi},ki=Si;function et(n,e,i){var s=n+(e.useTLS?"s":""),u=e.useTLS?e.hostTLS:e.hostNonTLS;return s+"://"+u+i}function tt(n,e){var i="/app/"+n,s="?protocol="+p.PROTOCOL+"&client=js&version="+p.VERSION+(e?"&"+e:"");return i+s}var Ti={getInitial:function(n,e){var i=(e.httpPath||"")+tt(n,"flash=false");return et("ws",e,i)}},Ci={getInitial:function(n,e){var i=(e.httpPath||"/pusher")+tt(n);return et("http",e,i)}},Ii={getInitial:function(n,e){return et("http",e,e.httpPath||"/pusher")},getPath:function(n,e){return tt(n)}},Ei=function(){function n(){this._callbacks={}}return n.prototype.get=function(e){return this._callbacks[nt(e)]},n.prototype.add=function(e,i,s){var u=nt(e);this._callbacks[u]=this._callbacks[u]||[],this._callbacks[u].push({fn:i,context:s})},n.prototype.remove=function(e,i,s){if(!e&&!i&&!s){this._callbacks={};return}var u=e?[nt(e)]:Zt(this._callbacks);i||s?this.removeCallback(u,i,s):this.removeAllCallbacks(u)},n.prototype.removeCallback=function(e,i,s){Ce(e,function(u){this._callbacks[u]=tn(this._callbacks[u]||[],function(l){return i&&i!==l.fn||s&&s!==l.context}),this._callbacks[u].length===0&&delete this._callbacks[u]},this)},n.prototype.removeAllCallbacks=function(e){Ce(e,function(i){delete this._callbacks[i]},this)},n}(),Ai=Ei;function nt(n){return"_"+n}var Pi=function(){function n(e){this.callbacks=new Ai,this.global_callbacks=[],this.failThrough=e}return n.prototype.bind=function(e,i,s){return this.callbacks.add(e,i,s),this},n.prototype.bind_global=function(e){return this.global_callbacks.push(e),this},n.prototype.unbind=function(e,i,s){return this.callbacks.remove(e,i,s),this},n.prototype.unbind_global=function(e){return e?(this.global_callbacks=tn(this.global_callbacks||[],function(i){return i!==e}),this):(this.global_callbacks=[],this)},n.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},n.prototype.emit=function(e,i,s){for(var u=0;u<this.global_callbacks.length;u++)this.global_callbacks[u](e,i);var l=this.callbacks.get(e),d=[];if(s?d.push(i,s):i&&d.push(i),l&&l.length>0)for(var u=0;u<l.length;u++)l[u].fn.apply(l[u].context||window,d);else this.failThrough&&this.failThrough(e,i);return this},n}(),ne=Pi,Oi=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),xi=function(n){Oi(e,n);function e(i,s,u,l,d){var v=n.call(this)||this;return v.initialize=I.transportConnectionInitializer,v.hooks=i,v.name=s,v.priority=u,v.key=l,v.options=d,v.state="new",v.timeline=d.timeline,v.activityTimeout=d.activityTimeout,v.id=v.timeline.generateUniqueID(),v}return e.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var i=this;if(this.socket||this.state!=="initialized")return!1;var s=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(s,this.options)}catch(u){return F.defer(function(){i.onError(u),i.changeState("closed")}),!1}return this.bindListeners(),L.debug("Connecting",{transport:this.name,url:s}),this.changeState("connecting"),!0},e.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},e.prototype.send=function(i){var s=this;return this.state==="open"?(F.defer(function(){s.socket&&s.socket.send(i)}),!0):!1},e.prototype.ping=function(){this.state==="open"&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(i){this.emit("error",{type:"WebSocketError",error:i}),this.timeline.error(this.buildTimelineMessage({error:i.toString()}))},e.prototype.onClose=function(i){i?this.changeState("closed",{code:i.code,reason:i.reason,wasClean:i.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(i){this.emit("message",i)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var i=this;this.socket.onopen=function(){i.onOpen()},this.socket.onerror=function(s){i.onError(s)},this.socket.onclose=function(s){i.onClose(s)},this.socket.onmessage=function(s){i.onMessage(s)},this.supportsPing()&&(this.socket.onactivity=function(){i.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(i,s){this.state=i,this.timeline.info(this.buildTimelineMessage({state:i,params:s})),this.emit(i,s)},e.prototype.buildTimelineMessage=function(i){return U({cid:this.id},i)},e}(ne),Di=xi,Ri=function(){function n(e){this.hooks=e}return n.prototype.isSupported=function(e){return this.hooks.isSupported(e)},n.prototype.createConnection=function(e,i,s,u){return new Di(this.hooks,e,i,s,u)},n}(),we=Ri,Li=new we({urls:Ti,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(I.getWebSocketAPI())},isSupported:function(){return Boolean(I.getWebSocketAPI())},getSocket:function(n){return I.createWebSocket(n)}}),on={urls:Ci,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},sn=U({getSocket:function(n){return I.HTTPFactory.createStreamingSocket(n)}},on),an=U({getSocket:function(n){return I.HTTPFactory.createPollingSocket(n)}},on),cn={isSupported:function(){return I.isXHRSupported()}},Ni=new we(U({},sn,cn)),ji=new we(U({},an,cn)),Mi={ws:Li,xhr_streaming:Ni,xhr_polling:ji},$e=Mi,Bi=new we({file:"sockjs",urls:Ii,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(n,e){return new window.SockJS(n,null,{js_path:T.getPath("sockjs",{useTLS:e.useTLS}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(n,e){n.send(JSON.stringify({path:e}))}}),un={isSupported:function(n){var e=I.isXDRSupported(n.useTLS);return e}},Fi=new we(U({},sn,un)),Hi=new we(U({},an,un));$e.xdr_streaming=Fi,$e.xdr_polling=Hi,$e.sockjs=Bi;var $i=$e,Ui=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),qi=function(n){Ui(e,n);function e(){var i=n.call(this)||this,s=i;return window.addEventListener!==void 0&&(window.addEventListener("online",function(){s.emit("online")},!1),window.addEventListener("offline",function(){s.emit("offline")},!1)),i}return e.prototype.isOnline=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine},e}(ne),zi=new qi,Vi=function(){function n(e,i,s){this.manager=e,this.transport=i,this.minPingDelay=s.minPingDelay,this.maxPingDelay=s.maxPingDelay,this.pingDelay=void 0}return n.prototype.createConnection=function(e,i,s,u){var l=this;u=U({},u,{activityTimeout:this.pingDelay});var d=this.transport.createConnection(e,i,s,u),v=null,S=function(){d.unbind("open",S),d.bind("closed",b),v=F.now()},b=function(P){if(d.unbind("closed",b),P.code===1002||P.code===1003)l.manager.reportDeath();else if(!P.wasClean&&v){var N=F.now()-v;N<2*l.maxPingDelay&&(l.manager.reportDeath(),l.pingDelay=Math.max(N/2,l.minPingDelay))}};return d.bind("open",S),d},n.prototype.isSupported=function(e){return this.manager.isAlive()&&this.transport.isSupported(e)},n}(),Wi=Vi,ln={decodeMessage:function(n){try{var e=JSON.parse(n.data),i=e.data;if(typeof i=="string")try{i=JSON.parse(e.data)}catch{}var s={event:e.event,channel:e.channel,data:i};return e.user_id&&(s.user_id=e.user_id),s}catch(u){throw{type:"MessageParseError",error:u,data:n.data}}},encodeMessage:function(n){return JSON.stringify(n)},processHandshake:function(n){var e=ln.decodeMessage(n);if(e.event==="pusher:connection_established"){if(!e.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:e.data.socket_id,activityTimeout:e.data.activity_timeout*1e3}}else{if(e.event==="pusher:error")return{action:this.getCloseAction(e.data),error:this.getCloseError(e.data)};throw"Invalid handshake"}},getCloseAction:function(n){return n.code<4e3?n.code>=1002&&n.code<=1004?"backoff":null:n.code===4e3?"tls_only":n.code<4100?"refused":n.code<4200?"backoff":n.code<4300?"retry":"refused"},getCloseError:function(n){return n.code!==1e3&&n.code!==1001?{type:"PusherError",data:{code:n.code,message:n.reason||n.message}}:null}},le=ln,Ki=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Gi=function(n){Ki(e,n);function e(i,s){var u=n.call(this)||this;return u.id=i,u.transport=s,u.activityTimeout=s.activityTimeout,u.bindListeners(),u}return e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(i){return this.transport.send(i)},e.prototype.send_event=function(i,s,u){var l={event:i,data:s};return u&&(l.channel=u),L.debug("Event sent",l),this.send(le.encodeMessage(l))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var i=this,s={message:function(l){var d;try{d=le.decodeMessage(l)}catch(v){i.emit("error",{type:"MessageParseError",error:v,data:l.data})}if(d!==void 0){switch(L.debug("Event recd",d),d.event){case"pusher:error":i.emit("error",{type:"PusherError",data:d.data});break;case"pusher:ping":i.emit("ping");break;case"pusher:pong":i.emit("pong");break}i.emit("message",d)}},activity:function(){i.emit("activity")},error:function(l){i.emit("error",l)},closed:function(l){u(),l&&l.code&&i.handleCloseEvent(l),i.transport=null,i.emit("closed")}},u=function(){te(s,function(l,d){i.transport.unbind(d,l)})};te(s,function(l,d){i.transport.bind(d,l)})},e.prototype.handleCloseEvent=function(i){var s=le.getCloseAction(i),u=le.getCloseError(i);u&&this.emit("error",u),s&&this.emit(s,{action:s,error:u})},e}(ne),Ji=Gi,Xi=function(){function n(e,i){this.transport=e,this.callback=i,this.bindListeners()}return n.prototype.close=function(){this.unbindListeners(),this.transport.close()},n.prototype.bindListeners=function(){var e=this;this.onMessage=function(i){e.unbindListeners();var s;try{s=le.processHandshake(i)}catch(u){e.finish("error",{error:u}),e.transport.close();return}s.action==="connected"?e.finish("connected",{connection:new Ji(s.id,e.transport),activityTimeout:s.activityTimeout}):(e.finish(s.action,{error:s.error}),e.transport.close())},this.onClosed=function(i){e.unbindListeners();var s=le.getCloseAction(i)||"backoff",u=le.getCloseError(i);e.finish(s,{error:u})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},n.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},n.prototype.finish=function(e,i){this.callback(U({transport:this.transport,action:e},i))},n}(),Yi=Xi,Qi=function(){function n(e,i){this.timeline=e,this.options=i||{}}return n.prototype.send=function(e,i){this.timeline.isEmpty()||this.timeline.send(I.TimelineTransport.getAgent(this,e),i)},n}(),Zi=Qi,eo=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),to=function(n){eo(e,n);function e(i,s){var u=n.call(this,function(l,d){L.debug("No callbacks on "+i+" for "+l)})||this;return u.name=i,u.pusher=s,u.subscribed=!1,u.subscriptionPending=!1,u.subscriptionCancelled=!1,u}return e.prototype.authorize=function(i,s){return s(null,{auth:""})},e.prototype.trigger=function(i,s){if(i.indexOf("client-")!==0)throw new A("Event '"+i+"' does not start with 'client-'");if(!this.subscribed){var u=C.buildLogSuffix("triggeringClientEvents");L.warn("Client event triggered before channel 'subscription_succeeded' event . "+u)}return this.pusher.send_event(i,s,this.name)},e.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(i);else if(s==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(i);else if(s.indexOf("pusher_internal:")!==0){var l={};this.emit(s,u,l)}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",i.data)},e.prototype.handleSubscriptionCountEvent=function(i){i.data.subscription_count&&(this.subscriptionCount=i.data.subscription_count),this.emit("pusher:subscription_count",i.data)},e.prototype.subscribe=function(){var i=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(s,u){s?(i.subscriptionPending=!1,L.error(s.toString()),i.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:s.message},s instanceof X?{status:s.status}:{}))):i.pusher.send_event("pusher:subscribe",{auth:u.auth,channel_data:u.channel_data,channel:i.name})}))},e.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},e.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},e}(ne),rt=to,no=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),ro=function(n){no(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.authorize=function(i,s){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:i},s)},e}(rt),it=ro,oo=function(){function n(){this.reset()}return n.prototype.get=function(e){return Object.prototype.hasOwnProperty.call(this.members,e)?{id:e,info:this.members[e]}:null},n.prototype.each=function(e){var i=this;te(this.members,function(s,u){e(i.get(u))})},n.prototype.setMyID=function(e){this.myID=e},n.prototype.onSubscription=function(e){this.members=e.presence.hash,this.count=e.presence.count,this.me=this.get(this.myID)},n.prototype.addMember=function(e){return this.get(e.user_id)===null&&this.count++,this.members[e.user_id]=e.user_info,this.get(e.user_id)},n.prototype.removeMember=function(e){var i=this.get(e.user_id);return i&&(delete this.members[e.user_id],this.count--),i},n.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},n}(),so=oo,ao=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),co=function(n,e,i,s){function u(l){return l instanceof i?l:new i(function(d){d(l)})}return new(i||(i=Promise))(function(l,d){function v(P){try{b(s.next(P))}catch(N){d(N)}}function S(P){try{b(s.throw(P))}catch(N){d(N)}}function b(P){P.done?l(P.value):u(P.value).then(v,S)}b((s=s.apply(n,e||[])).next())})},uo=function(n,e){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,u,l,d;return d={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function v(b){return function(P){return S([b,P])}}function S(b){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,u&&(l=b[0]&2?u.return:b[0]?u.throw||((l=u.return)&&l.call(u),0):u.next)&&!(l=l.call(u,b[1])).done)return l;switch(u=0,l&&(b=[b[0]&2,l.value]),b[0]){case 0:case 1:l=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,u=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!l||b[1]>l[0]&&b[1]<l[3])){i.label=b[1];break}if(b[0]===6&&i.label<l[1]){i.label=l[1],l=b;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(b);break}l[2]&&i.ops.pop(),i.trys.pop();continue}b=e.call(n,i)}catch(P){b=[6,P],u=0}finally{s=l=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},lo=function(n){ao(e,n);function e(i,s){var u=n.call(this,i,s)||this;return u.members=new so,u}return e.prototype.authorize=function(i,s){var u=this;n.prototype.authorize.call(this,i,function(l,d){return co(u,void 0,void 0,function(){var v,S;return uo(this,function(b){switch(b.label){case 0:return l?[3,3]:(d=d,d.channel_data==null?[3,1]:(v=JSON.parse(d.channel_data),this.members.setMyID(v.user_id),[3,3]));case 1:return[4,this.pusher.user.signinDonePromise];case 2:if(b.sent(),this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else return S=C.buildLogSuffix("authorizationEndpoint"),L.error("Invalid auth response for channel '"+this.name+"', "+("expected 'channel_data' field. "+S+", ")+"or the user should be signed in."),s("Invalid auth response"),[2];b.label=3;case 3:return s(l,d),[2]}})})})},e.prototype.handleEvent=function(i){var s=i.event;if(s.indexOf("pusher_internal:")===0)this.handleInternalEvent(i);else{var u=i.data,l={};i.user_id&&(l.user_id=i.user_id),this.emit(s,u,l)}},e.prototype.handleInternalEvent=function(i){var s=i.event,u=i.data;switch(s){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(i);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(i);break;case"pusher_internal:member_added":var l=this.members.addMember(u);this.emit("pusher:member_added",l);break;case"pusher_internal:member_removed":var d=this.members.removeMember(u);d&&this.emit("pusher:member_removed",d);break}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(i.data),this.emit("pusher:subscription_succeeded",this.members))},e.prototype.disconnect=function(){this.members.reset(),n.prototype.disconnect.call(this)},e}(it),ho=lo,fo=a(1),ot=a(0),po=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),go=function(n){po(e,n);function e(i,s,u){var l=n.call(this,i,s)||this;return l.key=null,l.nacl=u,l}return e.prototype.authorize=function(i,s){var u=this;n.prototype.authorize.call(this,i,function(l,d){if(l){s(l,d);return}var v=d.shared_secret;if(!v){s(new Error("No shared_secret key in auth payload for encrypted channel: "+u.name),null);return}u.key=Object(ot.decode)(v),delete d.shared_secret,s(null,d)})},e.prototype.trigger=function(i,s){throw new ee("Client events are not currently supported for encrypted channels")},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s.indexOf("pusher_internal:")===0||s.indexOf("pusher:")===0){n.prototype.handleEvent.call(this,i);return}this.handleEncryptedEvent(s,u)},e.prototype.handleEncryptedEvent=function(i,s){var u=this;if(!this.key){L.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!s.ciphertext||!s.nonce){L.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+s);return}var l=Object(ot.decode)(s.ciphertext);if(l.length<this.nacl.secretbox.overheadLength){L.error("Expected encrypted event ciphertext length to be "+this.nacl.secretbox.overheadLength+", got: "+l.length);return}var d=Object(ot.decode)(s.nonce);if(d.length<this.nacl.secretbox.nonceLength){L.error("Expected encrypted event nonce length to be "+this.nacl.secretbox.nonceLength+", got: "+d.length);return}var v=this.nacl.secretbox.open(l,d,this.key);if(v===null){L.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,function(S,b){if(S){L.error("Failed to make a request to the authEndpoint: "+b+". Unable to fetch new key, so dropping encrypted event");return}if(v=u.nacl.secretbox.open(l,d,u.key),v===null){L.error("Failed to decrypt event with new key. Dropping encrypted event");return}u.emit(i,u.getDataToEmit(v))});return}this.emit(i,this.getDataToEmit(v))},e.prototype.getDataToEmit=function(i){var s=Object(fo.decode)(i);try{return JSON.parse(s)}catch{return s}},e}(it),vo=go,yo=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),mo=function(n){yo(e,n);function e(i,s){var u=n.call(this)||this;u.state="initialized",u.connection=null,u.key=i,u.options=s,u.timeline=u.options.timeline,u.usingTLS=u.options.useTLS,u.errorCallbacks=u.buildErrorCallbacks(),u.connectionCallbacks=u.buildConnectionCallbacks(u.errorCallbacks),u.handshakeCallbacks=u.buildHandshakeCallbacks(u.errorCallbacks);var l=I.getNetwork();return l.bind("online",function(){u.timeline.info({netinfo:"online"}),(u.state==="connecting"||u.state==="unavailable")&&u.retryIn(0)}),l.bind("offline",function(){u.timeline.info({netinfo:"offline"}),u.connection&&u.sendActivityCheck()}),u.updateStrategy(),u}return e.prototype.connect=function(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(i){return this.connection?this.connection.send(i):!1},e.prototype.send_event=function(i,s,u){return this.connection?this.connection.send_event(i,s,u):!1},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isUsingTLS=function(){return this.usingTLS},e.prototype.startConnecting=function(){var i=this,s=function(u,l){u?i.runner=i.strategy.connect(0,s):l.action==="error"?(i.emit("error",{type:"HandshakeError",error:l.error}),i.timeline.error({handshakeError:l.error})):(i.abortConnecting(),i.handshakeCallbacks[l.action](l))};this.runner=this.strategy.connect(0,s)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var i=this.abandonConnection();i.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},e.prototype.retryIn=function(i){var s=this;this.timeline.info({action:"retry",delay:i}),i>0&&this.emit("connecting_in",Math.round(i/1e3)),this.retryTimer=new ue(i||0,function(){s.disconnectInternally(),s.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var i=this;this.unavailableTimer=new ue(this.options.unavailableTimeout,function(){i.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new ue(this.options.pongTimeout,function(){i.timeline.error({pong_timed_out:i.options.pongTimeout}),i.retryIn(0)})},e.prototype.resetActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new ue(this.activityTimeout,function(){i.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(i){var s=this;return U({},i,{message:function(u){s.resetActivityCheck(),s.emit("message",u)},ping:function(){s.send_event("pusher:pong",{})},activity:function(){s.resetActivityCheck()},error:function(u){s.emit("error",u)},closed:function(){s.abandonConnection(),s.shouldRetry()&&s.retryIn(1e3)}})},e.prototype.buildHandshakeCallbacks=function(i){var s=this;return U({},i,{connected:function(u){s.activityTimeout=Math.min(s.options.activityTimeout,u.activityTimeout,u.connection.activityTimeout||1/0),s.clearUnavailableTimer(),s.setConnection(u.connection),s.socket_id=s.connection.id,s.updateState("connected",{socket_id:s.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var i=this,s=function(u){return function(l){l.error&&i.emit("error",{type:"WebSocketError",error:l.error}),u(l)}};return{tls_only:s(function(){i.usingTLS=!0,i.updateStrategy(),i.retryIn(0)}),refused:s(function(){i.disconnect()}),backoff:s(function(){i.retryIn(1e3)}),retry:s(function(){i.retryIn(0)})}},e.prototype.setConnection=function(i){this.connection=i;for(var s in this.connectionCallbacks)this.connection.bind(s,this.connectionCallbacks[s]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(!!this.connection){this.stopActivityCheck();for(var i in this.connectionCallbacks)this.connection.unbind(i,this.connectionCallbacks[i]);var s=this.connection;return this.connection=null,s}},e.prototype.updateState=function(i,s){var u=this.state;if(this.state=i,u!==i){var l=i;l==="connected"&&(l+=" with new socket ID "+s.socket_id),L.debug("State changed",u+" -> "+l),this.timeline.info({state:i,params:s}),this.emit("state_change",{previous:u,current:i}),this.emit(i,s)}},e.prototype.shouldRetry=function(){return this.state==="connecting"||this.state==="connected"},e}(ne),bo=mo,_o=function(){function n(){this.channels={}}return n.prototype.add=function(e,i){return this.channels[e]||(this.channels[e]=So(e,i)),this.channels[e]},n.prototype.all=function(){return ai(this.channels)},n.prototype.find=function(e){return this.channels[e]},n.prototype.remove=function(e){var i=this.channels[e];return delete this.channels[e],i},n.prototype.disconnect=function(){te(this.channels,function(e){e.disconnect()})},n}(),wo=_o;function So(n,e){if(n.indexOf("private-encrypted-")===0){if(e.config.nacl)return re.createEncryptedChannel(n,e,e.config.nacl);var i="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",s=C.buildLogSuffix("encryptedChannelSupport");throw new ee(i+". "+s)}else{if(n.indexOf("private-")===0)return re.createPrivateChannel(n,e);if(n.indexOf("presence-")===0)return re.createPresenceChannel(n,e);if(n.indexOf("#")===0)throw new D('Cannot create a channel with name "'+n+'".');return re.createChannel(n,e)}}var ko={createChannels:function(){return new wo},createConnectionManager:function(n,e){return new bo(n,e)},createChannel:function(n,e){return new rt(n,e)},createPrivateChannel:function(n,e){return new it(n,e)},createPresenceChannel:function(n,e){return new ho(n,e)},createEncryptedChannel:function(n,e,i){return new vo(n,e,i)},createTimelineSender:function(n,e){return new Zi(n,e)},createHandshake:function(n,e){return new Yi(n,e)},createAssistantToTheTransportManager:function(n,e,i){return new Wi(n,e,i)}},re=ko,To=function(){function n(e){this.options=e||{},this.livesLeft=this.options.lives||1/0}return n.prototype.getAssistant=function(e){return re.createAssistantToTheTransportManager(this,e,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},n.prototype.isAlive=function(){return this.livesLeft>0},n.prototype.reportDeath=function(){this.livesLeft-=1},n}(),hn=To,Co=function(){function n(e,i){this.strategies=e,this.loop=Boolean(i.loop),this.failFast=Boolean(i.failFast),this.timeout=i.timeout,this.timeoutLimit=i.timeoutLimit}return n.prototype.isSupported=function(){return rn(this.strategies,F.method("isSupported"))},n.prototype.connect=function(e,i){var s=this,u=this.strategies,l=0,d=this.timeout,v=null,S=function(b,P){P?i(null,P):(l=l+1,s.loop&&(l=l%u.length),l<u.length?(d&&(d=d*2,s.timeoutLimit&&(d=Math.min(d,s.timeoutLimit))),v=s.tryStrategy(u[l],e,{timeout:d,failFast:s.failFast},S)):i(!0))};return v=this.tryStrategy(u[l],e,{timeout:d,failFast:this.failFast},S),{abort:function(){v.abort()},forceMinPriority:function(b){e=b,v&&v.forceMinPriority(b)}}},n.prototype.tryStrategy=function(e,i,s,u){var l=null,d=null;return s.timeout>0&&(l=new ue(s.timeout,function(){d.abort(),u(!0)})),d=e.connect(i,function(v,S){v&&l&&l.isRunning()&&!s.failFast||(l&&l.ensureAborted(),u(v,S))}),{abort:function(){l&&l.ensureAborted(),d.abort()},forceMinPriority:function(v){d.forceMinPriority(v)}}},n}(),he=Co,Io=function(){function n(e){this.strategies=e}return n.prototype.isSupported=function(){return rn(this.strategies,F.method("isSupported"))},n.prototype.connect=function(e,i){return Eo(this.strategies,e,function(s,u){return function(l,d){if(u[s].error=l,l){Ao(u)&&i(!0);return}Ce(u,function(v){v.forceMinPriority(d.transport.priority)}),i(null,d)}})},n}(),st=Io;function Eo(n,e,i){var s=en(n,function(u,l,d,v){return u.connect(e,i(l,v))});return{abort:function(){Ce(s,Po)},forceMinPriority:function(u){Ce(s,function(l){l.forceMinPriority(u)})}}}function Ao(n){return li(n,function(e){return Boolean(e.error)})}function Po(n){!n.error&&!n.aborted&&(n.abort(),n.aborted=!0)}var Oo=function(){function n(e,i,s){this.strategy=e,this.transports=i,this.ttl=s.ttl||1800*1e3,this.usingTLS=s.useTLS,this.timeline=s.timeline}return n.prototype.isSupported=function(){return this.strategy.isSupported()},n.prototype.connect=function(e,i){var s=this.usingTLS,u=Do(s),l=[this.strategy];if(u&&u.timestamp+this.ttl>=F.now()){var d=this.transports[u.transport];d&&(this.timeline.info({cached:!0,transport:u.transport,latency:u.latency}),l.push(new he([d],{timeout:u.latency*2+1e3,failFast:!0})))}var v=F.now(),S=l.pop().connect(e,function b(P,N){P?(fn(s),l.length>0?(v=F.now(),S=l.pop().connect(e,b)):i(P)):(Ro(s,N.transport.name,F.now()-v),i(null,N))});return{abort:function(){S.abort()},forceMinPriority:function(b){e=b,S&&S.forceMinPriority(b)}}},n}(),xo=Oo;function at(n){return"pusherTransport"+(n?"TLS":"NonTLS")}function Do(n){var e=I.getLocalStorage();if(e)try{var i=e[at(n)];if(i)return JSON.parse(i)}catch{fn(n)}return null}function Ro(n,e,i){var s=I.getLocalStorage();if(s)try{s[at(n)]=He({timestamp:F.now(),transport:e,latency:i})}catch{}}function fn(n){var e=I.getLocalStorage();if(e)try{delete e[at(n)]}catch{}}var Lo=function(){function n(e,i){var s=i.delay;this.strategy=e,this.options={delay:s}}return n.prototype.isSupported=function(){return this.strategy.isSupported()},n.prototype.connect=function(e,i){var s=this.strategy,u,l=new ue(this.options.delay,function(){u=s.connect(e,i)});return{abort:function(){l.ensureAborted(),u&&u.abort()},forceMinPriority:function(d){e=d,u&&u.forceMinPriority(d)}}},n}(),Ue=Lo,No=function(){function n(e,i,s){this.test=e,this.trueBranch=i,this.falseBranch=s}return n.prototype.isSupported=function(){var e=this.test()?this.trueBranch:this.falseBranch;return e.isSupported()},n.prototype.connect=function(e,i){var s=this.test()?this.trueBranch:this.falseBranch;return s.connect(e,i)},n}(),Ie=No,jo=function(){function n(e){this.strategy=e}return n.prototype.isSupported=function(){return this.strategy.isSupported()},n.prototype.connect=function(e,i){var s=this.strategy.connect(e,function(u,l){l&&s.abort(),i(u,l)});return s},n}(),Mo=jo;function Ee(n){return function(){return n.isSupported()}}var Bo=function(n,e,i){var s={};function u(Tn,Ks,Gs,Js,Xs){var Cn=i(n,Tn,Ks,Gs,Js,Xs);return s[Tn]=Cn,Cn}var l=Object.assign({},e,{hostNonTLS:n.wsHost+":"+n.wsPort,hostTLS:n.wsHost+":"+n.wssPort,httpPath:n.wsPath}),d=Object.assign({},l,{useTLS:!0}),v=Object.assign({},e,{hostNonTLS:n.httpHost+":"+n.httpPort,hostTLS:n.httpHost+":"+n.httpsPort,httpPath:n.httpPath}),S={loop:!0,timeout:15e3,timeoutLimit:6e4},b=new hn({lives:2,minPingDelay:1e4,maxPingDelay:n.activityTimeout}),P=new hn({lives:2,minPingDelay:1e4,maxPingDelay:n.activityTimeout}),N=u("ws","ws",3,l,b),Y=u("wss","ws",3,d,b),Us=u("sockjs","sockjs",1,v),mn=u("xhr_streaming","xhr_streaming",1,v,P),qs=u("xdr_streaming","xdr_streaming",1,v,P),bn=u("xhr_polling","xhr_polling",1,v),zs=u("xdr_polling","xdr_polling",1,v),_n=new he([N],S),Vs=new he([Y],S),Ws=new he([Us],S),wn=new he([new Ie(Ee(mn),mn,qs)],S),Sn=new he([new Ie(Ee(bn),bn,zs)],S),kn=new he([new Ie(Ee(wn),new st([wn,new Ue(Sn,{delay:4e3})]),Sn)],S),ht=new Ie(Ee(kn),kn,Ws),ft;return e.useTLS?ft=new st([_n,new Ue(ht,{delay:2e3})]):ft=new st([_n,new Ue(Vs,{delay:2e3}),new Ue(ht,{delay:5e3})]),new xo(new Mo(new Ie(Ee(N),ft,ht)),s,{ttl:18e5,timeline:e.timeline,useTLS:e.useTLS})},Fo=Bo,Ho=function(){var n=this;n.timeline.info(n.buildTimelineMessage({transport:n.name+(n.options.useTLS?"s":"")})),n.hooks.isInitialized()?n.changeState("initialized"):n.hooks.file?(n.changeState("initializing"),T.load(n.hooks.file,{useTLS:n.options.useTLS},function(e,i){n.hooks.isInitialized()?(n.changeState("initialized"),i(!0)):(e&&n.onError(e),n.onClose(),i(!1))})):n.onClose()},$o={getRequest:function(n){var e=new window.XDomainRequest;return e.ontimeout=function(){n.emit("error",new B),n.close()},e.onerror=function(i){n.emit("error",i),n.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&n.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&n.onChunk(200,e.responseText),n.emit("finished",200),n.close()},e},abortRequest:function(n){n.ontimeout=n.onerror=n.onprogress=n.onload=null,n.abort()}},Uo=$o,qo=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),zo=256*1024,Vo=function(n){qo(e,n);function e(i,s,u){var l=n.call(this)||this;return l.hooks=i,l.method=s,l.url=u,l}return e.prototype.start=function(i){var s=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){s.close()},I.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(i)},e.prototype.close=function(){this.unloader&&(I.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(i,s){for(;;){var u=this.advanceBuffer(s);if(u)this.emit("chunk",{status:i,data:u});else break}this.isBufferTooLong(s)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(i){var s=i.slice(this.position),u=s.indexOf(`
`);return u!==-1?(this.position+=u+1,s.slice(0,u)):null},e.prototype.isBufferTooLong=function(i){return this.position===i.length&&i.length>zo},e}(ne),Wo=Vo,ct;(function(n){n[n.CONNECTING=0]="CONNECTING",n[n.OPEN=1]="OPEN",n[n.CLOSED=3]="CLOSED"})(ct||(ct={}));var fe=ct,Ko=1,Go=function(){function n(e,i){this.hooks=e,this.session=pn(1e3)+"/"+Qo(8),this.location=Jo(i),this.readyState=fe.CONNECTING,this.openStream()}return n.prototype.send=function(e){return this.sendRaw(JSON.stringify([e]))},n.prototype.ping=function(){this.hooks.sendHeartbeat(this)},n.prototype.close=function(e,i){this.onClose(e,i,!0)},n.prototype.sendRaw=function(e){if(this.readyState===fe.OPEN)try{return I.createSocketRequest("POST",dn(Xo(this.location,this.session))).start(e),!0}catch{return!1}else return!1},n.prototype.reconnect=function(){this.closeStream(),this.openStream()},n.prototype.onClose=function(e,i,s){this.closeStream(),this.readyState=fe.CLOSED,this.onclose&&this.onclose({code:e,reason:i,wasClean:s})},n.prototype.onChunk=function(e){if(e.status===200){this.readyState===fe.OPEN&&this.onActivity();var i,s=e.data.slice(0,1);switch(s){case"o":i=JSON.parse(e.data.slice(1)||"{}"),this.onOpen(i);break;case"a":i=JSON.parse(e.data.slice(1)||"[]");for(var u=0;u<i.length;u++)this.onEvent(i[u]);break;case"m":i=JSON.parse(e.data.slice(1)||"null"),this.onEvent(i);break;case"h":this.hooks.onHeartbeat(this);break;case"c":i=JSON.parse(e.data.slice(1)||"[]"),this.onClose(i[0],i[1],!0);break}}},n.prototype.onOpen=function(e){this.readyState===fe.CONNECTING?(e&&e.hostname&&(this.location.base=Yo(this.location.base,e.hostname)),this.readyState=fe.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},n.prototype.onEvent=function(e){this.readyState===fe.OPEN&&this.onmessage&&this.onmessage({data:e})},n.prototype.onActivity=function(){this.onactivity&&this.onactivity()},n.prototype.onError=function(e){this.onerror&&this.onerror(e)},n.prototype.openStream=function(){var e=this;this.stream=I.createSocketRequest("POST",dn(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(i){e.onChunk(i)}),this.stream.bind("finished",function(i){e.hooks.onFinished(e,i)}),this.stream.bind("buffer_too_long",function(){e.reconnect()});try{this.stream.start()}catch(i){F.defer(function(){e.onError(i),e.onClose(1006,"Could not start streaming",!1)})}},n.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},n}();function Jo(n){var e=/([^\?]*)\/*(\??.*)/.exec(n);return{base:e[1],queryString:e[2]}}function Xo(n,e){return n.base+"/"+e+"/xhr_send"}function dn(n){var e=n.indexOf("?")===-1?"?":"&";return n+e+"t="+ +new Date+"&n="+Ko++}function Yo(n,e){var i=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);return i[1]+e+i[3]}function pn(n){return I.randomInt(n)}function Qo(n){for(var e=[],i=0;i<n;i++)e.push(pn(32).toString(32));return e.join("")}var Zo=Go,es={getReceiveURL:function(n,e){return n.base+"/"+e+"/xhr_streaming"+n.queryString},onHeartbeat:function(n){n.sendRaw("[]")},sendHeartbeat:function(n){n.sendRaw("[]")},onFinished:function(n,e){n.onClose(1006,"Connection interrupted ("+e+")",!1)}},ts=es,ns={getReceiveURL:function(n,e){return n.base+"/"+e+"/xhr"+n.queryString},onHeartbeat:function(){},sendHeartbeat:function(n){n.sendRaw("[]")},onFinished:function(n,e){e===200?n.reconnect():n.onClose(1006,"Connection interrupted ("+e+")",!1)}},rs=ns,is={getRequest:function(n){var e=I.getXHRAPI(),i=new e;return i.onreadystatechange=i.onprogress=function(){switch(i.readyState){case 3:i.responseText&&i.responseText.length>0&&n.onChunk(i.status,i.responseText);break;case 4:i.responseText&&i.responseText.length>0&&n.onChunk(i.status,i.responseText),n.emit("finished",i.status),n.close();break}},i},abortRequest:function(n){n.onreadystatechange=null,n.abort()}},os=is,ss={createStreamingSocket:function(n){return this.createSocket(ts,n)},createPollingSocket:function(n){return this.createSocket(rs,n)},createSocket:function(n,e){return new Zo(n,e)},createXHR:function(n,e){return this.createRequest(os,n,e)},createRequest:function(n,e,i){return new Wo(n,e,i)}},gn=ss;gn.createXDR=function(n,e){return this.createRequest(Uo,n,e)};var as=gn,cs={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:f,DependenciesReceivers:E,getDefaultStrategy:Fo,Transports:$i,transportConnectionInitializer:Ho,HTTPFactory:as,TimelineTransport:ki,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(n){var e=this;window.Pusher=n;var i=function(){e.onDocumentBody(n.ready)};window.JSON?i():T.load("json2",{},i)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:Jr,jsonp:vi}},onDocumentBody:function(n){var e=this;document.body?n():setTimeout(function(){e.onDocumentBody(n)},0)},createJSONPRequest:function(n,e){return new _i(n,e)},createScriptRequest:function(n){return new mi(n)},getLocalStorage:function(){try{return window.localStorage}catch{return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var n=this.getXHRAPI();return new n},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return zi},createWebSocket:function(n){var e=this.getWebSocketAPI();return new e(n)},createSocketRequest:function(n,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(n,e);if(this.isXDRSupported(e.indexOf("https:")===0))return this.HTTPFactory.createXDR(n,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var n=this.getXHRAPI();return Boolean(n)&&new n().withCredentials!==void 0},isXDRSupported:function(n){var e=n?"https:":"http:",i=this.getProtocol();return Boolean(window.XDomainRequest)&&i===e},addUnloadListener:function(n){window.addEventListener!==void 0?window.addEventListener("unload",n,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",n)},removeUnloadListener:function(n){window.addEventListener!==void 0?window.removeEventListener("unload",n,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",n)},randomInt:function(n){var e=function(){var i=window.crypto||window.msCrypto,s=i.getRandomValues(new Uint32Array(1))[0];return s/Math.pow(2,32)};return Math.floor(e()*n)}},I=cs,ut;(function(n){n[n.ERROR=3]="ERROR",n[n.INFO=6]="INFO",n[n.DEBUG=7]="DEBUG"})(ut||(ut={}));var qe=ut,us=function(){function n(e,i,s){this.key=e,this.session=i,this.events=[],this.options=s||{},this.sent=0,this.uniqueID=0}return n.prototype.log=function(e,i){e<=this.options.level&&(this.events.push(U({},i,{timestamp:F.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},n.prototype.error=function(e){this.log(qe.ERROR,e)},n.prototype.info=function(e){this.log(qe.INFO,e)},n.prototype.debug=function(e){this.log(qe.DEBUG,e)},n.prototype.isEmpty=function(){return this.events.length===0},n.prototype.send=function(e,i){var s=this,u=U({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],e(u,function(l,d){l||s.sent++,i&&i(l,d)}),!0},n.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},n}(),ls=us,hs=function(){function n(e,i,s,u){this.name=e,this.priority=i,this.transport=s,this.options=u||{}}return n.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},n.prototype.connect=function(e,i){var s=this;if(this.isSupported()){if(this.priority<e)return vn(new $,i)}else return vn(new G,i);var u=!1,l=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),d=null,v=function(){l.unbind("initialized",v),l.connect()},S=function(){d=re.createHandshake(l,function(Y){u=!0,N(),i(null,Y)})},b=function(Y){N(),i(Y)},P=function(){N();var Y;Y=He(l),i(new K(Y))},N=function(){l.unbind("initialized",v),l.unbind("open",S),l.unbind("error",b),l.unbind("closed",P)};return l.bind("initialized",v),l.bind("open",S),l.bind("error",b),l.bind("closed",P),l.initialize(),{abort:function(){u||(N(),d?d.close():l.close())},forceMinPriority:function(Y){u||s.priority<Y&&(d?d.close():l.close())}}},n}(),fs=hs;function vn(n,e){return F.defer(function(){e(n)}),{abort:function(){},forceMinPriority:function(){}}}var ds=I.Transports,ps=function(n,e,i,s,u,l){var d=ds[i];if(!d)throw new J(i);var v=(!n.enabledTransports||Qt(n.enabledTransports,e)!==-1)&&(!n.disabledTransports||Qt(n.disabledTransports,e)===-1),S;return v?(u=Object.assign({ignoreNullOrigin:n.ignoreNullOrigin},u),S=new fs(e,s,l?l.getAssistant(d):d,u)):S=gs,S},gs={isSupported:function(){return!1},connect:function(n,e){var i=F.defer(function(){e(new G)});return{abort:function(){i.ensureAborted()},forceMinPriority:function(){}}}};function vs(n){if(n==null)throw"You must pass an options object";if(n.cluster==null)throw"Options object must provide a cluster";"disableStats"in n&&L.warn("The disableStats option is deprecated in favor of enableStats")}var ys=function(n,e){var i="socket_id="+encodeURIComponent(n.socketId);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},ms=function(n){if(typeof I.getAuthorizers()[n.transport]>"u")throw"'"+n.transport+"' is not a recognized auth transport";return function(e,i){var s=ys(e,n);I.getAuthorizers()[n.transport](I,s,n,y.UserAuthentication,i)}},bs=ms,_s=function(n,e){var i="socket_id="+encodeURIComponent(n.socketId);i+="&channel_name="+encodeURIComponent(n.channelName);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},ws=function(n){if(typeof I.getAuthorizers()[n.transport]>"u")throw"'"+n.transport+"' is not a recognized auth transport";return function(e,i){var s=_s(e,n);I.getAuthorizers()[n.transport](I,s,n,y.ChannelAuthorization,i)}},Ss=ws,ks=function(n,e,i){var s={authTransport:e.transport,authEndpoint:e.endpoint,auth:{params:e.params,headers:e.headers}};return function(u,l){var d=n.channel(u.channelName),v=i(d,s);v.authorize(u.socketId,l)}},Se=function(){return Se=Object.assign||function(n){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u])}return n},Se.apply(this,arguments)};function Ts(n,e){var i={activityTimeout:n.activityTimeout||p.activityTimeout,cluster:n.cluster,httpPath:n.httpPath||p.httpPath,httpPort:n.httpPort||p.httpPort,httpsPort:n.httpsPort||p.httpsPort,pongTimeout:n.pongTimeout||p.pongTimeout,statsHost:n.statsHost||p.stats_host,unavailableTimeout:n.unavailableTimeout||p.unavailableTimeout,wsPath:n.wsPath||p.wsPath,wsPort:n.wsPort||p.wsPort,wssPort:n.wssPort||p.wssPort,enableStats:Ps(n),httpHost:Cs(n),useTLS:As(n),wsHost:Is(n),userAuthenticator:Os(n),channelAuthorizer:Ds(n,e)};return"disabledTransports"in n&&(i.disabledTransports=n.disabledTransports),"enabledTransports"in n&&(i.enabledTransports=n.enabledTransports),"ignoreNullOrigin"in n&&(i.ignoreNullOrigin=n.ignoreNullOrigin),"timelineParams"in n&&(i.timelineParams=n.timelineParams),"nacl"in n&&(i.nacl=n.nacl),i}function Cs(n){return n.httpHost?n.httpHost:n.cluster?"sockjs-"+n.cluster+".pusher.com":p.httpHost}function Is(n){return n.wsHost?n.wsHost:Es(n.cluster)}function Es(n){return"ws-"+n+".pusher.com"}function As(n){return I.getProtocol()==="https:"?!0:n.forceTLS!==!1}function Ps(n){return"enableStats"in n?n.enableStats:"disableStats"in n?!n.disableStats:!1}function Os(n){var e=Se(Se({},p.userAuthentication),n.userAuthentication);return"customHandler"in e&&e.customHandler!=null?e.customHandler:bs(e)}function xs(n,e){var i;return"channelAuthorization"in n?i=Se(Se({},p.channelAuthorization),n.channelAuthorization):(i={transport:n.authTransport||p.authTransport,endpoint:n.authEndpoint||p.authEndpoint},"auth"in n&&("params"in n.auth&&(i.params=n.auth.params),"headers"in n.auth&&(i.headers=n.auth.headers)),"authorizer"in n&&(i.customHandler=ks(e,i,n.authorizer))),i}function Ds(n,e){var i=xs(n,e);return"customHandler"in i&&i.customHandler!=null?i.customHandler:Ss(i)}var Rs=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ls=function(n){Rs(e,n);function e(i){var s=n.call(this,function(u,l){L.debug("No callbacks on watchlist events for "+u)})||this;return s.pusher=i,s.bindWatchlistInternalEvent(),s}return e.prototype.handleEvent=function(i){var s=this;i.data.events.forEach(function(u){s.emit(u.name,u)})},e.prototype.bindWatchlistInternalEvent=function(){var i=this;this.pusher.connection.bind("message",function(s){var u=s.event;u==="pusher_internal:watchlist_events"&&i.handleEvent(s)})},e}(ne),Ns=Ls;function js(){var n,e,i=new Promise(function(s,u){n=s,e=u});return{promise:i,resolve:n,reject:e}}var Ms=js,Bs=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Fs=function(n){Bs(e,n);function e(i){var s=n.call(this,function(u,l){L.debug("No callbacks on user for "+u)})||this;return s.signin_requested=!1,s.user_data=null,s.serverToUserChannel=null,s.signinDonePromise=null,s._signinDoneResolve=null,s._onAuthorize=function(u,l){if(u){L.warn("Error during signin: "+u),s._cleanup();return}s.pusher.send_event("pusher:signin",{auth:l.auth,user_data:l.user_data})},s.pusher=i,s.pusher.connection.bind("state_change",function(u){var l=u.previous,d=u.current;l!=="connected"&&d==="connected"&&s._signin(),l==="connected"&&d!=="connected"&&(s._cleanup(),s._newSigninPromiseIfNeeded())}),s.watchlist=new Ns(i),s.pusher.connection.bind("message",function(u){var l=u.event;l==="pusher:signin_success"&&s._onSigninSuccess(u.data),s.serverToUserChannel&&s.serverToUserChannel.name===u.channel&&s.serverToUserChannel.handleEvent(u)}),s}return e.prototype.signin=function(){this.signin_requested||(this.signin_requested=!0,this._signin())},e.prototype._signin=function(){!this.signin_requested||(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))},e.prototype._onSigninSuccess=function(i){try{this.user_data=JSON.parse(i.user_data)}catch{L.error("Failed parsing user data after signin: "+i.user_data),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){L.error("user_data doesn't contain an id. user_data: "+this.user_data),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()},e.prototype._subscribeChannels=function(){var i=this,s=function(u){u.subscriptionPending&&u.subscriptionCancelled?u.reinstateSubscription():!u.subscriptionPending&&i.pusher.connection.state==="connected"&&u.subscribe()};this.serverToUserChannel=new rt("#server-to-user-"+this.user_data.id,this.pusher),this.serverToUserChannel.bind_global(function(u,l){u.indexOf("pusher_internal:")===0||u.indexOf("pusher:")===0||i.emit(u,l)}),s(this.serverToUserChannel)},e.prototype._cleanup=function(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()},e.prototype._newSigninPromiseIfNeeded=function(){if(!!this.signin_requested&&!(this.signinDonePromise&&!this.signinDonePromise.done)){var i=Ms(),s=i.promise,u=i.resolve;s.done=!1;var l=function(){s.done=!0};s.then(l).catch(l),this.signinDonePromise=s,this._signinDoneResolve=u}},e}(ne),Hs=Fs,yn=function(){function n(e,i){var s=this;$s(e),vs(i),this.key=e,this.config=Ts(i,this),this.channels=re.createChannels(),this.global_emitter=new ne,this.sessionID=I.randomInt(1e9),this.timeline=new ls(this.key,this.sessionID,{cluster:this.config.cluster,features:n.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:qe.INFO,version:p.VERSION}),this.config.enableStats&&(this.timelineSender=re.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+I.TimelineTransport.name}));var u=function(l){return I.getDefaultStrategy(s.config,l,ps)};this.connection=re.createConnectionManager(this.key,{getStrategy:u,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:Boolean(this.config.useTLS)}),this.connection.bind("connected",function(){s.subscribeAll(),s.timelineSender&&s.timelineSender.send(s.connection.isUsingTLS())}),this.connection.bind("message",function(l){var d=l.event,v=d.indexOf("pusher_internal:")===0;if(l.channel){var S=s.channel(l.channel);S&&S.handleEvent(l)}v||s.global_emitter.emit(l.event,l.data)}),this.connection.bind("connecting",function(){s.channels.disconnect()}),this.connection.bind("disconnected",function(){s.channels.disconnect()}),this.connection.bind("error",function(l){L.warn(l)}),n.instances.push(this),this.timeline.info({instances:n.instances.length}),this.user=new Hs(this),n.isReady&&this.connect()}return n.ready=function(){n.isReady=!0;for(var e=0,i=n.instances.length;e<i;e++)n.instances[e].connect()},n.getClientFeatures=function(){return Zt(nn({ws:I.Transports.ws},function(e){return e.isSupported({})}))},n.prototype.channel=function(e){return this.channels.find(e)},n.prototype.allChannels=function(){return this.channels.all()},n.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var e=this.connection.isUsingTLS(),i=this.timelineSender;this.timelineSenderTimer=new ii(6e4,function(){i.send(e)})}},n.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},n.prototype.bind=function(e,i,s){return this.global_emitter.bind(e,i,s),this},n.prototype.unbind=function(e,i,s){return this.global_emitter.unbind(e,i,s),this},n.prototype.bind_global=function(e){return this.global_emitter.bind_global(e),this},n.prototype.unbind_global=function(e){return this.global_emitter.unbind_global(e),this},n.prototype.unbind_all=function(e){return this.global_emitter.unbind_all(),this},n.prototype.subscribeAll=function(){var e;for(e in this.channels.channels)this.channels.channels.hasOwnProperty(e)&&this.subscribe(e)},n.prototype.subscribe=function(e){var i=this.channels.add(e,this);return i.subscriptionPending&&i.subscriptionCancelled?i.reinstateSubscription():!i.subscriptionPending&&this.connection.state==="connected"&&i.subscribe(),i},n.prototype.unsubscribe=function(e){var i=this.channels.find(e);i&&i.subscriptionPending?i.cancelSubscription():(i=this.channels.remove(e),i&&i.subscribed&&i.unsubscribe())},n.prototype.send_event=function(e,i,s){return this.connection.send_event(e,i,s)},n.prototype.shouldUseTLS=function(){return this.config.useTLS},n.prototype.signin=function(){this.user.signin()},n.instances=[],n.isReady=!1,n.logToConsole=!1,n.Runtime=I,n.ScriptReceivers=I.ScriptReceivers,n.DependenciesReceivers=I.DependenciesReceivers,n.auth_callbacks=I.auth_callbacks,n}(),lt=c.default=yn;function $s(n){if(n==null)throw"You must pass your app key when you instantiate Pusher."}I.setup(yn)}])})})(sr);const On=na(sr.exports),xe=class{constructor(){R(this,"cancelled",!1);R(this,"equipamento_conversa_id");R(this,"usuario_id");R(this,"mensagem");R(this,"mensagem_id");R(this,"notify",()=>{xe.listeners.forEach(t=>{this.cancelled||t.callback(this)})})}};let Ae=xe;R(Ae,"listeners",[]),R(Ae,"addListener",function(o){xe.listeners.push(o),xe.listeners.sort((c,a)=>c.priority-a.priority)});const De=class{constructor(){R(this,"cancelled",!1);R(this,"notificacao");R(this,"notify",()=>{De.listeners.forEach(t=>{this.cancelled||t.callback(this)})})}};let ke=De;R(ke,"listeners",[]),R(ke,"addListener",function(t){De.listeners.push(t),De.listeners.sort((o,c)=>o.priority-c.priority)});class Ia{constructor(){R(this,"id");R(this,"visualizado");R(this,"usuario_id");R(this,"titulo");R(this,"texto")}}const dt={broadcaster:"pusher",key:"app-key",cluster:"mt1",forceTLS:!1,wsHost:"localhost",wsPort:"10010",wssPort:"10010",authEndpoint:"/broadcasting/auth"};function Ea(){Nt(()=>{var r,t,o;window.Echo=new Ca({...dt,client:new On(dt.key,dt)}),(o=(t=(r=In())==null?void 0:r.props)==null?void 0:t.auth)!=null&&o.user&&(window.Echo.private(`notificacoes.${In().props.auth.user.id}`).listen(".ConversaWebSocket",c=>Aa(c)).listen(".NotificacaoWebSocket",c=>Pa(c)).listenToAll((c,a)=>console.log([c,a])),window.Pusher=On)})}function Aa(r){const t=new Ae;t.mensagem_id=r.notification.mensagem.id,t.mensagem=r.notification.mensagem.mensagem,t.usuario_id=r.notification.mensagem.usuario_id,t.equipamento_conversa_id=r.notification.mensagem.equipamento_conversa_id,t.notify()}function Pa(r){console.log("notificacaows");const t=new ke;t.notificacao=new Ia,t.notificacao.id=r.notification.notificacao.id,t.notificacao.visualizado=r.notification.notificacao.visualizado,t.notificacao.usuario_id=r.notification.notificacao.usuario_id,t.notificacao.titulo=r.notification.notificacao.titulo,t.notificacao.texto=r.notification.notificacao.texto,t.notify()}/**
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
 */const ar=function(r){const t=[];let o=0;for(let c=0;c<r.length;c++){let a=r.charCodeAt(c);a<128?t[o++]=a:a<2048?(t[o++]=a>>6|192,t[o++]=a&63|128):(a&64512)===55296&&c+1<r.length&&(r.charCodeAt(c+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++c)&1023),t[o++]=a>>18|240,t[o++]=a>>12&63|128,t[o++]=a>>6&63|128,t[o++]=a&63|128):(t[o++]=a>>12|224,t[o++]=a>>6&63|128,t[o++]=a&63|128)}return t},Oa=function(r){const t=[];let o=0,c=0;for(;o<r.length;){const a=r[o++];if(a<128)t[c++]=String.fromCharCode(a);else if(a>191&&a<224){const h=r[o++];t[c++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=r[o++],f=r[o++],g=r[o++],p=((a&7)<<18|(h&63)<<12|(f&63)<<6|g&63)-65536;t[c++]=String.fromCharCode(55296+(p>>10)),t[c++]=String.fromCharCode(56320+(p&1023))}else{const h=r[o++],f=r[o++];t[c++]=String.fromCharCode((a&15)<<12|(h&63)<<6|f&63)}}return t.join("")},cr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let a=0;a<r.length;a+=3){const h=r[a],f=a+1<r.length,g=f?r[a+1]:0,p=a+2<r.length,w=p?r[a+2]:0,_=h>>2,E=(h&3)<<4|g>>4;let T=(g&15)<<2|w>>6,k=w&63;p||(k=64,f||(T=64)),c.push(o[_],o[E],o[T],o[k])}return c.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(ar(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Oa(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const o=t?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let a=0;a<r.length;){const h=o[r.charAt(a++)],g=a<r.length?o[r.charAt(a)]:0;++a;const w=a<r.length?o[r.charAt(a)]:64;++a;const E=a<r.length?o[r.charAt(a)]:64;if(++a,h==null||g==null||w==null||E==null)throw Error();const T=h<<2|g>>4;if(c.push(T),w!==64){const k=g<<4&240|w>>2;if(c.push(k),E!==64){const O=w<<6&192|E;c.push(O)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},xa=function(r){const t=ar(r);return cr.encodeByteArray(t,!0)},ur=function(r){return xa(r).replace(/\./g,"")},Da=function(r){try{return cr.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ra(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const La=()=>Ra().__FIREBASE_DEFAULTS__,Na=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ja=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Da(r[1]);return t&&JSON.parse(t)},Ma=()=>{try{return La()||Na()||ja()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ba=()=>{var r;return(r=Ma())===null||r===void 0?void 0:r.config};/**
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
 */class Fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,o)=>{this.resolve=t,this.reject=o})}wrapCallback(t){return(o,c)=>{o?this.reject(o):this.resolve(c),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(o):t(o,c))}}}function Ha(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Bt(){try{return typeof indexedDB=="object"}catch{return!1}}function Ft(){return new Promise((r,t)=>{try{let o=!0;const c="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(c);a.onsuccess=()=>{a.result.close(),o||self.indexedDB.deleteDatabase(c),r(!0)},a.onupgradeneeded=()=>{o=!1},a.onerror=()=>{var h;t(((h=a.error)===null||h===void 0?void 0:h.message)||"")}}catch(o){t(o)}})}function lr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $a="FirebaseError";class _e extends Error{constructor(t,o,c){super(o),this.code=t,this.customData=c,this.name=$a,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,je.prototype.create)}}class je{constructor(t,o,c){this.service=t,this.serviceName=o,this.errors=c}create(t,...o){const c=o[0]||{},a=`${this.service}/${t}`,h=this.errors[t],f=h?Ua(h,c):"Error",g=`${this.serviceName}: ${f} (${a}).`;return new _e(a,g,c)}}function Ua(r,t){return r.replace(qa,(o,c)=>{const a=t[c];return a!=null?String(a):`<${c}?>`})}const qa=/\{\$([^}]+)}/g;function We(r,t){if(r===t)return!0;const o=Object.keys(r),c=Object.keys(t);for(const a of o){if(!c.includes(a))return!1;const h=r[a],f=t[a];if(xn(h)&&xn(f)){if(!We(h,f))return!1}else if(h!==f)return!1}for(const a of c)if(!o.includes(a))return!1;return!0}function xn(r){return r!==null&&typeof r=="object"}/**
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
 */const za=1e3,Va=2,Wa=4*60*60*1e3,Ka=.5;function Dn(r,t=za,o=Va){const c=t*Math.pow(o,r),a=Math.round(Ka*c*(Math.random()-.5)*2);return Math.min(Wa,c+a)}/**
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
 */function Me(r){return r&&r._delegate?r._delegate:r}class Z{constructor(t,o,c){this.name=t,this.instanceFactory=o,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class Ga{constructor(t,o){this.name=t,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const o=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(o)){const c=new Fa;if(this.instancesDeferred.set(o,c),this.isInitialized(o)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:o});a&&c.resolve(a)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(t){var o;const c=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(o=t==null?void 0:t.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(h){if(a)return null;throw h}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xa(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[o,c]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);try{const h=this.getOrInitializeService({instanceIdentifier:a});c.resolve(h)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...t.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:o={}}=t,c=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:c,options:o});for(const[h,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(h);c===g&&f.resolve(a)}return a}onInit(t,o){var c;const a=this.normalizeInstanceIdentifier(o),h=(c=this.onInitCallbacks.get(a))!==null&&c!==void 0?c:new Set;h.add(t),this.onInitCallbacks.set(a,h);const f=this.instances.get(a);return f&&t(f,a),()=>{h.delete(t)}}invokeOnInitCallbacks(t,o){const c=this.onInitCallbacks.get(o);if(!!c)for(const a of c)try{a(t,o)}catch{}}getOrInitializeService({instanceIdentifier:t,options:o={}}){let c=this.instances.get(t);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:Ja(t),options:o}),this.instances.set(t,c),this.instancesOptions.set(t,o),this.invokeOnInitCallbacks(c,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,c)}catch{}return c||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ja(r){return r===de?void 0:r}function Xa(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ya{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const o=this.getProvider(t.name);if(o.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);o.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const o=new Ga(t,this);return this.providers.set(t,o),o}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(x||(x={}));const Qa={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Za=x.INFO,ec={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},tc=(r,t,...o)=>{if(t<r.logLevel)return;const c=new Date().toISOString(),a=ec[t];if(a)console[a](`[${c}]  ${r.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hr{constructor(t){this.name=t,this._logLevel=Za,this._logHandler=tc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const nc=(r,t)=>t.some(o=>r instanceof o);let Rn,Ln;function rc(){return Rn||(Rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ic(){return Ln||(Ln=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fr=new WeakMap,At=new WeakMap,dr=new WeakMap,pt=new WeakMap,Ht=new WeakMap;function oc(r){const t=new Promise((o,c)=>{const a=()=>{r.removeEventListener("success",h),r.removeEventListener("error",f)},h=()=>{o(oe(r.result)),a()},f=()=>{c(r.error),a()};r.addEventListener("success",h),r.addEventListener("error",f)});return t.then(o=>{o instanceof IDBCursor&&fr.set(o,r)}).catch(()=>{}),Ht.set(t,r),t}function sc(r){if(At.has(r))return;const t=new Promise((o,c)=>{const a=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",f),r.removeEventListener("abort",f)},h=()=>{o(),a()},f=()=>{c(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",h),r.addEventListener("error",f),r.addEventListener("abort",f)});At.set(r,t)}let Pt={get(r,t,o){if(r instanceof IDBTransaction){if(t==="done")return At.get(r);if(t==="objectStoreNames")return r.objectStoreNames||dr.get(r);if(t==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return oe(r[t])},set(r,t,o){return r[t]=o,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function ac(r){Pt=r(Pt)}function cc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...o){const c=r.call(gt(this),t,...o);return dr.set(c,t.sort?t.sort():[t]),oe(c)}:ic().includes(r)?function(...t){return r.apply(gt(this),t),oe(fr.get(this))}:function(...t){return oe(r.apply(gt(this),t))}}function uc(r){return typeof r=="function"?cc(r):(r instanceof IDBTransaction&&sc(r),nc(r,rc())?new Proxy(r,Pt):r)}function oe(r){if(r instanceof IDBRequest)return oc(r);if(pt.has(r))return pt.get(r);const t=uc(r);return t!==r&&(pt.set(r,t),Ht.set(t,r)),t}const gt=r=>Ht.get(r);function Ye(r,t,{blocked:o,upgrade:c,blocking:a,terminated:h}={}){const f=indexedDB.open(r,t),g=oe(f);return c&&f.addEventListener("upgradeneeded",p=>{c(oe(f.result),p.oldVersion,p.newVersion,oe(f.transaction))}),o&&f.addEventListener("blocked",()=>o()),g.then(p=>{h&&p.addEventListener("close",()=>h()),a&&p.addEventListener("versionchange",()=>a())}).catch(()=>{}),g}function vt(r,{blocked:t}={}){const o=indexedDB.deleteDatabase(r);return t&&o.addEventListener("blocked",()=>t()),oe(o).then(()=>{})}const lc=["get","getKey","getAll","getAllKeys","count"],hc=["put","add","delete","clear"],yt=new Map;function Nn(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(yt.get(t))return yt.get(t);const o=t.replace(/FromIndex$/,""),c=t!==o,a=hc.includes(o);if(!(o in(c?IDBIndex:IDBObjectStore).prototype)||!(a||lc.includes(o)))return;const h=async function(f,...g){const p=this.transaction(f,a?"readwrite":"readonly");let w=p.store;return c&&(w=w.index(g.shift())),(await Promise.all([w[o](...g),a&&p.done]))[0]};return yt.set(t,h),h}ac(r=>({...r,get:(t,o,c)=>Nn(t,o)||r.get(t,o,c),has:(t,o)=>!!Nn(t,o)||r.has(t,o)}));/**
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
 */class fc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(dc(o)){const c=o.getImmediate();return`${c.library}/${c.version}`}else return null}).filter(o=>o).join(" ")}}function dc(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ot="@firebase/app",jn="0.9.3";/**
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
 */const ve=new hr("@firebase/app"),pc="@firebase/app-compat",gc="@firebase/analytics-compat",vc="@firebase/analytics",yc="@firebase/app-check-compat",mc="@firebase/app-check",bc="@firebase/auth",_c="@firebase/auth-compat",wc="@firebase/database",Sc="@firebase/database-compat",kc="@firebase/functions",Tc="@firebase/functions-compat",Cc="@firebase/installations",Ic="@firebase/installations-compat",Ec="@firebase/messaging",Ac="@firebase/messaging-compat",Pc="@firebase/performance",Oc="@firebase/performance-compat",xc="@firebase/remote-config",Dc="@firebase/remote-config-compat",Rc="@firebase/storage",Lc="@firebase/storage-compat",Nc="@firebase/firestore",jc="@firebase/firestore-compat",Mc="firebase";/**
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
 */const xt="[DEFAULT]",Bc={[Ot]:"fire-core",[pc]:"fire-core-compat",[vc]:"fire-analytics",[gc]:"fire-analytics-compat",[mc]:"fire-app-check",[yc]:"fire-app-check-compat",[bc]:"fire-auth",[_c]:"fire-auth-compat",[wc]:"fire-rtdb",[Sc]:"fire-rtdb-compat",[kc]:"fire-fn",[Tc]:"fire-fn-compat",[Cc]:"fire-iid",[Ic]:"fire-iid-compat",[Ec]:"fire-fcm",[Ac]:"fire-fcm-compat",[Pc]:"fire-perf",[Oc]:"fire-perf-compat",[xc]:"fire-rc",[Dc]:"fire-rc-compat",[Rc]:"fire-gcs",[Lc]:"fire-gcs-compat",[Nc]:"fire-fst",[jc]:"fire-fst-compat","fire-js":"fire-js",[Mc]:"fire-js-all"};/**
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
 */const Ke=new Map,Dt=new Map;function Fc(r,t){try{r.container.addComponent(t)}catch(o){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,o)}}function se(r){const t=r.name;if(Dt.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;Dt.set(t,r);for(const o of Ke.values())Fc(o,r);return!0}function Be(r,t){const o=r.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),r.container.getProvider(t)}/**
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
 */const Hc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new je("app","Firebase",Hc);/**
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
 */class $c{constructor(t,o,c){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function pr(r,t={}){let o=r;typeof t!="object"&&(t={name:t});const c=Object.assign({name:xt,automaticDataCollectionEnabled:!1},t),a=c.name;if(typeof a!="string"||!a)throw ce.create("bad-app-name",{appName:String(a)});if(o||(o=Ba()),!o)throw ce.create("no-options");const h=Ke.get(a);if(h){if(We(o,h.options)&&We(c,h.config))return h;throw ce.create("duplicate-app",{appName:a})}const f=new Ya(a);for(const p of Dt.values())f.addComponent(p);const g=new $c(o,c,f);return Ke.set(a,g),g}function gr(r=xt){const t=Ke.get(r);if(!t&&r===xt)return pr();if(!t)throw ce.create("no-app",{appName:r});return t}function Q(r,t,o){var c;let a=(c=Bc[r])!==null&&c!==void 0?c:r;o&&(a+=`-${o}`);const h=a.match(/\s|\//),f=t.match(/\s|\//);if(h||f){const g=[`Unable to register library "${a}" with version "${t}":`];h&&g.push(`library name "${a}" contains illegal characters (whitespace or "/")`),h&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(g.join(" "));return}se(new Z(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const Uc="firebase-heartbeat-database",qc=1,Le="firebase-heartbeat-store";let mt=null;function vr(){return mt||(mt=Ye(Uc,qc,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Le)}}}).catch(r=>{throw ce.create("idb-open",{originalErrorMessage:r.message})})),mt}async function zc(r){try{return(await vr()).transaction(Le).objectStore(Le).get(yr(r))}catch(t){if(t instanceof _e)ve.warn(t.message);else{const o=ce.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ve.warn(o.message)}}}async function Mn(r,t){try{const c=(await vr()).transaction(Le,"readwrite");return await c.objectStore(Le).put(t,yr(r)),c.done}catch(o){if(o instanceof _e)ve.warn(o.message);else{const c=ce.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});ve.warn(c.message)}}}function yr(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Vc=1024,Wc=30*24*60*60*1e3;class Kc{constructor(t){this.container=t,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new Jc(o),this._heartbeatsCachePromise=this._storage.read().then(c=>(this._heartbeatsCache=c,c))}async triggerHeartbeat(){const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Bn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(a=>a.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const h=new Date(a.date).valueOf();return Date.now()-h<=Wc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bn(),{heartbeatsToSend:o,unsentEntries:c}=Gc(this._heartbeatsCache.heartbeats),a=ur(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=t,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Bn(){return new Date().toISOString().substring(0,10)}function Gc(r,t=Vc){const o=[];let c=r.slice();for(const a of r){const h=o.find(f=>f.agent===a.agent);if(h){if(h.dates.push(a.date),Fn(o)>t){h.dates.pop();break}}else if(o.push({agent:a.agent,dates:[a.date]}),Fn(o)>t){o.pop();break}c=c.slice(1)}return{heartbeatsToSend:o,unsentEntries:c}}class Jc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bt()?Ft().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var o;if(await this._canUseIndexedDBPromise){const a=await this.read();return Mn(this.app,{lastSentHeartbeatDate:(o=t.lastSentHeartbeatDate)!==null&&o!==void 0?o:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var o;if(await this._canUseIndexedDBPromise){const a=await this.read();return Mn(this.app,{lastSentHeartbeatDate:(o=t.lastSentHeartbeatDate)!==null&&o!==void 0?o:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Fn(r){return ur(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Xc(r){se(new Z("platform-logger",t=>new fc(t),"PRIVATE")),se(new Z("heartbeat",t=>new Kc(t),"PRIVATE")),Q(Ot,jn,r),Q(Ot,jn,"esm2017"),Q("fire-js","")}Xc("");var Yc="firebase",Qc="9.17.1";/**
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
 */Q(Yc,Qc,"app");const mr="@firebase/installations",$t="0.6.3";/**
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
 */const br=1e4,_r=`w:${$t}`,wr="FIS_v2",Zc="https://firebaseinstallations.googleapis.com/v1",eu=60*60*1e3,tu="installations",nu="Installations";/**
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
 */const ru={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ye=new je(tu,nu,ru);function Sr(r){return r instanceof _e&&r.code.includes("request-failed")}/**
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
 */function kr({projectId:r}){return`${Zc}/projects/${r}/installations`}function Tr(r){return{token:r.token,requestStatus:2,expiresIn:ou(r.expiresIn),creationTime:Date.now()}}async function Cr(r,t){const c=(await t.json()).error;return ye.create("request-failed",{requestName:r,serverCode:c.code,serverMessage:c.message,serverStatus:c.status})}function Ir({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function iu(r,{refreshToken:t}){const o=Ir(r);return o.append("Authorization",su(t)),o}async function Er(r){const t=await r();return t.status>=500&&t.status<600?r():t}function ou(r){return Number(r.replace("s","000"))}function su(r){return`${wr} ${r}`}/**
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
 */async function au({appConfig:r,heartbeatServiceProvider:t},{fid:o}){const c=kr(r),a=Ir(r),h=t.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&a.append("x-firebase-client",w)}const f={fid:o,authVersion:wr,appId:r.appId,sdkVersion:_r},g={method:"POST",headers:a,body:JSON.stringify(f)},p=await Er(()=>fetch(c,g));if(p.ok){const w=await p.json();return{fid:w.fid||o,registrationStatus:2,refreshToken:w.refreshToken,authToken:Tr(w.authToken)}}else throw await Cr("Create Installation",p)}/**
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
 */function Ar(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function cu(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uu=/^[cdef][\w-]{21}$/,Rt="";function lu(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const o=hu(r);return uu.test(o)?o:Rt}catch{return Rt}}function hu(r){return cu(r).substr(0,22)}/**
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
 */function Qe(r){return`${r.appName}!${r.appId}`}/**
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
 */const Pr=new Map;function Or(r,t){const o=Qe(r);xr(o,t),fu(o,t)}function xr(r,t){const o=Pr.get(r);if(!!o)for(const c of o)c(t)}function fu(r,t){const o=du();o&&o.postMessage({key:r,fid:t}),pu()}let pe=null;function du(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=r=>{xr(r.data.key,r.data.fid)}),pe}function pu(){Pr.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const gu="firebase-installations-database",vu=1,me="firebase-installations-store";let bt=null;function Ut(){return bt||(bt=Ye(gu,vu,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(me)}}})),bt}async function Ge(r,t){const o=Qe(r),a=(await Ut()).transaction(me,"readwrite"),h=a.objectStore(me),f=await h.get(o);return await h.put(t,o),await a.done,(!f||f.fid!==t.fid)&&Or(r,t.fid),t}async function Dr(r){const t=Qe(r),c=(await Ut()).transaction(me,"readwrite");await c.objectStore(me).delete(t),await c.done}async function Ze(r,t){const o=Qe(r),a=(await Ut()).transaction(me,"readwrite"),h=a.objectStore(me),f=await h.get(o),g=t(f);return g===void 0?await h.delete(o):await h.put(g,o),await a.done,g&&(!f||f.fid!==g.fid)&&Or(r,g.fid),g}/**
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
 */async function qt(r){let t;const o=await Ze(r.appConfig,c=>{const a=yu(c),h=mu(r,a);return t=h.registrationPromise,h.installationEntry});return o.fid===Rt?{installationEntry:await t}:{installationEntry:o,registrationPromise:t}}function yu(r){const t=r||{fid:lu(),registrationStatus:0};return Rr(t)}function mu(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ye.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const o={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},c=bu(r,o);return{installationEntry:o,registrationPromise:c}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_u(r)}:{installationEntry:t}}async function bu(r,t){try{const o=await au(r,t);return Ge(r.appConfig,o)}catch(o){throw Sr(o)&&o.customData.serverCode===409?await Dr(r.appConfig):await Ge(r.appConfig,{fid:t.fid,registrationStatus:0}),o}}async function _u(r){let t=await Hn(r.appConfig);for(;t.registrationStatus===1;)await Ar(100),t=await Hn(r.appConfig);if(t.registrationStatus===0){const{installationEntry:o,registrationPromise:c}=await qt(r);return c||o}return t}function Hn(r){return Ze(r,t=>{if(!t)throw ye.create("installation-not-found");return Rr(t)})}function Rr(r){return wu(r)?{fid:r.fid,registrationStatus:0}:r}function wu(r){return r.registrationStatus===1&&r.registrationTime+br<Date.now()}/**
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
 */async function Su({appConfig:r,heartbeatServiceProvider:t},o){const c=ku(r,o),a=iu(r,o),h=t.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&a.append("x-firebase-client",w)}const f={installation:{sdkVersion:_r,appId:r.appId}},g={method:"POST",headers:a,body:JSON.stringify(f)},p=await Er(()=>fetch(c,g));if(p.ok){const w=await p.json();return Tr(w)}else throw await Cr("Generate Auth Token",p)}function ku(r,{fid:t}){return`${kr(r)}/${t}/authTokens:generate`}/**
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
 */async function zt(r,t=!1){let o;const c=await Ze(r.appConfig,h=>{if(!Lr(h))throw ye.create("not-registered");const f=h.authToken;if(!t&&Iu(f))return h;if(f.requestStatus===1)return o=Tu(r,t),h;{if(!navigator.onLine)throw ye.create("app-offline");const g=Au(h);return o=Cu(r,g),g}});return o?await o:c.authToken}async function Tu(r,t){let o=await $n(r.appConfig);for(;o.authToken.requestStatus===1;)await Ar(100),o=await $n(r.appConfig);const c=o.authToken;return c.requestStatus===0?zt(r,t):c}function $n(r){return Ze(r,t=>{if(!Lr(t))throw ye.create("not-registered");const o=t.authToken;return Pu(o)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Cu(r,t){try{const o=await Su(r,t),c=Object.assign(Object.assign({},t),{authToken:o});return await Ge(r.appConfig,c),o}catch(o){if(Sr(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await Dr(r.appConfig);else{const c=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ge(r.appConfig,c)}throw o}}function Lr(r){return r!==void 0&&r.registrationStatus===2}function Iu(r){return r.requestStatus===2&&!Eu(r)}function Eu(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+eu}function Au(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Pu(r){return r.requestStatus===1&&r.requestTime+br<Date.now()}/**
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
 */async function Ou(r){const t=r,{installationEntry:o,registrationPromise:c}=await qt(t);return c?c.catch(console.error):zt(t).catch(console.error),o.fid}/**
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
 */async function xu(r,t=!1){const o=r;return await Du(o),(await zt(o,t)).token}async function Du(r){const{registrationPromise:t}=await qt(r);t&&await t}/**
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
 */function Ru(r){if(!r||!r.options)throw _t("App Configuration");if(!r.name)throw _t("App Name");const t=["projectId","apiKey","appId"];for(const o of t)if(!r.options[o])throw _t(o);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function _t(r){return ye.create("missing-app-config-values",{valueName:r})}/**
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
 */const Nr="installations",Lu="installations-internal",Nu=r=>{const t=r.getProvider("app").getImmediate(),o=Ru(t),c=Be(t,"heartbeat");return{app:t,appConfig:o,heartbeatServiceProvider:c,_delete:()=>Promise.resolve()}},ju=r=>{const t=r.getProvider("app").getImmediate(),o=Be(t,Nr).getImmediate();return{getId:()=>Ou(o),getToken:a=>xu(o,a)}};function Mu(){se(new Z(Nr,Nu,"PUBLIC")),se(new Z(Lu,ju,"PRIVATE"))}Mu();Q(mr,$t);Q(mr,$t,"esm2017");/**
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
 */const Je="analytics",Bu="firebase_id",Fu="origin",Hu=60*1e3,$u="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jr="https://www.googletagmanager.com/gtag/js";/**
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
 */const q=new hr("@firebase/analytics");/**
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
 */function Mr(r){return Promise.all(r.map(t=>t.catch(o=>o)))}function Uu(r,t){const o=document.createElement("script");o.src=`${jr}?l=${r}&id=${t}`,o.async=!0,document.head.appendChild(o)}function qu(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function zu(r,t,o,c,a,h){const f=c[a];try{if(f)await t[f];else{const p=(await Mr(o)).find(w=>w.measurementId===a);p&&await t[p.appId]}}catch(g){q.error(g)}r("config",a,h)}async function Vu(r,t,o,c,a){try{let h=[];if(a&&a.send_to){let f=a.send_to;Array.isArray(f)||(f=[f]);const g=await Mr(o);for(const p of f){const w=g.find(E=>E.measurementId===p),_=w&&t[w.appId];if(_)h.push(_);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),r("event",c,a||{})}catch(h){q.error(h)}}function Wu(r,t,o,c){async function a(h,f,g){try{h==="event"?await Vu(r,t,o,f,g):h==="config"?await zu(r,t,o,c,f,g):h==="consent"?r("consent","update",g):r("set",f)}catch(p){q.error(p)}}return a}function Ku(r,t,o,c,a){let h=function(...f){window[c].push(arguments)};return window[a]&&typeof window[a]=="function"&&(h=window[a]),window[a]=Wu(h,r,t,o),{gtagCore:h,wrappedGtag:window[a]}}function Gu(r){const t=window.document.getElementsByTagName("script");for(const o of Object.values(t))if(o.src&&o.src.includes(jr)&&o.src.includes(r))return o;return null}/**
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
 */const Ju={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},W=new je("analytics","Analytics",Ju);/**
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
 */const Xu=30,Yu=1e3;class Qu{constructor(t={},o=Yu){this.throttleMetadata=t,this.intervalMillis=o}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,o){this.throttleMetadata[t]=o}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Br=new Qu;function Zu(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function el(r){var t;const{appId:o,apiKey:c}=r,a={method:"GET",headers:Zu(c)},h=$u.replace("{app-id}",o),f=await fetch(h,a);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function tl(r,t=Br,o){const{appId:c,apiKey:a,measurementId:h}=r.options;if(!c)throw W.create("no-app-id");if(!a){if(h)return{measurementId:h,appId:c};throw W.create("no-api-key")}const f=t.getThrottleMetadata(c)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new il;return setTimeout(async()=>{g.abort()},o!==void 0?o:Hu),Fr({appId:c,apiKey:a,measurementId:h},f,g,t)}async function Fr(r,{throttleEndTimeMillis:t,backoffCount:o},c,a=Br){var h;const{appId:f,measurementId:g}=r;try{await nl(c,t)}catch(p){if(g)return q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:g};throw p}try{const p=await el(r);return a.deleteThrottleMetadata(f),p}catch(p){const w=p;if(!rl(w)){if(a.deleteThrottleMetadata(f),g)return q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:f,measurementId:g};throw p}const _=Number((h=w==null?void 0:w.customData)===null||h===void 0?void 0:h.httpStatus)===503?Dn(o,a.intervalMillis,Xu):Dn(o,a.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:o+1};return a.setThrottleMetadata(f,E),q.debug(`Calling attemptFetch again in ${_} millis`),Fr(r,E,c,a)}}function nl(r,t){return new Promise((o,c)=>{const a=Math.max(t-Date.now(),0),h=setTimeout(o,a);r.addEventListener(()=>{clearTimeout(h),c(W.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function rl(r){if(!(r instanceof _e)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class il{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ol(r,t,o,c,a){if(a&&a.global){r("event",o,c);return}else{const h=await t,f=Object.assign(Object.assign({},c),{send_to:h});r("event",o,f)}}/**
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
 */async function sl(){if(Bt())try{await Ft()}catch(r){return q.warn(W.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return q.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function al(r,t,o,c,a,h,f){var g;const p=tl(r);p.then(k=>{o[k.measurementId]=k.appId,r.options.measurementId&&k.measurementId!==r.options.measurementId&&q.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>q.error(k)),t.push(p);const w=sl().then(k=>{if(k)return c.getId()}),[_,E]=await Promise.all([p,w]);Gu(h)||Uu(h,_.measurementId),a("js",new Date);const T=(g=f==null?void 0:f.config)!==null&&g!==void 0?g:{};return T[Fu]="firebase",T.update=!0,E!=null&&(T[Bu]=E),a("config",_.measurementId,T),_.measurementId}/**
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
 */class cl{constructor(t){this.app=t}_delete(){return delete Oe[this.app.options.appId],Promise.resolve()}}let Oe={},Un=[];const qn={};let wt="dataLayer",ul="gtag",zn,Hr,Vn=!1;function ll(){const r=[];if(Ha()&&r.push("This is a browser extension environment."),lr()||r.push("Cookies are not available."),r.length>0){const t=r.map((c,a)=>`(${a+1}) ${c}`).join(" "),o=W.create("invalid-analytics-context",{errorInfo:t});q.warn(o.message)}}function hl(r,t,o){ll();const c=r.options.appId;if(!c)throw W.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Oe[c]!=null)throw W.create("already-exists",{id:c});if(!Vn){qu(wt);const{wrappedGtag:h,gtagCore:f}=Ku(Oe,Un,qn,wt,ul);Hr=h,zn=f,Vn=!0}return Oe[c]=al(r,Un,qn,t,zn,wt,o),new cl(r)}function fl(r=gr()){r=Me(r);const t=Be(r,Je);return t.isInitialized()?t.getImmediate():dl(r)}function dl(r,t={}){const o=Be(r,Je);if(o.isInitialized()){const a=o.getImmediate();if(We(t,o.getOptions()))return a;throw W.create("already-initialized")}return o.initialize({options:t})}function pl(r,t,o,c){r=Me(r),ol(Hr,Oe[r.app.options.appId],t,o,c).catch(a=>q.error(a))}const Wn="@firebase/analytics",Kn="0.9.3";function gl(){se(new Z(Je,(t,{options:o})=>{const c=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return hl(c,a,o)},"PUBLIC")),se(new Z("analytics-internal",r,"PRIVATE")),Q(Wn,Kn),Q(Wn,Kn,"esm2017");function r(t){try{const o=t.getProvider(Je).getImmediate();return{logEvent:(c,a,h)=>pl(o,c,a,h)}}catch(o){throw W.create("interop-component-reg-failed",{reason:o})}}}gl();/**
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
 */const vl="/firebase-messaging-sw.js",yl="/firebase-cloud-messaging-push-scope",$r="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ml="https://fcmregistrations.googleapis.com/v1",Ur="google.c.a.c_id",bl="google.c.a.c_l",_l="google.c.a.ts",wl="google.c.a.e";var Gn;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Gn||(Gn={}));/**
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
 */var Ne;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(Ne||(Ne={}));/**
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
 */function ie(r){const t=new Uint8Array(r);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Sl(r){const t="=".repeat((4-r.length%4)%4),o=(r+t).replace(/\-/g,"+").replace(/_/g,"/"),c=atob(o),a=new Uint8Array(c.length);for(let h=0;h<c.length;++h)a[h]=c.charCodeAt(h);return a}/**
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
 */const St="fcm_token_details_db",kl=5,Jn="fcm_token_object_Store";async function Tl(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(St))return null;let t=null;return(await Ye(St,kl,{upgrade:async(c,a,h,f)=>{var g;if(a<2||!c.objectStoreNames.contains(Jn))return;const p=f.objectStore(Jn),w=await p.index("fcmSenderId").get(r);if(await p.clear(),!!w){if(a===2){const _=w;if(!_.auth||!_.p256dh||!_.endpoint)return;t={token:_.fcmToken,createTime:(g=_.createTime)!==null&&g!==void 0?g:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:ie(_.vapidKey)}}}else if(a===3){const _=w;t={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}else if(a===4){const _=w;t={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}}}})).close(),await vt(St),await vt("fcm_vapid_details_db"),await vt("undefined"),Cl(t)?t:null}function Cl(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:t}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Il="firebase-messaging-database",El=1,be="firebase-messaging-store";let kt=null;function Vt(){return kt||(kt=Ye(Il,El,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(be)}}})),kt}async function qr(r){const t=Kt(r),c=await(await Vt()).transaction(be).objectStore(be).get(t);if(c)return c;{const a=await Tl(r.appConfig.senderId);if(a)return await Wt(r,a),a}}async function Wt(r,t){const o=Kt(r),a=(await Vt()).transaction(be,"readwrite");return await a.objectStore(be).put(t,o),await a.done,t}async function Al(r){const t=Kt(r),c=(await Vt()).transaction(be,"readwrite");await c.objectStore(be).delete(t),await c.done}function Kt({appConfig:r}){return r.appId}/**
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
 */const Pl={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},H=new je("messaging","Messaging",Pl);/**
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
 */async function Ol(r,t){const o=await Jt(r),c=Vr(t),a={method:"POST",headers:o,body:JSON.stringify(c)};let h;try{h=await(await fetch(Gt(r.appConfig),a)).json()}catch(f){throw H.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw H.create("token-subscribe-failed",{errorInfo:f})}if(!h.token)throw H.create("token-subscribe-no-token");return h.token}async function xl(r,t){const o=await Jt(r),c=Vr(t.subscriptionOptions),a={method:"PATCH",headers:o,body:JSON.stringify(c)};let h;try{h=await(await fetch(`${Gt(r.appConfig)}/${t.token}`,a)).json()}catch(f){throw H.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw H.create("token-update-failed",{errorInfo:f})}if(!h.token)throw H.create("token-update-no-token");return h.token}async function zr(r,t){const c={method:"DELETE",headers:await Jt(r)};try{const h=await(await fetch(`${Gt(r.appConfig)}/${t}`,c)).json();if(h.error){const f=h.error.message;throw H.create("token-unsubscribe-failed",{errorInfo:f})}}catch(a){throw H.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function Gt({projectId:r}){return`${ml}/projects/${r}/registrations`}async function Jt({appConfig:r,installations:t}){const o=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${o}`})}function Vr({p256dh:r,auth:t,endpoint:o,vapidKey:c}){const a={web:{endpoint:o,auth:t,p256dh:r}};return c!==$r&&(a.web.applicationPubKey=c),a}/**
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
 */const Dl=7*24*60*60*1e3;async function Rl(r){const t=await jl(r.swRegistration,r.vapidKey),o={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:t.endpoint,auth:ie(t.getKey("auth")),p256dh:ie(t.getKey("p256dh"))},c=await qr(r.firebaseDependencies);if(c){if(Ml(c.subscriptionOptions,o))return Date.now()>=c.createTime+Dl?Nl(r,{token:c.token,createTime:Date.now(),subscriptionOptions:o}):c.token;try{await zr(r.firebaseDependencies,c.token)}catch(a){console.warn(a)}return Xn(r.firebaseDependencies,o)}else return Xn(r.firebaseDependencies,o)}async function Ll(r){const t=await qr(r.firebaseDependencies);t&&(await zr(r.firebaseDependencies,t.token),await Al(r.firebaseDependencies));const o=await r.swRegistration.pushManager.getSubscription();return o?o.unsubscribe():!0}async function Nl(r,t){try{const o=await xl(r.firebaseDependencies,t),c=Object.assign(Object.assign({},t),{token:o,createTime:Date.now()});return await Wt(r.firebaseDependencies,c),o}catch(o){throw await Ll(r),o}}async function Xn(r,t){const c={token:await Ol(r,t),createTime:Date.now(),subscriptionOptions:t};return await Wt(r,c),c.token}async function jl(r,t){const o=await r.pushManager.getSubscription();return o||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Sl(t)})}function Ml(r,t){const o=t.vapidKey===r.vapidKey,c=t.endpoint===r.endpoint,a=t.auth===r.auth,h=t.p256dh===r.p256dh;return o&&c&&a&&h}/**
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
 */function Yn(r){const t={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return Bl(t,r),Fl(t,r),Hl(t,r),t}function Bl(r,t){if(!t.notification)return;r.notification={};const o=t.notification.title;o&&(r.notification.title=o);const c=t.notification.body;c&&(r.notification.body=c);const a=t.notification.image;a&&(r.notification.image=a);const h=t.notification.icon;h&&(r.notification.icon=h)}function Fl(r,t){!t.data||(r.data=t.data)}function Hl(r,t){var o,c,a,h,f;if(!t.fcmOptions&&!(!((o=t.notification)===null||o===void 0)&&o.click_action))return;r.fcmOptions={};const g=(a=(c=t.fcmOptions)===null||c===void 0?void 0:c.link)!==null&&a!==void 0?a:(h=t.notification)===null||h===void 0?void 0:h.click_action;g&&(r.fcmOptions.link=g);const p=(f=t.fcmOptions)===null||f===void 0?void 0:f.analytics_label;p&&(r.fcmOptions.analyticsLabel=p)}/**
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
 */function $l(r){return typeof r=="object"&&!!r&&Ur in r}/**
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
 */Wr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Wr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Wr(r,t){const o=[];for(let c=0;c<r.length;c++)o.push(r.charAt(c)),c<t.length&&o.push(t.charAt(c));return o.join("")}/**
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
 */function Ul(r){if(!r||!r.options)throw Tt("App Configuration Object");if(!r.name)throw Tt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:o}=r;for(const c of t)if(!o[c])throw Tt(c);return{appName:r.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function Tt(r){return H.create("missing-app-config-values",{valueName:r})}/**
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
 */class ql{constructor(t,o,c){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=Ul(t);this.firebaseDependencies={app:t,appConfig:a,installations:o,analyticsProvider:c}}_delete(){return Promise.resolve()}}/**
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
 */async function zl(r){try{r.swRegistration=await navigator.serviceWorker.register(vl,{scope:yl}),r.swRegistration.update().catch(()=>{})}catch(t){throw H.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Vl(r,t){if(!t&&!r.swRegistration&&await zl(r),!(!t&&!!r.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw H.create("invalid-sw-registration");r.swRegistration=t}}/**
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
 */async function Wl(r,t){t?r.vapidKey=t:r.vapidKey||(r.vapidKey=$r)}/**
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
 */async function Kr(r,t){if(!navigator)throw H.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw H.create("permission-blocked");return await Wl(r,t==null?void 0:t.vapidKey),await Vl(r,t==null?void 0:t.serviceWorkerRegistration),Rl(r)}/**
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
 */async function Kl(r,t,o){const c=Gl(t);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(c,{message_id:o[Ur],message_name:o[bl],message_time:o[_l],message_device_time:Math.floor(Date.now()/1e3)})}function Gl(r){switch(r){case Ne.NOTIFICATION_CLICKED:return"notification_open";case Ne.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Jl(r,t){const o=t.data;if(!o.isFirebaseMessaging)return;r.onMessageHandler&&o.messageType===Ne.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(Yn(o)):r.onMessageHandler.next(Yn(o)));const c=o.data;$l(c)&&c[wl]==="1"&&await Kl(r,o.messageType,c)}const Qn="@firebase/messaging",Zn="0.12.3";/**
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
 */const Xl=r=>{const t=new ql(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",o=>Jl(t,o)),t},Yl=r=>{const t=r.getProvider("messaging").getImmediate();return{getToken:c=>Kr(t,c)}};function Ql(){se(new Z("messaging",Xl,"PUBLIC")),se(new Z("messaging-internal",Yl,"PRIVATE")),Q(Qn,Zn),Q(Qn,Zn,"esm2017")}/**
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
 */async function Zl(){try{await Ft()}catch{return!1}return typeof window<"u"&&Bt()&&lr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function eh(r,t){if(!navigator)throw H.create("only-available-in-window");return r.onMessageHandler=t,()=>{r.onMessageHandler=null}}/**
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
 */function th(r=gr()){return Zl().then(t=>{if(!t)throw H.create("unsupported-browser")},t=>{throw H.create("indexed-db-unsupported")}),Be(Me(r),"messaging").getImmediate()}async function nh(r,t){return r=Me(r),Kr(r,t)}function rh(r,t){return r=Me(r),eh(r,t)}Ql();const ih={apiKey:"AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",authDomain:"agroarca-equipamentos.firebaseapp.com",projectId:"agroarca-equipamentos",messagingSenderId:"260002359203",appId:"1:260002359203:web:8c19a187bf2fe28079dc16",measurementId:"G-DHSLGFC76R"},oh="BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU";let ae;class sh{constructor(){R(this,"app");R(this,"messaging");R(this,"analytics");this.app=pr(ih),this.messaging=th(this.app),this.analytics=fl(this.app)}solicitarPermissao(){return new Promise((t,o)=>{if(Notification.permission==="denied"){o();return}if(Notification.permission==="granted"){t();return}Notification.requestPermission().then(c=>{if(Notification.permission==="granted"){t();return}o()})})}iniciarNotificacoes(){Nt(()=>{this.solicitarPermissao().then(this.registrarListeners)})}registrarListeners(){nh(ae.messaging,{vapidKey:oh}).then(t=>{t&&ae.salvarToken(t)}),rh(ae.messaging,ae.onMessage)}salvarToken(t){ra.post(route("site.notificacao.salvarToken"),{token:t})}onMessage(t){this.notificar(` onMessage ${JSON.stringify(t)}`)}notificar(t){new Notification(t)}}function ah(){return ae||(ae=new sh,ae)}function ch(){Ea(),ah().iniciarNotificacoes()}const uh={class:"toast-header"},lh={class:"me-auto"},hh=Pe("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),fh={class:"toast-body"},dh={__name:"Notificacao",props:["id","titulo","texto"],setup(r){const t=r,o=Lt(null);let c;Nt(()=>{c=new ia(o.value),c.show({autohide:!1})});function a(){tr.visit(route("site.notificacao",[t.id]))}return(h,f)=>(ge(),Re("div",{ref_key:"toast",ref:o,class:"toast notificacao",role:"alert",onClick:a},[Pe("div",uh,[Pe("span",lh,En(r.titulo),1),hh]),Pe("div",fh,En(r.texto),1)],512))}};class ph{constructor(t,o=10){R(this,"priority");R(this,"callback");this.priority=o,this.callback=t}}const gh={class:"toast-container position-fixed top-0 end-0 p-3"},vh=oa({__name:"Notificacoes",setup(r){ch();const t=Lt([]);ke.addListener(new ph(o));function o(c){t.value.push(c.notificacao),setTimeout(()=>{const a=t.value.indexOf(c.notificacao);t.value.splice(a,1)},1e5)}return(c,a)=>(ge(),Re("div",gh,[(ge(!0),Re(nr,null,sa(t.value,h=>(ge(),er(dh,aa(ca({key:h.id},h)),null,16))),128))]))}}),_h={__name:"BaseLayout",setup(r){return tr.on("navigate",t=>{document.body.classList.remove("admin"),document.body.classList.remove("site"),route().current("admin.*")?document.body.classList.add("admin"):document.body.classList.add("site")}),(t,o)=>(ge(),Re(nr,null,[ua(vh),la(t.$slots,"default")],64))}},wh=(r,t)=>{const o=r.__vccOpts||r;for(const[c,a]of t)o[c]=a;return o};export{Ae as E,ph as L,wh as _,bh as a,_h as b};

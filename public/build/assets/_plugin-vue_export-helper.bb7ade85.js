var Qs=Object.defineProperty;var Zs=(r,t,o)=>t in r?Qs(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var R=(r,t,o)=>(Zs(r,typeof t!="symbol"?t+"":t,o),o);import{y as ea,l as Lt,J as In,z as ta,k as Nt,T as na,o as ge,g as Re,b as Pe,t as En,A as er,B as ra,F as tr,r as ia,a as nr,C as oa,D as sa,u as rr,e as aa,q as ca,w as ua,i as la,E as ha}from"./app.4e0318e2.js";function Ct(r){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(r)}function j(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function An(r,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function M(r,t,o){return t&&An(r.prototype,t),o&&An(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function It(){return It=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},It.apply(this,arguments)}function z(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&Et(r,t)}function ze(r){return ze=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},ze(r)}function Et(r,t){return Et=Object.setPrototypeOf||function(a,c){return a.__proto__=c,a},Et(r,t)}function fa(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function da(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function pa(r,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return da(r)}function V(r){var t=fa();return function(){var a=ze(r),c;if(t){var h=ze(this).constructor;c=Reflect.construct(a,arguments,h)}else c=a.apply(this,arguments);return pa(this,c)}}var jt=function(){function r(){j(this,r)}return M(r,[{key:"listenForWhisper",value:function(o,a){return this.listen(".client-"+o,a)}},{key:"notification",value:function(o){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",o)}},{key:"stopListeningForWhisper",value:function(o,a){return this.stopListening(".client-"+o,a)}}]),r}(),ir=function(){function r(t){j(this,r),this.setNamespace(t)}return M(r,[{key:"format",value:function(o){return o.charAt(0)==="."||o.charAt(0)==="\\"?o.substr(1):(this.namespace&&(o=this.namespace+"."+o),o.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(o){this.namespace=o}}]),r}(),Xe=function(r){z(o,r);var t=V(o);function o(a,c,h){var f;return j(this,o),f=t.call(this),f.name=c,f.pusher=a,f.options=h,f.eventFormatter=new ir(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"listenToAll",value:function(c){var h=this;return this.subscription.bind_global(function(f,g){if(!f.startsWith("pusher:")){var p=h.options.namespace.replace(/\./g,"\\"),w=f.startsWith(p)?f.substring(p.length+1):"."+f;c(w,g)}}),this}},{key:"stopListening",value:function(c,h){return h?this.subscription.unbind(this.eventFormatter.format(c),h):this.subscription.unbind(this.eventFormatter.format(c)),this}},{key:"stopListeningToAll",value:function(c){return c?this.subscription.unbind_global(c):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(c){return this.on("pusher:subscription_succeeded",function(){c()}),this}},{key:"error",value:function(c){return this.on("pusher:subscription_error",function(h){c(h)}),this}},{key:"on",value:function(c,h){return this.subscription.bind(c,h),this}}]),o}(jt),ga=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(Xe),va=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(Xe),ya=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("pusher:subscription_succeeded",function(h){c(Object.keys(h.members).map(function(f){return h.members[f]}))}),this}},{key:"joining",value:function(c){return this.on("pusher:member_added",function(h){c(h.info)}),this}},{key:"leaving",value:function(c){return this.on("pusher:member_removed",function(h){c(h.info)}),this}},{key:"whisper",value:function(c,h){return this.pusher.channels.channels[this.name].trigger("client-".concat(c),h),this}}]),o}(Xe),or=function(r){z(o,r);var t=V(o);function o(a,c,h){var f;return j(this,o),f=t.call(this),f.events={},f.listeners={},f.name=c,f.socket=a,f.options=h,f.eventFormatter=new ir(f.options.namespace),f.subscribe(),f}return M(o,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(c,h){return this.on(this.eventFormatter.format(c),h),this}},{key:"stopListening",value:function(c,h){return this.unbindEvent(this.eventFormatter.format(c),h),this}},{key:"subscribed",value:function(c){return this.on("connect",function(h){c(h)}),this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){var f=this;return this.listeners[c]=this.listeners[c]||[],this.events[c]||(this.events[c]=function(g,p){f.name===g&&f.listeners[c]&&f.listeners[c].forEach(function(w){return w(p)})},this.socket.on(c,this.events[c])),this.listeners[c].push(h),this}},{key:"unbind",value:function(){var c=this;Object.keys(this.events).forEach(function(h){c.unbindEvent(h)})}},{key:"unbindEvent",value:function(c,h){this.listeners[c]=this.listeners[c]||[],h&&(this.listeners[c]=this.listeners[c].filter(function(f){return f!==h})),(!h||this.listeners[c].length===0)&&(this.events[c]&&(this.socket.removeListener(c,this.events[c]),delete this.events[c]),delete this.listeners[c])}}]),o}(jt),sr=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(c),data:h}),this}}]),o}(or),ma=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this.on("presence:subscribed",function(h){c(h.map(function(f){return f.user_info}))}),this}},{key:"joining",value:function(c){return this.on("presence:joining",function(h){return c(h.user_info)}),this}},{key:"leaving",value:function(c){return this.on("presence:leaving",function(h){return c(h.user_info)}),this}}]),o}(sr),Ve=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(c,h){return this}},{key:"listenToAll",value:function(c){return this}},{key:"stopListening",value:function(c,h){return this}},{key:"subscribed",value:function(c){return this}},{key:"error",value:function(c){return this}},{key:"on",value:function(c,h){return this}}]),o}(jt),Pn=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"whisper",value:function(c,h){return this}}]),o}(Ve),ba=function(r){z(o,r);var t=V(o);function o(){return j(this,o),t.apply(this,arguments)}return M(o,[{key:"here",value:function(c){return this}},{key:"joining",value:function(c){return this}},{key:"leaving",value:function(c){return this}},{key:"whisper",value:function(c,h){return this}}]),o}(Ve),Mt=function(){function r(t){j(this,r),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(t),this.connect()}return M(r,[{key:"setOptions",value:function(o){this.options=It(this._defaultOptions,o);var a=this.csrfToken();return a&&(this.options.auth.headers["X-CSRF-TOKEN"]=a,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=a),a=this.options.bearerToken,a&&(this.options.auth.headers.Authorization="Bearer "+a,this.options.userAuthentication.headers.Authorization="Bearer "+a),o}},{key:"csrfToken",value:function(){var o;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(o=document.querySelector('meta[name="csrf-token"]'))?o.getAttribute("content"):null}}]),r}(),_a=function(r){z(o,r);var t=V(o);function o(){var a;return j(this,o),a=t.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new Xe(this.pusher,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new ga(this.pusher,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"encryptedPrivateChannel",value:function(c){return this.channels["private-encrypted-"+c]||(this.channels["private-encrypted-"+c]=new va(this.pusher,"private-encrypted-"+c,this.options)),this.channels["private-encrypted-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ya(this.pusher,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"private-encrypted-"+c,"presence-"+c];f.forEach(function(g,p){h.leaveChannel(g)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),o}(Mt),wa=function(r){z(o,r);var t=V(o);function o(){var a;return j(this,o),a=t.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){var c=this,h=this.getSocketIO();return this.socket=h(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(c.channels).forEach(function(f){f.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(c,h,f){return this.channel(c).listen(h,f)}},{key:"channel",value:function(c){return this.channels[c]||(this.channels[c]=new or(this.socket,c,this.options)),this.channels[c]}},{key:"privateChannel",value:function(c){return this.channels["private-"+c]||(this.channels["private-"+c]=new sr(this.socket,"private-"+c,this.options)),this.channels["private-"+c]}},{key:"presenceChannel",value:function(c){return this.channels["presence-"+c]||(this.channels["presence-"+c]=new ma(this.socket,"presence-"+c,this.options)),this.channels["presence-"+c]}},{key:"leave",value:function(c){var h=this,f=[c,"private-"+c,"presence-"+c];f.forEach(function(g){h.leaveChannel(g)})}},{key:"leaveChannel",value:function(c){this.channels[c]&&(this.channels[c].unsubscribe(),delete this.channels[c])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),o}(Mt),Sa=function(r){z(o,r);var t=V(o);function o(){var a;return j(this,o),a=t.apply(this,arguments),a.channels={},a}return M(o,[{key:"connect",value:function(){}},{key:"listen",value:function(c,h,f){return new Ve}},{key:"channel",value:function(c){return new Ve}},{key:"privateChannel",value:function(c){return new Pn}},{key:"encryptedPrivateChannel",value:function(c){return new Pn}},{key:"presenceChannel",value:function(c){return new ba}},{key:"leave",value:function(c){}},{key:"leaveChannel",value:function(c){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),o}(Mt),ka=function(){function r(t){j(this,r),this.options=t,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return M(r,[{key:"channel",value:function(o){return this.connector.channel(o)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new _a(this.options):this.options.broadcaster=="socket.io"?this.connector=new wa(this.options):this.options.broadcaster=="null"?this.connector=new Sa(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(o){return this.connector.presenceChannel(o)}},{key:"leave",value:function(o){this.connector.leave(o)}},{key:"leaveChannel",value:function(o){this.connector.leaveChannel(o)}},{key:"leaveAllChannels",value:function(){for(var o in this.connector.channels)this.leaveChannel(o)}},{key:"listen",value:function(o,a,c){return this.connector.listen(o,a,c)}},{key:"private",value:function(o){return this.connector.privateChannel(o)}},{key:"encryptedPrivate",value:function(o){return this.connector.encryptedPrivateChannel(o)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":Ct(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var o=this;Vue.http.interceptors.push(function(a,c){o.socketId()&&a.headers.set("X-Socket-ID",o.socketId()),c()})}},{key:"registerAxiosRequestInterceptor",value:function(){var o=this;axios.interceptors.request.use(function(a){return o.socketId()&&(a.headers["X-Socket-Id"]=o.socketId()),a})}},{key:"registerjQueryAjaxSetup",value:function(){var o=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(a,c,h){o.socketId()&&h.setRequestHeader("X-Socket-Id",o.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var o=this;document.addEventListener("turbo:before-fetch-request",function(a){a.detail.fetchOptions.headers["X-Socket-Id"]=o.socketId()})}}]),r}(),ar={exports:{}};/*!
 * Pusher JavaScript Library v8.0.1
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */(function(r,t){(function(a,c){r.exports=c()})(window,function(){return function(o){var a={};function c(h){if(a[h])return a[h].exports;var f=a[h]={i:h,l:!1,exports:{}};return o[h].call(f.exports,f,f.exports,c),f.l=!0,f.exports}return c.m=o,c.c=a,c.d=function(h,f,g){c.o(h,f)||Object.defineProperty(h,f,{enumerable:!0,get:g})},c.r=function(h){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},c.t=function(h,f){if(f&1&&(h=c(h)),f&8||f&4&&typeof h=="object"&&h&&h.__esModule)return h;var g=Object.create(null);if(c.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:h}),f&2&&typeof h!="string")for(var p in h)c.d(g,p,function(w){return h[w]}.bind(null,p));return g},c.n=function(h){var f=h&&h.__esModule?function(){return h.default}:function(){return h};return c.d(f,"a",f),f},c.o=function(h,f){return Object.prototype.hasOwnProperty.call(h,f)},c.p="",c(c.s=2)}([function(o,a,c){var h=this&&this.__extends||function(){var C=function(y,m){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,D){A.__proto__=D}||function(A,D){for(var B in D)D.hasOwnProperty(B)&&(A[B]=D[B])},C(y,m)};return function(y,m){C(y,m);function A(){this.constructor=y}y.prototype=m===null?Object.create(m):(A.prototype=m.prototype,new A)}}();Object.defineProperty(a,"__esModule",{value:!0});var f=256,g=function(){function C(y){y===void 0&&(y="="),this._paddingCharacter=y}return C.prototype.encodedLength=function(y){return this._paddingCharacter?(y+2)/3*4|0:(y*8+5)/6|0},C.prototype.encode=function(y){for(var m="",A=0;A<y.length-2;A+=3){var D=y[A]<<16|y[A+1]<<8|y[A+2];m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),m+=this._encodeByte(D>>>1*6&63),m+=this._encodeByte(D>>>0*6&63)}var B=y.length-A;if(B>0){var D=y[A]<<16|(B===2?y[A+1]<<8:0);m+=this._encodeByte(D>>>3*6&63),m+=this._encodeByte(D>>>2*6&63),B===2?m+=this._encodeByte(D>>>1*6&63):m+=this._paddingCharacter||"",m+=this._paddingCharacter||""}return m},C.prototype.maxDecodedLength=function(y){return this._paddingCharacter?y/4*3|0:(y*6+7)/8|0},C.prototype.decodedLength=function(y){return this.maxDecodedLength(y.length-this._getPaddingLength(y))},C.prototype.decode=function(y){if(y.length===0)return new Uint8Array(0);for(var m=this._getPaddingLength(y),A=y.length-m,D=new Uint8Array(this.maxDecodedLength(A)),B=0,$=0,K=0,ee=0,J=0,G=0,X=0;$<A-4;$+=4)ee=this._decodeChar(y.charCodeAt($+0)),J=this._decodeChar(y.charCodeAt($+1)),G=this._decodeChar(y.charCodeAt($+2)),X=this._decodeChar(y.charCodeAt($+3)),D[B++]=ee<<2|J>>>4,D[B++]=J<<4|G>>>2,D[B++]=G<<6|X,K|=ee&f,K|=J&f,K|=G&f,K|=X&f;if($<A-1&&(ee=this._decodeChar(y.charCodeAt($)),J=this._decodeChar(y.charCodeAt($+1)),D[B++]=ee<<2|J>>>4,K|=ee&f,K|=J&f),$<A-2&&(G=this._decodeChar(y.charCodeAt($+2)),D[B++]=J<<4|G>>>2,K|=G&f),$<A-3&&(X=this._decodeChar(y.charCodeAt($+3)),D[B++]=G<<6|X,K|=X&f),K!==0)throw new Error("Base64Coder: incorrect characters for decoding");return D},C.prototype._encodeByte=function(y){var m=y;return m+=65,m+=25-y>>>8&0-65-26+97,m+=51-y>>>8&26-97-52+48,m+=61-y>>>8&52-48-62+43,m+=62-y>>>8&62-43-63+47,String.fromCharCode(m)},C.prototype._decodeChar=function(y){var m=f;return m+=(42-y&y-44)>>>8&-f+y-43+62,m+=(46-y&y-48)>>>8&-f+y-47+63,m+=(47-y&y-58)>>>8&-f+y-48+52,m+=(64-y&y-91)>>>8&-f+y-65+0,m+=(96-y&y-123)>>>8&-f+y-97+26,m},C.prototype._getPaddingLength=function(y){var m=0;if(this._paddingCharacter){for(var A=y.length-1;A>=0&&y[A]===this._paddingCharacter;A--)m++;if(y.length<4||m>2)throw new Error("Base64Coder: incorrect padding")}return m},C}();a.Coder=g;var p=new g;function w(C){return p.encode(C)}a.encode=w;function _(C){return p.decode(C)}a.decode=_;var E=function(C){h(y,C);function y(){return C!==null&&C.apply(this,arguments)||this}return y.prototype._encodeByte=function(m){var A=m;return A+=65,A+=25-m>>>8&0-65-26+97,A+=51-m>>>8&26-97-52+48,A+=61-m>>>8&52-48-62+45,A+=62-m>>>8&62-45-63+95,String.fromCharCode(A)},y.prototype._decodeChar=function(m){var A=f;return A+=(44-m&m-46)>>>8&-f+m-45+62,A+=(94-m&m-96)>>>8&-f+m-95+63,A+=(47-m&m-58)>>>8&-f+m-48+52,A+=(64-m&m-91)>>>8&-f+m-65+0,A+=(96-m&m-123)>>>8&-f+m-97+26,A},y}(g);a.URLSafeCoder=E;var T=new E;function k(C){return T.encode(C)}a.encodeURLSafe=k;function O(C){return T.decode(C)}a.decodeURLSafe=O,a.encodedLength=function(C){return p.encodedLength(C)},a.maxDecodedLength=function(C){return p.maxDecodedLength(C)},a.decodedLength=function(C){return p.decodedLength(C)}},function(o,a,c){Object.defineProperty(a,"__esModule",{value:!0});var h="utf8: invalid string",f="utf8: invalid source encoding";function g(_){for(var E=new Uint8Array(p(_)),T=0,k=0;k<_.length;k++){var O=_.charCodeAt(k);O<128?E[T++]=O:O<2048?(E[T++]=192|O>>6,E[T++]=128|O&63):O<55296?(E[T++]=224|O>>12,E[T++]=128|O>>6&63,E[T++]=128|O&63):(k++,O=(O&1023)<<10,O|=_.charCodeAt(k)&1023,O+=65536,E[T++]=240|O>>18,E[T++]=128|O>>12&63,E[T++]=128|O>>6&63,E[T++]=128|O&63)}return E}a.encode=g;function p(_){for(var E=0,T=0;T<_.length;T++){var k=_.charCodeAt(T);if(k<128)E+=1;else if(k<2048)E+=2;else if(k<55296)E+=3;else if(k<=57343){if(T>=_.length-1)throw new Error(h);T++,E+=4}else throw new Error(h)}return E}a.encodedLength=p;function w(_){for(var E=[],T=0;T<_.length;T++){var k=_[T];if(k&128){var O=void 0;if(k<224){if(T>=_.length)throw new Error(f);var C=_[++T];if((C&192)!==128)throw new Error(f);k=(k&31)<<6|C&63,O=128}else if(k<240){if(T>=_.length-1)throw new Error(f);var C=_[++T],y=_[++T];if((C&192)!==128||(y&192)!==128)throw new Error(f);k=(k&15)<<12|(C&63)<<6|y&63,O=2048}else if(k<248){if(T>=_.length-2)throw new Error(f);var C=_[++T],y=_[++T],m=_[++T];if((C&192)!==128||(y&192)!==128||(m&192)!==128)throw new Error(f);k=(k&15)<<18|(C&63)<<12|(y&63)<<6|m&63,O=65536}else throw new Error(f);if(k<O||k>=55296&&k<=57343)throw new Error(f);if(k>=65536){if(k>1114111)throw new Error(f);k-=65536,E.push(String.fromCharCode(55296|k>>10)),k=56320|k&1023}}E.push(String.fromCharCode(k))}return E.join("")}a.decode=w},function(o,a,c){o.exports=c(3).default},function(o,a,c){c.r(a);var h=function(){function n(e,i){this.lastId=0,this.prefix=e,this.name=i}return n.prototype.create=function(e){this.lastId++;var i=this.lastId,s=this.prefix+i,u=this.name+"["+i+"]",l=!1,d=function(){l||(e.apply(null,arguments),l=!0)};return this[i]=d,{number:i,id:s,name:u,callback:d}},n.prototype.remove=function(e){delete this[e.number]},n}(),f=new h("_pusher_script_","Pusher.ScriptReceivers"),g={VERSION:"8.0.1",PROTOCOL:7,wsPort:80,wssPort:443,wsPath:"",httpHost:"sockjs.pusher.com",httpPort:80,httpsPort:443,httpPath:"/pusher",stats_host:"stats.pusher.com",authEndpoint:"/pusher/auth",authTransport:"ajax",activityTimeout:12e4,pongTimeout:3e4,unavailableTimeout:1e4,userAuthentication:{endpoint:"/pusher/user-auth",transport:"ajax"},channelAuthorization:{endpoint:"/pusher/auth",transport:"ajax"},cdn_http:"http://js.pusher.com",cdn_https:"https://js.pusher.com",dependency_suffix:""},p=g,w=function(){function n(e){this.options=e,this.receivers=e.receivers||f,this.loading={}}return n.prototype.load=function(e,i,s){var u=this;if(u.loading[e]&&u.loading[e].length>0)u.loading[e].push(s);else{u.loading[e]=[s];var l=I.createScriptRequest(u.getPath(e,i)),d=u.receivers.create(function(v){if(u.receivers.remove(d),u.loading[e]){var S=u.loading[e];delete u.loading[e];for(var b=function(N){N||l.cleanup()},P=0;P<S.length;P++)S[P](v,b)}});l.send(d)}},n.prototype.getRoot=function(e){var i,s=I.getDocument().location.protocol;return e&&e.useTLS||s==="https:"?i=this.options.cdn_https:i=this.options.cdn_http,i.replace(/\/*$/,"")+"/"+this.options.version},n.prototype.getPath=function(e,i){return this.getRoot(i)+"/"+e+this.options.suffix+".js"},n}(),_=w,E=new h("_pusher_dependencies","Pusher.DependenciesReceivers"),T=new _({cdn_http:p.cdn_http,cdn_https:p.cdn_https,version:p.VERSION,suffix:p.dependency_suffix,receivers:E}),k={baseUrl:"https://pusher.com",urls:{authenticationEndpoint:{path:"/docs/channels/server_api/authenticating_users"},authorizationEndpoint:{path:"/docs/channels/server_api/authorizing-users/"},javascriptQuickStart:{path:"/docs/javascript_quick_start"},triggeringClientEvents:{path:"/docs/client_api_guide/client_events#trigger-events"},encryptedChannelSupport:{fullUrl:"https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"}}},O=function(n){var e="See:",i=k.urls[n];if(!i)return"";var s;return i.fullUrl?s=i.fullUrl:i.path&&(s=k.baseUrl+i.path),s?e+" "+s:""},C={buildLogSuffix:O},y;(function(n){n.UserAuthentication="user-authentication",n.ChannelAuthorization="channel-authorization"})(y||(y={}));var m=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),A=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),D=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),B=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),$=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),K=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),ee=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),J=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),G=function(n){m(e,n);function e(i){var s=this.constructor,u=n.call(this,i)||this;return Object.setPrototypeOf(u,s.prototype),u}return e}(Error),X=function(n){m(e,n);function e(i,s){var u=this.constructor,l=n.call(this,s)||this;return l.status=i,Object.setPrototypeOf(l,u.prototype),l}return e}(Error),Jr=function(n,e,i,s,u){var l=I.createXHR();l.open("POST",i.endpoint,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var d in i.headers)l.setRequestHeader(d,i.headers[d]);if(i.headersProvider!=null){var v=i.headersProvider();for(var d in v)l.setRequestHeader(d,v[d])}return l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){var S=void 0,b=!1;try{S=JSON.parse(l.responseText),b=!0}catch{u(new X(200,"JSON returned from "+s.toString()+" endpoint was invalid, yet status code was 200. Data was: "+l.responseText),null)}b&&u(null,S)}else{var P="";switch(s){case y.UserAuthentication:P=C.buildLogSuffix("authenticationEndpoint");break;case y.ChannelAuthorization:P="Clients must be authorized to join private or presence channels. "+C.buildLogSuffix("authorizationEndpoint");break}u(new X(l.status,"Unable to retrieve auth string from "+s.toString()+" endpoint - "+("received status: "+l.status+" from "+i.endpoint+". "+P)),null)}},l.send(e),l},Xr=Jr;function Yr(n){return ti(Zr(n))}var Te=String.fromCharCode,Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qr=function(n){var e=n.charCodeAt(0);return e<128?n:e<2048?Te(192|e>>>6)+Te(128|e&63):Te(224|e>>>12&15)+Te(128|e>>>6&63)+Te(128|e&63)},Zr=function(n){return n.replace(/[^\x00-\x7F]/g,Qr)},ei=function(n){var e=[0,2,1][n.length%3],i=n.charCodeAt(0)<<16|(n.length>1?n.charCodeAt(1):0)<<8|(n.length>2?n.charCodeAt(2):0),s=[Fe.charAt(i>>>18),Fe.charAt(i>>>12&63),e>=2?"=":Fe.charAt(i>>>6&63),e>=1?"=":Fe.charAt(i&63)];return s.join("")},ti=window.btoa||function(n){return n.replace(/[\s\S]{1,3}/g,ei)},ni=function(){function n(e,i,s,u){var l=this;this.clear=i,this.timer=e(function(){l.timer&&(l.timer=u(l.timer))},s)}return n.prototype.isRunning=function(){return this.timer!==null},n.prototype.ensureAborted=function(){this.timer&&(this.clear(this.timer),this.timer=null)},n}(),Xt=ni,Yt=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}();function ri(n){window.clearTimeout(n)}function ii(n){window.clearInterval(n)}var ue=function(n){Yt(e,n);function e(i,s){return n.call(this,setTimeout,ri,i,function(u){return s(),null})||this}return e}(Xt),oi=function(n){Yt(e,n);function e(i,s){return n.call(this,setInterval,ii,i,function(u){return s(),u})||this}return e}(Xt),si={now:function(){return Date.now?Date.now():new Date().valueOf()},defer:function(n){return new ue(0,n)},method:function(n){var e=Array.prototype.slice.call(arguments,1);return function(i){return i[n].apply(i,e.concat(arguments))}}},F=si;function U(n){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0;s<e.length;s++){var u=e[s];for(var l in u)u[l]&&u[l].constructor&&u[l].constructor===Object?n[l]=U(n[l]||{},u[l]):n[l]=u[l]}return n}function ai(){for(var n=["Pusher"],e=0;e<arguments.length;e++)typeof arguments[e]=="string"?n.push(arguments[e]):n.push(He(arguments[e]));return n.join(" : ")}function Qt(n,e){var i=Array.prototype.indexOf;if(n===null)return-1;if(i&&n.indexOf===i)return n.indexOf(e);for(var s=0,u=n.length;s<u;s++)if(n[s]===e)return s;return-1}function te(n,e){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e(n[i],i,n)}function Zt(n){var e=[];return te(n,function(i,s){e.push(s)}),e}function ci(n){var e=[];return te(n,function(i){e.push(i)}),e}function Ce(n,e,i){for(var s=0;s<n.length;s++)e.call(i||window,n[s],s,n)}function en(n,e){for(var i=[],s=0;s<n.length;s++)i.push(e(n[s],s,n,i));return i}function ui(n,e){var i={};return te(n,function(s,u){i[u]=e(s)}),i}function tn(n,e){e=e||function(u){return!!u};for(var i=[],s=0;s<n.length;s++)e(n[s],s,n,i)&&i.push(n[s]);return i}function nn(n,e){var i={};return te(n,function(s,u){(e&&e(s,u,n,i)||Boolean(s))&&(i[u]=s)}),i}function li(n){var e=[];return te(n,function(i,s){e.push([s,i])}),e}function rn(n,e){for(var i=0;i<n.length;i++)if(e(n[i],i,n))return!0;return!1}function hi(n,e){for(var i=0;i<n.length;i++)if(!e(n[i],i,n))return!1;return!0}function fi(n){return ui(n,function(e){return typeof e=="object"&&(e=He(e)),encodeURIComponent(Yr(e.toString()))})}function di(n){var e=nn(n,function(s){return s!==void 0}),i=en(li(fi(e)),F.method("join","=")).join("&");return i}function pi(n){var e=[],i=[];return function s(u,l){var d,v,S;switch(typeof u){case"object":if(!u)return null;for(d=0;d<e.length;d+=1)if(e[d]===u)return{$ref:i[d]};if(e.push(u),i.push(l),Object.prototype.toString.apply(u)==="[object Array]")for(S=[],d=0;d<u.length;d+=1)S[d]=s(u[d],l+"["+d+"]");else{S={};for(v in u)Object.prototype.hasOwnProperty.call(u,v)&&(S[v]=s(u[v],l+"["+JSON.stringify(v)+"]"))}return S;case"number":case"string":case"boolean":return u}}(n,"$")}function He(n){try{return JSON.stringify(n)}catch{return JSON.stringify(pi(n))}}var gi=function(){function n(){this.globalLog=function(e){window.console&&window.console.log&&window.console.log(e)}}return n.prototype.debug=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLog,e)},n.prototype.warn=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogWarn,e)},n.prototype.error=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];this.log(this.globalLogError,e)},n.prototype.globalLogWarn=function(e){window.console&&window.console.warn?window.console.warn(e):this.globalLog(e)},n.prototype.globalLogError=function(e){window.console&&window.console.error?window.console.error(e):this.globalLogWarn(e)},n.prototype.log=function(e){var i=ai.apply(this,arguments);if(lt.log)lt.log(i);else if(lt.logToConsole){var s=e.bind(this);s(i)}},n}(),L=new gi,vi=function(n,e,i,s,u){(i.headers!==void 0||i.headersProvider!=null)&&L.warn("To send headers with the "+s.toString()+" request, you must use AJAX, rather than JSONP.");var l=n.nextAuthCallbackID.toString();n.nextAuthCallbackID++;var d=n.getDocument(),v=d.createElement("script");n.auth_callbacks[l]=function(P){u(null,P)};var S="Pusher.auth_callbacks['"+l+"']";v.src=i.endpoint+"?callback="+encodeURIComponent(S)+"&"+e;var b=d.getElementsByTagName("head")[0]||d.documentElement;b.insertBefore(v,b.firstChild)},yi=vi,mi=function(){function n(e){this.src=e}return n.prototype.send=function(e){var i=this,s="Error loading "+i.src;i.script=document.createElement("script"),i.script.id=e.id,i.script.src=i.src,i.script.type="text/javascript",i.script.charset="UTF-8",i.script.addEventListener?(i.script.onerror=function(){e.callback(s)},i.script.onload=function(){e.callback(null)}):i.script.onreadystatechange=function(){(i.script.readyState==="loaded"||i.script.readyState==="complete")&&e.callback(null)},i.script.async===void 0&&document.attachEvent&&/opera/i.test(navigator.userAgent)?(i.errorScript=document.createElement("script"),i.errorScript.id=e.id+"_error",i.errorScript.text=e.name+"('"+s+"');",i.script.async=i.errorScript.async=!1):i.script.async=!0;var u=document.getElementsByTagName("head")[0];u.insertBefore(i.script,u.firstChild),i.errorScript&&u.insertBefore(i.errorScript,i.script.nextSibling)},n.prototype.cleanup=function(){this.script&&(this.script.onload=this.script.onerror=null,this.script.onreadystatechange=null),this.script&&this.script.parentNode&&this.script.parentNode.removeChild(this.script),this.errorScript&&this.errorScript.parentNode&&this.errorScript.parentNode.removeChild(this.errorScript),this.script=null,this.errorScript=null},n}(),bi=mi,_i=function(){function n(e,i){this.url=e,this.data=i}return n.prototype.send=function(e){if(!this.request){var i=di(this.data),s=this.url+"/"+e.number+"?"+i;this.request=I.createScriptRequest(s),this.request.send(e)}},n.prototype.cleanup=function(){this.request&&this.request.cleanup()},n}(),wi=_i,Si=function(n,e){return function(i,s){var u="http"+(e?"s":"")+"://",l=u+(n.host||n.options.host)+n.options.path,d=I.createJSONPRequest(l,i),v=I.ScriptReceivers.create(function(S,b){f.remove(v),d.cleanup(),b&&b.host&&(n.host=b.host),s&&s(S,b)});d.send(v)}},ki={name:"jsonp",getAgent:Si},Ti=ki;function et(n,e,i){var s=n+(e.useTLS?"s":""),u=e.useTLS?e.hostTLS:e.hostNonTLS;return s+"://"+u+i}function tt(n,e){var i="/app/"+n,s="?protocol="+p.PROTOCOL+"&client=js&version="+p.VERSION+(e?"&"+e:"");return i+s}var Ci={getInitial:function(n,e){var i=(e.httpPath||"")+tt(n,"flash=false");return et("ws",e,i)}},Ii={getInitial:function(n,e){var i=(e.httpPath||"/pusher")+tt(n);return et("http",e,i)}},Ei={getInitial:function(n,e){return et("http",e,e.httpPath||"/pusher")},getPath:function(n,e){return tt(n)}},Ai=function(){function n(){this._callbacks={}}return n.prototype.get=function(e){return this._callbacks[nt(e)]},n.prototype.add=function(e,i,s){var u=nt(e);this._callbacks[u]=this._callbacks[u]||[],this._callbacks[u].push({fn:i,context:s})},n.prototype.remove=function(e,i,s){if(!e&&!i&&!s){this._callbacks={};return}var u=e?[nt(e)]:Zt(this._callbacks);i||s?this.removeCallback(u,i,s):this.removeAllCallbacks(u)},n.prototype.removeCallback=function(e,i,s){Ce(e,function(u){this._callbacks[u]=tn(this._callbacks[u]||[],function(l){return i&&i!==l.fn||s&&s!==l.context}),this._callbacks[u].length===0&&delete this._callbacks[u]},this)},n.prototype.removeAllCallbacks=function(e){Ce(e,function(i){delete this._callbacks[i]},this)},n}(),Pi=Ai;function nt(n){return"_"+n}var Oi=function(){function n(e){this.callbacks=new Pi,this.global_callbacks=[],this.failThrough=e}return n.prototype.bind=function(e,i,s){return this.callbacks.add(e,i,s),this},n.prototype.bind_global=function(e){return this.global_callbacks.push(e),this},n.prototype.unbind=function(e,i,s){return this.callbacks.remove(e,i,s),this},n.prototype.unbind_global=function(e){return e?(this.global_callbacks=tn(this.global_callbacks||[],function(i){return i!==e}),this):(this.global_callbacks=[],this)},n.prototype.unbind_all=function(){return this.unbind(),this.unbind_global(),this},n.prototype.emit=function(e,i,s){for(var u=0;u<this.global_callbacks.length;u++)this.global_callbacks[u](e,i);var l=this.callbacks.get(e),d=[];if(s?d.push(i,s):i&&d.push(i),l&&l.length>0)for(var u=0;u<l.length;u++)l[u].fn.apply(l[u].context||window,d);else this.failThrough&&this.failThrough(e,i);return this},n}(),ne=Oi,xi=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Di=function(n){xi(e,n);function e(i,s,u,l,d){var v=n.call(this)||this;return v.initialize=I.transportConnectionInitializer,v.hooks=i,v.name=s,v.priority=u,v.key=l,v.options=d,v.state="new",v.timeline=d.timeline,v.activityTimeout=d.activityTimeout,v.id=v.timeline.generateUniqueID(),v}return e.prototype.handlesActivityChecks=function(){return Boolean(this.hooks.handlesActivityChecks)},e.prototype.supportsPing=function(){return Boolean(this.hooks.supportsPing)},e.prototype.connect=function(){var i=this;if(this.socket||this.state!=="initialized")return!1;var s=this.hooks.urls.getInitial(this.key,this.options);try{this.socket=this.hooks.getSocket(s,this.options)}catch(u){return F.defer(function(){i.onError(u),i.changeState("closed")}),!1}return this.bindListeners(),L.debug("Connecting",{transport:this.name,url:s}),this.changeState("connecting"),!0},e.prototype.close=function(){return this.socket?(this.socket.close(),!0):!1},e.prototype.send=function(i){var s=this;return this.state==="open"?(F.defer(function(){s.socket&&s.socket.send(i)}),!0):!1},e.prototype.ping=function(){this.state==="open"&&this.supportsPing()&&this.socket.ping()},e.prototype.onOpen=function(){this.hooks.beforeOpen&&this.hooks.beforeOpen(this.socket,this.hooks.urls.getPath(this.key,this.options)),this.changeState("open"),this.socket.onopen=void 0},e.prototype.onError=function(i){this.emit("error",{type:"WebSocketError",error:i}),this.timeline.error(this.buildTimelineMessage({error:i.toString()}))},e.prototype.onClose=function(i){i?this.changeState("closed",{code:i.code,reason:i.reason,wasClean:i.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=void 0},e.prototype.onMessage=function(i){this.emit("message",i)},e.prototype.onActivity=function(){this.emit("activity")},e.prototype.bindListeners=function(){var i=this;this.socket.onopen=function(){i.onOpen()},this.socket.onerror=function(s){i.onError(s)},this.socket.onclose=function(s){i.onClose(s)},this.socket.onmessage=function(s){i.onMessage(s)},this.supportsPing()&&(this.socket.onactivity=function(){i.onActivity()})},e.prototype.unbindListeners=function(){this.socket&&(this.socket.onopen=void 0,this.socket.onerror=void 0,this.socket.onclose=void 0,this.socket.onmessage=void 0,this.supportsPing()&&(this.socket.onactivity=void 0))},e.prototype.changeState=function(i,s){this.state=i,this.timeline.info(this.buildTimelineMessage({state:i,params:s})),this.emit(i,s)},e.prototype.buildTimelineMessage=function(i){return U({cid:this.id},i)},e}(ne),Ri=Di,Li=function(){function n(e){this.hooks=e}return n.prototype.isSupported=function(e){return this.hooks.isSupported(e)},n.prototype.createConnection=function(e,i,s,u){return new Ri(this.hooks,e,i,s,u)},n}(),we=Li,Ni=new we({urls:Ci,handlesActivityChecks:!1,supportsPing:!1,isInitialized:function(){return Boolean(I.getWebSocketAPI())},isSupported:function(){return Boolean(I.getWebSocketAPI())},getSocket:function(n){return I.createWebSocket(n)}}),on={urls:Ii,handlesActivityChecks:!1,supportsPing:!0,isInitialized:function(){return!0}},sn=U({getSocket:function(n){return I.HTTPFactory.createStreamingSocket(n)}},on),an=U({getSocket:function(n){return I.HTTPFactory.createPollingSocket(n)}},on),cn={isSupported:function(){return I.isXHRSupported()}},ji=new we(U({},sn,cn)),Mi=new we(U({},an,cn)),Bi={ws:Ni,xhr_streaming:ji,xhr_polling:Mi},$e=Bi,Fi=new we({file:"sockjs",urls:Ei,handlesActivityChecks:!0,supportsPing:!1,isSupported:function(){return!0},isInitialized:function(){return window.SockJS!==void 0},getSocket:function(n,e){return new window.SockJS(n,null,{js_path:T.getPath("sockjs",{useTLS:e.useTLS}),ignore_null_origin:e.ignoreNullOrigin})},beforeOpen:function(n,e){n.send(JSON.stringify({path:e}))}}),un={isSupported:function(n){var e=I.isXDRSupported(n.useTLS);return e}},Hi=new we(U({},sn,un)),$i=new we(U({},an,un));$e.xdr_streaming=Hi,$e.xdr_polling=$i,$e.sockjs=Fi;var Ui=$e,qi=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),zi=function(n){qi(e,n);function e(){var i=n.call(this)||this,s=i;return window.addEventListener!==void 0&&(window.addEventListener("online",function(){s.emit("online")},!1),window.addEventListener("offline",function(){s.emit("offline")},!1)),i}return e.prototype.isOnline=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine},e}(ne),Vi=new zi,Wi=function(){function n(e,i,s){this.manager=e,this.transport=i,this.minPingDelay=s.minPingDelay,this.maxPingDelay=s.maxPingDelay,this.pingDelay=void 0}return n.prototype.createConnection=function(e,i,s,u){var l=this;u=U({},u,{activityTimeout:this.pingDelay});var d=this.transport.createConnection(e,i,s,u),v=null,S=function(){d.unbind("open",S),d.bind("closed",b),v=F.now()},b=function(P){if(d.unbind("closed",b),P.code===1002||P.code===1003)l.manager.reportDeath();else if(!P.wasClean&&v){var N=F.now()-v;N<2*l.maxPingDelay&&(l.manager.reportDeath(),l.pingDelay=Math.max(N/2,l.minPingDelay))}};return d.bind("open",S),d},n.prototype.isSupported=function(e){return this.manager.isAlive()&&this.transport.isSupported(e)},n}(),Ki=Wi,ln={decodeMessage:function(n){try{var e=JSON.parse(n.data),i=e.data;if(typeof i=="string")try{i=JSON.parse(e.data)}catch{}var s={event:e.event,channel:e.channel,data:i};return e.user_id&&(s.user_id=e.user_id),s}catch(u){throw{type:"MessageParseError",error:u,data:n.data}}},encodeMessage:function(n){return JSON.stringify(n)},processHandshake:function(n){var e=ln.decodeMessage(n);if(e.event==="pusher:connection_established"){if(!e.data.activity_timeout)throw"No activity timeout specified in handshake";return{action:"connected",id:e.data.socket_id,activityTimeout:e.data.activity_timeout*1e3}}else{if(e.event==="pusher:error")return{action:this.getCloseAction(e.data),error:this.getCloseError(e.data)};throw"Invalid handshake"}},getCloseAction:function(n){return n.code<4e3?n.code>=1002&&n.code<=1004?"backoff":null:n.code===4e3?"tls_only":n.code<4100?"refused":n.code<4200?"backoff":n.code<4300?"retry":"refused"},getCloseError:function(n){return n.code!==1e3&&n.code!==1001?{type:"PusherError",data:{code:n.code,message:n.reason||n.message}}:null}},le=ln,Gi=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ji=function(n){Gi(e,n);function e(i,s){var u=n.call(this)||this;return u.id=i,u.transport=s,u.activityTimeout=s.activityTimeout,u.bindListeners(),u}return e.prototype.handlesActivityChecks=function(){return this.transport.handlesActivityChecks()},e.prototype.send=function(i){return this.transport.send(i)},e.prototype.send_event=function(i,s,u){var l={event:i,data:s};return u&&(l.channel=u),L.debug("Event sent",l),this.send(le.encodeMessage(l))},e.prototype.ping=function(){this.transport.supportsPing()?this.transport.ping():this.send_event("pusher:ping",{})},e.prototype.close=function(){this.transport.close()},e.prototype.bindListeners=function(){var i=this,s={message:function(l){var d;try{d=le.decodeMessage(l)}catch(v){i.emit("error",{type:"MessageParseError",error:v,data:l.data})}if(d!==void 0){switch(L.debug("Event recd",d),d.event){case"pusher:error":i.emit("error",{type:"PusherError",data:d.data});break;case"pusher:ping":i.emit("ping");break;case"pusher:pong":i.emit("pong");break}i.emit("message",d)}},activity:function(){i.emit("activity")},error:function(l){i.emit("error",l)},closed:function(l){u(),l&&l.code&&i.handleCloseEvent(l),i.transport=null,i.emit("closed")}},u=function(){te(s,function(l,d){i.transport.unbind(d,l)})};te(s,function(l,d){i.transport.bind(d,l)})},e.prototype.handleCloseEvent=function(i){var s=le.getCloseAction(i),u=le.getCloseError(i);u&&this.emit("error",u),s&&this.emit(s,{action:s,error:u})},e}(ne),Xi=Ji,Yi=function(){function n(e,i){this.transport=e,this.callback=i,this.bindListeners()}return n.prototype.close=function(){this.unbindListeners(),this.transport.close()},n.prototype.bindListeners=function(){var e=this;this.onMessage=function(i){e.unbindListeners();var s;try{s=le.processHandshake(i)}catch(u){e.finish("error",{error:u}),e.transport.close();return}s.action==="connected"?e.finish("connected",{connection:new Xi(s.id,e.transport),activityTimeout:s.activityTimeout}):(e.finish(s.action,{error:s.error}),e.transport.close())},this.onClosed=function(i){e.unbindListeners();var s=le.getCloseAction(i)||"backoff",u=le.getCloseError(i);e.finish(s,{error:u})},this.transport.bind("message",this.onMessage),this.transport.bind("closed",this.onClosed)},n.prototype.unbindListeners=function(){this.transport.unbind("message",this.onMessage),this.transport.unbind("closed",this.onClosed)},n.prototype.finish=function(e,i){this.callback(U({transport:this.transport,action:e},i))},n}(),Qi=Yi,Zi=function(){function n(e,i){this.timeline=e,this.options=i||{}}return n.prototype.send=function(e,i){this.timeline.isEmpty()||this.timeline.send(I.TimelineTransport.getAgent(this,e),i)},n}(),eo=Zi,to=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),no=function(n){to(e,n);function e(i,s){var u=n.call(this,function(l,d){L.debug("No callbacks on "+i+" for "+l)})||this;return u.name=i,u.pusher=s,u.subscribed=!1,u.subscriptionPending=!1,u.subscriptionCancelled=!1,u}return e.prototype.authorize=function(i,s){return s(null,{auth:""})},e.prototype.trigger=function(i,s){if(i.indexOf("client-")!==0)throw new A("Event '"+i+"' does not start with 'client-'");if(!this.subscribed){var u=C.buildLogSuffix("triggeringClientEvents");L.warn("Client event triggered before channel 'subscription_succeeded' event . "+u)}return this.pusher.send_event(i,s,this.name)},e.prototype.disconnect=function(){this.subscribed=!1,this.subscriptionPending=!1},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s==="pusher_internal:subscription_succeeded")this.handleSubscriptionSucceededEvent(i);else if(s==="pusher_internal:subscription_count")this.handleSubscriptionCountEvent(i);else if(s.indexOf("pusher_internal:")!==0){var l={};this.emit(s,u,l)}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):this.emit("pusher:subscription_succeeded",i.data)},e.prototype.handleSubscriptionCountEvent=function(i){i.data.subscription_count&&(this.subscriptionCount=i.data.subscription_count),this.emit("pusher:subscription_count",i.data)},e.prototype.subscribe=function(){var i=this;this.subscribed||(this.subscriptionPending=!0,this.subscriptionCancelled=!1,this.authorize(this.pusher.connection.socket_id,function(s,u){s?(i.subscriptionPending=!1,L.error(s.toString()),i.emit("pusher:subscription_error",Object.assign({},{type:"AuthError",error:s.message},s instanceof X?{status:s.status}:{}))):i.pusher.send_event("pusher:subscribe",{auth:u.auth,channel_data:u.channel_data,channel:i.name})}))},e.prototype.unsubscribe=function(){this.subscribed=!1,this.pusher.send_event("pusher:unsubscribe",{channel:this.name})},e.prototype.cancelSubscription=function(){this.subscriptionCancelled=!0},e.prototype.reinstateSubscription=function(){this.subscriptionCancelled=!1},e}(ne),rt=no,ro=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),oo=function(n){ro(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.authorize=function(i,s){return this.pusher.config.channelAuthorizer({channelName:this.name,socketId:i},s)},e}(rt),it=oo,so=function(){function n(){this.reset()}return n.prototype.get=function(e){return Object.prototype.hasOwnProperty.call(this.members,e)?{id:e,info:this.members[e]}:null},n.prototype.each=function(e){var i=this;te(this.members,function(s,u){e(i.get(u))})},n.prototype.setMyID=function(e){this.myID=e},n.prototype.onSubscription=function(e){this.members=e.presence.hash,this.count=e.presence.count,this.me=this.get(this.myID)},n.prototype.addMember=function(e){return this.get(e.user_id)===null&&this.count++,this.members[e.user_id]=e.user_info,this.get(e.user_id)},n.prototype.removeMember=function(e){var i=this.get(e.user_id);return i&&(delete this.members[e.user_id],this.count--),i},n.prototype.reset=function(){this.members={},this.count=0,this.myID=null,this.me=null},n}(),ao=so,co=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),uo=function(n,e,i,s){function u(l){return l instanceof i?l:new i(function(d){d(l)})}return new(i||(i=Promise))(function(l,d){function v(P){try{b(s.next(P))}catch(N){d(N)}}function S(P){try{b(s.throw(P))}catch(N){d(N)}}function b(P){P.done?l(P.value):u(P.value).then(v,S)}b((s=s.apply(n,e||[])).next())})},lo=function(n,e){var i={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,u,l,d;return d={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function v(b){return function(P){return S([b,P])}}function S(b){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,u&&(l=b[0]&2?u.return:b[0]?u.throw||((l=u.return)&&l.call(u),0):u.next)&&!(l=l.call(u,b[1])).done)return l;switch(u=0,l&&(b=[b[0]&2,l.value]),b[0]){case 0:case 1:l=b;break;case 4:return i.label++,{value:b[1],done:!1};case 5:i.label++,u=b[1],b=[0];continue;case 7:b=i.ops.pop(),i.trys.pop();continue;default:if(l=i.trys,!(l=l.length>0&&l[l.length-1])&&(b[0]===6||b[0]===2)){i=0;continue}if(b[0]===3&&(!l||b[1]>l[0]&&b[1]<l[3])){i.label=b[1];break}if(b[0]===6&&i.label<l[1]){i.label=l[1],l=b;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(b);break}l[2]&&i.ops.pop(),i.trys.pop();continue}b=e.call(n,i)}catch(P){b=[6,P],u=0}finally{s=l=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}},ho=function(n){co(e,n);function e(i,s){var u=n.call(this,i,s)||this;return u.members=new ao,u}return e.prototype.authorize=function(i,s){var u=this;n.prototype.authorize.call(this,i,function(l,d){return uo(u,void 0,void 0,function(){var v,S;return lo(this,function(b){switch(b.label){case 0:return l?[3,3]:(d=d,d.channel_data==null?[3,1]:(v=JSON.parse(d.channel_data),this.members.setMyID(v.user_id),[3,3]));case 1:return[4,this.pusher.user.signinDonePromise];case 2:if(b.sent(),this.pusher.user.user_data!=null)this.members.setMyID(this.pusher.user.user_data.id);else return S=C.buildLogSuffix("authorizationEndpoint"),L.error("Invalid auth response for channel '"+this.name+"', "+("expected 'channel_data' field. "+S+", ")+"or the user should be signed in."),s("Invalid auth response"),[2];b.label=3;case 3:return s(l,d),[2]}})})})},e.prototype.handleEvent=function(i){var s=i.event;if(s.indexOf("pusher_internal:")===0)this.handleInternalEvent(i);else{var u=i.data,l={};i.user_id&&(l.user_id=i.user_id),this.emit(s,u,l)}},e.prototype.handleInternalEvent=function(i){var s=i.event,u=i.data;switch(s){case"pusher_internal:subscription_succeeded":this.handleSubscriptionSucceededEvent(i);break;case"pusher_internal:subscription_count":this.handleSubscriptionCountEvent(i);break;case"pusher_internal:member_added":var l=this.members.addMember(u);this.emit("pusher:member_added",l);break;case"pusher_internal:member_removed":var d=this.members.removeMember(u);d&&this.emit("pusher:member_removed",d);break}},e.prototype.handleSubscriptionSucceededEvent=function(i){this.subscriptionPending=!1,this.subscribed=!0,this.subscriptionCancelled?this.pusher.unsubscribe(this.name):(this.members.onSubscription(i.data),this.emit("pusher:subscription_succeeded",this.members))},e.prototype.disconnect=function(){this.members.reset(),n.prototype.disconnect.call(this)},e}(it),fo=ho,po=c(1),ot=c(0),go=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),vo=function(n){go(e,n);function e(i,s,u){var l=n.call(this,i,s)||this;return l.key=null,l.nacl=u,l}return e.prototype.authorize=function(i,s){var u=this;n.prototype.authorize.call(this,i,function(l,d){if(l){s(l,d);return}var v=d.shared_secret;if(!v){s(new Error("No shared_secret key in auth payload for encrypted channel: "+u.name),null);return}u.key=Object(ot.decode)(v),delete d.shared_secret,s(null,d)})},e.prototype.trigger=function(i,s){throw new ee("Client events are not currently supported for encrypted channels")},e.prototype.handleEvent=function(i){var s=i.event,u=i.data;if(s.indexOf("pusher_internal:")===0||s.indexOf("pusher:")===0){n.prototype.handleEvent.call(this,i);return}this.handleEncryptedEvent(s,u)},e.prototype.handleEncryptedEvent=function(i,s){var u=this;if(!this.key){L.debug("Received encrypted event before key has been retrieved from the authEndpoint");return}if(!s.ciphertext||!s.nonce){L.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: "+s);return}var l=Object(ot.decode)(s.ciphertext);if(l.length<this.nacl.secretbox.overheadLength){L.error("Expected encrypted event ciphertext length to be "+this.nacl.secretbox.overheadLength+", got: "+l.length);return}var d=Object(ot.decode)(s.nonce);if(d.length<this.nacl.secretbox.nonceLength){L.error("Expected encrypted event nonce length to be "+this.nacl.secretbox.nonceLength+", got: "+d.length);return}var v=this.nacl.secretbox.open(l,d,this.key);if(v===null){L.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."),this.authorize(this.pusher.connection.socket_id,function(S,b){if(S){L.error("Failed to make a request to the authEndpoint: "+b+". Unable to fetch new key, so dropping encrypted event");return}if(v=u.nacl.secretbox.open(l,d,u.key),v===null){L.error("Failed to decrypt event with new key. Dropping encrypted event");return}u.emit(i,u.getDataToEmit(v))});return}this.emit(i,this.getDataToEmit(v))},e.prototype.getDataToEmit=function(i){var s=Object(po.decode)(i);try{return JSON.parse(s)}catch{return s}},e}(it),yo=vo,mo=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),bo=function(n){mo(e,n);function e(i,s){var u=n.call(this)||this;u.state="initialized",u.connection=null,u.key=i,u.options=s,u.timeline=u.options.timeline,u.usingTLS=u.options.useTLS,u.errorCallbacks=u.buildErrorCallbacks(),u.connectionCallbacks=u.buildConnectionCallbacks(u.errorCallbacks),u.handshakeCallbacks=u.buildHandshakeCallbacks(u.errorCallbacks);var l=I.getNetwork();return l.bind("online",function(){u.timeline.info({netinfo:"online"}),(u.state==="connecting"||u.state==="unavailable")&&u.retryIn(0)}),l.bind("offline",function(){u.timeline.info({netinfo:"offline"}),u.connection&&u.sendActivityCheck()}),u.updateStrategy(),u}return e.prototype.connect=function(){if(!(this.connection||this.runner)){if(!this.strategy.isSupported()){this.updateState("failed");return}this.updateState("connecting"),this.startConnecting(),this.setUnavailableTimer()}},e.prototype.send=function(i){return this.connection?this.connection.send(i):!1},e.prototype.send_event=function(i,s,u){return this.connection?this.connection.send_event(i,s,u):!1},e.prototype.disconnect=function(){this.disconnectInternally(),this.updateState("disconnected")},e.prototype.isUsingTLS=function(){return this.usingTLS},e.prototype.startConnecting=function(){var i=this,s=function(u,l){u?i.runner=i.strategy.connect(0,s):l.action==="error"?(i.emit("error",{type:"HandshakeError",error:l.error}),i.timeline.error({handshakeError:l.error})):(i.abortConnecting(),i.handshakeCallbacks[l.action](l))};this.runner=this.strategy.connect(0,s)},e.prototype.abortConnecting=function(){this.runner&&(this.runner.abort(),this.runner=null)},e.prototype.disconnectInternally=function(){if(this.abortConnecting(),this.clearRetryTimer(),this.clearUnavailableTimer(),this.connection){var i=this.abandonConnection();i.close()}},e.prototype.updateStrategy=function(){this.strategy=this.options.getStrategy({key:this.key,timeline:this.timeline,useTLS:this.usingTLS})},e.prototype.retryIn=function(i){var s=this;this.timeline.info({action:"retry",delay:i}),i>0&&this.emit("connecting_in",Math.round(i/1e3)),this.retryTimer=new ue(i||0,function(){s.disconnectInternally(),s.connect()})},e.prototype.clearRetryTimer=function(){this.retryTimer&&(this.retryTimer.ensureAborted(),this.retryTimer=null)},e.prototype.setUnavailableTimer=function(){var i=this;this.unavailableTimer=new ue(this.options.unavailableTimeout,function(){i.updateState("unavailable")})},e.prototype.clearUnavailableTimer=function(){this.unavailableTimer&&this.unavailableTimer.ensureAborted()},e.prototype.sendActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection.ping(),this.activityTimer=new ue(this.options.pongTimeout,function(){i.timeline.error({pong_timed_out:i.options.pongTimeout}),i.retryIn(0)})},e.prototype.resetActivityCheck=function(){var i=this;this.stopActivityCheck(),this.connection&&!this.connection.handlesActivityChecks()&&(this.activityTimer=new ue(this.activityTimeout,function(){i.sendActivityCheck()}))},e.prototype.stopActivityCheck=function(){this.activityTimer&&this.activityTimer.ensureAborted()},e.prototype.buildConnectionCallbacks=function(i){var s=this;return U({},i,{message:function(u){s.resetActivityCheck(),s.emit("message",u)},ping:function(){s.send_event("pusher:pong",{})},activity:function(){s.resetActivityCheck()},error:function(u){s.emit("error",u)},closed:function(){s.abandonConnection(),s.shouldRetry()&&s.retryIn(1e3)}})},e.prototype.buildHandshakeCallbacks=function(i){var s=this;return U({},i,{connected:function(u){s.activityTimeout=Math.min(s.options.activityTimeout,u.activityTimeout,u.connection.activityTimeout||1/0),s.clearUnavailableTimer(),s.setConnection(u.connection),s.socket_id=s.connection.id,s.updateState("connected",{socket_id:s.socket_id})}})},e.prototype.buildErrorCallbacks=function(){var i=this,s=function(u){return function(l){l.error&&i.emit("error",{type:"WebSocketError",error:l.error}),u(l)}};return{tls_only:s(function(){i.usingTLS=!0,i.updateStrategy(),i.retryIn(0)}),refused:s(function(){i.disconnect()}),backoff:s(function(){i.retryIn(1e3)}),retry:s(function(){i.retryIn(0)})}},e.prototype.setConnection=function(i){this.connection=i;for(var s in this.connectionCallbacks)this.connection.bind(s,this.connectionCallbacks[s]);this.resetActivityCheck()},e.prototype.abandonConnection=function(){if(!!this.connection){this.stopActivityCheck();for(var i in this.connectionCallbacks)this.connection.unbind(i,this.connectionCallbacks[i]);var s=this.connection;return this.connection=null,s}},e.prototype.updateState=function(i,s){var u=this.state;if(this.state=i,u!==i){var l=i;l==="connected"&&(l+=" with new socket ID "+s.socket_id),L.debug("State changed",u+" -> "+l),this.timeline.info({state:i,params:s}),this.emit("state_change",{previous:u,current:i}),this.emit(i,s)}},e.prototype.shouldRetry=function(){return this.state==="connecting"||this.state==="connected"},e}(ne),_o=bo,wo=function(){function n(){this.channels={}}return n.prototype.add=function(e,i){return this.channels[e]||(this.channels[e]=ko(e,i)),this.channels[e]},n.prototype.all=function(){return ci(this.channels)},n.prototype.find=function(e){return this.channels[e]},n.prototype.remove=function(e){var i=this.channels[e];return delete this.channels[e],i},n.prototype.disconnect=function(){te(this.channels,function(e){e.disconnect()})},n}(),So=wo;function ko(n,e){if(n.indexOf("private-encrypted-")===0){if(e.config.nacl)return re.createEncryptedChannel(n,e,e.config.nacl);var i="Tried to subscribe to a private-encrypted- channel but no nacl implementation available",s=C.buildLogSuffix("encryptedChannelSupport");throw new ee(i+". "+s)}else{if(n.indexOf("private-")===0)return re.createPrivateChannel(n,e);if(n.indexOf("presence-")===0)return re.createPresenceChannel(n,e);if(n.indexOf("#")===0)throw new D('Cannot create a channel with name "'+n+'".');return re.createChannel(n,e)}}var To={createChannels:function(){return new So},createConnectionManager:function(n,e){return new _o(n,e)},createChannel:function(n,e){return new rt(n,e)},createPrivateChannel:function(n,e){return new it(n,e)},createPresenceChannel:function(n,e){return new fo(n,e)},createEncryptedChannel:function(n,e,i){return new yo(n,e,i)},createTimelineSender:function(n,e){return new eo(n,e)},createHandshake:function(n,e){return new Qi(n,e)},createAssistantToTheTransportManager:function(n,e,i){return new Ki(n,e,i)}},re=To,Co=function(){function n(e){this.options=e||{},this.livesLeft=this.options.lives||1/0}return n.prototype.getAssistant=function(e){return re.createAssistantToTheTransportManager(this,e,{minPingDelay:this.options.minPingDelay,maxPingDelay:this.options.maxPingDelay})},n.prototype.isAlive=function(){return this.livesLeft>0},n.prototype.reportDeath=function(){this.livesLeft-=1},n}(),hn=Co,Io=function(){function n(e,i){this.strategies=e,this.loop=Boolean(i.loop),this.failFast=Boolean(i.failFast),this.timeout=i.timeout,this.timeoutLimit=i.timeoutLimit}return n.prototype.isSupported=function(){return rn(this.strategies,F.method("isSupported"))},n.prototype.connect=function(e,i){var s=this,u=this.strategies,l=0,d=this.timeout,v=null,S=function(b,P){P?i(null,P):(l=l+1,s.loop&&(l=l%u.length),l<u.length?(d&&(d=d*2,s.timeoutLimit&&(d=Math.min(d,s.timeoutLimit))),v=s.tryStrategy(u[l],e,{timeout:d,failFast:s.failFast},S)):i(!0))};return v=this.tryStrategy(u[l],e,{timeout:d,failFast:this.failFast},S),{abort:function(){v.abort()},forceMinPriority:function(b){e=b,v&&v.forceMinPriority(b)}}},n.prototype.tryStrategy=function(e,i,s,u){var l=null,d=null;return s.timeout>0&&(l=new ue(s.timeout,function(){d.abort(),u(!0)})),d=e.connect(i,function(v,S){v&&l&&l.isRunning()&&!s.failFast||(l&&l.ensureAborted(),u(v,S))}),{abort:function(){l&&l.ensureAborted(),d.abort()},forceMinPriority:function(v){d.forceMinPriority(v)}}},n}(),he=Io,Eo=function(){function n(e){this.strategies=e}return n.prototype.isSupported=function(){return rn(this.strategies,F.method("isSupported"))},n.prototype.connect=function(e,i){return Ao(this.strategies,e,function(s,u){return function(l,d){if(u[s].error=l,l){Po(u)&&i(!0);return}Ce(u,function(v){v.forceMinPriority(d.transport.priority)}),i(null,d)}})},n}(),st=Eo;function Ao(n,e,i){var s=en(n,function(u,l,d,v){return u.connect(e,i(l,v))});return{abort:function(){Ce(s,Oo)},forceMinPriority:function(u){Ce(s,function(l){l.forceMinPriority(u)})}}}function Po(n){return hi(n,function(e){return Boolean(e.error)})}function Oo(n){!n.error&&!n.aborted&&(n.abort(),n.aborted=!0)}var xo=function(){function n(e,i,s){this.strategy=e,this.transports=i,this.ttl=s.ttl||1800*1e3,this.usingTLS=s.useTLS,this.timeline=s.timeline}return n.prototype.isSupported=function(){return this.strategy.isSupported()},n.prototype.connect=function(e,i){var s=this.usingTLS,u=Ro(s),l=[this.strategy];if(u&&u.timestamp+this.ttl>=F.now()){var d=this.transports[u.transport];d&&(this.timeline.info({cached:!0,transport:u.transport,latency:u.latency}),l.push(new he([d],{timeout:u.latency*2+1e3,failFast:!0})))}var v=F.now(),S=l.pop().connect(e,function b(P,N){P?(fn(s),l.length>0?(v=F.now(),S=l.pop().connect(e,b)):i(P)):(Lo(s,N.transport.name,F.now()-v),i(null,N))});return{abort:function(){S.abort()},forceMinPriority:function(b){e=b,S&&S.forceMinPriority(b)}}},n}(),Do=xo;function at(n){return"pusherTransport"+(n?"TLS":"NonTLS")}function Ro(n){var e=I.getLocalStorage();if(e)try{var i=e[at(n)];if(i)return JSON.parse(i)}catch{fn(n)}return null}function Lo(n,e,i){var s=I.getLocalStorage();if(s)try{s[at(n)]=He({timestamp:F.now(),transport:e,latency:i})}catch{}}function fn(n){var e=I.getLocalStorage();if(e)try{delete e[at(n)]}catch{}}var No=function(){function n(e,i){var s=i.delay;this.strategy=e,this.options={delay:s}}return n.prototype.isSupported=function(){return this.strategy.isSupported()},n.prototype.connect=function(e,i){var s=this.strategy,u,l=new ue(this.options.delay,function(){u=s.connect(e,i)});return{abort:function(){l.ensureAborted(),u&&u.abort()},forceMinPriority:function(d){e=d,u&&u.forceMinPriority(d)}}},n}(),Ue=No,jo=function(){function n(e,i,s){this.test=e,this.trueBranch=i,this.falseBranch=s}return n.prototype.isSupported=function(){var e=this.test()?this.trueBranch:this.falseBranch;return e.isSupported()},n.prototype.connect=function(e,i){var s=this.test()?this.trueBranch:this.falseBranch;return s.connect(e,i)},n}(),Ie=jo,Mo=function(){function n(e){this.strategy=e}return n.prototype.isSupported=function(){return this.strategy.isSupported()},n.prototype.connect=function(e,i){var s=this.strategy.connect(e,function(u,l){l&&s.abort(),i(u,l)});return s},n}(),Bo=Mo;function Ee(n){return function(){return n.isSupported()}}var Fo=function(n,e,i){var s={};function u(Tn,Gs,Js,Xs,Ys){var Cn=i(n,Tn,Gs,Js,Xs,Ys);return s[Tn]=Cn,Cn}var l=Object.assign({},e,{hostNonTLS:n.wsHost+":"+n.wsPort,hostTLS:n.wsHost+":"+n.wssPort,httpPath:n.wsPath}),d=Object.assign({},l,{useTLS:!0}),v=Object.assign({},e,{hostNonTLS:n.httpHost+":"+n.httpPort,hostTLS:n.httpHost+":"+n.httpsPort,httpPath:n.httpPath}),S={loop:!0,timeout:15e3,timeoutLimit:6e4},b=new hn({lives:2,minPingDelay:1e4,maxPingDelay:n.activityTimeout}),P=new hn({lives:2,minPingDelay:1e4,maxPingDelay:n.activityTimeout}),N=u("ws","ws",3,l,b),Y=u("wss","ws",3,d,b),qs=u("sockjs","sockjs",1,v),mn=u("xhr_streaming","xhr_streaming",1,v,P),zs=u("xdr_streaming","xdr_streaming",1,v,P),bn=u("xhr_polling","xhr_polling",1,v),Vs=u("xdr_polling","xdr_polling",1,v),_n=new he([N],S),Ws=new he([Y],S),Ks=new he([qs],S),wn=new he([new Ie(Ee(mn),mn,zs)],S),Sn=new he([new Ie(Ee(bn),bn,Vs)],S),kn=new he([new Ie(Ee(wn),new st([wn,new Ue(Sn,{delay:4e3})]),Sn)],S),ht=new Ie(Ee(kn),kn,Ks),ft;return e.useTLS?ft=new st([_n,new Ue(ht,{delay:2e3})]):ft=new st([_n,new Ue(Ws,{delay:2e3}),new Ue(ht,{delay:5e3})]),new Do(new Bo(new Ie(Ee(N),ft,ht)),s,{ttl:18e5,timeline:e.timeline,useTLS:e.useTLS})},Ho=Fo,$o=function(){var n=this;n.timeline.info(n.buildTimelineMessage({transport:n.name+(n.options.useTLS?"s":"")})),n.hooks.isInitialized()?n.changeState("initialized"):n.hooks.file?(n.changeState("initializing"),T.load(n.hooks.file,{useTLS:n.options.useTLS},function(e,i){n.hooks.isInitialized()?(n.changeState("initialized"),i(!0)):(e&&n.onError(e),n.onClose(),i(!1))})):n.onClose()},Uo={getRequest:function(n){var e=new window.XDomainRequest;return e.ontimeout=function(){n.emit("error",new B),n.close()},e.onerror=function(i){n.emit("error",i),n.close()},e.onprogress=function(){e.responseText&&e.responseText.length>0&&n.onChunk(200,e.responseText)},e.onload=function(){e.responseText&&e.responseText.length>0&&n.onChunk(200,e.responseText),n.emit("finished",200),n.close()},e},abortRequest:function(n){n.ontimeout=n.onerror=n.onprogress=n.onload=null,n.abort()}},qo=Uo,zo=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Vo=256*1024,Wo=function(n){zo(e,n);function e(i,s,u){var l=n.call(this)||this;return l.hooks=i,l.method=s,l.url=u,l}return e.prototype.start=function(i){var s=this;this.position=0,this.xhr=this.hooks.getRequest(this),this.unloader=function(){s.close()},I.addUnloadListener(this.unloader),this.xhr.open(this.method,this.url,!0),this.xhr.setRequestHeader&&this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.send(i)},e.prototype.close=function(){this.unloader&&(I.removeUnloadListener(this.unloader),this.unloader=null),this.xhr&&(this.hooks.abortRequest(this.xhr),this.xhr=null)},e.prototype.onChunk=function(i,s){for(;;){var u=this.advanceBuffer(s);if(u)this.emit("chunk",{status:i,data:u});else break}this.isBufferTooLong(s)&&this.emit("buffer_too_long")},e.prototype.advanceBuffer=function(i){var s=i.slice(this.position),u=s.indexOf(`
`);return u!==-1?(this.position+=u+1,s.slice(0,u)):null},e.prototype.isBufferTooLong=function(i){return this.position===i.length&&i.length>Vo},e}(ne),Ko=Wo,ct;(function(n){n[n.CONNECTING=0]="CONNECTING",n[n.OPEN=1]="OPEN",n[n.CLOSED=3]="CLOSED"})(ct||(ct={}));var fe=ct,Go=1,Jo=function(){function n(e,i){this.hooks=e,this.session=pn(1e3)+"/"+Zo(8),this.location=Xo(i),this.readyState=fe.CONNECTING,this.openStream()}return n.prototype.send=function(e){return this.sendRaw(JSON.stringify([e]))},n.prototype.ping=function(){this.hooks.sendHeartbeat(this)},n.prototype.close=function(e,i){this.onClose(e,i,!0)},n.prototype.sendRaw=function(e){if(this.readyState===fe.OPEN)try{return I.createSocketRequest("POST",dn(Yo(this.location,this.session))).start(e),!0}catch{return!1}else return!1},n.prototype.reconnect=function(){this.closeStream(),this.openStream()},n.prototype.onClose=function(e,i,s){this.closeStream(),this.readyState=fe.CLOSED,this.onclose&&this.onclose({code:e,reason:i,wasClean:s})},n.prototype.onChunk=function(e){if(e.status===200){this.readyState===fe.OPEN&&this.onActivity();var i,s=e.data.slice(0,1);switch(s){case"o":i=JSON.parse(e.data.slice(1)||"{}"),this.onOpen(i);break;case"a":i=JSON.parse(e.data.slice(1)||"[]");for(var u=0;u<i.length;u++)this.onEvent(i[u]);break;case"m":i=JSON.parse(e.data.slice(1)||"null"),this.onEvent(i);break;case"h":this.hooks.onHeartbeat(this);break;case"c":i=JSON.parse(e.data.slice(1)||"[]"),this.onClose(i[0],i[1],!0);break}}},n.prototype.onOpen=function(e){this.readyState===fe.CONNECTING?(e&&e.hostname&&(this.location.base=Qo(this.location.base,e.hostname)),this.readyState=fe.OPEN,this.onopen&&this.onopen()):this.onClose(1006,"Server lost session",!0)},n.prototype.onEvent=function(e){this.readyState===fe.OPEN&&this.onmessage&&this.onmessage({data:e})},n.prototype.onActivity=function(){this.onactivity&&this.onactivity()},n.prototype.onError=function(e){this.onerror&&this.onerror(e)},n.prototype.openStream=function(){var e=this;this.stream=I.createSocketRequest("POST",dn(this.hooks.getReceiveURL(this.location,this.session))),this.stream.bind("chunk",function(i){e.onChunk(i)}),this.stream.bind("finished",function(i){e.hooks.onFinished(e,i)}),this.stream.bind("buffer_too_long",function(){e.reconnect()});try{this.stream.start()}catch(i){F.defer(function(){e.onError(i),e.onClose(1006,"Could not start streaming",!1)})}},n.prototype.closeStream=function(){this.stream&&(this.stream.unbind_all(),this.stream.close(),this.stream=null)},n}();function Xo(n){var e=/([^\?]*)\/*(\??.*)/.exec(n);return{base:e[1],queryString:e[2]}}function Yo(n,e){return n.base+"/"+e+"/xhr_send"}function dn(n){var e=n.indexOf("?")===-1?"?":"&";return n+e+"t="+ +new Date+"&n="+Go++}function Qo(n,e){var i=/(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(n);return i[1]+e+i[3]}function pn(n){return I.randomInt(n)}function Zo(n){for(var e=[],i=0;i<n;i++)e.push(pn(32).toString(32));return e.join("")}var es=Jo,ts={getReceiveURL:function(n,e){return n.base+"/"+e+"/xhr_streaming"+n.queryString},onHeartbeat:function(n){n.sendRaw("[]")},sendHeartbeat:function(n){n.sendRaw("[]")},onFinished:function(n,e){n.onClose(1006,"Connection interrupted ("+e+")",!1)}},ns=ts,rs={getReceiveURL:function(n,e){return n.base+"/"+e+"/xhr"+n.queryString},onHeartbeat:function(){},sendHeartbeat:function(n){n.sendRaw("[]")},onFinished:function(n,e){e===200?n.reconnect():n.onClose(1006,"Connection interrupted ("+e+")",!1)}},is=rs,os={getRequest:function(n){var e=I.getXHRAPI(),i=new e;return i.onreadystatechange=i.onprogress=function(){switch(i.readyState){case 3:i.responseText&&i.responseText.length>0&&n.onChunk(i.status,i.responseText);break;case 4:i.responseText&&i.responseText.length>0&&n.onChunk(i.status,i.responseText),n.emit("finished",i.status),n.close();break}},i},abortRequest:function(n){n.onreadystatechange=null,n.abort()}},ss=os,as={createStreamingSocket:function(n){return this.createSocket(ns,n)},createPollingSocket:function(n){return this.createSocket(is,n)},createSocket:function(n,e){return new es(n,e)},createXHR:function(n,e){return this.createRequest(ss,n,e)},createRequest:function(n,e,i){return new Ko(n,e,i)}},gn=as;gn.createXDR=function(n,e){return this.createRequest(qo,n,e)};var cs=gn,us={nextAuthCallbackID:1,auth_callbacks:{},ScriptReceivers:f,DependenciesReceivers:E,getDefaultStrategy:Ho,Transports:Ui,transportConnectionInitializer:$o,HTTPFactory:cs,TimelineTransport:Ti,getXHRAPI:function(){return window.XMLHttpRequest},getWebSocketAPI:function(){return window.WebSocket||window.MozWebSocket},setup:function(n){var e=this;window.Pusher=n;var i=function(){e.onDocumentBody(n.ready)};window.JSON?i():T.load("json2",{},i)},getDocument:function(){return document},getProtocol:function(){return this.getDocument().location.protocol},getAuthorizers:function(){return{ajax:Xr,jsonp:yi}},onDocumentBody:function(n){var e=this;document.body?n():setTimeout(function(){e.onDocumentBody(n)},0)},createJSONPRequest:function(n,e){return new wi(n,e)},createScriptRequest:function(n){return new bi(n)},getLocalStorage:function(){try{return window.localStorage}catch{return}},createXHR:function(){return this.getXHRAPI()?this.createXMLHttpRequest():this.createMicrosoftXHR()},createXMLHttpRequest:function(){var n=this.getXHRAPI();return new n},createMicrosoftXHR:function(){return new ActiveXObject("Microsoft.XMLHTTP")},getNetwork:function(){return Vi},createWebSocket:function(n){var e=this.getWebSocketAPI();return new e(n)},createSocketRequest:function(n,e){if(this.isXHRSupported())return this.HTTPFactory.createXHR(n,e);if(this.isXDRSupported(e.indexOf("https:")===0))return this.HTTPFactory.createXDR(n,e);throw"Cross-origin HTTP requests are not supported"},isXHRSupported:function(){var n=this.getXHRAPI();return Boolean(n)&&new n().withCredentials!==void 0},isXDRSupported:function(n){var e=n?"https:":"http:",i=this.getProtocol();return Boolean(window.XDomainRequest)&&i===e},addUnloadListener:function(n){window.addEventListener!==void 0?window.addEventListener("unload",n,!1):window.attachEvent!==void 0&&window.attachEvent("onunload",n)},removeUnloadListener:function(n){window.addEventListener!==void 0?window.removeEventListener("unload",n,!1):window.detachEvent!==void 0&&window.detachEvent("onunload",n)},randomInt:function(n){var e=function(){var i=window.crypto||window.msCrypto,s=i.getRandomValues(new Uint32Array(1))[0];return s/Math.pow(2,32)};return Math.floor(e()*n)}},I=us,ut;(function(n){n[n.ERROR=3]="ERROR",n[n.INFO=6]="INFO",n[n.DEBUG=7]="DEBUG"})(ut||(ut={}));var qe=ut,ls=function(){function n(e,i,s){this.key=e,this.session=i,this.events=[],this.options=s||{},this.sent=0,this.uniqueID=0}return n.prototype.log=function(e,i){e<=this.options.level&&(this.events.push(U({},i,{timestamp:F.now()})),this.options.limit&&this.events.length>this.options.limit&&this.events.shift())},n.prototype.error=function(e){this.log(qe.ERROR,e)},n.prototype.info=function(e){this.log(qe.INFO,e)},n.prototype.debug=function(e){this.log(qe.DEBUG,e)},n.prototype.isEmpty=function(){return this.events.length===0},n.prototype.send=function(e,i){var s=this,u=U({session:this.session,bundle:this.sent+1,key:this.key,lib:"js",version:this.options.version,cluster:this.options.cluster,features:this.options.features,timeline:this.events},this.options.params);return this.events=[],e(u,function(l,d){l||s.sent++,i&&i(l,d)}),!0},n.prototype.generateUniqueID=function(){return this.uniqueID++,this.uniqueID},n}(),hs=ls,fs=function(){function n(e,i,s,u){this.name=e,this.priority=i,this.transport=s,this.options=u||{}}return n.prototype.isSupported=function(){return this.transport.isSupported({useTLS:this.options.useTLS})},n.prototype.connect=function(e,i){var s=this;if(this.isSupported()){if(this.priority<e)return vn(new $,i)}else return vn(new G,i);var u=!1,l=this.transport.createConnection(this.name,this.priority,this.options.key,this.options),d=null,v=function(){l.unbind("initialized",v),l.connect()},S=function(){d=re.createHandshake(l,function(Y){u=!0,N(),i(null,Y)})},b=function(Y){N(),i(Y)},P=function(){N();var Y;Y=He(l),i(new K(Y))},N=function(){l.unbind("initialized",v),l.unbind("open",S),l.unbind("error",b),l.unbind("closed",P)};return l.bind("initialized",v),l.bind("open",S),l.bind("error",b),l.bind("closed",P),l.initialize(),{abort:function(){u||(N(),d?d.close():l.close())},forceMinPriority:function(Y){u||s.priority<Y&&(d?d.close():l.close())}}},n}(),ds=fs;function vn(n,e){return F.defer(function(){e(n)}),{abort:function(){},forceMinPriority:function(){}}}var ps=I.Transports,gs=function(n,e,i,s,u,l){var d=ps[i];if(!d)throw new J(i);var v=(!n.enabledTransports||Qt(n.enabledTransports,e)!==-1)&&(!n.disabledTransports||Qt(n.disabledTransports,e)===-1),S;return v?(u=Object.assign({ignoreNullOrigin:n.ignoreNullOrigin},u),S=new ds(e,s,l?l.getAssistant(d):d,u)):S=vs,S},vs={isSupported:function(){return!1},connect:function(n,e){var i=F.defer(function(){e(new G)});return{abort:function(){i.ensureAborted()},forceMinPriority:function(){}}}};function ys(n){if(n==null)throw"You must pass an options object";if(n.cluster==null)throw"Options object must provide a cluster";"disableStats"in n&&L.warn("The disableStats option is deprecated in favor of enableStats")}var ms=function(n,e){var i="socket_id="+encodeURIComponent(n.socketId);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},bs=function(n){if(typeof I.getAuthorizers()[n.transport]>"u")throw"'"+n.transport+"' is not a recognized auth transport";return function(e,i){var s=ms(e,n);I.getAuthorizers()[n.transport](I,s,n,y.UserAuthentication,i)}},_s=bs,ws=function(n,e){var i="socket_id="+encodeURIComponent(n.socketId);i+="&channel_name="+encodeURIComponent(n.channelName);for(var s in e.params)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(e.params[s]);if(e.paramsProvider!=null){var u=e.paramsProvider();for(var s in u)i+="&"+encodeURIComponent(s)+"="+encodeURIComponent(u[s])}return i},Ss=function(n){if(typeof I.getAuthorizers()[n.transport]>"u")throw"'"+n.transport+"' is not a recognized auth transport";return function(e,i){var s=ws(e,n);I.getAuthorizers()[n.transport](I,s,n,y.ChannelAuthorization,i)}},ks=Ss,Ts=function(n,e,i){var s={authTransport:e.transport,authEndpoint:e.endpoint,auth:{params:e.params,headers:e.headers}};return function(u,l){var d=n.channel(u.channelName),v=i(d,s);v.authorize(u.socketId,l)}},Se=function(){return Se=Object.assign||function(n){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(n[u]=e[u])}return n},Se.apply(this,arguments)};function Cs(n,e){var i={activityTimeout:n.activityTimeout||p.activityTimeout,cluster:n.cluster,httpPath:n.httpPath||p.httpPath,httpPort:n.httpPort||p.httpPort,httpsPort:n.httpsPort||p.httpsPort,pongTimeout:n.pongTimeout||p.pongTimeout,statsHost:n.statsHost||p.stats_host,unavailableTimeout:n.unavailableTimeout||p.unavailableTimeout,wsPath:n.wsPath||p.wsPath,wsPort:n.wsPort||p.wsPort,wssPort:n.wssPort||p.wssPort,enableStats:Os(n),httpHost:Is(n),useTLS:Ps(n),wsHost:Es(n),userAuthenticator:xs(n),channelAuthorizer:Rs(n,e)};return"disabledTransports"in n&&(i.disabledTransports=n.disabledTransports),"enabledTransports"in n&&(i.enabledTransports=n.enabledTransports),"ignoreNullOrigin"in n&&(i.ignoreNullOrigin=n.ignoreNullOrigin),"timelineParams"in n&&(i.timelineParams=n.timelineParams),"nacl"in n&&(i.nacl=n.nacl),i}function Is(n){return n.httpHost?n.httpHost:n.cluster?"sockjs-"+n.cluster+".pusher.com":p.httpHost}function Es(n){return n.wsHost?n.wsHost:As(n.cluster)}function As(n){return"ws-"+n+".pusher.com"}function Ps(n){return I.getProtocol()==="https:"?!0:n.forceTLS!==!1}function Os(n){return"enableStats"in n?n.enableStats:"disableStats"in n?!n.disableStats:!1}function xs(n){var e=Se(Se({},p.userAuthentication),n.userAuthentication);return"customHandler"in e&&e.customHandler!=null?e.customHandler:_s(e)}function Ds(n,e){var i;return"channelAuthorization"in n?i=Se(Se({},p.channelAuthorization),n.channelAuthorization):(i={transport:n.authTransport||p.authTransport,endpoint:n.authEndpoint||p.authEndpoint},"auth"in n&&("params"in n.auth&&(i.params=n.auth.params),"headers"in n.auth&&(i.headers=n.auth.headers)),"authorizer"in n&&(i.customHandler=Ts(e,i,n.authorizer))),i}function Rs(n,e){var i=Ds(n,e);return"customHandler"in i&&i.customHandler!=null?i.customHandler:ks(i)}var Ls=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Ns=function(n){Ls(e,n);function e(i){var s=n.call(this,function(u,l){L.debug("No callbacks on watchlist events for "+u)})||this;return s.pusher=i,s.bindWatchlistInternalEvent(),s}return e.prototype.handleEvent=function(i){var s=this;i.data.events.forEach(function(u){s.emit(u.name,u)})},e.prototype.bindWatchlistInternalEvent=function(){var i=this;this.pusher.connection.bind("message",function(s){var u=s.event;u==="pusher_internal:watchlist_events"&&i.handleEvent(s)})},e}(ne),js=Ns;function Ms(){var n,e,i=new Promise(function(s,u){n=s,e=u});return{promise:i,resolve:n,reject:e}}var Bs=Ms,Fs=function(){var n=function(e,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,u){s.__proto__=u}||function(s,u){for(var l in u)u.hasOwnProperty(l)&&(s[l]=u[l])},n(e,i)};return function(e,i){n(e,i);function s(){this.constructor=e}e.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),Hs=function(n){Fs(e,n);function e(i){var s=n.call(this,function(u,l){L.debug("No callbacks on user for "+u)})||this;return s.signin_requested=!1,s.user_data=null,s.serverToUserChannel=null,s.signinDonePromise=null,s._signinDoneResolve=null,s._onAuthorize=function(u,l){if(u){L.warn("Error during signin: "+u),s._cleanup();return}s.pusher.send_event("pusher:signin",{auth:l.auth,user_data:l.user_data})},s.pusher=i,s.pusher.connection.bind("state_change",function(u){var l=u.previous,d=u.current;l!=="connected"&&d==="connected"&&s._signin(),l==="connected"&&d!=="connected"&&(s._cleanup(),s._newSigninPromiseIfNeeded())}),s.watchlist=new js(i),s.pusher.connection.bind("message",function(u){var l=u.event;l==="pusher:signin_success"&&s._onSigninSuccess(u.data),s.serverToUserChannel&&s.serverToUserChannel.name===u.channel&&s.serverToUserChannel.handleEvent(u)}),s}return e.prototype.signin=function(){this.signin_requested||(this.signin_requested=!0,this._signin())},e.prototype._signin=function(){!this.signin_requested||(this._newSigninPromiseIfNeeded(),this.pusher.connection.state==="connected"&&this.pusher.config.userAuthenticator({socketId:this.pusher.connection.socket_id},this._onAuthorize))},e.prototype._onSigninSuccess=function(i){try{this.user_data=JSON.parse(i.user_data)}catch{L.error("Failed parsing user data after signin: "+i.user_data),this._cleanup();return}if(typeof this.user_data.id!="string"||this.user_data.id===""){L.error("user_data doesn't contain an id. user_data: "+this.user_data),this._cleanup();return}this._signinDoneResolve(),this._subscribeChannels()},e.prototype._subscribeChannels=function(){var i=this,s=function(u){u.subscriptionPending&&u.subscriptionCancelled?u.reinstateSubscription():!u.subscriptionPending&&i.pusher.connection.state==="connected"&&u.subscribe()};this.serverToUserChannel=new rt("#server-to-user-"+this.user_data.id,this.pusher),this.serverToUserChannel.bind_global(function(u,l){u.indexOf("pusher_internal:")===0||u.indexOf("pusher:")===0||i.emit(u,l)}),s(this.serverToUserChannel)},e.prototype._cleanup=function(){this.user_data=null,this.serverToUserChannel&&(this.serverToUserChannel.unbind_all(),this.serverToUserChannel.disconnect(),this.serverToUserChannel=null),this.signin_requested&&this._signinDoneResolve()},e.prototype._newSigninPromiseIfNeeded=function(){if(!!this.signin_requested&&!(this.signinDonePromise&&!this.signinDonePromise.done)){var i=Bs(),s=i.promise,u=i.resolve;s.done=!1;var l=function(){s.done=!0};s.then(l).catch(l),this.signinDonePromise=s,this._signinDoneResolve=u}},e}(ne),$s=Hs,yn=function(){function n(e,i){var s=this;Us(e),ys(i),this.key=e,this.config=Cs(i,this),this.channels=re.createChannels(),this.global_emitter=new ne,this.sessionID=I.randomInt(1e9),this.timeline=new hs(this.key,this.sessionID,{cluster:this.config.cluster,features:n.getClientFeatures(),params:this.config.timelineParams||{},limit:50,level:qe.INFO,version:p.VERSION}),this.config.enableStats&&(this.timelineSender=re.createTimelineSender(this.timeline,{host:this.config.statsHost,path:"/timeline/v2/"+I.TimelineTransport.name}));var u=function(l){return I.getDefaultStrategy(s.config,l,gs)};this.connection=re.createConnectionManager(this.key,{getStrategy:u,timeline:this.timeline,activityTimeout:this.config.activityTimeout,pongTimeout:this.config.pongTimeout,unavailableTimeout:this.config.unavailableTimeout,useTLS:Boolean(this.config.useTLS)}),this.connection.bind("connected",function(){s.subscribeAll(),s.timelineSender&&s.timelineSender.send(s.connection.isUsingTLS())}),this.connection.bind("message",function(l){var d=l.event,v=d.indexOf("pusher_internal:")===0;if(l.channel){var S=s.channel(l.channel);S&&S.handleEvent(l)}v||s.global_emitter.emit(l.event,l.data)}),this.connection.bind("connecting",function(){s.channels.disconnect()}),this.connection.bind("disconnected",function(){s.channels.disconnect()}),this.connection.bind("error",function(l){L.warn(l)}),n.instances.push(this),this.timeline.info({instances:n.instances.length}),this.user=new $s(this),n.isReady&&this.connect()}return n.ready=function(){n.isReady=!0;for(var e=0,i=n.instances.length;e<i;e++)n.instances[e].connect()},n.getClientFeatures=function(){return Zt(nn({ws:I.Transports.ws},function(e){return e.isSupported({})}))},n.prototype.channel=function(e){return this.channels.find(e)},n.prototype.allChannels=function(){return this.channels.all()},n.prototype.connect=function(){if(this.connection.connect(),this.timelineSender&&!this.timelineSenderTimer){var e=this.connection.isUsingTLS(),i=this.timelineSender;this.timelineSenderTimer=new oi(6e4,function(){i.send(e)})}},n.prototype.disconnect=function(){this.connection.disconnect(),this.timelineSenderTimer&&(this.timelineSenderTimer.ensureAborted(),this.timelineSenderTimer=null)},n.prototype.bind=function(e,i,s){return this.global_emitter.bind(e,i,s),this},n.prototype.unbind=function(e,i,s){return this.global_emitter.unbind(e,i,s),this},n.prototype.bind_global=function(e){return this.global_emitter.bind_global(e),this},n.prototype.unbind_global=function(e){return this.global_emitter.unbind_global(e),this},n.prototype.unbind_all=function(e){return this.global_emitter.unbind_all(),this},n.prototype.subscribeAll=function(){var e;for(e in this.channels.channels)this.channels.channels.hasOwnProperty(e)&&this.subscribe(e)},n.prototype.subscribe=function(e){var i=this.channels.add(e,this);return i.subscriptionPending&&i.subscriptionCancelled?i.reinstateSubscription():!i.subscriptionPending&&this.connection.state==="connected"&&i.subscribe(),i},n.prototype.unsubscribe=function(e){var i=this.channels.find(e);i&&i.subscriptionPending?i.cancelSubscription():(i=this.channels.remove(e),i&&i.subscribed&&i.unsubscribe())},n.prototype.send_event=function(e,i,s){return this.connection.send_event(e,i,s)},n.prototype.shouldUseTLS=function(){return this.config.useTLS},n.prototype.signin=function(){this.user.signin()},n.instances=[],n.isReady=!1,n.logToConsole=!1,n.Runtime=I,n.ScriptReceivers=I.ScriptReceivers,n.DependenciesReceivers=I.DependenciesReceivers,n.auth_callbacks=I.auth_callbacks,n}(),lt=a.default=yn;function Us(n){if(n==null)throw"You must pass your app key when you instantiate Pusher."}I.setup(yn)}])})})(ar);const On=ea(ar.exports),xe=class{constructor(){R(this,"cancelled",!1);R(this,"equipamento_conversa_id");R(this,"usuario_id");R(this,"mensagem");R(this,"mensagem_id");R(this,"notify",()=>{for(let t of xe.listeners)if(t.callback(this),this.cancelled)break})}};let Ae=xe;R(Ae,"listeners",[]),R(Ae,"addListener",function(t){xe.listeners.push(t),xe.listeners.sort((o,a)=>o.priority-a.priority)});const De=class{constructor(){R(this,"cancelled",!1);R(this,"notificacao");R(this,"notify",()=>{for(let t of De.listeners)if(t.callback(this),this.cancelled)break})}};let ke=De;R(ke,"listeners",[]),R(ke,"addListener",function(t){De.listeners.push(t),De.listeners.sort((o,a)=>o.priority-a.priority)});class Ta{constructor(){R(this,"id");R(this,"visualizado");R(this,"usuario_id");R(this,"titulo");R(this,"texto")}}const dt={broadcaster:"pusher",key:"app-key",cluster:"mt1",forceTLS:!1,wsHost:"localhost",wsPort:"10010",wssPort:"10010",authEndpoint:"/broadcasting/auth"};function Ca(){Lt(()=>{var r,t,o;window.Echo=new ka({...dt,client:new On(dt.key,dt)}),(o=(t=(r=In())==null?void 0:r.props)==null?void 0:t.auth)!=null&&o.user&&(window.Echo.private("notificacoes."+In().props.auth.user.id).listen(".ConversaWebSocket",a=>Ia(a)).listen(".NotificacaoWebSocket",a=>Ea(a)).listenToAll((a,c)=>console.log([a,c])),window.Pusher=On)})}function Ia(r){let t=new Ae;t.mensagem_id=r.notification.mensagem.id,t.mensagem=r.notification.mensagem.mensagem,t.usuario_id=r.notification.mensagem.usuario_id,t.equipamento_conversa_id=r.notification.mensagem.equipamento_conversa_id,t.notify()}function Ea(r){console.log("notificacaows");let t=new ke;t.notificacao=new Ta,t.notificacao.id=r.notification.notificacao.id,t.notificacao.visualizado=r.notification.notificacao.visualizado,t.notificacao.usuario_id=r.notification.notificacao.usuario_id,t.notificacao.titulo=r.notification.notificacao.titulo,t.notificacao.texto=r.notification.notificacao.texto,t.notify()}/**
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
 */const cr=function(r){const t=[];let o=0;for(let a=0;a<r.length;a++){let c=r.charCodeAt(a);c<128?t[o++]=c:c<2048?(t[o++]=c>>6|192,t[o++]=c&63|128):(c&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(r.charCodeAt(++a)&1023),t[o++]=c>>18|240,t[o++]=c>>12&63|128,t[o++]=c>>6&63|128,t[o++]=c&63|128):(t[o++]=c>>12|224,t[o++]=c>>6&63|128,t[o++]=c&63|128)}return t},Aa=function(r){const t=[];let o=0,a=0;for(;o<r.length;){const c=r[o++];if(c<128)t[a++]=String.fromCharCode(c);else if(c>191&&c<224){const h=r[o++];t[a++]=String.fromCharCode((c&31)<<6|h&63)}else if(c>239&&c<365){const h=r[o++],f=r[o++],g=r[o++],p=((c&7)<<18|(h&63)<<12|(f&63)<<6|g&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const h=r[o++],f=r[o++];t[a++]=String.fromCharCode((c&15)<<12|(h&63)<<6|f&63)}}return t.join("")},ur={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const o=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<r.length;c+=3){const h=r[c],f=c+1<r.length,g=f?r[c+1]:0,p=c+2<r.length,w=p?r[c+2]:0,_=h>>2,E=(h&3)<<4|g>>4;let T=(g&15)<<2|w>>6,k=w&63;p||(k=64,f||(T=64)),a.push(o[_],o[E],o[T],o[k])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(cr(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Aa(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const o=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<r.length;){const h=o[r.charAt(c++)],g=c<r.length?o[r.charAt(c)]:0;++c;const w=c<r.length?o[r.charAt(c)]:64;++c;const E=c<r.length?o[r.charAt(c)]:64;if(++c,h==null||g==null||w==null||E==null)throw Error();const T=h<<2|g>>4;if(a.push(T),w!==64){const k=g<<4&240|w>>2;if(a.push(k),E!==64){const O=w<<6&192|E;a.push(O)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Pa=function(r){const t=cr(r);return ur.encodeByteArray(t,!0)},lr=function(r){return Pa(r).replace(/\./g,"")},Oa=function(r){try{return ur.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Da=()=>xa().__FIREBASE_DEFAULTS__,Ra=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},La=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Oa(r[1]);return t&&JSON.parse(t)},Na=()=>{try{return Da()||Ra()||La()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ja=()=>{var r;return(r=Na())===null||r===void 0?void 0:r.config};/**
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
 */class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,o)=>{this.resolve=t,this.reject=o})}wrapCallback(t){return(o,a)=>{o?this.reject(o):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(o):t(o,a))}}}function Ba(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Bt(){try{return typeof indexedDB=="object"}catch{return!1}}function Ft(){return new Promise((r,t)=>{try{let o=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),o||self.indexedDB.deleteDatabase(a),r(!0)},c.onupgradeneeded=()=>{o=!1},c.onerror=()=>{var h;t(((h=c.error)===null||h===void 0?void 0:h.message)||"")}}catch(o){t(o)}})}function hr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Fa="FirebaseError";class _e extends Error{constructor(t,o,a){super(o),this.code=t,this.customData=a,this.name=Fa,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,je.prototype.create)}}class je{constructor(t,o,a){this.service=t,this.serviceName=o,this.errors=a}create(t,...o){const a=o[0]||{},c=`${this.service}/${t}`,h=this.errors[t],f=h?Ha(h,a):"Error",g=`${this.serviceName}: ${f} (${c}).`;return new _e(c,g,a)}}function Ha(r,t){return r.replace($a,(o,a)=>{const c=t[a];return c!=null?String(c):`<${a}?>`})}const $a=/\{\$([^}]+)}/g;function We(r,t){if(r===t)return!0;const o=Object.keys(r),a=Object.keys(t);for(const c of o){if(!a.includes(c))return!1;const h=r[c],f=t[c];if(xn(h)&&xn(f)){if(!We(h,f))return!1}else if(h!==f)return!1}for(const c of a)if(!o.includes(c))return!1;return!0}function xn(r){return r!==null&&typeof r=="object"}/**
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
 */const Ua=1e3,qa=2,za=4*60*60*1e3,Va=.5;function Dn(r,t=Ua,o=qa){const a=t*Math.pow(o,r),c=Math.round(Va*a*(Math.random()-.5)*2);return Math.min(za,a+c)}/**
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
 */function Me(r){return r&&r._delegate?r._delegate:r}class Z{constructor(t,o,a){this.name=t,this.instanceFactory=o,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Wa{constructor(t,o){this.name=t,this.container=o,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const o=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(o)){const a=new Ma;if(this.instancesDeferred.set(o,a),this.isInitialized(o)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:o});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(o).promise}getImmediate(t){var o;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),c=(o=t==null?void 0:t.optional)!==null&&o!==void 0?o:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(c)return null;throw h}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ga(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);try{const h=this.getOrInitializeService({instanceIdentifier:c});a.resolve(h)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(o=>"INTERNAL"in o).map(o=>o.INTERNAL.delete()),...t.filter(o=>"_delete"in o).map(o=>o._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:o={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:o});for(const[h,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(h);a===g&&f.resolve(c)}return c}onInit(t,o){var a;const c=this.normalizeInstanceIdentifier(o),h=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;h.add(t),this.onInitCallbacks.set(c,h);const f=this.instances.get(c);return f&&t(f,c),()=>{h.delete(t)}}invokeOnInitCallbacks(t,o){const a=this.onInitCallbacks.get(o);if(!!a)for(const c of a)try{c(t,o)}catch{}}getOrInitializeService({instanceIdentifier:t,options:o={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ka(t),options:o}),this.instances.set(t,a),this.instancesOptions.set(t,o),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ka(r){return r===de?void 0:r}function Ga(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ja{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const o=this.getProvider(t.name);if(o.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);o.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const o=new Wa(t,this);return this.providers.set(t,o),o}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(x||(x={}));const Xa={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Ya=x.INFO,Qa={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Za=(r,t,...o)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),c=Qa[t];if(c)console[c](`[${a}]  ${r.name}:`,...o);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fr{constructor(t){this.name=t,this._logLevel=Ya,this._logHandler=Za,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const ec=(r,t)=>t.some(o=>r instanceof o);let Rn,Ln;function tc(){return Rn||(Rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nc(){return Ln||(Ln=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dr=new WeakMap,At=new WeakMap,pr=new WeakMap,pt=new WeakMap,Ht=new WeakMap;function rc(r){const t=new Promise((o,a)=>{const c=()=>{r.removeEventListener("success",h),r.removeEventListener("error",f)},h=()=>{o(oe(r.result)),c()},f=()=>{a(r.error),c()};r.addEventListener("success",h),r.addEventListener("error",f)});return t.then(o=>{o instanceof IDBCursor&&dr.set(o,r)}).catch(()=>{}),Ht.set(t,r),t}function ic(r){if(At.has(r))return;const t=new Promise((o,a)=>{const c=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",f),r.removeEventListener("abort",f)},h=()=>{o(),c()},f=()=>{a(r.error||new DOMException("AbortError","AbortError")),c()};r.addEventListener("complete",h),r.addEventListener("error",f),r.addEventListener("abort",f)});At.set(r,t)}let Pt={get(r,t,o){if(r instanceof IDBTransaction){if(t==="done")return At.get(r);if(t==="objectStoreNames")return r.objectStoreNames||pr.get(r);if(t==="store")return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return oe(r[t])},set(r,t,o){return r[t]=o,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function oc(r){Pt=r(Pt)}function sc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...o){const a=r.call(gt(this),t,...o);return pr.set(a,t.sort?t.sort():[t]),oe(a)}:nc().includes(r)?function(...t){return r.apply(gt(this),t),oe(dr.get(this))}:function(...t){return oe(r.apply(gt(this),t))}}function ac(r){return typeof r=="function"?sc(r):(r instanceof IDBTransaction&&ic(r),ec(r,tc())?new Proxy(r,Pt):r)}function oe(r){if(r instanceof IDBRequest)return rc(r);if(pt.has(r))return pt.get(r);const t=ac(r);return t!==r&&(pt.set(r,t),Ht.set(t,r)),t}const gt=r=>Ht.get(r);function Ye(r,t,{blocked:o,upgrade:a,blocking:c,terminated:h}={}){const f=indexedDB.open(r,t),g=oe(f);return a&&f.addEventListener("upgradeneeded",p=>{a(oe(f.result),p.oldVersion,p.newVersion,oe(f.transaction))}),o&&f.addEventListener("blocked",()=>o()),g.then(p=>{h&&p.addEventListener("close",()=>h()),c&&p.addEventListener("versionchange",()=>c())}).catch(()=>{}),g}function vt(r,{blocked:t}={}){const o=indexedDB.deleteDatabase(r);return t&&o.addEventListener("blocked",()=>t()),oe(o).then(()=>{})}const cc=["get","getKey","getAll","getAllKeys","count"],uc=["put","add","delete","clear"],yt=new Map;function Nn(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(yt.get(t))return yt.get(t);const o=t.replace(/FromIndex$/,""),a=t!==o,c=uc.includes(o);if(!(o in(a?IDBIndex:IDBObjectStore).prototype)||!(c||cc.includes(o)))return;const h=async function(f,...g){const p=this.transaction(f,c?"readwrite":"readonly");let w=p.store;return a&&(w=w.index(g.shift())),(await Promise.all([w[o](...g),c&&p.done]))[0]};return yt.set(t,h),h}oc(r=>({...r,get:(t,o,a)=>Nn(t,o)||r.get(t,o,a),has:(t,o)=>!!Nn(t,o)||r.has(t,o)}));/**
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
 */class lc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(hc(o)){const a=o.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(o=>o).join(" ")}}function hc(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ot="@firebase/app",jn="0.9.1";/**
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
 */const ve=new fr("@firebase/app"),fc="@firebase/app-compat",dc="@firebase/analytics-compat",pc="@firebase/analytics",gc="@firebase/app-check-compat",vc="@firebase/app-check",yc="@firebase/auth",mc="@firebase/auth-compat",bc="@firebase/database",_c="@firebase/database-compat",wc="@firebase/functions",Sc="@firebase/functions-compat",kc="@firebase/installations",Tc="@firebase/installations-compat",Cc="@firebase/messaging",Ic="@firebase/messaging-compat",Ec="@firebase/performance",Ac="@firebase/performance-compat",Pc="@firebase/remote-config",Oc="@firebase/remote-config-compat",xc="@firebase/storage",Dc="@firebase/storage-compat",Rc="@firebase/firestore",Lc="@firebase/firestore-compat",Nc="firebase";/**
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
 */const xt="[DEFAULT]",jc={[Ot]:"fire-core",[fc]:"fire-core-compat",[pc]:"fire-analytics",[dc]:"fire-analytics-compat",[vc]:"fire-app-check",[gc]:"fire-app-check-compat",[yc]:"fire-auth",[mc]:"fire-auth-compat",[bc]:"fire-rtdb",[_c]:"fire-rtdb-compat",[wc]:"fire-fn",[Sc]:"fire-fn-compat",[kc]:"fire-iid",[Tc]:"fire-iid-compat",[Cc]:"fire-fcm",[Ic]:"fire-fcm-compat",[Ec]:"fire-perf",[Ac]:"fire-perf-compat",[Pc]:"fire-rc",[Oc]:"fire-rc-compat",[xc]:"fire-gcs",[Dc]:"fire-gcs-compat",[Rc]:"fire-fst",[Lc]:"fire-fst-compat","fire-js":"fire-js",[Nc]:"fire-js-all"};/**
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
 */const Ke=new Map,Dt=new Map;function Mc(r,t){try{r.container.addComponent(t)}catch(o){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,o)}}function se(r){const t=r.name;if(Dt.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;Dt.set(t,r);for(const o of Ke.values())Mc(o,r);return!0}function Be(r,t){const o=r.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),r.container.getProvider(t)}/**
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
 */const Bc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new je("app","Firebase",Bc);/**
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
 */class Fc{constructor(t,o,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function gr(r,t={}){let o=r;typeof t!="object"&&(t={name:t});const a=Object.assign({name:xt,automaticDataCollectionEnabled:!1},t),c=a.name;if(typeof c!="string"||!c)throw ce.create("bad-app-name",{appName:String(c)});if(o||(o=ja()),!o)throw ce.create("no-options");const h=Ke.get(c);if(h){if(We(o,h.options)&&We(a,h.config))return h;throw ce.create("duplicate-app",{appName:c})}const f=new Ja(c);for(const p of Dt.values())f.addComponent(p);const g=new Fc(o,a,f);return Ke.set(c,g),g}function vr(r=xt){const t=Ke.get(r);if(!t&&r===xt)return gr();if(!t)throw ce.create("no-app",{appName:r});return t}function Q(r,t,o){var a;let c=(a=jc[r])!==null&&a!==void 0?a:r;o&&(c+=`-${o}`);const h=c.match(/\s|\//),f=t.match(/\s|\//);if(h||f){const g=[`Unable to register library "${c}" with version "${t}":`];h&&g.push(`library name "${c}" contains illegal characters (whitespace or "/")`),h&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(g.join(" "));return}se(new Z(`${c}-version`,()=>({library:c,version:t}),"VERSION"))}/**
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
 */const Hc="firebase-heartbeat-database",$c=1,Le="firebase-heartbeat-store";let mt=null;function yr(){return mt||(mt=Ye(Hc,$c,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Le)}}}).catch(r=>{throw ce.create("idb-open",{originalErrorMessage:r.message})})),mt}async function Uc(r){try{return(await yr()).transaction(Le).objectStore(Le).get(mr(r))}catch(t){if(t instanceof _e)ve.warn(t.message);else{const o=ce.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ve.warn(o.message)}}}async function Mn(r,t){try{const a=(await yr()).transaction(Le,"readwrite");return await a.objectStore(Le).put(t,mr(r)),a.done}catch(o){if(o instanceof _e)ve.warn(o.message);else{const a=ce.create("idb-set",{originalErrorMessage:o==null?void 0:o.message});ve.warn(a.message)}}}function mr(r){return`${r.name}!${r.options.appId}`}/**
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
 */const qc=1024,zc=30*24*60*60*1e3;class Vc{constructor(t){this.container=t,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new Kc(o),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Bn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=zc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bn(),{heartbeatsToSend:o,unsentEntries:a}=Wc(this._heartbeatsCache.heartbeats),c=lr(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}}function Bn(){return new Date().toISOString().substring(0,10)}function Wc(r,t=qc){const o=[];let a=r.slice();for(const c of r){const h=o.find(f=>f.agent===c.agent);if(h){if(h.dates.push(c.date),Fn(o)>t){h.dates.pop();break}}else if(o.push({agent:c.agent,dates:[c.date]}),Fn(o)>t){o.pop();break}a=a.slice(1)}return{heartbeatsToSend:o,unsentEntries:a}}class Kc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bt()?Ft().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Mn(this.app,{lastSentHeartbeatDate:(o=t.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var o;if(await this._canUseIndexedDBPromise){const c=await this.read();return Mn(this.app,{lastSentHeartbeatDate:(o=t.lastSentHeartbeatDate)!==null&&o!==void 0?o:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...t.heartbeats]})}else return}}function Fn(r){return lr(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Gc(r){se(new Z("platform-logger",t=>new lc(t),"PRIVATE")),se(new Z("heartbeat",t=>new Vc(t),"PRIVATE")),Q(Ot,jn,r),Q(Ot,jn,"esm2017"),Q("fire-js","")}Gc("");var Jc="firebase",Xc="9.16.0";/**
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
 */Q(Jc,Xc,"app");const br="@firebase/installations",$t="0.6.1";/**
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
 */const _r=1e4,wr=`w:${$t}`,Sr="FIS_v2",Yc="https://firebaseinstallations.googleapis.com/v1",Qc=60*60*1e3,Zc="installations",eu="Installations";/**
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
 */const tu={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ye=new je(Zc,eu,tu);function kr(r){return r instanceof _e&&r.code.includes("request-failed")}/**
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
 */function Tr({projectId:r}){return`${Yc}/projects/${r}/installations`}function Cr(r){return{token:r.token,requestStatus:2,expiresIn:ru(r.expiresIn),creationTime:Date.now()}}async function Ir(r,t){const a=(await t.json()).error;return ye.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Er({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function nu(r,{refreshToken:t}){const o=Er(r);return o.append("Authorization",iu(t)),o}async function Ar(r){const t=await r();return t.status>=500&&t.status<600?r():t}function ru(r){return Number(r.replace("s","000"))}function iu(r){return`${Sr} ${r}`}/**
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
 */async function ou({appConfig:r,heartbeatServiceProvider:t},{fid:o}){const a=Tr(r),c=Er(r),h=t.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={fid:o,authVersion:Sr,appId:r.appId,sdkVersion:wr},g={method:"POST",headers:c,body:JSON.stringify(f)},p=await Ar(()=>fetch(a,g));if(p.ok){const w=await p.json();return{fid:w.fid||o,registrationStatus:2,refreshToken:w.refreshToken,authToken:Cr(w.authToken)}}else throw await Ir("Create Installation",p)}/**
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
 */function Pr(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function su(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const au=/^[cdef][\w-]{21}$/,Rt="";function cu(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const o=uu(r);return au.test(o)?o:Rt}catch{return Rt}}function uu(r){return su(r).substr(0,22)}/**
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
 */const Or=new Map;function xr(r,t){const o=Qe(r);Dr(o,t),lu(o,t)}function Dr(r,t){const o=Or.get(r);if(!!o)for(const a of o)a(t)}function lu(r,t){const o=hu();o&&o.postMessage({key:r,fid:t}),fu()}let pe=null;function hu(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=r=>{Dr(r.data.key,r.data.fid)}),pe}function fu(){Or.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const du="firebase-installations-database",pu=1,me="firebase-installations-store";let bt=null;function Ut(){return bt||(bt=Ye(du,pu,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(me)}}})),bt}async function Ge(r,t){const o=Qe(r),c=(await Ut()).transaction(me,"readwrite"),h=c.objectStore(me),f=await h.get(o);return await h.put(t,o),await c.done,(!f||f.fid!==t.fid)&&xr(r,t.fid),t}async function Rr(r){const t=Qe(r),a=(await Ut()).transaction(me,"readwrite");await a.objectStore(me).delete(t),await a.done}async function Ze(r,t){const o=Qe(r),c=(await Ut()).transaction(me,"readwrite"),h=c.objectStore(me),f=await h.get(o),g=t(f);return g===void 0?await h.delete(o):await h.put(g,o),await c.done,g&&(!f||f.fid!==g.fid)&&xr(r,g.fid),g}/**
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
 */async function qt(r){let t;const o=await Ze(r.appConfig,a=>{const c=gu(a),h=vu(r,c);return t=h.registrationPromise,h.installationEntry});return o.fid===Rt?{installationEntry:await t}:{installationEntry:o,registrationPromise:t}}function gu(r){const t=r||{fid:cu(),registrationStatus:0};return Lr(t)}function vu(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ye.create("app-offline"));return{installationEntry:t,registrationPromise:c}}const o={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=yu(r,o);return{installationEntry:o,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:mu(r)}:{installationEntry:t}}async function yu(r,t){try{const o=await ou(r,t);return Ge(r.appConfig,o)}catch(o){throw kr(o)&&o.customData.serverCode===409?await Rr(r.appConfig):await Ge(r.appConfig,{fid:t.fid,registrationStatus:0}),o}}async function mu(r){let t=await Hn(r.appConfig);for(;t.registrationStatus===1;)await Pr(100),t=await Hn(r.appConfig);if(t.registrationStatus===0){const{installationEntry:o,registrationPromise:a}=await qt(r);return a||o}return t}function Hn(r){return Ze(r,t=>{if(!t)throw ye.create("installation-not-found");return Lr(t)})}function Lr(r){return bu(r)?{fid:r.fid,registrationStatus:0}:r}function bu(r){return r.registrationStatus===1&&r.registrationTime+_r<Date.now()}/**
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
 */async function _u({appConfig:r,heartbeatServiceProvider:t},o){const a=wu(r,o),c=nu(r,o),h=t.getImmediate({optional:!0});if(h){const w=await h.getHeartbeatsHeader();w&&c.append("x-firebase-client",w)}const f={installation:{sdkVersion:wr,appId:r.appId}},g={method:"POST",headers:c,body:JSON.stringify(f)},p=await Ar(()=>fetch(a,g));if(p.ok){const w=await p.json();return Cr(w)}else throw await Ir("Generate Auth Token",p)}function wu(r,{fid:t}){return`${Tr(r)}/${t}/authTokens:generate`}/**
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
 */async function zt(r,t=!1){let o;const a=await Ze(r.appConfig,h=>{if(!Nr(h))throw ye.create("not-registered");const f=h.authToken;if(!t&&Tu(f))return h;if(f.requestStatus===1)return o=Su(r,t),h;{if(!navigator.onLine)throw ye.create("app-offline");const g=Iu(h);return o=ku(r,g),g}});return o?await o:a.authToken}async function Su(r,t){let o=await $n(r.appConfig);for(;o.authToken.requestStatus===1;)await Pr(100),o=await $n(r.appConfig);const a=o.authToken;return a.requestStatus===0?zt(r,t):a}function $n(r){return Ze(r,t=>{if(!Nr(t))throw ye.create("not-registered");const o=t.authToken;return Eu(o)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ku(r,t){try{const o=await _u(r,t),a=Object.assign(Object.assign({},t),{authToken:o});return await Ge(r.appConfig,a),o}catch(o){if(kr(o)&&(o.customData.serverCode===401||o.customData.serverCode===404))await Rr(r.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ge(r.appConfig,a)}throw o}}function Nr(r){return r!==void 0&&r.registrationStatus===2}function Tu(r){return r.requestStatus===2&&!Cu(r)}function Cu(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Qc}function Iu(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Eu(r){return r.requestStatus===1&&r.requestTime+_r<Date.now()}/**
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
 */async function Au(r){const t=r,{installationEntry:o,registrationPromise:a}=await qt(t);return a?a.catch(console.error):zt(t).catch(console.error),o.fid}/**
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
 */async function Pu(r,t=!1){const o=r;return await Ou(o),(await zt(o,t)).token}async function Ou(r){const{registrationPromise:t}=await qt(r);t&&await t}/**
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
 */function xu(r){if(!r||!r.options)throw _t("App Configuration");if(!r.name)throw _t("App Name");const t=["projectId","apiKey","appId"];for(const o of t)if(!r.options[o])throw _t(o);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function _t(r){return ye.create("missing-app-config-values",{valueName:r})}/**
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
 */const jr="installations",Du="installations-internal",Ru=r=>{const t=r.getProvider("app").getImmediate(),o=xu(t),a=Be(t,"heartbeat");return{app:t,appConfig:o,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Lu=r=>{const t=r.getProvider("app").getImmediate(),o=Be(t,jr).getImmediate();return{getId:()=>Au(o),getToken:c=>Pu(o,c)}};function Nu(){se(new Z(jr,Ru,"PUBLIC")),se(new Z(Du,Lu,"PRIVATE"))}Nu();Q(br,$t);Q(br,$t,"esm2017");/**
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
 */const Je="analytics",ju="firebase_id",Mu="origin",Bu=60*1e3,Fu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mr="https://www.googletagmanager.com/gtag/js";/**
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
 */const q=new fr("@firebase/analytics");/**
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
 */function Br(r){return Promise.all(r.map(t=>t.catch(o=>o)))}function Hu(r,t){const o=document.createElement("script");o.src=`${Mr}?l=${r}&id=${t}`,o.async=!0,document.head.appendChild(o)}function $u(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Uu(r,t,o,a,c,h){const f=a[c];try{if(f)await t[f];else{const p=(await Br(o)).find(w=>w.measurementId===c);p&&await t[p.appId]}}catch(g){q.error(g)}r("config",c,h)}async function qu(r,t,o,a,c){try{let h=[];if(c&&c.send_to){let f=c.send_to;Array.isArray(f)||(f=[f]);const g=await Br(o);for(const p of f){const w=g.find(E=>E.measurementId===p),_=w&&t[w.appId];if(_)h.push(_);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),r("event",a,c||{})}catch(h){q.error(h)}}function zu(r,t,o,a){async function c(h,f,g){try{h==="event"?await qu(r,t,o,f,g):h==="config"?await Uu(r,t,o,a,f,g):h==="consent"?r("consent","update",g):r("set",f)}catch(p){q.error(p)}}return c}function Vu(r,t,o,a,c){let h=function(...f){window[a].push(arguments)};return window[c]&&typeof window[c]=="function"&&(h=window[c]),window[c]=zu(h,r,t,o),{gtagCore:h,wrappedGtag:window[c]}}function Wu(r){const t=window.document.getElementsByTagName("script");for(const o of Object.values(t))if(o.src&&o.src.includes(Mr)&&o.src.includes(r))return o;return null}/**
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
 */const Ku={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},W=new je("analytics","Analytics",Ku);/**
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
 */const Gu=30,Ju=1e3;class Xu{constructor(t={},o=Ju){this.throttleMetadata=t,this.intervalMillis=o}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,o){this.throttleMetadata[t]=o}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Fr=new Xu;function Yu(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Qu(r){var t;const{appId:o,apiKey:a}=r,c={method:"GET",headers:Yu(a)},h=Fu.replace("{app-id}",o),f=await fetch(h,c);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function Zu(r,t=Fr,o){const{appId:a,apiKey:c,measurementId:h}=r.options;if(!a)throw W.create("no-app-id");if(!c){if(h)return{measurementId:h,appId:a};throw W.create("no-api-key")}const f=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new nl;return setTimeout(async()=>{g.abort()},o!==void 0?o:Bu),Hr({appId:a,apiKey:c,measurementId:h},f,g,t)}async function Hr(r,{throttleEndTimeMillis:t,backoffCount:o},a,c=Fr){var h;const{appId:f,measurementId:g}=r;try{await el(a,t)}catch(p){if(g)return q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:g};throw p}try{const p=await Qu(r);return c.deleteThrottleMetadata(f),p}catch(p){const w=p;if(!tl(w)){if(c.deleteThrottleMetadata(f),g)return q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:f,measurementId:g};throw p}const _=Number((h=w==null?void 0:w.customData)===null||h===void 0?void 0:h.httpStatus)===503?Dn(o,c.intervalMillis,Gu):Dn(o,c.intervalMillis),E={throttleEndTimeMillis:Date.now()+_,backoffCount:o+1};return c.setThrottleMetadata(f,E),q.debug(`Calling attemptFetch again in ${_} millis`),Hr(r,E,a,c)}}function el(r,t){return new Promise((o,a)=>{const c=Math.max(t-Date.now(),0),h=setTimeout(o,c);r.addEventListener(()=>{clearTimeout(h),a(W.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function tl(r){if(!(r instanceof _e)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class nl{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rl(r,t,o,a,c){if(c&&c.global){r("event",o,a);return}else{const h=await t,f=Object.assign(Object.assign({},a),{send_to:h});r("event",o,f)}}/**
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
 */async function il(){if(Bt())try{await Ft()}catch(r){return q.warn(W.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return q.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ol(r,t,o,a,c,h,f){var g;const p=Zu(r);p.then(k=>{o[k.measurementId]=k.appId,r.options.measurementId&&k.measurementId!==r.options.measurementId&&q.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>q.error(k)),t.push(p);const w=il().then(k=>{if(k)return a.getId()}),[_,E]=await Promise.all([p,w]);Wu(h)||Hu(h,_.measurementId),c("js",new Date);const T=(g=f==null?void 0:f.config)!==null&&g!==void 0?g:{};return T[Mu]="firebase",T.update=!0,E!=null&&(T[ju]=E),c("config",_.measurementId,T),_.measurementId}/**
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
 */class sl{constructor(t){this.app=t}_delete(){return delete Oe[this.app.options.appId],Promise.resolve()}}let Oe={},Un=[];const qn={};let wt="dataLayer",al="gtag",zn,$r,Vn=!1;function cl(){const r=[];if(Ba()&&r.push("This is a browser extension environment."),hr()||r.push("Cookies are not available."),r.length>0){const t=r.map((a,c)=>`(${c+1}) ${a}`).join(" "),o=W.create("invalid-analytics-context",{errorInfo:t});q.warn(o.message)}}function ul(r,t,o){cl();const a=r.options.appId;if(!a)throw W.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Oe[a]!=null)throw W.create("already-exists",{id:a});if(!Vn){$u(wt);const{wrappedGtag:h,gtagCore:f}=Vu(Oe,Un,qn,wt,al);$r=h,zn=f,Vn=!0}return Oe[a]=ol(r,Un,qn,t,zn,wt,o),new sl(r)}function ll(r=vr()){r=Me(r);const t=Be(r,Je);return t.isInitialized()?t.getImmediate():hl(r)}function hl(r,t={}){const o=Be(r,Je);if(o.isInitialized()){const c=o.getImmediate();if(We(t,o.getOptions()))return c;throw W.create("already-initialized")}return o.initialize({options:t})}function fl(r,t,o,a){r=Me(r),rl($r,Oe[r.app.options.appId],t,o,a).catch(c=>q.error(c))}const Wn="@firebase/analytics",Kn="0.9.1";function dl(){se(new Z(Je,(t,{options:o})=>{const a=t.getProvider("app").getImmediate(),c=t.getProvider("installations-internal").getImmediate();return ul(a,c,o)},"PUBLIC")),se(new Z("analytics-internal",r,"PRIVATE")),Q(Wn,Kn),Q(Wn,Kn,"esm2017");function r(t){try{const o=t.getProvider(Je).getImmediate();return{logEvent:(a,c,h)=>fl(o,a,c,h)}}catch(o){throw W.create("interop-component-reg-failed",{reason:o})}}}dl();/**
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
 */const pl="/firebase-messaging-sw.js",gl="/firebase-cloud-messaging-push-scope",Ur="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vl="https://fcmregistrations.googleapis.com/v1",qr="google.c.a.c_id",yl="google.c.a.c_l",ml="google.c.a.ts",bl="google.c.a.e";var Gn;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Gn||(Gn={}));/**
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
 */function ie(r){const t=new Uint8Array(r);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _l(r){const t="=".repeat((4-r.length%4)%4),o=(r+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(o),c=new Uint8Array(a.length);for(let h=0;h<a.length;++h)c[h]=a.charCodeAt(h);return c}/**
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
 */const St="fcm_token_details_db",wl=5,Jn="fcm_token_object_Store";async function Sl(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(h=>h.name).includes(St))return null;let t=null;return(await Ye(St,wl,{upgrade:async(a,c,h,f)=>{var g;if(c<2||!a.objectStoreNames.contains(Jn))return;const p=f.objectStore(Jn),w=await p.index("fcmSenderId").get(r);if(await p.clear(),!!w){if(c===2){const _=w;if(!_.auth||!_.p256dh||!_.endpoint)return;t={token:_.fcmToken,createTime:(g=_.createTime)!==null&&g!==void 0?g:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:ie(_.vapidKey)}}}else if(c===3){const _=w;t={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}else if(c===4){const _=w;t={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:ie(_.auth),p256dh:ie(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:ie(_.vapidKey)}}}}}})).close(),await vt(St),await vt("fcm_vapid_details_db"),await vt("undefined"),kl(t)?t:null}function kl(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:t}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Tl="firebase-messaging-database",Cl=1,be="firebase-messaging-store";let kt=null;function Vt(){return kt||(kt=Ye(Tl,Cl,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(be)}}})),kt}async function zr(r){const t=Kt(r),a=await(await Vt()).transaction(be).objectStore(be).get(t);if(a)return a;{const c=await Sl(r.appConfig.senderId);if(c)return await Wt(r,c),c}}async function Wt(r,t){const o=Kt(r),c=(await Vt()).transaction(be,"readwrite");return await c.objectStore(be).put(t,o),await c.done,t}async function Il(r){const t=Kt(r),a=(await Vt()).transaction(be,"readwrite");await a.objectStore(be).delete(t),await a.done}function Kt({appConfig:r}){return r.appId}/**
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
 */const El={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},H=new je("messaging","Messaging",El);/**
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
 */async function Al(r,t){const o=await Jt(r),a=Wr(t),c={method:"POST",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(Gt(r.appConfig),c)).json()}catch(f){throw H.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw H.create("token-subscribe-failed",{errorInfo:f})}if(!h.token)throw H.create("token-subscribe-no-token");return h.token}async function Pl(r,t){const o=await Jt(r),a=Wr(t.subscriptionOptions),c={method:"PATCH",headers:o,body:JSON.stringify(a)};let h;try{h=await(await fetch(`${Gt(r.appConfig)}/${t.token}`,c)).json()}catch(f){throw H.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(h.error){const f=h.error.message;throw H.create("token-update-failed",{errorInfo:f})}if(!h.token)throw H.create("token-update-no-token");return h.token}async function Vr(r,t){const a={method:"DELETE",headers:await Jt(r)};try{const h=await(await fetch(`${Gt(r.appConfig)}/${t}`,a)).json();if(h.error){const f=h.error.message;throw H.create("token-unsubscribe-failed",{errorInfo:f})}}catch(c){throw H.create("token-unsubscribe-failed",{errorInfo:c==null?void 0:c.toString()})}}function Gt({projectId:r}){return`${vl}/projects/${r}/registrations`}async function Jt({appConfig:r,installations:t}){const o=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${o}`})}function Wr({p256dh:r,auth:t,endpoint:o,vapidKey:a}){const c={web:{endpoint:o,auth:t,p256dh:r}};return a!==Ur&&(c.web.applicationPubKey=a),c}/**
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
 */const Ol=7*24*60*60*1e3;async function xl(r){const t=await Ll(r.swRegistration,r.vapidKey),o={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:t.endpoint,auth:ie(t.getKey("auth")),p256dh:ie(t.getKey("p256dh"))},a=await zr(r.firebaseDependencies);if(a){if(Nl(a.subscriptionOptions,o))return Date.now()>=a.createTime+Ol?Rl(r,{token:a.token,createTime:Date.now(),subscriptionOptions:o}):a.token;try{await Vr(r.firebaseDependencies,a.token)}catch(c){console.warn(c)}return Xn(r.firebaseDependencies,o)}else return Xn(r.firebaseDependencies,o)}async function Dl(r){const t=await zr(r.firebaseDependencies);t&&(await Vr(r.firebaseDependencies,t.token),await Il(r.firebaseDependencies));const o=await r.swRegistration.pushManager.getSubscription();return o?o.unsubscribe():!0}async function Rl(r,t){try{const o=await Pl(r.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:o,createTime:Date.now()});return await Wt(r.firebaseDependencies,a),o}catch(o){throw await Dl(r),o}}async function Xn(r,t){const a={token:await Al(r,t),createTime:Date.now(),subscriptionOptions:t};return await Wt(r,a),a.token}async function Ll(r,t){const o=await r.pushManager.getSubscription();return o||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_l(t)})}function Nl(r,t){const o=t.vapidKey===r.vapidKey,a=t.endpoint===r.endpoint,c=t.auth===r.auth,h=t.p256dh===r.p256dh;return o&&a&&c&&h}/**
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
 */function Yn(r){const t={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return jl(t,r),Ml(t,r),Bl(t,r),t}function jl(r,t){if(!t.notification)return;r.notification={};const o=t.notification.title;o&&(r.notification.title=o);const a=t.notification.body;a&&(r.notification.body=a);const c=t.notification.image;c&&(r.notification.image=c);const h=t.notification.icon;h&&(r.notification.icon=h)}function Ml(r,t){!t.data||(r.data=t.data)}function Bl(r,t){var o,a,c,h,f;if(!t.fcmOptions&&!(!((o=t.notification)===null||o===void 0)&&o.click_action))return;r.fcmOptions={};const g=(c=(a=t.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&c!==void 0?c:(h=t.notification)===null||h===void 0?void 0:h.click_action;g&&(r.fcmOptions.link=g);const p=(f=t.fcmOptions)===null||f===void 0?void 0:f.analytics_label;p&&(r.fcmOptions.analyticsLabel=p)}/**
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
 */function Fl(r){return typeof r=="object"&&!!r&&qr in r}/**
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
 */Kr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Kr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Kr(r,t){const o=[];for(let a=0;a<r.length;a++)o.push(r.charAt(a)),a<t.length&&o.push(t.charAt(a));return o.join("")}/**
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
 */function Hl(r){if(!r||!r.options)throw Tt("App Configuration Object");if(!r.name)throw Tt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:o}=r;for(const a of t)if(!o[a])throw Tt(a);return{appName:r.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function Tt(r){return H.create("missing-app-config-values",{valueName:r})}/**
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
 */class $l{constructor(t,o,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const c=Hl(t);this.firebaseDependencies={app:t,appConfig:c,installations:o,analyticsProvider:a}}_delete(){return Promise.resolve()}}/**
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
 */async function Ul(r){try{r.swRegistration=await navigator.serviceWorker.register(pl,{scope:gl}),r.swRegistration.update().catch(()=>{})}catch(t){throw H.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function ql(r,t){if(!t&&!r.swRegistration&&await Ul(r),!(!t&&!!r.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw H.create("invalid-sw-registration");r.swRegistration=t}}/**
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
 */async function zl(r,t){t?r.vapidKey=t:r.vapidKey||(r.vapidKey=Ur)}/**
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
 */async function Gr(r,t){if(!navigator)throw H.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw H.create("permission-blocked");return await zl(r,t==null?void 0:t.vapidKey),await ql(r,t==null?void 0:t.serviceWorkerRegistration),xl(r)}/**
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
 */async function Vl(r,t,o){const a=Wl(t);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:o[qr],message_name:o[yl],message_time:o[ml],message_device_time:Math.floor(Date.now()/1e3)})}function Wl(r){switch(r){case Ne.NOTIFICATION_CLICKED:return"notification_open";case Ne.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Kl(r,t){const o=t.data;if(!o.isFirebaseMessaging)return;r.onMessageHandler&&o.messageType===Ne.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(Yn(o)):r.onMessageHandler.next(Yn(o)));const a=o.data;Fl(a)&&a[bl]==="1"&&await Vl(r,o.messageType,a)}const Qn="@firebase/messaging",Zn="0.12.1";/**
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
 */const Gl=r=>{const t=new $l(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",o=>Kl(t,o)),t},Jl=r=>{const t=r.getProvider("messaging").getImmediate();return{getToken:a=>Gr(t,a)}};function Xl(){se(new Z("messaging",Gl,"PUBLIC")),se(new Z("messaging-internal",Jl,"PRIVATE")),Q(Qn,Zn),Q(Qn,Zn,"esm2017")}/**
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
 */async function Yl(){try{await Ft()}catch{return!1}return typeof window<"u"&&Bt()&&hr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Ql(r,t){if(!navigator)throw H.create("only-available-in-window");return r.onMessageHandler=t,()=>{r.onMessageHandler=null}}/**
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
 */function Zl(r=vr()){return Yl().then(t=>{if(!t)throw H.create("unsupported-browser")},t=>{throw H.create("indexed-db-unsupported")}),Be(Me(r),"messaging").getImmediate()}async function eh(r,t){return r=Me(r),Gr(r,t)}function th(r,t){return r=Me(r),Ql(r,t)}Xl();const nh={apiKey:"AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",authDomain:"agroarca-equipamentos.firebaseapp.com",projectId:"agroarca-equipamentos",messagingSenderId:"260002359203",appId:"1:260002359203:web:8c19a187bf2fe28079dc16",measurementId:"G-DHSLGFC76R"},rh="BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU";let ae;class ih{constructor(){R(this,"app");R(this,"messaging");R(this,"analytics");this.app=gr(nh),this.messaging=Zl(this.app),this.analytics=ll(this.app)}solicitarPermissao(){return new Promise((t,o)=>{if(Notification.permission==="denied"){o();return}if(Notification.permission==="granted"){t();return}Notification.requestPermission().then(a=>{if(Notification.permission==="granted"){t();return}o()})})}iniciarNotificacoes(){Lt(()=>{this.solicitarPermissao().then(this.registrarListeners)})}registrarListeners(){eh(ae.messaging,{vapidKey:rh}).then(t=>{t&&ae.salvarToken(t)}),th(ae.messaging,ae.onMessage)}salvarToken(t){ta.post(route("site.notificacao.salvarToken"),{token:t})}onMessage(t){this.notificar(" onMessage "+JSON.stringify(t))}notificar(t){new Notification(t)}}function oh(){return ae||(ae=new ih,ae)}function sh(){Ca(),oh().iniciarNotificacoes()}const ah={class:"toast-header"},ch={class:"me-auto"},uh=Pe("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),lh={class:"toast-body"},hh={__name:"Notificacao",props:["id","titulo","texto"],setup(r){const t=r,o=Nt(null);let a;Lt(()=>{a=new na(o.value),a.show({autohide:!1})});function c(){er.visit(route("site.notificacao",[t.id]))}return(h,f)=>(ge(),Re("div",{class:"toast notificacao",ref_key:"toast",ref:o,role:"alert",onClick:c},[Pe("div",ah,[Pe("span",ch,En(r.titulo),1),uh]),Pe("div",lh,En(r.texto),1)],512))}};class fh{constructor(t,o=10){R(this,"priority");R(this,"callback");this.priority=o,this.callback=t}}const dh={class:"toast-container position-fixed top-0 end-0 p-3"},ph=ra({__name:"Notificacoes",setup(r){sh();let t=Nt([]);ke.addListener(new fh(o));function o(a){t.value.push(a.notificacao),setTimeout(()=>{const c=t.value.indexOf(a.notificacao);t.value.splice(c,1)},1e5)}return(a,c)=>(ge(),Re("div",dh,[(ge(!0),Re(tr,null,ia(rr(t),h=>(ge(),nr(hh,oa(sa(h)),null,16))),256))]))}}),_h={__name:"BaseLayout",setup(r){return er.on("navigate",t=>{document.body.classList.remove("admin"),document.body.classList.remove("site"),route().current("admin.*")?document.body.classList.add("admin"):document.body.classList.add("site")}),(t,o)=>(ge(),Re(tr,null,[aa(ph),ca(t.$slots,"default")],64))}},gh={key:0,class:"loader"},vh=Pe("div",{class:"elemento"},null,-1),yh=[vh],wh={__name:"Loader",setup(r){let t=Nt(!1);function o(){t.value=!0}function a(){t.value=!1}return window.loader={show:o,hide:a,active:t},(c,h)=>(ge(),nr(ha,{name:"loader",duration:"300"},{default:ua(()=>[rr(t)?(ge(),Re("div",gh,yh)):la("",!0)]),_:1}))}},Sh=(r,t)=>{const o=r.__vccOpts||r;for(const[a,c]of t)o[a]=c;return o};export{Ae as E,fh as L,Sh as _,wh as a,_h as b};

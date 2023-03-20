import{i as B,x as V,b as y,$,F as z,r as Be,G as de,l as I,d as ce,H as je,a0 as K,S as A,c as h,m as w,a1 as j,Z as W,k as L,g as q,w as oe,a as se,e as $e,a2 as Le,n as Ue,a3 as qe,o as b,a4 as xe,I as Y,t as J,_ as ze,a5 as te,W as Pe,a6 as He,A as We,u as Z,v as Ze}from"./app.f74497a6.js";import{A as Re}from"./AdminLayout.66f03349.js";import{_ as Ge}from"./ListaProdutos.vue_vue_type_script_setup_true_lang.b603d515.js";import{_ as Ke}from"./FormError.vue_vue_type_script_setup_true_lang.80747f52.js";import"./_plugin-vue_export-helper.541f566a.js";import"./index.c57ba517.js";function pe(e){return(pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function be(e){return function(t){if(Array.isArray(t))return le(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||Ie(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Ie(e,t){if(e){if(typeof e=="string")return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}function le(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Ie(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var o=0,f=function(){};return{s:f,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(c){throw c},f}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m,u=!0,v=!1;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return u=c.done,c},e:function(c){v=!0,m=c},f:function(){try{u||n.return==null||n.return()}finally{if(v)throw m}}}}var ue={inheritAttrs:!1,name:"vue-input",props:{autocomplete:{required:!1,type:String},modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean},comboboxUid:{required:!0,type:Number}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(e,t){var n=w(null);return Ue(function(){e.autofocus&&n.value.focus()}),qe(function(){e.autofocus&&n.value.focus()}),{handleInput:function(o){t.emit("input",o),t.emit("update:modelValue",o.target.value)},handleChange:function(o){t.emit("change",o),t.emit("update:modelValue",o.target.value)},handleFocus:function(o){t.emit("focus",o)},handleBlur:function(o){t.emit("blur",o)},input:n,handleEscape:function(o){n.value.blur(),t.emit("escape",o)}}}},Qe={class:"vue-input"},Ye=["autocomplete","modelValue","placeholder","disabled","tabindex","autofocus","aria-controls","aria-labelledby"];ue.render=function(e,t,n,o,f,m){return b(),B("div",Qe,[V(e.$slots,"prepend"),y("input",{ref:"input",autocomplete:n.autocomplete,modelValue:n.modelValue,placeholder:n.placeholder,disabled:n.disabled,onInput:t[0]||(t[0]=function(){return o.handleInput&&o.handleInput.apply(o,arguments)}),onChange:t[1]||(t[1]=function(){return o.handleChange&&o.handleChange.apply(o,arguments)}),onFocus:t[2]||(t[2]=function(){return o.handleFocus&&o.handleFocus.apply(o,arguments)}),onBlur:t[3]||(t[3]=function(){return o.handleBlur&&o.handleBlur.apply(o,arguments)}),onKeyup:t[4]||(t[4]=$(I(function(){return o.handleEscape&&o.handleEscape.apply(o,arguments)},["exact"]),["esc"])),tabindex:n.tabindex,autofocus:n.autofocus,"aria-autocomplete":"list","aria-controls":"vs".concat(n.comboboxUid,"-listbox"),"aria-labelledby":"vs".concat(n.comboboxUid,"-combobox")},null,40,Ye),V(e.$slots,"append")])},ue.__file="src/components/input.vue";var ie={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every(function(t){return pe(t.key)!==void 0&&t.label!==void 0&&typeof t.selected=="boolean"})}},collapseTags:{type:Boolean}},emits:["click"],setup:function(e,t){return{dataAttrs:xe("dataAttrs"),handleClick:function(n){t.emit("click",n)}}}};ie.render=function(e,t,n,o,f,m){return b(),B("ul",de({class:["vue-tags",{collapsed:n.collapseTags}],onMousedown:t[0]||(t[0]=I(function(){},["prevent"])),tabindex:"-1",onClick:t[1]||(t[1]=function(){return o.handleClick&&o.handleClick.apply(o,arguments)})},o.dataAttrs),[(b(!0),B(z,null,Be(n.modelValue,function(u){return b(),B(z,{key:u.key},[u.group?L("v-if",!0):(b(),B("li",{key:0,class:Y(["vue-tag",{selected:u.selected}])},[V(e.$slots,"default",{option:u},function(){return[y("span",null,J(u.label),1)]})],2))],64)}),128))],16)},ie.__file="src/components/tags.vue";var re={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every(function(t){return pe(t.key)!==void 0&&t.label!==void 0&&typeof t.selected=="boolean"})}},comboboxUid:{required:!0,type:Number},maxHeight:{required:!0},highlightedOriginalIndex:{required:!0}},emits:["click-item","mouseenter"],setup:function(e,t){return{dataAttrs:xe("dataAttrs"),handleClickItem:function(n,o){o.disabled||t.emit("click-item",n,o)},handleMouseenter:function(n,o){t.emit("mouseenter",n,o)}}}},Je=["id","aria-multiselectable","aria-busy","aria-disabled"],Xe=["onClick","onMouseenter","id","aria-selected","aria-disabled"];re.render=function(e,t,n,o,f,m){return b(),B("ul",de({class:"vue-dropdown",style:{maxHeight:n.maxHeight+"px"},onMousedown:t[0]||(t[0]=I(function(){},["prevent"]))},o.dataAttrs,{role:"listbox",id:"vs".concat(n.comboboxUid,"-listbox"),"aria-multiselectable":o.dataAttrs["data-multiple"],"aria-busy":o.dataAttrs["data-loading"],"aria-disabled":o.dataAttrs["data-disabled"]}),[(b(!0),B(z,null,Be(n.modelValue,function(u,v){return b(),B(z,{key:u.key},[u.visible&&u.hidden===!1?(b(),B("li",{key:0,onClick:function(c){return o.handleClickItem(c,u)},class:Y(["vue-dropdown-item",{selected:u.selected,disabled:u.disabled,highlighted:u.originalIndex===n.highlightedOriginalIndex,group:u.group}]),onMouseenter:function(c){return o.handleMouseenter(c,u)},role:"option",id:"vs".concat(n.comboboxUid,"-option-").concat(v),"aria-selected":!!u.selected||!!u.disabled&&void 0,"aria-disabled":u.disabled},[V(e.$slots,"default",{option:u},function(){return[y("span",null,J(u.label),1)]})],42,Xe)):L("v-if",!0)],64)}),128))],16,Je)},re.__file="src/components/dropdown.vue";var we=function(e,t,n){var o=n.valueBy;return o(e)===o(t)},U=function(e,t,n){var o=n.valueBy;return e.some(function(f){return we(f,t,{valueBy:o})})},D=function(e,t,n){var o=n.valueBy;return e.find(function(f){return o(f)===t})},ne=function(e,t,n){var o=n.max,f=n.valueBy;return U(e,t,{valueBy:f})||e.length>=o?e:e.concat(t)},ae=function(e,t,n){var o=n.min,f=n.valueBy;return U(e,t,{valueBy:f})===!1||e.length<=o?e:e.filter(function(m){return we(m,t,{valueBy:f})===!1})},Q=function(e){return h(function(){return typeof e.value=="function"?e.value:typeof e.value=="string"?function(t){return e.value.split(".").reduce(function(n,o){return n[o]},t)}:function(t){return t}})},et=function(e,t){var n=h(function(){return e.value.reduce(function(u,v){return Object.assign(u,(c={},r=v.originalIndex,s=v,r in c?Object.defineProperty(c,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[r]=s,c));var c,r,s},{})}),o=function(u){var v=n.value[u];return v!==void 0&&f(v)!==!1&&(t.value=u,!0)},f=function(u){return!u.disabled&&!u.hidden&&u.visible},m=h(function(){return e.value.some(function(u){return f(u)})});return A(function(){if(m.value===!1&&(t.value=null),t.value!==null&&e.value.length<=t.value){var u,v=_(e.value.reverse());try{for(v.s();!(u=v.n()).done;){var c=u.value;if(o(c.originalIndex))break}}catch(x){v.e(x)}finally{v.f()}}if(t.value===null||f(e.value[t.value])===!1){var r,s=_(e.value);try{for(s.s();!(r=s.n()).done;){var M=r.value;if(o(M.originalIndex))break}}catch(x){s.e(x)}finally{s.f()}}}),{pointerForward:function(){if(m.value!==!1&&t.value!==null)for(var u=t.value+1,v=0;u!==t.value&&v++<e.value.length&&(e.value.length<=u&&(u=0),!o(u));)++u},pointerBackward:function(){if(m.value!==!1&&t.value!==null)for(var u=t.value-1,v=0;u!==t.value&&v++<e.value.length&&(u<0&&(u=e.value.length-1),!o(u));)--u},pointerSet:o}},X=ce({name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{},options:{required:!0,type:Array},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},groupBy:{default:"group",type:[String,Function]},visibleOptions:{type:Array,default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},searchable:{default:!1,type:Boolean},searchPlaceholder:{default:"Type to search",type:String},clearOnSelect:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},autocomplete:{default:"off",type:String},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},closeOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},maxHeight:{default:300,type:Number},openDirection:{type:String,validator:function(e){return["top","bottom"].includes(e)}}},emits:["selected","removed","update:modelValue","focus","blur","toggle","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(e,t){var n=function(a){var l=je({}),d=Q(K(a,"labelBy"));A(function(){return l.labelBy=d.value});var i=Q(K(a,"valueBy"));A(function(){return l.valueBy=i.value});var k=Q(K(a,"disabledBy"));A(function(){return l.disabledBy=k.value});var g=Q(K(a,"groupBy"));A(function(){return l.groupBy=g.value});var O=h(function(){return a.multiple?a.min:Math.min(1,a.min)});A(function(){return l.min=O.value});var T=h(function(){return a.multiple?a.max:1});return A(function(){return l.max=T.value}),A(function(){return l.options=a.options}),l}(e),o=h(function(){var a;return(a=e.emptyModelValue)!==null&&a!==void 0?a:null}),f=ze(),m=w(),u=w(),v=w(),c=h(function(){var a;return(a=v.value)===null||a===void 0?void 0:a._.refs.input}),r=w(!1);j(function(){return r.value},function(){var a,l;r.value?(t.emit("opened"),t.emit("focus"),e.searchable?(c.value!==document.activeElement&&c.value.focus(),t.emit("search:focus")):(a=m.value)===null||a===void 0||a.focus()):(e.searchable?(c.value===document.activeElement&&c.value.blur(),e.clearOnClose&&ge(),t.emit("search:blur")):(l=m.value)===null||l===void 0||l.blur(),t.emit("closed"),t.emit("blur")),t.emit("toggle")});var s=function(){e.disabled||(r.value=!0)},M=function(a){var l;!((l=m.value)===null||l===void 0)&&l.contains(a==null?void 0:a.relatedTarget)?setTimeout(function(){var d;(d=m.value)===null||d===void 0||d.focus()}):r.value=!1};j(function(){return e.disabled},function(){return M()});var x=w(""),Me=h(function(){return new RegExp(x.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i")}),Ve=h(function(){return x.value?n.options.filter(function(a){return Me.value.test(n.labelBy(a))}):void 0}),p=w([]),C=h(function(){return new Set(p.value.map(function(a){return n.valueBy(a)}))}),ve=function(){if(e.multiple){if(Array.isArray(e.modelValue)===!1||p.value.length!==e.modelValue.length||Object.keys(p.value).some(function(a){return p.value[a]!==D(n.options,e.modelValue[a],{valueBy:n.valueBy})}))return!1}else if(p.value.length===0&&e.modelValue!==o.value||p.value.length===1&&e.modelValue===o.value||p.value[0]!==D(n.options,e.modelValue,{valueBy:n.valueBy}))return!1;return!0},fe=function(){if(!ve()){p.value=[];var a,l=_(e.multiple?e.modelValue:e.modelValue===o.value?[]:[e.modelValue]);try{for(l.s();!(a=l.n()).done;){var d=a.value,i=D(n.options,d,{valueBy:n.valueBy});U(n.options,i,{valueBy:n.valueBy})!==!1&&(p.value=ne(p.value,i,{max:1/0,valueBy:n.valueBy}))}}catch(k){l.e(k)}finally{l.f()}}};fe(),j(function(){return e.modelValue},function(){return fe()},{deep:!0}),j(function(){return n.options},function(){p.value=n.options.filter(function(a){return C.value.has(n.valueBy(a))})},{deep:!0});var me,Se=function(a,l){(l=l.originalOption).value.every(function(d){var i=D(n.options,d,{valueBy:n.valueBy});return U(p.value,i,{valueBy:n.valueBy})})?l.value.forEach(function(d){var i=D(n.options,d,{valueBy:n.valueBy});p.value=ae(p.value,i,{min:n.min,valueBy:n.valueBy}),t.emit("removed",i)}):l.value.forEach(function(d){var i=D(n.options,d,{valueBy:n.valueBy});U(p.value,i,{valueBy:n.valueBy})||(p.value=ne(p.value,i,{max:n.max,valueBy:n.valueBy}),t.emit("selected",i))})},ke=function(a,l){if(l=l.originalOption,U(p.value,l,{valueBy:n.valueBy}))p.value=ae(p.value,l,{min:n.min,valueBy:n.valueBy}),t.emit("removed",l);else{if(!e.multiple&&p.value.length===1){var d=p.value[0];p.value=ae(p.value,p.value[0],{min:0,valueBy:n.valueBy}),t.emit("removed",d)}p.value=ne(p.value,l,{max:n.max,valueBy:n.valueBy}),t.emit("selected",l)}},Oe=function(){if(!ve()){var a=p.value.map(function(l){return n.valueBy(l)});e.multiple?t.emit("update:modelValue",a):a.length?t.emit("update:modelValue",a[0]):t.emit("update:modelValue",o.value)}},ge=function(){c.value.value="",c.value.dispatchEvent(new Event("input")),c.value.dispatchEvent(new Event("change"))},Fe=h(function(){var a,l;return(l=(a=e.visibleOptions)!==null&&a!==void 0?a:Ve.value)!==null&&l!==void 0?l:n.options}),R=w(0),S=h(function(){var a,l=new Set(Fe.value.map(function(g){return n.valueBy(g)})),d=n.options.map(function(g,O){var T,F={key:n.valueBy(g),label:n.labelBy(g),group:(T=n.groupBy(g))!==null&&T!==void 0&&T,originalIndex:O,originalOption:g};return F.selected=F.group?g.value.every(function(N){return C.value.has(N)}):C.value.has(n.valueBy(g)),F.disabled=F.group?n.disabledBy(g)||g.value.every(function(N){var Ee=D(n.options,N,{valueBy:n.valueBy});return n.disabledBy(Ee)}):n.disabledBy(g),F.visible=F.group?g.value.some(function(N){return l.has(N)}):l.has(n.valueBy(g)),F.hidden=!!e.hideSelected&&(F.group?g.value.every(function(N){return C.value.has(N)}):C.value.has(n.valueBy(g))),F}),i=_(d);try{for(i.s();!(a=i.n()).done;){var k=a.value;k.group!==!1&&k.disabled&&function(){var g=new Set(k.originalOption.value);d.filter(function(O){return g.has(n.valueBy(O.originalOption))}).forEach(function(O){return O.disabled=!0})}()}}catch(g){i.e(g)}finally{i.f()}return d}),ee=et(S,R),Ae=ee.pointerForward,Ce=ee.pointerBackward,P=ee.pointerSet,G="",Te=/^[\w]$/,Ne=h(function(){var a=be(n.options.keys());return a.slice(R.value).concat(a.slice(0,R.value))}),H=function(){var a,l=(a=m.value)===null||a===void 0?void 0:a.querySelector(".highlighted");if(l&&u.value){var d,i=getComputedStyle(l);for(d=0;l.offsetTop+parseFloat(i.height)+parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)>u.value.$el.clientHeight+u.value.$el.scrollTop&&d++<S.value.length;)u.value.$el.scrollTop=u.value.$el.scrollTop+parseFloat(i.height)+parseFloat(i.paddingTop)+parseFloat(i.paddingBottom);for(d=0;l.offsetTop<u.value.$el.scrollTop&&d++<S.value.length;)u.value.$el.scrollTop=u.value.$el.scrollTop-parseFloat(i.height)-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)}};j(function(){return[r.value,n.options,C.value]},function(a,l){(l==null?void 0:l[0])!==!0&&r.value!==!1&&p.value.length!==0&&(P(n.options.findIndex(function(d){return C.value.has(n.valueBy(d))})),W(H))},{deep:!0,immediate:!0});var ye=h(function(){return{"data-is-focusing":r.value,"data-visible-length":S.value.filter(function(a){return a.visible&&a.hidden===!1}).length,"data-not-selected-length":n.options.length-S.value.filter(function(a){return a.selected}).length,"data-selected-length":S.value.filter(function(a){return a.selected}).length,"data-addable":S.value.filter(function(a){return a.selected}).length<n.max,"data-removable":S.value.filter(function(a){return a.selected}).length>n.min,"data-total-length":n.options.length,"data-multiple":e.multiple,"data-loading":e.loading,"data-disabled":e.disabled}});Pe("dataAttrs",ye);var E=h(function(){return S.value.filter(function(a){return a.selected}).filter(function(a){return!a.group})}),De=h(function(){return e.multiple?E.value.length===0?e.placeholder:E.value.length===1?"1 option selected":E.value.length+" options selected":E.value.length===0?e.placeholder:E.value[0].label+""}),_e=h(function(){var a=E.value.map(function(l){return l.originalOption});return e.multiple?a:a[0]||o.value}),he=w();return j(function(){return[e.openDirection,r.value]},function(){var a,l;he.value=(l=(a=e.openDirection)!==null&&a!==void 0?a:function(){if(m.value!==void 0&&window!==void 0)return window.innerHeight-m.value.getBoundingClientRect().bottom>=e.maxHeight?"bottom":"top"}())!==null&&l!==void 0?l:"bottom"},{immediate:!0}),{instance:f,isFocusing:r,wrapper:m,dropdown:u,input:v,focus:s,blur:M,toggle:function(){r.value?M():s()},searchingInputValue:x,handleInputForInput:function(a){t.emit("search:input",a)},handleChangeForInput:function(a){t.emit("search:change",a)},handleFocusForInput:function(a){s()},handleBlurForInput:function(a){M()},optionsWithInfo:S,addOrRemoveOption:function(a,l){e.disabled||(l.group&&e.multiple?Se(a,l):ke(a,l),Oe(),e.closeOnSelect===!0&&(r.value=!1),e.clearOnSelect===!0&&x.value&&ge())},dataAttrs:ye,innerPlaceholder:De,selected:_e,highlightedOriginalIndex:R,pointerForward:function(){Ae(),W(H)},pointerBackward:function(){Ce(),W(H)},pointerFirst:function(){var a,l=_(n.options.keys());try{for(l.s();!(a=l.n()).done;){var d=a.value;if(P(d))break}}catch(i){l.e(i)}finally{l.f()}W(H)},pointerLast:function(){var a,l=_(be(n.options.keys()).reverse());try{for(l.s();!(a=l.n()).done;){var d=a.value;if(P(d))break}}catch(i){l.e(i)}finally{l.f()}W(H)},typeAhead:function(a){var l,d;if(!e.searchable){var i=!1;if(Te.test(a.key)?(G+=a.key.toLowerCase(),i=!0):a.code==="Space"&&(G+=" "),i){var k,g=_(Ne.value);try{for(g.s();!(k=g.n()).done;){var O=k.value;if(((d=(l=n.labelBy(n.options[O]))===null||l===void 0?void 0:l.toLowerCase())===null||d===void 0?void 0:d.startsWith(G))===!0&&P(O))break}}catch(T){g.e(T)}finally{g.f()}clearTimeout(me),me=setTimeout(function(){G=""},500)}}},pointerSet:P,direction:he}},components:{VInput:ue,VTags:ie,VDropdown:re}});X.__VERSION__="2.10.5";var tt=["tabindex","id","role","aria-expanded","aria-owns","aria-activedescendant","aria-busy","aria-disabled"],nt={class:"vue-select-header"},at={key:0,class:"vue-input"},ot=["placeholder","autocomplete"],lt=["onClick"],ut=y("span",{class:"icon loading"},[y("div"),y("div"),y("div")],-1),it={key:0,class:"vue-select-input-wrapper"},rt=y("span",{class:"icon loading"},[y("div"),y("div"),y("div")],-1);X.render=function(e,t,n,o,f,m){var u=te("v-tags"),v=te("v-input"),c=te("v-dropdown");return b(),B("div",de({ref:"wrapper",class:["vue-select",["direction-".concat(e.direction)]],tabindex:e.isFocusing?-1:e.tabindex,onFocus:t[9]||(t[9]=function(){return e.focus&&e.focus.apply(e,arguments)}),onBlur:t[10]||(t[10]=function(r){return!e.searchable&&e.blur(r)})},Object.assign({},e.dataAttrs,e.$attrs),{onKeypress:t[11]||(t[11]=$(I(function(){return e.highlightedOriginalIndex!==null&&e.addOrRemoveOption(e.$event,e.optionsWithInfo[e.highlightedOriginalIndex])},["prevent","exact"]),["enter"])),onKeydown:[t[12]||(t[12]=$(I(function(){return e.pointerForward&&e.pointerForward.apply(e,arguments)},["prevent","exact"]),["down"])),t[13]||(t[13]=$(I(function(){return e.pointerBackward&&e.pointerBackward.apply(e,arguments)},["prevent","exact"]),["up"])),t[14]||(t[14]=$(I(function(){return e.pointerFirst&&e.pointerFirst.apply(e,arguments)},["prevent","exact"]),["home"])),t[15]||(t[15]=$(I(function(){return e.pointerLast&&e.pointerLast.apply(e,arguments)},["prevent","exact"]),["end"])),t[16]||(t[16]=function(){return e.typeAhead&&e.typeAhead.apply(e,arguments)})],id:"vs".concat(e.instance.uid,"-combobox"),role:e.searchable?"combobox":null,"aria-expanded":e.isFocusing,"aria-haspopup":"listbox","aria-owns":"vs".concat(e.instance.uid,"-listbox"),"aria-activedescendant":e.highlightedOriginalIndex===null?null:"vs".concat(e.instance.uid,"-option-").concat(e.highlightedOriginalIndex),"aria-busy":e.loading,"aria-disabled":e.disabled}),[y("div",nt,[e.multiple&&e.taggable&&e.modelValue.length===0||e.searchable===!1&&e.taggable===!1?(b(),B("div",at,[V(e.$slots,"label",{selected:e.selected},function(){return[y("input",{placeholder:e.innerPlaceholder,autocomplete:e.autocomplete,readonly:"",onClick:t[0]||(t[0]=function(){return e.focus&&e.focus.apply(e,arguments)})},null,8,ot)]})])):L("v-if",!0),e.multiple&&e.taggable?(b(),B(z,{key:1},[q(u,{modelValue:e.optionsWithInfo,"collapse-tags":e.collapseTags,tabindex:"-1",onClick:e.focus},{default:oe(function(r){var s=r.option;return[V(e.$slots,"tag",{option:s.originalOption,remove:function(){return e.addOrRemoveOption(e.$event,s)}},function(){return[y("span",null,J(s.label),1),y("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:I(function(){return e.addOrRemoveOption(e.$event,s)},["prevent","stop"])},null,8,lt)]})]}),_:3},8,["modelValue","collapse-tags","onClick"]),V(e.$slots,"toggle",{isFocusing:e.isFocusing,toggle:e.toggle},function(){return[y("span",{class:Y(["icon arrow-downward",{active:e.isFocusing}]),onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:t[2]||(t[2]=I(function(){},["prevent","stop"]))},null,34)]})],64)):(b(),B(z,{key:2},[e.searchable?(b(),se(v,{key:0,ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":t[3]||(t[3]=function(r){return e.searchingInputValue=r}),disabled:e.disabled,autocomplete:e.autocomplete,placeholder:e.isFocusing?e.searchPlaceholder:e.innerPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,autofocus:e.autofocus||e.taggable&&e.searchable,tabindex:e.tabindex,comboboxUid:e.instance.uid},null,8,["modelValue","disabled","autocomplete","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex","comboboxUid"])):L("v-if",!0),e.loading?V(e.$slots,"loading",{key:1},function(){return[ut]}):V(e.$slots,"toggle",{key:2,isFocusing:e.isFocusing,toggle:e.toggle},function(){return[y("span",{class:Y(["icon arrow-downward",{active:e.isFocusing}]),onClick:t[4]||(t[4]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:t[5]||(t[5]=I(function(){},["prevent","stop"]))},null,34)]})],64))]),e.multiple&&e.taggable&&e.searchable?(b(),B("div",it,[$e(q(v,{ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":t[6]||(t[6]=function(r){return e.searchingInputValue=r}),disabled:e.disabled,autocomplete:e.autocomplete,placeholder:e.isFocusing?e.searchPlaceholder:e.innerPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,autofocus:e.autofocus||e.taggable&&e.searchable,tabindex:e.tabindex,comboboxUid:e.instance.uid},null,8,["modelValue","disabled","autocomplete","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex","comboboxUid"]),[[Le,e.isFocusing]]),e.loading?V(e.$slots,"loading",{key:0},function(){return[rt]}):L("v-if",!0)])):L("v-if",!0),q(c,{ref:"dropdown",modelValue:e.optionsWithInfo,"onUpdate:modelValue":t[7]||(t[7]=function(r){return e.optionsWithInfo=r}),onClickItem:e.addOrRemoveOption,onMouseenter:t[8]||(t[8]=function(r,s){return e.pointerSet(s.originalIndex)}),comboboxUid:e.instance.uid,maxHeight:e.maxHeight,highlightedOriginalIndex:e.highlightedOriginalIndex},{default:oe(function(r){var s=r.option;return[V(e.$slots,"dropdown-item",{option:s.originalOption},function(){return[y("span",null,J(s.label),1)]})]}),_:3},8,["modelValue","onClickItem","comboboxUid","maxHeight","highlightedOriginalIndex"])],16,tt)},X.__file="src/index.vue";const dt=ce({__name:"SelectAjax",props:["href","modelValue","options"],emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=w([]),f=w(!1),m=He.exports.debounce(v,300,{maxWait:1e3}),u=w(r());o.value=n.options;function v(s){let M=s.target.value;f.value=!0,We.get(n.href,{params:{termo:M}}).then(x=>{o.value=x.data}).finally(()=>{f.value=!1})}function c(){var s;t("update:modelValue",(s=u.value)==null?void 0:s.id)}function r(){return n.modelValue?o.value.find(s=>s.id===n.modelValue):null}return(s,M)=>(b(),se(Z(X),{modelValue:u.value,"onUpdate:modelValue":[M[0]||(M[0]=x=>u.value=x),c],"search-placeholder":"Selecione um Equipamento",placeholder:"Selecione um Equipamento",class:"form-control w-100",options:o.value,"close-on-select":"",searchable:"","label-by":"texto",loading:f.value,"onSearch:input":Z(m)},null,8,["modelValue","options","loading","onSearch:input"]))}}),ct=["onSubmit"],st={class:"card card-default mb-4"},pt={class:"card-body"},vt=y("div",{class:"card-footer"},[y("button",{type:"submit",class:"btn btn-primary"}," Adicionar ")],-1),Bt=ce({__name:"Produtos",props:{lista:Object,options:Object,produtos:Object},setup(e){const t=e,n=Ze({equipamento_id:""});function o(){n.post(`/admin/lista/${t.lista.id}/adicionar`)}return(f,m)=>(b(),se(Re,{titulo:e.lista.nome},{default:oe(()=>[y("form",{onSubmit:I(o,["prevent"])},[y("div",st,[y("div",pt,[y("div",null,[q(dt,{modelValue:Z(n).equipamento_id,"onUpdate:modelValue":m[0]||(m[0]=u=>Z(n).equipamento_id=u),href:"/admin/equipamentos/pesquisar",options:e.options},null,8,["modelValue","options"]),q(Ke,{error:Z(n).errors.equipamento_id},null,8,["error"])])]),vt])],40,ct),q(Ge,{produtos:e.produtos},null,8,["produtos"])]),_:1},8,["titulo"]))}});export{Bt as default};
import{d as N,$ as m,m as B,H as O,n as D,Z as M,A as d,a as F,w as H,o as c,b as o,t as x,u as S,i as g,k as $,r as P,I as W,F as j,g as Z,T as G,l as J,e as K,f as Q}from"./app.8b403c33.js";import{E as R,L as X}from"./_plugin-vue_export-helper.5ef89477.js";import{_ as Y}from"./SiteLayout.vue_vue_type_script_setup_true_lang.2920ca35.js";const ee={class:"container conversa"},ne={class:"conteudo"},se={class:"container-mensagens"},ae={key:0,class:"loader-inline"},te=o("span",{class:"elemento"},null,-1),oe=[te],ie=["id"],le=o("span",null,"Novas Mensagens",-1),re=[le],ce=["onSubmit"],ue={class:"col"},me=o("button",{type:"submit",class:"btn btn-primary"}," Enviar ",-1),de={class:"textcount"},pe=N({__name:"Conversa",props:{conversa:Object,usuarioId:Number},setup(f){const r=f,v=m.exports.debounce(E,100,{maxWait:250});m.exports.debounce(_,500,{maxWait:1e4});const p=25,z=2500;let l=r.conversa.visualizacao.ultima_mensagem_id;const t=B(null),n=O({mensagens:r.conversa.mensagens,mensagem:"",mensagensAnteriores:!1,novasMensagens:!1});R.addListener(new X(L,1)),D(()=>{t.value.scrollHeight>t.value.clientHeight+p&&(n.mensagensAnteriores=!0),M(b)});function k(){return d.post(`/conversa/${r.conversa.id}/enviar`,{mensagem:n.mensagem}).then(()=>{n.mensagem=""}).catch(e=>{location.reload()})}function q(){return n.mensagens.findLast(e=>e.id<=l)}function b(){var s,a;const e=q();e&&u(h(e.id)-t.value.clientHeight/2),t.value.scrollTop<((s=t.value.querySelector(".loader-inline"))==null?void 0:s.clientHeight)&&u((a=t.value.querySelector(".loader-inline"))==null?void 0:a.clientHeight),M(T)}function C(){n.novasMensagens=!1;const e=A();e?(u(h(e.id)-t.value.clientHeight/2),l=e.id,_()):b()}function A(){return n.mensagens.find(e=>e.id>l)}function u(e){t.value.scrollTop=e,setTimeout(()=>{v.cancel()},100)}function h(e){return t.value.querySelector(`#msg-${e}`).offsetTop-t.value.offsetTop}function E(e){t.value.scrollTop<=p&&U(),T(),t.value.scrollTop+t.value.clientHeight>=t.value.scrollHeight-p&&(n.novasMensagens=!1)}function T(){const e=I();e&&e.id>l&&(l=e.id,_())}function I(){const e=n.mensagens.findIndex(s=>s.id>l);return n.mensagens.slice(e).findLast(s=>w(s.id))}function w(e){const s=t.value.querySelector(`#msg-${e}`),a=s.offsetTop+s.clientHeight-s.parentElement.offsetTop;return a>s.parentElement.scrollTop&&a<s.parentElement.scrollTop+s.parentElement.clientHeight}function _(){d.post(`/conversa/${r.conversa.id}/mensagens/visualizacao/${l}`)}function i(){function e(){var a,y;let s=(y=(a=m.exports.last(n.mensagens))==null?void 0:a.id)!=null?y:0;return d.get(`/conversa/${r.conversa.id}/mensagens/posteriores/${s}`).then(V=>{V.data.mensagens.length>0&&(n.mensagens=n.mensagens.concat(V.data.mensagens),n.novasMensagens=!0)})}if(i.bloquear){i.atualizar=!0;return}i.bloquear=!0,i.atualizar=!1,e().finally(()=>{i.bloquear=!1,i.atualizar&&i()})}function L(e){var s,a;e.mensagem_id>((a=(s=m.exports.last(n.mensagens))==null?void 0:s.id)!=null?a:0)&&i()}function U(){if(!n.mensagensAnteriores||n.mensagens>0)return;const e=n.mensagens[0].id;d.get(`/conversa/${r.conversa.id}/mensagens/anteriores/${e}`).then(s=>{n.mensagens=s.data.mensagens.concat(n.mensagens),n.mensagensAnteriores=s.data.mais,M(()=>{u(h(e))})})}return(e,s)=>(c(),F(Y,null,{default:H(()=>[o("div",ee,[o("h2",null,"Conversa - "+x(f.conversa.equipamento.titulo),1),o("div",ne,[o("div",se,[o("div",{ref_key:"elMensagens",ref:t,class:"mensagens",onScroll:s[0]||(s[0]=(...a)=>S(v)&&S(v)(...a))},[n.mensagensAnteriores?(c(),g("div",ae,oe)):$("",!0),(c(!0),g(j,null,P(n.mensagens,a=>(c(),g("span",{id:"msg-"+a.id,key:a.id,class:W(["mensagem",{autor:a.usuario_id==f.usuarioId}])},x(a.mensagem),11,ie))),128))],544),Z(G,{name:"fade-transition",duration:100},{default:H(()=>[n.novasMensagens?(c(),g("button",{key:0,type:"button",class:"novas-mensagens",onClick:C},re)):$("",!0)]),_:1})]),o("form",{class:"mensagens-footer",onSubmit:J(k,["prevent"])},[K(o("textarea",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.mensagem=a),class:"form-control",maxlength:z,rows:"3"},null,512),[[Q,n.mensagem]]),o("div",ue,[me,o("span",de,x(n.mensagem.length+" / "+z),1)])],40,ce)])])]),_:1}))}});export{pe as default};

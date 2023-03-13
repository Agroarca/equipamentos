import{d as D,$ as g,m as H,H as W,n as Z,Z as M,A as f,a as G,w as P,o as c,b as i,t as b,u as z,i as u,s as $,k as T,r as J,I as K,F as Q,g as R,T as X,l as Y,e as ee,f as se}from"./app.5b090f15.js";import{g as m,E as ne,L as ae}from"./_plugin-vue_export-helper.c3f97864.js";import{_ as te}from"./SiteLayout.vue_vue_type_script_setup_true_lang.43fd38a5.js";const ie={class:"container conversa"},oe=i("br",null,null,-1),re={class:"conteudo"},le={class:"container-mensagens"},ce={key:0,class:"loader-inline"},ue=i("span",{class:"elemento"},null,-1),me=[ue],de=["id"],ge=i("span",null,"Novas Mensagens",-1),fe=[ge],ve=["onSubmit"],pe={class:"col"},he=i("button",{type:"submit",class:"btn btn-primary"}," Enviar ",-1),_e={class:"textcount"},ze=D({__name:"Conversa",props:{conversa:Object,usuarioId:Number},setup(v){const l=v,p=g.exports.debounce(L,100,{maxWait:250});g.exports.debounce(x,500,{maxWait:1e4});const h=25,y=2500;let r=l.conversa.visualizacao.ultima_mensagem_id;const t=H(null);let V=H(m().temPermissao());const s=W({mensagens:l.conversa.mensagens,mensagem:"",mensagensAnteriores:!1,novasMensagens:!1});ne.addListener(new ae(F,1)),Z(()=>{t.value.scrollHeight>t.value.clientHeight+h&&(s.mensagensAnteriores=!0),M(E)});function A(){return f.post(`/conversa/${l.conversa.id}/enviar`,{mensagem:s.mensagem}).then(()=>{s.mensagem="",j()}).catch(e=>{location.reload()})}function N(){return s.mensagens.findLast(e=>e.id<=r)}function E(){var n,a;const e=N();e&&d(_(e.id)-t.value.clientHeight/2),t.value.scrollTop<((n=t.value.querySelector(".loader-inline"))==null?void 0:n.clientHeight)&&d((a=t.value.querySelector(".loader-inline"))==null?void 0:a.clientHeight),M(S)}function w(){s.novasMensagens=!1;const e=I();e?(d(_(e.id)-t.value.clientHeight/2),r=e.id,x()):E()}function I(){return s.mensagens.find(e=>e.id>r)}function d(e){t.value.scrollTop=e,setTimeout(()=>{p.cancel()},100)}function _(e){return t.value.querySelector(`#msg-${e}`).offsetTop-t.value.offsetTop}function L(e){t.value.scrollTop<=h&&O(),S(),t.value.scrollTop+t.value.clientHeight>=t.value.scrollHeight-h&&(s.novasMensagens=!1)}function S(){const e=U();e&&e.id>r&&(r=e.id,x())}function U(){const e=s.mensagens.findIndex(n=>n.id>r);return s.mensagens.slice(e).findLast(n=>B(n.id))}function B(e){const n=t.value.querySelector(`#msg-${e}`),a=n.offsetTop+n.clientHeight-n.parentElement.offsetTop;return a>n.parentElement.scrollTop&&a<n.parentElement.scrollTop+n.parentElement.clientHeight}function x(){f.post(`/conversa/${l.conversa.id}/mensagens/visualizacao/${r}`)}function o(){function e(){var a,q;let n=(q=(a=g.exports.last(s.mensagens))==null?void 0:a.id)!=null?q:0;return f.get(`/conversa/${l.conversa.id}/mensagens/posteriores/${n}`).then(C=>{C.data.mensagens.length>0&&(s.mensagens=s.mensagens.concat(C.data.mensagens),s.novasMensagens=!0)})}if(o.bloquear){o.atualizar=!0;return}o.bloquear=!0,o.atualizar=!1,e().finally(()=>{o.bloquear=!1,o.atualizar&&o()})}function F(e){var n,a;e.mensagem_id>((a=(n=g.exports.last(s.mensagens))==null?void 0:n.id)!=null?a:0)&&o()}function O(){if(!s.mensagensAnteriores||s.mensagens>0)return;const e=s.mensagens[0].id;f.get(`/conversa/${l.conversa.id}/mensagens/anteriores/${e}`).then(n=>{s.mensagens=n.data.mensagens.concat(s.mensagens),s.mensagensAnteriores=n.data.mais,M(()=>{d(_(e))})})}function k(){m().solicitarPermissao().then(()=>{V.value=m().temPermissao()})}function j(){m().jaSolicitouPermissao()||m().temPermissao()||k()}return(e,n)=>(c(),G(te,null,{default:P(()=>[i("div",ie,[i("h2",null,"Conversa - "+b(v.conversa.equipamento.titulo),1),z(V)?T("",!0):(c(),u("div",{key:0,class:"alert alert-warning mt-2 mb-4 cursor-pointer",onClick:k},[$(" Voc\xEA n\xE3o ir\xE1 receber notifica\xE7\xF5es de novas mensagens."),oe,$(" Clique aqui para autorizar as Notifica\xE7\xF5es ")])),i("div",re,[i("div",le,[i("div",{ref_key:"elMensagens",ref:t,class:"mensagens",onScroll:n[0]||(n[0]=(...a)=>z(p)&&z(p)(...a))},[s.mensagensAnteriores?(c(),u("div",ce,me)):T("",!0),(c(!0),u(Q,null,J(s.mensagens,a=>(c(),u("span",{id:"msg-"+a.id,key:a.id,class:K(["mensagem",{autor:a.usuario_id==v.usuarioId}])},b(a.mensagem),11,de))),128))],544),R(X,{name:"fade-transition",duration:100},{default:P(()=>[s.novasMensagens?(c(),u("button",{key:0,type:"button",class:"novas-mensagens",onClick:w},fe)):T("",!0)]),_:1})]),i("form",{class:"mensagens-footer",onSubmit:Y(A,["prevent"])},[ee(i("textarea",{"onUpdate:modelValue":n[1]||(n[1]=a=>s.mensagem=a),class:"form-control",maxlength:y,rows:"3"},null,512),[[se,s.mensagem]]),i("div",pe,[he,i("span",_e,b(s.mensagem.length+" / "+y),1)])],40,ve)])])]),_:1}))}});export{ze as default};

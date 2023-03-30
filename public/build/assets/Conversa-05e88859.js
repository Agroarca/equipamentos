import{d as Y,a5 as g,r as T,i as ee,x as se,Z as z,j as f,c as N,w as I,o as m,a as o,t as L,u as _,k as h,h as U,l as y,m as ne,F as ae,f as B,T as te,g as oe,b as ie,e as re}from"./app-4cdccdc1.js";import{g as v,E as le,L as ce}from"./_plugin-vue_export-helper-06278407.js";import{_ as me}from"./SiteLayout.vue_vue_type_script_setup_true_lang-ed0f45d5.js";import{_ as ue}from"./Mensagem.vue_vue_type_script_setup_true_lang-65e00220.js";import{_ as de}from"./FormError.vue_vue_type_script_setup_true_lang-dde173fa.js";import"./index-ac617c56.js";import"./Modal.vue_vue_type_script_setup_true_lang-8746b460.js";const ge={class:"container conversa"},fe=o("br",null,null,-1),ve={class:"conteudo"},pe={class:"container-mensagens"},_e={key:0,class:"loader-inline"},he=o("span",{class:"elemento"},null,-1),xe=[he],Me=o("span",null,"Novas Mensagens",-1),be=[Me],Te=["onSubmit"],ze={class:"col"},ye={class:"row"},Ve={class:"d-flex flex-row"},$e={class:"col"},qe=o("button",{type:"submit",class:"btn btn-primary"}," Enviar ",-1),Ee={class:"textcount"},Ne=Y({__name:"Conversa",props:{conversa:Object,usuarioId:Number,mensagensTempoExcluir:Number},setup(u){const l=u,x=g.debounce(W,100,{maxWait:250}),V=g.debounce(J,500,{maxWait:1e4}),M=25,$=2500;let r=l.conversa.visualizacao.ultima_mensagem_id;const t=T(null);let q=T(v().temPermissao()),c=T("");const n=ee({mensagens:l.conversa.mensagens,mensagem:"",mensagensAnteriores:!1,novasMensagens:!1});le.addListener(new ce(K,1)),se(()=>{t.value.scrollHeight>t.value.clientHeight+M&&(n.mensagensAnteriores=!0),z(E)});function j(){return f.post(`/conversa/${l.conversa.id}/enviar`,{mensagem:n.mensagem}).then(()=>{n.mensagem="",c.value="",X()}).catch(e=>{var s,a,d,C,P,H,w,A;if((d=(a=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:a.errors)!=null&&d.mensagem){if(Array.isArray((H=(P=(C=e==null?void 0:e.response)==null?void 0:C.data)==null?void 0:P.errors)==null?void 0:H.mensagem)){[c.value]=e.response.data.errors.mensagem;return}c.value=e.response.data.errors.mensagem;return}if((A=(w=e==null?void 0:e.response)==null?void 0:w.data)!=null&&A.message){c.value=e.response.data.message;return}c.value="Erro ao enviar mensagem",setTimeout(()=>{location.reload()},5e3)})}function O(){return n.mensagens.findLast(e=>e.id<=r)}function E(){var s,a;const e=O();e&&p(b(e.id)-t.value.clientHeight/2),t.value.scrollTop<((s=t.value.querySelector(".loader-inline"))==null?void 0:s.clientHeight)&&p((a=t.value.querySelector(".loader-inline"))==null?void 0:a.clientHeight),z(S)}function D(){n.novasMensagens=!1;const e=F();e?(p(b(e.id)-t.value.clientHeight/2),r=e.id,V()):E()}function F(){return n.mensagens.find(e=>e.id>r)}function p(e){t.value.scrollTop=e,setTimeout(()=>{x.cancel()},100)}function b(e){return t.value.querySelector(`#msg-${e}`).offsetTop-t.value.offsetTop}function W(){t.value.scrollTop<=M&&Q(),S(),t.value.scrollTop+t.value.clientHeight>=t.value.scrollHeight-M&&(n.novasMensagens=!1)}function S(){const e=Z();e&&e.id>r&&(r=e.id,V())}function Z(){const e=n.mensagens.findIndex(s=>s.id>r);return n.mensagens.slice(e).findLast(s=>G(s.id))}function G(e){const s=t.value.querySelector(`#msg-${e}`),a=s.offsetTop+s.clientHeight-s.parentElement.offsetTop;return a>s.parentElement.scrollTop&&a<s.parentElement.scrollTop+s.parentElement.clientHeight}function J(){f.post(`/conversa/${l.conversa.id}/mensagens/visualizacao/${r}`)}function i(){function e(){var a;let s=((a=g.last(n.mensagens))==null?void 0:a.id)??0;return f.get(`/conversa/${l.conversa.id}/mensagens/posteriores/${s}`).then(d=>{d.data.mensagens.length>0&&(n.mensagens=n.mensagens.concat(d.data.mensagens),n.novasMensagens=!0)})}if(i.bloquear){i.atualizar=!0;return}i.bloquear=!0,i.atualizar=!1,e().finally(()=>{i.bloquear=!1,i.atualizar&&i()})}function K(e){var s;e.mensagem_id>(((s=g.last(n.mensagens))==null?void 0:s.id)??0)&&i()}function Q(){if(!n.mensagensAnteriores||n.mensagens>0)return;const e=n.mensagens[0].id;f.get(`/conversa/${l.conversa.id}/mensagens/anteriores/${e}`).then(s=>{n.mensagens=s.data.mensagens.concat(n.mensagens),n.mensagensAnteriores=s.data.mais,z(()=>{p(b(e))})})}function R(e){f.get(`/conversa/${e.equipamento_conversa_id}/mensagem/excluir/${e.id}`).then(()=>{n.mensagens=g.filter(n.mensagens,s=>e.id!==s.id)})}function k(){v().solicitarPermissao().then(()=>{q.value=v().temPermissao()})}function X(){v().jaSolicitouPermissao()||v().temPermissao()||k()}return(e,s)=>(m(),N(me,{titulo:`Conversa ${u.conversa.equipamento.titulo}`},{default:I(()=>[o("div",ge,[o("h2",null,"Conversa - "+L(u.conversa.equipamento.titulo),1),_(q)?y("",!0):(m(),h("div",{key:0,class:"alert alert-warning mt-2 mb-4 cursor-pointer",onClick:k},[U(" Você não irá receber notificações de novas mensagens."),fe,U(" Clique aqui para autorizar as Notificações ")])),o("div",ve,[o("div",pe,[o("div",{ref_key:"elMensagens",ref:t,class:"mensagens",onScroll:s[0]||(s[0]=(...a)=>_(x)&&_(x)(...a))},[n.mensagensAnteriores?(m(),h("div",_e,xe)):y("",!0),(m(!0),h(ae,null,ne(n.mensagens,a=>(m(),N(ue,{key:a.id,mensagem:a,"usuario-id":u.usuarioId,"mensagens-tempo-excluir":u.mensagensTempoExcluir,onExcluirMensagem:R},null,8,["mensagem","usuario-id","mensagens-tempo-excluir"]))),128))],544),B(te,{name:"fade-transition",duration:100},{default:I(()=>[n.novasMensagens?(m(),h("button",{key:0,type:"button",class:"novas-mensagens",onClick:D},be)):y("",!0)]),_:1})]),o("form",{class:"mensagens-footer",onSubmit:oe(j,["prevent"])},[o("div",ze,[o("div",ye,[B(de,{error:_(c)},null,8,["error"])]),o("div",Ve,[ie(o("textarea",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.mensagem=a),class:"form-control",maxlength:$,rows:"3"},null,512),[[re,n.mensagem]]),o("div",$e,[qe,o("span",Ee,L(n.mensagem.length+" / "+$),1)])])])],40,Te)])])]),_:1},8,["titulo"]))}});export{Ne as default};

import{d as Z,a6 as f,r as z,A as ee,e as se,W as E,q as v,c as N,w as I,o as m,a as o,t as L,u as h,g as x,i as U,m as y,j as ne,F as ae,h as B,T as te,G as oe,D as ie,E as re}from"./app.eed770cd.js";import{g as p,E as le,L as ce}from"./_plugin-vue_export-helper.c11c3f1f.js";import{_ as me}from"./SiteLayout.vue_vue_type_script_setup_true_lang.e6c5e8f3.js";import{_ as ue}from"./Mensagem.vue_vue_type_script_setup_true_lang.1ddcc6d3.js";import{_ as de}from"./FormError.vue_vue_type_script_setup_true_lang.dd6e1467.js";import"./index.c57ba517.js";import"./Modal.vue_vue_type_script_setup_true_lang.566bd592.js";const ge={class:"container conversa"},fe=o("br",null,null,-1),ve={class:"conteudo"},pe={class:"container-mensagens"},_e={key:0,class:"loader-inline"},he=o("span",{class:"elemento"},null,-1),xe=[he],Me=o("span",null,"Novas Mensagens",-1),Te=[Me],be=["onSubmit"],ze={class:"col"},Ee={class:"row"},ye={class:"d-flex flex-row"},Ve={class:"col"},$e=o("button",{type:"submit",class:"btn btn-primary"}," Enviar ",-1),qe={class:"textcount"},Ne=Z({__name:"Conversa",props:{conversa:Object,usuarioId:Number,mensagensTempoExcluir:Number},setup(u){const l=u,M=f.exports.debounce(W,100,{maxWait:250}),V=f.exports.debounce(K,500,{maxWait:1e4}),T=25,$=2500;let r=l.conversa.visualizacao.ultima_mensagem_id;const t=z(null);let q=z(p().temPermissao()),c=z("");const n=ee({mensagens:l.conversa.mensagens,mensagem:"",mensagensAnteriores:!1,novasMensagens:!1});le.addListener(new ce(Q,1)),se(()=>{t.value.scrollHeight>t.value.clientHeight+T&&(n.mensagensAnteriores=!0),E(S)});function F(){return v.post(`/conversa/${l.conversa.id}/enviar`,{mensagem:n.mensagem}).then(()=>{n.mensagem="",c.value="",Y()}).catch(e=>{var s,a,d,g,C,P,H,w;if((d=(a=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:a.errors)!=null&&d.mensagem){if(Array.isArray((P=(C=(g=e==null?void 0:e.response)==null?void 0:g.data)==null?void 0:C.errors)==null?void 0:P.mensagem)){[c.value]=e.response.data.errors.mensagem;return}c.value=e.response.data.errors.mensagem;return}if((w=(H=e==null?void 0:e.response)==null?void 0:H.data)!=null&&w.message){c.value=e.response.data.message;return}c.value="Erro ao enviar mensagem",setTimeout(()=>{location.reload()},5e3)})}function j(){return n.mensagens.findLast(e=>e.id<=r)}function S(){var s,a;const e=j();e&&_(b(e.id)-t.value.clientHeight/2),t.value.scrollTop<((s=t.value.querySelector(".loader-inline"))==null?void 0:s.clientHeight)&&_((a=t.value.querySelector(".loader-inline"))==null?void 0:a.clientHeight),E(k)}function D(){n.novasMensagens=!1;const e=O();e?(_(b(e.id)-t.value.clientHeight/2),r=e.id,V()):S()}function O(){return n.mensagens.find(e=>e.id>r)}function _(e){t.value.scrollTop=e,setTimeout(()=>{M.cancel()},100)}function b(e){return t.value.querySelector(`#msg-${e}`).offsetTop-t.value.offsetTop}function W(){t.value.scrollTop<=T&&R(),k(),t.value.scrollTop+t.value.clientHeight>=t.value.scrollHeight-T&&(n.novasMensagens=!1)}function k(){const e=G();e&&e.id>r&&(r=e.id,V())}function G(){const e=n.mensagens.findIndex(s=>s.id>r);return n.mensagens.slice(e).findLast(s=>J(s.id))}function J(e){const s=t.value.querySelector(`#msg-${e}`),a=s.offsetTop+s.clientHeight-s.parentElement.offsetTop;return a>s.parentElement.scrollTop&&a<s.parentElement.scrollTop+s.parentElement.clientHeight}function K(){v.post(`/conversa/${l.conversa.id}/mensagens/visualizacao/${r}`)}function i(){function e(){var a,d;let s=(d=(a=f.exports.last(n.mensagens))==null?void 0:a.id)!=null?d:0;return v.get(`/conversa/${l.conversa.id}/mensagens/posteriores/${s}`).then(g=>{g.data.mensagens.length>0&&(n.mensagens=n.mensagens.concat(g.data.mensagens),n.novasMensagens=!0)})}if(i.bloquear){i.atualizar=!0;return}i.bloquear=!0,i.atualizar=!1,e().finally(()=>{i.bloquear=!1,i.atualizar&&i()})}function Q(e){var s,a;e.mensagem_id>((a=(s=f.exports.last(n.mensagens))==null?void 0:s.id)!=null?a:0)&&i()}function R(){if(!n.mensagensAnteriores||n.mensagens>0)return;const e=n.mensagens[0].id;v.get(`/conversa/${l.conversa.id}/mensagens/anteriores/${e}`).then(s=>{n.mensagens=s.data.mensagens.concat(n.mensagens),n.mensagensAnteriores=s.data.mais,E(()=>{_(b(e))})})}function X(e){v.get(`/conversa/${e.equipamento_conversa_id}/mensagem/excluir/${e.id}`).then(()=>{n.mensagens=f.exports.filter(n.mensagens,s=>e.id!==s.id)})}function A(){p().solicitarPermissao().then(()=>{q.value=p().temPermissao()})}function Y(){p().jaSolicitouPermissao()||p().temPermissao()||A()}return(e,s)=>(m(),N(me,{titulo:`Conversa ${u.conversa.equipamento.titulo}`},{default:I(()=>[o("div",ge,[o("h2",null,"Conversa - "+L(u.conversa.equipamento.titulo),1),h(q)?y("",!0):(m(),x("div",{key:0,class:"alert alert-warning mt-2 mb-4 cursor-pointer",onClick:A},[U(" Voc\xEA n\xE3o ir\xE1 receber notifica\xE7\xF5es de novas mensagens."),fe,U(" Clique aqui para autorizar as Notifica\xE7\xF5es ")])),o("div",ve,[o("div",pe,[o("div",{ref_key:"elMensagens",ref:t,class:"mensagens",onScroll:s[0]||(s[0]=(...a)=>h(M)&&h(M)(...a))},[n.mensagensAnteriores?(m(),x("div",_e,xe)):y("",!0),(m(!0),x(ae,null,ne(n.mensagens,a=>(m(),N(ue,{key:a.id,mensagem:a,"usuario-id":u.usuarioId,"mensagens-tempo-excluir":u.mensagensTempoExcluir,onExcluirMensagem:X},null,8,["mensagem","usuario-id","mensagens-tempo-excluir"]))),128))],544),B(te,{name:"fade-transition",duration:100},{default:I(()=>[n.novasMensagens?(m(),x("button",{key:0,type:"button",class:"novas-mensagens",onClick:D},Te)):y("",!0)]),_:1})]),o("form",{class:"mensagens-footer",onSubmit:oe(F,["prevent"])},[o("div",ze,[o("div",Ee,[B(de,{error:h(c)},null,8,["error"])]),o("div",ye,[ie(o("textarea",{"onUpdate:modelValue":s[1]||(s[1]=a=>n.mensagem=a),class:"form-control",maxlength:$,rows:"3"},null,512),[[re,n.mensagem]]),o("div",Ve,[$e,o("span",qe,L(n.mensagem.length+" / "+$),1)])])])],40,be)])])]),_:1},8,["titulo"]))}});export{Ne as default};
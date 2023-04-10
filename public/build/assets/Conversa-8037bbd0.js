import{r as p,x as Y,a5 as _,j as A,d as ae,Z as R,c as Z,w as G,o as b,a as o,t as J,u as d,k as L,h as K,l as W,m as se,F as ne,f as Q,T as te,g as ie,b as re,e as oe,A as le}from"./app-1986b170.js";import{_ as ue}from"./SiteLayout.vue_vue_type_script_setup_true_lang-28adfb89.js";import{_ as ce}from"./Mensagem.vue_vue_type_script_setup_true_lang-3d749ebc.js";import{_ as me}from"./FormError.vue_vue_type_script_setup_true_lang-02173e48.js";import{g as T,N as de,L as X,M as ge}from"./_plugin-vue_export-helper-65f3e64a.js";import"./Modal.vue_vue_type_script_setup_true_lang-815cbace.js";import"./index-ac617c56.js";class h{constructor(l,a,c,v,t=!1){this.id=l,this.mensagem=a,this.usuario_id=c,this.created_at=v,this.loading=t}static converterArray(l){return l.map(a=>new h(a.id,a.mensagem,a.usuario_id,a.created_at))}}function ve(g,l){let a=p(g.mensagens),c=p(!1),v=p(!1),t=p(T().temPermissao()),f=g.id,u=p(g.visualizacao.ultima_mensagem_id),C=l,x=-1,m={bloquearAtualizar:!1,atualizar:!1,bloquearAtualizarAnteriores:!1};Y(()=>{P(),F()});function E(){return a.value.findLast(e=>e.id<=u.value)}function H(e){return a.value.find(n=>n.id>e)}function M(e){e<u.value||(u.value=e,I(e))}async function q(){var e;m.bloquearAtualizar&&(m.atualizar=!0),m.bloquearAtualizar=!0,m.atualizar=!1,await D(((e=_.last(a.value))==null?void 0:e.id)??0),m.bloquearAtualizar=!1,m.atualizar&&q()}function N(){T().solicitarPermissao().then(()=>{t.value=T().temPermissao()})}function j(){T().jaSolicitouPermissao()||T().temPermissao()||N()}async function U(){if(!c.value||a.value.length===0||m.bloquearAtualizarAnteriores)return null;m.bloquearAtualizarAnteriores=!0;const e=_.first(a.value).id;return await B(e),e}async function B(e){let n=await A.get(`/conversa/${f}/mensagens/anteriores/${e}`);a.value=h.converterArray(n.data.mensagens).concat(a.value),c.value=n.data.mais}async function D(e){let n=await A.get(`/conversa/${f}/mensagens/posteriores/${e}`);n.data.mensagens.length>0&&(a.value=a.value.concat(h.converterArray(n.data.mensagens)),v.value=!0)}async function V(e){let n=await A.post(`/conversa/${f}/enviar`,{mensagem:e});a.value.push(new h(n.data.id,n.data.mensagem,n.data.usuario_id,n.data.created_at))}function I(e){A.post(`/conversa/${f}/mensagens/visualizacao/${e}`)}function O(e){A.get(`/conversa/${f}/mensagem/excluir/${e}`).then(()=>{a.value=_.filter(a.value,n=>e!==n.id)})}function P(){de.addListener(new X(e=>{var n;e.mensagem_id>(((n=_.last(a.value))==null?void 0:n.id)??0)&&q()},1))}function F(){ge.addListener(new X(e=>{a.value=_.filter(a.value,n=>e.mensagem_id!==n.id)},1))}async function z(e){let n=new h(x,e,C,new Date,!0);x-=1,a.value.push(n),await V(n.mensagem),a.value=_.filter(a.value,y=>y.id!==n.id),j()}function w(e){var n,y,$,S,k,s,i,r;if(($=(y=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:y.errors)!=null&&$.mensagem){if(Array.isArray((s=(k=(S=e==null?void 0:e.response)==null?void 0:S.data)==null?void 0:k.errors)==null?void 0:s.mensagem)){let[ee]=e.response.data.errors.mensagem;return ee}return e.response.data.errors.mensagem}return(r=(i=e==null?void 0:e.response)==null?void 0:i.data)!=null&&r.message?e.response.data.message:"Erro ao enviar mensagem"}return{mensagens:a,mensagensAnteriores:c,temNovasMensagens:v,temPermNotificacao:t,ultimaMsgVisualizadaId:u,ajaxExcluirMensagem:O,atualizarMensagensAnteriores:U,enviarMensagem:z,getMensagemErroEnviarMensagem:w,getProximaMensagem:H,getUltimaMensagemVisualizada:E,solicitarPermNotificacao:N,visualizarMensagem:M}}class fe{constructor(l,a,c,v){this.id=l,this.equipamento_id=a,this.visualizacao=c,this.mensagens=v.map(t=>new h(t.id,t.mensagem,t.usuario_id,t.created_at))}}const pe={class:"container conversa"},Me=o("br",null,null,-1),_e={class:"conteudo"},he={class:"container-mensagens"},xe={key:0,class:"loader-inline"},ze=o("span",{class:"elemento"},null,-1),ye=[ze],be=o("span",null,"Novas Mensagens",-1),Ee=[be],we=["onSubmit"],Ae={class:"col"},Te={class:"row"},qe={class:"d-flex flex-row"},Ne={class:"col"},Ve=o("button",{type:"submit",class:"btn btn-primary"}," Enviar ",-1),Ie={class:"textcount"},je=ae({__name:"Conversa",props:{conversa:Object,usuarioId:Number,mensagensTempoExcluir:Number},setup(g){const l=g,a=_.debounce(e,100,{maxWait:250}),c=25,v=2500,t=p(null);let f=p(""),u=p(""),C=new fe(l.conversa.id,l.conversa.equipamentoId,l.conversa.visualizacao,l.conversa.mensagens);const{mensagens:x,mensagensAnteriores:m,temNovasMensagens:E,temPermNotificacao:H,ultimaMsgVisualizadaId:M,ajaxExcluirMensagem:q,atualizarMensagensAnteriores:N,enviarMensagem:j,getMensagemErroEnviarMensagem:U,getProximaMensagem:B,getUltimaMensagemVisualizada:D,solicitarPermNotificacao:V,visualizarMensagem:I}=ve(C,l.usuarioId);Y(()=>{t.value.scrollHeight>t.value.clientHeight+c&&(m.value=!0),R(P)});async function O(){try{let s=u.value.trim();u.value="",await j(s)}catch(s){f.value=U(s),setTimeout(()=>{location.reload()},5e3)}}function P(){var i,r;const s=D();s&&z(w(s.id)-t.value.clientHeight/2),t.value.scrollTop<((i=t.value.querySelector(".loader-inline"))==null?void 0:i.clientHeight)&&z((r=t.value.querySelector(".loader-inline"))==null?void 0:r.clientHeight),R(n)}function F(){E.value=!1;const s=B(M);s?(z(w(s.id)-t.value.clientHeight/2),I(s.id)):P()}function z(s){t.value.scrollTop=s,setTimeout(()=>{a.cancel()},100)}function w(s){return t.value.querySelector(`#msg-${s}`).offsetTop-t.value.offsetTop}function e(){t.value.scrollTop<=c&&S(),n(),t.value.scrollTop+t.value.clientHeight>=t.value.scrollHeight-c&&(E.value=!1)}function n(){const s=y();s&&s.id>M&&(M.value=s.id,I(M.value))}function y(){const s=x.value.findIndex(i=>i.id>M.value);return x.value.slice(s).findLast(i=>$(i.id))}function $(s){const i=t.value.querySelector(`#msg-${s}`),r=i.offsetTop+i.clientHeight-i.parentElement.offsetTop;return r>i.parentElement.scrollTop&&r<i.parentElement.scrollTop+i.parentElement.clientHeight}function S(){let s=N();s&&R(()=>{z(w(s))})}function k(s){q(s.id)}return(s,i)=>(b(),Z(ue,{titulo:`Conversa ${g.conversa.equipamento.titulo}`},{default:G(()=>[o("div",pe,[o("h2",null,"Conversa - "+J(g.conversa.equipamento.titulo),1),d(H)?W("",!0):(b(),L("div",{key:0,class:"alert alert-warning mt-2 mb-4 cursor-pointer",onClick:i[0]||(i[0]=(...r)=>d(V)&&d(V)(...r))},[K(" Você não irá receber notificações de novas mensagens."),Me,K(" Clique aqui para autorizar as Notificações ")])),o("div",_e,[o("div",he,[o("div",{ref_key:"elMensagens",ref:t,class:"mensagens",onScroll:i[1]||(i[1]=(...r)=>d(a)&&d(a)(...r))},[d(m)?(b(),L("div",xe,ye)):W("",!0),(b(!0),L(ne,null,se(d(x),r=>(b(),Z(ce,{key:r.id,mensagem:r,usuarioId:g.usuarioId,mensagensTempoExcluir:g.mensagensTempoExcluir,onExcluirMensagem:k},null,8,["mensagem","usuarioId","mensagensTempoExcluir"]))),128))],544),Q(te,{name:"fade-transition",duration:100},{default:G(()=>[d(E)?(b(),L("button",{key:0,type:"button",class:"novas-mensagens",onClick:F},Ee)):W("",!0)]),_:1})]),o("form",{class:"mensagens-footer",onSubmit:ie(O,["prevent"])},[o("div",Ae,[o("div",Te,[Q(me,{error:d(f)},null,8,["error"])]),o("div",qe,[re(o("textarea",{"onUpdate:modelValue":i[2]||(i[2]=r=>le(u)?u.value=r:u=r),class:"form-control",maxlength:v,rows:"3"},null,512),[[oe,d(u)]]),o("div",Ne,[Ve,o("span",Ie,J(d(u).length+" / "+v),1)])])])],40,we)])])]),_:1},8,["titulo"]))}});export{je as default};

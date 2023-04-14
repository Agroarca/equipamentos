import{r as M,x as ee,a5 as b,j as T,d as se,Z as W,c as G,w as J,o as w,a as o,t as K,u as d,k as C,h as Q,l as Z,m as ne,F as te,f as X,T as ie,g as re,b as oe,e as le,A as ue}from"./app-b9eab184.js";import{_ as ce}from"./SiteLayout.vue_vue_type_script_setup_true_lang-736e0c3e.js";import{_ as me}from"./Mensagem.vue_vue_type_script_setup_true_lang-371eeeb4.js";import{_ as de}from"./FormError.vue_vue_type_script_setup_true_lang-8975cccc.js";import{g as q,N as ge,L as Y,M as fe}from"./_plugin-vue_export-helper-f069264a.js";import"./Modal.vue_vue_type_script_setup_true_lang-98b65518.js";import"./index-ac617c56.js";class x{constructor(l,a,m,f,i=!1){this.id=l,this.mensagem=a,this.usuario_id=m,this.created_at=f,this.loading=i}static converterArray(l){return l.map(a=>new x(a.id,a.mensagem,a.usuario_id,a.created_at))}}function ve(g,l){let a=M(g.mensagens),m=M(!1),f=M(!1),i=M(q().temPermissao()),v=g.id,u=M(g.visualizacao.ultima_mensagem_id),H=l,z=-1,c={bloquearAtualizar:!1,atualizar:!1,bloquearAtualizarAnteriores:!1};ee(()=>{$(),R()});function A(){return a.value.findLast(e=>e.id<=u.value)}function j(e){return a.value.find(s=>s.id>e)}function _(e){e<u.value||(u.value=e,P(e))}async function N(){var e;c.bloquearAtualizar&&(c.atualizar=!0),c.bloquearAtualizar=!0,c.atualizar=!1,await O(((e=a.value.findLast(s=>s.id>0))==null?void 0:e.id)??0),c.bloquearAtualizar=!1,c.atualizar&&N()}function V(){q().solicitarPermissao().then(()=>{i.value=q().temPermissao()})}function U(){q().jaSolicitouPermissao()||q().temPermissao()||V()}async function B(){if(!m.value||a.value.length===0||c.bloquearAtualizarAnteriores)return null;c.bloquearAtualizarAnteriores=!0;const e=b.first(a.value).id;return await D(e),c.bloquearAtualizarAnteriores=!1,e}async function D(e){let s=await T.get(`/conversa/${v}/mensagens/anteriores/${e}`);a.value=S(x.converterArray(s.data.mensagens)).concat(a.value),m.value=s.data.mais}async function O(e){let s=await T.get(`/conversa/${v}/mensagens/posteriores/${e}`);s.data.mensagens.length>0&&(a.value=a.value.concat(S(x.converterArray(s.data.mensagens))),f.value=!0)}async function I(e){let s=await T.post(`/conversa/${v}/enviar`,{mensagem:e});a.value.push(new x(s.data.id,s.data.mensagem,s.data.usuario_id,s.data.created_at))}function P(e){T.post(`/conversa/${v}/mensagens/visualizacao/${e}`)}function F(e){T.get(`/conversa/${v}/mensagem/excluir/${e}`).then(()=>{a.value=b.filter(a.value,s=>e!==s.id)})}function $(){ge.addListener(new Y(e=>{var s;e.mensagem_id>(((s=b.last(a.value))==null?void 0:s.id)??0)&&N()},1))}function R(){fe.addListener(new Y(e=>{a.value=b.filter(a.value,s=>e.mensagem_id!==s.id)},1))}async function y(e){let s=new x(z,e,H,new Date,!0);z-=1,a.value.push(s);try{await I(s.mensagem)}finally{a.value=b.filter(a.value,h=>h.id!==s.id)}U()}function E(e){var s,h,k,L,n,t,r,p;if((k=(h=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:h.errors)!=null&&k.mensagem){if(Array.isArray((t=(n=(L=e==null?void 0:e.response)==null?void 0:L.data)==null?void 0:n.errors)==null?void 0:t.mensagem)){let[ae]=e.response.data.errors.mensagem;return ae}return e.response.data.errors.mensagem}return(p=(r=e==null?void 0:e.response)==null?void 0:r.data)!=null&&p.message?e.response.data.message:"Erro ao enviar mensagem"}function S(e){return e.filter(s=>!a.value.find(h=>h.id===s.id))}return{mensagens:a,mensagensAnteriores:m,temNovasMensagens:f,temPermNotificacao:i,ultimaMsgVisualizadaId:u,ajaxExcluirMensagem:F,atualizarMensagensAnteriores:B,enviarMensagem:y,getMensagemErroEnviarMensagem:E,getProximaMensagem:j,getUltimaMensagemVisualizada:A,solicitarPermNotificacao:V,visualizarMensagem:_}}class pe{constructor(l,a,m,f){this.id=l,this.equipamento_id=a,this.visualizacao=m,this.mensagens=f.map(i=>new x(i.id,i.mensagem,i.usuario_id,i.created_at))}}const he={class:"container conversa"},Me=o("br",null,null,-1),_e={class:"conteudo"},xe={class:"container-mensagens"},ze={key:0,class:"loader-inline"},ye=o("span",{class:"elemento"},null,-1),we=[ye],be=o("span",null,"Novas Mensagens",-1),Ae=[be],Ee=["onSubmit"],Te={class:"col"},qe={class:"row"},Ne={class:"d-flex flex-row"},Ve={class:"col"},Ie=o("button",{type:"submit",class:"btn btn-primary"}," Enviar ",-1),Pe={class:"textcount"},Ue=se({__name:"Conversa",props:{conversa:Object,usuarioId:Number,mensagensTempoExcluir:Number},setup(g){const l=g,a=b.debounce(S,100,{maxWait:250}),m=25,f=2500,i=M(null);let v=M(""),u=M(""),H=new pe(l.conversa.id,l.conversa.equipamentoId,l.conversa.visualizacao,l.conversa.mensagens);const{mensagens:z,mensagensAnteriores:c,temNovasMensagens:A,temPermNotificacao:j,ultimaMsgVisualizadaId:_,ajaxExcluirMensagem:N,atualizarMensagensAnteriores:V,enviarMensagem:U,getMensagemErroEnviarMensagem:B,getProximaMensagem:D,getUltimaMensagemVisualizada:O,solicitarPermNotificacao:I,visualizarMensagem:P}=ve(H,l.usuarioId);ee(()=>{i.value.scrollHeight>i.value.clientHeight+m&&(c.value=!0),W($)});async function F(){var n,t,r;try{let p=u.value.trim();u.value="",v.value="",await U(p)}catch(p){v.value=B(p),((r=(t=(n=p==null?void 0:p.response)==null?void 0:n.data)==null?void 0:t.mensagem)==null?void 0:r.length)===0&&setTimeout(()=>{window.location.reload()},5e3)}}function $(){var t,r;const n=O();n&&y(E(n.id)-i.value.clientHeight/2),i.value.scrollTop<((t=i.value.querySelector(".loader-inline"))==null?void 0:t.clientHeight)&&y((r=i.value.querySelector(".loader-inline"))==null?void 0:r.clientHeight),W(e)}function R(){A.value=!1;const n=D(_);n?(y(E(n.id)-i.value.clientHeight/2),P(n.id)):$()}function y(n){i.value.scrollTop=n,setTimeout(()=>{a.cancel()},100)}function E(n){return i.value.querySelector(`#msg-${n}`).offsetTop-i.value.offsetTop}function S(){i.value.scrollTop<=m&&k(),e(),i.value.scrollTop+i.value.clientHeight>=i.value.scrollHeight-m&&(A.value=!1)}function e(){const n=s();n&&n.id>_&&(_.value=n.id,P(_.value))}function s(){const n=z.value.findIndex(t=>t.id>_.value);return z.value.slice(n).findLast(t=>t.id>0&&h(t.id))}function h(n){const t=i.value.querySelector(`#msg-${n}`),r=t.offsetTop+t.clientHeight-t.parentElement.offsetTop;return r>t.parentElement.scrollTop&&r<t.parentElement.scrollTop+t.parentElement.clientHeight}async function k(){let n=await V();n&&W(()=>{y(E(n))})}function L(n){N(n.id)}return(n,t)=>(w(),G(ce,{titulo:`Conversa ${g.conversa.equipamento.titulo}`},{default:J(()=>[o("div",he,[o("h2",null,"Conversa - "+K(g.conversa.equipamento.titulo),1),d(j)?Z("",!0):(w(),C("div",{key:0,class:"alert alert-warning mt-2 mb-4 cursor-pointer",onClick:t[0]||(t[0]=(...r)=>d(I)&&d(I)(...r))},[Q(" Você não irá receber notificações de novas mensagens."),Me,Q(" Clique aqui para autorizar as Notificações ")])),o("div",_e,[o("div",xe,[o("div",{ref_key:"elMensagens",ref:i,class:"mensagens",onScroll:t[1]||(t[1]=(...r)=>d(a)&&d(a)(...r))},[d(c)?(w(),C("div",ze,we)):Z("",!0),(w(!0),C(te,null,ne(d(z),r=>(w(),G(me,{key:r.id,mensagem:r,usuarioId:g.usuarioId,mensagensTempoExcluir:g.mensagensTempoExcluir,onExcluirMensagem:L},null,8,["mensagem","usuarioId","mensagensTempoExcluir"]))),128))],544),X(ie,{name:"fade-transition",duration:100},{default:J(()=>[d(A)?(w(),C("button",{key:0,type:"button",class:"novas-mensagens",onClick:R},Ae)):Z("",!0)]),_:1})]),o("form",{class:"mensagens-footer",onSubmit:re(F,["prevent"])},[o("div",Te,[o("div",qe,[X(de,{error:d(v)},null,8,["error"])]),o("div",Ne,[oe(o("textarea",{"onUpdate:modelValue":t[2]||(t[2]=r=>ue(u)?u.value=r:u=r),class:"form-control",maxlength:f,rows:"3"},null,512),[[le,d(u)]]),o("div",Ve,[Ie,o("span",Pe,K(d(u).length+" / "+f),1)])])])],40,Ee)])])]),_:1},8,["titulo"]))}});export{Ue as default};
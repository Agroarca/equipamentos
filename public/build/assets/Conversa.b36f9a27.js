import{A as N,_ as d,k as D,E as I,l as W,W as x,G as g,a as F,w as V,o as u,b as i,t as z,u as l,g as f,i as H,r as O,H as P,F as j,e as G,D as J,j as K,d as Q,v as R}from"./app.aecaaf5c.js";import{S as X}from"./SiteLayout.1e0c2d4f.js";import{E as Y,L as Z}from"./_plugin-vue_export-helper.9cafb289.js";const $={class:"container conversa"},ee={class:"conteudo"},ne={class:"container-mensagens"},se={key:0,class:"loader-inline"},ae=i("span",{class:"elemento"},null,-1),te=[ae],ie=["id"],oe=i("span",null,"Novas Mensagens",-1),le=[oe],re=["onSubmit"],ce={class:"col"},ue=i("button",{type:"submit",class:"btn btn-primary"},"Enviar",-1),me={class:"textcount"},ve=N({__name:"Conversa",props:["conversa","usuario_id"],setup(v){const c=v;let p=d.exports.debounce(A,100,{maxWait:250});d.exports.debounce(M,500,{maxWait:1e4});const _=25,T=2500;let r=c.conversa.visualizacao.ultima_mensagem_id;const t=D(null);let s=I({mensagens:c.conversa.mensagens,mensagem:"",mensagensAnteriores:!1,novasMensagens:!1});Y.addListener(new Z(U,1)),W(()=>{t.value.scrollHeight>t.value.clientHeight+_&&(s.mensagensAnteriores=!0),x(b)});function k(){return g.post(route("site.conversa.enviar",c.conversa.id),{mensagem:s.mensagem}).then(()=>{s.mensagem=""}).catch(e=>{location.reload()})}function C(){return s.mensagens.findLast(e=>e.id<=r)}function b(){var n,a;let e=C();e&&m(h(e.id)-t.value.clientHeight/2),t.value.scrollTop<((n=t.value.querySelector(".loader-inline"))==null?void 0:n.clientHeight)&&m((a=t.value.querySelector(".loader-inline"))==null?void 0:a.clientHeight),x(y)}function E(){s.novasMensagens=!1;let e=q();e?(m(h(e.id)-t.value.clientHeight/2),r=e.id,M()):b()}function q(){return s.mensagens.find(e=>e.id>r)}function m(e){t.value.scrollTop=e,setTimeout(()=>{p.cancel()},100)}function h(e){return t.value.querySelector("#msg-"+e).offsetTop-t.value.offsetTop}function A(e){t.value.scrollTop<=_&&B(),y(),t.value.scrollTop+t.value.clientHeight>=t.value.scrollHeight-_&&(s.novasMensagens=!1)}function y(){let e=L();e&&e.id>r&&(r=e.id,M())}function L(){let e=s.mensagens.findIndex(n=>n.id>r);return s.mensagens.slice(e).findLast(n=>w(n.id))}function w(e){let n=t.value.querySelector("#msg-"+e),a=n.offsetTop+n.clientHeight-n.parentElement.offsetTop;return a>n.parentElement.scrollTop&&a<n.parentElement.scrollTop+n.parentElement.clientHeight}function M(){g.post(route("site.conversa.mensagens.visualizacao",[c.conversa.id,r]))}function o(){function e(){var n,a;return g.get(route("site.conversa.mensagens",[c.conversa.id,(a=(n=d.exports.last(s.mensagens))==null?void 0:n.id)!=null?a:0])).then(S=>{S.data.mensagens.length>0&&(s.mensagens=s.mensagens.concat(S.data.mensagens),s.novasMensagens=!0)})}if(o.bloquear){o.atualizar=!0;return}o.bloquear=!0,o.atualizar=!1,e().finally(()=>{o.bloquear=!1,o.atualizar&&o()})}function U(e){var n,a;e.mensagem_id>((a=(n=d.exports.last(s.mensagens))==null?void 0:n.id)!=null?a:0)&&o()}function B(){if(!s.mensagensAnteriores||s.mensagens>0)return;let e=s.mensagens[0].id;g.get(route("site.conversa.mensagens.anteriores",[c.conversa.id,e])).then(n=>{s.mensagens=n.data.mensagens.concat(s.mensagens),s.mensagensAnteriores=n.data.mais,x(()=>{m(h(e))})})}return(e,n)=>(u(),F(X,null,{default:V(()=>[i("div",$,[i("h2",null,"Conversa - "+z(v.conversa.equipamento.titulo),1),i("div",ee,[i("div",ne,[i("div",{class:"mensagens",onScroll:n[0]||(n[0]=(...a)=>l(p)&&l(p)(...a)),ref_key:"elMensagens",ref:t},[l(s).mensagensAnteriores?(u(),f("div",se,te)):H("",!0),(u(!0),f(j,null,O(l(s).mensagens,a=>(u(),f("span",{class:P(["mensagem",{autor:a.usuario_id==v.usuario_id}]),id:"msg-"+a.id,key:a.id},z(a.mensagem),11,ie))),128))],544),G(J,{name:"fade-transition",duration:100},{default:V(()=>[l(s).novasMensagens?(u(),f("button",{key:0,class:"novas-mensagens",onClick:E},le)):H("",!0)]),_:1})]),i("form",{onSubmit:K(k,["prevent"]),class:"mensagens-footer"},[Q(i("textarea",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=a=>l(s).mensagem=a),maxlength:T,rows:"3"},null,512),[[R,l(s).mensagem]]),i("div",ce,[ue,i("span",me,z(l(s).mensagem.length+" / "+T),1)])],40,re)])])]),_:1}))}});export{ve as default};

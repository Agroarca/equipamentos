import{d as y,m as A,H as w,a as x,w as b,A as $,o as n,b as t,t as g,i as c,s as _,k as f,r as B,F as N}from"./app.5b090f15.js";import{_ as M}from"./Modal.vue_vue_type_script_setup_true_lang.f61a7adf.js";const V={key:0},F=t("i",{class:"fas fa-arrow-left me-1"},null,-1),j={class:"table-responsive"},q={class:"table table-striped table-hover"},z=t("thead",null,[t("th",null,"Nome"),t("th")],-1),D=["onClick"],E=t("i",{class:"fas fa-arrow-right"},null,-1),O=y({__name:"AlterarCategoriaMae",props:{categoria:Object},emits:["moverCategoria"],setup(l,{expose:v,emit:h}){const p=l,d=A(null),e=w({categoriaAtual:{},categorias:[]});function u(o){$.get(`/admin/categorias/pesquisar/${o}`).then(a=>{e.categorias=a.data.categorias,e.categoriaAtual=a.data.categoria})}function C(){var o,a;u((a=(o=p.categoria)==null?void 0:o.categoria_mae)==null?void 0:a.id),d.value.show()}function k(){var o;h("moverCategoria",(o=e.categoriaAtual)==null?void 0:o.id),d.value.hide()}return v({show:C}),(o,a)=>(n(),x(M,{id:"modal_"+l.categoria.id,ref_key:"modal",ref:d,title:"Mover "+l.categoria.nome},{footer:b(()=>{var r,s;return[t("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=i=>k())}," Mover para "+g((s=(r=e.categoriaAtual)==null?void 0:r.nome)!=null?s:"Categorias"),1)]}),default:b(()=>{var r,s;return[e.categoriaAtual?(n(),c("div",V,[t("button",{type:"button",class:"btn btn-primary",onClick:a[0]||(a[0]=i=>{var m;return u((m=e.categoriaAtual.categoria_mae)==null?void 0:m.id)})},[F,_(" "+g((s=(r=e.categoriaAtual.categoria_mae)==null?void 0:r.nome)!=null?s:"Categorias"),1)])])):f("",!0),t("div",j,[t("table",q,[z,t("tbody",null,[(n(!0),c(N,null,B(e.categorias,i=>(n(),c("tr",{key:i.id},[t("td",null,g(i.nome),1),t("td",null,[i.id!=l.categoria.id?(n(),c("button",{key:0,type:"button",class:"btn btn-primary",onClick:m=>u(i.id)},[_(" Acessar "),E],8,D)):f("",!0)])]))),128))])])])]}),_:1},8,["id","title"]))}});export{O as _};

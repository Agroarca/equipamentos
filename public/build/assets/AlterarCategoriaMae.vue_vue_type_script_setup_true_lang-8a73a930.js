import{d as k,r as y,i as A,c as w,w as g,j as x,o as s,a,t as m,k as l,h as _,l as b,m as $,F as B}from"./app-2d3a6d17.js";import{_ as N}from"./Modal.vue_vue_type_script_setup_true_lang-ce68fb6d.js";const M={key:0},V=a("i",{class:"fas fa-arrow-left me-1"},null,-1),j={class:"table-responsive"},q={class:"table table-striped table-hover"},F=a("thead",null,[a("th",null,"Nome"),a("th")],-1),z=["onClick"],D=a("i",{class:"fas fa-arrow-right"},null,-1),O=k({__name:"AlterarCategoriaMae",props:{categoria:Object},emits:["moverCategoria"],setup(n,{expose:f,emit:h}){const p=n,c=y(null),o=A({categoriaAtual:{},categorias:[]});function d(t){loader.show();const e=t?`/admin/categorias/pesquisar/${t}`:"/admin/categorias/pesquisar";x.get(e).then(r=>{o.categorias=r.data.categorias,o.categoriaAtual=r.data.categoria,loader.hide()})}function v(){var t,e;d((e=(t=p.categoria)==null?void 0:t.categoria_mae)==null?void 0:e.id),c.value.show()}function C(){var t;h("moverCategoria",(t=o.categoriaAtual)==null?void 0:t.id),c.value.hide()}return f({show:v}),(t,e)=>(s(),w(N,{id:"modal_"+n.categoria.id,ref_key:"modal",ref:c,title:"Mover "+n.categoria.nome},{footer:g(()=>{var r;return[a("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=i=>C())}," Mover para "+m(((r=o.categoriaAtual)==null?void 0:r.nome)??"Categorias"),1)]}),default:g(()=>{var r;return[o.categoriaAtual?(s(),l("div",M,[a("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=i=>{var u;return d((u=o.categoriaAtual.categoria_mae)==null?void 0:u.id)})},[V,_(" "+m(((r=o.categoriaAtual.categoria_mae)==null?void 0:r.nome)??"Categorias"),1)])])):b("",!0),a("div",j,[a("table",q,[F,a("tbody",null,[(s(!0),l(B,null,$(o.categorias,i=>(s(),l("tr",{key:i.id},[a("td",null,m(i.nome),1),a("td",null,[i.id!=n.categoria.id?(s(),l("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>d(i.id)},[_(" Acessar "),D],8,z)):b("",!0)])]))),128))])])])]}),_:1},8,["id","title"]))}});export{O as _};
import{d,a as u,w as n,o as a,b as t,i as r,r as _,t as m,g as o,s as l,u as i,q as c,F as h,k as f}from"./app.7f8c5bb8.js";import{A as p}from"./AdminLayout.389069f1.js";import{_ as b}from"./Paginacao.vue_vue_type_script_setup_true_lang.a5baf5dc.js";import"./_plugin-vue_export-helper.2802e0fb.js";const k={class:"card card-default"},x={class:"card-body table-responsive p-0"},y={class:"table table-striped table-hover"},N=t("thead",null,[t("th",null,"Nome"),t("th")],-1),g=t("i",{class:"fas fa-pen-to-square pe-1"},null,-1),v=t("i",{class:"fas fa-eraser pe-1"},null,-1),B={key:0},V=t("td",{colspan:"3"}," Nenhum registro encontrado ",-1),C=[V],L=d({__name:"Inicio",props:{marcas:Object},setup(s){return(E,$)=>(a(),u(p,{titulo:"Marcas",link:"/admin/marcas/criar/","button-text":"Nova Marca"},{default:n(()=>[t("div",k,[t("div",x,[t("table",y,[N,t("tbody",null,[(a(!0),r(h,null,_(s.marcas.data,e=>(a(),r("tr",{key:e.id},[t("td",null,m(e.nome),1),t("td",null,[o(i(c),{class:"btn btn-primary me-2",href:`/admin/marcas/criar/${e==null?void 0:e.id}`},{default:n(()=>[g,l(" Editar ")]),_:2},1032,["href"]),o(i(c),{class:"btn btn-danger",href:`/admin/marcas/${e.id}/excluir`},{default:n(()=>[v,l(" Excluir ")]),_:2},1032,["href"])])]))),128)),s.marcas.data.length==0?(a(),r("tr",B,C)):f("",!0)])])])]),o(b,{class:"mt-4",links:s.marcas.links},null,8,["links"])]),_:1}))}});export{L as default};

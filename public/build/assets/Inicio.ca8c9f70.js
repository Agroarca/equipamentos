import{d,a as m,w as r,o as e,b as t,i as n,r as u,t as _,g as o,s as l,u as i,q as c,F as h,k as f}from"./app.f74497a6.js";import{A as p}from"./AdminLayout.66f03349.js";import{_ as b}from"./Paginacao.vue_vue_type_script_setup_true_lang.22c025b9.js";import"./_plugin-vue_export-helper.541f566a.js";import"./index.c57ba517.js";const k={class:"card card-default"},x={class:"card-body table-responsive p-0"},y={class:"table table-striped table-hover"},N=t("thead",null,[t("th",null,"Nome"),t("th")],-1),g=t("i",{class:"fas fa-pen-to-square pe-1"},null,-1),v=t("i",{class:"fas fa-eraser pe-1"},null,-1),B={key:0},V=t("td",{colspan:"3"}," Nenhum registro encontrado ",-1),C=[V],M=d({__name:"Inicio",props:{marcas:Object},setup(s){return(E,$)=>(e(),m(p,{titulo:"Marcas",link:"/admin/marcas/criar/","button-text":"Nova Marca"},{default:r(()=>[t("div",k,[t("div",x,[t("table",y,[N,t("tbody",null,[(e(!0),n(h,null,u(s.marcas.data,a=>(e(),n("tr",{key:a.id},[t("td",null,_(a.nome),1),t("td",null,[o(i(c),{class:"btn btn-primary me-2",href:`/admin/marcas/${a.id}/editar`},{default:r(()=>[g,l(" Editar ")]),_:2},1032,["href"]),o(i(c),{class:"btn btn-danger",href:`/admin/marcas/${a.id}/excluir`},{default:r(()=>[v,l(" Excluir ")]),_:2},1032,["href"])])]))),128)),s.marcas.data.length==0?(e(),n("tr",B,C)):f("",!0)])])])]),o(b,{class:"mt-4",links:s.marcas.links},null,8,["links"])]),_:1}))}});export{M as default};

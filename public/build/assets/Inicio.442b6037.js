import{d as u,a as m,w as o,o as s,b as t,i as n,r as _,t as l,g as r,s as d,u as i,q as c,F as h,k as f}from"./app.a0c878fb.js";import{A as b}from"./AdminLayout.99b11375.js";import{_ as p}from"./Paginacao.vue_vue_type_script_setup_true_lang.b59b122f.js";import"./_plugin-vue_export-helper.b7638313.js";import"./index.c57ba517.js";const k={class:"card card-default"},y={class:"card-body table-responsive p-0"},x={class:"table table-striped table-hover"},N=t("thead",null,[t("th",null,"Nome"),t("th",null,"Marca"),t("th",null,"Status"),t("th")],-1),g=t("i",{class:"fas fa-pen-to-square pe-1"},null,-1),v=t("i",{class:"fas fa-eraser pe-1"},null,-1),C={key:0},B=t("td",{colspan:"3"}," Nenhum registro encontrado ",-1),V=[B],L=u({__name:"Inicio",props:{modelos:Object,statusCadastro:Array},setup(a){return(A,E)=>(s(),m(b,{titulo:"Modelos",link:"/admin/modelos/criar/","button-text":"Novo Modelo"},{default:o(()=>[t("div",k,[t("div",y,[t("table",x,[N,t("tbody",null,[(s(!0),n(h,null,_(a.modelos.data,e=>(s(),n("tr",{key:e.id},[t("td",null,l(e.nome),1),t("td",null,l(e.marca.nome),1),t("td",null,l(a.statusCadastro[e.status]),1),t("td",null,[r(i(c),{class:"btn btn-primary me-2",href:`/admin/modelos/${e.id}/editar`},{default:o(()=>[g,d(" Editar ")]),_:2},1032,["href"]),r(i(c),{class:"btn btn-danger",href:`/admin/modelos/${e.id}/excluir`},{default:o(()=>[v,d(" Excluir ")]),_:2},1032,["href"])])]))),128)),a.modelos.data.length==0?(s(),n("tr",C,V)):f("",!0)])])])]),r(p,{class:"mt-4",links:a.modelos.links},null,8,["links"])]),_:1}))}});export{L as default};

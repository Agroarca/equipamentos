import{d as u,c as m,w as s,o as a,a as t,k as o,m as _,t as c,f as n,h as i,u as r,n as d,F as f,l as h}from"./app-0aae82bc.js";import{A as p}from"./AdminLayout-daa1db91.js";import{_ as b}from"./Paginacao.vue_vue_type_script_setup_true_lang-28bd4f0a.js";import"./_plugin-vue_export-helper-98200d7c.js";import"./index-ac617c56.js";const k={class:"card card-default"},x={class:"card-body table-responsive p-0"},g={class:"table table-striped table-hover"},y=t("thead",null,[t("th",null,"Nome"),t("th",null,"Slug"),t("th")],-1),N=t("i",{class:"fa-solid fa-boxes-stacked pe-1"},null,-1),v=t("i",{class:"fas fa-pen-to-square pe-1"},null,-1),B=t("i",{class:"fas fa-eraser pe-1"},null,-1),L={key:0},V=t("td",{colspan:"3"}," Nenhum registro encontrado ",-1),$=[V],q=u({__name:"Inicio",props:{listas:Object},setup(l){return(C,E)=>(a(),m(p,{titulo:"Listas",link:"/admin/lista/criar/","button-text":"Nova Lista"},{default:s(()=>[t("div",k,[t("div",x,[t("table",g,[y,t("tbody",null,[(a(!0),o(f,null,_(l.listas.data,e=>(a(),o("tr",{key:e.id},[t("td",null,c(e.nome),1),t("td",null,c(e.slug),1),t("td",null,[n(r(d),{class:"btn btn-success me-2",href:`/admin/lista/${e.id}/produtos`},{default:s(()=>[N,i(" Produtos ")]),_:2},1032,["href"]),n(r(d),{class:"btn btn-primary me-2",href:`/admin/lista/${e.id}/editar`},{default:s(()=>[v,i(" Editar ")]),_:2},1032,["href"]),n(r(d),{class:"btn btn-danger",href:`/admin/lista/${e.id}/excluir`},{default:s(()=>[B,i(" Excluir ")]),_:2},1032,["href"])])]))),128)),l.listas.data.length==0?(a(),o("tr",L,$)):h("",!0)])])])]),n(b,{class:"mt-4",links:l.listas.links},null,8,["links"])]),_:1}))}});export{q as default};
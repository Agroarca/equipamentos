import{d as c,c as m,w as n,o as s,a as t,k as o,m as h,t as l,f as i,h as r,u as d,n as u,F as _,l as f}from"./app-fc9eabe0.js";import{A as p}from"./AdminLayout-7bebc362.js";import{_ as b}from"./Paginacao.vue_vue_type_script_setup_true_lang-af8c2ef8.js";import"./_plugin-vue_export-helper-e419db85.js";import"./index-ac617c56.js";const k={class:"card card-default"},y={class:"card-body table-responsive p-0"},g={class:"table table-striped table-hover"},q=t("thead",null,[t("th",null,"Título"),t("th",null,"Categoria"),t("th",null,"Status"),t("th")],-1),x=t("i",{class:"fas fa-pen-to-square pe-1"},null,-1),E=t("i",{class:"fas fa-eraser pe-1"},null,-1),N={key:0},v=t("td",{colspan:"3"}," Nenhum registro encontrado ",-1),B=[v],S=c({__name:"Inicio",props:{equipamentos:Object,statusEquipamentos:Array},setup(a){return(C,V)=>(s(),m(p,{titulo:"Equipamentos",link:"/admin/equipamentos/criar/","button-text":"Novo Equipamento"},{default:n(()=>[t("div",k,[t("div",y,[t("table",g,[q,t("tbody",null,[(s(!0),o(_,null,h(a.equipamentos.data,e=>(s(),o("tr",{key:e.id},[t("td",null,l(e.titulo),1),t("td",null,l(e.categoria.nome),1),t("td",null,l(a.statusEquipamentos[e.status]),1),t("td",null,[i(d(u),{class:"btn btn-primary me-2",href:`/admin/equipamentos/${e.id}/editar`},{default:n(()=>[x,r(" Editar ")]),_:2},1032,["href"]),i(d(u),{class:"btn btn-danger",href:`/admin/equipamentos/${e.id}/excluir`},{default:n(()=>[E,r(" Excluir ")]),_:2},1032,["href"])])]))),128)),a.equipamentos.data.length==0?(s(),o("tr",N,B)):f("",!0)])])])]),i(b,{class:"mt-4",links:a.equipamentos.links},null,8,["links"])]),_:1}))}});export{S as default};

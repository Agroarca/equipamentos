import{d as p,v as _,c as f,w as b,o as r,f as n,a as t,k as d,m as h,t as v,u as i,F as y,g as q}from"./app-2ead6ee3.js";import{_ as V}from"./FormError.vue_vue_type_script_setup_true_lang-c4e3e238.js";import{A as $}from"./AdminLayout-b37a1694.js";import{_ as k}from"./Navegacao.vue_vue_type_script_setup_true_lang-6fe7dc13.js";import{_ as x}from"./ValorCaracteristicas.vue_vue_type_script_setup_true_lang-d203c61f.js";import"./_plugin-vue_export-helper-c1a8c619.js";import"./index-ac617c56.js";const g=["onSubmit"],B={class:"card card-default"},C=t("div",{class:"card-header"},[t("h5",{class:"card-title"}," Características ")],-1),E={class:"card-body p-0"},S={class:"table table-striped table-hover"},j=t("thead",null,[t("td",null,"Nome"),t("td",null,"Valor")],-1),w=["for"],A=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),G=p({__name:"Caracteristicas",props:{caracteristicas:Object,equipamento:Object},setup(o){const l=o,c=[];l.caracteristicas.forEach(s=>{c[`carac-${s.id}`]=s.valor});const e=_(c);function m(){e.post(`/admin/equipamentos/${l.equipamento.id}/caracteristicas/salvar`)}return(s,N)=>(r(),f($,{titulo:"Editar Equipamento"},{default:b(()=>[n(k,{class:"mb-4 d-flex flex-roll justify-content-center",equipamento:o.equipamento,paginaAtual:"caracteristicas"},null,8,["equipamento"]),t("form",{onSubmit:q(m,["prevent"])},[t("div",B,[C,t("div",E,[t("table",S,[j,t("tbody",null,[(r(!0),d(y,null,h(o.caracteristicas,a=>(r(),d("tr",{key:a.id},[t("td",null,[t("label",{for:`caracteristica-${a.id}`},v(a.nome),9,w),n(V,{error:i(e).errors["carac-"+a.id]},null,8,["error"])]),t("td",null,[n(x,{modelValue:i(e)["carac-"+a.id],"onUpdate:modelValue":u=>i(e)["carac-"+a.id]=u,caracteristica:a},null,8,["modelValue","onUpdate:modelValue","caracteristica"])])]))),128))])])]),A])],40,g)]),_:1}))}});export{G as default};
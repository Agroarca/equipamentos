import{d as _,v as p,i as s,b as e,F as b,r as f,l as h,o as r,s as v,t as V,g as i,u as n}from"./app.ecc0daee.js";import{_ as y}from"./Valor.vue_vue_type_script_setup_true_lang.85f815f9.js";import{_ as x}from"./FormError.vue_vue_type_script_setup_true_lang.e8f3edb4.js";const N=["onSubmit"],S={class:"card card-default"},g=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Caracter\xEDsticas ")],-1),k={class:"card-body p-0"},q={class:"table table-striped table-hover"},B=e("thead",null,[e("td",null,"Nome"),e("td",null,"Valor")],-1),E=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),F=_({__name:"Inicio",props:{caracteristicas:Object,equipamento:Object},setup(l){const c=l,d=[];c.caracteristicas.forEach(o=>{d[`carac-${o.id}`]=o.valor});const a=p(d);function u(){a.post(route("admin.equipamentos.caracteristicas.salvar",c.equipamento.id))}return(o,$)=>(r(),s("form",{onSubmit:h(u,["prevent"])},[e("div",S,[g,e("div",k,[e("table",q,[B,e("tbody",null,[(r(!0),s(b,null,f(l.caracteristicas,t=>(r(),s("tr",{key:t.id},[e("td",null,[v(V(t.nome)+" ",1),i(x,{error:n(a).errors["carac-"+t.id]},null,8,["error"])]),e("td",null,[i(y,{modelValue:n(a)["carac-"+t.id],"onUpdate:modelValue":m=>n(a)["carac-"+t.id]=m,caracteristica:t},null,8,["modelValue","onUpdate:modelValue","caracteristica"])])]))),128))])])]),E])],40,N))}});export{F as _};
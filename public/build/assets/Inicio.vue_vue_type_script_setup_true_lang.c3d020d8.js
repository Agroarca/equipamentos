import{d as _,v as p,i as o,b as e,F as b,r as f,l as h,o as r,s as v,t as V,g as i,u as n}from"./app.4b95508f.js";import{_ as y}from"./Valor.vue_vue_type_script_setup_true_lang.393ab437.js";import{_ as x}from"./FormError.vue_vue_type_script_setup_true_lang.0757605a.js";const N=["onSubmit"],S={class:"card card-default"},$=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Caracter\xEDsticas ")],-1),g={class:"card-body p-0"},k={class:"table table-striped table-hover"},q=e("thead",null,[e("td",null,"Nome"),e("td",null,"Valor")],-1),B=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),F=_({__name:"Inicio",props:{caracteristicas:Object,equipamento:Object},setup(l){const c=l,d=[];c.caracteristicas.forEach(s=>{d[`carac-${s.id}`]=s.valor});const a=p(d);function m(){a.post(`/admin/equipamentos/${c.equipamento.id}/caracteristicas/salvar`)}return(s,E)=>(r(),o("form",{onSubmit:h(m,["prevent"])},[e("div",S,[$,e("div",g,[e("table",k,[q,e("tbody",null,[(r(!0),o(b,null,f(l.caracteristicas,t=>(r(),o("tr",{key:t.id},[e("td",null,[v(V(t.nome)+" ",1),i(x,{error:n(a).errors["carac-"+t.id]},null,8,["error"])]),e("td",null,[i(y,{modelValue:n(a)["carac-"+t.id],"onUpdate:modelValue":u=>n(a)["carac-"+t.id]=u,caracteristica:t},null,8,["modelValue","onUpdate:modelValue","caracteristica"])])]))),128))])])]),B])],40,N))}});export{F as _};

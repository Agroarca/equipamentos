import{d as _,v as p,k as s,a as e,F as f,m as b,g as h,o as r,h as v,t as V,f as i,u as n}from"./app-4cdccdc1.js";import{_ as y}from"./Valor.vue_vue_type_script_setup_true_lang-25846a33.js";import{_ as k}from"./FormError.vue_vue_type_script_setup_true_lang-dde173fa.js";const N=["onSubmit"],S={class:"card card-default"},$=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Características ")],-1),g={class:"card-body p-0"},q={class:"table table-striped table-hover"},x=e("thead",null,[e("td",null,"Nome"),e("td",null,"Valor")],-1),B=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),O=_({__name:"Inicio",props:{caracteristicas:Object,equipamento:Object},setup(l){const c=l,d=[];c.caracteristicas.forEach(o=>{d[`carac-${o.id}`]=o.valor});const a=p(d);function m(){a.post(`/admin/equipamentos/${c.equipamento.id}/caracteristicas/salvar`)}return(o,j)=>(r(),s("form",{onSubmit:h(m,["prevent"])},[e("div",S,[$,e("div",g,[e("table",q,[x,e("tbody",null,[(r(!0),s(f,null,b(l.caracteristicas,t=>(r(),s("tr",{key:t.id},[e("td",null,[v(V(t.nome)+" ",1),i(k,{error:n(a).errors["carac-"+t.id]},null,8,["error"])]),e("td",null,[i(y,{modelValue:n(a)["carac-"+t.id],"onUpdate:modelValue":u=>n(a)["carac-"+t.id]=u,caracteristica:t},null,8,["modelValue","onUpdate:modelValue","caracteristica"])])]))),128))])])]),B])],40,N))}});export{O as default};

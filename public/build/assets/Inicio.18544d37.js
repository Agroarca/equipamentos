import{u as _,o as r,h as s,b as e,F as p,r as f,k as b,l as h,t as v,f as d,e as l}from"./app.7abc4061.js";import V from"./Valor.aa01dea8.js";import{_ as y}from"./FormError.81e8b015.js";const k=["onSubmit"],N={class:"card card-default"},S=e("div",{class:"card-header"},[e("h5",null,"Caracter\xEDsticas")],-1),q={class:"card-body p-0"},x={class:"table table-stripped table-hover"},B=e("thead",null,[e("td",null,"Nome"),e("td",null,"Valor")],-1),F=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"},"Salvar")],-1),C={__name:"Inicio",props:["caracteristicas","equipamento"],setup(c){const n=c;let i=[];for(let o of n.caracteristicas)i["carac-"+o.id]=o.valor;const a=_(i);function u(){a.post(route("admin.equipamentos.caracteristicas.salvar",n.equipamento.id))}return(o,g)=>(r(),s("form",{onSubmit:b(u,["prevent"])},[e("div",N,[S,e("div",q,[e("table",x,[B,e("tbody",null,[(r(!0),s(p,null,f(c.caracteristicas,t=>(r(),s("tr",{key:t.id},[e("td",null,[h(v(t.nome)+" ",1),d(y,{error:l(a).errors["carac-"+t.id]},null,8,["error"])]),e("td",null,[d(V,{caracteristica:t,modelValue:l(a)["carac-"+t.id],"onUpdate:modelValue":m=>l(a)["carac-"+t.id]=m},null,8,["caracteristica","modelValue","onUpdate:modelValue"])])]))),128))])])]),F])],40,k))}};export{C as default};

import{v as m,a as c,w as d,o as l,b as o,d as u,e as _,u as a,f as p,k as f}from"./app.a897a209.js";import{A as b}from"./AdminLayout.66c9bba9.js";import{_ as v}from"./FormError.01fabe34.js";import"./_plugin-vue_export-helper.0e486f82.js";const h=["onSubmit"],x={class:"card card-default"},y={class:"card-body"},w={class:"mb-3"},k=o("label",{for:"nome"},"Nome",-1),B=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),E={__name:"Editar",props:["marca"],setup(s){const e=s,t=m({nome:e.marca.nome});function i(){t.post(route("admin.marcas.atualizar",e.marca.id))}return(M,r)=>(l(),c(b,{titulo:"Editar Marca"},{default:d(()=>[o("form",{onSubmit:f(i,["prevent"])},[o("div",x,[o("div",y,[o("div",w,[k,u(o("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=n=>a(t).nome=n),class:"form-control",type:"text",required:""},null,512),[[_,a(t).nome]]),p(v,{error:a(t).errors.nome},null,8,["error"])])]),B])],40,h)]),_:1}))}};export{E as default};
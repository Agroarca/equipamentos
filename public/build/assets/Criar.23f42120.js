import{v as n,a as d,w as m,o as l,b as t,d as u,e as _,u as e,f as p,k as f}from"./app.a897a209.js";import{A as b}from"./AdminLayout.66c9bba9.js";import{_ as v}from"./FormError.01fabe34.js";import"./_plugin-vue_export-helper.0e486f82.js";const h=["onSubmit"],x={class:"card card-default"},y={class:"card-body"},w={class:"mb-3"},N=t("label",{for:"nome"},"Nome",-1),k=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),M={__name:"Criar",props:["caracteristica"],setup(s){const r=s,o=n({nome:""});function i(){o.post(route("admin.categorias.caracteristicas.opcoes.salvar",[r.caracteristica.categoria_id,r.caracteristica.id]))}return(B,a)=>(l(),d(b,{titulo:"Nova Op\xE7\xE3o"},{default:m(()=>[t("form",{onSubmit:f(i,["prevent"])},[t("div",x,[t("div",y,[t("div",w,[N,u(t("input",{id:"nome","onUpdate:modelValue":a[0]||(a[0]=c=>e(o).nome=c),class:"form-control",type:"text",required:""},null,512),[[_,e(o).nome]]),p(v,{error:e(o).errors.nome},null,8,["error"])])]),k])],40,h)]),_:1}))}};export{M as default};
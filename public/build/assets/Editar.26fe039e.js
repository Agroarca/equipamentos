import{d as m,v as c,a as d,w as l,o as u,b as o,e as _,f as p,u as e,g as f,l as b}from"./app.7d4d69e1.js";import{A as v}from"./AdminLayout.1484c9d8.js";import{_ as h}from"./FormError.vue_vue_type_script_setup_true_lang.87f0c7df.js";import"./_plugin-vue_export-helper.7a053dd1.js";const x=["onSubmit"],y={class:"card card-default"},w={class:"card-body"},B={class:"mb-3"},M=o("label",{for:"nome"},"Nome",-1),N=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),E=m({__name:"Editar",props:{marca:Object},setup(s){const a=s,t=c({nome:a.marca.nome});function n(){t.post(`/admin/marcas/${a.marca.id}/atualizar`)}return(S,r)=>(u(),d(v,{titulo:"Editar Marca"},{default:l(()=>[o("form",{onSubmit:b(n,["prevent"])},[o("div",y,[o("div",w,[o("div",B,[M,_(o("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=i=>e(t).nome=i),class:"form-control",type:"text",required:""},null,512),[[p,e(t).nome]]),f(h,{error:e(t).errors.nome},null,8,["error"])])]),N])],40,x)]),_:1}))}});export{E as default};

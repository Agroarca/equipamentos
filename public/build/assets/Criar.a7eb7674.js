import{d as i,v as n,a as m,w as d,o as c,b as o,e as l,f as _,u as e,g as u,l as f}from"./app.f74497a6.js";import{A as p}from"./AdminLayout.66f03349.js";import{_ as b}from"./FormError.vue_vue_type_script_setup_true_lang.80747f52.js";import"./_plugin-vue_export-helper.541f566a.js";import"./index.c57ba517.js";const v=["onSubmit"],h={class:"card card-default"},x={class:"card-body"},y={class:"mb-3"},w=o("label",{for:"nome"},"Nome",-1),C=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),g=i({__name:"Criar",setup(N){const t=n({nome:""});function r(){t.post("/admin/marcas/salvar")}return(B,s)=>(c(),m(p,{titulo:"Nova Marca"},{default:d(()=>[o("form",{onSubmit:f(r,["prevent"])},[o("div",h,[o("div",x,[o("div",y,[w,l(o("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=a=>e(t).nome=a),class:"form-control",type:"text",required:""},null,512),[[_,e(t).nome]]),u(b,{error:e(t).errors.nome},null,8,["error"])])]),C])],40,v)]),_:1}))}});export{g as default};

import{d as n,v as i,a as m,w as d,o as c,b as o,e as l,f as _,u as e,g as u,l as f}from"./app.93de07a5.js";import{A as p}from"./AdminLayout.7f7fa392.js";import{_ as b}from"./FormError.vue_vue_type_script_setup_true_lang.5cb7937b.js";import"./_plugin-vue_export-helper.0ec2462a.js";const v=["onSubmit"],h={class:"card card-default"},x={class:"card-body"},y={class:"mb-3"},w=o("label",{for:"nome"},"Nome",-1),C=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),S=n({__name:"Criar",setup(N){const t=i({nome:""});function r(){t.post("/admin/marcas/salvar")}return(B,s)=>(c(),m(p,{titulo:"Nova Marca"},{default:d(()=>[o("form",{onSubmit:f(r,["prevent"])},[o("div",h,[o("div",x,[o("div",y,[w,l(o("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=a=>e(t).nome=a),class:"form-control",type:"text",required:""},null,512),[[_,e(t).nome]]),u(b,{error:e(t).errors.nome},null,8,["error"])])]),C])],40,v)]),_:1}))}});export{S as default};

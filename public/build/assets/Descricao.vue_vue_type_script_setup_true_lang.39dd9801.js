import{d,v as n,i as l,b as a,g as u,u as c,o as m}from"./app.f64d2e1f.js";import{_ as p}from"./Editor.vue_vue_type_script_setup_true_lang.b4e7f4dd.js";const _={class:"card card-default"},f=a("div",{class:"card-header"},[a("h5",{class:"card-title"}," Descri\xE7\xE3o ")],-1),b={class:"card-body p-0"},V=d({__name:"Descricao",props:{equipamento:Object},setup(t){const o=t,e=n({descricao:o.equipamento.descricao});function r(){e.post(`/admin/equipamentos/${o.equipamento.id}/atualizardescricao`)}return(x,s)=>(m(),l("div",_,[f,a("div",b,[u(p,{modelValue:c(e).descricao,"onUpdate:modelValue":s[0]||(s[0]=i=>c(e).descricao=i),class:"descricao"},null,8,["modelValue"])]),a("div",{class:"card-footer"},[a("button",{type:"button",class:"btn btn-primary",onClick:r}," Atualizar Descri\xE7\xE3o ")])]))}});export{V as _};

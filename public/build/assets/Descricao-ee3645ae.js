import{d,v as n,k as l,a,f as u,u as c,o as m}from"./app-de2de5be.js";import{_ as p}from"./Editor.vue_vue_type_script_setup_true_lang-62caa79a.js";const _={class:"card card-default"},f=a("div",{class:"card-header"},[a("h5",{class:"card-title"}," Descrição ")],-1),b={class:"card-body p-0"},k=d({__name:"Descricao",props:{equipamento:Object},setup(t){const o=t,e=n({descricao:o.equipamento.descricao});function r(){e.post(`/admin/equipamentos/${o.equipamento.id}/atualizardescricao`)}return(v,s)=>(m(),l("div",_,[f,a("div",b,[u(p,{modelValue:c(e).descricao,"onUpdate:modelValue":s[0]||(s[0]=i=>c(e).descricao=i),class:"descricao"},null,8,["modelValue"])]),a("div",{class:"card-footer"},[a("button",{type:"button",class:"btn btn-primary",onClick:r}," Atualizar Descrição ")])]))}});export{k as default};

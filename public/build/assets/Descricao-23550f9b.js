import{d,v as l,c as m,w as u,o as p,f as c,a,u as i}from"./app-27f9bc00.js";import{_ as f}from"./Editor.vue_vue_type_script_setup_true_lang-19cf311a.js";import{A as _}from"./AdminLayout-b7945028.js";import{_ as q}from"./Navegacao.vue_vue_type_script_setup_true_lang-4c02d8eb.js";import"./_plugin-vue_export-helper-d695034f.js";import"./index-ac617c56.js";const b={class:"card card-default"},h=a("div",{class:"card-header"},[a("h5",{for:"descricao",class:"card-title"}," Descrição ")],-1),v={class:"card-body p-0"},B=d({__name:"Descricao",props:{equipamento:Object},setup(o){const t=o,e=l({descricao:t.equipamento.descricao});function r(){e.post(`/admin/equipamentos/${t.equipamento.id}/atualizardescricao`)}return(x,s)=>(p(),m(_,{titulo:"Editar descrição Equipamento"},{default:u(()=>[c(q,{class:"mb-4 d-flex flex-roll justify-content-center",equipamento:o.equipamento,paginaAtual:"descricao"},null,8,["equipamento"]),a("div",b,[h,a("div",v,[c(f,{modelValue:i(e).descricao,"onUpdate:modelValue":s[0]||(s[0]=n=>i(e).descricao=n),name:"descricao",class:"descricao"},null,8,["modelValue"])]),a("div",{class:"card-footer"},[a("button",{type:"button",class:"btn btn-primary",onClick:r}," Atualizar Descrição ")])])]),_:1}))}});export{B as default};

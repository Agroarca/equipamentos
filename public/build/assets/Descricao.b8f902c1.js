import{d as m,C as l,c as u,w as d,o as p,a,h as s,u as t}from"./app.8ded473b.js";import{_}from"./Editor.vue_vue_type_script_setup_true_lang.f9325292.js";import{_ as f}from"./SiteLayout.vue_vue_type_script_setup_true_lang.82a1941e.js";import{_ as x}from"./Navegacao.vue_vue_type_script_setup_true_lang.731199f8.js";import{_ as q}from"./FormError.vue_vue_type_script_setup_true_lang.ca353cf1.js";import"./_plugin-vue_export-helper.e79ab7af.js";import"./index.c57ba517.js";const C={class:"container-600"},b=a("h1",null," Descri\xE7\xE3o ",-1),w=m({__name:"Descricao",props:{equipamento:Object},setup(e){const r=e,o=l({descricao:r.equipamento.descricao});function c(){o.post(`/equipamento/${r.equipamento.id}/descricao/salvar`)}return(v,i)=>(p(),u(f,{titulo:"Cadastrar Descri\xE7\xE3o"},{default:d(()=>[a("div",C,[s(x,{class:"mb-3",passoAtual:3,passoCadastro:e.equipamento.passo_cadastro,equipamento:e.equipamento},null,8,["passoCadastro","equipamento"]),b,a("div",null,[s(_,{modelValue:t(o).descricao,"onUpdate:modelValue":i[0]||(i[0]=n=>t(o).descricao=n),class:"descricao"},null,8,["modelValue"]),s(q,{error:t(o).errors.descricao},null,8,["error"])]),a("div",null,[a("button",{type:"button",class:"btn btn-primary",onClick:c}," Atualizar Descri\xE7\xE3o ")])])]),_:1}))}});export{w as default};

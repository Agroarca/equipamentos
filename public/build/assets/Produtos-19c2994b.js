import{d as m,v as u,c,w as l,o as p,a as o,f as s,u as e,g as f}from"./app-fc9eabe0.js";import{A as _}from"./AdminLayout-7bebc362.js";import{_ as b}from"./SelectAjax.vue_vue_type_script_setup_true_lang-01544d92.js";import{_ as h}from"./ListaProdutos.vue_vue_type_script_setup_true_lang-015aaff7.js";import{_ as q}from"./FormError.vue_vue_type_script_setup_true_lang-4e296645.js";import"./_plugin-vue_export-helper-e419db85.js";import"./index-ac617c56.js";const v=["onSubmit"],V={class:"card card-default mb-4"},y={class:"card-body"},$=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Adicionar ")],-1),N=m({__name:"Produtos",props:{lista:Object,options:Object,produtos:Object},setup(t){const r=t,i=u({equipamento_id:""});function n(){i.post(`/admin/lista/${r.lista.id}/adicionar`)}return(j,a)=>(p(),c(_,{titulo:t.lista.nome},{default:l(()=>[o("form",{onSubmit:f(n,["prevent"])},[o("div",V,[o("div",y,[o("div",null,[s(b,{modelValue:e(i).equipamento_id,"onUpdate:modelValue":a[0]||(a[0]=d=>e(i).equipamento_id=d),href:"/admin/equipamentos/pesquisar",options:t.options},null,8,["modelValue","options"]),s(q,{error:e(i).errors.equipamento_id},null,8,["error"])])]),$])],40,v),s(h,{produtos:t.produtos},null,8,["produtos"])]),_:1},8,["titulo"]))}});export{N as default};
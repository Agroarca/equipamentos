import{d as m,C as u,c,w as l,o as p,a as o,h as i,u as e,G as f}from"./app.8ded473b.js";import{A as _}from"./AdminLayout.b82d1123.js";import{_ as b}from"./SelectAjax.vue_vue_type_script_setup_true_lang.751315d6.js";import{_ as h}from"./ListaProdutos.vue_vue_type_script_setup_true_lang.025b257f.js";import{_ as q}from"./FormError.vue_vue_type_script_setup_true_lang.ca353cf1.js";import"./_plugin-vue_export-helper.e79ab7af.js";import"./index.c57ba517.js";const v=["onSubmit"],V={class:"card card-default mb-4"},y={class:"card-body"},$=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Adicionar ")],-1),N=m({__name:"Produtos",props:{lista:Object,options:Object,produtos:Object},setup(t){const r=t,s=u({equipamento_id:""});function n(){s.post(`/admin/lista/${r.lista.id}/adicionar`)}return(j,a)=>(p(),c(_,{titulo:t.lista.nome},{default:l(()=>[o("form",{onSubmit:f(n,["prevent"])},[o("div",V,[o("div",y,[o("div",null,[i(b,{modelValue:e(s).equipamento_id,"onUpdate:modelValue":a[0]||(a[0]=d=>e(s).equipamento_id=d),href:"/admin/equipamentos/pesquisar",options:t.options},null,8,["modelValue","options"]),i(q,{error:e(s).errors.equipamento_id},null,8,["error"])])]),$])],40,v),i(h,{produtos:t.produtos},null,8,["produtos"])]),_:1},8,["titulo"]))}});export{N as default};

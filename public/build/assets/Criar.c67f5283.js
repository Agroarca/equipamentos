import{d as n,v as d,a as m,w as l,o as p,b as t,e as u,f as _,u as e,g as f,l as b}from"./app.f74497a6.js";import{A as v}from"./AdminLayout.66f03349.js";import{_ as h}from"./FormError.vue_vue_type_script_setup_true_lang.80747f52.js";import"./_plugin-vue_export-helper.541f566a.js";import"./index.c57ba517.js";const x=["onSubmit"],y={class:"card card-default"},w={class:"card-body"},C={class:"mb-3"},N=t("label",{for:"nome"},"Nome",-1),g=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),M=n({__name:"Criar",props:{caracteristica:Object},setup(s){const a=s,o=d({nome:""});function i(){o.post(`/admin/categorias/${a.caracteristica.categoria_id}/caracteristicas/${a.caracteristica.id}/opcoes/salvar`)}return(B,r)=>(p(),m(v,{titulo:"Nova Op\xE7\xE3o"},{default:l(()=>[t("form",{onSubmit:b(i,["prevent"])},[t("div",y,[t("div",w,[t("div",C,[N,u(t("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=c=>e(o).nome=c),class:"form-control",type:"text",required:""},null,512),[[_,e(o).nome]]),f(h,{error:e(o).errors.nome},null,8,["error"])])]),g])],40,x)]),_:1}))}});export{M as default};
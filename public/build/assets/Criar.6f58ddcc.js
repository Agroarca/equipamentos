import{d as n,C as d,c as m,w as l,o as p,a as t,D as u,E as _,u as e,h as f,G as b}from"./app.eed770cd.js";import{A as v}from"./AdminLayout.c1e4d170.js";import{_ as h}from"./FormError.vue_vue_type_script_setup_true_lang.dd6e1467.js";import"./_plugin-vue_export-helper.c11c3f1f.js";import"./index.c57ba517.js";const x=["onSubmit"],y={class:"card card-default"},C={class:"card-body"},w={class:"mb-3"},N=t("label",{for:"nome"},"Nome",-1),B=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),D=n({__name:"Criar",props:{caracteristica:Object},setup(r){const a=r,o=d({nome:""});function i(){o.post(`/admin/categorias/${a.caracteristica.categoria_id}/caracteristicas/${a.caracteristica.id}/opcoes/salvar`)}return(E,s)=>(p(),m(v,{titulo:"Nova Op\xE7\xE3o"},{default:l(()=>[t("form",{onSubmit:b(i,["prevent"])},[t("div",y,[t("div",C,[t("div",w,[N,u(t("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=c=>e(o).nome=c),class:"form-control",type:"text",required:""},null,512),[[_,e(o).nome]]),f(h,{error:e(o).errors.nome},null,8,["error"])])]),B])],40,x)]),_:1}))}});export{D as default};
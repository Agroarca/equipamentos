import{d as n,v as d,a as m,w as l,o as p,b as t,e as u,f as _,u as e,g as f,l as b}from"./app.5b090f15.js";import{A as v}from"./AdminLayout.92fe1d95.js";import{_ as h}from"./FormError.vue_vue_type_script_setup_true_lang.a77c093c.js";import"./_plugin-vue_export-helper.c3f97864.js";const x=["onSubmit"],y={class:"card card-default"},w={class:"card-body"},C={class:"mb-3"},N=t("label",{for:"nome"},"Nome",-1),g=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),E=n({__name:"Criar",props:{caracteristica:Object},setup(r){const a=r,o=d({nome:""});function i(){o.post(`/admin/categorias/${a.caracteristica.categoria_id}/caracteristicas/${a.caracteristica.id}/opcoes/salvar`)}return(B,s)=>(p(),m(v,{titulo:"Nova Op\xE7\xE3o"},{default:l(()=>[t("form",{onSubmit:b(i,["prevent"])},[t("div",y,[t("div",w,[t("div",C,[N,u(t("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=c=>e(o).nome=c),class:"form-control",type:"text",required:""},null,512),[[_,e(o).nome]]),f(h,{error:e(o).errors.nome},null,8,["error"])])]),g])],40,x)]),_:1}))}});export{E as default};

import{d as _,v as p,a as f,w as v,o as a,b as t,e as i,f as b,u as o,g as l,h as A,i as d,r as S,t as h,F as C,l as y}from"./app.b6a28664.js";import{A as T}from"./AdminLayout.ec760955.js";import{_ as u}from"./FormError.vue_vue_type_script_setup_true_lang.57e77df3.js";import"./_plugin-vue_export-helper.222d5f94.js";import"./index.c57ba517.js";const D=["onSubmit"],k={class:"card card-default"},w={class:"card-body"},x={class:"mb-3"},B=t("label",{for:"nome"},"Nome",-1),M={class:"mb-3"},N=t("label",{for:"status"},"Status",-1),O=["value"],R=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),E=_({__name:"Criar",props:{statusCadastro:Array},setup(m){const s=p({nome:"",status:0});function c(){s.post("/admin/marcas/salvar")}return(V,r)=>(a(),f(T,{titulo:"Nova Marca"},{default:v(()=>[t("form",{onSubmit:y(c,["prevent"])},[t("div",k,[t("div",w,[t("div",x,[B,i(t("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=e=>o(s).nome=e),class:"form-control",type:"text",required:""},null,512),[[b,o(s).nome]]),l(u,{error:o(s).errors.nome},null,8,["error"])]),t("div",M,[N,i(t("select",{id:"status","onUpdate:modelValue":r[1]||(r[1]=e=>o(s).status=e),class:"form-select",required:""},[(a(!0),d(C,null,S(m.statusCadastro,(e,n)=>(a(),d("option",{key:n,value:n},h(e),9,O))),128))],512),[[A,o(s).status]]),l(u,{error:o(s).errors.status},null,8,["error"])])]),R])],40,D)]),_:1}))}});export{E as default};

import{d as _,v as p,c as f,w as b,o as i,a as t,b as d,e as v,u as o,f as a,p as S,k as m,m as h,t as A,F as C,g as y}from"./app-27f9bc00.js";import{A as T}from"./AdminLayout-b7945028.js";import{_ as l}from"./FormError.vue_vue_type_script_setup_true_lang-d0c6606d.js";import{_ as V}from"./SelectAjax.vue_vue_type_script_setup_true_lang-21de3d3e.js";import"./_plugin-vue_export-helper-d695034f.js";import"./index-ac617c56.js";const D=["onSubmit"],k={class:"card card-default"},B={class:"card-body"},M={class:"mb-3"},U=t("label",{for:"nome"},"Nome",-1),w={class:"mb-3"},x=t("label",{for:"marca_id"},"Marca",-1),N={class:"mb-3"},O=t("label",{for:"status"},"Status",-1),R=["value"],g=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),G=_({__name:"Criar",props:{statusCadastro:Array},setup(u){const e=p({nome:"",marca_id:"",status:0});function c(){e.post("/admin/modelos/salvar")}return(F,r)=>(i(),f(T,{titulo:"Novo Modelo"},{default:b(()=>[t("form",{onSubmit:y(c,["prevent"])},[t("div",k,[t("div",B,[t("div",M,[U,d(t("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=s=>o(e).nome=s),class:"form-control",type:"text",required:""},null,512),[[v,o(e).nome]]),a(l,{error:o(e).errors.nome},null,8,["error"])]),t("div",w,[x,a(V,{modelValue:o(e).marca_id,"onUpdate:modelValue":r[1]||(r[1]=s=>o(e).marca_id=s),placeholder:"Selecione uma marca",href:"/admin/marcas/pesquisar",preBusca:!0},null,8,["modelValue"]),a(l,{error:o(e).errors.marca_id},null,8,["error"])]),t("div",N,[O,d(t("select",{id:"status","onUpdate:modelValue":r[2]||(r[2]=s=>o(e).status=s),class:"form-select",required:""},[(i(!0),m(C,null,h(u.statusCadastro,(s,n)=>(i(),m("option",{key:n,value:n},A(s),9,R))),128))],512),[[S,o(e).status]]),a(l,{error:o(e).errors.status},null,8,["error"])])]),g])],40,D)]),_:1}))}});export{G as default};

import{d as b,v as A,c as S,w as h,o as a,a as t,b as n,e as C,u as o,f as d,p as u,k as i,m as _,t as f,F as p,g as y}from"./app-0aae82bc.js";import{A as T}from"./AdminLayout-daa1db91.js";import{_ as l}from"./FormError.vue_vue_type_script_setup_true_lang-2b57c8d5.js";import"./_plugin-vue_export-helper-98200d7c.js";import"./index-ac617c56.js";const k=["onSubmit"],D={class:"card card-default"},M={class:"card-body"},O={class:"mb-3"},U=t("label",{for:"nome"},"Nome",-1),V={class:"mb-3"},w=t("label",{for:"marca_id"},"Marca",-1),x=["value"],B={class:"mb-3"},N=t("label",{for:"status"},"Status",-1),R=["value"],g=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),z=b({__name:"Criar",props:{marcas:Object,statusCadastro:Array},setup(m){const s=A({nome:"",marca_id:"",status:0});function v(){s.post("/admin/modelos/salvar")}return(F,r)=>(a(),S(T,{titulo:"Novo Modelo"},{default:h(()=>[t("form",{onSubmit:y(v,["prevent"])},[t("div",D,[t("div",M,[t("div",O,[U,n(t("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=e=>o(s).nome=e),class:"form-control",type:"text",required:""},null,512),[[C,o(s).nome]]),d(l,{error:o(s).errors.nome},null,8,["error"])]),t("div",V,[w,n(t("select",{id:"marca_id","onUpdate:modelValue":r[1]||(r[1]=e=>o(s).marca_id=e),name:"marca_id",class:"form-select",required:""},[(a(!0),i(p,null,_(m.marcas,e=>(a(),i("option",{key:e.id,value:e.id},f(e.nome),9,x))),128))],512),[[u,o(s).marca_id]]),d(l,{error:o(s).errors.marca_id},null,8,["error"])]),t("div",B,[N,n(t("select",{id:"status","onUpdate:modelValue":r[2]||(r[2]=e=>o(s).status=e),class:"form-select",required:""},[(a(!0),i(p,null,_(m.statusCadastro,(e,c)=>(a(),i("option",{key:c,value:c},f(e),9,R))),128))],512),[[u,o(s).status]]),d(l,{error:o(s).errors.status},null,8,["error"])])]),g])],40,k)]),_:1}))}});export{z as default};
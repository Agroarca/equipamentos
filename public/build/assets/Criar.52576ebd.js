import{d as b,C as h,c as A,w as C,o as a,a as t,D as n,E as S,u as o,h as d,H as u,g as i,j as _,t as f,F as p,G as y}from"./app.4327bc59.js";import{A as D}from"./AdminLayout.b046efdf.js";import{_ as l}from"./FormError.vue_vue_type_script_setup_true_lang.79e7a334.js";import"./_plugin-vue_export-helper.d1202830.js";import"./index.c57ba517.js";const T=["onSubmit"],k={class:"card card-default"},M={class:"card-body"},O={class:"mb-3"},U=t("label",{for:"nome"},"Nome",-1),V={class:"mb-3"},w=t("label",{for:"marca_id"},"Marca",-1),x=["value"],B={class:"mb-3"},N=t("label",{for:"status"},"Status",-1),R=["value"],g=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),H=b({__name:"Criar",props:{marcas:Object,statusCadastro:Array},setup(m){const e=h({nome:"",marca_id:"",status:0});function v(){e.post("/admin/modelos/salvar")}return(j,r)=>(a(),A(D,{titulo:"Novo Modelo"},{default:C(()=>[t("form",{onSubmit:y(v,["prevent"])},[t("div",k,[t("div",M,[t("div",O,[U,n(t("input",{id:"nome","onUpdate:modelValue":r[0]||(r[0]=s=>o(e).nome=s),class:"form-control",type:"text",required:""},null,512),[[S,o(e).nome]]),d(l,{error:o(e).errors.nome},null,8,["error"])]),t("div",V,[w,n(t("select",{id:"marca_id","onUpdate:modelValue":r[1]||(r[1]=s=>o(e).marca_id=s),name:"marca_id",class:"form-select",required:""},[(a(!0),i(p,null,_(m.marcas,s=>(a(),i("option",{key:s.id,value:s.id},f(s.nome),9,x))),128))],512),[[u,o(e).marca_id]]),d(l,{error:o(e).errors.marca_id},null,8,["error"])]),t("div",B,[N,n(t("select",{id:"status","onUpdate:modelValue":r[2]||(r[2]=s=>o(e).status=s),class:"form-select",required:""},[(a(!0),i(p,null,_(m.statusCadastro,(s,c)=>(a(),i("option",{key:c,value:c},f(s),9,R))),128))],512),[[u,o(e).status]]),d(l,{error:o(e).errors.status},null,8,["error"])])]),g])],40,T)]),_:1}))}});export{H as default};

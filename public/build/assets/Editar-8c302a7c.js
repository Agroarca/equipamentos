import{d as _,v as f,c as b,w as v,o as n,a as t,b as l,e as h,u as a,f as m,p as y,k as c,m as S,t as k,F as w,g as x}from"./app-b9eab184.js";import{A as B}from"./AdminLayout-58947122.js";import{_ as u}from"./FormError.vue_vue_type_script_setup_true_lang-8975cccc.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";const C=["onSubmit"],M={class:"card card-default"},V={class:"card-body"},g={class:"mb-3"},A=t("label",{for:"nome"},"Nome",-1),E={class:"mb-3"},N=t("label",{for:"status"},"Status",-1),q=["value"],D=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),O=_({__name:"Editar",props:{marca:Object,statusCadastro:Array},setup(i){const r=i,s=f({nome:r.marca.nome,status:r.marca.status});function p(){s.post(`/admin/marcas/${r.marca.id}/atualizar`)}return(F,o)=>(n(),b(B,{titulo:"Editar Marca"},{default:v(()=>[t("form",{onSubmit:x(p,["prevent"])},[t("div",M,[t("div",V,[t("div",g,[A,l(t("input",{id:"nome","onUpdate:modelValue":o[0]||(o[0]=e=>a(s).nome=e),class:"form-control",type:"text",required:""},null,512),[[h,a(s).nome]]),m(u,{error:a(s).errors.nome},null,8,["error"])]),t("div",E,[N,l(t("select",{id:"status","onUpdate:modelValue":o[1]||(o[1]=e=>a(s).status=e),class:"form-select",required:""},[(n(!0),c(w,null,S(i.statusCadastro,(e,d)=>(n(),c("option",{key:d,value:d},k(e),9,q))),128))],512),[[y,a(s).status]]),m(u,{error:a(s).errors.status},null,8,["error"])])]),D])],40,C)]),_:1}))}});export{O as default};
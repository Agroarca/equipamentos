import{d as p,C as f,c as b,w as v,o as n,a as t,D as l,E as h,u as a,h as c,H as y,g as m,j as S,t as C,F as k,G as w}from"./app.8ded473b.js";import{A as x}from"./AdminLayout.b82d1123.js";import{_ as u}from"./FormError.vue_vue_type_script_setup_true_lang.ca353cf1.js";import"./_plugin-vue_export-helper.e79ab7af.js";import"./index.c57ba517.js";const B=["onSubmit"],E={class:"card card-default"},M={class:"card-body"},V={class:"mb-3"},g=t("label",{for:"nome"},"Nome",-1),A={class:"mb-3"},D=t("label",{for:"status"},"Status",-1),N=["value"],j=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),G=p({__name:"Editar",props:{marca:Object,statusCadastro:Array},setup(i){const r=i,s=f({nome:r.marca.nome,status:r.marca.status});function _(){s.post(`/admin/marcas/${r.marca.id}/atualizar`)}return(q,o)=>(n(),b(x,{titulo:"Editar Marca"},{default:v(()=>[t("form",{onSubmit:w(_,["prevent"])},[t("div",E,[t("div",M,[t("div",V,[g,l(t("input",{id:"nome","onUpdate:modelValue":o[0]||(o[0]=e=>a(s).nome=e),class:"form-control",type:"text",required:""},null,512),[[h,a(s).nome]]),c(u,{error:a(s).errors.nome},null,8,["error"])]),t("div",A,[D,l(t("select",{id:"status","onUpdate:modelValue":o[1]||(o[1]=e=>a(s).status=e),class:"form-select",required:""},[(n(!0),m(k,null,S(i.statusCadastro,(e,d)=>(n(),m("option",{key:d,value:d},C(e),9,N))),128))],512),[[y,a(s).status]]),c(u,{error:a(s).errors.status},null,8,["error"])])]),j])],40,B)]),_:1}))}});export{G as default};

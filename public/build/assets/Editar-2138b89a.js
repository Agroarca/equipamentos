import{d as p,v as f,c as b,w as v,o as i,a as o,b as c,e as h,u as t,f as d,p as y,k as u,m as V,t as S,F as k,g as B}from"./app-b9eab184.js";import{A as M}from"./AdminLayout-58947122.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang-8975cccc.js";import{_ as w}from"./SelectAjax.vue_vue_type_script_setup_true_lang-ae4f7468.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";const x=["onSubmit"],C={class:"card card-default"},g={class:"card-body"},q={class:"mb-3"},A=o("label",{for:"nome"},"Nome",-1),E={class:"mb-3"},N=o("label",{for:"marca_id"},"Marca",-1),U={class:"mb-3"},$=o("label",{for:"status"},"Status",-1),D=["value"],F=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),I=p({__name:"Editar",props:{modelo:Object,statusCadastro:Array},setup(l){const r=l,e=f({nome:r.modelo.nome,marca_id:r.modelo.marca_id,status:r.modelo.status});function _(){e.post(`/admin/modelos/${r.modelo.id}/atualizar`)}return(L,a)=>(i(),b(M,{titulo:"Editar Modelo"},{default:v(()=>[o("form",{onSubmit:B(_,["prevent"])},[o("div",C,[o("div",g,[o("div",q,[A,c(o("input",{id:"nome","onUpdate:modelValue":a[0]||(a[0]=s=>t(e).nome=s),class:"form-control",type:"text",required:""},null,512),[[h,t(e).nome]]),d(m,{error:t(e).errors.nome},null,8,["error"])]),o("div",E,[N,d(w,{modelValue:t(e).marca_id,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).marca_id=s),placeholder:l.modelo.marca.nome,href:"/admin/marcas/pesquisar",preBusca:!0},null,8,["modelValue","placeholder"]),d(m,{error:t(e).errors.marca_id},null,8,["error"])]),o("div",U,[$,c(o("select",{id:"status","onUpdate:modelValue":a[2]||(a[2]=s=>t(e).status=s),class:"form-select",required:""},[(i(!0),u(k,null,V(l.statusCadastro,(s,n)=>(i(),u("option",{key:n,value:n},S(s),9,D))),128))],512),[[y,t(e).status]]),d(m,{error:t(e).errors.status},null,8,["error"])])]),F])],40,x)]),_:1}))}});export{I as default};
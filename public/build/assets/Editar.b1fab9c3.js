import{d as _,v as p,a as f,w as b,o as i,b as e,e as n,f as v,u as r,g as m,h,i as l,r as y,t as x,F as M,l as S}from"./app.1b3c5d70.js";import{A as k}from"./AdminLayout.1305b7ad.js";import{_ as c}from"./FormError.vue_vue_type_script_setup_true_lang.1e2e7dc3.js";import"./_plugin-vue_export-helper.61ff1561.js";import"./index.c57ba517.js";const w=["onSubmit"],B={class:"card card-default"},V={class:"card-body"},g={class:"mb-3"},E=e("label",{for:"nome"},"Nome",-1),N={class:"mb-3"},j=e("label",{for:"marca_id"},"Marca",-1),q=["value"],A=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),$=_({__name:"Editar",props:{modelo:Object,marcas:Object},setup(d){const s=d,o=p({nome:s.modelo.nome,marca_id:s.modelo.marca_id});function u(){o.post(`/admin/modelos/${s.modelo.id}/atualizar`)}return(C,a)=>(i(),f(k,{titulo:"Editar Modelo"},{default:b(()=>[e("form",{onSubmit:S(u,["prevent"])},[e("div",B,[e("div",V,[e("div",g,[E,n(e("input",{id:"nome","onUpdate:modelValue":a[0]||(a[0]=t=>r(o).nome=t),class:"form-control",type:"text",required:""},null,512),[[v,r(o).nome]]),m(c,{error:r(o).errors.nome},null,8,["error"])]),e("div",N,[j,n(e("select",{id:"marca_id","onUpdate:modelValue":a[1]||(a[1]=t=>r(o).marca_id=t),name:"marca_id",class:"form-select",required:""},[(i(!0),l(M,null,y(d.marcas,t=>(i(),l("option",{key:t.id,value:t.id},x(t.nome),9,q))),128))],512),[[h,r(o).marca_id]]),m(c,{error:r(o).errors.marca_id},null,8,["error"])])]),A])],40,w)]),_:1}))}});export{$ as default};
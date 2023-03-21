import{d as p,m as f,n as _,v as b,a as q,w as v,o as x,b as o,l as y,e as l,f as n,u as e,g as i}from"./app.b6a28664.js";import{A as V}from"./AdminLayout.ec760955.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang.57e77df3.js";import{_ as h}from"./Inicio.vue_vue_type_script_setup_true_lang.ffc57421.js";import{_ as g}from"./Inicio.vue_vue_type_script_setup_true_lang.3cd797d2.js";import{_ as M}from"./Descricao.vue_vue_type_script_setup_true_lang.aa2298cc.js";import{M as U}from"./InputMask.b308c77b.js";import"./_plugin-vue_export-helper.222d5f94.js";import"./index.c57ba517.js";import"./Valor.vue_vue_type_script_setup_true_lang.d98df5a1.js";import"./Modal.vue_vue_type_script_setup_true_lang.c34ab606.js";const $={class:"equipamento"},k=["onSubmit"],w={class:"card card-default"},E={class:"card-body"},A={class:"mb-3"},B=o("label",{for:"titulo"},"T\xEDtulo",-1),C={class:"mb-3"},S=o("label",{for:"valor"},"Valor",-1),j={class:"mb-3"},D=o("label",{for:"ano"},"Ano",-1),N={class:"mb-3"},O=o("label",{for:"marca_id"},"Marca",-1),T={class:"mb-3"},z=o("label",{for:"marca_id"},"Modelo",-1),L={class:"mb-3"},F=o("label",{for:"categoria"},"Categoria",-1),G=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),to=p({__name:"Editar",props:{equipamento:Object,caracteristicas:Object},setup(d){const s=d,u=f(null);_(()=>{U.preco(u.value)});const t=b({id:s.equipamento.id,titulo:s.equipamento.titulo,valor:s.equipamento.valor,ano:s.equipamento.ano,marca:s.equipamento.modelo.marca.nome,modelo:s.equipamento.modelo.nome,categoria:s.equipamento.categoria.nome});function c(){t.post(`/admin/equipamentos/${s.equipamento.id}/atualizar`)}return(H,a)=>(x(),q(V,{titulo:"Editar Equipamento"},{default:v(()=>[o("div",$,[o("form",{onSubmit:y(c,["prevent"])},[o("div",w,[o("div",E,[o("div",A,[B,l(o("input",{id:"titulo","onUpdate:modelValue":a[0]||(a[0]=r=>e(t).titulo=r),class:"form-control",type:"text",required:""},null,512),[[n,e(t).titulo]]),i(m,{error:e(t).errors.titulo},null,8,["error"])]),o("div",C,[S,l(o("input",{id:"valor",ref_key:"elValor",ref:u,"onUpdate:modelValue":a[1]||(a[1]=r=>e(t).valor=r),class:"form-control",type:"text",required:""},null,512),[[n,e(t).valor]]),i(m,{error:e(t).errors.valor},null,8,["error"])]),o("div",j,[D,l(o("input",{id:"ano","onUpdate:modelValue":a[2]||(a[2]=r=>e(t).ano=r),class:"form-control",type:"text",required:""},null,512),[[n,e(t).ano]]),i(m,{error:e(t).errors.ano},null,8,["error"])]),o("div",N,[O,l(o("input",{id:"ano","onUpdate:modelValue":a[3]||(a[3]=r=>e(t).marca=r),class:"form-control",type:"text",disabled:""},null,512),[[n,e(t).marca]]),i(m,{error:e(t).errors.marca},null,8,["error"])]),o("div",T,[z,l(o("input",{id:"ano","onUpdate:modelValue":a[4]||(a[4]=r=>e(t).modelo=r),class:"form-control",type:"text",disabled:""},null,512),[[n,e(t).modelo]]),i(m,{error:e(t).errors.modelo},null,8,["error"])]),o("div",L,[F,l(o("input",{id:"ano","onUpdate:modelValue":a[5]||(a[5]=r=>e(t).categoria=r),class:"form-control",type:"text",disabled:""},null,512),[[n,e(t).categoria]]),i(m,{error:e(t).errors.categoria},null,8,["error"])])]),G])],40,k),i(M,{equipamento:d.equipamento,class:"mt-5"},null,8,["equipamento"]),i(h,{caracteristicas:d.caracteristicas,equipamento:d.equipamento,class:"mt-5"},null,8,["caracteristicas","equipamento"]),i(g,{equipamento:d.equipamento,class:"mt-5"},null,8,["equipamento"])])]),_:1}))}});export{to as default};
import{d as p,m as f,n as _,v as b,a as q,w as v,o as x,b as o,l as y,e as n,f as m,u as e,g as i}from"./app.1eedddc3.js";import{A as V}from"./AdminLayout.0eb8dd1c.js";import{_ as d}from"./FormError.vue_vue_type_script_setup_true_lang.f01cc97c.js";import{_ as h}from"./Inicio.vue_vue_type_script_setup_true_lang.668f4aed.js";import{_ as g}from"./Inicio.vue_vue_type_script_setup_true_lang.14933e1a.js";import{_ as M}from"./Descricao.vue_vue_type_script_setup_true_lang.e4a57b28.js";import{M as U}from"./InputMask.5bb347e9.js";import"./_plugin-vue_export-helper.e970f597.js";import"./Valor.vue_vue_type_script_setup_true_lang.bfc66acc.js";import"./Modal.vue_vue_type_script_setup_true_lang.ebe6909c.js";const $={class:"equipamento"},k=["onSubmit"],w={class:"card card-default"},E={class:"card-body"},A={class:"mb-3"},B=o("label",{for:"titulo"},"T\xEDtulo",-1),C={class:"mb-3"},S=o("label",{for:"valor"},"Valor",-1),j={class:"mb-3"},D=o("label",{for:"ano"},"Ano",-1),N={class:"mb-3"},O=o("label",{for:"modelo"},"Modelo",-1),T={class:"mb-3"},z=o("label",{for:"categoria"},"Categoria",-1),L=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),Y=p({__name:"Editar",props:{equipamento:Object,caracteristicas:Object},setup(l){const s=l,u=f(null);_(()=>{U.preco(u.value)});const t=b({id:s.equipamento.id,titulo:s.equipamento.titulo,valor:s.equipamento.valor,ano:s.equipamento.ano,modelo:s.equipamento.modelo.nome,categoria:s.equipamento.categoria.nome});function c(){t.post(`/admin/equipamentos/${s.equipamento.id}/atualizar`)}return(F,a)=>(x(),q(V,{titulo:"Editar Equipamento"},{default:v(()=>[o("div",$,[o("form",{onSubmit:y(c,["prevent"])},[o("div",w,[o("div",E,[o("div",A,[B,n(o("input",{id:"titulo","onUpdate:modelValue":a[0]||(a[0]=r=>e(t).titulo=r),class:"form-control",type:"text",required:""},null,512),[[m,e(t).titulo]]),i(d,{error:e(t).errors.titulo},null,8,["error"])]),o("div",C,[S,n(o("input",{id:"valor",ref_key:"elValor",ref:u,"onUpdate:modelValue":a[1]||(a[1]=r=>e(t).valor=r),class:"form-control",type:"text",required:""},null,512),[[m,e(t).valor]]),i(d,{error:e(t).errors.valor},null,8,["error"])]),o("div",j,[D,n(o("input",{id:"ano","onUpdate:modelValue":a[2]||(a[2]=r=>e(t).ano=r),class:"form-control",type:"text",required:""},null,512),[[m,e(t).ano]]),i(d,{error:e(t).errors.ano},null,8,["error"])]),o("div",N,[O,n(o("input",{id:"ano","onUpdate:modelValue":a[3]||(a[3]=r=>e(t).modelo=r),class:"form-control",type:"text",disabled:""},null,512),[[m,e(t).modelo]]),i(d,{error:e(t).errors.modelo},null,8,["error"])]),o("div",T,[z,n(o("input",{id:"ano","onUpdate:modelValue":a[4]||(a[4]=r=>e(t).categoria=r),class:"form-control",type:"text",disabled:""},null,512),[[m,e(t).categoria]]),i(d,{error:e(t).errors.categoria},null,8,["error"])])]),L])],40,k),i(M,{equipamento:l.equipamento,class:"mt-5"},null,8,["equipamento"]),i(h,{caracteristicas:l.caracteristicas,equipamento:l.equipamento,class:"mt-5"},null,8,["caracteristicas","equipamento"]),i(g,{equipamento:l.equipamento,class:"mt-5"},null,8,["equipamento"])])]),_:1}))}});export{Y as default};

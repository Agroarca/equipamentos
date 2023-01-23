import{P as c,a as p,w as f,o as _,b as o,j as q,d as n,v as m,u as e,e as i}from"./app.f56e2738.js";import{A as b}from"./AdminLayout.672ff569.js";import{_ as d}from"./FormError.3094d882.js";import v from"./Inicio.8bef23c7.js";import h from"./Inicio.bd96826f.js";import x from"./Descricao.887cac9a.js";import"./_plugin-vue_export-helper.67a9e3d9.js";import"./Valor.fbdfc4ee.js";import"./Modal.88e89781.js";const y={class:"equipamento"},V=["onSubmit"],g={class:"card card-default"},U={class:"card-body"},w={class:"mb-3"},$=o("label",{for:"titulo"},"T\xEDtulo",-1),A={class:"mb-3"},B=o("label",{for:"valor"},"Valor",-1),E={class:"mb-3"},M=o("label",{for:"ano"},"Ano",-1),S={class:"mb-3"},k=o("label",{for:"modelo"},"Modelo",-1),C={class:"mb-3"},N=o("label",{for:"categoria"},"Categoria",-1),T=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"},"Salvar")],-1),K={__name:"Editar",props:["equipamento","caracteristicas"],setup(l){const s=l,t=c({id:s.equipamento.id,titulo:s.equipamento.titulo,valor:s.equipamento.valor,ano:s.equipamento.ano,modelo:s.equipamento.modelo.nome,categoria:s.equipamento.categoria.nome});function u(){t.post(route("admin.equipamentos.atualizar",s.equipamento.id))}return(j,a)=>(_(),p(b,{titulo:"Editar Equipamento"},{default:f(()=>[o("div",y,[o("form",{onSubmit:q(u,["prevent"])},[o("div",g,[o("div",U,[o("div",w,[$,n(o("input",{class:"form-control",type:"text",id:"titulo","onUpdate:modelValue":a[0]||(a[0]=r=>e(t).titulo=r),required:""},null,512),[[m,e(t).titulo]]),i(d,{error:e(t).errors.titulo},null,8,["error"])]),o("div",A,[B,n(o("input",{class:"form-control",type:"text",id:"valor","onUpdate:modelValue":a[1]||(a[1]=r=>e(t).valor=r),required:""},null,512),[[m,e(t).valor]]),i(d,{error:e(t).errors.valor},null,8,["error"])]),o("div",E,[M,n(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":a[2]||(a[2]=r=>e(t).ano=r),required:""},null,512),[[m,e(t).ano]]),i(d,{error:e(t).errors.ano},null,8,["error"])]),o("div",S,[k,n(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":a[3]||(a[3]=r=>e(t).modelo=r),disabled:""},null,512),[[m,e(t).modelo]]),i(d,{error:e(t).errors.modelo},null,8,["error"])]),o("div",C,[N,n(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":a[4]||(a[4]=r=>e(t).categoria=r),disabled:""},null,512),[[m,e(t).categoria]]),i(d,{error:e(t).errors.categoria},null,8,["error"])])]),T])],40,V),i(x,{equipamento:l.equipamento,class:"mt-5"},null,8,["equipamento"]),i(v,{caracteristicas:l.caracteristicas,equipamento:l.equipamento,class:"mt-5"},null,8,["caracteristicas","equipamento"]),i(h,{equipamento:l.equipamento,class:"mt-5"},null,8,["equipamento"])])]),_:1}))}};export{K as default};

import{u as c,o as p,a as f,w as _,b as o,d as l,v as n,e,f as s,k as b}from"./app.581310a4.js";import{A as v}from"./AdminLayout.7bb35c16.js";import{_ as d}from"./FormError.702c109e.js";import q from"./Inicio.2d8a46fc.js";import x from"./Inicio.06b7d2cc.js";import"./_plugin-vue_export-helper.4f1ee863.js";import"./Valor.9603e17a.js";import"./Modal.8fa5cf4e.js";const y=["onSubmit"],h={class:"card card-default"},V={class:"card-body"},g={class:"mb-3"},U=o("label",{for:"titulo"},"T\xEDtulo",-1),w={class:"mb-3"},k=o("label",{for:"valor"},"Valor",-1),A={class:"mb-3"},B=o("label",{for:"ano"},"Ano",-1),E={class:"mb-3"},M=o("label",{for:"modelo"},"Modelo",-1),S={class:"mb-3"},$=o("label",{for:"categoria"},"Categoria",-1),C=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"},"Salvar")],-1),I={__name:"Editar",props:["equipamento","caracteristicas"],setup(m){const i=m,t=c({id:i.equipamento.id,titulo:i.equipamento.titulo,valor:i.equipamento.valor,ano:i.equipamento.ano,modelo:i.equipamento.modelo.nome,categoria:i.equipamento.categoria.nome});function u(){t.post(route("admin.equipamentos.atualizar",i.equipamento.id))}return(N,r)=>(p(),f(v,{titulo:"Editar Equipamento"},{default:_(()=>[o("form",{onSubmit:b(u,["prevent"])},[o("div",h,[o("div",V,[o("div",g,[U,l(o("input",{class:"form-control",type:"text",id:"titulo","onUpdate:modelValue":r[0]||(r[0]=a=>e(t).titulo=a),required:""},null,512),[[n,e(t).titulo]]),s(d,{error:e(t).errors.titulo},null,8,["error"])]),o("div",w,[k,l(o("input",{class:"form-control",type:"text",id:"valor","onUpdate:modelValue":r[1]||(r[1]=a=>e(t).valor=a),required:""},null,512),[[n,e(t).valor]]),s(d,{error:e(t).errors.valor},null,8,["error"])]),o("div",A,[B,l(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":r[2]||(r[2]=a=>e(t).ano=a),required:""},null,512),[[n,e(t).ano]]),s(d,{error:e(t).errors.ano},null,8,["error"])]),o("div",E,[M,l(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":r[3]||(r[3]=a=>e(t).modelo=a),disabled:""},null,512),[[n,e(t).modelo]]),s(d,{error:e(t).errors.modelo},null,8,["error"])]),o("div",S,[$,l(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":r[4]||(r[4]=a=>e(t).categoria=a),disabled:""},null,512),[[n,e(t).categoria]]),s(d,{error:e(t).errors.categoria},null,8,["error"])])]),C])],40,y),s(q,{caracteristicas:m.caracteristicas,equipamento:m.equipamento,class:"mt-5"},null,8,["caracteristicas","equipamento"]),s(x,{equipamento:m.equipamento,class:"mt-5"},null,8,["equipamento"])]),_:1}))}};export{I as default};

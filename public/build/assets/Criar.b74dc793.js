import{u as g,o as a,a as h,w as y,b as o,d as i,v as c,e as t,f as d,g as _,h as u,r as p,t as f,F as v,k as V}from"./app.7abc4061.js";import{_ as q}from"./AdminLayout.615e25dd.js";import{_ as n}from"./FormError.81e8b015.js";import"./Loader.9d72debc.js";const k=["onSubmit"],x={class:"card card-default"},U={class:"card-body"},w={class:"mb-3"},B=o("label",{for:"titulo"},"T\xEDtulo",-1),C={class:"mb-3"},M=o("label",{for:"valor"},"Valor",-1),S={class:"mb-3"},F=o("label",{for:"ano"},"Ano",-1),N={class:"mb-3"},D=o("label",{for:"modelo_id"},"Modelo",-1),E=["value"],T={class:"mb-3"},$=o("label",{for:"categoria_id"},"Categoria",-1),A=["value"],L=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"},"Criar")],-1),J={__name:"Criar",props:["modelos","categorias"],setup(m){const e=g({titulo:"",valor:"",ano:"",modelo_id:"",categoria_id:""});function b(){e.post(route("admin.equipamentos.salvar"))}return(j,s)=>(a(),h(q,{titulo:"Novo Equipamento"},{default:y(()=>[o("form",{onSubmit:V(b,["prevent"])},[o("div",x,[o("div",U,[o("div",w,[B,i(o("input",{class:"form-control",type:"text",id:"titulo","onUpdate:modelValue":s[0]||(s[0]=r=>t(e).titulo=r),required:""},null,512),[[c,t(e).titulo]]),d(n,{error:t(e).errors.titulo},null,8,["error"])]),o("div",C,[M,i(o("input",{class:"form-control",type:"text",id:"valor","onUpdate:modelValue":s[1]||(s[1]=r=>t(e).valor=r),required:""},null,512),[[c,t(e).valor]]),d(n,{error:t(e).errors.valor},null,8,["error"])]),o("div",S,[F,i(o("input",{class:"form-control",type:"text",id:"ano","onUpdate:modelValue":s[2]||(s[2]=r=>t(e).ano=r),required:""},null,512),[[c,t(e).ano]]),d(n,{error:t(e).errors.ano},null,8,["error"])]),o("div",N,[D,i(o("select",{id:"modelo_id",class:"form-select","onUpdate:modelValue":s[3]||(s[3]=r=>t(e).modelo_id=r),required:""},[(a(!0),u(v,null,p(m.modelos,(r,l)=>(a(),u("option",{key:l,value:l},f(r),9,E))),128))],512),[[_,t(e).modelo_id]]),d(n,{error:t(e).errors.modelo_id},null,8,["error"])]),o("div",T,[$,i(o("select",{id:"categoria_id",class:"form-select","onUpdate:modelValue":s[4]||(s[4]=r=>t(e).categoria_id=r),required:""},[(a(!0),u(v,null,p(m.categorias,(r,l)=>(a(),u("option",{key:l,value:l},f(r),9,A))),128))],512),[[_,t(e).categoria_id]]),d(n,{error:t(e).errors.categoria_id},null,8,["error"])])]),L])],40,k)]),_:1}))}};export{J as default};

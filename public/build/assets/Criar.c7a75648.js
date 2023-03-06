import{d as g,v as h,a as y,w as V,o as a,b as o,e as i,f as c,u as t,g as d,h as _,i as u,r as p,t as f,F as v,l as q}from"./app.8b403c33.js";import{A as x}from"./AdminLayout.92c69ec2.js";import{_ as n}from"./FormError.vue_vue_type_script_setup_true_lang.034f299c.js";import"./_plugin-vue_export-helper.5ef89477.js";const k=["onSubmit"],C={class:"card card-default"},U={class:"card-body"},w={class:"mb-3"},B=o("label",{for:"titulo"},"T\xEDtulo",-1),M={class:"mb-3"},S=o("label",{for:"valor"},"Valor",-1),A={class:"mb-3"},D=o("label",{for:"ano"},"Ano",-1),E={class:"mb-3"},N=o("label",{for:"modelo_id"},"Modelo",-1),j=["value"],F={class:"mb-3"},L=o("label",{for:"categoria_id"},"Categoria",-1),O=["value"],T=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),J=g({__name:"Criar",props:{modelos:Object,categorias:Object},setup(m){const e=h({titulo:"",valor:"",ano:"",modelo_id:"",categoria_id:""});function b(){e.post("/admin/equipamentos/salvar")}return($,s)=>(a(),y(x,{titulo:"Novo Equipamento"},{default:V(()=>[o("form",{onSubmit:q(b,["prevent"])},[o("div",C,[o("div",U,[o("div",w,[B,i(o("input",{id:"titulo","onUpdate:modelValue":s[0]||(s[0]=r=>t(e).titulo=r),class:"form-control",type:"text",required:""},null,512),[[c,t(e).titulo]]),d(n,{error:t(e).errors.titulo},null,8,["error"])]),o("div",M,[S,i(o("input",{id:"valor","onUpdate:modelValue":s[1]||(s[1]=r=>t(e).valor=r),class:"form-control",type:"text",required:""},null,512),[[c,t(e).valor]]),d(n,{error:t(e).errors.valor},null,8,["error"])]),o("div",A,[D,i(o("input",{id:"ano","onUpdate:modelValue":s[2]||(s[2]=r=>t(e).ano=r),class:"form-control",type:"text",required:""},null,512),[[c,t(e).ano]]),d(n,{error:t(e).errors.ano},null,8,["error"])]),o("div",E,[N,i(o("select",{id:"modelo_id","onUpdate:modelValue":s[3]||(s[3]=r=>t(e).modelo_id=r),class:"form-select",required:""},[(a(!0),u(v,null,p(m.modelos,(r,l)=>(a(),u("option",{key:l,value:l},f(r),9,j))),128))],512),[[_,t(e).modelo_id]]),d(n,{error:t(e).errors.modelo_id},null,8,["error"])]),o("div",F,[L,i(o("select",{id:"categoria_id","onUpdate:modelValue":s[4]||(s[4]=r=>t(e).categoria_id=r),class:"form-select",required:""},[(a(!0),u(v,null,p(m.categorias,(r,l)=>(a(),u("option",{key:l,value:l},f(r),9,O))),128))],512),[[_,t(e).categoria_id]]),d(n,{error:t(e).errors.categoria_id},null,8,["error"])])]),T])],40,k)]),_:1}))}});export{J as default};

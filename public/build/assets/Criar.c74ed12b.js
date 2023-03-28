import{d as C,m as N,c as S,n as k,v as w,$ as U,a as A,w as B,o as m,b as r,e as s,f as u,u as a,g as i,h as $,i as v,r as j,t as D,F as E,l as F,A as h}from"./app.564e664b.js";import{A as O}from"./AdminLayout.0d9fa25b.js";import{_ as d}from"./FormError.vue_vue_type_script_setup_true_lang.93d03360.js";import{M as L}from"./InputMask.a043555d.js";import{_ as b}from"./SelectAjax.vue_vue_type_script_setup_true_lang.96e84231.js";import"./_plugin-vue_export-helper.909db800.js";import"./index.c57ba517.js";const T=["onSubmit"],z={class:"card card-default"},G={class:"card-body"},H={class:"mb-3"},I=r("label",{for:"titulo"},"T\xEDtulo",-1),J={class:"mb-3"},K=r("label",{for:"valor"},"Valor",-1),P={class:"mb-3"},Q=r("label",{for:"ano"},"Ano",-1),R={class:"mb-3"},W=r("label",{for:"marca_id"},"Marca",-1),X={class:"mb-3"},Y=r("label",{for:"marca_id"},"Modelo",-1),Z={class:"mb-3"},oo=r("label",{for:"categoria_id"},"Categoria",-1),ao=["value"],ro=r("div",{class:"card-footer"},[r("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),mo=C({__name:"Criar",props:{categorias:Object},setup(V){const _=N(null);let n,p;const M=S(()=>o.marca_id?"Selecione um Modelo":"Selecione uma marca");k(()=>{L.preco(_.value)});const o=w({titulo:"",valor:"",ano:"",marca_id:"",modelo_id:"",categoria_id:""});U(()=>o.marca_id,(l,e)=>{l!==e&&(o.modelo_id="")});function c(){if(loader.show(),!o.marca_id){y().then(()=>{c()}).catch(()=>{loader.hide()});return}if(!o.modelo_id){q().then(()=>{c()}).catch(()=>{loader.hide()});return}o.post("/admin/equipamentos/salvar",{onFinish:()=>loader.hide()})}function g(l){n=l}function x(l){p=l}function y(){return h.post("/admin/marcas/salvar/ajax",{nome:n}).then(l=>{o.marca_id=l.data.id})}function q(){return h.post("/admin/modelos/salvar/ajax",{nome:p,marca_id:o.marca_id}).then(l=>{o.modelo_id=l.data.id})}return(l,e)=>(m(),A(O,{titulo:"Novo Equipamento"},{default:B(()=>[r("form",{onSubmit:F(c,["prevent"])},[r("div",z,[r("div",G,[r("div",H,[I,s(r("input",{id:"titulo","onUpdate:modelValue":e[0]||(e[0]=t=>a(o).titulo=t),class:"form-control",type:"text",required:""},null,512),[[u,a(o).titulo]]),i(d,{error:a(o).errors.titulo},null,8,["error"])]),r("div",J,[K,s(r("input",{id:"valor",ref_key:"elValor",ref:_,"onUpdate:modelValue":e[1]||(e[1]=t=>a(o).valor=t),class:"form-control",type:"text",required:""},null,512),[[u,a(o).valor]]),i(d,{error:a(o).errors.valor},null,8,["error"])]),r("div",P,[Q,s(r("input",{id:"ano","onUpdate:modelValue":e[2]||(e[2]=t=>a(o).ano=t),class:"form-control",type:"text",required:""},null,512),[[u,a(o).ano]]),i(d,{error:a(o).errors.ano},null,8,["error"])]),r("div",R,[W,i(b,{modelValue:a(o).marca_id,"onUpdate:modelValue":e[3]||(e[3]=t=>a(o).marca_id=t),placeholder:"Selecione uma marca",href:"/admin/marcas/pesquisar","criar-dinamica":!0,onCriarNovaOpcao:g},null,8,["modelValue"]),i(d,{error:a(o).errors.modelo_id},null,8,["error"])]),r("div",X,[Y,i(b,{modelValue:a(o).modelo_id,"onUpdate:modelValue":e[4]||(e[4]=t=>a(o).modelo_id=t),disabled:!(a(o).marca_id||a(n)),placeholder:a(M),href:`/admin/modelos/pesquisar/${a(o).marca_id}`,"criar-dinamica":!0,onCriarNovaOpcao:x},null,8,["modelValue","disabled","placeholder","href"]),i(d,{error:a(o).errors.modelo_id},null,8,["error"])]),r("div",Z,[oo,s(r("select",{id:"categoria_id","onUpdate:modelValue":e[5]||(e[5]=t=>a(o).categoria_id=t),class:"form-select",required:""},[(m(!0),v(E,null,j(V.categorias,(t,f)=>(m(),v("option",{key:f,value:f},D(t),9,ao))),128))],512),[[$,a(o).categoria_id]]),i(d,{error:a(o).errors.categoria_id},null,8,["error"])])]),ro])],40,T)]),_:1}))}});export{mo as default};

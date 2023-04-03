import{d as j,s as E,v as A,r as D,x as F,c,w as O,o as s,a,f as n,g as T,b as m,e as p,u as e,k as u,p as L,m as z,t as G,F as H}from"./app-f300bd32.js";import{_ as d}from"./FormError.vue_vue_type_script_setup_true_lang-d15ab8de.js";import{_ as w}from"./SelectAjax.vue_vue_type_script_setup_true_lang-45dfa1e4.js";import{_ as I}from"./SiteLayout.vue_vue_type_script_setup_true_lang-70917cc6.js";import{_ as J}from"./Navegacao.vue_vue_type_script_setup_true_lang-ba0e548a.js";import{M as K}from"./InputMask-357650c7.js";import"./_plugin-vue_export-helper-3cb4e753.js";import"./index-ac617c56.js";const P={class:"container-600 cadastrar-equipamento"},Q=a("h2",{class:"titulo text-center mb-3"}," Cadastrar Novo Equipamento ",-1),R=["onSubmit"],W={class:"mb-3"},X=a("label",{for:"titulo"},"Título",-1),Y={class:"mb-3"},Z=a("label",{for:"valor"},"Valor",-1),oo={class:"mb-3"},eo=a("label",{for:"ano"},"Ano",-1),ao={class:"mb-3"},to=a("label",{for:"marca_id"},"Marca",-1),ro=["value"],lo={class:"mb-3"},io=a("label",{for:"marca_id"},"Modelo",-1),so=["value"],no={class:"mb-3"},mo=a("label",{for:"categoria_id"},"Categoria",-1),uo=["value"],co=a("button",{type:"submit",class:"btn btn-primary"}," Continuar ",-1),go=j({__name:"Novo",props:{categorias:Object,equipamento:Object},setup(l){var f,v,b,q,h,y,V,g,k,x;const i=l,B=E(()=>o.marca?"Selecione um Modelo":"Selecione uma Marca"),o=A({id:(f=i.equipamento)==null?void 0:f.id,titulo:(v=i.equipamento)==null?void 0:v.titulo,valor:(b=i.equipamento)==null?void 0:b.valor,ano:(q=i.equipamento)==null?void 0:q.ano,modelo_id:(y=(h=i.equipamento)==null?void 0:h.modelo)==null?void 0:y.id,marca_id:(k=(g=(V=i.equipamento)==null?void 0:V.modelo)==null?void 0:g.marca)==null?void 0:k.id,categoria_id:(x=i.equipamento)==null?void 0:x.categoria_id}),_=D(null);F(()=>{K.preco(_.value)});function N(){o.post("/equipamento/salvar")}return(po,r)=>(s(),c(I,{titulo:"Cadastrar Equipamento"},{default:O(()=>{var M,C,S,U;return[a("div",P,[Q,n(J,{class:"mb-3 d-flex justify-content-center",passoAtual:1,passoCadastro:((M=l.equipamento)==null?void 0:M.passo_cadastro)??0,equipamento:l.equipamento},null,8,["passoCadastro","equipamento"]),a("form",{onSubmit:T(N,["prevent"])},[a("div",W,[X,m(a("input",{id:"titulo","onUpdate:modelValue":r[0]||(r[0]=t=>e(o).titulo=t),class:"form-control",type:"text",required:""},null,512),[[p,e(o).titulo]]),n(d,{error:e(o).errors.titulo},null,8,["error"])]),a("div",Y,[Z,m(a("input",{id:"valor",ref_key:"elValor",ref:_,"onUpdate:modelValue":r[1]||(r[1]=t=>e(o).valor=t),class:"form-control",type:"text",required:""},null,512),[[p,e(o).valor]]),n(d,{error:e(o).errors.valor},null,8,["error"])]),a("div",oo,[eo,m(a("input",{id:"ano","onUpdate:modelValue":r[2]||(r[2]=t=>e(o).ano=t),class:"form-control",type:"text",required:""},null,512),[[p,e(o).ano]]),n(d,{error:e(o).errors.ano},null,8,["error"])]),a("div",ao,[to,(S=(C=l.equipamento)==null?void 0:C.modelo)!=null&&S.marca?(s(),u("input",{key:1,id:"ano",value:l.equipamento.modelo.marca.nome,class:"form-control",type:"text",disabled:""},null,8,ro)):(s(),c(w,{key:0,modelValue:e(o).marca_id,"onUpdate:modelValue":r[3]||(r[3]=t=>e(o).marca_id=t),placeholder:"Selecione uma marca",href:"/admin/marcas/pesquisar"},null,8,["modelValue"])),n(d,{error:e(o).errors.modelo_id},null,8,["error"])]),a("div",lo,[io,(U=l.equipamento)!=null&&U.modelo?(s(),u("input",{key:1,id:"ano",value:l.equipamento.modelo.marca.nome,class:"form-control",type:"text",disabled:""},null,8,so)):(s(),c(w,{key:0,modelValue:e(o).modelo_id,"onUpdate:modelValue":r[4]||(r[4]=t=>e(o).modelo_id=t),disabled:!e(o).marca_id,placeholder:e(B),href:`/admin/modelos/pesquisar/${e(o).marca_id}`},null,8,["modelValue","disabled","placeholder","href"])),n(d,{error:e(o).errors.modelo_id},null,8,["error"])]),a("div",no,[mo,m(a("select",{id:"categoria_id","onUpdate:modelValue":r[5]||(r[5]=t=>e(o).categoria_id=t),class:"form-select",required:""},[(s(!0),u(H,null,z(l.categorias,(t,$)=>(s(),u("option",{key:$,value:$},G(t),9,uo))),128))],512),[[L,e(o).categoria_id]])]),co],40,R)])]}),_:1}))}});export{go as default};

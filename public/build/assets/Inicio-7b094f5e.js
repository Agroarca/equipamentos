import{d as l,c as r,w as c,o as t,a as e,f as i,t as s,h as m,u as d,n as u,k as n,F as _,m as f,l as h}from"./app-967a6939.js";import{_ as p}from"./Formatacao.vue_vue_type_script_setup_true_lang-376bf1a2.js";import{_ as v}from"./SiteLayout.vue_vue_type_script_setup_true_lang-9bb1a5b9.js";import{_ as q}from"./Imagens.vue_vue_type_script_setup_true_lang-808b5d0f.js";import"./InputMask-94e34938.js";import"./_plugin-vue_export-helper-7ffa3149.js";import"./index-ac617c56.js";const x={class:"container equipamento"},g={class:"d-flex flex-column flex-md-row align-items-md-start"},k={class:"info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0"},b={class:"ano"},y={class:"titulo"},B=e("div",{class:"descricao-header"},[e("span",null,"Características")],-1),C={key:0,class:"caracteristicas"},N={class:"nome"},V={class:"valor"},$=e("div",{class:"descricao-header"},[e("span",null,"Descrição")],-1),w=["innerHTML"],A=l({__name:"Inicio",props:{equipamento:Object},setup(a){return(L,T)=>(t(),r(v,{titulo:a.equipamento.titulo},{default:c(()=>[e("div",x,[e("div",g,[i(q,{imagens:a.equipamento.imagens,class:"col-md-8"},null,8,["imagens"]),e("div",k,[e("span",b,"Ano: "+s(a.equipamento.ano),1),e("h1",y,s(a.equipamento.titulo),1),i(p,{class:"valor",tipo:"preco",valor:a.equipamento.valor},null,8,["valor"]),i(d(u),{href:`/conversa/equipamento/${a.equipamento.id}`,class:"botao btn btn-primary"},{default:c(()=>[m(" Estou Interessado! ")]),_:1},8,["href"])])]),B,a.equipamento.caracteristicas.length>0?(t(),n("div",C,[(t(!0),n(_,null,f(a.equipamento.caracteristicas,o=>(t(),n("div",{key:o.id,class:"caracteristica"},[e("span",N,s(o.caracteristica.nome),1),e("span",V,s(o.valor.valor),1)]))),128))])):h("",!0),$,e("div",{class:"descricao",innerHTML:a.equipamento.descricao},null,8,w)])]),_:1},8,["titulo"]))}});export{A as default};

import{d as r,a as l,w as c,o as s,b as e,g as n,t,s as m,u as d,q as u,i,F as _,r as f,k as h}from"./app.d831804b.js";import{_ as p}from"./Formatacao.vue_vue_type_script_setup_true_lang.19980a3d.js";import{_ as v}from"./SiteLayout.vue_vue_type_script_setup_true_lang.b07c598d.js";import{_ as q}from"./Imagens.vue_vue_type_script_setup_true_lang.2fc4a240.js";import"./InputMask.d1a38fe2.js";import"./_plugin-vue_export-helper.5bb3ab17.js";const x={class:"container equipamento"},g={class:"d-flex flex-column flex-md-row align-items-md-start"},k={class:"info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0"},b={class:"ano"},E={class:"titulo"},y=e("div",{class:"descricao-header"},[e("span",null,"Caracter\xEDsticas")],-1),B={key:0,class:"caracteristicas"},C={class:"nome"},N={class:"valor"},V=e("div",{class:"descricao-header"},[e("span",null,"Descri\xE7\xE3o")],-1),$=["innerHTML"],j=r({__name:"Inicio",props:{equipamento:Object},setup(a){return(w,D)=>(s(),l(v,null,{default:c(()=>[e("div",x,[e("div",g,[n(q,{imagens:a.equipamento.imagens,class:"col-md-8"},null,8,["imagens"]),e("div",k,[e("span",b,"Ano: "+t(a.equipamento.ano),1),e("h1",E,t(a.equipamento.titulo),1),n(p,{class:"valor",tipo:"preco",valor:a.equipamento.valor},null,8,["valor"]),n(d(u),{href:`/conversa/equipamento/${a.equipamento.id}`,class:"botao btn btn-primary"},{default:c(()=>[m(" Estou Interessado! ")]),_:1},8,["href"])])]),y,a.equipamento.caracteristicas.length>0?(s(),i("div",B,[(s(!0),i(_,null,f(a.equipamento.caracteristicas,o=>(s(),i("div",{key:o.id,class:"caracteristica"},[e("span",C,t(o.caracteristica.nome),1),e("span",N,t(o.valor.valor),1)]))),128))])):h("",!0),V,e("div",{class:"descricao",innerHTML:a.equipamento.descricao},null,8,$)])]),_:1}))}});export{j as default};

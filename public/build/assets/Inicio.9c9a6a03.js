import{_ as r}from"./Formatacao.vue_vue_type_script_setup_true_lang.8fc8707b.js";import{_ as l}from"./SiteLayout.vue_vue_type_script_setup_true_lang.ed80a338.js";import{_ as m}from"./Imagens.vue_vue_type_script_setup_true_lang.c2edabd9.js";import{d,a as u,w as _,o as s,b as e,g as n,t,i,F as h,r as f,k as p}from"./app.08780644.js";import"./InputMask.b708373d.js";import"./_plugin-vue_export-helper.d52bf913.js";const v={class:"container equipamento"},q={class:"d-flex flex-column flex-md-row align-items-md-start"},x={class:"info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0"},g={class:"ano"},k={class:"titulo"},b=["href"],E=e("div",{class:"descricao-header"},[e("span",null,"Caracter\xEDsticas")],-1),y={key:0,class:"caracteristicas"},B={class:"nome"},C={class:"valor"},w=e("div",{class:"descricao-header"},[e("span",null,"Descri\xE7\xE3o")],-1),D=["innerHTML"],M=d({__name:"Inicio",props:{equipamento:Object},setup(a){return(c,L)=>(s(),u(l,null,{default:_(()=>[e("div",v,[e("div",q,[n(m,{imagens:a.equipamento.imagens,class:"col-md-8"},null,8,["imagens"]),e("div",x,[e("span",g,"Ano: "+t(a.equipamento.ano),1),e("h1",k,t(a.equipamento.titulo),1),n(r,{class:"valor",tipo:"preco",valor:a.equipamento.valor},null,8,["valor"]),e("a",{href:c.route("site.conversa.equipamento",a.equipamento.id),class:"botao btn btn-primary"},"Estou Interessado!",8,b)])]),E,a.equipamento.caracteristicas.length>0?(s(),i("div",y,[(s(!0),i(h,null,f(a.equipamento.caracteristicas,o=>(s(),i("div",{key:o.id,class:"caracteristica"},[e("span",B,t(o.caracteristica.nome),1),e("span",C,t(o.valor.valor),1)]))),128))])):p("",!0),w,e("div",{class:"descricao",innerHTML:a.equipamento.descricao},null,8,D)])]),_:1}))}});export{M as default};
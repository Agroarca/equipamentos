import{_ as c}from"./SiteLayout.vue_vue_type_script_setup_true_lang.610e9f24.js";import{_ as l}from"./Imagens.vue_vue_type_script_setup_true_lang.4a398a05.js";import{d as r,a as d,w as m,o as t,b as e,g as u,t as a,i as n,F as _,r as h,k as f}from"./app.00cfe0c4.js";import"./_plugin-vue_export-helper.f2cae436.js";const p={class:"container equipamento"},v={class:"d-flex flex-column flex-md-row align-items-md-start"},q={class:"info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0"},x={class:"ano"},g={class:"titulo"},k={class:"valor"},b=["href"],E=e("div",{class:"descricao-header"},[e("span",null,"Caracter\xEDsticas")],-1),y={key:0,class:"caracteristicas"},B={class:"nome"},C={class:"valor"},w=e("div",{class:"descricao-header"},[e("span",null,"Descri\xE7\xE3o")],-1),D=["innerHTML"],I=r({__name:"Inicio",props:{equipamento:Object},setup(s){return(i,L)=>(t(),d(c,null,{default:m(()=>[e("div",p,[e("div",v,[u(l,{imagens:s.equipamento.imagens,class:"col-md-8"},null,8,["imagens"]),e("div",q,[e("span",x,"Ano: "+a(s.equipamento.ano),1),e("h1",g,a(s.equipamento.titulo),1),e("span",k,a(s.equipamento.valor),1),e("a",{href:i.route("site.conversa.equipamento",s.equipamento.id),class:"botao btn btn-primary"},"Estou Interessado!",8,b)])]),E,s.equipamento.caracteristicas.length>0?(t(),n("div",y,[(t(!0),n(_,null,h(s.equipamento.caracteristicas,o=>(t(),n("div",{key:o.id,class:"caracteristica"},[e("span",B,a(o.caracteristica.nome),1),e("span",C,a(o.valor.valor),1)]))),128))])):f("",!0),w,e("div",{class:"descricao",innerHTML:s.equipamento.descricao},null,8,D)])]),_:1}))}});export{I as default};

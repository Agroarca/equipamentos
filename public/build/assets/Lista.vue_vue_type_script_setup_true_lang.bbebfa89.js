import{_ as f}from"./SiteLayout.vue_vue_type_script_setup_true_lang.766a09b1.js";import{d as u,o,a as i,w as d,b as t,t as _,g as p,u as h,q,x as r,i as m,k as g,r as $,F as k}from"./app.50f907f6.js";import{_ as v}from"./Formatacao.vue_vue_type_script_setup_true_lang.e514599b.js";import{_ as b}from"./Paginacao.vue_vue_type_script_setup_true_lang.28d095c3.js";const x=["src","alt"],B={class:"titulo flex-fill"},y=t("span",{class:"btn"},"Quero saber mais!",-1),C=u({__name:"Equipamento",props:{equipamento:Object},setup(e){var a,l,c;const s=e,n={url:(l=(a=s.equipamento.imagens[0])==null?void 0:a.url)!=null?l:"/img/Placeholder.png",descricao:(c=s.equipamento.imagens[0])==null?void 0:c.descricao};return(w,E)=>(o(),i(h(q),{class:"produto",href:`/equipamento/${e.equipamento.id}`},{default:d(()=>[t("img",{class:"imagem",src:n.url,alt:n.descricao},null,8,x),t("span",B,_(e.equipamento.titulo),1),p(v,{class:"valor",tipo:"preco",valor:e.equipamento.valor},null,8,["valor"]),y]),_:1},8,["href"]))}}),N={class:"container container-md lista"},S={class:"section-meta"},V={key:0,class:"section-title"},j={class:"produtos"},P=u({__name:"Lista",props:{equipamentos:Object,title:String},setup(e){return(s,n)=>(o(),i(f,null,{default:d(()=>[t("section",N,[t("div",S,[r(s.$slots,"title",{},()=>[e.title?(o(),m("h2",V,_(e.title),1)):g("",!0)])]),r(s.$slots,"default",{},()=>[t("div",j,[(o(!0),m(k,null,$(e.equipamentos.data,a=>(o(),i(C,{key:a.id,equipamento:a},null,8,["equipamento"]))),128))]),p(b,{links:e.equipamentos.links,class:"mt-5"},null,8,["links"])])])]),_:3}))}});export{P as _};

import{_}from"./SiteLayout.vue_vue_type_script_setup_true_lang.610e9f24.js";import{d as r,o,i,b as s,t as c,a as l,w as h,x as d,k as f,r as q,F as g,g as $}from"./app.00cfe0c4.js";import{_ as k}from"./Paginacao.vue_vue_type_script_setup_true_lang.632fdb44.js";import"./_plugin-vue_export-helper.f2cae436.js";const b=["href"],j=["src","alt"],v={class:"titulo flex-fill"},x={class:"valor"},B=s("span",{class:"btn"},"Quero saber mais!",-1),C=r({__name:"Equipamento",props:{equipamento:Object},setup(e){var t,m,u;const a=e,n={url:(m=(t=a.equipamento.imagens[0])==null?void 0:t.url)!=null?m:"/img/Placeholder.png",descricao:(u=a.equipamento.imagens[0])==null?void 0:u.descricao};return(p,w)=>(o(),i("a",{class:"produto",href:p.route("site.equipamento",e.equipamento.id)},[s("img",{class:"imagem",src:n.url,alt:n.descricao},null,8,j),s("span",v,c(e.equipamento.titulo),1),s("span",x,c(e.equipamento.valor),1),B],8,b))}}),O={class:"container container-md lista"},y={class:"section-meta"},N={key:0,class:"section-title"},S={class:"produtos"},V=r({__name:"Lista",props:{equipamentos:Object,title:String},setup(e){return(a,n)=>(o(),l(_,null,{default:h(()=>[s("section",O,[s("div",y,[d(a.$slots,"title",{},()=>[e.title?(o(),i("h2",N,c(e.title),1)):f("",!0)])]),d(a.$slots,"default",{},()=>[s("div",S,[(o(!0),i(g,null,q(e.equipamentos.data,t=>(o(),l(C,{key:t.id,equipamento:t},null,8,["equipamento"]))),128))]),$(k,{links:e.equipamentos.links,class:"mt-5"},null,8,["links"])])])]),_:3}))}}),P=r({__name:"Categoria",props:{equipamentos:Object,categoria:Object},setup(e){return(a,n)=>{var t;return o(),l(V,{equipamentos:e.equipamentos,title:(t=e.categoria)==null?void 0:t.nome},null,8,["equipamentos","title"])}}});export{P as default};

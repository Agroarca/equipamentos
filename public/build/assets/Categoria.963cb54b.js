import{S as d}from"./SiteLayout.905e428b.js";import{D as l,o as a,h as i,b as o,t as c,a as r,w as p,s as m,j as _,F as h,r as q}from"./app.a897a209.js";import"./_plugin-vue_export-helper.0e486f82.js";const g={class:"produto"},f=["src","alt"],$={class:"titulo"},k={class:"valor"},y=o("span",{class:"btn"},"Quero saber mais!",-1),B=l({__name:"Equipamento",props:["equipamento"],setup(t){var e,u;const s=t,n={url:(e=s.equipamento.imagens[0])==null?void 0:e.url,descricao:(u=s.equipamento.imagens[0])==null?void 0:u.descricao};return(x,L)=>(a(),i("a",g,[o("img",{class:"imagem",src:n.url,alt:n.descricao},null,8,f),o("span",$,c(t.equipamento.titulo),1),o("span",k,c(t.equipamento.valor),1),y]))}}),C={class:"container container-md lista"},S={class:"section-meta"},b={key:0,class:"section-title"},v=l({__name:"Lista",props:["equipamentos","title"],setup(t){return(s,n)=>(a(),r(d,null,{default:p(()=>[o("section",C,[o("div",S,[m(s.$slots,"title",{},()=>[t.title?(a(),i("h2",b,c(t.title),1)):_("",!0)])]),m(s.$slots,"default",{},()=>[(a(!0),i(h,null,q(t.equipamentos.data,e=>(a(),r(B,{key:e.id,equipamento:e},null,8,["equipamento"]))),128))])])]),_:3}))}}),F=l({__name:"Categoria",props:["equipamentos","categoria"],setup(t){return(s,n)=>{var e;return a(),r(v,{equipamentos:t.equipamentos,title:(e=t.categoria)==null?void 0:e.nome},null,8,["equipamentos","title"])}}});export{F as default};

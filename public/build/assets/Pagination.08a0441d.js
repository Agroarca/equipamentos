import{o as a,h as s,b as n,F as l,r as o,I as i,f as c,w as u,u as _,q as d,j as m}from"./app.a897a209.js";const h={key:0},p={class:"pagination"},f=["innerHTML"],v={__name:"Pagination",props:["links"],setup(t){return(g,k)=>t.links.length>3?(a(),s("nav",h,[n("ul",p,[(a(!0),s(l,null,o(t.links,(e,r)=>(a(),s("li",{key:r,class:i(["page-item",{active:e.active,disabled:e.url==null}])},[c(_(d),{href:e.url,class:"page-link"},{default:u(()=>[n("span",{innerHTML:e.label},null,8,f)]),_:2},1032,["href"])],2))),128))])])):m("",!0)}};export{v as _};
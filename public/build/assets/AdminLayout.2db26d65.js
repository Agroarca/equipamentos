import{d as p,c as b,m as g,n as y,O as k,p as x,i as o,g as s,w as l,o as i,b as a,u as t,q as c,s as d,F as w,r as S,t as r,x as h,X as A,J as I,y as L,z as O}from"./app.e1a1d14f.js";import{_ as T,a as $,b as q}from"./_plugin-vue_export-helper.f4461edf.js";const f=e=>(L("data-v-4f8e27e0"),e=e(),O(),e),B={class:"admin-layout"},E={class:"main-header navbar sticky-top bg-light flex-md-nowrap p-0 shadow"},F=f(()=>a("button",{class:"navbar-toggler collapsed ms-2 me-auto",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#main-menu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1)),N={class:"navbar-nav"},V={class:"nav-item text-nowrap"},C=f(()=>a("div",{class:"offcanvas-header menu-header"},[a("h5",{id:"main-menu-label",class:"offcanvas-title"}," Equipamentos "),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Fechar"})],-1)),M={class:"offcanvas-body"},z={class:"nav flex-column"},D={class:"admin-wrapper"},J={class:"container pt-3"},U={key:0,class:"row pb-4"},X={class:"col-sm-8"},j={class:"col-sm-4 pt-3 pt-sm-0"},G=f(()=>a("i",{class:"fas fa-plus-circle pr-1"},null,-1)),H={key:1,class:"pb-4"},K=p({__name:"AdminLayout",props:{titulo:String,link:String,buttonText:String},setup(e){const v=b(()=>I().props.admin.menus),m=g(null);let _;return y(()=>{_=new k(m.value)}),x(()=>{_.hide()}),(n,P)=>(i(),o("div",B,[s(T,null,{default:l(()=>[s($),a("header",E,[s(t(c),{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6",href:n.route("admin.dashboard")},{default:l(()=>[d(" Equipamentos ")]),_:1},8,["href"]),F,a("div",N,[a("div",V,[s(t(c),{class:"nav-link px-3",href:n.route("logout")},{default:l(()=>[d(" Sair ")]),_:1},8,["href"])])])]),a("aside",null,[a("nav",{id:"main-menu",ref_key:"elOffcanvas",ref:m,class:"offcanvas offcanvas-start",tabindex:"-1","aria-labelledby":"main-menu-label"},[C,a("div",M,[a("ul",z,[(i(!0),o(w,null,S(t(v),u=>(i(),o("li",{key:u.title,class:"nav-item"},[s(t(c),{class:"nav-link",href:n.route(u.route)},{default:l(()=>[d(r(u.title),1)]),_:2},1032,["href"])]))),128))])])],512)]),a("div",D,[a("main",J,[h(n.$slots,"header",{},()=>[s(t(A),{title:e.titulo},null,8,["title"]),e.link?(i(),o("header",U,[a("div",X,[a("h1",null,r(e.titulo),1)]),a("div",j,[s(t(c),{href:e.link,class:"btn btn-primary float-sm-end"},{default:l(()=>[G,d(" "+r(e.buttonText),1)]),_:1},8,["href"])])])):(i(),o("header",H,[a("h1",null,r(e.titulo),1)]))],!0),a("article",null,[h(n.$slots,"default",{},void 0,!0)])])])]),_:3})]))}});const W=q(K,[["__scopeId","data-v-4f8e27e0"]]);export{W as A};

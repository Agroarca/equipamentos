import{d as p,s as b,r as g,x as y,O as x,B as k,k as n,f as e,w as o,o as l,a,u as t,n as i,h as c,F as w,m as S,t as d,C as h,X as A,J as B,D as E,E as I}from"./app-4cdccdc1.js";import{_ as L,a as O,b as T}from"./_plugin-vue_export-helper-06278407.js";const u=s=>(E("data-v-cf9a1954"),s=s(),I(),s),$={class:"admin-layout"},C={class:"main-header navbar sticky-top bg-light flex-md-nowrap p-0 shadow"},F=u(()=>a("button",{class:"navbar-toggler collapsed ms-2 me-auto",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#main-menu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1)),N={class:"navbar-nav"},V={class:"nav-item text-nowrap"},q=u(()=>a("div",{class:"offcanvas-header menu-header"},[a("h5",{id:"main-menu-label",class:"offcanvas-title"}," Equipamentos "),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Fechar"})],-1)),D={class:"offcanvas-body"},M={class:"nav flex-column"},J={class:"admin-wrapper"},U={class:"container pt-3"},X={key:0,class:"row pb-4"},j={class:"col-sm-8"},z={class:"col-sm-4 pt-3 pt-sm-0"},G=u(()=>a("i",{class:"fas fa-plus-circle pr-1"},null,-1)),H={key:1,class:"pb-4"},K=p({__name:"AdminLayout",props:{titulo:String,link:String,buttonText:String},setup(s){const v=b(()=>B().props.admin.menus),f=g(null);let m;return y(()=>{m=new x(f.value)}),k(()=>{m.hide()}),(_,P)=>(l(),n("div",$,[e(L,null,{default:o(()=>[e(O),a("header",C,[e(t(i),{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6",href:"/admin/dashboard"},{default:o(()=>[c(" Equipamentos ")]),_:1}),F,a("div",N,[a("div",V,[e(t(i),{class:"nav-link px-3",href:"/sair"},{default:o(()=>[c(" Sair ")]),_:1})])])]),a("aside",null,[a("nav",{id:"main-menu",ref_key:"elOffcanvas",ref:f,class:"offcanvas offcanvas-start",tabindex:"-1","aria-labelledby":"main-menu-label"},[q,a("div",D,[a("ul",M,[(l(!0),n(w,null,S(t(v),r=>(l(),n("li",{key:r.title,class:"nav-item"},[e(t(i),{class:"nav-link",href:r.url},{default:o(()=>[c(d(r.title),1)]),_:2},1032,["href"])]))),128))])])],512)]),a("div",J,[a("main",U,[h(_.$slots,"header",{},()=>[e(t(A),{title:s.titulo},null,8,["title"]),s.link?(l(),n("header",X,[a("div",j,[a("h1",null,d(s.titulo),1)]),a("div",z,[e(t(i),{href:s.link,class:"btn btn-primary float-sm-end"},{default:o(()=>[G,c(" "+d(s.buttonText),1)]),_:1},8,["href"])])])):(l(),n("header",H,[a("h1",null,d(s.titulo),1)]))],!0),a("article",null,[h(_.$slots,"default",{},void 0,!0)])])])]),_:3})]))}});const W=T(K,[["__scopeId","data-v-cf9a1954"]]);export{W as A};

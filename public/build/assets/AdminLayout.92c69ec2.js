import{d as b,c as p,m as g,n as y,O as x,p as k,i as n,g as e,w as o,o as l,b as a,u as t,q as i,s as c,F as w,r as S,t as d,x as h,X as A,J as I,y as L,z as O}from"./app.8b403c33.js";import{_ as T,a as $,b as q}from"./_plugin-vue_export-helper.5ef89477.js";const u=s=>(L("data-v-71e3b9ea"),s=s(),O(),s),B={class:"admin-layout"},E={class:"main-header navbar sticky-top bg-light flex-md-nowrap p-0 shadow"},F=u(()=>a("button",{class:"navbar-toggler collapsed ms-2 me-auto",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#main-menu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1)),N={class:"navbar-nav"},V={class:"nav-item text-nowrap"},C=u(()=>a("div",{class:"offcanvas-header menu-header"},[a("h5",{id:"main-menu-label",class:"offcanvas-title"}," Equipamentos "),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Fechar"})],-1)),M={class:"offcanvas-body"},z={class:"nav flex-column"},D={class:"admin-wrapper"},J={class:"container pt-3"},U={key:0,class:"row pb-4"},X={class:"col-sm-8"},j={class:"col-sm-4 pt-3 pt-sm-0"},G=u(()=>a("i",{class:"fas fa-plus-circle pr-1"},null,-1)),H={key:1,class:"pb-4"},K=b({__name:"AdminLayout",props:{titulo:String,link:String,buttonText:String},setup(s){const v=p(()=>I().props.admin.menus),f=g(null);let m;return y(()=>{m=new x(f.value)}),k(()=>{m.hide()}),(_,P)=>(l(),n("div",B,[e(T,null,{default:o(()=>[e($),a("header",E,[e(t(i),{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6",href:"/admin/dashboard"},{default:o(()=>[c(" Equipamentos ")]),_:1}),F,a("div",N,[a("div",V,[e(t(i),{class:"nav-link px-3",href:"/logout"},{default:o(()=>[c(" Sair ")]),_:1})])])]),a("aside",null,[a("nav",{id:"main-menu",ref_key:"elOffcanvas",ref:f,class:"offcanvas offcanvas-start",tabindex:"-1","aria-labelledby":"main-menu-label"},[C,a("div",M,[a("ul",z,[(l(!0),n(w,null,S(t(v),r=>(l(),n("li",{key:r.title,class:"nav-item"},[e(t(i),{class:"nav-link",href:r.url},{default:o(()=>[c(d(r.title),1)]),_:2},1032,["href"])]))),128))])])],512)]),a("div",D,[a("main",J,[h(_.$slots,"header",{},()=>[e(t(A),{title:s.titulo},null,8,["title"]),s.link?(l(),n("header",U,[a("div",X,[a("h1",null,d(s.titulo),1)]),a("div",j,[e(t(i),{href:s.link,class:"btn btn-primary float-sm-end"},{default:o(()=>[G,c(" "+d(s.buttonText),1)]),_:1},8,["href"])])])):(l(),n("header",H,[a("h1",null,d(s.titulo),1)]))],!0),a("article",null,[h(_.$slots,"default",{},void 0,!0)])])])]),_:3})]))}});const W=q(K,[["__scopeId","data-v-71e3b9ea"]]);export{W as A};

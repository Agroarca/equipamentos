import{d as F,o as i,k as d,a as o,f as e,w as s,h as l,u as r,n,J as m,c as f,l as v,D as b,E as $,X as x,C as g}from"./app-4cdccdc1.js";import{b as y,_ as k,a as w}from"./_plugin-vue_export-helper-06278407.js";const C={class:"container-fluid menu-container"},S={id:"navbarmenu",class:"row menu-content collapse navbar-collapse"},I={class:"menu navbar-nav"},P=o("li",{class:"nav-item"},null,-1),B={class:"nav-item"},M={class:"nav-item"},N={class:"nav-item"},V=o("li",{class:"nav-item"},null,-1),q=F({__name:"Menu",setup(t){return(c,_)=>(i(),d("nav",null,[o("div",C,[o("div",S,[o("ul",I,[P,o("li",B,[e(r(n),{class:"menu-item",href:"/categoria"},{default:s(()=>[l(" Todas as Categorias ")]),_:1})]),o("li",M,[e(r(n),{class:"menu-item",href:`/equipamento/${[1]}`},{default:s(()=>[l(" Produto Exemplo ")]),_:1})]),o("li",N,[e(r(n),{class:"menu-item",href:"/equipamento/cadastrar"},{default:s(()=>[l(" Cadastrar Produto ")]),_:1})]),V])])])]))}}),E={class:"header"},A={class:"header-contact py-2"},T={class:"container contact-container d-flex flex-nowrap"},D=o("span",{class:"phone"},[o("i",{class:"fas fa-phone-alt"}),l("+55 54 9902-0345")],-1),H=o("span",{class:"mail"},[o("i",{class:"fas fa-envelope"}),l("contato@agroarca.com.br")],-1),J=o("i",{class:"fa-solid fa-chart-line"},null,-1),L=o("span",{class:"d-none d-sm-inline"},"Acessar o Painel",-1),X={class:"py-0 py-md-3 mb-4 navbar navbar-expand-md d-block"},j={class:"container-fluid main flex-wrap flex-md-nowrap"},z={class:"header-item text-decoration-none logo-container order-1"},G=o("img",{class:"logo",src:"/img/logo.png",alt:"Página Inicial"},null,-1),K=o("div",{class:"header-item search-container input-group order-5 order-md-2"},[o("input",{placeholder:"Pequisar produtos...",type:"text",class:"search form-control"}),o("button",{type:"submit"},[o("i",{class:"fa fa-search"})])],-1),O=o("i",{class:"fas fa-user-circle"},null,-1),Q=o("span",{class:"d-none d-xl-block"},"Minha Conta",-1),R=o("button",{class:"header-item menu-container menu-button navbar-toggler collapsed order-4 d-block d-md-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarmenu","aria-controls":"navbarmenu","aria-expanded":"false","aria-label":"Mostrar Menu"},[o("div",{class:"d-flex flex-nowrap"},[o("span",{class:"fa-solid fa-bars"})])],-1),U=F({__name:"Header",setup(t){var _,u,p,h;const c=((h=(p=(u=(_=m())==null?void 0:_.props)==null?void 0:u.auth)==null?void 0:p.user)==null?void 0:h.tipo_usuario)===1;return(_o,Fo)=>(i(),d("div",E,[o("div",A,[o("div",T,[D,H,c?(i(),f(r(n),{key:0,class:"painel",href:"/admin/dashboard"},{default:s(()=>[J,L]),_:1})):v("",!0)])]),o("header",X,[o("div",j,[o("div",z,[e(r(n),{href:"/"},{default:s(()=>[G]),_:1})]),K,e(r(n),{class:"header-item profile-container order-4",href:"/perfil"},{default:s(()=>[O,Q]),_:1}),R]),e(q)])]))}});const W={},a=t=>(b("data-v-2c1610b9"),t=t(),$(),t),Y={class:"footer mt-4"},Z=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),oo=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),eo=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),to=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),so=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),ro=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),ao=a(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),no=[Z,oo,eo,to,so,ro,ao];function co(t,c){return i(),d("div",Y,no)}const lo=y(W,[["render",co],["__scopeId","data-v-2c1610b9"]]),io={class:"site-layout"},ho=F({__name:"SiteLayout",props:{titulo:String},setup(t){return(c,_)=>(i(),d("div",io,[e(r(x),{title:t.titulo},null,8,["title"]),e(k,null,{default:s(()=>[e(w),e(U),g(c.$slots,"default"),e(lo)]),_:3})]))}});export{ho as _};

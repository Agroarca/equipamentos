import{d as F,o as l,k as _,a as o,f as e,w as s,h as c,u as r,n as a,J as f,c as v,l as b,D as $,E as x,X as g,C as y}from"./app-b9eab184.js";import{b as I,_ as k,a as w}from"./_plugin-vue_export-helper-f069264a.js";const S={class:"container-fluid menu-container"},C={id:"navbarmenu",class:"row menu-content collapse navbar-collapse"},M={class:"menu navbar-nav"},P=o("li",{class:"nav-item"},null,-1),A={class:"nav-item"},N={class:"nav-item"},q={class:"nav-item"},B={class:"nav-item"},E=o("li",{class:"nav-item"},null,-1),O=F({__name:"Menu",setup(t){return(i,d)=>(l(),_("nav",null,[o("div",S,[o("div",C,[o("ul",M,[P,o("li",A,[e(r(a),{class:"menu-item",href:"/categoria"},{default:s(()=>[c(" Todas as Categorias ")]),_:1})]),o("li",N,[e(r(a),{class:"menu-item",href:`/equipamento/${[1]}`},{default:s(()=>[c(" Produto Exemplo ")]),_:1})]),o("li",q,[e(r(a),{class:"menu-item",href:"/equipamento/cadastrar"},{default:s(()=>[c(" Cadastrar Produto ")]),_:1})]),o("li",B,[e(r(a),{class:"menu-item",href:"/perfil/equipamentos"},{default:s(()=>[c(" Meus Equipamentos ")]),_:1})]),E])])])]))}}),T={class:"header"},U={class:"header-contact py-2"},V={class:"container contact-container d-flex flex-nowrap"},D=o("span",{class:"phone"},[o("i",{class:"fas fa-phone-alt"}),c("+55 54 9902-0345")],-1),R=o("span",{class:"mail"},[o("i",{class:"fas fa-envelope"}),c("contato@agroarca.com.br")],-1),H=o("i",{class:"fa-solid fa-chart-line"},null,-1),J=o("span",{class:"d-none d-sm-inline"},"Acessar o Painel",-1),L={class:"py-0 py-md-3 mb-4 navbar navbar-expand-md d-block"},X={class:"container-fluid main flex-wrap flex-md-nowrap"},j={class:"header-item text-decoration-none logo-container order-1"},z=o("img",{class:"logo",src:"/img/logo.png",alt:"Página Inicial"},null,-1),G=o("div",{class:"header-item search-container input-group order-5 order-md-2"},[o("input",{placeholder:"Pequisar produtos...",type:"text",class:"search form-control"}),o("button",{type:"submit"},[o("i",{class:"fa fa-search"})])],-1),K=o("i",{class:"fas fa-user-circle"},null,-1),Q=o("span",{class:"d-none d-xl-block"},"Minha Conta",-1),W=o("button",{class:"header-item menu-container menu-button navbar-toggler collapsed order-4 d-block d-md-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarmenu","aria-controls":"navbarmenu","aria-expanded":"false","aria-label":"Mostrar Menu"},[o("div",{class:"d-flex flex-nowrap"},[o("span",{class:"fa-solid fa-bars"})])],-1),Y=F({__name:"Header",setup(t){var u,p,h,m;const d=((m=(h=(p=(u=f())==null?void 0:u.props)==null?void 0:p.auth)==null?void 0:h.user)==null?void 0:m.tipo_usuario)===1;return(uo,po)=>(l(),_("div",T,[o("div",U,[o("div",V,[D,R,d?(l(),v(r(a),{key:0,class:"painel",href:"/admin/dashboard"},{default:s(()=>[H,J]),_:1})):b("",!0)])]),o("header",L,[o("div",X,[o("div",j,[e(r(a),{href:"/"},{default:s(()=>[z]),_:1})]),G,e(r(a),{class:"header-item profile-container order-4",href:"/perfil"},{default:s(()=>[K,Q]),_:1}),W]),e(O)])]))}});const Z={},n=t=>($("data-v-2c1610b9"),t=t(),x(),t),oo={class:"footer mt-4"},eo=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),to=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),so=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),ro=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),ao=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),no=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),co=n(()=>o("p",null,"Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer",-1)),lo=[eo,to,so,ro,ao,no,co];function io(t,i){return l(),_("div",oo,lo)}const _o=I(Z,[["render",io],["__scopeId","data-v-2c1610b9"]]),Fo={class:"site-layout"},fo=F({__name:"SiteLayout",props:{titulo:String},setup(t){return(i,d)=>(l(),_("div",Fo,[e(r(g),{title:t.titulo},null,8,["title"]),e(k,null,{default:s(()=>[e(w),e(Y),y(i.$slots,"default"),e(_o)]),_:3})]))}});export{fo as _};
import{_ as f}from"./AdminLayout.615e25dd.js";import{o as i,a as m,w as r,b as a,h as l,r as h,t as o,f as n,l as c,e as d,L as u,F as g}from"./app.7abc4061.js";import"./Loader.9d72debc.js";const b={class:"card card-default"},_={class:"card-body table-responsive p-0"},p={class:"table table-stripped table-hover"},k=a("thead",null,[a("th",null,"Nome"),a("th",null,"Tipo"),a("th")],-1),v=a("i",{class:"fas fa-magnifying-glass pe-1"},null,-1),y=a("i",{class:"fas fa-eraser pe-1"},null,-1),C={__name:"Inicio",props:["categoria","tipos"],setup(t){return(s,N)=>(i(),m(f,{titulo:"Caracter\xEDsticas de "+t.categoria.nome,link:s.route("admin.categorias.caracteristicas.criar",t.categoria.id),buttonText:"Nova Caracter\xEDstica"},{default:r(()=>[a("div",b,[a("div",_,[a("table",p,[k,a("tbody",null,[(i(!0),l(g,null,h(t.categoria.caracteristicas,e=>(i(),l("tr",{key:e.id},[a("td",null,o(e.nome),1),a("td",null,o(t.tipos[e.tipo]),1),a("td",null,[n(d(u),{class:"btn btn-primary me-2",href:s.route("admin.categorias.caracteristicas.visualizar",[t.categoria.id,e.id])},{default:r(()=>[v,c(" Visualizar ")]),_:2},1032,["href"]),n(d(u),{class:"btn btn-danger",href:s.route("admin.categorias.caracteristicas.excluir",[t.categoria.id,e.id])},{default:r(()=>[y,c(" Excluir ")]),_:2},1032,["href"])])]))),128))])])])])]),_:1},8,["titulo","link"]))}};export{C as default};

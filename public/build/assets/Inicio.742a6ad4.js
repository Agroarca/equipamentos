import{a as f,w as i,o as r,b as a,h as o,r as m,t as l,f as n,p as c,u as d,q as u,F as h}from"./app.d53ed1f4.js";import{A as g}from"./AdminLayout.70b3b65c.js";import"./_plugin-vue_export-helper.1346c3bc.js";const b={class:"card card-default"},p={class:"card-body table-responsive p-0"},_={class:"table table-striped table-hover"},y=a("thead",null,[a("th",null,"Nome"),a("th",null,"Tipo"),a("th")],-1),k=a("i",{class:"fas fa-magnifying-glass pe-1"},null,-1),v=a("i",{class:"fas fa-eraser pe-1"},null,-1),C={__name:"Inicio",props:["categoria","tipos"],setup(t){return(s,N)=>(r(),f(g,{titulo:"Caracter\xEDsticas de "+t.categoria.nome,link:s.route("admin.categorias.caracteristicas.criar",t.categoria.id),"button-text":"Nova Caracter\xEDstica"},{default:i(()=>[a("div",b,[a("div",p,[a("table",_,[y,a("tbody",null,[(r(!0),o(h,null,m(t.categoria.caracteristicas,e=>(r(),o("tr",{key:e.id},[a("td",null,l(e.nome),1),a("td",null,l(t.tipos[e.tipo]),1),a("td",null,[n(d(u),{class:"btn btn-primary me-2",href:s.route("admin.categorias.caracteristicas.visualizar",[t.categoria.id,e.id])},{default:i(()=>[k,c(" Visualizar ")]),_:2},1032,["href"]),n(d(u),{class:"btn btn-danger",href:s.route("admin.categorias.caracteristicas.excluir",[t.categoria.id,e.id])},{default:i(()=>[v,c(" Excluir ")]),_:2},1032,["href"])])]))),128))])])])])]),_:1},8,["titulo","link"]))}};export{C as default};

import{d as u,c as m,w as s,o as i,a,k as r,m as f,t as o,f as l,h as n,u as c,n as d,F as h}from"./app-27f9bc00.js";import{A as g}from"./AdminLayout-b7945028.js";import"./_plugin-vue_export-helper-d695034f.js";import"./index-ac617c56.js";const b={class:"card card-default"},p={class:"card-body table-responsive p-0"},_={class:"table table-striped table-hover"},y=a("thead",null,[a("th",null,"Nome"),a("th",null,"Tipo"),a("th")],-1),k=a("i",{class:"fas fa-magnifying-glass pe-1"},null,-1),x=a("i",{class:"fas fa-eraser pe-1"},null,-1),A=u({__name:"Inicio",props:{categoria:Object,tipos:Array},setup(t){return(v,N)=>(i(),m(g,{titulo:"Características de "+t.categoria.nome,link:`/admin/categorias/${t.categoria.id}/caracteristicas/criar`,buttonText:"Nova Característica"},{default:s(()=>[a("div",b,[a("div",p,[a("table",_,[y,a("tbody",null,[(i(!0),r(h,null,f(t.categoria.caracteristicas,e=>(i(),r("tr",{key:e.id},[a("td",null,o(e.nome),1),a("td",null,o(t.tipos[e.tipo]),1),a("td",null,[l(c(d),{class:"btn btn-primary me-2",href:`/admin/categorias/${t.categoria.id}/caracteristicas/${e.id}/visualizar`},{default:s(()=>[k,n(" Visualizar ")]),_:2},1032,["href"]),l(c(d),{class:"btn btn-danger",href:`/admin/categorias/${t.categoria.id}/caracteristicas/${e.id}/excluir`},{default:s(()=>[x,n(" Excluir ")]),_:2},1032,["href"])])]))),128))])])])])]),_:1},8,["titulo","link"]))}});export{A as default};

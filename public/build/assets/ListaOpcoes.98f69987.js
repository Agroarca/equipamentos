import{g as s,b as a,e as i,w as l,u as o,F as u,r as h,o as c,n as d,p as n,t as _}from"./app.f56e2738.js";const f={class:"card card-default"},m={class:"card-header"},p={class:"row"},b=a("div",{class:"col-sm-8"},[a("h5",null,"Op\xE7\xF5es")],-1),g={class:"col-sm-4 pt-3 pt-sm-0"},v=a("i",{class:"fas fa-plus-circle pr-1"},null,-1),y={class:"card-body table-responsive p-0"},x={class:"table table-stri=ped table-hover"},N=a("thead",null,[a("th",null,"Nome"),a("th")],-1),k=a("i",{class:"fas fa-eraser pe-1"},null,-1),O={__name:"ListaOpcoes",props:["caracteristica"],setup(e){return(r,w)=>(c(),s("div",f,[a("div",m,[a("div",p,[b,a("div",g,[i(o(n),{href:r.route("admin.categorias.caracteristicas.opcoes.criar",[e.caracteristica.categoria_id,e.caracteristica.id]),class:"btn btn-primary float-sm-end"},{default:l(()=>[v,d(" Criar Op\xE7\xE3o ")]),_:1},8,["href"])])])]),a("div",y,[a("table",x,[N,a("tbody",null,[(c(!0),s(u,null,h(e.caracteristica.opcoes,t=>(c(),s("tr",{key:t.id},[a("td",null,_(t.nome),1),a("td",null,[i(o(n),{class:"btn btn-danger",href:r.route("admin.categorias.caracteristicas.opcoes.excluir",[e.caracteristica.categoria_id,e.caracteristica.id,t.id])},{default:l(()=>[k,d(" Excluir ")]),_:2},1032,["href"])])]))),128))])])])]))}};export{O as default};
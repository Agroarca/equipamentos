import{d as n,k as s,a,f as r,w as i,u as o,F as h,m as _,o as c,h as l,n as d,t as u}from"./app-53845742.js";const f={class:"card card-default"},m={class:"card-header"},p={class:"row"},b=a("div",{class:"col-sm-8"},[a("h5",null,"Opções")],-1),v={class:"col-sm-4 pt-3 pt-sm-0"},g=a("i",{class:"fas fa-plus-circle pr-1"},null,-1),x={class:"card-body table-responsive p-0"},y={class:"table table-stri=ped table-hover"},$=a("thead",null,[a("th",null,"Nome"),a("th")],-1),k=a("i",{class:"fas fa-eraser pe-1"},null,-1),B=n({__name:"ListaOpcoes",props:{caracteristica:Object},setup(e){return(N,O)=>(c(),s("div",f,[a("div",m,[a("div",p,[b,a("div",v,[r(o(d),{href:`/admin/categorias/${e.caracteristica.categoria_id}/caracteristicas/${e.caracteristica.id}/opcoes/criar`,class:"btn btn-primary float-sm-end"},{default:i(()=>[g,l(" Criar Opção ")]),_:1},8,["href"])])])]),a("div",x,[a("table",y,[$,a("tbody",null,[(c(!0),s(h,null,_(e.caracteristica.opcoes,t=>(c(),s("tr",{key:t.id},[a("td",null,u(t.nome),1),a("td",null,[r(o(d),{class:"btn btn-danger",href:`/admin/categorias/${e.caracteristica.categoria_id}/caracteristicas/${e.caracteristica.id}/opcoes/${t.id}/excluir`},{default:i(()=>[k,l(" Excluir ")]),_:2},1032,["href"])])]))),128))])])])]))}});export{B as _};

import{d as n,i as t,b as a,g as r,w as i,u as o,F as _,r as h,o as c,s as l,q as d,t as u}from"./app.d831804b.js";const f={class:"card card-default"},m={class:"card-header"},b={class:"row"},p=a("div",{class:"col-sm-8"},[a("h5",null,"Op\xE7\xF5es")],-1),x={class:"col-sm-4 pt-3 pt-sm-0"},g=a("i",{class:"fas fa-plus-circle pr-1"},null,-1),v={class:"card-body table-responsive p-0"},y={class:"table table-stri=ped table-hover"},E=a("thead",null,[a("th",null,"Nome"),a("th")],-1),$=a("i",{class:"fas fa-eraser pe-1"},null,-1),w=n({__name:"ListaOpcoes",props:{caracteristica:Object},setup(e){return(N,O)=>(c(),t("div",f,[a("div",m,[a("div",b,[p,a("div",x,[r(o(d),{href:`/admin/categorias/${e.caracteristica.categoria_id}/caracteristicas/${e.caracteristica.id}/opcoes/criar`,class:"btn btn-primary float-sm-end"},{default:i(()=>[g,l(" Criar Op\xE7\xE3o ")]),_:1},8,["href"])])])]),a("div",v,[a("table",y,[E,a("tbody",null,[(c(!0),t(_,null,h(e.caracteristica.opcoes,s=>(c(),t("tr",{key:s.id},[a("td",null,u(s.nome),1),a("td",null,[r(o(d),{class:"btn btn-danger",href:`/admin/categorias/${e.caracteristica.categoria_id}/caracteristicas/${e.caracteristica.id}/opcoes/${s.id}/excluir`},{default:i(()=>[$,l(" Excluir ")]),_:2},1032,["href"])])]))),128))])])])]))}});export{w as _};

import{d as n,i as t,b as e,I as i,k as c,o as s}from"./app.ea60e970.js";const o={class:"nav nav-pills"},l={class:"nav-item"},d=["href"],m={class:"nav-item"},r=["href"],u={class:"nav-item"},h=["href"],v={class:"nav-item"},f=["href"],q={key:0,class:"nav-item"},g=["href"],x=n({__name:"Navegacao",props:{paginaAtual:String,equipamento:Object},setup(a){return(_,k)=>(s(),t("ul",o,[e("li",l,[e("a",{class:i(["nav-link",{active:a.paginaAtual=="cadastro"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar`},"Editar",10,d)]),e("li",m,[e("a",{class:i(["nav-link",{active:a.paginaAtual=="descricao"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/descricao`},"Descri\xE7\xE3o",10,r)]),e("li",u,[e("a",{class:i(["nav-link",{active:a.paginaAtual=="caracteristicas"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/caracteristicas`},"Caracteristicas",10,h)]),e("li",v,[e("a",{class:i(["nav-link",{active:a.paginaAtual=="imagens"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/imagens`},"Imagens",10,f)]),a.equipamento.status==1?(s(),t("li",q,[e("a",{class:i(["nav-link",{active:a.paginaAtual=="aprovacao"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/aprovacao`},"Aprova\xE7\xE3o",10,g)])):c("",!0)]))}});export{x as _};
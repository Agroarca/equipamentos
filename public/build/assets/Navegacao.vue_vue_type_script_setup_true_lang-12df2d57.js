import{d as r,k as o,a as l,f as e,w as t,q as i,u as s,l as m,o as d,h as n,n as c}from"./app-b9eab184.js";const u={class:"nav nav-pills"},v={class:"nav-item"},f={class:"nav-item"},h={class:"nav-item"},q={class:"nav-item"},g={key:0,class:"nav-item"},_=r({__name:"Navegacao",props:{paginaAtual:String,equipamento:Object},setup(a){return(k,p)=>(d(),o("ul",u,[l("li",v,[e(s(c),{class:i(["nav-link",{active:a.paginaAtual=="cadastro"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar`},{default:t(()=>[n(" Editar ")]),_:1},8,["class","href"])]),l("li",f,[e(s(c),{class:i(["nav-link",{active:a.paginaAtual=="descricao"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/descricao`},{default:t(()=>[n(" Descrição ")]),_:1},8,["class","href"])]),l("li",h,[e(s(c),{class:i(["nav-link",{active:a.paginaAtual=="caracteristicas"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/caracteristicas`},{default:t(()=>[n(" Caracteristicas ")]),_:1},8,["class","href"])]),l("li",q,[e(s(c),{class:i(["nav-link",{active:a.paginaAtual=="imagens"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/imagens`},{default:t(()=>[n(" Imagens ")]),_:1},8,["class","href"])]),a.equipamento.status==1?(d(),o("li",g,[e(s(c),{class:i(["nav-link",{active:a.paginaAtual=="aprovacao"}]),href:`/admin/equipamentos/${a.equipamento.id}/editar/aprovacao`},{default:t(()=>[n(" Aprovação ")]),_:1},8,["class","href"])])):m("",!0)]))}});export{_};

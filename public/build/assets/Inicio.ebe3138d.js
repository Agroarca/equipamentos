import{d as u,a as m,w as o,o as a,b as e,i as n,r as _,t as r,g as l,s as d,u as i,q as c,F as h,k as f}from"./app.5b090f15.js";import{A as p}from"./AdminLayout.92fe1d95.js";import{_ as b}from"./Paginacao.vue_vue_type_script_setup_true_lang.a371ab78.js";import"./_plugin-vue_export-helper.c3f97864.js";const k={class:"card card-default"},x={class:"card-body table-responsive p-0"},y={class:"table table-striped table-hover"},N=e("thead",null,[e("th",null,"Nome"),e("th",null,"Marca"),e("th")],-1),g=e("i",{class:"fas fa-pen-to-square pe-1"},null,-1),v=e("i",{class:"fas fa-eraser pe-1"},null,-1),B={key:0},V=e("td",{colspan:"3"}," Nenhum registro encontrado ",-1),C=[V],F=u({__name:"Inicio",props:{modelos:Object},setup(s){return(E,M)=>(a(),m(p,{titulo:"Modelos",link:"/admin/modelos/criar/","button-text":"Novo Modelo"},{default:o(()=>[e("div",k,[e("div",x,[e("table",y,[N,e("tbody",null,[(a(!0),n(h,null,_(s.modelos.data,t=>(a(),n("tr",{key:t.id},[e("td",null,r(t.nome),1),e("td",null,r(t.marca.nome),1),e("td",null,[l(i(c),{class:"btn btn-primary me-2",href:`/admin/modelos/${t.id}/editar`},{default:o(()=>[g,d(" Editar ")]),_:2},1032,["href"]),l(i(c),{class:"btn btn-danger",href:`/admin/marcas/${t.id}/excluir`},{default:o(()=>[v,d(" Excluir ")]),_:2},1032,["href"])])]))),128)),s.modelos.data.length==0?(a(),n("tr",B,C)):f("",!0)])])])]),l(b,{class:"mt-4",links:s.modelos.links},null,8,["links"])]),_:1}))}});export{F as default};

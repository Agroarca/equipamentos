import{d as y,a as p,w as s,u as r,o as i,q as o,s as n,t as d,k as m,b as a,i as c,r as x,g as l,F as C}from"./app.c3c88734.js";import{A as N}from"./AdminLayout.5eca6408.js";import{_ as $}from"./Paginacao.vue_vue_type_script_setup_true_lang.0cbbd525.js";import"./_plugin-vue_export-helper.675d2713.js";import"./index.c57ba517.js";const v=a("i",{class:"fas fa-arrow-left me-1"},null,-1),E={class:"card card-default"},B={class:"card-body table-responsive p-0"},V={class:"table table-striped table-hover"},w=a("thead",null,[a("th",null,"Nome"),a("th",null,"Categoria M\xE3e"),a("th")],-1),j={key:0},q=a("i",{class:"fas fa-sliders pe-1"},null,-1),A=a("i",{class:"fas fa-bars-staggered pe-1"},null,-1),D=a("i",{class:"fas fa-pen-to-square pe-1"},null,-1),F=a("i",{class:"fas fa-eraser pe-1"},null,-1),L={key:0},O=a("td",{colspan:"3"}," Nenhum registro encontrado ",-1),S=[O],K=y({__name:"Inicio",props:{categorias:Object,categoria:Object},setup(t){var f;const u=t,k=(f=u.categoria)!=null&&f.nome?`Categorias de ${u.categoria.nome}`:"Categorias";return(I,M)=>(i(),p(N,{titulo:r(k),link:"/admin/categorias/criar/","button-text":"Nova Categoria"},{default:s(()=>{var _,h;return[t.categoria?(i(),p(r(o),{key:0,class:"btn btn-primary mb-3",href:`/admin/categorias/${(h=(_=t.categoria)==null?void 0:_.categoria_mae_id)!=null?h:""}`},{default:s(()=>{var e,b,g;return[v,n(" "+d((g=(b=(e=t.categoria)==null?void 0:e.categoria_mae)==null?void 0:b.nome)!=null?g:"Categorias"),1)]}),_:1},8,["href"])):m("",!0),a("div",E,[a("div",B,[a("table",V,[w,a("tbody",null,[(i(!0),c(C,null,x(t.categorias.data,e=>(i(),c("tr",{key:e.id},[a("td",null,d(e.nome),1),a("td",null,[e.categoria_mae?(i(),c("span",j,d(e.categoria_mae.nome),1)):m("",!0)]),a("td",null,[l(r(o),{class:"btn btn-primary me-2",href:`/admin/categorias/${e.id}/caracteristicas`},{default:s(()=>[q,n(" Caracter\xEDsticas ")]),_:2},1032,["href"]),l(r(o),{class:"btn btn-primary me-2",href:`/admin/categorias/${e==null?void 0:e.id}`},{default:s(()=>[A,n(" Subcategorias ")]),_:2},1032,["href"]),l(r(o),{class:"btn btn-primary me-2",href:`/admin/categorias/${e.id}/editar`},{default:s(()=>[D,n(" Editar ")]),_:2},1032,["href"]),l(r(o),{class:"btn btn-danger",href:`/admin/categorias/${e.id}/excluir`},{default:s(()=>[F,n(" Excluir ")]),_:2},1032,["href"])])]))),128)),t.categorias.data.length==0?(i(),c("tr",L,S)):m("",!0)])])])]),l($,{class:"mt-4",links:t.categorias.links},null,8,["links"])]}),_:1},8,["titulo"]))}});export{K as default};

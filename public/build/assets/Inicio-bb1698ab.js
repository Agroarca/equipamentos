import{d as k,c as g,w as r,u as s,o as i,n as o,h as n,t as m,l as u,a,k as d,m as y,f as c,F as C}from"./app-b9eab184.js";import{A as $}from"./AdminLayout-58947122.js";import{_ as x}from"./Paginacao.vue_vue_type_script_setup_true_lang-ed7f885f.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";const N=a("i",{class:"fas fa-arrow-left me-1"},null,-1),v={class:"card card-default"},B={class:"card-body table-responsive p-0"},V={class:"table table-striped table-hover"},w=a("thead",null,[a("th",null,"Nome"),a("th",null,"Categoria Mãe"),a("th")],-1),E={key:0},j=a("i",{class:"fas fa-sliders pe-1"},null,-1),A=a("i",{class:"fas fa-bars-staggered pe-1"},null,-1),F=a("i",{class:"fas fa-pen-to-square pe-1"},null,-1),L=a("i",{class:"fas fa-eraser pe-1"},null,-1),O={key:0},S=a("td",{colspan:"3"}," Nenhum registro encontrado ",-1),T=[S],J=k({__name:"Inicio",props:{categorias:Object,categoria:Object},setup(t){var f;const l=t,b=(f=l.categoria)!=null&&f.nome?`Categorias de ${l.categoria.nome}`:"Categorias",p=l.categoria?`/admin/categorias/criar/${l.categoria.id}`:"/admin/categorias/criar";return(q,D)=>(i(),g($,{titulo:s(b),link:s(p),buttonText:"Nova Categoria"},{default:r(()=>{var _;return[t.categoria?(i(),g(s(o),{key:0,class:"btn btn-primary mb-3",href:`/admin/categorias/${((_=t.categoria)==null?void 0:_.categoria_mae_id)??""}`},{default:r(()=>{var e,h;return[N,n(" "+m(((h=(e=t.categoria)==null?void 0:e.categoria_mae)==null?void 0:h.nome)??"Categorias"),1)]}),_:1},8,["href"])):u("",!0),a("div",v,[a("div",B,[a("table",V,[w,a("tbody",null,[(i(!0),d(C,null,y(t.categorias.data,e=>(i(),d("tr",{key:e.id},[a("td",null,m(e.nome),1),a("td",null,[e.categoria_mae?(i(),d("span",E,m(e.categoria_mae.nome),1)):u("",!0)]),a("td",null,[c(s(o),{class:"btn btn-primary me-2",href:`/admin/categorias/${e.id}/caracteristicas`},{default:r(()=>[j,n(" Características ")]),_:2},1032,["href"]),c(s(o),{class:"btn btn-primary me-2",href:`/admin/categorias/${e==null?void 0:e.id}`},{default:r(()=>[A,n(" Subcategorias ")]),_:2},1032,["href"]),c(s(o),{class:"btn btn-primary me-2",href:`/admin/categorias/${e.id}/editar`},{default:r(()=>[F,n(" Editar ")]),_:2},1032,["href"]),c(s(o),{class:"btn btn-danger",href:`/admin/categorias/${e.id}/excluir`},{default:r(()=>[L,n(" Excluir ")]),_:2},1032,["href"])])]))),128)),t.categorias.data.length==0?(i(),d("tr",O,T)):u("",!0)])])])]),c(x,{class:"mt-4",links:t.categorias.links},null,8,["links"])]}),_:1},8,["titulo","link"]))}});export{J as default};

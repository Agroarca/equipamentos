import{d as p,m as g,v,a as b,w as h,o as x,b as o,e as y,f as C,u as r,g as m,l as _,s as w}from"./app.4b95508f.js";import{A as M}from"./AdminLayout.59bfc54b.js";import{_ as k}from"./FormError.vue_vue_type_script_setup_true_lang.0757605a.js";import{_ as N}from"./AlterarCategoriaMae.vue_vue_type_script_setup_true_lang.dffb32ab.js";import"./_plugin-vue_export-helper.fe828b9f.js";import"./Modal.vue_vue_type_script_setup_true_lang.50d76216.js";const V=["onSubmit"],$={class:"card card-default"},B={class:"card-body"},E={class:"mb-3"},S=o("label",{for:"nome"},"Nome",-1),A={class:"mb-3"},T=o("label",{for:"nome"},"Categoria M\xE3e",-1),j={class:"d-flex"},q={class:"flex-grow-1"},z=["value"],D={class:"ms-2"},L=o("i",{class:"fas fa-rotate"},null,-1),O=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),K=p({__name:"Editar",props:{categoria:Object},setup(a){const s=a,i=g(null),t=v({nome:s.categoria.nome,categoria_mae_id:s.categoria.categoria_mae_id});function n(){t.post(`admin/categorias/${s.categoria.id}/atualizar`)}function u(){i.value.show()}function f(c){t.categoria_mae_id=c,n()}return(c,e)=>(x(),b(M,{titulo:"Editar Categoria"},{default:h(()=>{var d;return[o("form",{onSubmit:_(n,["prevent"])},[o("div",$,[o("div",B,[o("div",E,[S,y(o("input",{id:"nome","onUpdate:modelValue":e[0]||(e[0]=l=>r(t).nome=l),class:"form-control",type:"text",required:""},null,512),[[C,r(t).nome]]),m(k,{error:r(t).errors.nome},null,8,["error"])]),o("div",A,[T,o("div",j,[o("div",q,[o("input",{id:"nome",class:"form-control",type:"text",value:(d=a.categoria.categoria_mae)==null?void 0:d.nome,disabled:""},null,8,z)]),o("div",D,[o("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=_(l=>u(),["prevent"]))},[L,w(" Mover ")])])])])]),O])],40,V),m(N,{ref_key:"alterarCategoria",ref:i,categoria:a.categoria,onMoverCategoria:f},null,8,["categoria"])]}),_:1}))}});export{K as default};

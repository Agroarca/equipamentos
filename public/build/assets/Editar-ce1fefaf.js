import{d as p,r as g,v,c as b,w as h,o as x,a as o,b as y,e as C,u as s,f as m,g as _,h as w}from"./app-b9eab184.js";import{A as M}from"./AdminLayout-58947122.js";import{_ as k}from"./FormError.vue_vue_type_script_setup_true_lang-8975cccc.js";import{_ as N}from"./AlterarCategoriaMae.vue_vue_type_script_setup_true_lang-5e89bb8f.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";import"./Modal.vue_vue_type_script_setup_true_lang-98b65518.js";const V=["onSubmit"],$={class:"card card-default"},B={class:"card-body"},S={class:"mb-3"},A=o("label",{for:"nome"},"Nome",-1),E={class:"mb-3"},T=o("label",{for:"nome"},"Categoria Mãe",-1),j={class:"d-flex"},q={class:"flex-grow-1"},z=["value"],D={class:"ms-2"},L=o("i",{class:"fas fa-rotate"},null,-1),O=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),P=p({__name:"Editar",props:{categoria:Object},setup(a){const r=a,i=g(null),t=v({nome:r.categoria.nome,categoria_mae_id:r.categoria.categoria_mae_id});function n(){t.post(`/admin/categorias/${r.categoria.id}/atualizar`)}function u(){i.value.show()}function f(c){t.categoria_mae_id=c,n()}return(c,e)=>(x(),b(M,{titulo:"Editar Categoria"},{default:h(()=>{var d;return[o("form",{onSubmit:_(n,["prevent"])},[o("div",$,[o("div",B,[o("div",S,[A,y(o("input",{id:"nome","onUpdate:modelValue":e[0]||(e[0]=l=>s(t).nome=l),class:"form-control",type:"text",required:""},null,512),[[C,s(t).nome]]),m(k,{error:s(t).errors.nome},null,8,["error"])]),o("div",E,[T,o("div",j,[o("div",q,[o("input",{id:"nome",class:"form-control",type:"text",value:(d=a.categoria.categoria_mae)==null?void 0:d.nome,disabled:""},null,8,z)]),o("div",D,[o("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=_(l=>u(),["prevent"]))},[L,w(" Mover ")])])])])]),O])],40,V),m(N,{ref_key:"alterarCategoria",ref:i,categoria:a.categoria,onMoverCategoria:f},null,8,["categoria"])]}),_:1}))}});export{P as default};

import{d as p,r as v,C as g,c as b,w as h,o as x,a as o,D as C,E as y,u as s,h as m,G as _,i as w}from"./app.eed770cd.js";import{A as M}from"./AdminLayout.c1e4d170.js";import{_ as k}from"./FormError.vue_vue_type_script_setup_true_lang.dd6e1467.js";import{_ as E}from"./AlterarCategoriaMae.vue_vue_type_script_setup_true_lang.83188b73.js";import"./_plugin-vue_export-helper.c11c3f1f.js";import"./index.c57ba517.js";import"./Modal.vue_vue_type_script_setup_true_lang.566bd592.js";const N=["onSubmit"],V={class:"card card-default"},$={class:"card-body"},B={class:"mb-3"},S=o("label",{for:"nome"},"Nome",-1),A={class:"mb-3"},D=o("label",{for:"nome"},"Categoria M\xE3e",-1),T={class:"d-flex"},j={class:"flex-grow-1"},q=["value"],z={class:"ms-2"},G=o("i",{class:"fas fa-rotate"},null,-1),L=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),P=p({__name:"Editar",props:{categoria:Object},setup(a){const r=a,i=v(null),t=g({nome:r.categoria.nome,categoria_mae_id:r.categoria.categoria_mae_id});function n(){t.post(`/admin/categorias/${r.categoria.id}/atualizar`)}function u(){i.value.show()}function f(c){t.categoria_mae_id=c,n()}return(c,e)=>(x(),b(M,{titulo:"Editar Categoria"},{default:h(()=>{var d;return[o("form",{onSubmit:_(n,["prevent"])},[o("div",V,[o("div",$,[o("div",B,[S,C(o("input",{id:"nome","onUpdate:modelValue":e[0]||(e[0]=l=>s(t).nome=l),class:"form-control",type:"text",required:""},null,512),[[y,s(t).nome]]),m(k,{error:s(t).errors.nome},null,8,["error"])]),o("div",A,[D,o("div",T,[o("div",j,[o("input",{id:"nome",class:"form-control",type:"text",value:(d=a.categoria.categoria_mae)==null?void 0:d.nome,disabled:""},null,8,q)]),o("div",z,[o("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=_(l=>u(),["prevent"]))},[G,w(" Mover ")])])])])]),L])],40,N),m(E,{ref_key:"alterarCategoria",ref:i,categoria:a.categoria,onMoverCategoria:f},null,8,["categoria"])]}),_:1}))}});export{P as default};
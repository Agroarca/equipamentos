import{l as p,u as v,o as g,a as b,w as h,b as o,d as x,v as y,e as s,f as m,k as _,p as C}from"./app.581310a4.js";import{A as w}from"./AdminLayout.7bb35c16.js";import{_ as M}from"./FormError.702c109e.js";import k from"./AlterarCategoriaMae.ca18f3a9.js";import"./_plugin-vue_export-helper.4f1ee863.js";import"./Modal.8fa5cf4e.js";const N=["onSubmit"],V={class:"card card-default"},B={class:"card-body"},S={class:"mb-3"},$=o("label",{for:"nome"},"Nome",-1),A={class:"mb-3"},E=o("label",{for:"nome"},"Categoria M\xE3e",-1),T={class:"d-flex"},q={class:"flex-grow-1"},z=["value"],D={class:"ms-2"},F=o("i",{class:"fas fa-rotate"},null,-1),L=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"},"Salvar")],-1),K={__name:"Editar",props:["categoria"],setup(a){const r=a;let i=p(null);const t=v({nome:r.categoria.nome,categoria_mae_id:r.categoria.categoria_mae_id});function n(){t.post(route("admin.categorias.atualizar",r.categoria.id))}function u(){i.value.show()}function f(c){t.categoria_mae_id=c,n()}return(c,e)=>(g(),b(w,{titulo:"Editar Categoria"},{default:h(()=>{var l;return[o("form",{onSubmit:_(n,["prevent"])},[o("div",V,[o("div",B,[o("div",S,[$,x(o("input",{class:"form-control",type:"text",id:"nome","onUpdate:modelValue":e[0]||(e[0]=d=>s(t).nome=d),required:""},null,512),[[y,s(t).nome]]),m(M,{error:s(t).errors.nome},null,8,["error"])]),o("div",A,[E,o("div",T,[o("div",q,[o("input",{class:"form-control",type:"text",id:"nome",value:(l=a.categoria.categoria_mae)==null?void 0:l.nome,disabled:""},null,8,z)]),o("div",D,[o("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=_(d=>u(),["prevent"]))},[F,C(" Mover ")])])])])]),L])],40,N),m(k,{categoria:a.categoria,ref_key:"alterarCategoria",ref:i,onMoverCategoria:f},null,8,["categoria"])]}),_:1}))}};export{K as default};

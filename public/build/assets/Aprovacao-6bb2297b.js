import{d as p,v,c as _,w as f,o as u,f as e,a as o,b,p as A,u as a,k as h,l as q,q as V,t as y}from"./app-b9eab184.js";import{_ as S}from"./Editor.vue_vue_type_script_setup_true_lang-4ea0c8b7.js";import{_ as c}from"./FormError.vue_vue_type_script_setup_true_lang-8975cccc.js";import{A as k}from"./AdminLayout-58947122.js";import{_ as x}from"./Navegacao.vue_vue_type_script_setup_true_lang-12df2d57.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";const E={class:"card card-default"},O=o("div",{class:"card-header"},[o("h5",{class:"card-title"}," Aprovação do equipamento ")],-1),C={class:"card-body p-0"},g={class:"p-3"},w=o("label",{for:"status"},"Ação:",-1),B={key:0},D=o("h5",{class:"px-3 pt-3"}," Motivo da reprovação: ",-1),R=o("div",{class:"alert alert-warning mb-0"},[o("label",{for:"motivo_reprovado"},"O motivo da reprovação será informado ao vendedor.")],-1),T=o("hr",{class:"m-0"},null,-1),U={class:"card-footer"},G=p({__name:"Aprovacao",props:{equipamento:Object,statusEquipamento:Array},setup(r){const l=r,t=v({motivo_reprovado:l.equipamento.motivo_reprovado,status:null}),d=2,n=5;function m(){t.post(`/admin/equipamentos/${l.equipamento.id}/status/atualizar`)}return($,s)=>(u(),_(k,{titulo:"Editar Equipamento"},{default:f(()=>[e(x,{class:"mb-4 d-flex flex-roll justify-content-center",equipamento:r.equipamento,paginaAtual:"aprovacao"},null,8,["equipamento"]),o("div",E,[O,o("div",C,[o("div",g,[w,b(o("select",{id:"status","onUpdate:modelValue":s[0]||(s[0]=i=>a(t).status=i),name:"status",class:"form-control mt-2"},[o("option",{value:d}," Aprovar "),o("option",{value:n}," Reprovar ")],512),[[A,a(t).status]]),e(c,{error:a(t).errors.status},null,8,["error"])]),a(t).status==n?(u(),h("div",B,[D,R,T,e(S,{modelValue:a(t).motivo_reprovado,"onUpdate:modelValue":s[1]||(s[1]=i=>a(t).motivo_reprovado=i),name:"motivo_reprovado",class:"aprovacao"},null,8,["modelValue"]),e(c,{error:a(t).errors.motivo_reprovado},null,8,["error"])])):q("",!0)]),o("div",U,[o("button",{type:"button",class:V(["btn btn-secondary",{disabled:!a(t).status,"btn-success":a(t).status==d,"btn-danger":a(t).status==n}]),onClick:m},y(r.statusEquipamento[a(t).status]??"Selecione uma ação"),3)])])]),_:1}))}});export{G as default};

import{d as _,v,k as u,a as t,b as f,p as b,u as s,f as n,l as h,q as A,t as V,o as c}from"./app-fc9eabe0.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang-4e296645.js";import{_ as q}from"./Editor.vue_vue_type_script_setup_true_lang-c0451bd4.js";const S={class:"card card-default"},y=t("div",{class:"card-header"},[t("h5",{class:"card-title"}," Aprovação do equipamento ")],-1),k={class:"card-body p-0"},O={class:"p-3"},C=t("label",{for:"status"},"Ação:",-1),D={key:0},E=t("h5",{class:"p-3"}," Motivo da reprovação: ",-1),R=t("hr",{class:"m-0"},null,-1),T={class:"card-footer"},$=_({__name:"Aprovacao",props:{equipamento:Object,statusEquipamento:Array},setup(i){const l=i,o=v({motivo_reprovado:l.equipamento.motivo_reprovado,status:null}),d=2,e=5;function p(){o.post(`/admin/equipamentos/${l.equipamento.id}/status/atualizar`)}return(U,a)=>(c(),u("div",S,[y,t("div",k,[t("div",O,[C,f(t("select",{id:"status","onUpdate:modelValue":a[0]||(a[0]=r=>s(o).status=r),name:"status",class:"form-control mt-2"},[t("option",{value:d}," Aprovar "),t("option",{value:e}," Reprovar ")],512),[[b,s(o).status]]),n(m,{error:s(o).errors.status},null,8,["error"])]),s(o).status==e?(c(),u("div",D,[E,R,n(q,{modelValue:s(o).motivo_reprovado,"onUpdate:modelValue":a[1]||(a[1]=r=>s(o).motivo_reprovado=r),class:"aprovacao"},null,8,["modelValue"]),n(m,{error:s(o).errors.motivo_reprovado},null,8,["error"])])):h("",!0)]),t("div",T,[t("button",{type:"button",class:A(["btn btn-secondary",{disabled:!s(o).status,"btn-success":s(o).status==d,"btn-danger":s(o).status==e}]),onClick:p},V(i.statusEquipamento[s(o).status]??"Selecione uma ação"),3)])]))}});export{$ as default};
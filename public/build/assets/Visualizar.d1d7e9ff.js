import{A as h}from"./AdminLayout.2db26d65.js";import{_ as b}from"./ListaOpcoes.vue_vue_type_script_setup_true_lang.10418178.js";import{t as f,a as p,m as v,b as k,c as y}from"./Base.87d3ad57.js";import{d as x,a as l,w as C,o as s,b as t,u as i,i as e,t as n,k as c}from"./app.e1a1d14f.js";import"./_plugin-vue_export-helper.f4461edf.js";const g={class:"card card-default"},D={class:"card-body"},T={class:"mb-3"},B=t("label",{for:"nome"},"Nome",-1),M=["value"],O={class:"mb-3"},V=t("label",{for:"tipo"},"Tipo:",-1),q=["value"],w={class:"mb-3 form-check form-switch"},A=["checked"],N=t("label",{class:"form-check-label",for:"obrigatorio"},"Obrigat\xF3rio",-1),$={key:0,class:"mb-3"},z={for:"minimo"},E=["value"],j={key:1,class:"mb-3"},F={for:"maximo"},L=["value"],Q={key:2,class:"mb-3"},S=t("label",{for:"quantidade"},"Quantidade de Casas Decimais",-1),G=["value"],W=x({__name:"Visualizar",props:{caracteristica:Object,tipos:Array},setup(a){const o=a,m=f(o.caracteristica.tipo),d=p(o.caracteristica.tipo),r=v(o.caracteristica.tipo),u=k(o.caracteristica.tipo),_=y(o.caracteristica.tipo);return(H,I)=>(s(),l(h,{titulo:"Visualizar Caracter\xEDstica"},{default:C(()=>[t("form",null,[t("div",g,[t("div",D,[t("div",T,[B,t("input",{id:"nome",class:"form-control",type:"text",value:a.caracteristica.nome,disabled:""},null,8,M)]),t("div",O,[V,t("input",{id:"tipo",class:"form-control",type:"text",value:a.tipos[a.caracteristica.tipo],disabled:""},null,8,q)]),t("div",w,[t("input",{id:"obrigatorio",class:"form-check-input",type:"checkbox",checked:a.caracteristica.obrigatorio,disabled:""},null,8,A),N]),i(r)?(s(),e("div",$,[t("label",z,n(i(m)),1),t("input",{id:"minimo",class:"form-control",type:"number",value:a.caracteristica.minimo,disabled:""},null,8,E)])):c("",!0),i(r)?(s(),e("div",j,[t("label",F,n(i(d)),1),t("input",{id:"maximo",class:"form-control",type:"number",value:a.caracteristica.maximo,disabled:""},null,8,L)])):c("",!0),i(u)?(s(),e("div",Q,[S,t("input",{id:"quantidade",class:"form-control",type:"number",value:a.caracteristica.quantidade,disabled:""},null,8,G)])):c("",!0)])])]),i(_)?(s(),l(b,{key:0,class:"mt-5",caracteristica:a.caracteristica},null,8,["caracteristica"])):c("",!0)]),_:1}))}});export{W as default};

import{A as h}from"./AdminLayout-f0beaab8.js";import{_ as b}from"./ListaOpcoes.vue_vue_type_script_setup_true_lang-63315546.js";import{t as f,a as p,m as v,b as k,c as y}from"./Helper-b708f25b.js";import{d as x,c as l,w as C,o as s,a as t,u as i,k as e,t as n,l as c}from"./app-53845742.js";import"./_plugin-vue_export-helper-0c092d97.js";import"./index-ac617c56.js";const g={class:"card card-default"},T={class:"card-body"},B={class:"mb-3"},D=t("label",{for:"nome"},"Nome",-1),M=["value"],O={class:"mb-3"},V=t("label",{for:"tipo"},"Tipo:",-1),q=["value"],w={class:"mb-3 form-check form-switch"},A=["checked"],N=t("label",{class:"form-check-label",for:"obrigatorio"},"Obrigatório",-1),$={key:0,class:"mb-3"},z={for:"minimo"},j=["value"],E={key:1,class:"mb-3"},L={for:"maximo"},Q=["value"],S={key:2,class:"mb-3"},F=t("label",{for:"quantidade"},"Quantidade de Casas Decimais",-1),G=["value"],X=x({__name:"Visualizar",props:{caracteristica:Object,tipos:Array},setup(a){const o=a,m=f(o.caracteristica.tipo),d=p(o.caracteristica.tipo),r=v(o.caracteristica.tipo),u=k(o.caracteristica.tipo),_=y(o.caracteristica.tipo);return(H,I)=>(s(),l(h,{titulo:"Visualizar Característica"},{default:C(()=>[t("form",null,[t("div",g,[t("div",T,[t("div",B,[D,t("input",{id:"nome",class:"form-control",type:"text",value:a.caracteristica.nome,disabled:""},null,8,M)]),t("div",O,[V,t("input",{id:"tipo",class:"form-control",type:"text",value:a.tipos[a.caracteristica.tipo],disabled:""},null,8,q)]),t("div",w,[t("input",{id:"obrigatorio",class:"form-check-input",type:"checkbox",checked:a.caracteristica.obrigatorio,disabled:""},null,8,A),N]),i(r)?(s(),e("div",$,[t("label",z,n(i(m)),1),t("input",{id:"minimo",class:"form-control",type:"number",value:a.caracteristica.minimo,disabled:""},null,8,j)])):c("",!0),i(r)?(s(),e("div",E,[t("label",L,n(i(d)),1),t("input",{id:"maximo",class:"form-control",type:"number",value:a.caracteristica.maximo,disabled:""},null,8,Q)])):c("",!0),i(u)?(s(),e("div",S,[F,t("input",{id:"quantidade",class:"form-control",type:"number",value:a.caracteristica.quantidade,disabled:""},null,8,G)])):c("",!0)])])]),i(_)?(s(),l(b,{key:0,class:"mt-5",caracteristica:a.caracteristica},null,8,["caracteristica"])):c("",!0)]),_:1}))}});export{X as default};

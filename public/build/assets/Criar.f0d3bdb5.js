import{d as g,v as C,c as d,a as V,w as q,o as a,b as e,e as s,f as c,u as t,g as n,h as M,i as l,r as D,t as u,F as T,j as U,k as p,l as w}from"./app.209b19e6.js";import{A as N}from"./AdminLayout.3d739617.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang.fc38b81b.js";import{t as B,a as S,m as A,b as F}from"./Base.87d3ad57.js";import"./_plugin-vue_export-helper.43e47959.js";import"./index.c57ba517.js";const $=["onSubmit"],j={class:"card card-default"},E={class:"card-body"},L={class:"mb-3"},O=e("label",{for:"nome"},"Nome",-1),Q={class:"mb-3"},z=e("label",{for:"tipo"},"Tipo:",-1),G=["value"],H={class:"mb-3 form-check form-switch"},I=e("label",{class:"form-check-label",for:"obrigatorio"},"Obrigat\xF3rio",-1),J={key:0,class:"mb-3"},K={for:"minimo"},P={key:1,class:"mb-3"},R={for:"maximo"},W={key:2,class:"mb-3"},X=e("label",{for:"quantidade"},"Quantidade de Casas Decimais",-1),Y=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),so=g({__name:"Criar",props:{categoria:Object,tipos:Array},setup(b){const h=b,o=C({nome:"",tipo:null,obrigatorio:!1,minimo:null,maximo:null,quantidade:null});function v(){o.post(`/admin/categorias/${h.categoria.id}/caracteristicas/salvar`)}const x=d(()=>B(o.tipo)),y=d(()=>S(o.tipo)),f=d(()=>A(o.tipo)),k=d(()=>F(o.tipo));return(Z,i)=>(a(),V(N,{titulo:"Nova Caracter\xEDstica"},{default:q(()=>[e("form",{onSubmit:w(v,["prevent"])},[e("div",j,[e("div",E,[e("div",L,[O,s(e("input",{id:"nome","onUpdate:modelValue":i[0]||(i[0]=r=>t(o).nome=r),class:"form-control",type:"text",required:""},null,512),[[c,t(o).nome]]),n(m,{error:t(o).errors.nome},null,8,["error"])]),e("div",Q,[z,s(e("select",{id:"tipo","onUpdate:modelValue":i[1]||(i[1]=r=>t(o).tipo=r),name:"tipo",class:"form-select",required:""},[(a(!0),l(T,null,D(b.tipos,(r,_)=>(a(),l("option",{key:_,value:_},u(r),9,G))),128))],512),[[M,t(o).tipo]]),n(m,{error:t(o).errors.tipo},null,8,["error"])]),e("div",H,[s(e("input",{id:"obrigatorio","onUpdate:modelValue":i[2]||(i[2]=r=>t(o).obrigatorio=r),class:"form-check-input",type:"checkbox"},null,512),[[U,t(o).obrigatorio]]),I]),t(f)?(a(),l("div",J,[e("label",K,u(t(x)),1),s(e("input",{id:"minimo","onUpdate:modelValue":i[3]||(i[3]=r=>t(o).minimo=r),class:"form-control",type:"number"},null,512),[[c,t(o).minimo]]),n(m,{error:t(o).errors.minimo},null,8,["error"])])):p("",!0),t(f)?(a(),l("div",P,[e("label",R,u(t(y)),1),s(e("input",{id:"maximo","onUpdate:modelValue":i[4]||(i[4]=r=>t(o).maximo=r),class:"form-control",type:"number"},null,512),[[c,t(o).maximo]]),n(m,{error:t(o).errors.maximo},null,8,["error"])])):p("",!0),t(k)?(a(),l("div",W,[X,s(e("input",{id:"quantidade","onUpdate:modelValue":i[5]||(i[5]=r=>t(o).quantidade=r),class:"form-control",type:"number"},null,512),[[c,t(o).quantidade]]),n(m,{error:t(o).errors.quantidade},null,8,["error"])])):p("",!0)]),Y])],40,$)]),_:1}))}});export{so as default};

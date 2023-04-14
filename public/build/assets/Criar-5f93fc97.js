import{d as g,v as C,s as d,c as V,w as q,o as a,a as e,b as s,e as c,u as t,f as n,p as M,k as l,m as T,t as u,F as U,z as w,l as p,g as D}from"./app-b9eab184.js";import{A as N}from"./AdminLayout-58947122.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang-8975cccc.js";import{t as B,a as S,m as A,b as $}from"./Helper-b708f25b.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";const F=["onSubmit"],L={class:"card card-default"},O={class:"card-body"},j={class:"mb-3"},z=e("label",{for:"nome"},"Nome",-1),E={class:"mb-3"},Q=e("label",{for:"tipo"},"Tipo:",-1),G=["value"],H={class:"mb-3 form-check form-switch"},I=e("label",{class:"form-check-label",for:"obrigatorio"},"Obrigatório",-1),J={key:0,class:"mb-3"},K={for:"minimo"},P={key:1,class:"mb-3"},R={for:"maximo"},W={key:2,class:"mb-3"},X=e("label",{for:"quantidade"},"Quantidade de Casas Decimais",-1),Y=e("div",{class:"card-footer"},[e("button",{type:"submit",class:"btn btn-primary"}," Criar ")],-1),so=g({__name:"Criar",props:{categoria:Object,tipos:Array},setup(b){const h=b,o=C({nome:"",tipo:null,obrigatorio:!1,minimo:null,maximo:null,quantidade:null});function v(){o.post(`/admin/categorias/${h.categoria.id}/caracteristicas/salvar`)}const y=d(()=>B(o.tipo)),x=d(()=>S(o.tipo)),f=d(()=>A(o.tipo)),k=d(()=>$(o.tipo));return(Z,i)=>(a(),V(N,{titulo:"Nova Característica"},{default:q(()=>[e("form",{onSubmit:D(v,["prevent"])},[e("div",L,[e("div",O,[e("div",j,[z,s(e("input",{id:"nome","onUpdate:modelValue":i[0]||(i[0]=r=>t(o).nome=r),class:"form-control",type:"text",required:""},null,512),[[c,t(o).nome]]),n(m,{error:t(o).errors.nome},null,8,["error"])]),e("div",E,[Q,s(e("select",{id:"tipo","onUpdate:modelValue":i[1]||(i[1]=r=>t(o).tipo=r),name:"tipo",class:"form-select",required:""},[(a(!0),l(U,null,T(b.tipos,(r,_)=>(a(),l("option",{key:_,value:_},u(r),9,G))),128))],512),[[M,t(o).tipo]]),n(m,{error:t(o).errors.tipo},null,8,["error"])]),e("div",H,[s(e("input",{id:"obrigatorio","onUpdate:modelValue":i[2]||(i[2]=r=>t(o).obrigatorio=r),class:"form-check-input",type:"checkbox"},null,512),[[w,t(o).obrigatorio]]),I]),t(f)?(a(),l("div",J,[e("label",K,u(t(y)),1),s(e("input",{id:"minimo","onUpdate:modelValue":i[3]||(i[3]=r=>t(o).minimo=r),class:"form-control",type:"number"},null,512),[[c,t(o).minimo]]),n(m,{error:t(o).errors.minimo},null,8,["error"])])):p("",!0),t(f)?(a(),l("div",P,[e("label",R,u(t(x)),1),s(e("input",{id:"maximo","onUpdate:modelValue":i[4]||(i[4]=r=>t(o).maximo=r),class:"form-control",type:"number"},null,512),[[c,t(o).maximo]]),n(m,{error:t(o).errors.maximo},null,8,["error"])])):p("",!0),t(k)?(a(),l("div",W,[X,s(e("input",{id:"quantidade","onUpdate:modelValue":i[5]||(i[5]=r=>t(o).quantidade=r),class:"form-control",type:"number"},null,512),[[c,t(o).quantidade]]),n(m,{error:t(o).errors.quantidade},null,8,["error"])])):p("",!0)]),Y])],40,F)]),_:1}))}});export{so as default};
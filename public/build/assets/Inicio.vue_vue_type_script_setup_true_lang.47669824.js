import{d as _,m as b,v as g,i,b as e,F as h,r as v,k as y,g as c,w as r,o as n,t as q,s as k,u as d,q as x,e as w,f as C}from"./app.2e071e4f.js";import{_ as I}from"./Modal.vue_vue_type_script_setup_true_lang.c6291d7b.js";const N={class:"card card-default"},V=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Imagens ")],-1),A={class:"card-body"},B={class:"row mb-3"},$={class:"row"},D=["src","alt"],E={key:0},F=e("p",null,"Nenhuma imagem adicionada",-1),T=[F],j={class:"mb-3"},L=e("label",{for:"descricao"},null,-1),M={class:"mb-3"},O=e("label",{for:"imagem"},null,-1),z=_({__name:"Inicio",props:{equipamento:Object},setup(s){const m=s,l=b(null),a=g({descricao:"",imagem:{}});function u(){l.value.show()}function f(){a.post(route("admin.equipamentos.imagens.adicionar",m.equipamento.id)),l.value.hide()}return(p,o)=>(n(),i("div",N,[V,e("div",A,[e("div",B,[e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=t=>u())}," Adicionar Imagem ")]),e("div",$,[(n(!0),i(h,null,v(s.equipamento.imagens,t=>(n(),i("div",{key:t.id,class:"col-12 col-lg-6 col-xl-4 mb-3"},[e("img",{class:"card-img-top",src:t.url,alt:t.descricao},null,8,D),e("p",null,q(t.descricao),1),c(d(x),{href:p.route("admin.equipamentos.imagens.delete",[s.equipamento.id,t.id]),class:"btn btn-danger"},{default:r(()=>[k(" Excluir ")]),_:2},1032,["href"])]))),128)),s.equipamento.imagens.length==0?(n(),i("div",E,T)):y("",!0)])]),c(I,{id:"modal_"+s.equipamento.id,ref_key:"modal",ref:l,title:"Adicionar Imagem"},{footer:r(()=>[e("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=t=>f())}," Adicionar ")]),default:r(()=>[e("div",j,[L,w(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>d(a).descricao=t),type:"text",name:"descricao",class:"form-control"},null,512),[[C,d(a).descricao]])]),e("div",M,[O,e("input",{type:"file",name:"imagem",class:"form-control-file",onInput:o[2]||(o[2]=t=>d(a).imagem=t.target.files[0])},null,32)])]),_:1},8,["id"])]))}});export{z as _};

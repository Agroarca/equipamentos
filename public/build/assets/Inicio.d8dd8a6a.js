import{l as _,v as b,h as i,b as e,F as h,r as g,j as v,f as c,w as r,o as n,t as y,p as q,u as l,q as k,d as x,e as w}from"./app.a897a209.js";import{_ as I}from"./Modal.fcb56f28.js";const N={class:"card card-default"},V=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Imagens ")],-1),C={class:"card-body"},A={class:"row mb-3"},B={class:"row"},$=["src","alt"],D={key:0},E=e("p",null,"Nenhuma imagem adicionada",-1),F=[E],T={class:"mb-3"},j=e("label",{for:"descricao"},null,-1),L={class:"mb-3"},M=e("label",{for:"imagem"},null,-1),z={__name:"Inicio",props:["equipamento"],setup(a){const m=a,d=_(null),s=b({descricao:"",imagem:{}});function u(){d.value.show()}function f(){s.post(route("admin.equipamentos.imagens.adicionar",m.equipamento.id)),d.value.hide()}return(p,o)=>(n(),i("div",N,[V,e("div",C,[e("div",A,[e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=t=>u())}," Adicionar Imagem ")]),e("div",B,[(n(!0),i(h,null,g(a.equipamento.imagens,t=>(n(),i("div",{key:t.id,class:"col-12 col-lg-6 col-xl-4 mb-3"},[e("img",{class:"card-img-top",src:t.url,alt:t.descricao},null,8,$),e("p",null,y(t.descricao),1),c(l(k),{href:p.route("admin.equipamentos.imagens.delete",[a.equipamento.id,t.id]),class:"btn btn-danger"},{default:r(()=>[q(" Excluir ")]),_:2},1032,["href"])]))),128)),a.equipamento.imagens.length==0?(n(),i("div",D,F)):v("",!0)])]),c(I,{id:"modal_"+a.equipamento.id,ref_key:"modal",ref:d,title:"Adicionar Imagem"},{footer:r(()=>[e("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=t=>f())}," Adicionar ")]),default:r(()=>[e("div",T,[j,x(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>l(s).descricao=t),type:"text",name:"descricao",class:"form-control"},null,512),[[w,l(s).descricao]])]),e("div",L,[M,e("input",{type:"file",name:"imagem",class:"form-control-file",onInput:o[2]||(o[2]=t=>l(s).imagem=t.target.files[0])},null,32)])]),_:1},8,["id"])]))}};export{z as default};
import{d as p,m as _,v as b,i,b as e,F as g,r as h,k as v,g as r,w as c,o as n,t as y,s as q,u as d,q as k,e as x,f as w}from"./app.7d4d69e1.js";import{_ as $}from"./Modal.vue_vue_type_script_setup_true_lang.67327cbc.js";const C={class:"card card-default"},I=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Imagens ")],-1),N={class:"card-body"},V={class:"row mb-3"},A={class:"row"},B=["src","alt"],D={key:0},E=e("p",null,"Nenhuma imagem adicionada",-1),F=[E],T={class:"mb-3"},j=e("label",{for:"descricao"},null,-1),L={class:"mb-3"},M=e("label",{for:"imagem"},null,-1),z=p({__name:"Inicio",props:{equipamento:Object},setup(s){const m=s,l=_(null),a=b({descricao:"",imagem:{}});function u(){l.value.show()}function f(){a.post(`/admin/equipamentos/${m.equipamento.id}/imagens/adicionar`),l.value.hide()}return(O,o)=>(n(),i("div",C,[I,e("div",N,[e("div",V,[e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=t=>u())}," Adicionar Imagem ")]),e("div",A,[(n(!0),i(g,null,h(s.equipamento.imagens,t=>(n(),i("div",{key:t.id,class:"col-12 col-lg-6 col-xl-4 mb-3"},[e("img",{class:"card-img-top",src:t.url,alt:t.descricao},null,8,B),e("p",null,y(t.descricao),1),r(d(k),{href:`/admin/equipamentos/${s.equipamento.id}/imagens/${t.id}/deletar`,class:"btn btn-danger"},{default:c(()=>[q(" Excluir ")]),_:2},1032,["href"])]))),128)),s.equipamento.imagens.length==0?(n(),i("div",D,F)):v("",!0)])]),r($,{id:"modal_"+s.equipamento.id,ref_key:"modal",ref:l,title:"Adicionar Imagem"},{footer:c(()=>[e("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=t=>f())}," Adicionar ")]),default:c(()=>[e("div",T,[j,x(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>d(a).descricao=t),type:"text",name:"descricao",class:"form-control"},null,512),[[w,d(a).descricao]])]),e("div",L,[M,e("input",{type:"file",name:"imagem",class:"form-control-file",onInput:o[2]||(o[2]=t=>d(a).imagem=t.target.files[0])},null,32)])]),_:1},8,["id"])]))}});export{z as _};

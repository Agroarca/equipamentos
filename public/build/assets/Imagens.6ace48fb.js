import{d as _,r as g,C as b,c as h,w as r,o as l,h as n,a as e,g as d,j as v,t as y,i as q,u as i,n as x,F as k,m as $,D as w,E as A}from"./app.8ded473b.js";import{A as C}from"./AdminLayout.b82d1123.js";import{_ as E}from"./Modal.vue_vue_type_script_setup_true_lang.42cfa6c0.js";import{_ as I}from"./Navegacao.vue_vue_type_script_setup_true_lang.e8998b0a.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang.ca353cf1.js";import"./_plugin-vue_export-helper.e79ab7af.js";import"./index.c57ba517.js";const N={class:"card card-default"},V=e("div",{class:"card-header"},[e("h5",{class:"card-title"}," Imagens ")],-1),B={class:"card-body"},j={class:"row mb-3"},D={class:"row"},F=["src","alt"],L={key:0},S=e("p",null,"Nenhuma imagem adicionada",-1),T=[S],M={class:"mb-3"},O=e("label",{for:"descricao"},null,-1),U={class:"mb-3"},z=e("label",{for:"imagem"},null,-1),X=_({__name:"Imagens",props:{equipamento:Object},setup(o){const u=o,c=g(null),s=b({descricao:"",imagem:{}});function f(){c.value.show()}function p(){s.post(`/admin/equipamentos/${u.equipamento.id}/imagens/adicionar`,{onSuccess:()=>{c.value.hide()}})}return(G,a)=>(l(),h(C,{titulo:"Editar Equipamento"},{default:r(()=>[n(I,{class:"mb-4 d-flex flex-roll justify-content-center",equipamento:o.equipamento,paginaAtual:"imagens"},null,8,["equipamento"]),e("div",N,[V,e("div",B,[e("div",j,[e("button",{type:"button",class:"btn btn-primary",onClick:a[0]||(a[0]=t=>f())}," Adicionar Imagem ")]),e("div",D,[(l(!0),d(k,null,v(o.equipamento.imagens,t=>(l(),d("div",{key:t.id,class:"col-12 col-lg-6 col-xl-4 mb-3"},[e("img",{class:"card-img-top",src:t.url,alt:t.descricao},null,8,F),e("p",null,y(t.descricao),1),n(i(x),{href:`/admin/equipamentos/${o.equipamento.id}/imagens/${t.id}/deletar`,class:"btn btn-danger"},{default:r(()=>[q(" Excluir ")]),_:2},1032,["href"])]))),128)),o.equipamento.imagens.length==0?(l(),d("div",L,T)):$("",!0)])]),n(E,{id:"modal_"+o.equipamento.id,ref_key:"modal",ref:c,title:"Adicionar Imagem"},{footer:r(()=>[e("button",{type:"button",class:"btn btn-primary",onClick:a[3]||(a[3]=t=>p())}," Adicionar ")]),default:r(()=>[e("div",M,[O,w(e("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>i(s).descricao=t),type:"text",name:"descricao",class:"form-control"},null,512),[[A,i(s).descricao]]),n(m,{error:i(s).errors.descricao},null,8,["error"])]),e("div",U,[z,e("input",{type:"file",name:"imagem",class:"form-control-file",onInput:a[2]||(a[2]=t=>i(s).imagem=t.target.files[0])},null,32),n(m,{error:i(s).errors.imagem},null,8,["error"])])]),_:1},8,["id"])])]),_:1}))}});export{X as default};

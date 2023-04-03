import{d as q,r as v,v as y,c as k,w as r,o as l,a as e,f as i,k as m,t as d,l as u,m as C,h as f,u as o,n as p,F as $,q as x,b as w,e as I}from"./app-f300bd32.js";import{_ as N}from"./Modal.vue_vue_type_script_setup_true_lang-013fa222.js";import{_ as g}from"./FormError.vue_vue_type_script_setup_true_lang-d15ab8de.js";import{_ as V}from"./SiteLayout.vue_vue_type_script_setup_true_lang-70917cc6.js";import{_ as A}from"./Navegacao.vue_vue_type_script_setup_true_lang-ba0e548a.js";import"./_plugin-vue_export-helper-3cb4e753.js";import"./index-ac617c56.js";const B={class:"container-600 cadastrar-equipamento imagens"},D=e("h2",{class:"titulo text-center mb-3"}," Imagens do Equipamento ",-1),E={key:0,class:"row mb-3"},j={class:"alert alert-warning"},F={for:"erro",class:"imagem"},O={class:"my-3"},S=["src","alt"],T={key:0,class:"alert alert-warning"},z=e("span",null,"Nenhuma imagem adicionada",-1),L=[z],M={class:"mt-3"},U={class:"mb-3"},G=e("label",{for:"descricao"},"Descrição",-1),H={class:"mb-3"},J=e("label",{for:"imagem"},null,-1),ee=q({__name:"Imagens",props:{equipamento:Object,errors:Object},setup(a){const _=a,c=v(null),n=y({descricao:"",imagem:{}});function b(){c.value.show()}function h(){n.post(`/equipamento/${_.equipamento.id}/imagens/salvar`,{onSuccess:()=>{c.value.hide()}})}return(K,s)=>(l(),k(V,{titulo:"Cadastrar Imagem"},{default:r(()=>[e("div",B,[D,i(A,{class:"mb-3",passoAtual:2,passoCadastro:a.equipamento.passo_cadastro,equipamento:a.equipamento},null,8,["passoCadastro","equipamento"]),a.errors.imagem?(l(),m("div",E,[e("div",j,[e("label",F,d(a.errors.imagem),1)])])):u("",!0),e("div",O,[(l(!0),m($,null,C(a.equipamento.imagens,t=>(l(),m("div",{key:t.id,class:"imagem"},[e("img",{src:t.url,alt:t.descricao},null,8,S),e("p",null,d(t.descricao),1),i(o(p),{href:`/equipamento/${a.equipamento.id}/imagens/${t.id}/excluir`,class:"btn btn-danger"},{default:r(()=>[f(" Excluir ")]),_:2},1032,["href"])]))),128)),a.equipamento.imagens.length==0?(l(),m("div",T,L)):u("",!0)]),e("div",M,[e("button",{type:"button",class:"btn btn-primary me-3 mb-3",onClick:s[0]||(s[0]=t=>b())}," Adicionar Imagem "),i(o(p),{href:`/equipamento/${a.equipamento.id}/imagens/continuar`,class:x(["btn btn-primary",{disabled:a.equipamento.imagens.length==0}])},{default:r(()=>[f(" Continuar ")]),_:1},8,["href","class"])])]),i(N,{id:"modal_"+a.equipamento.id,ref_key:"modal",ref:c,title:"Adicionar Imagem"},{footer:r(()=>[e("button",{type:"submit",class:"btn btn-primary",onClick:s[3]||(s[3]=t=>h())}," Adicionar ")]),default:r(()=>[e("div",U,[G,w(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>o(n).descricao=t),type:"text",name:"descricao",class:"form-control"},null,512),[[I,o(n).descricao]]),i(g,{error:o(n).errors.descricao},null,8,["error"])]),e("div",H,[J,e("input",{type:"file",name:"imagem",class:"form-control form-control-file",onInput:s[2]||(s[2]=t=>o(n).imagem=t.target.files[0])},null,32),i(g,{error:o(n).errors.imagem},null,8,["error"])])]),_:1},8,["id"])]),_:1}))}});export{ee as default};

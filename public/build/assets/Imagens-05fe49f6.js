import{d as v,r as q,v as y,c as k,w as r,o as l,a as e,f as n,k as m,t as d,l as u,m as $,h as f,u as s,n as p,F as x,b as C,e as w}from"./app-4cdccdc1.js";import{_ as I}from"./Modal.vue_vue_type_script_setup_true_lang-8746b460.js";import{_}from"./FormError.vue_vue_type_script_setup_true_lang-dde173fa.js";import{_ as N}from"./SiteLayout.vue_vue_type_script_setup_true_lang-ed0f45d5.js";import{_ as V}from"./Navegacao.vue_vue_type_script_setup_true_lang-0830d83f.js";import"./_plugin-vue_export-helper-06278407.js";import"./index-ac617c56.js";const A={class:"container-600"},B={class:"row mb-3"},D={key:0,class:"alert alert-warning"},j={for:"erro",class:"imagem"},E={class:"row"},F=["src","alt"],O={key:0},S=e("p",null,"Nenhuma imagem adicionada",-1),T=[S],L={class:"mb-3"},M=e("label",{for:"descricao"},"Descrição",-1),U={class:"mb-3"},z=e("label",{for:"imagem"},null,-1),X=v({__name:"Imagens",props:{equipamento:Object,errors:Object},setup(a){const b=a,c=q(null),i=y({descricao:"",imagem:{}});function g(){c.value.show()}function h(){i.post(`/equipamento/${b.equipamento.id}/imagens/salvar`,{onSuccess:()=>{c.value.hide()}})}return(G,o)=>(l(),k(N,{titulo:"Cadastrar Imagem"},{default:r(()=>[e("div",A,[n(V,{class:"mb-3",passoAtual:2,passoCadastro:a.equipamento.passo_cadastro,equipamento:a.equipamento},null,8,["passoCadastro","equipamento"]),e("div",B,[a.errors.imagem?(l(),m("div",D,[e("label",j,d(a.errors.imagem),1)])):u("",!0),e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=t=>g())}," Adicionar Imagem ")]),e("div",E,[(l(!0),m(x,null,$(a.equipamento.imagens,t=>(l(),m("div",{key:t.id,class:"col-12 col-lg-6 col-xl-4 mb-3"},[e("img",{class:"card-img-top",src:t.url,alt:t.descricao},null,8,F),e("p",null,d(t.descricao),1),n(s(p),{href:`/equipamento/${a.equipamento.id}/imagens/${t.id}/excluir`,class:"btn btn-danger"},{default:r(()=>[f(" Excluir ")]),_:2},1032,["href"])]))),128)),a.equipamento.imagens.length==0?(l(),m("div",O,T)):u("",!0)]),e("div",null,[n(s(p),{href:`/equipamento/${a.equipamento.id}/imagens/continuar`,class:"btn btn-primary"},{default:r(()=>[f(" Continuar ")]),_:1},8,["href"])])]),n(I,{id:"modal_"+a.equipamento.id,ref_key:"modal",ref:c,title:"Adicionar Imagem"},{footer:r(()=>[e("button",{type:"submit",class:"btn btn-primary",onClick:o[3]||(o[3]=t=>h())}," Adicionar ")]),default:r(()=>[e("div",L,[M,C(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s(i).descricao=t),type:"text",name:"descricao",class:"form-control"},null,512),[[w,s(i).descricao]]),n(_,{error:s(i).errors.descricao},null,8,["error"])]),e("div",U,[z,e("input",{type:"file",name:"imagem",class:"form-control form-control-file",onInput:o[2]||(o[2]=t=>s(i).imagem=t.target.files[0])},null,32),n(_,{error:s(i).errors.imagem},null,8,["error"])])]),_:1},8,["id"])]),_:1}))}});export{X as default};

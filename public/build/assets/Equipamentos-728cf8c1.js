import{d as p,c as n,w as r,o as e,a,k as l,m as h,t,h as d,f as u,u as _,n as f,l as c,F as g}from"./app-b9eab184.js";import{_ as v}from"./Paginacao.vue_vue_type_script_setup_true_lang-ed7f885f.js";import{_ as k}from"./SiteLayout.vue_vue_type_script_setup_true_lang-736e0c3e.js";import{_ as A}from"./Formatacao.vue_vue_type_script_setup_true_lang-2e32b56b.js";import"./_plugin-vue_export-helper-f069264a.js";import"./index-ac617c56.js";import"./InputMask-081981d8.js";const S={class:"container equipamentos"},O=["src","alt"],T={class:"informacoes"},y=a("span",null,"Motivo da Reprovação",-1),V={key:0,class:"badge mensagens"},M=p({__name:"Equipamentos",props:{equipamentos:Object,status:Array},setup(o){return(P,D)=>(e(),n(k,{titulo:"Meus Equipamentos"},{default:r(()=>[a("div",S,[(e(!0),l(g,null,h(o.equipamentos.data,s=>{var i,m;return e(),l("div",{key:s.id,class:"equipamento"},[a("img",{class:"imagem",src:((i=s.imagens[0])==null?void 0:i.url)??"/img/Placeholder.png",alt:((m=s.imagens[0])==null?void 0:m.descricao)??"Imagem do produto"},null,8,O),a("div",T,[a("h3",null,t(s.titulo),1),a("span",null,"Modelo: "+t(s.modelo.marca.nome)+" / "+t(s.modelo.nome),1),a("span",null,[d("Preço: "),u(A,{tipo:"preco",valor:s.valor},null,8,["valor"])]),a("span",null,"Status: "+t(o.status[s.status]),1)]),s.status==5?(e(),n(_(f),{key:0,href:`/equipamento/reprovado/${s.id}`,class:"btn btn-primary"},{default:r(()=>[y]),_:2},1032,["href"])):c("",!0),s.status==2?(e(),n(_(f),{key:1,href:`/conversa/equipamento/${s.id}`,class:"btn btn-primary"},{default:r(()=>[d(" Conversas "),s.mensagens_nao_visualizadas>0?(e(),l("span",V,t(s.mensagens_nao_visualizadas),1)):c("",!0)]),_:2},1032,["href"])):c("",!0)])}),128)),u(v,{links:o.equipamentos.links,class:"mt-1"},null,8,["links"])])]),_:1}))}});export{M as default};

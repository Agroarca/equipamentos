import{d as c,v as p,a as _,w as f,o as b,b as t,e as i,f as l,u as s,g as n,l as v}from"./app.9a612a0a.js";import{A as g}from"./AdminLayout.f55944c3.js";import{_ as d}from"./FormError.vue_vue_type_script_setup_true_lang.1185bcda.js";import"./_plugin-vue_export-helper.6e48926d.js";import"./index.c57ba517.js";const h=["onSubmit"],x={class:"card card-default"},y={class:"card-body"},S={class:"mb-3"},w=t("label",{for:"nome"},"Nome",-1),V={class:"mb-3"},B=t("label",{for:"Slug"},"Slug",-1),N=t("div",{class:"card-footer"},[t("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),M=c({__name:"Editar",props:{lista:Object},setup(m){const r=m,o=p({nome:r.lista.nome,slug:r.lista.slug});function u(){o.post(`/admin/lista/${r.lista.id}/atualizar`)}return(k,e)=>(b(),_(g,{titulo:"Editar Lista"},{default:f(()=>[t("form",{onSubmit:v(u,["prevent"])},[t("div",x,[t("div",y,[t("div",S,[w,i(t("input",{id:"nome","onUpdate:modelValue":e[0]||(e[0]=a=>s(o).nome=a),class:"form-control",type:"text",required:""},null,512),[[l,s(o).nome]]),n(d,{error:s(o).errors.nome},null,8,["error"])]),t("div",V,[B,i(t("input",{id:"Slug","onUpdate:modelValue":e[1]||(e[1]=a=>s(o).slug=a),class:"form-control",type:"text",required:""},null,512),[[l,s(o).slug]]),n(d,{error:s(o).errors.slug},null,8,["error"])])]),N])],40,h)]),_:1}))}});export{M as default};

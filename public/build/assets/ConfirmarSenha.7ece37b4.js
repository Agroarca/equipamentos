import{d as n,v as i,a as p,w as d,o as m,b as s,e as c,f as u,u as o,g as l,l as f}from"./app.9a612a0a.js";import{_}from"./SiteLayout.vue_vue_type_script_setup_true_lang.27b9650a.js";import{_ as w}from"./FormError.vue_vue_type_script_setup_true_lang.1185bcda.js";import"./_plugin-vue_export-helper.6e48926d.js";import"./index.c57ba517.js";const h=s("div",{class:"alert alert-warn"}," Essa \xE9 uma \xE1rea restrita! Confirme sua senha antes de acessar ",-1),b=["onSubmit"],v={class:"form-group"},x=s("label",{for:"password"},"Senha",-1),C=s("div",{class:"form-group"},[s("button",{class:"btn btn-primary",type:"submit"}," Confirmar ")],-1),M=n({__name:"ConfirmarSenha",setup(S){const r=i({password:""});function t(){r.post("/confirm-password",{onFinish:()=>r.reset()})}return(g,e)=>(m(),p(_,{titulo:"Recuperar Senha"},{default:d(()=>[h,s("form",{onSubmit:f(t,["prevent"])},[s("div",v,[x,c(s("input",{id:"password","onUpdate:modelValue":e[0]||(e[0]=a=>o(r).password=a),class:"form-control",type:"password",required:"",autocomplete:"current-password"},null,512),[[u,o(r).password]]),l(w,{error:o(r).errors.password},null,8,["error"])]),C],40,b)]),_:1}))}});export{M as default};

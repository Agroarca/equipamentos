import{d as n,v as i,c as p,w as d,o as m,a as s,b as c,e as u,u as o,f,g as l}from"./app-de2de5be.js";import{_}from"./SiteLayout.vue_vue_type_script_setup_true_lang-7c12c1bc.js";import{_ as w}from"./FormError.vue_vue_type_script_setup_true_lang-a3ccc325.js";import"./_plugin-vue_export-helper-86dca82a.js";import"./index-ac617c56.js";const h=s("div",{class:"alert alert-warn"}," Essa é uma área restrita! Confirme sua senha antes de acessar ",-1),b=["onSubmit"],v={class:"form-group"},C=s("label",{for:"password"},"Senha",-1),S=s("div",{class:"form-group"},[s("button",{class:"btn btn-primary",type:"submit"}," Confirmar ")],-1),N=n({__name:"ConfirmarSenha",setup(x){const r=i({password:""});function t(){r.post("/confirm-password",{onFinish:()=>r.reset()})}return(g,e)=>(m(),p(_,{titulo:"Recuperar Senha"},{default:d(()=>[h,s("form",{onSubmit:l(t,["prevent"])},[s("div",v,[C,c(s("input",{id:"password","onUpdate:modelValue":e[0]||(e[0]=a=>o(r).password=a),class:"form-control",type:"password",required:"",autocomplete:"current-password"},null,512),[[u,o(r).password]]),f(w,{error:o(r).errors.password},null,8,["error"])]),S],40,b)]),_:1}))}});export{N as default};

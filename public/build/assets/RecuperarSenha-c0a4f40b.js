import{d as u,v as d,c as _,w as r,o as a,a as e,k as i,g as p,b as f,e as h,u as t,f as n,h as b,n as v}from"./app-27f9bc00.js";import{_ as k}from"./SiteLayout.vue_vue_type_script_setup_true_lang-d9d66c83.js";import{_ as x}from"./FormError.vue_vue_type_script_setup_true_lang-d0c6606d.js";import"./_plugin-vue_export-helper-d695034f.js";import"./index-ac617c56.js";const y={class:"container-600 auth"},E={key:0,class:"alert alert-success"},S={key:1},w=e("div",{class:"alert alert-info"}," Esqueceu sua senha? Não se preocupe, informe seu e-mail e enviaremos um e-mail de recuperação ",-1),B=["onSubmit"],N={class:"mb-3"},V=e("label",{for:"email"},"E-mail",-1),C=e("div",{class:"mb-3"},[e("button",{class:"btn btn-primary",type:"submit"}," Enviar ")],-1),g={class:"mb-2"},O=u({__name:"RecuperarSenha",props:{status:String},setup(c){const s=d({email:""});function l(){s.post("/senha/recuperar")}return(q,o)=>(a(),_(k,{titulo:"Recuperar Senha"},{default:r(()=>[e("div",y,[c.status?(a(),i("div",E," O e-mail de recuperação foi enviado com sucesso! ")):(a(),i("div",S,[w,e("form",{onSubmit:p(l,["prevent"])},[e("div",N,[V,f(e("input",{id:"email","onUpdate:modelValue":o[0]||(o[0]=m=>t(s).email=m),class:"form-control",type:"email",required:""},null,512),[[h,t(s).email]]),n(x,{error:t(s).errors.email},null,8,["error"])]),C],40,B)])),e("div",g,[n(t(v),{class:"btn btn-link",href:"/entrar"},{default:r(()=>[b(" Entrar na Conta ")]),_:1})])])]),_:1}))}});export{O as default};

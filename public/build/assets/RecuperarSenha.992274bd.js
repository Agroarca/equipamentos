import{d as u,C as d,c as _,w as r,o as a,a as e,g as i,G as p,D as f,E as h,u as t,h as n,i as v,n as b}from"./app.8ded473b.js";import{_ as E}from"./SiteLayout.vue_vue_type_script_setup_true_lang.82a1941e.js";import{_ as x}from"./FormError.vue_vue_type_script_setup_true_lang.ca353cf1.js";import"./_plugin-vue_export-helper.e79ab7af.js";import"./index.c57ba517.js";const k={class:"container-600 auth"},y={key:0,class:"alert alert-success"},S={key:1},w=e("div",{class:"alert alert-info"}," Esqueceu sua senha? N\xE3o se preocupe, informe seu e-mail e enviaremos um e-mail de recupera\xE7\xE3o ",-1),B=["onSubmit"],C={class:"mb-3"},N=e("label",{for:"email"},"E-mail",-1),V=e("div",{class:"mb-3"},[e("button",{class:"btn btn-primary",type:"submit"}," Enviar ")],-1),g={class:"mb-2"},G=u({__name:"RecuperarSenha",props:{status:String},setup(c){const s=d({email:""});function l(){s.post("/senha/recuperar")}return(q,o)=>(a(),_(E,{titulo:"Recuperar Senha"},{default:r(()=>[e("div",k,[c.status?(a(),i("div",y," O e-mail de recupera\xE7\xE3o foi enviado com sucesso! ")):(a(),i("div",S,[w,e("form",{onSubmit:p(l,["prevent"])},[e("div",C,[N,f(e("input",{id:"email","onUpdate:modelValue":o[0]||(o[0]=m=>t(s).email=m),class:"form-control",type:"email",required:""},null,512),[[h,t(s).email]]),n(x,{error:t(s).errors.email},null,8,["error"])]),V],40,B)])),e("div",g,[n(t(b),{class:"btn btn-link",href:"/entrar"},{default:r(()=>[v(" Entrar na Conta ")]),_:1})])])]),_:1}))}});export{G as default};

import{d as l,v as m,a as c,w as r,o as d,g as o,u as s,X as u,b as e,l as _,e as f,f as p,s as b,q as h}from"./app.93de07a5.js";import{_ as v}from"./SiteLayout.vue_vue_type_script_setup_true_lang.222e3480.js";import{_ as x}from"./FormError.vue_vue_type_script_setup_true_lang.5cb7937b.js";import"./_plugin-vue_export-helper.0ec2462a.js";const E={class:"container-600 auth"},w=e("div",{class:"alert alert-info"}," Esqueceu sua senha? N\xE3o se preocupe, informe seu e-mail e enviaremos um e-mail de recupera\xE7\xE3o ",-1),g=["onSubmit"],N={class:"mb-3"},V=e("label",{for:"email"},"E-mail",-1),k=e("div",{class:"mb-3"},[e("button",{class:"btn btn-primary",type:"submit"}," Enviar ")],-1),q={class:"mb-2"},$=l({__name:"ForgotPassword",setup(y){const t=m({email:""});function i(){t.post("/forgot-password")}return(B,a)=>(d(),c(v,null,{default:r(()=>[o(s(u),{title:"Recuperar Senha"}),e("div",E,[w,e("form",{onSubmit:_(i,["prevent"])},[e("div",N,[V,f(e("input",{id:"email","onUpdate:modelValue":a[0]||(a[0]=n=>s(t).email=n),class:"form-control",type:"email",required:""},null,512),[[p,s(t).email]]),o(x,{error:s(t).errors.email},null,8,["error"])]),k,e("div",q,[o(s(h),{class:"btn btn-link",href:"/login"},{default:r(()=>[b(" Entrar na Conta ")]),_:1})])],40,g)])]),_:1}))}});export{$ as default};

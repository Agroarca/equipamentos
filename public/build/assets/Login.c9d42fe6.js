import{d as p,v as f,a as b,w as n,o as h,g as t,u as s,X as w,b as e,l as v,e as l,f as c,s as d,q as m}from"./app.601621a4.js";import{_ as k}from"./SiteLayout.vue_vue_type_script_setup_true_lang.78893dea.js";import{_ as u}from"./FormError.vue_vue_type_script_setup_true_lang.d83fb919.js";import"./_plugin-vue_export-helper.bb01cd29.js";const x={class:"container-600 auth"},y=["onSubmit"],E=e("div",{class:"mb-3"},[e("h2",null,"Entrar")],-1),q={class:"mb-3"},V=e("label",{for:"email"},"E-mail",-1),g={class:"mb-3"},N=e("label",{for:"password"},"Senha",-1),S={class:"form-check mb-3"},B=["checked"],M=e("label",{class:"form-check-label",for:"remember"},"Manter conectado?",-1),C=e("div",{class:"mb-3 d-flex justify-content-between"},[e("button",{class:"btn btn-primary",type:"submit"}," Entrar ")],-1),T={class:"mb-2"},U={class:"mb-2"},X=p({__name:"Login",setup($){const o=f({email:"",password:"",remember:!1});function _(){o.post(route("login"),{onFinish:()=>o.reset("password")})}return(i,r)=>(h(),b(k,null,{default:n(()=>[t(s(w),{title:"Entrar"}),e("div",x,[e("form",{onSubmit:v(_,["prevent"])},[E,e("div",q,[V,l(e("input",{id:"email","onUpdate:modelValue":r[0]||(r[0]=a=>s(o).email=a),class:"form-control",type:"email",required:"",autocomplete:"email"},null,512),[[c,s(o).email]]),t(u,{error:s(o).errors.email},null,8,["error"])]),e("div",g,[N,l(e("input",{id:"password","onUpdate:modelValue":r[1]||(r[1]=a=>s(o).password=a),class:"form-control",type:"password",required:"",autocomplete:"current-password"},null,512),[[c,s(o).password]]),t(u,{error:s(o).errors.password},null,8,["error"])]),e("div",S,[e("input",{id:"remember",class:"form-check-input",type:"checkbox",checked:s(o).remember},null,8,B),M]),C,e("div",T,[t(s(m),{class:"btn btn-link",href:i.route("password.request")},{default:n(()=>[d(" Esqueceu sua Senha? ")]),_:1},8,["href"])]),e("div",U,[t(s(m),{class:"btn btn-link",href:i.route("register")},{default:n(()=>[d(" N\xE3o possui conta? ")]),_:1},8,["href"])])],40,y)])]),_:1}))}});export{X as default};
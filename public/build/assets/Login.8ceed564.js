import{d as _,v as p,a as f,w as n,o as b,b as e,l as h,e as i,f as l,u as o,g as r,s as c,q as d}from"./app.04b0e7bb.js";import{_ as w}from"./SiteLayout.vue_vue_type_script_setup_true_lang.d4cc5799.js";import{_ as m}from"./FormError.vue_vue_type_script_setup_true_lang.56312e4c.js";import"./_plugin-vue_export-helper.31fe7c0b.js";const v={class:"container-600 auth"},k=["onSubmit"],x=e("div",{class:"mb-3"},[e("h2",null,"Entrar")],-1),y={class:"mb-3"},E=e("label",{for:"email"},"E-mail",-1),g={class:"mb-3"},V=e("label",{for:"password"},"Senha",-1),q={class:"form-check mb-3"},N=["checked"],S=e("label",{class:"form-check-label",for:"remember"},"Manter conectado?",-1),B=e("div",{class:"mb-3 d-flex justify-content-between"},[e("button",{class:"btn btn-primary",type:"submit"}," Entrar ")],-1),M={class:"mb-2"},C={class:"mb-2"},L=_({__name:"Login",setup(T){const s=p({email:"",password:"",remember:!1});function u(){s.post("/login",{onFinish:()=>s.reset("password")})}return(U,t)=>(b(),f(w,{titulo:"Entrar"},{default:n(()=>[e("div",v,[e("form",{onSubmit:h(u,["prevent"])},[x,e("div",y,[E,i(e("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>o(s).email=a),class:"form-control",type:"email",required:"",autocomplete:"email"},null,512),[[l,o(s).email]]),r(m,{error:o(s).errors.email},null,8,["error"])]),e("div",g,[V,i(e("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=a=>o(s).password=a),class:"form-control",type:"password",required:"",autocomplete:"current-password"},null,512),[[l,o(s).password]]),r(m,{error:o(s).errors.password},null,8,["error"])]),e("div",q,[e("input",{id:"remember",class:"form-check-input",type:"checkbox",checked:o(s).remember},null,8,N),S]),B,e("div",M,[r(o(d),{class:"btn btn-link",href:"/forgot-password"},{default:n(()=>[c(" Esqueceu sua Senha? ")]),_:1})]),e("div",C,[r(o(d),{class:"btn btn-link",href:"/register"},{default:n(()=>[c(" N\xE3o possui conta? ")]),_:1})])],40,k)])]),_:1}))}});export{L as default};
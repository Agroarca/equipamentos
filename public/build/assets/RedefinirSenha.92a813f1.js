import{d as u,v as f,a as c,w as _,o as w,b as o,e as a,f as i,u as s,g as n,l as b}from"./app.9a612a0a.js";import{_ as h}from"./SiteLayout.vue_vue_type_script_setup_true_lang.27b9650a.js";import{_ as l}from"./FormError.vue_vue_type_script_setup_true_lang.1185bcda.js";import"./_plugin-vue_export-helper.6e48926d.js";import"./index.c57ba517.js";const S=["onSubmit"],v={class:"form-group"},g=o("label",{for:"email"},"E-mail",-1),y={class:"form-group"},k=o("label",{for:"password"},"Senha",-1),V={class:"form-group"},q=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),x=o("div",{class:"form-group"},[o("button",{class:"btn btn-primary",type:"submit"}," Atualizar Senha ")],-1),N=u({__name:"RedefinirSenha",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(p){const d=p,r=f({token:d.token,email:d.email,password:"",password_confirmation:""});function m(){r.post("/reset-password",{onFinish:()=>r.reset("password","password_confirmation")})}return(B,e)=>(w(),c(h,{titulo:"Atualizar Senha"},{default:_(()=>[o("form",{onSubmit:b(m,["prevent"])},[o("div",v,[g,a(o("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=t=>s(r).email=t),class:"form-control",type:"email",disabled:"",autocomplete:"email"},null,512),[[i,s(r).email]]),n(l,{error:s(r).errors.email},null,8,["error"])]),o("div",y,[k,a(o("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s(r).password=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[i,s(r).password]]),n(l,{error:s(r).errors.password},null,8,["error"])]),o("div",V,[q,a(o("input",{id:"password_confirmation","onUpdate:modelValue":e[2]||(e[2]=t=>s(r).password_confirmation=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[i,s(r).password_confirmation]]),n(l,{error:s(r).errors.password_confirmation},null,8,["error"])]),x],40,S)]),_:1}))}});export{N as default};

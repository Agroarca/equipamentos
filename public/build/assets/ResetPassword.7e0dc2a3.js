import{d as u,v as c,a as f,w as _,o as w,g as a,u as s,X as b,b as o,e as i,f as n,l as h}from"./app.d831804b.js";import{_ as v}from"./SiteLayout.vue_vue_type_script_setup_true_lang.b07c598d.js";import{_ as l}from"./FormError.vue_vue_type_script_setup_true_lang.969051b8.js";import"./_plugin-vue_export-helper.5bb3ab17.js";const S=["onSubmit"],g={class:"form-group"},y=o("label",{for:"email"},"E-mail",-1),k={class:"form-group"},q=o("label",{for:"password"},"Senha",-1),V={class:"form-group"},x=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),B=o("div",{class:"form-group"},[o("button",{class:"btn btn-primary",type:"submit"}," Atualizar Senha ")],-1),N=u({__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(p){const d=p,r=c({token:d.token,email:d.email,password:"",password_confirmation:""});function m(){r.post("/reset-password",{onFinish:()=>r.reset("password","password_confirmation")})}return(C,e)=>(w(),f(v,null,{default:_(()=>[a(s(b),{title:"Atualizar Senha"}),o("form",{onSubmit:h(m,["prevent"])},[o("div",g,[y,i(o("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=t=>s(r).email=t),class:"form-control",type:"email",required:"",autocomplete:"email"},null,512),[[n,s(r).email]]),a(l,{error:s(r).errors.email},null,8,["error"])]),o("div",k,[q,i(o("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s(r).password=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[n,s(r).password]]),a(l,{error:s(r).errors.password},null,8,["error"])]),o("div",V,[x,i(o("input",{id:"password_confirmation","onUpdate:modelValue":e[2]||(e[2]=t=>s(r).password_confirmation=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[n,s(r).password_confirmation]]),a(l,{error:s(r).errors.password_confirmation},null,8,["error"])]),B],40,S)]),_:1}))}});export{N as default};

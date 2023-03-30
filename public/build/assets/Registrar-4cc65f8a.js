import{d as _,v as b,r as c,x as w,c as h,w as m,o as v,a as o,g as C,b as a,e as i,u as e,f as l,h as j,n as y}from"./app-4cdccdc1.js";import{_ as x}from"./SiteLayout.vue_vue_type_script_setup_true_lang-ed0f45d5.js";import{_ as n}from"./FormError.vue_vue_type_script_setup_true_lang-dde173fa.js";import{M as u}from"./InputMask-bde15bc8.js";import"./_plugin-vue_export-helper-06278407.js";import"./index-ac617c56.js";const V={class:"container-600 auth"},g=["onSubmit"],k=o("div",{class:"mb-3"},[o("h2",null,"Registrar")],-1),q={class:"mb-3"},U=o("label",{for:"nome"},"Nome",-1),M={class:"mb-3"},N=o("label",{for:"email"},"E-mail",-1),R={class:"mb-3"},S=o("label",{for:"cpf_cnpj"},"CPF ou CNPJ",-1),B={class:"mb-3"},F=o("label",{for:"celular"},"Celular",-1),J={class:"mb-3"},P=o("label",{for:"password"},"Senha",-1),T={class:"mb-3"},$=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),D=o("div",{class:"mb-3"},[o("button",{class:"btn btn-primary",type:"submit"}," Registrar ")],-1),E={class:"mb-2"},Q=_({__name:"Registrar",setup(z){const r=b({nome:"",email:"",cpf_cnpj:"",celular:"",password:"",password_confirmation:""}),p=c(null),d=c(null);w(()=>{u.cpf_cnpj(p.value),u.telefone(d.value)});function f(){r.post("/registrar",{onFinish:()=>r.reset("password","password_confirmation")})}return(A,s)=>(v(),h(x,{titulo:"Register"},{default:m(()=>[o("div",V,[o("form",{onSubmit:C(f,["prevent"])},[k,o("div",q,[U,a(o("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=t=>e(r).nome=t),class:"form-control",type:"text",required:"",autocomplete:"nome"},null,512),[[i,e(r).nome]]),l(n,{error:e(r).errors.nome},null,8,["error"])]),o("div",M,[N,a(o("input",{id:"email","onUpdate:modelValue":s[1]||(s[1]=t=>e(r).email=t),class:"form-control",type:"email",required:"",autocomplete:"email"},null,512),[[i,e(r).email]]),l(n,{error:e(r).errors.email},null,8,["error"])]),o("div",R,[S,a(o("input",{id:"cpf_cnpj",ref_key:"elCpfCnpj",ref:p,"onUpdate:modelValue":s[2]||(s[2]=t=>e(r).cpf_cnpj=t),class:"form-control",type:"text",required:"",autocomplete:"cpf_cnpj"},null,512),[[i,e(r).cpf_cnpj]]),l(n,{error:e(r).errors.cpf_cnpj},null,8,["error"]),l(n,{error:e(r).errors.cnpj},null,8,["error"]),l(n,{error:e(r).errors.cpf},null,8,["error"])]),o("div",B,[F,a(o("input",{id:"celular",ref_key:"elCelular",ref:d,"onUpdate:modelValue":s[3]||(s[3]=t=>e(r).celular=t),class:"form-control",type:"text",required:"",autocomplete:"celular"},null,512),[[i,e(r).celular]]),l(n,{error:e(r).errors.celular},null,8,["error"])]),o("div",J,[P,a(o("input",{id:"password","onUpdate:modelValue":s[4]||(s[4]=t=>e(r).password=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[i,e(r).password]]),l(n,{error:e(r).errors.password},null,8,["error"])]),o("div",T,[$,a(o("input",{id:"password_confirmation","onUpdate:modelValue":s[5]||(s[5]=t=>e(r).password_confirmation=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[i,e(r).password_confirmation]]),l(n,{error:e(r).errors.password_confirmation},null,8,["error"])]),D,o("div",E,[l(e(y),{class:"btn btn-link",href:"/entrar"},{default:m(()=>[j(" Já possui conta? ")]),_:1})])],40,g)])]),_:1}))}});export{Q as default};

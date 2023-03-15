import{d as _,v as b,m as c,n as w,a as v,w as m,o as h,b as o,l as C,e as a,f as i,u as e,g as l,s as j,q as y}from"./app.d88b381c.js";import{_ as x}from"./SiteLayout.vue_vue_type_script_setup_true_lang.ae0b7e9f.js";import{_ as n}from"./FormError.vue_vue_type_script_setup_true_lang.583937b1.js";import{M as u}from"./InputMask.28f994c5.js";import"./_plugin-vue_export-helper.c0b93e95.js";const V={class:"container-600 auth"},q=["onSubmit"],g=o("div",{class:"mb-3"},[o("h2",null,"Registrar")],-1),k={class:"mb-3"},U=o("label",{for:"nome"},"Nome",-1),M={class:"mb-3"},N=o("label",{for:"email"},"E-mail",-1),R={class:"mb-3"},S=o("label",{for:"cpf_cnpj"},"CPF ou CNPJ",-1),B={class:"mb-3"},E=o("label",{for:"celular"},"Celular",-1),F={class:"mb-3"},J=o("label",{for:"password"},"Senha",-1),P={class:"mb-3"},T=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),$=o("div",{class:"mb-3"},[o("button",{class:"btn btn-primary",type:"submit"}," Registrar ")],-1),D={class:"mb-2"},O=_({__name:"Registrar",setup(z){const r=b({nome:"",email:"",cpf_cnpj:"",celular:"",password:"",password_confirmation:""}),d=c(null),p=c(null);w(()=>{u.cpf_cnpj(d.value),u.telefone(p.value)});function f(){r.post("/registrar",{onFinish:()=>r.reset("password","password_confirmation")})}return(A,s)=>(h(),v(x,{titulo:"Register"},{default:m(()=>[o("div",V,[o("form",{onSubmit:C(f,["prevent"])},[g,o("div",k,[U,a(o("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=t=>e(r).nome=t),class:"form-control",type:"text",required:"",autocomplete:"nome"},null,512),[[i,e(r).nome]]),l(n,{error:e(r).errors.nome},null,8,["error"])]),o("div",M,[N,a(o("input",{id:"email","onUpdate:modelValue":s[1]||(s[1]=t=>e(r).email=t),class:"form-control",type:"email",required:"",autocomplete:"email"},null,512),[[i,e(r).email]]),l(n,{error:e(r).errors.email},null,8,["error"])]),o("div",R,[S,a(o("input",{id:"cpf_cnpj",ref_key:"elCpfCnpj",ref:d,"onUpdate:modelValue":s[2]||(s[2]=t=>e(r).cpf_cnpj=t),class:"form-control",type:"text",required:"",autocomplete:"cpf_cnpj"},null,512),[[i,e(r).cpf_cnpj]]),l(n,{error:e(r).errors.cpf_cnpj},null,8,["error"]),l(n,{error:e(r).errors.cnpj},null,8,["error"]),l(n,{error:e(r).errors.cpf},null,8,["error"])]),o("div",B,[E,a(o("input",{id:"celular",ref_key:"elCelular",ref:p,"onUpdate:modelValue":s[3]||(s[3]=t=>e(r).celular=t),class:"form-control",type:"text",required:"",autocomplete:"celular"},null,512),[[i,e(r).celular]]),l(n,{error:e(r).errors.celular},null,8,["error"])]),o("div",F,[J,a(o("input",{id:"password","onUpdate:modelValue":s[4]||(s[4]=t=>e(r).password=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[i,e(r).password]]),l(n,{error:e(r).errors.password},null,8,["error"])]),o("div",P,[T,a(o("input",{id:"password_confirmation","onUpdate:modelValue":s[5]||(s[5]=t=>e(r).password_confirmation=t),class:"form-control",type:"password",required:"",autocomplete:"new-password"},null,512),[[i,e(r).password_confirmation]]),l(n,{error:e(r).errors.password_confirmation},null,8,["error"])]),$,o("div",D,[l(e(y),{class:"btn btn-link",href:"/entrar"},{default:m(()=>[j(" J\xE1 possui conta? ")]),_:1})])],40,q)])]),_:1}))}});export{O as default};

import{u as m,o as c,a as f,w as p,f as l,e,H as _,b as o,d as a,v as n,l as w,L as b,k as g}from"./app.7abc4061.js";import{_ as h}from"./SiteLayout.bfdcb80e.js";import{_ as i}from"./FormError.81e8b015.js";import"./Loader.9d72debc.js";const v=["onSubmit"],V={class:"form-group"},y=o("label",{for:"nome"},"Nome",-1),j={class:"form-group"},x=o("label",{for:"email"},"E-mail",-1),q={class:"form-group"},U=o("label",{for:"cpf_cnpj"},"CPF ou CNPJ",-1),C={class:"form-group"},N=o("label",{for:"celular"},"Celular",-1),k={class:"form-group"},S=o("label",{for:"password"},"Senha",-1),B={class:"form-group"},F=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),R={class:"form-group"},H=o("button",{class:"btn btn-primary",type:"submit"},"Registrar",-1),$={__name:"Register",setup(J){const r=m({nome:"",email:"",cpf_cnpj:"",celular:"",password:"",password_confirmation:""});function d(){r.post(route("register"),{onFinish:()=>r.reset("password","password_confirmation")})}return(u,s)=>(c(),f(h,null,{default:p(()=>[l(e(_),{title:"Register"}),o("form",{onSubmit:g(d,["prevent"])},[o("div",V,[y,a(o("input",{class:"form-control",type:"text",id:"nome","onUpdate:modelValue":s[0]||(s[0]=t=>e(r).nome=t),required:"",autocomplete:"nome"},null,512),[[n,e(r).nome]]),l(i,{error:e(r).errors.nome},null,8,["error"])]),o("div",j,[x,a(o("input",{class:"form-control",type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=t=>e(r).email=t),required:"",autocomplete:"email"},null,512),[[n,e(r).email]]),l(i,{error:e(r).errors.email},null,8,["error"])]),o("div",q,[U,a(o("input",{class:"form-control",type:"text",id:"cpf_cnpj","onUpdate:modelValue":s[2]||(s[2]=t=>e(r).cpf_cnpj=t),required:"",autocomplete:"cpf_cnpj"},null,512),[[n,e(r).cpf_cnpj]]),l(i,{error:e(r).errors.cpf_cnpj},null,8,["error"])]),o("div",C,[N,a(o("input",{class:"form-control",type:"text",id:"celular","onUpdate:modelValue":s[3]||(s[3]=t=>e(r).celular=t),required:"",autocomplete:"celular"},null,512),[[n,e(r).celular]]),l(i,{error:e(r).errors.celular},null,8,["error"])]),o("div",k,[S,a(o("input",{class:"form-control",type:"password",id:"password","onUpdate:modelValue":s[4]||(s[4]=t=>e(r).password=t),required:"",autocomplete:"new-password"},null,512),[[n,e(r).password]]),l(i,{error:e(r).errors.password},null,8,["error"])]),o("div",B,[F,a(o("input",{class:"form-control",type:"password",id:"password_confirmation","onUpdate:modelValue":s[5]||(s[5]=t=>e(r).password_confirmation=t),required:"",autocomplete:"new-password"},null,512),[[n,e(r).password_confirmation]]),l(i,{error:e(r).errors.password_confirmation},null,8,["error"])]),o("div",R,[H,l(e(b),{href:u.route("login")},{default:p(()=>[w("J\xE1 possui conta?")]),_:1},8,["href"])])],40,v)]),_:1}))}};export{$ as default};

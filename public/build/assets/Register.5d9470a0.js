import{P as b,k as c,l as w,a as h,w as u,o as v,e as l,u as e,X as j,b as o,j as y,d as a,v as i,n as C,p as V}from"./app.f56e2738.js";import{S as k}from"./SiteLayout.a4679d3a.js";import{_ as n}from"./FormError.3094d882.js";import{M as m}from"./InputMask.f7a30b19.js";import"./_plugin-vue_export-helper.67a9e3d9.js";const x={class:"container-600 auth"},g=["onSubmit"],q=o("div",{class:"mb-3"},[o("h2",null,"Registrar")],-1),S={class:"mb-3"},U=o("label",{for:"nome"},"Nome",-1),M={class:"mb-3"},N=o("label",{for:"email"},"E-mail",-1),R={class:"mb-3"},B=o("label",{for:"cpf_cnpj"},"CPF ou CNPJ",-1),P={class:"mb-3"},F=o("label",{for:"celular"},"Celular",-1),J={class:"mb-3"},T=o("label",{for:"password"},"Senha",-1),D={class:"mb-3"},E=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),L=o("div",{class:"mb-3"},[o("button",{class:"btn btn-primary",type:"submit"},"Registrar")],-1),X={class:"mb-2"},K={__name:"Register",setup($){const r=b({nome:"",email:"",cpf_cnpj:"",celular:"",password:"",password_confirmation:""}),p=c(null),d=c(null);w(()=>{m.cpf_cnpj(p.value),m.telefone(d.value)});function f(){r.post(route("register"),{onFinish:()=>r.reset("password","password_confirmation")})}return(_,s)=>(v(),h(k,null,{default:u(()=>[l(e(j),{title:"Register"}),o("div",x,[o("form",{onSubmit:y(f,["prevent"])},[q,o("div",S,[U,a(o("input",{class:"form-control",type:"text",id:"nome","onUpdate:modelValue":s[0]||(s[0]=t=>e(r).nome=t),required:"",autocomplete:"nome"},null,512),[[i,e(r).nome]]),l(n,{error:e(r).errors.nome},null,8,["error"])]),o("div",M,[N,a(o("input",{class:"form-control",type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=t=>e(r).email=t),required:"",autocomplete:"email"},null,512),[[i,e(r).email]]),l(n,{error:e(r).errors.email},null,8,["error"])]),o("div",R,[B,a(o("input",{class:"form-control",ref_key:"elCpf_cnpj",ref:p,type:"text",id:"cpf_cnpj","onUpdate:modelValue":s[2]||(s[2]=t=>e(r).cpf_cnpj=t),required:"",autocomplete:"cpf_cnpj"},null,512),[[i,e(r).cpf_cnpj]]),l(n,{error:e(r).errors.cpf_cnpj},null,8,["error"]),l(n,{error:e(r).errors.cnpj},null,8,["error"]),l(n,{error:e(r).errors.cpf},null,8,["error"])]),o("div",P,[F,a(o("input",{class:"form-control",ref_key:"elCelular",ref:d,type:"text",id:"celular","onUpdate:modelValue":s[3]||(s[3]=t=>e(r).celular=t),required:"",autocomplete:"celular"},null,512),[[i,e(r).celular]]),l(n,{error:e(r).errors.celular},null,8,["error"])]),o("div",J,[T,a(o("input",{class:"form-control",type:"password",id:"password","onUpdate:modelValue":s[4]||(s[4]=t=>e(r).password=t),required:"",autocomplete:"new-password"},null,512),[[i,e(r).password]]),l(n,{error:e(r).errors.password},null,8,["error"])]),o("div",D,[E,a(o("input",{class:"form-control",type:"password",id:"password_confirmation","onUpdate:modelValue":s[5]||(s[5]=t=>e(r).password_confirmation=t),required:"",autocomplete:"new-password"},null,512),[[i,e(r).password_confirmation]]),l(n,{error:e(r).errors.password_confirmation},null,8,["error"])]),L,o("div",X,[l(e(V),{class:"btn btn-link",href:_.route("login")},{default:u(()=>[C("J\xE1 possui conta?")]),_:1},8,["href"])])],40,g)])]),_:1}))}};export{K as default};

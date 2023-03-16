import{d as h,v as j,m as f,n as v,a as C,w as y,o as x,b as o,l as M,e as c,f as p,u as r,g as l}from"./app.1b3c5d70.js";import{M as _}from"./InputMask.a817a657.js";import{_ as t}from"./FormError.vue_vue_type_script_setup_true_lang.1e2e7dc3.js";import{_ as V}from"./SiteLayout.vue_vue_type_script_setup_true_lang.d285ba27.js";import"./_plugin-vue_export-helper.61ff1561.js";import"./index.c57ba517.js";const k={class:"container perfil"},P=["onSubmit"],N=o("div",{class:"mb-3"},[o("h2",null,"Meu Perfil")],-1),S={class:"mb-3"},U=o("label",{for:"nome"},"Nome",-1),g={class:"mb-3"},A=o("label",{for:"email"},"E-mail",-1),B={class:"mb-3"},D=o("label",{for:"cpf_cnpj"},"CPF ou CNPJ",-1),z={class:"mb-3"},F=o("label",{for:"celular"},"Celular",-1),$={class:"mb-3"},E=o("label",{for:"password"},"Senha",-1),J=o("input",{id:"password",class:"form-control",type:"password",autocomplete:"new-password"},null,-1),O={class:"mb-3"},T=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),q=o("input",{id:"password_confirmation",class:"form-control",type:"password",autocomplete:"new-password"},null,-1),G=o("div",{class:"mb-3"},[o("button",{class:"btn btn-primary",type:"submit"}," Atualizar ")],-1),W=h({__name:"Perfil",props:{user:Object},setup(b){var d;const a=b,e=j({nome:a.user.nome,email:a.user.email,cpf_cnpj:(d=a.user.cpf)!=null?d:a.user.cnpj,celular:a.user.celular,password:"",password_confirmation:""}),m=f(null),u=f(null);v(()=>{_.cpf_cnpj(m.value),_.telefone(u.value)});function w(){e.transform(i=>({...i,celular:i.celular.replaceAll(/\D/g,""),cpf_cnpj:i.cpf_cnpj.replaceAll(/\D/g,"")})).post("/perfil/atualizar",{onFinish:()=>e.reset("password","password_confirmation")})}return(i,s)=>(x(),C(V,{titulo:"Perfil"},{default:y(()=>[o("div",k,[o("form",{onSubmit:M(w,["prevent"])},[N,o("div",S,[U,c(o("input",{id:"nome","onUpdate:modelValue":s[0]||(s[0]=n=>r(e).nome=n),class:"form-control",type:"text",autocomplete:"nome"},null,512),[[p,r(e).nome]]),l(t,{error:r(e).errors.nome},null,8,["error"])]),o("div",g,[A,c(o("input",{id:"email","onUpdate:modelValue":s[1]||(s[1]=n=>r(e).email=n),class:"form-control",type:"email",autocomplete:"email"},null,512),[[p,r(e).email]]),l(t,{error:r(e).errors.email},null,8,["error"])]),o("div",B,[D,c(o("input",{id:"cpf_cnpj",ref_key:"elCpfCnpj",ref:m,"onUpdate:modelValue":s[2]||(s[2]=n=>r(e).cpf_cnpj=n),class:"form-control",type:"text",autocomplete:"cpf_cnpj"},null,512),[[p,r(e).cpf_cnpj]]),l(t,{error:r(e).errors.cpf_cnpj},null,8,["error"]),l(t,{error:r(e).errors.cpf},null,8,["error"]),l(t,{error:r(e).errors.cnpj},null,8,["error"])]),o("div",z,[F,c(o("input",{id:"celular",ref_key:"elCelular",ref:u,"onUpdate:modelValue":s[3]||(s[3]=n=>r(e).celular=n),class:"form-control",type:"text",autocomplete:"celular"},null,512),[[p,r(e).celular]]),l(t,{error:r(e).errors.celular},null,8,["error"])]),o("div",$,[E,J,l(t,{error:r(e).errors.password},null,8,["error"])]),o("div",O,[T,q,l(t,{error:r(e).errors.password_confirmation},null,8,["error"])]),G],40,P)])]),_:1}))}});export{W as default};
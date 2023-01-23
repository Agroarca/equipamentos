import{P as h,k as _,l as j,a as v,w as y,o as C,b as o,j as x,d as i,v as p,u as e,e as l}from"./app.f56e2738.js";import{S as k}from"./SiteLayout.a4679d3a.js";import{_ as t}from"./FormError.3094d882.js";import{M as f}from"./InputMask.f7a30b19.js";import"./_plugin-vue_export-helper.67a9e3d9.js";const M={class:"container perfil"},S=["onSubmit"],V=o("div",{class:"mb-3"},[o("h2",null,"Meu Perfil")],-1),P={class:"mb-3"},N=o("label",{for:"nome"},"Nome",-1),U={class:"mb-3"},A=o("label",{for:"email"},"E-mail",-1),B={class:"mb-3"},D=o("label",{for:"cpf_cnpj"},"CPF ou CNPJ",-1),g={class:"mb-3"},z=o("label",{for:"celular"},"Celular",-1),F={class:"mb-3"},E=o("label",{for:"password"},"Senha",-1),J=o("input",{class:"form-control",type:"password",id:"password",autocomplete:"new-password"},null,-1),L={class:"mb-3"},T=o("label",{for:"password_confirmation"},"Confirmar Senha",-1),$=o("input",{class:"form-control",type:"password",id:"password_confirmation",autocomplete:"new-password"},null,-1),q=o("div",{class:"mb-3"},[o("button",{class:"btn btn-primary",type:"submit"},"Atualizar")],-1),Q={__name:"Perfil",props:["user"],setup(b){var d;const a=b,r=h({nome:a.user.nome,email:a.user.email,cpf_cnpj:(d=a.user.cpf)!=null?d:a.user.cnpj,celular:a.user.celular,password:"",password_confirmation:""}),u=_(null),m=_(null);j(()=>{f.cpf_cnpj(u.value),f.telefone(m.value)});function w(){r.transform(c=>({...c,celular:c.celular.replaceAll(/\D/g,""),cpf_cnpj:c.cpf_cnpj.replaceAll(/\D/g,"")})).post(route("site.perfil.atualizar"),{onFinish:()=>r.reset("password","password_confirmation")})}return(c,s)=>(C(),v(k,null,{default:y(()=>[o("div",M,[o("form",{onSubmit:x(w,["prevent"])},[V,o("div",P,[N,i(o("input",{class:"form-control",type:"text",id:"nome","onUpdate:modelValue":s[0]||(s[0]=n=>e(r).nome=n),autocomplete:"nome"},null,512),[[p,e(r).nome]]),l(t,{error:e(r).errors.nome},null,8,["error"])]),o("div",U,[A,i(o("input",{class:"form-control",type:"email",id:"email","onUpdate:modelValue":s[1]||(s[1]=n=>e(r).email=n),autocomplete:"email"},null,512),[[p,e(r).email]]),l(t,{error:e(r).errors.email},null,8,["error"])]),o("div",B,[D,i(o("input",{class:"form-control",ref_key:"elCpf_cnpj",ref:u,type:"text",id:"cpf_cnpj","onUpdate:modelValue":s[2]||(s[2]=n=>e(r).cpf_cnpj=n),autocomplete:"cpf_cnpj"},null,512),[[p,e(r).cpf_cnpj]]),l(t,{error:e(r).errors.cpf_cnpj},null,8,["error"]),l(t,{error:e(r).errors.cpf},null,8,["error"]),l(t,{error:e(r).errors.cnpj},null,8,["error"])]),o("div",g,[z,i(o("input",{class:"form-control",ref_key:"elCelular",ref:m,type:"text",id:"celular","onUpdate:modelValue":s[3]||(s[3]=n=>e(r).celular=n),autocomplete:"celular"},null,512),[[p,e(r).celular]]),l(t,{error:e(r).errors.celular},null,8,["error"])]),o("div",F,[E,J,l(t,{error:e(r).errors.password},null,8,["error"])]),o("div",L,[T,$,l(t,{error:e(r).errors.password_confirmation},null,8,["error"])]),q],40,S)])]),_:1}))}};export{Q as default};

import{d as i,v as d,a as p,w as m,o as c,g as t,u as o,X as u,b as s,e as l,f,l as _}from"./app.601621a4.js";import{_ as w}from"./SiteLayout.vue_vue_type_script_setup_true_lang.78893dea.js";import{_ as h}from"./FormError.vue_vue_type_script_setup_true_lang.d83fb919.js";import"./_plugin-vue_export-helper.bb01cd29.js";const b=s("div",{class:"alert alert-warn"}," Essa \xE9 uma \xE1rea restrita! Confirme sua senha antes de acessar ",-1),v=["onSubmit"],x={class:"form-group"},C=s("label",{for:"password"},"Senha",-1),S=s("div",{class:"form-group"},[s("button",{class:"btn btn-primary",type:"submit"}," Confirmar ")],-1),M=i({__name:"ConfirmPassword",setup(g){const r=d({password:""});function a(){r.post(route("password.confirm"),{onFinish:()=>r.reset()})}return(y,e)=>(c(),p(w,null,{default:m(()=>[t(o(u),{title:"Recuperar Senha"}),b,s("form",{onSubmit:_(a,["prevent"])},[s("div",x,[C,l(s("input",{id:"password","onUpdate:modelValue":e[0]||(e[0]=n=>o(r).password=n),class:"form-control",type:"password",required:"",autocomplete:"current-password"},null,512),[[f,o(r).password]]),t(h,{error:o(r).errors.password},null,8,["error"])]),S],40,v)]),_:1}))}});export{M as default};
import{d as f,s as V,k as o,b as r,z as y,u as n,a as c,A as u,l as d,e as m,p as x,F as b,m as U,o as s,t as h}from"./app-fc9eabe0.js";const C={key:0,class:"form-check form-switch"},g=["checked"],w={key:1},B={key:2},M={key:3},D={key:4},F={key:5},N=["value"],j=f({__name:"ValorCaracteristicas",props:{modelValue:null,caracteristica:Object},emits:["update:modelValue"],setup(i,{emit:k}){const p=i,a=`caracteristica-${p.caracteristica.id}`,e=V({get(){return p.modelValue},set(v){k("update:modelValue",v)}});return(v,l)=>(s(),o("div",null,[i.caracteristica.tipo==0?(s(),o("div",C,[r(c("input",{id:a,"onUpdate:modelValue":l[0]||(l[0]=t=>u(e)?e.value=t:null),checked:n(e),class:"form-check-input",type:"checkbox",name:a},null,8,g),[[y,n(e)]])])):d("",!0),i.caracteristica.tipo==1?(s(),o("div",w,[r(c("input",{id:a,"onUpdate:modelValue":l[1]||(l[1]=t=>u(e)?e.value=t:null),class:"form-control",type:"number",name:a},null,512),[[m,n(e)]])])):d("",!0),i.caracteristica.tipo==2?(s(),o("div",B,[r(c("input",{id:a,"onUpdate:modelValue":l[2]||(l[2]=t=>u(e)?e.value=t:null),class:"form-control",type:"number",name:a},null,512),[[m,n(e)]])])):d("",!0),i.caracteristica.tipo==3?(s(),o("div",M,[r(c("input",{id:a,"onUpdate:modelValue":l[3]||(l[3]=t=>u(e)?e.value=t:null),class:"form-control",type:"text",name:a},null,512),[[m,n(e)]])])):d("",!0),i.caracteristica.tipo==4?(s(),o("div",D,[r(c("textarea",{id:a,"onUpdate:modelValue":l[4]||(l[4]=t=>u(e)?e.value=t:null),class:"form-control",name:a,rows:"3"},null,512),[[m,n(e)]])])):d("",!0),i.caracteristica.tipo==5?(s(),o("div",F,[r(c("select",{id:a,"onUpdate:modelValue":l[5]||(l[5]=t=>u(e)?e.value=t:null),name:a,class:"form-select"},[(s(!0),o(b,null,U(i.caracteristica.opcoes,t=>(s(),o("option",{key:t.id,value:t.id},h(t.nome),9,N))),128))],512),[[x,n(e)]])])):d("",!0)]))}});export{j as _};

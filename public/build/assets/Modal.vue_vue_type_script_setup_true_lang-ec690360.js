import{d as c,r,x as m,M as h,B as _,k as u,a as s,C as e,q as b,o as f,t as v}from"./app-53845742.js";const S=["id"],p={class:"modal-content"},y={class:"modal-header"},M={class:"modal-title"},g=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Fechar"},null,-1),C={class:"modal-body"},k={class:"modal-footer"},B=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Fechar ",-1),$=c({__name:"Modal",props:{id:String,title:String,modalSizeClass:String},setup(t,{expose:l}){const d=r(null);let o;m(()=>{o=new h(d.value)}),_(()=>{o.hide()});function n(){o.show()}function i(){o.hide()}return l({show:n,hide:i}),(a,w)=>(f(),u("div",{id:t.id,ref_key:"elModal",ref:d,class:"modal fade",tabindex:"-1"},[s("div",{class:b(["modal-dialog",t.modalSizeClass])},[s("div",p,[s("div",y,[e(a.$slots,"header",{},()=>[s("h5",M,v(t.title),1),g])]),s("div",C,[e(a.$slots,"default")]),s("div",k,[e(a.$slots,"footer"),B])])],2)],8,S))}});export{$ as _};

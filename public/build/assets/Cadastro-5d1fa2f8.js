import{d as b,r as v,x as q,v as y,c as g,w as x,o as m,a as o,f as l,g as V,b as i,e as d,u as e,p as h,k as f,m as M,t as k,F as U}from"./app-53845742.js";import{A as S}from"./AdminLayout-f0beaab8.js";import{_ as A}from"./Navegacao.vue_vue_type_script_setup_true_lang-a42e3d72.js";import{M as E}from"./InputMask-3a39779a.js";import{_ as n}from"./FormError.vue_vue_type_script_setup_true_lang-2ef9a590.js";import"./_plugin-vue_export-helper-0c092d97.js";import"./index-ac617c56.js";const w={class:"equipamento"},B=["onSubmit"],C={class:"card card-default"},$={class:"card-body"},j={class:"mb-3"},D=o("label",{for:"titulo"},"Título",-1),F={class:"mb-3"},L=o("label",{for:"valor"},"Valor",-1),N={class:"mb-3"},T=o("label",{for:"ano"},"Ano",-1),z={class:"mb-3"},O=o("label",{for:"marca_id"},"Marca",-1),G={class:"mb-3"},H=o("label",{for:"marca_id"},"Modelo",-1),I={class:"mb-3"},J=o("label",{for:"categoria"},"Categoria",-1),K={class:"mb-3"},P=o("label",{for:"categoria"},"Status",-1),Q=["value"],R=o("div",{class:"card-footer"},[o("button",{type:"submit",class:"btn btn-primary"}," Salvar ")],-1),ro=b({__name:"Cadastro",props:{equipamento:Object,statusEquipamentos:Array},setup(u){const s=u,c=v(null);q(()=>{E.preco(c.value)});const t=y({id:s.equipamento.id,titulo:s.equipamento.titulo,valor:s.equipamento.valor,ano:s.equipamento.ano,marca:s.equipamento.modelo.marca.nome,modelo:s.equipamento.modelo.nome,categoria:s.equipamento.categoria.nome,status:s.equipamento.status});function _(){t.post(`/admin/equipamentos/${s.equipamento.id}/atualizar`)}return(W,r)=>(m(),g(S,{titulo:"Editar Equipamento"},{default:x(()=>[o("div",w,[l(A,{class:"mb-4 d-flex flex-roll justify-content-center",equipamento:u.equipamento,paginaAtual:"cadastro"},null,8,["equipamento"]),o("form",{onSubmit:V(_,["prevent"])},[o("div",C,[o("div",$,[o("div",j,[D,i(o("input",{id:"titulo","onUpdate:modelValue":r[0]||(r[0]=a=>e(t).titulo=a),class:"form-control",type:"text",required:""},null,512),[[d,e(t).titulo]]),l(n,{error:e(t).errors.titulo},null,8,["error"])]),o("div",F,[L,i(o("input",{id:"valor",ref_key:"elValor",ref:c,"onUpdate:modelValue":r[1]||(r[1]=a=>e(t).valor=a),class:"form-control",type:"text",required:""},null,512),[[d,e(t).valor]]),l(n,{error:e(t).errors.valor},null,8,["error"])]),o("div",N,[T,i(o("input",{id:"ano","onUpdate:modelValue":r[2]||(r[2]=a=>e(t).ano=a),class:"form-control",type:"text",required:""},null,512),[[d,e(t).ano]]),l(n,{error:e(t).errors.ano},null,8,["error"])]),o("div",z,[O,i(o("input",{id:"ano","onUpdate:modelValue":r[3]||(r[3]=a=>e(t).marca=a),class:"form-control",type:"text",disabled:""},null,512),[[d,e(t).marca]]),l(n,{error:e(t).errors.marca},null,8,["error"])]),o("div",G,[H,i(o("input",{id:"ano","onUpdate:modelValue":r[4]||(r[4]=a=>e(t).modelo=a),class:"form-control",type:"text",disabled:""},null,512),[[d,e(t).modelo]]),l(n,{error:e(t).errors.modelo},null,8,["error"])]),o("div",I,[J,i(o("input",{id:"ano","onUpdate:modelValue":r[5]||(r[5]=a=>e(t).categoria=a),class:"form-control",type:"text",disabled:""},null,512),[[d,e(t).categoria]]),l(n,{error:e(t).errors.categoria},null,8,["error"])]),o("div",K,[P,i(o("select",{id:"status","onUpdate:modelValue":r[6]||(r[6]=a=>e(t).status=a),class:"form-select",required:""},[(m(!0),f(U,null,M(u.statusEquipamentos,(a,p)=>(m(),f("option",{key:p,value:p},k(a),9,Q))),128))],512),[[h,e(t).status]]),l(n,{error:e(t).errors.categoria},null,8,["error"])])]),R])],40,B)])]),_:1}))}});export{ro as default};

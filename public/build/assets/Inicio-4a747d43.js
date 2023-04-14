import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, t as toDisplayString, h as createTextVNode, u as unref, n as ne, k as createElementBlock, F as Fragment, m as renderList, l as createCommentVNode } from "./app-4bad2d0e.js";
import { _ as _sfc_main$3 } from "./Formatacao.vue_vue_type_script_setup_true_lang-58a1301d.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-9f82cc24.js";
import { _ as _sfc_main$2 } from "./Imagens.vue_vue_type_script_setup_true_lang-9db2805e.js";
import "./InputMask-8f3451b8.js";
import "./_plugin-vue_export-helper-32befbe5.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container equipamento" };
const _hoisted_2 = { class: "d-flex flex-column flex-md-row align-items-md-start" };
const _hoisted_3 = { class: "info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0" };
const _hoisted_4 = { class: "ano" };
const _hoisted_5 = { class: "titulo" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "descricao-header" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Características")
], -1);
const _hoisted_7 = {
  key: 0,
  class: "caracteristicas"
};
const _hoisted_8 = { class: "nome" };
const _hoisted_9 = { class: "valor" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "descricao-header" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Descrição")
], -1);
const _hoisted_11 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    equipamento: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        titulo: __props.equipamento.titulo
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$2, {
                imagens: __props.equipamento.imagens,
                class: "col-md-8"
              }, null, 8, ["imagens"]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("span", _hoisted_4, "Ano: " + toDisplayString(__props.equipamento.ano), 1),
                createBaseVNode("h1", _hoisted_5, toDisplayString(__props.equipamento.titulo), 1),
                createVNode(_sfc_main$3, {
                  class: "valor",
                  tipo: "preco",
                  valor: __props.equipamento.valor
                }, null, 8, ["valor"]),
                createVNode(unref(ne), {
                  href: `/conversa/equipamento/${__props.equipamento.id}`,
                  class: "botao btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Estou Interessado! ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ]),
            _hoisted_6,
            __props.equipamento.caracteristicas.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamento.caracteristicas, (caracteristica) => {
                return openBlock(), createElementBlock("div", {
                  key: caracteristica.id,
                  class: "caracteristica"
                }, [
                  createBaseVNode("span", _hoisted_8, toDisplayString(caracteristica.caracteristica.nome), 1),
                  createBaseVNode("span", _hoisted_9, toDisplayString(caracteristica.valor.valor), 1)
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            _hoisted_10,
            createBaseVNode("div", {
              class: "descricao",
              innerHTML: __props.equipamento.descricao
            }, null, 8, _hoisted_11)
          ])
        ]),
        _: 1
      }, 8, ["titulo"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Inicio-4a747d43.js.map

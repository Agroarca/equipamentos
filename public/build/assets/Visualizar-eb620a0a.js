import { A as AdminLayout } from "./AdminLayout-946f09b1.js";
import { _ as _sfc_main$1 } from "./ListaOpcoes.vue_vue_type_script_setup_true_lang-c0d0adc4.js";
import { t as tituloTamanhoMinimo, a as tituloTamanhoMaximo, m as mostrarTamanhos, b as mostrarCasasDecimais, c as mostrarOpcoes } from "./Helper-dc2fcd27.js";
import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, u as unref, k as createElementBlock, t as toDisplayString, l as createCommentVNode } from "./app-ed22f974.js";
import "./_plugin-vue_export-helper-c43da2e0.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = { class: "card-body" };
const _hoisted_3 = { class: "mb-3" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_5 = ["value"];
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "tipo" }, "Tipo:", -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "mb-3 form-check form-switch" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", {
  class: "form-check-label",
  for: "obrigatorio"
}, "Obrigatório", -1);
const _hoisted_12 = {
  key: 0,
  class: "mb-3"
};
const _hoisted_13 = { for: "minimo" };
const _hoisted_14 = ["value"];
const _hoisted_15 = {
  key: 1,
  class: "mb-3"
};
const _hoisted_16 = { for: "maximo" };
const _hoisted_17 = ["value"];
const _hoisted_18 = {
  key: 2,
  class: "mb-3"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", { for: "quantidade" }, "Quantidade de Casas Decimais", -1);
const _hoisted_20 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Visualizar",
  props: {
    caracteristica: Object,
    tipos: Array
  },
  setup(__props) {
    const props = __props;
    const tituloMinimo = tituloTamanhoMinimo(props.caracteristica.tipo);
    const tituloMaximo = tituloTamanhoMaximo(props.caracteristica.tipo);
    const mostrarTamanho = mostrarTamanhos(props.caracteristica.tipo);
    const mostrarCasasDecimais$1 = mostrarCasasDecimais(props.caracteristica.tipo);
    const mostrarOpcoes$1 = mostrarOpcoes(props.caracteristica.tipo);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Visualizar Característica" }, {
        default: withCtx(() => [
          createBaseVNode("form", null, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  _hoisted_4,
                  createBaseVNode("input", {
                    id: "nome",
                    class: "form-control",
                    type: "text",
                    value: __props.caracteristica.nome,
                    disabled: ""
                  }, null, 8, _hoisted_5)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("input", {
                    id: "tipo",
                    class: "form-control",
                    type: "text",
                    value: __props.tipos[__props.caracteristica.tipo],
                    disabled: ""
                  }, null, 8, _hoisted_8)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("input", {
                    id: "obrigatorio",
                    class: "form-check-input",
                    type: "checkbox",
                    checked: __props.caracteristica.obrigatorio,
                    disabled: ""
                  }, null, 8, _hoisted_10),
                  _hoisted_11
                ]),
                unref(mostrarTamanho) ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createBaseVNode("label", _hoisted_13, toDisplayString(unref(tituloMinimo)), 1),
                  createBaseVNode("input", {
                    id: "minimo",
                    class: "form-control",
                    type: "number",
                    value: __props.caracteristica.minimo,
                    disabled: ""
                  }, null, 8, _hoisted_14)
                ])) : createCommentVNode("", true),
                unref(mostrarTamanho) ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createBaseVNode("label", _hoisted_16, toDisplayString(unref(tituloMaximo)), 1),
                  createBaseVNode("input", {
                    id: "maximo",
                    class: "form-control",
                    type: "number",
                    value: __props.caracteristica.maximo,
                    disabled: ""
                  }, null, 8, _hoisted_17)
                ])) : createCommentVNode("", true),
                unref(mostrarCasasDecimais$1) ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  _hoisted_19,
                  createBaseVNode("input", {
                    id: "quantidade",
                    class: "form-control",
                    type: "number",
                    value: __props.caracteristica.quantidade,
                    disabled: ""
                  }, null, 8, _hoisted_20)
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          unref(mostrarOpcoes$1) ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            class: "mt-5",
            caracteristica: __props.caracteristica
          }, null, 8, ["caracteristica"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Visualizar-eb620a0a.js.map

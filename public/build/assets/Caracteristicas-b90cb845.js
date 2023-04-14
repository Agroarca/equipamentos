import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, k as createElementBlock, m as renderList, h as createTextVNode, t as toDisplayString, l as createCommentVNode, u as unref, F as Fragment, g as withModifiers } from "./app-7261d323.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-54df8edf.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-b3b1e8bd.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-3d233652.js";
import { _ as _sfc_main$4 } from "./Valor.vue_vue_type_script_setup_true_lang-87b600d5.js";
import "./_plugin-vue_export-helper-85f18738.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "container-600 cadastrar-equipamento caracteristicas" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Caracteristicas do Equipamento ", -1);
const _hoisted_4 = { class: "table table-hover mt-3 display-block" };
const _hoisted_5 = ["for"];
const _hoisted_6 = {
  key: 0,
  class: "opcional"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Caracteristicas",
  props: {
    caracteristicas: Object,
    equipamento: Object
  },
  setup(__props) {
    const props = __props;
    const valores = [];
    props.caracteristicas.forEach((caracteristica) => {
      valores[`carac-${caracteristica.id}`] = caracteristica.valor;
    });
    const form = v(valores);
    function submit() {
      form.post(`/equipamento/${props.equipamento.id}/caracteristicas/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createVNode(_sfc_main$2, {
                class: "mb-3 display-block",
                passoAtual: 4,
                passoCadastro: __props.equipamento.passo_cadastro,
                equipamento: __props.equipamento
              }, null, 8, ["passoCadastro", "equipamento"]),
              createBaseVNode("table", _hoisted_4, [
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caracteristicas, (caracteristica) => {
                    return openBlock(), createElementBlock("tr", {
                      key: caracteristica.id
                    }, [
                      createBaseVNode("td", null, [
                        createBaseVNode("label", {
                          for: `caracteristica-${caracteristica.id}`
                        }, [
                          createTextVNode(toDisplayString(caracteristica.nome) + " ", 1),
                          caracteristica.obrigatorio ? (openBlock(), createElementBlock("span", _hoisted_6, "* Obrigatório")) : createCommentVNode("", true)
                        ], 8, _hoisted_5),
                        createVNode(_sfc_main$3, {
                          error: unref(form).errors["carac-" + caracteristica.id]
                        }, null, 8, ["error"])
                      ]),
                      createBaseVNode("td", null, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form)["carac-" + caracteristica.id],
                          "onUpdate:modelValue": ($event) => unref(form)["carac-" + caracteristica.id] = $event,
                          caracteristica
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "caracteristica"])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _hoisted_7
            ])
          ], 40, _hoisted_1)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Caracteristicas-b90cb845.js.map

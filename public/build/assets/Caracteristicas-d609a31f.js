import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, f as createVNode, a as createBaseVNode, k as createElementBlock, m as renderList, t as toDisplayString, u as unref, F as Fragment, g as withModifiers } from "./app-262f55c5.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-0b2cdf09.js";
import { A as AdminLayout } from "./AdminLayout-59296aa0.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-4935b031.js";
import { _ as _sfc_main$3 } from "./ValorCaracteristicas.vue_vue_type_script_setup_true_lang-9eba22bd.js";
import "./_plugin-vue_export-helper-43755360.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Características ")
], -1);
const _hoisted_4 = { class: "card-body p-0" };
const _hoisted_5 = { class: "table table-striped table-hover" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("td", null, "Valor")
], -1);
const _hoisted_7 = ["for"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
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
      form.post(`/admin/equipamentos/${props.equipamento.id}/caracteristicas/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Equipamento" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, {
            class: "mb-4 d-flex flex-roll justify-content-center",
            equipamento: __props.equipamento,
            paginaAtual: "caracteristicas"
          }, null, 8, ["equipamento"]),
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("table", _hoisted_5, [
                  _hoisted_6,
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caracteristicas, (caracteristica) => {
                      return openBlock(), createElementBlock("tr", {
                        key: caracteristica.id
                      }, [
                        createBaseVNode("td", null, [
                          createBaseVNode("label", {
                            for: `caracteristica-${caracteristica.id}`
                          }, toDisplayString(caracteristica.nome), 9, _hoisted_7),
                          createVNode(_sfc_main$2, {
                            error: unref(form).errors["carac-" + caracteristica.id]
                          }, null, 8, ["error"])
                        ]),
                        createBaseVNode("td", null, [
                          createVNode(_sfc_main$3, {
                            modelValue: unref(form)["carac-" + caracteristica.id],
                            "onUpdate:modelValue": ($event) => unref(form)["carac-" + caracteristica.id] = $event,
                            caracteristica
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "caracteristica"])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              _hoisted_8
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
//# sourceMappingURL=Caracteristicas-d609a31f.js.map

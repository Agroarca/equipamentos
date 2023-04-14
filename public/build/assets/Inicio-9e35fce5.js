import { d as defineComponent, v, k as createElementBlock, a as createBaseVNode, F as Fragment, m as renderList, g as withModifiers, o as openBlock, h as createTextVNode, t as toDisplayString, f as createVNode, u as unref } from "./app-0ff9bc90.js";
import { _ as _sfc_main$2 } from "./Valor.vue_vue_type_script_setup_true_lang-6a881855.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
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
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
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
      return openBlock(), createElementBlock("form", {
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
                      createTextVNode(toDisplayString(caracteristica.nome) + " ", 1),
                      createVNode(_sfc_main$1, {
                        error: unref(form).errors["carac-" + caracteristica.id]
                      }, null, 8, ["error"])
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_sfc_main$2, {
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
          _hoisted_7
        ])
      ], 40, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Inicio-9e35fce5.js.map

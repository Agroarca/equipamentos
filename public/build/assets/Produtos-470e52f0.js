import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, u as unref, g as withModifiers } from "./app-7261d323.js";
import { A as AdminLayout } from "./AdminLayout-044eb12d.js";
import { _ as _sfc_main$1 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-ef0f2bfb.js";
import { _ as _sfc_main$3 } from "./ListaProdutos.vue_vue_type_script_setup_true_lang-a0074eca.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-b3b1e8bd.js";
import "./_plugin-vue_export-helper-85f18738.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default mb-4" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Adicionar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Produtos",
  props: {
    lista: Object,
    options: Object,
    produtos: Object
  },
  setup(__props) {
    const props = __props;
    const form = v({
      equipamento_id: ""
    });
    function submit() {
      form.post(`/admin/lista/${props.lista.id}/adicionar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, {
        titulo: __props.lista.nome
      }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    modelValue: unref(form).equipamento_id,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).equipamento_id = $event),
                    href: "/admin/equipamentos/pesquisar",
                    options: __props.options
                  }, null, 8, ["modelValue", "options"]),
                  createVNode(_sfc_main$2, {
                    error: unref(form).errors.equipamento_id
                  }, null, 8, ["error"])
                ])
              ]),
              _hoisted_4
            ])
          ], 40, _hoisted_1),
          createVNode(_sfc_main$3, { produtos: __props.produtos }, null, 8, ["produtos"])
        ]),
        _: 1
      }, 8, ["titulo"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Produtos-470e52f0.js.map

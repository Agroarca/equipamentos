import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers } from "./app-ed22f974.js";
import { A as AdminLayout } from "./AdminLayout-946f09b1.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-bc13d592.js";
import "./_plugin-vue_export-helper-c43da2e0.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Categoria Mãe: ", -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Criar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Criar",
  props: {
    categoriaMae: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const form = v({
      nome: "",
      categoria_mae_id: (_a = props.categoriaMae) == null ? void 0 : _a.id
    });
    function submit() {
      form.post("/admin/categorias/salvar");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Nova Categoria" }, {
        default: withCtx(() => {
          var _a2;
          return [
            createBaseVNode("form", {
              onSubmit: withModifiers(submit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    _hoisted_5,
                    withDirectives(createBaseVNode("input", {
                      id: "nome",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).nome = $event),
                      class: "form-control",
                      type: "text",
                      required: ""
                    }, null, 512), [
                      [vModelText, unref(form).nome]
                    ]),
                    createVNode(_sfc_main$1, {
                      error: unref(form).errors.nome
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    _hoisted_7,
                    createBaseVNode("input", {
                      id: "nome",
                      class: "form-control",
                      type: "text",
                      value: (_a2 = __props.categoriaMae) == null ? void 0 : _a2.nome,
                      disabled: ""
                    }, null, 8, _hoisted_8)
                  ])
                ]),
                _hoisted_9
              ])
            ], 40, _hoisted_1)
          ];
        }),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Criar-3956b95f.js.map

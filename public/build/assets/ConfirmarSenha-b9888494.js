import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers } from "./app-4bad2d0e.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-9f82cc24.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-d8b2414d.js";
import "./_plugin-vue_export-helper-32befbe5.js";
import "./index-2530c752.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "alert alert-warn" }, " Essa é uma área restrita! Confirme sua senha antes de acessar ", -1);
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "form-group" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", { for: "password" }, "Senha", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "form-group" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "btn btn-primary",
    type: "submit"
  }, " Confirmar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfirmarSenha",
  setup(__props) {
    const form = v({
      password: ""
    });
    function submit() {
      form.post("/confirm-password", {
        onFinish: () => form.reset()
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Recuperar Senha" }, {
        default: withCtx(() => [
          _hoisted_1,
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              withDirectives(createBaseVNode("input", {
                id: "password",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).password = $event),
                class: "form-control",
                type: "password",
                required: "",
                autocomplete: "current-password"
              }, null, 512), [
                [vModelText, unref(form).password]
              ]),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.password
              }, null, 8, ["error"])
            ]),
            _hoisted_5
          ], 40, _hoisted_2)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ConfirmarSenha-b9888494.js.map

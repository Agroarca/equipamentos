import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers } from "./app-7261d323.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-54df8edf.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-b3b1e8bd.js";
import "./_plugin-vue_export-helper-85f18738.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "form-group" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("label", { for: "email" }, "E-mail", -1);
const _hoisted_4 = { class: "form-group" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "password" }, "Senha", -1);
const _hoisted_6 = { class: "form-group" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "password_confirmation" }, "Confirmar Senha", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "form-group" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "btn btn-primary",
    type: "submit"
  }, " Atualizar Senha ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RedefinirSenha",
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = v({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    function submit() {
      form.post("/reset-password", {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Atualizar Senha" }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              withDirectives(createBaseVNode("input", {
                id: "email",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).email = $event),
                class: "form-control",
                type: "email",
                disabled: "",
                autocomplete: "email"
              }, null, 512), [
                [vModelText, unref(form).email]
              ]),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.email
              }, null, 8, ["error"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              _hoisted_5,
              withDirectives(createBaseVNode("input", {
                id: "password",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).password = $event),
                class: "form-control",
                type: "password",
                required: "",
                autocomplete: "new-password"
              }, null, 512), [
                [vModelText, unref(form).password]
              ]),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.password
              }, null, 8, ["error"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              _hoisted_7,
              withDirectives(createBaseVNode("input", {
                id: "password_confirmation",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).password_confirmation = $event),
                class: "form-control",
                type: "password",
                required: "",
                autocomplete: "new-password"
              }, null, 512), [
                [vModelText, unref(form).password_confirmation]
              ]),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.password_confirmation
              }, null, 8, ["error"])
            ]),
            _hoisted_8
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
//# sourceMappingURL=RedefinirSenha-3e44421a.js.map

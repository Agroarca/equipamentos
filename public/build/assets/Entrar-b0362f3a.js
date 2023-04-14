import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, f as createVNode, z as vModelCheckbox, h as createTextVNode, n as ne } from "./app-4bad2d0e.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-9f82cc24.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-d8b2414d.js";
import "./_plugin-vue_export-helper-32befbe5.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 auth" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-3" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "Entrar")
], -1);
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "email" }, "E-mail", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "password" }, "Senha", -1);
const _hoisted_8 = { class: "form-check mb-3" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("label", {
  class: "form-check-label",
  for: "manter_conectado"
}, "Manter conectado?", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-3 d-flex justify-content-between" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "btn btn-primary",
    type: "submit"
  }, " Entrar ")
], -1);
const _hoisted_11 = { class: "mb-2" };
const _hoisted_12 = { class: "mb-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Entrar",
  setup(__props) {
    const form = v({
      email: "",
      password: "",
      manter_conectado: false
    });
    function submit() {
      form.post("/entrar", {
        onFinish: () => form.reset("password")
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Entrar" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("form", {
              onSubmit: withModifiers(submit, ["prevent"])
            }, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                withDirectives(createBaseVNode("input", {
                  id: "email",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).email = $event),
                  class: "form-control",
                  type: "email",
                  required: "",
                  autocomplete: "email"
                }, null, 512), [
                  [vModelText, unref(form).email]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.email
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                _hoisted_7,
                withDirectives(createBaseVNode("input", {
                  id: "password",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).password = $event),
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
              createBaseVNode("div", _hoisted_8, [
                withDirectives(createBaseVNode("input", {
                  id: "manter_conectado",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).manter_conectado = $event),
                  class: "form-check-input",
                  type: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, unref(form).manter_conectado]
                ]),
                _hoisted_9
              ]),
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                createVNode(unref(ne), {
                  class: "btn btn-link",
                  href: "/senha/recuperar"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Esqueceu sua Senha? ")
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(unref(ne), {
                  class: "btn btn-link",
                  href: "/registrar"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Não possui conta? ")
                  ]),
                  _: 1
                })
              ])
            ], 40, _hoisted_2)
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Entrar-b0362f3a.js.map

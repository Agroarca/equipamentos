import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, k as createElementBlock, g as withModifiers, b as withDirectives, e as vModelText, u as unref, f as createVNode, h as createTextVNode, n as ne } from "./app-7261d323.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-54df8edf.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-b3b1e8bd.js";
import "./_plugin-vue_export-helper-85f18738.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 auth" };
const _hoisted_2 = {
  key: 0,
  class: "alert alert-success"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "alert alert-info" }, " Esqueceu sua senha? Não se preocupe, informe seu e-mail e enviaremos um e-mail de recuperação ", -1);
const _hoisted_5 = ["onSubmit"];
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "email" }, "E-mail", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-3" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "btn btn-primary",
    type: "submit"
  }, " Enviar ")
], -1);
const _hoisted_9 = { class: "mb-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RecuperarSenha",
  props: {
    status: String
  },
  setup(__props) {
    const form = v({
      email: ""
    });
    function submit() {
      form.post("/senha/recuperar");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Recuperar Senha" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            __props.status ? (openBlock(), createElementBlock("div", _hoisted_2, " O e-mail de recuperação foi enviado com sucesso! ")) : (openBlock(), createElementBlock("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  withDirectives(createBaseVNode("input", {
                    id: "email",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).email = $event),
                    class: "form-control",
                    type: "email",
                    required: ""
                  }, null, 512), [
                    [vModelText, unref(form).email]
                  ]),
                  createVNode(_sfc_main$2, {
                    error: unref(form).errors.email
                  }, null, 8, ["error"])
                ]),
                _hoisted_8
              ], 40, _hoisted_5)
            ])),
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(ne), {
                class: "btn btn-link",
                href: "/entrar"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Entrar na Conta ")
                ]),
                _: 1
              })
            ])
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
//# sourceMappingURL=RecuperarSenha-62393fd0.js.map

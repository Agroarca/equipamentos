import { d as defineComponent, v, r as ref, x as onMounted, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, f as createVNode } from "./app-0ff9bc90.js";
import { M as Mask } from "./InputMask-4af8a144.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container perfil" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-3" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "Meu Perfil")
], -1);
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "email" }, "E-mail", -1);
const _hoisted_8 = { class: "mb-3" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("label", { for: "cpf_cnpj" }, "CPF ou CNPJ", -1);
const _hoisted_10 = { class: "mb-3" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", { for: "celular" }, "Celular", -1);
const _hoisted_12 = { class: "mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "password" }, "Senha", -1);
const _hoisted_14 = { class: "mb-3" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", { for: "password_confirmation" }, "Confirmar Senha", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-3" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "btn btn-primary",
    type: "submit"
  }, " Atualizar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Perfil",
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = v({
      nome: props.user.nome,
      email: props.user.email,
      cpf_cnpj: props.user.cpf ?? props.user.cnpj,
      celular: props.user.celular,
      password: "",
      password_confirmation: ""
    });
    const elCpfCnpj = ref(null);
    const elCelular = ref(null);
    onMounted(() => {
      Mask.cpf_cnpj(elCpfCnpj.value);
      Mask.telefone(elCelular.value);
    });
    function submit() {
      form.transform((data) => ({
        ...data,
        celular: data.celular.replaceAll(/\D/g, ""),
        cpf_cnpj: data.cpf_cnpj.replaceAll(/\D/g, "")
      })).post("/perfil/atualizar", {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Perfil" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("form", {
              onSubmit: withModifiers(submit, ["prevent"])
            }, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                withDirectives(createBaseVNode("input", {
                  id: "nome",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).nome = $event),
                  class: "form-control",
                  type: "text",
                  autocomplete: "nome"
                }, null, 512), [
                  [vModelText, unref(form).nome]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.nome
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                _hoisted_7,
                withDirectives(createBaseVNode("input", {
                  id: "email",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).email = $event),
                  class: "form-control",
                  type: "email",
                  autocomplete: "email"
                }, null, 512), [
                  [vModelText, unref(form).email]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.email
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_8, [
                _hoisted_9,
                withDirectives(createBaseVNode("input", {
                  id: "cpf_cnpj",
                  ref_key: "elCpfCnpj",
                  ref: elCpfCnpj,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).cpf_cnpj = $event),
                  class: "form-control",
                  type: "text",
                  autocomplete: "cpf_cnpj"
                }, null, 512), [
                  [vModelText, unref(form).cpf_cnpj]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.cpf_cnpj
                }, null, 8, ["error"]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.cpf
                }, null, 8, ["error"]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.cnpj
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_10, [
                _hoisted_11,
                withDirectives(createBaseVNode("input", {
                  id: "celular",
                  ref_key: "elCelular",
                  ref: elCelular,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).celular = $event),
                  class: "form-control",
                  type: "text",
                  autocomplete: "celular"
                }, null, 512), [
                  [vModelText, unref(form).celular]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.celular
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_12, [
                _hoisted_13,
                withDirectives(createBaseVNode("input", {
                  id: "password",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).password = $event),
                  class: "form-control",
                  type: "password",
                  autocomplete: "new-password"
                }, null, 512), [
                  [vModelText, unref(form).password]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.password
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_14, [
                _hoisted_15,
                withDirectives(createBaseVNode("input", {
                  id: "password_confirmation",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).password_confirmation = $event),
                  class: "form-control",
                  type: "password",
                  autocomplete: "new-password"
                }, null, 512), [
                  [vModelText, unref(form).password_confirmation]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.password_confirmation
                }, null, 8, ["error"])
              ]),
              _hoisted_16
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
//# sourceMappingURL=Perfil-9e5c985c.js.map

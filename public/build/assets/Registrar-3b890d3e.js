import { d as defineComponent, v, r as ref, x as onMounted, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, f as createVNode, h as createTextVNode, n as ne } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { M as Mask } from "./InputMask-4af8a144.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 auth" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-3" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "Registrar")
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
  }, " Registrar ")
], -1);
const _hoisted_17 = { class: "mb-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Registrar",
  setup(__props) {
    const form = v({
      nome: "",
      email: "",
      cpf_cnpj: "",
      celular: "",
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
      form.post("/registrar", {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Register" }, {
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
                  required: "",
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
                  required: "",
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
                  required: "",
                  autocomplete: "cpf_cnpj"
                }, null, 512), [
                  [vModelText, unref(form).cpf_cnpj]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.cpf_cnpj
                }, null, 8, ["error"]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.cnpj
                }, null, 8, ["error"]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.cpf
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
                  required: "",
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
                  required: "",
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
                  required: "",
                  autocomplete: "new-password"
                }, null, 512), [
                  [vModelText, unref(form).password_confirmation]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.password_confirmation
                }, null, 8, ["error"])
              ]),
              _hoisted_16,
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(ne), {
                  class: "btn btn-link",
                  href: "/entrar"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Já possui conta? ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0cmFyLTNiODkwZDNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9BdXRoL1JlZ2lzdHJhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUZvcm0sIExpbmsgfSBmcm9tICdAaW5lcnRpYWpzL3Z1ZTMnXG5pbXBvcnQgeyBvbk1vdW50ZWQgfSBmcm9tICdAdnVlL3J1bnRpbWUtY29yZSdcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBTaXRlTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9TaXRlTGF5b3V0LnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcbmltcG9ydCBNYXNrIGZyb20gJ0AvQ29tcG9uZW50ZXMvSGVscGVyL0lucHV0TWFzaydcblxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIG5vbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBjcGZfY25wajogJycsXG4gICAgY2VsdWxhcjogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG59KVxuXG5jb25zdCBlbENwZkNucGogPSByZWYobnVsbClcbmNvbnN0IGVsQ2VsdWxhciA9IHJlZihudWxsKVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICAgIE1hc2suY3BmX2NucGooZWxDcGZDbnBqLnZhbHVlKVxuICAgIE1hc2sudGVsZWZvbmUoZWxDZWx1bGFyLnZhbHVlKVxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdCgnL3JlZ2lzdHJhcicsIHtcbiAgICAgICAgb25GaW5pc2g6ICgpID0+IGZvcm0ucmVzZXQoJ3Bhc3N3b3JkJywgJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpLFxuICAgIH0pXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxTaXRlTGF5b3V0IHRpdHVsbz1cIlJlZ2lzdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItNjAwIGF1dGhcIj5cbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5SZWdpc3RyYXI8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vbWVcIj5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIHYtbW9kZWw9XCJmb3JtLm5vbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwibm9tZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLm5vbWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5lbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3BmX2NucGpcIj5DUEYgb3UgQ05QSjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNwZl9jbnBqXCIgcmVmPVwiZWxDcGZDbnBqXCIgdi1tb2RlbD1cImZvcm0uY3BmX2NucGpcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwiY3BmX2NucGpcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5jcGZfY25walwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuY25walwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuY3BmXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjZWx1bGFyXCI+Q2VsdWxhcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNlbHVsYXJcIiByZWY9XCJlbENlbHVsYXJcIiB2LW1vZGVsPVwiZm9ybS5jZWx1bGFyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGF1dG9jb21wbGV0ZT1cImNlbHVsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5jZWx1bGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlNlbmhhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMucGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiPkNvbmZpcm1hciBTZW5oYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMucGFzc3dvcmRfY29uZmlybWF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzcz1cImJ0biBidG4tbGlua1wiIGhyZWY9XCIvZW50cmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBKw6EgcG9zc3VpIGNvbnRhP1xuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvU2l0ZUxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsdUJBQXVCO0FBQUEsSUFBQSxDQUMxQjtBQUVLLFVBQUEsWUFBWSxJQUFJLElBQUk7QUFDcEIsVUFBQSxZQUFZLElBQUksSUFBSTtBQUUxQixjQUFVLE1BQU07QUFDUCxXQUFBLFNBQVMsVUFBVSxLQUFLO0FBQ3hCLFdBQUEsU0FBUyxVQUFVLEtBQUs7QUFBQSxJQUFBLENBQ2hDO0FBRUQsYUFBUyxTQUFTO0FBQ2QsV0FBSyxLQUFLLGNBQWM7QUFBQSxRQUNwQixVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksdUJBQXVCO0FBQUEsTUFBQSxDQUNqRTtBQUFBLElBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

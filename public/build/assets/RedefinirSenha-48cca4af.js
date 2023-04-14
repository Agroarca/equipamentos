import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkZWZpbmlyU2VuaGEtNDhjY2E0YWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9TaXRlL0F1dGgvUmVkZWZpbmlyU2VuaGEudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL1NpdGVMYXlvdXQudnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdG9rZW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxufSlcblxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIHRva2VuOiBwcm9wcy50b2tlbixcbiAgICBlbWFpbDogcHJvcHMuZW1haWwsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXG59KVxuXG5mdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgZm9ybS5wb3N0KCcvcmVzZXQtcGFzc3dvcmQnLCB7XG4gICAgICAgIG9uRmluaXNoOiAoKSA9PiBmb3JtLnJlc2V0KCdwYXNzd29yZCcsICdwYXNzd29yZF9jb25maXJtYXRpb24nKSxcbiAgICB9KVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8U2l0ZUxheW91dCB0aXR1bG89XCJBdHVhbGl6YXIgU2VuaGFcIj5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgZGlzYWJsZWQgYXV0b2NvbXBsZXRlPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmVtYWlsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlNlbmhhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLnBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIj5Db25maXJtYXIgU2VuaGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5wYXNzd29yZF9jb25maXJtYXRpb25cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgQXR1YWxpemFyIFNlbmhhXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvU2l0ZUxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsT0FBTyxNQUFNO0FBQUEsTUFDYixPQUFPLE1BQU07QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLHVCQUF1QjtBQUFBLElBQUEsQ0FDMUI7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssbUJBQW1CO0FBQUEsUUFDekIsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLHVCQUF1QjtBQUFBLE1BQUEsQ0FDakU7QUFBQSxJQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

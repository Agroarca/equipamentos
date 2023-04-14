import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybWFyU2VuaGEtNTE2YTFkZWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9TaXRlL0F1dGgvQ29uZmlybWFyU2VuaGEudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL1NpdGVMYXlvdXQudnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgcGFzc3dvcmQ6ICcnLFxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdCgnL2NvbmZpcm0tcGFzc3dvcmQnLCB7XG4gICAgICAgIG9uRmluaXNoOiAoKSA9PiBmb3JtLnJlc2V0KCksXG4gICAgfSlcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPFNpdGVMYXlvdXQgdGl0dWxvPVwiUmVjdXBlcmFyIFNlbmhhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuXCI+XG4gICAgICAgICAgICBFc3NhIMOpIHVtYSDDoXJlYSByZXN0cml0YSFcbiAgICAgICAgICAgIENvbmZpcm1lIHN1YSBzZW5oYSBhbnRlcyBkZSBhY2Vzc2FyXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5TZW5oYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMucGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvU2l0ZUxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsVUFBVTtBQUFBLElBQUEsQ0FDYjtBQUVELGFBQVMsU0FBUztBQUNkLFdBQUssS0FBSyxxQkFBcUI7QUFBQSxRQUMzQixVQUFVLE1BQU0sS0FBSyxNQUFNO0FBQUEsTUFBQSxDQUM5QjtBQUFBLElBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

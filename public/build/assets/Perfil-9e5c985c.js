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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyZmlsLTllNWM5ODVjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9QZXJmaWwvUGVyZmlsLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCB7IG9uTW91bnRlZCB9IGZyb20gJ0B2dWUvcnVudGltZS1jb3JlJ1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IE1hc2sgZnJvbSAnQC9Db21wb25lbnRlcy9IZWxwZXIvSW5wdXRNYXNrJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL1NpdGVMYXlvdXQudnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICB1c2VyOiBPYmplY3QsXG59KVxuXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgbm9tZTogcHJvcHMudXNlci5ub21lLFxuICAgIGVtYWlsOiBwcm9wcy51c2VyLmVtYWlsLFxuICAgIGNwZl9jbnBqOiBwcm9wcy51c2VyLmNwZiA/PyBwcm9wcy51c2VyLmNucGosXG4gICAgY2VsdWxhcjogcHJvcHMudXNlci5jZWx1bGFyLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxufSlcblxuY29uc3QgZWxDcGZDbnBqID0gcmVmKG51bGwpXG5jb25zdCBlbENlbHVsYXIgPSByZWYobnVsbClcblxub25Nb3VudGVkKCgpID0+IHtcbiAgICBNYXNrLmNwZl9jbnBqKGVsQ3BmQ25wai52YWx1ZSlcbiAgICBNYXNrLnRlbGVmb25lKGVsQ2VsdWxhci52YWx1ZSlcbn0pXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBmb3JtLnRyYW5zZm9ybSgoZGF0YSkgPT4gKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgY2VsdWxhcjogZGF0YS5jZWx1bGFyLnJlcGxhY2VBbGwoL1xcRC9nLCAnJyksXG4gICAgICAgIGNwZl9jbnBqOiBkYXRhLmNwZl9jbnBqLnJlcGxhY2VBbGwoL1xcRC9nLCAnJyksXG4gICAgfSkpLnBvc3QoJy9wZXJmaWwvYXR1YWxpemFyJywge1xuICAgICAgICBvbkZpbmlzaDogKCkgPT4gZm9ybS5yZXNldCgncGFzc3dvcmQnLCAncGFzc3dvcmRfY29uZmlybWF0aW9uJyksXG4gICAgfSlcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPFNpdGVMYXlvdXQgdGl0dWxvPVwiUGVyZmlsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGVyZmlsXCI+XG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+TWV1IFBlcmZpbDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9tZVwiPk5vbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgdi1tb2RlbD1cImZvcm0ubm9tZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJub21lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubm9tZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZW1haWxcIiBhdXRvY29tcGxldGU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjcGZfY25walwiPkNQRiBvdSBDTlBKPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY3BmX2NucGpcIiByZWY9XCJlbENwZkNucGpcIiB2LW1vZGVsPVwiZm9ybS5jcGZfY25walwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJjcGZfY25walwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmNwZl9jbnBqXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5jcGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmNucGpcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNlbHVsYXJcIj5DZWx1bGFyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2VsdWxhclwiIHJlZj1cImVsQ2VsdWxhclwiIHYtbW9kZWw9XCJmb3JtLmNlbHVsYXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwiY2VsdWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmNlbHVsYXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+U2VuaGE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5wYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCI+Q29uZmlybWFyIFNlbmhhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5wYXNzd29yZF9jb25maXJtYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEF0dWFsaXphclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9TaXRlTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxVQUFNLE9BQU9BLEVBQVE7QUFBQSxNQUNqQixNQUFNLE1BQU0sS0FBSztBQUFBLE1BQ2pCLE9BQU8sTUFBTSxLQUFLO0FBQUEsTUFDbEIsVUFBVSxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUs7QUFBQSxNQUN2QyxTQUFTLE1BQU0sS0FBSztBQUFBLE1BQ3BCLFVBQVU7QUFBQSxNQUNWLHVCQUF1QjtBQUFBLElBQUEsQ0FDMUI7QUFFSyxVQUFBLFlBQVksSUFBSSxJQUFJO0FBQ3BCLFVBQUEsWUFBWSxJQUFJLElBQUk7QUFFMUIsY0FBVSxNQUFNO0FBQ1AsV0FBQSxTQUFTLFVBQVUsS0FBSztBQUN4QixXQUFBLFNBQVMsVUFBVSxLQUFLO0FBQUEsSUFBQSxDQUNoQztBQUVELGFBQVMsU0FBUztBQUNULFdBQUEsVUFBVSxDQUFDLFVBQVU7QUFBQSxRQUN0QixHQUFHO0FBQUEsUUFDSCxTQUFTLEtBQUssUUFBUSxXQUFXLE9BQU8sRUFBRTtBQUFBLFFBQzFDLFVBQVUsS0FBSyxTQUFTLFdBQVcsT0FBTyxFQUFFO0FBQUEsTUFBQSxFQUM5QyxFQUFFLEtBQUsscUJBQXFCO0FBQUEsUUFDMUIsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLHVCQUF1QjtBQUFBLE1BQUEsQ0FDakU7QUFBQSxJQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

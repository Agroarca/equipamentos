import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Criar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Criar",
  props: {
    caracteristica: Object
  },
  setup(__props) {
    const props = __props;
    const form = v({
      nome: ""
    });
    function submit() {
      form.post(`/admin/categorias/${props.caracteristica.categoria_id}/caracteristicas/${props.caracteristica.id}/opcoes/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Nova Opção" }, {
        default: withCtx(() => [
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
                ])
              ]),
              _hoisted_6
            ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JpYXItMjI3YzcwOGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FyYWN0ZXJpc3RpY2FzL09wY29lcy9Dcmlhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdAaW5lcnRpYWpzL3Z1ZTMnXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnQC9MYXlvdXRzL0FkbWluTGF5b3V0LnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgY2FyYWN0ZXJpc3RpY2E6IE9iamVjdCxcbn0pXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBub21lOiAnJyxcbn0pXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBmb3JtLnBvc3QoYC9hZG1pbi9jYXRlZ29yaWFzLyR7cHJvcHMuY2FyYWN0ZXJpc3RpY2EuY2F0ZWdvcmlhX2lkfS9jYXJhY3RlcmlzdGljYXMvJHtwcm9wcy5jYXJhY3RlcmlzdGljYS5pZH0vb3Bjb2VzL3NhbHZhcmApXG59XG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IHRpdHVsbz1cIk5vdmEgT3DDp8Ojb1wiPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub21lXCI+Tm9tZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgdi1tb2RlbD1cImZvcm0ubm9tZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubm9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JpYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvQWRtaW5MYXlvdXQ+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInVzZUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsTUFBTTtBQUFBLElBQUEsQ0FDVDtBQUVELGFBQVMsU0FBUztBQUNkLFdBQUssS0FBSyxxQkFBcUIsTUFBTSxlQUFlLGdDQUFnQyxNQUFNLGVBQWUsa0JBQWtCO0FBQUEsSUFDL0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

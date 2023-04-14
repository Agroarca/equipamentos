import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment, g as withModifiers } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "status" }, "Status", -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editar",
  props: {
    marca: Object,
    statusCadastro: Array
  },
  setup(__props) {
    const props = __props;
    const form = v({
      nome: props.marca.nome,
      status: props.marca.status
    });
    function submit() {
      form.post(`/admin/marcas/${props.marca.id}/atualizar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Marca" }, {
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
                ]),
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  withDirectives(createBaseVNode("select", {
                    id: "status",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).status = $event),
                    class: "form-select",
                    required: ""
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.statusCadastro, (status, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: index,
                        value: index
                      }, toDisplayString(status), 9, _hoisted_8);
                    }), 128))
                  ], 512), [
                    [vModelSelect, unref(form).status]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.status
                  }, null, 8, ["error"])
                ])
              ]),
              _hoisted_9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGFyLTlmZWFhYmY3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL01hcmNhL0VkaXRhci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdAaW5lcnRpYWpzL3Z1ZTMnXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnQC9MYXlvdXRzL0FkbWluTGF5b3V0LnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgbWFyY2E6IE9iamVjdCxcbiAgICBzdGF0dXNDYWRhc3RybzogQXJyYXksXG59KVxuXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgbm9tZTogcHJvcHMubWFyY2Eubm9tZSxcbiAgICBzdGF0dXM6IHByb3BzLm1hcmNhLnN0YXR1cyxcbn0pXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBmb3JtLnBvc3QoYC9hZG1pbi9tYXJjYXMvJHtwcm9wcy5tYXJjYS5pZH0vYXR1YWxpemFyYClcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IHRpdHVsbz1cIkVkaXRhciBNYXJjYVwiPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub21lXCI+Tm9tZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgdi1tb2RlbD1cImZvcm0ubm9tZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubm9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXR1c1wiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3RhdHVzXCIgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCIgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIoc3RhdHVzLCBpbmRleCkgaW4gc3RhdHVzQ2FkYXN0cm9cIiA6a2V5PVwiaW5kZXhcIiA6dmFsdWU9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzdGF0dXMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5zdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsTUFBTSxNQUFNLE1BQU07QUFBQSxNQUNsQixRQUFRLE1BQU0sTUFBTTtBQUFBLElBQUEsQ0FDdkI7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssaUJBQWlCLE1BQU0sTUFBTSxjQUFjO0FBQUEsSUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

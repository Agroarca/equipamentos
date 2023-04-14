import { d as defineComponent, v, k as createElementBlock, a as createBaseVNode, F as Fragment, m as renderList, g as withModifiers, o as openBlock, h as createTextVNode, t as toDisplayString, f as createVNode, u as unref } from "./app-0ff9bc90.js";
import { _ as _sfc_main$2 } from "./Valor.vue_vue_type_script_setup_true_lang-6a881855.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Características ")
], -1);
const _hoisted_4 = { class: "card-body p-0" };
const _hoisted_5 = { class: "table table-striped table-hover" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("td", null, "Valor")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    caracteristicas: Object,
    equipamento: Object
  },
  setup(__props) {
    const props = __props;
    const valores = [];
    props.caracteristicas.forEach((caracteristica) => {
      valores[`carac-${caracteristica.id}`] = caracteristica.valor;
    });
    const form = v(valores);
    function submit() {
      form.post(`/admin/equipamentos/${props.equipamento.id}/caracteristicas/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        onSubmit: withModifiers(submit, ["prevent"])
      }, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("table", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caracteristicas, (caracteristica) => {
                  return openBlock(), createElementBlock("tr", {
                    key: caracteristica.id
                  }, [
                    createBaseVNode("td", null, [
                      createTextVNode(toDisplayString(caracteristica.nome) + " ", 1),
                      createVNode(_sfc_main$1, {
                        error: unref(form).errors["carac-" + caracteristica.id]
                      }, null, 8, ["error"])
                    ]),
                    createBaseVNode("td", null, [
                      createVNode(_sfc_main$2, {
                        modelValue: unref(form)["carac-" + caracteristica.id],
                        "onUpdate:modelValue": ($event) => unref(form)["carac-" + caracteristica.id] = $event,
                        caracteristica
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "caracteristica"])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          _hoisted_7
        ])
      ], 40, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pY2lvLTllMzVmY2U1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0NhcmFjdGVyaXN0aWNhcy9JbmljaW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IFZhbG9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvRXF1aXBhbWVudG9zL0NhcmFjdGVyaXN0aWNhcy9WYWxvci52dWUnXG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0Zvcm1zL0Zvcm1FcnJvci52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGNhcmFjdGVyaXN0aWNhczogT2JqZWN0LFxuICAgIGVxdWlwYW1lbnRvOiBPYmplY3QsXG59KVxuXG5jb25zdCB2YWxvcmVzID0gW11cbnByb3BzLmNhcmFjdGVyaXN0aWNhcy5mb3JFYWNoKChjYXJhY3RlcmlzdGljYSkgPT4ge1xuICAgIHZhbG9yZXNbYGNhcmFjLSR7Y2FyYWN0ZXJpc3RpY2EuaWR9YF0gPSBjYXJhY3RlcmlzdGljYS52YWxvclxufSlcbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHZhbG9yZXMpXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBmb3JtLnBvc3QoYC9hZG1pbi9lcXVpcGFtZW50b3MvJHtwcm9wcy5lcXVpcGFtZW50by5pZH0vY2FyYWN0ZXJpc3RpY2FzL3NhbHZhcmApXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FyYWN0ZXLDrXN0aWNhc1xuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0wXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VmFsb3I8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJjYXJhY3RlcmlzdGljYSBpbiBjYXJhY3RlcmlzdGljYXNcIiA6a2V5PVwiY2FyYWN0ZXJpc3RpY2EuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhcmFjdGVyaXN0aWNhLm5vbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9yc1snY2FyYWMtJyArIGNhcmFjdGVyaXN0aWNhLmlkXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxvciB2LW1vZGVsPVwiZm9ybVsnY2FyYWMtJyArIGNhcmFjdGVyaXN0aWNhLmlkXVwiIDpjYXJhY3RlcmlzdGljYT1cImNhcmFjdGVyaXN0aWNhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInVzZUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxVQUFNLFVBQVUsQ0FBQTtBQUNWLFVBQUEsZ0JBQWdCLFFBQVEsQ0FBQyxtQkFBbUI7QUFDOUMsY0FBUSxTQUFTLGVBQWUsSUFBSSxJQUFJLGVBQWU7QUFBQSxJQUFBLENBQzFEO0FBQ0ssVUFBQSxPQUFPQSxFQUFRLE9BQU87QUFFNUIsYUFBUyxTQUFTO0FBQ2QsV0FBSyxLQUFLLHVCQUF1QixNQUFNLFlBQVksMkJBQTJCO0FBQUEsSUFDbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

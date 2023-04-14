import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, f as createVNode, a as createBaseVNode, k as createElementBlock, m as renderList, t as toDisplayString, u as unref, F as Fragment, g as withModifiers } from "./app-0ff9bc90.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-ff006dff.js";
import { _ as _sfc_main$3 } from "./ValorCaracteristicas.vue_vue_type_script_setup_true_lang-7fb83112.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
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
const _hoisted_7 = ["for"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Caracteristicas",
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
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Equipamento" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, {
            class: "mb-4 d-flex flex-roll justify-content-center",
            equipamento: __props.equipamento,
            paginaAtual: "caracteristicas"
          }, null, 8, ["equipamento"]),
          createBaseVNode("form", {
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
                          createBaseVNode("label", {
                            for: `caracteristica-${caracteristica.id}`
                          }, toDisplayString(caracteristica.nome), 9, _hoisted_7),
                          createVNode(_sfc_main$2, {
                            error: unref(form).errors["carac-" + caracteristica.id]
                          }, null, 8, ["error"])
                        ]),
                        createBaseVNode("td", null, [
                          createVNode(_sfc_main$3, {
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
              _hoisted_8
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyYWN0ZXJpc3RpY2FzLTZkYjgzMjM3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0VkaXRhci9DYXJhY3RlcmlzdGljYXMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9BZG1pbkxheW91dC52dWUnXG5pbXBvcnQgTmF2ZWdhY2FvIGZyb20gJy4vQ29tcG9uZW50ZXMvTmF2ZWdhY2FvLnZ1ZSdcbmltcG9ydCBWYWxvckNhcmFjdGVyaXN0aWNhcyBmcm9tICcuL0NvbXBvbmVudGVzL1ZhbG9yQ2FyYWN0ZXJpc3RpY2FzLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgY2FyYWN0ZXJpc3RpY2FzOiBPYmplY3QsXG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbn0pXG5cbmNvbnN0IHZhbG9yZXMgPSBbXVxucHJvcHMuY2FyYWN0ZXJpc3RpY2FzLmZvckVhY2goKGNhcmFjdGVyaXN0aWNhKSA9PiB7XG4gICAgdmFsb3Jlc1tgY2FyYWMtJHtjYXJhY3RlcmlzdGljYS5pZH1gXSA9IGNhcmFjdGVyaXN0aWNhLnZhbG9yXG59KVxuY29uc3QgZm9ybSA9IHVzZUZvcm0odmFsb3JlcylcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdChgL2FkbWluL2VxdWlwYW1lbnRvcy8ke3Byb3BzLmVxdWlwYW1lbnRvLmlkfS9jYXJhY3RlcmlzdGljYXMvc2FsdmFyYClcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IHRpdHVsbz1cIkVkaXRhciBFcXVpcGFtZW50b1wiPlxuICAgICAgICA8TmF2ZWdhY2FvIGNsYXNzPVwibWItNCBkLWZsZXggZmxleC1yb2xsIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA6ZXF1aXBhbWVudG89XCJlcXVpcGFtZW50b1wiIHBhZ2luYUF0dWFsPVwiY2FyYWN0ZXJpc3RpY2FzXCIgLz5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyYWN0ZXLDrXN0aWNhc1xuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Tm9tZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZhbG9yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiY2FyYWN0ZXJpc3RpY2EgaW4gY2FyYWN0ZXJpc3RpY2FzXCIgOmtleT1cImNhcmFjdGVyaXN0aWNhLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiYGNhcmFjdGVyaXN0aWNhLSR7Y2FyYWN0ZXJpc3RpY2EuaWR9YFwiPiB7eyBjYXJhY3RlcmlzdGljYS5ub21lIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnNbJ2NhcmFjLScgKyBjYXJhY3RlcmlzdGljYS5pZF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmFsb3JDYXJhY3RlcmlzdGljYXMgdi1tb2RlbD1cImZvcm1bJ2NhcmFjLScgKyBjYXJhY3RlcmlzdGljYS5pZF1cIiA6Y2FyYWN0ZXJpc3RpY2E9XCJjYXJhY3RlcmlzdGljYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvQWRtaW5MYXlvdXQ+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInVzZUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLFVBQU0sVUFBVSxDQUFBO0FBQ1YsVUFBQSxnQkFBZ0IsUUFBUSxDQUFDLG1CQUFtQjtBQUM5QyxjQUFRLFNBQVMsZUFBZSxJQUFJLElBQUksZUFBZTtBQUFBLElBQUEsQ0FDMUQ7QUFDSyxVQUFBLE9BQU9BLEVBQVEsT0FBTztBQUU1QixhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssdUJBQXVCLE1BQU0sWUFBWSwyQkFBMkI7QUFBQSxJQUNsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

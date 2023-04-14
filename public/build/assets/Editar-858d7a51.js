import { d as defineComponent, r as ref, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers, h as createTextVNode } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$2 } from "./AlterarCategoriaMae.vue_vue_type_script_setup_true_lang-7a3370e3.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
import "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Categoria Mãe", -1);
const _hoisted_8 = { class: "d-flex" };
const _hoisted_9 = { class: "flex-grow-1" };
const _hoisted_10 = ["value"];
const _hoisted_11 = { class: "ms-2" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-rotate" }, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editar",
  props: {
    categoria: Object
  },
  setup(__props) {
    const props = __props;
    const alterarCategoria = ref(null);
    const form = v({
      nome: props.categoria.nome,
      categoria_mae_id: props.categoria.categoria_mae_id
    });
    function submit() {
      form.post(`/admin/categorias/${props.categoria.id}/atualizar`);
    }
    function openModal() {
      alterarCategoria.value.show();
    }
    function moverCategoria(categoriaId) {
      form.categoria_mae_id = categoriaId;
      submit();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Categoria" }, {
        default: withCtx(() => {
          var _a;
          return [
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
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("input", {
                          id: "nome",
                          class: "form-control",
                          type: "text",
                          value: (_a = __props.categoria.categoria_mae) == null ? void 0 : _a.nome,
                          disabled: ""
                        }, null, 8, _hoisted_10)
                      ]),
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("button", {
                          type: "button",
                          class: "btn btn-primary",
                          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => openModal(), ["prevent"]))
                        }, [
                          _hoisted_12,
                          createTextVNode(" Mover ")
                        ])
                      ])
                    ])
                  ])
                ]),
                _hoisted_13
              ])
            ], 40, _hoisted_1),
            createVNode(_sfc_main$2, {
              ref_key: "alterarCategoria",
              ref: alterarCategoria,
              categoria: __props.categoria,
              onMoverCategoria: moverCategoria
            }, null, 8, ["categoria"])
          ];
        }),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGFyLTg1OGQ3YTUxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0NhdGVnb3JpYS9FZGl0YXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9BZG1pbkxheW91dC52dWUnXG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0Zvcm1zL0Zvcm1FcnJvci52dWUnXG5pbXBvcnQgQWx0ZXJhckNhdGVnb3JpYU1hZSBmcm9tICcuL0NvbXBvbmVudGVzL0FsdGVyYXJDYXRlZ29yaWFNYWUudnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBjYXRlZ29yaWE6IE9iamVjdCxcbn0pXG5jb25zdCBhbHRlcmFyQ2F0ZWdvcmlhID0gcmVmKG51bGwpXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBub21lOiBwcm9wcy5jYXRlZ29yaWEubm9tZSxcbiAgICBjYXRlZ29yaWFfbWFlX2lkOiBwcm9wcy5jYXRlZ29yaWEuY2F0ZWdvcmlhX21hZV9pZCxcbn0pXG5cbmZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBmb3JtLnBvc3QoYC9hZG1pbi9jYXRlZ29yaWFzLyR7cHJvcHMuY2F0ZWdvcmlhLmlkfS9hdHVhbGl6YXJgKVxufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgYWx0ZXJhckNhdGVnb3JpYS52YWx1ZS5zaG93KClcbn1cblxuZnVuY3Rpb24gbW92ZXJDYXRlZ29yaWEoY2F0ZWdvcmlhSWQpIHtcbiAgICBmb3JtLmNhdGVnb3JpYV9tYWVfaWQgPSBjYXRlZ29yaWFJZFxuICAgIHN1Ym1pdCgpXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxBZG1pbkxheW91dCB0aXR1bG89XCJFZGl0YXIgQ2F0ZWdvcmlhXCI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vbWVcIj5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5vbWVcIiB2LW1vZGVsPVwiZm9ybS5ub21lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5ub21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9tZVwiPkNhdGVnb3JpYSBNw6NlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJjYXRlZ29yaWEuY2F0ZWdvcmlhX21hZT8ubm9tZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJvcGVuTW9kYWwoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcm90YXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2FsdmFyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPEFsdGVyYXJDYXRlZ29yaWFNYWUgcmVmPVwiYWx0ZXJhckNhdGVnb3JpYVwiIDpjYXRlZ29yaWE9XCJjYXRlZ29yaWFcIiBAbW92ZXJDYXRlZ29yaWE9XCJtb3ZlckNhdGVnb3JpYVwiIC8+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVTSxVQUFBLG1CQUFtQixJQUFJLElBQUk7QUFFakMsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsTUFBTSxNQUFNLFVBQVU7QUFBQSxNQUN0QixrQkFBa0IsTUFBTSxVQUFVO0FBQUEsSUFBQSxDQUNyQztBQUVELGFBQVMsU0FBUztBQUNkLFdBQUssS0FBSyxxQkFBcUIsTUFBTSxVQUFVLGNBQWM7QUFBQSxJQUNqRTtBQUVBLGFBQVMsWUFBWTtBQUNqQix1QkFBaUIsTUFBTTtJQUMzQjtBQUVBLGFBQVMsZUFBZSxhQUFhO0FBQ2pDLFdBQUssbUJBQW1CO0FBQ2pCO0lBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

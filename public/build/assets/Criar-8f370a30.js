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
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Categoria Mãe: ", -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Criar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Criar",
  props: {
    categoriaMae: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const form = v({
      nome: "",
      categoria_mae_id: (_a = props.categoriaMae) == null ? void 0 : _a.id
    });
    function submit() {
      form.post("/admin/categorias/salvar");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Nova Categoria" }, {
        default: withCtx(() => {
          var _a2;
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
                    createBaseVNode("input", {
                      id: "nome",
                      class: "form-control",
                      type: "text",
                      value: (_a2 = __props.categoriaMae) == null ? void 0 : _a2.nome,
                      disabled: ""
                    }, null, 8, _hoisted_8)
                  ])
                ]),
                _hoisted_9
              ])
            ], 40, _hoisted_1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JpYXItOGYzNzBhMzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FkYXN0cm8vQ2F0ZWdvcmlhL0NyaWFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL0xheW91dHMvQWRtaW5MYXlvdXQudnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBjYXRlZ29yaWFNYWU6IE9iamVjdCxcbn0pXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBub21lOiAnJyxcbiAgICBjYXRlZ29yaWFfbWFlX2lkOiBwcm9wcy5jYXRlZ29yaWFNYWU/LmlkLFxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdCgnL2FkbWluL2NhdGVnb3JpYXMvc2FsdmFyJylcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8QWRtaW5MYXlvdXQgdGl0dWxvPVwiTm92YSBDYXRlZ29yaWFcIj5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9tZVwiPk5vbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIHYtbW9kZWw9XCJmb3JtLm5vbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLm5vbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub21lXCI+Q2F0ZWdvcmlhIE3Do2U6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIDp2YWx1ZT1cImNhdGVnb3JpYU1hZT8ubm9tZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyaWFyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L0FkbWluTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxVQUFNLE9BQU9BLEVBQVE7QUFBQSxNQUNqQixNQUFNO0FBQUEsTUFDTixtQkFBa0IsV0FBTSxpQkFBTixtQkFBb0I7QUFBQSxJQUFBLENBQ3pDO0FBRUQsYUFBUyxTQUFTO0FBQ2QsV0FBSyxLQUFLLDBCQUEwQjtBQUFBLElBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

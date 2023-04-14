import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, u as unref, g as withModifiers } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-f5bb18a6.js";
import { _ as _sfc_main$3 } from "./ListaProdutos.vue_vue_type_script_setup_true_lang-0ae56af3.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default mb-4" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Adicionar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Produtos",
  props: {
    lista: Object,
    options: Object,
    produtos: Object
  },
  setup(__props) {
    const props = __props;
    const form = v({
      equipamento_id: ""
    });
    function submit() {
      form.post(`/admin/lista/${props.lista.id}/adicionar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, {
        titulo: __props.lista.nome
      }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    modelValue: unref(form).equipamento_id,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).equipamento_id = $event),
                    href: "/admin/equipamentos/pesquisar",
                    options: __props.options
                  }, null, 8, ["modelValue", "options"]),
                  createVNode(_sfc_main$2, {
                    error: unref(form).errors.equipamento_id
                  }, null, 8, ["error"])
                ])
              ]),
              _hoisted_4
            ])
          ], 40, _hoisted_1),
          createVNode(_sfc_main$3, { produtos: __props.produtos }, null, 8, ["produtos"])
        ]),
        _: 1
      }, 8, ["titulo"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHV0b3MtNDUyMjc1MGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvTGlzdGEvUHJvZHV0b3MudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9BZG1pbkxheW91dC52dWUnXG5pbXBvcnQgU2VsZWN0QWpheCBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9TZWxlY3RBamF4LnZ1ZSdcbmltcG9ydCBMaXN0YVByb2R1dG9zIGZyb20gJy4vQ29tcG9uZW50ZXMvTGlzdGFQcm9kdXRvcy52dWUnXG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0Zvcm1zL0Zvcm1FcnJvci52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGxpc3RhOiBPYmplY3QsXG4gICAgb3B0aW9uczogT2JqZWN0LFxuICAgIHByb2R1dG9zOiBPYmplY3QsXG59KVxuXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgZXF1aXBhbWVudG9faWQ6ICcnLFxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdChgL2FkbWluL2xpc3RhLyR7cHJvcHMubGlzdGEuaWR9L2FkaWNpb25hcmApXG59XG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IDp0aXR1bG89XCJsaXN0YS5ub21lXCI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0QWpheCB2LW1vZGVsPVwiZm9ybS5lcXVpcGFtZW50b19pZFwiIGhyZWY9XCIvYWRtaW4vZXF1aXBhbWVudG9zL3Blc3F1aXNhclwiIDpvcHRpb25zPVwib3B0aW9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmVxdWlwYW1lbnRvX2lkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGljaW9uYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8TGlzdGFQcm9kdXRvcyA6cHJvZHV0b3M9XCJwcm9kdXRvc1wiIC8+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLFVBQU0sT0FBT0EsRUFBUTtBQUFBLE1BQ2pCLGdCQUFnQjtBQUFBLElBQUEsQ0FDbkI7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssZ0JBQWdCLE1BQU0sTUFBTSxjQUFjO0FBQUEsSUFDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

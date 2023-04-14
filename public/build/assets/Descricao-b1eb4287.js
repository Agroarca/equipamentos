import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, f as createVNode, a as createBaseVNode, u as unref } from "./app-0ff9bc90.js";
import { _ as _sfc_main$2 } from "./Editor.vue_vue_type_script_setup_true_lang-9268a08b.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-ff006dff.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", {
    for: "descricao",
    class: "card-title"
  }, " Descrição ")
], -1);
const _hoisted_3 = { class: "card-body p-0" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Descricao",
  props: {
    equipamento: Object
  },
  setup(__props) {
    const props = __props;
    const form = v({
      descricao: props.equipamento.descricao
    });
    function atualizarDescricao() {
      form.post(`/admin/equipamentos/${props.equipamento.id}/atualizardescricao`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar descrição Equipamento" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, {
            class: "mb-4 d-flex flex-roll justify-content-center",
            equipamento: __props.equipamento,
            paginaAtual: "descricao"
          }, null, 8, ["equipamento"]),
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createBaseVNode("div", _hoisted_3, [
              createVNode(_sfc_main$2, {
                modelValue: unref(form).descricao,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).descricao = $event),
                name: "descricao",
                class: "descricao"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", { class: "card-footer" }, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: atualizarDescricao
              }, " Atualizar Descrição ")
            ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpY2FvLWIxZWI0Mjg3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0VkaXRhci9EZXNjcmljYW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEVkaXRvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9FZGl0b3IvRWRpdG9yLnZ1ZSdcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL0xheW91dHMvQWRtaW5MYXlvdXQudnVlJ1xuaW1wb3J0IE5hdmVnYWNhbyBmcm9tICcuL0NvbXBvbmVudGVzL05hdmVnYWNhby52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGVxdWlwYW1lbnRvOiBPYmplY3QsXG59KVxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIGRlc2NyaWNhbzogcHJvcHMuZXF1aXBhbWVudG8uZGVzY3JpY2FvLFxufSlcblxuZnVuY3Rpb24gYXR1YWxpemFyRGVzY3JpY2FvKCkge1xuICAgIGZvcm0ucG9zdChgL2FkbWluL2VxdWlwYW1lbnRvcy8ke3Byb3BzLmVxdWlwYW1lbnRvLmlkfS9hdHVhbGl6YXJkZXNjcmljYW9gKVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8QWRtaW5MYXlvdXQgdGl0dWxvPVwiRWRpdGFyIGRlc2NyacOnw6NvIEVxdWlwYW1lbnRvXCI+XG4gICAgICAgIDxOYXZlZ2FjYW8gY2xhc3M9XCJtYi00IGQtZmxleCBmbGV4LXJvbGwganVzdGlmeS1jb250ZW50LWNlbnRlclwiIDplcXVpcGFtZW50bz1cImVxdWlwYW1lbnRvXCIgcGFnaW5hQXR1YWw9XCJkZXNjcmljYW9cIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNSBmb3I9XCJkZXNjcmljYW9cIiBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3Jpw6fDo29cbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMFwiPlxuICAgICAgICAgICAgICAgIDxFZGl0b3Igdi1tb2RlbD1cImZvcm0uZGVzY3JpY2FvXCIgbmFtZT1cImRlc2NyaWNhb1wiIGNsYXNzPVwiZGVzY3JpY2FvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJhdHVhbGl6YXJEZXNjcmljYW9cIj5cbiAgICAgICAgICAgICAgICAgICAgQXR1YWxpemFyIERlc2NyacOnw6NvXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsV0FBVyxNQUFNLFlBQVk7QUFBQSxJQUFBLENBQ2hDO0FBRUQsYUFBUyxxQkFBcUI7QUFDMUIsV0FBSyxLQUFLLHVCQUF1QixNQUFNLFlBQVksdUJBQXVCO0FBQUEsSUFDOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

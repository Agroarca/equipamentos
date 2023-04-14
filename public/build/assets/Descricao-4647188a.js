import { d as defineComponent, v, k as createElementBlock, a as createBaseVNode, f as createVNode, u as unref, o as openBlock } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./Editor.vue_vue_type_script_setup_true_lang-9268a08b.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Descrição ")
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$1, {
            modelValue: unref(form).descricao,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).descricao = $event),
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
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpY2FvLTQ2NDcxODhhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0Rlc2NyaWNhby9EZXNjcmljYW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEVkaXRvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9FZGl0b3IvRWRpdG9yLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbn0pXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgZGVzY3JpY2FvOiBwcm9wcy5lcXVpcGFtZW50by5kZXNjcmljYW8sXG59KVxuXG5mdW5jdGlvbiBhdHVhbGl6YXJEZXNjcmljYW8oKSB7XG4gICAgZm9ybS5wb3N0KGAvYWRtaW4vZXF1aXBhbWVudG9zLyR7cHJvcHMuZXF1aXBhbWVudG8uaWR9L2F0dWFsaXphcmRlc2NyaWNhb2ApXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZGVmYXVsdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBEZXNjcmnDp8Ojb1xuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0wXCI+XG4gICAgICAgICAgICA8RWRpdG9yIHYtbW9kZWw9XCJmb3JtLmRlc2NyaWNhb1wiIGNsYXNzPVwiZGVzY3JpY2FvXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJhdHVhbGl6YXJEZXNjcmljYW9cIj5cbiAgICAgICAgICAgICAgICBBdHVhbGl6YXIgRGVzY3Jpw6fDo29cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQSxVQUFNLE9BQU9BLEVBQVE7QUFBQSxNQUNqQixXQUFXLE1BQU0sWUFBWTtBQUFBLElBQUEsQ0FDaEM7QUFFRCxhQUFTLHFCQUFxQjtBQUMxQixXQUFLLEtBQUssdUJBQXVCLE1BQU0sWUFBWSx1QkFBdUI7QUFBQSxJQUM5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

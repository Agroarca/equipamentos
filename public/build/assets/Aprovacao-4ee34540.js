import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, f as createVNode, a as createBaseVNode, b as withDirectives, p as vModelSelect, u as unref, k as createElementBlock, l as createCommentVNode, q as normalizeClass, t as toDisplayString } from "./app-0ff9bc90.js";
import { _ as _sfc_main$3 } from "./Editor.vue_vue_type_script_setup_true_lang-9268a08b.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-ff006dff.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Aprovação do equipamento ")
], -1);
const _hoisted_3 = { class: "card-body p-0" };
const _hoisted_4 = { class: "p-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "status" }, "Ação:", -1);
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h5", { class: "px-3 pt-3" }, " Motivo da reprovação: ", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "alert alert-warning mb-0" }, [
  /* @__PURE__ */ createBaseVNode("label", { for: "motivo_reprovado" }, "O motivo da reprovação será informado ao vendedor.")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("hr", { class: "m-0" }, null, -1);
const _hoisted_10 = { class: "card-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Aprovacao",
  props: {
    equipamento: Object,
    statusEquipamento: Array
  },
  setup(__props) {
    const props = __props;
    const form = v({
      motivo_reprovado: props.equipamento.motivo_reprovado,
      status: null
    });
    const STATUS_APROVADO = 2;
    const STATUS_REPROVADO = 5;
    function AtualizarStatus() {
      form.post(`/admin/equipamentos/${props.equipamento.id}/status/atualizar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Equipamento" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, {
            class: "mb-4 d-flex flex-roll justify-content-center",
            equipamento: __props.equipamento,
            paginaAtual: "aprovacao"
          }, null, 8, ["equipamento"]),
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                withDirectives(createBaseVNode("select", {
                  id: "status",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).status = $event),
                  name: "status",
                  class: "form-control mt-2"
                }, [
                  createBaseVNode("option", { value: STATUS_APROVADO }, " Aprovar "),
                  createBaseVNode("option", { value: STATUS_REPROVADO }, " Reprovar ")
                ], 512), [
                  [vModelSelect, unref(form).status]
                ]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.status
                }, null, 8, ["error"])
              ]),
              unref(form).status == STATUS_REPROVADO ? (openBlock(), createElementBlock("div", _hoisted_6, [
                _hoisted_7,
                _hoisted_8,
                _hoisted_9,
                createVNode(_sfc_main$3, {
                  modelValue: unref(form).motivo_reprovado,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).motivo_reprovado = $event),
                  name: "motivo_reprovado",
                  class: "aprovacao"
                }, null, 8, ["modelValue"]),
                createVNode(_sfc_main$2, {
                  error: unref(form).errors.motivo_reprovado
                }, null, 8, ["error"])
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["btn btn-secondary", { disabled: !unref(form).status, "btn-success": unref(form).status == STATUS_APROVADO, "btn-danger": unref(form).status == STATUS_REPROVADO }]),
                onClick: AtualizarStatus
              }, toDisplayString(__props.statusEquipamento[unref(form).status] ?? "Selecione uma ação"), 3)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXByb3ZhY2FvLTRlZTM0NTQwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0VkaXRhci9BcHJvdmFjYW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEVkaXRvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9FZGl0b3IvRWRpdG9yLnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL0xheW91dHMvQWRtaW5MYXlvdXQudnVlJ1xuaW1wb3J0IE5hdmVnYWNhbyBmcm9tICcuL0NvbXBvbmVudGVzL05hdmVnYWNhby52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGVxdWlwYW1lbnRvOiBPYmplY3QsXG4gICAgc3RhdHVzRXF1aXBhbWVudG86IEFycmF5LFxufSlcbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBtb3Rpdm9fcmVwcm92YWRvOiBwcm9wcy5lcXVpcGFtZW50by5tb3Rpdm9fcmVwcm92YWRvLFxuICAgIHN0YXR1czogbnVsbCxcbn0pXG5cbmNvbnN0IFNUQVRVU19BUFJPVkFETyA9IDJcbmNvbnN0IFNUQVRVU19SRVBST1ZBRE8gPSA1XG5cbmZ1bmN0aW9uIEF0dWFsaXphclN0YXR1cygpIHtcbiAgICBmb3JtLnBvc3QoYC9hZG1pbi9lcXVpcGFtZW50b3MvJHtwcm9wcy5lcXVpcGFtZW50by5pZH0vc3RhdHVzL2F0dWFsaXphcmApXG59XG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IHRpdHVsbz1cIkVkaXRhciBFcXVpcGFtZW50b1wiPlxuICAgICAgICA8TmF2ZWdhY2FvIGNsYXNzPVwibWItNCBkLWZsZXggZmxleC1yb2xsIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA6ZXF1aXBhbWVudG89XCJlcXVpcGFtZW50b1wiIHBhZ2luYUF0dWFsPVwiYXByb3ZhY2FvXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIEFwcm92YcOnw6NvIGRvIGVxdWlwYW1lbnRvXG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHAtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5Bw6fDo286PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1c1wiIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiIG5hbWU9XCJzdGF0dXNcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cIlNUQVRVU19BUFJPVkFET1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcm92YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJTVEFUVVNfUkVQUk9WQURPXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwcm92YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5zdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZvcm0uc3RhdHVzID09IFNUQVRVU19SRVBST1ZBRE9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwicHgtMyBwdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb3Rpdm8gZGEgcmVwcm92YcOnw6NvOlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZyBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibW90aXZvX3JlcHJvdmFkb1wiPk8gbW90aXZvIGRhIHJlcHJvdmHDp8OjbyBzZXLDoSBpbmZvcm1hZG8gYW8gdmVuZGVkb3IuPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cIm0tMFwiPlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIHYtbW9kZWw9XCJmb3JtLm1vdGl2b19yZXByb3ZhZG9cIiBuYW1lPVwibW90aXZvX3JlcHJvdmFkb1wiIGNsYXNzPVwiYXByb3ZhY2FvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5tb3Rpdm9fcmVwcm92YWRvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiAhZm9ybS5zdGF0dXMsICdidG4tc3VjY2Vzcyc6IGZvcm0uc3RhdHVzID09IFNUQVRVU19BUFJPVkFETywgJ2J0bi1kYW5nZXInOiBmb3JtLnN0YXR1cyA9PSBTVEFUVVNfUkVQUk9WQURPIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiQXR1YWxpemFyU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHN0YXR1c0VxdWlwYW1lbnRvW2Zvcm0uc3RhdHVzXSA/PyAnU2VsZWNpb25lIHVtYSBhw6fDo28nIH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxVQUFNLE9BQU9BLEVBQVE7QUFBQSxNQUNqQixrQkFBa0IsTUFBTSxZQUFZO0FBQUEsTUFDcEMsUUFBUTtBQUFBLElBQUEsQ0FDWDtBQUVELFVBQU0sa0JBQWtCO0FBQ3hCLFVBQU0sbUJBQW1CO0FBRXpCLGFBQVMsa0JBQWtCO0FBQ3ZCLFdBQUssS0FBSyx1QkFBdUIsTUFBTSxZQUFZLHFCQUFxQjtBQUFBLElBQzVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

import { d as defineComponent, v, k as createElementBlock, a as createBaseVNode, b as withDirectives, p as vModelSelect, u as unref, f as createVNode, l as createCommentVNode, q as normalizeClass, t as toDisplayString, o as openBlock } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$2 } from "./Editor.vue_vue_type_script_setup_true_lang-9268a08b.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Aprovação do equipamento ")
], -1);
const _hoisted_3 = { class: "card-body p-0" };
const _hoisted_4 = { class: "p-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "status" }, "Ação:", -1);
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h5", { class: "p-3" }, " Motivo da reprovação: ", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("hr", { class: "m-0" }, null, -1);
const _hoisted_9 = { class: "card-footer" };
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
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
            createVNode(_sfc_main$1, {
              error: unref(form).errors.status
            }, null, 8, ["error"])
          ]),
          unref(form).status == STATUS_REPROVADO ? (openBlock(), createElementBlock("div", _hoisted_6, [
            _hoisted_7,
            _hoisted_8,
            createVNode(_sfc_main$2, {
              modelValue: unref(form).motivo_reprovado,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).motivo_reprovado = $event),
              class: "aprovacao"
            }, null, 8, ["modelValue"]),
            createVNode(_sfc_main$1, {
              error: unref(form).errors.motivo_reprovado
            }, null, 8, ["error"])
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass(["btn btn-secondary", { disabled: !unref(form).status, "btn-success": unref(form).status == STATUS_APROVADO, "btn-danger": unref(form).status == STATUS_REPROVADO }]),
            onClick: AtualizarStatus
          }, toDisplayString(__props.statusEquipamento[unref(form).status] ?? "Selecione uma ação"), 3)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXByb3ZhY2FvLWZmMTk2OTdkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0Fwcm92YWNhby9BcHJvdmFjYW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IEVkaXRvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9FZGl0b3IvRWRpdG9yLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbiAgICBzdGF0dXNFcXVpcGFtZW50bzogQXJyYXksXG59KVxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIG1vdGl2b19yZXByb3ZhZG86IHByb3BzLmVxdWlwYW1lbnRvLm1vdGl2b19yZXByb3ZhZG8sXG4gICAgc3RhdHVzOiBudWxsLFxufSlcblxuY29uc3QgU1RBVFVTX0FQUk9WQURPID0gMlxuY29uc3QgU1RBVFVTX1JFUFJPVkFETyA9IDVcblxuZnVuY3Rpb24gQXR1YWxpemFyU3RhdHVzKCkge1xuICAgIGZvcm0ucG9zdChgL2FkbWluL2VxdWlwYW1lbnRvcy8ke3Byb3BzLmVxdWlwYW1lbnRvLmlkfS9zdGF0dXMvYXR1YWxpemFyYClcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgQXByb3Zhw6fDo28gZG8gZXF1aXBhbWVudG9cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIHAtM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5Bw6fDo286PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3RhdHVzXCIgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCIgbmFtZT1cInN0YXR1c1wiIGNsYXNzPVwiZm9ybS1jb250cm9sIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJTVEFUVVNfQVBST1ZBRE9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcm92YXJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gOnZhbHVlPVwiU1RBVFVTX1JFUFJPVkFET1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVwcm92YXJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5zdGF0dXNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJmb3JtLnN0YXR1cyA9PSBTVEFUVVNfUkVQUk9WQURPXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwicC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vdGl2byBkYSByZXByb3Zhw6fDo286XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJtLTBcIj5cbiAgICAgICAgICAgICAgICA8RWRpdG9yIHYtbW9kZWw9XCJmb3JtLm1vdGl2b19yZXByb3ZhZG9cIiBjbGFzcz1cImFwcm92YWNhb1wiIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5tb3Rpdm9fcmVwcm92YWRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGRpc2FibGVkOiAhZm9ybS5zdGF0dXMsICdidG4tc3VjY2Vzcyc6IGZvcm0uc3RhdHVzID09IFNUQVRVU19BUFJPVkFETywgJ2J0bi1kYW5nZXInOiBmb3JtLnN0YXR1cyA9PSBTVEFUVVNfUkVQUk9WQURPIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJBdHVhbGl6YXJTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICB7eyBzdGF0dXNFcXVpcGFtZW50b1tmb3JtLnN0YXR1c10gPz8gJ1NlbGVjaW9uZSB1bWEgYcOnw6NvJyB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsa0JBQWtCLE1BQU0sWUFBWTtBQUFBLE1BQ3BDLFFBQVE7QUFBQSxJQUFBLENBQ1g7QUFFRCxVQUFNLGtCQUFrQjtBQUN4QixVQUFNLG1CQUFtQjtBQUV6QixhQUFTLGtCQUFrQjtBQUN2QixXQUFLLEtBQUssdUJBQXVCLE1BQU0sWUFBWSxxQkFBcUI7QUFBQSxJQUM1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

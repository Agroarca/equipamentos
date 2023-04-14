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
//# sourceMappingURL=Aprovacao-ff19697d.js.map

import { d as defineComponent, v, k as createElementBlock, a as createBaseVNode, f as createVNode, u as unref, o as openBlock } from "./app-4bad2d0e.js";
import { _ as _sfc_main$1 } from "./Editor.vue_vue_type_script_setup_true_lang-766eca9a.js";
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
//# sourceMappingURL=Descricao-a8a67cb3.js.map

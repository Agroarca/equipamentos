import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, f as createVNode, a as createBaseVNode, u as unref } from "./app-262f55c5.js";
import { _ as _sfc_main$2 } from "./Editor.vue_vue_type_script_setup_true_lang-9163c24b.js";
import { A as AdminLayout } from "./AdminLayout-59296aa0.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-4935b031.js";
import "./_plugin-vue_export-helper-43755360.js";
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
//# sourceMappingURL=Descricao-759b4517.js.map

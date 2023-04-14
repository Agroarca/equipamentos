import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, u as unref } from "./app-0ff9bc90.js";
import { _ as _sfc_main$3 } from "./Editor.vue_vue_type_script_setup_true_lang-9268a08b.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-07e11f97.js";
import { _ as _sfc_main$4 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 cadastrar-equipamento" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Descrição do Equipamento ", -1);
const _hoisted_3 = { class: "my-4" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("hr", { class: "m-0" }, null, -1);
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
    function salvarDescricao() {
      form.post(`/equipamento/${props.equipamento.id}/descricao/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Cadastrar Descrição" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createVNode(_sfc_main$2, {
              class: "mb-3",
              passoAtual: 3,
              passoCadastro: __props.equipamento.passo_cadastro,
              equipamento: __props.equipamento
            }, null, 8, ["passoCadastro", "equipamento"]),
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createVNode(_sfc_main$3, {
                modelValue: unref(form).descricao,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).descricao = $event),
                class: "descricao"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$4, {
                error: unref(form).errors.descricao
              }, null, 8, ["error"])
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: salvarDescricao
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
//# sourceMappingURL=Descricao-4142a6e4.js.map

import { _ as _sfc_main$1 } from "./Lista.vue_vue_type_script_setup_true_lang-1c9616e6.js";
import { d as defineComponent, c as createBlock, o as openBlock } from "./app-4bad2d0e.js";
import "./SiteLayout.vue_vue_type_script_setup_true_lang-9f82cc24.js";
import "./_plugin-vue_export-helper-32befbe5.js";
import "./index-2530c752.js";
import "./Equipamento.vue_vue_type_script_setup_true_lang-9ab7365b.js";
import "./Formatacao.vue_vue_type_script_setup_true_lang-58a1301d.js";
import "./InputMask-8f3451b8.js";
import "./Paginacao.vue_vue_type_script_setup_true_lang-bd0716cc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Lista",
  props: {
    equipamentos: Object,
    lista: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(_sfc_main$1, {
        equipamentos: __props.equipamentos,
        title: (_a = __props.lista) == null ? void 0 : _a.nome
      }, null, 8, ["equipamentos", "title"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Lista-585f31b6.js.map

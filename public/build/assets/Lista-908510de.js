import { _ as _sfc_main$1 } from "./Lista.vue_vue_type_script_setup_true_lang-807f08f5.js";
import { d as defineComponent, c as createBlock, o as openBlock } from "./app-262f55c5.js";
import "./SiteLayout.vue_vue_type_script_setup_true_lang-b9d10d1f.js";
import "./_plugin-vue_export-helper-43755360.js";
import "./index-2530c752.js";
import "./Equipamento.vue_vue_type_script_setup_true_lang-d4d47458.js";
import "./Formatacao.vue_vue_type_script_setup_true_lang-6cc4dc35.js";
import "./InputMask-be638bab.js";
import "./Paginacao.vue_vue_type_script_setup_true_lang-644972c4.js";
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
//# sourceMappingURL=Lista-908510de.js.map

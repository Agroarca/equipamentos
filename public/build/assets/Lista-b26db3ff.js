import { _ as _sfc_main$1 } from "./Lista.vue_vue_type_script_setup_true_lang-568347c5.js";
import { d as defineComponent, c as createBlock, o as openBlock } from "./app-ed22f974.js";
import "./SiteLayout.vue_vue_type_script_setup_true_lang-cfbeff38.js";
import "./_plugin-vue_export-helper-c43da2e0.js";
import "./index-2530c752.js";
import "./Equipamento.vue_vue_type_script_setup_true_lang-ac86aa0c.js";
import "./Formatacao.vue_vue_type_script_setup_true_lang-ddddd5e9.js";
import "./InputMask-11192eae.js";
import "./Paginacao.vue_vue_type_script_setup_true_lang-d35dd82b.js";
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
//# sourceMappingURL=Lista-b26db3ff.js.map

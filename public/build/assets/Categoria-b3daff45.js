import { _ as _sfc_main$1 } from "./Lista.vue_vue_type_script_setup_true_lang-59bbddeb.js";
import { d as defineComponent, c as createBlock, o as openBlock } from "./app-7261d323.js";
import "./SiteLayout.vue_vue_type_script_setup_true_lang-54df8edf.js";
import "./_plugin-vue_export-helper-85f18738.js";
import "./index-2530c752.js";
import "./Equipamento.vue_vue_type_script_setup_true_lang-0e78088f.js";
import "./Formatacao.vue_vue_type_script_setup_true_lang-f36158e5.js";
import "./InputMask-0214c019.js";
import "./Paginacao.vue_vue_type_script_setup_true_lang-d1172721.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Categoria",
  props: {
    equipamentos: Object,
    categoria: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(_sfc_main$1, {
        equipamentos: __props.equipamentos,
        title: (_a = __props.categoria) == null ? void 0 : _a.nome
      }, null, 8, ["equipamentos", "title"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Categoria-b3daff45.js.map

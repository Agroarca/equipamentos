import { _ as _sfc_main$1 } from "./Lista.vue_vue_type_script_setup_true_lang-21ebc625.js";
import { d as defineComponent, c as createBlock, o as openBlock } from "./app-0ff9bc90.js";
import "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
import "./Equipamento.vue_vue_type_script_setup_true_lang-00ded259.js";
import "./Formatacao.vue_vue_type_script_setup_true_lang-2cf469b7.js";
import "./InputMask-4af8a144.js";
import "./Paginacao.vue_vue_type_script_setup_true_lang-dca6110c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Marca",
  props: {
    equipamentos: Object,
    marca: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(_sfc_main$1, {
        equipamentos: __props.equipamentos,
        title: (_a = __props.marca) == null ? void 0 : _a.nome
      }, null, 8, ["equipamentos", "title"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Marca-95332b2e.js.map

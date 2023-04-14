import { M as Mask } from "./InputMask-11192eae.js";
import { d as defineComponent, r as ref, x as onMounted, o as openBlock, k as createElementBlock, t as toDisplayString } from "./app-ed22f974.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Formatacao",
  props: {
    tipo: String,
    valor: String
  },
  setup(__props) {
    const props = __props;
    const elValor = ref(null);
    onMounted(() => {
      Mask[props.tipo](elValor.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "elValor",
        ref: elValor
      }, toDisplayString(__props.valor), 513);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Formatacao.vue_vue_type_script_setup_true_lang-ddddd5e9.js.map

import { d as defineComponent, k as createElementBlock, a as createBaseVNode, t as toDisplayString, l as createCommentVNode, o as openBlock } from "./app-262f55c5.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "erro" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormError",
  props: {
    error: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.error ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("p", _hoisted_2, toDisplayString(__props.error), 1)
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=FormError.vue_vue_type_script_setup_true_lang-0b2cdf09.js.map

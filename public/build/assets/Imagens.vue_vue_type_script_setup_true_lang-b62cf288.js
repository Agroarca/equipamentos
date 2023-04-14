import { d as defineComponent, k as createElementBlock, o as openBlock } from "./app-262f55c5.js";
const _hoisted_1 = { class: "imagem" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = {
  key: 1,
  class: "card-img-top",
  src: "/img/Placeholder.png",
  alt: "Foto do Equipamento não cadastrada"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Imagens",
  props: {
    imagens: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.imagens.length > 0 ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "card-img-top",
          src: __props.imagens[0].url,
          alt: __props.imagens[0].descricao
        }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("img", _hoisted_3))
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Imagens.vue_vue_type_script_setup_true_lang-b62cf288.js.map

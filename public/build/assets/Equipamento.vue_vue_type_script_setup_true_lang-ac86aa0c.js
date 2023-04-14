import { d as defineComponent, c as createBlock, w as withCtx, u as unref, o as openBlock, a as createBaseVNode, t as toDisplayString, f as createVNode, n as ne } from "./app-ed22f974.js";
import { _ as _sfc_main$1 } from "./Formatacao.vue_vue_type_script_setup_true_lang-ddddd5e9.js";
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = { class: "titulo flex-fill" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "btn" }, "Quero saber mais!", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Equipamento",
  props: {
    equipamento: Object
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const imagem = {
      url: ((_a = props.equipamento.imagens[0]) == null ? void 0 : _a.url) ?? "/img/Placeholder.png",
      descricao: (_b = props.equipamento.imagens[0]) == null ? void 0 : _b.descricao
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ne), {
        class: "produto",
        href: `/equipamento/${__props.equipamento.id}`
      }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            class: "imagem",
            src: imagem.url,
            alt: imagem.descricao
          }, null, 8, _hoisted_1),
          createBaseVNode("span", _hoisted_2, toDisplayString(__props.equipamento.titulo), 1),
          createVNode(_sfc_main$1, {
            class: "valor",
            tipo: "preco",
            valor: __props.equipamento.valor
          }, null, 8, ["valor"]),
          _hoisted_3
        ]),
        _: 1
      }, 8, ["href"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Equipamento.vue_vue_type_script_setup_true_lang-ac86aa0c.js.map

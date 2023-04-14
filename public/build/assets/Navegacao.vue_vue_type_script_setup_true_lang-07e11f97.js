import { d as defineComponent, k as createElementBlock, a as createBaseVNode, f as createVNode, w as withCtx, q as normalizeClass, u as unref, o as openBlock, h as createTextVNode, n as ne } from "./app-0ff9bc90.js";
const _hoisted_1 = { class: "nav nav-pills justify-content-center" };
const _hoisted_2 = { class: "nav-item" };
const _hoisted_3 = { class: "nav-item" };
const _hoisted_4 = { class: "nav-item" };
const _hoisted_5 = { class: "nav-item" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Navegacao",
  props: {
    passoCadastro: Number,
    passoAtual: Number,
    equipamento: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("ul", _hoisted_1, [
        createBaseVNode("li", _hoisted_2, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.passoAtual == 1 }]),
            href: `/equipamento/cadastrar/${((_a = __props.equipamento) == null ? void 0 : _a.id) ?? ""}`
          }, {
            default: withCtx(() => [
              createTextVNode(" Cadastrar ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_3, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.passoAtual == 2, disabled: __props.passoCadastro < 1 }]),
            href: `/equipamento/${((_b = __props.equipamento) == null ? void 0 : _b.id) ?? ""}/imagens`
          }, {
            default: withCtx(() => [
              createTextVNode(" Imagens ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_4, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.passoAtual == 3, disabled: __props.passoCadastro < 2 }]),
            href: `/equipamento/${((_c = __props.equipamento) == null ? void 0 : _c.id) ?? ""}/descricao`
          }, {
            default: withCtx(() => [
              createTextVNode(" Descrição ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_5, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.passoAtual == 4, disabled: __props.passoCadastro < 3 }]),
            href: `/equipamento/${((_d = __props.equipamento) == null ? void 0 : _d.id) ?? ""}/caracteristicas`
          }, {
            default: withCtx(() => [
              createTextVNode(" Caracteristicas ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2ZWdhY2FvLnZ1ZV92dWVfdHlwZV9zY3JpcHRfc2V0dXBfdHJ1ZV9sYW5nLTA3ZTExZjk3LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

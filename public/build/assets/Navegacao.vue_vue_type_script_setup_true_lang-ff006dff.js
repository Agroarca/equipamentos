import { d as defineComponent, k as createElementBlock, a as createBaseVNode, f as createVNode, w as withCtx, q as normalizeClass, u as unref, l as createCommentVNode, o as openBlock, h as createTextVNode, n as ne } from "./app-0ff9bc90.js";
const _hoisted_1 = { class: "nav nav-pills" };
const _hoisted_2 = { class: "nav-item" };
const _hoisted_3 = { class: "nav-item" };
const _hoisted_4 = { class: "nav-item" };
const _hoisted_5 = { class: "nav-item" };
const _hoisted_6 = {
  key: 0,
  class: "nav-item"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Navegacao",
  props: {
    paginaAtual: String,
    equipamento: Object
  },
  setup(__props) {
    const STATUS_CRIADO = 1;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1, [
        createBaseVNode("li", _hoisted_2, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "cadastro" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar`
          }, {
            default: withCtx(() => [
              createTextVNode(" Editar ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_3, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "descricao" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/descricao`
          }, {
            default: withCtx(() => [
              createTextVNode(" Descrição ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_4, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "caracteristicas" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/caracteristicas`
          }, {
            default: withCtx(() => [
              createTextVNode(" Caracteristicas ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_5, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "imagens" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/imagens`
          }, {
            default: withCtx(() => [
              createTextVNode(" Imagens ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        __props.equipamento.status == STATUS_CRIADO ? (openBlock(), createElementBlock("li", _hoisted_6, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "aprovacao" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/aprovacao`
          }, {
            default: withCtx(() => [
              createTextVNode(" Aprovação ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Navegacao.vue_vue_type_script_setup_true_lang-ff006dff.js.map

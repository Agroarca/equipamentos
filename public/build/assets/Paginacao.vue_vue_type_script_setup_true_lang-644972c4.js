import { d as defineComponent, o as openBlock, k as createElementBlock, a as createBaseVNode, F as Fragment, m as renderList, f as createVNode, w as withCtx, h as createTextVNode, t as toDisplayString, q as normalizeClass, u as unref, n as ne, l as createCommentVNode } from "./app-262f55c5.js";
const _hoisted_1 = {
  key: 0,
  "aria-label": "Paginação"
};
const _hoisted_2 = { class: "pagination" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Paginacao",
  props: {
    links: Array
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.links.length > 2 ? (openBlock(), createElementBlock("nav", _hoisted_1, [
        createBaseVNode("ul", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, (link) => {
            return openBlock(), createElementBlock("li", {
              key: link.label,
              class: "page-item"
            }, [
              createVNode(unref(ne), {
                class: normalizeClass(["page-link", { disabled: !link.url, active: link.active }]),
                href: link.url
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(link.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class"])
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Paginacao.vue_vue_type_script_setup_true_lang-644972c4.js.map

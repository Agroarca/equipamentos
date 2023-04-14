import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-b9d10d1f.js";
import { _ as _sfc_main$2 } from "./Equipamento.vue_vue_type_script_setup_true_lang-d4d47458.js";
import { _ as _sfc_main$3 } from "./Paginacao.vue_vue_type_script_setup_true_lang-644972c4.js";
import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, C as renderSlot, k as createElementBlock, t as toDisplayString, l as createCommentVNode, m as renderList, F as Fragment, f as createVNode } from "./app-262f55c5.js";
const _hoisted_1 = { class: "container container-md lista" };
const _hoisted_2 = { class: "section-meta" };
const _hoisted_3 = {
  key: 0,
  class: "section-title"
};
const _hoisted_4 = { class: "produtos" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Lista",
  props: {
    equipamentos: Object,
    title: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: __props.title }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "title", {}, () => [
                __props.title ? (openBlock(), createElementBlock("h2", _hoisted_3, toDisplayString(__props.title), 1)) : createCommentVNode("", true)
              ])
            ]),
            renderSlot(_ctx.$slots, "default", {}, () => [
              createBaseVNode("div", _hoisted_4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamentos.data, (equipamento) => {
                  return openBlock(), createBlock(_sfc_main$2, {
                    key: equipamento.id,
                    equipamento
                  }, null, 8, ["equipamento"]);
                }), 128))
              ]),
              createVNode(_sfc_main$3, {
                links: __props.equipamentos.links,
                class: "mt-5"
              }, null, 8, ["links"])
            ])
          ])
        ]),
        _: 3
      }, 8, ["titulo"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Lista.vue_vue_type_script_setup_true_lang-807f08f5.js.map

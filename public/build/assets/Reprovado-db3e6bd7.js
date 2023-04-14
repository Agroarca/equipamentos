import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-9f82cc24.js";
import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode } from "./app-4bad2d0e.js";
import "./_plugin-vue_export-helper-32befbe5.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-12" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", null, " Motivo da Reprovação ", -1);
const _hoisted_5 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Reprovado",
  props: {
    equipamento: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Equipamento Reprovado" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _hoisted_4,
                createBaseVNode("div", {
                  innerHTML: __props.equipamento.motivo_reprovado
                }, null, 8, _hoisted_5)
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Reprovado-db3e6bd7.js.map

import { d as defineComponent, k as createElementBlock, a as createBaseVNode, f as createVNode, w as withCtx, u as unref, F as Fragment, m as renderList, o as openBlock, h as createTextVNode, n as ne, t as toDisplayString } from "./app-4bad2d0e.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = { class: "card-header" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "col-sm-8" }, [
  /* @__PURE__ */ createBaseVNode("h5", null, "Opções")
], -1);
const _hoisted_5 = { class: "col-sm-4 pt-3 pt-sm-0" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-plus-circle pr-1" }, null, -1);
const _hoisted_7 = { class: "card-body table-responsive p-0" };
const _hoisted_8 = { class: "table table-stri=ped table-hover" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-eraser pe-1" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaOpcoes",
  props: {
    caracteristica: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(ne), {
                href: `/admin/categorias/${__props.caracteristica.categoria_id}/caracteristicas/${__props.caracteristica.id}/opcoes/criar`,
                class: "btn btn-primary float-sm-end"
              }, {
                default: withCtx(() => [
                  _hoisted_6,
                  createTextVNode(" Criar Opção ")
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("table", _hoisted_8, [
            _hoisted_9,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caracteristica.opcoes, (opcao) => {
                return openBlock(), createElementBlock("tr", {
                  key: opcao.id
                }, [
                  createBaseVNode("td", null, toDisplayString(opcao.nome), 1),
                  createBaseVNode("td", null, [
                    createVNode(unref(ne), {
                      class: "btn btn-danger",
                      href: `/admin/categorias/${__props.caracteristica.categoria_id}/caracteristicas/${__props.caracteristica.id}/opcoes/${opcao.id}/excluir`
                    }, {
                      default: withCtx(() => [
                        _hoisted_10,
                        createTextVNode(" Excluir ")
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=ListaOpcoes.vue_vue_type_script_setup_true_lang-0940c916.js.map

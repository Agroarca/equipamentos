import { d as defineComponent, k as createElementBlock, a as createBaseVNode, F as Fragment, m as renderList, o as openBlock, t as toDisplayString, f as createVNode, w as withCtx, h as createTextVNode, u as unref, n as ne } from "./app-262f55c5.js";
const _hoisted_1 = {
  key: 0,
  class: "card card-default"
};
const _hoisted_2 = { class: "card-body p-0" };
const _hoisted_3 = { class: "table table-striped table-hover" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Titulo"),
  /* @__PURE__ */ createBaseVNode("th", null, "Categoria"),
  /* @__PURE__ */ createBaseVNode("th", null, "Marca / Modelo"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-eraser pe-1" }, null, -1);
const _hoisted_6 = {
  key: 1,
  class: "alert alert-warning"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListaProdutos",
  props: {
    produtos: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.produtos.data.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("table", _hoisted_3, [
            _hoisted_4,
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.produtos.data, (produto) => {
                return openBlock(), createElementBlock("tr", {
                  key: produto.id
                }, [
                  createBaseVNode("td", null, toDisplayString(produto.equipamento.titulo), 1),
                  createBaseVNode("td", null, toDisplayString(produto.equipamento.categoria.nome), 1),
                  createBaseVNode("td", null, toDisplayString(produto.equipamento.modelo.marca.nome) + " / " + toDisplayString(produto.equipamento.modelo.nome), 1),
                  createBaseVNode("td", null, [
                    createVNode(unref(ne), {
                      class: "btn btn-danger",
                      href: `/admin/lista/${produto.lista_id}/produtos/${produto.id}/excluir`
                    }, {
                      default: withCtx(() => [
                        _hoisted_5,
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
      ])) : (openBlock(), createElementBlock("div", _hoisted_6, " Nenhum produto adicionado "));
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=ListaProdutos.vue_vue_type_script_setup_true_lang-e7de3366.js.map

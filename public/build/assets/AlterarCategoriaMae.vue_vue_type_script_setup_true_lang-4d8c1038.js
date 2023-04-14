import { d as defineComponent, r as ref, i as reactive, c as createBlock, w as withCtx, j as axios, o as openBlock, a as createBaseVNode, t as toDisplayString, k as createElementBlock, h as createTextVNode, l as createCommentVNode, m as renderList, F as Fragment } from "./app-4bad2d0e.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang-b061b430.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-arrow-left me-1" }, null, -1);
const _hoisted_3 = { class: "table-responsive" };
const _hoisted_4 = { class: "table table-striped table-hover" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_6 = ["onClick"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-arrow-right" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlterarCategoriaMae",
  props: {
    categoria: Object
  },
  emits: ["moverCategoria"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const modal = ref(null);
    const state = reactive({
      categoriaAtual: {},
      categorias: []
    });
    function atualizarCategorias(categoriaId) {
      loader.show();
      const url = categoriaId ? `/admin/categorias/pesquisar/${categoriaId}` : "/admin/categorias/pesquisar";
      axios.get(url).then((response) => {
        state.categorias = response.data.categorias;
        state.categoriaAtual = response.data.categoria;
        loader.hide();
      });
    }
    function show() {
      var _a, _b;
      atualizarCategorias((_b = (_a = props.categoria) == null ? void 0 : _a.categoria_mae) == null ? void 0 : _b.id);
      modal.value.show();
    }
    function moverCategoria() {
      var _a;
      emit("moverCategoria", (_a = state.categoriaAtual) == null ? void 0 : _a.id);
      modal.value.hide();
    }
    expose({ show });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        id: "modal_" + __props.categoria.id,
        ref_key: "modal",
        ref: modal,
        title: "Mover " + __props.categoria.nome
      }, {
        footer: withCtx(() => {
          var _a;
          return [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: _cache[1] || (_cache[1] = ($event) => moverCategoria())
            }, " Mover para " + toDisplayString(((_a = state.categoriaAtual) == null ? void 0 : _a.nome) ?? "Categorias"), 1)
          ];
        }),
        default: withCtx(() => {
          var _a;
          return [
            state.categoriaAtual ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  var _a2;
                  return atualizarCategorias((_a2 = state.categoriaAtual.categoria_mae) == null ? void 0 : _a2.id);
                })
              }, [
                _hoisted_2,
                createTextVNode(" " + toDisplayString(((_a = state.categoriaAtual.categoria_mae) == null ? void 0 : _a.nome) ?? "Categorias"), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("table", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(state.categorias, (cat) => {
                    return openBlock(), createElementBlock("tr", {
                      key: cat.id
                    }, [
                      createBaseVNode("td", null, toDisplayString(cat.nome), 1),
                      createBaseVNode("td", null, [
                        cat.id != __props.categoria.id ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          type: "button",
                          class: "btn btn-primary",
                          onClick: ($event) => atualizarCategorias(cat.id)
                        }, [
                          createTextVNode(" Acessar "),
                          _hoisted_7
                        ], 8, _hoisted_6)) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ];
        }),
        _: 1
      }, 8, ["id", "title"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=AlterarCategoriaMae.vue_vue_type_script_setup_true_lang-4d8c1038.js.map

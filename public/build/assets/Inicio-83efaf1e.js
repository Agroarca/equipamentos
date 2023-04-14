import { d as defineComponent, c as createBlock, w as withCtx, u as unref, o as openBlock, n as ne, h as createTextVNode, t as toDisplayString, l as createCommentVNode, a as createBaseVNode, k as createElementBlock, m as renderList, f as createVNode, F as Fragment } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./Paginacao.vue_vue_type_script_setup_true_lang-dca6110c.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-arrow-left me-1" }, null, -1);
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body table-responsive p-0" };
const _hoisted_4 = { class: "table table-striped table-hover" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("th", null, "Categoria Mãe"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_6 = { key: 0 };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-sliders pe-1" }, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-bars-staggered pe-1" }, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-pen-to-square pe-1" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-eraser pe-1" }, null, -1);
const _hoisted_11 = { key: 0 };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("td", { colspan: "3" }, " Nenhum registro encontrado ", -1);
const _hoisted_13 = [
  _hoisted_12
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    categorias: Object,
    categoria: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const titulo = ((_a = props.categoria) == null ? void 0 : _a.nome) ? `Categorias de ${props.categoria.nome}` : "Categorias";
    const link = props.categoria ? `/admin/categorias/criar/${props.categoria.id}` : "/admin/categorias/criar";
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, {
        titulo: unref(titulo),
        link: unref(link),
        buttonText: "Nova Categoria"
      }, {
        default: withCtx(() => {
          var _a2;
          return [
            __props.categoria ? (openBlock(), createBlock(unref(ne), {
              key: 0,
              class: "btn btn-primary mb-3",
              href: `/admin/categorias/${((_a2 = __props.categoria) == null ? void 0 : _a2.categoria_mae_id) ?? ""}`
            }, {
              default: withCtx(() => {
                var _a3, _b;
                return [
                  _hoisted_1,
                  createTextVNode(" " + toDisplayString(((_b = (_a3 = __props.categoria) == null ? void 0 : _a3.categoria_mae) == null ? void 0 : _b.nome) ?? "Categorias"), 1)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("table", _hoisted_4, [
                  _hoisted_5,
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.categorias.data, (categ) => {
                      return openBlock(), createElementBlock("tr", {
                        key: categ.id
                      }, [
                        createBaseVNode("td", null, toDisplayString(categ.nome), 1),
                        createBaseVNode("td", null, [
                          categ.categoria_mae ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(categ.categoria_mae.nome), 1)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("td", null, [
                          createVNode(unref(ne), {
                            class: "btn btn-primary me-2",
                            href: `/admin/categorias/${categ.id}/caracteristicas`
                          }, {
                            default: withCtx(() => [
                              _hoisted_7,
                              createTextVNode(" Características ")
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(unref(ne), {
                            class: "btn btn-primary me-2",
                            href: `/admin/categorias/${categ == null ? void 0 : categ.id}`
                          }, {
                            default: withCtx(() => [
                              _hoisted_8,
                              createTextVNode(" Subcategorias ")
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(unref(ne), {
                            class: "btn btn-primary me-2",
                            href: `/admin/categorias/${categ.id}/editar`
                          }, {
                            default: withCtx(() => [
                              _hoisted_9,
                              createTextVNode(" Editar ")
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(unref(ne), {
                            class: "btn btn-danger",
                            href: `/admin/categorias/${categ.id}/excluir`
                          }, {
                            default: withCtx(() => [
                              _hoisted_10,
                              createTextVNode(" Excluir ")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ])
                      ]);
                    }), 128)),
                    __props.categorias.data.length == 0 ? (openBlock(), createElementBlock("tr", _hoisted_11, _hoisted_13)) : createCommentVNode("", true)
                  ])
                ])
              ])
            ]),
            createVNode(_sfc_main$1, {
              class: "mt-4",
              links: __props.categorias.links
            }, null, 8, ["links"])
          ];
        }),
        _: 1
      }, 8, ["titulo", "link"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Inicio-83efaf1e.js.map

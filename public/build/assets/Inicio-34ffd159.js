import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, k as createElementBlock, m as renderList, t as toDisplayString, f as createVNode, h as createTextVNode, u as unref, n as ne, F as Fragment } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = { class: "card-body table-responsive p-0" };
const _hoisted_3 = { class: "table table-striped table-hover" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("th", null, "Tipo"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-magnifying-glass pe-1" }, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-eraser pe-1" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    categoria: Object,
    tipos: Array
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, {
        titulo: "Características de " + __props.categoria.nome,
        link: `/admin/categorias/${__props.categoria.id}/caracteristicas/criar`,
        buttonText: "Nova Característica"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("table", _hoisted_3, [
                _hoisted_4,
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.categoria.caracteristicas, (caracteristica) => {
                    return openBlock(), createElementBlock("tr", {
                      key: caracteristica.id
                    }, [
                      createBaseVNode("td", null, toDisplayString(caracteristica.nome), 1),
                      createBaseVNode("td", null, toDisplayString(__props.tipos[caracteristica.tipo]), 1),
                      createBaseVNode("td", null, [
                        createVNode(unref(ne), {
                          class: "btn btn-primary me-2",
                          href: `/admin/categorias/${__props.categoria.id}/caracteristicas/${caracteristica.id}/visualizar`
                        }, {
                          default: withCtx(() => [
                            _hoisted_5,
                            createTextVNode(" Visualizar ")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(unref(ne), {
                          class: "btn btn-danger",
                          href: `/admin/categorias/${__props.categoria.id}/caracteristicas/${caracteristica.id}/excluir`
                        }, {
                          default: withCtx(() => [
                            _hoisted_6,
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
          ])
        ]),
        _: 1
      }, 8, ["titulo", "link"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Inicio-34ffd159.js.map

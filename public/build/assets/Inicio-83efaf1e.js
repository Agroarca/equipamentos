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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pY2lvLTgzZWZhZjFlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0NhdGVnb3JpYS9JbmljaW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9BZG1pbkxheW91dC52dWUnXG5pbXBvcnQgUGFnaW5hY2FvIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0xpc3Rhcy9QYWdpbmFjYW8udnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBjYXRlZ29yaWFzOiBPYmplY3QsXG4gICAgY2F0ZWdvcmlhOiBPYmplY3QsXG59KVxuXG5jb25zdCB0aXR1bG8gPSBwcm9wcy5jYXRlZ29yaWE/Lm5vbWUgPyBgQ2F0ZWdvcmlhcyBkZSAke3Byb3BzLmNhdGVnb3JpYS5ub21lfWAgOiAnQ2F0ZWdvcmlhcydcbmNvbnN0IGxpbmsgPSBwcm9wcy5jYXRlZ29yaWEgPyBgL2FkbWluL2NhdGVnb3JpYXMvY3JpYXIvJHtwcm9wcy5jYXRlZ29yaWEuaWR9YCA6ICcvYWRtaW4vY2F0ZWdvcmlhcy9jcmlhcidcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IDp0aXR1bG89XCJ0aXR1bG9cIiA6bGluaz1cImxpbmtcIiBidXR0b25UZXh0PVwiTm92YSBDYXRlZ29yaWFcIj5cbiAgICAgICAgPExpbmsgdi1pZj1cImNhdGVnb3JpYVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1iLTNcIiA6aHJlZj1cImAvYWRtaW4vY2F0ZWdvcmlhcy8ke2NhdGVnb3JpYT8uY2F0ZWdvcmlhX21hZV9pZCA/PyAnJ31gXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvdy1sZWZ0IG1lLTFcIiAvPlxuICAgICAgICAgICAge3sgY2F0ZWdvcmlhPy5jYXRlZ29yaWFfbWFlPy5ub21lID8/IFwiQ2F0ZWdvcmlhc1wiIH19XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGFibGUtcmVzcG9uc2l2ZSBwLTBcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob21lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYXRlZ29yaWEgTcOjZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiY2F0ZWcgaW4gY2F0ZWdvcmlhcy5kYXRhXCIgOmtleT1cImNhdGVnLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGNhdGVnLm5vbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNhdGVnLmNhdGVnb3JpYV9tYWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdGVnLmNhdGVnb3JpYV9tYWUubm9tZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTJcIiA6aHJlZj1cImAvYWRtaW4vY2F0ZWdvcmlhcy8ke2NhdGVnLmlkfS9jYXJhY3RlcmlzdGljYXNgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zbGlkZXJzIHBlLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyYWN0ZXLDrXN0aWNhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTJcIiA6aHJlZj1cImAvYWRtaW4vY2F0ZWdvcmlhcy8ke2NhdGVnPy5pZH1gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzLXN0YWdnZXJlZCBwZS0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1YmNhdGVnb3JpYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtZS0yXCIgOmhyZWY9XCJgL2FkbWluL2NhdGVnb3JpYXMvJHtjYXRlZy5pZH0vZWRpdGFyYFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGVuLXRvLXNxdWFyZSBwZS0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiA6aHJlZj1cImAvYWRtaW4vY2F0ZWdvcmlhcy8ke2NhdGVnLmlkfS9leGNsdWlyYFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXJhc2VyIHBlLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhjbHVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1pZj1cImNhdGVnb3JpYXMuZGF0YS5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW5odW0gcmVnaXN0cm8gZW5jb250cmFkb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBhZ2luYWNhbyBjbGFzcz1cIm10LTRcIiA6bGlua3M9XCJjYXRlZ29yaWFzLmxpbmtzXCIgLz5cbiAgICA8L0FkbWluTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxVQUFNLFdBQVMsV0FBTSxjQUFOLG1CQUFpQixRQUFPLGlCQUFpQixNQUFNLFVBQVUsU0FBUztBQUNqRixVQUFNLE9BQU8sTUFBTSxZQUFZLDJCQUEyQixNQUFNLFVBQVUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

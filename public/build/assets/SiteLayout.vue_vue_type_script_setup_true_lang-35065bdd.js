import { d as defineComponent, o as openBlock, k as createElementBlock, a as createBaseVNode, f as createVNode, w as withCtx, h as createTextVNode, u as unref, n as ne, J, c as createBlock, l as createCommentVNode, D as pushScopeId, E as popScopeId, X, C as renderSlot } from "./app-0ff9bc90.js";
import { b as _export_sfc, _ as _sfc_main$4, a as _sfc_main$5 } from "./_plugin-vue_export-helper-af6bd5fd.js";
const site = "";
const _hoisted_1$3 = { class: "container-fluid menu-container" };
const _hoisted_2$2 = {
  id: "navbarmenu",
  class: "row menu-content collapse navbar-collapse"
};
const _hoisted_3$2 = { class: "menu navbar-nav" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("li", { class: "nav-item" }, null, -1);
const _hoisted_5$2 = { class: "nav-item" };
const _hoisted_6$2 = { class: "nav-item" };
const _hoisted_7$2 = { class: "nav-item" };
const _hoisted_8$2 = { class: "nav-item" };
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("li", { class: "nav-item" }, null, -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", null, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("ul", _hoisted_3$2, [
              _hoisted_4$2,
              createBaseVNode("li", _hoisted_5$2, [
                createVNode(unref(ne), {
                  class: "menu-item",
                  href: "/categoria"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Todas as Categorias ")
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("li", _hoisted_6$2, [
                createVNode(unref(ne), {
                  class: "menu-item",
                  href: `/equipamento/${[1]}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Produto Exemplo ")
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("li", _hoisted_7$2, [
                createVNode(unref(ne), {
                  class: "menu-item",
                  href: "/equipamento/cadastrar"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cadastrar Produto ")
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("li", _hoisted_8$2, [
                createVNode(unref(ne), {
                  class: "menu-item",
                  href: "/perfil/equipamentos"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Meus Equipamentos ")
                  ]),
                  _: 1
                })
              ]),
              _hoisted_9$2
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "header" };
const _hoisted_2$1 = { class: "header-contact py-2" };
const _hoisted_3$1 = { class: "container contact-container d-flex flex-nowrap" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "phone" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-phone-alt" }),
  /* @__PURE__ */ createTextVNode("+55 54 9902-0345")
], -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", { class: "mail" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-envelope" }),
  /* @__PURE__ */ createTextVNode("contato@agroarca.com.br")
], -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("i", { class: "fa-solid fa-chart-line" }, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "d-none d-sm-inline" }, "Acessar o Painel", -1);
const _hoisted_8$1 = { class: "py-0 py-md-3 mb-4 navbar navbar-expand-md d-block" };
const _hoisted_9$1 = { class: "container-fluid main flex-wrap flex-md-nowrap" };
const _hoisted_10 = { class: "header-item text-decoration-none logo-container order-1" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "logo",
  src: "/img/logo.png",
  alt: "Página Inicial"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "header-item search-container input-group order-5 order-md-2" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    placeholder: "Pequisar produtos...",
    type: "text",
    class: "search form-control"
  }),
  /* @__PURE__ */ createBaseVNode("button", { type: "submit" }, [
    /* @__PURE__ */ createBaseVNode("i", { class: "fa fa-search" })
  ])
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-user-circle" }, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "d-none d-xl-block" }, "Minha Conta", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("button", {
  class: "header-item menu-container menu-button navbar-toggler collapsed order-4 d-block d-md-none",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarmenu",
  "aria-controls": "navbarmenu",
  "aria-expanded": "false",
  "aria-label": "Mostrar Menu"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "d-flex flex-nowrap" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-bars" })
  ])
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  setup(__props) {
    var _a, _b, _c, _d;
    const TIPO_USUARIO_ADMIN = 1;
    const isAdmin = ((_d = (_c = (_b = (_a = J()) == null ? void 0 : _a.props) == null ? void 0 : _b.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.tipo_usuario) === TIPO_USUARIO_ADMIN;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            _hoisted_4$1,
            _hoisted_5$1,
            isAdmin ? (openBlock(), createBlock(unref(ne), {
              key: 0,
              class: "painel",
              href: "/admin/dashboard"
            }, {
              default: withCtx(() => [
                _hoisted_6$1,
                _hoisted_7$1
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("header", _hoisted_8$1, [
          createBaseVNode("div", _hoisted_9$1, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(ne), { href: "/" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            _hoisted_12,
            createVNode(unref(ne), {
              class: "header-item profile-container order-4",
              href: "/perfil"
            }, {
              default: withCtx(() => [
                _hoisted_13,
                _hoisted_14
              ]),
              _: 1
            }),
            _hoisted_15
          ]),
          createVNode(_sfc_main$3)
        ])
      ]);
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_2c1610b9_lang = "";
const _sfc_main$1 = {};
const _withScopeId = (n) => (pushScopeId("data-v-2c1610b9"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "footer mt-4" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer", -1));
const _hoisted_9 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5,
  _hoisted_6,
  _hoisted_7,
  _hoisted_8
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_9);
}
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-2c1610b9"]]);
const _hoisted_1 = { class: "site-layout" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SiteLayout",
  props: {
    titulo: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(X), { title: __props.titulo }, null, 8, ["title"]),
        createVNode(_sfc_main$4, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$5),
            createVNode(_sfc_main$2),
            renderSlot(_ctx.$slots, "default"),
            createVNode(Footer)
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2l0ZUxheW91dC52dWVfdnVlX3R5cGVfc2NyaXB0X3NldHVwX3RydWVfbGFuZy0zNTA2NWJkZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL0xheW91dHMvU2l0ZS9IZWFkZXIudnVlIiwiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL0xheW91dHMvU2l0ZS9Gb290ZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBMaW5rLCB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51LnZ1ZSdcblxuY29uc3QgVElQT19VU1VBUklPX0FETUlOID0gMVxuY29uc3QgaXNBZG1pbiA9IHVzZVBhZ2UoKT8ucHJvcHM/LmF1dGg/LnVzZXI/LnRpcG9fdXN1YXJpbyA9PT0gVElQT19VU1VBUklPX0FETUlOXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWN0IHB5LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29udGFjdC1jb250YWluZXIgZC1mbGV4IGZsZXgtbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaG9uZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBob25lLWFsdFwiIC8+KzU1IDU0IDk5MDItMDM0NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haWxcIj48aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiIC8+Y29udGF0b0BhZ3JvYXJjYS5jb20uYnI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPExpbmsgdi1pZj1cImlzQWRtaW5cIiBjbGFzcz1cInBhaW5lbFwiIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hhcnQtbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZC1ub25lIGQtc20taW5saW5lXCI+QWNlc3NhciBvIFBhaW5lbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJweS0wIHB5LW1kLTMgbWItNCBuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBkLWJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIG1haW4gZmxleC13cmFwIGZsZXgtbWQtbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pdGVtIHRleHQtZGVjb3JhdGlvbi1ub25lIGxvZ28tY29udGFpbmVyIG9yZGVyLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsb2dvXCIgc3JjPVwiL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIlDDoWdpbmEgSW5pY2lhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pdGVtIHNlYXJjaC1jb250YWluZXIgaW5wdXQtZ3JvdXAgb3JkZXItNSBvcmRlci1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZWpzLWFjY2Vzc2liaWxpdHkvZm9ybS1jb250cm9sLWhhcy1sYWJlbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGVxdWlzYXIgcHJvZHV0b3MuLi5cIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VhcmNoIGZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3M9XCJoZWFkZXItaXRlbSBwcm9maWxlLWNvbnRhaW5lciBvcmRlci00XCIgaHJlZj1cIi9wZXJmaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImQtbm9uZSBkLXhsLWJsb2NrXCI+TWluaGEgQ29udGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJoZWFkZXItaXRlbSBtZW51LWNvbnRhaW5lciBtZW51LWJ1dHRvbiBuYXZiYXItdG9nZ2xlciBjb2xsYXBzZWQgb3JkZXItNCBkLWJsb2NrIGQtbWQtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhcm1lbnVcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFybWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiTW9zdHJhciBNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEtc29saWQgZmEtYmFyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvb3RlciBtdC00XCI+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgICAgIDxwPkZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXIgRm9vdGVyIEZvb3RlciBGb290ZXI8L3A+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuLmZvb3RlciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTM0O1xuICAgIGNvbG9yOiAjZmZmXG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbInVzZVBhZ2UiLCJfcG9wU2NvcGVJZCIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlRWxlbWVudFZOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxVQUFNLHFCQUFxQjtBQUMzQixVQUFNLFlBQVVBLCtCQUFBQSxtQkFBVyxVQUFYQSxtQkFBa0IsU0FBbEJBLG1CQUF3QixTQUF4QkEsbUJBQThCLGtCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXRELE1BQUEsZUFBQSxvQkFBbUIsaUJBQUEsR0FBQSxJQUFBLEVBQUEsR0FBQUMsV0FBQSxHQUFBO0FBQ3BCLE1BQUFDLGVBQUEsRUFBQSxPQUFBLGNBQUE7QUFDQSxNQUFBLGFBQUEsNkJBQUEsTUFBQUMsZ0NBQXdHLFdBQXJHLHFHQUFpRyxFQUFBLENBQUE7QUFDcEcsTUFBQSxhQUFBLDZCQUFBLE1BQUFBLGdDQUF3RyxXQUFyRyxxR0FBaUcsRUFBQSxDQUFBO0FBQ3BHLE1BQUEsYUFBQSw2QkFBQSxNQUFBQSxnQ0FBd0csV0FBckcscUdBQWlHLEVBQUEsQ0FBQTtBQUNwRyxNQUFBLGFBQUEsNkJBQUEsTUFBQUEsZ0NBQXdHLFdBQXJHLHFHQUFpRyxFQUFBLENBQUE7QUFDcEcsTUFBQSxhQUFBLDZCQUFBLE1BQUFBLGdDQUF3RyxXQUFyRyxxR0FBaUcsRUFBQSxDQUFBO0FBQ3BHLE1BQUEsYUFBQSw2QkFBQSxNQUFBQSxnQ0FBd0csV0FBckcscUdBQWlHLEVBQUEsQ0FBQTs7TUFOSSxhQUFBO0FBQUEsRUFDeEc7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBOztBQVBKLFNBQUEsWUFBQSxNQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

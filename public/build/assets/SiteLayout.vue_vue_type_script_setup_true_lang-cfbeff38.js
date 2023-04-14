import { d as defineComponent, o as openBlock, k as createElementBlock, a as createBaseVNode, f as createVNode, w as withCtx, h as createTextVNode, u as unref, n as ne, J, c as createBlock, l as createCommentVNode, D as pushScopeId, E as popScopeId, X, C as renderSlot } from "./app-ed22f974.js";
import { b as _export_sfc, _ as _sfc_main$4, a as _sfc_main$5 } from "./_plugin-vue_export-helper-c43da2e0.js";
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
//# sourceMappingURL=SiteLayout.vue_vue_type_script_setup_true_lang-cfbeff38.js.map

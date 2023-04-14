import { d as defineComponent, s as computed, r as ref, x as onMounted, O as Offcanvas, B as onUnmounted, k as createElementBlock, f as createVNode, w as withCtx, o as openBlock, a as createBaseVNode, u as unref, n as ne, h as createTextVNode, F as Fragment, m as renderList, t as toDisplayString, C as renderSlot, X, J, D as pushScopeId, E as popScopeId } from "./app-262f55c5.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _export_sfc } from "./_plugin-vue_export-helper-43755360.js";
const admin = "";
const _withScopeId = (n) => (pushScopeId("data-v-cf9a1954"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "admin-layout" };
const _hoisted_2 = { class: "main-header navbar sticky-top bg-light flex-md-nowrap p-0 shadow" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("button", {
  class: "navbar-toggler collapsed ms-2 me-auto",
  type: "button",
  "data-bs-toggle": "offcanvas",
  "data-bs-target": "#main-menu",
  "aria-controls": "sidebarMenu",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, [
  /* @__PURE__ */ createBaseVNode("span", { class: "navbar-toggler-icon" })
], -1));
const _hoisted_4 = { class: "navbar-nav" };
const _hoisted_5 = { class: "nav-item text-nowrap" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "offcanvas-header menu-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", {
    id: "main-menu-label",
    class: "offcanvas-title"
  }, " Equipamentos "),
  /* @__PURE__ */ createBaseVNode("button", {
    type: "button",
    class: "btn-close",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Fechar"
  })
], -1));
const _hoisted_7 = { class: "offcanvas-body" };
const _hoisted_8 = { class: "nav flex-column" };
const _hoisted_9 = { class: "admin-wrapper" };
const _hoisted_10 = { class: "container pt-3" };
const _hoisted_11 = {
  key: 0,
  class: "row pb-4"
};
const _hoisted_12 = { class: "col-sm-8" };
const _hoisted_13 = { class: "col-sm-4 pt-3 pt-sm-0" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-plus-circle pr-1" }, null, -1));
const _hoisted_15 = {
  key: 1,
  class: "pb-4"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminLayout",
  props: {
    titulo: String,
    link: String,
    buttonText: String
  },
  setup(__props) {
    const menus = computed(() => J().props.admin.menus);
    const elOffcanvas = ref(null);
    let offcanvas;
    onMounted(() => {
      offcanvas = new Offcanvas(elOffcanvas.value);
    });
    onUnmounted(() => {
      offcanvas.hide();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$2),
            createBaseVNode("header", _hoisted_2, [
              createVNode(unref(ne), {
                class: "navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6",
                href: "/admin/dashboard"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Equipamentos ")
                ]),
                _: 1
              }),
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(unref(ne), {
                    class: "nav-link px-3",
                    href: "/sair"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sair ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("aside", null, [
              createBaseVNode("nav", {
                id: "main-menu",
                ref_key: "elOffcanvas",
                ref: elOffcanvas,
                class: "offcanvas offcanvas-start",
                tabindex: "-1",
                "aria-labelledby": "main-menu-label"
              }, [
                _hoisted_6,
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("ul", _hoisted_8, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(menus), (menu) => {
                      return openBlock(), createElementBlock("li", {
                        key: menu.title,
                        class: "nav-item"
                      }, [
                        createVNode(unref(ne), {
                          class: "nav-link",
                          href: menu.url
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(menu.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]);
                    }), 128))
                  ])
                ])
              ], 512)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("main", _hoisted_10, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createVNode(unref(X), { title: __props.titulo }, null, 8, ["title"]),
                  __props.link ? (openBlock(), createElementBlock("header", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("h1", null, toDisplayString(__props.titulo), 1)
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(unref(ne), {
                        href: __props.link,
                        class: "btn btn-primary float-sm-end"
                      }, {
                        default: withCtx(() => [
                          _hoisted_14,
                          createTextVNode(" " + toDisplayString(__props.buttonText), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])) : (openBlock(), createElementBlock("header", _hoisted_15, [
                    createBaseVNode("h1", null, toDisplayString(__props.titulo), 1)
                  ]))
                ], true),
                createBaseVNode("article", null, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ])
              ])
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
const AdminLayout_vue_vue_type_style_index_0_scoped_cf9a1954_lang = "";
const AdminLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf9a1954"]]);
export {
  AdminLayout as A
};
//# sourceMappingURL=AdminLayout-59296aa0.js.map

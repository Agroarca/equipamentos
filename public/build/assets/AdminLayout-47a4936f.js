import { d as defineComponent, s as computed, r as ref, x as onMounted, O as Offcanvas, B as onUnmounted, k as createElementBlock, f as createVNode, w as withCtx, o as openBlock, a as createBaseVNode, u as unref, n as ne, h as createTextVNode, F as Fragment, m as renderList, t as toDisplayString, C as renderSlot, X, J, D as pushScopeId, E as popScopeId } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _export_sfc } from "./_plugin-vue_export-helper-af6bd5fd.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5MYXlvdXQtNDdhNDkzNmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9MYXlvdXRzL0FkbWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0ICcuLi8uLi9jc3MvYWRtaW4uY3NzJ1xuXG5pbXBvcnQgeyBIZWFkLCBMaW5rLCB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgb25Vbm1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IE9mZmNhbnZhcyB9IGZyb20gJ2Jvb3RzdHJhcCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvTG9hZGVyLnZ1ZSdcbmltcG9ydCBCYXNlTGF5b3V0IGZyb20gJy4vQmFzZUxheW91dC52dWUnXG5cbmNvbnN0IG1lbnVzID0gY29tcHV0ZWQoKCkgPT4gdXNlUGFnZSgpLnByb3BzLmFkbWluLm1lbnVzKVxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgdGl0dWxvOiBTdHJpbmcsXG4gICAgbGluazogU3RyaW5nLFxuICAgIGJ1dHRvblRleHQ6IFN0cmluZyxcblxufSlcblxuY29uc3QgZWxPZmZjYW52YXMgPSByZWYobnVsbClcbmxldCBvZmZjYW52YXNcbm9uTW91bnRlZCgoKSA9PiB7XG4gICAgb2ZmY2FudmFzID0gbmV3IE9mZmNhbnZhcyhlbE9mZmNhbnZhcy52YWx1ZSlcbn0pXG5cbm9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAvLyBDb3JyZcOnw6NvIGRlIGJ1ZyBkbyBvdmVyZmxvdyBoaWRkZW4gYXDDs3MgY2xpY2FyIG5vcyBtZW51c1xuICAgIG9mZmNhbnZhcy5oaWRlKClcbn0pXG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFkbWluLWxheW91dFwiPlxuICAgICAgICA8QmFzZUxheW91dD5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtYWluLWhlYWRlciBuYXZiYXIgc3RpY2t5LXRvcCBiZy1saWdodCBmbGV4LW1kLW5vd3JhcCBwLTAgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3M9XCJuYXZiYXItYnJhbmQgY29sLW1kLTMgY29sLWxnLTIgbWUtMCBweC0zIGZzLTZcIiBocmVmPVwiL2FkbWluL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICBFcXVpcGFtZW50b3NcbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgY29sbGFwc2VkIG1zLTIgbWUtYXV0b1wiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiIGRhdGEtYnMtdGFyZ2V0PVwiI21haW4tbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2lkZWJhck1lbnVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbSB0ZXh0LW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3M9XCJuYXYtbGluayBweC0zXCIgaHJlZj1cIi9zYWlyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2FpclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgICAgIDxuYXYgaWQ9XCJtYWluLW1lbnVcIiByZWY9XCJlbE9mZmNhbnZhc1wiIGNsYXNzPVwib2ZmY2FudmFzIG9mZmNhbnZhcy1zdGFydFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJtYWluLW1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1oZWFkZXIgbWVudS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZD1cIm1haW4tbWVudS1sYWJlbFwiIGNsYXNzPVwib2ZmY2FudmFzLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXF1aXBhbWVudG9zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJvZmZjYW52YXNcIiBhcmlhLWxhYmVsPVwiRmVjaGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZmZjYW52YXMtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwibWVudSBpbiBtZW51c1wiIDprZXk9XCJtZW51LnRpdGxlXCIgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzcz1cIm5hdi1saW5rXCIgOmhyZWY9XCJtZW51LnVybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVudS50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJjb250YWluZXIgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZCA6dGl0bGU9XCJ0aXR1bG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciB2LWlmPVwibGlua1wiIGNsYXNzPVwicm93IHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7IHRpdHVsbyB9fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IHB0LTMgcHQtc20tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayA6aHJlZj1cImxpbmtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1zbS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlIHByLTFcIiAvPiB7eyBidXR0b25UZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciB2LWVsc2UgY2xhc3M9XCJwYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7IHRpdHVsbyB9fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhc2VMYXlvdXQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmOTtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsidXNlUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsVUFBTSxRQUFRLFNBQVMsTUFBTUEsRUFBVSxFQUFBLE1BQU0sTUFBTSxLQUFLO0FBUWxELFVBQUEsY0FBYyxJQUFJLElBQUk7QUFDeEIsUUFBQTtBQUNKLGNBQVUsTUFBTTtBQUNBLGtCQUFBLElBQUksVUFBVSxZQUFZLEtBQUs7QUFBQSxJQUFBLENBQzlDO0FBRUQsZ0JBQVksTUFBTTtBQUVkLGdCQUFVLEtBQUs7QUFBQSxJQUFBLENBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

import { d as defineComponent, k as createElementBlock, a as createBaseVNode, f as createVNode, w as withCtx, q as normalizeClass, u as unref, l as createCommentVNode, o as openBlock, h as createTextVNode, n as ne } from "./app-0ff9bc90.js";
const _hoisted_1 = { class: "nav nav-pills" };
const _hoisted_2 = { class: "nav-item" };
const _hoisted_3 = { class: "nav-item" };
const _hoisted_4 = { class: "nav-item" };
const _hoisted_5 = { class: "nav-item" };
const _hoisted_6 = {
  key: 0,
  class: "nav-item"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Navegacao",
  props: {
    paginaAtual: String,
    equipamento: Object
  },
  setup(__props) {
    const STATUS_CRIADO = 1;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1, [
        createBaseVNode("li", _hoisted_2, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "cadastro" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar`
          }, {
            default: withCtx(() => [
              createTextVNode(" Editar ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_3, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "descricao" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/descricao`
          }, {
            default: withCtx(() => [
              createTextVNode(" Descrição ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_4, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "caracteristicas" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/caracteristicas`
          }, {
            default: withCtx(() => [
              createTextVNode(" Caracteristicas ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        createBaseVNode("li", _hoisted_5, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "imagens" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/imagens`
          }, {
            default: withCtx(() => [
              createTextVNode(" Imagens ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ]),
        __props.equipamento.status == STATUS_CRIADO ? (openBlock(), createElementBlock("li", _hoisted_6, [
          createVNode(unref(ne), {
            class: normalizeClass(["nav-link", { active: __props.paginaAtual == "aprovacao" }]),
            href: `/admin/equipamentos/${__props.equipamento.id}/editar/aprovacao`
          }, {
            default: withCtx(() => [
              createTextVNode(" Aprovação ")
            ]),
            _: 1
          }, 8, ["class", "href"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2ZWdhY2FvLnZ1ZV92dWVfdHlwZV9zY3JpcHRfc2V0dXBfdHJ1ZV9sYW5nLWZmMDA2ZGZmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0VkaXRhci9Db21wb25lbnRlcy9OYXZlZ2FjYW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IHsgZGVmaW5lUHJvcHMgfSBmcm9tICd2dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIHBhZ2luYUF0dWFsOiBTdHJpbmcsXG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbn0pXG5cbmNvbnN0IFNUQVRVU19DUklBRE8gPSAxXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwibmF2LWxpbmtcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogcGFnaW5hQXR1YWwgPT0gJ2NhZGFzdHJvJyB9XCIgOmhyZWY9XCJgL2FkbWluL2VxdWlwYW1lbnRvcy8ke2VxdWlwYW1lbnRvLmlkfS9lZGl0YXJgXCI+XG4gICAgICAgICAgICAgICAgRWRpdGFyXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBjbGFzcz1cIm5hdi1saW5rXCIgOmNsYXNzPVwieyBhY3RpdmU6IHBhZ2luYUF0dWFsID09ICdkZXNjcmljYW8nIH1cIiA6aHJlZj1cImAvYWRtaW4vZXF1aXBhbWVudG9zLyR7ZXF1aXBhbWVudG8uaWR9L2VkaXRhci9kZXNjcmljYW9gXCI+XG4gICAgICAgICAgICAgICAgRGVzY3Jpw6fDo29cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwibmF2LWxpbmtcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogcGFnaW5hQXR1YWwgPT0gJ2NhcmFjdGVyaXN0aWNhcycgfVwiIDpocmVmPVwiYC9hZG1pbi9lcXVpcGFtZW50b3MvJHtlcXVpcGFtZW50by5pZH0vZWRpdGFyL2NhcmFjdGVyaXN0aWNhc2BcIj5cbiAgICAgICAgICAgICAgICBDYXJhY3RlcmlzdGljYXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwibmF2LWxpbmtcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogcGFnaW5hQXR1YWwgPT0gJ2ltYWdlbnMnIH1cIiA6aHJlZj1cImAvYWRtaW4vZXF1aXBhbWVudG9zLyR7ZXF1aXBhbWVudG8uaWR9L2VkaXRhci9pbWFnZW5zYFwiPlxuICAgICAgICAgICAgICAgIEltYWdlbnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIHYtaWY9XCJlcXVpcGFtZW50by5zdGF0dXMgPT0gU1RBVFVTX0NSSUFET1wiIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzPVwibmF2LWxpbmtcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogcGFnaW5hQXR1YWwgPT0gJ2Fwcm92YWNhbycgfVwiIDpocmVmPVwiYC9hZG1pbi9lcXVpcGFtZW50b3MvJHtlcXVpcGFtZW50by5pZH0vZWRpdGFyL2Fwcm92YWNhb2BcIj5cbiAgICAgICAgICAgICAgICBBcHJvdmHDp8Ojb1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsVUFBTSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

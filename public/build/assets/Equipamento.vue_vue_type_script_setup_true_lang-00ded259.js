import { d as defineComponent, c as createBlock, w as withCtx, u as unref, o as openBlock, a as createBaseVNode, t as toDisplayString, f as createVNode, n as ne } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./Formatacao.vue_vue_type_script_setup_true_lang-2cf469b7.js";
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = { class: "titulo flex-fill" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "btn" }, "Quero saber mais!", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Equipamento",
  props: {
    equipamento: Object
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const imagem = {
      url: ((_a = props.equipamento.imagens[0]) == null ? void 0 : _a.url) ?? "/img/Placeholder.png",
      descricao: (_b = props.equipamento.imagens[0]) == null ? void 0 : _b.descricao
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ne), {
        class: "produto",
        href: `/equipamento/${__props.equipamento.id}`
      }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            class: "imagem",
            src: imagem.url,
            alt: imagem.descricao
          }, null, 8, _hoisted_1),
          createBaseVNode("span", _hoisted_2, toDisplayString(__props.equipamento.titulo), 1),
          createVNode(_sfc_main$1, {
            class: "valor",
            tipo: "preco",
            valor: __props.equipamento.valor
          }, null, 8, ["valor"]),
          _hoisted_3
        ]),
        _: 1
      }, 8, ["href"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBhbWVudG8udnVlX3Z1ZV90eXBlX3NjcmlwdF9zZXR1cF90cnVlX2xhbmctMDBkZWQyNTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9TaXRlL0xpc3RhL0NvbXBvbmVudGVzL0VxdWlwYW1lbnRvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgTGluayB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCBGb3JtYXRhY2FvIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0hlbHBlci9Gb3JtYXRhY2FvLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbn0pXG5cbmNvbnN0IGltYWdlbSA9IHtcbiAgICB1cmw6IHByb3BzLmVxdWlwYW1lbnRvLmltYWdlbnNbMF0/LnVybCA/PyAnL2ltZy9QbGFjZWhvbGRlci5wbmcnLFxuICAgIGRlc2NyaWNhbzogcHJvcHMuZXF1aXBhbWVudG8uaW1hZ2Vuc1swXT8uZGVzY3JpY2FvLFxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8TGluayBjbGFzcz1cInByb2R1dG9cIiA6aHJlZj1cImAvZXF1aXBhbWVudG8vJHtlcXVpcGFtZW50by5pZH1gXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbWFnZW1cIiA6c3JjPVwiaW1hZ2VtLnVybFwiIDphbHQ9XCJpbWFnZW0uZGVzY3JpY2FvXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0dWxvIGZsZXgtZmlsbFwiPnt7IGVxdWlwYW1lbnRvLnRpdHVsbyB9fTwvc3Bhbj5cbiAgICAgICAgPEZvcm1hdGFjYW8gY2xhc3M9XCJ2YWxvclwiIHRpcG89XCJwcmVjb1wiIDp2YWxvcj1cImVxdWlwYW1lbnRvLnZhbG9yXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5cIj5RdWVybyBzYWJlciBtYWlzITwvc3Bhbj5cbiAgICA8L0xpbms+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxVQUFNLFNBQVM7QUFBQSxNQUNYLE9BQUssV0FBTSxZQUFZLFFBQVEsQ0FBQyxNQUEzQixtQkFBOEIsUUFBTztBQUFBLE1BQzFDLFlBQVcsV0FBTSxZQUFZLFFBQVEsQ0FBQyxNQUEzQixtQkFBOEI7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

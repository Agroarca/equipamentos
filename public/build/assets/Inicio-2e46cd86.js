import { d as defineComponent, r as ref, v, k as createElementBlock, a as createBaseVNode, F as Fragment, m as renderList, l as createCommentVNode, f as createVNode, w as withCtx, o as openBlock, t as toDisplayString, h as createTextVNode, u as unref, n as ne, b as withDirectives, e as vModelText } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Imagens ")
], -1);
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "row mb-3" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "Nenhuma imagem adicionada", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { class: "mb-3" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", { for: "descricao" }, null, -1);
const _hoisted_12 = { class: "mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "imagem" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    equipamento: Object
  },
  setup(__props) {
    const props = __props;
    const modal = ref(null);
    const form = v({
      descricao: "",
      imagem: {}
    });
    function adicionar() {
      modal.value.show();
    }
    function upload() {
      form.post(`/admin/equipamentos/${props.equipamento.id}/imagens/adicionar`, {
        onSuccess: () => {
          modal.value.hide();
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => adicionar())
            }, " Adicionar Imagem ")
          ]),
          createBaseVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamento.imagens, (imagem) => {
              return openBlock(), createElementBlock("div", {
                key: imagem.id,
                class: "col-12 col-lg-6 col-xl-4 mb-3"
              }, [
                createBaseVNode("img", {
                  class: "card-img-top",
                  src: imagem.url,
                  alt: imagem.descricao
                }, null, 8, _hoisted_6),
                createBaseVNode("p", null, toDisplayString(imagem.descricao), 1),
                createVNode(unref(ne), {
                  href: `/admin/equipamentos/${__props.equipamento.id}/imagens/${imagem.id}/deletar`,
                  class: "btn btn-danger"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Excluir ")
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]);
            }), 128)),
            __props.equipamento.imagens.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)) : createCommentVNode("", true)
          ])
        ]),
        createVNode(_sfc_main$1, {
          id: "modal_" + __props.equipamento.id,
          ref_key: "modal",
          ref: modal,
          title: "Adicionar Imagem"
        }, {
          footer: withCtx(() => [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: _cache[3] || (_cache[3] = ($event) => upload())
            }, " Adicionar ")
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).descricao = $event),
                type: "text",
                name: "descricao",
                class: "form-control"
              }, null, 512), [
                [vModelText, unref(form).descricao]
              ]),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.descricao
              }, null, 8, ["error"])
            ]),
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createBaseVNode("input", {
                type: "file",
                name: "imagem",
                class: "form-control-file",
                onInput: _cache[2] || (_cache[2] = ($event) => unref(form).imagem = $event.target.files[0])
              }, null, 32),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.imagem
              }, null, 8, ["error"])
            ])
          ]),
          _: 1
        }, 8, ["id"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pY2lvLTJlNDZjZDg2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL0VxdWlwYW1lbnRvL0ltYWdlbnMvSW5pY2lvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgTGluaywgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBNb2RhbCBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Nb2RhbC52dWUnXG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0Zvcm1zL0Zvcm1FcnJvci52dWUnXG5cbmNvbnN0IG1vZGFsID0gcmVmKG51bGwpXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBlcXVpcGFtZW50bzogT2JqZWN0LFxufSlcblxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIGRlc2NyaWNhbzogJycsXG4gICAgaW1hZ2VtOiB7fSxcbn0pXG5cbmZ1bmN0aW9uIGFkaWNpb25hcigpIHtcbiAgICBtb2RhbC52YWx1ZS5zaG93KClcbn1cblxuZnVuY3Rpb24gdXBsb2FkKCkge1xuICAgIGZvcm0ucG9zdChgL2FkbWluL2VxdWlwYW1lbnRvcy8ke3Byb3BzLmVxdWlwYW1lbnRvLmlkfS9pbWFnZW5zL2FkaWNpb25hcmAsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC52YWx1ZS5oaWRlKClcbiAgICAgICAgfSxcbiAgICB9KVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgSW1hZ2Vuc1xuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwiYWRpY2lvbmFyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgQWRpY2lvbmFyIEltYWdlbVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImltYWdlbSBpbiBlcXVpcGFtZW50by5pbWFnZW5zXCIgOmtleT1cImltYWdlbS5pZFwiIGNsYXNzPVwiY29sLTEyIGNvbC1sZy02IGNvbC14bC00IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIDpzcmM9XCJpbWFnZW0udXJsXCIgOmFsdD1cImltYWdlbS5kZXNjcmljYW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgaW1hZ2VtLmRlc2NyaWNhbyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgOmhyZWY9XCJgL2FkbWluL2VxdWlwYW1lbnRvcy8ke2VxdWlwYW1lbnRvLmlkfS9pbWFnZW5zLyR7aW1hZ2VtLmlkfS9kZWxldGFyYFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4Y2x1aXJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImVxdWlwYW1lbnRvLmltYWdlbnMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TmVuaHVtYSBpbWFnZW0gYWRpY2lvbmFkYTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsIDppZD1cIidtb2RhbF8nICsgZXF1aXBhbWVudG8uaWRcIiByZWY9XCJtb2RhbFwiIHRpdGxlPVwiQWRpY2lvbmFyIEltYWdlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpY2FvXCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZGVzY3JpY2FvXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpY2FvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmRlc2NyaWNhb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImltYWdlbVwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sLWZpbGVcIiBAaW5wdXQ9XCJmb3JtLmltYWdlbSA9ICRldmVudC50YXJnZXQuZmlsZXNbMF1cIj5cbiAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmltYWdlbVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwidXBsb2FkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgQWRpY2lvbmFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNTSxVQUFBLFFBQVEsSUFBSSxJQUFJO0FBS3RCLFVBQU0sT0FBT0EsRUFBUTtBQUFBLE1BQ2pCLFdBQVc7QUFBQSxNQUNYLFFBQVEsQ0FBQztBQUFBLElBQUEsQ0FDWjtBQUVELGFBQVMsWUFBWTtBQUNqQixZQUFNLE1BQU07SUFDaEI7QUFFQSxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssdUJBQXVCLE1BQU0sWUFBWSx3QkFBd0I7QUFBQSxRQUN2RSxXQUFXLE1BQU07QUFDYixnQkFBTSxNQUFNO1FBQ2hCO0FBQUEsTUFBQSxDQUNIO0FBQUEsSUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

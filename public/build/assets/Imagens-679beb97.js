import { d as defineComponent, r as ref, v, c as createBlock, w as withCtx, o as openBlock, f as createVNode, a as createBaseVNode, k as createElementBlock, m as renderList, t as toDisplayString, h as createTextVNode, u as unref, n as ne, F as Fragment, l as createCommentVNode, b as withDirectives, e as vModelText } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$3 } from "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-ff006dff.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
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
  __name: "Imagens",
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
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Equipamento" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, {
            class: "mb-4 d-flex flex-roll justify-content-center",
            equipamento: __props.equipamento,
            paginaAtual: "imagens"
          }, null, 8, ["equipamento"]),
          createBaseVNode("div", _hoisted_1, [
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
            createVNode(_sfc_main$3, {
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
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2Vucy02NzliZWI5Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluL0VxdWlwYW1lbnRvcy9DYWRhc3Ryby9FcXVpcGFtZW50by9FZGl0YXIvSW1hZ2Vucy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IExpbmssIHVzZUZvcm0gfSBmcm9tICdAaW5lcnRpYWpzL3Z1ZTMnXG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnQC9MYXlvdXRzL0FkbWluTGF5b3V0LnZ1ZSdcbmltcG9ydCBNb2RhbCBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Nb2RhbC52dWUnXG5pbXBvcnQgTmF2ZWdhY2FvIGZyb20gJy4vQ29tcG9uZW50ZXMvTmF2ZWdhY2FvLnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcblxuY29uc3QgbW9kYWwgPSByZWYobnVsbClcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGVxdWlwYW1lbnRvOiBPYmplY3QsXG59KVxuXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgZGVzY3JpY2FvOiAnJyxcbiAgICBpbWFnZW06IHt9LFxufSlcblxuZnVuY3Rpb24gYWRpY2lvbmFyKCkge1xuICAgIG1vZGFsLnZhbHVlLnNob3coKVxufVxuXG5mdW5jdGlvbiB1cGxvYWQoKSB7XG4gICAgZm9ybS5wb3N0KGAvYWRtaW4vZXF1aXBhbWVudG9zLyR7cHJvcHMuZXF1aXBhbWVudG8uaWR9L2ltYWdlbnMvYWRpY2lvbmFyYCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnZhbHVlLmhpZGUoKVxuICAgICAgICB9LFxuICAgIH0pXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxBZG1pbkxheW91dCB0aXR1bG89XCJFZGl0YXIgRXF1aXBhbWVudG9cIj5cbiAgICAgICAgPE5hdmVnYWNhbyBjbGFzcz1cIm1iLTQgZC1mbGV4IGZsZXgtcm9sbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgOmVxdWlwYW1lbnRvPVwiZXF1aXBhbWVudG9cIiBwYWdpbmFBdHVhbD1cImltYWdlbnNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2Vuc1xuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJhZGljaW9uYXIoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRpY2lvbmFyIEltYWdlbVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpbWFnZW0gaW4gZXF1aXBhbWVudG8uaW1hZ2Vuc1wiIDprZXk9XCJpbWFnZW0uaWRcIiBjbGFzcz1cImNvbC0xMiBjb2wtbGctNiBjb2wteGwtNCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgOnNyYz1cImltYWdlbS51cmxcIiA6YWx0PVwiaW1hZ2VtLmRlc2NyaWNhb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgaW1hZ2VtLmRlc2NyaWNhbyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIDpocmVmPVwiYC9hZG1pbi9lcXVpcGFtZW50b3MvJHtlcXVpcGFtZW50by5pZH0vaW1hZ2Vucy8ke2ltYWdlbS5pZH0vZGVsZXRhcmBcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhjbHVpclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXF1aXBhbWVudG8uaW1hZ2Vucy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmVuaHVtYSBpbWFnZW0gYWRpY2lvbmFkYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbCA6aWQ9XCInbW9kYWxfJyArIGVxdWlwYW1lbnRvLmlkXCIgcmVmPVwibW9kYWxcIiB0aXRsZT1cIkFkaWNpb25hciBJbWFnZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpY2FvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmRlc2NyaWNhb1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaWNhb1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuZGVzY3JpY2FvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sLWZpbGVcIiBAaW5wdXQ9XCJmb3JtLmltYWdlbSA9ICRldmVudC50YXJnZXQuZmlsZXMgWzBdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuaW1hZ2VtXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJ1cGxvYWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRpY2lvbmFyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0FkbWluTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU0sVUFBQSxRQUFRLElBQUksSUFBSTtBQUt0QixVQUFNLE9BQU9BLEVBQVE7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxRQUFRLENBQUM7QUFBQSxJQUFBLENBQ1o7QUFFRCxhQUFTLFlBQVk7QUFDakIsWUFBTSxNQUFNO0lBQ2hCO0FBRUEsYUFBUyxTQUFTO0FBQ2QsV0FBSyxLQUFLLHVCQUF1QixNQUFNLFlBQVksd0JBQXdCO0FBQUEsUUFDdkUsV0FBVyxNQUFNO0FBQ2IsZ0JBQU0sTUFBTTtRQUNoQjtBQUFBLE1BQUEsQ0FDSDtBQUFBLElBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

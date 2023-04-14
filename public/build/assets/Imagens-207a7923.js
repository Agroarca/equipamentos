import { d as defineComponent, r as ref, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, k as createElementBlock, t as toDisplayString, l as createCommentVNode, m as renderList, h as createTextVNode, u as unref, n as ne, F as Fragment, q as normalizeClass, b as withDirectives, e as vModelText } from "./app-0ff9bc90.js";
import { _ as _sfc_main$4 } from "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-07e11f97.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 cadastrar-equipamento imagens" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Imagens do Equipamento ", -1);
const _hoisted_3 = {
  key: 0,
  class: "row mb-3"
};
const _hoisted_4 = { class: "alert alert-warning" };
const _hoisted_5 = {
  for: "erro",
  class: "imagem"
};
const _hoisted_6 = { class: "my-3" };
const _hoisted_7 = ["src", "alt"];
const _hoisted_8 = {
  key: 0,
  class: "alert alert-warning"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "Nenhuma imagem adicionada", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "mt-3" };
const _hoisted_12 = { class: "mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "descricao" }, "Descrição", -1);
const _hoisted_14 = { class: "mb-3" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", { for: "imagem" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Imagens",
  props: {
    equipamento: Object,
    errors: Object
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
      form.post(`/equipamento/${props.equipamento.id}/imagens/salvar`, {
        onSuccess: () => {
          modal.value.hide();
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Cadastrar Imagem" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createVNode(_sfc_main$2, {
              class: "mb-3",
              passoAtual: 2,
              passoCadastro: __props.equipamento.passo_cadastro,
              equipamento: __props.equipamento
            }, null, 8, ["passoCadastro", "equipamento"]),
            __props.errors.imagem ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("label", _hoisted_5, toDisplayString(__props.errors.imagem), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamento.imagens, (imagem) => {
                return openBlock(), createElementBlock("div", {
                  key: imagem.id,
                  class: "imagem"
                }, [
                  createBaseVNode("img", {
                    src: imagem.url,
                    alt: imagem.descricao
                  }, null, 8, _hoisted_7),
                  createBaseVNode("p", null, toDisplayString(imagem.descricao), 1),
                  createVNode(unref(ne), {
                    href: `/equipamento/${__props.equipamento.id}/imagens/${imagem.id}/excluir`,
                    class: "btn btn-danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Excluir ")
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]);
              }), 128)),
              __props.equipamento.imagens.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_8, _hoisted_10)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary me-3 mb-3",
                onClick: _cache[0] || (_cache[0] = ($event) => adicionar())
              }, " Adicionar Imagem "),
              createVNode(unref(ne), {
                href: `/equipamento/${__props.equipamento.id}/imagens/continuar`,
                class: normalizeClass(["btn btn-primary", { disabled: __props.equipamento.imagens.length == 0 }])
              }, {
                default: withCtx(() => [
                  createTextVNode(" Continuar ")
                ]),
                _: 1
              }, 8, ["href", "class"])
            ])
          ]),
          createVNode(_sfc_main$4, {
            id: "modal_" + __props.equipamento.id,
            ref_key: "modal",
            ref: modal,
            title: "Adicionar Imagem"
          }, {
            footer: withCtx(() => [
              createBaseVNode("button", {
                type: "submit",
                class: "btn btn-primary",
                onClick: _cache[3] || (_cache[3] = ($event) => upload())
              }, " Adicionar ")
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_12, [
                _hoisted_13,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).descricao = $event),
                  type: "text",
                  name: "descricao",
                  class: "form-control"
                }, null, 512), [
                  [vModelText, unref(form).descricao]
                ]),
                createVNode(_sfc_main$3, {
                  error: unref(form).errors.descricao
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_14, [
                _hoisted_15,
                createBaseVNode("input", {
                  type: "file",
                  name: "imagem",
                  class: "form-control form-control-file",
                  onInput: _cache[2] || (_cache[2] = ($event) => unref(form).imagem = $event.target.files[0])
                }, null, 32),
                createVNode(_sfc_main$3, {
                  error: unref(form).errors.imagem
                }, null, 8, ["error"])
              ])
            ]),
            _: 1
          }, 8, ["id"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2Vucy0yMDdhNzkyMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL1BhZ2VzL1NpdGUvRXF1aXBhbWVudG8vQ2FkYXN0cmFyL0ltYWdlbnMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBMaW5rLCB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L01vZGFsLnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcbmltcG9ydCBTaXRlTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9TaXRlTGF5b3V0LnZ1ZSdcbmltcG9ydCBOYXZlZ2FjYW8gZnJvbSAnLi9Db21wb25lbnRlcy9OYXZlZ2FjYW8udnVlJ1xuXG5jb25zdCBtb2RhbCA9IHJlZihudWxsKVxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbiAgICBlcnJvcnM6IE9iamVjdCxcbn0pXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBkZXNjcmljYW86ICcnLFxuICAgIGltYWdlbToge30sXG59KVxuXG5mdW5jdGlvbiBhZGljaW9uYXIoKSB7XG4gICAgbW9kYWwudmFsdWUuc2hvdygpXG59XG5mdW5jdGlvbiB1cGxvYWQoKSB7XG4gICAgZm9ybS5wb3N0KGAvZXF1aXBhbWVudG8vJHtwcm9wcy5lcXVpcGFtZW50by5pZH0vaW1hZ2Vucy9zYWx2YXJgLCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudmFsdWUuaGlkZSgpXG4gICAgICAgIH0sXG4gICAgfSlcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8U2l0ZUxheW91dCB0aXR1bG89XCJDYWRhc3RyYXIgSW1hZ2VtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItNjAwIGNhZGFzdHJhci1lcXVpcGFtZW50byBpbWFnZW5zXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXR1bG8gdGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgIEltYWdlbnMgZG8gRXF1aXBhbWVudG9cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8TmF2ZWdhY2FvIGNsYXNzPVwibWItM1wiIDpwYXNzb0F0dWFsPVwiMlwiIDpwYXNzb0NhZGFzdHJvPVwiZXF1aXBhbWVudG8ucGFzc29fY2FkYXN0cm9cIiA6ZXF1aXBhbWVudG89XCJlcXVpcGFtZW50b1wiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuaW1hZ2VtXCIgY2xhc3M9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlcnJvXCIgY2xhc3M9XCJpbWFnZW1cIj57eyBlcnJvcnMuaW1hZ2VtIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaW1hZ2VtIGluIGVxdWlwYW1lbnRvLmltYWdlbnNcIiA6a2V5PVwiaW1hZ2VtLmlkXCIgY2xhc3M9XCJpbWFnZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VtLnVybFwiIDphbHQ9XCJpbWFnZW0uZGVzY3JpY2FvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiB7eyBpbWFnZW0uZGVzY3JpY2FvIH19IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgOmhyZWY9XCJgL2VxdWlwYW1lbnRvLyR7ZXF1aXBhbWVudG8uaWR9L2ltYWdlbnMvJHtpbWFnZW0uaWR9L2V4Y2x1aXJgXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhjbHVpclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcXVpcGFtZW50by5pbWFnZW5zLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk5lbmh1bWEgaW1hZ2VtIGFkaWNpb25hZGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTMgbWItM1wiIEBjbGljaz1cImFkaWNpb25hcigpXCI+XG4gICAgICAgICAgICAgICAgICAgIEFkaWNpb25hciBJbWFnZW1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayA6aHJlZj1cImAvZXF1aXBhbWVudG8vJHtlcXVpcGFtZW50by5pZH0vaW1hZ2Vucy9jb250aW51YXJgXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiA6Y2xhc3M9XCJ7IGRpc2FibGVkOiBlcXVpcGFtZW50by5pbWFnZW5zLmxlbmd0aCA9PSAwIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgQ29udGludWFyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgOmlkPVwiJ21vZGFsXycgKyBlcXVpcGFtZW50by5pZFwiIHJlZj1cIm1vZGFsXCIgdGl0bGU9XCJBZGljaW9uYXIgSW1hZ2VtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmljYW9cIj5EZXNjcmnDp8OjbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmRlc2NyaWNhb1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaWNhb1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5kZXNjcmljYW9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbWFnZW1cIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZW1cIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtZmlsZVwiIEBpbnB1dD1cImZvcm0uaW1hZ2VtID0gJGV2ZW50LnRhcmdldC5maWxlc1swXVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuaW1hZ2VtXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRlbXBsYXRlICNmb290ZXI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJ1cGxvYWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICBBZGljaW9uYXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgPC9TaXRlTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFNLFVBQUEsUUFBUSxJQUFJLElBQUk7QUFNdEIsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsV0FBVztBQUFBLE1BQ1gsUUFBUSxDQUFDO0FBQUEsSUFBQSxDQUNaO0FBRUQsYUFBUyxZQUFZO0FBQ2pCLFlBQU0sTUFBTTtJQUNoQjtBQUNBLGFBQVMsU0FBUztBQUNkLFdBQUssS0FBSyxnQkFBZ0IsTUFBTSxZQUFZLHFCQUFxQjtBQUFBLFFBQzdELFdBQVcsTUFBTTtBQUNiLGdCQUFNLE1BQU07UUFDaEI7QUFBQSxNQUFBLENBQ0g7QUFBQSxJQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

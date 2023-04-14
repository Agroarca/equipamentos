import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, u as unref } from "./app-0ff9bc90.js";
import { _ as _sfc_main$3 } from "./Editor.vue_vue_type_script_setup_true_lang-9268a08b.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-07e11f97.js";
import { _ as _sfc_main$4 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 cadastrar-equipamento" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Descrição do Equipamento ", -1);
const _hoisted_3 = { class: "my-4" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("hr", { class: "m-0" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Descricao",
  props: {
    equipamento: Object
  },
  setup(__props) {
    const props = __props;
    const form = v({
      descricao: props.equipamento.descricao
    });
    function salvarDescricao() {
      form.post(`/equipamento/${props.equipamento.id}/descricao/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Cadastrar Descrição" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createVNode(_sfc_main$2, {
              class: "mb-3",
              passoAtual: 3,
              passoCadastro: __props.equipamento.passo_cadastro,
              equipamento: __props.equipamento
            }, null, 8, ["passoCadastro", "equipamento"]),
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createVNode(_sfc_main$3, {
                modelValue: unref(form).descricao,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).descricao = $event),
                class: "descricao"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$4, {
                error: unref(form).errors.descricao
              }, null, 8, ["error"])
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: salvarDescricao
              }, " Atualizar Descrição ")
            ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpY2FvLTQxNDJhNmU0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9FcXVpcGFtZW50by9DYWRhc3RyYXIvRGVzY3JpY2FvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCBFZGl0b3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRWRpdG9yL0VkaXRvci52dWUnXG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tICdAL0xheW91dHMvU2l0ZUxheW91dC52dWUnXG5pbXBvcnQgTmF2ZWdhY2FvIGZyb20gJy4vQ29tcG9uZW50ZXMvTmF2ZWdhY2FvLnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbn0pXG5jb25zdCBmb3JtID0gdXNlRm9ybSh7XG4gICAgZGVzY3JpY2FvOiBwcm9wcy5lcXVpcGFtZW50by5kZXNjcmljYW8sXG59KVxuXG5mdW5jdGlvbiBzYWx2YXJEZXNjcmljYW8oKSB7XG4gICAgZm9ybS5wb3N0KGAvZXF1aXBhbWVudG8vJHtwcm9wcy5lcXVpcGFtZW50by5pZH0vZGVzY3JpY2FvL3NhbHZhcmApXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxTaXRlTGF5b3V0IHRpdHVsbz1cIkNhZGFzdHJhciBEZXNjcmnDp8Ojb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLTYwMCBjYWRhc3RyYXItZXF1aXBhbWVudG9cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdHVsbyB0ZXh0LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgRGVzY3Jpw6fDo28gZG8gRXF1aXBhbWVudG9cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8TmF2ZWdhY2FvIGNsYXNzPVwibWItM1wiIDpwYXNzb0F0dWFsPVwiM1wiIDpwYXNzb0NhZGFzdHJvPVwiZXF1aXBhbWVudG8ucGFzc29fY2FkYXN0cm9cIiA6ZXF1aXBhbWVudG89XCJlcXVpcGFtZW50b1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktNFwiPlxuICAgICAgICAgICAgICAgIDxociBjbGFzcz1cIm0tMFwiIC8+XG4gICAgICAgICAgICAgICAgPEVkaXRvciB2LW1vZGVsPVwiZm9ybS5kZXNjcmljYW9cIiBjbGFzcz1cImRlc2NyaWNhb1wiIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5kZXNjcmljYW9cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwic2FsdmFyRGVzY3JpY2FvXCI+XG4gICAgICAgICAgICAgICAgICAgIEF0dWFsaXphciBEZXNjcmnDp8Ojb1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvU2l0ZUxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsV0FBVyxNQUFNLFlBQVk7QUFBQSxJQUFBLENBQ2hDO0FBRUQsYUFBUyxrQkFBa0I7QUFDdkIsV0FBSyxLQUFLLGdCQUFnQixNQUFNLFlBQVkscUJBQXFCO0FBQUEsSUFDckU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

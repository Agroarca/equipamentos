import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, k as createElementBlock, m as renderList, h as createTextVNode, t as toDisplayString, l as createCommentVNode, u as unref, F as Fragment, g as withModifiers } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-07e11f97.js";
import { _ as _sfc_main$4 } from "./Valor.vue_vue_type_script_setup_true_lang-6a881855.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "container-600 cadastrar-equipamento caracteristicas" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Caracteristicas do Equipamento ", -1);
const _hoisted_4 = { class: "table table-hover mt-3 display-block" };
const _hoisted_5 = ["for"];
const _hoisted_6 = {
  key: 0,
  class: "opcional"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Caracteristicas",
  props: {
    caracteristicas: Object,
    equipamento: Object
  },
  setup(__props) {
    const props = __props;
    const valores = [];
    props.caracteristicas.forEach((caracteristica) => {
      valores[`carac-${caracteristica.id}`] = caracteristica.valor;
    });
    const form = v(valores);
    function submit() {
      form.post(`/equipamento/${props.equipamento.id}/caracteristicas/salvar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createVNode(_sfc_main$2, {
                class: "mb-3 display-block",
                passoAtual: 4,
                passoCadastro: __props.equipamento.passo_cadastro,
                equipamento: __props.equipamento
              }, null, 8, ["passoCadastro", "equipamento"]),
              createBaseVNode("table", _hoisted_4, [
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caracteristicas, (caracteristica) => {
                    return openBlock(), createElementBlock("tr", {
                      key: caracteristica.id
                    }, [
                      createBaseVNode("td", null, [
                        createBaseVNode("label", {
                          for: `caracteristica-${caracteristica.id}`
                        }, [
                          createTextVNode(toDisplayString(caracteristica.nome) + " ", 1),
                          caracteristica.obrigatorio ? (openBlock(), createElementBlock("span", _hoisted_6, "* Obrigatório")) : createCommentVNode("", true)
                        ], 8, _hoisted_5),
                        createVNode(_sfc_main$3, {
                          error: unref(form).errors["carac-" + caracteristica.id]
                        }, null, 8, ["error"])
                      ]),
                      createBaseVNode("td", null, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form)["carac-" + caracteristica.id],
                          "onUpdate:modelValue": ($event) => unref(form)["carac-" + caracteristica.id] = $event,
                          caracteristica
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "caracteristica"])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _hoisted_7
            ])
          ], 40, _hoisted_1)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyYWN0ZXJpc3RpY2FzLWNmY2IxOWM3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9FcXVpcGFtZW50by9DYWRhc3RyYXIvQ2FyYWN0ZXJpc3RpY2FzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCBTaXRlTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9TaXRlTGF5b3V0LnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcbmltcG9ydCBOYXZlZ2FjYW8gZnJvbSAnLi9Db21wb25lbnRlcy9OYXZlZ2FjYW8udnVlJ1xuaW1wb3J0IFZhbG9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvRXF1aXBhbWVudG9zL0NhcmFjdGVyaXN0aWNhcy9WYWxvci52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGNhcmFjdGVyaXN0aWNhczogT2JqZWN0LFxuICAgIGVxdWlwYW1lbnRvOiBPYmplY3QsXG59KVxuXG5jb25zdCB2YWxvcmVzID0gW11cbnByb3BzLmNhcmFjdGVyaXN0aWNhcy5mb3JFYWNoKChjYXJhY3RlcmlzdGljYSkgPT4ge1xuICAgIHZhbG9yZXNbYGNhcmFjLSR7Y2FyYWN0ZXJpc3RpY2EuaWR9YF0gPSBjYXJhY3RlcmlzdGljYS52YWxvclxufSlcblxuY29uc3QgZm9ybSA9IHVzZUZvcm0odmFsb3JlcylcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdChgL2VxdWlwYW1lbnRvLyR7cHJvcHMuZXF1aXBhbWVudG8uaWR9L2NhcmFjdGVyaXN0aWNhcy9zYWx2YXJgKVxufVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxTaXRlTGF5b3V0PlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItNjAwIGNhZGFzdHJhci1lcXVpcGFtZW50byBjYXJhY3RlcmlzdGljYXNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXR1bG8gdGV4dC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICBDYXJhY3RlcmlzdGljYXMgZG8gRXF1aXBhbWVudG9cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxOYXZlZ2FjYW8gY2xhc3M9XCJtYi0zIGRpc3BsYXktYmxvY2tcIiA6cGFzc29BdHVhbD1cIjRcIiA6cGFzc29DYWRhc3Rybz1cImVxdWlwYW1lbnRvLnBhc3NvX2NhZGFzdHJvXCIgOmVxdWlwYW1lbnRvPVwiZXF1aXBhbWVudG9cIiAvPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIG10LTMgZGlzcGxheS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJjYXJhY3RlcmlzdGljYSBpbiBjYXJhY3RlcmlzdGljYXNcIiA6a2V5PVwiY2FyYWN0ZXJpc3RpY2EuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiYGNhcmFjdGVyaXN0aWNhLSR7Y2FyYWN0ZXJpc3RpY2EuaWR9YFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY2FyYWN0ZXJpc3RpY2Eubm9tZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNhcmFjdGVyaXN0aWNhLm9icmlnYXRvcmlvXCIgY2xhc3M9XCJvcGNpb25hbFwiPiogT2JyaWdhdMOzcmlvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzWydjYXJhYy0nICsgY2FyYWN0ZXJpc3RpY2EuaWRdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZhbG9yIHYtbW9kZWw9XCJmb3JtWydjYXJhYy0nICsgY2FyYWN0ZXJpc3RpY2EuaWRdXCIgOmNhcmFjdGVyaXN0aWNhPVwiY2FyYWN0ZXJpc3RpY2FcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNhbHZhclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9TaXRlTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxVQUFNLFVBQVUsQ0FBQTtBQUNWLFVBQUEsZ0JBQWdCLFFBQVEsQ0FBQyxtQkFBbUI7QUFDOUMsY0FBUSxTQUFTLGVBQWUsSUFBSSxJQUFJLGVBQWU7QUFBQSxJQUFBLENBQzFEO0FBRUssVUFBQSxPQUFPQSxFQUFRLE9BQU87QUFFNUIsYUFBUyxTQUFTO0FBQ2QsV0FBSyxLQUFLLGdCQUFnQixNQUFNLFlBQVksMkJBQTJCO0FBQUEsSUFDM0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

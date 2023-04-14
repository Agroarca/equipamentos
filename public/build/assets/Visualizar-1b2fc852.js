import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./ListaOpcoes.vue_vue_type_script_setup_true_lang-bc5e85d5.js";
import { t as tituloTamanhoMinimo, a as tituloTamanhoMaximo, m as mostrarTamanhos, b as mostrarCasasDecimais, c as mostrarOpcoes } from "./Helper-dc2fcd27.js";
import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, u as unref, k as createElementBlock, t as toDisplayString, l as createCommentVNode } from "./app-0ff9bc90.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = { class: "card-body" };
const _hoisted_3 = { class: "mb-3" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_5 = ["value"];
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "tipo" }, "Tipo:", -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "mb-3 form-check form-switch" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", {
  class: "form-check-label",
  for: "obrigatorio"
}, "Obrigatório", -1);
const _hoisted_12 = {
  key: 0,
  class: "mb-3"
};
const _hoisted_13 = { for: "minimo" };
const _hoisted_14 = ["value"];
const _hoisted_15 = {
  key: 1,
  class: "mb-3"
};
const _hoisted_16 = { for: "maximo" };
const _hoisted_17 = ["value"];
const _hoisted_18 = {
  key: 2,
  class: "mb-3"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", { for: "quantidade" }, "Quantidade de Casas Decimais", -1);
const _hoisted_20 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Visualizar",
  props: {
    caracteristica: Object,
    tipos: Array
  },
  setup(__props) {
    const props = __props;
    const tituloMinimo = tituloTamanhoMinimo(props.caracteristica.tipo);
    const tituloMaximo = tituloTamanhoMaximo(props.caracteristica.tipo);
    const mostrarTamanho = mostrarTamanhos(props.caracteristica.tipo);
    const mostrarCasasDecimais$1 = mostrarCasasDecimais(props.caracteristica.tipo);
    const mostrarOpcoes$1 = mostrarOpcoes(props.caracteristica.tipo);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Visualizar Característica" }, {
        default: withCtx(() => [
          createBaseVNode("form", null, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  _hoisted_4,
                  createBaseVNode("input", {
                    id: "nome",
                    class: "form-control",
                    type: "text",
                    value: __props.caracteristica.nome,
                    disabled: ""
                  }, null, 8, _hoisted_5)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("input", {
                    id: "tipo",
                    class: "form-control",
                    type: "text",
                    value: __props.tipos[__props.caracteristica.tipo],
                    disabled: ""
                  }, null, 8, _hoisted_8)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("input", {
                    id: "obrigatorio",
                    class: "form-check-input",
                    type: "checkbox",
                    checked: __props.caracteristica.obrigatorio,
                    disabled: ""
                  }, null, 8, _hoisted_10),
                  _hoisted_11
                ]),
                unref(mostrarTamanho) ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createBaseVNode("label", _hoisted_13, toDisplayString(unref(tituloMinimo)), 1),
                  createBaseVNode("input", {
                    id: "minimo",
                    class: "form-control",
                    type: "number",
                    value: __props.caracteristica.minimo,
                    disabled: ""
                  }, null, 8, _hoisted_14)
                ])) : createCommentVNode("", true),
                unref(mostrarTamanho) ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createBaseVNode("label", _hoisted_16, toDisplayString(unref(tituloMaximo)), 1),
                  createBaseVNode("input", {
                    id: "maximo",
                    class: "form-control",
                    type: "number",
                    value: __props.caracteristica.maximo,
                    disabled: ""
                  }, null, 8, _hoisted_17)
                ])) : createCommentVNode("", true),
                unref(mostrarCasasDecimais$1) ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  _hoisted_19,
                  createBaseVNode("input", {
                    id: "quantidade",
                    class: "form-control",
                    type: "number",
                    value: __props.caracteristica.quantidade,
                    disabled: ""
                  }, null, 8, _hoisted_20)
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          unref(mostrarOpcoes$1) ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            class: "mt-5",
            caracteristica: __props.caracteristica
          }, null, 8, ["caracteristica"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlzdWFsaXphci0xYjJmYzg1Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluL0VxdWlwYW1lbnRvcy9DYXJhY3RlcmlzdGljYXMvVmlzdWFsaXphci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL0xheW91dHMvQWRtaW5MYXlvdXQudnVlJ1xuaW1wb3J0IExpc3RhT3Bjb2VzIGZyb20gJy4vT3Bjb2VzL0xpc3RhT3Bjb2VzLnZ1ZSdcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuL0NvbXBvbmVudGVzL0hlbHBlcidcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgY2FyYWN0ZXJpc3RpY2E6IE9iamVjdCxcbiAgICB0aXBvczogQXJyYXksXG59KVxuY29uc3QgdGl0dWxvTWluaW1vID0gaGVscGVyLnRpdHVsb1RhbWFuaG9NaW5pbW8ocHJvcHMuY2FyYWN0ZXJpc3RpY2EudGlwbylcbmNvbnN0IHRpdHVsb01heGltbyA9IGhlbHBlci50aXR1bG9UYW1hbmhvTWF4aW1vKHByb3BzLmNhcmFjdGVyaXN0aWNhLnRpcG8pXG5jb25zdCBtb3N0cmFyVGFtYW5obyA9IGhlbHBlci5tb3N0cmFyVGFtYW5ob3MocHJvcHMuY2FyYWN0ZXJpc3RpY2EudGlwbylcbmNvbnN0IG1vc3RyYXJDYXNhc0RlY2ltYWlzID0gaGVscGVyLm1vc3RyYXJDYXNhc0RlY2ltYWlzKHByb3BzLmNhcmFjdGVyaXN0aWNhLnRpcG8pXG5jb25zdCBtb3N0cmFyT3Bjb2VzID0gaGVscGVyLm1vc3RyYXJPcGNvZXMocHJvcHMuY2FyYWN0ZXJpc3RpY2EudGlwbylcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPEFkbWluTGF5b3V0IHRpdHVsbz1cIlZpc3VhbGl6YXIgQ2FyYWN0ZXLDrXN0aWNhXCI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vbWVcIj5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5vbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgOnZhbHVlPVwiY2FyYWN0ZXJpc3RpY2Eubm9tZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXBvXCI+VGlwbzo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGlwb1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiA6dmFsdWU9XCJ0aXBvc1tjYXJhY3RlcmlzdGljYS50aXBvXVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTMgZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwib2JyaWdhdG9yaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiA6Y2hlY2tlZD1cImNhcmFjdGVyaXN0aWNhLm9icmlnYXRvcmlvXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwib2JyaWdhdG9yaW9cIj5PYnJpZ2F0w7NyaW88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9zdHJhclRhbWFuaG9cIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtaW5pbW9cIj57eyB0aXR1bG9NaW5pbW8gfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibWluaW1vXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgOnZhbHVlPVwiY2FyYWN0ZXJpc3RpY2EubWluaW1vXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtb3N0cmFyVGFtYW5ob1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heGltb1wiPnt7IHRpdHVsb01heGltbyB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXhpbW9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIiA6dmFsdWU9XCJjYXJhY3RlcmlzdGljYS5tYXhpbW9cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm1vc3RyYXJDYXNhc0RlY2ltYWlzXCIgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicXVhbnRpZGFkZVwiPlF1YW50aWRhZGUgZGUgQ2FzYXMgRGVjaW1haXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicXVhbnRpZGFkZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIDp2YWx1ZT1cImNhcmFjdGVyaXN0aWNhLnF1YW50aWRhZGVcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8TGlzdGFPcGNvZXMgdi1pZj1cIm1vc3RyYXJPcGNvZXNcIiBjbGFzcz1cIm10LTVcIiA6Y2FyYWN0ZXJpc3RpY2E9XCJjYXJhY3RlcmlzdGljYVwiIC8+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsiaGVscGVyLnRpdHVsb1RhbWFuaG9NaW5pbW8iLCJoZWxwZXIudGl0dWxvVGFtYW5ob01heGltbyIsImhlbHBlci5tb3N0cmFyVGFtYW5ob3MiLCJtb3N0cmFyQ2FzYXNEZWNpbWFpcyIsImhlbHBlci5tb3N0cmFyQ2FzYXNEZWNpbWFpcyIsIm1vc3RyYXJPcGNvZXMiLCJoZWxwZXIubW9zdHJhck9wY29lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLFVBQU0sZUFBZUEsb0JBQTJCLE1BQU0sZUFBZSxJQUFJO0FBQ3pFLFVBQU0sZUFBZUMsb0JBQTJCLE1BQU0sZUFBZSxJQUFJO0FBQ3pFLFVBQU0saUJBQWlCQyxnQkFBdUIsTUFBTSxlQUFlLElBQUk7QUFDdkUsVUFBTUMseUJBQXVCQyxxQkFBNEIsTUFBTSxlQUFlLElBQUk7QUFDbEYsVUFBTUMsa0JBQWdCQyxjQUFxQixNQUFNLGVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

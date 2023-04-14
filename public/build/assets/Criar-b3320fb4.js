import { d as defineComponent, v, s as computed, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment, z as vModelCheckbox, l as createCommentVNode, g as withModifiers } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { t as tituloTamanhoMinimo, a as tituloTamanhoMaximo, m as mostrarTamanhos, b as mostrarCasasDecimais } from "./Helper-dc2fcd27.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "tipo" }, "Tipo:", -1);
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "mb-3 form-check form-switch" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", {
  class: "form-check-label",
  for: "obrigatorio"
}, "Obrigatório", -1);
const _hoisted_11 = {
  key: 0,
  class: "mb-3"
};
const _hoisted_12 = { for: "minimo" };
const _hoisted_13 = {
  key: 1,
  class: "mb-3"
};
const _hoisted_14 = { for: "maximo" };
const _hoisted_15 = {
  key: 2,
  class: "mb-3"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", { for: "quantidade" }, "Quantidade de Casas Decimais", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Criar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Criar",
  props: {
    categoria: Object,
    tipos: Array
  },
  setup(__props) {
    const props = __props;
    const form = v({
      nome: "",
      tipo: null,
      obrigatorio: false,
      minimo: null,
      maximo: null,
      quantidade: null
    });
    function submit() {
      form.post(`/admin/categorias/${props.categoria.id}/caracteristicas/salvar`);
    }
    const tituloMinimo = computed(() => tituloTamanhoMinimo(form.tipo));
    const tituloMaximo = computed(() => tituloTamanhoMaximo(form.tipo));
    const mostrarTamanho = computed(() => mostrarTamanhos(form.tipo));
    const mostrarCasasDecimais$1 = computed(() => mostrarCasasDecimais(form.tipo));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Nova Característica" }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  _hoisted_5,
                  withDirectives(createBaseVNode("input", {
                    id: "nome",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).nome = $event),
                    class: "form-control",
                    type: "text",
                    required: ""
                  }, null, 512), [
                    [vModelText, unref(form).nome]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.nome
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  withDirectives(createBaseVNode("select", {
                    id: "tipo",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).tipo = $event),
                    name: "tipo",
                    class: "form-select",
                    required: ""
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tipos, (tipo, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: index,
                        value: index
                      }, toDisplayString(tipo), 9, _hoisted_8);
                    }), 128))
                  ], 512), [
                    [vModelSelect, unref(form).tipo]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.tipo
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  withDirectives(createBaseVNode("input", {
                    id: "obrigatorio",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).obrigatorio = $event),
                    class: "form-check-input",
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, unref(form).obrigatorio]
                  ]),
                  _hoisted_10
                ]),
                unref(mostrarTamanho) ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  createBaseVNode("label", _hoisted_12, toDisplayString(unref(tituloMinimo)), 1),
                  withDirectives(createBaseVNode("input", {
                    id: "minimo",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).minimo = $event),
                    class: "form-control",
                    type: "number"
                  }, null, 512), [
                    [vModelText, unref(form).minimo]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.minimo
                  }, null, 8, ["error"])
                ])) : createCommentVNode("", true),
                unref(mostrarTamanho) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createBaseVNode("label", _hoisted_14, toDisplayString(unref(tituloMaximo)), 1),
                  withDirectives(createBaseVNode("input", {
                    id: "maximo",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).maximo = $event),
                    class: "form-control",
                    type: "number"
                  }, null, 512), [
                    [vModelText, unref(form).maximo]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.maximo
                  }, null, 8, ["error"])
                ])) : createCommentVNode("", true),
                unref(mostrarCasasDecimais$1) ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  _hoisted_16,
                  withDirectives(createBaseVNode("input", {
                    id: "quantidade",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).quantidade = $event),
                    class: "form-control",
                    type: "number"
                  }, null, 512), [
                    [vModelText, unref(form).quantidade]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.quantidade
                  }, null, 8, ["error"])
                ])) : createCommentVNode("", true)
              ]),
              _hoisted_17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JpYXItYjMzMjBmYjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FyYWN0ZXJpc3RpY2FzL0NyaWFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnQHZ1ZS9ydW50aW1lLWNvcmUnXG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnQC9MYXlvdXRzL0FkbWluTGF5b3V0LnZ1ZSdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuL0NvbXBvbmVudGVzL0hlbHBlcidcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgY2F0ZWdvcmlhOiBPYmplY3QsXG4gICAgdGlwb3M6IEFycmF5LFxufSlcbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBub21lOiAnJyxcbiAgICB0aXBvOiBudWxsLFxuICAgIG9icmlnYXRvcmlvOiBmYWxzZSxcbiAgICBtaW5pbW86IG51bGwsXG4gICAgbWF4aW1vOiBudWxsLFxuICAgIHF1YW50aWRhZGU6IG51bGwsXG59KVxuXG5mdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgZm9ybS5wb3N0KGAvYWRtaW4vY2F0ZWdvcmlhcy8ke3Byb3BzLmNhdGVnb3JpYS5pZH0vY2FyYWN0ZXJpc3RpY2FzL3NhbHZhcmApXG59XG5cbmNvbnN0IHRpdHVsb01pbmltbyA9IGNvbXB1dGVkKCgpID0+IGhlbHBlci50aXR1bG9UYW1hbmhvTWluaW1vKGZvcm0udGlwbykpXG5jb25zdCB0aXR1bG9NYXhpbW8gPSBjb21wdXRlZCgoKSA9PiBoZWxwZXIudGl0dWxvVGFtYW5ob01heGltbyhmb3JtLnRpcG8pKVxuY29uc3QgbW9zdHJhclRhbWFuaG8gPSBjb21wdXRlZCgoKSA9PiBoZWxwZXIubW9zdHJhclRhbWFuaG9zKGZvcm0udGlwbykpXG5jb25zdCBtb3N0cmFyQ2FzYXNEZWNpbWFpcyA9IGNvbXB1dGVkKCgpID0+IGhlbHBlci5tb3N0cmFyQ2FzYXNEZWNpbWFpcyhmb3JtLnRpcG8pKVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxBZG1pbkxheW91dCB0aXR1bG89XCJOb3ZhIENhcmFjdGVyw61zdGljYVwiPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub21lXCI+Tm9tZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgdi1tb2RlbD1cImZvcm0ubm9tZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubm9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpcG9cIj5UaXBvOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidGlwb1wiIHYtbW9kZWw9XCJmb3JtLnRpcG9cIiBuYW1lPVwidGlwb1wiIGNsYXNzPVwiZm9ybS1zZWxlY3RcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHRpcG8sIGluZGV4KSBpbiB0aXBvc1wiIDprZXk9XCJpbmRleFwiIDp2YWx1ZT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRpcG8gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy50aXBvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zIGZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm9icmlnYXRvcmlvXCIgdi1tb2RlbD1cImZvcm0ub2JyaWdhdG9yaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJvYnJpZ2F0b3Jpb1wiPk9icmlnYXTDs3JpbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtb3N0cmFyVGFtYW5ob1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1pbmltb1wiPnt7IHRpdHVsb01pbmltbyB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJtaW5pbW9cIiB2LW1vZGVsPVwiZm9ybS5taW5pbW9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubWluaW1vXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm1vc3RyYXJUYW1hbmhvXCIgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4aW1vXCI+e3sgdGl0dWxvTWF4aW1vIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heGltb1wiIHYtbW9kZWw9XCJmb3JtLm1heGltb1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5tYXhpbW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibW9zdHJhckNhc2FzRGVjaW1haXNcIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJxdWFudGlkYWRlXCI+UXVhbnRpZGFkZSBkZSBDYXNhcyBEZWNpbWFpczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJxdWFudGlkYWRlXCIgdi1tb2RlbD1cImZvcm0ucXVhbnRpZGFkZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5xdWFudGlkYWRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmlhclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSIsImhlbHBlci50aXR1bG9UYW1hbmhvTWluaW1vIiwiaGVscGVyLnRpdHVsb1RhbWFuaG9NYXhpbW8iLCJoZWxwZXIubW9zdHJhclRhbWFuaG9zIiwibW9zdHJhckNhc2FzRGVjaW1haXMiLCJoZWxwZXIubW9zdHJhckNhc2FzRGVjaW1haXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFVBQU0sT0FBT0EsRUFBUTtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxJQUFBLENBQ2Y7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUsscUJBQXFCLE1BQU0sVUFBVSwyQkFBMkI7QUFBQSxJQUM5RTtBQUVBLFVBQU0sZUFBZSxTQUFTLE1BQU1DLG9CQUEyQixLQUFLLElBQUksQ0FBQztBQUN6RSxVQUFNLGVBQWUsU0FBUyxNQUFNQyxvQkFBMkIsS0FBSyxJQUFJLENBQUM7QUFDekUsVUFBTSxpQkFBaUIsU0FBUyxNQUFNQyxnQkFBdUIsS0FBSyxJQUFJLENBQUM7QUFDdkUsVUFBTUMseUJBQXVCLFNBQVMsTUFBTUMscUJBQTRCLEtBQUssSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

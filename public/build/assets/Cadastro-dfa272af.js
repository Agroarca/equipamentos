import { d as defineComponent, r as ref, x as onMounted, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-ff006dff.js";
import { M as Mask } from "./InputMask-4af8a144.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "equipamento" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "card card-default" };
const _hoisted_4 = { class: "card-body" };
const _hoisted_5 = { class: "mb-3" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("label", { for: "titulo" }, "Título", -1);
const _hoisted_7 = { class: "mb-3" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("label", { for: "valor" }, "Valor", -1);
const _hoisted_9 = { class: "mb-3" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", { for: "ano" }, "Ano", -1);
const _hoisted_11 = { class: "mb-3" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Marca", -1);
const _hoisted_13 = { class: "mb-3" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Modelo", -1);
const _hoisted_15 = { class: "mb-3" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", { for: "categoria" }, "Categoria", -1);
const _hoisted_17 = { class: "mb-3" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", { for: "categoria" }, "Status", -1);
const _hoisted_19 = ["value"];
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cadastro",
  props: {
    equipamento: Object,
    statusEquipamentos: Array
  },
  setup(__props) {
    const props = __props;
    const elValor = ref(null);
    onMounted(() => {
      Mask.preco(elValor.value);
    });
    const form = v({
      id: props.equipamento.id,
      titulo: props.equipamento.titulo,
      valor: props.equipamento.valor,
      ano: props.equipamento.ano,
      marca: props.equipamento.modelo.marca.nome,
      modelo: props.equipamento.modelo.nome,
      categoria: props.equipamento.categoria.nome,
      status: props.equipamento.status
    });
    function submit() {
      form.post(`/admin/equipamentos/${props.equipamento.id}/atualizar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Equipamento" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_sfc_main$1, {
              class: "mb-4 d-flex flex-roll justify-content-center",
              equipamento: __props.equipamento,
              paginaAtual: "cadastro"
            }, null, 8, ["equipamento"]),
            createBaseVNode("form", {
              onSubmit: withModifiers(submit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _hoisted_6,
                    withDirectives(createBaseVNode("input", {
                      id: "titulo",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).titulo = $event),
                      class: "form-control",
                      type: "text",
                      required: ""
                    }, null, 512), [
                      [vModelText, unref(form).titulo]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.titulo
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    withDirectives(createBaseVNode("input", {
                      id: "valor",
                      ref_key: "elValor",
                      ref: elValor,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).valor = $event),
                      class: "form-control",
                      type: "text",
                      required: ""
                    }, null, 512), [
                      [vModelText, unref(form).valor]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.valor
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    _hoisted_10,
                    withDirectives(createBaseVNode("input", {
                      id: "ano",
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).ano = $event),
                      class: "form-control",
                      type: "text",
                      required: ""
                    }, null, 512), [
                      [vModelText, unref(form).ano]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.ano
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    _hoisted_12,
                    withDirectives(createBaseVNode("input", {
                      id: "ano",
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).marca = $event),
                      class: "form-control",
                      type: "text",
                      disabled: ""
                    }, null, 512), [
                      [vModelText, unref(form).marca]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.marca
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    _hoisted_14,
                    withDirectives(createBaseVNode("input", {
                      id: "ano",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).modelo = $event),
                      class: "form-control",
                      type: "text",
                      disabled: ""
                    }, null, 512), [
                      [vModelText, unref(form).modelo]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.modelo
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    _hoisted_16,
                    withDirectives(createBaseVNode("input", {
                      id: "ano",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).categoria = $event),
                      class: "form-control",
                      type: "text",
                      disabled: ""
                    }, null, 512), [
                      [vModelText, unref(form).categoria]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.categoria
                    }, null, 8, ["error"])
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    _hoisted_18,
                    withDirectives(createBaseVNode("select", {
                      id: "status",
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).status = $event),
                      class: "form-select",
                      required: ""
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.statusEquipamentos, (status, index) => {
                        return openBlock(), createElementBlock("option", {
                          key: index,
                          value: index
                        }, toDisplayString(status), 9, _hoisted_19);
                      }), 128))
                    ], 512), [
                      [vModelSelect, unref(form).status]
                    ]),
                    createVNode(_sfc_main$2, {
                      error: unref(form).errors.categoria
                    }, null, 8, ["error"])
                  ])
                ]),
                _hoisted_20
              ])
            ], 40, _hoisted_2)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FkYXN0cm8tZGZhMjcyYWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FkYXN0cm8vRXF1aXBhbWVudG8vRWRpdGFyL0NhZGFzdHJvLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCB7IHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9BZG1pbkxheW91dC52dWUnXG5pbXBvcnQgTmF2ZWdhY2FvIGZyb20gJy4vQ29tcG9uZW50ZXMvTmF2ZWdhY2FvLnZ1ZSdcbmltcG9ydCBNYXNrIGZyb20gJ0AvQ29tcG9uZW50ZXMvSGVscGVyL0lucHV0TWFzaydcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvRm9ybUVycm9yLnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgZXF1aXBhbWVudG86IE9iamVjdCxcbiAgICBzdGF0dXNFcXVpcGFtZW50b3M6IEFycmF5LFxufSlcblxuY29uc3QgZWxWYWxvciA9IHJlZihudWxsKVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICAgIE1hc2sucHJlY28oZWxWYWxvci52YWx1ZSlcbn0pXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBpZDogcHJvcHMuZXF1aXBhbWVudG8uaWQsXG4gICAgdGl0dWxvOiBwcm9wcy5lcXVpcGFtZW50by50aXR1bG8sXG4gICAgdmFsb3I6IHByb3BzLmVxdWlwYW1lbnRvLnZhbG9yLFxuICAgIGFubzogcHJvcHMuZXF1aXBhbWVudG8uYW5vLFxuICAgIG1hcmNhOiBwcm9wcy5lcXVpcGFtZW50by5tb2RlbG8ubWFyY2Eubm9tZSxcbiAgICBtb2RlbG86IHByb3BzLmVxdWlwYW1lbnRvLm1vZGVsby5ub21lLFxuICAgIGNhdGVnb3JpYTogcHJvcHMuZXF1aXBhbWVudG8uY2F0ZWdvcmlhLm5vbWUsXG4gICAgc3RhdHVzOiBwcm9wcy5lcXVpcGFtZW50by5zdGF0dXMsXG59KVxuXG5mdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgZm9ybS5wb3N0KGAvYWRtaW4vZXF1aXBhbWVudG9zLyR7cHJvcHMuZXF1aXBhbWVudG8uaWR9L2F0dWFsaXphcmApXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxBZG1pbkxheW91dCB0aXR1bG89XCJFZGl0YXIgRXF1aXBhbWVudG9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVxdWlwYW1lbnRvXCI+XG4gICAgICAgICAgICA8TmF2ZWdhY2FvIGNsYXNzPVwibWItNCBkLWZsZXggZmxleC1yb2xsIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA6ZXF1aXBhbWVudG89XCJlcXVpcGFtZW50b1wiIHBhZ2luYUF0dWFsPVwiY2FkYXN0cm9cIiAvPlxuICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdHVsb1wiPlTDrXR1bG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRpdHVsb1wiIHYtbW9kZWw9XCJmb3JtLnRpdHVsb1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLnRpdHVsb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZhbG9yXCI+VmFsb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInZhbG9yXCIgcmVmPVwiZWxWYWxvclwiIHYtbW9kZWw9XCJmb3JtLnZhbG9yXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMudmFsb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhbm9cIj5Bbm88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFub1wiIHYtbW9kZWw9XCJmb3JtLmFub1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmFub1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hcmNhX2lkXCI+TWFyY2E8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFub1wiIHYtbW9kZWw9XCJmb3JtLm1hcmNhXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubWFyY2FcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXJjYV9pZFwiPk1vZGVsbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYW5vXCIgdi1tb2RlbD1cImZvcm0ubW9kZWxvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubW9kZWxvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcmlhXCI+Q2F0ZWdvcmlhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhbm9cIiB2LW1vZGVsPVwiZm9ybS5jYXRlZ29yaWFcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5jYXRlZ29yaWFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXRlZ29yaWFcIj5TdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0dXNcIiB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIiBjbGFzcz1cImZvcm0tc2VsZWN0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIoc3RhdHVzLCBpbmRleCkgaW4gc3RhdHVzRXF1aXBhbWVudG9zXCIgOmtleT1cImluZGV4XCIgOnZhbHVlPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHN0YXR1cyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmNhdGVnb3JpYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFNLFVBQUEsVUFBVSxJQUFJLElBQUk7QUFFeEIsY0FBVSxNQUFNO0FBQ1AsV0FBQSxNQUFNLFFBQVEsS0FBSztBQUFBLElBQUEsQ0FDM0I7QUFFRCxVQUFNLE9BQU9BLEVBQVE7QUFBQSxNQUNqQixJQUFJLE1BQU0sWUFBWTtBQUFBLE1BQ3RCLFFBQVEsTUFBTSxZQUFZO0FBQUEsTUFDMUIsT0FBTyxNQUFNLFlBQVk7QUFBQSxNQUN6QixLQUFLLE1BQU0sWUFBWTtBQUFBLE1BQ3ZCLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTTtBQUFBLE1BQ3RDLFFBQVEsTUFBTSxZQUFZLE9BQU87QUFBQSxNQUNqQyxXQUFXLE1BQU0sWUFBWSxVQUFVO0FBQUEsTUFDdkMsUUFBUSxNQUFNLFlBQVk7QUFBQSxJQUFBLENBQzdCO0FBRUQsYUFBUyxTQUFTO0FBQ2QsV0FBSyxLQUFLLHVCQUF1QixNQUFNLFlBQVksY0FBYztBQUFBLElBQ3JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

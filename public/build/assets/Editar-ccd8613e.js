import { d as defineComponent, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment, g as withModifiers } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$2 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-f5bb18a6.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Marca", -1);
const _hoisted_8 = { class: "mb-3" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("label", { for: "status" }, "Status", -1);
const _hoisted_10 = ["value"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editar",
  props: {
    modelo: Object,
    statusCadastro: Array
  },
  setup(__props) {
    const props = __props;
    const form = v({
      nome: props.modelo.nome,
      marca_id: props.modelo.marca_id,
      status: props.modelo.status
    });
    function submit() {
      form.post(`/admin/modelos/${props.modelo.id}/atualizar`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Modelo" }, {
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
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).marca_id,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).marca_id = $event),
                    placeholder: __props.modelo.marca.nome,
                    href: "/admin/marcas/pesquisar",
                    preBusca: true
                  }, null, 8, ["modelValue", "placeholder"]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.marca_id
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_8, [
                  _hoisted_9,
                  withDirectives(createBaseVNode("select", {
                    id: "status",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).status = $event),
                    class: "form-select",
                    required: ""
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.statusCadastro, (status, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: index,
                        value: index
                      }, toDisplayString(status), 9, _hoisted_10);
                    }), 128))
                  ], 512), [
                    [vModelSelect, unref(form).status]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.status
                  }, null, 8, ["error"])
                ])
              ]),
              _hoisted_11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGFyLWNjZDg2MTNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW4vRXF1aXBhbWVudG9zL0NhZGFzdHJvL01vZGVsby9FZGl0YXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJ0AvTGF5b3V0cy9BZG1pbkxheW91dC52dWUnXG5pbXBvcnQgRm9ybUVycm9yIGZyb20gJ0AvQ29tcG9uZW50ZXMvTGF5b3V0L0Zvcm1zL0Zvcm1FcnJvci52dWUnXG5pbXBvcnQgU2VsZWN0QWpheCBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9TZWxlY3RBamF4LnZ1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgbW9kZWxvOiBPYmplY3QsXG4gICAgc3RhdHVzQ2FkYXN0cm86IEFycmF5LFxufSlcblxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIG5vbWU6IHByb3BzLm1vZGVsby5ub21lLFxuICAgIG1hcmNhX2lkOiBwcm9wcy5tb2RlbG8ubWFyY2FfaWQsXG4gICAgc3RhdHVzOiBwcm9wcy5tb2RlbG8uc3RhdHVzLFxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdChgL2FkbWluL21vZGVsb3MvJHtwcm9wcy5tb2RlbG8uaWR9L2F0dWFsaXphcmApXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxBZG1pbkxheW91dCB0aXR1bG89XCJFZGl0YXIgTW9kZWxvXCI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vbWVcIj5Ob21lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5vbWVcIiB2LW1vZGVsPVwiZm9ybS5ub21lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5ub21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFyY2FfaWRcIj5NYXJjYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0QWpheFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm1hcmNhX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJtb2RlbG8ubWFyY2Eubm9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9tYXJjYXMvcGVzcXVpc2FyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJlQnVzY2E9XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubWFyY2FfaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5TdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1c1wiIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiIGNsYXNzPVwiZm9ybS1zZWxlY3RcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHN0YXR1cywgaW5kZXgpIGluIHN0YXR1c0NhZGFzdHJvXCIgOmtleT1cImluZGV4XCIgOnZhbHVlPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc3RhdHVzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTYWx2YXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvQWRtaW5MYXlvdXQ+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInVzZUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFVBQU0sT0FBT0EsRUFBUTtBQUFBLE1BQ2pCLE1BQU0sTUFBTSxPQUFPO0FBQUEsTUFDbkIsVUFBVSxNQUFNLE9BQU87QUFBQSxNQUN2QixRQUFRLE1BQU0sT0FBTztBQUFBLElBQUEsQ0FDeEI7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssa0JBQWtCLE1BQU0sT0FBTyxjQUFjO0FBQUEsSUFDM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

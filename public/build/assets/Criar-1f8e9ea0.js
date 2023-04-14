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
  }, " Criar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Criar",
  props: {
    statusCadastro: Array
  },
  setup(__props) {
    const STATUS_CADASTRO_CRIADO = 0;
    const form = v({
      nome: "",
      marca_id: "",
      status: STATUS_CADASTRO_CRIADO
    });
    function submit() {
      form.post("/admin/modelos/salvar");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Novo Modelo" }, {
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
                    placeholder: "Selecione uma marca",
                    href: "/admin/marcas/pesquisar",
                    preBusca: true
                  }, null, 8, ["modelValue"]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JpYXItMWY4ZTllYTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FkYXN0cm8vTW9kZWxvL0NyaWFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL0xheW91dHMvQWRtaW5MYXlvdXQudnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IFNlbGVjdEFqYXggZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvU2VsZWN0QWpheC52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIHN0YXR1c0NhZGFzdHJvOiBBcnJheSxcbn0pXG5cbmNvbnN0IFNUQVRVU19DQURBU1RST19DUklBRE8gPSAwXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICBub21lOiAnJyxcbiAgICBtYXJjYV9pZDogJycsXG4gICAgc3RhdHVzOiBTVEFUVVNfQ0FEQVNUUk9fQ1JJQURPLFxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdCgnL2FkbWluL21vZGVsb3Mvc2FsdmFyJylcbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8QWRtaW5MYXlvdXQgdGl0dWxvPVwiTm92byBNb2RlbG9cIj5cbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9tZVwiPk5vbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIHYtbW9kZWw9XCJmb3JtLm5vbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLm5vbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXJjYV9pZFwiPk1hcmNhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RBamF4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubWFyY2FfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNpb25lIHVtYSBtYXJjYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9tYXJjYXMvcGVzcXVpc2FyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJlQnVzY2E9XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMubWFyY2FfaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0dXNcIj5TdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInN0YXR1c1wiIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiIGNsYXNzPVwiZm9ybS1zZWxlY3RcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHN0YXR1cywgaW5kZXgpIGluIHN0YXR1c0NhZGFzdHJvXCIgOmtleT1cImluZGV4XCIgOnZhbHVlPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc3RhdHVzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3IgOmVycm9yPVwiZm9ybS5lcnJvcnMuc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmlhclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9BZG1pbkxheW91dD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsidXNlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFVBQU0seUJBQXlCO0FBRS9CLFVBQU0sT0FBT0EsRUFBUTtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxJQUFBLENBQ1g7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUssdUJBQXVCO0FBQUEsSUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

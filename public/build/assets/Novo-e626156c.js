import { d as defineComponent, s as computed, v, r as ref, x as onMounted, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, k as createElementBlock, p as vModelSelect, m as renderList, t as toDisplayString, F as Fragment } from "./app-0ff9bc90.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$4 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-f5bb18a6.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-07e11f97.js";
import { M as Mask } from "./InputMask-4af8a144.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 cadastrar-equipamento" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Cadastrar Novo Equipamento ", -1);
const _hoisted_3 = ["onSubmit"];
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "titulo" }, "Título", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "valor" }, "Valor", -1);
const _hoisted_8 = { class: "mb-3" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("label", { for: "ano" }, "Ano", -1);
const _hoisted_10 = { class: "mb-3" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Marca", -1);
const _hoisted_12 = ["value"];
const _hoisted_13 = { class: "mb-3" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Modelo", -1);
const _hoisted_15 = ["value"];
const _hoisted_16 = { class: "mb-3" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("label", { for: "categoria_id" }, "Categoria", -1);
const _hoisted_18 = ["value"];
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("button", {
  type: "submit",
  class: "btn btn-primary"
}, " Continuar ", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Novo",
  props: {
    categorias: Object,
    equipamento: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const props = __props;
    const placeholderModelo = computed(() => form.marca ? "Selecione um Modelo" : "Selecione uma Marca");
    const form = v({
      id: (_a = props.equipamento) == null ? void 0 : _a.id,
      titulo: (_b = props.equipamento) == null ? void 0 : _b.titulo,
      valor: (_c = props.equipamento) == null ? void 0 : _c.valor,
      ano: (_d = props.equipamento) == null ? void 0 : _d.ano,
      modelo_id: (_f = (_e = props.equipamento) == null ? void 0 : _e.modelo) == null ? void 0 : _f.id,
      marca_id: (_i = (_h = (_g = props.equipamento) == null ? void 0 : _g.modelo) == null ? void 0 : _h.marca) == null ? void 0 : _i.id,
      categoria_id: (_j = props.equipamento) == null ? void 0 : _j.categoria_id
    });
    const elValor = ref(null);
    onMounted(() => {
      Mask.preco(elValor.value);
    });
    function submit() {
      form.post("/equipamento/salvar");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Cadastrar Equipamento" }, {
        default: withCtx(() => {
          var _a2, _b2, _c2, _d2;
          return [
            createBaseVNode("div", _hoisted_1, [
              _hoisted_2,
              createVNode(_sfc_main$2, {
                class: "mb-3 d-flex justify-content-center",
                passoAtual: 1,
                passoCadastro: ((_a2 = __props.equipamento) == null ? void 0 : _a2.passo_cadastro) ?? 0,
                equipamento: __props.equipamento
              }, null, 8, ["passoCadastro", "equipamento"]),
              createBaseVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createBaseVNode("div", _hoisted_4, [
                  _hoisted_5,
                  withDirectives(createBaseVNode("input", {
                    id: "titulo",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).titulo = $event),
                    class: "form-control",
                    type: "text",
                    required: ""
                  }, null, 512), [
                    [vModelText, unref(form).titulo]
                  ]),
                  createVNode(_sfc_main$3, {
                    error: unref(form).errors.titulo
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
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
                  createVNode(_sfc_main$3, {
                    error: unref(form).errors.valor
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_8, [
                  _hoisted_9,
                  withDirectives(createBaseVNode("input", {
                    id: "ano",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).ano = $event),
                    class: "form-control",
                    type: "text",
                    required: ""
                  }, null, 512), [
                    [vModelText, unref(form).ano]
                  ]),
                  createVNode(_sfc_main$3, {
                    error: unref(form).errors.ano
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  _hoisted_11,
                  !((_c2 = (_b2 = __props.equipamento) == null ? void 0 : _b2.modelo) == null ? void 0 : _c2.marca) ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    modelValue: unref(form).marca_id,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).marca_id = $event),
                    placeholder: "Selecione uma marca",
                    href: "/admin/marcas/pesquisar"
                  }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("input", {
                    key: 1,
                    id: "ano",
                    value: __props.equipamento.modelo.marca.nome,
                    class: "form-control",
                    type: "text",
                    disabled: ""
                  }, null, 8, _hoisted_12)),
                  createVNode(_sfc_main$3, {
                    error: unref(form).errors.modelo_id
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_13, [
                  _hoisted_14,
                  !((_d2 = __props.equipamento) == null ? void 0 : _d2.modelo) ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    modelValue: unref(form).modelo_id,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).modelo_id = $event),
                    disabled: !unref(form).marca_id,
                    placeholder: unref(placeholderModelo),
                    href: `/admin/modelos/pesquisar/${unref(form).marca_id}`
                  }, null, 8, ["modelValue", "disabled", "placeholder", "href"])) : (openBlock(), createElementBlock("input", {
                    key: 1,
                    id: "ano",
                    value: __props.equipamento.modelo.marca.nome,
                    class: "form-control",
                    type: "text",
                    disabled: ""
                  }, null, 8, _hoisted_15)),
                  createVNode(_sfc_main$3, {
                    error: unref(form).errors.modelo_id
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_16, [
                  _hoisted_17,
                  withDirectives(createBaseVNode("select", {
                    id: "categoria_id",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).categoria_id = $event),
                    class: "form-select",
                    required: ""
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.categorias, (categoria, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: index,
                        value: index
                      }, toDisplayString(categoria), 9, _hoisted_18);
                    }), 128))
                  ], 512), [
                    [vModelSelect, unref(form).categoria_id]
                  ])
                ]),
                _hoisted_19
              ], 40, _hoisted_3)
            ])
          ];
        }),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92by1lNjI2MTU2Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL1BhZ2VzL1NpdGUvRXF1aXBhbWVudG8vQ2FkYXN0cmFyL05vdm8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IHsgY29tcHV0ZWQsIHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IFNlbGVjdEFqYXggZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvU2VsZWN0QWpheC52dWUnXG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tICdAL0xheW91dHMvU2l0ZUxheW91dC52dWUnXG5pbXBvcnQgTmF2ZWdhY2FvIGZyb20gJy4vQ29tcG9uZW50ZXMvTmF2ZWdhY2FvLnZ1ZSdcbmltcG9ydCBNYXNrIGZyb20gJ0AvQ29tcG9uZW50ZXMvSGVscGVyL0lucHV0TWFzaydcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgY2F0ZWdvcmlhczogT2JqZWN0LFxuICAgIGVxdWlwYW1lbnRvOiBPYmplY3QsXG59KVxuXG5jb25zdCBwbGFjZWhvbGRlck1vZGVsbyA9IGNvbXB1dGVkKCgpID0+IChmb3JtLm1hcmNhID8gJ1NlbGVjaW9uZSB1bSBNb2RlbG8nIDogJ1NlbGVjaW9uZSB1bWEgTWFyY2EnKSlcblxuY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIGlkOiBwcm9wcy5lcXVpcGFtZW50bz8uaWQsXG4gICAgdGl0dWxvOiBwcm9wcy5lcXVpcGFtZW50bz8udGl0dWxvLFxuICAgIHZhbG9yOiBwcm9wcy5lcXVpcGFtZW50bz8udmFsb3IsXG4gICAgYW5vOiBwcm9wcy5lcXVpcGFtZW50bz8uYW5vLFxuICAgIG1vZGVsb19pZDogcHJvcHMuZXF1aXBhbWVudG8/Lm1vZGVsbz8uaWQsXG4gICAgbWFyY2FfaWQ6IHByb3BzLmVxdWlwYW1lbnRvPy5tb2RlbG8/Lm1hcmNhPy5pZCxcbiAgICBjYXRlZ29yaWFfaWQ6IHByb3BzLmVxdWlwYW1lbnRvPy5jYXRlZ29yaWFfaWQsXG59KVxuXG5jb25zdCBlbFZhbG9yID0gcmVmKG51bGwpXG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gICAgTWFzay5wcmVjbyhlbFZhbG9yLnZhbHVlKVxufSlcblxuZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGZvcm0ucG9zdCgnL2VxdWlwYW1lbnRvL3NhbHZhcicpXG59XG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPFNpdGVMYXlvdXQgdGl0dWxvPVwiQ2FkYXN0cmFyIEVxdWlwYW1lbnRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItNjAwIGNhZGFzdHJhci1lcXVpcGFtZW50b1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0dWxvIHRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICBDYWRhc3RyYXIgTm92byBFcXVpcGFtZW50b1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxOYXZlZ2FjYW8gY2xhc3M9XCJtYi0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgOnBhc3NvQXR1YWw9XCIxXCIgOnBhc3NvQ2FkYXN0cm89XCJlcXVpcGFtZW50bz8ucGFzc29fY2FkYXN0cm8gPz8gMFwiIDplcXVpcGFtZW50bz1cImVxdWlwYW1lbnRvXCIgLz5cbiAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXR1bG9cIj5Uw610dWxvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0dWxvXCIgdi1tb2RlbD1cImZvcm0udGl0dWxvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLnRpdHVsb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInZhbG9yXCI+VmFsb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ2YWxvclwiIHJlZj1cImVsVmFsb3JcIiB2LW1vZGVsPVwiZm9ybS52YWxvclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy52YWxvclwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFub1wiPkFubzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFub1wiIHYtbW9kZWw9XCJmb3JtLmFub1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5hbm9cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXJjYV9pZFwiPk1hcmNhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEFqYXggdi1pZj1cIiFlcXVpcGFtZW50bz8ubW9kZWxvPy5tYXJjYVwiIHYtbW9kZWw9XCJmb3JtLm1hcmNhX2lkXCIgcGxhY2Vob2xkZXI9XCJTZWxlY2lvbmUgdW1hIG1hcmNhXCIgaHJlZj1cIi9hZG1pbi9tYXJjYXMvcGVzcXVpc2FyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtZWxzZSBpZD1cImFub1wiIDp2YWx1ZT1cImVxdWlwYW1lbnRvLm1vZGVsby5tYXJjYS5ub21lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLm1vZGVsb19pZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hcmNhX2lkXCI+TW9kZWxvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEFqYXggdi1pZj1cIiFlcXVpcGFtZW50bz8ubW9kZWxvXCIgdi1tb2RlbD1cImZvcm0ubW9kZWxvX2lkXCIgOmRpc2FibGVkPVwiIWZvcm0ubWFyY2FfaWRcIiA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlck1vZGVsb1wiIDpocmVmPVwiYC9hZG1pbi9tb2RlbG9zL3Blc3F1aXNhci8ke2Zvcm0ubWFyY2FfaWR9YFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LWVsc2UgaWQ9XCJhbm9cIiA6dmFsdWU9XCJlcXVpcGFtZW50by5tb2RlbG8ubWFyY2Eubm9tZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5tb2RlbG9faWRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXRlZ29yaWFfaWRcIj5DYXRlZ29yaWE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcmlhX2lkXCIgdi1tb2RlbD1cImZvcm0uY2F0ZWdvcmlhX2lkXCIgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIihjYXRlZ29yaWEsIGluZGV4KSBpbiBjYXRlZ29yaWFzXCIgOmtleT1cImluZGV4XCIgOnZhbHVlPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjYXRlZ29yaWEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBDb250aW51YXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9TaXRlTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxVQUFNLG9CQUFvQixTQUFTLE1BQU8sS0FBSyxRQUFRLHdCQUF3QixxQkFBc0I7QUFFckcsVUFBTSxPQUFPQSxFQUFRO0FBQUEsTUFDakIsS0FBSSxXQUFNLGdCQUFOLG1CQUFtQjtBQUFBLE1BQ3ZCLFNBQVEsV0FBTSxnQkFBTixtQkFBbUI7QUFBQSxNQUMzQixRQUFPLFdBQU0sZ0JBQU4sbUJBQW1CO0FBQUEsTUFDMUIsTUFBSyxXQUFNLGdCQUFOLG1CQUFtQjtBQUFBLE1BQ3hCLFlBQVcsaUJBQU0sZ0JBQU4sbUJBQW1CLFdBQW5CLG1CQUEyQjtBQUFBLE1BQ3RDLFdBQVUsdUJBQU0sZ0JBQU4sbUJBQW1CLFdBQW5CLG1CQUEyQixVQUEzQixtQkFBa0M7QUFBQSxNQUM1QyxlQUFjLFdBQU0sZ0JBQU4sbUJBQW1CO0FBQUEsSUFBQSxDQUNwQztBQUVLLFVBQUEsVUFBVSxJQUFJLElBQUk7QUFFeEIsY0FBVSxNQUFNO0FBQ1AsV0FBQSxNQUFNLFFBQVEsS0FBSztBQUFBLElBQUEsQ0FDM0I7QUFFRCxhQUFTLFNBQVM7QUFDZCxXQUFLLEtBQUsscUJBQXFCO0FBQUEsSUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

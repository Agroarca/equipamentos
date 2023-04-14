import { d as defineComponent, s as computed, v, r as ref, x as onMounted, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, k as createElementBlock, p as vModelSelect, m as renderList, t as toDisplayString, F as Fragment } from "./app-7261d323.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-b3b1e8bd.js";
import { _ as _sfc_main$4 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-ef0f2bfb.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-54df8edf.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-3d233652.js";
import { M as Mask } from "./InputMask-0214c019.js";
import "./_plugin-vue_export-helper-85f18738.js";
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
//# sourceMappingURL=Novo-406dcba8.js.map

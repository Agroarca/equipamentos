import { d as defineComponent, v, s as computed, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment, z as vModelCheckbox, l as createCommentVNode, g as withModifiers } from "./app-262f55c5.js";
import { A as AdminLayout } from "./AdminLayout-59296aa0.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-0b2cdf09.js";
import { t as tituloTamanhoMinimo, a as tituloTamanhoMaximo, m as mostrarTamanhos, b as mostrarCasasDecimais } from "./Helper-dc2fcd27.js";
import "./_plugin-vue_export-helper-43755360.js";
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
//# sourceMappingURL=Criar-d438fe7c.js.map

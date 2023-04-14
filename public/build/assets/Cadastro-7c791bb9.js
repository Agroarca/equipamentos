import { d as defineComponent, r as ref, x as onMounted, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, g as withModifiers, b as withDirectives, e as vModelText, u as unref, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment } from "./app-ed22f974.js";
import { A as AdminLayout } from "./AdminLayout-946f09b1.js";
import { _ as _sfc_main$1 } from "./Navegacao.vue_vue_type_script_setup_true_lang-73345e72.js";
import { M as Mask } from "./InputMask-11192eae.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-bc13d592.js";
import "./_plugin-vue_export-helper-c43da2e0.js";
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
//# sourceMappingURL=Cadastro-7c791bb9.js.map

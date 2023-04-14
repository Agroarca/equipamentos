import { d as defineComponent, r as ref, s as computed, x as onMounted, v, y as watch, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment, g as withModifiers, j as axios } from "./app-ed22f974.js";
import { A as AdminLayout } from "./AdminLayout-946f09b1.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-bc13d592.js";
import { M as Mask } from "./InputMask-11192eae.js";
import { _ as _sfc_main$2 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-d882455c.js";
import "./_plugin-vue_export-helper-c43da2e0.js";
import "./index-2530c752.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "titulo" }, "Título", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "valor" }, "Valor", -1);
const _hoisted_8 = { class: "mb-3" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("label", { for: "ano" }, "Ano", -1);
const _hoisted_10 = { class: "mb-3" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Marca", -1);
const _hoisted_12 = { class: "mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "marca_id" }, "Modelo", -1);
const _hoisted_14 = { class: "mb-3" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", { for: "categoria_id" }, "Categoria", -1);
const _hoisted_16 = ["value"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Criar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Criar",
  props: {
    categorias: Object
  },
  setup(__props) {
    const elValor = ref(null);
    let marca;
    let modelo;
    const placeholderModelo = computed(() => form.marca_id ? "Selecione um Modelo" : "Selecione uma marca");
    onMounted(() => {
      Mask.preco(elValor.value);
    });
    const form = v({
      titulo: "",
      valor: "",
      ano: "",
      marca_id: "",
      modelo_id: "",
      categoria_id: ""
    });
    watch(() => form.marca_id, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        form.modelo_id = "";
      }
    });
    async function submit() {
      loader.show();
      if (!form.marca_id) {
        await salvarMarca();
      }
      if (!form.modelo_id) {
        await salvarModelo();
      }
      form.post("/admin/equipamentos/salvar", { onFinish: () => loader.hide() });
    }
    function criarNovaMarca(search) {
      marca = search;
    }
    function criarNovoModelo(search) {
      modelo = search;
    }
    async function salvarMarca() {
      let response = await axios.post("/admin/marcas/salvar/ajax", {
        nome: marca
      });
      form.marca_id = response.data.id;
    }
    async function salvarModelo() {
      let response = await axios.post("/admin/modelos/salvar/ajax", {
        nome: modelo,
        marca_id: form.marca_id
      });
      form.modelo_id = response.data.id;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Novo Equipamento" }, {
        default: withCtx(() => [
          createBaseVNode("form", {
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
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
                  createVNode(_sfc_main$1, {
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
                  createVNode(_sfc_main$1, {
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
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.ano
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  _hoisted_11,
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).marca_id,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).marca_id = $event),
                    placeholder: "Selecione uma marca",
                    href: "/admin/marcas/pesquisar",
                    preBusca: true,
                    criarDinamica: true,
                    onCriarNovaOpcao: criarNovaMarca
                  }, null, 8, ["modelValue"]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.modelo_id
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_12, [
                  _hoisted_13,
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).modelo_id,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).modelo_id = $event),
                    disabled: !(unref(form).marca_id || unref(marca)),
                    placeholder: unref(placeholderModelo),
                    href: unref(form).marca_id ? `/admin/modelos/pesquisar/${unref(form).marca_id}` : null,
                    preBusca: true,
                    criarDinamica: true,
                    onCriarNovaOpcao: criarNovoModelo
                  }, null, 8, ["modelValue", "disabled", "placeholder", "href"]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.modelo_id
                  }, null, 8, ["error"])
                ]),
                createBaseVNode("div", _hoisted_14, [
                  _hoisted_15,
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
                      }, toDisplayString(categoria), 9, _hoisted_16);
                    }), 128))
                  ], 512), [
                    [vModelSelect, unref(form).categoria_id]
                  ]),
                  createVNode(_sfc_main$1, {
                    error: unref(form).errors.categoria_id
                  }, null, 8, ["error"])
                ])
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
//# sourceMappingURL=Criar-321d5482.js.map

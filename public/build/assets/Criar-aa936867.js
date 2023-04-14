import { d as defineComponent, r as ref, s as computed, x as onMounted, v, y as watch, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, p as vModelSelect, k as createElementBlock, m as renderList, t as toDisplayString, F as Fragment, g as withModifiers, j as axios } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { M as Mask } from "./InputMask-4af8a144.js";
import { _ as _sfc_main$2 } from "./SelectAjax.vue_vue_type_script_setup_true_lang-f5bb18a6.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JpYXItYWE5MzY4NjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FkYXN0cm8vRXF1aXBhbWVudG8vQ3JpYXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICdAL0xheW91dHMvQWRtaW5MYXlvdXQudnVlJ1xuaW1wb3J0IEZvcm1FcnJvciBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9Gb3JtRXJyb3IudnVlJ1xuaW1wb3J0IE1hc2sgZnJvbSAnQC9Db21wb25lbnRlcy9IZWxwZXIvSW5wdXRNYXNrJ1xuaW1wb3J0IFNlbGVjdEFqYXggZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvRm9ybXMvU2VsZWN0QWpheC52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGNhdGVnb3JpYXM6IE9iamVjdCxcbn0pXG5cbmNvbnN0IGVsVmFsb3IgPSByZWYobnVsbClcblxubGV0IG1hcmNhXG5sZXQgbW9kZWxvXG5cbmNvbnN0IHBsYWNlaG9sZGVyTW9kZWxvID0gY29tcHV0ZWQoKCkgPT4gKGZvcm0ubWFyY2FfaWQgPyAnU2VsZWNpb25lIHVtIE1vZGVsbycgOiAnU2VsZWNpb25lIHVtYSBtYXJjYScpKVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICAgIE1hc2sucHJlY28oZWxWYWxvci52YWx1ZSlcbn0pXG5cbmNvbnN0IGZvcm0gPSB1c2VGb3JtKHtcbiAgICB0aXR1bG86ICcnLFxuICAgIHZhbG9yOiAnJyxcbiAgICBhbm86ICcnLFxuICAgIG1hcmNhX2lkOiAnJyxcbiAgICBtb2RlbG9faWQ6ICcnLFxuICAgIGNhdGVnb3JpYV9pZDogJycsXG59KVxuXG53YXRjaCgoKSA9PiBmb3JtLm1hcmNhX2lkLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICBmb3JtLm1vZGVsb19pZCA9ICcnXG4gICAgfVxufSlcblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGxvYWRlci5zaG93KClcbiAgICBpZiAoIWZvcm0ubWFyY2FfaWQpIHtcbiAgICAgICAgYXdhaXQgc2FsdmFyTWFyY2EoKVxuICAgIH1cblxuICAgIGlmICghZm9ybS5tb2RlbG9faWQpIHtcbiAgICAgICAgYXdhaXQgc2FsdmFyTW9kZWxvKClcbiAgICB9XG5cbiAgICBmb3JtLnBvc3QoJy9hZG1pbi9lcXVpcGFtZW50b3Mvc2FsdmFyJywgeyBvbkZpbmlzaDogKCkgPT4gbG9hZGVyLmhpZGUoKSB9KVxufVxuXG5mdW5jdGlvbiBjcmlhck5vdmFNYXJjYShzZWFyY2gpIHtcbiAgICBtYXJjYSA9IHNlYXJjaFxufVxuXG5mdW5jdGlvbiBjcmlhck5vdm9Nb2RlbG8oc2VhcmNoKSB7XG4gICAgbW9kZWxvID0gc2VhcmNoXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhbHZhck1hcmNhKCkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbi9tYXJjYXMvc2FsdmFyL2FqYXgnLCB7XG4gICAgICAgIG5vbWU6IG1hcmNhLFxuICAgIH0pXG5cbiAgICBmb3JtLm1hcmNhX2lkID0gcmVzcG9uc2UuZGF0YS5pZFxufVxuXG5hc3luYyBmdW5jdGlvbiBzYWx2YXJNb2RlbG8oKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluL21vZGVsb3Mvc2FsdmFyL2FqYXgnLCB7XG4gICAgICAgIG5vbWU6IG1vZGVsbyxcbiAgICAgICAgbWFyY2FfaWQ6IGZvcm0ubWFyY2FfaWQsXG4gICAgfSlcblxuICAgIGZvcm0ubW9kZWxvX2lkID0gcmVzcG9uc2UuZGF0YS5pZFxufVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxBZG1pbkxheW91dCB0aXR1bG89XCJOb3ZvIEVxdWlwYW1lbnRvXCI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdHVsb1wiPlTDrXR1bG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0dWxvXCIgdi1tb2RlbD1cImZvcm0udGl0dWxvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy50aXR1bG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2YWxvclwiPlZhbG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInZhbG9yXCIgcmVmPVwiZWxWYWxvclwiIHYtbW9kZWw9XCJmb3JtLnZhbG9yXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy52YWxvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFub1wiPkFubzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhbm9cIiB2LW1vZGVsPVwiZm9ybS5hbm9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmFub1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1hcmNhX2lkXCI+TWFyY2E8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEFqYXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5tYXJjYV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2lvbmUgdW1hIG1hcmNhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL21hcmNhcy9wZXNxdWlzYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwcmVCdXNjYT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjcmlhckRpbmFtaWNhPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNyaWFyTm92YU9wY2FvPVwiY3JpYXJOb3ZhTWFyY2FcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvciA6ZXJyb3I9XCJmb3JtLmVycm9ycy5tb2RlbG9faWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXJjYV9pZFwiPk1vZGVsbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0QWpheFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm1vZGVsb19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIShmb3JtLm1hcmNhX2lkIHx8IG1hcmNhKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJNb2RlbG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiZm9ybS5tYXJjYV9pZCA/IGAvYWRtaW4vbW9kZWxvcy9wZXNxdWlzYXIvJHtmb3JtLm1hcmNhX2lkfWAgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJlQnVzY2E9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y3JpYXJEaW5hbWljYT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjcmlhck5vdmFPcGNhbz1cImNyaWFyTm92b01vZGVsb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLm1vZGVsb19pZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhdGVnb3JpYV9pZFwiPkNhdGVnb3JpYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcmlhX2lkXCIgdi1tb2RlbD1cImZvcm0uY2F0ZWdvcmlhX2lkXCIgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIoY2F0ZWdvcmlhLCBpbmRleCkgaW4gY2F0ZWdvcmlhc1wiIDprZXk9XCJpbmRleFwiIDp2YWx1ZT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNhdGVnb3JpYSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yIDplcnJvcj1cImZvcm0uZXJyb3JzLmNhdGVnb3JpYV9pZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JpYXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvQWRtaW5MYXlvdXQ+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInVzZUZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU0sVUFBQSxVQUFVLElBQUksSUFBSTtBQUVwQixRQUFBO0FBQ0EsUUFBQTtBQUVKLFVBQU0sb0JBQW9CLFNBQVMsTUFBTyxLQUFLLFdBQVcsd0JBQXdCLHFCQUFzQjtBQUV4RyxjQUFVLE1BQU07QUFDUCxXQUFBLE1BQU0sUUFBUSxLQUFLO0FBQUEsSUFBQSxDQUMzQjtBQUVELFVBQU0sT0FBT0EsRUFBUTtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLGNBQWM7QUFBQSxJQUFBLENBQ2pCO0FBRUQsVUFBTSxNQUFNLEtBQUssVUFBVSxDQUFDLFVBQVUsYUFBYTtBQUMvQyxVQUFJLGFBQWEsVUFBVTtBQUN2QixhQUFLLFlBQVk7QUFBQSxNQUNyQjtBQUFBLElBQUEsQ0FDSDtBQUVELG1CQUFlLFNBQVM7QUFDcEIsYUFBTyxLQUFLO0FBQ1IsVUFBQSxDQUFDLEtBQUssVUFBVTtBQUNoQixjQUFNLFlBQVk7QUFBQSxNQUN0QjtBQUVJLFVBQUEsQ0FBQyxLQUFLLFdBQVc7QUFDakIsY0FBTSxhQUFhO0FBQUEsTUFDdkI7QUFFSyxXQUFBLEtBQUssOEJBQThCLEVBQUUsVUFBVSxNQUFNLE9BQU8sUUFBUTtBQUFBLElBQzdFO0FBRUEsYUFBUyxlQUFlLFFBQVE7QUFDcEIsY0FBQTtBQUFBLElBQ1o7QUFFQSxhQUFTLGdCQUFnQixRQUFRO0FBQ3BCLGVBQUE7QUFBQSxJQUNiO0FBRUEsbUJBQWUsY0FBYztBQUN6QixVQUFJLFdBQVcsTUFBTSxNQUFNLEtBQUssNkJBQTZCO0FBQUEsUUFDekQsTUFBTTtBQUFBLE1BQUEsQ0FDVDtBQUVJLFdBQUEsV0FBVyxTQUFTLEtBQUs7QUFBQSxJQUNsQztBQUVBLG1CQUFlLGVBQWU7QUFDMUIsVUFBSSxXQUFXLE1BQU0sTUFBTSxLQUFLLDhCQUE4QjtBQUFBLFFBQzFELE1BQU07QUFBQSxRQUNOLFVBQVUsS0FBSztBQUFBLE1BQUEsQ0FDbEI7QUFFSSxXQUFBLFlBQVksU0FBUyxLQUFLO0FBQUEsSUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

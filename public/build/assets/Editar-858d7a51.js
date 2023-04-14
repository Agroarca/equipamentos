import { d as defineComponent, r as ref, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, b as withDirectives, e as vModelText, u as unref, f as createVNode, g as withModifiers, h as createTextVNode } from "./app-0ff9bc90.js";
import { A as AdminLayout } from "./AdminLayout-47a4936f.js";
import { _ as _sfc_main$1 } from "./FormError.vue_vue_type_script_setup_true_lang-609805c4.js";
import { _ as _sfc_main$2 } from "./AlterarCategoriaMae.vue_vue_type_script_setup_true_lang-7a3370e3.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
import "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
const _hoisted_1 = ["onSubmit"];
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "mb-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Nome", -1);
const _hoisted_6 = { class: "mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "nome" }, "Categoria Mãe", -1);
const _hoisted_8 = { class: "d-flex" };
const _hoisted_9 = { class: "flex-grow-1" };
const _hoisted_10 = ["value"];
const _hoisted_11 = { class: "ms-2" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-rotate" }, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "card-footer" }, [
  /* @__PURE__ */ createBaseVNode("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Salvar ")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Editar",
  props: {
    categoria: Object
  },
  setup(__props) {
    const props = __props;
    const alterarCategoria = ref(null);
    const form = v({
      nome: props.categoria.nome,
      categoria_mae_id: props.categoria.categoria_mae_id
    });
    function submit() {
      form.post(`/admin/categorias/${props.categoria.id}/atualizar`);
    }
    function openModal() {
      alterarCategoria.value.show();
    }
    function moverCategoria(categoriaId) {
      form.categoria_mae_id = categoriaId;
      submit();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, { titulo: "Editar Categoria" }, {
        default: withCtx(() => {
          var _a;
          return [
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
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("input", {
                          id: "nome",
                          class: "form-control",
                          type: "text",
                          value: (_a = __props.categoria.categoria_mae) == null ? void 0 : _a.nome,
                          disabled: ""
                        }, null, 8, _hoisted_10)
                      ]),
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("button", {
                          type: "button",
                          class: "btn btn-primary",
                          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => openModal(), ["prevent"]))
                        }, [
                          _hoisted_12,
                          createTextVNode(" Mover ")
                        ])
                      ])
                    ])
                  ])
                ]),
                _hoisted_13
              ])
            ], 40, _hoisted_1),
            createVNode(_sfc_main$2, {
              ref_key: "alterarCategoria",
              ref: alterarCategoria,
              categoria: __props.categoria,
              onMoverCategoria: moverCategoria
            }, null, 8, ["categoria"])
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
//# sourceMappingURL=Editar-858d7a51.js.map

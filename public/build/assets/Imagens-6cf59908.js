import { d as defineComponent, r as ref, v, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, f as createVNode, k as createElementBlock, t as toDisplayString, l as createCommentVNode, m as renderList, h as createTextVNode, u as unref, n as ne, F as Fragment, q as normalizeClass, b as withDirectives, e as vModelText } from "./app-ed22f974.js";
import { _ as _sfc_main$4 } from "./Modal.vue_vue_type_script_setup_true_lang-8c6af2ab.js";
import { _ as _sfc_main$3 } from "./FormError.vue_vue_type_script_setup_true_lang-bc13d592.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-cfbeff38.js";
import { _ as _sfc_main$2 } from "./Navegacao.vue_vue_type_script_setup_true_lang-34c265e9.js";
import "./_plugin-vue_export-helper-c43da2e0.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container-600 cadastrar-equipamento imagens" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "titulo text-center mb-3" }, " Imagens do Equipamento ", -1);
const _hoisted_3 = {
  key: 0,
  class: "row mb-3"
};
const _hoisted_4 = { class: "alert alert-warning" };
const _hoisted_5 = {
  for: "erro",
  class: "imagem"
};
const _hoisted_6 = { class: "my-3" };
const _hoisted_7 = ["src", "alt"];
const _hoisted_8 = {
  key: 0,
  class: "alert alert-warning"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "Nenhuma imagem adicionada", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "mt-3" };
const _hoisted_12 = { class: "mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "descricao" }, "Descrição", -1);
const _hoisted_14 = { class: "mb-3" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", { for: "imagem" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Imagens",
  props: {
    equipamento: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const modal = ref(null);
    const form = v({
      descricao: "",
      imagem: {}
    });
    function adicionar() {
      modal.value.show();
    }
    function upload() {
      form.post(`/equipamento/${props.equipamento.id}/imagens/salvar`, {
        onSuccess: () => {
          modal.value.hide();
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Cadastrar Imagem" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createVNode(_sfc_main$2, {
              class: "mb-3",
              passoAtual: 2,
              passoCadastro: __props.equipamento.passo_cadastro,
              equipamento: __props.equipamento
            }, null, 8, ["passoCadastro", "equipamento"]),
            __props.errors.imagem ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("label", _hoisted_5, toDisplayString(__props.errors.imagem), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamento.imagens, (imagem) => {
                return openBlock(), createElementBlock("div", {
                  key: imagem.id,
                  class: "imagem"
                }, [
                  createBaseVNode("img", {
                    src: imagem.url,
                    alt: imagem.descricao
                  }, null, 8, _hoisted_7),
                  createBaseVNode("p", null, toDisplayString(imagem.descricao), 1),
                  createVNode(unref(ne), {
                    href: `/equipamento/${__props.equipamento.id}/imagens/${imagem.id}/excluir`,
                    class: "btn btn-danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Excluir ")
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]);
              }), 128)),
              __props.equipamento.imagens.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_8, _hoisted_10)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary me-3 mb-3",
                onClick: _cache[0] || (_cache[0] = ($event) => adicionar())
              }, " Adicionar Imagem "),
              createVNode(unref(ne), {
                href: `/equipamento/${__props.equipamento.id}/imagens/continuar`,
                class: normalizeClass(["btn btn-primary", { disabled: __props.equipamento.imagens.length == 0 }])
              }, {
                default: withCtx(() => [
                  createTextVNode(" Continuar ")
                ]),
                _: 1
              }, 8, ["href", "class"])
            ])
          ]),
          createVNode(_sfc_main$4, {
            id: "modal_" + __props.equipamento.id,
            ref_key: "modal",
            ref: modal,
            title: "Adicionar Imagem"
          }, {
            footer: withCtx(() => [
              createBaseVNode("button", {
                type: "submit",
                class: "btn btn-primary",
                onClick: _cache[3] || (_cache[3] = ($event) => upload())
              }, " Adicionar ")
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_12, [
                _hoisted_13,
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).descricao = $event),
                  type: "text",
                  name: "descricao",
                  class: "form-control"
                }, null, 512), [
                  [vModelText, unref(form).descricao]
                ]),
                createVNode(_sfc_main$3, {
                  error: unref(form).errors.descricao
                }, null, 8, ["error"])
              ]),
              createBaseVNode("div", _hoisted_14, [
                _hoisted_15,
                createBaseVNode("input", {
                  type: "file",
                  name: "imagem",
                  class: "form-control form-control-file",
                  onInput: _cache[2] || (_cache[2] = ($event) => unref(form).imagem = $event.target.files[0])
                }, null, 32),
                createVNode(_sfc_main$3, {
                  error: unref(form).errors.imagem
                }, null, 8, ["error"])
              ])
            ]),
            _: 1
          }, 8, ["id"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Imagens-6cf59908.js.map

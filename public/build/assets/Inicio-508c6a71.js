import { d as defineComponent, r as ref, v, k as createElementBlock, a as createBaseVNode, F as Fragment, m as renderList, l as createCommentVNode, f as createVNode, w as withCtx, o as openBlock, t as toDisplayString, h as createTextVNode, u as unref, n as ne, b as withDirectives, e as vModelText } from "./app-ed22f974.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang-8c6af2ab.js";
import { _ as _sfc_main$2 } from "./FormError.vue_vue_type_script_setup_true_lang-bc13d592.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "card-header" }, [
  /* @__PURE__ */ createBaseVNode("h5", { class: "card-title" }, " Imagens ")
], -1);
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = { class: "row mb-3" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "Nenhuma imagem adicionada", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { class: "mb-3" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", { for: "descricao" }, null, -1);
const _hoisted_12 = { class: "mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "imagem" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    equipamento: Object
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
      form.post(`/admin/equipamentos/${props.equipamento.id}/imagens/adicionar`, {
        onSuccess: () => {
          modal.value.hide();
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: _cache[0] || (_cache[0] = ($event) => adicionar())
            }, " Adicionar Imagem ")
          ]),
          createBaseVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamento.imagens, (imagem) => {
              return openBlock(), createElementBlock("div", {
                key: imagem.id,
                class: "col-12 col-lg-6 col-xl-4 mb-3"
              }, [
                createBaseVNode("img", {
                  class: "card-img-top",
                  src: imagem.url,
                  alt: imagem.descricao
                }, null, 8, _hoisted_6),
                createBaseVNode("p", null, toDisplayString(imagem.descricao), 1),
                createVNode(unref(ne), {
                  href: `/admin/equipamentos/${__props.equipamento.id}/imagens/${imagem.id}/deletar`,
                  class: "btn btn-danger"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Excluir ")
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]);
            }), 128)),
            __props.equipamento.imagens.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)) : createCommentVNode("", true)
          ])
        ]),
        createVNode(_sfc_main$1, {
          id: "modal_" + __props.equipamento.id,
          ref_key: "modal",
          ref: modal,
          title: "Adicionar Imagem"
        }, {
          footer: withCtx(() => [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: _cache[3] || (_cache[3] = ($event) => upload())
            }, " Adicionar ")
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).descricao = $event),
                type: "text",
                name: "descricao",
                class: "form-control"
              }, null, 512), [
                [vModelText, unref(form).descricao]
              ]),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.descricao
              }, null, 8, ["error"])
            ]),
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createBaseVNode("input", {
                type: "file",
                name: "imagem",
                class: "form-control-file",
                onInput: _cache[2] || (_cache[2] = ($event) => unref(form).imagem = $event.target.files[0])
              }, null, 32),
              createVNode(_sfc_main$2, {
                error: unref(form).errors.imagem
              }, null, 8, ["error"])
            ])
          ]),
          _: 1
        }, 8, ["id"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Inicio-508c6a71.js.map

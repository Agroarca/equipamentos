import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, t as toDisplayString, k as createElementBlock, m as renderList, l as createCommentVNode, f as createVNode, h as createTextVNode, u as unref, n as ne, F as Fragment } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "container conversas" };
const _hoisted_2 = { class: "lista" };
const _hoisted_3 = { class: "infos" };
const _hoisted_4 = { class: "nome" };
const _hoisted_5 = {
  key: 0,
  class: "mensagens_nao_lidas"
};
const _hoisted_6 = { class: "botao" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "alert alert-danger" }, " Nenhuma Conversa encontrada ", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Conversas",
  props: {
    equipamento: Object,
    conversas: Object
  },
  setup(__props) {
    function getQuantidadeNaoLidas(conversa) {
      var _a;
      return ((_a = conversa.visualizacao[0]) == null ? void 0 : _a.mensagens_nao_visualizadas) ?? 0;
    }
    function getNomeNaoLidas(conversa) {
      const naoLidas = getQuantidadeNaoLidas(conversa);
      if (naoLidas === 1) {
        return `${naoLidas} mensagem não lida`;
      }
      return `${naoLidas} mensagens não lidas`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        titulo: `Conversas de ${__props.equipamento.titulo}`
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h2", null, "Conversas de " + toDisplayString(__props.equipamento.titulo), 1),
            createBaseVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.conversas.data, (conversa) => {
                return openBlock(), createElementBlock("div", {
                  key: conversa.id,
                  class: "conversa"
                }, [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("span", _hoisted_4, toDisplayString(conversa.usuario.nome), 1),
                    getQuantidadeNaoLidas(conversa) > 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(getNomeNaoLidas(conversa)), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(unref(ne), {
                      class: "btn btn-primary",
                      href: `/conversa/${conversa.id}`
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Acessar ")
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ])
                ]);
              }), 128)),
              __props.conversas.data.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      }, 8, ["titulo"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Conversas-e0a68379.js.map

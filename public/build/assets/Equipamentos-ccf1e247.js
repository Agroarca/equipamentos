import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, k as createElementBlock, m as renderList, t as toDisplayString, h as createTextVNode, f as createVNode, u as unref, n as ne, l as createCommentVNode, F as Fragment } from "./app-0ff9bc90.js";
import { _ as _sfc_main$3 } from "./Paginacao.vue_vue_type_script_setup_true_lang-dca6110c.js";
import { _ as _sfc_main$1 } from "./SiteLayout.vue_vue_type_script_setup_true_lang-35065bdd.js";
import { _ as _sfc_main$2 } from "./Formatacao.vue_vue_type_script_setup_true_lang-2cf469b7.js";
import "./_plugin-vue_export-helper-af6bd5fd.js";
import "./index-2530c752.js";
import "./InputMask-4af8a144.js";
const _hoisted_1 = { class: "container equipamentos" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = { class: "informacoes" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Motivo da Reprovação", -1);
const _hoisted_5 = {
  key: 0,
  class: "badge mensagens"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Equipamentos",
  props: {
    equipamentos: Object,
    status: Array
  },
  setup(__props) {
    const STATUS_APROVADO = 2;
    const STATUS_REPROVADO = 5;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { titulo: "Meus Equipamentos" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamentos.data, (equipamento) => {
              var _a, _b;
              return openBlock(), createElementBlock("div", {
                key: equipamento.id,
                class: "equipamento"
              }, [
                createBaseVNode("img", {
                  class: "imagem",
                  src: ((_a = equipamento.imagens[0]) == null ? void 0 : _a.url) ?? "/img/Placeholder.png",
                  alt: ((_b = equipamento.imagens[0]) == null ? void 0 : _b.descricao) ?? "Imagem do produto"
                }, null, 8, _hoisted_2),
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("h3", null, toDisplayString(equipamento.titulo), 1),
                  createBaseVNode("span", null, "Modelo: " + toDisplayString(equipamento.modelo.marca.nome) + " / " + toDisplayString(equipamento.modelo.nome), 1),
                  createBaseVNode("span", null, [
                    createTextVNode("Preço: "),
                    createVNode(_sfc_main$2, {
                      tipo: "preco",
                      valor: equipamento.valor
                    }, null, 8, ["valor"])
                  ]),
                  createBaseVNode("span", null, "Status: " + toDisplayString(__props.status[equipamento.status]), 1)
                ]),
                equipamento.status == STATUS_REPROVADO ? (openBlock(), createBlock(unref(ne), {
                  key: 0,
                  href: `/equipamento/reprovado/${equipamento.id}`,
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 2
                }, 1032, ["href"])) : createCommentVNode("", true),
                equipamento.status == STATUS_APROVADO ? (openBlock(), createBlock(unref(ne), {
                  key: 1,
                  href: `/conversa/equipamento/${equipamento.id}`,
                  class: "btn btn-primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Conversas "),
                    equipamento.mensagens_nao_visualizadas > 0 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(equipamento.mensagens_nao_visualizadas), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["href"])) : createCommentVNode("", true)
              ]);
            }), 128)),
            createVNode(_sfc_main$3, {
              links: __props.equipamentos.links,
              class: "mt-1"
            }, null, 8, ["links"])
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
//# sourceMappingURL=Equipamentos-ccf1e247.js.map

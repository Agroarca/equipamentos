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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2FzLWUwYTY4Mzc5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9FcXVpcGFtZW50by9Db252ZXJzYS9Db252ZXJzYXMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy92dWUzJ1xuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnQC9MYXlvdXRzL1NpdGVMYXlvdXQudnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBlcXVpcGFtZW50bzogT2JqZWN0LFxuICAgIGNvbnZlcnNhczogT2JqZWN0LFxufSlcblxuZnVuY3Rpb24gZ2V0UXVhbnRpZGFkZU5hb0xpZGFzKGNvbnZlcnNhKSB7XG4gICAgcmV0dXJuIGNvbnZlcnNhLnZpc3VhbGl6YWNhb1swXT8ubWVuc2FnZW5zX25hb192aXN1YWxpemFkYXMgPz8gMFxufVxuXG5mdW5jdGlvbiBnZXROb21lTmFvTGlkYXMoY29udmVyc2EpIHtcbiAgICBjb25zdCBuYW9MaWRhcyA9IGdldFF1YW50aWRhZGVOYW9MaWRhcyhjb252ZXJzYSlcblxuICAgIGlmIChuYW9MaWRhcyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYCR7bmFvTGlkYXN9IG1lbnNhZ2VtIG7Do28gbGlkYWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7bmFvTGlkYXN9IG1lbnNhZ2VucyBuw6NvIGxpZGFzYFxufVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxTaXRlTGF5b3V0IDp0aXR1bG89XCJgQ29udmVyc2FzIGRlICR7ZXF1aXBhbWVudG8udGl0dWxvIH1gXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29udmVyc2FzXCI+XG4gICAgICAgICAgICA8aDI+Q29udmVyc2FzIGRlIHt7IGVxdWlwYW1lbnRvLnRpdHVsbyB9fSA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiY29udmVyc2EgaW4gY29udmVyc2FzLmRhdGFcIiA6a2V5PVwiY29udmVyc2EuaWRcIiBjbGFzcz1cImNvbnZlcnNhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub21lXCI+e3sgY29udmVyc2EudXN1YXJpby5ub21lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImdldFF1YW50aWRhZGVOYW9MaWRhcyhjb252ZXJzYSkgPiAwXCIgY2xhc3M9XCJtZW5zYWdlbnNfbmFvX2xpZGFzXCI+e3sgZ2V0Tm9tZU5hb0xpZGFzKGNvbnZlcnNhKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3Rhb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiA6aHJlZj1cImAvY29udmVyc2EvJHtjb252ZXJzYS5pZH1gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNlc3NhclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjb252ZXJzYXMuZGF0YS5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW5odW1hIENvbnZlcnNhIGVuY29udHJhZGFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9TaXRlTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsYUFBUyxzQkFBc0IsVUFBVTs7QUFDckMsZUFBTyxjQUFTLGFBQWEsQ0FBQyxNQUF2QixtQkFBMEIsK0JBQThCO0FBQUEsSUFDbkU7QUFFQSxhQUFTLGdCQUFnQixVQUFVO0FBQ3pCLFlBQUEsV0FBVyxzQkFBc0IsUUFBUTtBQUUvQyxVQUFJLGFBQWEsR0FBRztBQUNoQixlQUFPLEdBQUc7QUFBQSxNQUNkO0FBRUEsYUFBTyxHQUFHO0FBQUEsSUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

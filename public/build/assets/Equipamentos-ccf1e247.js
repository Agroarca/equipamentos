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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBhbWVudG9zLWNjZjFlMjQ3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvUGFnZXMvU2l0ZS9QZXJmaWwvRXF1aXBhbWVudG9zLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgTGluayB9IGZyb20gJ0BpbmVydGlhanMvdnVlMydcbmltcG9ydCBQYWdpbmFjYW8gZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvTGlzdGFzL1BhZ2luYWNhby52dWUnXG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tICdAL0xheW91dHMvU2l0ZUxheW91dC52dWUnXG5pbXBvcnQgRm9ybWF0YWNhbyBmcm9tICdAL0NvbXBvbmVudGVzL0xheW91dC9IZWxwZXIvRm9ybWF0YWNhby52dWUnXG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGVxdWlwYW1lbnRvczogT2JqZWN0LFxuICAgIHN0YXR1czogQXJyYXksXG59KVxuXG5jb25zdCBTVEFUVVNfQVBST1ZBRE8gPSAyXG5jb25zdCBTVEFUVVNfUkVQUk9WQURPID0gNVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxTaXRlTGF5b3V0IHRpdHVsbz1cIk1ldXMgRXF1aXBhbWVudG9zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZXF1aXBhbWVudG9zXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZXF1aXBhbWVudG8gaW4gZXF1aXBhbWVudG9zLmRhdGFcIiA6a2V5PVwiZXF1aXBhbWVudG8uaWRcIiBjbGFzcz1cImVxdWlwYW1lbnRvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlbVwiXG4gICAgICAgICAgICAgICAgICAgICA6c3JjPVwiZXF1aXBhbWVudG8uaW1hZ2Vuc1swXT8udXJsID8/ICcvaW1nL1BsYWNlaG9sZGVyLnBuZydcIlxuICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImVxdWlwYW1lbnRvLmltYWdlbnNbMF0/LmRlc2NyaWNhbyA/PyAnSW1hZ2VtIGRvIHByb2R1dG8nXCIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hY29lc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3sgZXF1aXBhbWVudG8udGl0dWxvIH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW9kZWxvOiB7eyBlcXVpcGFtZW50by5tb2RlbG8ubWFyY2Eubm9tZSB9fSAvIHt7IGVxdWlwYW1lbnRvLm1vZGVsby5ub21lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmXDp286IDxGb3JtYXRhY2FvIHRpcG89XCJwcmVjb1wiIDp2YWxvcj1cImVxdWlwYW1lbnRvLnZhbG9yXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlN0YXR1czoge3sgc3RhdHVzW2VxdWlwYW1lbnRvLnN0YXR1c10gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8TGluayB2LWlmPVwiZXF1aXBhbWVudG8uc3RhdHVzID09IFNUQVRVU19SRVBST1ZBRE9cIlxuICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYC9lcXVpcGFtZW50by9yZXByb3ZhZG8vJHtlcXVpcGFtZW50by5pZH1gXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb3Rpdm8gZGEgUmVwcm92YcOnw6NvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIHYtaWY9XCJlcXVpcGFtZW50by5zdGF0dXMgPT0gU1RBVFVTX0FQUk9WQURPXCJcbiAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImAvY29udmVyc2EvZXF1aXBhbWVudG8vJHtlcXVpcGFtZW50by5pZH1gXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBDb252ZXJzYXMgPHNwYW4gdi1pZj1cImVxdWlwYW1lbnRvLm1lbnNhZ2Vuc19uYW9fdmlzdWFsaXphZGFzID4gMFwiIGNsYXNzPVwiYmFkZ2UgbWVuc2FnZW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAoZXF1aXBhbWVudG8ubWVuc2FnZW5zX25hb192aXN1YWxpemFkYXMpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQYWdpbmFjYW8gOmxpbmtzPVwiZXF1aXBhbWVudG9zLmxpbmtzXCIgY2xhc3M9XCJtdC0xXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9TaXRlTGF5b3V0PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsVUFBTSxrQkFBa0I7QUFDeEIsVUFBTSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

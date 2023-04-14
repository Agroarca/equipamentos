import { d as defineComponent, c as createBlock, w as withCtx, o as openBlock, a as createBaseVNode, k as createElementBlock, m as renderList, t as toDisplayString, f as createVNode, h as createTextVNode, u as unref, n as ne, F as Fragment, l as createCommentVNode } from "./app-7261d323.js";
import { A as AdminLayout } from "./AdminLayout-044eb12d.js";
import { _ as _sfc_main$1 } from "./Paginacao.vue_vue_type_script_setup_true_lang-d1172721.js";
import "./_plugin-vue_export-helper-85f18738.js";
import "./index-2530c752.js";
const _hoisted_1 = { class: "card card-default" };
const _hoisted_2 = { class: "card-body table-responsive p-0" };
const _hoisted_3 = { class: "table table-striped table-hover" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Título"),
  /* @__PURE__ */ createBaseVNode("th", null, "Categoria"),
  /* @__PURE__ */ createBaseVNode("th", null, "Status"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-pen-to-square pe-1" }, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-eraser pe-1" }, null, -1);
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("td", { colspan: "3" }, " Nenhum registro encontrado ", -1);
const _hoisted_9 = [
  _hoisted_8
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Inicio",
  props: {
    equipamentos: Object,
    statusEquipamentos: Array
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AdminLayout, {
        titulo: "Equipamentos",
        link: "/admin/equipamentos/criar/",
        buttonText: "Novo Equipamento"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("table", _hoisted_3, [
                _hoisted_4,
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.equipamentos.data, (equipamento) => {
                    return openBlock(), createElementBlock("tr", {
                      key: equipamento.id
                    }, [
                      createBaseVNode("td", null, toDisplayString(equipamento.titulo), 1),
                      createBaseVNode("td", null, toDisplayString(equipamento.categoria.nome), 1),
                      createBaseVNode("td", null, toDisplayString(__props.statusEquipamentos[equipamento.status]), 1),
                      createBaseVNode("td", null, [
                        createVNode(unref(ne), {
                          class: "btn btn-primary me-2",
                          href: `/admin/equipamentos/${equipamento.id}/editar`
                        }, {
                          default: withCtx(() => [
                            _hoisted_5,
                            createTextVNode(" Editar ")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(unref(ne), {
                          class: "btn btn-danger",
                          href: `/admin/equipamentos/${equipamento.id}/excluir`
                        }, {
                          default: withCtx(() => [
                            _hoisted_6,
                            createTextVNode(" Excluir ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128)),
                  __props.equipamentos.data.length == 0 ? (openBlock(), createElementBlock("tr", _hoisted_7, _hoisted_9)) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          createVNode(_sfc_main$1, {
            class: "mt-4",
            links: __props.equipamentos.links
          }, null, 8, ["links"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Inicio-50870433.js.map

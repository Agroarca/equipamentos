import { d as defineComponent, r as ref, k as createElementBlock, h as createTextVNode, t as toDisplayString, l as createCommentVNode, u as unref, f as createVNode, w as withCtx, T as Transition, q as normalizeClass, o as openBlock, a as createBaseVNode } from "./app-ed22f974.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang-8c6af2ab.js";
import { r as requiredArgs, t as toDate } from "./index-2530c752.js";
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
  // Math.trunc is not supported by IE
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}
function differenceInSeconds(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
const _hoisted_1 = ["id"];
const _hoisted_2 = {
  key: 0,
  class: "spinner-border spinner-border-sm text-secondary",
  role: "status"
};
const _hoisted_3 = {
  key: 1,
  class: "fa-solid fa-caret-down opcoes"
};
const _hoisted_4 = {
  key: 0,
  class: "menu-container"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("button", {
  type: "button",
  class: "list-group-item list-group-item-danger"
}, "Fechar", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "Deseja realmente excluir esta mensagem?", -1);
const _hoisted_7 = { class: "alert alert-warning" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Mensagem",
  props: {
    mensagem: Object,
    usuarioId: Number,
    mensagensTempoExcluir: Number
  },
  emits: ["excluirMensagem"],
  setup(__props, { emit }) {
    const props = __props;
    const modal = ref(null);
    const menuAberto = ref(false);
    let podeExcluir = ref(getPodeExcluir());
    verificarpodeExcluir();
    function mostrarMenu(e) {
      if (!podeExcluir.value) {
        return;
      }
      menuAberto.value = !menuAberto.value;
      e.stopPropagation();
      window.addEventListener("click", fecharMenu);
    }
    function fecharMenu(e) {
      var _a;
      if (!((_a = document.querySelector(".mensagem .menu-container")) == null ? void 0 : _a.contains(e.target))) {
        menuAberto.value = false;
        window.removeEventListener("click", fecharMenu);
      }
    }
    function excluirMensagem() {
      modal.value.hide();
      emit("excluirMensagem", props.mensagem);
    }
    function abrirModal() {
      modal.value.show();
    }
    function getPodeExcluir() {
      if (props.mensagem.usuario_id !== props.usuarioId) {
        return false;
      }
      if (props.mensagem.loading) {
        return false;
      }
      return differenceInSeconds(/* @__PURE__ */ new Date(), Date.parse(props.mensagem.created_at)) <= props.mensagensTempoExcluir;
    }
    function verificarpodeExcluir() {
      podeExcluir.value = getPodeExcluir();
      if (podeExcluir.value) {
        setTimeout(() => {
          verificarpodeExcluir();
        }, 1e3);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        id: "msg-" + __props.mensagem.id,
        class: normalizeClass(["mensagem", { autor: __props.mensagem.usuario_id == __props.usuarioId }]),
        onClick: mostrarMenu
      }, [
        createTextVNode(toDisplayString(__props.mensagem.mensagem) + " ", 1),
        __props.mensagem.loading ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", true),
        unref(podeExcluir) ? (openBlock(), createElementBlock("i", _hoisted_3)) : createCommentVNode("", true),
        createVNode(Transition, {
          name: "fade-500",
          duration: 500
        }, {
          default: withCtx(() => [
            menuAberto.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createBaseVNode("div", { class: "list-group" }, [
                createBaseVNode("button", {
                  type: "button",
                  class: "list-group-item",
                  onClick: abrirModal
                }, "Excluir mensagem"),
                _hoisted_5
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          id: "modal_" + __props.mensagem.id,
          ref_key: "modal",
          ref: modal,
          title: "Excluir Mensagem"
        }, {
          footer: withCtx(() => [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-danger",
              onClick: excluirMensagem
            }, "Excluir")
          ]),
          default: withCtx(() => [
            _hoisted_6,
            createBaseVNode("p", _hoisted_7, toDisplayString(__props.mensagem.mensagem), 1)
          ]),
          _: 1
        }, 8, ["id"])
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Mensagem.vue_vue_type_script_setup_true_lang-3c810bec.js.map

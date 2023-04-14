import { d as defineComponent, r as ref, x as onMounted, M as Modal, B as onUnmounted, k as createElementBlock, a as createBaseVNode, C as renderSlot, q as normalizeClass, o as openBlock, t as toDisplayString } from "./app-7261d323.js";
const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "modal-content" };
const _hoisted_3 = { class: "modal-header" };
const _hoisted_4 = { class: "modal-title" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("button", {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Fechar"
}, null, -1);
const _hoisted_6 = { class: "modal-body" };
const _hoisted_7 = { class: "modal-footer" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("button", {
  type: "button",
  class: "btn btn-secondary",
  "data-bs-dismiss": "modal"
}, " Fechar ", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  props: {
    id: String,
    title: String,
    modalSizeClass: String
  },
  setup(__props, { expose }) {
    const elModal = ref(null);
    let modal;
    onMounted(() => {
      modal = new Modal(elModal.value);
    });
    onUnmounted(() => {
      modal.hide();
    });
    function show() {
      modal.show();
    }
    function hide() {
      modal.hide();
    }
    expose({
      show,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        ref_key: "elModal",
        ref: elModal,
        class: "modal fade",
        tabindex: "-1"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["modal-dialog", __props.modalSizeClass])
        }, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createBaseVNode("h5", _hoisted_4, toDisplayString(__props.title), 1),
                _hoisted_5
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              renderSlot(_ctx.$slots, "default")
            ]),
            createBaseVNode("div", _hoisted_7, [
              renderSlot(_ctx.$slots, "footer"),
              _hoisted_8
            ])
          ])
        ], 2)
      ], 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Modal.vue_vue_type_script_setup_true_lang-96eb4958.js.map

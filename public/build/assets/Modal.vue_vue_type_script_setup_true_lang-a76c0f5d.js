import { d as defineComponent, r as ref, x as onMounted, M as Modal, B as onUnmounted, k as createElementBlock, a as createBaseVNode, C as renderSlot, q as normalizeClass, o as openBlock, t as toDisplayString } from "./app-0ff9bc90.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwudnVlX3Z1ZV90eXBlX3NjcmlwdF9zZXR1cF90cnVlX2xhbmctYTc2YzBmNWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9Db21wb25lbnRlcy9MYXlvdXQvTW9kYWwudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2Jvb3RzdHJhcCdcbmltcG9ydCB7IG9uTW91bnRlZCwgb25Vbm1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgZWxNb2RhbCA9IHJlZihudWxsKVxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgaWQ6IFN0cmluZyxcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIG1vZGFsU2l6ZUNsYXNzOiBTdHJpbmcsXG59KVxubGV0IG1vZGFsXG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gICAgbW9kYWwgPSBuZXcgTW9kYWwoZWxNb2RhbC52YWx1ZSlcbn0pXG5cbm9uVW5tb3VudGVkKCgpID0+IHtcbiAgICBtb2RhbC5oaWRlKClcbn0pXG5cbmZ1bmN0aW9uIHNob3coKSB7XG4gICAgbW9kYWwuc2hvdygpXG59XG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgbW9kYWwuaGlkZSgpXG59XG5cbmRlZmluZUV4cG9zZSh7XG4gICAgc2hvdyxcbiAgICBoaWRlLFxufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPGRpdiA6aWQ9XCJpZFwiIHJlZj1cImVsTW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiA6Y2xhc3M9XCJtb2RhbFNpemVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkZlY2hhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmVjaGFyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlNLFVBQUEsVUFBVSxJQUFJLElBQUk7QUFNcEIsUUFBQTtBQUVKLGNBQVUsTUFBTTtBQUNKLGNBQUEsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUFBLElBQUEsQ0FDbEM7QUFFRCxnQkFBWSxNQUFNO0FBQ2QsWUFBTSxLQUFLO0FBQUEsSUFBQSxDQUNkO0FBRUQsYUFBUyxPQUFPO0FBQ1osWUFBTSxLQUFLO0FBQUEsSUFDZjtBQUVBLGFBQVMsT0FBTztBQUNaLFlBQU0sS0FBSztBQUFBLElBQ2Y7QUFFYSxXQUFBO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxJQUFBLENBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

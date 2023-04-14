import { d as defineComponent, s as computed, o as openBlock, k as createElementBlock, b as withDirectives, z as vModelCheckbox, u as unref, a as createBaseVNode, A as isRef, l as createCommentVNode, e as vModelText, p as vModelSelect, F as Fragment, m as renderList, t as toDisplayString } from "./app-7261d323.js";
const _hoisted_1 = {
  key: 0,
  class: "form-check form-switch"
};
const _hoisted_2 = ["checked"];
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { key: 3 };
const _hoisted_6 = { key: 4 };
const _hoisted_7 = { key: 5 };
const _hoisted_8 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Valor",
  props: {
    modelValue: null,
    caracteristica: Object
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const name = `caracteristica-${props.caracteristica.id}`;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        __props.caracteristica.tipo == 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
          withDirectives(createBaseVNode("input", {
            id: name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            checked: unref(value),
            class: "form-check-input",
            type: "checkbox",
            name
          }, null, 8, _hoisted_2), [
            [vModelCheckbox, unref(value)]
          ])
        ])) : createCommentVNode("", true),
        __props.caracteristica.tipo == 1 ? (openBlock(), createElementBlock("div", _hoisted_3, [
          withDirectives(createBaseVNode("input", {
            id: name,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(value) ? value.value = $event : null),
            class: "form-control",
            type: "number",
            name
          }, null, 512), [
            [vModelText, unref(value)]
          ])
        ])) : createCommentVNode("", true),
        __props.caracteristica.tipo == 2 ? (openBlock(), createElementBlock("div", _hoisted_4, [
          withDirectives(createBaseVNode("input", {
            id: name,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(value) ? value.value = $event : null),
            class: "form-control",
            type: "number",
            name
          }, null, 512), [
            [vModelText, unref(value)]
          ])
        ])) : createCommentVNode("", true),
        __props.caracteristica.tipo == 3 ? (openBlock(), createElementBlock("div", _hoisted_5, [
          withDirectives(createBaseVNode("input", {
            id: name,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(value) ? value.value = $event : null),
            class: "form-control",
            type: "text",
            name
          }, null, 512), [
            [vModelText, unref(value)]
          ])
        ])) : createCommentVNode("", true),
        __props.caracteristica.tipo == 4 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          withDirectives(createBaseVNode("textarea", {
            id: name,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(value) ? value.value = $event : null),
            class: "form-control",
            name,
            rows: "3"
          }, null, 512), [
            [vModelText, unref(value)]
          ])
        ])) : createCommentVNode("", true),
        __props.caracteristica.tipo == 5 ? (openBlock(), createElementBlock("div", _hoisted_7, [
          withDirectives(createBaseVNode("select", {
            id: name,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(value) ? value.value = $event : null),
            name,
            class: "form-select"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caracteristica.opcoes, (opcao) => {
              return openBlock(), createElementBlock("option", {
                key: opcao.id,
                value: opcao.id
              }, toDisplayString(opcao.nome), 9, _hoisted_8);
            }), 128))
          ], 512), [
            [vModelSelect, unref(value)]
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Valor.vue_vue_type_script_setup_true_lang-87b600d5.js.map

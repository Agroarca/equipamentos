import { d as defineComponent, s as computed, k as createElementBlock, b as withDirectives, z as vModelCheckbox, u as unref, a as createBaseVNode, A as isRef, l as createCommentVNode, e as vModelText, p as vModelSelect, F as Fragment, m as renderList, o as openBlock, t as toDisplayString } from "./app-0ff9bc90.js";
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
  __name: "ValorCaracteristicas",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsb3JDYXJhY3RlcmlzdGljYXMudnVlX3Z1ZV90eXBlX3NjcmlwdF9zZXR1cF90cnVlX2xhbmctN2ZiODMxMTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9FcXVpcGFtZW50b3MvQ2FkYXN0cm8vRXF1aXBhbWVudG8vRWRpdGFyL0NvbXBvbmVudGVzL1ZhbG9yQ2FyYWN0ZXJpc3RpY2FzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuLyogZXNsaW50LWRpc2FibGUgdnVlanMtYWNjZXNzaWJpbGl0eS9mb3JtLWNvbnRyb2wtaGFzLWxhYmVsICovXG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgbW9kZWxWYWx1ZTogbnVsbCxcbiAgICBjYXJhY3RlcmlzdGljYTogT2JqZWN0LFxufSlcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHsoZTogJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWU6IHN0cmluZyk6IHZvaWR9PigpXG5jb25zdCBuYW1lID0gYGNhcmFjdGVyaXN0aWNhLSR7cHJvcHMuY2FyYWN0ZXJpc3RpY2EuaWR9YFxuXG5jb25zdCB2YWx1ZSA9IGNvbXB1dGVkKHtcbiAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgfSxcbiAgICBzZXQodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWwpXG4gICAgfSxcbn0pXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cImNhcmFjdGVyaXN0aWNhLnRpcG8gPT0gMFwiIGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiPlxuICAgICAgICAgICAgPGlucHV0IDppZD1cIm5hbWVcIiB2LW1vZGVsPVwidmFsdWVcIiA6Y2hlY2tlZD1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgOm5hbWU9XCJuYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJjYXJhY3RlcmlzdGljYS50aXBvID09IDFcIj5cbiAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJuYW1lXCIgdi1tb2RlbD1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgOm5hbWU9XCJuYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJjYXJhY3RlcmlzdGljYS50aXBvID09IDJcIj5cbiAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJuYW1lXCIgdi1tb2RlbD1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgOm5hbWU9XCJuYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJjYXJhY3RlcmlzdGljYS50aXBvID09IDNcIj5cbiAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJuYW1lXCIgdi1tb2RlbD1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIDpuYW1lPVwibmFtZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiY2FyYWN0ZXJpc3RpY2EudGlwbyA9PSA0XCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgOmlkPVwibmFtZVwiIHYtbW9kZWw9XCJ2YWx1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOm5hbWU9XCJuYW1lXCIgcm93cz1cIjNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiY2FyYWN0ZXJpc3RpY2EudGlwbyA9PSA1XCI+XG4gICAgICAgICAgICA8c2VsZWN0IDppZD1cIm5hbWVcIiB2LW1vZGVsPVwidmFsdWVcIiA6bmFtZT1cIm5hbWVcIiBjbGFzcz1cImZvcm0tc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wY2FvIGluIGNhcmFjdGVyaXN0aWNhLm9wY29lc1wiIDprZXk9XCJvcGNhby5pZFwiIDp2YWx1ZT1cIm9wY2FvLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG9wY2FvLm5vbWUgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVU0sVUFBQSxPQUFPLGtCQUFrQixNQUFNLGVBQWU7QUFFcEQsVUFBTSxRQUFRLFNBQVM7QUFBQSxNQUNuQixNQUFNO0FBQ0YsZUFBTyxNQUFNO0FBQUEsTUFDakI7QUFBQSxNQUNBLElBQUksS0FBYTtBQUNiLGFBQUsscUJBQXFCLEdBQUc7QUFBQSxNQUNqQztBQUFBLElBQUEsQ0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

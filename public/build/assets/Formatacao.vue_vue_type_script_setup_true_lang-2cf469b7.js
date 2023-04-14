import { M as Mask } from "./InputMask-4af8a144.js";
import { d as defineComponent, r as ref, x as onMounted, o as openBlock, k as createElementBlock, t as toDisplayString } from "./app-0ff9bc90.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Formatacao",
  props: {
    tipo: String,
    valor: String
  },
  setup(__props) {
    const props = __props;
    const elValor = ref(null);
    onMounted(() => {
      Mask[props.tipo](elValor.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "elValor",
        ref: elValor
      }, toDisplayString(__props.valor), 513);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0YWNhby52dWVfdnVlX3R5cGVfc2NyaXB0X3NldHVwX3RydWVfbGFuZy0yY2Y0NjliNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL0NvbXBvbmVudGVzL0xheW91dC9IZWxwZXIvRm9ybWF0YWNhby52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IE1hc2sgZnJvbSAnQC9Db21wb25lbnRlcy9IZWxwZXIvSW5wdXRNYXNrJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICB0aXBvOiBTdHJpbmcsXG4gICAgdmFsb3I6IFN0cmluZyxcbn0pXG5cbmNvbnN0IGVsVmFsb3IgPSByZWYobnVsbClcblxub25Nb3VudGVkKCgpID0+IHtcbiAgICBNYXNrW3Byb3BzLnRpcG9dKGVsVmFsb3IudmFsdWUpXG59KVxuXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxzcGFuIHJlZj1cImVsVmFsb3JcIj57eyB2YWxvciB9fTwvc3Bhbj5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVNNLFVBQUEsVUFBVSxJQUFJLElBQUk7QUFFeEIsY0FBVSxNQUFNO0FBQ1osV0FBSyxNQUFNLElBQUksRUFBRSxRQUFRLEtBQUs7QUFBQSxJQUFBLENBQ2pDOzs7Ozs7Ozs7In0=

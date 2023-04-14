import { d as defineComponent, r as ref, k as createElementBlock, h as createTextVNode, t as toDisplayString, l as createCommentVNode, u as unref, f as createVNode, w as withCtx, T as Transition, q as normalizeClass, o as openBlock, a as createBaseVNode } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVuc2FnZW0udnVlX3Z1ZV90eXBlX3NjcmlwdF9zZXR1cF90cnVlX2xhbmctZDE0MWY1MDkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9QYWdlcy9TaXRlL0VxdWlwYW1lbnRvL0NvbnZlcnNhL0NvbXBvbmVudGVzL01lbnNhZ2VtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyByZWYgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBkaWZmZXJlbmNlSW5TZWNvbmRzIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgTW9kYWwgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvTW9kYWwudnVlJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBtZW5zYWdlbTogT2JqZWN0LFxuICAgIHVzdWFyaW9JZDogTnVtYmVyLFxuICAgIG1lbnNhZ2Vuc1RlbXBvRXhjbHVpcjogTnVtYmVyLFxufSlcbmNvbnN0IG1vZGFsID0gcmVmKG51bGwpXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8eyhlOiAnZXhjbHVpck1lbnNhZ2VtJywgdmFsdWU6IE9iamVjdCk6IHZvaWR9PigpXG5jb25zdCBtZW51QWJlcnRvID0gcmVmKGZhbHNlKVxubGV0IHBvZGVFeGNsdWlyID0gcmVmKGdldFBvZGVFeGNsdWlyKCkpXG52ZXJpZmljYXJwb2RlRXhjbHVpcigpXG5cbmZ1bmN0aW9uIG1vc3RyYXJNZW51KGUpIHtcbiAgICBpZiAoIXBvZGVFeGNsdWlyLnZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBtZW51QWJlcnRvLnZhbHVlID0gIW1lbnVBYmVydG8udmFsdWVcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmVjaGFyTWVudSlcbn1cblxuZnVuY3Rpb24gZmVjaGFyTWVudShlKSB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVuc2FnZW0gLm1lbnUtY29udGFpbmVyJyk/LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBtZW51QWJlcnRvLnZhbHVlID0gZmFsc2VcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmVjaGFyTWVudSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4Y2x1aXJNZW5zYWdlbSgpIHtcbiAgICBtb2RhbC52YWx1ZS5oaWRlKClcbiAgICBlbWl0KCdleGNsdWlyTWVuc2FnZW0nLCBwcm9wcy5tZW5zYWdlbSlcbn1cblxuZnVuY3Rpb24gYWJyaXJNb2RhbCgpIHtcbiAgICBtb2RhbC52YWx1ZS5zaG93KClcbn1cblxuZnVuY3Rpb24gZ2V0UG9kZUV4Y2x1aXIoKSB7XG4gICAgaWYgKHByb3BzLm1lbnNhZ2VtLnVzdWFyaW9faWQgIT09IHByb3BzLnVzdWFyaW9JZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubWVuc2FnZW0ubG9hZGluZykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gZGlmZmVyZW5jZUluU2Vjb25kcyhuZXcgRGF0ZSgpLCBEYXRlLnBhcnNlKHByb3BzLm1lbnNhZ2VtLmNyZWF0ZWRfYXQpKSA8PSBwcm9wcy5tZW5zYWdlbnNUZW1wb0V4Y2x1aXJcbn1cblxuZnVuY3Rpb24gdmVyaWZpY2FycG9kZUV4Y2x1aXIoKSB7XG4gICAgcG9kZUV4Y2x1aXIudmFsdWUgPSBnZXRQb2RlRXhjbHVpcigpXG4gICAgaWYgKHBvZGVFeGNsdWlyLnZhbHVlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmVyaWZpY2FycG9kZUV4Y2x1aXIoKVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8c3BhbiA6aWQ9XCInbXNnLScgKyBtZW5zYWdlbS5pZFwiIGNsYXNzPVwibWVuc2FnZW1cIiA6Y2xhc3M9XCJ7IGF1dG9yOiBtZW5zYWdlbS51c3VhcmlvX2lkID09IHVzdWFyaW9JZCB9XCIgQGNsaWNrPVwibW9zdHJhck1lbnVcIj5cbiAgICAgICAge3sgbWVuc2FnZW0ubWVuc2FnZW0gfX1cbiAgICAgICAgPGRpdiB2LWlmPVwibWVuc2FnZW0ubG9hZGluZ1wiIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1zZWNvbmRhcnlcIiByb2xlPVwic3RhdHVzXCIgLz5cbiAgICAgICAgPGkgdi1pZj1cInBvZGVFeGNsdWlyXCIgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJldC1kb3duIG9wY29lc1wiIC8+XG4gICAgICAgIDxUcmFuc2l0aW9uIG5hbWU9XCJmYWRlLTUwMFwiIDpkdXJhdGlvbj1cIjUwMFwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibWVudUFiZXJ0b1wiIGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIEBjbGljaz1cImFicmlyTW9kYWxcIj5FeGNsdWlyIG1lbnNhZ2VtPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1kYW5nZXJcIj5GZWNoYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgIDxNb2RhbCA6aWQ9XCInbW9kYWxfJyArIG1lbnNhZ2VtLmlkXCIgcmVmPVwibW9kYWxcIiB0aXRsZT1cIkV4Y2x1aXIgTWVuc2FnZW1cIj5cblxuICAgICAgICAgICAgPHA+RGVzZWphIHJlYWxtZW50ZSBleGNsdWlyIGVzdGEgbWVuc2FnZW0/PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+e3sgbWVuc2FnZW0ubWVuc2FnZW0gfX08L3A+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgQGNsaWNrPVwiZXhjbHVpck1lbnNhZ2VtXCI+RXhjbHVpcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8L01vZGFsPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBeUJlLFNBQVMseUJBQXlCLFVBQVUsV0FBVztBQUNwRSxlQUFhLEdBQUcsU0FBUztBQUN6QixTQUFPLE9BQU8sUUFBUSxFQUFFLFFBQU8sSUFBSyxPQUFPLFNBQVMsRUFBRTtBQUN4RDtBQzVCQSxJQUFJLGNBQWM7QUFBQSxFQUNoQixNQUFNLEtBQUs7QUFBQSxFQUNYLE9BQU8sS0FBSztBQUFBLEVBQ1osT0FBTyxLQUFLO0FBQUEsRUFDWixPQUFPLFNBQVMsTUFBTSxPQUFPO0FBQzNCLFdBQU8sUUFBUSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUN2RDtBQUFBO0FBRUg7QUFDQSxJQUFJLHdCQUF3QjtBQUNyQixTQUFTLGtCQUFrQixRQUFRO0FBQ3hDLFNBQU8sU0FBUyxZQUFZLE1BQU0sSUFBSSxZQUFZLHFCQUFxQjtBQUN6RTtBQ2dCZSxTQUFTLG9CQUFvQixVQUFVLFdBQVcsU0FBUztBQUN4RSxlQUFhLEdBQUcsU0FBUztBQUN6QixNQUFJLE9BQU8seUJBQXlCLFVBQVUsU0FBUyxJQUFJO0FBQzNELFNBQU8sa0JBQWtCLFlBQVksUUFBUSxZQUFZLFNBQVMsU0FBUyxRQUFRLGNBQWMsRUFBRSxJQUFJO0FBQ3pHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJNLFVBQUEsUUFBUSxJQUFJLElBQUk7QUFFaEIsVUFBQSxhQUFhLElBQUksS0FBSztBQUN4QixRQUFBLGNBQWMsSUFBSSxlQUFBLENBQWdCO0FBQ2pCO0FBRXJCLGFBQVMsWUFBWSxHQUFHO0FBQ2hCLFVBQUEsQ0FBQyxZQUFZLE9BQU87QUFDcEI7QUFBQSxNQUNKO0FBQ1csaUJBQUEsUUFBUSxDQUFDLFdBQVc7QUFDL0IsUUFBRSxnQkFBZ0I7QUFDWCxhQUFBLGlCQUFpQixTQUFTLFVBQVU7QUFBQSxJQUMvQztBQUVBLGFBQVMsV0FBVyxHQUFHOztBQUNmLFVBQUEsR0FBQyxjQUFTLGNBQWMsMkJBQTJCLE1BQWxELG1CQUFxRCxTQUFTLEVBQUUsVUFBUztBQUMxRSxtQkFBVyxRQUFRO0FBQ1osZUFBQSxvQkFBb0IsU0FBUyxVQUFVO0FBQUEsTUFDbEQ7QUFBQSxJQUNKO0FBRUEsYUFBUyxrQkFBa0I7QUFDdkIsWUFBTSxNQUFNO0FBQ1AsV0FBQSxtQkFBbUIsTUFBTSxRQUFRO0FBQUEsSUFDMUM7QUFFQSxhQUFTLGFBQWE7QUFDbEIsWUFBTSxNQUFNO0lBQ2hCO0FBRUEsYUFBUyxpQkFBaUI7QUFDdEIsVUFBSSxNQUFNLFNBQVMsZUFBZSxNQUFNLFdBQVc7QUFDeEMsZUFBQTtBQUFBLE1BQ1g7QUFFSSxVQUFBLE1BQU0sU0FBUyxTQUFTO0FBQ2pCLGVBQUE7QUFBQSxNQUNYO0FBRU8sYUFBQSxvQkFBd0Isb0JBQUEsS0FBUSxHQUFBLEtBQUssTUFBTSxNQUFNLFNBQVMsVUFBVSxDQUFDLEtBQUssTUFBTTtBQUFBLElBQzNGO0FBRUEsYUFBUyx1QkFBdUI7QUFDNUIsa0JBQVksUUFBUTtBQUNwQixVQUFJLFlBQVksT0FBTztBQUNuQixtQkFBVyxNQUFNO0FBQ1E7V0FDdEIsR0FBSTtBQUFBLE1BQ1g7QUFBQSxJQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyXX0=

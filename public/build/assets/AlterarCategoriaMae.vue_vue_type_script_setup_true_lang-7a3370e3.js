import { d as defineComponent, r as ref, i as reactive, c as createBlock, w as withCtx, j as axios, o as openBlock, a as createBaseVNode, t as toDisplayString, k as createElementBlock, h as createTextVNode, l as createCommentVNode, m as renderList, F as Fragment } from "./app-0ff9bc90.js";
import { _ as _sfc_main$1 } from "./Modal.vue_vue_type_script_setup_true_lang-a76c0f5d.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-arrow-left me-1" }, null, -1);
const _hoisted_3 = { class: "table-responsive" };
const _hoisted_4 = { class: "table table-striped table-hover" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("th", null, "Nome"),
  /* @__PURE__ */ createBaseVNode("th")
], -1);
const _hoisted_6 = ["onClick"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("i", { class: "fas fa-arrow-right" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlterarCategoriaMae",
  props: {
    categoria: Object
  },
  emits: ["moverCategoria"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const modal = ref(null);
    const state = reactive({
      categoriaAtual: {},
      categorias: []
    });
    function atualizarCategorias(categoriaId) {
      loader.show();
      const url = categoriaId ? `/admin/categorias/pesquisar/${categoriaId}` : "/admin/categorias/pesquisar";
      axios.get(url).then((response) => {
        state.categorias = response.data.categorias;
        state.categoriaAtual = response.data.categoria;
        loader.hide();
      });
    }
    function show() {
      var _a, _b;
      atualizarCategorias((_b = (_a = props.categoria) == null ? void 0 : _a.categoria_mae) == null ? void 0 : _b.id);
      modal.value.show();
    }
    function moverCategoria() {
      var _a;
      emit("moverCategoria", (_a = state.categoriaAtual) == null ? void 0 : _a.id);
      modal.value.hide();
    }
    expose({ show });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        id: "modal_" + __props.categoria.id,
        ref_key: "modal",
        ref: modal,
        title: "Mover " + __props.categoria.nome
      }, {
        footer: withCtx(() => {
          var _a;
          return [
            createBaseVNode("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: _cache[1] || (_cache[1] = ($event) => moverCategoria())
            }, " Mover para " + toDisplayString(((_a = state.categoriaAtual) == null ? void 0 : _a.nome) ?? "Categorias"), 1)
          ];
        }),
        default: withCtx(() => {
          var _a;
          return [
            state.categoriaAtual ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  var _a2;
                  return atualizarCategorias((_a2 = state.categoriaAtual.categoria_mae) == null ? void 0 : _a2.id);
                })
              }, [
                _hoisted_2,
                createTextVNode(" " + toDisplayString(((_a = state.categoriaAtual.categoria_mae) == null ? void 0 : _a.nome) ?? "Categorias"), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("table", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(state.categorias, (cat) => {
                    return openBlock(), createElementBlock("tr", {
                      key: cat.id
                    }, [
                      createBaseVNode("td", null, toDisplayString(cat.nome), 1),
                      createBaseVNode("td", null, [
                        cat.id != __props.categoria.id ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          type: "button",
                          class: "btn btn-primary",
                          onClick: ($event) => atualizarCategorias(cat.id)
                        }, [
                          createTextVNode(" Acessar "),
                          _hoisted_7
                        ], 8, _hoisted_6)) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ];
        }),
        _: 1
      }, 8, ["id", "title"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWx0ZXJhckNhdGVnb3JpYU1hZS52dWVfdnVlX3R5cGVfc2NyaXB0X3NldHVwX3RydWVfbGFuZy03YTMzNzBlMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluL0VxdWlwYW1lbnRvcy9DYWRhc3Ryby9DYXRlZ29yaWEvQ29tcG9uZW50ZXMvQWx0ZXJhckNhdGVnb3JpYU1hZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgTW9kYWwgZnJvbSAnQC9Db21wb25lbnRlcy9MYXlvdXQvTW9kYWwudnVlJ1xuXG5jb25zdCBtb2RhbCA9IHJlZihudWxsKVxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgY2F0ZWdvcmlhOiBPYmplY3QsXG59KVxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHsoZTogJ21vdmVyQ2F0ZWdvcmlhJywgdmFsdWU6IE51bWJlcik6IHZvaWR9PigpXG5jb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHtcbiAgICBjYXRlZ29yaWFBdHVhbDoge30sXG4gICAgY2F0ZWdvcmlhczogW10sXG59KVxuXG5mdW5jdGlvbiBhdHVhbGl6YXJDYXRlZ29yaWFzKGNhdGVnb3JpYUlkKSB7XG4gICAgbG9hZGVyLnNob3coKVxuICAgIGNvbnN0IHVybCA9IGNhdGVnb3JpYUlkID8gYC9hZG1pbi9jYXRlZ29yaWFzL3Blc3F1aXNhci8ke2NhdGVnb3JpYUlkfWAgOiAnL2FkbWluL2NhdGVnb3JpYXMvcGVzcXVpc2FyJ1xuICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHN0YXRlLmNhdGVnb3JpYXMgPSByZXNwb25zZS5kYXRhLmNhdGVnb3JpYXNcbiAgICAgICAgc3RhdGUuY2F0ZWdvcmlhQXR1YWwgPSByZXNwb25zZS5kYXRhLmNhdGVnb3JpYVxuICAgICAgICBsb2FkZXIuaGlkZSgpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgICBhdHVhbGl6YXJDYXRlZ29yaWFzKHByb3BzLmNhdGVnb3JpYT8uY2F0ZWdvcmlhX21hZT8uaWQpXG4gICAgbW9kYWwudmFsdWUuc2hvdygpXG59XG5cbmZ1bmN0aW9uIG1vdmVyQ2F0ZWdvcmlhKCkge1xuICAgIGVtaXQoJ21vdmVyQ2F0ZWdvcmlhJywgc3RhdGUuY2F0ZWdvcmlhQXR1YWw/LmlkKVxuICAgIG1vZGFsLnZhbHVlLmhpZGUoKVxufVxuXG5kZWZpbmVFeHBvc2UoeyBzaG93IH0pXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICAgIDxNb2RhbCA6aWQ9XCInbW9kYWxfJyArIGNhdGVnb3JpYS5pZFwiIHJlZj1cIm1vZGFsXCIgOnRpdGxlPVwiJ01vdmVyICcgKyBjYXRlZ29yaWEubm9tZVwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJzdGF0ZS5jYXRlZ29yaWFBdHVhbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJhdHVhbGl6YXJDYXRlZ29yaWFzKHN0YXRlLmNhdGVnb3JpYUF0dWFsLmNhdGVnb3JpYV9tYWU/LmlkKVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LWxlZnQgbWUtMVwiIC8+XG4gICAgICAgICAgICAgICAge3sgc3RhdGUuY2F0ZWdvcmlhQXR1YWwuY2F0ZWdvcmlhX21hZT8ubm9tZSA/PyBcIkNhdGVnb3JpYXNcIiB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Tm9tZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJjYXQgaW4gc3RhdGUuY2F0ZWdvcmlhc1wiIDprZXk9XCJjYXQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBjYXQubm9tZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiY2F0LmlkICE9IGNhdGVnb3JpYS5pZFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cImF0dWFsaXphckNhdGVnb3JpYXMoY2F0LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Vzc2FyIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJtb3ZlckNhdGVnb3JpYSgpXCI+XG4gICAgICAgICAgICAgICAgTW92ZXIgcGFyYSB7eyBzdGF0ZS5jYXRlZ29yaWFBdHVhbD8ubm9tZSA/PyBcIkNhdGVnb3JpYXNcIiB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9Nb2RhbD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLTSxVQUFBLFFBQVEsSUFBSSxJQUFJO0FBS3RCLFVBQU0sUUFBUSxTQUFTO0FBQUEsTUFDbkIsZ0JBQWdCLENBQUM7QUFBQSxNQUNqQixZQUFZLENBQUM7QUFBQSxJQUFBLENBQ2hCO0FBRUQsYUFBUyxvQkFBb0IsYUFBYTtBQUN0QyxhQUFPLEtBQUs7QUFDTixZQUFBLE1BQU0sY0FBYywrQkFBK0IsZ0JBQWdCO0FBQ3pFLFlBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxDQUFDLGFBQWE7QUFDeEIsY0FBQSxhQUFhLFNBQVMsS0FBSztBQUMzQixjQUFBLGlCQUFpQixTQUFTLEtBQUs7QUFDckMsZUFBTyxLQUFLO0FBQUEsTUFBQSxDQUNmO0FBQUEsSUFDTDtBQUVBLGFBQVMsT0FBTzs7QUFDUSwyQkFBQSxpQkFBTSxjQUFOLG1CQUFpQixrQkFBakIsbUJBQWdDLEVBQUU7QUFDdEQsWUFBTSxNQUFNO0lBQ2hCO0FBRUEsYUFBUyxpQkFBaUI7O0FBQ2pCLFdBQUEsbUJBQWtCLFdBQU0sbUJBQU4sbUJBQXNCLEVBQUU7QUFDL0MsWUFBTSxNQUFNO0lBQ2hCO0FBRWEsV0FBQSxFQUFFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

import { o as openBlock, k as createElementBlock, a0 as resolveDirective, C as renderSlot, K as normalizeProps, a1 as guardReactiveProps, a as createBaseVNode, F as Fragment, m as renderList, h as createTextVNode, t as toDisplayString, c as createBlock, a2 as resolveDynamicComponent, l as createCommentVNode, L as mergeProps, a3 as toHandlers, b as withDirectives, a4 as vShow, f as createVNode, w as withCtx, g as withModifiers, q as normalizeClass, T as Transition, d as defineComponent, r as ref, a5 as lodashExports, x as onMounted, y as watch, j as axios, u as unref } from "./app-0ff9bc90.js";
var E = Object.defineProperty, M = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var C = (e, t, s) => t in e ? E(e, t, { enumerable: true, configurable: true, writable: true, value: s }) : e[t] = s, f = (e, t) => {
  for (var s in t || (t = {}))
    I.call(t, s) && C(e, s, t[s]);
  if (V)
    for (var s of V(t))
      N.call(t, s) && C(e, s, t[s]);
  return e;
}, m = (e, t) => M(e, x(t));
const U = {
  props: {
    autoscroll: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || false;
      if (e) {
        const s = this.getDropdownViewport(), { top: n, bottom: l, height: i } = e.getBoundingClientRect();
        if (n < s.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (l > s.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (s.height - i);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, q = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, J = {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mutableLoading: false
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, S = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, l] of t)
    s[n] = l;
  return s;
}, H = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Y = /* @__PURE__ */ createBaseVNode("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Q = [
  Y
];
function G(e, t) {
  return openBlock(), createElementBlock("svg", X, Q);
}
const W = /* @__PURE__ */ S(H, [["render", G]]), Z = {}, ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, te = /* @__PURE__ */ createBaseVNode("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), se = [
  te
];
function ie(e, t) {
  return openBlock(), createElementBlock("svg", ee, se);
}
const oe = /* @__PURE__ */ S(Z, [["render", ie]]), T = {
  Deselect: W,
  OpenIndicator: oe
}, ne = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: s,
        top: n,
        left: l,
        width: i
      } = t.$refs.toggle.getBoundingClientRect();
      let y = window.scrollX || window.pageXOffset, o = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: i + "px",
        left: y + l + "px",
        top: o + n + s + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function le(e) {
  const t = {};
  return Object.keys(e).sort().forEach((s) => {
    t[s] = e[s];
  }), JSON.stringify(t);
}
let ae = 0;
function re() {
  return ++ae;
}
const de = {
  components: f({}, T),
  directives: { appendToBody: ne },
  mixins: [U, q, J],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    deselectFromDropdown: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: true
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => true
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : le(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: true
    },
    filterBy: {
      type: Function,
      default(e, t, s) {
        return (t || "").toLocaleLowerCase().indexOf(s.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((s) => {
          let n = this.getOptionLabel(s);
          return typeof n == "number" && (n = n.toString()), this.filterBy(s, n, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: false,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: false
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: false
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: s, top: n, left: l }) {
        e.style.top = n, e.style.left = l, e.style.width = s;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: s }) {
        return e ? false : t && !s;
      }
    },
    uid: {
      type: [String, Number],
      default: () => re()
    }
  },
  data() {
    return {
      search: "",
      open: false,
      isComposing: false,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: f({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = true,
            compositionend: () => this.isComposing = false,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: m(f({}, e), { deselect: this.deselect }),
        footer: m(f({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return f(f({}, T), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const s = this.createOption(this.search);
        this.optionExists(s) || t.unshift(s);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const s = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && s() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: true,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue == "undefined" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const s = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || s.filter(Boolean).some((n) => n.contains(e.target) || n === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = true, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(e), s = [...this.options, ...this.pushedTags].filter(t);
      return s.length === 1 ? s[0] : s.find((n) => this.optionComparator(n, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = false, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = false;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = true, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = true;
    },
    onMouseUp() {
      this.mousedown = false;
    },
    onSearchKeyDown(e) {
      const t = (l) => (l.preventDefault(), !this.isComposing && this.typeAheadSelect()), s = {
        8: (l) => this.maybeDeleteValue(),
        9: (l) => this.onTab(),
        27: (l) => this.onEscape(),
        38: (l) => (l.preventDefault(), this.typeAheadUp()),
        40: (l) => (l.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((l) => s[l] = t);
      const n = this.mapKeydown(s, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, he = ["dir"], ce = ["id", "aria-expanded", "aria-owns"], ue = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pe = ["disabled", "title", "aria-label", "onClick"], fe = {
  ref: "actions",
  class: "vs__actions"
}, ge = ["disabled"], ye = { class: "vs__spinner" }, me = ["id"], be = ["id", "aria-selected", "onMouseover", "onClick"], _e = {
  key: 0,
  class: "vs__no-options"
}, Oe = /* @__PURE__ */ createTextVNode(" Sorry, no matching options. "), we = ["id"];
function ve(e, t, s, n, l, i) {
  const y = resolveDirective("append-to-body");
  return openBlock(), createElementBlock("div", {
    dir: s.dir,
    class: normalizeClass(["v-select", i.stateClasses])
  }, [
    renderSlot(e.$slots, "header", normalizeProps(guardReactiveProps(i.scope.header))),
    createBaseVNode("div", {
      id: `vs${s.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i.dropdownOpen.toString(),
      "aria-owns": `vs${s.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (o) => i.toggleDropdown(o))
    }, [
      createBaseVNode("div", ue, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.selectedValue, (o, p) => renderSlot(e.$slots, "selected-option-container", {
          option: i.normalizeOptionForSlot(o),
          deselect: i.deselect,
          multiple: s.multiple,
          disabled: s.disabled
        }, () => [
          (openBlock(), createElementBlock("span", {
            key: s.getOptionKey(o),
            class: "vs__selected"
          }, [
            renderSlot(e.$slots, "selected-option", normalizeProps(guardReactiveProps(i.normalizeOptionForSlot(o))), () => [
              createTextVNode(toDisplayString(s.getOptionLabel(o)), 1)
            ]),
            s.multiple ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_for: true,
              ref: (g) => l.deselectButtons[p] = g,
              disabled: s.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${s.getOptionLabel(o)}`,
              "aria-label": `Deselect ${s.getOptionLabel(o)}`,
              onClick: (g) => i.deselect(o)
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.Deselect)))
            ], 8, pe)) : createCommentVNode("", true)
          ]))
        ])), 256)),
        renderSlot(e.$slots, "search", normalizeProps(guardReactiveProps(i.scope.search)), () => [
          createBaseVNode("input", mergeProps({ class: "vs__search" }, i.scope.search.attributes, toHandlers(i.scope.search.events)), null, 16)
        ])
      ], 512),
      createBaseVNode("div", fe, [
        withDirectives(createBaseVNode("button", {
          ref: "clearButton",
          disabled: s.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...o) => i.clearSelection && i.clearSelection(...o))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.Deselect)))
        ], 8, ge), [
          [vShow, i.showClearButton]
        ]),
        renderSlot(e.$slots, "open-indicator", normalizeProps(guardReactiveProps(i.scope.openIndicator)), () => [
          s.noDrop ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(i.childComponents.OpenIndicator), normalizeProps(mergeProps({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        renderSlot(e.$slots, "spinner", normalizeProps(guardReactiveProps(i.scope.spinner)), () => [
          withDirectives(createBaseVNode("div", ye, "Loading...", 512), [
            [vShow, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ce),
    createVNode(Transition, { name: s.transition }, {
      default: withCtx(() => [
        i.dropdownOpen ? withDirectives((openBlock(), createElementBlock("ul", {
          id: `vs${s.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${s.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = withModifiers((...o) => i.onMousedown && i.onMousedown(...o), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...o) => i.onMouseUp && i.onMouseUp(...o))
        }, [
          renderSlot(e.$slots, "list-header", normalizeProps(guardReactiveProps(i.scope.listHeader))),
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.filteredOptions, (o, p) => (openBlock(), createElementBlock("li", {
            id: `vs${s.uid}__option-${p}`,
            key: s.getOptionKey(o),
            role: "option",
            class: normalizeClass(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(o) && p === e.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(o),
              "vs__dropdown-option--highlight": p === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !s.selectable(o)
            }]),
            "aria-selected": p === e.typeAheadPointer ? true : null,
            onMouseover: (g) => s.selectable(o) ? e.typeAheadPointer = p : null,
            onClick: withModifiers((g) => s.selectable(o) ? i.select(o) : null, ["prevent", "stop"])
          }, [
            renderSlot(e.$slots, "option", normalizeProps(guardReactiveProps(i.normalizeOptionForSlot(o))), () => [
              createTextVNode(toDisplayString(s.getOptionLabel(o)), 1)
            ])
          ], 42, be))), 128)),
          i.filteredOptions.length === 0 ? (openBlock(), createElementBlock("li", _e, [
            renderSlot(e.$slots, "no-options", normalizeProps(guardReactiveProps(i.scope.noOptions)), () => [
              Oe
            ])
          ])) : createCommentVNode("", true),
          renderSlot(e.$slots, "list-footer", normalizeProps(guardReactiveProps(i.scope.listFooter)))
        ], 40, me)), [
          [y]
        ]) : (openBlock(), createElementBlock("ul", {
          key: 1,
          id: `vs${s.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, we))
      ]),
      _: 3
    }, 8, ["name"]),
    renderSlot(e.$slots, "footer", normalizeProps(guardReactiveProps(i.scope.footer)))
  ], 10, he);
}
const Ce = /* @__PURE__ */ S(de, [["render", ve]]);
const vueSelect = "";
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectAjax",
  props: {
    href: String,
    modelValue: null,
    options: Array,
    placeholder: String,
    criarDinamica: Boolean,
    preBusca: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue", "criarNovaOpcao"],
  setup(__props, { emit }) {
    const props = __props;
    const options = ref([]);
    const onSearch = lodashExports.debounce(onSearchDebounced, 300, { maxWait: 1e3 });
    const selectedOption = ref(getOpcaoSelecionada());
    options.value = props.options ?? [];
    onMounted(() => {
      if (props.preBusca && options.value.length === 0) {
        atualizarOpcoes("", () => {
        });
      }
    });
    watch(() => props.disabled, (newValue) => {
      if (!newValue) {
        atualizarOpcoes("", () => {
        });
      }
    });
    async function onSearchDebounced(search, loading) {
      let termo = search.trim();
      await atualizarOpcoes(termo, loading);
      if (!props.criarDinamica) {
        return;
      }
      if (termo.length === 0) {
        return;
      }
      let opcoesEncontradas = options.value.filter((opcao) => opcao.texto.localeCompare(search) === 0).length;
      if (opcoesEncontradas === 0) {
        options.value.push({ id: null, texto: `Criar nova opção "${search}"` });
      }
    }
    async function atualizarOpcoes(search, loading) {
      if (!props.href) {
        options.value = [];
        return;
      }
      loading(true);
      let response = await axios.get(props.href, {
        params: {
          termo: search
        }
      });
      options.value = response.data;
      loading(false);
    }
    function updateModelValue() {
      var _a, _b;
      emit("update:modelValue", (_a = selectedOption.value) == null ? void 0 : _a.id);
      if (((_b = selectedOption.value) == null ? void 0 : _b.id) === null && props.criarDinamica) {
        let option = options.value.find((opcao) => opcao.id === null);
        if (!option) {
          return;
        }
        option.texto = option.texto.replace('Criar nova opção "', "").replace('"', "");
        emit("criarNovaOpcao", option.texto);
      }
    }
    function getOpcaoSelecionada() {
      if (props.modelValue) {
        return options.value.find((opcao) => opcao.id === props.modelValue);
      }
      return null;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Ce), {
        modelValue: selectedOption.value,
        "onUpdate:modelValue": [
          _cache[0] || (_cache[0] = ($event) => selectedOption.value = $event),
          updateModelValue
        ],
        disabled: __props.disabled,
        placeholder: __props.placeholder ?? "Selecione uma Opção",
        options: options.value,
        label: "texto",
        searchable: "",
        filterable: false,
        onSearch: unref(onSearch)
      }, {
        "no-options": withCtx(({ search, searching }) => [
          searching ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(" Nenhuma Opção encontrada para "),
            createBaseVNode("em", null, toDisplayString(search), 1),
            createTextVNode(". ")
          ], 64)) : (openBlock(), createElementBlock("em", _hoisted_1, "Digite para pesquisar"))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "placeholder", "options", "onSearch"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0QWpheC52dWVfdnVlX3R5cGVfc2NyaXB0X3NldHVwX3RydWVfbGFuZy1mNWJiMThhNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zZWxlY3QvZGlzdC92dWUtc2VsZWN0LmVzLmpzIiwiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL0NvbXBvbmVudGVzL0xheW91dC9Gb3Jtcy9TZWxlY3RBamF4LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgTSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIHggPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBWID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBJID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSwgTiA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgQyA9IChlLCB0LCBzKSA9PiB0IGluIGUgPyBFKGUsIHQsIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IHMgfSkgOiBlW3RdID0gcywgZiA9IChlLCB0KSA9PiB7XG4gIGZvciAodmFyIHMgaW4gdCB8fCAodCA9IHt9KSlcbiAgICBJLmNhbGwodCwgcykgJiYgQyhlLCBzLCB0W3NdKTtcbiAgaWYgKFYpXG4gICAgZm9yICh2YXIgcyBvZiBWKHQpKVxuICAgICAgTi5jYWxsKHQsIHMpICYmIEMoZSwgcywgdFtzXSk7XG4gIHJldHVybiBlO1xufSwgbSA9IChlLCB0KSA9PiBNKGUsIHgodCkpO1xuaW1wb3J0IHsgb3BlbkJsb2NrIGFzIGEsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBoLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgdSwgcmVzb2x2ZURpcmVjdGl2ZSBhcyBLLCBub3JtYWxpemVDbGFzcyBhcyBBLCByZW5kZXJTbG90IGFzIHIsIG5vcm1hbGl6ZVByb3BzIGFzIGQsIGd1YXJkUmVhY3RpdmVQcm9wcyBhcyBjLCBGcmFnbWVudCBhcyBCLCByZW5kZXJMaXN0IGFzIEwsIGNyZWF0ZVRleHRWTm9kZSBhcyB2LCB0b0Rpc3BsYXlTdHJpbmcgYXMgRCwgY3JlYXRlQmxvY2sgYXMgYiwgcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQgYXMgXywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIE8sIG1lcmdlUHJvcHMgYXMgaywgdG9IYW5kbGVycyBhcyBqLCB3aXRoRGlyZWN0aXZlcyBhcyB3LCB2U2hvdyBhcyBQLCBjcmVhdGVWTm9kZSBhcyAkLCBUcmFuc2l0aW9uIGFzIFIsIHdpdGhDdHggYXMgeiwgd2l0aE1vZGlmaWVycyBhcyBGIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgVSA9IHtcbiAgcHJvcHM6IHtcbiAgICBhdXRvc2Nyb2xsOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITBcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgdHlwZUFoZWFkUG9pbnRlcigpIHtcbiAgICAgIHRoaXMuYXV0b3Njcm9sbCAmJiB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKCk7XG4gICAgfSxcbiAgICBvcGVuKGUpIHtcbiAgICAgIHRoaXMuYXV0b3Njcm9sbCAmJiBlICYmIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbWF5YmVBZGp1c3RTY3JvbGwoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIGNvbnN0IGUgPSAoKHQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudSkgPT0gbnVsbCA/IHZvaWQgMCA6IHQuY2hpbGRyZW5bdGhpcy50eXBlQWhlYWRQb2ludGVyXSkgfHwgITE7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjb25zdCBzID0gdGhpcy5nZXREcm9wZG93blZpZXdwb3J0KCksIHsgdG9wOiBuLCBib3R0b206IGwsIGhlaWdodDogaSB9ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKG4gPCBzLnRvcClcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wID0gZS5vZmZzZXRUb3A7XG4gICAgICAgIGlmIChsID4gcy5ib3R0b20pXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IGUub2Zmc2V0VG9wIC0gKHMuaGVpZ2h0IC0gaSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXREcm9wZG93blZpZXdwb3J0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51ID8gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7XG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG59LCBxID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlQWhlYWRQb2ludGVyOiAtMVxuICAgIH07XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgZm9yIChsZXQgZSA9IDA7IGUgPCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg7IGUrKylcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSh0aGlzLmZpbHRlcmVkT3B0aW9uc1tlXSkpIHtcbiAgICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSBlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvcGVuKGUpIHtcbiAgICAgIGUgJiYgdGhpcy50eXBlQWhlYWRUb0xhc3RTZWxlY3RlZCgpO1xuICAgIH0sXG4gICAgc2VsZWN0ZWRWYWx1ZSgpIHtcbiAgICAgIHRoaXMub3BlbiAmJiB0aGlzLnR5cGVBaGVhZFRvTGFzdFNlbGVjdGVkKCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdHlwZUFoZWFkVXAoKSB7XG4gICAgICBmb3IgKGxldCBlID0gdGhpcy50eXBlQWhlYWRQb2ludGVyIC0gMTsgZSA+PSAwOyBlLS0pXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUodGhpcy5maWx0ZXJlZE9wdGlvbnNbZV0pKSB7XG4gICAgICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyID0gZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdHlwZUFoZWFkRG93bigpIHtcbiAgICAgIGZvciAobGV0IGUgPSB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgKyAxOyBlIDwgdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoOyBlKyspXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUodGhpcy5maWx0ZXJlZE9wdGlvbnNbZV0pKSB7XG4gICAgICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyID0gZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdHlwZUFoZWFkU2VsZWN0KCkge1xuICAgICAgY29uc3QgZSA9IHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMudHlwZUFoZWFkUG9pbnRlcl07XG4gICAgICBlICYmIHRoaXMuc2VsZWN0YWJsZShlKSAmJiB0aGlzLnNlbGVjdChlKTtcbiAgICB9LFxuICAgIHR5cGVBaGVhZFRvTGFzdFNlbGVjdGVkKCkge1xuICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyID0gdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCAhPT0gMCA/IHRoaXMuZmlsdGVyZWRPcHRpb25zLmluZGV4T2YodGhpcy5zZWxlY3RlZFZhbHVlW3RoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxXSkgOiAtMTtcbiAgICB9XG4gIH1cbn0sIEogPSB7XG4gIHByb3BzOiB7XG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICExXG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtdXRhYmxlTG9hZGluZzogITFcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgIHNlYXJjaCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJzZWFyY2hcIiwgdGhpcy5zZWFyY2gsIHRoaXMudG9nZ2xlTG9hZGluZyk7XG4gICAgfSxcbiAgICBsb2FkaW5nKGUpIHtcbiAgICAgIHRoaXMubXV0YWJsZUxvYWRpbmcgPSBlO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZUxvYWRpbmcoZSA9IG51bGwpIHtcbiAgICAgIHJldHVybiBlID09IG51bGwgPyB0aGlzLm11dGFibGVMb2FkaW5nID0gIXRoaXMubXV0YWJsZUxvYWRpbmcgOiB0aGlzLm11dGFibGVMb2FkaW5nID0gZTtcbiAgICB9XG4gIH1cbn0sIFMgPSAoZSwgdCkgPT4ge1xuICBjb25zdCBzID0gZS5fX3ZjY09wdHMgfHwgZTtcbiAgZm9yIChjb25zdCBbbiwgbF0gb2YgdClcbiAgICBzW25dID0gbDtcbiAgcmV0dXJuIHM7XG59LCBIID0ge30sIFggPSB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjEwXCIsXG4gIGhlaWdodDogXCIxMFwiXG59LCBZID0gLyogQF9fUFVSRV9fICovIHUoXCJwYXRoXCIsIHsgZDogXCJNNi44OTU0NTUgNWwyLjg0Mjg5Ny0yLjg0Mjg5OGMuMzQ4ODY0LS4zNDg4NjMuMzQ4ODY0LS45MTQ0ODggMC0xLjI2MzYzNkw5LjEwNjUzNC4yNjE2NDhjLS4zNDg4NjQtLjM0ODg2NC0uOTE0NDg5LS4zNDg4NjQtMS4yNjM2MzYgMEw1IDMuMTA0NTQ1IDIuMTU3MTAyLjI2MTY0OGMtLjM0ODg2My0uMzQ4ODY0LS45MTQ0ODgtLjM0ODg2NC0xLjI2MzYzNiAwTC4yNjE2NDguODkzNDY2Yy0uMzQ4ODY0LjM0ODg2NC0uMzQ4ODY0LjkxNDQ4OSAwIDEuMjYzNjM2TDMuMTA0NTQ1IDUgLjI2MTY0OCA3Ljg0Mjg5OGMtLjM0ODg2NC4zNDg4NjMtLjM0ODg2NC45MTQ0ODggMCAxLjI2MzYzNmwuNjMxODE4LjYzMTgxOGMuMzQ4ODY0LjM0ODg2NC45MTQ3NzMuMzQ4ODY0IDEuMjYzNjM2IDBMNSA2Ljg5NTQ1NWwyLjg0Mjg5OCAyLjg0Mjg5N2MuMzQ4ODYzLjM0ODg2NC45MTQ3NzIuMzQ4ODY0IDEuMjYzNjM2IDBsLjYzMTgxOC0uNjMxODE4Yy4zNDg4NjQtLjM0ODg2NC4zNDg4NjQtLjkxNDQ4OSAwLTEuMjYzNjM2TDYuODk1NDU1IDV6XCIgfSwgbnVsbCwgLTEpLCBRID0gW1xuICBZXG5dO1xuZnVuY3Rpb24gRyhlLCB0KSB7XG4gIHJldHVybiBhKCksIGgoXCJzdmdcIiwgWCwgUSk7XG59XG5jb25zdCBXID0gLyogQF9fUFVSRV9fICovIFMoSCwgW1tcInJlbmRlclwiLCBHXV0pLCBaID0ge30sIGVlID0ge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCIxNFwiLFxuICBoZWlnaHQ6IFwiMTBcIlxufSwgdGUgPSAvKiBAX19QVVJFX18gKi8gdShcInBhdGhcIiwgeyBkOiBcIk05LjIxMTM2NCA3LjU5OTMxbDQuNDgzMzgtNC44NjcyMjljLjQwNzAwOC0uNDQxODU0LjQwNzAwOC0xLjE1ODI0NyAwLTEuNjAwNDZsLS43MzcxMi0uODAwMjNjLS40MDcwMDgtLjQ0MTg1NC0xLjA2NjkwNC0uNDQxODU0LTEuNDc0MjQzIDBMNyA1LjE5ODYxNyAyLjUxNjYyLjMzMTM5Yy0uNDA3MDA4LS40NDE4NTMtMS4wNjY5MDQtLjQ0MTg1My0xLjQ3NDI0MyAwbC0uNzM3MTIxLjgwMDIzYy0uNDA3MDA4LjQ0MTg1NC0uNDA3MDA4IDEuMTU4MjQ4IDAgMS42MDA0NjFsNC40ODMzOCA0Ljg2NzIyOEw3IDEwbDIuMjExMzY0LTIuNDAwNjl6XCIgfSwgbnVsbCwgLTEpLCBzZSA9IFtcbiAgdGVcbl07XG5mdW5jdGlvbiBpZShlLCB0KSB7XG4gIHJldHVybiBhKCksIGgoXCJzdmdcIiwgZWUsIHNlKTtcbn1cbmNvbnN0IG9lID0gLyogQF9fUFVSRV9fICovIFMoWiwgW1tcInJlbmRlclwiLCBpZV1dKSwgVCA9IHtcbiAgRGVzZWxlY3Q6IFcsXG4gIE9wZW5JbmRpY2F0b3I6IG9lXG59LCBuZSA9IHtcbiAgbW91bnRlZChlLCB7IGluc3RhbmNlOiB0IH0pIHtcbiAgICBpZiAodC5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaGVpZ2h0OiBzLFxuICAgICAgICB0b3A6IG4sXG4gICAgICAgIGxlZnQ6IGwsXG4gICAgICAgIHdpZHRoOiBpXG4gICAgICB9ID0gdC4kcmVmcy50b2dnbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgeSA9IHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldCwgbyA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGUudW5iaW5kUG9zaXRpb24gPSB0LmNhbGN1bGF0ZVBvc2l0aW9uKGUsIHQsIHtcbiAgICAgICAgd2lkdGg6IGkgKyBcInB4XCIsXG4gICAgICAgIGxlZnQ6IHkgKyBsICsgXCJweFwiLFxuICAgICAgICB0b3A6IG8gKyBuICsgcyArIFwicHhcIlxuICAgICAgfSksIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gICAgfVxuICB9LFxuICB1bm1vdW50ZWQoZSwgeyBpbnN0YW5jZTogdCB9KSB7XG4gICAgdC5hcHBlbmRUb0JvZHkgJiYgKGUudW5iaW5kUG9zaXRpb24gJiYgdHlwZW9mIGUudW5iaW5kUG9zaXRpb24gPT0gXCJmdW5jdGlvblwiICYmIGUudW5iaW5kUG9zaXRpb24oKSwgZS5wYXJlbnROb2RlICYmIGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSk7XG4gIH1cbn07XG5mdW5jdGlvbiBsZShlKSB7XG4gIGNvbnN0IHQgPSB7fTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGUpLnNvcnQoKS5mb3JFYWNoKChzKSA9PiB7XG4gICAgdFtzXSA9IGVbc107XG4gIH0pLCBKU09OLnN0cmluZ2lmeSh0KTtcbn1cbmxldCBhZSA9IDA7XG5mdW5jdGlvbiByZSgpIHtcbiAgcmV0dXJuICsrYWU7XG59XG5jb25zdCBkZSA9IHtcbiAgY29tcG9uZW50czogZih7fSwgVCksXG4gIGRpcmVjdGl2ZXM6IHsgYXBwZW5kVG9Cb2R5OiBuZSB9LFxuICBtaXhpbnM6IFtVLCBxLCBKXSxcbiAgY29tcGF0Q29uZmlnOiB7XG4gICAgTU9ERTogM1xuICB9LFxuICBlbWl0czogW1xuICAgIFwib3BlblwiLFxuICAgIFwiY2xvc2VcIixcbiAgICBcInVwZGF0ZTptb2RlbFZhbHVlXCIsXG4gICAgXCJzZWFyY2hcIixcbiAgICBcInNlYXJjaDpjb21wb3NpdGlvbnN0YXJ0XCIsXG4gICAgXCJzZWFyY2g6Y29tcG9zaXRpb25lbmRcIixcbiAgICBcInNlYXJjaDprZXlkb3duXCIsXG4gICAgXCJzZWFyY2g6Ymx1clwiLFxuICAgIFwic2VhcmNoOmZvY3VzXCIsXG4gICAgXCJzZWFyY2g6aW5wdXRcIixcbiAgICBcIm9wdGlvbjpjcmVhdGVkXCIsXG4gICAgXCJvcHRpb246c2VsZWN0aW5nXCIsXG4gICAgXCJvcHRpb246c2VsZWN0ZWRcIixcbiAgICBcIm9wdGlvbjpkZXNlbGVjdGluZ1wiLFxuICAgIFwib3B0aW9uOmRlc2VsZWN0ZWRcIlxuICBdLFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHt9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgY2xlYXJhYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITBcbiAgICB9LFxuICAgIGRlc2VsZWN0RnJvbURyb3Bkb3duOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITFcbiAgICB9LFxuICAgIHNlYXJjaGFibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMFxuICAgIH0sXG4gICAgbXVsdGlwbGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidnNfX2ZhZGVcIlxuICAgIH0sXG4gICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBjbG9zZU9uU2VsZWN0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogITBcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImxhYmVsXCJcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJvZmZcIlxuICAgIH0sXG4gICAgcmVkdWNlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IChlKSA9PiBlXG4gICAgfSxcbiAgICBzZWxlY3RhYmxlOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IChlKSA9PiAhMFxuICAgIH0sXG4gICAgZ2V0T3B0aW9uTGFiZWw6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PSBcIm9iamVjdFwiID8gZS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmxhYmVsKSA/IGVbdGhpcy5sYWJlbF0gOiBjb25zb2xlLndhcm4oYFt2dWUtc2VsZWN0IHdhcm5dOiBMYWJlbCBrZXkgXCJvcHRpb24uJHt0aGlzLmxhYmVsfVwiIGRvZXMgbm90IGV4aXN0IGluIG9wdGlvbnMgb2JqZWN0ICR7SlNPTi5zdHJpbmdpZnkoZSl9LlxuaHR0cHM6Ly92dWUtc2VsZWN0Lm9yZy9hcGkvcHJvcHMuaHRtbCNnZXRvcHRpb25sYWJlbGApIDogZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE9wdGlvbktleToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlICE9IFwib2JqZWN0XCIpXG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGUuaGFzT3duUHJvcGVydHkoXCJpZFwiKSA/IGUuaWQgOiBsZShlKTtcbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oYFt2dWUtc2VsZWN0IHdhcm5dOiBDb3VsZCBub3Qgc3RyaW5naWZ5IHRoaXMgb3B0aW9uIHRvIGdlbmVyYXRlIHVuaXF1ZSBrZXkuIFBsZWFzZSBwcm92aWRlJ2dldE9wdGlvbktleScgcHJvcCB0byByZXR1cm4gYSB1bmlxdWUga2V5IGZvciBlYWNoIG9wdGlvbi5cbmh0dHBzOi8vdnVlLXNlbGVjdC5vcmcvYXBpL3Byb3BzLmh0bWwjZ2V0b3B0aW9ua2V5YCwgZSwgdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVGFiOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdE9uVGFiICYmICF0aGlzLmlzQ29tcG9zaW5nICYmIHRoaXMudHlwZUFoZWFkU2VsZWN0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWdnYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICExXG4gICAgfSxcbiAgICB0YWJpbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgcHVzaFRhZ3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgZmlsdGVyYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICEwXG4gICAgfSxcbiAgICBmaWx0ZXJCeToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0KGUsIHQsIHMpIHtcbiAgICAgICAgcmV0dXJuICh0IHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzLnRvTG9jYWxlTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgICB9XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlLmZpbHRlcigocykgPT4ge1xuICAgICAgICAgIGxldCBuID0gdGhpcy5nZXRPcHRpb25MYWJlbChzKTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG4gPT0gXCJudW1iZXJcIiAmJiAobiA9IG4udG9TdHJpbmcoKSksIHRoaXMuZmlsdGVyQnkocywgbiwgdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlT3B0aW9uOiB7XG4gICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgIGRlZmF1bHQoZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMub3B0aW9uTGlzdFswXSA9PSBcIm9iamVjdFwiID8geyBbdGhpcy5sYWJlbF06IGUgfSA6IGU7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xuICAgICAgZGVmYXVsdDogITEsXG4gICAgICB2YWxpZGF0b3I6IChlKSA9PiBbXCJmdW5jdGlvblwiLCBcImJvb2xlYW5cIl0uaW5jbHVkZXModHlwZW9mIGUpXG4gICAgfSxcbiAgICBjbGVhclNlYXJjaE9uQmx1cjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbih7IGNsZWFyU2VhcmNoT25TZWxlY3Q6IGUsIG11bHRpcGxlOiB0IH0pIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgIXQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBub0Ryb3A6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiAhMVxuICAgIH0sXG4gICAgaW5wdXRJZDoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBkaXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiYXV0b1wiXG4gICAgfSxcbiAgICBzZWxlY3RPblRhYjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICExXG4gICAgfSxcbiAgICBzZWxlY3RPbktleUNvZGVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFsxM11cbiAgICB9LFxuICAgIHNlYXJjaElucHV0UXVlcnlTZWxlY3Rvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJbdHlwZT1zZWFyY2hdXCJcbiAgICB9LFxuICAgIG1hcEtleWRvd246IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdDogKGUsIHQpID0+IGVcbiAgICB9LFxuICAgIGFwcGVuZFRvQm9keToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6ICExXG4gICAgfSxcbiAgICBjYWxjdWxhdGVQb3NpdGlvbjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0KGUsIHQsIHsgd2lkdGg6IHMsIHRvcDogbiwgbGVmdDogbCB9KSB7XG4gICAgICAgIGUuc3R5bGUudG9wID0gbiwgZS5zdHlsZS5sZWZ0ID0gbCwgZS5zdHlsZS53aWR0aCA9IHM7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wZG93blNob3VsZE9wZW46IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgZGVmYXVsdCh7IG5vRHJvcDogZSwgb3BlbjogdCwgbXV0YWJsZUxvYWRpbmc6IHMgfSkge1xuICAgICAgICByZXR1cm4gZSA/ICExIDogdCAmJiAhcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHVpZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHJlKClcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIG9wZW46ICExLFxuICAgICAgaXNDb21wb3Npbmc6ICExLFxuICAgICAgcHVzaGVkVGFnczogW10sXG4gICAgICBfdmFsdWU6IFtdLFxuICAgICAgZGVzZWxlY3RCdXR0b25zOiBbXVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNSZWR1Y2luZ1ZhbHVlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRwcm9wcy5yZWR1Y2UgIT09IHRoaXMuJG9wdGlvbnMucHJvcHMucmVkdWNlLmRlZmF1bHQ7XG4gICAgfSxcbiAgICBpc1RyYWNraW5nVmFsdWVzKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm1vZGVsVmFsdWUgPT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmlzUmVkdWNpbmdWYWx1ZXM7XG4gICAgfSxcbiAgICBzZWxlY3RlZFZhbHVlKCkge1xuICAgICAgbGV0IGUgPSB0aGlzLm1vZGVsVmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5pc1RyYWNraW5nVmFsdWVzICYmIChlID0gdGhpcy4kZGF0YS5fdmFsdWUpLCBlICE9IG51bGwgJiYgZSAhPT0gXCJcIiA/IFtdLmNvbmNhdChlKSA6IFtdO1xuICAgIH0sXG4gICAgb3B0aW9uTGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29uY2F0KHRoaXMucHVzaFRhZ3MgPyB0aGlzLnB1c2hlZFRhZ3MgOiBbXSk7XG4gICAgfSxcbiAgICBzZWFyY2hFbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzbG90cy5zZWFyY2ggPyB0aGlzLiRyZWZzLnNlbGVjdGVkT3B0aW9ucy5xdWVyeVNlbGVjdG9yKHRoaXMuc2VhcmNoSW5wdXRRdWVyeVNlbGVjdG9yKSA6IHRoaXMuJHJlZnMuc2VhcmNoO1xuICAgIH0sXG4gICAgc2NvcGUoKSB7XG4gICAgICBjb25zdCBlID0ge1xuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgIHNlYXJjaGluZzogdGhpcy5zZWFyY2hpbmcsXG4gICAgICAgIGZpbHRlcmVkT3B0aW9uczogdGhpcy5maWx0ZXJlZE9wdGlvbnNcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBmKHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuc2VhcmNoUGxhY2Vob2xkZXIsXG4gICAgICAgICAgICB0YWJpbmRleDogdGhpcy50YWJpbmRleCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiAhdGhpcy5zZWFyY2hhYmxlLFxuICAgICAgICAgICAgaWQ6IHRoaXMuaW5wdXRJZCxcbiAgICAgICAgICAgIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBgdnMke3RoaXMudWlkfV9fY29tYm9ib3hgLFxuICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGB2cyR7dGhpcy51aWR9X19saXN0Ym94YCxcbiAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgIHR5cGU6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICBhdXRvY29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc2VhcmNoXG4gICAgICAgICAgfSwgdGhpcy5kcm9wZG93bk9wZW4gJiYgdGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy50eXBlQWhlYWRQb2ludGVyXSA/IHtcbiAgICAgICAgICAgIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6IGB2cyR7dGhpcy51aWR9X19vcHRpb24tJHt0aGlzLnR5cGVBaGVhZFBvaW50ZXJ9YFxuICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjb21wb3NpdGlvbnN0YXJ0OiAoKSA9PiB0aGlzLmlzQ29tcG9zaW5nID0gITAsXG4gICAgICAgICAgICBjb21wb3NpdGlvbmVuZDogKCkgPT4gdGhpcy5pc0NvbXBvc2luZyA9ICExLFxuICAgICAgICAgICAga2V5ZG93bjogdGhpcy5vblNlYXJjaEtleURvd24sXG4gICAgICAgICAgICBibHVyOiB0aGlzLm9uU2VhcmNoQmx1cixcbiAgICAgICAgICAgIGZvY3VzOiB0aGlzLm9uU2VhcmNoRm9jdXMsXG4gICAgICAgICAgICBpbnB1dDogKHQpID0+IHRoaXMuc2VhcmNoID0gdC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNwaW5uZXI6IHtcbiAgICAgICAgICBsb2FkaW5nOiB0aGlzLm11dGFibGVMb2FkaW5nXG4gICAgICAgIH0sXG4gICAgICAgIG5vT3B0aW9uczoge1xuICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgbG9hZGluZzogdGhpcy5tdXRhYmxlTG9hZGluZyxcbiAgICAgICAgICBzZWFyY2hpbmc6IHRoaXMuc2VhcmNoaW5nXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5JbmRpY2F0b3I6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICByZWY6IFwib3BlbkluZGljYXRvclwiLFxuICAgICAgICAgICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBcInZzX19vcGVuLWluZGljYXRvclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsaXN0SGVhZGVyOiBlLFxuICAgICAgICBsaXN0Rm9vdGVyOiBlLFxuICAgICAgICBoZWFkZXI6IG0oZih7fSwgZSksIHsgZGVzZWxlY3Q6IHRoaXMuZGVzZWxlY3QgfSksXG4gICAgICAgIGZvb3RlcjogbShmKHt9LCBlKSwgeyBkZXNlbGVjdDogdGhpcy5kZXNlbGVjdCB9KVxuICAgICAgfTtcbiAgICB9LFxuICAgIGNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgIHJldHVybiBmKGYoe30sIFQpLCB0aGlzLmNvbXBvbmVudHMpO1xuICAgIH0sXG4gICAgc3RhdGVDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJ2cy0tb3BlblwiOiB0aGlzLmRyb3Bkb3duT3BlbixcbiAgICAgICAgXCJ2cy0tc2luZ2xlXCI6ICF0aGlzLm11bHRpcGxlLFxuICAgICAgICBcInZzLS1tdWx0aXBsZVwiOiB0aGlzLm11bHRpcGxlLFxuICAgICAgICBcInZzLS1zZWFyY2hpbmdcIjogdGhpcy5zZWFyY2hpbmcgJiYgIXRoaXMubm9Ecm9wLFxuICAgICAgICBcInZzLS1zZWFyY2hhYmxlXCI6IHRoaXMuc2VhcmNoYWJsZSAmJiAhdGhpcy5ub0Ryb3AsXG4gICAgICAgIFwidnMtLXVuc2VhcmNoYWJsZVwiOiAhdGhpcy5zZWFyY2hhYmxlLFxuICAgICAgICBcInZzLS1sb2FkaW5nXCI6IHRoaXMubXV0YWJsZUxvYWRpbmcsXG4gICAgICAgIFwidnMtLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZWFyY2hpbmcoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnNlYXJjaDtcbiAgICB9LFxuICAgIGRyb3Bkb3duT3BlbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2hvdWxkT3Blbih0aGlzKTtcbiAgICB9LFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogdm9pZCAwO1xuICAgIH0sXG4gICAgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgY29uc3QgZSA9IFtdLmNvbmNhdCh0aGlzLm9wdGlvbkxpc3QpO1xuICAgICAgaWYgKCF0aGlzLmZpbHRlcmFibGUgJiYgIXRoaXMudGFnZ2FibGUpXG4gICAgICAgIHJldHVybiBlO1xuICAgICAgY29uc3QgdCA9IHRoaXMuc2VhcmNoLmxlbmd0aCA/IHRoaXMuZmlsdGVyKGUsIHRoaXMuc2VhcmNoLCB0aGlzKSA6IGU7XG4gICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuY3JlYXRlT3B0aW9uKHRoaXMuc2VhcmNoKTtcbiAgICAgICAgdGhpcy5vcHRpb25FeGlzdHMocykgfHwgdC51bnNoaWZ0KHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcbiAgICBpc1ZhbHVlRW1wdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9LFxuICAgIHNob3dDbGVhckJ1dHRvbigpIHtcbiAgICAgIHJldHVybiAhdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmNsZWFyYWJsZSAmJiAhdGhpcy5vcGVuICYmICF0aGlzLmlzVmFsdWVFbXB0eTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgb3B0aW9ucyhlLCB0KSB7XG4gICAgICBjb25zdCBzID0gKCkgPT4gdHlwZW9mIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UgPT0gXCJmdW5jdGlvblwiID8gdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZShlLCB0LCB0aGlzLnNlbGVjdGVkVmFsdWUpIDogdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZTtcbiAgICAgICF0aGlzLnRhZ2dhYmxlICYmIHMoKSAmJiB0aGlzLmNsZWFyU2VsZWN0aW9uKCksIHRoaXMubW9kZWxWYWx1ZSAmJiB0aGlzLmlzVHJhY2tpbmdWYWx1ZXMgJiYgdGhpcy5zZXRJbnRlcm5hbFZhbHVlRnJvbU9wdGlvbnModGhpcy5tb2RlbFZhbHVlKTtcbiAgICB9LFxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIGltbWVkaWF0ZTogITAsXG4gICAgICBoYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5pc1RyYWNraW5nVmFsdWVzICYmIHRoaXMuc2V0SW50ZXJuYWxWYWx1ZUZyb21PcHRpb25zKGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbXVsdGlwbGUoKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfSxcbiAgICBvcGVuKGUpIHtcbiAgICAgIHRoaXMuJGVtaXQoZSA/IFwib3BlblwiIDogXCJjbG9zZVwiKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5tdXRhYmxlTG9hZGluZyA9IHRoaXMubG9hZGluZztcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldEludGVybmFsVmFsdWVGcm9tT3B0aW9ucyhlKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGUpID8gdGhpcy4kZGF0YS5fdmFsdWUgPSBlLm1hcCgodCkgPT4gdGhpcy5maW5kT3B0aW9uRnJvbVJlZHVjZWRWYWx1ZSh0KSkgOiB0aGlzLiRkYXRhLl92YWx1ZSA9IHRoaXMuZmluZE9wdGlvbkZyb21SZWR1Y2VkVmFsdWUoZSk7XG4gICAgfSxcbiAgICBzZWxlY3QoZSkge1xuICAgICAgdGhpcy4kZW1pdChcIm9wdGlvbjpzZWxlY3RpbmdcIiwgZSksIHRoaXMuaXNPcHRpb25TZWxlY3RlZChlKSA/IHRoaXMuZGVzZWxlY3RGcm9tRHJvcGRvd24gJiYgKHRoaXMuY2xlYXJhYmxlIHx8IHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3RlZFZhbHVlLmxlbmd0aCA+IDEpICYmIHRoaXMuZGVzZWxlY3QoZSkgOiAodGhpcy50YWdnYWJsZSAmJiAhdGhpcy5vcHRpb25FeGlzdHMoZSkgJiYgKHRoaXMuJGVtaXQoXCJvcHRpb246Y3JlYXRlZFwiLCBlKSwgdGhpcy5wdXNoVGFnKGUpKSwgdGhpcy5tdWx0aXBsZSAmJiAoZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZS5jb25jYXQoZSkpLCB0aGlzLnVwZGF0ZVZhbHVlKGUpLCB0aGlzLiRlbWl0KFwib3B0aW9uOnNlbGVjdGVkXCIsIGUpKSwgdGhpcy5vbkFmdGVyU2VsZWN0KGUpO1xuICAgIH0sXG4gICAgZGVzZWxlY3QoZSkge1xuICAgICAgdGhpcy4kZW1pdChcIm9wdGlvbjpkZXNlbGVjdGluZ1wiLCBlKSwgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUuZmlsdGVyKCh0KSA9PiAhdGhpcy5vcHRpb25Db21wYXJhdG9yKHQsIGUpKSksIHRoaXMuJGVtaXQoXCJvcHRpb246ZGVzZWxlY3RlZFwiLCBlKTtcbiAgICB9LFxuICAgIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLm11bHRpcGxlID8gW10gOiBudWxsKTtcbiAgICB9LFxuICAgIG9uQWZ0ZXJTZWxlY3QoZSkge1xuICAgICAgdGhpcy5jbG9zZU9uU2VsZWN0ICYmICh0aGlzLm9wZW4gPSAhdGhpcy5vcGVuLCB0aGlzLnNlYXJjaEVsLmJsdXIoKSksIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCAmJiAodGhpcy5zZWFyY2ggPSBcIlwiKTtcbiAgICB9LFxuICAgIHVwZGF0ZVZhbHVlKGUpIHtcbiAgICAgIHR5cGVvZiB0aGlzLm1vZGVsVmFsdWUgPT0gXCJ1bmRlZmluZWRcIiAmJiAodGhpcy4kZGF0YS5fdmFsdWUgPSBlKSwgZSAhPT0gbnVsbCAmJiAoQXJyYXkuaXNBcnJheShlKSA/IGUgPSBlLm1hcCgodCkgPT4gdGhpcy5yZWR1Y2UodCkpIDogZSA9IHRoaXMucmVkdWNlKGUpKSwgdGhpcy4kZW1pdChcInVwZGF0ZTptb2RlbFZhbHVlXCIsIGUpO1xuICAgIH0sXG4gICAgdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgICAgY29uc3QgdCA9IGUudGFyZ2V0ICE9PSB0aGlzLnNlYXJjaEVsO1xuICAgICAgdCAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBzID0gW1xuICAgICAgICAuLi50aGlzLmRlc2VsZWN0QnV0dG9ucyB8fCBbXSxcbiAgICAgICAgdGhpcy4kcmVmcy5jbGVhckJ1dHRvblxuICAgICAgXTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaEVsID09PSB2b2lkIDAgfHwgcy5maWx0ZXIoQm9vbGVhbikuc29tZSgobikgPT4gbi5jb250YWlucyhlLnRhcmdldCkgfHwgbiA9PT0gZS50YXJnZXQpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuICYmIHQgPyB0aGlzLnNlYXJjaEVsLmJsdXIoKSA6IHRoaXMuZGlzYWJsZWQgfHwgKHRoaXMub3BlbiA9ICEwLCB0aGlzLnNlYXJjaEVsLmZvY3VzKCkpO1xuICAgIH0sXG4gICAgaXNPcHRpb25TZWxlY3RlZChlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlLnNvbWUoKHQpID0+IHRoaXMub3B0aW9uQ29tcGFyYXRvcih0LCBlKSk7XG4gICAgfSxcbiAgICBpc09wdGlvbkRlc2VsZWN0YWJsZShlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc09wdGlvblNlbGVjdGVkKGUpICYmIHRoaXMuZGVzZWxlY3RGcm9tRHJvcGRvd247XG4gICAgfSxcbiAgICBvcHRpb25Db21wYXJhdG9yKGUsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbktleShlKSA9PT0gdGhpcy5nZXRPcHRpb25LZXkodCk7XG4gICAgfSxcbiAgICBmaW5kT3B0aW9uRnJvbVJlZHVjZWRWYWx1ZShlKSB7XG4gICAgICBjb25zdCB0ID0gKG4pID0+IEpTT04uc3RyaW5naWZ5KHRoaXMucmVkdWNlKG4pKSA9PT0gSlNPTi5zdHJpbmdpZnkoZSksIHMgPSBbLi4udGhpcy5vcHRpb25zLCAuLi50aGlzLnB1c2hlZFRhZ3NdLmZpbHRlcih0KTtcbiAgICAgIHJldHVybiBzLmxlbmd0aCA9PT0gMSA/IHNbMF0gOiBzLmZpbmQoKG4pID0+IHRoaXMub3B0aW9uQ29tcGFyYXRvcihuLCB0aGlzLiRkYXRhLl92YWx1ZSkpIHx8IGU7XG4gICAgfSxcbiAgICBjbG9zZVNlYXJjaE9wdGlvbnMoKSB7XG4gICAgICB0aGlzLm9wZW4gPSAhMSwgdGhpcy4kZW1pdChcInNlYXJjaDpibHVyXCIpO1xuICAgIH0sXG4gICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcbiAgICAgIGlmICghdGhpcy5zZWFyY2hFbC52YWx1ZS5sZW5ndGggJiYgdGhpcy5zZWxlY3RlZFZhbHVlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZS5sZW5ndGggJiYgdGhpcy5jbGVhcmFibGUpIHtcbiAgICAgICAgbGV0IGUgPSBudWxsO1xuICAgICAgICB0aGlzLm11bHRpcGxlICYmIChlID0gW1xuICAgICAgICAgIC4uLnRoaXMuc2VsZWN0ZWRWYWx1ZS5zbGljZSgwLCB0aGlzLnNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMSlcbiAgICAgICAgXSksIHRoaXMudXBkYXRlVmFsdWUoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvcHRpb25FeGlzdHMoZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uTGlzdC5zb21lKCh0KSA9PiB0aGlzLm9wdGlvbkNvbXBhcmF0b3IodCwgZSkpO1xuICAgIH0sXG4gICAgbm9ybWFsaXplT3B0aW9uRm9yU2xvdChlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGUgPT0gXCJvYmplY3RcIiA/IGUgOiB7IFt0aGlzLmxhYmVsXTogZSB9O1xuICAgIH0sXG4gICAgcHVzaFRhZyhlKSB7XG4gICAgICB0aGlzLnB1c2hlZFRhZ3MucHVzaChlKTtcbiAgICB9LFxuICAgIG9uRXNjYXBlKCkge1xuICAgICAgdGhpcy5zZWFyY2gubGVuZ3RoID8gdGhpcy5zZWFyY2ggPSBcIlwiIDogdGhpcy5zZWFyY2hFbC5ibHVyKCk7XG4gICAgfSxcbiAgICBvblNlYXJjaEJsdXIoKSB7XG4gICAgICBpZiAodGhpcy5tb3VzZWRvd24gJiYgIXRoaXMuc2VhcmNoaW5nKVxuICAgICAgICB0aGlzLm1vdXNlZG93biA9ICExO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgY2xlYXJTZWFyY2hPblNlbGVjdDogZSwgbXVsdGlwbGU6IHQgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJTZWFyY2hPbkJsdXIoeyBjbGVhclNlYXJjaE9uU2VsZWN0OiBlLCBtdWx0aXBsZTogdCB9KSAmJiAodGhpcy5zZWFyY2ggPSBcIlwiKSwgdGhpcy5jbG9zZVNlYXJjaE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VhcmNoLmxlbmd0aCA9PT0gMCAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTZWFyY2hPcHRpb25zKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU2VhcmNoRm9jdXMoKSB7XG4gICAgICB0aGlzLm9wZW4gPSAhMCwgdGhpcy4kZW1pdChcInNlYXJjaDpmb2N1c1wiKTtcbiAgICB9LFxuICAgIG9uTW91c2Vkb3duKCkge1xuICAgICAgdGhpcy5tb3VzZWRvd24gPSAhMDtcbiAgICB9LFxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgIHRoaXMubW91c2Vkb3duID0gITE7XG4gICAgfSxcbiAgICBvblNlYXJjaEtleURvd24oZSkge1xuICAgICAgY29uc3QgdCA9IChsKSA9PiAobC5wcmV2ZW50RGVmYXVsdCgpLCAhdGhpcy5pc0NvbXBvc2luZyAmJiB0aGlzLnR5cGVBaGVhZFNlbGVjdCgpKSwgcyA9IHtcbiAgICAgICAgODogKGwpID0+IHRoaXMubWF5YmVEZWxldGVWYWx1ZSgpLFxuICAgICAgICA5OiAobCkgPT4gdGhpcy5vblRhYigpLFxuICAgICAgICAyNzogKGwpID0+IHRoaXMub25Fc2NhcGUoKSxcbiAgICAgICAgMzg6IChsKSA9PiAobC5wcmV2ZW50RGVmYXVsdCgpLCB0aGlzLnR5cGVBaGVhZFVwKCkpLFxuICAgICAgICA0MDogKGwpID0+IChsLnByZXZlbnREZWZhdWx0KCksIHRoaXMudHlwZUFoZWFkRG93bigpKVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2VsZWN0T25LZXlDb2Rlcy5mb3JFYWNoKChsKSA9PiBzW2xdID0gdCk7XG4gICAgICBjb25zdCBuID0gdGhpcy5tYXBLZXlkb3duKHMsIHRoaXMpO1xuICAgICAgaWYgKHR5cGVvZiBuW2Uua2V5Q29kZV0gPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gbltlLmtleUNvZGVdKGUpO1xuICAgIH1cbiAgfVxufSwgaGUgPSBbXCJkaXJcIl0sIGNlID0gW1wiaWRcIiwgXCJhcmlhLWV4cGFuZGVkXCIsIFwiYXJpYS1vd25zXCJdLCB1ZSA9IHtcbiAgcmVmOiBcInNlbGVjdGVkT3B0aW9uc1wiLFxuICBjbGFzczogXCJ2c19fc2VsZWN0ZWQtb3B0aW9uc1wiXG59LCBwZSA9IFtcImRpc2FibGVkXCIsIFwidGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwib25DbGlja1wiXSwgZmUgPSB7XG4gIHJlZjogXCJhY3Rpb25zXCIsXG4gIGNsYXNzOiBcInZzX19hY3Rpb25zXCJcbn0sIGdlID0gW1wiZGlzYWJsZWRcIl0sIHllID0geyBjbGFzczogXCJ2c19fc3Bpbm5lclwiIH0sIG1lID0gW1wiaWRcIl0sIGJlID0gW1wiaWRcIiwgXCJhcmlhLXNlbGVjdGVkXCIsIFwib25Nb3VzZW92ZXJcIiwgXCJvbkNsaWNrXCJdLCBfZSA9IHtcbiAga2V5OiAwLFxuICBjbGFzczogXCJ2c19fbm8tb3B0aW9uc1wiXG59LCBPZSA9IC8qIEBfX1BVUkVfXyAqLyB2KFwiIFNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLiBcIiksIHdlID0gW1wiaWRcIl07XG5mdW5jdGlvbiB2ZShlLCB0LCBzLCBuLCBsLCBpKSB7XG4gIGNvbnN0IHkgPSBLKFwiYXBwZW5kLXRvLWJvZHlcIik7XG4gIHJldHVybiBhKCksIGgoXCJkaXZcIiwge1xuICAgIGRpcjogcy5kaXIsXG4gICAgY2xhc3M6IEEoW1widi1zZWxlY3RcIiwgaS5zdGF0ZUNsYXNzZXNdKVxuICB9LCBbXG4gICAgcihlLiRzbG90cywgXCJoZWFkZXJcIiwgZChjKGkuc2NvcGUuaGVhZGVyKSkpLFxuICAgIHUoXCJkaXZcIiwge1xuICAgICAgaWQ6IGB2cyR7cy51aWR9X19jb21ib2JveGAsXG4gICAgICByZWY6IFwidG9nZ2xlXCIsXG4gICAgICBjbGFzczogXCJ2c19fZHJvcGRvd24tdG9nZ2xlXCIsXG4gICAgICByb2xlOiBcImNvbWJvYm94XCIsXG4gICAgICBcImFyaWEtZXhwYW5kZWRcIjogaS5kcm9wZG93bk9wZW4udG9TdHJpbmcoKSxcbiAgICAgIFwiYXJpYS1vd25zXCI6IGB2cyR7cy51aWR9X19saXN0Ym94YCxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlYXJjaCBmb3Igb3B0aW9uXCIsXG4gICAgICBvbk1vdXNlZG93bjogdFsxXSB8fCAodFsxXSA9IChvKSA9PiBpLnRvZ2dsZURyb3Bkb3duKG8pKVxuICAgIH0sIFtcbiAgICAgIHUoXCJkaXZcIiwgdWUsIFtcbiAgICAgICAgKGEoITApLCBoKEIsIG51bGwsIEwoaS5zZWxlY3RlZFZhbHVlLCAobywgcCkgPT4gcihlLiRzbG90cywgXCJzZWxlY3RlZC1vcHRpb24tY29udGFpbmVyXCIsIHtcbiAgICAgICAgICBvcHRpb246IGkubm9ybWFsaXplT3B0aW9uRm9yU2xvdChvKSxcbiAgICAgICAgICBkZXNlbGVjdDogaS5kZXNlbGVjdCxcbiAgICAgICAgICBtdWx0aXBsZTogcy5tdWx0aXBsZSxcbiAgICAgICAgICBkaXNhYmxlZDogcy5kaXNhYmxlZFxuICAgICAgICB9LCAoKSA9PiBbXG4gICAgICAgICAgKGEoKSwgaChcInNwYW5cIiwge1xuICAgICAgICAgICAga2V5OiBzLmdldE9wdGlvbktleShvKSxcbiAgICAgICAgICAgIGNsYXNzOiBcInZzX19zZWxlY3RlZFwiXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgcihlLiRzbG90cywgXCJzZWxlY3RlZC1vcHRpb25cIiwgZChjKGkubm9ybWFsaXplT3B0aW9uRm9yU2xvdChvKSkpLCAoKSA9PiBbXG4gICAgICAgICAgICAgIHYoRChzLmdldE9wdGlvbkxhYmVsKG8pKSwgMSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgcy5tdWx0aXBsZSA/IChhKCksIGgoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgIHJlZl9mb3I6ICEwLFxuICAgICAgICAgICAgICByZWY6IChnKSA9PiBsLmRlc2VsZWN0QnV0dG9uc1twXSA9IGcsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiBzLmRpc2FibGVkLFxuICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2c19fZGVzZWxlY3RcIixcbiAgICAgICAgICAgICAgdGl0bGU6IGBEZXNlbGVjdCAke3MuZ2V0T3B0aW9uTGFiZWwobyl9YCxcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGBEZXNlbGVjdCAke3MuZ2V0T3B0aW9uTGFiZWwobyl9YCxcbiAgICAgICAgICAgICAgb25DbGljazogKGcpID0+IGkuZGVzZWxlY3QobylcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgKGEoKSwgYihfKGkuY2hpbGRDb21wb25lbnRzLkRlc2VsZWN0KSkpXG4gICAgICAgICAgICBdLCA4LCBwZSkpIDogTyhcIlwiLCAhMClcbiAgICAgICAgICBdKSlcbiAgICAgICAgXSkpLCAyNTYpKSxcbiAgICAgICAgcihlLiRzbG90cywgXCJzZWFyY2hcIiwgZChjKGkuc2NvcGUuc2VhcmNoKSksICgpID0+IFtcbiAgICAgICAgICB1KFwiaW5wdXRcIiwgayh7IGNsYXNzOiBcInZzX19zZWFyY2hcIiB9LCBpLnNjb3BlLnNlYXJjaC5hdHRyaWJ1dGVzLCBqKGkuc2NvcGUuc2VhcmNoLmV2ZW50cykpLCBudWxsLCAxNilcbiAgICAgICAgXSlcbiAgICAgIF0sIDUxMiksXG4gICAgICB1KFwiZGl2XCIsIGZlLCBbXG4gICAgICAgIHcodShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgcmVmOiBcImNsZWFyQnV0dG9uXCIsXG4gICAgICAgICAgZGlzYWJsZWQ6IHMuZGlzYWJsZWQsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBjbGFzczogXCJ2c19fY2xlYXJcIixcbiAgICAgICAgICB0aXRsZTogXCJDbGVhciBTZWxlY3RlZFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsZWFyIFNlbGVjdGVkXCIsXG4gICAgICAgICAgb25DbGljazogdFswXSB8fCAodFswXSA9ICguLi5vKSA9PiBpLmNsZWFyU2VsZWN0aW9uICYmIGkuY2xlYXJTZWxlY3Rpb24oLi4ubykpXG4gICAgICAgIH0sIFtcbiAgICAgICAgICAoYSgpLCBiKF8oaS5jaGlsZENvbXBvbmVudHMuRGVzZWxlY3QpKSlcbiAgICAgICAgXSwgOCwgZ2UpLCBbXG4gICAgICAgICAgW1AsIGkuc2hvd0NsZWFyQnV0dG9uXVxuICAgICAgICBdKSxcbiAgICAgICAgcihlLiRzbG90cywgXCJvcGVuLWluZGljYXRvclwiLCBkKGMoaS5zY29wZS5vcGVuSW5kaWNhdG9yKSksICgpID0+IFtcbiAgICAgICAgICBzLm5vRHJvcCA/IE8oXCJcIiwgITApIDogKGEoKSwgYihfKGkuY2hpbGRDb21wb25lbnRzLk9wZW5JbmRpY2F0b3IpLCBkKGsoeyBrZXk6IDAgfSwgaS5zY29wZS5vcGVuSW5kaWNhdG9yLmF0dHJpYnV0ZXMpKSwgbnVsbCwgMTYpKVxuICAgICAgICBdKSxcbiAgICAgICAgcihlLiRzbG90cywgXCJzcGlubmVyXCIsIGQoYyhpLnNjb3BlLnNwaW5uZXIpKSwgKCkgPT4gW1xuICAgICAgICAgIHcodShcImRpdlwiLCB5ZSwgXCJMb2FkaW5nLi4uXCIsIDUxMiksIFtcbiAgICAgICAgICAgIFtQLCBlLm11dGFibGVMb2FkaW5nXVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdLCA1MTIpXG4gICAgXSwgNDAsIGNlKSxcbiAgICAkKFIsIHsgbmFtZTogcy50cmFuc2l0aW9uIH0sIHtcbiAgICAgIGRlZmF1bHQ6IHooKCkgPT4gW1xuICAgICAgICBpLmRyb3Bkb3duT3BlbiA/IHcoKGEoKSwgaChcInVsXCIsIHtcbiAgICAgICAgICBpZDogYHZzJHtzLnVpZH1fX2xpc3Rib3hgLFxuICAgICAgICAgIHJlZjogXCJkcm9wZG93bk1lbnVcIixcbiAgICAgICAgICBrZXk6IGB2cyR7cy51aWR9X19saXN0Ym94YCxcbiAgICAgICAgICBjbGFzczogXCJ2c19fZHJvcGRvd24tbWVudVwiLFxuICAgICAgICAgIHJvbGU6IFwibGlzdGJveFwiLFxuICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgb25Nb3VzZWRvd246IHRbMl0gfHwgKHRbMl0gPSBGKCguLi5vKSA9PiBpLm9uTW91c2Vkb3duICYmIGkub25Nb3VzZWRvd24oLi4ubyksIFtcInByZXZlbnRcIl0pKSxcbiAgICAgICAgICBvbk1vdXNldXA6IHRbM10gfHwgKHRbM10gPSAoLi4ubykgPT4gaS5vbk1vdXNlVXAgJiYgaS5vbk1vdXNlVXAoLi4ubykpXG4gICAgICAgIH0sIFtcbiAgICAgICAgICByKGUuJHNsb3RzLCBcImxpc3QtaGVhZGVyXCIsIGQoYyhpLnNjb3BlLmxpc3RIZWFkZXIpKSksXG4gICAgICAgICAgKGEoITApLCBoKEIsIG51bGwsIEwoaS5maWx0ZXJlZE9wdGlvbnMsIChvLCBwKSA9PiAoYSgpLCBoKFwibGlcIiwge1xuICAgICAgICAgICAgaWQ6IGB2cyR7cy51aWR9X19vcHRpb24tJHtwfWAsXG4gICAgICAgICAgICBrZXk6IHMuZ2V0T3B0aW9uS2V5KG8pLFxuICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgIGNsYXNzOiBBKFtcInZzX19kcm9wZG93bi1vcHRpb25cIiwge1xuICAgICAgICAgICAgICBcInZzX19kcm9wZG93bi1vcHRpb24tLWRlc2VsZWN0XCI6IGkuaXNPcHRpb25EZXNlbGVjdGFibGUobykgJiYgcCA9PT0gZS50eXBlQWhlYWRQb2ludGVyLFxuICAgICAgICAgICAgICBcInZzX19kcm9wZG93bi1vcHRpb24tLXNlbGVjdGVkXCI6IGkuaXNPcHRpb25TZWxlY3RlZChvKSxcbiAgICAgICAgICAgICAgXCJ2c19fZHJvcGRvd24tb3B0aW9uLS1oaWdobGlnaHRcIjogcCA9PT0gZS50eXBlQWhlYWRQb2ludGVyLFxuICAgICAgICAgICAgICBcInZzX19kcm9wZG93bi1vcHRpb24tLWRpc2FibGVkXCI6ICFzLnNlbGVjdGFibGUobylcbiAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBwID09PSBlLnR5cGVBaGVhZFBvaW50ZXIgPyAhMCA6IG51bGwsXG4gICAgICAgICAgICBvbk1vdXNlb3ZlcjogKGcpID0+IHMuc2VsZWN0YWJsZShvKSA/IGUudHlwZUFoZWFkUG9pbnRlciA9IHAgOiBudWxsLFxuICAgICAgICAgICAgb25DbGljazogRigoZykgPT4gcy5zZWxlY3RhYmxlKG8pID8gaS5zZWxlY3QobykgOiBudWxsLCBbXCJwcmV2ZW50XCIsIFwic3RvcFwiXSlcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICByKGUuJHNsb3RzLCBcIm9wdGlvblwiLCBkKGMoaS5ub3JtYWxpemVPcHRpb25Gb3JTbG90KG8pKSksICgpID0+IFtcbiAgICAgICAgICAgICAgdihEKHMuZ2V0T3B0aW9uTGFiZWwobykpLCAxKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA0MiwgYmUpKSksIDEyOCkpLFxuICAgICAgICAgIGkuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IChhKCksIGgoXCJsaVwiLCBfZSwgW1xuICAgICAgICAgICAgcihlLiRzbG90cywgXCJuby1vcHRpb25zXCIsIGQoYyhpLnNjb3BlLm5vT3B0aW9ucykpLCAoKSA9PiBbXG4gICAgICAgICAgICAgIE9lXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pKSA6IE8oXCJcIiwgITApLFxuICAgICAgICAgIHIoZS4kc2xvdHMsIFwibGlzdC1mb290ZXJcIiwgZChjKGkuc2NvcGUubGlzdEZvb3RlcikpKVxuICAgICAgICBdLCA0MCwgbWUpKSwgW1xuICAgICAgICAgIFt5XVxuICAgICAgICBdKSA6IChhKCksIGgoXCJ1bFwiLCB7XG4gICAgICAgICAga2V5OiAxLFxuICAgICAgICAgIGlkOiBgdnMke3MudWlkfV9fbGlzdGJveGAsXG4gICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIgfVxuICAgICAgICB9LCBudWxsLCA4LCB3ZSkpXG4gICAgICBdKSxcbiAgICAgIF86IDNcbiAgICB9LCA4LCBbXCJuYW1lXCJdKSxcbiAgICByKGUuJHNsb3RzLCBcImZvb3RlclwiLCBkKGMoaS5zY29wZS5mb290ZXIpKSlcbiAgXSwgMTAsIGhlKTtcbn1cbmNvbnN0IENlID0gLyogQF9fUFVSRV9fICovIFMoZGUsIFtbXCJyZW5kZXJcIiwgdmVdXSk7XG5leHBvcnQge1xuICBDZSBhcyBkZWZhdWx0XG59O1xuIiwiPHNjcmlwdCAgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWVTZWxlY3QgZnJvbSAndnVlLXNlbGVjdCdcbmltcG9ydCAndnVlLXNlbGVjdC9kaXN0L3Z1ZS1zZWxlY3QuY3NzJ1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgICBocmVmOiBTdHJpbmcsXG4gICAgbW9kZWxWYWx1ZTogbnVsbCxcbiAgICBvcHRpb25zOiBBcnJheSxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGNyaWFyRGluYW1pY2E6IEJvb2xlYW4sXG4gICAgcHJlQnVzY2E6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG59KVxuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8eyhlOiAndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZTogc3RyaW5nKTogdm9pZCxcbiAgICAoZTogJ2NyaWFyTm92YU9wY2FvJywgdmFsdWU6IHN0cmluZyk6IHZvaWRcbn0+KClcblxuY29uc3Qgb3B0aW9ucyA9IHJlZihbXSlcbmNvbnN0IG9uU2VhcmNoID0gZGVib3VuY2Uob25TZWFyY2hEZWJvdW5jZWQsIDMwMCwgeyBtYXhXYWl0OiAxMDAwIH0pXG5jb25zdCBzZWxlY3RlZE9wdGlvbiA9IHJlZihnZXRPcGNhb1NlbGVjaW9uYWRhKCkpXG5cbm9wdGlvbnMudmFsdWUgPSBwcm9wcy5vcHRpb25zID8/IFtdXG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnByZUJ1c2NhICYmIG9wdGlvbnMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGF0dWFsaXphck9wY29lcygnJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gbsOjbyB0ZW0gbG9hZGluZyBlbSBwcsOpIGJ1c2NhXG4gICAgICAgIH0pXG4gICAgfVxufSlcblxud2F0Y2goKCkgPT4gcHJvcHMuZGlzYWJsZWQsIChuZXdWYWx1ZSkgPT4ge1xuICAgIGlmICghbmV3VmFsdWUpIHtcbiAgICAgICAgYXR1YWxpemFyT3Bjb2VzKCcnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBuw6NvIHRlbSBsb2FkaW5nIGVtIHByw6kgYnVzY2FcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG5hc3luYyBmdW5jdGlvbiBvblNlYXJjaERlYm91bmNlZChzZWFyY2gsIGxvYWRpbmcpIHtcbiAgICBsZXQgdGVybW8gPSBzZWFyY2gudHJpbSgpXG4gICAgYXdhaXQgYXR1YWxpemFyT3Bjb2VzKHRlcm1vLCBsb2FkaW5nKVxuXG4gICAgaWYgKCFwcm9wcy5jcmlhckRpbmFtaWNhKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0ZXJtby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IG9wY29lc0VuY29udHJhZGFzID0gb3B0aW9ucy52YWx1ZS5maWx0ZXIoKG9wY2FvKSA9PiBvcGNhby50ZXh0by5sb2NhbGVDb21wYXJlKHNlYXJjaCkgPT09IDApLmxlbmd0aFxuICAgIGlmIChvcGNvZXNFbmNvbnRyYWRhcyA9PT0gMCkge1xuICAgICAgICBvcHRpb25zLnZhbHVlLnB1c2goeyBpZDogbnVsbCwgdGV4dG86IGBDcmlhciBub3ZhIG9ww6fDo28gXCIke3NlYXJjaH1cImAgfSlcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGF0dWFsaXphck9wY29lcyhzZWFyY2gsIGxvYWRpbmcpIHtcbiAgICBpZiAoIXByb3BzLmhyZWYpIHtcbiAgICAgICAgb3B0aW9ucy52YWx1ZSA9IFtdXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvYWRpbmcodHJ1ZSlcblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChwcm9wcy5ocmVmLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdGVybW86IHNlYXJjaCxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIG9wdGlvbnMudmFsdWUgPSByZXNwb25zZS5kYXRhXG5cbiAgICBsb2FkaW5nKGZhbHNlKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVNb2RlbFZhbHVlKCkge1xuICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgc2VsZWN0ZWRPcHRpb24udmFsdWU/LmlkKVxuXG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uLnZhbHVlPy5pZCA9PT0gbnVsbCAmJiBwcm9wcy5jcmlhckRpbmFtaWNhKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zLnZhbHVlLmZpbmQoKG9wY2FvKSA9PiBvcGNhby5pZCA9PT0gbnVsbClcblxuICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb24udGV4dG8gPSBvcHRpb24udGV4dG8ucmVwbGFjZSgnQ3JpYXIgbm92YSBvcMOnw6NvIFwiJywgJycpLnJlcGxhY2UoJ1wiJywgJycpXG4gICAgICAgIGVtaXQoJ2NyaWFyTm92YU9wY2FvJywgb3B0aW9uLnRleHRvKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3BjYW9TZWxlY2lvbmFkYSgpIHtcbiAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy52YWx1ZS5maW5kKChvcGNhbykgPT4gb3BjYW8uaWQgPT09IHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG59XG5cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gICAgPFZ1ZVNlbGVjdFxuICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRPcHRpb25cIlxuICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyID8/ICdTZWxlY2lvbmUgdW1hIE9ww6fDo28nXCJcbiAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcbiAgICAgICAgbGFiZWw9XCJ0ZXh0b1wiXG4gICAgICAgIHNlYXJjaGFibGVcbiAgICAgICAgOmZpbHRlcmFibGU9XCJmYWxzZVwiXG4gICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJ1cGRhdGVNb2RlbFZhbHVlXCJcbiAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSAjbm8tb3B0aW9ucz1cInsgc2VhcmNoLCBzZWFyY2hpbmcgfVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzZWFyY2hpbmdcIj5cbiAgICAgICAgICAgICAgICBOZW5odW1hIE9ww6fDo28gZW5jb250cmFkYSBwYXJhIDxlbT57eyBzZWFyY2ggfX08L2VtPi5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZW0gdi1lbHNlPkRpZ2l0ZSBwYXJhIHBlc3F1aXNhcjwvZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9WdWVTZWxlY3Q+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInUiLCJhIiwiaCIsInYiLCJLIiwiQSIsInIiLCJkIiwiYyIsIkIiLCJMIiwiRCIsImIiLCJfIiwiTyIsImsiLCJqIiwidyIsIlAiLCIkIiwiUiIsInoiLCJGIiwiZGVib3VuY2UiXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLElBQUksT0FBTyxnQkFBZ0IsSUFBSSxPQUFPO0FBQzFDLElBQUksSUFBSSxPQUFPO0FBQ2YsSUFBSSxJQUFJLE9BQU87QUFDZixJQUFJLElBQUksT0FBTyxVQUFVLGdCQUFnQixJQUFJLE9BQU8sVUFBVTtBQUM5RCxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxLQUFLLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRSxZQUFZLE1BQUksY0FBYyxNQUFJLFVBQVUsTUFBSSxPQUFPLEVBQUMsQ0FBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsTUFBTTtBQUM1SCxXQUFTLEtBQUssTUFBTSxJQUFJ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

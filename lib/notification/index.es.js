import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createVNode, resolveDynamicComponent, unref, renderSlot, createTextVNode } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_badge = resolveComponent("el-badge");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        reference: withCtx(() => [
          createVNode(_component_el_badge, {
            style: { "cursor": "pointer" },
            value: __props.value,
            max: __props.max,
            "is-dot": __props.isDot
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_1
          ])
        ]),
        _: 3
      });
    };
  }
});
var index = {
  install(app) {
    app.component("notification", _sfc_main);
  }
};
export { index as default };

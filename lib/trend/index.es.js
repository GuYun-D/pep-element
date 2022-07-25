import { defineComponent, useSlots, computed, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, renderSlot, toDisplayString, createBlock, resolveDynamicComponent } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".trend[data-v-0c655778]{display:flex;align-items:center}.trend .text[data-v-0c655778]{font-size:12px;margin-right:4px}.trend .icon svg[data-v-0c655778]{width:1em;height:1em}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "trend" };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "icon" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    iconType: {
      type: String,
      default: "up"
    },
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    text: {
      type: String,
      default: "\u6587\u5B57"
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    upTextColor: {
      type: String,
      default: "rgb(0, 0, 0)"
    },
    downTextColor: {
      type: String,
      default: "rgb(0, 0, 0)"
    },
    reverseColor: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const slot = useSlots();
    const textColor = computed(() => {
      return props.iconType === "up" ? props.upTextColor : props.downTextColor;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: "text",
          style: normalizeStyle({
            color: unref(textColor)
          })
        }, [
          unref(slot).default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.text), 1))
        ], 4),
        createElementVNode("div", _hoisted_3, [
          __props.iconType === "up" ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.upIcon)}`), {
            key: 0,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.upIconColor : "#52c41a" })
          }, null, 8, ["style"])) : (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.downIcon)}`), {
            key: 1,
            style: normalizeStyle({
              color: !__props.reverseColor ? __props.downIconColor : "#f5222d"
            })
          }, null, 8, ["style"]))
        ])
      ]);
    };
  }
});
var Trend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c655778"]]);
var index = {
  install(app) {
    app.component("trend", Trend);
  }
};
export { index as default };

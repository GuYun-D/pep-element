import { defineComponent, ref, onMounted, resolveComponent, openBlock, createBlock, mergeProps } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "svg[data-v-6fc120c7]{width:126px;height:126px}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 1e3
    }
  },
  setup(__props) {
    const props = __props;
    const p = ref(0);
    onMounted(() => {
      if (props.isAnimation) {
        let t = Math.ceil(props.time / props.percentage);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
      } else {
        p.value = props.percentage;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createBlock(_component_el_progress, mergeProps(_ctx.$attrs, { percentage: p.value }), null, 16, ["percentage"]);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fc120c7"]]);
var index = {
  install(app) {
    app.component("pep-progress", Progress);
  }
};
export { index as default };

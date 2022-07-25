import { defineComponent, openBlock, createElementBlock } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    list: {
      type: Array,
      required: true
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "list");
    };
  }
});
var index = {
  install(app) {
    app.component("list", _sfc_main);
  }
};
export { index as default };

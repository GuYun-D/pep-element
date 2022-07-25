import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, mergeProps } from "vue";
const _hoisted_1 = { style: { "display": "flex" } };
const _hoisted_2 = { style: { "margin-right": "20px" } };
const _hoisted_3 = { style: { "margin-right": "20px" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"
    },
    disableTody: {
      type: Boolean,
      default: true
    }
  },
  emits: ["startChange", "endChange"],
  setup(__props, { emit: emites }) {
    const props = __props;
    const startDate = ref(null);
    const endDate = ref(null);
    const endDateDisabled = ref(true);
    const startDisabledDate = (time) => {
      if (props.disableTody)
        return time.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    };
    const endDateDisabledDate = (time) => {
      if (startDate.value) {
        return time.getTime() < startDate.value.getTime() + 1e3 * 60 * 60 * 24;
      }
    };
    watch(() => startDate.value, (val) => {
      if (!val) {
        endDateDisabled.value = true;
        endDate.value = null;
      } else {
        emites("startChange", startDate.value);
        endDateDisabled.value = false;
      }
    });
    watch(() => endDate.value, (val) => {
      if (val) {
        emites("endChange", {
          startDate: startDate.value,
          endDate: endDate.value
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(_component_el_date_picker, mergeProps({
            modelValue: startDate.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
            type: "date",
            placeholder: __props.startPlaceholder,
            "disabled-date": startDisabledDate
          }, _ctx.$attrs.startOptions), null, 16, ["modelValue", "placeholder"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(_component_el_date_picker, mergeProps({
            modelValue: endDate.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event),
            type: "date",
            placeholder: __props.endPlaceholder,
            disabled: endDateDisabled.value,
            "disabled-date": endDateDisabledDate
          }, _ctx.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled"])
        ])
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component("pep-date", _sfc_main);
  }
};
export { index as default };

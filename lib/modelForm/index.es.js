import { defineComponent, ref, watch, resolveComponent, openBlock, createBlock, mergeProps, withCtx, renderSlot, createVNode } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    onPreview: Function,
    onRemove: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    onChange: Function,
    beforeUpload: Function,
    beforeRemove: Function,
    httpRequest: Function,
    onExceed: Function,
    isScroll: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const dialogVisible = ref(props.visible);
    const form = ref(null);
    watch(() => props.visible, (val) => {
      dialogVisible.value = val;
    });
    watch(() => dialogVisible.value, (val) => {
      console.log("\u4F60\u4E86\u4E0D\u8D77", val);
      emits("update:visible", val);
    });
    return (_ctx, _cache) => {
      const _component_pep_form = resolveComponent("pep-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, mergeProps({
        class: { "gy-choose-icon-dialog-body-height": __props.isScroll },
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event)
      }, _ctx.$attrs, { options: __props.options }), {
        header: withCtx(() => [
          renderSlot(_ctx.$slots, "header")
        ]),
        default: withCtx(() => [
          createVNode(_component_pep_form, {
            "on-preview": __props.onPreview,
            "on-remove": __props.onRemove,
            "on-success": __props.onSuccess,
            "on-error": __props.onError,
            "on-progress": __props.onProgress,
            "on-change": __props.onChange,
            "before-upload": __props.beforeUpload,
            "before-remove": __props.beforeRemove,
            "http-request": __props.httpRequest,
            "on-exceed": __props.onExceed,
            ref_key: "form",
            ref: form,
            options: __props.options
          }, {
            uploadArea: withCtx(() => [
              renderSlot(_ctx.$slots, "uploadArea")
            ]),
            uploadTip: withCtx(() => [
              renderSlot(_ctx.$slots, "uploadTip")
            ]),
            _: 3
          }, 8, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "before-upload", "before-remove", "http-request", "on-exceed", "options"])
        ]),
        footer: withCtx(() => [
          renderSlot(_ctx.$slots, "footer", { form: form.value })
        ]),
        _: 3
      }, 16, ["class", "modelValue", "options"]);
    };
  }
});
var index = {
  install(app) {
    app.component("pep-model-form", _sfc_main);
  }
};
export { index as default };

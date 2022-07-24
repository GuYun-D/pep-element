<template>
  <el-dialog
    :class="{ 'gy-choose-icon-dialog-body-height': isScroll }"
    v-model="dialogVisible"
    v-bind="$attrs"
    :options="options"
  >
    <template #header> <slot name="header"></slot> </template>
    <template #default>
      <pep-form
        :on-preview="onPreview"
        :on-remove="onRemove"
        :on-success="onSuccess"
        :on-error="onError"
        :on-progress="onProgress"
        :on-change="onChange"
        :before-upload="beforeUpload"
        :before-remove="beforeRemove"
        :http-request="httpRequest"
        :on-exceed="onExceed"
        ref="form"
        :options="options"
      >
        <template #uploadArea>
          <slot name="uploadArea"></slot>
        </template>
        <template #uploadTip>
          <slot name="uploadTip"></slot>
        </template>
      </pep-form>
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from "vue-demi";
import { FormInstance, FormOptions } from "../../form/src/types/types";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
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
    // 只在屏幕区域内滚动
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:visible"]);
const dialogVisible = ref<boolean>(props.visible);
const form = ref<FormInstance | null>(null);

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);

watch(
  () => dialogVisible.value,
  (val) => {
    console.log("你了不起", val);
    emits("update:visible", val);
  }
);
</script>

<style scoped lang="scss">
</style>
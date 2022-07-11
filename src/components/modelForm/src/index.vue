<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs" :options="options">
    <template #title> <slot name="header"></slot> </template>
    <template #default>
      <pep-form ref="form" :options="options"></pep-form>
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
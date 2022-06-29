<template>
  <el-badge style="cursor: pointer" :value="value" :max="max" :is-dot="isDot">
    <component :is="`el-icon-${toLine(icon)}`"></component>
  </el-badge>
</template>

<script setup lang="ts">
import { toLine } from "../../../utils";
const props = defineProps({
  icon: {
    type: String,
    default: "Bell",
  },
  value: {
    type: [String, Number],
    default: "",
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
</style>
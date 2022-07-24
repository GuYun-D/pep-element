<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <slot>这是一段内容</slot>
    <template #reference>
      <el-badge
        style="cursor: pointer"
        :value="value"
        :max="max"
        :is-dot="isDot"
      >
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from "../../utils";
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
<template>
  <div>list</div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ActionOptions, ListOptions } from "./types";

const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
</script>

<style scoped>
</style>
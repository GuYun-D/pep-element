<template>
  <el-table :data="data">
    <template v-for="(item, index) in tableOptions" :key="item.label">
      <el-table-column
        v-if="!item.slot"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
      </el-table-column>
      <el-table-column
        v-else
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>

    <el-table-column
      :label="actionOptions.label"
      :align="actionOptions.align"
      :width="actionOptions.width"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { TableOptions } from "./type";

const props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },

  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
});

const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
);

// 找到操作项的配置
const actionOptions = computed(() => props.options.find((item) => item.action));
</script>

<style scoped lang="less">
</style>
<template>
  <el-table
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :data="data"
  >
    <template v-for="item in tableOptions" :key="item.label">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <template v-if="scope.$index + scope.column.id === currentEdit">
            <div style="display: flex">
              <el-input size="small" v-model="scope.row[item.prop]"></el-input>
              <slot name="editCell" :scope="scope" v-if="$slots.editCell">
              </slot>
              <div class="icons" v-else>
                <el-icon-check
                  @click="confirm(scope)"
                  class="check"
                ></el-icon-check>
                <el-icon-close
                  @click="cancel(scope)"
                  class="close"
                ></el-icon-close>
              </div>
            </div>
          </template>
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop] }}</span>
            <component
              :is="`el-icon-${toLine(editIcon)}`"
              @click="handleEdit(scope)"
              class="edit"
              v-if="item.editable"
            ></component>
          </template>
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
import { computed, PropType, ref } from "vue";
import { TableOptions } from "./type";
import { toLine } from "../../../utils";

const props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },

  data: {
    type: Array as PropType<any[]>,
    required: true,
  },

  elementLoadingText: String, // 加载文案
  elementLoadingSpinner: String, // 加载图标名
  elementLoadingSvg: String, // 加载svg图标
  elementLoadingBackground: String, // 加载的背景颜色
  elementLoadingSvgViewBox: String, // 加载svg的配置

  editIcon: {
    type: String,
    default: "edit",
  },
});
const emits = defineEmits(["confirm", "cancel"]);

const currentEdit = ref<string>("");

const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
);

// 找到操作项的配置
const actionOptions = computed(() => props.options.find((item) => item.action));

const isLoading = computed(() => !props.data || !props.data.length);

const handleEdit = (scope: any) => {
  // 创建唯一标识，当前只允许一个单元格在编辑状态
  currentEdit.value = scope.$index + scope.column.id;
};

const confirm = (scope: any) => {
  currentEdit.value = "";
  emits("confirm", scope);
};
const cancel = (scope: any) => {
  currentEdit.value = "";
  emits("cancel", scope);
};
</script>

<style scoped lang="scss">
.edit {
  position: relative;
  top: 2px;
  width: 1em;
  height: 1em;
  margin-left: 5px;
  cursor: pointer;
}

.icons {
  display: flex;
  align-items: center;
  svg {
    width: 1em;
    height: 1em;
    margin-left: 8px;
    cursor: pointer;
  }
  .check {
    color: red;
  }

  .close {
    color: green;
  }
}
</style>
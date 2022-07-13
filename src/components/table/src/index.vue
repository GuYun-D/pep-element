<template>
  <el-table
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    :data="data"
    @row-click="handleRowClick"
  >
    <template v-for="item in tableOptions" :key="item.label">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <template v-else>
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input
                  size="small"
                  v-model="scope.row[item.prop]"
                ></el-input>
                <slot name="editCell" :scope="scope" v-if="$slots.editCell">
                </slot>
                <div class="icons" v-else>
                  <el-icon-check
                    @click.stop="confirm(scope)"
                    class="check"
                  ></el-icon-check>
                  <el-icon-close
                    @click.stop="cancel(scope)"
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
                @click.stop="handleEdit(scope)"
                class="edit"
                v-if="item.editable"
              ></component>
            </template>
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
        <slot name="editRow" v-if="scope.row.rowEdit"></slot>
        <slot name="action" v-else :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType, ref, watch } from "vue";
import { TableOptions } from "./type";
import { toLine } from "../../../utils";
import cloneDeep from "lodash/cloneDeep";
import { ro } from "element-plus/es/locale";

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

  isEditRow: {
    type: Boolean,
    default: false,
  },

  editRowIndex: {
    // 编辑行按钮的标识
    type: String,
    default: "",
  },
});
const emits = defineEmits(["confirm", "cancel", "update:editRowIndex"]);

const currentEdit = ref<string>("");
// 拷贝一份表格数据,单向数据流
const tableDate = ref(cloneDeep(props.data));
const cloneEditRowIndex = ref<string>(props.editRowIndex);

const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
);

watch(
  () => props.data,
  (val) => {
    if (Array.isArray(val) && val.length) {
      tableDate.value = cloneDeep(val);
      tableDate.value.map((item: any) => {
        item.rowEdit = false;
      });
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

watch(
  () => props.editRowIndex,
  (val) => {
    if (val) cloneEditRowIndex.value = val;
  }
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

const handleRowClick = (row: any, column: any) => {
  console.log(row);
  console.log(column);

  // 判断当前点击的是否是操作项的内容
  if (column.label === actionOptions.value?.label) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit;

      // 重置其他数据的rowEdit
      tableDate.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false;
        }
        if (!row.rowEdit) {
          emits("update:editRowIndex", "edit");
        }
      });
    }
  }
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
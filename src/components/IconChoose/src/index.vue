<template>
  <el-button type="primary" @click="handleClick">
    <slot>选择</slot>
  </el-button>

  <div class="gy-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
          :key="index"
          @click="copyIconName(item)"
        >
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "../../../utils";
import { useCopy } from "../../../hooks/useCopy";

const props = defineProps<{
  title: string;
  visible: boolean;
}>();

const emits = defineEmits(["update:visible"]);

const dialogVisible = ref<boolean>(props.visible);

const handleClick = () => {
  emits("update:visible", !props.visible);
};

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);

watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);

const copyIconName = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
};
</script>

<style scoped lang="scss">
svg {
  width: 2em;
  height: 2em;
}

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    height: 70px;
  }
}
</style>
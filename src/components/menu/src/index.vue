<template>
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="item in data" :key="item[name]">
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item[index]"
      >
        <component
          v-if="item[icon]"
          :is="`el-icon-${toLine(item[icon])}`"
        ></component>
        <span class="title-text">{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <template #title>
          <component
            v-if="item[icon]"
            :is="`el-icon-${toLine(item[icon])}`"
          ></component>
          <span class="title-text">{{ item[name] }}</span>
        </template>
        <el-menu-item
          v-for="item1 in item[children]"
          :key="item1[name]"
          :index="item1[index]"
        >
          <component
            v-if="item1[icon]"
            :is="`el-icon-${toLine(item1[icon])}`"
          ></component>
          <span class="title-text">{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from "vue-demi";
import { toLine } from "../../../utils";

const props = defineProps({
  // 侧边栏数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 默认选中菜单
  defaultActive: {
    type: String,
    default: "",
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },
  // 菜单标题的键名
  name: {
    type: String,
    default: "name",
  },
  index: {
    type: String,
    default: "index",
  },
  icon: {
    type: String,
    default: "icon",
  },
  children: {
    type: String,
    default: 'children',
  },
});

console.log(props.data);
</script>

<style scoped lang="scss">
svg {
  margin-right: 4px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu--collapse {
  .title-text {
    margin-left: 0;
  }
}

.title-text {
  margin-left: 10px;
}
</style>
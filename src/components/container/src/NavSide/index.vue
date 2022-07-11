<template>
  <!-- <el-menu
    :collapse="collapse"
    default-active="1"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <span class="title-text">首页</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon-menu />
      <span class="title-text">图标选择器</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <span class="title-text">导航一</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span class="title-text">导航一</span>
    </el-menu-item>
  </el-menu> -->

  <pep-menu
    class="el-menu-vertical-demo"
    :collapse="collapse"
    :data="data"
    router
    :default-active="$route.path"
    style="border-right: none"
  ></pep-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();

const data = [
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "Check",
    name: "图标选择器",
    index: "/icon-choose",
  },
  {
    icon: "Location",
    name: "省市区联动",
    index: "/choose-area",
  },
  {
    icon: "Sort",
    name: "趋势标记",
    index: "/trend",
  },
  {
    icon: "Timer",
    name: "时间选择",
    index: "/choose-time",
  },
  {
    icon: "Bell",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Menu",
    name: "导航菜单",
    index: "/menu",
  },
  {
    icon: "FullScreen",
    name: "城市选择",
    index: "/choose-city",
  },
  {
    icon: "DArrowRight",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "ScaleToOriginal",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Setting",
    name: "表单",
    index: "/form",
  },
  {
   icon: 'Setting',
   name: '弹出表单',
   index: '/model-form'
  },
  {
    icon: "Grid",
    name: "表格",
    index: "/table",
  },
];
</script>
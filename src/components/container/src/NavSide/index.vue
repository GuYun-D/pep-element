<template>
  <el-menu
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
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();
</script>

<style lang="scss" scoped>
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
  margin-left: 20px;
}
</style>
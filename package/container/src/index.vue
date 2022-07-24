<template>
  <el-container>
    <el-aside width="auto">
      <NavSider :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import NavHeader from "./NavHeader/index.vue";
import NavSider from "./NavSide/index.vue";
import { ref } from "vue-demi";

let isCollapse = ref(false);
</script>

<style lang="scss" scope>
.el-header {
  padding: 0;
  box-shadow: 0 0 1px #ccc;
  
  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
<template>
  <div>
    <el-select v-model="province" placeholder="请选择省份">
      <el-option>1</el-option>
    </el-select>
    <el-select style="margin: 0 10px" v-model="city" placeholder="请选择城市">
      <el-option>2</el-option>
    </el-select>
    <el-select v-model="area" placeholder="请选择区域">
      <el-option>3</el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import allArea from "../lib/pca-code.json";

const province = ref("");
const city = ref("");
const area = ref("");
</script>

<style lang="scss" scoped>
</style>
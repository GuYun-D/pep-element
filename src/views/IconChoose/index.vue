<template>
  <div>
    <IconChoose title="选择图标" v-model:visible="visible"> 选择图标 </IconChoose>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import IconChoose from "../../components/IconChoose/src/index.vue";

let visible = ref<boolean>(false);
</script>

<style scoped lang="scss">
</style>
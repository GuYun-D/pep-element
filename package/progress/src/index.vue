<template>
  <el-progress v-bind="$attrs" :percentage="p"></el-progress>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue-demi";

const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
  },

  isAnimation: {
    type: Boolean,
    default: false,
  },

  time: {
    type: Number,
    default: 1000,
  },
});

const p = ref(0);

onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value += 1;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
      }
    }, t);
  }else {
    p.value = props.percentage
  }
});
</script>

<style lang="scss" scoped>
svg{
  width: 126px;
  height: 126px;
}
</style>
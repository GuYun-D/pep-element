<template>
  <div>
    <pep-time
      :startOptions="startOptions"
      @start-change="startChange"
      @end-change="endChange"
    ></pep-time>
  </div>
</template>

<script setup lang="ts">
interface EndTimeModel {
  startTime: string;
  endTime: string;
}

const startChange = (val: string) => {
  console.log("开始时间", val);
};

const endChange = (val: EndTimeModel) => {
  console.log("结束时间", val);
};

const startOptions = {
  size: "small",
  clearable: false,
};
</script>

<style lang="scss" scoped>
</style>
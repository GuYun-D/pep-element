<template>
  <div>
    <pep-time
      :startOptions="startOptions"
      @start-change="startChange"
      @end-change="endChange"
    ></pep-time>

    <pep-date
      @start-change="dateStart"
      @end-change="dateEnd"
    ></pep-date>
  </div>
</template>

<script setup lang="ts">
interface EndTimeModel {
  startTime: string;
  endTime: string;
}

interface EndValue {
  startDate: string;
  endDate: string;
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

const dateStart = (date: Date) => {
  console.log(date);
};

const dateEnd = (date: EndValue) => {
  console.log(date);
};
</script>

<style lang="scss" scoped>
</style>
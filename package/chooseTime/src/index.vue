<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-time-select
        v-model="startTime"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endtTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisable"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const startTime = ref("");
const endTime = ref("");
const endTimeDisable = ref<boolean>(true);
const emits = defineEmits(["startChange", "endChange"]);

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束时间",
  },
  startTimeStart: {
    type: String,
    default: "00:30",
  },
  endtTimeStart: {
    type: String,
    default: "00:30",
  },
  startStep: {
    type: String,
    default: "00:30",
  },
  endStep: {
    type: String,
    default: "00:30",
  },
  startTimeEnd: {
    type: String,
    default: "24:00",
  },
  endTimeEnd: {
    type: String,
    default: "24:00",
  },
});

watch(
  () => startTime.value,
  (val) => {
    if (val === '') {
      endTime.value = "";
      endTimeDisable.value = true
    } else {
      endTimeDisable.value = false;
      endTime.value = ""
      emits("startChange", val);
    }
  }
);

watch(
  () => endTime.value,
  (val) => {
    if (val) {
      emits("endChange", {
        startTime: startTime.value,
        endTime: val,
      });
    }
  }
);
</script>

<style scoped lang="scss">
</style>
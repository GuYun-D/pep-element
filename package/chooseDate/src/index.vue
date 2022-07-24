<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions"
      ></el-date-picker>
    </div>
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDateDisabledDate"
        v-bind="$attrs.endOptions"
      ></el-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue-demi";

const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);

const emites = defineEmits(["startChange", "endChange"]);

const props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  disableTody: {
    type: Boolean,
    default: true,
  },
});

const endDateDisabled = ref<boolean>(true);
const startDisabledDate = (time: Date) => {
  if (props.disableTody)
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
};

const endDateDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};

watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDateDisabled.value = true;
      endDate.value = null;
    } else {
      emites("startChange", startDate.value);
      endDateDisabled.value = false;
    }
  }
);

watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emites("endChange", {
        startDate: startDate.value,
        endDate: endDate.value,
      });
    }
  }
);
</script>

<style lang="scss" scoped>
</style>
<template>
  <div id="calendar"></div>
</template>

<script setup lang="ts">
import { Calendar } from "@fullcalendar/core";
import daygrid from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import { ref, onMounted } from "vue";

const props = defineProps({
  locl: {
    // 显式的语言
    type: String,
    default: "zh-ch",
  },

  initalView: {
    // 显示的视图模式
    type: String,
    default: "dayGridMonth",
  },

  buttonText: {
    type: Object,
    default: () => {
      return {
        today: "今天",
        month: "月",
        day: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        prev: "上一月",
        next: "下一月",
      };
    },
  },

  headerToolbar: {
    // 头部工具栏
    type: Object,
    default: () => {
      return {
        start: "title",
        center: "",
        end: "prev today next",
      };
    },
  },

  footerToolbar: {
    type: Object,
    default: () => {},
  },
});

const calendar = ref<Calendar>();

const renderCalendar = () => {
  const calendarEl = document.querySelector("#calendar") as HTMLElement;
  if (calendarEl) {
    calendar.value = new Calendar(calendarEl, {
      plugins: [daygrid, interaction],
      locale: props.locl,
      initialView: props.initalView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
    });

    calendar.value.render()
  }
};

onMounted(() => {
  renderCalendar();
});
</script>

<style scoped>
</style>
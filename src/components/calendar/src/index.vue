<template>
  <div id="calendar"></div>
</template>

<script setup lang="ts">
import { Calendar, EventClickArg } from "@fullcalendar/core";
import daygrid from "@fullcalendar/daygrid";
import interaction, { DateClickArg } from "@fullcalendar/interaction";
import { ref, onMounted, PropType, watch } from "vue";
import { EventItem } from "./types";

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
  // 事件源
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => [],
  },
});

const emits = defineEmits(["dateClick", "eventClick"]);

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
      eventSources: [
        {
          events(e, callBack) {
            if (props.events.length) callBack(props.events);
            else callBack([]);
          },
        },
      ],

      // 点击日历上的某一天
      dateClick(info: DateClickArg) {
        emits("dateClick", info);
      },

      // 点击待办事的回调
      eventClick(info: EventClickArg) {
        emits("eventClick", info);
      },
    });

    calendar.value.render();
  }
};

onMounted(() => {
  renderCalendar();
});

watch(
  () => props.events,
  () => {
    renderCalendar();
  },
  { deep: true }
);
</script>

<style scoped></style>

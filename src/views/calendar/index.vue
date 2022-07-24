<template>
  <div>
    <pep-calendar
      @date-click="dateClick"
      @event-click="eventClick"
      :events="events"
    ></pep-calendar>
  </div>
</template>

<script setup lang="ts">
import { EventClickArg } from "@fullcalendar/common";
import { DateClickArg } from "@fullcalendar/interaction";
import { ref } from "vue-demi";
import { EventItem } from "../../components/calendar/src/types";

const events = ref<EventItem[]>([
  {
    title: "购物",
    start: "2022-07-24 08:00",
    end: "2022-07-24 20:00",
    editable: true,
  },
  {
    title: "敲代码",
    start: "2022-07-24 21:00",
    end: "2022-07-24 12:00",
  },
]);

const dateClick = (info: DateClickArg) => {
  console.log(info);
  events.value.push({
    start: info.dateStr + " 12:00",
    end: info.dateStr + " 18:00",
    title: "学习",
  });
};

const eventClick = (info: EventClickArg) => {
  console.log(info);
};
</script>

<style scoped></style>

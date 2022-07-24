<template>
  <div>
    <pep-calendar
      @date-click="dateClick"
      @event-click="eventClick"
      :events="events"
      displayEventEnd
      :eventContent="eventContent"
    ></pep-calendar>
  </div>
</template>

<script setup lang="ts">
import { EventClickArg } from "@fullcalendar/common";
import { EventContentArg } from "@fullcalendar/core";
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

const eventContent = (arg: EventContentArg) => {
  const div = document.createElement("div");
  const timeTextArr = arg.timeText.split("-");
  console.log("操了", timeTextArr[0].replace("时", ""));
  let start = timeTextArr[0]
    ? timeTextArr[0]
        .replace("上午", "")
        .replace("下午", "")
        .replace("时", "")
        .trim()
    : "未设定";
  let end = timeTextArr[1]
    ? timeTextArr[1]
        .replace("上午", "")
        .replace("下午", "")
        .replace("时", "")
        .trim()
    : "未设定";
  div.innerHTML = `
          <div>开始时间: ${start},<div>
          <div>结束时间: ${end},<div>
          <div>标题: ${arg.event._def.title},<div>
        `;
  return {
    domNodes: [div],
  };
};
</script>

<style scoped></style>

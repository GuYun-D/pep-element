<template>
  <div class="trend">
    <div
      class="text"
      :style="{
        color: textColor,
      }"
    >
      <slot v-if="slot.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- <el-icon-arrowup
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="iconType === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{
          color: !reverseColor ? downIconColor : '#f5222d',
        }"
        v-else
      ></el-icon-arrowdown> -->
      <component
        v-if="iconType === 'up'"
        :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
      ></component>
      <component
        v-else
        :is="`el-icon-${toLine(downIcon)}`"
        :style="{
          color: !reverseColor ? downIconColor : '#f5222d',
        }"
      ></component>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { toLine } from "../../utils";

const props = defineProps({
  iconType: {
    type: String,
    default: "up",
  },
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
  text: {
    type: String,
    default: "文字",
  },
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
  upTextColor: {
    type: String,
    default: "rgb(0, 0, 0)",
  },
  downTextColor: {
    type: String,
    default: "rgb(0, 0, 0)",
  },
  /**
   * 颜色反转只在默认的颜色下生效，如果使用了自定义颜色，该属性将不生效
   */
  reverseColor: {
    type: Boolean,
    default: false,
  },
});

const slot = useSlots();

const textColor = computed(() => {
  return props.iconType === "up" ? props.upTextColor : props.downTextColor;
});

</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
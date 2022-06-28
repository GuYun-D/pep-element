<template>
  <div>
    <trend text="营业额" up-icon-color="#f40">插槽</trend>
    <trend text="营业额" iconType="down" downIconColor="#39b1bb"></trend>
    <trend
      text="营业额"
      reverseColor
      iconType="down"
      downIconColor="#39b1bb"
    ></trend>
    <trend
      text="自定义up"
      up-icon="CaretTop"
      iconType="up"
      downIconColor="#39b1bb"
    ></trend>
    <trend
      text="自定义down"
      iconType="down"
      down-icon="CaretBottom"
      downIconColor="#39b1bb"
    ></trend>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>
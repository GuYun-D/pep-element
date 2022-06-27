<template>
  <div>
    <ChooseArea @change="handleGetAreas"></ChooseArea>
  </div>
</template>

<script setup lang="ts">
import ChooseArea from "../../components/chooseArea/src/index.vue";

const handleGetAreas = (val: any) => {
  console.log(val);
};
</script>
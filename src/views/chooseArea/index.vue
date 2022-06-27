<template>
  <div>
    <choose-area @change="handleGetAreas"></choose-area>
  </div>
</template>

<script setup lang="ts">
const handleGetAreas = (val: any) => {
  console.log(val);
};
</script>
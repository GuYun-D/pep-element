<template>
  <pep-progress isAnimation :percentage="60"> </pep-progress>
  <pep-progress
    :text-inside="true"
    :stroke-width="24"
    :percentage="100"
    status="success"
    isAnimation
  ></pep-progress>
   <pep-progress
    :text-inside="true"
    :stroke-width="24"
    :percentage="100"
    status="success"
    isAnimation
    type="circle"
  ></pep-progress>
</template>

<script setup lang="ts">
</script>
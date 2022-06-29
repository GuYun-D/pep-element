<template>
  <div>
    <notification value="30" />
    <br />
    <notification value="50" :max="10" />
    <br />
    <notification value="30" isDot />
    <br />
    <notification value="30" icon="ChatLineRound" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
<template>
  <div>
    <!-- <notification value="30" />
    <br />
    <notification value="50" :max="10" />
    <br />
    <notification value="30" isDot />
    <br />
    <notification value="30" icon="ChatLineRound" />
     -->

    <notification :max="10" :value="30">
      <list></list>
    </notification>

    <!-- <el-badge :value="100" :max="10" class="item">
      <el-button>replies</el-button>
    </el-badge> -->
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
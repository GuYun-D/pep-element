<template>
  <div style="width: 200px">
    <!-- <pep-menu
      background-color="#ccc"
      :data="data1"
      default-active="1"
    ></pep-menu> -->
    <pep-infinite-menu background-color="#f40" :data="data2" default-active="3-1-1"></pep-infinite-menu>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    name: "导航一",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
      },
      {
        name: "导航3-2",
        index: "3-2",
        icon: "Document",
      },
    ],
  },
  {
    name: "导航4",
    index: "4",
    icon: "Document",
  },
  {
    name: "导航5",
    index: "5",
    icon: "Document",
  },
];

const data2 = [
  {
    name: "导航一",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Document",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Document",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Document",
      },
      {
        name: "导航3-2",
        index: "3-2",
        icon: "Document",
        children: [
          {
            name: "导航3-1-1",
            index: "3-1-1",
            icon: "Document",
            children: [
              {
                name: "导航3-1-1-1",
                index: "3-1-1-1",
                icon: "Document",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "导航4",
    index: "4",
    icon: "Document",
  },
  {
    name: "导航5",
    index: "5",
    icon: "Document",
  },
];
</script>

<style scoped>
</style>
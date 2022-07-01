<template>
  <div style="width: 200px">
    <!-- <pep-menu
      background-color="#ccc"
      :data="data1"
      default-active="3-1"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></pep-menu> -->
    <pep-infinite-menu
      background-color="#f40"
      :data="data2"
      default-active="3-1"
      name="a"
      index="b"
      icon="c"
      children="d"
    ></pep-infinite-menu>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    a: "导航一",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
      },
      {
        a: "导航3-2",
        b: "3-2",
        c: "Document",
      },
    ],
  },
  {
    a: "导航4",
    b: "4",
    c: "Document",
  },
  {
    a: "导航5",
    b: "5",
    c: "Document",
  },
];

const data2 = [
  {
    a: "导航一",
    b: "1",
    c: "Document",
  },
  {
    a: "导航2",
    b: "2",
    c: "Document",
  },
  {
    a: "导航3",
    b: "3",
    c: "Document",
    d: [
      {
        a: "导航3-1",
        b: "3-1",
        c: "Document",
      },
      {
        a: "导航3-2",
        b: "3-2",
        c: "Document",
        d: [
          {
            a: "导航3-1-1",
            b: "3-1-1",
            c: "Document",
            d: [
              {
                a: "导航3-1-1-1",
                b: "3-1-1-1",
                c: "Document",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    a: "导航4",
    b: "4",
    c: "Document",
  },
  {
    a: "导航5",
    b: "5",
    c: "Document",
  },
];
</script>

<style scoped>
</style>
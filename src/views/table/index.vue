
<template>
  <div>
    <pep-table :options="options" :data="tableData">
      <template #action="{ scope }">
        <el-button type="primary" @click="edit(scope)" size="default"
          >编辑</el-button
        >
      </template>

      <template #name="{ scope }">
        <div class="name">
          {{ scope.row.name }}
        </div>
      </template>
    </pep-table>
  </div>
</template>

<script setup lang="ts">
import { TableOptions } from "../../components/table/src/type";

const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "right",
    width: 300,
  },
  {
    label: "名字",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
  },
  {
    label: "操作",
    align: "center",
    action: true,
  },
];
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const edit = (scope: any) => {
  console.log(scope);
};
</script>

<style scoped>
</style>
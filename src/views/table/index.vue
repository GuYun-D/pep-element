
<template>
  <div>
    <pep-table
      elementLoadingText="加载中......"
      :options="options"
      :data="tableDate"
      @confirm="confirm"
      @cancel="cancel"
      edit-icon="Bottom"
      isEditRow
      :total="total"
      v-model:editRowIndex="editRowIndex"
      :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(122, 122, 122, 0.8)"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <template #action="{ scope }">
        <el-button type="primary" @click="edit(scope)" size="default"
          >编辑</el-button
        >

        <el-button type="primary" @click="deleteRow(scope)" size="default"
          >删除</el-button
        >
      </template>

      <template #name="{ scope }">
        <div class="name">
          {{ scope.row.name }}
        </div>
      </template>

      <template #editRow>
        <el-button>确认</el-button>
        <el-button>取消</el-button>
      </template>
    </pep-table>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { TableOptions } from "../../components/table/src/type";

const tableDate = ref<any[]>([]);
const editRowIndex = ref<string>("edit");

const currentPage = ref<number>(1);
const pageSize = ref(10);
const total = ref<number>();

const getDate = () => {
  axios
    .post("/api/list", {
      current: currentPage.value,
      pageSize: pageSize.value,
    })
    .then((res) => {
      tableDate.value = res.data.data.rows;
      total.value = res.data.data.total;
      console.log(res);
    });
};
onMounted(() => {
  getDate()
});

// setTimeout(() => {
//   tableDate.value = [
//     {
//       date: "2016-05-03",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-02",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-04",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//     {
//       date: "2016-05-01",
//       name: "Tom",
//       address: "No. 189, Grove St, Los Angeles",
//     },
//   ];
// });

const options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "right",
    width: 300,
    editable: true,
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
    prop: "actions",
    align: "center",
    action: true,
  },
];

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

const edit = (scope: any) => {
  console.log(scope);
};

const deleteRow = (scope: any) => {};

const confirm = (scope: any) => {
  console.log(scope);
};
const cancel = (scope: any) => {
  console.log(scope);
};

const handleSizeChange = (value: number) => {
  console.log("变化了", value);
  pageSize.value = value
  getDate()
};

const handleCurrentChange = (value: number) => {
  console.log("变化了", value);
  currentPage.value = value
  getDate()
};
</script>

<style scoped>
</style>
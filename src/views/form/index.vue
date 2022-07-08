<template>
  <div>
    <pep-form label-width="100px" :options="options"></pep-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from "../../components/form/src/types/types";

const options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: 'username',
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名长度不能小于2大于6",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: 'password',
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        message: "密码最小长度为6",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
    },
  },
];
</script>

<style scoped>
</style>
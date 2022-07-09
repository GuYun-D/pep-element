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
    prop: "username",
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
    prop: "password",
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
  {
    type: "select",
    value: "",
    label: "职位",
    placeholer: "请选择职位",
    prop: "role",
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
    attrs: {
      style: {
        width: "100%",
        color: "#f40",
      },
    },
  },
  {
    type: "checkbox-group",
    value: [],
    label: "爱好",
    placeholer: "请选择职位",
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3",
      },
    ],
    attrs: {
      style: {
        width: "100%",
        color: "#f40",
      },
    },
  },
  {
    type: "radio-group",
    value: '男',
    label: "性别",
    prop: 'gender',
    placeholer: "请选择性别",
    children: [
      {
        type: "radio",
        label: "男",
        value: "1",
      },
      {
        type: "radio",
        label: "女",
        value: "2",
      },
      {
        type: "radio",
        label: "保密",
        value: "3",
      },
    ],
    attrs: {
      style: {
        width: "100%",
        color: "#f40",
      },
    },
  },
];
</script>

<style scoped>
</style>
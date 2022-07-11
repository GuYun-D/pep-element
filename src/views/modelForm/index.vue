<template>
  <div>
    <pep-model-form
      v-model:visible="visible"
      :options="options"
      title="啊哈哈哈"
    >
      <template #default> </template>
      <template #footer="{ form }">
        <span class="dialog-footer">
          <el-button @click="cancel(form)">Cancel</el-button>
          <el-button type="primary" @click="confirm(form)">Confirm</el-button>
        </span>
      </template>
    </pep-model-form>
    <el-button @click="open" type="primary">弹出</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { ref } from "vue-demi";
import { FormOptions } from "../../components/form/src/types/types";

const visible = ref<boolean>(false);

const open = (form: FormInstance) => {
  visible.value = true;
};

const cancel = (form: FormInstance) => {
  visible.value = false;
};

const confirm = (form: any) => {
  const validate = form.validate();
  const formDate = form.getFormData();
  validate((validate: Boolean) => {
    if (validate) {
      ElMessage.success("成功");
      console.log(formDate);
    } else {
      ElMessage.error("失败");
    }
  });
};

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
        trigger: "change",
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
    prop: "hobbies",
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
    value: "男",
    label: "性别",
    prop: "gender",
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
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    uploadAttrs: {
      actions: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
    },
  },
];
</script>
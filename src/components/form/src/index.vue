<template>
  <el-form
    v-if="model"
    ref="form"
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload'"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop]"
        ></component>
        <el-upload
          v-else
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>

      <el-form-item
        :label="item.label"
        :prop="item.prop"
        v-if="item.children && item.children.length"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop]"
        >
          <component
            :label="child.label"
            :value="child.value"
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
          ></component>
        </component>
      </el-form-item>
    </template>

    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>

  {{ model }}
</template>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from "vue";
import cloneDeep from "lodash/cloneDeep";
import { FormInstance, FormOptions } from "./types/types";
const props = defineProps({
  options: {
    // 表单的配置项
    type: Array as PropType<FormOptions[]>,
    required: true,
  },

  httpRequest: {
    type: Function,
  },
});

const emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "before-upload",
  "before-remove",
  "on-exceed",
]);

let model = ref<any>();
let rules = ref<any>();
const form = ref<FormInstance | null>(null);

const createModelAndRules = () => {
  if (props.options && props.options.length) {
    const m: any = {};
    const r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });

    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};

onMounted(() => {
  createModelAndRules();
});

watch(
  () => props.options,
  () => {
    createModelAndRules();
  },
  {
    deep: true,
  }
);

const onPreview = (file: any) => {
  emits("on-preview", file);
};

const onRemove = (file: any, fileList: any) => {
  emits("on-remove", file, fileList);
};

const onSuccess = (response: any, file: any, fileList: any) => {
  emits("on-success", response, file, fileList);
};

const onError = (err: any, file: any, fileList: any) => {
  emits("on-error", err, file, fileList);
};

const onProgress = (event: any, file: any, fileList: any) => {
  emits("on-progress", event, file, fileList);
};

const onChange = (file: any, fileList: any) => {
  emits("on-change", file, fileList);
};

const beforeUpload = (file: any) => {
  emits("before-upload", file);
};

const beforeRemove = (file: any, fileList: any) => {
  emits("before-remove", file, fileList);
};

const onExceed = (files: any, fileList: any) => {
  emits("on-exceed", files, fileList);
};
</script>

<style scoped lang="scss">
</style>
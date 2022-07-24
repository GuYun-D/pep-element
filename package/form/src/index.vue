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
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop]"
        ></component>
        <el-upload
          v-if="item.type === 'upload'"
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

        <div
          v-if="item.type === 'editor'"
          style="border: 1px solid #ccc; border-radius: 10px; overflow: hidden"
        >
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="item.editorMode || 'default'"
          />

          <Editor
            v-model="model[item.prop]"
            :defaultConfig="editorConfig"
            :mode="item.editorMode || 'default'"
            @onCreated="handleCreated"
            :style="item.attrs.style"
          />
        </div>
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
import {
  onMounted,
  PropType,
  ref,
  watch,
  shallowRef,
  onBeforeUnmount,
} from "vue";
import cloneDeep from "lodash/cloneDeep";
import { FormInstance, FormOptions, WangEditorMode } from "./types/types";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css";

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
// wangeditor
const editorRef = shallowRef();
const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };
let editorProp: string;
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const resetFields = () => {
  form.value!.resetFields();
  if (props.options && props.options.length) {
    editorRef.value.clear();
  }
};

const validate = () => {
  return form.value!.validate
}

const getFormData = () => {
  return model.value
}

defineExpose({
  resetFields,
  validate,
  getFormData
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const createModelAndRules = () => {
  if (props.options && props.options.length) {
    const m: any = {};
    const r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;

      if (item.type === "editor") {
        editorProp = item.prop!;
      }
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

const onPreview = (file: File) => {
  emits("on-preview", file);
};

const onRemove = (file: File, fileList: FileList) => {
  emits("on-remove", file, fileList);
};

const onSuccess = (response: any, file: File, fileList: FileList) => {
  emits("on-success", response, file, fileList);
};

const onError = (err: any, file: File, fileList: FileList) => {
  emits("on-error", err, file, fileList);
};

const onProgress = (event: any, file: File, fileList: FileList) => {
  emits("on-progress", event, file, fileList);
};

const onChange = (file: File, fileList: FileList) => {
  emits("on-change", file, fileList);
};

const beforeUpload = (file: File) => {
  emits("before-upload", file);
};

const beforeRemove = (file: File, fileList: FileList) => {
  emits("before-remove", file, fileList);
};

const onExceed = (files: File, fileList: FileList) => {
  emits("on-exceed", files, fileList);
};
</script>

<style scoped lang="scss">
</style>
<template>
  <el-form
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
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop]"
        ></component>
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
  </el-form>

  {{ model }}
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import cloneDeep from "lodash/cloneDeep";
import { FormOptions } from "./types/types";
const props = defineProps({
  options: {
    // 表单的配置项
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});

let model = ref<any>();
let rules = ref<any>();

const createModelAndRules = () => {
  const m: any = {};
  const r: any = {};
  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value;
    r[item.prop!] = item.rules;
  });

  model.value = cloneDeep(m);
  rules.value = cloneDeep(r);
};

createModelAndRules();
</script>

<style scoped lang="scss">
</style>
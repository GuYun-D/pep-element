<template>
  <div>
    <el-select clearable v-model="province" placeholder="请选择省份">
      <el-option
        :value="item.code"
        v-for="item in areas"
        :key="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      :disabled="!province"
      style="margin: 0 10px"
      v-model="city"
      clearable
      placeholder="请选择城市"
    >
      <el-option
        :key="item.code"
        :label="item.name"
        v-for="item in selectCity"
        :value="item.code"
      ></el-option>
    </el-select>
    <el-select
      :disabled="!province || !city"
      v-model="area"
      clearable
      placeholder="请选择区域"
    >
      <el-option
        :key="item.code"
        :label="item.name"
        v-for="item in seleteArea"
        :value="item.code"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue-demi";
import allArea from "../lib/pca-code.json";

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem;
}

export interface Data {
  name: string;
  code: string;
}

const emites = defineEmits(["change"]);

const province = ref<string>("");
const city = ref<string>("");
const area = ref<string>("");
const areas = ref(allArea);

const selectCity = ref<AreaItem[]>([]);
const seleteArea = ref<AreaItem[]>([]);

watch(
  () => province.value,
  (val) => {
    if (val) {
      selectCity.value = areas.value.find(
        (item) => item.code === province.value
      )!.children!;
    }
    city.value = "";
    area.value = "";
  }
);

watch(
  () => city.value,
  (val) => {
    if (val) {
      seleteArea.value = selectCity.value.find(
        (item) => item.code === city.value
      )!.children!;
    }
    area.value = "";
  }
);

watch(
  () => area.value,
  (val) => {
    if (!val) {
      return;
    }
    const provinceData: Data = {
      code: province.value,
      name:
        province.value &&
        allArea.find((item) => item.code === province.value)!.name,
    };
    const cityData: Data = {
      code: city.value,
      name:
        city.value &&
        selectCity.value.find((item) => item.code === city.value)!.name,
    };
    const areaData: Data = {
      code: val,
      name: val && seleteArea.value.find((item) => item.code === val)!.name,
    };

    emites("change", {
      province: provinceData,
      city: cityData,
      area: areaData,
    });
  }
);
</script>

<style lang="scss" scoped>
</style>
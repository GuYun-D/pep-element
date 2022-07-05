<template>
  <el-popover placement="bottom-end" :width="500" trigger="click">
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div :class="{ rotate: visible }">
          <el-icon-arrowdown></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="2" :span="14">
          <el-select
            v-model="selectValue"
            class="m-2"
            placeholder="Select"
            size="small"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>

      <div class="city">
        <div
          class="city-item"
          v-for="(item, key) in Object.keys(cities)"
          :key="key"
          @click="handleClickChart(item)"
        >
          {{ item }}
        </div>
        <el-scrollbar :max-height="300">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col class="city-name" :span="20">
                <div
                  class="city-name-item"
                  v-for="item in value"
                  :key="item.id"
                  @click="handleChooseCity(item)"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { City } from "./types";
import city from "../lib/cities";

const emits = defineEmits(["change"]);
const result = ref<string>("请选择");
const visible = ref(false);
const radioValue = ref<string>("按城市");
const selectValue = ref<string>(""); // 下拉框的值
const cities = ref(city.cities);

const options = ref([
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]);

const handleChooseCity = (city: City) => {
  result.value = city.name;
  visible.value = false;
  emits("change", city);
};

const handleClickChart = (chart: string) => {
  const el = document.getElementById(chart);
  if(el){
    el.scrollIntoView()
  }
};
</script>

<style lang="scss" scoped>
.rotate {
  transform: rotate(180deg);
}
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  svg {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    margin-left: 4px;
    transition: all 0.25s linear;
  }
}

.container {
  padding: 10px;
}

.city {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;

  &-item {
    padding: 6px;
    margin-right: 4px;
    border: 1px solid #eee;
    margin-bottom: 6px;
    cursor: pointer;
  }

  &-name {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &-item {
      margin-right: 6px;
      margin-bottom: 6px;
      cursor: pointer;
    }
  }
}
</style>
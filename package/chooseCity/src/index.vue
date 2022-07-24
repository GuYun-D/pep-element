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
            placeholder="请搜索城市"
            size="small"
            filterable
            :filter-method="filterCity"
            @change="handleSelectChange"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>

      <template v-if="radioValue === '按城市'">
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
      </template>

      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="handleClickChart(item)"
          >
            {{ item }}
          </div>

          <el-scrollbar :max-height="300">
            <template
              v-for="(value, key) in Object.values(provinces)"
              :key="key"
            >
              <template v-for="(item1, index1) in value" :key="index1">
                <el-row :id="item1.id" style="margin-bottom: 10px">
                  <el-col :span="3">{{ item1.name }}:</el-col>
                  <el-col class="province-name" :span="21">
                    <div
                      class="province-name-item"
                      v-for="(item2, index2) in item1.data"
                      :key="index2"
                    >
                      <div @click="handleProvince(item2)">{{ item2 }}</div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </template>
          </el-scrollbar>
        </div>
      </template>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { City } from "./types";
import city from "../lib/cities";
import province from "../lib/province.json";

const emits = defineEmits(["changeCity", "changeProvince"]);
const result = ref<string>("请选择");
const visible = ref(false);
const radioValue = ref<string>("按城市");
const selectValue = ref<string>(""); // 下拉框的值
const cities = ref(city.cities);
const provinces = ref(province);

const options = ref<City[]>([]);

onMounted(() => {
  const values = Object.values(cities.value).flat(Infinity);
  options.value = values as City[];
});

const handleChooseCity = (city: City) => {
  result.value = city.name;
  visible.value = false;
  emits("changeCity", city);
};

const handleClickChart = (chart: string) => {
  const el = document.getElementById(chart);
  if (el) {
    el.scrollIntoView();
  }
};

const handleProvince = (city: string) => {
  result.value = city;
  visible.value = false;
  emits("changeProvince", province);
};

const filterCity = (val: string) => {
  let values = Object.values(cities.value).flat(Infinity) as City[];
  if (val === "") {
    options.value = Object.values(cities.value).flat(Infinity) as City[];
  } else {
    if (radioValue.value === "按城市") {
      options.value = values.filter((item) => {
        return item.name.includes(val) || item.spell.includes(val);
      });
    } else {
      options.value = values.filter((item) => {
        return item.name.includes(val);
      });
    }
  }
};

const handleSelectChange = (val: number) => {
  const allCity = Object.values(cities.value).flat(Infinity) as City[];
  const city = allCity.find((item) => item.id === val);
  result.value = city!.name;
  if (radioValue.value === "按城市") {
    emits('changeCity', city)
  }else {
    emits('changeProvince', city?.name)
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

.city,
.province {
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
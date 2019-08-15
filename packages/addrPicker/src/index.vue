<!--
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-08-14 09:40:36
 * @LastEditors: null
 * @LastEditTime: 2019-08-15 16:22:11
 * @Description: 地址选择
 * title                                 ------  弹出框表题   ----选填
 * placeholder                           ------  提示符       ----选填  不填默认 “请选择地址”
 -->
<template>
  <div class="wuss-addr-picker">
    <w-picker v-model="chooseList" :placeholder="placeholder" :title="title" :pickList="pickList" @change="choose"></w-picker>
    <!-- :pickerVisible.sync="visible" -->
  </div>
</template>
<script>
import area from "../../../utils/area";
// import area from "@/utils/area.js";
console.log(area);
export default {
  name: "WAddrPicker",
  props: {
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请选择地址"
    },
    chooseList: []
  },
  created() {
    // {
    //     name: '鸡',
    //     value: 1,
    //     children: [
    //       {
    //         name: '鸡',
    //         value: 114,
    //         children: [
    //           {
    //             name: '鸭',
    //             value: 112,
    //             children: [
    //               {
    //                 name: '鸭',
    //                 value: 111,
    //               },
    //             ]
    //           },
    //         ]
    //       },
    //       {
    //         name: '你',
    //         value: 21,
    //       },
    //     ],
    //   }
    let areas = [];

    for (const key in area.province_list) {
      areas.push({
        name: area.province_list[key],
        value: key,
        children: this.getSiteList('city', key.slice(0,2))
      });
    }

    this.pickList = areas;
  },
  data() {
    return {
      pickList: []
    };
  },
  methods: {
    getSiteList(type, code) {
      const list = area[type + "_list"];
      let result = Object.keys(list).map(listCode => ({
        value: listCode,
        name: list[listCode],
        // children: area.county_list
      }));

      if (code) {
        result = result.filter(item => item.value.indexOf(code) === 0);
      }
      return result;
    },
    choose(){
    }
  }
};
</script>
<style>
</style>



<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-13 11:16:10
 * @LastEditors: null
 * @LastEditTime: 2019-06-17 17:14:20
 * @Description: checkboxGroup component
  disable         boolean         是否禁用
  name            任意(最好String) name名标识
  size            String|number   icon图标大小  三个值可选 small base large
  wuss-color      String          选中的icon图标颜色  
  v-model         任意类型         当前选中项标识

  // 事件
  change          返回name和选中值 绑定值变化时触发的事件

  slot自定义文本
 * @form: (0 U 0)
 -->

<template>
  <div>
    <div class="checkbox-item" v-for="(item,index) in checkBoxData" :key="item.id">
      {{value}}
      <w-checkbox
        :name="name||item.name"
        :disabled=" disabled || item.disabled"
        :size="item.size ? item.size : size"
        :value="item.label"
        :id="item.id"
        :wuss-color="item.color"
        v-model="checkboxValues[index]"
        @change="changeEvt(item)"
      >{{ item.label || item.value || item}}</w-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  name: "WCheckboxgroup",
  props: {
    checkBoxData: {
      type: Array,
      required: true
    },
    size: {
      type: [String, Number, Boolean],
      default: "base"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    value: {},
    label: {
      type: [String, Number]
    },
    icon: {
      type: String,
      default: "checked"
    },
    iconSrc: {}
  },
  data() {
    return {
      checkboxValues: [true],
      initialValue: JSON.parse(JSON.stringify(this.value))
    };
  },
  computed: {},
  created() {},
  methos: {
    isChecked(item, index) {
      let values = this.initialValue;
      return values[index] === item.value;
    },
    changeEvt(item) {
      console.log(this.value);
      console.log(item);
      // 返回选中数组内容
      let value = [];

      // if(item)

      this.$emit("input", value);
      this.$emit("change", item.value, item.label);
    }
  }
};
</script>
<style scoped>
</style>



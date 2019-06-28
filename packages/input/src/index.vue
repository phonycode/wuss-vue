<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-28 17:20:52
 * @Description: 
 * @form: (0 U 0)
 * @param {String}          type                  文本类型 支持原生所有input类型
 * @param {String}          label                 文本标题 默认不生成标题
 * @param {String|Number}   value                 input值
 * @param {Boolean}        disabled               是否禁用
 * @param {Boolean}        readonly               是否只读
 * @param {Boolean}        required               是否启用必填*符号
 * @param {Boolean}        claerable              是否启用清除按钮

 -->
<template>
  <div class="wuss-input">
    <div class="wuss-input_label">
      <slot>
        <span>*</span>
      </slot>
      {{label}}
    </div>
    <div class="wuss-input_body">
      <input
        class="wuss-input_content"
        :type="type"
        :value="123"
        :disabled="disabled"
        :readonly="readonly"
        :inputAlign="s"
      >
      <div class="wuss-input_right">
        <w-icon v-if="claerable" type="close"></w-icon>
        <slot name="ic"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: [String, Number],
    value: {},
    inputAlign: {},
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    claerable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    s() {
      return "a";
    }
  },
  watch: {},
  methods: {}
};
</script>
<style scoped>
.wuss-input_label{}
</style>


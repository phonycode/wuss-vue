<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-13 11:16:10
 * @LastEditors: null
 * @LastEditTime: 2019-06-13 11:22:42
 * @Description: radio component
  isDisabled      boolean         是否禁用
  name            任意(最好String) name名标识
  size            String|number   icon图标大小
  wuss-color      String          选中的icon图标颜色  

  slot自定义文本
 * @form: (0 U 0)
 -->

<template>
  <label
    class="wuss-radio"
    :class="[
        border && radioSize ? 'el-radio--' + radioSize : '',
        { 'is-disabled': isDisabled },
        { 'is-focus': focus },
        { 'is-bordered': border },
    ]"
  >
    <!-- radio美化 -->
    <span  class="wuss-radio_input" :class="{
        'is-disabled': isDisabled,
      }">
      <input
        type="radio"
        class="wuss-radio__original"
        :value="label"
        :name="name"
        v-model="model"
        :disabled="isDisabled"
        tabindex="-1"
        @change="handleChange"
      >
      <w-icon v-if="!iconSrc" class="wuss-radio_inner" :style="wussStyle" :type="currentIcon"></w-icon>
      <img v-else :src="iconSrc" alt="icon" class="wuss-custom_icon">
    </span>
    <!-- radio内容 -->
    <span class="wuss-radio_label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "WRadio",
  props: {
    border: Boolean,
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    value: {},
    label: {},
    checked: {},
    icon: {
      type: String,
      default: "checked"
    },
    wussColor: String,
    iconSrc:String
  },
  data() {
    return {
      focus: false
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    /**
     * @description: 判断是否被选中
     * @param {type}
     * @return: String
     */
    currentIcon() {
      return this.value === this.label ? this.icon : "";
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    tabIndex() {
      return this.isDisabled ? -1 : 0;
    },
    /**
     * @description: 设置自定义样式
     * @param {type}
     * @return: style Object
     */
    wussStyle() {
      console.log(1)
      return {
        background: this.wussColor,
        borderColor: this.wussColor
      };
    }
  },
  methods: {
    handleChange($event) {
      this.$nextTick(() => {
        this.$emit("change", this.model);
      });
    }
  }
};
</script>
<style scoped>
.wuss-radio {
  color: #666;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 20px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.wuss-radio_input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  text-align: center;
}

.wuss-radio__original {
  position: absolute;
  z-index: -1;
  left: -9999px;
  top: -9999px;
}

.wuss-radio_inner {
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #e5e5e5;
  color: transparent;
  vertical-align: -3px;
  font-weight: 700;
}

.wuss-radio__original:checked + .wuss-radio_inner {
  color: #fff;
  background: #67c23a;
  border-color: #67c23a;
}

.wuss-radio__original:disabled + .wuss-radio_inner {
  color: #ccc;
  background: #eee;
  border-color: #ccc;
}

.wuss-custom_icon{
  height: 20px;
}

.wuss-radio_label {
  font-size: 14px;
  padding-left: 6px;
}
</style>



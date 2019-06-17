<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-13 11:16:10
 * @LastEditors: null
 * @LastEditTime: 2019-06-14 17:20:07
 * @Description: checkbox component
  isDisabled      boolean         是否禁用
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
  <label class="wuss-checkbox" :class="[
        { 'wuss-disabled': isDisabled },
    ]">
    <!-- radio美化 -->
    <span
      class="wuss-checkbox_input"
      :class="[`wuss-size-${size}`,{
        'wuss-disabled': isDisabled,
      }]"
    >
      <input
        type="checkbox"
        class="wuss-checkbox__original"
        :value="label"
        :name="name"
        v-model="model"
        :disabled="isDisabled"
        :tabindex="tabIndex"
        @change="handleChange"
      >
      <w-icon v-if="!iconSrc" class="wuss-checkbox_inner" :type="currentIcon"></w-icon>
      <img v-else :src="currentIcon" alt="icon" class="wuss-custom_icon">
    </span>
    <!-- radio内容 -->
    <span class="wuss-checkbox_label" @keydown.stop>
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  name: "WCheckboxGroup",
  props: {
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
      isChecked: this.value == this.trueValue || this.checked
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
      return this.value
        ? this.iconSrc && this.iconSrc.active
          ? this.iconSrc.active
          : this.icon
        : this.iconSrc && this.iconSrc.normal
        ? this.iconSrc.normal
        : "";
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
    }
  },
  methods: {
    handleChange($event) {
      this.$emit("change", this.label);
    }
  }
};
</script>
<style scoped>
.wuss-checkbox {
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

/* 按钮大小 */
.wuss-size-small .wuss-checkbox_inner {
  width: 16px;
  height: 16px;
}

.wuss-size-base .wuss-checkbox_inner {
  width: 18px;
  height: 18px;
}

.wuss-size-large .wuss-checkbox_inner {
  width: 22px;
  height: 22px;
}

.wuss-checkbox_input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  text-align: center;
}

.wuss-checkbox__original {
  position: absolute;
  z-index: -1;
  left: -9999px;
  top: -9999px;
}

.wuss-checkbox_inner {
  font-size: 16px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  color: transparent;
  vertical-align: -3px;
  font-weight: 700;
}

.wuss-checkbox__original:checked + .wuss-checkbox_inner {
  color: #fff;
  background: #67c23a;
  border-color: #67c23a;
}

.wuss-checkbox__original:disabled + .wuss-checkbox_inner {
  color: #ccc;
  background: #eee;
  border-color: #ccc;
}

.wuss-custom_icon {
  height: 20px;
}

.wuss-checkbox_label {
  font-size: 14px;
  padding-left: 6px;
}

.wuss-disabled {
  color: #ccc;
}
</style>



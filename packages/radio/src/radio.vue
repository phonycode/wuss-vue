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
    <span class="wuss-radio_input" :class="{
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
      <w-icon class="wuss-radio_inner" :type="currentIcon"></w-icon>
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
    iconTag: {
      type: String,
      default: "success-o"
    },
    icon:{
      type: String,
      default: "success"
    },
    iconDisabled:{
      type:String,
      default:"stop"
    }
  },
  data() {
    return {
      focus: false
    };
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    currentIcon(){
      return this.disabled ? this.iconDisabled : this.value === this.label ? this.icon : this.iconTag
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
}

.wuss-radio__original {
  position: absolute;
  z-index: -1;
  left: -9999px;
  top: -9999px;
}

.wuss-radio_inner {
  font-size: 16px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: 1px;
}

.wuss-radio__original:checked + .wuss-radio_inner {
  color: #67c23a;
}

.wuss-radio__original:disabled + .wuss-radio_inner {
  color: #ccc;
}

.wuss-radio_label {
  font-size: 14px;
  padding-left: 6px;
}
</style>



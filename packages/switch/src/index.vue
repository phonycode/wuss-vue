<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-14 17:54:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-06-15 14:45:10
 * @Description: switch 开关 组件
 * @form: (0 U 0)
 -->

<template>
  <div
    class="wuss-switch"
    :class="['wuss-switch-'+size,{
    'wuss-switch-active':isActive,
    'wuss-switch-disabled':isDisabled
  }]"
    @click="toggle"
  >
    <div class="wuss-switch_btn"></div>
  </div>
</template>

<script>
export default {
  name: "WSwitch",
  props: {
    size: {
      type: String,
      default: "base"
    },
    isActive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    isDisabled() {
      return this.disabled;
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
    toggle($event) {
      this.$emit("toggle", this.label);
    }
  }
};
</script>
<style scoped>
.wuss-switch {
  box-sizing: border-box;
  position: relative;
  background-color: #e2e4ea;
  border: 2px solid #dadada;
  border-radius: 1000px;
}

.wuss-switch-small {
  width: 40px;
  height: 20px;
}

.wuss-switch-base {
  width: 46px;
  height: 24px;
}

.wuss-switch-large {
  width: 62px;
  height: 30px;
}

.wuss-switch_btn{
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  background: red;
}

.wuss-switch-small .wuss-switch_btn{
  width: 16px;
  height: 16px;
}

.wuss-switch-base .wuss-switch_btn{
  width: 20px;
  height: 20px;
}

.wuss-switch-large .wuss-switch_btn{
  width: 26px;
  height: 26px;
}

/* 开关开启 */
.wuss-switch-active{
  right: 0;
}
</style>



<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-14 17:54:56
 * @LastEditors: null
 * @LastEditTime: 2019-06-17 11:44:58
 * @Description: 
 * @form: (0 U 0)
 -->

<template>
  <div
    class="wuss-switch"
    :class="['wuss-switch-'+size,{
    'wuss-switch-active':isActive,
    'wuss-switch-disabled':isDisabled
  }]"
    :style="[{
    'backgroundColor': isActive ? activeColor: inactiveColor,
    'borderColor': isActive ? activeColor: inactiveColor
  }]"
    @click="toggle($event)"
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
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: "#67c23a"
    },
    inactiveColor: {}
  },
  data() {
    return {
      isActive: false
    };
  },
  created() {
    return (this.isActive = this.active);
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    tabIndex() {
      return this.isDisabled ? -1 : 0;
    }
  },
  methods: {
    toggle(event) {
      this.disabled ? "" : (this.isActive = !this.isActive);
      this.$emit("toggle", this.isActive, event);
    }
  }
};
</script>
<style scoped>
.wuss-switch {
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 1000px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  position: relative;
}

.wuss-switch.wuss-switch-disabled {
  background: #dcdfe6;
  border-color: #dcdfe6;
  opacity: .4;
}

.wuss-switch-small {
  width: 40px;
  height: 22px;
}

.wuss-switch-base {
  width: 50px;
  height: 26px;
}

.wuss-switch-large {
  width: 60px;
  height: 30px;
}

.wuss-switch_btn {
  position: absolute;
  left: 1px;
  top: 50%;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transform: translate(0, -50%);
  transition: 0.46s;
}

.wuss-switch-small .wuss-switch_btn {
  width: 18px;
  height: 18px;
}

.wuss-switch-base .wuss-switch_btn {
  width: 22px;
  height: 22px;
}

.wuss-switch-large .wuss-switch_btn {
  width: 26px;
  height: 26px;
}

/* 开关开启 */
.wuss-switch-small.wuss-switch-active .wuss-switch_btn {
  transition: 0.46s;
  left: calc(100% - 19px);
}

.wuss-switch-base.wuss-switch-active .wuss-switch_btn {
  transition: 0.46s;
  left: calc(100% - 23px);
}

.wuss-switch-large.wuss-switch-active .wuss-switch_btn {
  transition: 0.46s;
  left: calc(100% - 25px);
}
</style>



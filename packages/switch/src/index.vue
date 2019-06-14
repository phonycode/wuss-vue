<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-14 17:54:56
 * @LastEditors: null
 * @LastEditTime: 2019-06-14 18:03:52
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
    @click="toggle"
  >
    <div class="wuss-switch_btn"></div>
  </div>
</template>
<script>
export default {
  name: "WSwitch",
  props: {
    size:{
      type:String,
      default:'base'
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

.wuss-switch-small{
  width: 40px ;
  height: 20px;
}

.wuss-switch-base{
  width: 46px ;
  height: 24px;
}

.wuss-switch-large{
  width: 62px ;
  height: 30px;
}
</style>



<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-21 09:23:13
 * @Description: 
 * @form: (0 U 0)
 * @param {string} shape 指定头像的形状，可选值为 circle、square
 * @param {string} size 设置头像的大小，可选值为 small、default、large
 * @param {string} src 图片类头像的 src 地址
 * @param {Boolean} scale 是否自动调整大小
 -->
<template>
  <div class="wuss-avatar" :class="['wuss-'+size,'wuss-'+shape]" :style="{'background':customBg}" @click="clicks">
    <img v-if="src" :src="src" alt="src">
    <slot v-else></slot>
  </div>
</template>
<script>
export default {
  name: "WAvatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "base"
    },
    shape: {
      type: String,
      default: "circle"
    },
    scale: {
      type: Boolean,
      value: false
    },
    customBg:{
      type: String,
      default:""
    }
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    /**
     * @description: 点击头像触发
     * @param {type}
     * @return:
     */
    clicks() {
      this.$emit("click");
    }
  }
};
</script>
<style scoped>
.wuss-avatar {
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background: #ccc;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
  font-size: 18px;
}

.wuss-avatar img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.wuss-small {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.wuss-base {
  width: 45px;
  height: 45px;
  line-height: 45px;
}

.wuss-large {
  width: 60px;
  height: 60px;
  line-height: 60px;
}

/* 形状 */
.wuss-circle{
  border-radius: 50%;
}

.wuss-square{
  border-radius: 10%;
}
</style>


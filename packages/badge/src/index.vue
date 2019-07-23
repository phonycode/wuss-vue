<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-21 17:20:24
 * @Description: 
 * @form: (0 U 0)
 * @param {string/Number} value  值
 * @param {Number, String} max 数字值超过这个数转99+
 * @param {Number}  zIndex        定位层级
 * @param {Boolean} isDot        是否是原点
 * @param {String}  right        右边偏移距离
 * @param {String}  top          上边偏移距离
 -->
<template>
  <div class="wuss-badge">
    <slot></slot>
    <sup
      v-text="content"
      class="wuss-badge_content"
      :class="[isDot ? 'wuss-badge_dot':'wuss-badge_base']"
      :style="stl"
    ></sup>
  </div>
</template>
<script>
export default {
  name: "WBadge",
  props: {
    value: String,
    max: {
      type: [Number, String],
      default: 10000
    },
    zIndex: {
      type: Number,
      default: 10
    },
    isDot: {
      type: Boolean,
      default: false
    },
    right: {
      type: String,
      default: "0"
    },
    top: {
      type: String,
      default: "0"
    },
    customClass: {}
  },
  data() {
    return {};
  },
  computed: {
    content() {
      return !isNaN(this.value)
        ? Number(this.value) > Number(this.max)
          ? "99+"
          : this.value
        : this.value;
    },
    stl() {
      return {
        "z-index": this.zIndex,
        right: this.right,
        top: this.top
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
.wuss-badge {
  display: inline-block;
  position: relative;
}

.wuss-badge_content {
  position: absolute;
  transform: translateY(-50%) translateX(100%);
}

.wuss-badge_base {
  background: #f0250f;
  border: 1px solid #f0250f;
  border-radius: 10px;
  color: #fff;
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  min-width: 8px;
  padding: 0 4px;
  text-align: center;
}

/* 小圆点 */
.wuss-badge_dot {
  width: 10px;
  height: 10px;
  padding: 0;
  right: 5px;
  border-radius: 10px;
  background: #f0250f;
}
</style>


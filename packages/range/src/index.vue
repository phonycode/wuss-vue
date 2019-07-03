<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-07-03 10:29:33
 * @LastEditors: null
 * @LastEditTime: 2019-07-03 17:57:38
 * @Description: 通告组件
 * @form: (0 U 0)
 * 组件的属性列表
   * @param {number} max 最大值
   * @param {number} min 最小值
   * @param {number} step 一步最低多少
   * @param {array} value  默认的value
   * @param {string} trackStyle 被选中的范围线条的样式
   * @param {string} railStyle 未被选中范围线条的样式
   * @param {string} handleStyle 按钮的样式
   * @param {boolean} disabled 是否禁用
 -->

<template>
  <div
    class="wuss-slider"
    :class="{'wuss-slider-disabled':disabled}"
    style="margin-left: 30px; margin-right: 30px;"
    ref="slider"
  >
    <div class="wuss-slider-rail"></div>
    <div class="wuss-slider-track wuss-slider-track-1"></div>
    <div class="wuss-slider-step" />
    <!-- <div data-move-node="0" class="wuss-slider-handle"></div> -->
    <div
      data-move-node="1"
      class="wuss-slider-handle"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="{'left':left+'px'}"
      ref="two"
    ></div>
  </div>
</template>

<script>
export default {
  name: "WRange",
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    value: Array,
    trackStyle: String,
    railStyle: String,
    handleStyle: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      startX: 0,
      endX: null,
      left: "0"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    touchstart(e) {
      if (this.disabled) return;
      e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      var touch = e.touches[0]; //获取第一个触点
      var x = Number(touch.pageX); //页面触点X坐标
      //记录触点初始位置
      this.startX = x;
    },
    touchmove(e) {
      if (this.disabled) return;
      e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      var touch = e.touches[0]; //获取第一个触点
      var x = Math.abs(Number(touch.pageX)); //页面触点X坐标
      let widths = this.$refs.slider.clientWidth,
        len = x - 30;

      if (len > widths) {
        return (this.left = widths);
      }

      if (len < 0) {
        return (this.left = 0);
      }

      // console.log("左右滑动 :" + len); //左右滑动
      this.left = len;
    },
    touchend() {
      if (this.disabled) return;
    },
    touchcancel() {
      if (this.disabled) return;
    }
  }
};
</script>
<style scoped>
.wuss-slider {
  position: relative;
}

.wuss-slider-disabled {
  opacity: 0.3;
}

.wuss-slider-rail {
  position: absolute;
  width: 100%;
  background-color: #ddd;
  height: 2px;
  box-sizing: border-box;
}

.wuss-slider-track {
  position: absolute;
  left: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #108ee9;
}

.wuss-slider-step {
  position: absolute;
  width: 100%;
  height: 4px;
  background: transparent;
}

.wuss-slider-handle {
  position: absolute;
  margin-left: -12px;
  margin-top: -10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #108ee9;
  background-color: #fff;
  box-sizing: border-box;
}

.wuss-slider-mark {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  font-size: 12px;
}
</style>



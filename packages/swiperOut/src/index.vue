<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-14 17:54:56
 * @LastEditors: null
 * @LastEditTime: 2019-07-19 17:57:49
 * @Description: 
 * @form: (0 U 0)
 -->

<template>
  <div class="wuss-class wuss-swiper-out" scale-area="false">
    <div
      inertia
      animation
      class="wuss-swiper-out-view"
      direction="horizontal"
      damping="60"
      @touchstart="handleTouchStart"
      @touchmove="handleChange"
      @touchend="handleTouchEnd"
      :style="[transform]"
    >
      <div class="wuss-swiper-out-left" hover-class="none" hover-stop-propagation="false">
        <slot />
      </div>
      <div class="wuss-swiper-out-right wuss-swiper-out-btns">
        <div
          v-for="(item,index) in datas"
          :key="index"
          :class="[item.disabled ? 'wuss-weiper-out-btn-disabled' : '' ]"
          :style="[{'color':item.color,'background':item.background,'fontSize':item.size}]"
          @click="handleBtn"
        >{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WSwiperOut",
  props: {
    swiperOutBtns: {
      type: Array,
      default: function() {
        return [
          {
            text: "删除",
            color: "#ffffff",
            background: "#e42112",
            disabled: false,
            size: "14px",
            type: "delete"
          }
        ];
      }
    },
    backgroundColor: {
      type: Boolean,
      default: false
    },
    buttonWidth: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "#67c23a"
    },
    threshold: {},
    close: {},
    disabled: {},
    autoClose: {}
  },
  data() {
    return {
      datas: this.swiperOutBtns,
      startX: 0,
      transform: {"transform": "translate3d(0px, 0px, 0px)"}
    };
  },
  created() {
    return (this.isActive = this.active);
  },
  computed: {},
  methods: {
    handleBtn(event) {
      this.$emit("handleBtnClick", this.isActive, event);
    },
    /**
     * movable-view 移动回调
     */

    handleChange(e) {
      
      if (this.disabled) return false;

      console.log(e.touches[0].pageX);
      console.log(this.startX);
      let a= e.touches[0].pageX - this.startX;
      let out  = this.isOut;
      if(a <= 0){
        this.transform = {"transform": "translate3d("+ a +"px, 0px, 0px)"}
      }
      console.log(this)
    
    },
    /**
     * movable-view 鼠标按下回调
     */
    handleTouchStart(e) {
      console.log(2);
      this.startX = e.touches[0].pageX;
    },
    /**
     * movable-view 鼠标松开回调
     */
    handleTouchEnd(e) {
      console.log(3);
      const { pageX, pageY } = e.changedTouches["0"];
      const {
        _startX,
        _startY,
        _slideWidth,
        _threshold,
        disabled,
        height
      } = this.data;
      if (disabled) return false;
      if (
        _startX - pageX >= _threshold &&
        Math.abs(_startY - pageY) <= height
      ) {
        // X轴移动距离大于等于阀值并且Y轴移动距离在Cell内
        this.setData({
          _scrollX: -_slideWidth
        });
      } else if (
        _startX - pageX >= _threshold &&
        Math.abs(_startY - pageY) > height
      ) {
        // X轴移动距离大于等于阀值并且Y轴移动距离超出W-cell高度时
        this.setData({
          _scrollX: 0
        });
      } else if (pageX - _startX >= _threshold) {
        // 终点X轴大于起点X轴时让他收起
        this.setData({
          _scrollX: 0
        });
      } else if (pageX - _startX < _threshold && pageX - _startX > 0) {
        // 终点X轴大于起点X轴并且小于阀值收起
        this.setData({
          _scrollX: 0
        });
      } else if (pageX === _startX || pageY === _startY) {
        // 鼠标原地点击时,达到autoClose效果 自动收回
        this.setData({
          _scrollX: 0
        });
      }
    },
    /**
     * 菜单列表按钮被按下
     */
    handleBtnClick(e) {
      const { key } = e.currentTarget.dataset;
      const { swiperOutBtns, autoClose } = this.data;
      const item = swiperOutBtns[key];
      if (item.disabled) return false;
      this.triggerEvent(item.type);
      autoClose ? this.close() : "";
    },
    /**
     * left内容区被点击
     */
    handleLeftClick() {
      const { autoClose, _scrollX, _slideWidth } = this.data;
      if (_scrollX === -_slideWidth) {
        // 展开状态
        autoClose ? this.close() : "";
      } else {
        this.triggerEvent("onClick");
      }
    }
  }
};
</script>
<style scoped>
.wuss-swiper-out {
  overflow: hidden;
}

.wuss-swiper-out-view {
  position: relative;
}

.wuss-swiper-out-view::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 1px;
  right: 0;
  height: 1px;
  background-color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.wuss-swiper-out-view::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 1px;
  right: 0;
  height: 1px;
  background-color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.wuss-swiper-out-btns {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
  z-index: 1000;
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

.wuss-swiper-out-btn {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  font-size: 16px;
  color: #333333;
  height: 100%;
}

.wuss-weiper-out-btn-disabled {
  opacity: 0.4;
}

.wuss-swiper-out-left {
  height: 100%;
}
</style>



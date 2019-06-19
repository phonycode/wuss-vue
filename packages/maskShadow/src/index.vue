<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-18 10:29:33
 * @LastEditors: null
 * @LastEditTime: 2019-06-19 09:58:20
 * @Description: 蒙版组件
 * @form: (0 U 0)
 * 组件的属性列表
 * @param {boolean} visible 组件是否可见
 * @param {boolean} maskCancel 是否开启遮罩层点击关闭
 * @param {number} zIndex 当前组件的z-index值
 * @param {number} opacity 当前组件遮罩的不透明度
 -->

<template>
  <div
    v-show="isShow"
    :class="['wuss-mask_shodow',visible ? 'mask-shadow-show' : '']"
    :style="[{
      'backgroundColor': background,
      'color':color
    }]"
  >
  </div>
</template>
<script>
export default {
  name: "WMakeShadow",
  props: {

  },
  data() {
    return {
      isShow: true,
      duration: "16s"
    };
  },
  created() {},
  computed: {},
  mounted() {
    
  },
  methods: {
  }
};
</script>
<style scoped>
.wuss-mask_shodow {
  display: flex;
  padding: 9px 10px;
  font-size: 13px;
  line-height: 1.5;
  align-items: center;
}

/* 左边icon */
.wuss-notice-icon {
  min-width: 20px;
  padding-top: 1px;
  margin-right: 4px;
  box-sizing: border-box;
}

/* 内容区 */
.wuss-notice-warp {
  position: relative;
  flex: 1;
  height: 19px;
  overflow: hidden;
}

.wuss-notice_content {
  position: absolute;
  white-space: nowrap;
}

/* 右边操作 */
.wuss-notice-operation {
  cursor: pointer;
}

.wuss-notice-animation {
  padding-left: 100%;
  display: inline-block;
  animation: wuss-notice-animation linear infinite both;
}
/* 动画 */
@keyframes wuss-notice-animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>



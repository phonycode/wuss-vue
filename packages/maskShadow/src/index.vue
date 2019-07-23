<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-18 10:29:33
 * @LastEditors: null
 * @LastEditTime: 2019-06-19 11:37:00
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
    v-show="visible"
    :class="['wuss-mask_shodow']"
    :style="[{
      'zIndex':zIndex,
      'opacity':opacity
    }]"
    @click.stop="maskCancel"
  ></div>
</template>
<script>
export default {
  name: "WMaskShadow",
  props: {
    visible : {
      type: Boolean,
      default: true
    },
    zIndex:{},
    opacity:{
      type:Number,
      default: .4
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    /**
     * @description: 点击蒙版关闭
     * @param {type} 
     * @return: 
     */
    maskCancel(){
      this.$emit('closeMask')
    }
  }
};
</script>
<style scoped>
.wuss-mask_shodow {
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 9px 10px;
  font-size: 13px;
  line-height: 1.5;
  align-items: center;
  z-index: 9 ;
  background: black;
}
</style>



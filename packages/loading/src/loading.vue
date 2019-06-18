<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-18 16:56:03
 * @LastEditors: null
 * @LastEditTime: 2019-06-18 17:47:08
 * @Description: 加载指示器组件
 * @form: (0 U 0)
 * 组件的属性列表
 * @param {string} content 展示内容
 * @param {boolean} showText 是否展示内容文字
 * @param {number} timeout 指定时间段内关闭loading
 * @param {function} hide loading消失后的回调
 -->

<template>
  <div>
    <!-- <w-mask-shadow/> -->

    <div>
      <view class="wuss-loading-icon" hover-class="none" hover-stop-propagation="false"/>
      <div>{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content:'',
      showText:'',
      timeout:0,
      hide:''
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>



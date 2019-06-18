<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-18 16:56:03
 * @LastEditors: null
 * @LastEditTime: 2019-06-18 17:00:15
 * @Description: 通告组件
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
  name: "WLoading",
  props: {
    content:{
      type:String,
      default:''
    },
    showText:{},
    timeout:{
      type:Number,
      default:0
    },
    hide:{
      type:Function
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>



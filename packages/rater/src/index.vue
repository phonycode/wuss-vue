<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-25 08:54:37
 * @Description: 
 * @form: (0 U 0)
 * @param {Number}   count                  总评分数
 * @param {Number}   max                    可选择最大数量
 * @param {Number}   min                    可选中最小数量
 * @param {String}   color                  选中颜色+
 * @param {String}   voidColor              未选中颜色
 * @param {String}   size                   px图标大小
 * @param {Boolean}  disabled               是否禁用 默认false
 * @param {String}   icon                   选中时图标
 * @param {String}   voidIcon               未选中时图标
 * @param {String}   spacing                每个图标之间的间距
 -->
<template>
  <div class="wuss-rate">
    <span
      class="wuss-rate-item"
      :class="['wuss-rate-item',{'wuss-rate-active':n<=current}]"
      v-for="n in count"
      :key="n"
      @click="onClick($event,n)"
      :style="[{'color': n>current ? voidColor:color},styles]"
      :disabled="disabled"
    >
      <w-icon :type="n>current ? voidIcon :icon"></w-icon>
      <span></span>
    </span>
  </div>
</template>
<script>
export default {
  name: "WRater",
  props: {
    count: {
      type: Number,
      default: 5
    },
    max: {
      type: Number,
      default: 999
    },
    min: {
      type: [Number],
      default: 0
    },
    color: {
      type: String,
      default: "#ff9900"
    },
    voidColor: {
      type: String,
      default: "#ccc"
    },
    size: {
      type: String,
      default: "14px"
    },
    spacing: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "star"
    },
    voidIcon: {
      type: String,
      default: "star-o"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      current: 3
    };
  },
  created() {
    this.isCheckNum(this.value);
  },
  computed: {
    styles() {
      return {
        fontSize: this.size
      };
    }
  },
  methods: {
    /**
     * @description: 判断选中多少颗星星  
     * @param {String,Number}  idx  点击时选中的颗数  
     * @return: 
     */
    isCheckNum(idx) {

      this.current =
        idx < this.min ? this.min : idx > this.max ? this.max : idx;

    },

    onClick($event, idx) {

      if (!this.disabled) {
        this.isCheckNum(idx);
      }
      this.$emit("input", this.current);
      this.$emit("click", this.current);
      
    }
  }
};
</script>
<style scoped>
</style>


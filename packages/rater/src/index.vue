<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-22 15:35:12
 * @Description: 
 * @form: (0 U 0)
 * @param {Number, String} max 数字值超过这个数转99+
 * @param {Number}  zIndex        定位层级
 * @param {Boolean} isDot        是否是原点
 * @param {String}  right        右边偏移距离
 * @param {String}  top          上边偏移距离
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
      default: 99
    },
    min: {
      type: [Number, String],
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
    isCheckNum(idx) {
      this.current = idx < this.min ? this.min : idx;
    },

    onClick($event, idx) {
      if (this.disabled) {
        this.$emit("input", this.current);
        this.$emit("click", this.current);
      } else {
        this.isCheckNum(idx);
        this.$emit("input", idx);
        this.$emit("click", idx);
      }
    }
  }
};
</script>
<style scoped>
</style>


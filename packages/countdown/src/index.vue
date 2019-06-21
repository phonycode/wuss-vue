<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-21 11:25:09
 * @Description: 
 * @form: (0 U 0)
 * @param {string} shape 指定头像的形状，可选值为 circle、square
 * @param {string} size 设置头像的大小，可选值为 small、default、large
 * @param {string} src 图片类头像的 src 地址
 * @param {Boolean} scale 是否自动调整大小
 -->
<template>
  <span class="wuss-countdown">{{residueTime}}</span>
</template>
<script>
export default {
  name: "WCountdown",
  props: {
    notimestamp: {},
    format: {},
    startTime: {
      type: [String, Number],
      default: ""
    },
    endTime: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      residueTime: ""
    };
  },
  created() {
    this.countDown();
  },
  methods: {
    /**
     * @description: 时间结束回调函数
     * @param {type}
     * @return:
     */
    callback() {
      this.$emit("callback");
    },
    clear(name) {
      clearInterval(name);
    },
    countDown() {

      let start = this.startTime ? this.startTime : new Date().getTime(),
        end = this.endTime ? this.endTime : new Date().getTime() + 60 * 1000,
        that = this;

      let times = setInterval(() => {
        this.residueTime = that.getTime(start, end);
        if (this.residueTime <= 0) {
          this.callback();
          this.clear(times);
        }
      }, 1000);
    },
    /**
     * @description: 补o操作
     * @param {type}
     * @return:
     */
    add0(num) {
      return num > 9 ? num : "0" + num;
    },
    /**
     * @description: 时间转化格式
     * @param {type}
     * @return:
     */
    getTime(start, end, type, notimestamp = false) {
      if (!notimestamp) {
        end = Math.round((end - start) / 1000);
      }

      if (end <= 0) end = 0;

      const s = this.add0(end % 60),
        mm = this.add0(parseInt(end / 60) % 60),
        h = this.add0(parseInt(end / 3600) % 24),
        d = parseInt(end / 86400);

      switch (type) {
        case "D":
          return `${d}天 ${h}:${mm}:${s}`;
        case "H":
          return `${h}:${mm}:${s}`;
        case "MM":
          return `${mm}:${s}`;
        case "s":
          return s;
        case "d":
          return d;
        default:
          return `${h}:${mm}:${s}`;
      }
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
</style>


<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-21 14:26:36
 * @Description: 
 * @form: (0 U 0)
 * @param {boolean} notimestamp  是否使用时间戳  true为不是
 * @param {boolean} bindcallback 倒计时结束的回调函数
 * @param {number} time         倒计时的时间  单位s
 * @param {string} format        格式化时间格式  默认为 H
 -->
<template>
  <span class="wuss-countdown">{{residueTime}}</span>
</template>
<script>
export default {
  name: "WCountdown",
  props: {
    notimestamp: {
      type: Boolean,
      default: false
    },
    format: {
      type:String,
      default:""
    },
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
      residueTime: "",
      isStop: false
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
    /**
     * @description: 倒计时函数
     * @param {type} 
     * @return: 
     */
    countDown() {

      let start = this.startTime ? this.startTime : new Date().getTime(),
        end = this.endTime ? this.endTime : new Date().getTime() + 60 * 1000;

        (function(){
           // 开始时间自减
          start = start + 1000;
          if(this.notimestamp) end = end - 1;
          this.residueTime = this.getTime(start, end,this.format,this.notimestamp);

          if (this.isStop) {
            this.callback();
            this.clear(times);
          }
        }).bind(this)()

      let times = setInterval(() => {

        // 开始时间自减
        start = start + 1000;
        if(this.notimestamp) end = end - 1;
        this.residueTime = this.getTime(start, end,this.format,this.notimestamp);

        if (this.isStop) {
          this.callback();
          this.clear(times);
        }

      }, 1e3);



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
     * @description: 时间搓处理
     * @param {String} start  开始时间
     * @param {String} end  结束时间
     * @param {String} type  单位类型
     * @param {String} notimestamp  结束时间
     * @return: 
     */
    getTime(start, end, type, notimestamp = false) {
      if (!notimestamp) {
        end = Math.round((end - start) / 1000);
      }

      if (end <= 0){
        this.isStop = true;
        end = 0;
      } 

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


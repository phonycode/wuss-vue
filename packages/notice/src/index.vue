<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-18 10:29:33
 * @LastEditors: null
 * @LastEditTime: 2019-06-18 15:47:50
 * @Description: 通告组件
 * @form: (0 U 0)
 * 组件的属性列表
 * @param {string} text 文本内容
 * @param {string} mode 模式 可选 link |  closeable
 * @param {string} color 文本颜色
 * @param {string} backgroundColor 背景颜色
 * @param {string} speed 滚动速度 scrollable为true时有效
 * @param {Boolean} scrollable 是否可以滚动 默认是
 * @param {string} icon 左边的图标地址
 -->

<template>
  <div
    v-show="isShow"
    :class="['wuss-notice']"
    :style="[{
      'backgroundColor': background,
      'color':color
    }]"
  >
    <w-icon v-if="icon" :class="['wuss-notice-icon', 'wuss-notice-'+icon]" :type="icon"/>
    <div class="wuss-notice-warp" ref="warp">
      <div
        ref="content"
        class="wuss-notice_content"
        :class="[{
          'wuss-notice-animation':scrollable
        }]"
        :style="[{'animation-duration':animata}]"
      >
        {{text}}
        <slot v-if="!text">a</slot>
      </div>
    </div>

    <div v-if="model" class="wuss-notice-operation">
      <div @click="navigation">
        <w-icon v-if="model=='link'" type="arrow-right" size="20"/>
      </div>
      <div @click="close">
        <w-icon v-if="model=='closeable'" size="20" type="close"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WNotice",
  props: {
    model: {
      type: String
    },
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#f76a24"
    },
    background: {
      type: String,
      default: "#fefcec"
    },
    speed: {
      type: Number
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      defalut: ""
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  created() {},
  computed: {
    animata() {
      this.speed
      const { context, warp } = this.$refs;
      console.log(this.$refs);
      console.log(this.$refs.warp);
    }
  },
  methods: {
    navigation(event) {
      this.$emit("navigation", event);
    },
    /**
     * @description: 关闭时触发回调
     * @param {type}
     * @return:
     */
    close() {
      this.isShow = !this.isShow;
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.wuss-notice {
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
  animation: wuss-notice-animation linear 16s infinite both;
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



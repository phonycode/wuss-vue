<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-18 10:29:33
 * @LastEditors: null
 * @LastEditTime: 2019-06-18 13:34:31
 * @Description: 通告组件
 * @form: (0 U 0)
 * 组件的属性列表
 * @param {string} text 文本内容
 * @param {string} mode 模式 可选 link |  closeable
 * @param {string} color 文本颜色
 * @param {string} backgroundColor 背景颜色
 * @param {string} url mode为link时 跳转地址
 * @param {string} openType mode为link时 跳转类型
 * @param {string} speed 滚动速度 scrollable为true时有效
 * @param {Boolean} scrollable 是否可以滚动
 * @param {string} icon 左边的图标地址
 -->

<template>
  <div
    :class="['wuss-notice']"
    :style="[{
      'backgroundColor': background,
      'color':color
    }]"
    @click="click($event)"
  >
    <w-icon v-if="icon" :class="['wuss-notice-icon', 'wuss-notice-'+icon]" :type="icon"/>
    <div class="wuss-notice-warp" model>
      <div class="wuss-notice_content">
        {{text}}
        <slot v-if="!text">a</slot>
      </div>
    </div>

    <div v-if="model" class="wuss-notice-operation">
      <a v-if="model=='link'" href="javascript:;">
        <w-icon type="arrow-right" size="20"/>
      </a>
      <w-icon v-if="model=='closeable'" size="20" type="close" @click="onClose"/>
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
    url: {
      type: String,
      default: "#67c23a"
    },
    openType: {},
    speed: {
      type: Number
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      defalut: ""
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  created() {},
  computed: {},
  methods: {
    click(event) {
      this.$emit("click", this.isActive, event);
    },
    /**
     * @description: 关闭时触发回调
     * @param {type}
     * @return:
     */
    onClose() {
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
</style>



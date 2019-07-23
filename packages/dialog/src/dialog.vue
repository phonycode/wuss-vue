<template>
  <transition name="fade">
    <div class="black-bg" v-if="visible">
      <div class="wuss-confirm" :class="['wuss-confirm-' + type]" v-show="visible">
        <h4 class="wuss-confirm-title">{{title}}</h4>
        <div class="confirm-message">
          <p v-if="message">{{message}}</p>
          <slot></slot>
        </div>
        <footer class="wuss-confirm-footer">
          <span
            v-if="showCancel"
            @click="close"
            class="border-right"
            :style="{'color': cancelTextColor}"
          >{{cancelText}}</span>
          <span @click="sureHandle" :style="{'color':confirmTextColor}">{{confirmText}}</span>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      title: "",
      customClass: "",
      onClose: null,
      closed: false,
      timer: null,
      type: "default",
      icon: "",
      callback: null,
      cancelTextColor: null,
      confirmTextColor: null,
      cancelText: "取消",
      confirmText: "确定",
      showCancel: true
    };
  },
  watch: {
    closed: function(val) {
      if (val) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }
  },
  methods: {
    close() {
      if (typeof this.callback === "function") {
        this.callback("closed");
      }
      this.closed = true;
    },
    sureHandle() {
      if (typeof this.callback === "function") {
        this.callback("confirm");
      }
      this.closed = true;
    }
  }
};
</script>
<style>
.border-right {
  border-right: 1px solid #eee;
}
.wuss-confirm {
  position: fixed;
  width: 80%;
  background-color: #fff;
  margin-left: 10%;
  border-radius: 5px;
  top: 45%;
  text-align: center;
  transform: translateY(-50%);
  z-index: 2000;
}
.wuss-confirm-title {
  padding-top: 5px;
}
.confirm-message {
  padding: 0 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.wuss-confirm-title {
  margin: 5px 0;
}
.confirm-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: #fff;
}
.wuss-confirm-footer {
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #e8e8e8;
  color: rgb(255, 153, 0);
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.wuss-confirm-footer span {
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 16px;
  transition: background-color 200ms ease 0s;
}
</style>



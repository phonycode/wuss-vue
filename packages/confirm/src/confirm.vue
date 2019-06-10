<template>
  <transition name="fade">
    <div class="black-bg" v-show="visible">
      <div class="wuss-confirm" :class="['wuss-confirm-' + type]" v-show="visible" >
        <h4 class="wuss-confirm-title">{{title}}</h4>
        <p class="confirm-message">{{message}}</p>
        <footer class="wuss-confirm-footer">
          <span @click="close">取消</span>
          <span @click="sureHandle">确定</span>
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
      message: '',
      title: '',
      customClass: '',
      onClose: null,
      closed: false,
      timer: null,
      type: 'default',
      icon: '',
      confirmButtonText: '确定',
      callback: null,
    };
  },
  watch: {
    closed: function(val) {
      if(val) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }
  },
  methods: {
    close() {
      if(typeof this.callback === 'function') {
        this.callback('closed')
      }
      this.closed = true;
    },
    sureHandle() {
      
    },
  },
}
</script>
<style>
  .wuss-confirm{
    position: fixed;
    width: 80%;
    background-color: #fff;
    margin-left: 10%;
    border-radius: 5px;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    padding: 5px;
    z-index: 2000;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .wuss-confirm-title {
    margin: 5px 0;
  }
  .confirm-icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    color: #fff;
  }
  .wuss-confirm-footer{
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #e8e8e8;
    color: rgb(255, 153, 0);
  }
</style>



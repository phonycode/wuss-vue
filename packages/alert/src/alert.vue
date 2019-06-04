<template>
  <transition name="fade">
    <div class="wuss-alert" :class="['wuss-alert-' + type]" v-show="visible" >
      <h4 class="wuss-alert-title">{{title}}</h4>
      <p class="alert-message">{{message}}</p>
      <footer @click="close" class="alert-footer">
        {{confirmButtonText}}
      </footer>
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
  },
}
</script>
<style>
  .wuss-alert{
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
  .wuss-alert-title {
    margin: 5px 0;
  }
  .alert-icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    color: #fff;
  }
</style>



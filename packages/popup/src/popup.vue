<template>
  <transition name="popup-fade">
  <div class="wuss-popup" v-if="popupVisible" @touchstart.self="handleWrapperClick">
    <div ref="wussPopupBody" class="wuss-popup-body" :style="style">
      <slot></slot>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'WPopup',
  props: {
    beforeClose: Function,
    popupVisible: Boolean,
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    popupHeight: {
      type: Number,
      default: 30
    },
    popupWidth: {
      type: Number,
      default: 60
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style:function(){
      let obj = {};
      if(this.position === 'top' || this.position === 'bottom') {
        obj.height = this.popupHeight + '%';
        obj[this.position] = -this.popupHeight + '%'
      } else if(this.position === 'left' || this.position === 'right') {
        obj.width = this.popupWidth + '%';
        obj[this.position] = -this.popupWidth + '%'
      }
      return obj
    } 
  },
  watch: {
    popupVisible(val) {
      if(val) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        this.$nextTick(()=>{
          setTimeout(() => {
            if(this.position === 'top' || this.position === 'bottom') {
              this.$refs.wussPopupBody.style[this.position] = 0
            } else if(this.position === 'left' || this.position === 'right') {
              this.$refs.wussPopupBody.style[this.position] = 0
            }
          }, 100);
          
        })
      } else {
        
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
      }
    },
  },
  methods: {
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        if(this.position === 'top' || this.position === 'bottom') {
            this.$refs.wussPopupBody.style[this.position] = -this.popupHeight + '%'
          } else if(this.position === 'left' || this.position === 'right') {
            this.$refs.wussPopupBody.style[this.position] = -this.popupWidth + '%'
          }
        setTimeout(() => {
          this.$emit('update:popupVisible', false)
        }, 300);
        
        
      }
    },
  }
}
</script>
<style>
  .wuss-popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 2000;
  }
  .wuss-popup-body {
    position: absolute;
    height: 100%;
    background-color: #fff;
    width: 100%;
  }
  .popup-fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .popup-fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .wuss-popup-body{
    transition: all .3s;
  }
</style>



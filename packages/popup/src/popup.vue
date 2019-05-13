<template>
  <div class="wuss-popup" v-show="popupVisible" @touchstart.self="handleWrapperClick">
    <div class="wuss-popup-body">

    </div>
  </div>
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
  },
  model: {
    prop: 'popupVisible',
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
        this.pickerVisible = false
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
    height: 30%;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
  }
</style>



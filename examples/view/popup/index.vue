<template>
  <div>
    <h3>Popup</h3>
    <h4>弹出层</h4>
    <h5>position</h5>
    <w-button @click="showPopup" type="primary">Top</w-button>
    <w-popup :popupVisible.sync="popupVisible" :closeOnClickModal="true" position="left"></w-popup>
  </div>
</template>
<script>
export default {
  name: 'popup',
  data() {
    return {
      popupVisible: false,
    }
  },
  methods: {
    showPopup() {
      this.popupVisible = !this.popupVisible
    }
  }
  
}
</script>


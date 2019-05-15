<template>
  <div>
    <h3>Popup</h3>
    <h4>弹出层</h4>
    <h5>position</h5>
    <w-button @click="showPopup1" type="primary">Top</w-button>
    <w-popup :popupVisible.sync="popupVisible1" :closeOnClickModal="true" position="top"></w-popup>
    <w-button @click="showPopup2" type="primary">bottom</w-button>
    <w-popup :popupVisible.sync="popupVisible2" :closeOnClickModal="true" position="bottom"></w-popup>
    <w-button @click="showPopup3" type="primary">left</w-button>
    <w-popup :popupVisible.sync="popupVisible3" :closeOnClickModal="true" position="left"></w-popup>
    <w-button @click="showPopup4" type="primary">right</w-button>
    <w-popup :popupVisible.sync="popupVisible4" :closeOnClickModal="true" position="right"></w-popup>
  </div>
</template>
<script>
export default {
  name: 'popup',
  data() {
    return {
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
    }
  },
  methods: {
    showPopup1() {
      this.popupVisible1 = !this.popupVisible1
    },
    showPopup2() {
      this.popupVisible2 = !this.popupVisible2
    },
    showPopup3() {
      this.popupVisible3 = !this.popupVisible3
    },
    showPopup4() {
      this.popupVisible4 = !this.popupVisible4
    }
  }
  
}
</script>


<template>
  <div>
    <h3>Popup</h3>
    <h4>弹出层</h4>
    <h5>position</h5>
    <w-button type="primary">Top</w-button>
    <w-popup v-model="popupVisible"></w-popup>
  </div>
</template>
<script>
export default {
  name: 'popup',
  data() {
    return {
      popupVisible: true,
    }
  },
  
}
</script>


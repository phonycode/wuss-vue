<template>
  <div>
    toast
    <w-button @click="showtoast">showToast</w-button>
  </div>
</template>
<script>
export default {
  name: 'toast',
  created() {
    
  },
  methods: {
    showtoast() {
      this.$toast.middle('这是toast')
    }
  }
}
</script>


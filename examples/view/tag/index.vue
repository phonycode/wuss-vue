<template>
  <div>
    <h3>tag</h3>
    <h4>标签</h4>
    <w-tag type="primary" >123</w-tag>
    <w-tag type="info" >123</w-tag>
    <w-tag type="warning" >123</w-tag>
    <w-tag type="success" >123</w-tag>
    <w-tag type="danger" >123</w-tag>
    <w-tag v-if="showFlag" type="primary" @close="handleClick" closable>123</w-tag>
    <w-button type="primary" @click="handleClick">toggle</w-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFlag: true,
    }
  },
  methods: {
    handleClick() {
      this.showFlag = !this.showFlag;
    }
  }
}
</script>
<style>

</style>



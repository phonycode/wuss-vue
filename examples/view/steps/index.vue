<template>
  <div>
    <w-steps :active="active" finish-status="success">
      <w-step title="步骤 1"></w-step>
      <w-step title="步骤 2"></w-step>
      <w-step title="步骤 3"></w-step>
      <w-step title="步骤 4"></w-step>
    </w-steps>
    <w-button type="primary" @click="next">下一步</w-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0
    }
  },
  methods: {
    next() {
        if (this.active++ > 3) this.active = 0;
      }
  }
}
</script>
<style>

</style>



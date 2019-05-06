<template>
  <div>
    <w-steps :active="active">
      <w-step title="步骤 1"></w-step>
      <w-step title="步骤 2"></w-step>
      <w-step title="步骤 3"></w-step>
      <w-step title="步骤 4"></w-step>
    </w-steps>
    <w-steps :active="active" finish-status="success">
      <w-step title="步骤 1"></w-step>
      <w-step title="步骤 2"></w-step>
      <w-step title="步骤 3"></w-step>
      <w-step title="步骤 4"></w-step>
    </w-steps>
    <w-steps :active="active" finish-status="success">
      <w-step title="步骤 1" icon="checked"></w-step>
      <w-step title="步骤 2" icon="location"></w-step>
      <w-step title="步骤 3" icon="camera" ></w-step>
      <w-step title="步骤 4" icon="close"></w-step>
    </w-steps>
    <w-steps :active="active" finish-status="error">
      <w-step title="步骤 1" icon="checked"></w-step>
      <w-step title="步骤 2" icon="location"></w-step>
      <w-step title="步骤 3" icon="camera" ></w-step>
      <w-step title="步骤 4" icon="close"></w-step>
    </w-steps>
    <w-button type="primary" @click="next">下一步</w-button>
    <w-steps :active="active" direction="vertical" finish-status="success">
      <w-step title="步骤 1"></w-step>
      <w-step title="步骤 2"></w-step>
      <w-step title="步骤 3"></w-step>
      <w-step title="步骤 4"></w-step>
    </w-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0,
      state: undefined,
    }
  },
  methods: {
    next() {
        if (this.active++ > 3) this.active = 0;
        if(this.active === 2) {
          this.state = 'error'
        } else {
          this.state = undefined
        }
      }
  }
}
</script>
<style>

</style>



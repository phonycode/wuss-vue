<template>
  <div>
    <h3>alert</h3>
    <h4>弹窗</h4>
    <w-button type="primary" @click="defaulta">default</w-button>
  </div>
</template>
<script>
export default {
  name: 'toast',
  created() {
    
  },
  methods: {
    defaulta() {
      this.$alert('这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容', '标题名称', {
          callback: () => {
            
          }
        });
    },
  }
}
</script>


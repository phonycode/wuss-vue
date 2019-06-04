<template>
  <div>
    <h3>alert</h3>
    <h4>弹窗</h4>
    <w-button type="primary" @click="defaulta">default</w-button>
    <w-button type="primary" @click="top">top</w-button>
    <w-button type="primary" @click="middle">middle</w-button>
    <w-button type="primary" @click="bottom">bottom</w-button>
    <w-button type="primary" @click="timeOut">延时5s</w-button>
    <w-button type="primary" @click="success">icon:success</w-button>
  </div>
</template>
<script>
export default {
  name: 'toast',
  created() {
    
  },
  methods: {
    defaulta() {
      this.$alert('这是一段内容', '标题名称', {
          callback: () => {
            
          }
        });
    },
    middle() {
      this.$alert.middle('middle')
    },
    top() {
      this.$alert.top('top')
    },
    bottom() {
      this.$alert.bottom('bottom')
    },
    timeOut() {
      this.$alert({
        duration: 5000,
        message: '我能停5秒'
      })
    },
    success() {
      this.$alert({
        duration: 5000,
        message: '我是成功',
        icon: 'success'
      })
    }
  }
}
</script>


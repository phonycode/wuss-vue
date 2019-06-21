<template>
  <div class="wuss-box">
    <h3>dialog</h3>
    <small>弹出框</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">正常使用</h5>
        <div>
          <w-button type="info" @click="loading">正常使用</w-button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
section {
  display: block;
  margin-bottom: 10px;
}

.wuss-boxs .title {
  font-weight: 500;
  font-size: 14px;
  color: #666;
  padding: 10px 10px 8px;
  margin: 0;
}

.title-small {
  color: #999;
}
</style>



<script>
export default {
  name: "dialogs",
  data() {
    return {};
  },
  created() {},
  methods: {
    loading() {
      this.$dialog("加载中...");
    },
    loading1() {
      this.$loading({
        duration: 5000,
        isShow: true,
        // opacity:.8,
        // zIndex:99,
        message: '能坚持5s哦'
      });
    },
    loading2() {
      this.$loading({
        message: '我要起来',
        onClose : function() {
          this.$toast('我是回调');
        }
      });
    }
  }
};
</script>


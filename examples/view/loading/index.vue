<template>
  <div class="wuss-box">
    <h3>notice</h3>
    <small>通告</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-loading text="wuss-notice-vue 哔哩巴拉wuss-notice-vue 哔哩巴拉"/>
        </div>
      </section>
      <section>
        <h5 class="title">model=closeable speed=30</h5>
        <div>
          <w-notice text="wuss-notice-vue 哔哩巴拉" model="closeable" @close="close"/>
        </div>
      </section>
      <section>
        <h5 class="title">model=link scrollable=false</h5>
        <div>
          <w-notice text="wuss-notice-vue 哔哩巴拉" :scrollable="false" model="link" @navigation="nas"/>
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
  name: "loading",
  data() {
    return {};
  },
  created() {},
  methods: {
    close() {
      this.$toast({
        duration: 2000,
        message: "你猜我关没关"
      });
    },
    nas() {
      this.$toast({
        duration: 2000,
        message: "欧巴"
      });
    }
  }
};
</script>


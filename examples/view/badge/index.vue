<template>
  <div class="wuss-box">
    <h3>Badge</h3>
    <small>徽章</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-badge class="wuss-demo" value="5">
            <w-icon type="cart"></w-icon>
          </w-badge>
        </div>
      </section>
      <section>
        <h5 class="title">Max 用法</h5>
        <div>
          <w-badge class="wuss-demo" max="99" value="100">
            <w-icon type="home"></w-icon>
          </w-badge>
        </div>
      </section>
      <section>
        <h5 class="title">非数字字符串用法</h5>
        <div>
          <w-badge class="wuss-demo" value="new">
            <w-button type="warning">warning</w-button>
          </w-badge>
        </div>
      </section>
      <section>
        <h5 class="title">小圆点</h5>
        <div>
          <w-badge class="wuss-demo" :isDot="true">
            <w-icon type="home"></w-icon>
          </w-badge>
        </div>
      </section>
      <section>
        <h5 class="title">自定义位置</h5>
        <div>
          <w-badge class="wuss-demo" right="8px" top="6px" value="12">
            <w-button type="warning">warning</w-button>
          </w-badge>
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

.wuss-demo {
  margin-left: 28px;
  font-weight: 700;
  color: #000;
  font-size: 36px;
}
</style>



<script>
export default {
  name: "countdown",
  data() {
    return {
      times: new Date(new Date().setHours(new Date().getHours() + 2)).getTime(),
      times2: new Date(new Date().setDate(new Date().getDate() + 2)).getTime()
    };
  },
  created() {},
  methods: {
    callback() {
      this.$toast("我到了");
    }
  }
};
</script>


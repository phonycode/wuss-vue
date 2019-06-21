<template>
  <div class="wuss-box">
    <h3>Countdown</h3>
    <small>倒计时</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-countdown :end-time="times"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">用户自定义头像</h5>
        <div>
          <w-countdown end-time="1561087271958"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">format=D</h5>
        <div>
          <w-avatar class="avatar-demo" size="small" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="base" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="large" shape="square">W</w-avatar>
        </div>
      </section>
      <section>
        <h5 class="title">format=HH</h5>
        <div>
          <w-avatar class="avatar-demo" size="small" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="base" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="large" shape="square">W</w-avatar>
        </div>
      </section>
      <section>
        <h5 class="title">format=MM</h5>
        <div>
          <w-avatar class="avatar-demo" size="small" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="base" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="large" shape="square">W</w-avatar>
        </div>
      </section>
      <section>
        <h5 class="title">format=S(什么都不填默认60s)</h5>
        <div>
          <w-countdown @callback="callback"></w-countdown>
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

.avatar-demo {
  margin-left: 20px;
}
</style>



<script>
export default {
  name: "countdown",
  data() {
    return {
      times: new Date().getTime() + 86400000 
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


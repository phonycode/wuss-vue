<template>
  <div class="wuss-box">
    <h3>Countdown</h3>
    <small>倒计时</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-countdown class="wuss-demo" :end-time="times"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">endTime=60 notimestamp=true</h5>
        <div>
          <w-countdown class="wuss-demo" :notimestamp="true" end-time="120"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">format=D</h5>
        <div>
          <w-countdown class="wuss-demo" format="D" :end-time="times2"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">format=H</h5>
        <div>
          <w-countdown class="wuss-demo" format="H" :end-time="times"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">format=MM</h5>
        <div>
          <w-countdown class="wuss-demo" format="MM" :end-time="times"></w-countdown>
        </div>
      </section>
      <section>
        <h5 class="title">format=S(默认60s)</h5>
        <div>
          <w-countdown class="wuss-demo" format="s" @callback="callback"></w-countdown>
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

.wuss-demo{
  margin-left: 28px;
  font-weight: 700;
  color: #000;
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


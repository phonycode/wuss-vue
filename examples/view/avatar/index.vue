<template>
  <div class="wuss-box">
    <h3>avatar</h3>
    <small>头像</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-avatar class="avatar-demo" size="small">W</w-avatar>
          <w-avatar class="avatar-demo" size="base">W</w-avatar>
          <w-avatar class="avatar-demo" size="large">W</w-avatar>
        </div>
      </section>
      <section>
        <h5 class="title">用户自定义头像</h5>
        <div>
          <w-avatar class="avatar-demo" size="small" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560948261781&di=51c0464d0b69ec59547b52a79d32f31f&imgtype=0&src=http%3A%2F%2Fp4.qhmsg.com%2Ft01fdca9b287dfc8d64.jpg"></w-avatar>
          <w-avatar class="avatar-demo" size="base" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560948261781&di=51c0464d0b69ec59547b52a79d32f31f&imgtype=0&src=http%3A%2F%2Fp4.qhmsg.com%2Ft01fdca9b287dfc8d64.jpg"></w-avatar>
          <w-avatar class="avatar-demo" size="large" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560948261781&di=51c0464d0b69ec59547b52a79d32f31f&imgtype=0&src=http%3A%2F%2Fp4.qhmsg.com%2Ft01fdca9b287dfc8d64.jpg"></w-avatar>
        </div>
      </section>
      <section>
        <h5 class="title">形状</h5>
        <div>
          <w-avatar class="avatar-demo" size="small" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="base" shape="square">W</w-avatar>
          <w-avatar class="avatar-demo" size="large" shape="square">W</w-avatar>
        </div>
      </section>
      <section>
        <h5 class="title">自定类名控制颜色</h5>
        <div>
          <w-avatar class="avatar-demo" custom-bg="blueviolet" size="small">W</w-avatar>
          <w-avatar class="avatar-demo" custom-bg="#de961c" size="base">W</w-avatar>
          <w-avatar class="avatar-demo" custom-bg="skyblue" @click="alerts" size="large">点我</w-avatar>
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

.avatar-demo{
  margin-left: 20px;
}
</style>



<script>
export default {
  name: "avatar",
  data() {
    return {};
  },
  created() {},
  methods: {
    alerts(){
      this.$toast("你点我了哦");
    }
  }
};
</script>


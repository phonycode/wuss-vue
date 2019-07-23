<template>
  <div class="wuss-box">
    <h3>switch 开关</h3>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">基础用法</h5>
        <div>
          <w-switch @toggle="switchs"></w-switch>
        </div>
      </section>
      <section>
        <h5 class="title">尺寸选择</h5>
        <div>
          <p>小</p>
          <w-switch :active="switch1" size="small">小号</w-switch>
        </div>
        <div>
          <p>默认</p>
          <w-switch :active="switch1">默认</w-switch>
        </div>
        <div>
          <p>大</p>
          <w-switch :active="switch1" size="large">大号</w-switch>
        </div>
      </section>
      <section>
        <h5 class="title">禁用状态</h5>
        <div>
          <p>关闭</p>
          <w-switch disabled :active="switch2"></w-switch>
        </div>
        <div>
          <p>开启</p>
          <w-switch disabled :active="switch3"></w-switch>
        </div>
      </section>
      <section>
        <h5 class="title">自定义颜色</h5>
        <div>
          <p>默认色</p>
          <w-switch :active="switch4"></w-switch>
        </div>
        <div>
          <p>自定义色</p>
          <w-switch active-color="#1989fa" :active="switch4" inactive-color="yellow"></w-switch>
        </div>
        <div>
          <p>自定义色（禁用开启）</p>
          <w-switch disabled inactive-color="#1c75f3"></w-switch>
        </div>
        <div>
          <p>自定义色（禁用关闭）</p>
          <w-switch active-color="#E0A21E" disabled :active="switch5"></w-switch>
        </div>
      </section>
      <section>
        <h5 class="title">事件（是否选中 和选中的值）</h5>
        <div>
          <w-switch name="events" label="events" @toggle="switchs">事件</w-switch>
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
.wuss-boxs {
  background: #f8f8f8;
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

.title ~ div {
  margin: 8px 25px;
}
</style>



<script>
export default {
  name: "switch",
  data() {
    return {
      switch0: true,
      switch1: true,
      switch2: false,
      switch3: true,
      switch4: false,
      switch5: true,
      switch6: false,
    };
  },
  created() {},
  methods: {
    switchs(a) {
      alert(a);
    }
  }
};
</script>


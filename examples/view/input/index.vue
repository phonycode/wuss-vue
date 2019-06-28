<template>
  <div class="wuss-box">
    <h3>Input</h3>
    <small>输入框</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-input class="wuss-demo" v-model="rate" :max="20"></w-input>
        </div>
      </section>
      <section>
        <h5 class="title">步长设置</h5>
        <div>
          <w-input class="wuss-demo" v-model="input2" :step="5"></w-input>
        </div>
      </section>
      <section>
        <h5 class="title">限制输入范围(2-40)</h5>
        <div>
          <w-input class="wuss-demo" v-model="input3" :max="40" :min="2"></w-input>
        </div>
      </section>
      <section>
        <h5 class="title">只读/禁用</h5>
        <div>
          <w-input class="wuss-demo" :disabled="true" v-model="input5"></w-input>
          <w-input class="wuss-demo" readonly v-model="input6"></w-input>
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
  name: "inputs",
  data() {
    return {
      rate: 9,
      rate1: 2,
      input2:8,
      input3: 2,
      input5: 6,
      input6: 5
    };
  },
  created() {},
  methods: {}
};
</script>


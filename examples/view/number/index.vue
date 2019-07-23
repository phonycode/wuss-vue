<template>
  <div class="wuss-box">
    <h3>Number</h3>
    <small>计数器</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-number class="wuss-demo" v-model="rate" :max="20"></w-number>
          <div>{{rate}}</div>
        </div>
      </section>
      <section>
        <h5 class="title">步长设置</h5>
        <div>
          <w-number class="wuss-demo" v-model="number2" :step="5"></w-number>
          <div>步长5 值：{{number2}}</div>
        </div>
      </section>
      <section>
        <h5 class="title">限制输入范围(2-40)</h5>
        <div>
          <w-number class="wuss-demo" v-model="number3" :max="40" :min="2"></w-number>
          {{number3}}
        </div>
      </section>
      <!-- <section>
        <h5 class="title">限制是否整数（默认只能整数）</h5>
        <div>
          <w-number class="wuss-demo" v-model="rate"></w-number>
        </div>
      </section> -->
      <section>
        <h5 class="title">禁用</h5>
        <div>
          <w-number class="wuss-demo" :disabled="true" v-model="number5"></w-number>
        </div>
      </section>
      <section>
        <h5 class="title">input只读</h5>
        <div>
          <w-number class="wuss-demo" readonly v-model="number6"></w-number>
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
  name: "number",
  data() {
    return {
      rate: 9,
      rate1: 2,
      number2:8,
      number3: 2,
      number5: 6,
      number6: 5
    };
  },
  created() {},
  methods: {}
};
</script>


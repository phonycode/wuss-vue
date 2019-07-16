<template>
  <div class="wuss-box">
    <h3>Range</h3>
    <small>区域选择</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <w-range bindonChange="onChange" bindafterChange="afterChange" @change="test" />
      </section>
      <section>
        <h5 class="title">disabled</h5>
          <w-range disabled />
      </section>
       <section>
        <h5 class="title">custom Style</h5>
          <w-range trackStyle="border-color:red;background-color:red;" />
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
  name: "range",
  data() {
    return {
      rate: 9
    };
  },
  created() {},
  methods: {
    test(e){
      console.log(e)
    }
  }
};
</script>


<template>
  <div class="wuss-box">
    <h3>Rater</h3>
    <small>评分</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-rater class="wuss-demo" :count="5" size="25px" v-model="rate"></w-rater>
          <div style="margin-left:30px;">当前分数 {{rate}}</div>
        </div>
      </section>
      <section>
        <h5 class="title">自定义icon图标</h5>
        <div>
          <w-rater
            class="wuss-demo"
            :count="5"
            size="25px"
            icon="like"
            void-icon="like-o"
            v-model="rate"
          ></w-rater>
        </div>
      </section>
      <section>
        <h5 class="title">自定义数量</h5>
        <div>
          <w-rater
            class="wuss-demo"
            :count="8"
            size="25px"
            v-model="rate3"
            :min="2"
            :max="7"
          ></w-rater>
          <div style="margin-left:30px;">当前分数 {{rate3}}（最大7颗，最小两颗）用力点星星</div>
        </div>
      </section>
      <section>
        <h5 class="title">禁用</h5>
        <div>
          <w-rater
            class="wuss-demo"
            :count="3"
            size="20px"
            color="#ccc"
            v-model="rate1"
            disabled
          ></w-rater>
          <div style="margin-left:30px;">当前分数 {{rate1}}</div>
        </div>
      </section>
      <section>
        <h5 class="title">自定义颜色</h5>
        <div>
          <w-rater
            class="wuss-demo"
            :count="5"
            color="pink"
            size="25px"
            v-model="rate"
          ></w-rater>
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
  name: "rater",
  data() {
    return {
      rate: 3,
      rate1: 2,
      rate3: 5
    };
  },
  created() {},
  methods: {}
};
</script>


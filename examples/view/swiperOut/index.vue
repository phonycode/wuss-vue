<template>
  <div class="wuss-box">
    <h3>swiperOut 侧滑菜单</h3>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">基础用法</h5>
        <w-swiper-out>
          <div class="swiper-dom">123</div>
        </w-swiper-out>
      </section>
      <section>
        <h5 class="title">禁用</h5>
        <w-swiper-out disabled>
          <div class="swiper-dom">禁用</div>
        </w-swiper-out>
      </section>
      <section>
        <h5 class="title">close(是否自动打开) close=false</h5>
        <w-swiper-out :close="false">
          <div class="swiper-dom">123</div>
        </w-swiper-out>
      </section>
      <section>
        <h5 class="title">threshold 侧滑触发的阀值 threshold=(0-1)</h5>
        <div>
          <w-swiper-out :threshold="0.3" :swiperOutBtns="swiperOutBtns">
            <div class="swiper-dom">threshold 侧滑触发的阀值</div>
          </w-swiper-out>
        </div>
      </section>
      <section>
        <h5 class="title">backgroundColor=pink</h5>
        <div>
          <w-swiper-out backgroundColor="pink">
            <div class="swiper-dom">backgroundColor=pink</div>
          </w-swiper-out>
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

.swiper-dom {
  height: 48px;
  line-height: 48px;
}
</style>



<script>
export default {
  name: "swiperOut",
  data() {
    return {
      swiperOutBtns: [
        {
          text: "编辑",
          color: "#ffffff",
          background: "green",
          disabled: false,
          size: "14px",
          type: "edit"
        },{
          text: "删除",
          color: "#ffffff",
          background: "#e42112",
          disabled: false,
          size: "14px",
          type: "delete"
        }
      ]
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


<template>
  <div class="wuss-box">
    <h3>notice</h3>
    <small>通告</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">Default</h5>
        <div>
          <w-notice text="wuss-notice-vue 哔哩巴拉" />
        </div>
      </section>
      <section>
        <h5 class="title">model=closeable speed=30</h5>
        <div>
          <w-notice text="wuss-notice-vue 哔哩巴拉" model="closeable"/>
        </div>
      </section>
      <section>
        <h5 class="title">model=link scrollable=false</h5>
        <div>
          <w-notice text="wuss-notice-vue 哔哩巴拉" scrollable model="link"/>
        </div>
      </section>
      <section>
        <h5 class="title">自定义颜色/背景/icon</h5>
        <div>
          <w-notice text="wuss-notice-vue 哔哩巴拉" background="rgba(255, 113, 110, 1)" color="#fff" icon="voice" scrollable model="link"/>
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

</style>



<script>
export default {
  name: "notice",
  data() {
    return {
      iconNormal: {
        active:
          "https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png",
        normal:
          "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png"
      },
      iconDisable: {
        active:
          "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",
        normal:
          "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png"
      },
      switch0: true,
      switch1: true,
      switch2: false,
      switch3: true,
      switch4: false,
      switch5: true,
      switch6: false
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


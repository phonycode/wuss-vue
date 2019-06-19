<template>
  <div class="wuss-box">
    <h3>confirm</h3>
    <small>确认框</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">默认</h5>
        <div>
          <w-button type="info" @click="confirm">正常使用(自动关闭默认3s后)</w-button>
        </div>
      </section>
      <section>
        <h5 class="title">按钮颜色</h5>
        <div>
          <w-button type="info" @click="confirm1">按钮颜色</w-button>
        </div>
      </section>
      <section>
        <h5 class="title">按钮文本</h5>
        <div>
          <w-button type="info" @click="confirm2">按钮文本</w-button>
        </div>
      </section>
      <section>
        <h5 class="title">是否显示取消</h5>
        <div>
          <w-button type="info" @click="confirm3">是否显示取消</w-button>
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
  name: "confirm",
  data() {
    return {};
  },
  created() {},
  methods: {
    confirm() {
      this.$confirm("你确定不上吗", "警告", {
        callback: function(e) {
          this.$alert(e);
        }
      });
    },
    confirm1() {
      this.$confirm("我是有颜色的", "警告", {
        cancelTextColor: "#55b2f0",
        confirmTextColor: "green",
        callback: function(e) {
          this.$alert(e);
        }
      });
    },
    confirm2() {
      this.$confirm("你要进来吗", "开车警告", {
        cancelTextColor: "#55b2f0",
        confirmTextColor: "green",
        cancelText: "我就不",
        confirmText: "来啦老弟",
        callback: function(e) {
          this.$alert(e);
        }
      });
    },
    confirm3() {
      this.$confirm("哈喽","警告",{
        showCancel:false,
        callback: function(e) {
          this.$alert(e);
        }
      });
    }
  }
};
</script>


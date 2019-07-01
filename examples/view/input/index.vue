<template>
  <div class="wuss-box">
    <h3>Input</h3>
    <small>输入框</small>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">textarea</h5>
        <w-cell-group>
          <w-input class="wuss-demo" placeholder="文本框" type="textarea" v-model="textarea" claerable></w-input>
        </w-cell-group>
      </section>
      <section>
        <h5 class="title">自定义类型</h5>
        <w-cell-group class="wuss-user">
          <w-input
            class="wuss-demo"
            label="用户名"
            placeholder="请输入用户名"
            type="text"
            v-model="email"
            claerable
            required
          ></w-input>
          <w-input
            class="wuss-demo"
            label="邮箱"
            placeholder="请输入邮箱"
            type="email"
            v-model="email"
            claerable
            required
          ></w-input>
        </w-cell-group>
      </section>
      <section>
        <h5 class="title">清空</h5>
        <div>
          <w-input class="wuss-demo" v-model="input3" :max="40" :min="2"></w-input>
        </div>
      </section>
      <section>
        <h5 class="title">只读/禁用</h5>
        <div>
          <w-input class="wuss-demo" disabled v-model="input5"></w-input>
          <w-input class="wuss-demo" readonly v-model="input6"></w-input>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
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

.wuss-user .wuss-demo .wuss-cell-title{
  display: inline-block;
  width: 50px;
  text-align: right;
}
</style>



<script>
export default {
  name: "inputs",
  data() {
    return {
      textarea: "测试测试测试",
      email: "",
      input2: 8,
      input3: 2,
      input5: 6,
      input6: 5
    };
  },
  created() {},
  methods: {}
};
</script>


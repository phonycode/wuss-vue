<template>
  <div class="wuss-box">
    <h3>Form</h3>
    <small>表单</small>
    <w-form>
      <w-cell-group>
        <w-input class="wuss-demo" label="姓名" v-model="input3"></w-input>
        <w-input class="wuss-demo" label="手机号" v-model="input3"></w-input>
        <w-input
          class="wuss-demo"
          label="详细地址"
          placeholder="详细地址"
          type="textarea"
          v-model="textarea"
          claerable
        ></w-input>
        <w-cell text="同意用户协议信息">
          <w-switch>小号</w-switch>
        </w-cell>
        <w-cell v-for="item in cell" :key="item.id" :title="'准备好了吗'">
          <w-radio :name="item.na" @change="inputs" :label="item.id" v-model="radio4"></w-radio>
        </w-cell>
        <w-cell >
          <w-checkboxgroup :checkBoxData="data3" @change="checkeds"></w-checkboxgroup>
        </w-cell>
      </w-cell-group>
    </w-form>
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

.wuss-user .wuss-demo .wuss-cell-title {
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
      radio4: 0,
      data3: [
        { id: 31, value: "备选项", label: "备选项" },
        { id: 32, value: "备选项", label: "备选项" },
        { id: 33, value: "备选项", label: "备选项" }
      ],
      cell: [
        {
          name: "单选框1",
          id: 0,
          na: "e"
        },
        {
          name: "单选框2",
          id: 1,
          na: "e"
        }
      ]
    };
  },
  created() {},
  methods: {
    checkeds(a) {
      this.checked = a;
    },
    inputs() {}
  }
};
</script>


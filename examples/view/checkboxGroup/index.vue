<template>
  <div class="wuss-box">
    <h3>checkbox 复选框组</h3>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">基础用法</h5>
        <div>
          <w-checkboxgroup :checkBoxData="data" @change="checkeds"></w-checkboxgroup>
        </div>
        <div>选中的值 {{checked}}</div>
      </section>
      <section>
        <h5 class="title">禁用状态</h5>
        <div>
          <w-checkboxgroup :checkBoxData="data2" @change="checkeds"></w-checkboxgroup>
        </div>
      </section>
      <section>
        <h5 class="title">尺寸选择</h5>
        <div>
          <w-checkboxgroup :checkBoxData="data3" @change="checkeds" size="small"></w-checkboxgroup>
        </div>
        <div>
          <w-checkboxgroup :checkBoxData="data3" @change="checkeds"></w-checkboxgroup>
        </div>
        <div>
          <w-checkboxgroup :checkBoxData="data33" @change="checkeds" size="large"></w-checkboxgroup>
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
  name: "checkboxGroup",
  data() {
    return {
      data: [
        { id: 11, name: "test", value: "选项A", label: "选项A", checked: true },
        {
          id: 12,
          name: "test",
          value: "选项B",
          label: "选项B",
          checked: false
        },
        {
          id: 13,
          name: "test",
          value: "选项C",
          label: "选项C",
          checked: false
        },
        { id: 14, name: "test", value: "选项D", label: "选项D", checked: false }
      ],
      checked: [],
      data2: [
        { id: 21, value: "选项1", label: "选项1", disabled: true },
        { id: 22, value: "选项2", label: "选项2", disabled: true }
      ],
      data3: [{ id: 31, value: "备选项", label: "备选项" }],
      data33: [{ id: 31, value: "备选项", label: "备选项", size: "large" }],
      data4: [
        { id: 41, value: "选项1", label: "选项1" },
        { id: 42, value: "选项2", label: "选项2" }
      ],
      data5: [
        { id: 51, value: "A", label: "选项1" },
        { id: 52, value: "B", label: "选项2" },
        { id: 53, value: "C", label: "选项3" },
        { id: 54, value: "D", label: "选项4" }
      ],
      data6: [
        { id: 51, value: "选项1", label: "选项1" },
        { id: 52, value: "选项2", label: "选项2" },
        { id: 53, value: "选项3", label: "选项3" },
        { id: 54, value: "选项4", label: "选项4" }
      ],
      data7: [
        { id: 41, value: "选项1", label: "选项1" },
        { id: 42, value: "选项2", label: "选项2" }
      ],
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
      checkList: true,
      checkList1: true,
      checkList2: false,
      checkList3: 0,
      checkList4: 0,
      checkList5: 0,
      checkList6: true,
      checkList7: false,
      checkList8: false,
      checkList9: true,
      values: ""
    };
  },
  created() {},
  methods: {
    checkeds(a) {
      this.checked = a;
    }
  }
};
</script>


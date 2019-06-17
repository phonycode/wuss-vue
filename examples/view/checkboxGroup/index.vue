<template>
  <div class="wuss-box">
    <h3>checkbox 复选框组</h3>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">基础用法</h5>
        <div v-for="item in checkbox" :key="item.id">
          <w-checkbox :name="item.na" :label="item.id" v-model="checkList">{{item.name}}</w-checkbox>
        </div>
        <div>选中的值 {{checkList}}</div>
      </section>
      <section>
        <h5 class="title">禁用状态</h5>
        <div>
          <w-checkbox :name="'checkeds'" :label="'值'" :disabled="true" v-model="checkList1">复选框禁用选中</w-checkbox>
        </div>
        <div>
          <w-checkbox
            :name="'nocheck'"
            :label="'未选中'"
            :disabled="true"
            v-model="checkList2"
          >复选框禁用未选中</w-checkbox>
        </div>
      </section>
      <section>
        <h5 class="title">尺寸选择</h5>
        <div>
          <w-checkbox :name="'small'" :label="'small'" v-model="checkList3" size="small">小号(默认色)</w-checkbox>
        </div>
        <div>
          <w-checkbox :name="'base'" :label="'base'" v-model="checkList4">默认</w-checkbox>
        </div>
        <div>
          <w-checkbox :name="'large'" :label="'large'" v-model="checkList5" size="large">大号</w-checkbox>
        </div>
      </section>
      <section>
        <h5 class="title">自定义图标</h5>
        <div>
          <w-checkbox name="custom" label="test" :iconSrc="iconNormal" v-model="checkList7">自定义图标(用力点我试试)</w-checkbox>
        </div>
        <div>
          <w-checkbox name="customDisable" label="test" :iconSrc="iconDisable" disabled v-model="checkList8">自定义图标禁用</w-checkbox>
        </div>
      </section>
      <section>
        <h5 class="title">事件（是否选中 和选中的值）</h5>
        <div>
          <w-checkbox
            name="events"
            label="events"
            v-model="checkList9"
            @change="inputs"
          >事件</w-checkbox>
          <br>
          {{'状态 '+checkList9}}  选中值{{ values }}
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
      checkbox: [
        {
          name: "复选框1",
          id: 0,
          na: "a"
        }
      ],
      iconNormal: {
        active:
          "https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png",
        normal:
          "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png"
      },
      iconDisable:{
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
      values:'',

    };
  },
  created() {},
  methods: {
    inputs(a, b) {
      this.values = a ;
    }
  }
};
</script>


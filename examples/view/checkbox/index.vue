<template>
  <div class="wuss-box">
    <h3>checkbox 复选框</h3>
    <div class="wuss-boxs">
      <section>
        <h5 class="title">
          基础用法
          <br>
          <small class="title-small">若选项过多，建议使用 Select 选择器。</small>
        </h5>
        <div v-for="item in radios" :key="item.id">
          <w-radio :name="item.na" :label="item.id" v-model="radio">{{item.name}}</w-radio>
        </div>
        <div>
          选中的值 {{radio}}
        </div>
      </section>
      <section>
        <h5 class="title">禁用状态</h5>
        <div v-for="item in displayRadio" :key="item.id">
          <w-radio
            :name="item.na"
            :label="item.id"
            :disabled="item.disabled"
            v-model="radio1"
          >{{item.name}}</w-radio>
        </div>
      </section>
      <section>
        <h5 class="title">自定义颜色</h5>
        <div v-for="item in customColor" :key="item.id">
          <w-radio
            :name="item.na"
            :label="item.id"
            :wuss-color="item.color"
            v-model="radio2"
          >{{item.name}}</w-radio>
        </div>
      </section>
      <section>
        <h5 class="title">自定义图标</h5>
        <div v-for="item in customIcon" :key="item.id">
          <w-radio
            :name="item.na"
            :label="item.id"
            :icon-src="item.iconSrc"
            :disabled="item.disabled"
            v-model="radio3"
          >{{item.name}}</w-radio>
        </div>
      </section>

      <section>
        <h5 class="title">同cell组件一起使用</h5>
        <w-cell-group>
          <w-cell v-for="item in cell" :key="item.id" :title="'准备好了吗'">
            <w-radio :name="item.na" @change="inputs" :label="item.id" v-model="radio4"></w-radio>
          </w-cell>
        </w-cell-group>
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
.wuss-cellGroup {
  margin-right: 0 !important;
  margin-left: 0 !important;
  background: #fff;
}
</style>



<script>
export default {
  name: "checkbox",
  data() {
    return {
      radios: [
        {
          name: "单选框1",
          id: 0,
          na: "a"
        },
        {
          name: "单选框2",
          id: 1,
          na: "a"
        }
      ],
      displayRadio: [
        {
          name: "单选框1(禁用)",
          id: 0,
          na: "b",
          disabled: true
        },
        {
          name: "单选框2(正常)",
          id: 1,
          na: "b",
          disabled: false
        }
      ],
      customColor: [
        {
          name: "单选框1(默認)",
          id: 0,
          na: "c"
        },
        {
          name: "单选框2(藍色)",
          id: 1,
          na: "c",
          color: "rgb(69, 143, 246)"
        },
        {
          name: "单选框2(紅色)",
          id: 2,
          na: "c",
          color: "rgb(239, 71, 58)"
        }
      ],
      customIcon: [
        {
          name: "单选框1",
          id: 0,
          na: "d",
          iconSrc:
            "https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"
        },
        {
          name: "单选框2",
          id: 1,
          na: "d",
          iconSrc: ""
        }
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
      ],
      radio: 0,
      radio1: 1,
      radio2: 0,
      radio3: 0,
      radio4: 0,
      checked: ""
    };
  },
  created() {},
  methods: {
    inputs(a, b) {
      console.log(a);
      console.log(b);
    }
  }
};
</script>


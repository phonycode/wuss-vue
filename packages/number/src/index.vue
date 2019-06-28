<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-06-28 14:57:51
 * @Description: 
 * @form: (0 U 0)
 * @param {Number}   value                  v-mode的值
 * @param {Number}   max                    可选择最大数量
 * @param {Number}   min                    可选中最小数量
 * @param {String}   color                  选中颜色+
 * @param {String}   voidColor              未选中颜色
 * @param {String}   size                   px图标大小
 * @param {Boolean}  disabled               是否禁用 默认false
 * @param {String}   icon                   选中时图标
 * @param {String}   voidIcon               未选中时图标
 * @param {String}   spacing                每个图标之间的间距
 -->
<template>
  <div class="wuss-number">
    <span
      class="wuss-number_btn wuss-number_minus"
      :class="[{'wuss-number_disabled':disabled || isMinus}]"
      @click="onClick('minus')"
    ></span>
    <input
      type="number"
      class="wuss-number_input"
      :class="[{'wuss-number_disabled':disabled}]"
      :disabled="disabled"
      :dataMax="max"
      :dataMin="min"
      @blur="blur"
      :value="model"
      :readonly="readonly"
    >
    <span
      class="wuss-number_btn wuss-number_add"
      :class="[{'wuss-number_disabled':disabled || isAdd}]"
      @click="onClick('add')"
    ></span>
  </div>
</template>
<script>
export default {
  name: "WNumber",
  props: {
    max: {
      type: Number,
      default: 9999
    },
    min: {
      type: [Number],
      default: 1
    },
    step: {
      type: [String, Number],
      default: 1
    },
    voidColor: {
      type: String,
      default: "#ccc"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      required: true,
      default: 1
    }
  },
  data() {
    return {
      isMinus: this.value === this.min ? true : false,
      isAdd: this.value === this.max ? true : false,
      model: this.valueSCope(this.value)
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    /**
     * @description: 值限制范围
     * @param {Number} 当前值
     * @return:
     */
    valueSCope(value) {
      // 最大最小值限制
      return value < this.min ? this.min : value > this.max ? this.max : value;
    },
    /**
     * @description: 是否警用操作
     * @param {type}
     * @return:
     */
    isClick(val) {
      if (val === this.min) {
        this.isMinus = true;
      } else if (val === this.max) {
        this.isAdd = true;
      } else {
        this.isAdd = false;
        this.isMinus = false;
      }
    },
    /**
     * @description: 组件数据双向绑定 模拟v-model语法糖
     * @param {type} 
     * @return: 
     */
    models(values) {
      this.$emit("input", values);
      this.$emit("change", values);
    },
    /**
     * @description: 点击加减操作
     * @param {String} type 点击时类型 
     * @return: 
     */
    onClick(type) {
      let val = Number(this.model);

      if (this.disabled === true || (this.isAdd && type === "add") || (this.isMinus && type === "minus")) return;

      const diff = type === "minus" ? -this.step : +this.step;
      const value = Math.round((val + diff) * 100) / 100;
      let values = this.valueSCope(value);
      this.isClick(values, type);
      this.model = values;
      this.models(this.model);

    },
    /**
     * @description: 失去焦点时操作
     * @param {type} 
     * @return: 
     */
    blur(e) {
      let val = e.target.value;
      this.model = this.valueSCope(val);
      this.isClick(this.model);
      this.models(this.model);
    }
  }
};
</script>
<style scoped>
.wuss-number {
  margin-left: 10px;
  font-size: 0;
}
.wuss-number_btn {
  cursor: pointer;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  margin: 1px;
  padding: 5px;
  vertical-align: middle;
  background-color: #f2f3f5;
  border: 0;
}

.wuss-number_input {
  box-sizing: content-box;
  width: 36px;
  height: 26px;
  margin: 1px;
  padding: 1px;
  outline: none;
  color: #323233;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  background-color: #f2f3f5;
  border: 0;
  border-width: 1px 0;
  border-radius: 0;
  -webkit-appearance: none;
}

.wuss-number_add::before,
.wuss-number_minus::before,
.wuss-number_add::after {
  content: "";
  width: 9px;
  height: 1px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: #000;
}

.wuss-number_add::after {
  transform: rotate(90deg);
}

.wuss-number_disabled {
  color: #c8c9cc;
  background-color: #f7f8fa;
}

.wuss-number_disabled.wuss-number_add::before,
.wuss-number_disabled.wuss-number_minus::before,
.wuss-number_disabled.wuss-number_add::after {
  background: #c8c9cc;
}
</style>


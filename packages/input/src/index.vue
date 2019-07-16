<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-19 17:30:16
 * @LastEditors: null
 * @LastEditTime: 2019-07-02 11:11:04
 * @Description: 
 * @form: (0 U 0)
 * @param {String}          type                  文本类型 支持原生所有input类型
 * @param {String}          label                 文本标题 默认不生成标题
 * @param {String|Number}   value                 input值
 * @param {Boolean}        disabled               是否禁用
 * @param {Boolean}        readonly               是否只读
 * @param {Boolean}        required               是否启用必填*符号
 * @param {Boolean}        claerable              是否启用清除按钮

 -->
<template>
  <w-cell :title="label" class="wuss-input" :class="{'wuss-input_required':required}">
    <div class="wuss-input_body">
      <textarea
        v-if="type === 'textarea'"
        class="wuss-input_content"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="text"
        @focus="focus"
        ref="textarea"
      ></textarea>
      <input
        v-else
        class="wuss-input_content"
        :type="type"
        :value="123"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        v-model="text"
        @focus="focus"
      >
      <div class="wuss-input_right">
        <w-icon v-show="isClearble" class="wuss-input_close" @click.native="closeTxt" type="close"></w-icon>
        <slot name="ic"/>
      </div>
    </div>
  </w-cell>
</template>
<script>
export default {
  name: "WInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: [String, Number],
    value: {},
    inputAlign: {},
    placeholder: {},
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    claerable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: this.value,
      isClearble: false
    };
  },
  created() {},
  computed: {},
  watch: {
    text(val) {
      if(this.claerable) this.isClearble = val ? true : false;
      this.$emit("input", val);
      this.$emit("change", val);
    },
    isClearble(val) {
      return val;
    }
  },
  methods: {
    closeTxt() {
      this.$nextTick(() => {
        this.text = "";
        this.$refs.textarea.focus();
      });
    },
    focus(e) {
      if(this.readonly) return ;
      if(e.target.value && this.claerable) this.isClearble = true;
    },
    blur() {
      this.$nextTick(() => {
        if(this.claerable) this.isClearble = false;
        if(this.$refs.textarea) this.$refs.textarea.blur();
      });
    }
  }
};
</script>
<style>
textarea {
  outline: none;
  height: 150px;
}

input {
  outline: none;
}

.wuss-input_required .wuss-cell-title:before {
  content: "*";
  color: red;
}
.wuss-input .wuss-cell-title {
  font-size: 14px;
  margin-right: 8px;
}

.wuss-cell-text {
  flex: 1;
  line-height: 1;
}
.wuss-input_body {
  display: flex;
  margin: 4px 0;
}
.wuss-input_content {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #323233;
  text-align: left;
  background-color: transparent;
  border: 0;
  resize: none;
}

.wuss-input_close {
  border-radius: 50%;
  color: #fff;
  background: #ccc;
  font-size: 14px;
  padding: 2px;
  margin: 0 4px;
}
</style>


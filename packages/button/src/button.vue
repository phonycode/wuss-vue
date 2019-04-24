<template>
  <button
  :disabled="buttonDisabled"
   class="wuss-button" 
   @touchstart.stop="handleClick"
   @touchend="handleTouchEnd"
   :class="[
      type ? 'wuss-button--' + type : '',
      buttonSize ? 'wuss-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-fullLine': fullLine,
        'is-circle': circle,
        'is-active': active
      }
    ]">
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  name:'WussButton',
  props:{
    type: String,
    disabled: Boolean,
    fullLine: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    size: String,
    loading: Boolean,
    circle: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed:{
    buttonDisabled() {
      return this.disabled === true ? true : false;
    },
    buttonSize() {
      return this.size
    }
  },
  methods: {
    handleClick(evt) {
      if(!this.buttonDisabled){
        this.active = true
        this.$emit('click', evt);
      }   
    },
    handleTouchEnd() {
      this.active = false
    }
  }
}
</script>
<style>
  .wuss-button {
    background-color: #fff;
    height: 41px;
    border-color: transparent;
    background-color: #f6f8fa;
    box-shadow: 0 0 1px #b8bbbf;
    outline: none;
    color:#656b79;
    border-radius: 4px;
    font-weight: 400;
    font-family: Arial, "Microsoft YaHei";
    text-align: center;
    margin: 5px;
    font-size: 18px;
    box-sizing: border-box;
  }
  .wuss-button:active {
    background-color:#b8bbbf;
  }
  .wuss-button.is-fullLine{
    width: 100%;
    margin: 5px 0;
  }
  /* 圆形 */
  .wuss-button.is-circle.wuss-button--large{
    width: 49px;
    border-radius: 49px;
  }
  .wuss-button.is-circle.wuss-button--mini{
    width: 33px;
    border-radius: 33px;
  }
  .wuss-button.is-circle{
    width: 41px;
    border-radius: 41px;
  }
  /* 禁止 */
  .wuss-button.is-disabled{
    opacity: .6;
  }
  /* 大小 */
  .wuss-button.wuss-button--large{
    height: 49px;
    font-size: 20px;
  }
  .wuss-button.wuss-button--mini{
    height: 33px;
    font-size: 14px;
  }
  /* 类型 */
  .wuss-button.wuss-button--primary{
    background-color:#26a2ff;
    color: #fff;
  }
  .wuss-button.wuss-button--primary.is-active{
    background-color:#2086d4;
  }
  .wuss-button.wuss-button--warning{
    background-color:#e6a23c;
    color: #fff;
  }
  .wuss-button.wuss-button--warning.is-active{
    background-color:#b88230;
  }
  .wuss-button.wuss-button--success{
    background-color:#67c23a;
    color: #fff;
  }
  .wuss-button.wuss-button--success.is-active{
    background-color:#549e2f;
  }
  .wuss-button.wuss-button--error{
    background-color:#f56c6c;
    color: #fff;
  }
  .wuss-button.wuss-button--error.is-active{
    background-color:#c45757;
  }
</style>



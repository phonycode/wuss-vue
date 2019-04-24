<template>
  <button
  :disabled="buttonDisabled"
   class="wuss-button" 
   @click="handleClick"
   :class="[
      type ? 'wuss-button--' + type : '',
      buttonSize ? 'wuss-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-fullLine': fullLine,
        'is-round': round,
        'is-circle': circle
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
    }
  },
  computed:{
    buttonDisabled() {
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
        this.$emit('click', evt);
      }
  }
}
</script>
<style>
  .wuss-button {
    background-color: #fff;
    height: 41px;
    padding: 0 10px;
    border-color: transparent;
    background-color: #f6f8fa;
    box-shadow: 0 0 1px #b8bbbf;
    outline: none;
    color:#656b79;
    border-radius: 4px;
    font-weight: 400;
    font-family: Arial, "Microsoft YaHei";
    text-align: center;
  }
  .wuss-button:active {
    background-color:#b8bbbf;
  }
  .wuss-button.is-fullLine{
    width: 100%;
  }
  .wuss-button span {
    font-size: 18px;
  }
</style>



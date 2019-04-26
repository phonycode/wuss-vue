<template>
  <button
  :disabled="buttonDisabled"
   class="w-button" 
   @touchstart.stop="handleClick"
   @touchend="handleTouchEnd"
   :class="[
      type ? 'w-button--' + type : '',
      buttonSize ? 'w-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-fullLine': fullLine,
        'is-circle': circle,
        'is-active': active
      }
    ]">
    <svg v-if="icon" class="icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-' + icon"></use></svg>
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  name:'WButton',
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
    icon: String,
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
  .w-button {
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
  .w-button .icon{
    color: #656b79;
  }
  .w-button:active {
    background-color:#b8bbbf;
  }
  .w-button.is-fullLine{
    width: 100%;
    margin: 5px 0;
  }
  /* 圆形 */
  .w-button.is-circle.w-button--large{
    width: 49px;
    border-radius: 49px;
  }
  .w-button.is-circle.w-button--mini{
    width: 33px;
    border-radius: 33px;
  }
  .w-button.is-circle{
    width: 41px;
    border-radius: 41px;
  }
  /* 禁止 */
  .w-button.is-disabled{
    opacity: .6;
  }
  /* 大小 */
  .w-button.w-button--large{
    height: 49px;
    font-size: 20px;
  }
  .w-button.w-button--mini{
    height: 33px;
    font-size: 14px;
  }
  /* 类型 */
  .w-button.w-button--primary{
    background-color:rgb(69, 143, 246);
    color: #fff;
  }
  .w-button.w-button--primary .icon{
    color: #fff;
  }
  .w-button.w-button--primary.is-active{
    background-color:rgb(28, 117, 243);
  }
  .w-button.w-button--info{
    background-color:rgb(85, 178, 240);
    color: #fff;
  }
  .w-button.w-button--info .icon{
    color: #fff;
  }
  .w-button.w-button--info.is-active{
    background-color:rgb(43, 159, 236);
  }
  .w-button.w-button--warning{
    background-color:rgb(255, 153, 0);
    color: #fff;
  }
  .w-button.w-button--warning .icon{
    color: #fff;
  }
  .w-button.w-button--warning.is-active{
    background-color:rgb(255, 136, 0);
  }
  .w-button.w-button--success{
    background-color:#67c23a;
    color: #fff;
  }
  .w-button.w-button--success .icon{
    color: #fff;
  }
  .w-button.w-button--success.is-active{
    background-color:#549e2f;
  }
  .w-button.w-button--danger{
    background-color:rgb(239, 71, 58);
    color: #fff;
  }
  .w-button.w-button--danger .icon{
    color: #fff;
  }
  .w-button.w-button--danger.is-active{
    background-color:rgb(228, 33, 18);
  }
</style>



<template>
  <div
    class="wuss-steps"
    :class="[
       !simple && 'wuss-steps--' + direction,
       simple && 'wuss-steps--simple'
     ]">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:'WSteps',
  props:{
    active: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  },
  data() {
    return {
      steps: [],
    }
  },
  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },

    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    }
  }
}
</script>
<style>
  .wuss-steps{
    display: flex;
    font-size: 0;
  }
  .wuss-steps.wuss-steps--vertical {
    flex-direction: column;
    text-align: left;
  }
  .wuss-steps.wuss-steps--vertical .wuss-step{
    text-align: left;
  }
  .wuss-steps.wuss-steps--vertical .wuss-step-title {
    display: inline-block;
    margin-left: 10px;
    line-height: 28px;
    font-size: 16px;
  }
</style>



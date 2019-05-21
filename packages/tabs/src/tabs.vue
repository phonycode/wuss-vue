<template>
  <div class="wuss-tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'WTabs',
  props: {
    activeName:[String,Number],
  }
}
</script>
<style>
  .wuss-tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
  }
  .wuss-tabs:before {
    content: '';
    display: block;
    width: 100%;
    bottom: 0;
    position: absolute;
    height: 1px;
    background-color: #dbd1d1;
    z-index: 1;
  }
  .wuss-tabs .wuss-tab-pane {
    line-height: 28px;
  }
</style>


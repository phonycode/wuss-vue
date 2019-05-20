<template>
  <div class="wuss-cellGroup">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WCellGroup'
}
</script>
<style>
  .wuss-cellGroup .wuss-cell:last-child{
    border-bottom-width: 0px;
  }
  .wuss-cellGroup {
    border: 1px solid #d7dadf;
    border-width: 1px 0 1px 0;
    box-sizing: border-box;
  }
</style>



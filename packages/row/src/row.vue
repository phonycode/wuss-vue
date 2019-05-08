<template>
  <div class="wuss-row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    }
  }
}
</script>
<style>
  .wuss-row {
    width: 100%;
  }
  .wuss-row:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    clear: both;
  }
</style>



<template>
  <div class="wuss-cell" :class="{'wuss-cell-disabled': disabled}">
    <span class="wuss-cell-title">{{title}}</span>
    <div class="wuss-cell-text">
      <span>{{text}}</span>
      <slot></slot>
      <svg v-if="multiple" class="icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-arrow-right'"></use></svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WCell',
  props: {
    title: String,
    text: String,
    multiple: {
      type:Boolean,
      default: false,
    },
    disabled:{
      type:Boolean,
      default: false,
    }
  }
}
</script>
<style>
  .wuss-cell-disabled.wuss-cell {
    color: #999999;
  }
  .wuss-cell{
    border-bottom: 1px solid #d7dadf;
    padding: 0 15px;
    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
    justify-content: space-between;
    min-height: 44px;
    align-items: center;
    box-sizing: border-box;
  }
  .wuss-cell-text{
    color: #999999;
  }
  .wuss-cell{
    margin-left: 15px;
  }
</style>



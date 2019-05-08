<template>
  <div 
  class="wuss-col"
  :class="[
  'wuss-col-' + span,
  'wuss-col-offset-' + offset,
  'wuss-col-push-' + push,
  'wuss-col-pull-' + pull,
  ]"
  :style="{
    'padding-left': this.$parent.gutter/2 + 'px',
    'padding-right': this.$parent.gutter/2 + 'px',
  }" >
  <div class="wuss-col-body">
    <slot></slot>
  </div>
    
  </div>
</template>
<script>
export default {
  name: 'WCol',
  props: {
    span: Number,
    offset: Number,
    push: Number,
    pull: Number
  }
}
</script>
<style>
  .wuss-col {
    height: inherit;
    float: left;
    box-sizing: border-box;
    position: relative;
  }
  .wuss-col-body{
    width: 100%;
    height: inherit;
    box-sizing: border-box;
  }
  .wuss-col-1 {
    width: 4.16667%;
  }
  .wuss-col-2 {
    width: 8.33333%;
  }
  .wuss-col-3 {
    width: 12.5%;
  }
  .wuss-col-4 {
    width: 16.66667%;
  }
  .wuss-col-5 {
    width: 20.83333%;
  }
  .wuss-col-6 {
    width: 25%;
  }
  .wuss-col-7 {
    width: 29.16667%;
  }
  .wuss-col-8 {
    width: 33.33333%;
  }
  .wuss-col-9 {
    width: 37.5%;
  }
  .wuss-col-10 {
    width: 41.66667%;
  }
  .wuss-col-11 {
    width: 45.83333%;
  }
  .wuss-col-12 {
    width: 50%;
  }
  .wuss-col-13 {
    width: 54.16667%;
  }
  .wuss-col-14 {
    width: 58.33333%;
  }
  .wuss-col-15 {
    width: 62.5%;
  }
  .wuss-col-16 {
    width: 66.66667%;
  }
  .wuss-col-17 {
    width: 70.83333%;
  }
  .wuss-col-18 {
    width: 75%;
  }
  .wuss-col-19 {
    width: 79.16667%;
  }
  .wuss-col-20 {
    width: 83.33333%;
  }
  .wuss-col-21 {
    width: 87.5%;
  }
  .wuss-col-22 {
    width: 91.66667%;
  }
  .wuss-col-23 {
    width: 95.83333%;
  }
  .wuss-col-24 {
    width: 100%;
  }

  .wuss-col-offset-1 {
    margin-left: 4.16667%;
  }
  .wuss-col-offset-2 {
    margin-left: 8.33333%;
  }
  .wuss-col-offset-3 {
    margin-left: 12.5%;
  }
  .wuss-col-offset-4 {
    margin-left: 16.66667%;
  }
  .wuss-col-offset-5 {
    margin-left: 20.83333%;
  }
  .wuss-col-offset-6 {
    margin-left: 25%;
  }
  .wuss-col-offset-7 {
    margin-left: 29.16667%;
  }
  .wuss-col-offset-8 {
    margin-left: 33.33333%;
  }
  .wuss-col-offset-9 {
    margin-left: 37.5%;
  }
  .wuss-col-offset-10 {
    margin-left: 41.66667%;
  }
  .wuss-col-offset-11 {
    margin-left: 45.83333%;
  }
  .wuss-col-offset-12 {
    margin-left: 50%;
  }
  .wuss-col-offset-13 {
    margin-left: 54.16667%;
  }
  .wuss-col-offset-14 {
    margin-left: 58.33333%;
  }
  .wuss-col-offset-15 {
    margin-left: 62.5%;
  }
  .wuss-col-offset-16 {
    margin-left: 66.66667%;
  }
  .wuss-col-offset-17 {
    margin-left: 70.83333%;
  }
  .wuss-col-offset-18 {
    margin-left: 75%;
  }
  .wuss-col-offset-19 {
    margin-left: 79.16667%;
  }
  .wuss-col-offset-20 {
    margin-left: 83.33333%;
  }
  .wuss-col-offset-21 {
    margin-left: 87.5%;
  }
  .wuss-col-offset-22 {
    margin-left: 91.66667%;
  }
  .wuss-col-offset-23 {
    margin-left: 95.83333%;
  }
  .wuss-col-offset-24 {
    margin-left: 100%;
  }

  .wuss-col-push-1 {
    left: 4.16667%;
  }
  .wuss-col-push-2 {
    left: 8.33333%;
  }
  .wuss-col-push-3 {
    left: 12.5%;
  }
  .wuss-col-push-4 {
    left: 16.66667%;
  }
  .wuss-col-push-5 {
    left: 20.83333%;
  }
  .wuss-col-push-6 {
    left: 25%;
  }
  .wuss-col-push-7 {
    left: 29.16667%;
  }
  .wuss-col-push-8 {
    left: 33.33333%;
  }
  .wuss-col-push-9 {
    left: 37.5%;
  }
  .wuss-col-push-10 {
    left: 41.66667%;
  }
  .wuss-col-push-11 {
    left: 45.83333%;
  }
  .wuss-col-push-12 {
    left: 50%;
  }
  .wuss-col-push-13 {
    left: 54.16667%;
  }
  .wuss-col-push-14 {
    left: 58.33333%;
  }
  .wuss-col-push-15 {
    left: 62.5%;
  }
  .wuss-col-push-16 {
    left: 66.66667%;
  }
  .wuss-col-push-17 {
    left: 70.83333%;
  }
  .wuss-col-push-18 {
    left: 75%;
  }
  .wuss-col-push-19 {
    left: 79.16667%;
  }
  .wuss-col-push-20 {
    left: 83.33333%;
  }
  .wuss-col-push-21 {
    left: 87.5%;
  }
  .wuss-col-push-22 {
    left: 91.66667%;
  }
  .wuss-col-push-23 {
    left: 95.83333%;
  }
  .wuss-col-push-24 {
    left: 100%;
  }

  .wuss-col-pull-1 {
    right: 4.16667%;
  }
  .wuss-col-pull-2 {
    right: 8.33333%;
  }
  .wuss-col-pull-3 {
    right: 12.5%;
  }
  .wuss-col-pull-4 {
    right: 16.66667%;
  }
  .wuss-col-pull-5 {
    right: 20.83333%;
  }
  .wuss-col-pull-6 {
    right: 25%;
  }
  .wuss-col-pull-7 {
    right: 29.16667%;
  }
  .wuss-col-pull-8 {
    right: 33.33333%;
  }
  .wuss-col-pull-9 {
    right: 37.5%;
  }
  .wuss-col-pull-10 {
    right: 41.66667%;
  }
  .wuss-col-pull-11 {
    right: 45.83333%;
  }
  .wuss-col-pull-12 {
    right: 50%;
  }
  .wuss-col-pull-13 {
    right: 54.16667%;
  }
  .wuss-col-pull-14 {
    right: 58.33333%;
  }
  .wuss-col-pull-15 {
    right: 62.5%;
  }
  .wuss-col-pull-16 {
    right: 66.66667%;
  }
  .wuss-col-pull-17 {
    right: 70.83333%;
  }
  .wuss-col-pull-18 {
    right: 75%;
  }
  .wuss-col-pull-19 {
    right: 79.16667%;
  }
  .wuss-col-pull-20 {
    right: 83.33333%;
  }
  .wuss-col-pull-21 {
    right: 87.5%;
  }
  .wuss-col-pull-22 {
    right: 91.66667%;
  }
  .wuss-col-pull-23 {
    right: 95.83333%;
  }
  .wuss-col-pull-24 {
    right: 100%;
  }
</style>



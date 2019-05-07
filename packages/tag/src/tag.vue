<template>
  <transition name="open-disappear">
    <span class="wuss-tag" :class="['wuss-tag-' + type]">
      <slot></slot>
      <svg v-if="closable" @click="delTag" class="icon wuss-tag-close" aria-hidden="true"> <use :xlink:href="'#wuss-icon-close'"></use></svg>
    </span>
  </transition>
</template>
<script>
export default {
  name: 'WTag',
  props: {
    closable: Boolean,
    type: String,
  },
  methods: {
    delTag() {
      this.$emit('close', event);
    }
  }
}
</script>
<style>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .open-disappear-enter-active {
    transition: all .3s ease;
  }
  .open-disappear-leave-active {
    transition: all .3s ease;
  }
  .open-disappear-enter, .open-disappear-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }
  .wuss-tag{
    display: inline-block;
    padding: 2px 6px;
    border: 1px solid;
    border-radius: 4px;
    vertical-align: middle;
    margin: 3px;
  }
  .wuss-tag.wuss-tag-primary {
    color: rgb(69, 143, 246);
    border-color: rgb(69, 143, 246);
    background-color: rgba(69, 143, 246, 0.2);
  }
  .wuss-tag.wuss-tag-info {
    color: rgb(85, 178, 240);
    border-color: rgb(85, 178, 240);
    background-color: rgba(85, 178, 240, 0.2);
  }
  .wuss-tag.wuss-tag-warning {
    color: rgb(255, 153, 0);
    border-color: rgb(255, 153, 0);
    background-color: rgba(255, 153, 0, 0.2);
  }
  .wuss-tag.wuss-tag-success {
    color: #67c23a;
    border-color: #67c23a;
    background-color: rgba(103, 194, 58, 0.2);
  }
  .wuss-tag.wuss-tag-danger {
    color: rgb(239, 71, 58);
    border-color: rgb(239, 71, 58);
    background-color: rgba(239, 71, 58, 0.2);
  }
</style>




<template>
  <span class="wuss-tag" :class="['wuss-tag-' + type]">
    <slot></slot>
    <svg v-if="closable" @click="delTag" class="icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-close'"></use></svg>
  </span>
</template>
<script>
export default {
  name: 'WTag',
  props: {
    closable: Boolean,
    type: String,
  },
  data() {
    return {
      
    }
  },
  methods: {
    delTag() {
      this.$emit('close', event);
    }
  }
}
</script>
<style>
  .wuss-tag{
    display: inline-block;
    padding: 0.4em;
    border: 1px solid;
    border-radius: 4px;
  }
  .wuss-tag.wuss-tag-primary {
    color: rgb(69, 143, 246);
    border-color: rgb(69, 143, 246);
    background-color: rgba(69, 143, 246, .2);
  }
</style>




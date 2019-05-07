<template>
  <div class="wuss-accordion">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WAccordion',
  model: {
    prop: 'activeValue',
  },
  data() {
    return {
      accordions: [],
    }
  },
  watch: {
    accordions(accordions) {
      accordions.forEach((child, index) => {
        child.index = index;
      });
    }
  },
  props: {
    activeValue: [String,Array],
    accordion: {
      type: Boolean,
      default: false,
    }
  },
}
</script>
<style>
  .wuss-accordion .wuss-accordion-item:first-child .wuss-accordion-header {
    border-top-width: 1px;
  }
</style>


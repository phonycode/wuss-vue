<template>
  <div>
    <span></span>
    <div>
      <span>{{value}}</span>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WCell',
  props: {
    title: String,
    value: String,
  }
}
</script>


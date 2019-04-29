<template>
  <svg class="icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-' + type"></use></svg>
</template>
<script>
export default {
  name:'WIcon',
  props:{
    type: String,
  },
  data() {
    return {
    }
  },
}
</script>
<style>

</style>



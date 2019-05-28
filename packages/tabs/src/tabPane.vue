<template>
  <div class='wuss-tab-pane'
       @touchstart.stop="handleClick"
       :class="{'tab-pane-active':isActive }">
    {{label}}
  </div>
</template>
<script>
export default {
  name: 'WTabPane',
  props: {
    label: String,
    name: [String, Number],
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    isActive: function() {
      return this.$parent.currentName === this.name
    }
  },
  methods: {
    handleClick() {
      this.$parent.setCurrentName(this.name)
    },
  }
}
</script>
<style>
.wuss-tab-pane {
  position: relative;
  z-index: 2;
}
.wuss-tab-pane.tab-pane-active {
  color: rgb(69, 143, 246);
}
.wuss-tab-pane.tab-pane-active:before {
  content: "";
  display: block;
  width: 100%;
  bottom: 0;
  position: absolute;
  height: 1px;
  background-color: rgb(69, 143, 246);
  z-index: 2;
}
</style>



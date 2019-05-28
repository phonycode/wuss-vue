<template>
  <div class="wuss-tabs">
    <slot></slot>
    <div ref="wussTabsLine" class="wuss-tabs-line"></div>
  </div>
</template>
<script>
export default {
  name:'WTabs',
  model: {
    prop: 'activeName',
  },
  props: {
    activeName:[String,Number],
  },
  data() {
    return {
      currentName: this.activeName,
    }
  },
  watch: {
    activeName(value) {
      this.setCurrentName(value);
    },
  },
  mounted() {
    this.$refs.wussTabsLine.style.width = (100/this.$children.length) + '%';
    this.$children.forEach((item,index)=>{
      if(item.name === this.currentName)
      this.$refs.wussTabsLine.style.left = (100/this.$children.length)*index + '%'
    })
  },
  methods: {
    changeName(val) {
      this.currentName = val
    },
    setCurrentName(val) {
      this.$children.forEach((item,index)=>{
        if(item.name === val)
        this.$refs.wussTabsLine.style.left = (100/this.$children.length)*index + '%'
      })
      this.currentName = val
      this.$emit('input', val);//用来修改model值
      
      this.$emit('change', val);
    },
  }
}
</script>
<style>
  .wuss-tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
  }
  .wuss-tabs:before {
    content: '';
    display: block;
    width: 100%;
    bottom: 0;
    position: absolute;
    height: 1px;
    background-color: #dbd1d1;
    z-index: 1;
  }
  .wuss-tabs .wuss-tab-pane {
    line-height: 28px;
  }
  .wuss-tabs .wuss-tabs-line {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: rgb(69, 143, 246);
    z-index: 3;
    transition: .1s left linear;
  }
</style>


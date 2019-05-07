<template>
  <div class="wuss-accordion-item">
    <div class="wuss-accordion-header" :class="{'wuss-accordion-disabled':disabled}" @mousedown="handleClick">
      header
      <svg class="icon wuss-accordion-arrow" aria-hidden="true"> <use :xlink:href="'#wuss-icon-arrow-down'"></use></svg>
    </div>
    <transition name="slide">
      <div v-show="active" :ref="'wuss-slide' + name" class="wuss-accordion-body">
        <span v-if="title">{{title}}</span>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'WAccordionItem',
  beforeCreate() {
    this.$parent.accordions.push(this);
  },
  props: {
    name: [String,Number],
    title: String,
    disabled: Boolean,
  },
  data() {
    return {
      active: false,
    }
  },
  watch: {
    active: function () {
      this.dealactive()
    }
  },
  mounted() {
    this.updateStatus()
    this.$watch('$parent.activeValue', this.updateStatus);
  },
  methods: {
    handleClick() {
      if(!this.disabled) {
        this.active = !this.active
        this.dealactive()
        if(this.$parent.accordion) {
          if(this.active) {
            this.$parent.$emit('change',this.name)
          } else {
            this.$parent.$emit('change','')
          }
        } else{
          let valueList = [];
          this.$parent.accordions.map((item)=>{
            if(item.active) {
              valueList.push(item.name)
            }
          })
          this.$parent.$emit('change',valueList)
        }
      }
      
    },
    dealactive() {
      if (this.active) {
        this.$nextTick(()=>{
          let h = this.$refs['wuss-slide' + this.name].scrollHeight
          this.$refs['wuss-slide' + this.name].style.height = h + 'px';
          this.$refs['wuss-slide' + this.name].style.overflow = 'hidden'
        })
      }else {
        this.$nextTick(()=>{
          this.$refs['wuss-slide' + this.name].style.height = '0px';
        })
      }
      if(this.active && this.$parent.accordion) {
        this.$parent.accordions.map((item)=>{
          if(item.name !== this.name) {
            item.active = false
          }
        })
      }
    },
    updateStatus() {
      if(this.$parent.accordion && typeof this.$parent.activeValue === 'string') {
        //手风琴模式，则传数据为String
        if(this.$parent.activeValue === this.name) {
          this.active = true;
        } else {
          this.active = false
        }
      } else if(!this.$parent.accordion && this.$parent.activeValue instanceof Array) {
        //非手风琴模式
        let value = this.$parent.activeValue.find((item) => {
          return item === this.name
        })
        if(value) {
          this.active = true;
        } else {
          this.active = false
        }
      }
      this.dealactive()
    }
  }
}
</script>
<style>
  .wuss-accordion-item{
    font-size: 20px;
    overflow: hidden;
  }
  .wuss-accordion-header {
    position: relative;
    border: 1px solid #b8bbbf;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    background-color: #fff;
  }
  .wuss-accordion-header.wuss-accordion-disabled{
    background-color: #dadee4;
  }
  .wuss-accordion-body {
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #b8bbbf;
    height: 0px;
    transition: height .5s;
  }
</style>


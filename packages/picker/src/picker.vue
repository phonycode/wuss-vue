<template>
  <div class="black-bg" v-show="pickerVisible" @touchstart.self="handleWrapperClick">
    <transition name="slide-fade">
      <div v-show="pickerVisible" class="w-picker">
        <ul class="w-picker-top">
          <li @touchstart="handleClose" class="w-picker-back">返回</li>
          <li>{{title}}</li>
          <li @touchstart="pickerChoose" class="w-picker-sure">确认</li>
        </ul>
        <div class="w-picker-body">
          <div class="w-picker-area">
            <ul v-for="(item,index) in pickList"
             @touchstart="pickTouchStart" 
             @touchend="pickTouchEnd"
             :style="{transform: `translateY(${pickIndexList[index]*24 + 96}px)`}" 
             :key="index" class="w-picker-list">
              <li v-for="(subitem,subindex) in item" :key="subindex">{{subitem[prop.label]}}</li>
            </ul>
          </div>
          <div class="w-picker-pick">
          </div>
          
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'WPicker',
  props: {
    pickerVisible:Boolean,
    beforeClose: Function,
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    title: String,
    pickList: {
      type: Array,
      default: () => []
    },
    prop: {
      type: Object,
      default: () => {
        return  {
          label:'name',
          value:'value',
        }
      }
    },
  },
  computed: {
    //默认选中位置
    pickIndexList: function() {
      return this.pickList.map(()=>0)
    }
  },
  data() {
    return {
      closed: false,
      touchTime:'',
      clientY:'',
    };
  },
  watch: {
    pickerVisible: function(val) {
      if(val) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
      }
    },
  },
  created() {
    
  },
  methods: {
    pickTouchStart(e) {
      this.clientY = e.changedTouches[0].clientY
      this.touchTime = new Date().getTime()
    },
    pickTouchEnd(e) {
      //距离
      let disTime = new Date().getTime() - this.touchTime;
      let distance = e.changedTouches[0].clientY - this.clientY;
      this.dealSlide(disTime,distance)
    },
    //根据滑动距离跟时间算最终滑动距离
    dealSlide(disTime,distance) {
      
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:pickerVisible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    pickerChoose() {
      this.handleClose();
    }
  }
}
</script>
<style>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(250px);
    opacity: 0;
  }
  .w-picker{
    width: 100%;
    height: 240px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
  .w-picker-top{
    height: 24px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .w-picker-body{
    height: 216px;
  }
  .w-picker-top>li{
    padding: 0 5px;
    font-size: 16px;
  }
  .w-picker-back{
    color: #656b79
  }
  .w-picker-sure{
    color: rgb(255, 153, 0);
  }
  .w-picker-pick{
    position: absolute;
    height: 24px;
    width: 100%;
    top: 120px;
    left: 0;
    border: 1px solid rgba(150,155,179,.6);
    box-sizing: border-box;
    border-left-width: 0;
    border-right-width: 0;
  }
  .w-picker-area{
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
  }
  .w-picker-list{
    height: 100%;
    width: 100%;
    position:relative;
    overflow: hidden;
    flex-wrap: nowrap;
  }
  .w-picker-list>li{
    height: 24px;
    text-align: center;
  }
</style>



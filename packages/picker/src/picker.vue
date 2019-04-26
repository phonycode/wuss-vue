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
             @touchstart="pickTouchStart($event,index)" 
             @touchmove="pickTouchMove($event,index)" 
             @touchend="pickTouchEnd($event,index)"
             :style="{transform: `translateY(${96 - pickIndexList[index]*24}px)`}" 
             :key="index" 
             :ref="'w-picker' + index"
             class="w-picker-list">
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
    pickValueList: {
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
  model: {
    prop: 'pickValueList',
  },
  computed: {
    //默认选中位置
    pickIndexList: function() {
      let arr = []
      if(this.pickValueList.length < 1) {
        //没有默认选中值
        return this.pickList.map(()=>0)
      } else {
        this.pickValueList.forEach((valueItem)=>{
          this.pickList.forEach((item,index)=>{
            if (item instanceof Array)
            item.forEach((subitem,subindex)=>{
                if(valueItem === subitem[this.prop.value]){
                  arr[index] = subindex;
                }
            })
          })
        })
      }
      return arr
    }
  },
  data() {
    return {
      closed: false,
      touchTime:'',
      clientY:'',
      fromY:0,
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
    pickTouchStart(e,index) {
      this.clientY = e.changedTouches[0].clientY
      let reg = /[-]?\d*(?=[px])/
      this.fromY = parseInt(reg.exec(this.$refs['w-picker'+index][0].style.transform)[0])
      this.touchTime = new Date().getTime()
    },
    pickTouchMove(e,index) {
      let distance = e.changedTouches[0].clientY - this.clientY;
      this.moveOver(distance,index)
    },
    pickTouchEnd(e,index) {
      //距离
      this.finalMove(index)
    },
    //根据滑动距离跟时间算最终滑动距离
    dealSlide(disTime,distance) {
      return distance * 100 / disTime
    },
    //以24px为单位最后计算滑动距离
    moveOver(distance,index) {
      this.pickIndexList[index] = (96 - this.fromY - Math.floor(distance/24)*24) / 24;
      this.$refs['w-picker'+index][0].style.transform = `translateY(${this.fromY + Math.floor(distance/24)*24}px)`
    },
    //最后获取位置跟校准
    finalMove(index) {
      let reg = /[-]?\d*(?=[px])/
      let finalDis =  parseInt(reg.exec(this.$refs['w-picker'+index][0].style.transform)[0]);
      let indexLength = this.pickList[index].length;
      if(finalDis > 96) {
        //超出上限
        this.$refs['w-picker'+index][0].style.transform = `translateY(${96}px)`
        this.pickIndexList[index] = 0;
      } else if (finalDis < (96 - indexLength*24)) {
        //超出下限
        this.$refs['w-picker'+index][0].style.transform = `translateY(${120 - indexLength*24}px)`
        this.pickIndexList[index] = indexLength-1
      }
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
      let arr = []
      this.pickIndexList.forEach((valueItem,valueIndex)=>{
        console.log(valueItem,valueIndex)
        console.log(this.pickList[valueIndex][valueItem])
          arr.push(this.pickList[valueIndex][valueItem][this.prop.value])
      })
      this.$emit('change',arr)
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
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-around;
  }
  .w-picker-list{
    width: 100%;
    position:relative;
    overflow: hidden;
    flex-wrap: nowrap;
    transition: all 1s;
  }
  .w-picker-list>li{
    height: 24px;
    text-align: center;
  }
</style>



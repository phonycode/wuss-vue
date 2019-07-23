<template>
  <div>
    <div class="w-picker-input" @touchstart="showPicker">
      <span v-if="pickLabel.length < 1">{{placeholder}}</span>
      <span v-else>{{pickLabel.join(joinCon)}}</span>
      <svg class="icon" aria-hidden="true"> <use xlink:href="#wuss-icon-arrow-right"></use></svg>
    </div>
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
                <ul
                  v-for="(item,index) in pickIndexList" :key="index"
                  @touchstart="pickTouchStart($event,index)" 
                  @touchmove="pickTouchMove($event,index)" 
                  @touchend="pickTouchEnd($event,index)"
                  :style="{transform: `translateY(${96 - pickIndexList[index]*24}px)`}" 
                  :ref="'w-picker' + index"
                  class="w-picker-list">
                    <li v-for="(subitem,subindex) in showPickList[index]" :key="subindex">{{subitem[prop.label]}}</li>
                </ul>
                <div v-for="(item,index) in showPickList"
                @touchstart="pickTouchStart($event,index)" 
                @touchmove="pickTouchMove($event,index)" 
                @touchend="pickTouchEnd($event,index)"
                :key="item[prop.value]" 
                :style="{
                  width:(100 / pickIndexList.length) + '%',
                  left:(100 / pickIndexList.length * index) + '%'
                }"
                class="w-picker-list-color">
                  <!-- <li v-for="(subitem,subindex) in showPickList[index]" :key="subindex"></li> -->
                </div>
            </div>
            <div class="w-picker-pick">
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WPicker',
  props: {
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
    joinCon: {
      type: String,
      default: ','
    },
    placeholder: {
      type: String,
      default: ','
    },
    prop: {
      type: Object,
      default: () => {
        return {
          label: 'name',
          value: 'value',
          children: 'children'
        }
      }
    },
  },
  model: {
    prop: 'pickValueList',
  },
  computed: {
    pickLabel: {
      // getter
      get: function () {
        if (this.pickValueList.length > 0 && this.pickerVisible === false) {
          let arr = []
          this.pickValueList.forEach((item, index) => {
            this.dealPickLlist()
            if (this.showPickList.length > 0) {
              this.showPickList[index].forEach((subitem) => {
                if (subitem[this.prop.value] === item) {
                  arr[index] = subitem[this.prop.label]
                }
              })
            }
          })
          return arr
        }
        return []
      },
    },

  },
  data() {
    return {
      closed: false,
      touchTime: '',
      clientY: '',
      fromY: 0,
      pickerVisible: false,
      pickIndexList: [],
      showPickList: [],
    };
  },
  watch: {
    pickerVisible(val) {
      if (val) {
        this.dealPickLlist()
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
      }
    },
  },
  created() {

  },
  methods: {
    //显示picker
    showPicker() {
      this.pickerVisible = true
    },
    getLevel(data, level, isSub) {
      let flag = false
      let hasSub = false
      let zindex = -1
      this.pickIndexList[level - 1] = 0;
      if (data && data.length > 0) {
        data.forEach((item, index) => {
          if (this.pickValueList[level - 1] !== undefined && this.pickValueList[level - 1] === item[this.prop.value]) {
            //获取当前选中等级的下表
            this.pickIndexList[level - 1] = index;
            if (item[this.prop.children] instanceof Array && item[this.prop.children].length > 0) {
              //如果有子集
              hasSub = true
            }
          }
          if (item[this.prop.children] instanceof Array && item[this.prop.children].length > 0) {
            //如果有子集
            flag = true
            zindex = this.pickIndexList[level - 1]
          }
        })
        if (data[this.pickIndexList[level - 1]][this.prop.children] && data[this.pickIndexList[level - 1]][this.prop.children].length > 0 && isSub) {
          //设置下级列表
          this.showPickList[level] = data[this.pickIndexList[level - 1]][this.prop.children]
        }
        if (flag) {
          level++
          this.getLevel(data[zindex][this.prop.children], level, hasSub)
        }
      }

    },
    dealPickLlist() {
      // 第一级列表
      this.showPickList[0] = this.pickList
      this.getLevel(this.pickList, 1, true)
    },
    pickTouchStart(e, index) {
      this.clientY = e.changedTouches[0].clientY
      let reg = /[-]?\d*(?=[px])/
      this.fromY = parseInt(reg.exec(this.$refs['w-picker' + index][0].style.transform)[0])
      this.touchTime = new Date().getTime()
    },
    pickTouchMove(e, index) {
      let distance = e.changedTouches[0].clientY - this.clientY;
      this.moveOver(distance, index)
    },
    pickTouchEnd(e, index) {
      //距离
      this.finalMove(index)
    },
    //根据滑动距离跟时间算最终滑动距离
    dealSlide(disTime, distance) {
      return distance * 100 / disTime
    },
    //以24px为单位最后计算滑动距离
    moveOver(distance, index) {
      this.pickIndexList[index] = (96 - this.fromY - Math.ceil(distance / 24) * 24) / 24;
      this.$refs['w-picker' + index][0].style.transform = `translateY(${this.fromY + Math.ceil(distance / 24) * 24}px)`
    },
    //最后获取位置跟校准
    finalMove(index) {
      let reg = /[-]?\d*(?=[px])/
      let finalDis = parseInt(reg.exec(this.$refs['w-picker' + index][0].style.transform)[0]);
      let indexLength = this.showPickList[index].length;
      console.log(finalDis, indexLength)
      if (finalDis > 96) {
        //超出上限
        this.$refs['w-picker' + index][0].style.transform = `translateY(${96}px)`
        this.pickIndexList[index] = 0;
      } else if (finalDis <= (96 - indexLength * 24)) {
        //超出下限
        this.$refs['w-picker' + index][0].style.transform = `translateY(${120 - indexLength * 24}px)`
        this.pickIndexList[index] = indexLength - 1
      }
      if (this.pickList[this.pickIndexList[0]][this.prop.children]) {
        this.resetShowList(this.pickList[this.pickIndexList[0]][this.prop.children], 1, index)
      } else {
        this.resetShowList([], 1)
      }


    },
    // 根据pickIndexList来重置showList列表
    /**
     * data: 当前选中的子集列表
     * level: 当前列表的下表
     */
    resetShowList(data, level, changeIndex) {
      if (changeIndex < level) {
        this.pickIndexList[level] = 0;
      }
      let showList = JSON.parse(JSON.stringify(this.showPickList))
      showList[level] = data
      this.showPickList = showList
      level++

      if (level < this.pickIndexList.length) {
        if (data[this.pickIndexList[level - 1]] && data[this.pickIndexList[level - 1]][this.prop.children] && data[this.pickIndexList[level - 1]][this.prop.children].length > 0) {
          this.resetShowList(data[this.pickIndexList[level - 1]][this.prop.children], level, changeIndex)
        } else {
          this.resetShowList([], level, changeIndex)
        }

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
        this.pickerVisible = false
      }
    },
    pickerChoose() {
      this.pickIndexList.forEach((valueItem, valueIndex) => {
        if (this.showPickList[valueIndex][valueItem]) {
          this.pickValueList[valueIndex] = this.showPickList[valueIndex][valueItem][this.prop.value]
          this.pickLabel[valueIndex] = this.showPickList[valueIndex][valueItem][this.prop.label]
        } else {
          this.pickValueList[valueIndex] = ''
          this.pickLabel[valueIndex] = ''
        }

      })
      this.$emit('change', this.pickValueList)
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
    background-color: rgba(194, 195, 197, 0.2);
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
    background-color: transparent;
  }
  .w-picker-area{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-around;
    
    /* background: linear-gradient(blue, 10%, pink); */
  }
  .w-picker-list{
    width: 100%;
    overflow: hidden;
    flex-wrap: nowrap;
    transition: all .5s;
  }
  .w-picker-list-color{
    overflow: hidden;
    flex-wrap: nowrap;
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 2;
    background: transparent;
  }
  
  .w-picker-list>li{
    height: 24px;
    text-align: center;
  }
  .w-picker-input{
    text-align: right;
  }
</style>



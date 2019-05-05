<template>
  <div class="wuss-step" :class="['wuss-step-' + internalStatus]">
    <div v-if="index !== 0 && !lineStyle.borderWidth" class="wuss-step-line" ></div>
    <div v-if="lineStyle.borderWidth" class="wuss-step-line wuss-step-line2" :style="{'background-color':'#67c23a'}" ></div>
    <div class="wuss-step-head">
      <div v-if="icon">
        <svg class="icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-' + icon"></use></svg>
      </div>
      <div v-else>
        <svg v-if="internalStatus === 'success'" class="icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-success'"></use></svg>
        <div v-else>
          {{index+1}}
        </div>
      </div>
    </div>
    <div class="wuss-step-title">{{title}}</div>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'WStep',

  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },

  data() {
    return {
      index: -1,
      lineStyle: {},
      internalStatus: ''
    };
  },

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  beforeDestroy() {
    const steps = this.$parent.steps;
    const index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },

  computed: {
    currentStatus() {
      return this.status || this.internalStatus;
    },
    prevStatus() {
      const prevStep = this.$parent.steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : 'wait';
    },
    isCenter() {
      return this.$parent.alignCenter;
    },
    isVertical() {
      return this.$parent.direction === 'vertical';
    },
    isSimple() {
      return this.$parent.simple;
    },
    isLast() {
      const parent = this.$parent;
      return parent.steps[parent.steps.length - 1] === this;
    },
    stepsCount() {
      return this.$parent.steps.length;
    },
    space() {
      const { isSimple, $parent: { space } } = this;
      return isSimple ? '' : space ;
    },
    style: function() {
      const style = {};
      const parent = this.$parent;
      const len = parent.steps.length;

      const space = (typeof this.space === 'number'
        ? this.space + 'px'
        : this.space
          ? this.space
          : 100 / (len - (this.isCenter ? 0 : 1)) + '%');
      style.flexBasis = space;
      if (this.isVertical) return style;
      if (this.isLast) {
        style.maxWidth = 100 / this.stepsCount + '%';
      } else {
        style.marginRight = -this.$parent.stepOffset + 'px';
      }

      return style;
    }
  },

  methods: {
    updateStatus(val) {
      const prevChild = this.$parent.$children[this.index - 1];
      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus;
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus;
      } else {
        this.internalStatus = 'wait';
      }

      if (prevChild) prevChild.calcProgress(this.internalStatus);
    },

    calcProgress(status) {
      let step = 100;
      const style = {};

      style.transitionDelay = 150 * this.index + 'ms';
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== 'error' ? 0 : 0;
      } else if (status === 'wait') {
        step = 0;
        style.transitionDelay = (-150 * this.index) + 'ms';
      }

      style.borderWidth = step ? '1px' : 0;
      this.$parent.direction === 'vertical'
        ? style.height = step + '%'
        : style.width = step + '%';

      this.lineStyle = style;
    }
  },

  mounted() {
    const unwatch = this.$watch('index', () => {
      this.$watch('$parent.active', this.updateStatus, { immediate: true });
      unwatch();
    });
  }
};
</script>
<style>
  .wuss-step{
    flex: 1;
    text-align: center;
    color: #c0c4cc;
    position: relative;
  }
  .wuss-step-process {
    color: #000;
  }
  .wuss-step-success {
    color: rgb(6,191,4);
  }
  .wuss-step-head {
    border: 1px solid;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    z-index: 2;
    background-color: #fff;
    
  }
  .wuss-step-head .icon {
    width: 22px;
    height: 22px;
    text-align: center;
    margin-top: 1px;
  }
  .wuss-step .wuss-step-line{
    width: 100%;
    position: absolute;
    height: 1px;
    background-color: #000;
    z-index: 1;
    left: -50%;
    top: 12px;
  }
  .wuss-step-line.wuss-step-line2{
    left: 50%;
    z-index: 2;
  }
</style>


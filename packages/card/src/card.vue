<template>
  <div class='wuss-card' :class="{
    'wuss-card-full':full,
    'wuss-card-all-loading':loading,
    }">
    <header class="wuss-card-header">
      <div class="wuss-card-title">
        {{title}}
      </div>
      <div class="wuss-card-stitle">
        {{subtitle}}
      </div>
    </header>
    <div class="wuss-card-body">
      <slot></slot>
    </div>
    <div class="wuss-card-bottom">
      <div class="wuss-card-footer">
        {{footer}}
      </div>
      <div class="wuss-card-subFooter">
        {{subFooter}}
      </div>
    </div>
    <div v-if="loading" class="wuss-card-loading">
      <div :style="{width:item*10+'%'}" v-for="item in loadList" :key="item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WCard',
  props: {
    full: {
      type: Boolean,
      default: false,
    },
    subtitle: String,
    title: String,
    footer: String,
    subFooter: String,
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return{
      loadList:[1,2,3,2,4,2,1,3,4,1,2,3,4,2,3,4,3,2,2,1]
    }
  }
}
</script>
<style>
  .wuss-card{
    margin: 10px;
    border: 1px solid #d8dbe0;
    box-shadow: 2px 2px 5px #d8dbe0;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .wuss-card.wuss-card-all-loading {
    height: 200px;
  }
  .wuss-card-full{
    margin: 0;
    border-width: 1px 0;
  }
  .wuss-card-header{
    border-bottom: 1px solid #d8dbe0;
  }
  .wuss-card-header,.wuss-card-bottom{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .wuss-card-body{
    padding: 10px;
  }
  .wuss-card-loading{
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #fff;
  }
  .wuss-card-loading div{
    height: 20px;
    background-color: #babdc4;
    margin-right: 10px;
    animation: loadanima 1s infinite alternate linear;
  }
  @keyframes loadanima {
    from {background-color: #babdc4;}
    to {background-color: #d8dbe0;}
  }
</style>



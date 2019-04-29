<template>
  <div class="icon-list">
    <h3>Icon</h3>
    <h4>图标</h4>
    <h5>default</h5>
    <ul>
      <li>
        <div v-for="item in iconList" :key="item" class="icon-item">
          <w-icon :type="item"></w-icon>
          <br>
          <span>{{item}}</span>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'icon',
  data() {
    return {
      iconList : [
        'checked',
        'close',
        'location',
        'location-o',
        'success',
        'success-o',
        'arrow-down',
        'camera',
        'camera-o',
        'comment',
        'comment-o',
        'voice',
        'voice-o',
        'order',
        'question',
        'question-o',
        'filter',
        'top',
        'add',
        'arrow-top',
        'info',
        'info2-o',
        'forward',
        'forward-o',
        'record',
        'record-o',
        'wifi',
        'share',
        'wechat-zone',
        'wechat',
        'female',
        'male',
        'system-o',
        'cart',
        'delete',
        'edit',
        'form',
        'pic',
        'refresh',
        'search',
        'repeal',
        'calendar',
        'user',
        'user-o',
        'scanning',
        'pin',
        'weibo',
        'bell',
        'twitter',
        'bar-chart',
        'signal',
        'good2-o',
        'android',
        'apple',
        'phone-o',
        'like-o',
        'star-o',
        'menu',
        'star',
        'home',
        'home-o',
        'like',
        'chart',
        'facebook',
        'attention-forbid-o',
        'attention-forbid',
        'bluetooth1',
        'bluetooth2',
        'bell-o',
        'address-card',
        'google',
        'bar-code',
        'popular',
        'more-dot',
        'down',
        'address-card-o',
        'battery',
        'good2',
        'mobile',
        'add-user',
        'delete-team',
        'api',
        'disconnect',
        'shrink',
        'fullscreen',
        'doubleleft',
        'double-arrow-right',
        'stop',
        'github',
        'decrement',
        'added',
        'arrow-left',
        'arrow-right',
        'arrow-left-l',
        'arrow-right-l',
        'zoomout',
        'zoomin',
        'position',
        'checkbox',
      ]
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style>
  .icon-list .icon{
    width: 2em;
    height: 2em;
  }
  .icon-list li{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  .icon-item{
    width: 33%;
    text-align: center;
    margin: 10px 0;
  }
</style>

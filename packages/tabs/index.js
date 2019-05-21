import WTabs from './src/tabs.vue';

/* istanbul ignore next */
WTabs.install = function (Vue) {
  Vue.component(WTabs.name, WTabs);
};

export default WTabs;

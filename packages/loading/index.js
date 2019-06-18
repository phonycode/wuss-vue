import WLoading from './src/index';

/* istanbul ignore next */
WLoading.install = function(Vue) {
    Vue.component(WLoading.name, WLoading);
};

export default WLoading;
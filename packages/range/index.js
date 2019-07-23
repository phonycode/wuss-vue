import WRange from './src/index';

/* istanbul ignore next */
WRange.install = function(Vue) {
    Vue.component(WRange.name, WRange);
};

export default WRange;
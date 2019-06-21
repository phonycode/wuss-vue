import WCountdown from './src/index';

/* istanbul ignore next */
WCountdown.install = function(Vue) {
    Vue.component(WCountdown.name, WCountdown);
};

export default WCountdown;
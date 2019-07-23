import WSwitch from './src/index';

/* istanbul ignore next */
WSwitch.install = function(Vue) {
    Vue.component(WSwitch.name, WSwitch);
};

export default WSwitch;
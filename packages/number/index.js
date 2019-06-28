import WNumber from './src/index';

/* istanbul ignore next */
WNumber.install = function(Vue) {
    Vue.component(WNumber.name, WNumber);
};

export default WNumber;
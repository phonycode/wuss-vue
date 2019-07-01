import WInput from './src/index';

/* istanbul ignore next */
WInput.install = function(Vue) {
    Vue.component(WInput.name, WInput);
};

export default WInput;
import WMaskShadow from './src/index';

/* istanbul ignore next */
WMaskShadow.install = function(Vue) {
    Vue.component(WMaskShadow.name, WMaskShadow);
};

export default WMaskShadow;
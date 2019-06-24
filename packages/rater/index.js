import WRater from './src/index';

/* istanbul ignore next */
WRater.install = function(Vue) {
    Vue.component(WRater.name, WRater);
};

export default WRater;
import WSwiperOut from './src/index';

/* istanbul ignore next */
WSwiperOut.install = function(Vue) {
    Vue.component(WSwiperOut.name, WSwiperOut);
};

export default WSwiperOut;
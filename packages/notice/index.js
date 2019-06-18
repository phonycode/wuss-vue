import WNotice from './src/index';

/* istanbul ignore next */
WNotice.install = function(Vue) {
    Vue.component(WNotice.name, WNotice);
};

export default WNotice;
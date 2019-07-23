import WBadge from './src/index';

/* istanbul ignore next */
WBadge.install = function(Vue) {
    Vue.component(WBadge.name, WBadge);
};

export default WBadge;
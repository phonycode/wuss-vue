import WAvatar from './src/index';

/* istanbul ignore next */
WAvatar.install = function(Vue) {
    Vue.component(WAvatar.name, WAvatar);
};

export default WAvatar;
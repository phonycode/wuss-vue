import WTag from './src/tag';

/* istanbul ignore next */
WTag.install = function (Vue) {
  Vue.component(WTag.name, WTag);
};

export default WTag;

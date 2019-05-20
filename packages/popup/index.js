import WPopup from './src/popup';

/* istanbul ignore next */
WPopup.install = function (Vue) {
  Vue.component(WPopup.name, WPopup);
};

export default WPopup;

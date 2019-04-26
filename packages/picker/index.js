import WPicker from './src/picker';

/* istanbul ignore next */
WPicker.install = function (Vue) {
  Vue.component(WPicker.name, WPicker);
};

export default WPicker;

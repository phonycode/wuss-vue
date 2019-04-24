import WUSSButton from './src/button';

/* istanbul ignore next */
WUSSButton.install = function (Vue) {
  Vue.component(WUSSButton.name, WUSSButton);
};

export default WUSSButton;

import WSteps from './src/steps';

/* istanbul ignore next */
WSteps.install = function (Vue) {
  Vue.component(WSteps.name, WSteps);
};

export default WSteps;

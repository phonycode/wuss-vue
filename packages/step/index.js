import WStep from '../steps/src/step';

/* istanbul ignore next */
WStep.install = function (Vue) {
  Vue.component(WStep.name, WStep);
};

export default WStep;

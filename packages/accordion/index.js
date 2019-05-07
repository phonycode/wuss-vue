import WAccordion from './src/accordion';

/* istanbul ignore next */
WAccordion.install = function (Vue) {
  Vue.component(WAccordion.name, WAccordion);
};

export default WAccordion;

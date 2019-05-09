import WCard from './src/card';

/* istanbul ignore next */
WCard.install = function (Vue) {
  Vue.component(WCard.name, WCard);
};

export default WCard;

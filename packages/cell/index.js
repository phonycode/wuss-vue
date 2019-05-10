import WCell from '../cellGroup/src/cell';

/* istanbul ignore next */
WCell.install = function (Vue) {
  Vue.component(WCell.name, WCell);
};

export default WCell;

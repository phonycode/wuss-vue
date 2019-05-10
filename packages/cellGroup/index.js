import WCellGroup from './src/cellGroup';

/* istanbul ignore next */
WCellGroup.install = function (Vue) {
  Vue.component(WCellGroup.name, WCellGroup);
};

export default WCellGroup;

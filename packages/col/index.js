import WCol from '../row/src/col';

/* istanbul ignore next */
WCol.install = function (Vue) {
  Vue.component(WCol.name, WCol);
};

export default WCol;

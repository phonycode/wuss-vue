import WTabPane from '../tabs/src/tabPane';

/* istanbul ignore next */
WTabPane.install = function (Vue) {
  Vue.component(WTabPane.name, WTabPane);
};

export default WTabPane;

import WForm from './src/index';

/* istanbul ignore next */
WForm.install = function(Vue) {
    Vue.component(WForm.name, WForm);
};

export default WForm;
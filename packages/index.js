import './assets/iconfont.js'
import './assets/common.css';
import Button from './button/index.js';
import Picker from './picker/index.js';

const components = [
  Button,
  Picker,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Picker,
};

import './assets/iconfont.js'
import './assets/common.css';
import Button from './button/index.js';
import Picker from './picker/index.js';
import Icon from './icon/index.js';
import Steps from './steps/index.js';
import Step from './step//index.js';
import Tag from './tag//index.js';
import Accordion from './accordion/index.js';
import AccordionItem from './accordionItem/index.js';
import Row from './row/index.js';
import Col from './col/index.js';
import Card from './card/index.js';
import Cell from './cell/index.js';
import CellGroup from './cellGroup/index.js';
import Popup from './popup/index.js';
import Tabs from './tabs/index.js';
import TabPane from './tabPane/index.js';
import Toast from './toast/index.js';
import Alert from './alert/index.js';
import Radio from './radio/index.js';



const components = [
    Button,
    Picker,
    Icon,
    Steps,
    Step,
    Tag,
    Accordion,
    AccordionItem,
    Row,
    Col,
    Card,
    Cell,
    CellGroup,
    Popup,
    Tabs,
    TabPane,
    Toast,
    Alert,
    Radio
];

const install = function(Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));

    Vue.prototype.$toast = Toast;
    Vue.prototype.$alert = Alert;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Button,
    Picker,
    Icon,
    Steps,
    Step,
    Tag,
    Accordion,
    AccordionItem,
    Row,
    Col,
    Card,
    Cell,
    CellGroup,
    Popup,
    Tabs,
    TabPane,
    Toast,
    Alert,
    Radio
};
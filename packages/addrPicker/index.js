/*
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-08-14 09:39:29
 * @LastEditors: null
 * @LastEditTime: 2019-08-14 09:45:13
 * @Description: 
 * @form: (0 U 0)
 */
import WAddrPicker from './src/index';

/* istanbul ignore next */
WAddrPicker.install = function (Vue) {
  Vue.component(WAddrPicker.name, WAddrPicker);
};

export default WAddrPicker;

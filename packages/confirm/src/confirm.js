import Vue from 'vue';
import Confirm from './confirm.vue';
let MessageConstructor = Vue.extend(Confirm);

const Message = function (message, title, option) {
  let options = {}
  if (typeof options === 'object') {
    options = {
      message,
      title,
      ...option
    };
  }
  var component = new MessageConstructor({
    data: options
  }).$mount()
  component.visible = true;
  //挂载dom
  document.body.appendChild(component.$el)
  return component
};


export default Message;
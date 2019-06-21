import Vue from 'vue';
import Dialog from './dialog.vue';

let MessageConstructor = Vue.extend(Dialog);
const Message = function(options) {

    if (typeof options === 'string') {
        options = {
            message: options
        };
    } else if (typeof options === 'object') {
        options = {
            ...options
        }
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
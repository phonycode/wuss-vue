import Vue from 'vue';
import Loading from './loading.vue';

let MessageConstructor = Vue.extend(Loading);
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
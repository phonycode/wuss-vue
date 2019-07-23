import Vue from 'vue';
import Toast from './toast.vue';
let MessageConstructor = Vue.extend(Toast);

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

['top', 'middle', 'bottom'].forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Message(options);
    };
});

export default Message;
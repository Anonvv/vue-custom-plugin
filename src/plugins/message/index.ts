import { createApp, reactive, toRefs } from 'vue'
import Message from './Message.vue'

// config options
const config = reactive({
    type: 'success',
    msg: '',
})

/**
 * render
 * @param type message type
 * @param msg message content
 * @param delay duration
 */
const renderMsg = (type: string = config.type, msg: string, delay: number): void => {
    config.type = type
    config.msg = msg
    
    // create a component instance
    const $message = createApp(Message, { ...toRefs(config) }).mount(document.createElement('div'))
    // show
    document.body.appendChild($message.$el)

    setTimeout(() => {
        // hidden
        document.body.removeChild($message.$el)
    }, delay)
}

const message = {
    success(msg: string, delay: number = 1000) {
        renderMsg('success', msg, delay)
    },
    install(app: any) {
        // add global prop
        app.config.globalProperties['message'] = message;
    }
}

export default message
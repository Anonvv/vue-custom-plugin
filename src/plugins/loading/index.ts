import { createApp, reactive, toRefs } from 'vue'
import Loading from './Loading.vue'


const config = reactive({
    msg: 'Loading...'
})

let loadingEl

const loading = {
    show(msg: string = config.msg) {
        config.msg = msg
        const $loading = createApp(Loading, { ...toRefs(config) }).mount(document.createElement('div'))
        loadingEl = $loading.$el
        document.body.appendChild(loadingEl)
    },
    hide() {
        document.body.removeChild(loadingEl)
    },
    install(app: any) { // add global prop
        app.config.globalProperties['loading'] = loading;
    }
}

export default loading
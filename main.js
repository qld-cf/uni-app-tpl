import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import boboMessage from '@/components/bobo-message/bobo-message.vue'

// 使用自定义消息提示
Vue.component('message', boboMessage)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

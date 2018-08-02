// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import 'normalize.css'
import './assets/css/reset.less'
import './assets/css/common.less'
// import 'lib-flexible/flexible.js'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = true
import install from '@/components/common/index'
install(Vue)

import store from './store/index'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})

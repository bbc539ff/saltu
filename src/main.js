import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/css/global.css'
import axios from 'axios'
import '@/assets/icon/font_1626281_0yweksjanpi/iconfont.css'
import VueCookies from 'vue-cookies'

const eventBus = new Vue()
Vue.prototype.eventBus = eventBus

// axios.defaults.headers.common['token'] = ''
Vue.prototype.$addr = {
  user: 'http://127.0.0.1:9101',
  post: 'http://127.0.0.1:9102'
}

Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.$cookies.config('7d')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

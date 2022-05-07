import Vue from 'vue'
import { Button, Container, Header, Aside, Main, Footer } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

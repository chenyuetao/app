import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/reset.css'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

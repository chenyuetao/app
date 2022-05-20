import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        home: 'Home',
        component: () => import('@/views/Home')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
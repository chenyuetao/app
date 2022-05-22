import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('@/views/main'),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/home'),
            },
            {
                path: 'mall',
                name: 'Mall',
                component: () => import('@/views/mall'),
            },
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/user'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        let token = localStorage.getItem('token')
        if (!token) {
            //全局提示

            next('/login')
        } else {
            next()
        }
    }
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
export default router
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        isCollapse: false
    },
    getters: {},
    mutations: {
        addToken(state, payload) {
            this.state.token = payload
            localStorage.setItem('token', payload)
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {}
})

export default store
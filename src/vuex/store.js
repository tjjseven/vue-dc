import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import login from './modules/login'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        pubState: false,
        headerL: true
    },
    mutations: {
        [types.LOADING] (state, loading) {
            state.pubState = loading
        }
    },
    modules: {
        login,
    }
})
export default store

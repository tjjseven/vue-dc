import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import login from './modules/login'
import location from './modules/location'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        pubState: false,
        headerL: true,
        // localAddress: ''
    },
    mutations: {
        [types.LOADING] (state, loading) {
            state.pubState = loading
        },
        [types.HEADERL] (state, headerL) {
            state.headerL = headerL
        }
    },
    getters: {
        getL(state){
            return location.getLocation(state)
        }
    },
    modules: {
        login
    }
})
export default store

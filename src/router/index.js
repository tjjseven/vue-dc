import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import location from '@/components/address/location'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import User from '@/components/user/user'
import Order from '@/components/user/Order'
import List from '@/components/user/List'
import Opinion from '@/components/user/Opinion'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/location',
            name: 'location',
            component: location
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/user/order',
            name: 'order',
            component: Order
        },
        {
            path: '/user/list',
            name: 'list',
            component: List
        },
        {
            path: '/user/opinion',
            name: 'opinion',
            component: Opinion
        }
    ]
})

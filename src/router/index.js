import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import location from '@/components/address/Location'

import Login from '@/components/user/Login'
import Register from '@/components/user/Register'

import User from '@/components/user/User'
import OrderList from '@/components/order/List'
import AddressList from '@/components/address/List'
import Opinion from '@/components/user/Opinion'

import Details from '@/components/order/Details'
import Confirm from '@/components/order/Confirm'
import Add from '@/components/address/Add'
import Map from '@/components/address/Map'


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
            component: location,
            meta: {
                keepAlive: true, // 需要被缓存
                // auth: false // 不需要登录
            }
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
            name: 'orderlist',
            component: OrderList
        },
        {
            path: '/user/address',
            name: 'addrlist',
            component: AddressList
        },
        {
            path: '/user/opinion',
            name: 'opinion',
            component: Opinion
        },
        {
            path: '/order/details',
            name: 'detail',
            component: Details
        },
        {
            path: '/order/confirm',
            name: 'confirm',
            component: Confirm
        },
        {
            path: '/address/add',
            name: 'add',
            component: Add
        },
        {
            path: '/address/map',
            name: 'maps',
            component: Map
        }
    ]
})

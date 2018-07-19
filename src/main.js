// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'

import 'vue-ydui/dist/ydui.flexible.js'
import 'vue-ydui/dist/ydui.base.css';
// import 'vue-ydui/dist/ydui.rem.css';
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
import {Icons} from 'vue-ydui/dist/lib.rem/icons';
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
import {Search} from 'vue-ydui/dist/lib.rem/search';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
import {Input} from 'vue-ydui/dist/lib.rem/input';
import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.rem/preview';
import {Step, StepItem} from 'vue-ydui/dist/lib.rem/step';
import {TextArea} from 'vue-ydui/dist/lib.rem/textarea';
import {Radio, RadioGroup} from 'vue-ydui/dist/lib.rem/radio';


Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);
Vue.component(Icons.name, Icons);
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);
Vue.component(TabBar.name, TabBar);
Vue.component(TabBarItem.name, TabBarItem);
Vue.component(Search.name, Search);
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
Vue.component(Input.name, Input);
Vue.component(SendCode.name, SendCode);
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(Preview.name, Preview);
Vue.component(PreviewHeader.name, PreviewHeader);
Vue.component(PreviewItem.name, PreviewItem);
Vue.component(Step.name, Step);
Vue.component(StepItem.name, StepItem);
Vue.component(TextArea.name, TextArea);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);

import axios from 'axios'
Vue.prototype.$ajax = axios
// axios.defaults.baseURL = ''
axios.defaults.timeout = 5000

Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
};


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

// 路由切换
router.beforeEach((to, from, next) => {
    // var auth = to.meta.auth // 标记是否需要登录
    // var isLogin = Boolean(store.state.login.user.token) // true用户已登录， false用户未登录
    // if (auth && !isLogin && to.path !== '/login') {
    //     return next({
    //         path: '/login',
    //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //     })
    // }

    if(to.path === '/'){
        store.state.headerL = true
        console.log(store.state.headerL)
    }else{
        store.state.headerL = false
    }
    next()
})

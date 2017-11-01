import Vue from 'vue'
import Router from 'vue-router'
import PopUpBox from '@/components/example/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'PopUpBox',
        component: PopUpBox
    }]
})
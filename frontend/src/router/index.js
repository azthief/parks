import Vue from 'vue'
import BootstapVue from 'bootstrap-vue'
import Router from 'vue-router'

import Index from '@/components/IndexPage'
import Show from '@/components/ShowPage'
import Park from '@/components/ParkPage'

Vue.use(BootstapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

console.log('Router');
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/parks',
      name: 'park',
      component: Park
    }    
  ]
})

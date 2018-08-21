import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Other from '@/components/Other'
import Pos from '@/components/Pos'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Hello,
      children: [
        {
          path: 'dashboard',
          component: Dashboard ,
        },
        {
          path: 'other',
          component: Other,
        },
        {
          path: 'pos',
          component: Pos,
        },
      ],
    }
  ]
})

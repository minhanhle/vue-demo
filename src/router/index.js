import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      name: 'content',
      component: () => import('@/components/PageContent.vue'),
      children: [
        {
          path: '/tours',
          name: 'tours',
          component: () => import('@/components/Home.vue')
        }, {
          path: 'tours/:id',
          name: 'detail',
          component: () => import('@/components/Detail.vue')
        }
      ]
    }
  ]
})

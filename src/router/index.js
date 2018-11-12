import Vue from 'vue'
import Router from 'vue-router'
import MemberList from '@/components/MemberList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: `/`,
  routes: [
    {
      path: '/member/list',
      component: MemberList
    }, {
      path: '*',
      redirect: '/member/list'
    }
  ]
})

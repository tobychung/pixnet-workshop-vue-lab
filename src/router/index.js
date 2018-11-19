import Vue from 'vue'
import Router from 'vue-router'
import MemberList from '@/components/MemberList'
import MemberProfile from '@/components/MemberProfile'
import MemberEdit from '@/components/MemberEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: `/`,
  routes: [
    {
      path: '/member/edit',
      component: MemberEdit
    }, {
      path: '/member/list',
      component: MemberList
    }, {
      path: '/member/me',
      component: MemberProfile
    }, {
      path: '/member/:userId',
      component: MemberProfile
    }, {
      path: '*',
      redirect: '/member/list'
    }
  ]
})

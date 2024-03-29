import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList')

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/manage',
    component: manage,
    name: '',
    children: [
      {
        path: '',
        component: home,
        mate: []

      },
      {
        path: '/userList',
        component: userList,
        mate: ['数据管理', '用户列表']
      }
    ]
  },

]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})

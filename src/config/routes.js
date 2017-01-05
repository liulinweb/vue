/**
 * Created by Administrator on 2017年1月5日 15:18:22.
 */

import App from '../app'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/error', //登录
        meta: { auth: false },
        component: resolve => require(['../pages/404'], resolve)
      },
      {
        path: '/signout', //退出
        component: resolve => require(['../pages/signout'], resolve)
      },
      {
        path: '/home', //个人主页
        component: resolve => require(['../pages/home'], resolve)
      },
      {
        path: '/', //首页
        meta: { auth: false },
        component: resolve => require(['../pages/index'], resolve)
      },
      {
        path: '*', //其他页面，强制跳转到登录页面
        redirect: '/error'
      }
    ]
  }
]

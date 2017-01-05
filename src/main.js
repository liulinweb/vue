// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { Lazyload } from 'mint-ui';

import routes from './config/routes'

//开启debug模式
Vue.config.debug = true;

//注册
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Lazyload);


// Object.keys(components).forEach((key) => {
//   var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
//   Vue.component(`v${name}`, components[key])
// });


const router = new VueRouter({
  routes
});
// router.beforeEach(({meta, path}, from, next) => {
//   var { auth = true } = meta;
//   var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录
//
//   if (auth && !isLogin && path !== '/login') {
//     return next({ path: '/login' })
//   }
//   next()
// });

new Vue({ router }).$mount('#app');

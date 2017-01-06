// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
//
// import VueRouter from "vue-router";
// import VueResource from "vue-resource";

//
// import routes from './config/routes'
//
// //开启debug模式
// Vue.config.debug = true;
//
// //注册
// Vue.use(VueRouter);
// Vue.use(VueResource);
// Vue.use(Lazyload);
//
//
// // Object.keys(components).forEach((key) => {
// //   var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
// //   Vue.component(`v${name}`, components[key])
// // });
//
//
// const router = new VueRouter({
//   routes
// });
// // router.beforeEach(({meta, path}, from, next) => {
// //   var { auth = true } = meta;
// //   var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录
// //
// //   if (auth && !isLogin && path !== '/login') {
// //     return next({ path: '/login' })
// //   }
// //   next()
// // });
//
// new Vue({ router }).$mount('#app');



import Vue from 'vue'
import { Lazyload } from 'mint-ui';
import router from './router/router'
// import store from './store/store'

//开启debug模式
Vue.config.debug = true
window.log = console.log

Vue.use(Lazyload);

let data = {
  el:'#app',
  router,
  // store
}

// Vue.prototype.post = function (url,params,fn) {
//   var xhr = new XMLHttpRequest()
//   xhr.open("POST", url, true)
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function () {
//     var XMLHttpReq = xhr;
//     if (XMLHttpReq.readyState == 4) {
//       if (XMLHttpReq.status == 200) {
//         var text = XMLHttpReq.responseText
//         var res = JSON.parse(text)
//         fn(res)
//       }
//     }
//   }
//   xhr.send(params)
// }

//创建一个app实例，并且挂载到选择符#app匹配的元素上
new Vue(data).$mount('#app')



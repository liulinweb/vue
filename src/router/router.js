import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './../app'
import Index from './../pages/index'
// import Home from './../pages/home'
// import Article from './../pages/article'
// import HomeUserInfo from './../pages/homeUserInfo'
// import AddMsg from './../pages/addMsg'
// import SearchResult from './../pages/reasonList'
import Login from './../pages/login'
import Register from './../pages/register'
// import Modifi from './../pages/modifiPsw'
// import Admin from './../pages/admin'
// import NoFourd from './../pages/NoFourd'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
    // redirect: '/index'
    children: [
      {path: '/', name: 'index', component: Index},
      {path: '/index/:type', name: 'index', component: Index},
      // {path: '/home', name: 'home', component: Home},
      // {path: '/HomeUserInfo/:uid', name: 'homeUserInfo', component: HomeUserInfo},
      // {path: '/article/:id', name: 'article', component: Article},
      // {path: '/addmsg', name: 'addMsg', component: AddMsg},
      // {path: '/search/:types', name: 'searchresult', component: SearchResult},
      {path: '/login', name: 'login', component: Login},
      {path: '/register', name: 'register', component: Register},
      // {path: '/modif', name: 'Modifi', component: Modifi},
      // {path: '/admin', name: 'Admin', component: Admin},
    ]
  }
];
const router = new VueRouter({
  routes: routes, // short for routes: routes
  linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
  history: true
})
// router.beforeEach(function (to,from,next) {
//   var userMsg = localStorage.getItem('userMsg')
//   if(to.path === '/home'){
//     if(!userMsg){
//       next({ path: '/login' })
//     }
//   }
//   next()
// })
export default router

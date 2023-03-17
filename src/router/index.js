import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
// import store from '@/store'
import store from '@/store'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomePage,
    
  },
   {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
   },
   {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue')
   },
   {
    path: '/start',
    name: 'start',
    component: () => import('../views/StartingPage.vue')
   },
   {
    path: '/startloan',
    name: 'startloan',
    component: () => import('../views/StartLoan.vue')
   },
  {
    path: '/loan',
    name: 'loan',
    component: () => import("../views/loan/LoanPage.vue")
   }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(store.getters.isAuthenticated)
  if(!store.getters.isAuthenticated&&to.name !== 'login'&&to.name !== 'register'&&to.name !== 'home'){
    next({name:'login'});//TODO CHANGE IT
  }
  else if(store.getters.isAuthenticated&&(to.name === 'login'||to.name === 'register')){
    next('/');
  }
  else{
    next();
  }
})
// router.beforeEach((to,from) => {
//   console.log(from);
//   const isLogged = store.getters['isLogged'];
//   if(!isLogged){
//     return true;
//   }
//   else{
//     return false;

//   }
  // if(!isLogged){
  //   console.log('not logged in');
  //   return '/login';
  // } 
  // // ...
  // // explicitly return false to cancel the navigation
  // return true
//})
export default router

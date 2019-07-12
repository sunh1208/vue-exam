import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home'
import Logo from "../views/Logo"
import Grade from '../views/Grade'
import Room from '../views/Room'
Vue.use(Router)

let Route = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      meta: { requiresAuth: true },
      component: Home,
      children: [
        {
          path: "grade",
          name: 'Grade',
          component: Grade
        },
        {
          path: "room",
          name: 'Room',
          component: Room
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Logo
    }
  ]
})
Route.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('user'), 123)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('user')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }

})
export default Route
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Beranda from '@/components/Beranda'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import UserProfile from '@/components/UserProfile'
import NewArticle from '@/components/NewArticle'
import AdminDasboard from '@/components/admin/AdminDasboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Beranda
    },
    {
      path: '/signup',
      component: SignUp,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next(false)
        } else {
          next()
        }
      }
    },
    {
      path: '/user/:id',
      component: UserProfile,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token') && window.localStorage.getItem('username')) {
          next()
        } else {
          next(false)
        }
      }
    },
    {
      path: '/user/:id/new-article',
      component: NewArticle,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token') && window.localStorage.getItem('username')) {
          next(username)
        } else {
          next(false)
        }
      }
    },
    {
      path: '/admin',
      component: AdminDasboard
    }
  ]
})

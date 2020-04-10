import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blockslesson/:id',
    name: 'BlocksLesson',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlocksLesson.vue')
  },
  {
    path: '/lessonvideo/:id',
    name: 'lessonvideo',
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoLesson.vue')
  },
  {
    path: '/lessontest/:id',
    name: 'lessontest',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestLesson.vue')
  },
  {

    path: '/lessonexam/:id',
    name: 'lessonexam',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExamLesson.vue')

  },
  {
    path: '/registrator',
    name: 'registrator',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registrator.vue')
  },
  {

    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta:{
      guest:false
    }
  },
    {

      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue'),
      meta:{
        guest:false
      }
  }

]

const router = new VueRouter({
  routes
})

export default router
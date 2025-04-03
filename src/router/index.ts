import { createRouter, createWebHistory } from 'vue-router'
import Competences from '../views/Competences.vue'
import Lecture from '../views/Lecture.vue'
import Computed from '../views/Computed.vue'
import WatchEffect from '../views/WatchEffect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Competences,
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: Lecture,
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
    {
      path: '/watchEffect',
      name: 'watchEfect',
      component: WatchEffect,
    },
  ],
})

export default router

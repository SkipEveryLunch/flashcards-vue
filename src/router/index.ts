import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StudySection from '../views/StudySection.vue'
import EditSection from '../views/EditSection.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'StudySection',
    component: StudySection
  },
  {
    path: '/edit',
    name: 'EditSection',
    component: EditSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

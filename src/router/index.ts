import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StudySection from '../views/StudySection.vue'
import SectionsIndex from '../views/SectionsIndex.vue'
import SectionDetail from '../views/SectionDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SectionsIndex',
    component: SectionsIndex
  },
  {
    path: '/section/:sectionId',
    name: 'StudySection',
    component: StudySection
  },
  {
    path: '/section/:sectionId/detail',
    name: 'SectionDetail',
    component: SectionDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

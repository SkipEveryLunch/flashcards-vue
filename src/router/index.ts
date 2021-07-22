import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StudySection from '../views/StudySection.vue'
import SectionsIndex from '../views/SectionsIndex.vue'
import SectionDetail from '../views/SectionDetail.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

import ProfileShow from '../views/Profile/ProfileShow.vue'
import ProfileEdit from '../views/Profile/ProfileEdit.vue'
import Wrapper from '@/components/Wrapper.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:"",
    component:Wrapper,
    children:[
      { path:"",component:SectionsIndex},
      { path:"/section/:sectionId",component:StudySection},
      {
        path: '/section/:sectionId/detail',component: SectionDetail
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/profile_show',
        component: ProfileShow
      },
      {
        path: '/profile_edit',
        component: ProfileEdit
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

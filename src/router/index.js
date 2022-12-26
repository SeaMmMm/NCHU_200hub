import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import VideoHome from '@/views/VideoHome.vue'
import HoverCard from '@/views/OtherPages/HoverCard/HoverCard.vue'
import SignIn from '@/views/SignIn.vue'
import Recover from '@/views/Recover.vue'
import Request from '@/views/Request.vue'
import ReactCourses from '@/views/Courses/ReactCourses.vue'
import Advanced_react from '@/views/CoursesHome/Advanced_react.vue'
import VueDesigner from '@/views/CoursesHome/VueDesigner.vue'
import VueDesignerCourses from '@/views/Courses/VueDesignerCourses.vue'
import ReactHooks from '@/views/CoursesHome/ReactHooks.vue'
import ReactHooksCourses from '@/views/Courses/ReactHooksCourses.vue'
import WelcomePage from '@/views/WelcomePage.vue'
import Team from '@/views/TeamPage.vue'
import NewsHome from '@/views/News/NewsHome.vue'
import Certificate from '@/views/PayUs/Certificate.vue'
import Figma_system from '@/views/CoursesHome/Figma_system.vue'
import FigmaSystem from '@/views/Courses/FigmaSystem.vue'
import ReactNative from '@/views/CoursesHome/ReactNative.vue'
import ReactNativeCourses from '@/views/Courses/ReactNativeCourses.vue'
import AdvancedReactHandbook from '@/views/CoursesHome/React_Handbook.vue'
import AdvancedReactHandbookCourses from '@/views/Courses/ReactHandbookCourses.vue'
import SwiftUI_V14_P1 from '@/views/CoursesHome/SwiftUI_V14_P1.vue'
import SwiftUI_V14_P1_Course from '@/views/Courses/SwiftUI_V14_P1_Course.vue'
import SwiftUI_V14_P2 from '@/views/CoursesHome/SwiftUI_V14_P2.vue'
import SwiftUI_V14_P2_Course from '@/views/Courses/SwiftUI_V14_P2_Course.vue'
import SwiftUI_V14_P3 from '@/views/CoursesHome/SwiftUI_V14_P3.vue'
import SwiftUI_V14_P3_Course from '@/views/Courses/SwiftUI_V14_P3_Course.vue'
import React_Handbook from '@/views/CoursesHome/React_Handbook.vue'
import ReactHandbookCourses from '@/views/Courses/ReactHandbookCourses.vue'

import { auth } from '@/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: 'team',
        name: 'team',
        component: Team,
      },
      {
        path: 'advanced_react_handbook',
        name: 'advanced_react_handbook',
        component: AdvancedReactHandbook,
      },
      {
        path: 'advanced_react_handbook_course',
        name: 'advanced_react_handbook_course',
        component: AdvancedReactHandbookCourses,
      },
      {
        path: 'react_handbook_course',
        name: 'react_handbook_course',
        component: ReactHandbookCourses,
      },
      {
        path: 'swiftui_v14_01',
        name: 'swiftui_v14_01',
        component: SwiftUI_V14_P1,
      },
      {
        path: 'swiftui_v14_01_course',
        name: 'swiftui_v14_01_course',
        component: SwiftUI_V14_P1_Course,
      },
      {
        path: 'swiftui_v14_02',
        name: 'swiftui_v14_02',
        component: SwiftUI_V14_P2,
      },
      {
        path: 'swiftui_v14_02_course',
        name: 'swiftui_v14_02_course',
        component: SwiftUI_V14_P2_Course,
      },
      {
        path: 'swiftui_v14_03',
        name: 'swiftui_v14_03',
        component: SwiftUI_V14_P3,
      },
      {
        path: 'swiftui_v14_03_course',
        name: 'swiftui_v14_03_course',
        component: SwiftUI_V14_P3_Course,
      },
      {
        path: 'react_handbook',
        name: 'react_handbook',
        component: React_Handbook,
      },
      {
        path: 'news',
        name: 'news',
        component: NewsHome,
        meta: { requiresAuth: true },
      },
      {
        path: 'video',
        name: 'video',
        component: VideoHome,
      },
      {
        path: 'other',
        name: 'other',
        component: HoverCard,
      },
      {
        path: 'welcome',
        name: 'welcome',
        component: WelcomePage,
      },
      {
        path: 'advanced_react',
        name: 'Advanced_react',
        component: Advanced_react,
      },
      {
        path: 'advanced_hooks',
        name: 'advanced_hooks',
        component: ReactHooks,
      },
      {
        path: 'react-native',
        name: 'ReactNative',
        component: ReactNative,
      },
      {
        path: 'react_native_course',
        name: 'react_native_course',
        component: ReactNativeCourses,
      },
      {
        path: 'vue_designer',
        name: 'vue_designer',
        component: VueDesigner,
      },
      {
        path: 'react_hooks',
        name: 'react_hooks',
        component: ReactHooksCourses,
      },
      {
        path: 'advanced_react_course',
        name: 'advanced_react_course',
        component: ReactCourses,
      },
      {
        path: 'vue_desingers_course',
        name: 'vue_desingers_course',
        component: VueDesignerCourses,
      },
      {
        path: 'figma_system',
        name: 'figma_system',
        component: Figma_system,
      },
      {
        path: 'figma_system_course',
        name: 'figma_system_course',
        component: FigmaSystem,
      },
    ],
  },
  {
    path: '/pay',
    name: 'pay',
    component: Certificate,
  },
  {
    path: '/recover',
    name: 'recover',
    component: Recover,
  },

  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },

  {
    path: '/request',
    name: 'request',
    component: Request,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser()
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })

  if (requiresAuth && !currentUser) {
    next('signin')
  } else {
    next()
  }
})

export default router

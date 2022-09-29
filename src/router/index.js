import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const VideoHome = () => import('@/views/VideoHome.vue')
const HoverCard = () => '@/importviews/OtherPages/HoverCard/HoverCard.vue'
const SignIn = () => import('@/views/SignIn.vue')
const Recover = () => import('@/views/Recover.vue')
const Request = () => import('@/views/Request.vue')
const ReactCourses = () => import('@/views/Courses/ReactCourses.vue')
const Advanced_react = () => import('@/views/CoursesHome/Advanced_react.vue')
const VueDesigner = () => import('@/views/CoursesHome/VueDesigner.vue')
const VueDesignerCourses = () =>
  import('@/views/Courses/VueDesignerCourses.vue')
const ReactHooks = () => import('@/views/CoursesHome/ReactHooks.vue')
const ReactHooksCourses = () => import('@/views/Courses/ReactHooksCourses.vue')
const WelcomePage = () => import('@/views/WelcomePage.vue')
const Team = () => import('@/views/TeamPage.vue')
const NewsHome = () => import('@/views/News/NewsHome.vue')
const Certificate = () => import('@/views/PayUs/Certificate.vue')
const Figma_system = () => import('@/views/CoursesHome/Figma_system.vue')
const FigmaSystem = () => import('@/views/Courses/FigmaSystem.vue')
const ReactNative = () => import('@/views/CoursesHome/ReactNative.vue')
const ReactNativeCourses = () =>
  import('@/views/Courses/ReactNativeCourses.vue')
const AdvancedReactHandbook = () =>
  import('@/views/CoursesHome/React_Handbook.vue')
const AdvancedReactHandbookCourses = () =>
  import('@/views/Courses/ReactHandbookCourses.vue')
const SwiftUI_V14_P1 = () => import('@/views/CoursesHome/SwiftUI_V14_P1.vue')
const SwiftUI_V14_P1_Course = () =>
  import('@/views/Courses/SwiftUI_V14_P1_Course.vue')
const SwiftUI_V14_P2 = () => import('@/views/CoursesHome/SwiftUI_V14_P2.vue')
const SwiftUI_V14_P2_Course = () =>
  import('@/views/Courses/SwiftUI_V14_P2_Course.vue')
const SwiftUI_V14_P3 = () => import('@/views/CoursesHome/SwiftUI_V14_P3.vue')
const SwiftUI_V14_P3_Course = () =>
  import('@/views/Courses/SwiftUI_V14_P3_Course.vue')
const React_Handbook = () => import('@/views/CoursesHome/React_Handbook.vue')
const ReactHandbookCourses = () =>
  import('@/views/Courses/ReactHandbookCourses.vue')

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
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth
  })

  if (requiresAuth && !currentUser) {
    next('signin')
  } else {
    next()
  }
})

export default router

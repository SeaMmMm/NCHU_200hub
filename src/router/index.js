import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import VideoHome from "@/views/VideoHome.vue";
import SignIn from "@/views/SignIn.vue";
import Recover from "@/views/Recover.vue";
import Request from "@/views/Request.vue";
import ReactCourses from "@/views/Courses/ReactCourses.vue";
import Advanced_react from "@/views/CoursesHome/Advanced_react.vue";
import VueDesigner from "@/views/CoursesHome/VueDesigner.vue";
import VueDesignerCourses from "@/views/Courses/VueDesignerCourses.vue";
import ReactHooks from "@/views/CoursesHome/ReactHooks.vue";
import ReactHooksCourses from "@/views/Courses/ReactHooksCourses.vue";
import WelcomePage from "@/views/WelcomePage.vue";
import Team from "@/views/Team.vue";

import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/welcome",
    children: [
      {
        path: "/team",
        name: "team",
        component: Team,
      },
      {
        path: "/video",
        name: "video",
        component: VideoHome,
      },
      {
        path: "/welcome",
        name: "welcome",
        component: WelcomePage,
      },
      {
        path: "/advanced_react",
        name: "Advanced_react",
        component: Advanced_react,
      },
      {
        path: "/advanced_hooks",
        name: "advanced_hooks",
        component: ReactHooks,
      },
      {
        path: "/vue_designer",
        name: "vue_designer",
        component: VueDesigner,
      },
      {
        path: "/react_hooks",
        name: "react_hooks",
        component: ReactHooksCourses,
      },
      {
        path: "/advanced_react_course",
        name: "advanced_react_course",
        component: ReactCourses,
      },
      {
        path: "/vue_desingers_course",
        name: "vue_desingers_course",
        component: VueDesignerCourses,
      },
    ],
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },

  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },

  {
    path: "/request",
    name: "request",
    component: Request,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;

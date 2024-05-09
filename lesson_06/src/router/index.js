import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
      children: [
        {
          path: "detail",
          name: "detail",
          component: () => import("../components/Detail.vue"),
        },
        {
          path: "/hello-world",
          name: "hello-world",
          component: () => import("../components/HelloWorld.vue"),
        },
        {
          path: "/:username",
          name: "profile",
          component: () => import("../pages/Profile.vue"),
        },
      ],
    },
  ],
});

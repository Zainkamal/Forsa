import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: "/",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/profile",
      component: () => import("../components/Profile.vue"),
    },
    {
      path: "/sejarah",
      component: () => import("../components/Sejarah.vue"),
    },
    {
      path: "/sturktural",
      component: () => import("../components/Struktural.vue"),
    },
    {
      path: "/demisioner",
      component: () => import("../components/Demisioner.vue"),
    },
    {
      path: "/galeri",
      component: () => import("../components/Galeri.vue"),
    },
  ],
});

export default router;

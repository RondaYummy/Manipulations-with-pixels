import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/HomeView.vue"),
  },
  {
    path: "/split",
    name: "split-by-colors",
    component: () =>
      import(
        /* webpackChunkName: "main" */ "../views/SplitImageByColorsView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

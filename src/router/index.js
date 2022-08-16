import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import oneCard from "@/views/oneCard.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },

  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/home.vue"),
  },

  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact.vue"),
  },

  {
    path: "/Products/:id",
    name: "oneCard",
    component: oneCard,
    props: true,
  },

  {
    path: "/products",
    name: "products",
    component: () => import("../views/Products.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

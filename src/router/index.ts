import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/productos",
      name: "productos",
      component: () => import("../views/ProductoView.vue"),
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/Categoriaview.vue"),
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: () => import("../views/UsuarioView.vue"),
    },
    {
      path: "/add-user",
      name: "add-user",
      component: () => import("../views/UsuarioFormView.vue"),
    },
  ],
});

export default router

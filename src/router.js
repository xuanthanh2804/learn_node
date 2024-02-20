import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./pages/content";
import Login from "./pages/login";
import Register from "./pages/register";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

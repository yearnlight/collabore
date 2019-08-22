import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: require("@/components/login/login.vue").default
  },
  {
    path: "/forgetPwd",
    component: require("@/components/login/forgetPwd.vue").default
  }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

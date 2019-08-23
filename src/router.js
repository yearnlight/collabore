import Vue from "vue";
import Router from "vue-router";
import notfount from '@/components/404'

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
  },
  {
    path: '*',
    name: 'notfount',
    component: notfount
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

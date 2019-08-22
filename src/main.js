import Vue from 'vue'
import App from './App.vue'
import Axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import VueRouter from "vue-router";
import menus from "./common/menu";
import util from "./util";
import "./config";
import store from "./vuex/store";

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: "small"
});
Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
  let VUE = new Vue();
  let token = VUE.getSStorage('token');
  if (!token) {
    if (to.path == "/login" || to.path == "/forgetPwd") {
      next();
    } else {
      next("/login");
    }
  }
  else {
    let menuList = VUE.getSStorage('menuList');
    let navs = store.state.navs;
    //正常操作
    if (menuList && (navs && navs.length)) {
      next();
    }
    else {
      //刷新或者第一次进入时，重新加载路由配置
      let recordRoutePath = to ? to.path : "";
      let dynamicEoutes = util.getDynamicRoutes(menus); 
      store.commit("SET_NAVS", menus);
      //有权限
      if (dynamicEoutes && dynamicEoutes.length) {
        router.addRoutes([{
          path: "/enter",
          component: require("./components/common/menu.vue").default,
          children: dynamicEoutes,
          redirect: dynamicEoutes[0].path
        }]);
        //记录的路由存在并且在新生成的路由配置里面存在（切换学校时记录的toPath == ‘/xx’也不存在，默认跳首页）
        let isExistInConf = util.isExistPathInRouterConf(dynamicEoutes, recordRoutePath)
        if (recordRoutePath && isExistInConf) {
          next(recordRoutePath);
        }
        else {
          next(dynamicEoutes[0].path);
        }
      }
    }
  }

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from "vue";

const setEduplusPage = (target, filePath) => {
    let page = null;
    try {
        page = require(`./components${filePath}/index.vue`).default;
    } catch {
        page = require(`./components/common/noservice.vue`).default;
    }
    target.push({
        path: `/enter${filePath}`,
        component: page
    });
};

const getLastLevelConf = (data, target, treelevel) => {
    data.forEach(child => {
        //设置数据层级
        child.treelevel = treelevel + 1;
        if (child.children && child.children.length) {
            getLastLevelConf(child.children, target, child.treelevel);
        } else {
            setEduplusPage(target, child.path);
        }
    });
};

//获取重定向路由
const getLastLevelFirstPath = (data, navsData) => {
    let redirectPath = "";
    for (let i = 0; i < data.length; i++) {
        let child = data[i];
        if (child.children && child.children.length) {
            return getLastLevelFirstPath(child.children);
        } else {
            if (i == 0) {
                redirectPath = child.path;
                break;
            }
        }
    }
    return redirectPath;
};

const getDynamicRoutes = navsData => {
    let routeConfs = [];
    navsData.forEach(item => {
        item.treelevel = 1;
        if (item.children && item.children.length) {
            let redirectPath = getLastLevelFirstPath(item.children, navsData);
            if (!item.noPermission) {
                let routeConf = {
                    path: `/enter${item.path}`,
                    redirect: `/enter${redirectPath}`,
                    component: require("./components/common/leftMenu.vue").default,
                    children: []
                };
                getLastLevelConf(item.children, routeConf.children, item.treelevel);

                routeConfs.push(routeConf);
            }
        } else {
            item.noPermission = true;
        }
    });
    //设置完成菜单权限
    (new Vue()).setSStorage("menuList",navsData)
    return routeConfs;
};

//判断当前路由是否存在于生成的路由配置里面(递归寻找)
const isExistPathInRouterConf = (dynamicEoutes, path) => {
  if (dynamicEoutes && dynamicEoutes.length) {
    for (let i = 0; i < dynamicEoutes.length; i++) {
      let item = dynamicEoutes[i];
      if (item.path == path) {
        return true;
      }
      else {
        if (item.children && item.children.length) {
          let finded = isExistPathInRouterConf(item.children, path);
          if (finded) {
            return true;
          }
        }
      }
    }
  }
}

export default{
    getDynamicRoutes,
    isExistPathInRouterConf
}
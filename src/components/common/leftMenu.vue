<template>
  <el-container class="sys">
    <el-scrollbar :class="{ notCollapse: !isCollapse, isCollapse: isCollapse }">
      <el-aside width="100%">
        <el-menu :default-openeds="open_list" router :default-active="$route.path" :collapse="isCollapse" text-color="#444" active-text-color="#0086F4" :unique-opened="true" @select="menuSelected">
          <el-submenu v-if="item.children && !item.noPermission" :index="`${mIndex}`" v-for="(item, mIndex) in menus" :key="mIndex">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item :index="`/enter${child.path}`" v-for="child in item.children" :key="child.id">
              <i class="icon el-icon-star-off"></i>
              <span slot="title">{{ child.name }}</span>
            </el-menu-item>
          </el-submenu>

          <el-menu-item :class="{'active': $route.path.includes(item.path),'no-active': !$route.path.includes(item.path)}" v-if="!item.children && !item.hide" :index="`/enter${item.path}`" v-for="item in menus" :key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-scrollbar>
    <el-container>
      <div class="sys-content">
        <div class="sys-content-breadcrumb">
          <el-breadcrumb class="sys-content-breadcrumb" separator="/">
            <el-breadcrumb-item v-for="(item, index) in crumbs" :key="index">
              <span class="crumb-path" v-if="index < crumbs.length - 1" @click="goToCrumbRoute(item.path)">{{ item.name }}</span>
              <span class="crumb-cur" v-else>{{ item.name }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <span class="service-phone">客服电话 18700472414</span>
          <span @click="toBack" class="return-router el-icon-back"></span>
        </div>

        <router-view :key="refreshRouterKey" class="sys-content-page"></router-view>
      </div>
    </el-container>
  </el-container>
</template>
<script>
import bus from "@/bus";

export default {
  watch: {
    $route: {
      handler(n, o) {
        if (n.path && n.path != o.path && n.path != "/login") {
          this.initLeftMenu();
        }
      }
    },
    navs() {
      this.initLeftMenu();
    }
  },
  data() {
    return {
      open_list: ["0"],
      isCollapse: false,
      menus: [],
      crumbs: [],
      crumbName: "",
      refreshRouterKey: "",
      reloadCode: 0
    };
  },
  created() {
    let _self = this;
    _self.initLeftMenu();
    bus.$on("isCollapse", state => {
      this.isCollapse = state;
    });
  },
  computed: {
    navs() {
      return this.$store.state.navs;
    }
  },
  methods: {
    getRefreshKey() {
      this.reloadCode = new Date().valueOf();
      return `${this.reloadCode}`;
    },
    menuSelected() {
      //点击本身刷新自身组件
      if (this.$route.path == arguments[0]) {
        //重置刷新码，刷新右侧内容
        this.refreshRouterKey = this.getRefreshKey();
      }
    },
    initLeftMenu() {
      let _self = this;
      //渲染左侧导航
      _self.menus = [];
      //一级菜单路由名称
      let level1Path = `/${_self.$route.path.split("/")[2]}`;
      _self.navs.forEach(n => {
        if (level1Path == n.path) {
          _self.menus = n.children || [];
          _self.$root.menus = n.children || [];
          _self.getCrumbs();
        }
      });
    },
    getCrumbName(navs, path) {
      if (navs && navs.length) {
        for (let i = 0; i < navs.length; i++) {
          let item = navs[i];
          if (item.path == path) {
            this.crumbName = item.name;
            break;
          } else {
            if (item.children && item.children.length) {
              this.getCrumbName(item.children, path);
            }
          }
        }
      }
    },
    goToCrumbRoute() {
      if (arguments[0]) {
        this.$router.push(arguments[0]);
      }
    },
    getCrumbs() {
      let _self = this;
      //根据路由生成当前面包屑
      let curRouterPath = this.$route.path;
      let paths = curRouterPath.split("/").slice(2);
      this.crumbs.length = 0;
      let routePath = "";
      if (paths && paths.length) {
        paths.forEach(p => {
          routePath += `/${p}`;
          this.getCrumbName(_self.navs, routePath);
          this.crumbs.push({
            path: `/enter${routePath}`,
            name: this.crumbName
          });
          this.$root.crumbs = this.crumbs;
        });
      }
    },
    toBack() {
      if (!this.$route.path.includes("/enter")) {
        return;
      }
      this.$router.go(-1);
    }
  },
  beforeDestroy() {
    bus.$off("left-menus");
  }
};
</script>

<style lang="scss">
%red {
  color: #f56c6c;
}
%green {
  color: #67c23a;
}
%blue {
  color: #409eff;
}
%orange {
  color: #e6a23c;
}
%flex-center {
  display: flex;
  align-items: center;
}

.el-container .sys-menu .sys-content /deep/ .el-breadcrumb {
  background-color: #ffffff !important;
  padding-left: 24px !important;
  margin-bottom: 0px !important;
  font-size: 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 3px -6px #ddd;
}
.isCollapse {
  max-width: 64px;
  width: 64px;
  box-shadow: 0px 4px 10px #ddd;
}

.notCollapse {
  min-width: 184px;
  width: 184px;
  box-shadow: 0px 4px 10px #ddd;
}

.el-scrollbar {
  background-color: #ffffff;
  border-right: none;
  width: 184px;
  .el-scrollbar__wrap {
    overflow-x: hidden;
    .el-scrollbar__view {
      height: 100%;
      .el-aside {
        height: 100%;
        .el-menu {
          height: 100%;
          text-align: left;
          .el-menu-item {
            min-width: 100%;
            height: 40px;
            line-height: 40px;
            > span {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
              width: 100px;
              display: inline-block;
            }
            > i.iconfont {
              margin: 0 5px;
            }
            &.is-active {
              background-color: #eff7fe !important;
            }
            &.active,
            &.is-active {
              color: #ffffff;
              .iconfont {
                color: #0086f4 !important;
              }
            }
            &.no-active {
              color: #444;
              .iconfont {
                color: #9e9e9e !important;
              }
            }
          }
        }

        .el-submenu {
          i.iconfont {
            margin: 0 5px;
          }
        }
        .exclusive_logo_box {
          width: 180px;
          position: fixed;
          left: 0;
          bottom: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}

.sys {
  height: calc(100% - 60px);
}
.sys-content {
  // overflow: hidden !important;
  overflow-y: hidden;
  width: 100%;
  // height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column !important;
  overflow: auto;
  .separated {
    display: flex;
    justify-content: center;
  }
  &-breadcrumb {
    display: flex;
    font-size: 13px;
    align-items: center;
    background-color: #ffffff;
    .return-router {
      cursor: pointer;
      height: 16px;
      width: 16px;
      margin-right: 24px;
      @extend %blue;
    }
    .service-phone {
      margin-right: 16px;
      font-size: 13px;
      color: #999;
    }
  }
  &-page {
    height: calc(100% - 72px);
    overflow-y: auto;
    background-color: #ffffff;
    margin: 16px;
    padding: 16px;
    .el-table {
      .red {
        @extend %red;
        cursor: pointer;
        margin-right: 10px;
      }
      .blue {
        @extend %blue;
        cursor: pointer;
        margin-right: 10px;
      }
      .orange {
        @extend %orange;
        cursor: pointer;
        margin-right: 10px;
      }
      .green {
        @extend %green;
        cursor: pointer;
        margin-right: 10px;
      }
    }
    .el-pagination {
      text-align: right;
      padding: 10px;
    }
  }
  .el-container {
    padding: 10px;
  }
  .el-breadcrumb {
    flex: 1;
    background-color: #ffffff;
    padding: 13px;
    .crumb {
      &-path {
        cursor: pointer;
      }
      &-cur {
        opacity: 0.5;
      }
    }
  }
}
</style>

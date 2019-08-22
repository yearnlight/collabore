<template>
  <el-container>
    <el-header>
      <div :class="[{'sys-title-collapse':isCollapse,'sys-title-nocollapse':!isCollapse},'sys-title']">
        <img :src="isCollapse?require('../../assets/image/splus-mini.png'):require('../../assets/image/splus.png')">
      </div>
      <span @click="switchCollapse" :class="[{'el-icon-s-fold': !isCollapse,'el-icon-s-unfold': isCollapse},'collapse']"></span>
      <ul class="sys-nav">
        <li :class="{ active: level1Path == item.path }" @click="gotoPage(item, index)" v-for="(item, index) in $store.state.navs.filter(n => !n.hide)" :key="index" v-if="!item.hide">{{ item.name }}</li>
      </ul>
      <span class="operate-btns">
        <span class="el-icon-setting" @click="setting"></span>
        <span class="el-icon-switch-button" @click="signOut"></span>
      </span>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
import bus from "@/bus";
export default {
  data() {
    return {
      isCollapse: false,
      activeNav: 0
    };
  },
  computed: {
    level1Path() {
      return `/${this.$route.path.split("/")[2]}`;
    }
  },
  created() {
    bus.$emit("isCollapse", this.isCollapse);
  },
  methods: {
    signOut() {
      this.$confirm("你确定退出当前系统？", "退出").then(() => {
        this.$router.push("/login");
        this.clearSStorage();
      });
    },
    gotoPage(item, index) {
      this.activeNav = index;
      this.$router.push(`/enter${item.path}`);
    },
    switchCollapse() {
      this.isCollapse = !this.isCollapse;
      bus.$emit("isCollapse", this.isCollapse);
    },
    setting(){
      this.$router.push("/enter/setting")
    }
  }
};
</script>


<style lang="scss">
.el-container {
  &.is-vertical {
    height: 100%;
    > .el-header {
      background: linear-gradient(to left, #7b4397, #2196f3);
      color: #ffffff;
      display: flex;
      align-items: center;
      padding: 0 20px 0 0;
      .collapse {
        cursor: pointer;
        font-size: 20px;
      }
      .sys-title {
        display: flex;
        align-items: center;
        justify-content: center;
        &-collapse {
          width: 64px;
          height: 30px;
          img {
            width: 30px;
            height: 30px;
          }
        }
        &-nocollapse {
          width: 184px;
          height: 40px;
          img {
            width: 124px;
            height: 40px;
          }
        }
      }
      .sys-nav {
        margin: 0;
        height: 100%;
        font-weight: 500;
        li {
          list-style: none;
          margin: 0;
          float: left;
          display: block;
          padding: 0 16px;
          cursor: pointer;
          height: 100%;
          display: inline-flex;
          align-items: center;
          color: #b4ddff;
        }
        li.active {
          color: #ffffff;
          background-color: #0082e9;
        }
      }
      .operate-btns {
        margin-left: auto;
        span {
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>


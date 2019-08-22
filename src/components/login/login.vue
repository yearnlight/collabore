<template>
    <div class="login">
        <div class="login-form">
            <div class="logo">
                <img src="../../assets/image/blue_logo.png" alt>
            </div>
            <el-form ref="loginForm" :model="login">
                <el-form-item>
                    <el-input size="large" clearable placeholder="请输入账号" v-model="login.account">
                        <i slot="prefix" class="el-input__icon el-icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input size="large" class="pwd" clearable placeholder="请输入密码" v-model="login.pass">
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <div class="forget">
                        <span class="forget-btn blue">忘记密码</span>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button size="large" type="primary" @click="signIn" class="loginBtn">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        account: "",
        pass: ""
      }
    };
  },
  methods:{
      signIn(){
          this.setSStorage("token",(new Date()).valueOf());
          this.$router.push("/enter")
      }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/login-bg.jpg");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  &-form {
    padding: 20px 40px;
    width: 320px;
    height: 420px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: 100px;
    border-radius: 5px;
    .pwd {
      margin-bottom: 14px !important;
      input {
        -webkit-text-security: disc;
      }
    }
    .logo {
      margin-bottom: 40px;
      margin-top: 20px;
      > img {
        width: 145px;
        height: 47px;
      }
    }
    .loginBtn {
      width: 100%;
    }
    .forget {
      display: flex;
      &-btn {
        margin-left: auto;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>



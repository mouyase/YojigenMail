<template>
  <div class="home">
    <div class="content">
      <div>
        <img src="/images/logo.png"/>
      </div>
      <div class="content-main">
        <div>
          <img src="/images/welcome.png"/>
        </div>
        <el-card class="content-login">
          <div style="font-size: 18px"><i class="el-icon-message"></i><b>登陆大兴安岭职业学院邮箱</b></div>
          <div style="margin-top: 48px;">
            <el-input placeholder="邮箱" v-model="username" prefix-icon="el-icon-user">
              <template slot="append">@yojigen.ac.cn</template>
            </el-input>
          </div>
          <div style="margin-top: 8px;">
            <el-input placeholder="密码" v-model="password" :show-password="true" prefix-icon="el-icon-lock">
            </el-input>
          </div>
          <div style="margin-top: 24px;">
            <el-checkbox v-model="checked">记住用户</el-checkbox>
          </div>
          <div style="margin-top: 24px;">
            <el-button type="primary" style="width: 100%;" @click="login">登陆</el-button>
          </div>
          <div style="margin-top: 24px;display: flex;width: 100%;justify-content: flex-end">
            <el-link @click="forget">忘记密码？</el-link>
          </div>
        </el-card>
      </div>
      <div class="content-footer">
        <div>
          Copyright（C）2008 大兴安岭职业学院 All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
      checked: true,
    }
  },
  methods: {
    login() {
      this.$alert('账号密码错误', '提示', {
        confirmButtonText: '确定',
        showClose: false,
        callback: action => {
        }
      });
    },
    forget() {
      this.$alert('请联系信息部管理员重置密码', '提示', {
        confirmButtonText: '确定',
        showClose: false,
        callback: action => {
        }
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin: 60px;
    height: 800px;
    width: 1200px;
    display: flex;
    flex-direction: column;

    .content-main {
      display: flex;
      height: 600px;
      justify-content: space-around;
      align-items: center;

      .content-login {
        height: 400px;
        width: 360px;
      }
    }

    .content-footer {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>

<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p class="name">上次登录时间：<span>2021-7-18</span></p>
          <p class="access">上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      userImg: require("@/assets/images/user.png"),
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;

    img {
      width: 160px;
      border-radius: 50%;
      margin-right: 10%;
    }
    .userinfo {
      .name {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 5px;
      }
    }
  }
  .login-info {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding-top: 20px;
    .name {
      margin-bottom: 10px;
    }
  }
}
</style>
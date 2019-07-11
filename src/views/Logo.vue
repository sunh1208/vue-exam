<template>
  <div class="login-box">
    <div class="login-screen">
      <p class="login-user">
        <input type="text" v-model="user_name" placeholder="请输入用户名" />
      </p>
      <p class="login-pwd">
        <input type="password" v-model="user_pwd" placeholder="请输入密码" />
      </p>
      <p class="login">
        <input type="button" value="登录" id="loginBtn" @click="login" />
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      user_name: "",
      user_pwd: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions("login", ["loginAsync", "userInfo"]),
    async login() {
      let loginFlag = await this.loginAsync({
        user_name: this.user_name,
        user_pwd: this.user_pwd
      });
      // if (loginFlag) {
      //   this.$router.history.push("/home");
      // }
      if (loginFlag) {
        this.userInfo();
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/1108121822b6a76a3a7b1b96a6.jpg");
  background-size: 100% 100%;
}
.login-screen {
  position: absolute;
  text-align: center;
  padding: 40px;
  top: 300px;
  right: 10%;
  width: 400px;
  height: 300px;
  background: #fff;
}
input {
  width: 220px;
  height: 40px;
  margin: 10px 0;
  padding-left: 10px;
}
#loginBtn {
  width: 150px;
  background: #f00;
  border: 0;
  color: #fff;
  cursor: pointer;
}
</style>
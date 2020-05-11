<template>
  <div class="loginwarp">
    <div class="headlogin">
      <div class="loginleft" :class="{active :current=='first'}" @click="changebgf">手机号+密码登录</div>
      <div class="loginright" :class="{active :current=='second'}" @click="changebgs">手机号+验证码登录</div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfix {
  overflow: auto;
  zoom: 1;
}
.loginwarp {
  font-family: "PingFangSC-Regular";
  font-size: 16px;
  max-width: 640px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 14px;
}
.loginwarp .headlogin {
  margin-top: 10px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  border: 1px #fe6c6c solid;
  text-align: center;
  color: #666;
}
.loginwarp .headlogin .loginleft,
.loginright {
  width: 50%;
  float: left;
}
.active {
  background-color: #fe6c6c;
  color: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      current: "first"
    };
  },
  methods: {
    changebgf() {
      if (this.current == "second") {
        this.current = "first";
        this.$router.push({ path: "/login/a" });
      }
    },
    changebgs() {
      if (this.current == "first") {
        this.current = "second";
        this.$router.push({ path: "/login/b" });
      }
    }
  },
  created() {
    let path=this.$route.query.redirectUrl || "/home/a";
    this.$router.push({ path: "/login/a",query:{path}});
  }
};
</script>
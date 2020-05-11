<template>
  <div class="regwarp">
    <p class="errmsg">{{data.errmsg}}</p>
    <div class="pictrue" :class="{isfalse:data.respic==false}">
      <input
        type="text"
        maxlength="4"
        placeholder="请输入图片验证码"
        @blur="regpicture"
        v-model.trim="data.regpicval"
      />
      <div id="v_container"></div>
    </div>
    <div class="phonebox clearfix">
      <div class="phone" :class="{isfalse:data.phoneboder==false}">
        <input
          type="text"
          maxlength="11"
          placeholder="请输入手机号码"
          v-model.trim="data.regphoneval"
          @blur="regphone"
        />
      </div>
      <button
        class="getmsg"
        :class="{activebtn:data.resphone==true,noactivebtn:data.resphone==false}"
        @click="getmsg"
      >获取短信验证码</button>
    </div>
    <div class="msgreg" :class="{isfalse:data.resmsg==false}">
      <input
        type="text"
        maxlength="6"
        placeholder="请输入短信验证码"
        v-model.trim="data.resmsgval"
        @blur="regmsg"
      />
    </div>
    <div class="username">
      <input type="text" maxlength="30" placeholder="请输入姓名" v-model.trim="data.username" />
    </div>
    <div class="password" :class="{isfalse:data.regpas==false}">
      <input
        type="text"
        maxlength="20"
        placeholder="请输入6-20位登录密码"
        @blur="regpassword"
        v-model.trim="data.password"
        v-if="data.checked"
      />
      <input
        type="password"
        maxlength="20"
        placeholder="请输入6-20位登录密码"
        @input="regpassword"
        v-model.trim="data.password"
        v-else
      />
      <van-switch
        v-model.trim="data.checked"
        active-color="#FE6C6C"
        inactive-color="#fff"
        size="24"
      />
    </div>
    <p class="agree">
      注册即视为同意
      <a>《七彩用户注册协议》</a>
    </p>
    <button
      class="regbutton"
      :class="{activebtn:data.ready==true,noactivebtn:data.ready==false}"
      @click="reg"
    >注册</button>
  </div>
</template>
<script>
import GVerify from "../assets/js/gVerify.js";
import axios from "axios";
export default {
  data() {
    return {
      data: {
        errmsg: "",
        checked: false,
        regpicval: "",
        regphoneval: "",
        resmsgval: "",
        getmsgval: "",
        password: "",
        username: "",
        verifyCode: "",
        phoneboder: true,
        respic: true,
        resphone: false,
        resmsg: true,
        regpas: true,
        ready: false
      }
    };
  },
  methods: {
    regpicture() {
      if (!this.data.regpicval) {
        this.data.errmsg = "验证码不能为空！";
        this.data.respic = false;
        return;
      }
      this.data.respic = this.data.verifyCode.validate(this.data.regpicval);
      if (!this.data.respic) {
        this.data.errmsg = "验证码不正确！";
      } else {
        this.data.errmsg = "";
      }
      // console.log(this.data.respic);
    },
    async regphone() {
      if (!this.data.regpicval) {
        this.data.errmsg = "验证码不能为空！";
        this.data.respic = false;
        return;
      }
      let regphone = /^1[3-9]\d{9}$/;
      if (this.data.respic) {
        if (this.data.regphoneval) {
          this.data.resphone = regphone.test(this.data.regphoneval);
          if (this.data.resphone) {
            let data = await this.$axios.get(
              "http://112.74.14.213:1912/users/one",
              {
                params: { phone: this.data.regphoneval }
              }
            );
            if (data.data.length != 0) {
              this.data.resphone = false;
              this.data.errmsg = "该用户已经注册！";
              this.data.phoneboder = false;
            } else {
              this.data.resphone = true;
              this.data.phoneboder = true;
              this.data.errmsg = "";
            }
          } else {
            this.data.errmsg = "手机号码不正确！";
            this.data.phoneboder = false;
          }
        } else {
          this.data.errmsg = "手机号码不能为空！";
          this.data.resphone = false;
          this.data.phoneboder = false;
        }
      } else {
        this.data.errmsg = "验证码不正确！";
        this.data.respic = false;
      }
    },
    getmsg() {
      if (this.data.regpicval && this.data.regphoneval) {
        this.data.getmsgval = "666666";
      }
    },
    regmsg() {
      if (!this.data.regpicval) {
        this.data.errmsg = "验证码不能为空！";
        this.data.respic = false;
        return;
      }
        if (!this.data.respic) {
        this.data.errmsg = "验证码不正确！";
        this.data.respic = false;
        return;
      }
      if (!this.data.regphoneval) {
        this.data.errmsg = "手机号码不能为空！";
        this.data.resphone = false;
        this.data.phoneboder = false;
        return;
      }
      if (!this.data.resphone) {
        this.data.errmsg = "手机号码不正确！";
        this.data.resphone = false;
         this.data.phoneboder = false;
        return;
      }
        if (this.data.resmsgval) {
          console.log(this.data.getmsgval == this.data.resmsgval)
          if (this.data.getmsgval == this.data.resmsgval) {
            this.data.resmsg = true;
            this.data.errmsg = "";
          } else {
            this.data.resmsg = false;
            this.data.errmsg = "手机验证码不正确";
          }
        } else {
          this.data.resmsg = false;
          this.data.errmsg = "手机验证码不能为空";
        }
    },
    regpassword() {
      let reg = /^[0-9a-zA-Z]{6,10}$/;
      if (this.data.password) {
        this.data.regpas = reg.test(this.data.password);
        if (this.data.regpas) {
          this.data.errmsg = "";
        } else {
          this.data.errmsg = "密码不正确！";
        }
      } else {
        this.data.errmsg = "密码不能为空！";
        this.data.regpas = false;
      }
    },
    async reg() {
      if (this.data.ready) {
        let issuccss = await this.$axios.post(
          "http://112.74.14.213:1912/users/reg",
          {
            phone: this.data.regphoneval,
            username: this.data.username,
            password: this.data.password
          }
        );
        if (issuccss.data.type == 1) {
          this.$router.push("/login/a");
        }
      }
    }
  },
  watch: {
    data: {
      handler: function(val, oldVal) {
        if (val.resphone && val.resmsg && val.regpas && this.data.password) {
          this.data.ready = true;
        } else {
          this.data.ready = false;
        }
      },
      deep: true
    }
  },
  created() {},
  mounted: function() {
    this.data.verifyCode = new GVerify("v_container");
  }
};
</script>
<style scoped>
@import "../assets/css/reg.css";
.activebtn {
  background: #78b300 !important;
  color: #fff !important;
}
.noactivebtn {
  pointer-events: none;
}
.isfalse {
  border: 1px solid red !important;
}
</style>
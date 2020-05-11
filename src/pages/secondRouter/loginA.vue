<template>
  <div class="first">
    <p class="errmsg">{{data.errmsg}}</p>
    <div class="phone" :class="{isfalse:data.phoneboder==false}">
      <input
        type="text"
        maxlength="11"
        placeholder="请输入手机号码"
        v-model.trim="data.regphoneval"
        @blur="regphone"
      />
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
        @blur="regpassword"
        v-model.trim="data.password"
        v-else
      />
      <van-switch v-model="data.checked" active-color="#FE6C6C" inactive-color="#fff" size="24" />
    </div>
    <div class="pictrue" :class="{isfalse:data.respic==false}">
      <input
        type="text"
        maxlength="4"
        placeholder="请输入图片验证码"
        @blur="regpicture"
        v-model.trim="data.regpicval"
      />
      <div id="v_reg"></div>
    </div>
    <van-checkbox v-model="data.free" checked-color="#FE6C6C">一个月内免登录</van-checkbox>
    <button
      class="fbutton"
      :class="{activebtn:data.ready==true,noactivebtn:data.ready==false}"
      @click="reg"
    >登录</button>
    <div class="text">
      <a href="#">找回密码</a>
    <a href="http://112.74.14.213:1912/#/reg" style="float:right">免费注册</a>
    </div>
    
  </div>
</template>
<script>
import GVerify from "../../assets/js/gVerify.js";
export default {
  data() {
    return {
      data: {
        checked: true,
        free: true,
        errmsg: "",
        regphoneval: "",
        password: "",
        regpicval: "",
        verifyCode: "",
        phoneboder: true,
        respic: true,
        resphone: false,
        regpas: true,
        ready: false,
        path: "/home/a",
      }
    };
  },
  methods: {
    async regphone() {
      if (this.data.regphoneval) {
        let regphone = /^1[3-9]\d{9}$/;
        this.data.resphone = regphone.test(this.data.regphoneval);
        if (this.data.resphone) {
          let data = await this.$axios.get("http://112.74.14.213:1912/users/one", {
            params: { phone: this.data.regphoneval }
          });
          if (data.data.length != 0) {
            this.data.resphone = true;
            this.data.phoneboder = true;
            this.data.errmsg = "";
          } else {
            this.data.resphone = false;
            this.data.phoneboder = false;
            this.data.errmsg = "该用户未经注册！";
          }
        } else {
          this.data.phoneboder = false;
          this.data.errmsg = "手机号码不正确！";
        }
      } else {
        this.data.resphone = false;
        this.data.phoneboder = false;
        this.data.errmsg = "手机号码不能为空！";
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
    },
    async reg() {
      let data1 = await this.$axios.get("http://112.74.14.213:1912/users/login", {
        params: {
          phone: this.data.regphoneval,
          password: this.data.password,
          keep: this.data.free
        }
      });
      if (data1.data.type == 1) {
         let {data:data2} = await this.$axios.get("http://112.74.14.213:1912/users/getone", {
        params: {
          uid: data1.data.uid
        }
      
      });  
        let msg = JSON.stringify({
          uid: data1.data.uid,
          username:data2[0].username,
          Authorization: data1.data.token
        });
        localStorage.setItem("usermsg", msg);
        this.$router.push(this.path);
      }
    }
  },
  watch: { 
    data: {
      handler: function(val, oldVal) {
        if (val.regphoneval && val.password && val.regpicval) {
          if (!val.errmsg) {
            this.data.ready = true;
          } else {
            this.data.ready = false;
          }
        } else {
          this.data.ready = false;
        }
      },
      deep: true
    }
  },
  created(){
    this.path = this.$route.query.path;
  },
  mounted: function() {
    this.data.verifyCode = new GVerify("v_reg");
  }
};
</script>
<style scoped>
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
.first .phone {
  width: 100%;
  margin: 10px 0;
  height: 44px;
  line-height: 42px;
  padding: 0;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
}
.first .password {
  width: 100%;
  height: 44px;
  line-height: 42px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  position: relative;
}
.first .password .van-switch {
  position: absolute;
  right: 0.4rem;
  top: 8px;
}
.first input {
  padding-left: 0.266667rem !important;
  border: 0;
  outline: none;
}

.first input::-webkit-input-placeholder {
  color: #d7d7d7;
}
.first .pictrue {
  width: 100%;
  height: 44px;
  line-height: 42px;
  margin-top: 0.133333rem;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
}
.first .pictrue #v_reg {
  width: 100px;
  height: 44px;
  float: right;
}
.first .pictrue #v_reg canvas {
  width: 100%;
}
.van-checkbox {
  margin: 10px 0;
}
.fbutton {
  margin-top: 10px;
  border: 0;
  background: #e2e2e2;
  cursor: default;
  color: #bdbdbd;
  display: inline-block;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  line-height: 40px;
  text-align: center;
  font-size: 17px;
}
.text{
  font-size: 15px;
  margin-top:20px;
  /* border-bottom: 1px solid #686868; */
  /* height: 14px; */
  /* display: inline-block; */

}
.text a{
 color: #686868!important;
  border-bottom: 1px solid #686868;
  /* height: 14px; */
  /* display: inline-block; */
/* text-decoration:  #686868!important; */
}
</style>
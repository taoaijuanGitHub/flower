<template>
  <div class="warp">
    <ul>
      <li>
        <label for="username" :class="{redcolor:regusername==false}">收货人：</label>
        <input id="username" type="text" v-model.trim="username" @blur="comfireusername" />
      </li>
      <li>
        <label for="phone" :class="{redcolor:regphone==false}">联系方式：</label>
        <input id="phone" type="text" v-model.trim="phone" maxlength="11" @blur="comfirephone" />
      </li>
      <li class="special">
        <p class="text" :class="{redcolor:regselected==false}">所在地区：</p>
        <div class="area">
          <area-select
            type="text"
            :level="2"
            v-model="selected"
            :data="pcaa"
            :placeholders="['请选择省','请选择市','请选择区']"
            icon
          ></area-select>
        </div>
      </li>
      <li class="last">
        <label for="address" :class="{redcolor:regdetail==false}">详细地址：</label>
        <input id="address" type="text" v-model.trim="detail" @blur="comfiredetail" />
      </li>
    </ul>
    <button class="comfire" @click="comfire">确认提交</button>
  </div>
</template>
<script>
import { pca, pcaa } from "area-data";
import axios from "axios";
export default {
  data() {
    return {
      selected: [],
      pca: pca,
      pcaa: pcaa,
      username: "",
      phone: "",
      detail: "",
      regusername: true,
      regselected: true,
      regphone: true,
      regdetail: true
    };
  },
  methods: {
    comfirephone() {
      if (this.phone) {
        let reg = /^1[3-9]\d{9}$/;
        this.regphone = reg.test(this.phone);
        if (this.regphone) {
          this.regphone = true;
        } else {
          this.regphone = false;
          alert("请填入正确的联系方式！");
          return;
        }
      } else {
        this.regphone = false;
        alert("联系方式不能为空！");
        return;
      }
    },
    comfireusername() {
      if (!this.username) {
        this.regusername = false;
        alert("收货人不能为空！");
        return;
      } else {
        this.regusername = true;
      }
    },
    comfiredetail() {
      if (!this.detail) {
        this.regdetail = false;
        alert("详细地址不能为空！");
        return;
      } else {
        this.regdetail = true;
      }
    },
    async comfire() {
      if (!this.username) {
        this.regusername = false;
        alert("收货人不能为空！");
        return;
      }
      if (!this.phone) {
        this.regphone = false;
        alert("联系方式不能为空！");
        return;
      }
      if (this.selected.length == 0) {
        this.regselected = false;
        alert("所在地区不能为空！");
        return;
      }
      if (!this.detail) {
        this.regdetail = false;
        alert("详细地址不能为空！");
        return;
      }
      if (this.$route.query.item) {
        let uid = this.$route.query.item.uid;
        let id = this.$route.query.item.id;
        let address = this.selected.join(",");
        let phone = this.phone;
        let username = this.username;
        let detail = this.detail;
        let data = await this.$axios.patch(
          "http://112.74.14.213:1912/address/changeone",
          { uid, address, phone, username, detail, id }
        );
        if (data.data.type == 1) {
          this.$router.push("/address");
        } else {
          alert("请检查所有信息是否正确！");
        }
        return;
      } else {
        if (this.regphone) {
          let uid = JSON.parse(localStorage.getItem("usermsg")).uid;
          let address = this.selected.join(",");
          let phone = this.phone;
          let username = this.username;
          let detail = this.detail;
          let data = await this.$axios.post(
            "http://112.74.14.213:1912/address/addone",
            { uid, address, phone, username, detail }
          );
          if (data.data.type == 1) {
            this.$router.push("/address");
          } else {
            alert("请检查所有信息是否正确！");
          }
        } else {
          alert("请填入正确的联系方式！");
          return;
        }
      }
    }
  },
  created() {
    if (this.$route.query.item) {
      this.username = this.$route.query.item.username;
      this.phone = this.$route.query.item.phone;
      this.selected = this.$route.query.item.address.split(",");
      this.detail = this.$route.query.item.detail;
    }
  }
};
</script>
<style scoped>
.redcolor {
  color: #dc1431;
}
.warp {
  max-width: 640px;
  box-sizing: border-box;
  padding-top: 30px;
  margin: 0 auto;
}
.warp ul li {
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 15px;
  height: 54px;
  line-height: 50px;
  border-top: 1px solid #f0f2f5;
}
.warp ul .special {
  padding-right: 0;
}
.warp ul .special .text {
  float: left;
}
.area .area-select-wrap .area-select {
  border: 0 !important;
}

.warp ul .special .area {
  float: left;
}
.warp ul .last {
  border-bottom: 1px solid #f0f2f5;
}
.warp input {
  border: 0;
}
.comfire {
  color: #fff;
  border: 0;
  background-color: #dc1431;
  width: 200px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  margin: 50px 0 0 2.6rem;
}
</style>
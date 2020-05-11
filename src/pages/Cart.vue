<template>
  <div class="cartwrap">
    <div class="empty" v-if="datalist.length==0">
      <div class="empty_div">
        <img src="https://m.7hua.com/Tpl/default/Public/newskin/images/empty.png" alt />
        <p>购物车还是空的喔</p>
        <button class="gotoshap" @click="gotoshap">去逛逛</button>
      </div>
    </div>
    <div v-if="datalist.length!=0">
      <ul class="firstul">
        <li class="inputli firstli">
          <input id="shop-all" type="checkbox" v-model="allcheck" />
          <label for="shop-all" :class="{bg:allcheck}"></label>
        </li>
        <li class="secondli">
          <i></i>
          <p>七彩鲜花</p>
        </li>
        <li class="thirdli" v-if="isedit==false" @click="changestate">编辑</li>
        <li class="thirdli" v-if="isedit==true" @click="changestate">完成</li>
      </ul>
      <ul v-for="(item,index) in datalist" v-bind:key="item.id" class="secondul clearfix">
        <li class="firstli">
          <input :id="'toggle-all'+index" type="checkbox" v-model="item.ischecked" />
          <label
            :for="'toggle-all'+index"
            :class="{bg:item.ischecked}"
            @click="changeone(item.id,item.ischecked)"
          ></label>
        </li>
        <li class="secondli clearfix">
          <img :src="item.src" />
        </li>
        <li class="thirdli">
          <h3 class="firstp" v-if="isedit==false">{{item.name}}</h3>
          <div class="firstp changenum" v-if="isedit==true"><span style="border-right: 1px solid #d9d9d9;"  @click="add(item.id,item.num,'reducej')">—</span><input type="text" v-model="item.num"/><span style="border-left: 1px solid #d9d9d9" @click="add(item.id,item.num,'add')">+</span></div>
          <p class="secondp">￥{{item.price}}</p>
          <p class="num" v-if="isedit==false">x{{item.num}}</p>
        </li>
        <button id="del" v-if="isedit==true" @click="del(item.id)">删除</button>
      </ul>
    </div>
    <ul class="thirdul" v-if="datalist.length!=0">
      <li class="firstli">
        <input id="toggle-all" type="checkbox" v-model="allcheck" />
        <label for="toggle-all" :class="{bg:allcheck}"></label>
        <p>全选</p>
      </li>
      <li class="thirdli" :class="{havenum:getnum>0}">结算<span v-if="getnum>0">({{getnum}})</span></li>
      <li class="secondli" :class="{haveprice:totalPrice>0}">合计：￥{{totalPrice}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isedit:false,
      datalist: []
    };
  },
  computed: {
    allcheck: {
      get() {
        return this.$store.getters.isallcheck;
      },
      set(val) {
        let self = this;
        let uid = JSON.parse(localStorage.getItem("usermsg")).uid;
        this.$store.dispatch("changeallchecked", {
          allcheck: val,
          uid
        });
        new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(self.$store.state.cart.goodslist);
          }, 500);
        }).then(function(data) {
          self.datalist = data;
        });
      }
    },
    totalPrice:function(){
      return this.$store.getters.totalPrice;
    },
    getnum:function(){
      return this.$store.getters.getnum;
    }
  },
  methods: {
    gotoshap() {
      this.$router.push("/home/a");
    },
    changeone(id, ischecked) {
      let self = this;
      let uid = JSON.parse(localStorage.getItem("usermsg")).uid;
      let obj = { uid,id, ischecked };
      this.$store.dispatch("changeone", obj);
      new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(self.$store.state.cart.goodslist);
          }, 500);
        }).then(function(data) {
          self.datalist = data;
        });
    }, 
    changestate(){
      this.isedit=!this.isedit;
    },
    add(id,num,type){
      let self = this;
      let uid = JSON.parse(localStorage.getItem("usermsg")).uid;
      let obj = { uid,id, num,type };
      this.$store.dispatch("changenum", obj);
      new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(self.$store.state.cart.goodslist);
          }, 500);
        }).then(function(data) {
          self.datalist = data;
        });
    },
    del(id){
      let self = this;
      let uid = JSON.parse(localStorage.getItem("usermsg")).uid;
      let obj = { uid,id};
      this.$store.dispatch("del", obj);
      new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(self.$store.state.cart.goodslist);
          }, 500);
        }).then(function(data) {
          self.datalist = data;
        });
    }
  },
  async created() {
    let self = this;
    if (JSON.parse(localStorage.getItem("usermsg"))) {
      let token = JSON.parse(localStorage.getItem("usermsg")).Authorization;
      let uid = JSON.parse(localStorage.getItem("usermsg")).uid;
      let data = await this.$axios.get("http://112.74.14.213:1912/users/verify", {
        params: {
          uid,
          token
        }
      });
      if (data.data.type) {
        this.$store.dispatch("getallgoods", uid);
        new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(self.$store.state.cart.goodslist);
          }, 1000);
        }).then(function(data) {
          self.datalist = data;
        });
      } else {
         localStorage.removeItem('usermsg');
      }
    }else{
      this.$router.push("/login/a")
    }
  }
};
</script>
<style scoped>
.clearfix {
  overflow: auto;
  zoom: 1;
}
.cartwrap {
  max-width: 640px;
  margin: 0 auto;
  height: 100%;
}
.cartwrap .empty {
  width: 100%;
  height: 100%;
  background: #fafafa;
}
.cartwrap .empty .empty_div {
  text-align: center;
  background: #fafafa;
  padding: 36px 0px;
}
.cartwrap .empty .empty_div img {
  width: 2.666667rem;
  height: 2.666667rem;
}
.cartwrap .empty .empty_div .gotoshap {
  width: 68px;
  height: 26px;
  margin: 10px;
  color: #fff;
  background: #f24a5d;
  border-radius: 2px;
  border: 0;
}
ul {
  width: 100%;
}
.firstul {
  width: 100%;
  box-sizing: border-box;
  padding-right: 10px;
  height: 52px;
  line-height: 52px;
}
.firstul .firstli {
  width: 10%;
}
.firstul .firstli label {
  display: inline-block;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  border: 1px solid #666;
  margin-left: 10px;
  vertical-align: middle;
}
.firstul .secondli i {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  background: url(../assets/img/cart/qicai.png) no-repeat;
  background-size: 100% 100%;
}
.firstul .secondli p {
  font-size: 14px;
  margin-left: 14px;
  color: #3d3d3d;
  display: inline-block;
}
.firstul .thirdli {
  float: right;
  font-size: 12px !important;
  color: #38f !important;
}
.secondul {
  position: relative;
  height: 90px;
  background-color: #fafafa;
  margin-bottom: 20px;
}
.secondul .firstli {
  width: 10%;
  height: 100%;
}
.secondul .firstli label {
  display: inline-block;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  border: 1px solid #666;
  margin-left: 10px;
  vertical-align: middle;
  margin-top: 30px;
}

.secondul .secondli {
  height: 100%;
  width: 28%;
  margin-right: 10px;
}
.secondul .secondli img {
  height: 100%;
  width: 100%;
}
.secondul .thirdli .firstp {
  padding-top: 8px;
}
.secondul .thirdli .changenum {
      color: #666;
      width: 120px;
      height: 30px;
      line-height: 30px;
       border: 1px solid #d9d9d9;
       border-radius: 6px;
       text-align: center;
       padding-top:0px;
}
.secondul .thirdli .changenum input{
  position: static!important;
  width: 33%;
  border: 0;
  display: inline-block!important;
  text-align: center;
}
.secondul .thirdli .changenum span{
  width: 33%;
  display: inline-block;
 box-sizing: border-box;
  background-color: #f8f8f8;
}
.secondul .thirdli .secondp {
  padding-top: 42px;
  color: #f60 !important;
}
.secondul .thirdli .num {
  color: #666;
  font-weight: 100;
  font-size: 12px;
  position: absolute;
  right: 8px;
  bottom: 6px;
}
.secondul #del{
  position: absolute;
  right:0;
  top:0;
  width:16%;
  height: 100%;
  border: 0;
    background-color: #ff4343;
    color: #fff;
    font-size: 12px;
}
.thirdul {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0;
}
.thirdul .firstli label {
  display: inline-block;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  border: 1px solid #666;
  margin-left: 10px;
  vertical-align: middle;
}
.thirdul .firstli p {
  display: inline-block;
  margin-left: 10px;
}

.thirdul .thirdli {
  width: 24%;
  float: right;
  text-align: center;
  color: rgb(153, 153, 153);
  background-color: #f1f1f1;
}
.thirdul .secondli {
  margin-right: 10px;
  float: right;
  text-align: center;
  color: rgb(153, 153, 153);
}
ul li {
  float: left;
}
ul li input {
  position: absolute;
  left: -200px;
  display: none;
}
.bg {
  width: 18px !important;
  height: 18px !important;
  background: url(../assets/img/cart/checked.png) no-repeat;
  background-size: 100% 100%;
  border: 0 !important;
}
.haveprice{
  color: rgb(255, 102, 0)!important;
}
.havenum{
      background-color: #FF4444!important;
   color: #fff!important;
}
</style>
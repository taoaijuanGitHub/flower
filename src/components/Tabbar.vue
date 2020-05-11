<template>
  <div class="tabberWarp">
    <div class="warp" v-if="ishide">
      <Item
        :txt="item.txt"
        :page="item.page"
        @change="getVal"
        v-for="(item,index) in tabbarDes"
        :sel="selected"
        :key="item.txt"
        @click.native="addclick(index)"
      >
        <img :src="item.normalImg" slot="normalImg" />
        <img :src="item.activeImg" slot="activeImg" />
      </Item>
    </div>
    <div class="msg" v-if="ishide==false">
      <div class="msg_header">
        <p>1399-英英</p>
        <div class="close" @click="addclose"><van-icon name="arrow-down" color="#fff" size="14"/>关闭</div>
      </div>
      <p class="more">加载更多历史消息</p>
      <div class="msg_footer">
        <div class="smail"></div>
        <div class="file"></div>
        <div class="upload"></div>
        <div class="nice"></div>
        <input type="text" placeholder="请输入">
        <p class="send">发送</p>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Item from "./Item.vue";
export default {
  components: {
    Item
  },
  data: function() {
    return {
      selected: "home",
      ishide:true,
      tabbarDes: [
        {
          txt: "首页",
          page: "home",
          normalImg: require("../assets/img/footer/home.png"),
          activeImg: require("../assets/img/footer/shome.png")
        },
        {
          txt: "分类",
          page: "classify",
          normalImg: require("../assets/img/footer/classify.png"),
          activeImg: require("../assets/img/footer/sclassify.png")
        },
        {
          txt: "消息",
          page: "home",
          normalImg: require("../assets/img/footer/message.png"),
          activeImg: require("../assets/img/footer/message.png")
        },
        {
          txt: "购物车",
          page: "cart",
          normalImg: require("../assets/img/footer/cart.png"),
          activeImg: require("../assets/img/footer/scart.png")
        },
        {
          txt: "个人",
          page: "mine",
          normalImg: require("../assets/img/footer/mine.png"),
          activeImg: require("../assets/img/footer/smine.png")
        }
      ]
    };
  },
  methods: {
    getVal: function(res) {
      this.selected = res;
      this.tabbarDes[2].page = this.selected;
    },
    addclick(index){
      if(index==2){
        this.ishide=!this.ishide;
         console.log(index)
      }
    },
    addclose(){
        this.ishide=true;
    }
  },
  created() {
    let arr = ["home", "classify", "cart", "mine"];
    if (arr.includes(this.$route.name)) {
      this.selected = this.$route.name;
    }
  }
};
</script>
<style type="text/css">
.tabberWarp {
  position: fixed;
  right: 0%;
  bottom: 0%;
  z-index: 1000;
}
.tabberWarp .warp {
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0;
}
.tabberWarp .warp img {
  width: 28px;
  height: 20px;
}
.tabberWarp img {
  width: 28px;
  margin-top: 6px;
  margin-bottom: 4px;
}
.tabberWarp {
  width: 100%;
  padding-bottom: 5px;
  background: #fafafa;
}
.msg{
  background: #fff;
  height:606px;
  width:100%;
  position: absolute;
  bottom: 0px;
  left:0;
}
.msg .msg_header{
  height:60px;
  line-height:60px;
  color: #fff;
  background: rgb(255, 102, 102);
  box-sizing:border-box;
  padding:0 10px;
  font-size: 14px; 
}
.msg .msg_header p{
  float: left;
}
.msg .msg_header div{
  float: right;
}
.msg .more{
  margin-top:10px; 
  margin-bottom:10px; 
  line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: rgb(119, 119, 119);
}
.msg  .msg_footer{
height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left:0;
    box-sizing: border-box;
    border-top: 1px solid rgb(237, 237, 237);
    box-sizing: border-box;
    padding:0 10px ;
}
.msg .msg_footer .smail,.file,.upload,.nice{
  width: 20px;
  height: 20px;
  float: left;
  margin-top:15px;
   margin-left:8px;
}
.msg .msg_footer .smail{
  background: url(../assets/img/footer/msg.png) -23px -1px / 44px no-repeat;
    background-position: -23px -1px;
      margin-left:4px;
}
.msg .msg_footer .file{
  background: url(../assets/img/footer/msg.png) -23px -23px / 44px no-repeat;
    background-position: -23px -23px;
}
.msg .msg_footer .upload{
  background: url(../assets/img/footer/msg.png) -23px -441px / 44px no-repeat;
    background-position: -23px -441px;
}
.msg .msg_footer .nice{
  background: url(../assets/img/footer/msg.png) -23px -45px / 44px no-repeat;
    background-position: -23px -45px;
}
.msg .msg_footer input {
margin: 16px 0 0 30px ;
border: 0;
}
.msg .msg_footer .send{
    font-size: 14px;
    float: right;
    cursor: pointer;
    text-align: center;
    opacity: 1;
    line-height:50px;
    color: rgb(255, 102, 102);
}
</style>

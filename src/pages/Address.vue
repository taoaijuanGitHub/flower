<template>
  <div class="warp">
    <div class="addresswrap">
      <Navbar>
        <div class="left" slot="left">
          <van-icon name="arrow-left" color="#fff" size="30" />
        </div>
        <div class="center" slot="center">常用联系人</div>
        <div class="right" slot="right">
          <van-icon name="ellipsis" color="#fff" size="30" />
        </div>
      </Navbar>
      <ul>
          <li class="allli clearfix" v-for="(item) in all" v-bind:key="item.id">
              <p class="firstp">{{item.username}}</p>
              <p class="secondp">{{item.phone}}</p>
              <p class="thirdp">{{item.address.replace(/,/g,"")+item.detail}}</p>
              <div class="checked"><i :class="{bg:item.comfire}" @click="checked(item.uid,item.id)"></i><span>默地址认</span></div>
              <div class="del" v-if="!item.comfire"><i></i><span>删除</span></div>
              <div class="edit"><i @click="edit(item)"></i><span>编辑</span></div>
          </li>
      </ul> 
      <button class="add" @click="toadd">+新建地址</button>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import axios from 'axios';
export default {
  inject:['reload'],
  data() {
    return {
      all: [],
      ischecked:true
    };
  },
  components: {
    Navbar
  },
  async created() {
      let self=this;
      this.$store.dispatch("getalladr");
    new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(self.$store.state.address.alladdress);
      }, 500);
    }).then(function(data) {
       data.forEach((item)=>{
            if(item.comfire){
                 item.comfire=true
            }else{
                item.comfire=false
            }
         })
         self.all =data
    });
  },
  methods: {
    toadd() {
      this.$router.push({ name: "addAddress" });
    },
    checked(uid,id){
      axios({
      method: 'patch',
      url: 'http://112.74.14.213:1912/address/change', // 虚拟路径
      data: {uid,id}
    }).then(res => {
      if(res.data.type){
        this.reload();
      }
    })
    },
    edit(item){
      this.$router.push({path: '/addAddress', query: {item}});
    }
  }
};
</script>
<style scoped>
body,
html {
  height: 100%;
}
.clearfix {
        overflow: auto;
        zoom: 1;
    }
.warp {
  width: 100%;
  height: 100%;
  background: #f0f2f5 !important;
}
.addresswrap {
  color: #fff;
  max-width: 640px;
  margin: 0 auto;
  /* position: fixed;
    top:0 */
}
.van-icon {
  margin-top: 8px;
}
.add {
  color: #fff;
  background-color: #dc1431;
  width: 90%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  margin: 0px auto;
  margin: 0 5%;
  margin-bottom: 5px;
  font-size: 16px;
  border: 0;
}
.allli{
    box-sizing: border-box;
    padding-left:10px;
    margin-bottom:10px;
    background:#FFF;
    line-height: 25px;
    font-size: 15px;
    color: #666;
}
.allli .firstp{
    float: left;
    padding-right:10px;
}
.allli .thirdp{
    padding-bottom:20px;
    border-bottom: 0.5px #e3e5e9 solid;
    margin-bottom: 2px;
}
.allli .checked{
  float: left;
}
.allli .checked i{
  display:inline-block;
  width:16px;
  height: 16px;
  border-radius: 50% 50%;
  border: 1px solid #666;
vertical-align: middle;
}
.allli .checked .bg{
  width:18px;
  height: 18px;
  background: url(../assets/img/address/check.png) no-repeat;
   background-size:100% 100%;
   border: none;
}
.allli .checked span{
   margin-left: 6px;
}
.allli .del{
  float: right;
  padding-right:14px;
}
.allli .del i{
  display:inline-block;
  width:16px;
  height: 16px;
  background: url(../assets/img/address/del.png) no-repeat;
   background-size:100% 100%;
   vertical-align:baseline;
   margin-right:6px; 
}
.allli .edit{
  float: right;
  padding-right:14px;
}
.allli .edit i{
    display:inline-block;
  width:16px;
  height: 16px;
  background: url(../assets/img/address/edit.png) no-repeat;
   background-size:100% 100%;
   vertical-align:baseline;
   margin-right:6px;
}
</style> 
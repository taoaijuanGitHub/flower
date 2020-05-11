<template>
    <div id="sculpturewrap">
        <div class="sculpture">
            <div class="picture">
                <img src="https://m.7hua.com/Tpl/default/Public/images/usercenter/usertouxiang.png" alt="">
                <p class="name">{{username}}</p>
            </div>
        </div>
        <div class="dill">
            <p>当前积分：<span>100</span></p>
            <p>虚拟货币：<span>0</span></p>
        </div>
        <div class="all clearfix">
            <a href="javascript:void(0);">
                <i class="iconfont">&#xe608;</i>
                <p>待付款</p>
            </a>
            <a href="javascript:void(0);">
                <i class="iconfont">&#xe66a;</i>
                <p>待收货</p>
            </a>
            <a href="javascript:void(0);">
                <i class="iconfont">&#xe6cc;</i>
                <p>已取消</p>
            </a>
            <a href="javascript:void(0);">
                <i class="iconfont">&#xe6a1;</i>
                <p>已完成</p>
            </a>
            <a href="javascript:void(0);">
                <i class="iconfont">&#xe62e;</i>
                <p>订单全部</p>
            </a>
        </div>
        <div class="line"></div>
        <ul class='uul'>
            <li class="uli"><i class="ui iconfont">&#xe609;</i><p class="up">我的优惠券 </p><i class="uii iconfont">&#xe63c;</i></li>
            <li class="uli"><i class="ui iconfont">&#xe614;</i><p class="up">虚拟货币</p><i class="uii iconfont">&#xe63c;</i></li>
            <li class="uli"><i class="ui iconfont">&#xe628;</i><p class="up">在线补交货款</p><i class="uii iconfont">&#xe63c;</i></li>
        </ul>
         <div class="line"></div>
        <ul class='uul'>
            <li class="uli"><i class="ui iconfont">&#xe61d;</i><p class="up">修改个人信息</p><i class="uii iconfont">&#xe63c;</i></li>
            <li class="uli" @click="toadd"><i class="ui iconfont">&#xe666;</i><p class="up">收货人地址管理</p><i class="uii iconfont">&#xe63c;</i></li>
            <li class="uli"><i class="ui iconfont">&#xe635;</i><p class="up">修改密码</p><i class="uii iconfont">&#xe63c;</i></li>
        </ul>
        <div class="line"></div>
        <ul class='uul'>
            <li class="uli"><i class="ui iconfont">&#xe63d;</i><p>联系客服</p><i class="uii iconfont">&#xe63c;</i></li>
        </ul>
        <button class="loginout">安全退出</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:"",
        }
    },
    created(){
         let username = JSON.parse(localStorage.getItem("usermsg")).username;
         this.username=username;
    },
     methods:{
        toadd(){
            this.$router.push({name:'address'})
        }
    }
}
</script>
<style scoped>
@import "../assets/font_ljh5s5eok5i/iconfont.css";
.clearfix {
    overflow: auto;
    zoom: 1;
}
#sculpturewrap{
     font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-size: 20px;
    max-width: 640px;
    margin: 0 auto;
}
.sculpture{
    box-sizing: border-box;
    padding: 36px 15px;
}
.sculpture .picture{
 width: 100%;
height:68px;
}
.sculpture .picture img{
     float: left;
 width:68px;
height:100%;
}
.sculpture .picture .name{
    padding-left:20px;
    float: left;
 line-height:68px;   
}
.dill{
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
}
.dill p{
    width: 50%;
    float: left;
}
.dill p span{
    color: #f60; 
}
.all a{
    text-align: center;
    width: 20%;
    float: left;
    font-size: 14px;
    color: #666;
    padding-top:20px;
    padding-bottom: 10px;
}
.all a i{
    font-size: 28px;
}
.all a p{
     padding-top: 10px;
}
.line{
    width: 100%;
    height:10px;
    background: #f5f5f5;
}
.uul .uli{
    width: 100%;
    box-sizing: border-box;
    height:54px;
    line-height: 54px;
    padding: 0 20px;
    border-bottom: 1px solid #f5f5f5;
}
.uul .uli .ui{
    float: left;
     font-size: 16px;
     padding-right:10px;
}
.uul .uli p{
   float: left;
   color: #666;
    font-size: 16px;
}
.uul .uli .uii{
     float: right;
     font-size: 16px;
}
.loginout{
        width: 90%;
    max-width: 640px;
    margin: 0px auto;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #F00;
    font-size: 16px;
    border: 1px #FF0000 solid;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #FFF;
    margin: 0 auto;
    margin:20px 5%;
}
</style>
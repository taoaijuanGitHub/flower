<template>
   <!-- <div v-show="current=='first'">
                <div class="phone">
                    <input type="text" maxlength="4" placeholder="请输入手机号码" />
                </div>    
        </div> -->
        <div class="second">
            <!-- 获取图片验证码 -->
            <div class="pictrue">
                <input type="text" maxlength="4" placeholder="请输入图片验证码" />
                <div id="v_reg"></div>
            </div>
            <div class="phonebox clearfix">
                <!-- 获取短信 -->
            <div class="phone">
                <input type="text" maxlength="4" placeholder="请输入手机号码" />
            </div>
            <button class="getmsg">获取短信验证码</button>
            </div>
            <!-- 短息验证 -->
            <div class="msgreg">
                <input type="text" maxlength="4" placeholder="请输入短信验证码" />
            </div>
            <van-checkbox v-model="checked" checked-color="#FE6C6C">一个月内免登录</van-checkbox>
            <button class="fbutton">登录</button>
        </div> 
</template>
<script>
import GVerify from "../../assets/js/gVerify.js";
export default {
   mounted: function() {
        if(document.getElementById("v_reg")){
            var verifyCode = new GVerify("v_reg");
        }
  }
};
</script>
<style scoped>
.loginwarp .second .pictrue {
    width: 100%;
    height: 44px;
    line-height: 42px;
    margin-top: .133333rem;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
}
.loginwarp .second .pictrue #v_reg {
   width:100px;
    height: 44px;
    float: right;
}
.loginwarp .second .pictrue #v_reg canvas {
    width: 100%
}
.loginwarp .second .phonebox {
    width: 100%;
    margin: 10px 0;
}

.loginwarp .second .phonebox .phone {
    width: 60%;
    height: 44px;
    line-height: 42px;
    padding: 0;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
    float: left;
}

.loginwarp .second .getmsg {
    box-shadow: none;
    border: 1px solid #e2e2e2;
    background: #e2e2e2;
    cursor: default;
    color: #bdbdbd;
    float: right;
    width: 35%;
    height: 42px;
    border-radius: 3px;
    line-height: 44px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
}

.loginwarp .second .msgreg {
    width: 100%;
    height: 44px;
    line-height: 42px;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
}
.loginwarp input {
    padding-left: .266667rem !important;
    border: 0;
    outline: none;
}

.loginwarp input::-webkit-input-placeholder {
    color: #d7d7d7;
}
.van-checkbox{
  margin: 10px 0;
}
.fbutton{
   margin-top: 10px ;
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
</style>
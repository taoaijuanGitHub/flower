<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
      <van-swipe-item v-for="(image, index) in swipe" :key="index">
        <img :src="image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="detail">
      <div class="m-detailInfo">
        <div class="info">
          <p class="infoName" v-html="data.name"></p>
          <p class="infoDesc" v-html="data.explain"></p>
          <p class="infoPrice">
            <span class="sp1">￥</span
            ><span class="sp2" v-html="data.price"></span>
          </p>
        </div>
        <div class="comment">
          <h4 v-html="data.evaluate"></h4>
          <p>用户评价</p>
          <div class="more">查看</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="chicunDiv">
        <span>请选择规格</span>
        <div class="flower_guige">
          <ul>
            <li v-for="(item, index) in size" :key="index" v-html="item"></li>
          </ul>
        </div>
      </div>
      <div class="gwDiv">
        <div class="shopping" @click="test">加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
      <div class="infoDiv">
        <div class="titleInfo">商品参数</div>
        <ul>
          <li v-html="data.cl"></li>
          <li v-html="data.hy"></li>
        </ul>
      </div>
      <div class="infoImg">
        <img
          :src="image"
          alt=""
          v-for="(image, index) in detail"
          :key="index"
        />
      </div>
      <div class="title_info">
        <li>
          <img
            src="https://m.7hua.com/Tpl/default/Public/images/home_pay.png"
            alt=""
          />
          <span>订单查询</span>
        </li>
        <li>
          <img src="../assets/img/home/touch2.jpg" alt="" />
          <span>400-658-1777</span>
        </li>

        <li>
          <img src="../assets/img/home/touch3.jpg" alt="" />
          <span>在线咨询</span>
        </li>
        <li>
          <img src="../assets/img/home/touch4.jpg" alt="" />
          <span>13864241717</span>
        </li>
      </div>
      <div class="line"></div>
      <div
        style="color:#333; text-align:center; line-height:0.6rem; font-size:0.6rem"
      >
        常见问题
      </div>
      <div class="textDiv" :style="{ height: [isOk ? 5.66 + 'rem' : '100%'] }">
        <div class="textItem">
          <h3 class="aboutTitle">关于付款方式</h3>
          <div class="aboutInfo">
            支持微信、支付宝、信用卡，网银等多种线上支付方式。您也可以选择ATM机或者银行柜台办理存款业务。
          </div>
        </div>
        <div class="textItem">
          <h3 class="aboutTitle">关于配送范围</h3>
          <div class="con">1．送货上门</div>
          <div class="aboutInfo">
            我们目前拥有近万家合作配送店，覆盖全国。订单提交后，我们会安排专人配送，100%送货上门，在订单送达后我们会第一时间短信通知客户
          </div>
          <div class="con">2．门店自取</div>
          <div>
            在您填写订单时，会出现“给卖家留言”一栏，您填写到店自取，提交订单后会有工作人员通知您最近的取货配送店地址
          </div>
          <div class="cont">
            <p>具体联系我们客服：</p>
            <p>客服热线：400-658-1777</p>
            <p>客服QQ/微信号：139 010 788</p>
          </div>
        </div>
        <div class="textItem">
          <h3 class="aboutTitle">关于配送时效</h3>
          <div class="con">
            1．本地配送，高效快速。下单时，可自助勾选配送时段，我们会根据您填写的配送时间段进行配送
          </div>
          <div class="con">2．支持定时配送。</div>
          <div class="cont">1. 平日收费标准</div>
          <div class="cont">
            定时费加收25元，配送时间受交通或恶劣天气等不定因素的影响，存在前后半小时左右浮动时间差。
          </div>
          <div class="cont">2. 节日收费标准</div>

          <div class="aboutInfo">
            由于节日期间花材紧缺，订单量大，配送压力大。定时费加收120元，安排专人为您服务，配送时间受交通或恶劣天气等不定因素的影响。存在前后半小时左右浮动时间差。
          </div>
        </div>
        <div class="textItem">
          <h3 class="aboutTitle">关于售后</h3>
          <div class="aboutInfo">
            <p>
              我们秉承将心比心，客户至上。全程售后，无忧服务的宗旨，真诚为您服务
            </p>
            <p>售后工作时间08:00--21:00</p>
          </div>
        </div>
        <div class="textItem">
          <h3 class="aboutTitle">关于如何取消订单</h3>
          <div class="aboutInfo">
            <p>
              对于您取消订单的需求，首先建议您保留订单，再次需要时，联系七彩客服400-658-1777再次预约配送时间即可。
            </p>
            <p>如果您一定要取消订单，请先阅读以下相关内容：</p>
            <p>
              对于您取消订单的需求，首先建议您保留订单，再次需要时，联系七彩客服400-658-1777再次预约配送时间即可。
            </p>
            <p>
              1.
              蛋糕属于个性化定制类食品，一经签收不接受除质量问题外任何理由的取消及退款要求。
            </p>
            <p>2. 距离预约配送时间 24小时的订单，我司接受取消及退款要求。</p>
            <p>
              3. 距离预约配送时间
              24小时的订单，如未安排，我司接受取消及退款要求。
            </p>
            <p>
              4. 距离预约配送时间
              24小时的订单，如已安排未制作，我司会收取订单金额的30%作为订单配货损失，其余70%损失由我司承担。
            </p>
            <p>
              温馨提示：由于节日期间花材紧缺，预订费用高，订单付款后会立即安排到配送部开始预订鲜花，因此付款后安排到配送部的订单不能修改、不能取消，
              如需取消需扣除鲜花预订的成本费用订单金额的70%。所以请广大客户提交订单后认真审核，确认无误后尽快完成付款，以免鲜花价格持续上浮给您带来的不便。
            </p>
          </div>
        </div>
        <div class="textItem">
          <h3 class="aboutTitle">关于退换货</h3>
          <div class="aboutInfo">
            由于商品多为个性化定制食品类或个性化手工定制艺品。为了保护消费者的权益，凡是出售的产品除明确质量问题均不接受退换货，敬请谅解。
          </div>
        </div>
      </div>
      <div class="tbox"></div>
      <div
        class="loadMore"
        @click="loadMore"
        v-html="isOk ? '点击查看' : '点击收起'"
        :style="isOk ? styleObject : ''"
      ></div>
      <div class="bot_line"></div>
      <div class="bot"></div>

      <div class="xfDiv">
        <a href="#" class="wx"></a>
        <a href="#" class="kf"></a>
        <span class="go-top" v-if="btnFlag" @click="backTop"></span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {
        // [Swipe.name]: Swipe,
        // [SwipeItem.name]: SwipeItem,
        // [Toast.name]: Toast   
    },
  data() {
    return {
      btnFlag: false,
      data: {},
      swipe: [],
      detail: [],
      size: [],
      isOk: true,
      styleObject: {
        background:
          "url(https://m.7hua.com/Tpl/default/Public/images/xiajiantou.png) 1.98rem center / 0.6rem no-repeat"
      }
    };
  },
  methods: {
    test() {
      this.$toast("已加入购物车");
    },
    loadMore() {
      this.isOk = !this.isOk;
    },
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    scrollToTop() {
      console.log(111);
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      that.scrollTop = scrollTop;
      if (that.scrollTop > 300) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },

  async created() {
    let newid = this.$route.query.id;
    let newname = this.$route.query.dbname;
    // console.log(newid, newname);

    let { data } = await axios.get("http://112.74.14.213:1912/goods/detail", {
      params: {
        id: newid,
        dbname: newname
      }
    });
    this.data = data[0];
    console.log(this.data);
    this.swipe = this.data.banner.split(",");
    this.size = this.data.size.split(",");
    this.detail = this.data.detail.split(",");
    // console.log(this.detail);
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>
<style scoped>
.swipe img {
  width: 100%;
  height: 8rem;
  display: block;
}
.detail .m-detailInfo {
  display: flex;
  padding: 0.066667rem;
}
.detail .info {
  width: 70%;
}
.detail .info .infoName {
  font-size: 0.5rem;
  margin-bottom: 0.15rem;
  line-height: 0.7rem;
}
.detail .info .infoDesc {
  font-size: 0.44rem;
  line-height: 0.4rem;
  color: #7f7f7f;
  margin-bottom: 0.2rem;
}
.detail .info .infoPrice {
  height: 0.8rem;
}
.detail .info .infoPrice span {
  color: #b4282d;
  font-size: 0.5rem;
}
.detail .comment {
  width: 30%;
  text-align: center;
  border-left: 1px #b1b1b1 dashed;
}
.detail .comment h4 {
  font-size: 0.5rem;
  line-height: 0.5rem;
  margin-bottom: 0.15rem;
  color: #b4282d;
  text-align: center;
}
.detail .comment p {
  color: #b4282d;
  /* line-height: 1; */
  font-size: 0.35rem;
  margin-bottom: 0.2rem;
}
.detail .comment .more {
  border: 1px solid #7f7f7f;
  border-radius: 2px;
  text-align: center;
  font-size: 0.4rem;
  padding: 0.013333rem 0.066667rem;
  width: 50%;
  margin: 0 auto;
}
.detail .line {
  height: 0.2rem;
  background: #f4f4f4;
  width: 100%;
  margin-bottom: 0.133333rem;
}
.chicunDiv {
  padding: 0 0.266667rem;
  margin-bottom: 0.2rem;
}
.chicunDiv span {
  font-size: 0.5rem;
  line-height: 30px;
  color: #333;
}
.chicunDiv .flower_guige ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px auto;
  clear: both;
  flex-wrap: wrap;
  padding: 0 0 0 0.5rem;
}
.chicunDiv .flower_guige ul li {
  border: 1px #888 solid;
  margin-top: 8px;
  border-radius: 2px;
  font-size: 0.3888rem;
  padding: 0.066667rem 0.153333rem;
  margin-right: 0.099667rem;
  width: 25%;
  text-align: center;
}
.chicunDiv .flower_guige ul li:last-child {
  width: 50%;
}
.gwDiv {
  overflow: hidden;
  padding: 0 0.266667rem;
  margin-bottom: 0.2rem;
}
.gwDiv .shopping {
  float: left;
  width: 48%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  background-color: #ff9500;
}
.gwDiv .buy {
  float: right;
  width: 48%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  background-color: #f15352;
}
.infoDiv .titleInfo {
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.4rem;
  color: #333;
  border-bottom: 1px #eee dashed;
}
.infoDiv li {
  line-height: 1rem;
  border-bottom: 1px #eee dashed;
  display: block;
  float: left;
  width: 100%;
}
.infoImg img {
  width: 100%;
  margin-bottom: 0.133333rem;
}
.detail .infoImg {
  padding: 0.2rem;
}
.detail .title_info {
  height: 2rem;
}
.detail .title_info li {
  list-style: none;
  width: 45%;
  float: left;
  background-color: #66cc66;
  color: #fff;
  margin-left: 0.266667rem;
  margin-bottom: 0.266667rem;
  overflow: hidden;
}
.detail .title_info img {
  width: 23px;
  height: 23px;
  margin-top: 7px;
  margin-left: 6px;
  vertical-align: bottom;
}
.detail .title_info span {
  font-size: 0.4rem;
  line-height: 0.666667rem;
  margin-left: 0.533333rem;
}
.detail .title_info li:nth-child(2) {
  background: #dc4f45;
}
.detail .title_info li:nth-child(3) {
  background: #ff6666;
}
.detail .title_info li:nth-child(4) {
  background: #01a0e9;
}
.textDiv {
  height: 5.666667rem;
  overflow: hidden;
  padding: 0 0.2rem;
}
.textDiv .aboutTitle {
  padding: 5px 10px;
  width: 100%;
  font-size: 0.4rem;
  position: relative;
}
.textDiv .aboutTitle::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  background: #b4282d;
  border-radius: 100%;
  left: 0;
  top: 14px;
}
.textDiv .aboutInfo {
  padding: 5px 10px;
  font-size: 0.38rem;
  color: #7f7f7f;
}
.textDiv .con {
  font-size: 0.35rem;
  padding: 5px 10px;
}
.textDiv p {
  font-size: 0.3rem;
  color: #7f7f7f;
  padding: 5px 10px;
}
.detail .loadMore {
  width: 2.5333333rem;
  margin: 0px auto;
  text-align: center;
  line-height: 0.666667rem;
  color: #666;
  margin-top: 10px;
  font-size: 0.4rem;
  margin-bottom: 0.4rem;
  background: url(https://m.7hua.com/Tpl/default/Public/images/shangjiantou.png)
    1.98rem center / 0.6rem no-repeat;
}
.tbox {
  height: 0.666667rem;
  margin-top: -0.2rem;
  background: #fff;
  opacity: 0.8;
}
.bot_line {
  background: #f4f4f4;
  height: 0.4rem;
}
.bot {
  margin-bottom: 1.333333rem;
}
.xfDiv {
  width: 0.666667rem;
  position: fixed;
  bottom: 1.566667rem;
  right: 0.3888rem;
  z-index: 100000;
}
.xfDiv .wx {
  background: url(https://m.7hua.com/Tpl/default/Public/images/xf_wx.png)
    no-repeat;
  background-size: 0.933333rem;
  display: block;
  width: 0.933333rem;
  height: 0.933333rem;
}
.xfDiv .kf {
  background: url(https://m.7hua.com/Tpl/default/Public/images/xf_kf.png)
    no-repeat;
  background-size: 0.933333rem;
  display: block;
  width: 0.933333rem;
  height: 0.933333rem;
}
.xfDiv .go-top {
  display: block;
  background: url(https://m.7hua.com/Tpl/default/Public/images/scroll-to-top-icon.png)
    no-repeat;
  background-size: 0.933333rem;
  /* display: none; */
  width: 0.933333rem;
  height: 0.933333rem;
}
</style>

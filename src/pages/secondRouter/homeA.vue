<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/img/home/banner1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/home/banner2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/home/banner3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/home/banner4.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="hotkey">
      <li>七彩鲜花官网</li>
      <li>品牌鲜花定制</li>
      <li>最快1小时送达</li>
    </div>
    <div class="table">
      <van-grid :border="false" :column-num="4">
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/1.png"
          text="爱情鲜花"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/3.png"
          text="高档礼盒"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/2.png"
          text="生日鲜花"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/4.png"
          text="商务用花"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/5.png"
          text="爱情花篮"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/6.png"
          text="企业花篮"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/7.png"
          text="生日花篮"
        />
        <van-grid-item
          icon="https://m.7hua.com/Tpl/default/Public/images/ico/8.png"
          text="更多"
        />
      </van-grid>
    </div>

    <div class="title">
      <li>
        <img
          src="https://m.7hua.com/Tpl/default/Public/images/home_pay.png"
          alt=""
        />
        <span>订单查询</span>
      </li>
      <li>
        <img src="../../assets/img/home/touch2.jpg" alt="" />
        <span>400-658-1777</span>
      </li>

      <li>
        <img src="../../assets/img/home/touch3.jpg" alt="" />
        <span>在线咨询</span>
      </li>
      <li>
        <img src="../../assets/img/home/touch4.jpg" alt="" />
        <span>13864241717</span>
      </li>
    </div>
    <div class="goods_list">
      <div class="goods_item" v-for="(item, index) in data" :key="index">
        <h3 v-html="item.theme"></h3>
        <div>
          <ul>
            <li
              v-for="(ele, val) in item.goods"
              :key="val"
              @click="toDetail(ele.des, ele.id)"
            >
              <div>
                <img :src="ele.src" alt="" />
              </div>
              <p class="protitle" v-html="ele.explain"></p>
              <span
                :class="
                  ele.tag == '爆款' || ele.tag == '推荐' ? 'red' : 'green'
                "
                v-html="ele.tag"
              ></span>
              <h4 class="proname" v-html="ele.name"></h4>
              <h5 class="proprice">￥{{ ele.price }}</h5>
            </li>
          </ul>
        </div>
        <div class="more_flower">
          <span class="p1">更多</span
          ><span class="p2" v-html="item.theme"></span>
        </div>
        <div class="one_line"></div>
      </div>
    </div>
    <div class="xfDiv">
      <a href="#" class="wx"></a>
      <a href="#" class="kf"></a>
      <span class="go-top" v-if="btnFlag" @click="backTop"></span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      btnFlag: false
    };
  },

  methods: {
    async getdata() {
      let { data } = await axios.get("http://112.74.14.213:1912/goods/home");
      this.data = data;
      // console.log(data);
    },
    backTop() {
      // console.log(666);
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
    toDetail(ele, index) {
      this.isrouter = "/detail";
      //  this.$router.push(`/detail/${1}`);

      this.$router.push({
        path: this.isrouter,
        query: { id: index, dbname: ele }
      });
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      // console.log(111);
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
  created() {
    this.getdata();
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
* {
  list-style: none;
  margin: 0%;
  padding: 0%;
}
a {
  width: 1.333333rem;
}
.banner {
  height: 4.546667rem;
}
.banner .van-swipe .van-swipe__track{
   width: 100%!important;
  height: 100%!important;
}
.banner .van-swipe-item >>> img {
  width: 100%;
  height: 100%;
}
.hotkey {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 2rem;
  height: 0.426667rem;
  align-items: center;
  width: 98%;
  margin: 0px auto;
  /* max-width: 640px; */
  clear: both;
}
.hotkey li {
  width: 33.33%;
  padding: 0px 5px;
  background: url(https://m.7hua.com/Tpl/default/Public/images/ico/ok_ico.png)
    no-repeat 5px center;
  background-size: 15px;
  color: #333;
  font-size: 0.293333rem;
  padding-left: 28px;
}
.title {
  height: 2rem;
}
.title li {
  width: 45%;
  float: left;
  background-color: #66cc66;
  color: #fff;
  margin-left: 0.266667rem;
  margin-bottom: 0.266667rem;
  overflow: hidden;
}
.title img {
  width: 23px;
  height: 23px;
  margin-top: 7px;
  margin-left: 6px;
  vertical-align: bottom;
}
.title span {
  font-size: 0.4rem;
  line-height: 0.666667rem;
  margin-left: 0.533333rem;
}
.title li:nth-child(2) {
  background: #dc4f45;
}
.title li:nth-child(3) {
  background: #ff6666;
}
.title li:nth-child(4) {
  background: #01a0e9;
}
.goods_item {
  margin: 0.866667rem;
}

.goods_item h3 {
  /* line-height: 1.6rem; */
  text-align: center;
  font-size: 0.5rem;
  color: #333;
  font-weight: 600;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.goods_item h3::before {
  content: " ";
  padding: 10px;
  background: url(../../assets/img/home/title.gif) no-repeat center center;
  background-size: 14px;
  margin: 10px;
}
.goods_item h3::after {
  content: " ";
  padding: 10px;
  background: url(../../assets/img/home/title.gif) no-repeat center center;
  background-size: 14px;
  margin: 10px;
}
.goods_item ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods_item li {
  width: 49%;
  margin-bottom: 0.133333rem;
  position: relative;
}
.goods_item li img {
  width: 100%;
}
.goods_item li .protitle {
  color: #9f8a60;
  background: #f1ece2;
  padding: 0.266667rem 0.2rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.goods_item li .proname {
  font-size: 0.4rem;
}
.goods_item li .proprice {
  font-size: 0.4rem;
  color: #f0282d;
}

.goods_item li span {
  color: #fff;
  text-align: center;
  position: absolute;
  z-index: 1;
  margin-top: 0;
  line-height: 1rem;
  font-size: 0.3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  right: 0;
  top: 0;
  padding: 0;
}
.goods_item li .red {
  background: #f0282d;
}

.goods_item li .green {
  background: #2cb436;
}
.more_flower {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  display: block;
  border-top: 1px #f1f1f1 solid;
  color: #333;
  font-size: 0.533333rem;
  line-height: 1.066667rem;
  text-align: center;
  margin-bottom: 0.133333rem;
}
.more_flower .p1::before {
  content: ">>";
}
.more_flower .p2::after {
  content: "<<";
}
.goods_item .one_line {
  height: 0.2rem;
  background: #f4f4f4;
  margin: 0.133333rem auto;
  width: 100%;
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

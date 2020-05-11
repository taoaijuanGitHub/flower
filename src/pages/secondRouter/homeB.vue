<template>
  <div>
    <div class="goods_item">
      <h3>{{ this.$route.query.theme }}</h3>
      <div>
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <div>
              <img :src="item.src" alt="" />
            </div>
            <p class="protitle" v-html="item.explain"></p>
            <span
              :class="
                item.tag == '爆款' || item.tag == '推荐' ? 'red' : 'green'
              "
              v-html="item.tag"
            ></span>
            <h4 class="proname" v-html="item.name"></h4>
            <h5 class="proprice">￥{{ item.price }}</h5>
          </li>
        </ul>
      </div>

      <div class="one_line"></div>
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
  data() {
    return {
      data: {},
      btnFlag: false
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
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
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      that.scrollTop = scrollTop;
      if (that.scrollTop > 500) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  async created() {
    let { data } = await axios.get("http://112.74.14.213:1912/goods/everyone", {
      params: {
        theme: this.$route.query.theme
      }
    });
    this.data = data;
  }
};
</script>

<style scoped>
.goods_item {
  margin: 0.133333rem;
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
.go-top {
  display: block;
  background: url(https://m.7hua.com/Tpl/default/Public/images/scroll-to-top-icon.png)
    no-repeat;
  background-size: 0.933333rem;

  width: 0.933333rem;
  height: 0.933333rem;
}
</style>

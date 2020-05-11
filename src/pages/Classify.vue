<template>
  <div class="list">
    <div class="left">
      <li :class="isActive == '鲜花' ? 'active' : ''" @click="change">鲜花</li>
      <li :class="isActive == '花篮' ? 'active' : ''" @click="change">花篮</li>
      <li @click="toPath2">卡通花束</li>
      <li @click="toPath3">果篮</li>
    </div>
    <div class="right" v-show="isActive == '鲜花'">
      <div class="top_img">
        <img src="https://img.7hua.com/imgbanner/new_class_Flower.jpg" alt="" />
      </div>
      <div v-for="(item, index) in data" :key="index">
        <div class="top_title" v-html="item.theme"></div>
        <div class="right_list">
          <li
            v-for="(ele, val) in item.goods"
            :key="val"
            @click="toHome(ele.content)"
          >
            <img :src="ele.src" alt="" />
            <p class="item_name" v-html="ele.content"></p>
          </li>
        </div>
      </div>
    </div>
    <div class="right" v-show="isActive == '花篮'">
      <div class="top_title">按用途</div>
      <div>
        <div class="right_list">
          <li>
            <img
              src="https://img.7hua.com/imgbanner/ico_new_class_CommFlower_yt_1.jpg"
              alt=""
            />
            <p class="item_name">商业花篮</p>
          </li>
          <li>
            <img
              src="https://img.7hua.com/imgbanner/ico_new_class_CommFlower_yt_2.jpg"
              alt=""
            />
            <p class="item_name">会议桌花</p>
          </li>
          <li>
            <img
              src="https://img.7hua.com/imgbanner/ico_new_class_CommFlower_yt_3.jpg"
              alt=""
            />
            <p class="item_name">盆栽绿植</p>
          </li>
          <li>
            <img
              src="https://img.7hua.com/imgbanner/ico_new_class_CommFlower_yt_4.jpg"
              alt=""
            />
            <p class="item_name">盆栽鲜花</p>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: "鲜花",
      data: [
        {
          theme: "按用途",
          goods: [
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_yt_2.jpg",
              content: "爱情鲜花"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_yt_1.jpg",
              content: "生日鲜花"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_yt_3.jpg",
              content: "祝福鲜花"
            }
          ]
        },

        {
          theme: "按对象",
          goods: [
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_dx_4.jpg",
              content: "送母亲"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_dx_3.jpg",
              content: "送朋友"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_dx_7.jpg",
              content: "送老师"
            }
          ]
        },
        {
          theme: "按花材",
          goods: [
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_hc_1.jpg",
              content: "玫瑰"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_hc_2.jpg",
              content: "百合"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_hc_3.jpg",
              content: "康乃馨"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_hc_5.jpg",
              content: "向日葵"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_hc_8.jpg",
              content: "扶郎"
            },
            {
              src:
                "https://img.7hua.com/imgbanner/ico_new_class_Flower_hc_6.jpg",
              content: "满天星"
            }
          ]
        },
        {
          theme: "按枝数",
          goods: [
            {
              src: "",
              content: "9枝"
            },
            {
              src: "",
              content: "11枝"
            },
            {
              src: "",
              content: "19枝"
            },
            {
              src: "",
              content: "21枝"
            },
            {
              src: "",
              content: "29枝"
            },
            {
              src: "",
              content: "33枝"
            },
            {
              src: "",
              content: "66枝"
            },
            {
              src: "",
              content: "99枝"
            },
            {
              src: "",
              content: "999枝"
            }
          ]
        }
      ]
    };
  },
  methods: {
    change(e) {
      //   console.log(e.target.innerText);
      this.isActive = e.target.innerText;
    },
    toPath2() {
      this.isrouter = "/Classify2";
      this.$router.push({ path: this.isrouter });
    },
    toPath3() {
      this.isrouter = "/Classify3";
      this.$router.push({ path: this.isrouter });
    },
    toHome(theme) {
    //   this.$router.push({ path: "./home/b", query: { theme } });
       this.$router.push({
          path: "/home/b",
          query: { theme }
        });
      console.log(theme);
    }
  }
};
</script>
<style scoped>
.list {
  display: flex;
  height: 100%;
}
.left {
  width: 20%;
  /* height: 85%; */
  border-right: 1px solid #eee;
}
.right {
  width: 80%;
  padding: 15px 4%;
  height: 87%;
  overflow: auto;
}
.left li {
  list-style: none;
  height: 1.066667rem;
  font-size: 0.426667rem;
  margin-top: 0.533333rem;
  line-height: 0.933333rem;
  text-align: center;
}
.left .active {
  border-left: 3px solid #e12f32;
  color: #e12f32;
}
.right .top_img img {
  width: 100%;
}
.right .right_list {
  padding-bottom: 0.333333rem;
  overflow: hidden;
}
.right .right_list li {
  float: left;
  width: 32%;
  list-style: none;
  margin-bottom: 0.2rem;
  padding: 0.233333rem 0;
}
.right .right_list li img {
  width: 100%;
  display: block;
}
.right .top_title {
  height: 0.7rem;
  text-align: center;
  margin-bottom: 0.266667rem;
  font-size: 0.533333rem;
  color: #3d3d3d;
  position: relative;
}
.right .top_title::before {
  content: "";
  border-bottom: 1px solid #d9d9d9;
  padding: 0 20px;
  top: 10px;
  position: absolute;
  left: 18%;
}
.right .top_title::after {
  content: "";
  border-bottom: 1px solid #d9d9d9;
  padding: 0 20px;
  top: 10px;
  position: absolute;
  right: 18%;
}
.right .item_name {
  font-size: 0.4rem;
  text-align: center;
}
</style>

<template>
  <div>
    <van-tabs @click="onClick"  v-model="active">
      <van-tab v-for="(item, index) in title" :title="item" :key="index">
        <router-view />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      isrouter: "/home/a",
      title: [
        "热门推荐",
        "爱情鲜花",
        "生日鲜花",
        "送母亲",
        "送朋友",
        "送老师",
        "祝福鲜花",
        "商业花篮",
        "盆栽绿植"
      ]
    };
  },
  methods: {
    onClick(index, theme) {
      if (index != 0) {
        this.isrouter = "/home/b";
        this.$router.push({
          path: this.isrouter,
          query: { theme }
        });
      } else {
        this.isrouter = "/home/a";
        this.$router.push({ path: this.isrouter });
      }
    }
  },
  created() {
   if(this.$route.query.theme){
       let index=this.title.findIndex(x => x ==this.$route.query.theme);
      if(index==-1){
        index=0;
        this.active=index;
      }else{
       this.active=index;
      }
    }
    if(window.location.hash!='#/home'){
      this.$router.push({path:window.location.hash.slice(1)});
    }else{
      this.$router.push({path:'/home/a'});
    }
  },

  }

</script>
<style scoped>
.van-tab {
  font-size: 0.333333rem !important;
}
</style>

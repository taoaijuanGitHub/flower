<template>
  <div id="app">
    <div class="wrap">
      <Header v-show="ishide"></Header>
      <div class="main">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
      <Tabbar v-if="ishidedwon"></Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
import Header from "./components/Header";
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      ishide: true,
      ishidedwon: true,
      path: ""
    };
  },
  created() {
    if (this.$route.name == "address") {
      this.ishide = false;
    }
    if (this.$route.name == "cart") {
      this.ishidedwon = false;
    }
  },
  components: {
    Tabbar,
    Header
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  },
  watch: {
    deep: true,
    $route: function(newval, oldval) {
      if (newval.name == "address") {
        this.ishide = false;
      }
      if (newval.path == "/login/a") {
        this.path = oldval.path;
      }
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  /* max-width: 640px; */
  /* margin: 0 auto; */
  height: 100%;
  width: 100%;
}
#app .wrap {
  height: 100%;
  /* display: flex;
  flex-direction: column; */
}
#app .wrap header {
  position: fixed;
  top: 0;
  right: 0%;
  width: 100%;
  height: 46px;
  background: greenyellow;
}
#app .wrap .main {
  padding: 46px 0px 50px 0px;
  height: 100%;
}
</style>

import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';

// import { Button,Toast,Swipe, SwipeItem,Tab, Tabs,Grid, GridItem,Search,Switch,Checkbox, CheckboxGroup } from 'vant';
// Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Grid).use(GridItem).use(Toast).use(Button).use(Search).use(Switch).use(Checkbox).use(CheckboxGroup)
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import router from './router';
import store from './store'
import './assets/js/rem.js';
import axios from "axios";

import ElementUI from 'element-ui';//饿了么UI
// import 'element-ui/lib/theme-chalk/index.css';//可以不引入，自己写样式
import VueAreaLinkage from 'vue-area-linkage';//省市区三级联动选择器
import'vue-area-linkage/dist/index.css'

Vue.use(ElementUI);
Vue.use(VueAreaLinkage)
Vue.use(Router);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

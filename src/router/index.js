import Vue from "vue";
// 1. 引入VueRouter
import VueRouter from "vue-router";
// import Home from "../pages/Home.vue";
import Classify from "../pages/Classify.vue";
import Cart from "../pages/Cart.vue";
import Mine from "../pages/Mine.vue";
import Login from "../pages/Login.vue";
import Reg from "../pages/Reg.vue";
import NotFound from "../pages/NotFound.vue";
import Detail from "../pages/Detail.vue";
import Classify2 from "../pages/classify2.vue";
import Classify3 from "../pages/classify3.vue";
import Address from "../pages/Address.vue";
import Addaddress from "../pages/Addaddress.vue";
// 2. 使用（安装）vue-router
Vue.use(VueRouter);
// 3. 实例化VueRouter并配置参数
const router = new VueRouter({
    routes: [{
            name: 'home',
            path: '/home',
            component: resolve => require(['../pages/Home.vue'], resolve),
            children: [{
                    path: 'a',
                    component: resolve => require(['../pages/secondRouter/homeA.vue'], resolve),
                },
                {
                    path: 'b',
                    name: 'homeb',
                    component: resolve => require(['../pages/secondRouter/homeB.vue'], resolve),
                }
            ]
        }, {
            name: 'classify',
            path: '/classify',
            component: Classify
        }, {
            name: 'detail',
            path: '/detail',
            component: Detail
        }, {
            name: 'login',
            path: '/login',
            component: Login,
            children: [{
                    path: 'a',
                    component: resolve => require(['../pages/secondRouter/loginA.vue'], resolve),
                },
                {
                    path: 'b',
                    component: resolve => require(['../pages/secondRouter/loginB.vue'], resolve),
                }
            ]
        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                requiresAuth: true
            }
        }, {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/',
            redirect: '/home'
        }, {
            name: '404',
            path: '*',
            component: NotFound
        },
        {
            name: 'classify2',
            path: '/classify2',
            component: Classify2
        }, {
            name: 'classify3',
            path: '/classify3',
            component: Classify3
        },
        {
            name: 'address',
            path: '/address',
            component: Address
        },
        {
            name: 'addAddress',
            path: '/addAddress',
            component: Addaddress
        }
    ]
})
router.beforeEach(async (to, from, next) => {
    let redirectUrl= "/home/a"
    if (to.fullPath == "/mine" || to.fullPath == "/cart") {
        redirectUrl = to.fullPath;
        console.log(redirectUrl)
    } 
    if (to.meta.requiresAuth) {
        let token = "";
        if (JSON.parse(localStorage.getItem("usermsg"))) {
            token = true
        } else {
            token = false
        }
        if (token) {
            let token = JSON.parse(localStorage.getItem("usermsg")).Authorization;
            let data = await router.app.$axios.get("http://112.74.14.213:1912/users/verify", {
                params: {
                    token
                }
            });
            if (data.data.type) {
                next();
            } else {
                next({
                    path: '/login/a',
                    query: {
                        redirectUrl
                    }
                })
            }
        } else {
            // router.push('/login/a');
            next({
                path: '/login/a',
                query: {
                    redirectUrl
                }
            })
        }
    } else {
        next();
    }
})

export default router;
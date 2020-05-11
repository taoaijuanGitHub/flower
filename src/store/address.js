import axios from 'axios';
//购物车cart.vue 和详情页 details.vue 导航 appnav.vue
const address = {
    state: {//类似vue里面的data属性，存放数据的地方,当你有多个组件需要调用同一份数据的时候，就可以存到这里：公共状态管理
        alladdress: []
    },
    getters: {//类似vue里面computed计算属性.但是只有get方法
        // total(state) {
        //     return state.cartlist.length;
        // },
        // money(state) {
        //     let res = 0;
        //     state.cartlist.forEach(item => {
        //         res += item.price * item.num;
        //     });
        //     return res;
        // }
    },
    mutations: {//类似vue里面的methods方法
         getall(state, data) {//获取到的购物车数据放到state
            state.alladdress = data;
        },
        // additem(state, data) {//添加新商品到state中
        //     state.cartlist.push(data);
        // },
        // updateitem(state, data) {//修改state中商品数据
        //     state.cartlist.forEach(item => {
        //         if (item.gid == data.id && item.uid == data.uid) {
        //             item.num = data.num;
        //         }
        //     });
        // }
    },
    actions: {//类似vue里面的methods方法,里面的代码是异步的方法
        // async additem(contex, good) {
        //     //发送ajax，加入购物车
        //     // let { gid, uid, gname, price, kucun, num, gurl } = good;
        //     let { gid, uid, num } = good;
        //     // let { gid, uid } = good;

        //     //发送ajax，查询是否存在某商品
        //     let { data: data1 } = await axios.get('http://localhost:1920/goods/goodcart', {
        //         params: {
        //             gid,
        //             uid
        //         }
        //     });
        //     // window.console.log(good);
        //     // window.console.log(data1.length);
        //     if (data1.length == 0) {
        //         //不存在，可以添加新商品
        //         // window.console.log('不存在，可以添加新商品');

        //         let { data } = await axios.post('http://localhost:1920/goods/good', good);
        //         // window.console.log(data);
        //         // window.console.log('不存在，可以添加新商品2');
        //         //添加的新数据也放到state里面 
        //         contex.commit('additem', good);
        //         return data;

        //     } else {
        //         //存在，修改数量
        //         let kucun = data1[0].kucun;
        //         let currentnum = data1[0].num;
        //         // window.console.log(kucun);
        //         if (num + currentnum >= kucun) {//数量不能超过库存量
        //             num = kucun;
        //             window.console.log('库存量已用完');
        //         } else {
        //             num = num + currentnum;
        //         }
        //         // window.console.log('存在，修改数量');
        //         let { data } = await axios.put('http://localhost:1920/goods/good', {
        //             gid, uid, num
        //         });
        //         // window.console.log(data);
        //         contex.commit('updateitem', { gid, uid, num });//修改数量
        //         return data;
        //     }
        // },         
        async getalladr(contex) {//获取数据库中购物车数据放到state里面
            let { data } = await axios.get('http://112.74.14.213:1912/address/all');
            // if(data.length){
                contex.commit('getall', data);
            // }
        },
        // async updategood(contex, good) {//修改数据库的数量
        //     let { gid, uid, num } = good;
        //     let { data } = await axios.put('http://localhost:1920/goods/good', {
        //         gid, uid, num
        //     });
        //     window.console.log(data);
        //     contex.commit('updateitem', { gid, uid, num });//修改数量
        // }
    }
}

export default address;
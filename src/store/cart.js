import axios from 'axios';
export default {
    // 设置命名空间
    // namespaced: true,

    state: {
        goodslist: []
    },

    getters: {
        totalPrice(state) {
            let data=state.goodslist.filter(function(item){
                return item.ischecked==true;
        })
            return data.reduce((prev, item) => prev + item.price * item.num, 0);
        },
        getnum(state) {
            let data=state.goodslist.filter(function(item){
                return item.ischecked==true;
        })
            return data.length;
        },
        isallcheck(state) {
            return state.goodslist.every((item) => item.ischecked==true);
        }
    },
    //   mutation的调用方式：store.commit(mutation)
    mutations: {
        getall(state, data) {
            data.forEach(item => {
                if (item.ischecked) {
                  item.ischecked = true;
                } else {
                  item.ischecked = false;
                }
              });
            state.goodslist = data;
        }
    },

    // actions：间接修改state的方式
    // 触发action: store.dispatch(action)
    actions: {
        async getallgoods(contex,payload) {//获取数据库中购物车数据放到state里面
            let { data } = await axios.get('http://112.74.14.213:1912/cart/all',{ params: {
                uid:payload
              }});  
            contex.commit('getall', data);
        },
        async changeallchecked(contex,payload) {//获取数据库中购物车数据放到state里面
            let { data } = await axios.put('http://112.74.14.213:1912/cart/changeallchecked',payload);  
            contex.dispatch("getallgoods",payload.uid)
        },
        async changeone(contex,payload) {//获取数据库中购物车数据放到state里面
            let { data } = await axios.patch('http://112.74.14.213:1912/cart/changeone',payload); 
            contex.dispatch("getallgoods",payload.uid)
            // contex.commit('getall', data);
        },
        async changenum(contex,payload) {//获取数据库中购物车数据放到state里面
            let { data } = await axios.patch('http://112.74.14.213:1912/cart/changenum',payload); 
            contex.dispatch("getallgoods",payload.uid)
        },
        async del(contex,payload) {//获取数据库中购物车数据放到state里面
            let { data } = await axios.delete('http://112.74.14.213:1912/cart/del',{data: {	id: payload.id}})
            contex.dispatch("getallgoods",payload.uid)
        },
    }
}
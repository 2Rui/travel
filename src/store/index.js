import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
//import actions from './actions'
Vue.use(Vuex)
//拆分后
export default new Vuex.Store({
  state,
  //actions,
  mutations
})

//拆分前
// let defaultCity='北京';
// try{
//   if(localStorage.city){
//     defaultCity=localStorage.city;
//   }
// }catch (e){

// }
// export default new Vuex.Store({
// 	state:{
// 		city:defaultCity
// 	},
// 	actions:{//可执行异步操作
//         changeCity (ctx,city) {
//            console.log(ctx)
//            ctx.commit('changeCity',city);
//         }
// 	},
// 	mutations:{//同步操作
//         changeCity (state,city){
//         	console.log(state);
//         	state.city=city;
//           try{
//             localStorage.city=city;
//           }catch(e){

//           }
//         }
// 	},
// 	getters:{//类似于组件中的computed计算属性
//  	doubleCity (state){
//  		return state.city+'--Me'
//  	}
//  }
// })
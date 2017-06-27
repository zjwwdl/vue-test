/**
 * Created by zhengjinwen on 2017/6/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//state为状态值 状态对象
const state={
     count:1
}

//加减法
//m 为改变状态对象(state)的方法
const mutations={
//   【第一节】最普通的方法
//      //把state传进来
//      add(state){
//        //调用state的count，让它++
//        state.count++;
//      },
//      reduce(state){
//        state.count--;
//      }

//    【第三节】带参数放进方法里
       add(state,n){
         //每一次加的值为传进的参数 比如传10代表+10
           state.count+=n;
       },
        reduce(state){
          state.count--;
        }
}

const getters={
//  这里因为要过滤count 所以~ (这里调用去vue里的computed里去调用)
  count:function (state) {
    //每次加100
     return state.count+=10;
  }
}

const actions={
  //actions是可以调用mutations里的方法的
  addAction(context){
     //context为上下文对象
     //调用mutations里的（add）方法
     context.commit('add',10);
     //为了看出与mutations的区别 加个延迟操作
     setTimeout(()=>{context.commit('reduce')},5000);
     console.log('我比reduce先执行了');
  },
  //传一个包装的commit对象
  reduceAction({commit}){
    //直接用commit执行reduce
     commit('reduce');
  }

}

//模块组
//这里可以写很多模块组 xx1,xx2,xx3....然后把对应的放入写好的moduleA,B,C等等 最后在底下调用
const moduleA={
   state,mutations,getters,actions
}


//把state暴露出去
export default new Vuex.Store({
//【前五节】
//      state,
//      mutations,
//      getters,
//      actions

//【第五节】
  modules:{a : moduleA}

})

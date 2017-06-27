<template>
  <div>
    <h2>{{msg}}</h2><hr/>
    <!--【前五节】-->
    <!--<h3>{{$store.state.count}}-{{count}}</h3>-->
    <!--【第五节】这里用模块组a显示count--->
    <h3>{{$store.state.a.count}}--{{count}}</h3>


    <p>
      <!--这里必须是commit 表示提交的意思 【第一节】 不带参数最普通的-->
      <!--<button @click="$store.commit('add')" class="btn">+</button>-->
      <!--<button @click="$store.commit('reduce')" class="btn">-</button>-->

      <!--【第三节】传参数 第一个为方法名 然后直接传参数即可 不用传默认的state~-->
      <!--<button @click="$store.commit('add',10)" class="btn">+</button>-->
      <!--<button @click="$store.commit('reduce')" class="btn">-</button>-->

      <!--【第三节】简化方法名-->
      <button @click="add(10)" class="btn">+</button>
      <button @click="reduce" class="btn">-</button>
    </p>
    <!--【第五节】actions-->
    <p>
      <button @click="addAction" class="btn">+</button>
      <button @click="reduceAction" class="btn">-</button>
    </p>

  </div>
</template>

<script>
  import store from '.././vuex/store';
//【第二节】第二种方法让$store.state.count变成count显示 添加mapState
//【第三节】让方法$store.commit('add',10)变得简化 添加mapMutations
//【第四节】getters的简写
//【第五节】actions
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'

  export default{
      data(){
          return{
              msg:'Hello Vuex'
          }
      },
//    计算属性(【第二节】第一种方法让$store.state.count变成count显示)
//      computed:{
//        count(){
//          return this.$store.state.count;
//        }
//      },

//  【第二节】第二种方法让$store.state.count变成count显示 [[这里是一个对象]]
//   (1)
//      computed:mapState({
////          用艾克马6的箭头函数把state直接传入 直接返回state里的箭头函数
//        count:state => state.count
//      }),
//   (2)不用艾克马6的写法 这是es5的写法 (同理，传一个state值 然后返回state里的count)
//        computed:mapState({
//          count:function (state) {
//            return state.count;
//          }
//        }),

//  【第二节】第三种方法让$store.state.count变成count显示 [[这里是一个数组]]（最便捷的方法）
//      computed:mapState(['count']),

//  【第四节】在computed加入getters
     computed:{
       //三个点代表扩展运算符 写上后就可以继续写~
//       ...mapState(['count']),

//       【第四节】//把count引过来 这里不是简写
//       count(){
//         return this.$store.getters.count;
//       }
//       【第四节】
//       ...mapGetters(['count'])

//       【第五节】 模块组 为了简写上面template里的count
          count (){
             return this.$store.state.a.count;
          }

     },

//  【第三节】加入方法(简化$store.commit('add',10)) 就可以写成@click="add"和@click="reduce"
//      methods:mapMutations(['add','reduce']),
     methods:{
       ...mapMutations(['add','reduce']),
       ...mapActions(['addAction','reduceAction'])
     },
      store
  }


</script>

<style>
.btn{
  width: 1rem;
  height: 1rem;
  background: red;
  font-size: .5rem;
  color: white;
}


</style>

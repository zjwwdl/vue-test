<template>
    <div class="test">
        <!--小金的头部-->
        <div class="test_header">
          <p>小金的头部</p>
          <button class="pushbtn" @click="$router.push('test2')">跳转</button>
        </div>
        <!--小金的头部-->

        <!--flex 特点：-->
        <!--父容器可以统一设置子容器的排列方式，子容器也可以单独设置自身的排列方式，如果两者同时设置，以子容器的设置为准。-->


        <!--5.4来自育果的横向布局测试  display:flex！-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局1 育果</p>
        <div class="test_flex1">
         <div class="test_flex1_left">
             <img src="../assets/image/20130822051152805.jpg" class="test_flex1_left_img">
         </div>
         <div class="test_flex1_right">
             <p class="test_flex1_right_title">
                 运动名称：滑板
             </p>
             <p class="test_flex1_right_content">
                 描述1：这里是描述1
             </p>
             <p class="test_flex1_right_content">
                 描述2：这里是描述2
             </p>
             <p class="test_flex1_right_content">
                描述3：<samp>这里是描述3</samp>
             </p>
         </div>
        </div>
        <!--5.4来自育果的横向布局测试  display:flex！-->

        <!--display:flex 测试2-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局2</p>
        <!--把左边的两个元素用div包裹,然后和右边的元素作为flex布局的两个item,用space-between撑到两边.-->
        <div class="test_flex2">
            <div class="test_flex2_left">
                <p class="test_flex2_left_p1">任务名称</p>
                <p class="test_flex2_left_p2">小金在测试</p>
            </div>
            <div class="test_flex2_right">
                <p class="test_flex2_right_p1">已完成</p>
            </div>
        </div>
        <!--display:flex 测试2-->

        <!--display:flex 测试3-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局3</p>
        <!--常见的tab导航栏的实现-->
        <div class="test_flex3">
            <!--/*tab栏的条目数,自动均分*/-->
            <div class="test_flex3_items">我的成绩</div>
            <div class="test_flex3_items">行为问题</div>
            <div class="test_flex3_items">亲子关系</div>
            <div class="test_flex3_items">人际关系</div>
            <div class="test_flex3_items">个人存款</div>
            <div class="test_flex3_items">情绪变化</div>
            <div class="test_flex3_items">魔兽世界</div>
            <!--/*tab栏的条目数,自动均分*/-->
        </div>
        <!--display:flex 测试3-->

        <!--display:flex 测试4-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局4 乐艇</p>
        <div class="test_flex4">
            <div class="test_flex4_item" style="border-top:none;">
              <div class="test_flex4_item_left_company">
                <p class="test_flex4_item_p">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</p>
                  <div class="test_flex4_item_shu"></div>
              </div>
                <div class="test_flex4_item_right">
                    <input class="test_flex4_item_input" placeholder="请输入您的姓名">
                </div>
            </div>
            <div class="test_flex4_item">
                <div class="test_flex4_item_left_company">
                    <p class="test_flex4_item_p">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</p>
                    <div class="test_flex4_item_shu"></div>
                </div>
                <div class="test_flex4_item_right">
                    <input class="test_flex4_item_input" placeholder="请输入您的手机号">
                </div>
            </div>
            <div class="test_flex4_item">
                <div class="test_flex4_item_left_company">
                    <p class="test_flex4_item_p">公司信息</p>
                    <div class="test_flex4_item_shu"></div>
                </div>
                <div class="test_flex4_item_right">
                    <input class="test_flex4_item_input" placeholder="请输入公司信息">
                </div>
            </div>
        </div>
        <!--display:flex 测试4-->

        <!--display:flex 测试5-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局5 育果</p>
        <div class="text_flex5">
             <div class="test_flex5_top">
              <p class="test_flex5_normalp">已参加</p>
              <p class="test_flex5_bigp">89</p>
              <p class="test_flex5_normalp">人</p>
             </div>
             <div class="test_flex5_bottom">
              <img src=".././assets/image/20130822051152805.jpg" class="test_flex5_bottom_img" v-for="item in 12">
             </div>
        </div>
        <!--display:flex 测试5-->

        <!--display:flex 测试6-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局6</p>
        <div class="text_flex6">
          <div class="test_flex6_item nonetop">
            <div class="test_flex6_item_left">
              <p class="test_flex6_item_left_title">08.04</p>
              <p class="test_flex6_item_left_des">征文 心若没有栖息的地方，到哪里都是流浪</p>
              <p class="test_flex6_item_left_title">418次阅·3评论·14喜欢</p>
            </div>
            <div class="test_flex6_item_right">
              <img src=".././assets/image/20130822051152805.jpg" class="test_flex6_item_right_img">
            </div>
          </div>
          <div class="test_flex6_item">
            <div class="test_flex6_item_left">
              <p class="test_flex6_item_left_title">08.02</p>
              <p class="test_flex6_item_left_des">每个王者都有过一条菜鸟之路</p>
              <p class="test_flex6_item_left_title">97次阅·2评论·2喜欢</p>
            </div>
            <div class="test_flex6_item_right">
              <img src=".././assets/image/20130822051152805.jpg" class="test_flex6_item_right_img">
            </div>
          </div>
          <div class="test_flex6_item">
            <div class="test_flex6_item_left">
              <p class="test_flex6_item_left_title">08.01</p>
              <p class="test_flex6_item_left_des">没有所谓的早恋</p>
              <p class="test_flex6_item_left_title">97次阅·8评论·7喜欢</p>
            </div>
            <div class="test_flex6_item_right">
              <img src=".././assets/image/20130822051152805.jpg" class="test_flex6_item_right_img">
            </div>
          </div>
        </div>
        <!--display:flex 测试6-->

        <!--display:flex 测试7-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">横向布局7 育果</p>
        <div class="test_flex7">
         <div class="test_flex7_item"><p class="test_flex7_item_p">育果专享</p></div>
          <div class="test_flex7_item"><p class="test_flex7_item_p">8折</p></div>
          <div class="test_flex7_item"><p class="test_flex7_item_p">羊水穿刺</p></div>
          <div class="test_flex7_item"><p class="test_flex7_item_p">无痛DNA检测</p></div>
          <div class="test_flex7_item"><p class="test_flex7_item_p">分娩导乐</p></div>
          <div class="test_flex7_item"><p class="test_flex7_item_p">减免1345元</p></div>
        </div>
        <!--display:flex 测试7-->

        <!--display:flex 测试8-->
        <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">动画测试1</p>
        <div class="test_flex8">
          <p class="test_flex8_animate animated wobble d1 infinite">测试1</p>
          <p class="test_flex8_animate animated flip d1 infinite">测试2</p>
          <p class="test_flex8_animate animated hinge d1 infinite">测试3</p>
        </div>
        <!--display:flex 测试8-->

      <!--display:flex 测试9-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">动画测试2</p>
      <div class="test_flex9">
        <button class="test_flex9_btn" @click="change()">点击测试</button>
        <p :class="box ? 'test_flex9_p animated flip d1 infinite' : 'test_flex9_p'">测试内容</p>
      </div>
      <!--display:flex 测试9-->

      <!--display:flex 测试10-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">布局10：display:grid（网页）</p>
      <div class="test_flex10">
        <div class="test_flex10_letter">
          A
        </div>
        <div class="test_flex10_letter">
          B
        </div>
        <div class="test_flex10_letter">
          C
        </div>
        <div class="test_flex10_letter">
          D
        </div>
      </div>
      <!--display:flex 测试10-->

      <!--display:flex 测试11-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">Vuex测试</p>
      <div class="test_flex9">
        <p class="test_flex9_p">测试vuex数据:{{$store.state.count}}</p>
                                  <!--固定写法 提交写法来改变-->
        <p class="test_flex9_add" @click="$store.commit('add')">加号</p>
        <p class="test_flex9_less" @click="$store.commit('less')">减号</p>
      </div>
      <!--display:flex 测试11-->

      <!--display:flex 测试12-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">clip-path绘制多边形</p>
      <div class="test_flex11">
        <div class="test_flex11_juxing"></div>
        <div class="test_flex11_sifangxing"></div>
        <div class="test_flex11_huaxing"></div>
      </div>
      <!--display:flex 测试12-->

      <!--假数据简单测试-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">假数据简单测试</p>
      <div class="test_flex12">
       <input v-model="newItem" @keyup.enter = "addNew">
       <ul>
         <!--这里用到v-bind 绑定 liClass在data里定义并赋值-->
         <!--<li v-for="item in array" v-bind:class="[liClass]">-->

         <!--这里如果item.isFinished里的值为false 则不显示finished true为显示-->
         <li v-for="item in array" v-bind:class="{finished: item.isFinished}" @click="toggleFinish(item)">
           {{item.label}}
         </li>
       </ul>
      </div>
      <!--假数据简单测试-->

      <!--测试左滑-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">测试左滑</p>
      <div class="test_flex12">

        <div class="delete_div" v-for="index in 2">
          <!--<left-slider :index="index" @deleteItem="deleteItem">-->
          <left-slider :index="index" @deleteItem="deleteItem" @shoucang="shoucang">
            <div class="content"></div>
          </left-slider>
        </div>

      </div>
      <!--测试左滑-->

      <!--vuex-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">测试页vuex</p>
      <div class="test_vuex">
       <p class="title">{{title}}</p>
       <button class="btn" @click="changeTitle"></button>
       <button class="btn2" @click="zhezhaoshow()">遮罩</button>
      </div>

      <xiao-jin v-show="show" @cancel="cancel" @ok="ok"></xiao-jin>
      <!--vuex-->

      <!--video-->
      <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">video</p>
      <div class="test_flex12">
        <video-player  ref="videoPlayer"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
                       @ended="onPlayerEnded($event)"
                       @loadeddata="onPlayerLoadeddata($event)"
                       @waiting="onPlayerWaiting($event)"
                       @playing="onPlayerPlaying($event)"
                       @timeupdate="onPlayerTimeupdate($event)"
                       @canplay="onPlayerCanplay($event)"
                       @canplaythrough="onPlayerCanplaythrough($event)"
                       @ready="playerReadied"
                       @statechanged="playerStateChanged($event)">
        </video-player>
      </div>
      <!--video-->

    </div>
</template>
<script>
//    import store from '.././components/store.js'
    import Animate from 'animate.css'
    import CircleMenu from 'vue-circle-menu'
    import Store from '../huancun.js'
    import axios from 'axios'
//    输出一下Store
    console.log(Store)
    import LeftSlider from '../components/left_delete.vue'
//    测试vuex
    import { mapState , mapGetters , mapActions } from 'vuex'
    import XiaoJin from '../components/xiaojin.vue'
    import { videoPlayer } from 'vue-video-player'

    export default {
        name: 'test',
        props: {
            index:Number
        },
        //一进页面就请求
        mounted () {
          axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend')
          .then((response) => {
          // console.log(response.data.newArr[0][0])
          this.newArr = response.data.newArr[0]
          this.games = response.data.games
           console.log('newArr数据：'+ this.newArr)
           console.log('games数据：'+ this.games)
          })
          .catch((error) => {
          console.log(error)
          })

//        video
          console.log('this is current player instance object', this.player)
        },
        data () {
            return {
                msg: '小金的测试页',
                box:false,
//              用Store里的fetch取出items赋给array
                array: Store.fetch(),
                liClass: 'this is LiClass',
                newItem: '',
                // 新闻数据
                newArr: [],
                games: [],
                show: false,
                playerOptions: {
                  // component options
                  start: 0,
                  // videojs options
                  muted: false,
                  language: 'en',
                  playbackRates: [0.7, 1.0, 1.5, 2.0],
                  sources: [{
                    type: "video/mp4",
                    src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_H"
                  }],
//                  poster: "../assets/image/1.jpg",
                  playsinline:"true"
                }
            }
        },
        components:{
          LeftSlider,
          XiaoJin,
          videoPlayer
        },
        watch: {
//            观察array数组的变化
              array: {
//              handler:function (val, oldVal) {
//                console.log(val, oldVal)
//              },

//            把array介个数组存到Store里
              handler:function (array) {
                Store.save(array)
              },
//              deep为深层赋值 不写的话array里的key的更改是取不到的
              deep: true
            }
        },
        methods: {
            change : function () {
              this.box = !this.box
            },
            toggleFinish : function (item) {
              (item.isFinished = !item.isFinished)
            },
            addNew : function () {
//              console.log(this.newItem)

//              加入到数组中---》重点
              this.array.push({
                label:this.newItem,
                isFinished:false
              })
//            enter后 让newItem的值变为空
              this.newItem = ''
//            当列表更新的时候 用Store里的方法
//            数组array是可以放到Store里的 因为Store里的JSON.parse
//              Store.save()
//            但是在每一个方法里调用是一件很麻烦的事儿~
//            所以用到vue里watch介个属性
            },
            deleteItem :function (index) {
              alert('删除操作：'+index)
            },
            shoucang :function (index) {
              alert('收藏操作：'+index)
            },
            zhezhaoshow :function () {
              this.show = true
              console.debug(document.body)
              document.body.style.overflow = 'hidden'
            },
            cancel :function () {
//              alert('返回')
              this.show = false
              document.body.style.overflow = 'initial'
            },
            ok :function () {
              this.show = false
              document.body.style.overflow = 'initial'
            },


          // listen event
          onPlayerPlay(player) {
            // console.log('player play!', player)
          },
          onPlayerPause(player) {
            // console.log('player pause!', player)
          },
          onPlayerEnded(player) {
            // console.log('player ended!', player)
          },
          onPlayerLoadeddata(player) {
            // console.log('player Loadeddata!', player)
          },
          onPlayerWaiting(player) {
            // console.log('player Waiting!', player)
          },
          onPlayerPlaying(player) {
            // console.log('player Playing!', player)
          },
          onPlayerTimeupdate(player) {
            // console.log('player Timeupdate!', player.currentTime())
          },
          onPlayerCanplay(player) {
            // console.log('player Canplay!', player)
          },
          onPlayerCanplaythrough(player) {
            // console.log('player Canplaythrough!', player)
          },

          // or listen state event
          playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
          },

          // player is ready
          playerReadied(player) {
            console.log('example 01: the player is readied', player)
          },


//          vuex的测试
            ...mapActions([
              'changeTitle'
            ])
//            changeTitle(){
//              this.$store.commit('CHANGE_TITLE');
//            }
        },
        computed: {
          player() {
            return this.$refs.videoPlayer.player
          },
          ...mapGetters([
              'title'
          ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../components/test.less';

.test_header{
  position: relative;
  height: 1rem;
  .bj(red);
  .pushbtn{
    position: absolute;
    text-align: center;
    right:.2rem;
    top:.2rem;
    background: cyan;
    .bk(.04rem,yellow);
    width: 1.5rem;
    height: .6rem;
    color: red;
    font-size: .26rem;
  }
}
.test_header p{
  line-height: 1rem;
  text-align: center;
  .ztys;
}
/*[[[[[[[[[[test1------>display:flex1]]]]]]]]]]*/
.test_flex1{
  display: flex;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
   /*边框长度 边框颜色 边框圆角度数*/
  .bk(.08rem,red,.2rem);
  .bj;
  .shadow-lower-right;
}
.test_flex1_left{
  flex: 1;
  line-height: 0;
  .bj;
}
.test_flex1_right{
  flex: 3;
  line-height: 1;
  .bj;
}
.test_flex1_left_img{
  position: relative;
  width: 2rem;
  height: 2rem;
  padding: 0.15rem;
}
.test_flex1_right_title{
  padding-top: 0.15rem;
  position: relative;
  text-align: left;
  font-size: 0.46rem;
  margin-bottom: 0.3rem;
  .ztys(@splab);
}
.test_flex1_right_content{
  position: relative;
  text-align: left;
  font-size: 0.3rem;
  .ztys(@black);
  line-height: 1.3;
}
.test_flex1_right_content samp{
  .ztys(@splab);
  font-style: normal;
  font-weight: normal;
  font-size: 0.3rem;
}
/*[[[[[[[[[[test1------>display:flex1]]]]]]]]]]*/

/*[[[[[[[[[[test2------>display:flex2]]]]]]]]]]*/
.test_flex2{
  display: flex;
  /*主轴为水平方向（横排）起点在左端*/
  flex-direction: row;
  /*两端对齐，项目之间的间隔都相等*/
  justify-content: space-between;
  /*交叉轴的中点对齐*/
  align-items: center;
  /*align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。*/
  /*与交叉轴的中点对齐。*/
  /*align-content: center;*/
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  .bk;
  .bj;
}
/*这里左边部分里有两块 继续用flex布局摆出样式*/
.test_flex2_left{
  display: flex;
  flex-direction: row;
  /*justify-content属性定义了项目在主轴上的对齐方式。*/
  /*center： 居中*/
  justify-content: center;
  /*交叉轴的中点对齐*/
  align-items: center;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  .bj
}
.test_flex2_left_p1{
  font-size: 0.3rem;
  border-radius: 0.1rem;
  border: 0.02rem solid @orange;
  .bk(.02rem,@orange);
  .ztys(@orange);
  text-align: center;
  padding: 0.05rem;
}
.test_flex2_left_p2{
  font-size: 0.3rem;
  .ztys(@black);
  text-align: left;
  margin-left: 0.2rem;
}
.test_flex2_right{
  .bj;
}
.test_flex2_right_p1{
  font-size: 0.3rem;
  .ztys(@grey);
  text-align: center;
}
/*[[[[[[[[[[test2------>display:flex2]]]]]]]]]]*/


/*[[[[[[[[[[test3------>display:flex3]]]]]]]]]]*/
.test_flex3{
  display: flex;
  /*横向排列*/
  flex-direction: row;
  /*不换行*/
  flex-wrap: nowrap;
  /*横向放不下时允许滚动*/
  overflow-x: scroll;
  /*每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。*/
  /*各item之间被间隔包裹*/
  /*justify-content: space-around;*/
  /*垂直方向上居中*/
  align-items: center;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@grey);
}
.test_flex3_items{
  /*本身大小200rpx,可以扩张(1:比如只有两个tab时,平分width),不许压缩(0)*/
  flex: 1 0 2rem;
  text-align: center;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  font-size: 0.3rem;
  .ztys(@black);
}

/*[[[[[[[[[[test3------>display:flex3]]]]]]]]]]*/

/*[[[[[[[[[[test4------>display:flex4]]]]]]]]]]*/
.test_flex4{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@grey);
}
.test_flex4_item{
  display: flex;
  flex-direction: row;
  .bj;
  border-top: 0.04rem solid @grey;
}
.test_flex4_item_left_company{
  flex: 0.9;
  justify-content: space-between;
  .bj(@touming);
  text-align: center;
  padding-left: 0.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  display: flex;
  flex-direction: row;
}

.test_flex4_item_right{
  flex: 3;
  .bj(@touming);
  padding: .175rem .2rem .2rem;
  line-height: 0;
}
.test_flex4_item_p{
  font-size: 0.3rem;
  .ztys(@black);
  text-align: center;
}
.test_flex4_item_shu{
  width: 0.04rem;
  .bj(@grey);
}

.test_flex4_item_input{
  .bj(@touming);
  font-size: 0.3rem;
  text-align: left;
  width: 100%;
  outline: none;
  border: none;
  padding-top: 0.05rem;
}
/*[[[[[[[[[[test4------>display:flex4]]]]]]]]]]*/

/*[[[[[[[[[[test5------>display:flex5]]]]]]]]]]*/
.text_flex5{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@grey);
}
.test_flex5_top{
  display: flex;
  flex-direction: row;
  .bj;
}
.test_flex5_normalp{
  font-size:0.3rem;
  text-align: left;
  .ztys(@black);
  padding: 0.2rem;
}
.test_flex5_bigp{
  font-size:0.5rem;
  text-align: left;
  .ztys(@orange);
}
.test_flex5_bottom{
  display: flex;
  flex-direction: row;
  .bj;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.test_flex5_bottom_img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  padding: 0.2rem;
}
/*[[[[[[[[[[test5------>display:flex5]]]]]]]]]]*/

/*[[[[[[[[[[test6------>display:flex6]]]]]]]]]]*/
.text_flex6{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  border: 0.04rem solid @grey;
}
.test_flex6_item{
  display: flex;
  flex-direction: row;
  background: @white;
  border-top: 0.04rem solid @grey;
}
.test_flex6_item.nonetop{
  border-top: none;
}
.test_flex6_item_left{
  flex: 3;
  display: flex;
  flex-direction: column;
  background: @white;
  padding: 0.3rem;
}
.test_flex6_item_left_title{
  text-align: left;
  font-size: 0.3rem;
  color: @grey;
  line-height: 2;
}
.test_flex6_item_left_des{
  text-align: justify;
  font-size: 0.5rem;
  color: @black;
  font-weight: bold;
  line-height: 1.2;
}
.test_flex6_item_right{
  flex: 1;
  display: flex;
  flex-direction: column;
  background: @white;
  width: 1.6rem;
  height: 1.6rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 0.5rem;
}
.test_flex6_item_right_img{
  width: 100%;
  height: 100%;
}
/*[[[[[[[[[[test6------>display:flex6]]]]]]]]]]*/

/*[[[[[[[[[[test7------>display:flex7]]]]]]]]]]*/
.test_flex7{
  display: flex;
  flex-direction: row;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  border: 0.04rem solid @grey;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.2rem;
}
.test_flex7_item{
  border: 0.04rem solid @orange;
  margin: 0.1rem;
  padding: 0.1rem;
  border-radius: 0.2rem;
}
.test_flex7_item_p{
  font-size: 0.3rem;
  text-align: center;
  color: @orange;
}
/*[[[[[[[[[[test7------>display:flex7]]]]]]]]]]*/

/*[[[[[[[[[[test8------>display:flex8]]]]]]]]]]*/
.test_flex8{
  display: flex;
  flex-direction: row;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  border: 0.04rem solid @grey;
  padding: 0.2rem;
  justify-content: space-between;
  background: linear-gradient(90deg,blue 100px,#fff 100px,#fff 200px,red 200px);
}
.test_flex8_animate{
  color: #006600;
  font-size: 0.4rem;
  padding: 0.1rem;
}
.d1 {
  background-color: transparent;
  animation-delay: 0s; /* 动画延迟多久开始播放 */
}
.d2 {
  background-color: aquamarine;
  animation-duration: 30s;/* 一个动画效果的持续时间 */
}
/*.test_flex8_animate:hover{*/
  /*color: red;*/
  /*font-size: 0.55rem;*/
  /*!*animated wobble d1 infinite;*!*/
/*}*/

/*[[[[[[[[[[test8------>display:flex8]]]]]]]]]]*/

/*[[[[[[[[[[test9------>display:flex9]]]]]]]]]]*/
.test_flex9{
  display: flex;
  flex-direction: row;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  border: 0.04rem solid @grey;
  padding: 0.2rem;
  justify-content: flex-start;
}
.test_flex9_btn{
  border: none;
  border-radius: 0.1rem;
  background: magenta;
  color: @white;
  font-size: 0.3rem;
  padding: 0.1rem;
}
.test_flex9_add{
  border-radius: 0.1rem;
  background: maroon;
  color: @white;
  font-size: 0.3rem;
  padding: 0.1rem;
  margin-left: 0.5rem;
}
.test_flex9_less{
  border-radius: 0.1rem;
  background: darkmagenta;
  color: @white;
  font-size: 0.3rem;
  padding: 0.1rem;
  margin-left: 0.5rem;
}

.test_flex9_p{
  border-radius: 0.1rem;
  background: red;
  color: @white;
  font-size: 0.3rem;
  padding: 0.1rem;
  margin-left: 1.5rem;
}
/*不好使？？？*/
/*.test_flex9_p.an{*/
  /*border-radius: 0.1rem;*/
  /*background: red;*/
  /*color: var(--White);*/
  /*font-size: 0.3rem;*/
  /*padding: 0.1rem;*/
  /*animation: wobble 0s infinite;*/
/*}*/
/*[[[[[[[[[[test9------>display:flex9]]]]]]]]]]*/

/*[[[[[[[[[[test10------>display:flex10]]]]]]]]]]*/
.test_flex10{
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: peachpuff;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  border: 0.04rem solid @grey;
  padding: 0.2rem;
  grid-column-gap:0.04rem;
  grid-row-gap:0.04rem;
@media screen and (min-width: 500px){
  grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (min-width: 800px){
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
}
.test_flex10_letter{
  background-color: #0069b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  font-size: 0.7rem;
  color: @white;
  line-height: 1;
  font-family: 'hobeaux-rococeaux-background', Helvetica;
  font-weight: 200;
  cursor: pointer;
  transition: all .3s ease;
}
/*[[[[[[[[[[test10------>display:flex10]]]]]]]]]]*/

/*[[[[[[[[[[test11------>display:flex11]]]]]]]]]]*/
.test_flex11{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.1rem;
  border: 0.04rem solid @grey;
  padding: 0.2rem;
}
.test_flex11_juxing{
  width: 2rem;
  height: 2rem;
  background: url("../assets/image/20130822051152805.jpg") center no-repeat ;
  background-size: contain;
  -webkit-clip-path: polygon(48% 0, 0% 100%, 100% 100%);
  clip-path: polygon(48% 0, 0% 100%, 100% 100%);
}
.test_flex11_sifangxing{
  width: 2rem;
  height: 2rem;
  background: url("../assets/image/20130822051152805.jpg") center no-repeat ;
  background-size: contain;
  margin-left: 0.2rem;
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
.test_flex11_huaxing{
  width: 2rem;
  height: 2rem;
  background: url("../assets/image/20130822051152805.jpg") center no-repeat ;
  background-size: contain;
  margin-left: 0.2rem;
  -webkit-clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
  clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
}

/*[[[[[[[[[[test11------>display:flex11]]]]]]]]]]*/

/*12*/
.test_flex12{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@grey);
  min-height: 1rem;
  .finished{
    text-decoration: underline;
  }
  li{
    .midlab;
    list-style:none;
  }
  input{
    .midlab;
  }
}
/*12*/

/*测试左滑！！！*/
.content{
  background-color: cyan;
  width: 100%;
  height: 2rem;
}

.delete_div{
  position: relative;
}
/*测试左滑！！！*/

/*测试页vuex*/
.test_vuex{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@grey);
  min-height: 1rem;
  .title{
    text-align: center;
    background: red;
    .midlab(.4rem,white);
  }
  .btn{
    text-align: left;
    margin: .2rem;
    background: red;
    .bk(.04rem,yellow);
    width: 1rem;
    height: 1rem;
  }
  .btn2{
    text-align: left;
    margin: .2rem;
    background: peachpuff;
    .bk(.04rem,yellow);
    font-size: .3rem;
    color: brown;
    width: 1rem;
    height: 1rem;
  }
}
/*测试页vuex*/

.video-player{
  /*总高度*/
  .vjs_video_3-dimensions{
    height: 4rem;
  }
  /*底部高度*/
  .video-js.vjs-custom-skin .vjs-control-bar {
    font-size: .2rem;
  }
  /*中间按钮*/
  .video-js.vjs-custom-skin .vjs-big-play-button {
    font-size: .35rem;
  }

}



</style>

<template>
  <div>
    <div class="test_header">
      <p>组件传值——测试的头部</p>
    </div>
    <!--组件传值-->
    <body-test :games="array"></body-test>
    <!--组件传值-->

    <!--测试轮播图vue-awesome-swiper-->
    <div class="test_swiper">
     <swiper :options="swiperOption">
       <!--内容-->
       <swiper-slide v-for="item in imgarray" :key="item.id">
         <img :src="item.url" alt="">
       </swiper-slide>
       <!--N个点-->
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
    </div>
    <!--测试轮播图vue-awesome-swiper-->

    <!--底部tabbar-->
     <tabbar v-on:ziChuanfu="switchNum"></tabbar>
    <!--底部tabbar-->
  </div>
</template>

<script>
import bodyTest from '../zujian_chuangzhi_test/body.vue'
import axios from 'axios'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import Tabbar from '../zujian_chuangzhi_test/tabbar.vue'

  export default {
    //一进页面就请求
    mounted () {
      axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend')
        .then((response) => {
          console.log('response: ', response)
          this.array = response.data.games
        }).catch((error) => {
          console.log(error)
        })
    },
    methods :{
//    传给头部渲染
      switchNum (value) {
        alert(value)
//      实际项目写this.pageIndex = value
      }
    },
    data () {
      return {
        array:[],
        imgarray:[
          {id: 0, url: 'http://yanxuan.nosdn.127.net/19a8e27a69e35fdbb738546802c73e25.jpg'},
          {id: 1, url: 'http://yanxuan.nosdn.127.net/1b98903a6d44de0a4e25967b097b6228.jpg'},
          {id: 2, url: 'http://yanxuan.nosdn.127.net/78215f711eed5dc350630cec2d38e8be.jpg'},
          {id: 3, url: 'http://yanxuan.nosdn.127.net/63c7db53d955c280c66789971933a3e6.jpg'},
          {id: 4, url: 'http://yanxuan.nosdn.127.net/d344d7013cfb740e1aed822b981aae13.jpg'}
        ],
        swiperOption: {
          autoplay: 3500,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
//          paginationType:'progress',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          loop: true,
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
//          slidesPerView: 'auto',
//          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    },
    components:{
      'bodyTest':bodyTest,
      swiper,
      swiperSlide,
      'tabbar': Tabbar
    }
  }
//  轮播剩余属性
//          centeredSlides: true,
//          spaceBetween: 30,
//          onSlideChangeEnd: swiper => {
//          //这个位置放swiper的回调方法
//            this.page = swiper.realIndex+1;
//            this.index = swiper.realIndex;
//           }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../components/test.less';
.test_header{
  position: relative;
  height: 1rem;
  .bj(red);
}
.test_header p{
  line-height: 1rem;
  text-align: center;
  .ztys;
}
.test_swiper{
  border-top: 2px solid magenta;
  padding-top: .4rem;
}

/*定义轮播控件的高度*/
/*.swiper-container{*/
  /*height: 2rem;*/
/*}*/

/*底部的点的位置*/
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: .2rem;
  /*left: 0;*/
  /*width: 100%;*/
}

/*因为写了scoped 所以这里的内部属性重写不了 去掉即可生效*/
.swiper-pagination .swiper-pagination-bullet {
  width: .53333rem!;
  height: .05333rem;
  display: inline-block;
  background: #E8ECF1;
  opacity: .4;
  border-radius: 0;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}
/*因为写了scoped 所以这里的内部属性重写不了 去掉即可生效*/

</style>

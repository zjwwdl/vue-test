// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/js/response.js'
import './assets/main.less'
import 'less'
import 'less-loader'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './test-vuex/store'

import vueg from 'vueg'
import 'vueg/css/transition-min.css'

import VueVideoPlayer from 'vue-video-player'
import VueResouse from 'vue-resource'


Vue.config.productionTip = false

// const options={
//   duration: '0.3',              //转场动画时长，默认为0.3，单位秒
//   firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false
//   firstEntryDuration: '.6',     //首次进入应用时的渐现动画时长，默认为.6
//   forwardAnim: 'fadeInRight',   //前进动画，默认为fadeInRight
//   backAnim: 'fadeInLeft',       //后退动画，默认为fedeInLeft
//   sameDepthDisable: false,      //url深度相同时禁用动画，默认为false
//   tabs: [{
//     name:'home'
//   },{
//     name:'my'
//   }],                       //默认为[]，name对应路由的name,以实现类似app中点击tab页面水平转场效果，如tab[1]到tab[0]，会使用backAnim动画，tab[1]到tab[2]，会使用forwardAnim动画
//   tabsDisable: false,           //值为true时，tabs间的转场没有动画，默认为false
//   disable: false               //禁用转场动画，默认为false，嵌套路由默认为true
// }

Vue.use( VueLazyload, {
  preLoad: 1.3,
  error: './assets/image/list_img.png',//这个是请求失败后显示的图片
  // error: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',//这个是加载的loading过渡效果
  attempt: 1,
  try: 2 // 这个是加载图片数量
},VueAwesomeSwiper)

Vue.use(vueg, router,{
  forwardAnim: 'fadeInRight'
})
Vue.use(VueVideoPlayer)
Vue.use(VueResouse)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

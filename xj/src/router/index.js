import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'
import Test2 from '@/components/test2'
import Zujian_chuanzhi_test from '@/components/zujian_chuangzhi_test/zujian_chuanzhi_test'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'default',
      component: Test
    },
    {
      path:'/',
      name:'test',
      component:Test
    },
    {
      path:'/test2',
      name:'test2',
      component:Test2
    },
    {
      path:'/zjcz',
      name:'zujian_chuanzhi_test',
      component:Zujian_chuanzhi_test
    },
    {
      path:'/count',
      name:'count',
      component:Count
    }
  ]
})

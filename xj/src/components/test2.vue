<template>
  <div class="section">


    <div class="test_header">
      <p>小金的第二页</p>
      <button class="backbtn" @click="$router.back('test1')">返回</button>
    </div>

    <!--图表-->
    <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">v-charts  适配有问题！! !</p>
    <div class="test_flex12">
      <ve-line :data="chartData" :settings="chartSettings" :height="chartsheight"></ve-line>
    </div>

    <!--百度搜索阿贾克斯-->
    <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">百度搜索</p>
    <div class="test_flex13">
      <input placeholder="请输入关键字" class="textfield" type="text" v-model="keyword" @keyup="gogogo($event)" @keydown.down.prevent="selectDown"
             @keydown.up.prevent="selectUp">
      <ul>
        <li class="text-center" v-for="(value,index) in myData"><span class="text-success textprimary" :class="{gray:index==now}">{{value}}</span></li>
      </ul>
      <p ><h2 v-show="myData.length==0" class="text-warning text-center">(*^__^*)暂时没有数据</h2></p>
    </div>

    <!--三级联动-->
    <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">测试三级联动</p>
    <div class="test_flex4">
      <p class="btn" @click="picker1()">测试型号1</p>
      <p class="btn" @click="picker2()">测试型号2</p>
      <p class="btn" @click="picker3()">测试型号3</p>

      <div class="text">
        您选择的为：<input type="text" readonly="readonly" id="nowValue">
      </div>

    </div>



  </div>
</template>

<script>
  import VeLine from 'v-charts/lib/line'
  import cityData from './test_sanjiliandong/city'
  import Picker from './test_sanjiliandong/picker.min'


  export default{
    data () {
      return {
        chartData: {
          columns: ['日期', '余额', '比率'],
          rows: [
            { '日期': '1月1日', '余额': 123, '比率': 0.3 },
            { '日期': '1月2日', '余额': 1223, '比率': 0.6 },
            { '日期': '1月3日', '余额': 2123, '比率': 0.9 },
            { '日期': '1月4日', '余额': 4123, '比率': 0.12 },
            { '日期': '1月5日', '余额': 3123, '比率': 0.15 },
            { '日期': '1月6日', '余额': 7123, '比率': 0.20 }
          ]
        },
        chartSettings: {},
        chartsheight:'4rem',
        keyword:'',
        now:-1,
        myData:[]
      }
    },
    components:{
        VeLine
    },
    methods:{
      gogogo : function (event) {
//        if(event.keyCode==38||event.keyCode==40)return;
//        if(event.keyCode==13){
//          window.open('https://www.baidu.com/s?wd='+this.keyword);
//          this.keyword=''
//        }
        this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
          {//请求参数
            params: {
              wd:this.keyword
            },
            jsonp:'cb'
          }).then(function(res){
              this.myData = JSON.parse(res.bodyText).s
//              console.log(this.myData)
          },function(){
            //console.log(1)
          });

      },
      selectDown:function () {
        this.now++;
        if(this.now==this.myData.length)this.now=-1;
        this.keyword=this.myData[this.now];
      },
      selectUp:function () {
        this.now--;
        if(this.now==-2)this.now=this.myData.length-1;
        this.keyword=this.myData[this.now];
      },

      picker1:function () {
        var nowValue = document.getElementById('nowValue')
        new Picker({
          "title": '请选择',//标题(可选)
          "defaultValue": nowValue.value,//默认值（可选）
          "type": 1,//需要联动级数[1、2、3]（可选、不传时默认获取数据的深度,最多3级）
          "data": cityData,//数据(必传)
          "keys": {
            "id": "Code",
            "value": "Name",
            "childData": "level"//最多3级联动
          },//数组内的键名称(必传，id、text、data)
          "callBack": function (val) {
            //回调函数（val为选择的值）
            nowValue.value = val
          }
        })
      },

      picker2:function () {
        var nowValue = document.getElementById('nowValue');
        new Picker({
          "title": '请选择',//标题(可选)
          "defaultValue": nowValue.value,//默认值-多个以空格分开（可选）
          "type": 2,//需要联动级数[1、2、3]（可选）
          "data": cityData,//数据(必传)
          "keys": {
            "id": "Code",
            "value": "Name",
            "childData": "level"//最多3级联动
          },//数组内的键名称(必传，id、text、data)
          "callBack": function (val) {
            //回调函数（val为选择的值）
            nowValue.value = val
          }
        })
      },

      picker3: function() {
        var nowValue = document.getElementById('nowValue');
        new Picker({
          "title": '请选择',//标题(可选)
          "defaultValue": nowValue.value,//默认值-多个以空格分开（可选）
          "data": cityData,//数据(必传)
          "keys": {
            "id": "Code",
            "value": "Name",
            "childData": "level"//最多3级联动
          },//数组内的键名称(必传，id、text、data)
          "callBack": function (val) {
            //回调函数（val为选择的值）
            nowValue.value = val;
          }
        })
      }

    }

  }
</script>

<style lang="less">
  @import '../components/test.less';
  @import './test_sanjiliandong/picker.css';
.section {
 text-align: center;
 background-color: white;
 height: 100%;
}

.test_header{
  position: relative;
  height: 1rem;
  .bj(red);
  .backbtn{
    position: absolute;
    text-align: center;
    left:.2rem;
    top:.2rem;
    background: cyan;
    .bk(.04rem,yellow);
    width: 1.5rem;
    height: .6rem;
    color: red;
    font-size: .26rem;
  }
  p{
    line-height: 1rem;
    text-align: center;
    .ztys;
  }
}

.test_flex12{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;

  min-height: 1rem;
}
/*.ve-line{*/
  /*height:4rem!important;*/
/*}*/

.test_flex13{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@grey);
  min-height: 5rem;
  background: url("../assets/image/06142Z7-1-14Z5.jpg") center no-repeat;
  background-size: cover;
  .textfield{
    outline: none;
    border: none;
    .bk(.04rem,white);
    background: transparent;
    .midlab(.4rem,white);
    margin: .2rem;
    padding: .2rem;
  }
  .text-center{
    .midlab(.3rem,white);
  }
  .text-warning{
    .midlab(.5rem,orange);
  }

}


.test_flex4{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  min-height: 1rem;
  .btn{
    width: 4rem;
    height: 1rem;
    margin: .2rem;
    background: red;
    .midlab(.4rem,white);
    line-height: 2.5;
    .bk(.04rem,yellow);
  }
  .text{
    background: #f1f1f1;
    padding: 0.2rem 0 0.2rem 0.3rem;
    line-height: 0.55rem;
    border-radius: 0.05rem;
    .midlab(.3rem,black);
    input{
     .midlab(.3rem,black);
    }
  }

}






</style>

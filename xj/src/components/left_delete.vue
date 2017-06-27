<!--<template>-->
  <!--<div class="slider_delete" :style="{webkitTransform:'translate3d('+transformX+'rem,0,0)'}"-->
       <!--@touchstart.stop="touchStart($event)"-->
       <!--@touchend.stop="touchEnd($event)"-->
       <!--@touchmove.stop="touchMove($event)">-->
    <!--<slot></slot>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--/*-->
   <!--* 滑动配置。distance 滑动距离-->
   <!--*/-->
  <!--export default({-->
    <!--data(){-->
      <!--return {-->
        <!--startPos:{x:0,y:0},-->
        <!--endPos:{x:0,y:0},-->
        <!--transformX:0,-->
        <!--transformStartX:0,-->

      <!--}-->
    <!--},-->
    <!--props:['sliderConf'],-->
    <!--methods:{-->
      <!--touchStart(e){-->
        <!--e.preventDefault();-->
        <!--this.startPos.x = e.targetTouches[0].screenX;-->
        <!--this.transformStartX = this.transformX;-->
      <!--},-->
      <!--touchMove(e){-->
        <!--e.preventDefault();-->
        <!--var x = e.targetTouches[0].screenX;-->
        <!--var temp = (x - this.startPos.x)/75;-->
        <!--if(temp > this.sliderConf.distance || (this.transformX == 0 && temp > 0) ){-->
          <!--this.transformX = 0;-->
        <!--}else{-->
          <!--this.transformX =this.transformStartX + temp;-->
        <!--}-->
      <!--},-->
      <!--touchEnd(e){-->
        <!--e.preventDefault();-->
        <!--if(this.transformX > 0){-->
          <!--this.transformX = 0;-->
        <!--}-->
        <!--if(this.transformX < 0){-->
          <!--this.transformX = -this.sliderConf.distance;-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--})-->
<!--</script>-->
<!--<style>-->
  <!--.slider_delete{-->
    <!--position: absolute;-->
    <!--left: 0;-->
    <!--z-index: 100;-->
  <!--}-->
<!--</style>-->

<template>
  <div class="left-delete">
    <div class="move"
         @touchstart="_touchStart"
         @touchmove="_touchMove"
         @touchend="_touchEnd"
         :style="txtStyle">
      <slot></slot>
    </div>
    <div class="deleteIcon" :style="zIndex">
      <div class="first" @click.prevent="deleteItem(index)"></div>
      <div class="second" @click.prevent="shoucang(index)"></div>
    </div>
    <!--<div class="deleteIcon" :style="zIndex"  @click.prevent="deleteItem(index)"></div>-->
  </div>
</template>

<script>
  export default {
    props: {
      index: Number
    },
    data () {
      return {
        startX: 0,       //触摸位置
        moveX: 0,       //滑动时的位置
        disX: 0,       //移动距离
        txtStyle: '',
        delWidth: 400,
        top: '',
        zIndex: 'z-index:-1'
      }
    },
    methods: {
      _touchStart: function(ev) {
        ev = ev || event;
        if(ev.touches.length == 1){
          // 手指按下的时候记录按下的位置
          this.startX = ev.touches[0].clientX;
          console.log(this.startX)
        }
      },
      _touchMove: function(ev) {
        ev = ev || event;
        if(ev.touches.length == 1) {
          // 滑动过程中的实时位置
          this.moveX = ev.touches[0].clientX
          // 滑动过程中实时计算滑动距离
          this.disX = this.startX - this.moveX;
          // console.log('disX==>',this.disX)
          // 如果是向右滑动或者只是点击，不改变滑动位置
          if(this.disX < 0 || this.disX == 0) {
            // console.log('没有移动');
            this.txtStyle = "transform:translateX(0rem)";
          }else if (this.disX > 0) {
//            如果是向左滑动，则实时给这个根元素一个向左的偏移-left，当偏移量到达固定值delWidth时，固定元素的偏移量为 delWidth
            this.txtStyle = "transform:translateX(-" + this.disX/100 + "rem)";
            if (this.disX >= this.delWidth/100) {
              this.txtStyle = "transform:translateX(-" + this.delWidth/100 + "rem)";
              this.zIndex = "z-index:" + 10 + "rem";
            }
          }
        }
      },
      _touchEnd: function(ev) {
        if (event.changedTouches.length == 1) {
          this.startX = 0;
          this.zIndex = "z-index:" + -1 + "rem";
          console.log(event.changedTouches[0].clientX)
          // 手指移动结束后的水平位置
          let endX = event.changedTouches[0].clientX;
          // 触摸开始与结束,手指移动的距离
          this.disX = this.startX - endX;
          //如果距离小于删除按钮的1/2，不显示删除按钮
        }
      },
      deleteItem: function(index) {
        this.$emit('deleteItem', index);
      },
      shoucang: function (index) {
        this.$emit('shoucang', index);
      }
    }
  }
</script>

<style>
  .left-delete{
    width:100%;
    height:100%;
    position:relative;
    z-index:2;
    border-top: 2px solid white;
  }
  .move{
    position: relative;
  }
  .deleteIcon{
    width: 4rem;
    height:100%;
    position: absolute;
    right:0;
    top:0;
    background: blanchedalmond;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    /*background: url(".././assets/image/20130822051152805.jpg") no-repeat;*/
    /*background-size: contain;*/
    /*background:url(./../../assets/main/4.png) no-repeat;*/
    /*background-size: contain;*/
  }
  .first{
    width: 2rem;
    height: 100%;
    background: gray;

  }
  .second{
    width: 2rem;
    height: 100%;
    background: red;

  }

</style>

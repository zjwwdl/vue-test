<template>
  <div class="mainbody">
    <div class="main">
      <!--title playerImg1 player1 date (left)||(right)playerImg2 player2-->
      <div class="item" v-for="game in games">
         <div class="left">
           <img v-lazy="game.playerImg1">
           <p>{{game.player1}}</p>
           <p style="text-align: right;margin-right: -.5rem;">{{game.date}}</p>
         </div>
         <div class="right">
           <img v-lazy="game.playerImg1">
           <p>{{game.player2}}</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['games']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../components/test.less';
.mainbody{
  .bj;
}
.main{
  display: flex;
  flex-direction: column;
  padding: .2rem;
  min-height: 1rem;
}
.item{
  display: flex;
  flex-direction: row;
  .bk(.02rem,red,.2rem);
  margin-bottom: .2rem;
  min-height: 1rem;
  .left{
    flex: 1;
    display: flex;
    flex-direction: column;
    /*.bj(cyan);*/
    img{
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    display: block;
    }
    p{
     .midlab(.32rem,black);
      text-align: center;
    }
  }
  .right{
    flex: 1;
    /*.bj(peachpuff);*/
    img{
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 auto;
      display: block;
    }
    p{
      .midlab(.32rem,orange);
      text-align: center;
    }
  }


}
</style>

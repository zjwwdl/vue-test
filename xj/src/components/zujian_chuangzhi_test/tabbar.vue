<template>
  <div class="tabbar" v-model="selected">
    <div class="tabbar__item" @click="setIndex(1)">
     <img src="../../assets/image/competition.png" v-if="selected != 1">
     <img src="../../assets/image/competition--active.png" v-if="selected === 1">
     <p class="icon" v-if="selected != 1">赛事</p>
     <p class="icon__active" v-if="selected === 1">赛事</p>
    </div>
    <div class="tabbar__item" @click="setIndex(2)">
      <img src="../../assets/image/community.png" v-if="selected != 2">
      <img src="../../assets/image/community--active.png" v-if="selected === 2">
      <p class="icon" v-if="selected != 2">社区</p>
      <p class="icon__active" v-if="selected === 2">社区</p>
    </div>
    <div class="tabbar__item" @click="setIndex(3)">
      <img src="../../assets/image/agenda.png" v-if="selected != 3">
      <img src="../../assets/image/agenda--active.png" v-if="selected === 3">
      <p class="icon" v-if="selected != 3">赛程</p>
      <p class="icon__active" v-if="selected === 3">赛程</p>
    </div>
    <div class="tabbar__item" @click="setIndex(4)">
      <img src="../../assets/image/mine.png" v-if="selected != 4">
      <img src="../../assets/image/mine--active.png" v-if="selected === 4">
      <p class="icon" v-if="selected != 4">我的</p>
      <p class="icon__active" v-if="selected === 4">我的</p>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected:1
      }
    },
    methods: {
      setIndex (n) {
        this.selected = n
      }
    },
//    状态传回父容器
    watch: {
      selected: function (value) {
        console.log(value)
        this.$emit('ziChuanfu',value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../components/test.less';
.tabbar{
  position: fixed;
  bottom: 0;
  height: 1.33rem;
  width: 100%;
  background: @white;
  opacity: .95;
  display: flex;
  .tabbar__item{
    text-align: center;
    flex: 1;
    img{
      margin: 0 auto;
      display: block;
      margin-top: .25rem;
      width: .66rem;
      height: .66rem;
    }
    .icon{
      margin: 0 auto;
      font-size: .2rem;
      color: #d2d2d2;
    }
    .icon__active{
      color: #3466f6;
      font-size: .2rem;
    }
  }
}


</style>

<template>
  <div class="">

    <div class="overlayer">
      <div class="alert">
       <div class="up">
        <img src="../assets/image/20130822051152805.jpg" class="img">
        <p class="title">标题标题标题</p>
        <p class="des">描述描述描述</p>
       </div>

       <div class="bottom">
         <div class="cancel" @click="cancel">取消</div>
         <div class="ok" @click="ok">确定</div>
       </div>


      </div>
    </div>

  </div>
</template>

<script>
  export default {
      methods:{
        cancel: function() {
          this.$emit('cancel')
        },
        ok :function () {
          this.$emit('ok')
        }
      }
  }
</script>

<style lang="less" scoped>

</style>

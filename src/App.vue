<template>
  <!-- 加载router跳转后的html,这一句必须写，不然没东西 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  beforeCreate(){
    this.$router.push('/index');
  }
}
</script>

<style>
  body{
    margin:0;
    font-family: "微软雅黑";
  }
  h1,h2,h3,p,ul{
    margin:0;
  }
  input{
    padding:0;
  }
</style>

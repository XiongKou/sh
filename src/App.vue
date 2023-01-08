<template>
  <!-- 加载router跳转后的html,这一句必须写，不然没东西 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$router.push("/index");
  },
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: "微软雅黑";
  height: 100%;
}
h1,
h2,
h3,
p,
ul {
  margin: 0;
}
input {
  padding: 0;
}
#app {
  height: 100%;
}
</style>

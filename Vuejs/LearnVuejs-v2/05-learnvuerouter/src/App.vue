<template>
  <div id="app">
    <!-- <router-link to="/Home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/About" tag="button" replace active-class="active">关于</router-link> -->
    <!-- 可以在./router/index.js配置activeClass -->
    <!-- <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      // 通过代码的方式修改router, 注意不要绕过vue-router
      // this.$router.push('/Home');
      this.$router.replace('/Home');
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/About');
      this.$router.replace('/About');
      console.log('aboutClick');
    }
  }
}
</script>

<style>
/* 相当于active-class */
/* .router-link-active {
  color: #f00;
} */

.active {
  color: #f00;
}

</style>

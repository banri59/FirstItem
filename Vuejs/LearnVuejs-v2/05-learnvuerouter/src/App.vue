<template>
  <div id="app">
    <!-- <router-link to="/Home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/About" tag="button" replace active-class="active">关于</router-link> -->
    <!-- 可以在./router/index.js配置activeClass -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link> -->
    <!-- query配置: 2. 对象里面添加query属性 -->
    <!-- <router-link :to="{path: '/profile', query: {name: 'banri', age: 18, height: 1.78}}" tag="button">档案</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
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
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'baili',
          age: 19,
          height: 1.79
        }
      })
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

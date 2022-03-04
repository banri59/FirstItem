<template>
  <div>
    <h1>我是用户界面</h1>
    <p>我是用户的相关信息</p>
    <!-- route是指router对象里面处于活跃状态的route -->
    <h2>{{userId}}</h2> 
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>

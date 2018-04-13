<template>
  <div class="container clearfix">
      <div class="left">
        <h2><nuxt-link to="/">Players</nuxt-link></h2>
        <ul class="players">
          <li v-for="user in users" :key="user.id">
            <nuxt-link :to="'/manager/'+user.id">{{ user.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <nuxt-child :key="$route.params.id"/>
      </div>
    </div>
</template>
<script>
export default {
  asyncData ({ env }) {
    return { users: env.users }
  }
}
</script>
<style lang="css" scoped>
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  float: left;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  float: right;
}
</style>

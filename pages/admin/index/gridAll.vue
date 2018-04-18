<template>
<b-container fluid>
  <b-row>
    <b-col sm="6" class="sidebar" id="sidebar">
      <v-menu/>
    </b-col>
    <b-col sm="6">
      <v-skills/>
    </b-col>
  </b-row>
  <b-row>
    <b-col sm="6" class="sidebar" id="sidebar">
      <v-users/>
    </b-col>
    <b-col sm="6">
      <v-skills/>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
import menu from './menu'
import skills from './skills'
import users from './users'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    'v-menu': menu,
    'v-skills': skills,
    'v-users': users
  }
}
</script>
<style lang="css" scoped>
</style>

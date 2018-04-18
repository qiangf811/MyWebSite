<template>
<div class="admin">
  <b-container fluid>
    <b-row class="c-c">
      <b-col sm="2" class="sidebar" id="sidebar">
        <ul class="players">
          <li class="NavBar-title">NavBar</li>
          <li v-for="user in users" :key="user.id" class="clearfix">
            <span class="icon-uniE62E"></span>
            <router-link active-class="router-link-active" :to="'/admin'+user.href">{{ user.name }}</router-link>
          </li>
        </ul>
      </b-col>
      <b-col class="content">
        <div class="admin-head">
          <div class="left">
          <h1> {{itemName}}详情 {{loginName}} 你好</h1>
          </div>
          <div class="right">

          </div>
        </div>
        <div class="admin-child">
          <nuxt-child />
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import path from 'path'
export default {
  layout: 'admin',
  // middleware: 'auth',
  asyncData({
    env,store
  }) {
    return {
      loginName: store.state.authUser ? store.state.authUser.username : '',
      users: env.users,
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  },
  created() {
    // this.$router.push('/admin' + this.users[0].href)
  },
  computed: {
    itemName() {
      let ds = this.$router.currentRoute.path
      return path.basename(ds)
    }
  }
}
</script>
<style lang="css" scoped>
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.admin{
  height: 100%;
}
.sidebar{
  max-width:260px;
  background-color:#3bc0b5;
  overflow: auto;
  max-height: 100%;
  height: 100%;
  -webkit-transition-property: top,bottom;
  transition-property: top,bottom;
  -webkit-transition-duration: .2s,.2s;
  transition-duration: .2s,.2s;
  -webkit-transition-timing-function: linear,linear;
  transition-timing-function: linear,linear;
  -webkit-overflow-scrolling: touch;
  background-image: url('/images/sidebar-5.jpg');
  background-size: cover;
}
.sidebar:before {
    opacity: .33;
    background: #000000;
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
}
.sidebar:after{
  background: #1dc7ea;
  background: -moz-linear-gradient(top, #1dc7ea 0%, #943bea 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #1dc7ea), color-stop(100%, #943bea));
  background: -webkit-linear-gradient(top, #1dc7ea 0%, #943bea 100%);
  background: -o-linear-gradient(top, #1dc7ea 0%, #943bea 100%);
  background: -ms-linear-gradient(top, #1dc7ea 0%, #943bea 100%);
  background: linear-gradient(to bottom, #1dc7ea 0%, #943bea 100%);
  background-size: 150% 150%;
  opacity: .77;
  display: block;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
.container-fluid{
  height: 100%;
}
.c-c{
  height: 100%;
}
.players{
  z-index: 8;
  position: absolute;
  left: 0;
  top: 0;
}
ul{
  width: 100%;
}
ul li{
  display: block;
  color:#fff;
  width: 100%;
  line-height: 40px;
  font-size: 16px;
  color: #FFFFFF;
  opacity: .86;
  border-radius: 4px;
  padding: 5px 15px;
}
ul li a{
  color:#fff;
  display: block;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
}
ul li span{
  float: left;
  font-size: 28px;
  margin: 6px 14px 6px 26px;
}
.NavBar-title{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
  font-weight: 600;
  margin-bottom: 16px;
}
.router-link-active {
  color: #FFFFFF;
  opacity: 1;
  background: rgba(255, 255, 255, 0.23);
}
ul li a:hover{
  color: #FFFFFF;
  opacity: 1;
  background: rgba(255, 255, 255, 0.23);
}
.content{
  height: 100%;
  overflow: auto;
  width: calc(100% - 260px);
  padding: 0;
}
.admin-head{
  height: 60px;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fff;
}
.admin-child{
  padding: 20px;
}
</style>

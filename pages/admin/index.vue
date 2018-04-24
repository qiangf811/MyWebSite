<template>
<div class="admin">
  <b-container fluid>
    <b-row class="c-c">
      <b-col sm="2" class="sidebar" id="sidebar">
        <ul class="players">
          <li class="NavBar-title">NavBar</li>
          <li v-for="(user,index) in users" :key="user.id" class="clearfix">
            <span :class="'icon-'+iconMaps[index]"></span>
            <router-link active-class="router-link-active" :to="'/admin'+user.href">{{ user.name }}</router-link>
          </li>
        </ul>
      </b-col>
      <b-col class="content">
        <div class="admin-head clearfix">
          <div class="left">

          </div>
          <div class="right clearfix">
            <div class="notice" v-show="user.role==3" @mouseenter="isShowNotice=true" @mouseleave="isShowNotice=false" :class="{'admin-active':isShowNotice}">
              <i class="icon-uniE677 icon">
                    <span class="redNotice" v-show="notices.length>0">{{notices.length}}</span>
                </i>
              <transition name="fade">
                <ul class="noticeContent" v-show="isShowNotice">
                  <li class="notice-head"><strong>you have got {{notices.length}} notifications</strong></li>
                  <li v-for="notice in notices" :key="notice._id" @click="showNoticeDetail(notice)">
                    <div class="content-detail">
                      <span :title="notice.message">{{notice.message}}--by {{notice.from}}</span>
                    </div>
                    <div class="notice-time">
                      <small class="text-muted">{{formaterTime(notice.createAt)}}</small>
                    </div>
                  </li>
                  <li class=""><span>see all the notifications</span></li>
                </ul>
              </transition>
            </div>
            <div class="user" @mouseenter="isShowUser=true" @mouseleave="isShowUser=false">
              <span class="userName">{{user.username}}</span>
              <b class="caret"></b>
              <span class="user-img">
                <img src="/images/a0.jpg" class="avatar">
              </span>
              <transition name="fade">
                <ul class="userContent" v-show="isShowUser">
                  <li class="">
                    <span @click="logout">logout</span>
                  </li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
        <div class="admin-child">
          <nuxt-child />
        </div>
      </b-col>
    </b-row>
  </b-container>
  <NoticeDetail ref="noticeModal"/>
</div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import NoticeDetail from '~/components/notice/detail'
export default {
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({
    env,
    store
  }) {
    let {
      data
    } = await axios.get('http://localhost:8080/api/notice')

    return {
      user: store.state.authUser ? store.state.authUser : {
        username: 'John.Smith',
        role: 0
      },
      notices: data,
      users: env.users
    }
  },
  data () {
    return {
      iconMaps: ['uniE605', 'uniE60F', 'uniE62E', 'uniE648', 'uniE64F', 'uniE664', 'uniE677', 'uniE6C0'],
      isShowNotice: false,
      isShowUser: false
    }
  },
  methods: {
    async fetchNotice () {
      try {
        let {
          data
        } = await axios.get('http://localhost:8080/api/notice')
        this.notices = data
      } catch (e) {
        console.error(e)
      }
    },
    formaterTime (time) {
      if (time) {
        return moment(time).fromNow()
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
        window.location = '/login'
      } catch (e) {
        console.log(e)
      }
    },
    showNoticeDetail (notice) {
      this.$refs.noticeModal.show(notice)
    }
  },
  mounted () {
    this.timer = setInterval(this.fetchNotice, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  components: {
    NoticeDetail
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
  width: 260px;
  min-width: 260px;
  /* background-color:#3bc0b5; */
  background-color:#3a3f51;
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
.players li a{
  color:#fff;
  display: block;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
}
.players li span{
  float: left;
  font-size: 28px;
  margin: 6px 14px 6px 26px;
}
.NavBar-title{
  height: 50px;
  line-height: 50px;
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
  height: 50px;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fff;
  position: fixed;
  width: calc(100% - 260px);
  top: 0;
  right: 0;
  z-index: 9;
}
.admin-child{
  padding:  70px 20px 20px 20px;
}
.left{
  float: left;
}
.right{
  float: right;
  font-size: 0;
}
.notice{
  float: left;
  height: 50px;
  line-height: 50px;
  width: 50px;
  padding-left: 14px;
  cursor: pointer;
  display: inline-block;
  position: relative;
}
.notice:hover{
  background: #eee;
}
.icon{
  font-size: 19px;
  line-height: 50px;
  position: relative;
  top: 2px;
  color: #000;
}
.redNotice{
  color: #ffffff;
  background-color: #f05050;
  border-radius: 10px;
  width: 16px;
  height: 16px;
  position: absolute;
  top: -6px;
  line-height: 16px;
  right: -6px;
  font-size: 10px;
  font-weight: 600;
  text-align: center
}
.caret{
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  margin-top: -8px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.user{
  float: left;
  display: inline-block;
  height: 50px;
  padding: 0 10px;
  cursor: pointer;
}
.user:hover{
  background: #eee;
}
.admin-active{
  background: #eee;
}
.user-img{
  display: inline-block;
  width: 40px;
  border-radius: 50%;
  margin-left: 6px;
}
.avatar{
  width: 100%;
  border-radius: 500px;
  margin-bottom: 8px;
}
.userName{
  display: inline-block;
  font-size: 14px;
  line-height: 48px;
}
.noticeContent{
  width: 320px;
  right: 0;
  top: 50px;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: block;
  background-color: #fff;
  max-height: 210px;
  overflow: auto;
}
.userContent{
  width: 120px;
  right: 0;
  top: 50px;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: block;
  background-color: #fff;
}
.userContent li{
  display: block;
  color: #000;
  font-size: 14px;
  line-height: 26px;
  border-bottom: 1px solid #edf1f2;
}
.userContent li:hover{
  background-color: #f6f8f8;
}
.noticeContent li{
  display: block;
  color: #000;
  font-size: 14px;
  line-height: 26px;
  border-bottom: 1px solid #edf1f2;
}
.noticeContent li:hover{
  background-color: #f6f8f8;
}
.noticeContent li:last-child{
  border: none;
}
.notice-head{
  background-color: #edf1f2;
  height: 40px;
  color: #58666e;
  font-size: 14px;
  border: none;
}
.notice-time{
  margin-top: -6px;
}
.noticeContent .content-detail{
  max-width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

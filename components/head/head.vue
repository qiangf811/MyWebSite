<template>
<div id="">
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">FengQiang</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item v-for="item in menu" v-if="menuShow(item.role)" :key="item.id" :to="item.href" active-class="router-link-active">{{$t('links["'+item.name+'"]') }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" :placeholder="$t('links.search')" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">{{$t('links.search')}}</b-button>
        </b-nav-form>
        <b-nav-item-dropdown :text="$t('links.lang')" right>
          <b-dropdown-item @click="changeLang('zh')">{{ $t('links.chinese') }}</b-dropdown-item>
          <b-dropdown-item @click="changeLang('en')">{{ $t('links.english') }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  data: () => ({

  }),
  props: ['menu'],
  methods: {
    changeLang (lang) {
      this.$store.commit('SET_LANG', lang)
      this.$i18n.locale = lang
    },
    menuShow (role) {
      let show = 0
      if (this.$store.state.authUser) {
        show = (role <= this.$store.state.authUser.role) ? 1 : 0
      } else {
        show = (role === 0) ? 1 : 0
      }
      return show
    },
    async signout () {
      try {
        await this.$store.dispatch('logout')
        window.location = '/login'
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>

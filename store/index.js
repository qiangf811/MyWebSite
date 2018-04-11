import axios from 'axios'
export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'en',
  authUser: null
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_USER: function (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data.user)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('登录密码错误')
      } else if (error.response && error.response.status === 404) {
        throw new Error('用户名不存在')
      }
      throw error
    }
  },
  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}

import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import results from './modules/results'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  
  },
  actions: {

  },
  modules: {
  users,
  results
  }
})

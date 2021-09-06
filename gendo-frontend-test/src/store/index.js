import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  repos: null,
  filterRepos: '',
  starred: null,
  filterStarred: '',
  profile: null
}

const mutations = {
  setFilterRepos: (state, filter) => state.filterRepos = filter,
  setFilterStarred: (state, filter) => state.filterStarred = filter,
  setRepos: (state, repos) => state.repos = repos,
  setStarred: (state, starred) => state.starred = starred,
  setProfile: (state, profile) => state.profile = profile
}

const actions = {
  setFilterRepos ({ commit }, filter) {
    commit('setFilterRepos', filter)
  },
  setFilterStarred ({ commit }, filter) {
    commit('setFilterStarred', filter)
  },
  async setProfile ({ commit }) {
    const response = await axios.get('https://api.github.com/users/jbaladao')
    if (response.data) {
      commit('setProfile', response.data)
    } else {
      throw Error('Error: could not get the data')
    }
  },
  async setRepos ({ commit }) {
    const response = await axios.get('https://api.github.com/users/jbaladao/repos')
    if (response.data) {
      commit('setRepos', response.data)
    } else {
      throw Error('Error: could not get the data')
    }
  },
  async setStarred ({ commit }) {
    const response = await axios.get('https://api.github.com/users/jbaladao/starred')
    if (response.data) {
      commit('setStarred', response.data)
    } else {
      throw Error('Error: could not get the data')
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

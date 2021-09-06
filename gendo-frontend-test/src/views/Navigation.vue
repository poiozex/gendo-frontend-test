<template>
  <nav class="profile__navigation">
    <router-link
      to="/repos"
      custom
      v-slot="{ href, navigate, isActive }"
    >
      <button
        class="profile__navigation--btn"
        :class="{ 'profile__navigation--btn-active': isActive }"
        :href="href"
        @click="navigate"
        :active="isActive"
      >
        Repos
        <span v-if="repos">
          {{ totalRepos }}
        </span>
      </button>
    </router-link>
    <router-link
      to="/starred"
      custom
      v-slot="{ href, navigate, isActive }"
    >
      <button
        class="profile__navigation--btn"
        :class="{ 'profile__navigation--btn-active': isActive }"
        :href="href"
        @click="navigate"
        :active="isActive"
      >
        Starred
        <span v-if="starred">
          {{ totalStarred }}
        </span>
      </button>
    </router-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapState({
      repos: state => state.repos,
      starred: state => state.starred
    }),
    totalRepos () {
      const repos = this.repos.filter(repo => {
        return repo.name.toLowerCase().includes(this.$store.state.filterRepos.toLowerCase())
      })
      return repos.length
    },
    totalStarred () {
      const starred = this.starred.filter(starred => {
        return starred.full_name.toLowerCase().includes(this.$store.state.filterStarred.toLowerCase())
      })
      return starred.length
    }
  }
}
</script>

<style lang="scss">
$slate-grey: #5c646d;
$rusty-orange: #e36209;
$pale-grey: #e1e4e8;

.profile__navigation {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid $pale-grey;
  button.profile__navigation--btn {
    cursor: pointer;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    background-color: white;
    border: none;
    font-size: 16px;
    font-weight: 400;
    color: $slate-grey;
    span {
      font-size: 14px;
      font-weight: 700;
      color: $slate-grey;
      background-color: $pale-grey;
      padding: 2px 5px;
      border-radius: 10px;
    }
  }
  button.profile__navigation--btn-active {
    font-weight: 700;
    color: black;
    padding: 0;
    border-bottom: 4px solid $rusty-orange;
  }
}
</style>
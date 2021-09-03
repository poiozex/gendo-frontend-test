<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="../assets/mark.png"
        alt="Marca do github"
      >
      <h1><strong>Github</strong> profiles</h1>
    </div>
    <div class="header__profile">
      <img
        src="https://avatars.githubusercontent.com/u/3275772?v=4"
        alt="Profile foto"
      >
      <div class="header__profile--info">
        <h2>Roger Ramos</h2>
        <h3>Front End Dev and UI Designer</h3>
      </div>
    </div>
    <nav class="header__navigation">
      <router-link
        to="/repos"
        custom
        v-slot="{ href, navigate, isActive }"
      >
        <button
          class="header__navigation--btn"
          :class="{ 'header__navigation--btn-active': isActive }"
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
          class="header__navigation--btn"
          :class="{ 'header__navigation--btn-active': isActive }"
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
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
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
        return starred.name.toLowerCase().includes(this.$store.state.filterStarred.toLowerCase())
      })
      return starred.length
    }
  }
}
</script>

<style lang="scss">
$slate-grey: #5c646d;
$warm-grey: #999999;
$pale-grey: #e1e4e8;
$rusty-orange: #e36209;

header.header {
  width: 100%;
  .header__logo {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: black;
    img {
      padding-left: 30px;
    }
    h1 {
      color: white;
      line-height: 24px;
      font-size: 22px;
      font-weight: 400;
      padding-left: 15px;
      strong {
        font-weight: 700;
      }
    }
  }
  .header__profile {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-left: 30px;
    }
    .header__profile--info {
      h2 {
        font-weight: 700;
        color: black;
        font-size: 18px;
        margin: 5px 0 5px 10px;
      }
      h3 {
        font-weight: 400;
        color: $warm-grey;
        font-size: 14px;
        margin: 5px 0 5px 10px;
      }
    }
  }
  .header__navigation {
    width: 100%;
    height: 50px;
    border-bottom: 2px solid $pale-grey;
    button.header__navigation--btn {
      box-sizing: border-box;
      width: 50%;
      max-width: 250px;
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
    button.header__navigation--btn-active {
      font-weight: 700;
      color: black;
      padding: 0;
      border-bottom: 4px solid $rusty-orange;
    }
  }
}
</style>
<template>
  <div id="app">
    <Header />
    <main>
      <ProfileDesktop v-if="screenWidth >= 1200" />
      <Profile v-if="screenWidth < 1200" />
      <div class="content">
        <Navigation />
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>

import Header from './views/Header.vue'
import ProfileDesktop from './views/ProfileDesktop.vue'
import Profile from './views/Profile.vue'
import Navigation from './views/Navigation.vue'

export default {
  components: {
    Header,
    ProfileDesktop,
    Profile,
    Navigation
  },
  data () {
    return {
      screenWidth: window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: "Open Sans", sans-serif;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  margin: 0;
  padding: 0;
}

@media (min-width: 1200px) {
  #app {
    main {
      display: flex;
      div.content {
        margin-top: 30px;
        width: 100%;
        .listRepos__item {
          padding-left: 5px;
        }
        .listStarred__item {
          padding-left: 5px;
        }
        .search {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

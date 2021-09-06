<template>
  <section>
    <Search />
    <ListRepos v-if="this.$store.state.repos" />
  </section>
</template>

<script>

import { mapActions } from 'vuex'

import Search from './Search.vue'
import ListRepos from './ListRepos.vue'

export default {
  name: 'Repos',
  components: {
    Search,
    ListRepos
  },
  methods: {
    ...mapActions([
      'setRepos',
      'setStarred'
    ])
  },
  created () {
    this.setRepos()
    this.setStarred()
  }
}
</script>

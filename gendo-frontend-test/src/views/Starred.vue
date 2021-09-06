<template>
  <section>
    <Search />
    <ListStarred v-if="this.$store.state.starred" />
  </section>
</template>

<script>

import { mapActions } from 'vuex'

import Search from './Search.vue'
import ListStarred from './ListStarred.vue'

export default {
  name: 'Starred',
  components: {
    Search,
    ListStarred
  },
  methods: {
    ...mapActions([
      'setStarred',
      'setRepos'
    ])
  },
  created () {
    this.setStarred()
    this.setRepos()
  }
}
</script>

<template>
  <section>
    <Search />
    <ListRepos />
  </section>
</template>

<script>

import Search from './Search.vue'
import ListRepos from './ListRepos.vue'

export default {
  name: 'Repos',
  components: {
    Search,
    ListRepos
  }
}
</script>

<style lang="scss">
$warm-grey: #999999;
$pale-grey: #e1e4e8;
</style>
<template>
  <form
    class="search"
    @submit.prevent="filterSearch"
  >
    <div class="search__prepend">
      <img src="../assets/search.svg" />
    </div>
    <input
      type="text"
      class="search__input"
      v-model="search"
      placeholder="Filter by name"
      aria-placeholder="Filter by name"
    >
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions([
      'setFilterRepos',
      'setFilterStarred'
    ]),
    filterSearch () {
      if (this.$route.name === 'Repos') {
        this.setFilterRepos(this.search)
      } else if (this.$route.name === 'Starred') {
        this.setFilterStarred(this.search)
      }
    }
  }
}
</script>

<style lang="scss">
$pale-grey: #e1e4e8;

.search {
  display: flex;
  align-items: center;
  margin: 30px 30px 10px 30px;
  border-radius: 7px;
  border: 2px solid $pale-grey;
  .search__prepend {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 40px;
    padding-left: 10px;
    img {
      height: 32px;
      width: 32px;
    }
  }
  input.search__input {
    padding-left: 12px;
    font-size: 16px;
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 5px;
    outline: none;
  }
}

@media (max-width: 500px) {
  .search {
    max-width: 450px;
  }
}
@media (min-width: 501px) {
  .search {
    max-width: 310px;
  }
}
</style>
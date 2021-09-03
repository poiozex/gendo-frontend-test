<template>
  <div class="search">
    <div class="search__prepend">
      <img src="../assets/search.svg" />
    </div>
    <input
      type="text"
      class="search__input"
      v-model="search"
      @keyup.enter.prevent="filterSearch"
      placeholder="Filter by name"
      aria-placeholder="Filter by name"
    >
  </div>
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
$warm-grey: #999999;
$pale-grey: #e1e4e8;

div.search {
  display: flex;
  align-items: center;
  margin: 30px;
  border-radius: 7px;
  border: 2px solid $pale-grey;
  max-width: 400px;
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
</style>
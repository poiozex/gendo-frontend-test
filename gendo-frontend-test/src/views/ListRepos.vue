<template>
  <div class="listRepos">
    <div
      class="listRepos__item"
      v-for="repo in filteredRepos"
      :key="repo.id"
    >
      <a
        :href="repo.html_url"
        target="_blank"
        class="listRepos__item--name"
      >{{ repo.name }}</a>
      <p
        v-if="repo.description"
        class="listRepos__item--description"
      >{{ repo.description }}</p>
      <div class="listRepos__item--languageAndForks">
        <span v-if="repo.language">&lt;&gt;</span>
        <p v-if="repo.language">
          {{ repo.language }}
        </p>
        <img
          :class="{noMargin: !repo.language}"
          src="../assets/fork.svg"
        >
        <p>{{ repo.forks }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListRepos',
  computed: {
    filteredRepos () {
      return this.$store.state.repos.filter(repo => {
        return repo.name.toLowerCase().includes(this.$store.state.filterRepos.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss">
$warm-grey: #999999;
$pale-grey: #e1e4e8;

.listRepos {
  width: 100%;
  animation: slide-right 0.7s ease;
  .listRepos__item {
    padding: 20px 30px;
    color: $warm-grey;
    border-bottom: 2px solid $pale-grey;
    a:link,
    a:visited {
      color: #3498db;
    }
    .listRepos__item--name {
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
    }
    .listRepos__item--description {
      word-break: break-word;
    }
    .listRepos__item--languageAndForks {
      display: flex;
      align-items: center;
      span {
        font-weight: 700;
        font-size: 24px;
        font-family: monospace;
      }
      p {
        padding-left: 7px;
        font-size: 14px;
      }
      img {
        margin-left: 15px;
        stroke: $warm-grey;
        height: 17px;
        width: 17px;
      }
      img.noMargin {
        margin-left: 0;
      }
    }
  }
  .listRepos__item:last-child {
    border-bottom: none;
  }
}

@keyframes slide-right {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
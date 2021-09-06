<template>
  <div class="listStarred">
    <div
      class="listStarred__item"
      v-for="starred in filteredStarred"
      :key="starred.id"
    >
      <a
        :href="starred.html_url"
        target="_blank"
        class="listStarred__item--name"
      ><span>{{ formatStarredName(starred.full_name)[0] }} / </span>{{ formatStarredName(starred.full_name)[1]}}</a>
      <p
        v-if="starred.description"
        class="listStarred__item--description"
      >{{ starred.description }}</p>
      <div class="listStarred__item--starsAndForks">
        <img
          v-if="starred.stargazers_count"
          src="../assets/star.svg"
        >
        <p v-if="starred.stargazers_count">
          {{ starred.stargazers_count }}
        </p>
        <img
          class="listStarred__item--starsAndForks-fork"
          src="../assets/fork.svg"
        >
        <p>{{ starred.forks }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListStarred',
  computed: {
    filteredStarred () {
      return this.$store.state.starred.filter(starred => {
        return starred.full_name.toLowerCase().includes(this.$store.state.filterStarred.toLowerCase())
      })
    }
  },
  methods: {
    formatStarredName (fullName) {
      return fullName.split('/')
    }
  }
}
</script>

<style lang="scss">
$warm-grey: #999999;
$pale-grey: #e1e4e8;

.listStarred {
  width: 100%;
  animation: slide-right 0.7s ease;
  .listStarred__item {
    padding: 20px 30px;
    color: $warm-grey;
    border-bottom: 2px solid $pale-grey;
    a {
      span {
        font-weight: 400;
      }
    }
    a:link,
    a:visited {
      color: #3498db;
    }
    .listStarred__item--name {
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
    }
    .listStarred__item--description {
      word-break: break-word;
    }
    .listStarred__item--starsAndForks {
      display: flex;
      align-items: center;
      p {
        padding-left: 7px;
        font-size: 14px;
      }
      img {
        height: 22px;
        width: 22px;
      }
      img.listStarred__item--starsAndForks-fork {
        margin-left: 15px;
        height: 17px;
        width: 17px;
      }
    }
  }
  .listStarred__item:last-child {
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
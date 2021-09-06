<template>
  <div
    class="profileDesktop"
    v-if="$store.state.profile"
  >
    <div class="profileDesktop__photo">
      <img
        :src="$store.state.profile.avatar_url"
        alt="Profile photo"
      >
    </div>
    <div class="profileDesktop__info">
      <h2>{{ $store.state.profile.name }}</h2>
      <h3>{{ $store.state.profile.bio }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfileDesktop',
  methods: {
    ...mapActions([
      'setProfile'
    ])
  },
  created () {
    this.setProfile()
  }
}
</script>

<style lang="scss">
$warm-grey: #999999;

div.profileDesktop {
  width: 400px;
  .profileDesktop__photo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
    }
  }
  .profileDesktop__info {
    text-align: center;
    h2 {
      font-weight: 700;
      color: black;
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 0;
    }
    h3 {
      margin-top: 5px;
      font-weight: 400;
      color: $warm-grey;
      font-size: 12px;
    }
  }
}
</style>
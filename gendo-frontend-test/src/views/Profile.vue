<template>
  <div
    class="profile"
    v-if="$store.state.profile"
  >
    <img
      :src="$store.state.profile.avatar_url"
      alt="Profile photo"
    >
    <div class="profile__info">
      <h2>{{ $store.state.profile.name }}</h2>
      <h3>{{ $store.state.profile.bio }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
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

div.profile {
  width: 100%;
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
  .profile__info {
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

@media (max-width: 500px) {
  button.profile__navigation--btn {
    max-width: 250px;
  }
}
@media (min-width: 501px) {
  button.profile__navigation--btn {
    max-width: 170px;
  }
}
</style>
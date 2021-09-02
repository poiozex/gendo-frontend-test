<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="../assets/mark.png"
        alt="Marca do github"
      >
      <h1><strong>Github</strong> profiles</h1>
    </div>
    <div class="header__profile">
      <img
        src="https://avatars.githubusercontent.com/u/3275772?v=4"
        alt="Profile foto"
      >
      <div class="header__profile--info">
        <h2>Roger Ramos</h2>
        <h3>Front End Dev and UI Designer</h3>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
$warm-grey: #999999;

header.header {
  width: 100%;
  .header__logo {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: black;
    img {
      padding-left: 30px;
    }
    h1 {
      color: white;
      line-height: 24px;
      font-size: 22px;
      font-weight: 400;
      padding-left: 15px;
      strong {
        font-weight: 700;
      }
    }
  }
  .header__profile {
    display: flex;
    align-items: center;
    margin-top: 20px;
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin-left: 30px;
    }
    .header__profile--info {
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
}
</style>
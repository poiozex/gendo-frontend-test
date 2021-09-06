<template>
  <header class="header">
    <img
      src="../assets/mark.png"
      alt="Marca do github"
    >
    <h1><strong>Github</strong> profiles</h1>
  </header>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
header.header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #24292e;
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
</style>
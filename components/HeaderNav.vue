<template>
  <div class="section">
    <header class="heading">
      <img src="/images/logo.png" alt="" />
      <a href="" class="logo">Online E-Portal</a>

      <div class="links">
        <a href="">Charles</a>
        <a href="">Logout</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: -50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  width: 100%;
}
.heading {
  display: flex;
  justify-content: space-between;
  background-color: #f49c9c;
  padding: 20px;

  .logo {
    font-size: 20px;
  }

  img {
    width: 150px;
  }
}

a {
  color: #d93d3d;
  text-decoration: none;
  font-weight: bold;
}
</style>

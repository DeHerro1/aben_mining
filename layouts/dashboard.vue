<template>
  <div>
    <div class="deposit_vault_container">
      <el-main>
        <SideBar />
        <Nuxt />
        <!-- <Footer /> -->
        <!-- <div class="dash_footer"> -->
        <Footer />
        <!-- </div> -->
      </el-main>
    </div>
  </div>
</template>

<script>
import Footer from '../components/vault/Footer.vue'
import SideBar from '../components/vault/sidebar.vue'
// import Vue from 'vue'
// import global from '~/mixins/global.ts'

// Vue.mixin(global)
export default {
  name: 'DashboardLayout',
  components: {
    Footer,
    SideBar,
  },
}
</script>
<style lang="scss" scoped>
.deposit_vault_container {
  height: 100vh;
}
.dash_footer {
  // position: absolute;
  // bottom: 0;
  z-index: 50;
  width: 100%;
}
@media (min-width: 1024px) {
  .dash_footer {
    position: absolute;
    bottom: 0;
  }
}
// .dash_footer {
//   width: 100%;
//   // margin-top: 20px;
// }
</style>
